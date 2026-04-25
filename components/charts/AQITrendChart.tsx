// components/charts/AQITrendChart.tsx
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
interface ChartDataPoint {
  time: string;
  aqi: number;
  fullTime: string;
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
        <p
          className="text-gray-400 mb-1"
          style={{ fontSize: "10px", letterSpacing: "0.08em" }}
        >
          {format(new Date(data.fullTime), "HH:mm")}
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

export default function AQITrendChart({ data }: Props) {
  const chartData: ChartDataPoint[] = data.map((point) => ({
    time: format(new Date(point.time), "HH:mm"),
    aqi: point.aqi,
    fullTime: point.time,
  }));

  const avgAqi = Math.round(
    data.reduce((sum, p) => sum + p.aqi, 0) / data.length,
  );

  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-baseline justify-between">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Сүүлийн 24 цагийн хандлага · 24-hour trend
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-gray-400" style={{ fontSize: "10px" }}>
            Дундаж
          </span>
          <span
            className="text-gray-900"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontVariantNumeric: "tabular-nums",
              color: getAQIColor(avgAqi),
            }}
          >
            {avgAqi}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 py-6">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={chartData}
            margin={{ top: 4, right: 12, left: -16, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="2 4" stroke="#f3f4f6" />
            <XAxis
              dataKey="time"
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
              tick={{
                fontSize: 10,
                fill: "#d1d5db",
                fontFamily: "var(--font-inter)",
              }}
              domain={[0, "dataMax + 50"]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
            />
            <ReferenceLine
              y={50}
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <ReferenceLine
              y={100}
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <ReferenceLine
              y={150}
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <ReferenceLine
              y={200}
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#1a1a1a"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 3, fill: "#1a1a1a", strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="px-5 py-3 border-t border-gray-100 flex flex-wrap gap-4">
        {[
          { range: "0–50", label: "Сайн", color: "#22c55e" },
          { range: "51–100", label: "Хэвийн", color: "#f59e0b" },
          { range: "101–150", label: "Муу", color: "#f97316" },
          { range: "151–200", label: "Маш муу", color: "#ef4444" },
          { range: "201+", label: "Аюултай", color: "#a855f7" },
        ].map((item) => (
          <div key={item.range} className="flex items-center gap-1.5">
            <span
              className="inline-block rounded-full"
              style={{
                width: 5,
                height: 5,
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />
            <span
              className="text-gray-400"
              style={{ fontSize: "9px", letterSpacing: "0.06em" }}
            >
              {item.range} {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
