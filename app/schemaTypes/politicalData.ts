import { defineField, defineType } from "sanity";

export default defineField({
  name: "politicalData",
  type: "document",
  title: "Political Data & Statistics",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Congressional Data", value: "congress" },
          { title: "Campaign Finance", value: "finance" },
          { title: "Voting Records", value: "voting" },
          { title: "Polling Data", value: "polls" },
          { title: "Legislation", value: "legislation" },
          { title: "Court Decisions", value: "courts" },
          { title: "Election Results", value: "elections" },
          { title: "Government Spending", value: "spending" },
        ],
      },
    },
    {
      name: "value",
      type: "string",
      title: "Value",
      description: "The actual data point",
    },
    {
      name: "context",
      type: "text",
      title: "Context",
      description: "What does this number mean?",
      rows: 3,
    },
    {
      name: "source",
      type: "string",
      title: "Source",
      description: "Where did this data come from?",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sourceUrl",
      type: "url",
      title: "Source URL",
    },
    {
      name: "verifiedDate",
      type: "datetime",
      title: "Date Verified",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
  ],
});
