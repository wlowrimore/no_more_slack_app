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
            <h1 className="text-5xl text-amber-300/70 font-semibold tracking-wide flex">
              Facts All Americans Should Know
            </h1>
            <p className="text-lg text-slate-500 tracking-wider">
              On this page you will find essential, historic and current
              political facts.
            </p>
          </section>

          {documents && documents.length > 0 ? (
            <section className="w-full h-screen pb-32 mx-auto grid grid-cols-4 gap-4">
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
                    <ul className="pl-5 list-disc text-sm text-blue-300 tracking-widest underline">
                      {document.sources.map((source) => (
                        <li key={source.name} className="leading-relaxed">
                          <a href={source.url} className="hover:text-blue-500">
                            {source.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </section>
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
