import { auth } from "@/app/api/auth/[...nextauth]/route";
import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch top 2 high-impact headlines from Sanity
    const headlines = await client.fetch(
      `*[_type == "headline" && impact == "high"] | order(_createdAt desc)[0...2] {
        _id,
        title,
        source,
        impact,
        category,
        summary,
        "url": slug.current,
        viewCount,
        _createdAt
      }`
    );

    // Format the response
    const formattedHeadlines = headlines.map((headline: any) => ({
      ...headline,
      date: formatTimeAgo(new Date(headline._createdAt)),
      url: `/news/${headline.url}`,
    }));

    return NextResponse.json({ headlines: formattedHeadlines });
  } catch (error) {
    console.error("Error fetching headlines:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}
