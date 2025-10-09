import React from "react";
import { auth } from "../api/auth/[...nextauth]/route";
import { getUsersFirstName } from "@/lib/server-side-helper-funcs";
import NoAuthPageMMessage from "./UI/NoAuthPageMMessage";

const DashboardComp = async () => {
  const firstName = await getUsersFirstName();
  const session = await auth();

  if (!session) {
    return <NoAuthPageMMessage />;
  }

  return (
    <div>
      <h1 className="text-2xl text-sky-500">
        {session?.user?.name}&apos;s Dashboard
      </h1>
    </div>
  );
};

export default DashboardComp;
