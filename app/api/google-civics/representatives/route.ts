import { auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address") || "Pompano Beach, FL";

  try {
    const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

    if (!apiKey) {
      // Return mock data if no API key
      return NextResponse.json({
        representatives: [
          {
            name: "Sen. Marco Rubio",
            position: "U.S. Senator",
            party: "Republican Party",
            phones: ["(202) 224-3041"],
            urls: ["https://www.rubio.senate.gov"],
          },
          {
            name: "Sen. Rick Scott",
            position: "U.S. Senator",
            party: "Republican Party",
            phones: ["(202) 224-5274"],
            urls: ["https://www.rickscott.senate.gov"],
          },
        ],
      });
    }

    const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${encodeURIComponent(address)}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    // Format the response
    const representatives = data.officials
      ?.slice(0, 5)
      .map((official: any, index: number) => ({
        name: official.name,
        position: data.offices?.[index]?.name || "Official",
        party: official.party || "Independent",
        phones: official.phones || [],
        urls: official.urls || [],
        photoUrl: official.photoUrl,
      }));

    return NextResponse.json({ representatives });
  } catch (error) {
    console.error("Error fetching representatives:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
