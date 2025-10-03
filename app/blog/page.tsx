import { client } from "@/lib/sanity";
import { postsQuery } from "@/sanity-back-end/lib/queries";
import { auth } from "../api/auth/[...nextauth]/route";
import { postType } from "@/app/schemaTypes/postType";
import Link from "next/link";
import MainBlogComp from "../components/MainBlogComp";
import NoAuthPageMMessage from "../components/UI/NoAuthPageMMessage";

export interface postType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  content: string;
  publishedAt: string;
  _createdAt: string;
}

async function getPosts(): Promise<postType[]> {
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const session = await auth();

  if (!session) {
    return <NoAuthPageMMessage />;
  }
  const posts = await getPosts();

  return <MainBlogComp posts={posts} />;
}
