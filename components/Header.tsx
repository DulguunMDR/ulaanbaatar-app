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

function getAQIStyle(aqi: number): {
  bg: string;
  color: string;
  border: string;
} {
  if (aqi <= 50) return { bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" };
  if (aqi <= 100) return { bg: "#fefce8", color: "#854d0e", border: "#fde68a" };
  if (aqi <= 150) return { bg: "#fff7ed", color: "#9a3412", border: "#fed7aa" };
  if (aqi <= 200) return { bg: "#fef2f2", color: "#991b1b", border: "#fecaca" };
  if (aqi <= 300) return { bg: "#faf5ff", color: "#6b21a8", border: "#e9d5ff" };
  return { bg: "#450a0a", color: "#fca5a5", border: "#7f1d1d" };
}

export default function Header({
  temp,
  windSpeed,
  aqi,
  aqiLabel,
}: HeaderProps) {
  const aqiStyle = aqi !== null ? getAQIStyle(aqi) : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="Улаанбаатар лого"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
            priority
          />
          <span
            className="font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "var(--font-inter)", fontSize: "15px" }}
          >
            Улаан
            <span className="text-gray-300">баатар</span>
          </span>
        </Link>

        {/* Right side — live data + menu */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Temperature — always visible */}
          {temp !== null && (
            <div className="flex flex-col items-end">
              <span
                className="text-gray-400 uppercase"
                style={{ fontSize: "8px", letterSpacing: "0.12em" }}
              >
                Температур
              </span>
              <span
                className="font-mono font-light text-gray-700"
                style={{ fontSize: "13px" }}
              >
                {temp}°C
              </span>
            </div>
          )}

          {/* Wind speed — always visible */}
          {windSpeed > 0 && (
            <div className="flex flex-col items-end">
              <span
                className="text-gray-400 uppercase"
                style={{ fontSize: "8px", letterSpacing: "0.12em" }}
              >
                Салхи
              </span>
              <span
                className="font-mono font-light text-gray-700"
                style={{ fontSize: "13px" }}
              >
                {windSpeed} м/с
              </span>
            </div>
          )}

          {/* Divider */}
          {(temp !== null || windSpeed > 0) && aqi !== null && (
            <div className="w-px h-6 bg-gray-100" />
          )}

          {/* AQI pill — always visible */}
          {aqi !== null && aqiStyle && (
            <Link
              href="/weather"
              style={{
                background: aqiStyle.bg,
                color: aqiStyle.color,
                border: `1px solid ${aqiStyle.border}`,
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                         transition-opacity hover:opacity-80"
            >
              <span
                className="uppercase tracking-wider"
                style={{ fontSize: "9px", fontFamily: "var(--font-inter)" }}
              >
                AQI
              </span>
              <span
                className="font-mono font-semibold"
                style={{ fontSize: "13px" }}
              >
                {aqi}
              </span>
              {aqiLabel && (
                <span className="hidden lg:inline" style={{ fontSize: "11px" }}>
                  · {aqiLabel}
                </span>
              )}
            </Link>
          )}

          <Menu />
        </div>
      </div>
    </header>
  );
}
