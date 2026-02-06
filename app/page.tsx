// app/page.tsx
// Файлын байршил: app/page.tsx
// Нүүр хуудас (Homepage) - Minimalist landing page with Passivhaus section

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
        borderHover: "border-green-300",
        ring: "ring-green-100",
      };
    if (aqi <= 100)
      return {
        label: "Дунд зэрэг",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        borderHover: "border-yellow-300",
        ring: "ring-yellow-100",
      };
    if (aqi <= 150)
      return {
        label: "Эрүүл мэндэд сөрөг",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        borderHover: "border-orange-300",
        ring: "ring-orange-100",
      };
    if (aqi <= 200)
      return {
        label: "Хортой",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        borderHover: "border-red-300",
        ring: "ring-red-100",
      };
    if (aqi <= 300)
      return {
        label: "Маш хортой",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        borderHover: "border-purple-300",
        ring: "ring-purple-100",
      };
    return {
      label: "Аюултай",
      color: "text-red-900",
      bg: "bg-red-100",
      border: "border-red-300",
      borderHover: "border-red-400",
      ring: "ring-red-200",
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center py-20">
        {/* Hero Section (Гол дэлгэц) */}
        <div className="mb-16">
          <h1 className="font-mongolian text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
            Улаанбаатар
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 font-mongolian font-light">
            Агаарын чанарын шинэчлэгдсэн мэдээлэл
          </p>
        </div>

        {/* AQI + Weather Cards Side by Side (Агаарын чанар ба Цаг агаар) */}
        {aqiData && status ? (
          <div className="mb-12">
            {/* Two Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Left: AQI Card - Now Clickable */}
              <Link
                href="/weather"
                className={`group block ${status.bg} ${status.border} border-2 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all hover:${status.borderHover}`}
              >
                <p className="text-gray-600 text-xs md:text-sm mb-4 font-mongolian uppercase tracking-wider">
                  Агаарын чанарын индекс
                </p>

                <div
                  className={`text-6xl md:text-7xl font-bold ${status.color} mb-4`}
                >
                  {aqiData.aqi}
                </div>

                <div
                  className={`inline-block px-6 py-2 ${status.color} bg-white rounded-full font-semibold text-sm md:text-base font-mongolian shadow-sm mb-6`}
                >
                  {status.label}
                </div>

                {aqiData.time && (
                  <p className="text-gray-500 text-xs font-mongolian mb-4">
                    Шинэчлэгдсэн:{" "}
                    {new Date(aqiData.time).toLocaleString("mn-MN")}
                  </p>
                )}

                {/* Дэлгэрэнгүй үзэх товч (Call to action) */}
                <div
                  className={`flex items-center justify-center gap-2 ${status.color} text-sm font-mongolian opacity-0 group-hover:opacity-100 transition-opacity`}
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
              </Link>

              {/* Right: Weather Card */}
              {weatherData ? (
                <Link
                  href="/weather"
                  className="group block bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all hover:border-blue-300"
                >
                  {/* Гарчиг (Header) */}
                  <p className="text-blue-700 text-xs md:text-sm mb-4 font-mongolian uppercase tracking-wider">
                    Цаг агаар
                  </p>

                  {/* Температур (Temperature) */}
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-6xl md:text-7xl font-bold text-blue-900">
                      {weatherData.current.temp}
                    </span>
                    <span className="text-3xl md:text-4xl font-light text-blue-700">
                      °C
                    </span>
                  </div>

                  {/* Байдал (Condition) */}
                  <div className="inline-block px-6 py-2 bg-white rounded-full font-semibold text-sm md:text-base font-mongolian shadow-sm text-blue-900 mb-6">
                    {translateWeather(weatherData.current.weather.description)}
                  </div>

                  {/* Дэлгэрэнгүй үзэх товч (Call to action) */}
                  <div className="flex items-center justify-center gap-2 text-blue-700 text-sm font-mongolian opacity-0 group-hover:opacity-100 transition-opacity">
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
                </Link>
              ) : (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12">
                  <div className="animate-pulse">
                    <div className="h-16 w-16 bg-blue-200 rounded-full mx-auto mb-4"></div>
                    <p className="text-blue-600 font-mongolian text-sm">
                      Цаг агаарын өгөгдөл уншиж байна...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Passivhaus Featured Section (Passivhaus онцлох хэсэг) */}
            <Link
              href="/passivhaus"
              className="group block w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-6">
                  <div className="text-left">
                    <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-white mb-2">
                      Passivhaus Гарын Авлага
                    </h2>
                    <p className="font-mongolian text-sm md:text-base text-blue-100">
                      Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн байшин
                      барих гарын авлага
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex flex-col items-end gap-1"></div>
                  <svg
                    className="w-8 h-8 text-white transform group-hover:translate-x-2 transition-transform"
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
            </Link>
          </div>
        ) : (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-16 mb-16">
            <div className="animate-pulse">
              <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
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
