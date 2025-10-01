import React from "react";
import Image from "next/image";
import Link from "next/link";
import { historicalDocuments } from "../facts/historicalListings";
export interface HistoricalDocumentsType {
  id: number;
  title: string;
  image: string;
  description: string;
  importance: string[];
  sources: { name: string; url: string }[];
}

const FactsPageComp: React.FC<HistoricalDocumentsType> = () => {
  if (!historicalDocuments) {
    return <div>Loading...</div>;
  }

  const documents = historicalDocuments;

  return (
    <main className="mw-8xl p-12 h-screen flex flex-col items-center">
      <section className="w-full mx-auto py-8">
        <h1 className="text-5xl text-amber-300/70 font-semibold tracking-wide flex">
          Facts All Americans Should Know
        </h1>
        <p className="text-lg text-slate-500 tracking-wider">
          On this page you will find essential, historic and current political
          facts.
        </p>
      </section>
      {documents && documents.length > 0 ? (
        <section className="w-full h-screen pb-32 mx-auto grid grid-cols-4 gap-4">
          {documents.map((document) => (
            <div className="flex flex-col border border-slate-500/50 rounded-xl">
              <Image
                src={document.image}
                alt={document.title}
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3">
                <h2 className="text-3xl mb-1 text-amber-300/70 font-semibold tracking-wide flex">
                  {document.title}
                </h2>
                <p className="text-sm mb-3 text-amber-100 tracking-wider">
                  {document.description}
                </p>
                <span className="text-[1.2rem] text-amber-300/70 tracking-wide">
                  Importance:
                </span>
                <p className="text-sm tracking-wider mb-3">
                  {document.importance}
                </p>
                <span className="text-[1.2rem] text-amber-300/70 tracking-wide">
                  Source Links:
                </span>
                <p className="text-lg text-slate-500 tracking-wider">
                  {document.sources.map((source) => (
                    <ul
                      key={source.name}
                      className="pl-5 list-disc text-sm text-blue-300 tracking-widest underline"
                    >
                      <li className="leading-relaxed">
                        <a href={source.url} className="hover:text-blue-500">
                          {source.name}'
                        </a>
                      </li>
                    </ul>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-lg text-slate-500 tracking-wider">No Information.</p>
      )}
    </main>
  );
};

export default FactsPageComp;

{
  /* <section className="w-full mx-auto grid grid-cols-4 gap-4">
        <div className="relative h-48 overflow-hiddenh-full bg-white border border-slate- rounded-t-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.constitution.png"
            alt="constitution"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="relative h-48 overflow-hiddenh-full bg-white border border-slate- rounded-t-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.billOfRights.png"
            alt="Bill of Rights"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="relative h-48 overflow-hiddenh-full bg-white border border-slate- rounded-t-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.declarationOfIndependence.png"
            alt="Declaration of Independence"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="relative h-48 overflow-hiddenh-full bg-white border border-slate- rounded-t-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/emancipationProclamation.png"
            alt="Proclamation of Emancipation"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section> */
}
