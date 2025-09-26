"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const GoogleSignIn = () => {
  const { data: session, status } = useSession();

  const handleAuthClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior

    console.log("Button clicked, session:", session); // Debug log

    if (session) {
      console.log("Signing out..."); // Debug log
      signOut();
    } else {
      console.log("Signing in with Google..."); // Debug log
      signIn("google");
    }
  };

  // Show loading state
  if (status === "loading") {
    return (
      <div className="border border-amber-50/70 rounded-full w-fit py-1.5 px-4 flex cursor-pointer">
        <span className="ml-2 text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleAuthClick}
      className={`${
        session ? "hidden" : "block"
      } border border-amber-50/70 rounded w-fit py-2 px-3 flex cursor-pointer hover:bg-sky-600/30 transition-colors duration-200 ease-in-out items-center`}
      type="button"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="36px"
        height="32px"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        ></path>
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        ></path>
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        ></path>
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        ></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>

      <span className="ml-2 text-xl">
        {session ? "Sign Out" : "Continue with Google"}
      </span>
    </button>
  );
};

export default GoogleSignIn;
