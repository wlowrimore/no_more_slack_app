"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import DonationModal from "./Modals/DonationModal";
import { Slide } from "react-awesome-reveal";

const FooterDonateComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <main className="w-[45.5rem] flex justify-center items-center ml-[12.5rem]">
          <div className="flex items-center gap-4 max-w-[54rem] h-full border border-neutral-400/80 rounded-md p-4 bg-amber-200/85 -ml-[13rem]">
            <h2 className="text-normal font-semibold text-neutral-950 tracking-wide leading-5">
              Defending democracy starts with informed citizens. This platform
              is our contribution to preserving the constitutional rights our
              founders envisioned. While always free to access, your voluntary
              support helps us maintain and improve this essential resource.
            </h2>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-800 hover:bg-sky-950 text-amber-100 px-6 py-2 rounded-lg font-normal transition-colors duration-200 cursor-pointer"
            >
              Donate
            </button>
          </div>
        </main>
      )}

      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FooterDonateComp;
