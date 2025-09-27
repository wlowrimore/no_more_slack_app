import Image from "next/image";
import React from "react";
import FooterDonateComp from "../UI/FooterDonateComp";

const FooterComp = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex items-center justify-evenly bg-amber-100 h-[6rem] w-screen px-12">
      <section className="w-full flex items-center">
        <h1 className="flex flex-col text-[1.5rem] mt-1.5 font-semibold text-neutral-950 leading-3 w-[28rem]">
          NOMORESLACK&nbsp;
          <span className="ffont-normal text-lg text-neutral-900">
            is a production of FakeNameDev
          </span>
          <span className="font-normal text-sm text-neutral-950 -mt-1.5">
            &copy; 2025 All Rights Reserved
          </span>
        </h1>
        <FooterDonateComp />
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
