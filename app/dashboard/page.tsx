// app/dashboard/page.tsx
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
// import TopHeadlines from "@/components/dashboard/TopHeadlines";
// import TopicSelector from "@/components/dashboard/TopicSelector";
// import TopicWidgetsGrid from "@/components/dashboard/TopicWidgetsGrid";
// import MyRepresentatives from "@/components/dashboard/MyRepresentatives";
// import ConstitutionalQuickRef from "@/components/dashboard/ConstitutionalQuickRef";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Truth Dashboard
          </h1>
          <p className="text-slate-300 text-lg">
            Stay informed with facts, not narratives
          </p>
        </div>

        {/* Top Headlines - 2 Column Grid */}
        {/* <TopHeadlines /> */}

        {/* My Representatives Quick View */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TopicSelector userId={session.user.id!} />
          </div>
          <div>
            <MyRepresentatives />
          </div>
        </div> */}

        {/* Topic Widgets Grid - User Selected Topics */}
        {/* <TopicWidgetsGrid userId={session.user.id!} /> */}

        {/* Constitutional Quick Reference */}
        {/* <ConstitutionalQuickRef /> */}
      </div>
    </div>
  );
}
