// components/weather/CurrentWeather.tsx
// Одоогийн цаг агаар (Current weather display)
"use client";

interface Props {
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  description: string;
  icon: string;
}

export default function CurrentWeather({
  temp,
  tempMin,
  tempMax,
  feelsLike,
  humidity,
  windSpeed,
  condition,
  description,
  icon,
}: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div
      className="grid border-b border-gray-100"
      style={{ gridTemplateColumns: "32px 1fr" }}
    >
      {/* Vertical spine */}
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
          ОДООГИЙН · NOW
        </span>
      </div>

      {/* Content */}
      <div className="px-8 md:px-14 py-10">
        {/* Eyebrow */}
        <p
          className="text-gray-400 uppercase mb-6"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Одоогийн цаг агаар · Current weather
        </p>

        {/* Main temp + icon row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <span
                className="font-normal text-gray-900 leading-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(64px, 10vw, 96px)",
                }}
              >
                {temp}°
              </span>
              <div
                className="text-gray-400"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
              >
                <p>↑ {tempMax}°</p>
                <p>↓ {tempMin}°</p>
              </div>
            </div>
            <p
              className="text-gray-500 capitalize"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                letterSpacing: "0.02em",
              }}
            >
              {description}
            </p>
          </div>

          {/* Icon — desaturated to fit monochrome palette */}
          <div className="opacity-60 grayscale">
            <img
              src={iconUrl}
              alt={condition}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        </div>

        {/* Hairline divider */}
        <hr className="border-gray-100 mb-8" />

        {/* Stats grid — minimal table style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100">
          {[
            {
              labelMn: "Мэдрэмж",
              labelEn: "Feels like",
              value: `${feelsLike}°`,
            },
            { labelMn: "Салхи", labelEn: "Wind", value: `${windSpeed} м/с` },
            { labelMn: "Чийгшил", labelEn: "Humidity", value: `${humidity}%` },
            { labelMn: "Нөхцөл", labelEn: "Condition", value: condition },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-5 py-4 border-r border-b border-gray-100 last:border-r-0"
              style={{ borderRight: i === 3 ? "none" : undefined }}
            >
              <p
                className="text-gray-400 uppercase mb-2"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {stat.labelMn}
              </p>
              <p
                className="text-gray-900"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "20px",
                  fontWeight: 400,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-gray-300 mt-0.5"
                style={{ fontSize: "9px", letterSpacing: "0.08em" }}
              >
                {stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
