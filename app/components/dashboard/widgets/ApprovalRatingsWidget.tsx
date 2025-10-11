// components/dashboard/widgets/ApprovalRatingsWidget.tsx
"use client";

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

// Mock data - replace with FiveThirtyEight or RealClearPolitics API
const approvalData = [
  { date: "Jan", president: 42, congress: 18, scotus: 38 },
  { date: "Feb", president: 41, congress: 17, scotus: 39 },
  { date: "Mar", president: 43, congress: 19, scotus: 37 },
  { date: "Apr", president: 40, congress: 16, scotus: 36 },
  { date: "May", president: 39, congress: 15, scotus: 35 },
  { date: "Jun", president: 41, congress: 18, scotus: 37 },
];

export default function ApprovalRatingsWidget() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">📊</span>
          Approval Ratings Tracker
        </CardTitle>
        <CardDescription className="text-slate-400">
          How Americans rate government institutions (6-month trend)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={approvalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 100]}
              label={{
                value: "Approval %",
                angle: -90,
                position: "insideLeft",
                fill: "#94a3b8",
              }}
            />
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
              dataKey="president"
              stroke="#3b82f6"
              strokeWidth={2}
              name="President"
              dot={{ fill: "#3b82f6" }}
            />
            <Line
              type="monotone"
              dataKey="congress"
              stroke="#ef4444"
              strokeWidth={2}
              name="Congress"
              dot={{ fill: "#ef4444" }}
            />
            <Line
              type="monotone"
              dataKey="scotus"
              stroke="#22c55e"
              strokeWidth={2}
              name="Supreme Court"
              dot={{ fill: "#22c55e" }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-xs text-slate-400 mb-1">President</p>
            <p className="text-2xl font-bold text-blue-400">
              {approvalData[approvalData.length - 1].president}%
            </p>
          </div>
          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <p className="text-xs text-slate-400 mb-1">Congress</p>
            <p className="text-2xl font-bold text-red-400">
              {approvalData[approvalData.length - 1].congress}%
            </p>
          </div>
          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p className="text-xs text-slate-400 mb-1">SCOTUS</p>
            <p className="text-2xl font-bold text-green-400">
              {approvalData[approvalData.length - 1].scotus}%
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            Congress remains at historic lows with only{" "}
            {approvalData[approvalData.length - 1].congress}% approval. The gap
            between executive and legislative branches continues to widen.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
