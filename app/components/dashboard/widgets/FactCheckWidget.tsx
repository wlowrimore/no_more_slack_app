"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { getWidgetData } from "@/lib/sanityQueries";

export default function FactCheckWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const widgetData = await getWidgetData("fact-checks");
      console.log("FACT CHECK WIDGET DATA", widgetData);
      setData(widgetData);
    }
    fetchData();
  }, []);

  const widgetData = data;

  if (!widgetData) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <p className="text-slate-400 text-center">
            No fact check data available.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Transform chart data
  const chartData =
    widgetData.chartData?.map((item: any) => ({
      rating: item.label,
      count: item.value,
      color: item.color || "#3b82f6",
    })) || [];

  // Get recent claims from list data
  const recentClaims = widgetData.listData?.slice(0, 3) || [];

  // Map status to colors for badges
  const ratingColors: Record<string, string> = {
    True: "text-lime-400",
    "Mostly True": "text-green-400",
    "Half True": "text-yellow-400",
    "Mostly False": "text-orange-400",
    False: "text-red-400",
    "Pants on Fire": "text-red-600",
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">✓</span>
          Political Fact Checks
        </CardTitle>
        <CardDescription className="text-slate-400">
          Truth vs. fiction in political statements
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="rating"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`${value} claims`, ""]}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Recent claims from Sanity listData */}
        {recentClaims.length > 0 && (
          <div className="mt-6 space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Recent Fact Checks:
            </p>
            {recentClaims.map((claim: any, index: number) => (
              <div
                key={index}
                className="p-3 bg-slate-900/50 rounded-lg border border-slate-700"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm text-slate-300 italic flex-1">
                    "{claim.title}"
                  </p>
                  <Badge
                    variant="outline"
                    className={`${ratingColors[claim.status] || "text-slate-400"} border-current shrink-0`}
                  >
                    {claim.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500">— {claim.subtitle}</p>
              </div>
            ))}
          </div>
        )}

        {/* Key insight */}
        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">{widgetData.keyInsight}</p>
          <p className="text-xs text-slate-500 mt-2">
            Source: {widgetData.dataSource} • Updated:{" "}
            {new Date(widgetData.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
