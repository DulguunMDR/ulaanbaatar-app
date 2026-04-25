// components/home/AQINumber.tsx
"use client";

import { AQIData } from "@/types";
import { getHealthMessage } from "@/lib/constants";

function getAQIDotColor(aqi: number): string {
  if (aqi <= 50) return "#22c55e";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7f1d1d";
}

interface AQINumberProps {
  data: AQIData;
  stationName?: string;
  loading?: boolean;
}

export default function AQINumber({
  data,
  stationName,
  loading,
}: AQINumberProps) {
  const healthMsg = getHealthMessage(data.aqi);

  return (
    <div
      className={`grid border-b border-gray-100 transition-opacity ${loading ? "opacity-50" : ""}`}
      style={{ gridTemplateColumns: "32px 1fr" }}
    >
      <div
        className="border-r border-gray-100 flex items-center justify-center py-10"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        <span
          className="text-gray-300 uppercase"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            letterSpacing: "0.4em",
          }}
        >
          AQI · АГААРЫН ЧАНАР
        </span>
      </div>

      <div className="px-8 md:px-14 py-10">
        {/* City name + source label */}
        <div className="flex items-baseline gap-3 mb-2">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            {data.city ?? stationName}
          </p>
          <span className="text-gray-200" style={{ fontSize: "9px" }}>
            ·
          </span>
          <p
            className="text-gray-300 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хот даяар · WAQI city feed
          </p>
        </div>

        {/* Giant AQI number */}
        <div className="flex items-end gap-6 mb-6">
          <span
            className="font-normal text-gray-900 leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(80px, 14vw, 140px)",
            }}
          >
            {data.aqi}
          </span>
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block rounded-full flex-shrink-0"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: getAQIDotColor(data.aqi),
                }}
              />
              <span
                className="text-gray-900"
                style={{ fontFamily: "var(--font-inter)", fontSize: "14px" }}
              >
                {healthMsg.text}
              </span>
            </div>
            <p
              className="text-gray-400"
              style={{ fontFamily: "var(--font-inter)", fontSize: "12px" }}
            >
              AQI Index
            </p>
          </div>
        </div>

        <p
          className="text-gray-500 max-w-md mb-8"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          {healthMsg.advice}
        </p>

        {data.time && (
          <p
            className="text-gray-300"
            style={{ fontSize: "10px", letterSpacing: "0.08em" }}
          >
            Шинэчлэгдсэн · {data.time}
          </p>
        )}
      </div>
    </div>
  );
}
