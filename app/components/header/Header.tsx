"use client";

import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import "./css/header.css";
import NavLinksComp from "./NavLinks";
import MissionBlurb from "./MissionBlurb";
import Avatar from "./Avatar";

const Header = ({ isActivePath }: { isActivePath: boolean }) => {
  const [isMissionPath, setIsMissionPath] = useState<boolean>(false);

  const path = usePathname();
  useEffect(() => {
    if (path === "/mission-statement") {
      setIsMissionPath(true);
    } else {
      setIsMissionPath(false);
    }
  }, [path, isMissionPath]);

  return (
    <>
      <header className="w-[46.5rem]">
        <main className="py-2 border-b border-neutral-400 w-[46.5rem]">
          <section className="grid grid-cols-2">
            <div className="relative">
              <h1 className="text-7xl text-neutral-200 ">
                NOM<span className="text-sky-600">O</span>RE
                <span className="text-red-800">SLACK</span>
              </h1>
            </div>
            <span className="absolute left-[38.5rem] top-[2.7rem] dot-separator"></span>
            <div className="py-[0.37rem] leading-7.5 flex flex-col items-end">
              <h2 className="text-[1.8rem] text-nueutral-200">
                IT&apos;S&nbsp;TIME
              </h2>
              <span className="text-sky-600 text-[2rem] p-0 -ml-2">
                &nbsp;WE&nbsp;<span className="text-neutral-200">ACT</span>
              </span>
            </div>
          </section>
        </main>
        <section className="">
          <NavLinksComp />
        </section>
      </header>
      <section className="flex items-center justify-center ml-16">
        {!isMissionPath ? (
          <MissionBlurb />
        ) : (
          <div className="max-w-2xl max-h-[8rem] pt-3 bg-[#0a0a0a]">
            <article className="text-[#0a0a0a] tracking-wider text-sm">
              We are committed to creating a space where the power of individual
              expression can be fully realized. This platform is not just a
              place to...read further
            </article>
          </div>
        )}
        <div className="max-w-2xl.max-h-[8rem] pt-3 bg-[#0a0a0a]"></div>
        <Avatar />
      </section>
    </>
  );
};

export default Header;
