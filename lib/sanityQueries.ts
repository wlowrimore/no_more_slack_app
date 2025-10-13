// lib/sanityQueries.ts
import { client } from "@/lib/sanity";

/**
 * Fetches widget data from Sanity by widget type
 * @param widgetType - The type of widget (e.g., 'approval-ratings')
 * @returns Widget data or null if not found
 */
export async function getWidgetData(widgetType: string) {
  try {
    const data = await client.fetch(
      // GROQ query - Sanity's query language
      `*[_type == "widgetData" && widgetType == $widgetType && isActive == true][0]{
        widgetType,
        chartData,
        listData,
        keyInsight,
        dataSource,
        lastUpdated
      }`,
      { widgetType }, // Parameters
      {
        // Cache for 5 minutes
        next: { revalidate: 300 },
      }
    );

    return data;
  } catch (error) {
    console.error(`Error fetching widget data for ${widgetType}:`, error);
    return null;
  }
}

/**
 * Fetches all active widget data at once (more efficient)
 */
export async function getAllWidgetData() {
  try {
    const data = await client.fetch(
      `*[_type == "widgetData" && isActive == true]{
        widgetType,
        chartData,
        listData,
        keyInsight,
        dataSource,
        lastUpdated
      }`
    );

    // Convert array to object keyed by widgetType for easy access
    return data.reduce((acc: any, widget: any) => {
      acc[widget.widgetType] = widget;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching all widget data:", error);
    return {};
  }
}
