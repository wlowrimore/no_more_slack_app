"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { historicalDocuments } from "../facts/historicalListings";
import NoAuthPageMMessage from "./UI/NoAuthPageMMessage";
import Link from "next/link";
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
    <main className="mw-8xl px-12 h-screen flex flex-col items-center">
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
              <section className="w-full mx-auto py-16">
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
              <section className="w-full mx-auto py-16">
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
              <section className="flex flex-col mx-auto pt-12 pb-16">
                {/* Robert F. Kennedy Jr. */}
                <div className="w-full mx-auto pb-12 pt-4">
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
                          Robert F. Kennedy Jr. &#40;Secretary of Health and
                          Human Services | HHS&#41;
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
                              Dr. Mehmet Oz &#40;Administrator for the Centers
                              for Medicare & Medicaid Services |CMS&#41;
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
                                  He is a real doctor &#40;M.D., Professor
                                  Emeritus of Surgery at Columbia
                                  University&#41;, but has no prior experience
                                  in federal health administration. His
                                  television career was marked by strong
                                  criticism from the medical community for
                                  promoting unproven and scientifically dubious
                                  health supplements and treatments. He is now
                                  responsible for agencies managing health
                                  insurance for over 160 million Americans and a
                                  multi-trillion dollar budget.
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
              {/* Scientific Consensus VS Administration Claims */}
              <section className="w-full mx-auto pb-32 pt-4">
                <div className="w-full flex flex-col justify-center items-center text-2xl pt-16 pb-4">
                  <h1 className="text-3xl flex flex-col items-center text-amber-200 font-semibold tracking-wide capitalize">
                    Scientific Consensus VS. Administration Claims
                    <p className="text-red-500/90">
                      &nbsp;acetaminophen &amp; Vaccine Safety
                    </p>
                    <p className="max-w-11/16 text-center text-[1rem] text-amber-100 tracking-wider leading-snug py-4">
                      Scientific consensus on vaccines and common medications is
                      established through rigorous, peer-reviewed, and
                      large-scale studies. The claims promoted by some
                      administration figures are not supported by this evidence.
                    </p>
                  </h1>
                </div>

                <section className="grid grid-cols-2 gap-6 pb-6">
                  {/* Left Column */}
                  <div className="w-full mx-auto bg-amber-500/20 border border-amber-500/40 rounded-xl">
                    <div className="text-sm flex flex-col px-3 py-3 text-amber-100 tracking-wider">
                      <h3 className="w-fit font-semibold text-amber-200 text-lg underline ">
                        Vaccines as Preventative Medicine
                      </h3>
                      <h4 className="w-fit text-amber-100 mb-3">
                        The claim that vaccines are causing harm rather than
                        keeping children safe directly contradicts the global
                        scientific and medical consensus.
                      </h4>
                      <ul className="list-disc ml-4 space-y-3">
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            Scientific Fact:
                          </span>{" "}
                          Vaccines are a cornerstone of public health, saving
                          millions of lives annually by preventing diseases like
                          measles, polio, diphtheria, and tetanus.
                        </li>
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            Safety & Autism:
                          </span>{" "}
                          Decades of comprehensive, large-scale studies by
                          organizations worldwide &#40;including the CDC, WHO,
                          and major medical societies&#41; have repeatedly found
                          no causal link between vaccines and autism spectrum
                          disorder &#40;ASD&#41;. The 1998 study that originally
                          suggested a link was retracted by the journal The
                          Lancet and the lead author's medical license was
                          revoked due to fraud.
                        </li>
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            Preventable Disease:
                          </span>{" "}
                          Widespread vaccination creates community immunity
                          &#40;or "herd protection"&#41;, which protects
                          vulnerable populations who cannot be vaccinated
                          &#40;infants, the elderly, or those with compromised
                          immune systems. When vaccination rates drop, highly
                          infectious diseases like measles can and do return in
                          outbreaks.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Right Column */}
                  <div className="w-full mx-auto bg-amber-500/20 border border-amber-500/40 rounded-xl">
                    <div className="text-sm flex flex-col px-3 py-3 text-amber-100 tracking-wider">
                      <h3 className="w-fit font-semibold text-amber-200 text-lg underline ">
                        Acetaminophen &#40;Tylenol&#41; and Autism
                      </h3>
                      <h4 className="w-fit text-amber-100 mb-3">
                        The claim that acetaminophen use during pregnancy causes
                        autism is not supported by the most rigorous scientific
                        evidence.
                      </h4>
                      <ul className="list-disc ml-4 space-y-3">
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            The Findings:
                          </span>{" "}
                          Some observational studies have shown a correlation
                          &#40;or association&#41; between frequent or prolonged
                          prenatal acetaminophen use and higher rates of
                          neurodevelopmental issues.
                        </li>
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            The Crucial Distinction:
                          </span>{" "}
                          Correlation is not causation. The most
                          methodologically rigorous studies, particularly those
                          using sibling control analysis &#40;the gold standard
                          for controlling shared genetic and environmental
                          factors within a family&#41;, have found no evidence
                          of an increased risk of autism when familial
                          confounding factors are properly accounted for.
                        </li>
                        <li>
                          <span className="text-lg flex items-centerfont-semibold text-amber-200">
                            Medical Guidance:
                          </span>{" "}
                          Acetaminophen is currently the only over-the-counter
                          pain reliever and fever reducer consistently
                          recommended as safe for use by major medical and
                          obstetric organizations worldwide when taken as
                          directed during pregnancy. Fever itself is a known
                          risk factor for adverse fetal outcomes, which is why a
                          safe reducer is medically necessary.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* Precedent of Scientific Interference */}
                <section className="w-full mx-auto">
                  <div className="w-full mx-auto bg-amber-500/20 border border-amber-500/40 rounded-xl">
                    <div className="text-sm flex flex-col px-3 py-3 text-amber-100 tracking-wider">
                      <div className="w-full flex flex-col justify-center items-center text-2xl">
                        <h1 className="text-3xl flex flex-col items-center text-amber-200 font-semibold tracking-wide capitalize">
                          Precedent of Scientific Interference
                          <p className="text-red-500/90">
                            &nbsp;acetaminophen &amp; Vaccine Safety
                          </p>
                          <p className="max-w-11/16 text-center text-[1rem] text-amber-100 tracking-wider leading-snug pt-4">
                            The politicization of science is not new, but has
                            been highlighted by recent administrations. The
                            previous Trump administration faced widespread
                            criticism from scientific bodies for what was
                            documented as political interference with federal
                            science agencies &#40;such as the CDC and EPA&#41;.
                          </p>
                          <p className="max-w-11/16 text-center text-[1rem] text-amber-100 tracking-wider leading-snug pt-6">
                            Actions included suppressing, downplaying, or
                            overriding scientific findings on issues like
                            climate change and COVID-19 to align with political
                            goals, leading to a breakdown of trust between
                            career scientists and administration appointees.
                          </p>
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* Source Links */}
                  <section className="w-full mx-auto py-12">
                    <div className="flex items-center pt-16">
                      <div className="w-full h-[0.05rem] bg-amber-200 rounded-full"></div>
                      <p className="w-full text-2xl text-amber-200 text-center">
                        If you would like to further explore these issues please
                        visit the following source links for more information.
                      </p>
                      <div className="w-full h-[0.05rem] bg-amber-200 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto text-center text-[1rem] text-amber-100 tracking-wider leading-snug pt-2">
                      <div>
                        <Link
                          href="https://www.pbs.org/newshour/politics/who-are-the-people-trump-has-picked-for-key-positions-in-his-second-administration-so-far#:~:text=Director%20of%20National%20Intelligence%3A%20Tulsi,Trump%20prizing%20loyalty%20over%20experience."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              PBS www.pbs.org
                            </span>{" "}
                            <p>
                              Who are the people Trump has picked for key
                              positions in his second administration so far
                              Director of National Intelligence: Tulsi Gabbard.
                              Former Hawaii Rep. Tulsi Gabbard has been tapped
                              by Trump to be director of national intelligence,
                              another ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.verywellhealth.com/dr-oz-head-of-cms-nomination-8749068#:~:text=President%2Delect%20Donald%20Trump%20nominated,in%20government%20or%20healthcare%20administration."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              Verywell Health www.verywellhealth.com
                            </span>{" "}
                            <p>
                              How Dr. Oz Could Change Medicare and Medicaid as
                              Head of CMS - Verywell Health President-elect
                              Donald Trump nominated the television personality
                              Dr. Mehmet Oz, popularly known as Dr. Oz, to be
                              the administrator of the Centers for Medicare ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/vaccine-studies-examine-the-evidence.aspx#:~:text=As%20a%20parent%2C%20you%20can,safe%20for%20children%20and%20teens."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              HealthyChildren.org www.healthychildren.org
                            </span>{" "}
                            <p>
                              Vaccine Safety: Examine the Evidence -
                              HealthyChildren.org As a parent, you can be
                              reassured to know that there have been hundreds of
                              large-scale studies around the world on vaccine
                              safety during the past few decades. ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.pbs.org/newshour/health/12-ways-rfk-jr-has-undercut-vaccine-confidence-as-health-secretary#:~:text=Days%20later%2C%20Kennedy%20and%20the,been%20thoroughly%20debunked%20for%20years."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              PBS www.pbs.org
                            </span>{" "}
                            <p>
                              12 ways RFK Jr. has undercut vaccine confidence as
                              health secretary | PBS News Days later, Kennedy
                              and the Trump administration repeated the claim,
                              without evidence, that vaccines contributed to
                              autism, a theory that has been thoroughly ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://ourworldindata.org/vaccination#:~:text=in%20August%202025.-,Vaccination,infants%20worldwide%20receive%20vaccinations%20annually"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              Our World in Data ourworldindata.org
                            </span>{" "}
                            <p>
                              Vaccination - Our World in Data Vaccination.
                              Vaccine technology has advanced dramatically.
                              Vaccination helped eradicate smallpox worldwide.
                              Vaccines have massively reduced the rates of ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://ourworldindata.org/vaccination#:~:text=Vaccines%20work%20by%20safely%20training,who%20can't%20get%20vaccinated."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              Our World in Data ourworldindata.org
                            </span>{" "}
                            <p>
                              Vaccination - Our World in Data Vaccines work by
                              safely training the immune system to recognize and
                              fight pathogens before they can cause serious
                              illness. When enough people are vaccinated, ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.nfid.org/vaccines-save-lives-what-is-driving-vaccine-preventable-disease-outbreaks/."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              National Foundation for Infectious Diseases
                              www.nfid.org
                            </span>{" "}
                            <p>
                              Vaccines Save Lives: What Is Driving
                              Vaccine-Preventable Disease Outbreaks? - NFID When
                              a community&apos;s immunization rates drop,
                              disease inevitably follows. The problem is so
                              significant that the World Health Organization
                              &#40;WHO&#41; recently ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.figo.org/paracetamol-acetaminophen-use-during-pregnancy-and-autism-risk-evidence-does-not-support-causal#:~:text=The%20weight%20of%20scientific%20evidence,pregnancy%20and%20autism%20spectrum%20disorders."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              FIGO.org www.figo.org
                            </span>{" "}
                            <p>
                              Paracetamol &#40;acetaminophen&#41; use during
                              pregnancy and autism risk: evidence does not
                              support causal association - FIGO.org The weight
                              of scientific evidence, particularly from the
                              largest and most methodologically rigorous studies
                              employing sibling control designs, shows no causal
                              ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.fda.gov/news-events/press-announcements/fda-responds-evidence-possible-association-between-autism-and-acetaminophen-use-during-pregnancy#:~:text=Evidence%20in%20recent%20years%20has,Birth%20Cohort%2C%20find%20this%20association."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              FDA www.fda.gov
                            </span>{" "}
                            <p>
                              FDA Responds to Evidence of Possible Association
                              Between Autism and Acetaminophen Use During
                              Pregnancy Evidence in recent years has suggested a
                              correlation between acetaminophen use during
                              pregnancy and subsequent diagnosis of conditions
                              like autism and ADHD. ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://www.figo.org/paracetamol-acetaminophen-use-during-pregnancy-and-autism-risk-evidence-does-not-support-causal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              FIGO.org www.figo.org
                            </span>{" "}
                            <p>
                              Paracetamol &#40;acetaminophen&#41; use during
                              pregnancy and autism risk: evidence does not
                              support causal association - FIGO.org These
                              statements contradict established medical guidance
                              from major obstetric organisations worldwide,
                              which consistently recommend paracetamol as the
                              safest ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8793038/#:~:text=This%20type%20of%20scientific%20censorship,type%20of%20anti%2Dscience%20action."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              PubMed Central pmc.ncbi.nlm.nih.gov
                            </span>{" "}
                            <p>
                              Politics v. science: How President Trump's war on
                              science impacted public health and environmental
                              regulation - PubMed Central This type of
                              scientific censorship was widespread during the
                              Trump administration, having been documented at 20
                              federal bodies—more than any other type of ...
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8793038/#:~:text=In%20total%2C%20during%20the%20Trump,the%20direction%20of%20administration%20officials."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex flex-col justify-center min-h-[12rem] text-sky-400 text-start hover:text-sky-500 hover:bg-neutral-400/20 hover:border-transparent transition-colors duration-200 my-2 border border-slate-400/40 rounded py-2 px-4">
                            <span className="w-fit flex flex-col text-lg text-white mb-2">
                              PubMed Central pmc.ncbi.nlm.nih.gov
                            </span>{" "}
                            <p>
                              Politics v. science: How PresidentTrump's war on
                              science impacted public health and environmental
                              regulation - PubMed Central In total, during the
                              Trump administration, climate change and other
                              scientific information was removed from the
                              websites of twelve federal bodies, in most ...
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </section>
                </section>
                <div className="flex justify-center mx-auto text-sm text-amber-200 tracking-wider">
                  <p className="mb-[-2rem]">
                    Disclaimer: This information is based on public records,
                    judicial proceedings, and documented reports. The legal
                    status of various charges and judgments may change due to
                    ongoing trials, appeals, or legal rulings.
                  </p>
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
