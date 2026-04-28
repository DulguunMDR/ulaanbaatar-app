// components/weather/OpenMeteoForecast.tsx

import {
  fetchOpenMeteo,
  getWeatherDescription,
  getWindDescription,
} from "@/lib/fetchOpenMeteo";

function getCurrentHourIndex(times: string[]): number {
  const now = new Date();
  const currentHour =
    `${now.getFullYear()}-` +
    `${String(now.getMonth() + 1).padStart(2, "0")}-` +
    `${String(now.getDate()).padStart(2, "0")}T` +
    `${String(now.getHours()).padStart(2, "0")}:00`;
  const idx = times.indexOf(currentHour);
  return idx !== -1 ? idx : 0;
}

export default async function OpenMeteoForecast() {
  const data = await fetchOpenMeteo();

  if (!data) {
    return (
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-10">
          <p
            className="text-gray-400 uppercase mb-3"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Алдаа · Error
          </p>
          <p
            className="text-gray-500"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
          >
            Цаг агаарын таамагллыг татаж чадсангүй. · Could not load forecast.
          </p>
        </div>
      </div>
    );
  }

  // Current hour from hourly data
  const hourIdx = getCurrentHourIndex(data.hourly.time);
  const currentTemp = Math.round(data.hourly.temperature_2m[hourIdx]);
  const currentWind = data.hourly.wind_speed_10m[hourIdx];

  // Daily forecast rows
  const forecastDays = data.daily.time.map((date: string, index: number) => {
    const weatherDesc = getWeatherDescription(data.daily.weather_code[index]);
    return {
      date,
      tempMax: Math.round(data.daily.temperature_2m_max[index]),
      tempMin: Math.round(data.daily.temperature_2m_min[index]),
      weatherText: weatherDesc.text,
      weatherEmoji: weatherDesc.emoji,
      windSpeed: data.daily.wind_speed_10m_max[index],
      windDesc: getWindDescription(data.daily.wind_speed_10m_max[index]),
      precipitation: data.daily.precipitation_sum[index],
    };
  });

  // Today = index 0
  const today = forecastDays[0];

  return (
    <>
      {/* Today highlight */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div
          className="border-r border-gray-100 flex items-center justify-center py-10"
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
            ӨНӨӨДӨР · TODAY
          </span>
        </div>

        <div className="px-8 md:px-14 py-10">
          <p
            className="text-gray-400 uppercase mb-6"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Өнөөдрийн цаг агаар · Today&apos;s weather
          </p>

          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                {/* Current hour temp as hero number */}
                <span
                  className="font-normal text-gray-900 leading-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(56px, 8vw, 80px)",
                  }}
                >
                  {currentTemp}°
                </span>
                {/* Daily range as secondary */}
                <span
                  className="text-gray-400"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
                >
                  ↑ {today.tempMax}° · ↓ {today.tempMin}°
                </span>
              </div>
              <p
                className="text-gray-500"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
              >
                {today.weatherText}
              </p>
            </div>

            <span
              className="text-gray-200 select-none"
              style={{ fontSize: "clamp(48px, 6vw, 64px)", lineHeight: 1 }}
              aria-hidden="true"
            >
              {today.weatherEmoji}
            </span>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Stats row */}
          <div className="border border-gray-100">
            <div
              className="grid"
              style={{
                gridTemplateColumns:
                  today.precipitation > 0 ? "1fr 1fr 1fr" : "1fr 1fr",
              }}
            >
              <div className="px-5 py-4 border-r border-gray-100">
                <p
                  className="text-gray-400 uppercase mb-2"
                  style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                >
                  Салхи · Wind
                </p>
                <p
                  className="text-gray-900"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "18px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {currentWind.toFixed(1)} м/с
                </p>
                <p
                  className="text-gray-300 mt-0.5"
                  style={{ fontSize: "10px" }}
                >
                  {getWindDescription(currentWind)}
                </p>
              </div>

              <div
                className="px-5 py-4"
                style={{
                  borderRight:
                    today.precipitation > 0 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <p
                  className="text-gray-400 uppercase mb-2"
                  style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                >
                  Агаарт нөлөөлөх · Air impact
                </p>
                <p
                  className="text-gray-900"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
                >
                  {currentWind > 5
                    ? "Хүчтэй салхи тараана"
                    : today.precipitation > 0
                      ? "Хур тунадас цэвэрлэнэ"
                      : "Бохирдол үлдэж магадгүй"}
                </p>
              </div>

              {today.precipitation > 0 && (
                <div className="px-5 py-4">
                  <p
                    className="text-gray-400 uppercase mb-2"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    Хур тунадас · Precip.
                  </p>
                  <p
                    className="text-gray-900"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "18px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {today.precipitation} мм
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 7-day forecast table — unchanged */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
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
            7 ХОНОГ · 7-DAY
          </span>
        </div>

        <div className="px-8 md:px-14 py-10">
          <p
            className="text-gray-400 uppercase mb-6"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            7 хоногийн таамаглал · 7-day forecast
          </p>

          <div className="border border-gray-100">
            {/* Header */}
            <div
              className="grid border-b border-gray-100"
              style={{ gridTemplateColumns: "1fr 1fr 56px 56px 72px" }}
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

            {/* Rows */}
            {forecastDays.map(
              (
                day: {
                  date: string;
                  tempMax: number;
                  tempMin: number;
                  weatherText: string;
                  weatherEmoji: string;
                  windSpeed: number;
                  precipitation: number;
                },
                index: number,
              ) => {
                const date = new Date(day.date);
                const dayName = date.toLocaleDateString("mn-MN", {
                  weekday: "short",
                });
                const isToday = index === 0;
                const isTomorrow = index === 1;

                return (
                  <div
                    key={day.date}
                    className="grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                    style={{ gridTemplateColumns: "1fr 1fr 56px 56px 72px" }}
                  >
                    <div className="px-4 py-4 border-r border-gray-100 flex flex-col justify-center">
                      <span
                        className="text-gray-900"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "13px",
                          fontWeight: isToday || isTomorrow ? 500 : 400,
                        }}
                      >
                        {isToday ? "Өнөөдөр" : isTomorrow ? "Маргааш" : dayName}
                      </span>
                      {(isToday || isTomorrow) && (
                        <span
                          className="text-gray-300 mt-0.5"
                          style={{ fontSize: "10px" }}
                        >
                          {date.toLocaleDateString("mn-MN", {
                            month: "numeric",
                            day: "numeric",
                          })}
                        </span>
                      )}
                    </div>

                    <div className="px-4 py-4 border-r border-gray-100 flex items-center gap-2">
                      <span
                        className="text-gray-300 flex-shrink-0 select-none"
                        style={{ fontSize: "16px" }}
                        aria-hidden="true"
                      >
                        {day.weatherEmoji}
                      </span>
                      <span
                        className="text-gray-500"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "12px",
                        }}
                      >
                        {day.weatherText}
                      </span>
                    </div>

                    <div className="px-3 py-4 border-r border-gray-100 flex items-center justify-center">
                      <span
                        className="text-gray-900"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "14px",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {day.tempMax}°
                      </span>
                    </div>

                    <div className="px-3 py-4 border-r border-gray-100 flex items-center justify-center">
                      <span
                        className="text-gray-400"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "14px",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {day.tempMin}°
                      </span>
                    </div>

                    <div className="px-3 py-4 flex items-center justify-center">
                      <span
                        className="text-gray-400"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "12px",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {day.windSpeed.toFixed(0)} м/с
                      </span>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </>
  );
}
