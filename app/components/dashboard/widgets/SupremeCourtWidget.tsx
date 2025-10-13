import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";
import { getWidgetData } from "@/lib/sanityQueries";

const cases = [
  {
    name: "First Amendment vs. Social Media",
    status: "Oral Arguments Complete",
    topic: "Free Speech",
    ruling: "Pending",
    color: "text-yellow-400",
  },
  {
    name: "Voting Rights Act Challenge",
    status: "Decided",
    topic: "Voting Rights",
    ruling: "6-3 Decision",
    color: "text-green-400",
  },
  {
    name: "Gun Rights Regulations",
    status: "Awaiting Hearing",
    topic: "2nd Amendment",
    ruling: "TBD",
    color: "text-blue-400",
  },
];

export default async function SupremeCourtWidget() {
  const widgetData = await getWidgetData("supreme-court");

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">⚖️</span>
          Supreme Court Activity
        </CardTitle>
        <CardDescription className="text-slate-400">
          Current cases affecting constitutional law
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {cases.map((courtCase, index) => (
          <div
            key={index}
            className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white font-semibold text-sm flex-1">
                {courtCase.name}
              </h4>
              <Badge
                variant="outline"
                className="border-slate-600 text-slate-300"
              >
                {courtCase.topic}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{courtCase.status}</p>
              <p className={`text-sm font-semibold ${courtCase.color}`}>
                {courtCase.ruling}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            The Supreme Court is hearing {cases.length} major constitutional
            cases this term that could reshape American rights and freedoms.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
