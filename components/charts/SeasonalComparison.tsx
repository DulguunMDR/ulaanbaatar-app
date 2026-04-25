// components/charts/SeasonalComparison.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MultiYearHistoricalData, SeasonData } from "@/types";

interface Props {
  data: MultiYearHistoricalData;
}

function getSeason(month: number): string {
  if (month >= 11 || month <= 1) return "Өвөл";
  if (month >= 2 && month <= 4) return "Хавар";
  if (month >= 5 && month <= 7) return "Зун";
  return "Намар";
}

// Muted, consistent palette — no bright multi-color
const YEAR_COLORS = ["#1a1a1a", "#6b7280", "#9ca3af", "#d1d5db", "#e5e7eb"];

export default function SeasonalComparison({ data }: Props) {
  const seasonalData = data.years.map((yearData) => {
    const seasons: { [key: string]: SeasonData } = {
      Өвөл: { season: "Өвөл", avgAqi: 0, avgPm25: 0, avgTemp: 0, daysCount: 0 },
      Хавар: {
        season: "Хавар",
        avgAqi: 0,
        avgPm25: 0,
        avgTemp: 0,
        daysCount: 0,
      },
      Зун: { season: "Зун", avgAqi: 0, avgPm25: 0, avgTemp: 0, daysCount: 0 },
      Намар: {
        season: "Намар",
        avgAqi: 0,
        avgPm25: 0,
        avgTemp: 0,
        daysCount: 0,
      },
    };
    yearData.data.forEach((point) => {
      const month = new Date(point.date).getMonth();
      const season = getSeason(month);
      seasons[season].avgAqi += point.aqi;
      seasons[season].avgPm25 += point.components.pm2_5;
      seasons[season].daysCount += 1;
    });
    Object.values(seasons).forEach((season) => {
      if (season.daysCount > 0) {
        season.avgAqi = Math.round(season.avgAqi / season.daysCount);
        season.avgPm25 = Math.round(season.avgPm25 / season.daysCount);
      }
    });
    return { year: yearData.year, seasons: Object.values(seasons) };
  });

  const chartData = ["Өвөл", "Хавар", "Зун", "Намар"].map((seasonName) => {
    const dataPoint: { season: string; [key: string]: string | number } = {
      season: seasonName,
    };
    seasonalData.forEach(({ year, seasons }) => {
      const s = seasons.find((s) => s.season === seasonName);
      if (s) dataPoint[year] = s.avgAqi;
    });
    return dataPoint;
  });

  const winterSummerComparison = data.years.map((yearData) => {
    const winterData = yearData.data.filter((p) => {
      const m = new Date(p.date).getMonth();
      return m === 11 || m === 0 || m === 1;
    });
    const summerData = yearData.data.filter((p) => {
      const m = new Date(p.date).getMonth();
      return m >= 5 && m <= 7;
    });
    const winterAvg =
      winterData.reduce((sum, p) => sum + p.aqi, 0) / winterData.length || 0;
    const summerAvg =
      summerData.reduce((sum, p) => sum + p.aqi, 0) / summerData.length || 0;
    return {
      year: yearData.year,
      winterAvg: Math.round(winterAvg),
      summerAvg: Math.round(summerAvg),
      difference: Math.round(winterAvg - summerAvg),
    };
  });

  const avgDiff = Math.round(
    winterSummerComparison.reduce((sum, item) => sum + item.difference, 0) /
      winterSummerComparison.length,
  );
  const maxDiff = Math.round(
    Math.max(...winterSummerComparison.map((item) => item.difference)),
  );

  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Улирлын харьцуулалт · Seasonal comparison
        </p>
      </div>

      {/* Chart */}
      <div className="px-2 py-6 border-b border-gray-100">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={chartData}
            margin={{ top: 4, right: 12, left: -16, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="2 4"
              stroke="#f3f4f6"
              vertical={false}
            />
            <XAxis
              dataKey="season"
              tick={{
                fontSize: 11,
                fill: "#9ca3af",
                fontFamily: "var(--font-inter)",
              }}
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
              cursor={{ fill: "#f9fafb" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: 10,
                fontFamily: "var(--font-inter)",
                color: "#9ca3af",
              }}
            />
            {data.years.map((yearData, idx) => (
              <Bar
                key={yearData.year}
                dataKey={yearData.year}
                name={`${yearData.year}`}
                fill={YEAR_COLORS[idx % YEAR_COLORS.length]}
                radius={[2, 2, 0, 0]}
                opacity={0.8}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Winter vs Summer table */}
      <div className="border-b border-gray-100">
        <div className="px-5 py-3 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Өвөл vs Зун · Winter vs Summer
          </p>
        </div>
        <div
          className="grid border-b border-gray-100"
          style={{ gridTemplateColumns: "80px 1fr 1fr 80px" }}
        >
          {["Жил", "Өвөл", "Зун", "Зөрүү"].map((h) => (
            <div
              key={h}
              className="px-4 py-2 border-r border-gray-100 last:border-r-0"
            >
              <span
                className="text-gray-300 uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {h}
              </span>
            </div>
          ))}
        </div>
        {winterSummerComparison.map((item) => (
          <div
            key={item.year}
            className="grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
            style={{ gridTemplateColumns: "80px 1fr 1fr 80px" }}
          >
            <div className="px-4 py-3 border-r border-gray-100">
              <span
                className="text-gray-900"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {item.year}
              </span>
            </div>
            <div className="px-4 py-3 border-r border-gray-100">
              <span
                className="text-gray-900"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {item.winterAvg}
              </span>
            </div>
            <div className="px-4 py-3 border-r border-gray-100">
              <span
                className="text-gray-400"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {item.summerAvg}
              </span>
            </div>
            <div className="px-4 py-3 flex items-center">
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontVariantNumeric: "tabular-nums",
                  color: item.difference > 0 ? "#ef4444" : "#22c55e",
                }}
              >
                {item.difference > 0 ? "+" : ""}
                {item.difference}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="px-5 py-4">
        <p
          className="text-gray-400 uppercase mb-2"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Дүгнэлт · Conclusion
        </p>
        <p
          className="text-gray-600"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          Улаанбаатарт өвлийн улиралд агаарын бохирдол зуныхаас дунджаар{" "}
          <strong className="text-gray-900">
            {avgDiff}–{maxDiff} дахин
          </strong>{" "}
          их байна. Энэ нь халаалтын улмаас нүүрс шатааж байгаатай холбоотой.
        </p>
      </div>
    </div>
  );
}
