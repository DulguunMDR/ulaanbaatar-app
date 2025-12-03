// app/api/historical/route.ts
// Түүхэн AQI өгөгдөл татах API endpoint (Historical AQI data API endpoint)

import { NextRequest, NextResponse } from "next/server";
import { fetchHistoricalAQI } from "@/lib/fetchHistoricalAQI";

export async function GET(request: NextRequest) {
  try {
    // Query parameter-ээс stationId авах (Get stationId from query params)
    const searchParams = request.nextUrl.searchParams;
    const stationId = searchParams.get("stationId") || "@8199";

    // Түүхэн өгөгдөл татах (Fetch historical data)
    const data = await fetchHistoricalAQI(stationId);

    if (!data) {
      return NextResponse.json(
        { error: "Түүхэн өгөгдөл татаж чадсангүй" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ API алдаа:", error);
    return NextResponse.json({ error: "Серверийн алдаа" }, { status: 500 });
  }
}
