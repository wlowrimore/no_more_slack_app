import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const FactsPageComp = () => {
  return (
    <main className="mw-8xl p-12 pb-40 h-screen flex flex-col items-center">
      <section className="w-full mx-auto py-8">
        <h1 className="text-5xl text-amber-300/70 font-semibold tracking-wide flex">
          Facts All Americans Should Know
        </h1>
        <p className="text-lg text-slate-500 tracking-wider">
          On this page you will find essential, historic and current political
          facts.
        </p>
      </section>
      {/* Featured Grid */}
      <section className="w-full p-4 border border-slate-300/30 rounded-lg mx-auto grid grid-cols-4 gap-4">
        {/* <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"></Card> */}
        <div className="relative h-48 overflow-hiddenh-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.constitution.png"
            alt="constitution"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"></Card> */}
        <div className="relative h-48 overflow-hiddenh-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.billOfRights.png"
            alt="constitution"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"></Card> */}
        <div className="relative h-48 overflow-hiddenh-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/u.s.declarationOfIndependence.png"
            alt="constitution"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"></Card> */}
        <div className="relative h-48 overflow-hiddenh-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/factsPageImages/emancipationProclamation.png"
            alt="constitution"
            className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </main>
  );
};

export default FactsPageComp;
