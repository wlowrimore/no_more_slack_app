interface CivicApiResponse {
  officials: Official[];
  offices: Office[];
  divisions: Record<string, Division>;
}

interface Official {
  name: string;
  party?: string;
  phones?: string[];
  urls?: string[];
  photoUrl?: string;
  emails?: string[];
  channels?: Channel[];
  address?: Address[];
}

interface Office {
  name: string;
  divisionId: string;
  levels: string[];
  roles?: string[];
  officialIndices: number[];
}

interface Division {
  name: string;
  officeIndices?: number[];
}

interface Channel {
  type: string;
  id: string;
}

interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export async function getRepresentatives(address: string) {
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

  if (!apiKey) {
    console.warn("Google Civic API key not found");
    return;
  }

  try {
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${encodeURIComponent(address)}&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from Google Civic API");
    }

    const data: CivicApiResponse = await response.json();

    return formatRepresentatives(data);
  } catch (error) {
    console.error("Error fetching representatives:", error);
    return [];
  }
}

export async function getElectionInfo(address: string) {
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const url = `https://www.googleapis.com/civicinfo/v2/elections?key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch election info");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching election info:", error);
    return null;
  }
}

export async function getVoterInfo(address: string, electionId?: string) {
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    let url = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${encodeURIComponent(address)}&key=${apiKey}`;

    if (electionId) {
      url += `&electionId=${electionId}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch voter info");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching voter info:", error);
    return null;
  }
}

function formatRepresentatives(data: CivicApiResponse) {
  const representatives = [];

  for (let i = 0; i < data.offices.length; i++) {
    const office = data.offices[i];

    // Focus on federal representatives
    if (office.levels?.includes("country")) {
      for (const officialIndex of office.officialIndices) {
        const official = data.officials[officialIndex];

        representatives.push({
          id: `${office.name}-${officialIndex}`,
          name: official.name,
          position: office.name,
          party: official.party || "Unknown",
          phone: official.phones?.[0] || "N/A",
          email: official.emails?.[0] || "Contact via website",
          website: official.urls?.[0] || "#",
          photoUrl: official.photoUrl,
          socialMedia:
            official.channels?.map((ch) => ({
              platform: ch.type,
              handle: ch.id,
            })) || [],
          address: official.address?.[0],
        });
      }
    }
  }

  return representatives;
}
