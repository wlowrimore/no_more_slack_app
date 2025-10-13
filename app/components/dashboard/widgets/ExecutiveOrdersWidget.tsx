import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { getWidgetData } from "@/lib/sanityQueries";

const executiveOrders = [
  {
    id: "EO-14321",
    title: "Climate Action Executive Order",
    date: "3 days ago",
    category: "Environment",
    impact: "Requires federal agencies to achieve net-zero emissions by 2030",
  },
  {
    id: "EO-14318",
    title: "Immigration Policy Reform",
    date: "1 week ago",
    category: "Immigration",
    impact: "Changes asylum processing procedures at southern border",
  },
  {
    id: "EO-14305",
    title: "Healthcare Access Initiative",
    date: "2 weeks ago",
    category: "Healthcare",
    impact: "Expands Medicare coverage and reduces prescription drug costs",
  },
];

export default async function ExecutiveOrdersWidget() {
  const widgetData = await getWidgetData("executive-orders");

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Executive Orders
        </CardTitle>
        <CardDescription className="text-slate-400">
          Presidential actions and their impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {executiveOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <Badge
                  variant="outline"
                  className="text-slate-400 border-slate-600 mb-2"
                >
                  {order.id}
                </Badge>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {order.title}
                </h4>
              </div>
              <Badge
                variant="outline"
                className="bg-blue-500/10 text-blue-400 border-blue-500/20 shrink-0"
              >
                {order.category}
              </Badge>
            </div>
            <p className="text-sm text-slate-400 mb-2">{order.impact}</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              <span>Signed {order.date}</span>
            </div>
          </div>
        ))}

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            The current administration has issued {executiveOrders.length} major
            executive orders this month, bypassing congressional gridlock on key
            issues.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
