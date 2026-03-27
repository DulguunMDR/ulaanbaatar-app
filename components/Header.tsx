// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

interface HeaderProps {
  temp: number | null;
  windSpeed: number;
  aqi: number | null;
  aqiLabel: string | null;
}

// Returns Tailwind-compatible inline style colors per AQI level
function getAQIPillStyle(aqi: number): { bg: string; color: string } {
  if (aqi <= 50) return { bg: "#f0fdf4", color: "#166534" };
  if (aqi <= 100) return { bg: "#fefce8", color: "#854d0e" };
  if (aqi <= 150) return { bg: "#fff7ed", color: "#9a3412" };
  if (aqi <= 200) return { bg: "#fef2f2", color: "#991b1b" };
  if (aqi <= 300) return { bg: "#faf5ff", color: "#6b21a8" };
  return { bg: "#450a0a", color: "#fca5a5" };
}

export default function Header({
  temp,
  windSpeed,
  aqi,
  aqiLabel,
}: HeaderProps) {
  const aqiStyle = aqi !== null ? getAQIPillStyle(aqi) : null;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="Улаанбаатар лого"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
            priority
          />
          <h1 className="font-mongolian text-xl md:text-3xl font-bold text-gray-900">
            LIVE
          </h1>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          {/* AQI Pill */}
          {aqi !== null && aqiStyle && (
            <Link
              href="/weather"
              style={{ background: aqiStyle.bg, color: aqiStyle.color }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs md:text-sm font-semibold border border-current/20 transition-opacity hover:opacity-80"
            >
              <span className="hidden sm:inline">AQI</span>
              <span>{aqi}</span>
              {aqiLabel && (
                <span className="hidden md:inline">· {aqiLabel}</span>
              )}
            </Link>
          )}

          {/* Temperature */}
          {temp !== null && (
            <div className="flex items-center gap-1 text-xs md:text-base">
              <span className="text-lg md:text-2xl">🌡️</span>
              <span className="font-semibold text-gray-700">{temp}°C</span>
            </div>
          )}

          {/* Wind speed */}
          {windSpeed > 0 && (
            <div className="flex items-center gap-1 text-xs md:text-base">
              <span className="text-lg md:text-2xl">💨</span>
              <span className="font-semibold text-gray-700">
                {windSpeed} м/с
              </span>
            </div>
          )}

          <Menu />
        </div>
      </div>
    </header>
  );
}
