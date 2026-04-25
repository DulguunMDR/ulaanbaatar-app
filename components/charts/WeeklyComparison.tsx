// components/charts/WeeklyComparison.tsx
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
interface ChartDataPoint {
  day: string;
  weekday: string;
  aqi: number;
  color: string;
}
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: ChartDataPoint }>;
}

const getAQIColor = (aqi: number): string => {
  if (aqi <= 50) return "#22c55e";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7c2d12";
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="bg-white border border-gray-100 px-3 py-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <p className="text-gray-400 mb-1" style={{ fontSize: "10px" }}>
          {data.weekday} · {data.day}
        </p>
        <p
          className="text-gray-900"
          style={{ fontSize: "15px", fontVariantNumeric: "tabular-nums" }}
        >
          AQI {data.aqi}
        </p>
      </div>
    );
  }
  return null;
};

export default function WeeklyComparison({ data }: Props) {
  const chartData: ChartDataPoint[] = data.map((point) => {
    const date = new Date(point.time);
    return {
      day: formatDateShort(date),
      weekday: getShortWeekdayMn(date),
      aqi: point.aqi,
      color: getAQIColor(point.aqi),
    };
  });

  const today = chartData[chartData.length - 1];
  const yesterday = chartData[chartData.length - 2];
  const change = today.aqi - yesterday.aqi;
  const changePercent = ((change / yesterday.aqi) * 100).toFixed(1);

  const best = chartData.reduce((min, curr) =>
    curr.aqi < min.aqi ? curr : min,
  );
  const worst = chartData.reduce((max, curr) =>
    curr.aqi > max.aqi ? curr : max,
  );

  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-baseline justify-between">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          7 хоногийн харьцуулалт · Weekly comparison
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-400" style={{ fontSize: "10px" }}>
            Өнөөдөр vs өчигдөр
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontVariantNumeric: "tabular-nums",
              color:
                change > 0 ? "#ef4444" : change < 0 ? "#22c55e" : "#9ca3af",
            }}
          >
            {change > 0 ? "+" : ""}
            {change} ({changePercent}%)
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 py-6">
        <ResponsiveContainer width="100%" height={240}>
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
              dataKey="weekday"
              tick={{
                fontSize: 10,
                fill: "#d1d5db",
                fontFamily: "var(--font-inter)",
              }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{
                fontSize: 10,
                fill: "#d1d5db",
                fontFamily: "var(--font-inter)",
              }}
              domain={[0, "dataMax + 50"]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
            <Bar dataKey="aqi" radius={[2, 2, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} opacity={0.75} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Best / Worst footer */}
      <div
        className="border-t border-gray-100 grid"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="px-5 py-3 border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-1"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хамгийн сайн өдөр
          </p>
          <p
            className="text-gray-900"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {best.weekday} · {best.aqi}
          </p>
        </div>
        <div className="px-5 py-3">
          <p
            className="text-gray-400 uppercase mb-1"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хамгийн муу өдөр
          </p>
          <p
            className="text-gray-900"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {worst.weekday} · {worst.aqi}
          </p>
        </div>
      </div>
    </div>
  );
}
