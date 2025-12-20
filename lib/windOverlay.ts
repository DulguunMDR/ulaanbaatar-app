// lib/windOverlay.ts
// Open-Meteo-аас бүс нутгийн салхины өгөгдөл авах (Regional wind data from Open-Meteo)

export interface WindData {
  latitude: number;
  longitude: number;
  hourly: {
    time: string[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
  };
}

/**
 * Улаанбаатарын орчмын салхины өгөгдөл авах (Get regional wind data around Ulaanbaatar)
 * Open-Meteo API - Үнэгүй, түлхүүр шаардлагагүй (Free, no API key)
 */
export async function fetchRegionalWindData(): Promise<WindData | null> {
  try {
    // Улаанбаатарын координат (Ulaanbaatar coordinates)
    const lat = 47.9184;
    const lon = 106.9177;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=wind_speed_10m,wind_direction_10m&forecast_days=1&timezone=Asia%2FUlaanbaatar`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1 цаг бүр (Every hour)
    });

    if (!response.ok) {
      console.error("Open-Meteo wind API алдаа:", response.status);
      return null;
    }

    const data: WindData = await response.json();
    return data;
  } catch (error) {
    console.error("Wind data fetch алдаа:", error);
    return null;
  }
}

/**
 * Салхины чиглэл (градус) -> Компасын чиглэл (Direction in degrees -> Compass direction)
 */
export function degreesToCompass(degrees: number): string {
  const directions = [
    "Хойд",
    "ХЗ",
    "Зүүн",
    "ЗУ",
    "Өмнөд",
    "ӨБ",
    "Баруун",
    "БХ",
  ];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

/**
 * Салхины хурд -> Тайлбар (Wind speed -> Description)
 */
export function getWindSpeedCategory(speed: number): {
  label: string;
  color: string;
} {
  if (speed < 2) return { label: "Тайван", color: "#9ca3af" };
  if (speed < 5) return { label: "Бага", color: "#60a5fa" };
  if (speed < 10) return { label: "Дунд", color: "#3b82f6" };
  if (speed < 15) return { label: "Хүчтэй", color: "#1d4ed8" };
  return { label: "Маш хүчтэй", color: "#1e3a8a" };
}

/**
 * Салхины чиглэл (градус) -> Rotation angle for arrow
 */
export function getArrowRotation(degrees: number): number {
  // Leaflet marker rotation: 0° = North, clockwise
  return degrees;
}
