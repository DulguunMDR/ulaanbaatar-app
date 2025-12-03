// components/home/InteractiveHero.tsx
// Интерактив Hero - Станц сонгоход бүх өгөгдөл шинэчлэгдэнэ

"use client";

import { useState, useEffect } from "react";
import { StationData, AQIData } from "@/types";
import { getHealthMessage } from "@/lib/constants";
import { fetchStationDetails } from "@/lib/fetchStations";
import { POLLUTANT_INFO, getPollutantColor } from "@/lib/pollutantInfo";

interface InteractiveHeroProps {
  stations: StationData[];
  initialData: AQIData; // Анхны өгөгдөл (server-аас ирнэ)
}

export default function InteractiveHero({
  stations,
  initialData,
}: InteractiveHeroProps) {
  const [selectedStation, setSelectedStation] = useState<StationData>(
    stations[0] ||
      stations.find(
        (s) => s.aqi === Math.min(...stations.map((st) => st.aqi))
      ) ||
      stations[0]
  );
  const [stationData, setStationData] = useState<AQIData>(initialData);
  const [loading, setLoading] = useState(false);

  // Станц солигдоход өгөгдөл татах
  useEffect(() => {
    const loadStationData = async () => {
      setLoading(true);
      const details = await fetchStationDetails(selectedStation.uid);
      if (details) {
        setStationData(details);
      }
      setLoading(false);
    };

    loadStationData();
  }, [selectedStation]);

  const healthMsg = getHealthMessage(stationData.aqi);

  // AQI-д харгалзах өнгө
  const getAQIColorClass = (aqi: number): string => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-golden";
    if (aqi <= 150) return "bg-orange-500";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-600";
    return "bg-red-900";
  };

  const sortedStations = [...stations].sort((a, b) => b.aqi - a.aqi);

  return (
    <div className="relative">
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 shadow-2xl flex items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-golden"></div>
            <p className="text-gray-700 font-semibold">
              Өгөгдөл ачааллаж байна...
            </p>
          </div>
        </div>
      )}

      {/* Giant AQI Hero Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Station name */}
          <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-2">
            {stationData.city}
          </h1>

          {/* Coordinates */}
          <p className="text-center text-sm text-gray-500 mb-8">
            📍 {selectedStation.station.geo[0].toFixed(4)}°N,{" "}
            {selectedStation.station.geo[1].toFixed(4)}°E
          </p>

          {/* Giant AQI Circle */}
          <div className="flex justify-center mb-8">
            <div
              className={`${getAQIColorClass(
                stationData.aqi
              )} w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-500`}
            >
              <div className="text-8xl md:text-9xl font-bold">
                {stationData.aqi}
              </div>
              <div className="text-2xl font-semibold mt-2">AQI</div>
            </div>
          </div>

          {/* Health Status */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {healthMsg.text}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {healthMsg.advice}
            </p>
          </div>

          {/* Updated time */}
          {stationData.time && (
            <p className="text-center text-sm text-gray-500">
              🕐 {stationData.time} шинэчлэгдсэн
            </p>
          )}
        </div>
      </section>

      {/* Quick Info Cards - All available data */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* PM2.5 */}
          {stationData.pm25 && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">PM2.5</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.pm25}
              </p>
              <p className="text-xs text-gray-500 mt-1">μg/m³</p>
            </div>
          )}

          {/* PM10 */}
          {stationData.pm10 && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">PM10</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.pm10}
              </p>
              <p className="text-xs text-gray-500 mt-1">μg/m³</p>
            </div>
          )}

          {/* O3 */}
          {stationData.o3 && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">O₃ (Озон)</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.o3}
              </p>
              <p className="text-xs text-gray-500 mt-1">ppb</p>
            </div>
          )}

          {/* NO2 */}
          {stationData.no2 && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">NO₂</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.no2}
              </p>
              <p className="text-xs text-gray-500 mt-1">ppb</p>
            </div>
          )}

          {/* SO2 */}
          {stationData.so2 && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">SO₂</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.so2}
              </p>
              <p className="text-xs text-gray-500 mt-1">ppb</p>
            </div>
          )}

          {/* CO */}
          {stationData.co && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">CO</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.co}
              </p>
              <p className="text-xs text-gray-500 mt-1">ppm</p>
            </div>
          )}

          {/* Humidity */}
          {stationData.humidity && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">Чийгшил</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.humidity}
              </p>
              <p className="text-xs text-gray-500 mt-1">%</p>
            </div>
          )}

          {/* Temperature */}
          {stationData.temp && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">Температур</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.temp}°
              </p>
              <p className="text-xs text-gray-500 mt-1">Celsius</p>
            </div>
          )}

          {/* Pressure */}
          {stationData.pressure && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">Даралт</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.pressure}
              </p>
              <p className="text-xs text-gray-500 mt-1">hPa</p>
            </div>
          )}

          {/* Wind */}
          {stationData.wind && (
            <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600 text-sm mb-1">Салхи</p>
              <p className="text-3xl font-bold text-gray-900">
                {stationData.wind}
              </p>
              <p className="text-xs text-gray-500 mt-1">m/s</p>
            </div>
          )}
        </div>
      </section>

      {/* Pollutants Grid with dominant indicator */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            🔬 Бохирдуулагчид
          </h2>
          <p className="text-gray-600">
            Агаарт байгаа бодисуудын дэлгэрэнгүй мэдээлэл
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { key: "pm25", value: stationData.pm25 },
            { key: "pm10", value: stationData.pm10 },
            { key: "o3", value: stationData.o3 },
            { key: "no2", value: stationData.no2 },
            { key: "so2", value: stationData.so2 },
            { key: "co", value: stationData.co },
          ]
            .filter((p) => p.value !== null)
            .map(({ key, value }) => {
              const info = POLLUTANT_INFO[key as keyof typeof POLLUTANT_INFO];
              const colorClass = getPollutantColor(key, value);
              const isDominant =
                stationData.dominantPollutant === key.toUpperCase();

              return (
                <div
                  key={key}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 relative hover:border-golden transition-all"
                >
                  {isDominant && (
                    <div className="absolute -top-2 -right-2 bg-golden text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      ⚠️ Гол асуудал
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {info.nameMn}
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {info.name}
                      </p>
                    </div>
                    <span className="text-3xl">{info.icon}</span>
                  </div>

                  <div className="mb-3">
                    <p className="text-4xl font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{info.unit}</p>
                  </div>

                  <div
                    className={`${colorClass} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block`}
                  >
                    {value! <= info.threshold.good && "Сайн"}
                    {value! > info.threshold.good &&
                      value! <= info.threshold.moderate &&
                      "Дунд"}
                    {value! > info.threshold.moderate && "Муу"}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Station Selector */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            📍 Станц сонгох
          </h2>
          <p className="text-gray-600">
            Өөр станцын өгөгдлийг харахын тулд доорх жагсаалтаас сонгоно уу
          </p>
        </div>

        <div className="space-y-3">
          {sortedStations.map((station, index) => {
            const stationHealthMsg = getHealthMessage(station.aqi);
            const isSelected = station.uid === selectedStation.uid;

            return (
              <button
                key={station.uid}
                onClick={() => setSelectedStation(station)}
                className={`w-full bg-white rounded-xl p-4 transition-all flex items-center justify-between text-left ${
                  isSelected
                    ? "border-2 border-golden shadow-lg scale-[1.02]"
                    : "border-2 border-gray-200 hover:border-golden hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected
                        ? "bg-golden text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-lg ${
                        isSelected ? "text-golden" : "text-gray-900"
                      }`}
                    >
                      {station.station.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {station.station.geo[0].toFixed(4)}°N,{" "}
                      {station.station.geo[1].toFixed(4)}°E
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-bold text-gray-900 mb-1">
                    {station.aqi}
                  </p>
                  <span
                    className={`${stationHealthMsg.color} text-white text-sm font-semibold px-4 py-1 rounded-full inline-block`}
                  >
                    {stationHealthMsg.text}
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-golden rounded-r-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-sm text-green-700 mb-1">Хамгийн сайн</p>
            <p className="text-3xl font-bold text-green-900">
              {sortedStations[sortedStations.length - 1]?.aqi}
            </p>
            <p className="text-xs text-green-600 mt-1">
              {
                sortedStations[sortedStations.length - 1]?.station.name.split(
                  ","
                )[0]
              }
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-700 mb-1">Дундаж</p>
            <p className="text-3xl font-bold text-gray-900">
              {Math.round(
                sortedStations.reduce((sum, s) => sum + s.aqi, 0) /
                  sortedStations.length
              )}
            </p>
            <p className="text-xs text-gray-600 mt-1">Бүх станцууд</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="text-sm text-red-700 mb-1">Хамгийн муу</p>
            <p className="text-3xl font-bold text-red-900">
              {sortedStations[0]?.aqi}
            </p>
            <p className="text-xs text-red-600 mt-1">
              {sortedStations[0]?.station.name.split(",")[0]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
