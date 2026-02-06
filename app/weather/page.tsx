// app/weather/page.tsx
// Цаг агаар хуудас (Weather Page) - /weather

import { fetchAQI } from "@/lib/fetchAQI";
import { fetchAllStations } from "@/lib/fetchStations";
import InteractiveHero from "@/components/home/InteractiveHero";
import AQIMapWrapper from "@/components/map/AQIMapWrapper";
import InsightsDashboard from "@/components/home/InsightsDashboard";
import OpenMeteoForecast from "@/components/weather/OpenMeteoForecast";

export default async function WeatherPage() {
  // Fetch data from APIs (бүх өгөгдлийг зэрэг татах)
  const [aqiData, stations] = await Promise.all([
    fetchAQI(),
    fetchAllStations(),
  ]);

  // Show error state if data fetch failed
  if (!aqiData) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl mb-4">⚠️</p>
          <h1 className="font-mongolian text-3xl font-bold text-gray-900 mb-4">
            Өгөгдөл татаж чадсангүй
          </h1>
          <p className="text-gray-600 mb-4">
            API түлхүүрүүдээ шалгана уу (.env.local файл)
          </p>
          <p className="text-sm text-gray-500 font-mono bg-gray-100 p-4 rounded">
            NEXT_PUBLIC_WAQI_TOKEN
            <br />
            NEXT_PUBLIC_OPENWEATHER_KEY
          </p>
        </div>
      </main>
    );
  }

  // Station ID форматлах (Format station ID with @ prefix)
  const stationId = aqiData.idx ? `@${aqiData.idx}` : undefined;

  return (
    <main className="min-h-screen bg-white">
      {/* Add top padding to account for fixed header */}
      <div className="pt-16">
        {/* 1️⃣ Interactive Hero - Станц солиход бүх өгөгдөл шинэчлэгдэнэ */}
        {stations.length > 0 ? (
          <InteractiveHero stations={stations} initialData={aqiData} />
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">Станцын өгөгдөл олдсонгүй</p>
          </div>
        )}

        {/* 2️⃣ Interactive Map (Станцуудын газрын зураг) */}
        {stations.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 pb-12">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                🗺️ Станцуудын газрын зураг
              </h2>
              <p className="text-gray-600">
                Улаанбаатарын өөр өөр цэгүүдийн агаарын чанар + цаг агаарын
                давхаргууд
              </p>
            </div>
            <AQIMapWrapper stations={stations} />
          </section>
        )}

        {/* 3️⃣ 🆕 Open-Meteo Weather Forecast (Цаг агаарын таамаглал) */}
        <OpenMeteoForecast />

        {/* 4️⃣ Historical Data & Weather Dashboard */}
        {stationId ? (
          <InsightsDashboard stationId={stationId} currentAqi={aqiData.aqi} />
        ) : (
          <div className="max-w-6xl mx-auto px-4 pb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">⚠️</p>
              <p className="text-red-900 font-semibold">
                Station ID олдсонгүй - InsightsDashboard харагдахгүй байна
              </p>
              <p className="text-sm text-red-700 mt-2">
                aqiData.idx утга: {aqiData.idx || "undefined"}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
