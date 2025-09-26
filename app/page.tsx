// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";

// import { client } from "@/lib/sanity";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

// export default async function IndexPage() {
//   const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

//   return (
//     <main className="container mx-auto min-h-screen max-w-3xl p-8">
//       <h1 className="text-4xl font-bold mb-8">Posts</h1>
//       <ul className="flex flex-col gap-y-4">
//         {posts.map((post) => (
//           <li className="hover:underline" key={post._id}>
//             <Link href={`/${post.slug.current}`}>
//               <h2 className="text-xl font-semibold">{post.title}</h2>
//               <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

import { auth } from "@/app/api/auth/[...nextauth]/route";
import fetchNewsData from "@/lib/fetchNews";
import GoogleSignIn from "./components/authComponents/GoogleSignIn";
import NewsCarousel from "./components/UI/NewsCarousel";
import FrontPageArticleComp from "./components/UI/FrontPageArticleComp";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <main className="w-8xl py-30 flex flex-col justify-center">
        <section className="max-w-5xl border border-neutral-300/30 px-6 py-4 rounded-lg flex flex-col mx-auto">
          <FrontPageArticleComp />
          <GoogleSignIn />
        </section>
      </main>
    );
  }
  const newsData = await fetchNewsData();

  return (
    <main className="w-8xl p-12 h-screen flex flex-col items-center">
      {session ? (
        <NewsCarousel articles={newsData.results || []} />
      ) : (
        <section className="flex">
          <GoogleSignIn />
        </section>
      )}
    </main>
  );
}
