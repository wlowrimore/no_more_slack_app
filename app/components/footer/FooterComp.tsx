import Image from "next/image";
import React from "react";

const FooterComp = () => {
  return (
    <footer className="fixed bottom-0 flex items-center justify-between bg-amber-100 h-[10rem] w-screen px-22">
      <section>
        <h1 className="flex flex-col text-[1.5rem] font-semibold text-neutral-700 leading-4">
          NOMORESLACK&nbsp;
          <span className="font-normal text-lg text-neutral-950">
            is a product of FakeName Development
          </span>
          <span className="font-normal text-lg text-neutral-950 -mt-1">
            &copy; 2025 All Rights Reserved
          </span>
        </h1>
      </section>
      <Image
        src="/logos/fakenamedevLogo_with_title_no_bg.png"
        alt="fakenamedev logo"
        width={1000}
        height={1000}
        className="mx-auto w-32 h-34 opacity-95"
      />
      <section>
        <div className="flex flex-col max-w-[42rem] border border-neutral-400/80 rounded-md p-4 bg-amber-200/60">
          <h2 className="text-sm font-semibold text-neutral-700 tracking-wide leading-5 mb-3">
            Defending democracy starts with informed citizens. This platform is
            our contribution to preserving the constitutional rights our
            founders envisioned. While always free to access, your voluntary
            support helps us maintain and improve this essential resource.
          </h2>

          <button className="bg-red-800 hover:bg-sky-950 text-amber-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Donate
          </button>
        </div>
      </section>
    </footer>
  );
};

export default FooterComp;
