// components/map/AQIMap.tsx
// Улаанбаатарын станцуудыг газрын зураг дээр харуулах (Leaflet ашиглана)

"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { StationData } from "@/types";
import { getHealthMessage } from "@/lib/constants";
import "leaflet/dist/leaflet.css";

interface AQIMapProps {
  stations: StationData[];
}

export default function AQIMap({ stations }: AQIMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Leaflet нь зөвхөн browser дээр ажиллах учир client-side дээр mount хийх
  useEffect(() => {
    // Timeout ашиглаж cascading render-ээс зайлсхийх
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
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
    if (aqi <= 50) return "#22c55e"; // Ногоон
    if (aqi <= 100) return "#C9B458"; // Алт (таны лого өнгө)
    if (aqi <= 150) return "#f97316"; // Улбар шар
    if (aqi <= 200) return "#ef4444"; // Улаан
    if (aqi <= 300) return "#9333ea"; // Нил ягаан
    return "#7f1d1d"; // Хар улаан
  };

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
      <MapContainer
        center={centerPosition}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* OpenStreetMap давхарга */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Станц бүрийг CircleMarker болгож харуулах */}
        {stations.map((station) => {
          const healthMsg = getHealthMessage(station.aqi);
          const color = getAQIColor(station.aqi);

          return (
            <CircleMarker
              key={station.uid}
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
      </MapContainer>
    </div>
  );
}
