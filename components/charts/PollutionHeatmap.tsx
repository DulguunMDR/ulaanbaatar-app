// components/charts/PollutionHeatmap.tsx
"use client";

import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { MultiYearHistoricalData } from "@/types";
import { format } from "date-fns";

interface Props {
  data: MultiYearHistoricalData;
}

function getColorClass(aqi: number): string {
  if (aqi === 0) return "color-empty";
  if (aqi <= 50) return "color-scale-1";
  if (aqi <= 100) return "color-scale-2";
  if (aqi <= 150) return "color-scale-3";
  if (aqi <= 200) return "color-scale-4";
  if (aqi <= 300) return "color-scale-5";
  return "color-scale-6";
}

export default function PollutionHeatmap({ data }: Props) {
  const [selectedYear, setSelectedYear] = useState(
    data.years[data.years.length - 1]?.year || new Date().getFullYear(),
  );
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const selectedYearData = data.years.find((y) => y.year === selectedYear);
  if (!selectedYearData) return null;

  const heatmapData = selectedYearData.data.map((point) => ({
    date: point.date.split("T")[0],
    count: point.aqi,
  }));

  const startDate = new Date(selectedYear, 0, 1);
  const endDate = new Date(selectedYear, 11, 31);

  const tooltipData = hoveredDate
    ? selectedYearData.data.find((d) => d.date.split("T")[0] === hoveredDate)
    : null;

  return (
    <div className="border border-gray-100">
      {/* Header + year selector */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Жилийн календар · Annual heatmap
        </p>
        <div className="flex gap-1">
          {data.years.map((yearData) => (
            <button
              key={yearData.year}
              onClick={() => setSelectedYear(yearData.year)}
              className="px-3 py-1 border transition-colors"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                borderColor:
                  selectedYear === yearData.year ? "#1a1a1a" : "#f3f4f6",
                color: selectedYear === yearData.year ? "#1a1a1a" : "#9ca3af",
                backgroundColor: "transparent",
              }}
            >
              {yearData.year}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap */}
      <div className="px-5 py-6 border-b border-gray-100 overflow-x-auto">
        <div className="min-w-[800px] pollution-heatmap">
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapData}
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              return getColorClass(value.count);
            }}
            titleForValue={(value) => {
              if (!value) return "Өгөгдөл байхгүй";
              return `${format(new Date(value.date), "yyyy-MM-dd")}: AQI ${value.count}`;
            }}
            onMouseOver={(_event, value) => {
              if (value?.date) setHoveredDate(String(value.date));
            }}
            onMouseLeave={() => setHoveredDate(null)}
          />
        </div>
      </div>

      {/* Tooltip / hovered date */}
      {tooltipData && (
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <p
            className="text-gray-400"
            style={{ fontFamily: "var(--font-inter)", fontSize: "12px" }}
          >
            {format(new Date(tooltipData.date), "yyyy/MM/dd")}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400" style={{ fontSize: "11px" }}>
              PM2.5 {tooltipData.components.pm2_5.toFixed(1)} μg/m³
            </span>
            <span
              className="text-gray-900"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "15px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              AQI {tooltipData.aqi}
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="px-5 py-3 border-b border-gray-100 flex flex-wrap items-center gap-4">
        <span
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Тайлбар
        </span>
        {[
          { color: "#22c55e", label: "0–50" },
          { color: "#f59e0b", label: "51–100" },
          { color: "#f97316", label: "101–150" },
          { color: "#ef4444", label: "151–200" },
          { color: "#a855f7", label: "201–300" },
          { color: "#7c2d12", label: "300+" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span
              className="inline-block"
              style={{
                width: 10,
                height: 10,
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />
            <span className="text-gray-400" style={{ fontSize: "9px" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {[
          {
            labelMn: "Дундаж AQI",
            value: selectedYearData.avgAqi,
            color: "#1a1a1a",
          },
          {
            labelMn: "Хамгийн их",
            value: selectedYearData.maxAqi,
            color: "#ef4444",
          },
          {
            labelMn: "Хамгийн бага",
            value: selectedYearData.minAqi,
            color: "#22c55e",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="px-5 py-4"
            style={{ borderRight: i < 2 ? "1px solid #f3f4f6" : "none" }}
          >
            <p
              className="text-gray-400 uppercase mb-2"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {stat.labelMn}
            </p>
            <p
              className="font-normal"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "22px",
                fontVariantNumeric: "tabular-nums",
                color: stat.color,
              }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
