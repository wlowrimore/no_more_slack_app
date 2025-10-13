import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import ApprovalRatingsWidget from "../components/dashboard/widgets/ApprovalRatingsWidget";
import BillTrackerWidget from "../components/dashboard/widgets/BillTrackerWidget";
import ExecutiveOrdersWidget from "../components/dashboard/widgets/ExecutiveOrdersWidget";
import SupremeCourtWidget from "../components/dashboard/widgets/SupremeCourtWidget";
import VotingInfoWidget from "../components/dashboard/widgets/VotingInfoWidget";
import VotingRightsWidget from "../components/dashboard/widgets/VotingRightsWidget";
import FactCheckWidget from "../components/dashboard/widgets/FactCheckWidget";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-4 pb-32 md:p-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-amber-200">Truth Dashboard</h1>
          <p className="text-slate-300 text-lg">
            Stay informed with facts, not narratives
          </p>
        </div>
        <section className="grid grid-cols-3 gap-4">
          <ApprovalRatingsWidget />
          <BillTrackerWidget />
          <ExecutiveOrdersWidget />
          <FactCheckWidget />
          <SupremeCourtWidget />
          <VotingInfoWidget />
          <VotingRightsWidget />
        </section>
      </div>
    </div>
  );
}
