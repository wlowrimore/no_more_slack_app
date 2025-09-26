import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "e0b9vgtk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
