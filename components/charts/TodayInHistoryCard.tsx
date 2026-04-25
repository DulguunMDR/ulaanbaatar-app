// components/charts/TodayInHistoryCard.tsx
"use client";

import { format } from "date-fns";
import { MultiYearHistoricalData } from "@/types";

interface Props {
  data: MultiYearHistoricalData;
  currentAqi: number;
}

function getAQIDotColor(aqi: number): string {
  if (aqi <= 50) return "#22c55e";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7c2d12";
}

function getAqiLabel(aqi: number): string {
  if (aqi <= 50) return "Сайн";
  if (aqi <= 100) return "Дунд";
  if (aqi <= 150) return "Эрүүл мэндэд муу";
  if (aqi <= 200) return "Хортой";
  if (aqi <= 300) return "Маш хортой";
  return "Аюултай";
}

function getComparison(
  historicalAqi: number,
  currentAqi: number,
): { text: string; positive: boolean | null } {
  const diff = currentAqi - historicalAqi;
  const pct = Math.abs((diff / historicalAqi) * 100);
  if (Math.abs(diff) < 10) return { text: "Ижил түвшин", positive: null };
  if (diff > 0)
    return { text: `+${Math.round(pct)}% муудсан`, positive: false };
  return { text: `${Math.round(pct)}% сайжирсан`, positive: true };
}

export default function TodayInHistoryCard({ data, currentAqi }: Props) {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const historicalToday = data.years
    .map((yearData) => {
      const sameDay = yearData.data.find((point) => {
        const d = new Date(point.date);
        return d.getMonth() === todayMonth && d.getDate() === todayDate;
      });
      if (!sameDay) return null;
      return {
        year: yearData.year,
        aqi: sameDay.aqi,
        pm25: sameDay.components.pm2_5,
        date: sameDay.date,
      };
    })
    .filter(Boolean);

  if (historicalToday.length === 0) {
    return (
      <div className="border border-gray-100 px-5 py-6">
        <p
          className="text-gray-400 uppercase mb-2"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Өнөөдөр түүхэнд · Today in history
        </p>
        <p
          className="text-gray-400"
          style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
        >
          Өгөгдөл олдсонгүй
        </p>
      </div>
    );
  }

  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-baseline justify-between">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Өнөөдөр түүхэнд · Today in history
        </p>
        <p className="text-gray-300" style={{ fontSize: "10px" }}>
          {format(today, "MM/dd")}
        </p>
      </div>

      {/* Historical rows */}
      <div className="border-b border-gray-100">
        {/* Column headers */}
        <div
          className="grid border-b border-gray-100"
          style={{ gridTemplateColumns: "60px 1fr 80px 80px" }}
        >
          {["Жил", "PM2.5", "AQI", "Харьц."].map((h) => (
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

        {historicalToday.map((item) => {
          if (!item) return null;
          const cmp = getComparison(item.aqi, currentAqi);
          return (
            <div
              key={item.year}
              className="grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              style={{ gridTemplateColumns: "60px 1fr 80px 80px" }}
            >
              <div className="px-4 py-3 border-r border-gray-100 flex items-center">
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
              <div className="px-4 py-3 border-r border-gray-100 flex items-center">
                <span
                  className="text-gray-500"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "12px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {item.pm25.toFixed(1)} μg/m³
                </span>
              </div>
              <div className="px-4 py-3 border-r border-gray-100 flex items-center gap-1.5">
                <span
                  className="inline-block rounded-full flex-shrink-0"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: getAQIDotColor(item.aqi),
                  }}
                />
                <span
                  className="text-gray-900"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {item.aqi}
                </span>
              </div>
              <div className="px-4 py-3 flex items-center">
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color:
                      cmp.positive === true
                        ? "#22c55e"
                        : cmp.positive === false
                          ? "#ef4444"
                          : "#9ca3af",
                  }}
                >
                  {cmp.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today row */}
      <div className="px-5 py-4 flex items-center justify-between">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Өнөөдөр · Today
        </p>
        <div className="flex items-center gap-2">
          <span
            className="inline-block rounded-full"
            style={{
              width: 6,
              height: 6,
              backgroundColor: getAQIDotColor(currentAqi),
            }}
          />
          <span
            className="text-gray-900"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {currentAqi}
          </span>
          <span className="text-gray-400" style={{ fontSize: "11px" }}>
            {getAqiLabel(currentAqi)}
          </span>
        </div>
      </div>
    </div>
  );
}
