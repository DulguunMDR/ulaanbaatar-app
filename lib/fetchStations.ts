// lib/fetchStations.ts
// Улаанбаатарын бүх хэмжих станцуудын өгөгдөл татах (дэлгэрэнгүй)

import { StationData } from "@/types";

export async function fetchAllStations(): Promise<StationData[]> {
  const token = process.env.NEXT_PUBLIC_WAQI_TOKEN;

  if (!token) {
    console.error("WAQI token not found");
    return [];
  }

  try {
    // Улаанбаатарын бүх станцуудыг газрын зурагаар (bounds) хайх
    // UB-ийн ойролцоох координат: lat=47.9, lon=106.9
    const response = await fetch(
      `https://api.waqi.info/map/bounds/?latlng=47.8,106.7,48.0,107.1&token=${token}`,
      {
        next: { revalidate: 300 }, // 5 минут тутамд шинэчлэх
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "ok" && data.data && Array.isArray(data.data)) {
      // WAQI API буцаасан станцуудыг боловсруулах
      return data.data.map(
        (station: {
          uid: number;
          aqi: string | number;
          lat: number;
          lon: number;
          station: {
            name: string;
            time?: string;
          };
        }) => ({
          uid: station.uid,
          aqi:
            typeof station.aqi === "string"
              ? parseInt(station.aqi)
              : station.aqi,
          station: {
            name: station.station.name,
            geo: [station.lat, station.lon] as [number, number],
            time: station.station.time,
          },
        })
      );
    }

    return [];
  } catch (error) {
    console.error("Error fetching stations:", error);
    return [];
  }
}

// Станцын дэлгэрэнгүй өгөгдөл татах (PM2.5, PM10, O3, NO2, гэх мэт)
export async function fetchStationDetails(stationId: number) {
  const token = process.env.NEXT_PUBLIC_WAQI_TOKEN;

  if (!token) {
    console.error("WAQI token not found");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.waqi.info/feed/@${stationId}/?token=${token}`,
      {
        next: { revalidate: 120 }, // 2 минут тутамд шинэчлэх
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "ok" && data.data) {
      const iaqi = data.data.iaqi || {};

      // Бүх бохирдуулагчдын утгыг авах
      const pollutants = {
        pm25: iaqi.pm25?.v || null,
        pm10: iaqi.pm10?.v || null,
        o3: iaqi.o3?.v || null,
        no2: iaqi.no2?.v || null,
        so2: iaqi.so2?.v || null,
        co: iaqi.co?.v || null,
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
        temp: iaqi.t?.v || null,
        humidity: iaqi.h?.v || null,
        pressure: iaqi.p?.v || null,
        wind: iaqi.w?.v || null,
        time: data.data.time?.s || "",
        city: data.data.city?.name || "",
        dominantPollutant: dominant,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error fetching station ${stationId} details:`, error);
    return null;
  }
}

// Хамгийн ойр станцыг олох функц (хэрэглэгчийн байршилаар)
export function findNearestStation(
  stations: StationData[],
  userLat: number,
  userLon: number
): StationData | null {
  if (stations.length === 0) return null;

  let nearest = stations[0];
  let minDistance = getDistance(
    userLat,
    userLon,
    stations[0].station.geo[0],
    stations[0].station.geo[1]
  );

  stations.forEach((station) => {
    const distance = getDistance(
      userLat,
      userLon,
      station.station.geo[0],
      station.station.geo[1]
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearest = station;
    }
  });

  return nearest;
}

// Хоёр цэгийн хоорондох зайг тооцох (Haversine公式)
function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Дэлхийн радиус (км)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
