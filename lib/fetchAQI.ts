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
      // Бүх бохирдуулагчдын утгыг авах
      const pollutants = {
        pm25: data.data.iaqi?.pm25?.v || null,
        pm10: data.data.iaqi?.pm10?.v || null,
        o3: data.data.iaqi?.o3?.v || null,
        no2: data.data.iaqi?.no2?.v || null,
        so2: data.data.iaqi?.so2?.v || null,
        co: data.data.iaqi?.co?.v || null,
      };

      // Хамгийн их утгатай бохирдуулагчийг олох
      let maxValue = 0;
      let dominant = "";
      Object.entries(pollutants).forEach(([key, value]) => {
        if (value && value > maxValue) {
          maxValue = value;
          dominant = key.toUpperCase();
        }
      });

      return {
        aqi: data.data.aqi,
        ...pollutants,
        temp: data.data.iaqi?.t?.v || null,
        humidity: data.data.iaqi?.h?.v || null,
        time: data.data.time.s,
        city: data.data.city.name,
        dominantPollutant: dominant,
      };
    }

    console.error("WAQI API returned error:", data);
    throw new Error("Invalid response from WAQI API");
  } catch (error) {
    console.error("Error fetching AQI:", error);
    return null;
  }
}
