// components/home/AQIDetail.tsx
"use client";

import { useState, useEffect } from "react";
import { StationData, AQIData } from "@/types";
import { getHealthMessage } from "@/lib/constants";
import { fetchStationDetails } from "@/lib/fetchStations";
import { POLLUTANT_INFO } from "@/lib/pollutantInfo";

function getAQIDotColor(aqi: number): string {
  if (aqi <= 50) return "#22c55e";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7f1d1d";
}

interface AQIDetailProps {
  stations: StationData[];
  initialData: AQIData;
  onStationChange?: (data: AQIData) => void;
}

export default function AQIDetail({
  stations,
  initialData,
  onStationChange,
}: AQIDetailProps) {
  const [selectedStation, setSelectedStation] = useState<StationData>(
    stations[0],
  );
  const [stationData, setStationData] = useState<AQIData>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const details = await fetchStationDetails(selectedStation.uid);
      if (details) {
        setStationData(details);
        onStationChange?.(details);
      }
      setLoading(false);
    };
    load();
  }, [selectedStation]);

  const sortedStations = [...stations]
    .filter((s) => s.aqi && !isNaN(s.aqi))
    .sort((a, b) => b.aqi - a.aqi);

  const avgAqi = Math.round(
    sortedStations.reduce((sum, s) => sum + s.aqi, 0) / sortedStations.length,
  );

  const pollutants = [
    { key: "pm25", value: stationData.pm25, label: "PM2.5", unit: "μg/m³" },
    { key: "pm10", value: stationData.pm10, label: "PM10", unit: "μg/m³" },
    { key: "o3", value: stationData.o3, label: "O₃", unit: "ppb" },
    { key: "no2", value: stationData.no2, label: "NO₂", unit: "ppb" },
    { key: "so2", value: stationData.so2, label: "SO₂", unit: "ppb" },
    { key: "co", value: stationData.co, label: "CO", unit: "ppm" },
    {
      key: "humidity",
      value: stationData.humidity,
      label: "Чийгшил",
      unit: "%",
    },
    { key: "temp", value: stationData.temp, label: "Температур", unit: "°C" },
    {
      key: "pressure",
      value: stationData.pressure,
      label: "Даралт",
      unit: "hPa",
    },
    { key: "wind", value: stationData.wind, label: "Салхи", unit: "м/с" },
  ].filter((p) => p.value !== null && p.value !== undefined);

  const selectedStationShortName = selectedStation.station.name.split(",")[0];

  return (
    <div
      className={`transition-opacity ${loading ? "opacity-50 pointer-events-none" : ""}`}
    >
      {/* Drill-down seam — signals shift from city-level to station-level */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-4 flex items-center justify-between">
          <p
            className="text-gray-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.14em",
            }}
          >
            Станцын дэлгэрэнгүй · Station detail
          </p>
          <p
            className="text-gray-200 uppercase hidden md:block"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.10em",
            }}
          >
            Хот даяарын дунджаас ялгаатай байж болно
          </p>
        </div>
      </div>

      {/* Pollutants */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div
          className="border-r border-gray-100 flex items-center justify-center"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className="text-gray-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            БОХИРДУУЛАГЧИД
          </span>
        </div>

        <div className="px-8 md:px-14 py-8">
          {/* Label left, active station name right */}
          <div className="flex items-baseline justify-between mb-6">
            <p
              className="text-gray-400 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Бохирдуулагчид · Pollutants
            </p>
            <p
              className="text-gray-300 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.10em" }}
            >
              {selectedStationShortName}
            </p>
          </div>

          <div className="border border-gray-100">
            {pollutants.map((p) => {
              const info = POLLUTANT_INFO[p.key as keyof typeof POLLUTANT_INFO];
              const isDominant =
                stationData.dominantPollutant === p.key.toUpperCase();

              return (
                <div
                  key={p.key}
                  className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block rounded-full flex-shrink-0"
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: isDominant ? "#ef4444" : "transparent",
                      }}
                    />
                    <span
                      className="text-gray-900"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                      }}
                    >
                      {p.label}
                    </span>
                    {info && (
                      <span
                        className="text-gray-300"
                        style={{ fontSize: "11px" }}
                      >
                        {info.nameMn}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-gray-900"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {p.value}
                    </span>
                    <span
                      className="text-gray-400"
                      style={{ fontSize: "10px" }}
                    >
                      {p.unit}
                    </span>
                    {isDominant && (
                      <span
                        className="text-gray-400 uppercase"
                        style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                      >
                        гол
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Station selector */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div
          className="border-r border-gray-100 flex items-center justify-center"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className="text-gray-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            СТАНЦУУД · STATIONS
          </span>
        </div>

        <div className="px-8 md:px-14 py-10">
          {/* Label left, source note right */}
          <div className="flex items-baseline justify-between mb-6">
            <p
              className="text-gray-400 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Станц сонгох · Select station
            </p>
            <p
              className="text-gray-300 uppercase hidden md:block"
              style={{ fontSize: "9px", letterSpacing: "0.10em" }}
            >
              WAQI · Хувь станц
            </p>
          </div>

          {/* Station table */}
          <div className="border border-gray-100 mb-8">
            <div
              className="grid border-b border-gray-100"
              style={{ gridTemplateColumns: "1fr 80px 80px" }}
            >
              {["Станц", "AQI", "Төлөв"].map((h) => (
                <div
                  key={h}
                  className="px-4 py-2 border-r border-gray-100 last:border-r-0"
                >
                  <span
                    className="text-gray-300 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {sortedStations.map((station) => {
              const msg = getHealthMessage(station.aqi);
              const isSelected = station.uid === selectedStation.uid;

              return (
                <button
                  key={station.uid}
                  onClick={() => setSelectedStation(station)}
                  className="w-full grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left"
                  style={{ gridTemplateColumns: "1fr 80px 80px" }}
                >
                  <div className="px-4 py-4 border-r border-gray-100 flex items-center gap-2">
                    {isSelected && (
                      <span
                        className="inline-block rounded-full flex-shrink-0"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: "#1a1a1a",
                        }}
                      />
                    )}
                    <span
                      className={isSelected ? "text-gray-900" : "text-gray-500"}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: isSelected ? 500 : 400,
                      }}
                    >
                      {station.station.name}
                    </span>
                  </div>
                  <div className="px-4 py-4 border-r border-gray-100 flex items-center justify-center">
                    <span
                      className="text-gray-900"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "15px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {station.aqi}
                    </span>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center gap-1.5">
                    <span
                      className="inline-block rounded-full flex-shrink-0"
                      style={{
                        width: 6,
                        height: 6,
                        backgroundColor: getAQIDotColor(station.aqi),
                      }}
                    />
                    <span
                      className="text-gray-400"
                      style={{ fontSize: "10px" }}
                    >
                      {msg.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Summary stats */}
          <div className="border border-gray-100">
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {[
                {
                  labelMn: "Хамгийн сайн",
                  value: sortedStations[sortedStations.length - 1]?.aqi ?? "—",
                  name:
                    sortedStations[
                      sortedStations.length - 1
                    ]?.station.name.split(",")[0] ?? "—",
                },
                {
                  labelMn: "Дундаж",
                  value: avgAqi,
                  name: "Бүх станцууд",
                },
                {
                  labelMn: "Хамгийн муу",
                  value: sortedStations[0]?.aqi ?? "—",
                  name: sortedStations[0]?.station.name.split(",")[0] ?? "—",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="px-5 py-4"
                  style={{ borderRight: i < 2 ? "1px solid #f3f4f6" : "none" }}
                >
                  <p
                    className="text-gray-400 uppercase mb-2"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    {stat.labelMn}
                  </p>
                  <p
                    className="text-gray-900 mb-0.5"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "20px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-300" style={{ fontSize: "10px" }}>
                    {stat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
