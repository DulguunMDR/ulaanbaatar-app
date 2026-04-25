// components/charts/YearComparisonChart.tsx
"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MultiYearHistoricalData } from "@/types";

interface Props {
  data: MultiYearHistoricalData;
}

// Muted stepped grays — readable but not distracting
const YEAR_COLORS = [
  "#1a1a1a",
  "#6b7280",
  "#9ca3af",
  "#d1d5db",
  "#e5e7eb",
  "#f3f4f6",
];

export default function YearComparisonChart({ data }: Props) {
  const [selectedYears, setSelectedYears] = useState<number[]>(
    data.years.map((y) => y.year),
  );
  const [granularity, setGranularity] = useState<"monthly" | "weekly">(
    "monthly",
  );

  function getMonthlyAverage(
    yearData: (typeof data.years)[0],
    month: number,
  ): number {
    const monthData = yearData.data.filter(
      (p) => new Date(p.date).getMonth() === month,
    );
    if (!monthData.length) return 0;
    return Math.round(
      monthData.reduce((acc, p) => acc + p.aqi, 0) / monthData.length,
    );
  }

  function getWeeklyAverage(
    yearData: (typeof data.years)[0],
    week: number,
  ): number {
    const weekData = yearData.data.filter((p) => {
      const d = new Date(p.date);
      const weekOfYear = Math.floor(
        (d.getTime() - new Date(d.getFullYear(), 0, 1).getTime()) /
          (7 * 24 * 60 * 60 * 1000),
      );
      return weekOfYear === week;
    });
    if (!weekData.length) return 0;
    return Math.round(
      weekData.reduce((acc, p) => acc + p.aqi, 0) / weekData.length,
    );
  }

  const chartData =
    granularity === "monthly"
      ? Array.from({ length: 12 }, (_, i) => {
          const dp: { month: string; [key: string]: string | number } = {
            month:
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][
                i
              ] + "-р сар",
          };
          selectedYears.forEach((year) => {
            const yd = data.years.find((y) => y.year === year);
            if (yd) dp[year] = getMonthlyAverage(yd, i);
          });
          return dp;
        })
      : Array.from({ length: 52 }, (_, i) => {
          const dp: { week: string; [key: string]: string | number } = {
            week: `${i + 1}`,
          };
          selectedYears.forEach((year) => {
            const yd = data.years.find((y) => y.year === year);
            if (yd) dp[year] = getWeeklyAverage(yd, i);
          });
          return dp;
        });

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );
  };

  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Жил бүрийн харьцуулалт · Year comparison
        </p>

        {/* Granularity toggle */}
        <div className="flex gap-1">
          {[
            { key: "monthly", label: "Сараар" },
            { key: "weekly", label: "7 хоногоор" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setGranularity(opt.key as "monthly" | "weekly")}
              className="px-3 py-1 border transition-colors"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                borderColor: granularity === opt.key ? "#1a1a1a" : "#f3f4f6",
                color: granularity === opt.key ? "#1a1a1a" : "#9ca3af",
                backgroundColor: "transparent",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Year toggles */}
      <div className="px-5 py-3 border-b border-gray-100 flex flex-wrap gap-1">
        {data.years.map((yearData, idx) => {
          const active = selectedYears.includes(yearData.year);
          return (
            <button
              key={yearData.year}
              onClick={() => toggleYear(yearData.year)}
              className="px-3 py-1 border transition-colors"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                borderColor: active
                  ? YEAR_COLORS[idx % YEAR_COLORS.length]
                  : "#f3f4f6",
                color: active
                  ? YEAR_COLORS[idx % YEAR_COLORS.length]
                  : "#9ca3af",
                backgroundColor: "transparent",
              }}
            >
              {yearData.year}
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="px-2 py-6 border-b border-gray-100">
        {selectedYears.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <p
              className="text-gray-300"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
            >
              Харьцуулах жилээ сонгоно уу
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={340}>
            <LineChart
              data={chartData}
              margin={{ top: 4, right: 12, left: -16, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="2 4" stroke="#f3f4f6" />
              <XAxis
                dataKey={granularity === "monthly" ? "month" : "week"}
                tick={{
                  fontSize: 10,
                  fill: "#d1d5db",
                  fontFamily: "var(--font-inter)",
                }}
                interval="preserveStartEnd"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                label={{
                  value: "AQI",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 9, fill: "#d1d5db" },
                }}
                tick={{
                  fontSize: 10,
                  fill: "#d1d5db",
                  fontFamily: "var(--font-inter)",
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  border: "1px solid #f3f4f6",
                  borderRadius: 0,
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                }}
                cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: 10,
                  fontFamily: "var(--font-inter)",
                  color: "#9ca3af",
                }}
              />
              {selectedYears.map((year, idx) => (
                <Line
                  key={year}
                  type="monotone"
                  dataKey={year}
                  name={`${year}`}
                  stroke={YEAR_COLORS[idx % YEAR_COLORS.length]}
                  strokeWidth={1.5}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Stats table */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${Math.min(selectedYears.length, 4)}, 1fr)`,
        }}
      >
        {selectedYears.map((year, idx) => {
          const yearData = data.years.find((y) => y.year === year);
          if (!yearData) return null;
          return (
            <div
              key={year}
              className="px-5 py-4"
              style={{
                borderRight:
                  idx < selectedYears.length - 1 ? "1px solid #f3f4f6" : "none",
              }}
            >
              <p
                className="text-gray-400 uppercase mb-1"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {year}
              </p>
              <p
                className="text-gray-900"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "20px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {yearData.avgAqi}
              </p>
              <p className="text-gray-300" style={{ fontSize: "9px" }}>
                Дундаж AQI
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
