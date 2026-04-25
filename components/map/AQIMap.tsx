// components/map/AQIMap.tsx

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

interface StationDetails {
  uid: number;
  temp: number | null;
  wind: number | null;
}

export default function AQIMap({ stations }: AQIMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  const [weatherLayers, setWeatherLayers] = useState({
    rain: false,
    stationWind: false,
    regionalWind: false,
    temperature: false,
  });

  const [rainTileUrl, setRainTileUrl] = useState<string | null>(null);
  const [rainLoading, setRainLoading] = useState(false);
  const [rainError, setRainError] = useState<string | null>(null);
  const [rainFetched, setRainFetched] = useState(false);

  const [regionalWind, setRegionalWind] = useState<{
    speed: number;
    direction: number;
  } | null>(null);

  const [stationDetails, setStationDetails] = useState<StationDetails[]>([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsFetched, setDetailsFetched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!weatherLayers.rain) {
      setRainFetched(false);
      return;
    }
    if (rainFetched || rainLoading) return;

    const fetchRain = async () => {
      setRainLoading(true);
      setRainError(null);
      try {
        const data = await fetchRainViewerData();
        if (data) {
          const latestFrame = getLatestRadarFrame(data);
          if (latestFrame) {
            setRainTileUrl(getRainViewerTileUrl(data.host, latestFrame.path));
          } else {
            setRainError("Хур тунадасны өгөгдөл одоогоор байхгүй");
          }
        } else {
          setRainError("RainViewer-тай холбогдож чадсангүй");
        }
      } catch (error: unknown) {
        const msg =
          error instanceof Error ? error.message : "Тодорхойгүй алдаа";
        setRainError("RainViewer: " + msg);
      } finally {
        setRainLoading(false);
        setRainFetched(true);
      }
    };

    fetchRain();
  }, [weatherLayers.rain, rainFetched, rainLoading]);

  useEffect(() => {
    if (!weatherLayers.regionalWind || regionalWind) return;

    const fetchWind = async () => {
      const data = await fetchRegionalWindData();
      if (data && data.hourly.time.length > 0) {
        setRegionalWind({
          speed: data.hourly.wind_speed_10m[0],
          direction: data.hourly.wind_direction_10m[0],
        });
      }
    };

    fetchWind();
  }, [weatherLayers.regionalWind, regionalWind]);

  useEffect(() => {
    const needsDetails = weatherLayers.temperature || weatherLayers.stationWind;
    if (!needsDetails) {
      setDetailsFetched(false);
      return;
    }
    if (detailsFetched || detailsLoading) return;

    const fetchDetails = async () => {
      setDetailsLoading(true);
      try {
        const details = await Promise.all(
          stations.map(async (station) => {
            const d = await fetchStationDetails(station.uid);
            return {
              uid: station.uid,
              temp: d?.temp || null,
              wind: d?.wind || null,
            };
          }),
        );
        setStationDetails(details);
      } catch (error: unknown) {
        console.error("Station details error:", error);
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

  const toggleLayer = useCallback((layer: keyof typeof weatherLayers) => {
    setWeatherLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  }, []);

  if (!isMounted || stations.length === 0) {
    return (
      <div
        className="w-full border border-gray-100 flex items-center justify-center"
        style={{ height: "500px" }}
      >
        <p
          className="text-gray-300 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Газрын зураг ачааллаж байна
        </p>
      </div>
    );
  }

  const centerPosition: LatLngExpression = [47.9184, 106.9177];

  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return "#22c55e";
    if (aqi <= 100) return "#C9B458";
    if (aqi <= 150) return "#f97316";
    if (aqi <= 200) return "#ef4444";
    if (aqi <= 300) return "#9333ea";
    return "#7f1d1d";
  };

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

  const createWindArrow = (speed: number, direction: number) => {
    const category = getWindSpeedCategory(speed);
    const rotation = getArrowRotation(direction);
    return new DivIcon({
      html: `<div style="transform:rotate(${rotation}deg);width:40px;height:40px;display:flex;align-items:center;justify-content:center;"><div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:22px solid ${category.color};opacity:0.8;"></div></div>`,
      className: "wind-arrow-marker",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  const getStationTemp = (uid: number) =>
    stationDetails.find((d) => d.uid === uid)?.temp ?? null;
  const getStationWind = (uid: number) =>
    stationDetails.find((d) => d.uid === uid)?.wind ?? null;

  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Layer controls */}
      <WeatherLayerControls layers={weatherLayers} onToggle={toggleLayer} />

      {/* Status bar — loading or error, never both */}
      {(rainLoading || detailsLoading) && (
        <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-3">
          <div
            className="flex-shrink-0"
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#9ca3af",
              animation: "pulse 1.5s infinite",
            }}
          />
          <p
            className="text-gray-400"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            {rainLoading
              ? "Хур тунадасны өгөгдөл татаж байна"
              : "Станцуудын өгөгдөл татаж байна"}
          </p>
        </div>
      )}

      {rainError && !rainLoading && (
        <div className="px-6 py-3 border-b border-gray-100">
          <p
            className="text-gray-400"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            {rainError}
          </p>
        </div>
      )}

      {/* Map */}
      <div
        className="w-full overflow-hidden border-t border-gray-100"
        style={{ height: "500px" }}
      >
        <MapContainer
          center={centerPosition}
          zoom={11}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {weatherLayers.rain && rainTileUrl && (
            <TileLayer
              url={rainTileUrl}
              opacity={0.6}
              attribution='<a href="https://rainviewer.com">RainViewer</a>'
            />
          )}

          {weatherLayers.temperature &&
            stationDetails.length > 0 &&
            stations.map((station) => {
              const temp = getStationTemp(station.uid);
              if (temp === null) return null;
              return (
                <CircleMarker
                  key={`temp-${station.uid}`}
                  center={station.station.geo as LatLngExpression}
                  radius={50}
                  pathOptions={{
                    fillColor: getTempColor(temp),
                    color: getTempColor(temp),
                    weight: 1,
                    opacity: 0.3,
                    fillOpacity: 0.2,
                  }}
                >
                  <Popup>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#6b7280",
                          marginBottom: "4px",
                        }}
                      >
                        {station.station.name}
                      </p>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: 500,
                          color: "#111",
                        }}
                      >
                        {temp}°C
                      </p>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}

          {stations.map((station) => {
            const healthMsg = getHealthMessage(station.aqi);
            return (
              <CircleMarker
                key={`aqi-${station.uid}`}
                center={station.station.geo as LatLngExpression}
                radius={14}
                pathOptions={{
                  fillColor: getAQIColor(station.aqi),
                  color: "#fff",
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.85,
                }}
              >
                <Popup>
                  <div
                    style={{
                      textAlign: "center",
                      padding: "8px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {station.station.name}
                    </p>
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        color: "#111",
                        lineHeight: 1,
                        marginBottom: "8px",
                      }}
                    >
                      {station.aqi}
                    </p>
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.10em",
                        color: "#9ca3af",
                      }}
                    >
                      {healthMsg.text}
                    </p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9ca3af",
                        marginTop: "4px",
                      }}
                    >
                      {healthMsg.advice}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}

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
                    <div
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#6b7280",
                          marginBottom: "4px",
                        }}
                      >
                        {station.station.name}
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          color: "#111",
                        }}
                      >
                        {windSpeed} м/с
                      </p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

          {weatherLayers.regionalWind && regionalWind && (
            <Marker
              position={centerPosition}
              icon={createWindArrow(regionalWind.speed, regionalWind.direction)}
            >
              <Popup>
                <div
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "4px",
                    }}
                  >
                    Бүсийн салхи
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#111",
                      marginBottom: "4px",
                    }}
                  >
                    {regionalWind.speed.toFixed(1)} м/с
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "#9ca3af",
                    }}
                  >
                    {degreesToCompass(regionalWind.direction)}
                  </p>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
