import React from "react";
import { auth } from "../app/api/auth/[...nextauth]/route";

export async function getUsersFirstName() {
  const session = await auth();

  try {
    if (session && session.user) {
      return session.user.name?.split(" ")[0];
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
  return "Guest's";
}

// export asnyc function getPathFromSlug({ params }: { params: { slug: string } }) {
//   console.log("params.slug", params.slug);
//   return [params.slug];
// }
