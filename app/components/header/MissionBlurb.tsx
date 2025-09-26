import TextTruncator from "@/lib/TextTruncator";

const MissionBlurb = () => {
  const missionText = `We are committed to creating a space where the power of individual
          expression can be fully realized. This platform is not just a place to
          speak, but a place to listen, learn, and grow. We aim to be a digital
          public square where ideas are tested, arguments are made, and new
          perspectives are gained. By providing an accessible and robust tool
          for political discourse, we seek to inspire a new generation of civic
          participation. We believe that when citizens are given the opportunity
          to freely and openly discuss the issues that matter most to them, they
          become more invested in their communities and more effective agents of
          change.`;

  return (
    <main className="max-w-[24rem]">
      <article>
        <TextTruncator
          text={missionText}
          wordLimit={25}
          linkText="...read further"
          linkHref="/mission-statement"
          className="text-sm text-amber-100 tracking-wider"
        />
      </article>
    </main>
  );
};

export default MissionBlurb;
