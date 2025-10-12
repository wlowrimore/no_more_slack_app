import { defineField, defineType } from "sanity";

export default defineField({
  name: "votingInfo",
  type: "document",
  title: "Voting Information",
  fields: [
    {
      name: "state",
      type: "string",
      title: "State",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "registrationDeadline",
      type: "datetime",
      title: "Registration Deadline",
    },
    {
      name: "earlyVotingStart",
      type: "datetime",
      title: "Early Voting Start Date",
    },
    {
      name: "earlyVotingEnd",
      type: "datetime",
      title: "Early Voting End Date",
    },
    {
      name: "electionDay",
      type: "datetime",
      title: "Election Day",
    },
    {
      name: "voterIdRequired",
      type: "boolean",
      title: "Voter ID Required",
    },
    {
      name: "acceptedIdTypes",
      type: "array",
      title: "Accepted ID Types",
      of: [{ type: "string" }],
    },
    {
      name: "registrationUrl",
      type: "url",
      title: "Voter Registration URL",
    },
    {
      name: "pollingPlaceUrl",
      type: "url",
      title: "Find Polling Place URL",
    },
    {
      name: "importantNotes",
      type: "array",
      title: "Important Notes",
      of: [{ type: "block" }],
    },
  ],
});
