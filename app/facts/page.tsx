import React from "react";
import FactsPageComp from "../components/FactsPageComp";

const page = () => {
  return (
    <FactsPageComp
      key={1}
      id={1}
      title={"Facts"}
      image={""}
      description={""}
      importance={[]}
      sources={[]}
    />
  );
};

export default page;
