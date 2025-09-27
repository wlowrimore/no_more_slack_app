import React from "react";

const FooterDonateComp = () => {
  return (
    <main className="w-full flex justify-center mt-22">
      <div className="flex flex-col max-w-[25rem] border border-neutral-400/80 rounded-md p-4 bg-amber-200/85">
        <h2 className="text-2xl font-semibold text-neutral-950 tracking-wide leading-6">
          Defending democracy starts with informed citizens. This platform is
          our contribution to preserving the constitutional rights our founders
          envisioned. While always free to access, your voluntary support helps
          us maintain and improve this essential resource.
        </h2>

        <button className="bg-red-800 hover:bg-sky-950 text-amber-100 px-6 py-3 mt-12 rounded-lg font-medium transition-colors duration-200">
          Donate
        </button>
      </div>
    </main>
  );
};

export default FooterDonateComp;
