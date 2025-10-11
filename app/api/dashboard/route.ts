// app/api/dashboard/route.ts
import { auth } from "../auth/[...nextauth]/route";
import { client } from "@/app/sanity/client";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userProgress = await client.fetch(
    `*[_type == "userProgress" && userId == $userId][0]`,
    { userId: session.user.id }
  );

  // Fetch bookmarked articles
  const bookmarks = await client.fetch(`*[_type == "article" && _id in $ids]`, {
    ids: userProgress?.bookmarkedArticles || [],
  });

  return Response.json({
    progress: userProgress,
    bookmarks,
    user: session.user,
  });
}
