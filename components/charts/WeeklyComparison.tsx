// components/charts/WeeklyComparison.tsx
// 7 хоногийн харьцуулалт (Weekly AQI comparison)

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getShortWeekdayMn, formatDateShort } from "@/lib/mongolianDate";

interface DataPoint {
  time: string;
  aqi: number;
}

interface Props {
  data: DataPoint[];
}

// Chart data төрөл (Chart data type)
interface ChartDataPoint {
  day: string;
  weekday: string;
  aqi: number;
  color: string;
}

// Custom tooltip props төрөл (Custom tooltip props type)
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ChartDataPoint;
  }>;
}

// Өдөр бүрийн өнгө (Color for each day based on AQI)
const getAQIColor = (aqi: number): string => {
  if (aqi <= 50) return "#10b981";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7c2d12";
};

// Custom tooltip компонент (Custom tooltip component)
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-semibold text-gray-900">
          {data.weekday}, {data.day}
        </p>
        <p className="text-lg font-bold" style={{ color: data.color }}>
          AQI: {data.aqi}
        </p>
      </div>
    );
  }
  return null;
};

export default function WeeklyComparison({ data }: Props) {
  // Өгөгдөл боловсруулах (Format data)
  const chartData: ChartDataPoint[] = data.map((point) => {
    const date = new Date(point.time);
    return {
      day: formatDateShort(date), // MM/DD формат
      weekday: getShortWeekdayMn(date), // Монгол гарагийн нэр (Mongolian weekday)
      aqi: point.aqi,
      color: getAQIColor(point.aqi),
    };
  });

  // Өнөөдөр ба өчигдрийн харьцуулалт (Today vs Yesterday)
  const today = chartData[chartData.length - 1];
  const yesterday = chartData[chartData.length - 2];
  const change = today.aqi - yesterday.aqi;
  const changePercent = ((change / yesterday.aqi) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          📊 7 хоногийн харьцуулалт
        </h3>

        {/* Өнөөдөр vs өчигдөр (Today vs Yesterday) */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Өнөөдөр vs өчигдөр:</span>
          <span
            className={`font-bold ${
              change > 0
                ? "text-red-600"
                : change < 0
                ? "text-green-600"
                : "text-gray-600"
            }`}
          >
            {change > 0 ? "+" : ""}
            {change} ({changePercent}%)
          </span>
          <span className="text-lg">
            {change > 0 ? "📈" : change < 0 ? "📉" : "➡️"}
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="weekday" tick={{ fontSize: 12, fill: "#6b7280" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            domain={[0, "dataMax + 50"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="aqi" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Долоо хоногийн дүн шинжилгээ (Weekly analysis) */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-600 text-xs mb-1">Хамгийн сайн өдөр</p>
          <p className="font-bold text-green-600">
            {
              chartData.reduce((min, curr) => (curr.aqi < min.aqi ? curr : min))
                .weekday
            }{" "}
            (
            {
              chartData.reduce((min, curr) => (curr.aqi < min.aqi ? curr : min))
                .aqi
            }
            )
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-600 text-xs mb-1">Хамгийн муу өдөр</p>
          <p className="font-bold text-red-600">
            {
              chartData.reduce((max, curr) => (curr.aqi > max.aqi ? curr : max))
                .weekday
            }{" "}
            (
            {
              chartData.reduce((max, curr) => (curr.aqi > max.aqi ? curr : max))
                .aqi
            }
            )
          </p>
        </div>
      </div>
    </div>
  );
}
