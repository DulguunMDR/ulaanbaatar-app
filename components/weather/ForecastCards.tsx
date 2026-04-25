// components/weather/ForecastCards.tsx
// 5 хоногийн цаг агаарын таамаглал (5-day weather forecast)
"use client";

import { getShortWeekdayMn, formatDateShort } from "@/lib/mongolianDate";

interface ForecastDay {
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  icon: string;
  windSpeed: number;
  humidity: number;
}

interface Props {
  forecast: ForecastDay[];
}

export default function ForecastCards({ forecast }: Props) {
  return (
    <div
      className="grid border-b border-gray-100"
      style={{ gridTemplateColumns: "32px 1fr" }}
    >
      {/* Vertical spine */}
      <div
        className="border-r border-gray-100 flex items-center justify-center"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        <span
          className="text-gray-300 uppercase"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            letterSpacing: "0.4em",
          }}
        >
          ТААМАГЛАЛ · FORECAST
        </span>
      </div>

      {/* Content */}
      <div className="px-8 md:px-14 py-10">
        {/* Eyebrow */}
        <p
          className="text-gray-400 uppercase mb-6"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          5 хоногийн таамаглал · 5-day forecast
        </p>

        {/* Forecast table */}
        <div className="border border-gray-100">
          {/* Header row */}
          <div
            className="grid border-b border-gray-100"
            style={{ gridTemplateColumns: "1fr 1fr 64px 64px 64px" }}
          >
            {["Өдөр", "Нөхцөл", "Дээд°", "Доод°", "Салхи"].map((h) => (
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

          {/* Forecast rows */}
          {forecast.map((day, index) => {
            const date = new Date(day.date);
            const dayName = getShortWeekdayMn(date);
            const dateNum = formatDateShort(date);
            const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className="grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                style={{ gridTemplateColumns: "1fr 1fr 64px 64px 64px" }}
              >
                {/* Day + date */}
                <div className="px-4 py-4 border-r border-gray-100 flex flex-col justify-center">
                  <span
                    className="text-gray-900"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      fontWeight: isFirst ? 500 : 400,
                    }}
                  >
                    {isFirst ? "Өнөөдөр" : dayName}
                  </span>
                  <span
                    className="text-gray-400 mt-0.5"
                    style={{
                      fontSize: "11px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {dateNum}
                  </span>
                </div>

                {/* Condition + icon */}
                <div className="px-4 py-4 border-r border-gray-100 flex items-center gap-2">
                  <img
                    src={iconUrl}
                    alt={day.condition}
                    className="w-8 h-8 grayscale opacity-60 flex-shrink-0"
                  />
                  <span
                    className="text-gray-600"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                    }}
                  >
                    {day.condition}
                  </span>
                </div>

                {/* Max temp */}
                <div className="px-3 py-4 border-r border-gray-100 flex items-center justify-center">
                  <span
                    className="text-gray-900"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {day.tempMax}°
                  </span>
                </div>

                {/* Min temp */}
                <div className="px-3 py-4 border-r border-gray-100 flex items-center justify-center">
                  <span
                    className="text-gray-400"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {day.tempMin}°
                  </span>
                </div>

                {/* Wind */}
                <div className="px-3 py-4 flex items-center justify-center">
                  <span
                    className="text-gray-500"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {day.windSpeed}м/с
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          className="text-gray-300 mt-4"
          style={{ fontSize: "11px", letterSpacing: "0.04em" }}
        >
          Цаг агаарын таамаглал нь ойролцоо утга. Өдөр бүр шинэчлэгдэнэ. ·
          Forecast values are approximate and updated daily.
        </p>
      </div>
    </div>
  );
}
