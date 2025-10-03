import React from "react";
import Link from "next/link";
import { postType } from "@/app/blog/page";
// import { postType } from "../schemaTypes/postType";

const MainBlogComp = ({ posts }: { posts: postType[] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-slate-500 font-bold mb-8">Blog Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">
          No posts found. Create some posts in your Sanity Studio!
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post._id} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              {post.content && (
                <p className="text-gray-700 mb-4">{post.content}</p>
              )}
              <div className="text-sm text-gray-500">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : new Date(post._createdAt).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainBlogComp;
