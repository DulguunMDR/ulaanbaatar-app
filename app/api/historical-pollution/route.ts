// app/api/historical-pollution/route.ts
// Олон жилийн түүхэн бохирдлын өгөгдлийн API (Multi-year historical pollution data API)

import { NextRequest, NextResponse } from "next/server";
import {
  fetchMultiYearData,
  fetchLast7Days,
  fetchLast30Days,
} from "@/lib/fetchHistoricalPollution";

export async function GET(request: NextRequest) {
  try {
    // URL-аас 'range' параметр авах (Get 'range' parameter from URL)
    const searchParams = request.nextUrl.searchParams;
    const range = searchParams.get("range") || "multi-year"; // default: multi-year

    console.log(`📊 Түүхэн бохирдлын өгөгдөл татаж байна (range: ${range})...`);

    let data;

    switch (range) {
      case "7days":
        const last7Days = await fetchLast7Days();
        if (last7Days.length === 0) {
          return NextResponse.json(
            { error: "Сүүлийн 7 хоногийн өгөгдөл олдсонгүй" },
            { status: 404 }
          );
        }
        data = {
          range: "7days",
          data: last7Days,
          startDate: last7Days[0].date,
          endDate: last7Days[last7Days.length - 1].date,
        };
        console.log(
          `✅ Сүүлийн 7 хоногийн ${last7Days.length} өгөгдөл татагдлаа`
        );
        break;

      case "30days":
        const last30Days = await fetchLast30Days();
        if (last30Days.length === 0) {
          return NextResponse.json(
            { error: "Сүүлийн 30 хоногийн өгөгдөл олдсонгүй" },
            { status: 404 }
          );
        }
        data = {
          range: "30days",
          data: last30Days,
          startDate: last30Days[0].date,
          endDate: last30Days[last30Days.length - 1].date,
        };
        console.log(
          `✅ Сүүлийн 30 хоногийн ${last30Days.length} өгөгдөл татагдлаа`
        );
        break;

      case "multi-year":
      default:
        const multiYearData = await fetchMultiYearData();
        if (!multiYearData) {
          return NextResponse.json(
            { error: "Олон жилийн өгөгдөл олдсонгүй" },
            { status: 404 }
          );
        }
        data = {
          range: "multi-year",
          ...multiYearData,
        };
        console.log(
          `✅ ${multiYearData.years.length} жилийн өгөгдөл амжилттай татагдлаа`
        );
        break;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ API алдаа:", error);
    return NextResponse.json(
      {
        error: "Сервер алдаа",
        message: error instanceof Error ? error.message : "Тодорхойгүй алдаа",
      },
      { status: 500 }
    );
  }
}

// Revalidate every 1 hour for recent data, 24 hours for multi-year
// (Сүүлийн үеийн өгөгдөлд 1 цаг, олон жилийнд 24 цаг)
export const revalidate = 3600;
