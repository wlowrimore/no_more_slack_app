import React from "react";
import UsefulLinksComp from "../components/UsefulLinksComp";
import linkCategories, { LinkCategory } from "@/lib/usefulLinksCategories/ulc";

interface UsefulLinksCompProps {
  linkCategories: LinkCategory[];
}
const page = () => {
  const categories = linkCategories();
  return <UsefulLinksComp linkCategories={categories} />;
};
export default page;
