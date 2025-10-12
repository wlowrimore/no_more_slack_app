import { auth } from "@/app/api/auth/[...nextauth]/route";
import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  try {
    const userPrefs = await client.fetch(
      `*[_type == "userPreferences" && userId == $userId][0]`,
      { userId }
    );

    return NextResponse.json({
      topics: userPrefs?.selectedTopics || [],
    });
  } catch (error) {
    console.error("Error fetching user topics:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId, topics } = await request.json();

    // Check if user preferences exist
    const existing = await client.fetch(
      `*[_type == "userPreferences" && userId == $userId][0]`,
      { userId }
    );

    if (existing) {
      // Update existing preferences
      await client.patch(existing._id).set({ selectedTopics: topics }).commit();
    } else {
      // Create new preferences document
      await client.create({
        _type: "userPreferences",
        userId,
        selectedTopics: topics,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving user topics:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
