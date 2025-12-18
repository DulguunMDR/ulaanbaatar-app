// components/charts/YearComparisonChart.tsx
// Жил бүрийн харьцуулалт (Year-by-year comparison chart)

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

const YEAR_COLORS = [
  "#3b82f6", // blue-500
  "#10b981", // green-500
  "#f59e0b", // amber-500
  "#ef4444", // red-500
  "#8b5cf6", // violet-500
  "#ec4899", // pink-500
];

export default function YearComparisonChart({ data }: Props) {
  const [selectedYears, setSelectedYears] = useState<number[]>(
    data.years.map((y) => y.year)
  );
  const [granularity, setGranularity] = useState<
    "daily" | "weekly" | "monthly"
  >("monthly");

  // Өгөгдлийг сар бүрээр дундаждах (Average by month)
  function getMonthlyAverage(
    yearData: (typeof data.years)[0],
    month: number
  ): number {
    const monthData = yearData.data.filter((point) => {
      const pointDate = new Date(point.date);
      return pointDate.getMonth() === month;
    });

    if (monthData.length === 0) return 0;

    const sum = monthData.reduce((acc, point) => acc + point.aqi, 0);
    return Math.round(sum / monthData.length);
  }

  // Өгөгдлийг 7 хоног бүрээр дундаждах (Average by week)
  function getWeeklyAverage(
    yearData: (typeof data.years)[0],
    week: number
  ): number {
    const weekData = yearData.data.filter((point) => {
      const pointDate = new Date(point.date);
      const weekOfYear = Math.floor(
        (pointDate.getTime() -
          new Date(pointDate.getFullYear(), 0, 1).getTime()) /
          (7 * 24 * 60 * 60 * 1000)
      );
      return weekOfYear === week;
    });

    if (weekData.length === 0) return 0;

    const sum = weekData.reduce((acc, point) => acc + point.aqi, 0);
    return Math.round(sum / weekData.length);
  }

  // Chart өгөгдөл бэлтгэх (Prepare chart data)
  const chartData = (() => {
    if (granularity === "monthly") {
      return Array.from({ length: 12 }, (_, i) => {
        const dataPoint: { month: string; [key: string]: string | number } = {
          month: [
            "1-р сар",
            "2-р сар",
            "3-р сар",
            "4-р сар",
            "5-р сар",
            "6-р сар",
            "7-р сар",
            "8-р сар",
            "9-р сар",
            "10-р сар",
            "11-р сар",
            "12-р сар",
          ][i],
        };

        selectedYears.forEach((year) => {
          const yearData = data.years.find((y) => y.year === year);
          if (yearData) {
            dataPoint[year] = getMonthlyAverage(yearData, i);
          }
        });

        return dataPoint;
      });
    } else if (granularity === "weekly") {
      return Array.from({ length: 52 }, (_, i) => {
        const dataPoint: { week: string; [key: string]: string | number } = {
          week: `${i + 1}-р 7 хоног`,
        };

        selectedYears.forEach((year) => {
          const yearData = data.years.find((y) => y.year === year);
          if (yearData) {
            dataPoint[year] = getWeeklyAverage(yearData, i);
          }
        });

        return dataPoint;
      });
    } else {
      // Daily - өгөгдөл их байвал удаашруулна, тиймээс жилийн 365 өдрийг харуулна
      return Array.from({ length: 365 }, (_, i) => {
        const dataPoint: { day: string; [key: string]: string | number } = {
          day: `${i + 1}-р өдөр`,
        };

        selectedYears.forEach((year) => {
          const yearData = data.years.find((y) => y.year === year);
          if (yearData && yearData.data[i]) {
            dataPoint[year] = yearData.data[i].aqi;
          }
        });

        return dataPoint;
      });
    }
  })();

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          📈 Жил бүрийн харьцуулалт
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Сонгосон жилүүдийн агаарын чанарыг харьцуулах
        </p>

        {/* Granularity сонголт (Time scale selection) */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setGranularity("monthly")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              granularity === "monthly"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Сараар
          </button>
          <button
            onClick={() => setGranularity("weekly")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              granularity === "weekly"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            7 хоногоор
          </button>
        </div>

        {/* Жил сонгох (Year selection) */}
        <div className="flex flex-wrap gap-2">
          {data.years.map((yearData, idx) => (
            <button
              key={yearData.year}
              onClick={() => toggleYear(yearData.year)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedYears.includes(yearData.year)
                  ? "text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              style={{
                backgroundColor: selectedYears.includes(yearData.year)
                  ? YEAR_COLORS[idx % YEAR_COLORS.length]
                  : undefined,
              }}
            >
              {yearData.year}
            </button>
          ))}
        </div>
      </div>

      {selectedYears.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl mb-2">📊</p>
          <p>Харьцуулах жилээ сонгоно уу</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={
                granularity === "monthly"
                  ? "month"
                  : granularity === "weekly"
                  ? "week"
                  : "day"
              }
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis
              label={{ value: "AQI", angle: -90, position: "insideLeft" }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            {selectedYears.map((year, idx) => (
              <Line
                key={year}
                type="monotone"
                dataKey={year}
                name={`${year} он`}
                stroke={YEAR_COLORS[idx % YEAR_COLORS.length]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}

      {/* Статистик (Statistics) */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {selectedYears.map((year) => {
          const yearData = data.years.find((y) => y.year === year);
          if (!yearData) return null;

          return (
            <div
              key={year}
              className="bg-gray-50 rounded-lg p-3 border border-gray-200"
            >
              <p className="text-sm font-semibold text-gray-700">{year}</p>
              <p className="text-2xl font-bold text-gray-900">
                {yearData.avgAqi}
              </p>
              <p className="text-xs text-gray-500">Дундаж AQI</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
