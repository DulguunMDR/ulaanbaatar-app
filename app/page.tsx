// ============================================
// ФАЙЛ: app/page.tsx
// Файлын байршил: app/page.tsx
// Нүүр хуудас (Homepage) - Enhanced minimalist design
// Мобайл дэлгэцэнд зориулж засварласан (Mobile optimized)
// ============================================

import { fetchAQI } from "@/lib/fetchAQI";
import { fetchWeather } from "@/lib/fetchWeather";
import Link from "next/link";

export default async function Home() {
  // Fetch AQI and Weather data simultaneously (Зэрэг өгөгдөл татах)
  const [aqiData, weatherData] = await Promise.all([
    fetchAQI(),
    fetchWeather(),
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

  // Монгол хэл дээрх цаг агаарын байдлын орчуулга
  const translateWeather = (description: string): string => {
    const translations: Record<string, string> = {
      "clear sky": "Цэлмэг",
      "few clouds": "Бага үүлтэй",
      "scattered clouds": "Сарнисан үүл",
      "broken clouds": "Үүлэрхэг",
      "overcast clouds": "Бүрэн үүлтэй",
      "light rain": "Бага зэргийн бороо",
      "moderate rain": "Дунд зэргийн бороо",
      "heavy intensity rain": "Их бороо",
      rain: "Бороо",
      "shower rain": "Аадар бороо",
      "light snow": "Бага зэргийн цас",
      snow: "Цас",
      "heavy snow": "Их цас",
      mist: "Манан",
      fog: "Манан",
      haze: "Үүлэрхэг",
    };

    return translations[description.toLowerCase()] || description;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* 
        МОБАЙЛ ЗАСВАР:
        - pt-20 (padding-top: 5rem / 80px) нь header-ын өндрийг тооцох
        - md:pt-24 нь том дэлгэцэнд илүү зай өгөх
        - overflow-x-hidden нь хэвтээ чиглэлийн scroll-ийг арилгах
      */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-20 overflow-x-hidden">
        {/* Hero Section (Гол дэлгэц) */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-8">
            <div className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Бодит цагийн мэдээлэл
            </div>
            {/* 
              МОБАЙЛ ЗАСВАР - УЛААНБААТАР ТЕКСТ:
              - text-5xl (mobile) = 48px - Утасны дэлгэцэнд багасгасан
              - md:text-7xl (tablet) = 72px
              - lg:text-8xl (desktop) = 96px
              - xl:text-9xl (large desktop) = 128px
              - break-words нь урт үгийг хэд хэдэн мөрөнд хуваах
              - max-w-full нь эцэг элементийн өргөнөөс хэтрэхгүй байх
            */}
            <h1 className="font-mongolian text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-4 tracking-tight break-words max-w-full px-2">
              Улаанбаатар
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            {/* 
              SUBTITLE ЗАСВАР:
              - text-sm (mobile) = 14px
              - md:text-base (tablet) = 16px 
              - lg:text-lg (desktop) = 18px
              - px-4 нь хажуу талын зай
              - max-w-2xl нь хамгийн их өргөн хязгаарлах
            */}
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
              {/* AQI Card - Enhanced Design */}
              <Link
                href="/weather"
                className={`group relative block ${status.bg} ${status.border} border-2 rounded-2xl p-8 md:p-10 shadow-sm ${status.borderHover} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                {/* Gradient accent line (үзэмж нэмэх) */}
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

                  {/* Call to action */}
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

              {/* Weather Card - Enhanced Design */}
              {weatherData ? (
                <Link
                  href="/weather"
                  className="group relative block bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 md:p-10 shadow-sm hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <p className="text-blue-700 text-xs md:text-sm font-mongolian uppercase tracking-wider">
                        Цаг агаар
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-blue-600"
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
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-7xl md:text-8xl font-bold text-blue-900 leading-none">
                          {Math.round(weatherData.current.temp)}
                        </span>
                        <span className="text-3xl md:text-4xl font-light text-blue-700">
                          °C
                        </span>
                      </div>
                      <div className="inline-block px-5 py-2 bg-white rounded-full font-semibold text-sm md:text-base font-mongolian shadow-sm text-blue-900 border border-blue-200">
                        {translateWeather(
                          weatherData.current.weather.description,
                        )}
                      </div>
                    </div>

                    {/* Additional weather info (Нэмэлт мэдээлэл) */}
                    <div className="mb-4">
                      <div className="bg-white/50 rounded-lg p-3 border border-blue-100">
                        <p className="text-xs text-blue-600 font-mongolian mb-1">
                          Чийгшил
                        </p>
                        <p className="text-lg font-semibold text-blue-900">
                          {weatherData.current.humidity}%
                        </p>
                      </div>
                    </div>

                    {/* Call to action */}
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

            {/* Passivhaus Featured Section - Enhanced */}
            <Link
              href="/passivhaus"
              className="group relative block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient overlay (Хөдөлгөөнт давхарга) */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-6 text-center md:text-left">
                  {/* Icon */}
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
                    {/* 
                      МОБАЙЛ ЗАСВАР - Passivhaus гарчиг:
                      - text-xl (mobile) = 20px
                      - md:text-2xl (tablet) = 24px
                      - lg:text-3xl (desktop) = 30px
                      - break-words урт текстийг хуваах
                    */}
                    <h2 className="font-mongolian text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 break-words">
                      Passivhaus Гарын Авлага
                    </h2>
                    {/* 
                      МОБАЙЛ ЗАСВАР - Тайлбар текст:
                      - text-xs (mobile) = 12px
                      - md:text-sm (tablet) = 14px
                      - lg:text-base (desktop) = 16px
                    */}
                    <p className="font-mongolian text-xs md:text-sm lg:text-base text-emerald-50 max-w-xl break-words">
                      Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн,
                      байгальд ээлтэй байшин барих бүрэн гарын авлага
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
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
