import { defineField, defineType } from "sanity";

export default defineField({
  name: "constitutionalDocument",
  type: "document",
  title: "Constitutional Document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "documentType",
      type: "string",
      title: "Document Type",
      options: {
        list: [
          { title: "Constitution", value: "constitution" },
          { title: "Bill of Rights", value: "bill-of-rights" },
          { title: "Amendment", value: "amendment" },
          { title: "Federalist Papers", value: "federalist-papers" },
          { title: "Historical Document", value: "historical" },
        ],
      },
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    },
    {
      name: "plainTextExplanation",
      type: "array",
      title: "Plain Text Explanation",
      description: "Modern explanation for easier understanding",
      of: [{ type: "block" }],
    },
    {
      name: "historicalContext",
      type: "text",
      title: "Historical Context",
      rows: 5,
    },
    {
      name: "order",
      type: "number",
      title: "Display Order",
      description: "Order in which to display (e.g., Amendment 1, 2, 3...)",
    },
  ],
});
