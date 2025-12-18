// components/home/InsightsDashboard.tsx
// Түүхэн өгөгдөл болон цаг агаарын мэдээллийн dashboard (Insights dashboard with historical data & weather)

"use client";

import { useEffect, useState } from "react";
import AQITrendChart from "@/components/charts/AQITrendChart";
import WeeklyComparison from "@/components/charts/WeeklyComparison";
import BestWorstTimes from "@/components/charts/BestWorstTimes";
import CurrentWeather from "@/components/weather/CurrentWeather";
import ForecastCards from "@/components/weather/ForecastCards";
import WeatherImpact from "@/components/weather/WeatherImpact";
import TodayInHistoryCard from "@/components/charts/TodayInHistoryCard";
import YearComparisonChart from "@/components/charts/YearComparisonChart";
import PollutionHeatmap from "@/components/charts/PollutionHeatmap";
import SeasonalComparison from "@/components/charts/SeasonalComparison";
import { HistoricalAQIData } from "@/lib/fetchHistoricalAQI";
import { WeatherForecast } from "@/lib/fetchForecast";
import { MultiYearHistoricalData } from "@/types";
import {
  analyzeWeatherImpact,
  findBestTimeOutside,
} from "@/lib/weatherImpactAnalyzer";

interface Props {
  stationId?: string;
  currentAqi: number;
}

export default function InsightsDashboard({ stationId, currentAqi }: Props) {
  const [historicalData, setHistoricalData] =
    useState<HistoricalAQIData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [multiYearData, setMultiYearData] =
    useState<MultiYearHistoricalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [multiYearLoading, setMultiYearLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [multiYearError, setMultiYearError] = useState<string | null>(null);

  // Богино хугацааны өгөгдөл татах (Fetch short-term data: 24h + 7 days)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        if (!stationId) {
          throw new Error("Станцын ID олдсонгүй");
        }

        console.log("🔍 InsightsDashboard - Starting fetch");
        console.log("📍 Station ID:", stationId);
        console.log("🌡️ Current AQI:", currentAqi);

        const [historicalRes, weatherRes] = await Promise.all([
          fetch(`/api/historical?stationId=${stationId}`),
          fetch("/api/forecast"),
        ]);

        console.log(
          "📊 Historical response:",
          historicalRes.status,
          historicalRes.ok
        );
        console.log("🌤️ Weather response:", weatherRes.status, weatherRes.ok);

        if (!historicalRes.ok) {
          const errorText = await historicalRes.text();
          console.error("❌ Historical error:", errorText);
          throw new Error(`Түүхэн өгөгдөл: ${historicalRes.status}`);
        }

        if (!weatherRes.ok) {
          const errorText = await weatherRes.text();
          console.error("❌ Weather error:", errorText);
          throw new Error(`Цаг агаар: ${weatherRes.status}`);
        }

        const historical = await historicalRes.json();
        const weather = await weatherRes.json();

        console.log("✅ Historical data:", historical);
        console.log("✅ Weather data:", weather);

        setHistoricalData(historical);
        setWeatherData(weather);
      } catch (err) {
        console.error("❌ Error in fetchData:", err);
        setError(err instanceof Error ? err.message : "Алдаа гарлаа");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [stationId, currentAqi]);

  // Олон жилийн өгөгдөл татах (Fetch multi-year data: 2020-present)
  useEffect(() => {
    async function fetchMultiYearData() {
      try {
        setMultiYearLoading(true);
        setMultiYearError(null);

        console.log("📅 Fetching multi-year historical data...");

        const response = await fetch("/api/historical-pollution");

        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ Multi-year data error:", errorText);
          throw new Error(`Олон жилийн өгөгдөл: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Multi-year data:", data);

        setMultiYearData(data);
      } catch (err) {
        console.error("❌ Error fetching multi-year data:", err);
        setMultiYearError(err instanceof Error ? err.message : "Алдаа гарлаа");
      } finally {
        setMultiYearLoading(false);
      }
    }

    fetchMultiYearData();
  }, []);

  // Ачаалж байна (Loading)
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 bg-blue-50 rounded-2xl">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-900 font-semibold">
            📊 Түүхэн өгөгдөл татаж байна...
          </p>
          <p className="mt-2 text-sm text-gray-600">Station: {stationId}</p>
        </div>
      </div>
    );
  }

  // Алдаа (Error)
  if (error || !historicalData || !weatherData) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <p className="text-2xl mb-2 text-center">⚠️</p>
          <p className="text-red-900 font-semibold text-center mb-4">
            {error || "Өгөгдөл олдсонгүй"}
          </p>
          <div className="bg-white rounded p-4 text-sm mb-4">
            <p className="text-gray-700 mb-1">🔍 Debug Info:</p>
            <p>
              Station ID:{" "}
              <span className="font-mono">{stationId || "undefined"}</span>
            </p>
            <p>Historical Data: {historicalData ? "✅" : "❌"}</p>
            <p>Weather Data: {weatherData ? "✅" : "❌"}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            🔄 Дахин ачаалах
          </button>
        </div>
      </div>
    );
  }

  // Цаг агаарын нөлөө (Weather impact)
  const weatherImpact = analyzeWeatherImpact(
    weatherData.current.windSpeed,
    weatherData.current.humidity,
    weatherData.current.temp,
    currentAqi
  );

  // Хамгийн сайн цаг (Best time)
  const bestTime = findBestTimeOutside(
    historicalData.hourly,
    weatherData.current.windSpeed
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* 1️⃣ Цаг агаар (Weather) */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          🌤️ Цаг агаарын мэдээлэл
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <CurrentWeather
            temp={weatherData.current.temp}
            tempMin={weatherData.current.tempMin}
            tempMax={weatherData.current.tempMax}
            feelsLike={weatherData.current.feelsLike}
            humidity={weatherData.current.humidity}
            windSpeed={weatherData.current.windSpeed}
            condition={weatherData.current.condition}
            description={weatherData.current.description}
            icon={weatherData.current.icon}
          />

          <WeatherImpact
            level={weatherImpact.level}
            message={weatherImpact.message}
            icon={weatherImpact.icon}
            recommendation={weatherImpact.recommendation}
          />
        </div>

        <div className="mt-6">
          <ForecastCards forecast={weatherData.forecast} />
        </div>
      </section>

      {/* 2️⃣ Богино хугацааны түүх (Short-term history: 24h + 7 days) */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          📊 Сүүлийн үеийн хандлага
        </h2>

        <div className="space-y-6">
          <AQITrendChart data={historicalData.hourly} />
          <WeeklyComparison data={historicalData.daily} />
          <BestWorstTimes
            bestTime={bestTime.bestTime}
            bestAqi={bestTime.bestAqi}
            worstTime={bestTime.worstTime}
            worstAqi={bestTime.worstAqi}
            message={bestTime.message}
          />
        </div>
      </section>

      {/* 3️⃣ ОЛОН ЖИЛИЙН ТҮҮХ (Multi-year history: 2020-present) */}
      <section>
        <div className="border-t-4 border-blue-500 pt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            🏛️ Олон жилийн түүхэн өгөгдөл
          </h2>
          <p className="text-gray-600 mb-6">
            2020 оноос хойшхи агаарын чанарын өөрчлөлт
          </p>

          {multiYearLoading ? (
            <div className="bg-blue-50 rounded-2xl p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
              <p className="text-gray-900 font-semibold text-lg">
                📅 Олон жилийн өгөгдөл татаж байна...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Энэ нь хэдэн секунд үргэлжилж болно
              </p>
            </div>
          ) : multiYearError || !multiYearData ? (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <p className="text-2xl mb-2 text-center">⚠️</p>
              <p className="text-yellow-900 font-semibold text-center mb-2">
                {multiYearError || "Олон жилийн өгөгдөл олдсонгүй"}
              </p>
              <p className="text-sm text-gray-600 text-center mb-4">
                WAQI API-ээс өгөгдөл татахад алдаа гарлаа. Таны интернет холболт
                эсвэл API түлхүүрийг шалгана уу.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                🔄 Дахин оролдох
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Өнөөдөр түүхэнд + Жилийн харьцуулалт */}
              <div className="grid lg:grid-cols-2 gap-6">
                <TodayInHistoryCard
                  data={multiYearData}
                  currentAqi={currentAqi}
                />
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📈 Жилүүдийн статистик
                  </h3>
                  <div className="space-y-3">
                    {multiYearData.years.map((year) => (
                      <div
                        key={year.year}
                        className="bg-white rounded-lg p-3 flex justify-between items-center"
                      >
                        <span className="font-bold text-gray-900">
                          {year.year}
                        </span>
                        <div className="flex gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Дундаж: </span>
                            <span className="font-bold">{year.avgAqi}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Max: </span>
                            <span className="font-bold text-red-600">
                              {year.maxAqi}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Min: </span>
                            <span className="font-bold text-green-600">
                              {year.minAqi}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Жилийн харьцуулалт график */}
              <YearComparisonChart data={multiYearData} />

              {/* Heatmap календар */}
              <PollutionHeatmap data={multiYearData} />

              {/* Улирлын харьцуулалт */}
              <SeasonalComparison data={multiYearData} />
            </div>
          )}
        </div>
      </section>

      {/* 4️⃣ Мэдээлэл (Info) */}
      <section>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            📌 Мэдээлэл
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              • <strong>Олон жилийн өгөгдөл:</strong> Сүүлийн 30 хоногийн бодит
              өгөгдөл + 2020-2024 оны улирлын хандлагад суурилсан симуляци.
            </p>

            <p>
              • <strong>AQI тооцоолол:</strong> PM2.5 утга дээр суурилсан EPA
              стандарт ашиглана (0-500 scale).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
