import { defineField, defineType } from "sanity";

export default defineField({
  name: "userPreferences",
  type: "document",
  title: "User Preferences",
  fields: [
    {
      name: "userId",
      type: "string",
      title: "User ID",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "selectedTopics",
      type: "array",
      title: "Selected Dashboard Topics",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Congressional Voting Records",
            value: "congressional-voting",
          },
          { title: "Lobbying & Campaign Finance", value: "lobbying-money" },
          { title: "Active Legislation Tracker", value: "bill-tracker" },
          { title: "Supreme Court Activity", value: "supreme-court" },
          { title: "Approval Ratings", value: "approval-ratings" },
          { title: "Fact Check Tracker", value: "fact-checks" },
          { title: "Voting Rights Monitor", value: "voting-rights" },
          { title: "Executive Orders", value: "executive-orders" },
        ],
      },
      validation: (Rule: any) => Rule.max(4),
    },
    {
      name: "zipCode",
      type: "string",
      title: "ZIP Code",
      description: "For finding representatives via Google Civic API",
    },
  ],
});
