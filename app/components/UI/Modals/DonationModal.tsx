import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { X } from "lucide-react";
import { Slide } from "react-awesome-reveal";
import DonationForm from "./DonationForm";

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <Slide direction="right" duration={700} triggerOnce={true}>
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full max-w-md">
            {/* Header */}
            <div className="bg-amber-50 px-6 py-4 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Support Our Mission
                </h3>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <div className="mb-6">
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  Your contribution helps us maintain this platform and continue
                  defending democratic values through informed citizen
                  engagement. Every donation, no matter the size, makes a
                  meaningful impact.
                </p>
                <p className="text-neutral-600 text-xs">
                  🔒 Secure payment processing powered by Stripe
                </p>
              </div>

              <Elements stripe={stripePromise}>
                <DonationForm onSuccess={onClose} />
              </Elements>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default DonationModal;
