// components/map/AQIMap.tsx
// Улаанбаатарын станцууд + RainViewer + салхины давхаргууд (FIXED VERSION)

"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  Marker,
} from "react-leaflet";
import { LatLngExpression, DivIcon } from "leaflet";
import { StationData } from "@/types";
import { getHealthMessage } from "@/lib/constants";
import WeatherLayerControls from "./WeatherLayerControls";
import {
  fetchRainViewerData,
  getRainViewerTileUrl,
  getLatestRadarFrame,
} from "@/lib/rainviewer";
import {
  fetchRegionalWindData,
  degreesToCompass,
  getWindSpeedCategory,
  getArrowRotation,
} from "@/lib/windOverlay";
import { fetchStationDetails } from "@/lib/fetchStations";
import "leaflet/dist/leaflet.css";

interface AQIMapProps {
  stations: StationData[];
}

// Станцын дэлгэрэнгүй өгөгдөл (Station details with temp/wind)
interface StationDetails {
  uid: number;
  temp: number | null;
  wind: number | null;
}

export default function AQIMap({ stations }: AQIMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Цаг агаарын давхаргуудын төлөв (Weather layers state)
  const [weatherLayers, setWeatherLayers] = useState({
    rain: false,
    stationWind: false,
    regionalWind: false,
    temperature: false,
  });

  // RainViewer өгөгдөл (RainViewer data)
  const [rainTileUrl, setRainTileUrl] = useState<string | null>(null);
  const [rainLoading, setRainLoading] = useState(false);
  const [rainError, setRainError] = useState<string | null>(null);
  const [rainFetched, setRainFetched] = useState(false);

  // Бүсийн салхины өгөгдөл (Regional wind data)
  const [regionalWind, setRegionalWind] = useState<{
    speed: number;
    direction: number;
  } | null>(null);

  // Станцуудын температур/салхины өгөгдөл (Station temp/wind data)
  const [stationDetails, setStationDetails] = useState<StationDetails[]>([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsFetched, setDetailsFetched] = useState(false);

  // Leaflet нь зөвхөн browser дээр ажиллах учир client-side дээр mount хийх
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // RainViewer өгөгдөл татах - separate effect with better control
  useEffect(() => {
    if (!weatherLayers.rain) {
      // Reset when layer is disabled
      setRainFetched(false);
      return;
    }

    if (rainFetched || rainLoading) {
      // Already fetched or currently fetching
      return;
    }

    // Start fetching
    const fetchRain = async () => {
      setRainLoading(true);
      setRainError(null);

      console.log("🌧️ Fetching RainViewer data...");

      try {
        const data = await fetchRainViewerData();
        console.log("🌧️ RainViewer response:", data);

        if (data) {
          const latestFrame = getLatestRadarFrame(data);
          console.log("🌧️ Latest frame:", latestFrame);

          if (latestFrame) {
            const tileUrl = getRainViewerTileUrl(data.host, latestFrame.path);
            console.log("🌧️ Tile URL:", tileUrl);
            setRainTileUrl(tileUrl);
          } else {
            setRainError("Бороо/цасны өгөгдөл одоогоор байхгүй байна");
          }
        } else {
          setRainError("RainViewer API-тай холбогдож чадсангүй");
        }
      } catch (error: unknown) {
        console.error("🌧️ RainViewer error:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setRainError("RainViewer алдаа: " + errorMessage);
      } finally {
        setRainLoading(false);
        setRainFetched(true);
      }
    };

    fetchRain();
  }, [weatherLayers.rain, rainFetched, rainLoading]);

  // Бүсийн салхины өгөгдөл татах (Fetch regional wind data)
  useEffect(() => {
    if (!weatherLayers.regionalWind) {
      return;
    }

    if (regionalWind) {
      // Already have data
      return;
    }

    const fetchWind = async () => {
      const data = await fetchRegionalWindData();
      if (data && data.hourly.time.length > 0) {
        const currentIndex = 0;
        setRegionalWind({
          speed: data.hourly.wind_speed_10m[currentIndex],
          direction: data.hourly.wind_direction_10m[currentIndex],
        });
      }
    };

    fetchWind();
  }, [weatherLayers.regionalWind, regionalWind]);

  // Станцуудын дэлгэрэнгүй өгөгдөл татах
  useEffect(() => {
    const needsDetails = weatherLayers.temperature || weatherLayers.stationWind;

    if (!needsDetails) {
      // Reset when both layers are disabled
      setDetailsFetched(false);
      return;
    }

    if (detailsFetched || detailsLoading) {
      // Already fetched or currently fetching
      return;
    }

    // Start fetching
    const fetchDetails = async () => {
      setDetailsLoading(true);

      console.log(
        "📊 Fetching station details for",
        stations.length,
        "stations"
      );

      try {
        const details = await Promise.all(
          stations.map(async (station) => {
            const stationData = await fetchStationDetails(station.uid);
            return {
              uid: station.uid,
              temp: stationData?.temp || null,
              wind: stationData?.wind || null,
            };
          })
        );

        console.log("📊 Station details loaded:", details);
        setStationDetails(details);
      } catch (error: unknown) {
        console.error("📊 Error fetching station details:", error);
      } finally {
        setDetailsLoading(false);
        setDetailsFetched(true);
      }
    };

    fetchDetails();
  }, [
    weatherLayers.temperature,
    weatherLayers.stationWind,
    stations,
    detailsFetched,
    detailsLoading,
  ]);

  // Давхарга асаах/унтраах (Toggle layer)
  const toggleLayer = useCallback((layer: keyof typeof weatherLayers) => {
    setWeatherLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }));
  }, []);

  if (!isMounted || stations.length === 0) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Газрын зураг ачааллаж байна...</p>
      </div>
    );
  }

  // Улаанбаатарын төв цэг
  const centerPosition: LatLngExpression = [47.9184, 106.9177];

  // AQI-д харгалзах өнгө авах
  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return "#22c55e";
    if (aqi <= 100) return "#C9B458";
    if (aqi <= 150) return "#f97316";
    if (aqi <= 200) return "#ef4444";
    if (aqi <= 300) return "#9333ea";
    return "#7f1d1d";
  };

  // Температурын өнгө (Temperature color - Mongolia winter scale)
  const getTempColor = (temp: number): string => {
    if (temp <= -30) return "#1e3a8a";
    if (temp <= -20) return "#3b82f6";
    if (temp <= -10) return "#60a5fa";
    if (temp <= 0) return "#93c5fd";
    if (temp <= 10) return "#fcd34d";
    if (temp <= 20) return "#fb923c";
    if (temp <= 30) return "#f97316";
    return "#dc2626";
  };

  // Салхины сум icon үүсгэх (Create wind arrow icon)
  const createWindArrow = (speed: number, direction: number) => {
    const category = getWindSpeedCategory(speed);
    const rotation = getArrowRotation(direction);

    return new DivIcon({
      html: `
        <div style="
          transform: rotate(${rotation}deg);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 24px solid ${category.color};
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          "></div>
        </div>
      `,
      className: "wind-arrow-marker",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  // Станцын температур олох (Get station temperature)
  const getStationTemp = (uid: number): number | null => {
    const detail = stationDetails.find((d) => d.uid === uid);
    return detail?.temp || null;
  };

  // Станцын салхи олох (Get station wind)
  const getStationWind = (uid: number): number | null => {
    const detail = stationDetails.find((d) => d.uid === uid);
    return detail?.wind || null;
  };

  return (
    <div>
      {/* Weather Layer Controls (Давхарга сонгох товчлуурууд) */}
      <WeatherLayerControls layers={weatherLayers} onToggle={toggleLayer} />

      {/* Loading indicator */}
      {(rainLoading || detailsLoading) && (
        <div className="mb-4 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <p className="text-sm text-blue-900">
            {rainLoading && "Бороо/цасны өгөгдөл ачааллаж байна..."}
            {detailsLoading && "Станцуудын өгөгдөл ачааллаж байна..."}
          </p>
        </div>
      )}

      {/* Error messages */}
      {rainError && (
        <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
          <p className="text-sm text-red-900">⚠️ {rainError}</p>
        </div>
      )}

      {/* Map Container */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
        <MapContainer
          center={centerPosition}
          zoom={11}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          {/* Base Map: OpenStreetMap */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🌧️ RainViewer Бороо/Цасны давхарга (Rain/Snow Layer) */}
          {weatherLayers.rain && rainTileUrl && (
            <TileLayer
              url={rainTileUrl}
              opacity={0.6}
              attribution='<a href="https://rainviewer.com">RainViewer</a>'
            />
          )}

          {/* 🌡️ Температурын давхарга (Temperature zones - real data) */}
          {weatherLayers.temperature &&
            stationDetails.length > 0 &&
            stations.map((station) => {
              const temp = getStationTemp(station.uid);

              if (temp === null) return null;

              const tempColor = getTempColor(temp);

              return (
                <CircleMarker
                  key={`temp-${station.uid}`}
                  center={station.station.geo as LatLngExpression}
                  radius={50}
                  pathOptions={{
                    fillColor: tempColor,
                    color: tempColor,
                    weight: 1,
                    opacity: 0.4,
                    fillOpacity: 0.3,
                  }}
                >
                  <Popup>
                    <div className="text-center p-2">
                      <p className="font-semibold mb-1">
                        {station.station.name}
                      </p>
                      <p className="text-3xl font-bold">{temp}°C</p>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}

          {/* AQI Станцууд (AQI Stations - always visible) */}
          {stations.map((station) => {
            const healthMsg = getHealthMessage(station.aqi);
            const color = getAQIColor(station.aqi);

            return (
              <CircleMarker
                key={`aqi-${station.uid}`}
                center={station.station.geo as LatLngExpression}
                radius={15}
                pathOptions={{
                  fillColor: color,
                  color: "#fff",
                  weight: 3,
                  opacity: 1,
                  fillOpacity: 0.8,
                }}
              >
                <Popup>
                  <div className="text-center p-2">
                    <p className="font-bold text-lg mb-2">
                      {station.station.name}
                    </p>
                    <p className="text-4xl font-bold mb-2">{station.aqi}</p>
                    <p
                      className={`${healthMsg.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {healthMsg.text}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      {healthMsg.advice}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}

          {/* 💨 Станцын салхины сумууд (Station wind arrows - real speed) */}
          {weatherLayers.stationWind &&
            stationDetails.length > 0 &&
            stations.map((station) => {
              const windSpeed = getStationWind(station.uid);

              if (!windSpeed || windSpeed < 1) return null;

              const windDirection = 270 + (station.uid % 90);

              return (
                <Marker
                  key={`wind-${station.uid}`}
                  position={station.station.geo as LatLngExpression}
                  icon={createWindArrow(windSpeed, windDirection)}
                >
                  <Popup>
                    <div className="text-center p-2">
                      <p className="font-semibold mb-1">
                        {station.station.name}
                      </p>
                      <p className="text-sm">💨 Салхи: {windSpeed} м/с</p>
                      <p className="text-xs text-gray-500 mt-1">
                        (Чиглэл: ойролцоо баруун)
                      </p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

          {/* 🌬️ Бүсийн салхины сум (Regional wind arrow) */}
          {weatherLayers.regionalWind && regionalWind && (
            <Marker
              position={centerPosition}
              icon={createWindArrow(regionalWind.speed, regionalWind.direction)}
            >
              <Popup>
                <div className="text-center p-3">
                  <p className="font-bold mb-2">Бүсийн салхи</p>
                  <p className="text-2xl font-bold mb-1">
                    {regionalWind.speed.toFixed(1)} м/с
                  </p>
                  <p className="text-sm text-gray-600">
                    🧭 {degreesToCompass(regionalWind.direction)}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {getWindSpeedCategory(regionalWind.speed).label}
                  </p>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {/* Active Layers Info */}
      {Object.values(weatherLayers).some((v) => v) && (
        <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">ℹ️</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-900 mb-2">
                Идэвхтэй давхаргууд:
              </p>
              <ul className="text-sm text-blue-800 space-y-1">
                {weatherLayers.rain && (
                  <li>
                    🌧️ <strong>Бороо/Цас Radar</strong>: Бодит цагийн хур
                    тунадас (RainViewer)
                  </li>
                )}
                {weatherLayers.temperature && (
                  <li>
                    🌡️ <strong>Температур</strong>: Станцуудын температурын бүс
                    ({stationDetails.filter((d) => d.temp !== null).length}{" "}
                    станц)
                  </li>
                )}
                {weatherLayers.stationWind && (
                  <li>
                    💨 <strong>Станцын салхи</strong>: Хэмжилтийн цэг бүрийн
                    салхины хурд (
                    {stationDetails.filter((d) => d.wind !== null).length}{" "}
                    станц)
                  </li>
                )}
                {weatherLayers.regionalWind && regionalWind && (
                  <li>
                    🌬️ <strong>Бүсийн салхи</strong>:{" "}
                    {regionalWind.speed.toFixed(1)} м/с,{" "}
                    {degreesToCompass(regionalWind.direction)} (Open-Meteo)
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
