import { defineField, defineType } from "sanity";

export const userProgress = defineType({
  name: "userProgress",
  type: "document",
  title: "User Progress",
  fields: [
    {
      name: "userId",
      type: "string",
      title: "User ID",
    },
    {
      name: "bookmarkedArticles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    },
    {
      name: "readingProgress",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "documentId", type: "string" },
            { name: "progress", type: "number" },
            { name: "lastRead", type: "datetime" },
          ],
        },
      ],
    },
    {
      name: "quizScores",
      type: "array",
      title: "Quiz Scores",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quizId",
              type: "string",
              title: "Quiz ID",
            },
            {
              name: "quizTitle",
              type: "string",
              title: "Quiz Title",
            },
            {
              name: "topic",
              type: "string",
              title: "Topic",
            },
            {
              name: "score",
              type: "number",
              title: "Score",
              validation: (Rule: any) => Rule.min(0).max(100),
            },
            {
              name: "completedAt",
              type: "datetime",
              title: "Completed At",
            },
          ],
        },
      ],
    },
    {
      name: "interests",
      type: "array",
      title: "Interests",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "First Amendment", value: "first-amendment" },
          { title: "Voting Rights", value: "voting-rights" },
          { title: "Privacy Rights", value: "privacy-rights" },
          { title: "Second Amendment", value: "second-amendment" },
          { title: "Criminal Justice", value: "criminal-justice" },
          { title: "Civil Rights", value: "civil-rights" },
          { title: "Federal Government", value: "federal-government" },
          { title: "State Government", value: "state-government" },
          { title: "Local Government", value: "local-government" },
          { title: "Supreme Court", value: "supreme-court" },
        ],
      },
    },
    {
      name: "learningStreak",
      type: "number",
      title: "Learning Streak (Days)",
      initialValue: 0,
    },
    {
      name: "lastActivity",
      type: "datetime",
      title: "Last Activity",
    },
    {
      name: "zipCode",
      type: "string",
      title: "ZIP Code",
      description: "For finding representatives",
    },
  ],
});
