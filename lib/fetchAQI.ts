// lib/fetchAQI.ts
import { AQIData } from "@/types";

export async function fetchAQI(): Promise<AQIData | null> {
  const token = process.env.NEXT_PUBLIC_WAQI_TOKEN;

  if (!token) {
    console.error("WAQI token not found in .env.local");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.waqi.info/feed/ulaanbaatar/?token=${token}`,
      {
        next: { revalidate: 120 },
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("WAQI Response:", JSON.stringify(data, null, 2));

    if (data.status === "ok" && data.data) {
      return {
        aqi: data.data.aqi,
        pm25: data.data.iaqi?.pm25?.v || null,
        pm10: data.data.iaqi?.pm10?.v || null,
        temp: data.data.iaqi?.t?.v || null,
        humidity: data.data.iaqi?.h?.v || null,
        time: data.data.time.s,
        city: data.data.city.name,
      };
    }

    console.error("WAQI API returned error:", data);
    throw new Error("Invalid response from WAQI API");
  } catch (error) {
    console.error("Error fetching AQI:", error);
    return null;
  }
}
