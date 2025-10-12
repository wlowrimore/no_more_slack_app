import { defineField, defineType } from "sanity";

export default defineField({
  name: "widgetData",
  type: "document",
  title: "Dashboard Widget Data",
  fields: [
    {
      name: "widgetType",
      type: "string",
      title: "Widget Type",
      options: {
        list: [
          { title: "Congressional Voting", value: "congressional-voting" },
          { title: "Lobbying Money", value: "lobbying-money" },
          { title: "Fact Checks", value: "fact-checks" },
          { title: "Approval Ratings", value: "approval-ratings" },
          { title: "Bill Tracker", value: "bill-tracker" },
          { title: "Supreme Court", value: "supreme-court" },
          { title: "Voting Rights", value: "voting-rights" },
          { title: "Executive Orders", value: "executive-orders" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Active",
      description: "Show this widget data on dashboard",
      initialValue: true,
    },
    {
      name: "lastUpdated",
      type: "datetime",
      title: "Last Updated",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "dataSource",
      type: "string",
      title: "Data Source",
      description: "Where did this data come from?",
      placeholder: "e.g., Congressional Records, FiveThirtyEight, etc.",
    },
    {
      name: "keyInsight",
      type: "text",
      title: "Key Insight",
      description: "The main takeaway users should understand",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "chartData",
      type: "array",
      title: "Chart Data",
      description: "Data points for the chart",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
            },
            {
              name: "value",
              type: "number",
              title: "Value",
            },
            {
              name: "value2",
              type: "number",
              title: "Secondary Value (optional)",
            },
            {
              name: "color",
              type: "string",
              title: "Color (optional)",
              description: "Hex color code like #ef4444",
            },
            {
              name: "metadata",
              type: "string",
              title: "Additional Info (optional)",
            },
          ],
        },
      ],
    },
    {
      name: "listData",
      type: "array",
      title: "List Data",
      description: "For widgets that show lists (bills, court cases, etc.)",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "subtitle",
              type: "string",
              title: "Subtitle",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              rows: 2,
            },
            {
              name: "status",
              type: "string",
              title: "Status",
            },
            {
              name: "category",
              type: "string",
              title: "Category",
            },
            {
              name: "impact",
              type: "string",
              title: "Impact Level",
              options: {
                list: ["High", "Medium", "Low"],
              },
            },
            {
              name: "link",
              type: "url",
              title: "External Link (optional)",
            },
            {
              name: "date",
              type: "datetime",
              title: "Date",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "widgetType",
      subtitle: "lastUpdated",
      active: "isActive",
    },
    prepare(selection: any) {
      const { title, subtitle, active } = selection;
      return {
        title: title,
        subtitle: `${active ? "✓ Active" : "✗ Inactive"} - Updated: ${new Date(subtitle).toLocaleDateString()}`,
      };
    },
  },
});
