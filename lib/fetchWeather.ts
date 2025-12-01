// lib/fetchWeather.ts

import { WeatherData } from "@/types";

export async function fetchWeather(): Promise<WeatherData | null> {
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
  const lat = 47.92;
  const lon = 106.92;

  if (!key) {
    console.error("OpenWeather API key not found in .env.local");
    return null;
  }

  try {
    // Use the FREE current weather API (no subscription needed)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=mn`,
      {
        next: { revalidate: 600 }, // Cache for 10 minutes
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenWeather API error:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      current: {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 10) / 10,
        weather: data.weather[0],
      },
      hourly: [], // Current weather API doesn't include hourly
      daily: [], // Current weather API doesn't include daily
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
