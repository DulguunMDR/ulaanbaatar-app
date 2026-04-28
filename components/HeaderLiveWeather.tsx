"use client";

import { useEffect, useState } from "react";

export default function HeaderLiveWeather() {
  const [temp, setTemp] = useState<number | null>(null);
  const [wind, setWind] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast" +
            "?latitude=47.9077&longitude=106.8832" +
            "&hourly=temperature_2m,wind_speed_10m" +
            "&forecast_days=1&timezone=Asia%2FUlaanbaatar",
        );
        const data = await res.json();
        const now = new Date();
        const currentHour =
          `${now.getFullYear()}-` +
          `${String(now.getMonth() + 1).padStart(2, "0")}-` +
          `${String(now.getDate()).padStart(2, "0")}T` +
          `${String(now.getHours()).padStart(2, "0")}:00`;
        const idx = data.hourly.time.indexOf(currentHour);
        const i = idx !== -1 ? idx : 0;
        setTemp(Math.round(data.hourly.temperature_2m[i]));
        setWind(Math.round(data.hourly.wind_speed_10m[i]));
      } catch {
        // degrades gracefully — nothing renders
      }
    }
    load();
  }, []);

  if (temp === null && wind === null) return null;

  return (
    <>
      {temp !== null && (
        <div className="flex flex-col items-end">
          <span
            className="text-gray-400 uppercase"
            style={{ fontSize: "8px", letterSpacing: "0.12em" }}
          >
            Температур
          </span>
          <span
            className="font-mono font-light text-gray-700"
            style={{ fontSize: "13px" }}
          >
            {temp}°C
          </span>
        </div>
      )}

      {wind !== null && wind > 0 && (
        <div className="flex flex-col items-end">
          <span
            className="text-gray-400 uppercase"
            style={{ fontSize: "8px", letterSpacing: "0.12em" }}
          >
            Салхи
          </span>
          <span
            className="font-mono font-light text-gray-700"
            style={{ fontSize: "13px" }}
          >
            {wind} м/с
          </span>
        </div>
      )}

      {/* Divider — only shown when weather data is present */}
      <div className="w-px h-6 bg-gray-100" />
    </>
  );
}
