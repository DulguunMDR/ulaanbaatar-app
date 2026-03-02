// ============================================
// ФАЙЛ: app/page.tsx
// Нүүр хуудас (Homepage) - Enhanced minimalist design
// Single weather source: Open-Meteo (same as weather page)
// ============================================

import { fetchAQI } from "@/lib/fetchAQI";
import { fetchOpenMeteo, getWeatherDescription } from "@/lib/fetchOpenMeteo";
import Link from "next/link";

export default async function Home() {
  // Fetch AQI and Weather data simultaneously (Зэрэг өгөгдөл татах)
  const [aqiData, meteoData] = await Promise.all([
    fetchAQI(),
    fetchOpenMeteo(),
  ]);

  // Get AQI status and color based on value
  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50)
      return {
        label: "Сайн",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        borderHover: "hover:border-green-400",
        ring: "ring-green-100",
        gradientFrom: "from-green-500",
        gradientTo: "to-emerald-500",
      };
    if (aqi <= 100)
      return {
        label: "Дунд зэрэг",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        borderHover: "hover:border-yellow-400",
        ring: "ring-yellow-100",
        gradientFrom: "from-yellow-500",
        gradientTo: "to-amber-500",
      };
    if (aqi <= 150)
      return {
        label: "Эрүүл мэндэд сөрөг",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        borderHover: "hover:border-orange-400",
        ring: "ring-orange-100",
        gradientFrom: "from-orange-500",
        gradientTo: "to-red-500",
      };
    if (aqi <= 200)
      return {
        label: "Хортой",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        borderHover: "hover:border-red-400",
        ring: "ring-red-100",
        gradientFrom: "from-red-500",
        gradientTo: "to-rose-500",
      };
    if (aqi <= 300)
      return {
        label: "Маш хортой",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        borderHover: "hover:border-purple-400",
        ring: "ring-purple-100",
        gradientFrom: "from-purple-500",
        gradientTo: "to-fuchsia-500",
      };
    return {
      label: "Аюултай",
      color: "text-red-900",
      bg: "bg-red-100",
      border: "border-red-300",
      borderHover: "hover:border-red-500",
      ring: "ring-red-200",
      gradientFrom: "from-red-700",
      gradientTo: "to-red-900",
    };
  };

  const status = aqiData ? getAQIStatus(aqiData.aqi) : null;

  // Extract current conditions from Open-Meteo hourly arrays
  // Open-Meteo has no "current" field — find the index matching the current hour
  const getCurrentHourIndex = (times: string[]): number => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const currentHour = `${yyyy}-${mm}-${dd}T${hh}:00`;
    const idx = times.indexOf(currentHour);
    return idx !== -1 ? idx : 0;
  };

  const hourIdx = meteoData ? getCurrentHourIndex(meteoData.hourly.time) : 0;

  const todayTemp = meteoData
    ? Math.round(meteoData.hourly.temperature_2m[hourIdx])
    : null;
  const todayHumidity = meteoData
    ? meteoData.hourly.relative_humidity_2m[hourIdx]
    : null;
  const todayWeatherCode = meteoData
    ? meteoData.hourly.weather_code[hourIdx]
    : null;
  const todayWeather =
    todayWeatherCode !== null && todayWeatherCode !== undefined
      ? getWeatherDescription(todayWeatherCode)
      : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-20 overflow-x-hidden">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-8">
            <div className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Бодит цагийн мэдээлэл
            </div>
            <h1 className="font-mongolian text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-4 tracking-tight break-words max-w-full px-2">
              Улаанбаатар
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-mongolian font-light max-w-2xl mx-auto px-4">
              Агаарын чанар, цаг агаарын шинэчлэгдсэн мэдээлэл
            </p>
          </div>
        </div>

        {/* Main Content */}
        {aqiData && status ? (
          <div className="space-y-6">
            {/* AQI + Weather Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AQI Card */}
              <Link
                href="/weather"
                className={`group relative block ${status.bg} ${status.border} border-2 rounded-2xl p-8 md:p-10 shadow-sm ${status.borderHover} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${status.gradientFrom} ${status.gradientTo}`}
                ></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <p className="text-gray-600 text-xs md:text-sm font-mongolian uppercase tracking-wider">
                      Агаарын чанар
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <svg
                        className={`w-4 h-4 ${status.color}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div
                      className={`text-7xl md:text-8xl font-bold ${status.color} mb-3 leading-none`}
                    >
                      {aqiData.aqi}
                    </div>
                    <div
                      className={`inline-block px-5 py-2 ${status.color} bg-white rounded-full font-semibold text-sm md:text-base font-mongolian shadow-sm border ${status.border}`}
                    >
                      {status.label}
                    </div>
                  </div>

                  {aqiData.time && (
                    <p className="text-gray-500 text-xs font-mongolian mb-4">
                      Шинэчлэгдсэн:{" "}
                      {new Date(aqiData.time).toLocaleTimeString("mn-MN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  )}

                  <div
                    className={`flex items-center gap-2 ${status.color} text-sm font-mongolian font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <span>Дэлгэрэнгүй үзэх</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Weather Card - now uses Open-Meteo */}
              {meteoData && todayWeather ? (
                <Link
                  href="/weather"
                  className="group relative block bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 md:p-10 shadow-sm hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <p className="text-blue-700 text-xs md:text-sm font-mongolian uppercase tracking-wider">
                        Цаг агаар
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <span className="text-lg leading-none">
                          {todayWeather.emoji}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-7xl md:text-8xl font-bold text-blue-900 leading-none">
                          {todayTemp}
                        </span>
                        <span className="text-3xl md:text-4xl font-light text-blue-700">
                          °C
                        </span>
                      </div>
                      <div className="inline-block px-5 py-2 bg-white rounded-full font-semibold text-sm md:text-base font-mongolian shadow-sm text-blue-900 border border-blue-200">
                        {todayWeather.text}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="bg-white/50 rounded-lg p-3 border border-blue-100">
                        <p className="text-xs text-blue-600 font-mongolian mb-1">
                          Чийгшил
                        </p>
                        <p className="text-lg font-semibold text-blue-900">
                          {todayHumidity}%
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-blue-700 text-sm font-mongolian font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Дэлгэрэнгүй үзэх</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-blue-600 font-mongolian text-sm">
                      Цаг агаарын өгөгдөл уншиж байна...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Passivhaus Featured Section */}
            <Link
              href="/passivhaus"
              className="group relative block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 text-center md:text-left">
                  <div className="hidden md:block w-16 h-16 bg-white/20 rounded-xl flex-shrink-0 backdrop-blur-sm border border-white/30 p-3">
                    <svg
                      className="w-full h-full text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>

                  <div>
                    <h2 className="font-mongolian text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 break-words">
                      Passivhaus Гарын Авлага
                    </h2>
                    <p className="font-mongolian text-xs md:text-sm lg:text-base text-emerald-50 max-w-xl break-words">
                      Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн,
                      байгальд ээлтэй байшин барих бүрэн гарын авлага
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden lg:flex flex-col items-end gap-1">
                    <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                    <div className="w-6 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-16 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-mongolian">
                Өгөгдөл уншиж байна...
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
