import { defineField, defineType } from "sanity";

export default defineField({
  name: "headline",
  type: "document",
  title: "News Headline",
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
      name: "source",
      type: "string",
      title: "Source",
      description: "e.g., Constitutional Law Review, Democracy Watch",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "impact",
      type: "string",
      title: "Impact Level",
      options: {
        list: [
          { title: "High Impact", value: "high" },
          { title: "Medium Impact", value: "medium" },
          { title: "Low Impact", value: "low" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Constitutional Rights", value: "constitutional-rights" },
          { title: "Voting Rights", value: "voting-rights" },
          { title: "Free Speech", value: "free-speech" },
          { title: "Privacy Rights", value: "privacy-rights" },
          { title: "Gun Rights", value: "gun-rights" },
          { title: "Criminal Justice", value: "criminal-justice" },
          { title: "Civil Rights", value: "civil-rights" },
          { title: "Government Oversight", value: "government-oversight" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: "content",
      type: "array",
      title: "Full Article Content",
      of: [{ type: "block" }],
    },
    {
      name: "viewCount",
      type: "string",
      title: "View Count Display",
      description: 'e.g., "2.3M", "150K"',
      initialValue: "0",
    },
    {
      name: "featured",
      type: "boolean",
      title: "Featured on Dashboard",
      description: "Show this as a top headline",
      initialValue: false,
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      validation: (Rule: any) => Rule.required(),
    },
  ],
});
