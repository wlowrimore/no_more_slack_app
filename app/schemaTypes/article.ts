import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  type: "document",
  title: "Article",
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
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Constitution", value: "constitution" },
          { title: "Bill of Rights", value: "bill-of-rights" },
          { title: "History", value: "history" },
          { title: "Government", value: "government" },
          { title: "Current Events", value: "current-events" },
          { title: "Voting", value: "voting" },
          { title: "Rights", value: "rights" },
        ],
      },
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      rows: 3,
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    },
    {
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      options: {
        hotspot: true,
      },
    },
  ],
});
