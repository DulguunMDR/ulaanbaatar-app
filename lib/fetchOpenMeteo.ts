// lib/fetchOpenMeteo.ts
// Open-Meteo API-аас цаг агаарын таамагллыг татах (Weather forecast from Open-Meteo API)
// API түлхүүр шаардлагагүй, үнэгүй (No API key required, completely free)

export interface OpenMeteoHourly {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  wind_speed_10m: number[];
  weather_code: number[];
}

export interface OpenMeteoDaily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
  wind_speed_10m_max: number[];
  precipitation_sum: number[];
}

export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  hourly: OpenMeteoHourly;
  daily: OpenMeteoDaily;
}

// WMO Weather Codes -> Монгол тайлбар (Mongolian descriptions)
const weatherCodeToMongolian: Record<number, string> = {
  0: "Цэлмэг тэнгэр",
  1: "Ихэвчлэн цэлмэг",
  2: "Хагас үүлэрхэг",
  3: "Үүлэрхэг",
  45: "Манан",
  48: "Манантай хүйтэн",
  51: "Нимгэн шиврээ бороо",
  53: "Дунд зэргийн шиврээ бороо",
  55: "Хүчтэй шиврээ бороо",
  61: "Бага зэргийн бороо",
  63: "Дунд зэргийн бороо",
  65: "Их бороо",
  71: "Цас орж байна",
  73: "Дунд зэргийн цас",
  75: "Их цас орж байна",
  77: "Мөндөр",
  80: "Аадар бороо",
  81: "Хүчтэй аадар",
  82: "Маш хүчтэй аадар",
  85: "Цасан шуурга",
  86: "Хүчтэй цасан шуурга",
  95: "Дуу цахилгаантай",
  96: "Мөндөртэй дуу цахилгаан",
  99: "Хүчтэй мөндөртэй дуу цахилгаан",
};

// Weather code -> emoji
const weatherCodeToEmoji: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌧️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "⛈️",
  71: "🌨️",
  73: "❄️",
  75: "❄️",
  77: "🌨️",
  80: "🌦️",
  81: "⛈️",
  82: "⛈️",
  85: "🌨️",
  86: "❄️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️",
};

export async function fetchOpenMeteo(): Promise<OpenMeteoResponse | null> {
  try {
    // Улаанбаатарын координат (Ulaanbaatar coordinates)
    const lat = 47.9184;
    const lon = 106.9177;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max,precipitation_sum&timezone=Asia%2FUlaanbaatar&forecast_days=7`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1 цаг бүр шинэчлэх (Revalidate every hour)
    });

    if (!response.ok) {
      console.error("Open-Meteo API алдаа:", response.status);
      return null;
    }

    const data: OpenMeteoResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Open-Meteo fetch алдаа:", error);
    return null;
  }
}

// Helper function: Weather code -> Mongolian + Emoji
export function getWeatherDescription(code: number): {
  text: string;
  emoji: string;
} {
  return {
    text: weatherCodeToMongolian[code] || "Тодорхойгүй",
    emoji: weatherCodeToEmoji[code] || "🌡️",
  };
}

// Helper: Салхины хурд -> Тайлбар (Wind speed -> Description)
export function getWindDescription(speed: number): string {
  if (speed < 2) return "Тайван";
  if (speed < 5) return "Бага зэргийн салхи";
  if (speed < 10) return "Дунд зэргийн салхи";
  if (speed < 15) return "Хүчтэй салхи";
  return "Маш хүчтэй салхи";
}
