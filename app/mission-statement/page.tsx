import React from "react";
import MissionComp from "../components/MissionComp";
import FooterDonateComp from "../components/UI/FooterDonateComp";

const MissionPage = () => {
  return (
    <main className="grid grid-cols-7 w-8xl">
      <section className="col-span-5">
        <MissionComp />
      </section>
      <section className="col-span-2">
        <FooterDonateComp />
      </section>
    </main>
  );
};

export default MissionPage;
