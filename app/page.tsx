// app/page.tsx

import { fetchAQI } from "@/lib/fetchAQI";
import { fetchWeather } from "@/lib/fetchWeather";
import GiantAQI from "@/components/GiantAQI";
import Header from "@/components/Header";

export default async function Home() {
  // Fetch data from APIs
  const [aqiData, weatherData] = await Promise.all([
    fetchAQI(),
    fetchWeather(),
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

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed header with quick stats */}
      <Header
        temp={aqiData.temp || weatherData?.current.temp || null}
        windSpeed={weatherData?.current.windSpeed || 0}
      />

      {/* Add top padding to account for fixed header */}
      <div className="pt-16">
        {/* Giant AQI Display */}
        <GiantAQI
          aqi={aqiData.aqi}
          city={aqiData.city}
          updatedTime={aqiData.time}
        />

        {/* Quick info cards */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aqiData.pm25 && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">PM2.5</p>
                <p className="text-3xl font-bold text-gray-900">
                  {aqiData.pm25}
                </p>
                <p className="text-xs text-gray-500 mt-1">μg/m³</p>
              </div>
            )}

            {aqiData.pm10 && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">PM10</p>
                <p className="text-3xl font-bold text-gray-900">
                  {aqiData.pm10}
                </p>
                <p className="text-xs text-gray-500 mt-1">μg/m³</p>
              </div>
            )}

            {aqiData.humidity && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">Чийгшил</p>
                <p className="text-3xl font-bold text-gray-900">
                  {aqiData.humidity}
                </p>
                <p className="text-xs text-gray-500 mt-1">%</p>
              </div>
            )}

            {weatherData && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">Мэдрэмж</p>
                <p className="text-3xl font-bold text-gray-900">
                  {weatherData.current.feelsLike}°
                </p>
                <p className="text-xs text-gray-500 mt-1">Celsius</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
