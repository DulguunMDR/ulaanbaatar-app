// components/charts/AQITrendChart.tsx
// 24 цагийн AQI хандлагын график (24-hour AQI trend chart)

"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { format } from "date-fns";

interface DataPoint {
  time: string;
  aqi: number;
}

interface Props {
  data: DataPoint[];
}

// Chart data төрөл (Chart data type)
interface ChartDataPoint {
  time: string;
  aqi: number;
  fullTime: string;
}

// Custom tooltip props төрөл (Custom tooltip props type)
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ChartDataPoint;
  }>;
}

// AQI түвшингийн өнгө (AQI level colors)
const getAQIColor = (aqi: number): string => {
  if (aqi <= 50) return "#10b981"; // Ногоон (Green)
  if (aqi <= 100) return "#f59e0b"; // Шар (Yellow)
  if (aqi <= 150) return "#f97316"; // Улбар шар (Orange)
  if (aqi <= 200) return "#ef4444"; // Улаан (Red)
  if (aqi <= 300) return "#a855f7"; // Нил ягаан (Purple)
  return "#7c2d12"; // Хүрэн (Maroon)
};

// Custom tooltip компонент (Custom tooltip component)
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const aqi = data.aqi;
    return (
      <div className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-semibold text-gray-900">
          {format(new Date(data.fullTime), "HH:mm")}
        </p>
        <p className="text-lg font-bold" style={{ color: getAQIColor(aqi) }}>
          AQI: {aqi}
        </p>
      </div>
    );
  }
  return null;
};

export default function AQITrendChart({ data }: Props) {
  // Цагаар ангилсан өгөгдөл (Format data for chart)
  const chartData: ChartDataPoint[] = data.map((point) => ({
    time: format(new Date(point.time), "HH:mm"),
    aqi: point.aqi,
    fullTime: point.time,
  }));

  // Дундаж AQI (Average AQI)
  const avgAqi = Math.round(
    data.reduce((sum, point) => sum + point.aqi, 0) / data.length
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          📈 Сүүлийн 24 цагийн хандлага
        </h3>
        <p className="text-sm text-gray-600">
          Дундаж AQI:{" "}
          <span
            className="font-semibold"
            style={{ color: getAQIColor(avgAqi) }}
          >
            {avgAqi}
          </span>
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            domain={[0, "dataMax + 50"]}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* AQI түвшний шугамууд (AQI level reference lines) */}
          <ReferenceLine
            y={50}
            stroke="#10b981"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
          <ReferenceLine
            y={100}
            stroke="#f59e0b"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
          <ReferenceLine
            y={150}
            stroke="#f97316"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
          <ReferenceLine
            y={200}
            stroke="#ef4444"
            strokeDasharray="3 3"
            strokeWidth={1}
          />

          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Тайлбар (Legend) */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-600">0-50 Сайн</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-gray-600">51-100 Хэвийн</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-gray-600">101-150 Муу</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-600">151-200 Маш муу</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span className="text-gray-600">201+ Аюултай</span>
        </div>
      </div>
    </div>
  );
}
