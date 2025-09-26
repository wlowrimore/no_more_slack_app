"use client";

import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Avatar = () => {
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

  const firstInitial = session?.user?.name
    ? session.user.name.split(" ")[0][0].toLowerCase()
    : "G";
  const lastName = session?.user?.name
    ? session.user.name.split(" ")[1].toLowerCase()
    : "uest";
  const tagName = `@${firstInitial}${lastName}`;

  if (status === "loading") {
    return (
      <main className="w-[26rem] flex items-center justify-end">
        <ul className="w-fit flex justify-end">
          <li className="flex justify-center items-center w-14 h-14 text-white bg-gray-400 mx-3 cursor-pointer rounded-full">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          </li>
        </ul>
      </main>
    );
  }

  return (
    <main className="w-[26rem] flex items-center justify-end">
      <ul className="w-fit flex justify-end items-center">
        {session && (
          <ul className="flex flex-col items-center">
            <li className="text-sm text-neutral-300/70 pb-1">
              {tagName}
              <span className="bg-neutral-100/20 h-0.5 mt-1"></span>
            </li>
            <button
              onClick={handleAuthClick}
              className="w-fit flex border border-transparent mt-1 items-center px-2 cursor-pointer rounded text-white bg-red-900 hover:text-red-600 hover:bg-neutral-300/10 transition-colors"
            >
              <span className="text-[1rem] tracking-wider">Signout</span>
            </button>
          </ul>
        )}

        <li
          onClick={!session ? handleAuthClick : undefined}
          className={`flex justify-center items-center w-16 h-16 text-white bg-transparent border border-amber-100/70 mx-3 cursor-pointer transition-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full ${
            !session ? "hover:scale-105" : ""
          }`}
        >
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "User avatar"}
              width={52}
              height={52}
              className="rounded-full border border-amber-100/50"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          ) : (
            // Fallback when no session or no image
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {session?.user?.name
                ? session.user.name.charAt(0).toUpperCase()
                : "?"}
            </div>
          )}
        </li>
      </ul>
    </main>
  );
};

export default Avatar;
