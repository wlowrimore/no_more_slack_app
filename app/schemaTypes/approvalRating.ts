import { defineField, defineType } from "sanity";

export default defineField({
  name: "approvalRating",
  type: "document",
  title: "Approval Rating",
  fields: [
    { name: "entity", type: "string", title: "Entity" },
    { name: "rating", type: "number", title: "Rating" },
    { name: "date", type: "datetime", title: "Date" },
    { name: "source", type: "string", title: "Source" },
  ],
});
