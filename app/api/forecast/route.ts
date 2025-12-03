// app/api/forecast/route.ts
// Цаг агаарын таамаглал татах API endpoint (Weather forecast API endpoint)

import { NextResponse } from "next/server";
import { fetchForecast } from "@/lib/fetchForecast";

export async function GET() {
  try {
    // Цаг агаарын таамаглал татах (Fetch weather forecast)
    const data = await fetchForecast();

    if (!data) {
      return NextResponse.json(
        { error: "Цаг агаарын мэдээлэл татаж чадсангүй" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ API алдаа:", error);
    return NextResponse.json({ error: "Серверийн алдаа" }, { status: 500 });
  }
}
