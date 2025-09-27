import Image from "next/image";
import React from "react";

const FooterComp = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex items-center justify-between bg-amber-100 h-[7rem] w-screen px-22">
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
        className="mx-auto w-22 h-24 opacity-80"
      />
    </footer>
  );
};

export default FooterComp;
