"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { historicalDocuments } from "../facts/historicalListings";
import NoAuthPageMMessage from "./UI/NoAuthPageMMessage";
export interface HistoricalDocumentsType {
  id: number;
  title: string;
  image: string;
  description: string;
  importance: string[];
  sources: { name: string; url: string }[];
}

const FactsPageComp: React.FC<HistoricalDocumentsType> = () => {
  const { data: session } = useSession();

  const documents = historicalDocuments;

  if (!historicalDocuments) {
    return <div>Loading...</div>;
  }

  return (
    <main className="mw-8xl p-12 h-screen flex flex-col items-center">
      {!session ? (
        <section className="flex flex-col max-w-8xl mx-auto pt-12 pb-40">
          <NoAuthPageMMessage />
        </section>
      ) : (
        <>
          <section className="w-full mx-auto py-8">
            <h1 className="text-4xl text-amber-200 font-semibold tracking-wide flex">
              Facts All Americans Should Know
            </h1>
            <p className="text-lg text-amber-100 tracking-wider">
              On this page you will find essential, historic and current
              political facts.
            </p>
          </section>

          {documents && documents.length > 0 ? (
            <>
              <section className="w-full h-screen pb-12 mx-auto grid grid-cols-4 gap-4">
                {documents.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-col border border-slate-500/50 rounded-xl"
                  >
                    <Image
                      src={document.image}
                      alt={document.title}
                      width={300}
                      height={200}
                      className="w-full h-56 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-3">
                      <h2 className="text-3xl mb-1 text-amber-400 font-semibold tracking-wide flex">
                        {document.title}
                      </h2>
                      <p className="text-sm mb-3 text-amber-100 tracking-wider">
                        {document.description}
                      </p>
                      <span className="text-[1.2rem] text-amber-400 tracking-wide">
                        Importance:
                      </span>
                      <p className="text-sm tracking-wider mb-3">
                        {document.importance}
                      </p>
                      <span className="text-[1.2rem] text-amber-400 tracking-wide">
                        Source Links:
                      </span>
                      <ul className="pl-5 list-disc text-sm text-blue-300 tracking-widest underline">
                        {document.sources.map((source) => (
                          <li key={source.name} className="leading-relaxed">
                            <a
                              href={source.url}
                              className="hover:text-blue-500"
                            >
                              {source.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </section>
              {/* Trump Section */}
              <section className="w-full mx-auto pb-12 pt-4">
                <h1 className="capitalize text-2xl text-amber-200 font-semibold tracking-wide flex pb-4">
                  Getting to know your convicted President of 34 felony counts -
                  <span className="text-red-500/90">&nbsp;Donald J. Trump</span>
                </h1>
                <div className="w-full flex mx-auto border border-slate-400/50 rounded-xl">
                  <div className="py-3 px-3">
                    <Image
                      src="/factsPageImages/donaldJTrumpMugShot.jpg"
                      alt="President"
                      width={1000}
                      height={1000}
                      className="w-[44rem] rounded-xl border-b border-slate-400/50 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-sm flex flex-col p-2 pr-2 pl-6 text-amber-100 tracking-wider">
                    <ul className="list-disc space-y-2">
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          Felony Conviction in New York State &#40;2024&#41;:
                        </span>
                        <br />
                        Convicted by a jury on 34 counts of Falsifying Business
                        Records in the First Degree related to a scheme to
                        conceal a hush-money payment to an adult film actress
                        during the 2016 presidential election.
                      </li>
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          Federal Investigation in Florida &#40;Classified
                          Documents Case&#41;:
                        </span>
                        <br />
                        Charges include Willful Retention of National Defense
                        Information, Conspiracy to Obstruct Justice, Withholding
                        a Document or Record, Corruptly Concealing a Document or
                        Record, Concealing a Document in a Federal
                        Investigation, Scheme to Conceal, and False Statements
                        and Representations, related to his handling of
                        classified documents after leaving the presidency.
                      </li>
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          Federal Investigation in Washington, D.C. &#40;2020
                          Election Interference Case&#41;:
                        </span>
                        <br />
                        Charges include Conspiracy to Defraud the United States,
                        Conspiracy to Obstruct an Official Proceeding,
                        Obstruction of and Attempt to Obstruct an Official
                        Proceeding, and Conspiracy Against Rights, related to
                        efforts to overturn the results of the 2020 presidential
                        election, culminating in the Jan. 6th insurrection.
                      </li>
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          State Investigation in Georgia &#40;2020 Election
                          Interference Case&#41;:
                        </span>
                        <br />
                        Charges in a sweeping indictment include Violation of
                        the Georgia RICO &#40;Racketeer Influenced and Corrupt
                        Organizations&#41; Act and multiple counts related to
                        various attempts to subvert the 2020 election results in
                        the state, such as making false statements and
                        soliciting a violation of an oath by a public officer
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Trump - Epstein Bromance Section */}
              <section className="w-full mx-auto pb-12 pt-4">
                <h1 className="capitalize text-2xl text-amber-200 font-semibold tracking-wide flex pb-4">
                  The Trump - Epstein &quot;Bromance&quot; -
                  <span className="text-red-500/90">
                    &nbsp;An undeniable truth
                  </span>
                </h1>
                <div className="w-full flex mx-auto items-center border border-slate-400/50 rounded-xl">
                  <div className="text-sm flex flex-col px-10 text-amber-100 tracking-wider">
                    <ul className="list-disc space-y-6">
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          The Relationship:
                        </span>
                        <br />
                        Donald Trump had a social and professional relationship
                        with the late financier and convicted sex offender
                        Jeffrey Epstein that spanned the late 1980s, 1990s, and
                        early 2000s, including attending parties and flying on
                        Epstein&apos;s private jet.
                      </li>
                      <li>
                        <span className="font-semibold text-amber-200 text-lg">
                          The Epstein Files:
                        </span>
                        <br />
                        While Trump has not been criminally accused of
                        wrongdoing in connection with Epstein&apos;s crimes,
                        their association has been a subject of public scrutiny,
                        especially concerning documents related to
                        Epstein&apos;s cases. Trump has denied any knowledge of
                        Epstein's criminal activities and has sought to distance
                        himself from him by creating political distractions and
                        refusing to allow the files to be released to the
                        public, as well as all legislative branches.
                      </li>
                    </ul>
                  </div>
                  <div className="py-3 px-3">
                    <Image
                      src="/factsPageImages/trumpEpstein.jpg"
                      alt="Trump and Epstein"
                      width={1000}
                      height={1000}
                      className="w-[44rem] rounded-xl border-b border-slate-400/50 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </section>
              {/* Health Administration */}
              <section className="flex flex-col mx-auto pb-12">
                {/* Robert F. Kennedy Jr. */}
                <div className="w-full mx-auto pb-32 pt-4">
                  <h1 className="capitalize text-2xl text-amber-200 font-semibold tracking-wide flex pb-4">
                    Who needs experience when you have the name? -
                    <span className="text-red-500/90">
                      &nbsp;Trump&apos;s Health Administration
                    </span>
                  </h1>
                  <div className="w-full flex flex-col mx-auto border border-slate-400/50 rounded-xl">
                    <div className="flex">
                      <div className="py-3 px-3">
                        <Image
                          src="/factsPageImages/rfk.jpg"
                          alt="Robert F. Kennedy Jr."
                          width={1000}
                          height={1000}
                          className="w-[32rem] rounded-t-xl border-b border-slate-400/50 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-sm flex flex-col pt-2 px-2 text-amber-100 tracking-wider">
                        <span className="w-fit font-semibold pb-0.5 border-b border-amber-200/50 text-amber-200 text-lg">
                          Robert F. Kennedy Jr. (Secretary of Health and Human
                          Services | HHS)
                        </span>
                        <br />

                        <ul className=" -mt-2">
                          <li className="font-semibold text-amber-200 text-lg">
                            Prior Professional Background
                          </li>
                        </ul>

                        <ul className="list-disc ml-6">
                          <li>Environmental Lawyer</li>
                          <li>Activist</li>
                        </ul>
                        <br />
                        <ul className="-mt-2">
                          <li className="font-semibold text-amber-200 text-lg">
                            Fact | Controversy
                          </li>
                          <ul className="list-disc ml-6">
                            <li>
                              No prior medical or public health experience. His
                              nomination was controversial due to his long
                              history as a prominent anti-vaccine activist and
                              his promotion of health misinformation. He has
                              publicly contradicted the efficacy and safety of
                              childhood vaccines, which directly opposes the HHS
                              mission.
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-sm flex flex-col pt-2 px-3 text-amber-100 tracking-wider">
                        {/* Dr. Mehmet Oz */}
                        <div className="w-full flex mx-auto">
                          <div className="w-full text-sm flex flex-col py-2 text-amber-100 tracking-wider">
                            <span className="w-fit font-semibold pb-0.5 border-b border-amber-200/50 text-amber-200 text-lg">
                              Dr. Mehmet Oz (Administrator for the Centers for
                              Medicare & Medicaid Services |CMS)
                            </span>
                            <br />

                            <ul className="-mt-2">
                              <li className="font-semibold text-amber-200 text-lg">
                                Prior Professional Background
                              </li>
                            </ul>

                            <ul className="list-disc ml-6">
                              <li>Cardiothoracic Surgeon</li>
                              <li>Television Personality</li>
                            </ul>
                            <br />
                            <ul className="-mt-2">
                              <li className="font-semibold text-amber-200 text-lg">
                                Fact | Controversy
                              </li>
                              <ul className="list-disc ml-6">
                                <li>
                                  He is a real doctor (M.D., Professor Emeritus
                                  of Surgery at Columbia University), but has no
                                  prior experience in federal health
                                  administration. His television career was
                                  marked by strong criticism from the medical
                                  community for promoting unproven and
                                  scientifically dubious health supplements and
                                  treatments. He is now responsible for agencies
                                  managing health insurance for over 160 million
                                  Americans and a multi-trillion dollar budget.
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="py-3 ml-4">
                            <Image
                              src="/factsPageImages/drOZ.jpg"
                              alt="Dr. Oz"
                              width={1000}
                              height={1000}
                              className="max-w-[20rem] rounded-xl border-b border-slate-400/50 hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="text-center p-8">
              <p className="text-gray-500">No documents available</p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default FactsPageComp;
