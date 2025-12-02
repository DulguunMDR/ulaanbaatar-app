// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

interface HeaderProps {
  temp: number | null;
  windSpeed: number;
}

export default function Header({ temp, windSpeed }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title (Лого ба гарчиг) - "UB LIVE" format, нүүр хуудас руу холбоос */}
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
          <h1 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900">
            LIVE
          </h1>
        </Link>

        {/* Quick stats (Түргэн мэдээлэл) - Зөвхөн нүүр хуудсанд харагдана */}
        <div className="flex items-center gap-3 md:gap-4">
          {temp !== null && (
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span className="text-2xl">🌡️</span>
              <span className="font-semibold text-gray-700">{temp}°C</span>
            </div>
          )}
          {windSpeed > 0 && (
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span className="text-2xl">💨</span>
              <span className="font-semibold text-gray-700">
                {windSpeed} м/с
              </span>
            </div>
          )}

          {/* Emergency button (Яаралтай дуудлагын товч) - REPLACED WITH MENU */}
          <Menu />
        </div>
      </div>
    </header>
  );
}
