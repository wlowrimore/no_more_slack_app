"use client";

import React from "react";
import { useSession } from "next-auth/react";
import NoAuthPageMMessage from "./UI/NoAuthPageMMessage";

const DashboardComp = () => {
  const { data: session } = useSession();

  if (!session) {
    return <NoAuthPageMMessage />;
  }

  return (
    <div>
      <h1>
        {" "}
        className='text-2xl text-sky-500{session?.user?.name}&apos;s Dashboard
      </h1>
    </div>
  );
};

export default DashboardComp;
