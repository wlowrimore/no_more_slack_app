import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { getWidgetData } from "@/lib/sanityQueries";

export default async function ExecutiveOrdersWidget() {
  const widgetData = await getWidgetData("executive-orders");
  const executiveOrders = widgetData?.listData;
  const orderDate = widgetData?.listData?.date;

  if (!executiveOrders) {
    return (
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
        <CardContent className="p-6">
          <p className="text-slate-400 text-center">
            No executive orders data available. Please add data in Sanity
            Studio.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-amber-200 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Executive Orders
        </CardTitle>
        <CardDescription className="text-slate-400">
          Presidential actions and their impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {executiveOrders.map((order: any) => (
          <div
            key={order.id}
            className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                {/* <Badge
                  variant="outline"
                  className="text-slate-400 border-slate-600 mb-2"
                >
                  {order.id}
                </Badge> */}
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
            <p className="text-sm text-slate-400 mb-3">{order.description}</p>
            {order.link && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-blue-400 hover:bg-slate-800"
                asChild
              >
                <a href={order.link} target="_blank" rel="noopener noreferrer">
                  Read the Full Order
                </a>
              </Button>
            )}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              <span>Signed on {orderDate}</span>
            </div>
          </div>
        ))}

        <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-semibold">
            KEY INSIGHT:
          </p>
          <p className="text-sm text-slate-300">
            The current administration has issued these three major executive
            orders most reeceently, bypassing congressional gridlock on key
            issues.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
