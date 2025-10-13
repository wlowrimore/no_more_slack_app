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
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ApprovalRatingsWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const widgetData = await getWidgetData("approval-ratings");
      console.log("APPROVAL RATINGS WIDGET DATA", widgetData);
      setData(widgetData);
    }
    fetchData();
  }, []);

  const widgetData = data;

  if (!widgetData) {
    return (
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
        <CardContent className="p-6">
          <p className="text-slate-400 text-center">
            No approval ratings data available. Please add data in Sanity
            Studio.
          </p>
        </CardContent>
      </Card>
    );
  }

  const chartData =
    widgetData.chartData?.map((item: any) => ({
      name: item.label,
      rating: item.value,
      ...(item.value2 && { comparison: item.value2 }),
    })) || [];

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-amber-200 flex items-center gap-2">
          <span className="text-2xl text-slate-400">📊</span>
          Approval Ratings Tracker
        </CardTitle>
        <CardDescription className="text-slate-400">
          How Americans rate government institutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ color: "#94a3b8" }} />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Approval Rating"
            />
          </LineChart>
        </ResponsiveContainer>

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
