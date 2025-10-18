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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BillTrackerWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const widgetData = await getWidgetData("bill-tracker");
      console.log("BILL TRACKER WIDGET DATA", widgetData);
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
            No bill data available. Please add data in Sanity Studio.
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

  // const widgetData = data;

  // if (!widgetData) {
  //   return (
  //     <Card className="bg-slate-800/50 border-slate-700">
  //       <CardContent className="p-6">
  //         <p className="text-slate-400 text-center">No bill data available.</p>
  //       </CardContent>
  //     </Card>
  //   );
  // }

  const bills = widgetData.listData?.slice(0, 3) || [];

  const statusColors: Record<string, string> = {
    "In Committee": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "Passed Senate": "bg-green-500/10 text-green-400 border-green-500/20",
    "Passed House": "bg-green-500/10 text-green-400 border-green-500/20",
    Debate: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Signed: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Vetoed: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  const impactColors: Record<string, string> = {
    High: "bg-red-500/10 text-red-400 border-red-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Low: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-amber-200 flex items-center gap-2">
          <span className="text-2xl">📜</span>
          Active Legislation Tracker
        </CardTitle>
        <CardDescription className="text-slate-400">
          Bills affecting your constitutional rights
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {bills.map((bill: any, index: number) => (
          <div
            key={index}
            className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className="text-slate-400 border-slate-600"
                  >
                    {bill.subtitle}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      statusColors[bill.status] || statusColors["Debate"]
                    }
                  >
                    {bill.status}
                  </Badge>
                </div>
                <h4 className="text-white font-semibold text-sm">
                  {bill.title}
                </h4>
              </div>
              {bill.impact && (
                <Badge
                  variant="outline"
                  className={`${impactColors[bill.impact]} shrink-0`}
                >
                  {bill.impact} Impact
                </Badge>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-3">{bill.description}</p>
            {bill.link && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-blue-400 hover:bg-slate-800"
                asChild
              >
                <a href={bill.link} target="_blank" rel="noopener noreferrer">
                  Read Full Bill
                </a>
              </Button>
            )}
          </div>
        ))}

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
