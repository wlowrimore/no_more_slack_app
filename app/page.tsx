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
        <>
          <NewsCarousel articles={newsData.results || []} />
        </>
      ) : (
        <section className="flex">
          <GoogleSignIn />
        </section>
      )}
    </main>
  );
}
