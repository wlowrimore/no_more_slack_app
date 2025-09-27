import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Heart, CreditCard } from "lucide-react";

interface DonationFormProps {
  onSuccess: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
  });

  const predefinedAmounts = [10, 25, 50, 100];

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        fontFamily: "system-ui, -apple-system, sans-serif",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError("");

    const finalAmount = isCustom ? parseFloat(customAmount) : amount;

    if (!finalAmount || finalAmount < 1) {
      setError("Please enter a valid donation amount (minimum $1)");
      setIsProcessing(false);
      return;
    }

    if (!donorInfo.name.trim() || !donorInfo.email.trim()) {
      setError("Please provide your name and email");
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment intent on your backend
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(finalAmount * 100), // Convert to cents
          currency: "usd",
          donorName: donorInfo.name,
          donorEmail: donorInfo.email,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error("Card element not found");
      }

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: donorInfo.name,
              email: donorInfo.email,
            },
          },
        });

      if (stripeError) {
        setError(stripeError.message || "Payment failed");
      } else if (paymentIntent?.status === "succeeded") {
        // Payment successful
        onSuccess();
        // You might want to show a success message or redirect
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Donor Information */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={donorInfo.name}
            onChange={(e) =>
              setDonorInfo({ ...donorInfo, name: e.target.value })
            }
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={donorInfo.email}
            onChange={(e) =>
              setDonorInfo({ ...donorInfo, email: e.target.value })
            }
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Amount Selection */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-3">
          Donation Amount
        </label>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {predefinedAmounts.map((presetAmount) => (
            <button
              key={presetAmount}
              type="button"
              onClick={() => {
                setAmount(presetAmount);
                setIsCustom(false);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isCustom && amount === presetAmount
                  ? "bg-red-800 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              ${presetAmount}
            </button>
          ))}
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsCustom(!isCustom)}
            className="text-sm text-red-800 hover:text-red-900 font-medium"
          >
            {isCustom ? "Choose preset amount" : "Enter custom amount"}
          </button>
          {isCustom && (
            <div className="mt-2">
              <input
                type="number"
                min="1"
                step="0.01"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Card Element */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          <CreditCard className="inline w-4 h-4 mr-1" />
          Payment Information
        </label>
        <div className="p-3 border border-neutral-300 rounded-md bg-white">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-red-800 hover:bg-red-900 disabled:bg-neutral-400 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            Processing...
          </>
        ) : (
          <>
            <Heart className="w-4 h-4" />
            Donate ${isCustom ? customAmount || "0" : amount}
          </>
        )}
      </button>
    </form>
  );
};

export default DonationForm;
