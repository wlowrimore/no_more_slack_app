import { client } from "@/lib/sanity";
import { postsQuery } from "@/sanity-back-end/lib/queries";
import { postType } from "@/app/schemaTypes/postType";
import Link from "next/link";

interface postType {
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
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

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
}
