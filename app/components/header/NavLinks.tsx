"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import "./css/header.css";
import {
  AiFillHome,
  AiFillDashboard,
  AiFillCheckCircle,
  AiFillSketchCircle,
  AiOutlineLogin,
  AiOutlineLogout,
  AiFillInfoCircle,
  AiOutlineLink,
  AiTwotoneStar,
} from "react-icons/ai";

const NavLinksComp: React.FC = () => {
  const pathname = usePathname();
  const session = useSession();

  const isActive = (path: string) => pathname === path;

  // Special width for mission statement link
  const getLinkClasses = (path: string) => {
    const baseClasses =
      "w-[7rem] flex justify-center items-center mx-1 cursor-pointer transition-transform hover:text-amber-200 bg-transparent hover:drop-shadow-[0_10px_30px_rgba(255,255,255,0.9)] rounded-full";
    const activeClasses =
      "text-amber-200 bg-neutral-800/30 border-b border-amber-200 pb-1.5 bg-neutral-950";
    const inactiveClasses = "text-slate-400";

    return isActive(path)
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <main className="flex border-b border-neutral-400/30 xl:w-[46.5rem] justify-between">
      <nav className="flex justify-center items-center">
        <ul className="flex text-lg px-4 py-4 justify-around">
          <Link href="/">
            <li className={getLinkClasses("/")}>
              <AiTwotoneStar size={24} />
              <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                Home
              </span>
            </li>
          </Link>
          {session.status === "authenticated" ? (
            <>
              <Link href="/mission-statement">
                <li className={getLinkClasses("/mission-statement")}>
                  <AiFillSketchCircle size={24} />
                  <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                    Mission
                  </span>
                </li>
              </Link>

              <Link href="/dashboard">
                <li className={getLinkClasses("/dashboard")}>
                  <AiFillDashboard size={24} />
                  <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                    Dash
                  </span>
                </li>
              </Link>

              <Link href="/facts">
                <li className={getLinkClasses("/facts")}>
                  <AiFillCheckCircle size={24} />
                  <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                    Facts
                  </span>
                </li>
              </Link>

              <Link href="/links">
                <li className={getLinkClasses("/links")}>
                  <AiOutlineLink size={24} />
                  <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                    Links
                  </span>
                </li>
              </Link>

              <Link href="/blog">
                <li className={getLinkClasses("/blogs")}>
                  <AiFillInfoCircle size={24} />
                  <span className="text-xs tracking-wider ml-1 mt-1 h-full flex items-end">
                    Blog
                  </span>
                </li>
              </Link>
            </>
          ) : (
            <div className="w-full mx-22 px-4 flex items-center bg-sky-700/30 border border-neutral-400/40 rounded">
              <h2 className="text-amber-100 text-lg">
                Please Sign in Below to Continue
              </h2>
            </div>
          )}
        </ul>
      </nav>
    </main>
  );
};

export default NavLinksComp;
