"use client";

import React from "react";
import { useSession } from "next-auth/react";

const MissionComp = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col max-w-4xl px-8 mx-auto pt-12 pb-40">
      {!session ? (
        <section className="max-w-8xl flex flex-col items-center justify-center mt-22">
          <h1 className="text-8xl text-red-500 font-semibold tracking-wide animate-pulse-fast">
            HEY!
          </h1>
          <h2 className="text-5xl font-semibold tracking-wide mb-6">
            YOU CAN&apos;T BE IN HERE...
          </h2>
          <h3 className="text-2xl font-semibold tracking-wide">
            - GO BACK AN SIGN IN PLEASE -
          </h3>
        </section>
      ) : (
        <article className="leading-relaxed">
          <h1 className="text-5xl font-semibold tracking-wide flex justify-center py-6">
            Mission Statement: A Platform for "
            <span className="text-red-800">We</span>
            <span className="text-white ml-1">The</span>
            <span className="text-sky-800 ml-1">People</span>"
          </h1>
          <hr className="max-w-[75.3rem] flex justify-center mx-auto -mt-5 mb-6"></hr>
          <p className="max-w-[75.3rem] max-h-[28rem] overflow-auto text-lg flex flex-col pr-6 mx-auto tracking-wider text-amber-200">
            Our mission is to empower &quot;We the People&quot; by providing an
            unyielding platform for the free exchange of political thought and
            opinion. In a world of increasing political division and filtered
            information, we believe that a healthy democracy depends on the
            ability of every citizen to exercise their right to freedom of
            speech. This platform is built on the core principle that all
            voices, regardless of political affiliation or perspective, deserve
            to be heard and engaged with respectfully. We are dedicated to
            fostering a community where open dialogue and genuine debate can
            thrive, helping to bridge divides and cultivate a more informed and
            engaged citizenry.
            <br />
            <br />
            We are committed to creating a space where the power of individual
            expression can be fully realized. This platform is not just a place
            to speak, but a place to listen, learn, and grow. We aim to be a
            digital public square where ideas are tested, arguments are made,
            and new perspectives are gained. By providing an accessible and
            robust tool for political discourse, we seek to inspire a new
            generation of civic participation. We believe that when citizens are
            given the opportunity to freely and openly discuss the issues that
            matter most to them, they become more invested in their communities
            and more effective agents of change.
            <br />
            <br />
            Ultimately, our purpose is to serve as a cornerstone of democratic
            expression. We are building a movement for unfiltered, uncompromised
            political speech. Our success will be measured not by the number of
            users we have, but by the quality of the conversations we facilitate
            and the real-world impact they inspire. We stand firmly for the
            right of every person to speak their mind, to challenge the status
            quo, and to contribute to the ongoing, vital conversation that
            shapes the future of our nation.
            <br />
            <br />
            To sustain this vital mission, we rely on the generosity of citizens
            who believe in the power of free speech and democratic
            participation. Your donations directly support our commitment to
            keeping this platform free and accessible while enabling us to
            maintain current, factual content and resources. Beyond our digital
            presence, your contributions help us provide essential materials for
            peaceful civic engagement—including informational signs, educational
            t-shirts, awareness bumper stickers, and printed pamphlets that
            empower citizens to participate meaningfully in their communities.
            Every dollar donated strengthens our collective voice and ensures
            that the tools of democracy remain within reach of every American
            who chooses to stand up and be counted.
          </p>
        </article>
      )}
    </section>
  );
};

export default MissionComp;
