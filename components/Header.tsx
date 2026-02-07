// ============================================
// ФАЙЛ: components/Header.tsx
// Файлын байршил: components/Header.tsx
// Дээд хэсэг (Header) - Мобайл дэлгэцэнд сайжруулсан
// ============================================

import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

interface HeaderProps {
  temp: number | null;
  windSpeed: number;
}

export default function Header({ temp, windSpeed }: HeaderProps) {
  return (
    // z-50 нь header бусад зүйлсийн дээгүүр харагдахыг баталгаажуулна
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      {/* 
        МОБАЙЛ САЙЖРУУЛАЛТ:
        - py-3 (mobile) = 12px top/bottom = 24px total
        - md:py-4 (desktop) = 16px top/bottom = 32px total
        - Илүү том, илүү тод header
      */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
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
          {/* 
            МОБАЙЛ ТЕКСТ ХЭМЖЭЭ:
            - text-xl (mobile) = 20px - Утасны дэлгэцэнд жижигхэн
            - md:text-3xl (desktop) = 30px - Компьютер дэлгэцэнд том
          */}
          <h1 className="font-mongolian text-xl md:text-3xl font-bold text-gray-900">
            LIVE
          </h1>
        </Link>

        {/* Quick stats (Түргэн мэдээлэл) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Температур */}
          {temp !== null && (
            <div className="flex items-center gap-1 text-xs md:text-base">
              <span className="text-lg md:text-2xl">🌡️</span>
              <span className="font-semibold text-gray-700">{temp}°C</span>
            </div>
          )}

          {/* Салхины хурд */}
          {windSpeed > 0 && (
            <div className="flex items-center gap-1 text-xs md:text-base">
              <span className="text-lg md:text-2xl">💨</span>
              <span className="font-semibold text-gray-700">
                {windSpeed} м/с
              </span>
            </div>
          )}

          {/* Цэс товч (Menu button) */}
          <Menu />
        </div>
      </div>
    </header>
  );
}
