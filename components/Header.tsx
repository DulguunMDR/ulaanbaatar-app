// components/Header.tsx
import { UI_TEXT } from "@/lib/constants";

interface HeaderProps {
  temp: number | null;
  windSpeed: number;
}

export default function Header({ temp, windSpeed }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center">
          <h1 className="font-mongolian text-xl md:text-2xl font-bold text-gray-900">
            {UI_TEXT.title}
          </h1>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-3 md:gap-4">
          {temp !== null && (
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span className="text-2xl">🌡️</span>
              <span className="font-semibold text-gray-700">{temp}°C</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-sm md:text-base">
            <span className="text-2xl">💨</span>
            <span className="font-semibold text-gray-700">{windSpeed} м/с</span>
          </div>

          {/* Emergency button */}
          <a
            href="tel:103"
            className="bg-golden hover:bg-golden-hover text-white font-bold text-base md:text-xl px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            aria-label={UI_TEXT.emergency}
          >
            103
          </a>
        </div>
      </div>
    </header>
  );
}
