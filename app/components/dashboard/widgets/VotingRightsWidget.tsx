"use client";

import { useState, useEffect } from "react";
import { getWidgetData } from "@/lib/sanityQueries";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default async function VotingRightsWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const widgetData = await getWidgetData("voting-rights");
      console.log("VOTING RIGHTS WIDGET DATA", widgetData);
      setData(widgetData);
    }
    fetchData();
  }, []);

  const votingData = data?.chartData;

  console.log("VOTING RIGHTS WIDGET DATA", votingData);
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">🗳️</span>
          Voting Rights Monitor
        </CardTitle>
        <CardDescription className="text-slate-400">
          State legislation affecting ballot access (2024)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={votingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="state" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#94a3b8" }} />
            <Bar
              dataKey="restrictions"
              fill="#ef4444"
              name="Restrictions"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expansions"
              fill="#22c55e"
              name="Expansions"
              radius={[4, 4, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            States have passed significantly more voting restrictions than
            expansions in 2024. Monitor legislation in your state to protect
            ballot access.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
