// components/charts/SeasonalComparison.tsx
// Улирлын харьцуулалт (Seasonal comparison - Winter vs Summer pollution)

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

// Улирал тодорхойлох (Determine season)
function getSeason(month: number): string {
  if (month >= 11 || month <= 1) return "Өвөл"; // Dec, Jan, Feb
  if (month >= 2 && month <= 4) return "Хавар"; // Mar, Apr, May
  if (month >= 5 && month <= 7) return "Зун"; // Jun, Jul, Aug
  return "Намар"; // Sep, Oct, Nov
}

export default function SeasonalComparison({ data }: Props) {
  // Жил бүрийн улирлын өгөгдөл бэлтгэх (Prepare seasonal data for each year)
  const seasonalData = data.years.map((yearData) => {
    const seasons: { [key: string]: SeasonData } = {
      Өвөл: {
        season: "Өвөл",
        avgAqi: 0,
        avgPm25: 0,
        avgTemp: 0,
        daysCount: 0,
      },
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

    // Улирал бүрээр өгөгдөл цуглуулах (Collect data by season)
    yearData.data.forEach((point) => {
      const month = new Date(point.date).getMonth();
      const season = getSeason(month);

      seasons[season].avgAqi += point.aqi;
      seasons[season].avgPm25 += point.components.pm2_5;
      seasons[season].daysCount += 1;
    });

    // Дундажийг тооцоолох (Calculate averages)
    Object.values(seasons).forEach((season) => {
      if (season.daysCount > 0) {
        season.avgAqi = Math.round(season.avgAqi / season.daysCount);
        season.avgPm25 = Math.round(season.avgPm25 / season.daysCount);
      }
    });

    return {
      year: yearData.year,
      seasons: Object.values(seasons),
    };
  });

  // Chart өгөгдөл бэлтгэх (Prepare chart data)
  const chartData = ["Өвөл", "Хавар", "Зун", "Намар"].map((seasonName) => {
    const dataPoint: { season: string; [key: string]: string | number } = {
      season: seasonName,
    };

    seasonalData.forEach(({ year, seasons }) => {
      const seasonData = seasons.find((s) => s.season === seasonName);
      if (seasonData) {
        dataPoint[year] = seasonData.avgAqi;
      }
    });

    return dataPoint;
  });

  // Өвөл vs Зун харьцуулалт (Winter vs Summer comparison)
  const winterSummerComparison = data.years.map((yearData) => {
    const winterData = yearData.data.filter((point) => {
      const month = new Date(point.date).getMonth();
      return month === 11 || month === 0 || month === 1; // Dec, Jan, Feb
    });

    const summerData = yearData.data.filter((point) => {
      const month = new Date(point.date).getMonth();
      return month >= 5 && month <= 7; // Jun, Jul, Aug
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        🌡️ Улирлын харьцуулалт
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Өвөл, хавар, зун, намрын агаарын чанарын ялгаа
      </p>

      {/* Улирлын график (Seasonal chart) */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="season" tick={{ fontSize: 12 }} />
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
          {data.years.map((yearData, idx) => (
            <Bar
              key={yearData.year}
              dataKey={yearData.year}
              name={`${yearData.year} он`}
              fill={
                ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][idx % 5]
              }
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {/* Өвөл vs Зун харьцуулалт (Winter vs Summer) */}
      <div className="mt-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3">
          ❄️ Өвөл vs ☀️ Зун
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {winterSummerComparison.map((item) => (
            <div
              key={item.year}
              className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-4 border-2 border-gray-200"
            >
              <p className="font-bold text-gray-900 text-lg mb-2">
                {item.year} он
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700 font-semibold">❄️ Өвөл:</span>
                  <span className="font-bold">{item.winterAvg} AQI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 font-semibold">☀️ Зун:</span>
                  <span className="font-bold">{item.summerAvg} AQI</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-700 font-semibold">Зөрүү:</span>
                  <span
                    className={`font-bold ${
                      item.difference > 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {item.difference > 0 ? "+" : ""}
                    {item.difference}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Дүгнэлт (Conclusion) */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200">
        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          📌 Дүгнэлт
        </h4>
        <p className="text-sm text-gray-700">
          Улаанбаатарт өвлийн улиралд агаарын бохирдол зуныхаас дунджаар{" "}
          <strong>
            {Math.round(
              winterSummerComparison.reduce(
                (sum, item) => sum + item.difference,
                0
              ) / winterSummerComparison.length
            )}
            -
            {Math.round(
              Math.max(...winterSummerComparison.map((item) => item.difference))
            )}{" "}
            дахин
          </strong>{" "}
          их байна. Энэ нь халаалтын улмаас нүүрс шатааж байгаатай холбоотой.
        </p>
      </div>
    </div>
  );
}
