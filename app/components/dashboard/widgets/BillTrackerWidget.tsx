"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Clock } from "lucide-react";

const activeBills = [
  {
    id: "HR-1234",
    title: "Voting Rights Expansion Act",
    status: "In Committee",
    statusColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    impact: "High",
    summary:
      "Expands early voting periods and restores Voting Rights Act provisions",
  },
  {
    id: "S-5678",
    title: "Privacy Protection Reform",
    status: "Passed Senate",
    statusColor: "bg-green-500/10 text-green-400 border-green-500/20",
    impact: "High",
    summary:
      "Requires tech companies to protect user data and limit data collection",
  },
  {
    id: "HR-9012",
    title: "Police Reform Bill",
    status: "Debate",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    impact: "High",
    summary:
      "Implements national standards for use of force and qualified immunity",
  },
];

export default function BillTrackerWidget() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">📜</span>
          Active Legislation Tracker
        </CardTitle>
        <CardDescription className="text-slate-400">
          Bills affecting your constitutional rights
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeBills.map((bill) => (
          <div
            key={bill.id}
            className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className="text-slate-400 border-slate-600"
                  >
                    {bill.id}
                  </Badge>
                  <Badge variant="outline" className={bill.statusColor}>
                    {bill.status}
                  </Badge>
                </div>
                <h4 className="text-white font-semibold text-sm">
                  {bill.title}
                </h4>
              </div>
              <Badge
                variant="outline"
                className="bg-red-500/10 text-red-400 border-red-500/20 shrink-0"
              >
                {bill.impact} Impact
              </Badge>
            </div>
            <p className="text-sm text-slate-400 mb-3">{bill.summary}</p>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-blue-400 hover:bg-slate-800"
            >
              Track This Bill
            </Button>
          </div>
        ))}

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            {activeBills.length} high-impact bills are currently in various
            stages. Stay informed on legislation that directly affects your
            rights.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
