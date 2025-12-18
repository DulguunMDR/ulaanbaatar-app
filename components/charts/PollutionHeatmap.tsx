// components/charts/PollutionHeatmap.tsx
// Бохирдлын календар heatmap (Pollution calendar heatmap - GitHub style)

"use client";

import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { MultiYearHistoricalData } from "@/types";
import { format } from "date-fns";

interface Props {
  data: MultiYearHistoricalData;
}

// Өнгө авах функц (Get color based on AQI)
function getColorClass(aqi: number): string {
  if (aqi === 0) return "color-empty";
  if (aqi <= 50) return "color-scale-1"; // Сайн (green)
  if (aqi <= 100) return "color-scale-2"; // Дунд (yellow)
  if (aqi <= 150) return "color-scale-3"; // Эрүүл мэндэд муу (orange)
  if (aqi <= 200) return "color-scale-4"; // Хортой (red)
  if (aqi <= 300) return "color-scale-5"; // Маш хортой (purple)
  return "color-scale-6"; // Аюултай (dark red)
}

export default function PollutionHeatmap({ data }: Props) {
  const [selectedYear, setSelectedYear] = useState(
    data.years[data.years.length - 1]?.year || new Date().getFullYear()
  );
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const selectedYearData = data.years.find((y) => y.year === selectedYear);

  if (!selectedYearData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
        <p className="text-gray-600">Өгөгдөл олдсонгүй</p>
      </div>
    );
  }

  // Heatmap өгөгдөл бэлтгэх (Prepare heatmap data)
  const heatmapData = selectedYearData.data.map((point) => ({
    date: point.date.split("T")[0], // YYYY-MM-DD
    count: point.aqi, // Өнгөний эрчмийг тодорхойлно
  }));

  const startDate = new Date(selectedYear, 0, 1);
  const endDate = new Date(selectedYear, 11, 31);

  // Tooltip мэдээлэл (Tooltip info)
  const tooltipData = hoveredDate
    ? selectedYearData.data.find((d) => d.date.split("T")[0] === hoveredDate)
    : null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          📅 Жилийн календар (Heatmap)
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          календар - өнгө нь агаарын чанарыг илэрхийлнэ
        </p>

        {/* Жил сонгох (Year selection) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.years.map((yearData) => (
            <button
              key={yearData.year}
              onClick={() => setSelectedYear(yearData.year)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedYear === yearData.year
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {yearData.year}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] pollution-heatmap">
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapData}
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              return getColorClass(value.count);
            }}
            titleForValue={(value) => {
              if (!value) return "Өгөгдөл байхгүй";
              return `${format(new Date(value.date), "yyyy-MM-dd")}: AQI ${
                value.count
              }`;
            }}
            onMouseOver={(event, value) => {
              if (value) {
                setHoveredDate(value.date);
              }
            }}
            onMouseLeave={() => setHoveredDate(null)}
          />
        </div>
      </div>

      {/* Tooltip */}
      {tooltipData && (
        <div className="mt-4 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
          <p className="font-semibold text-gray-900">
            📅 {format(new Date(tooltipData.date), "yyyy оны MM сарын dd")}
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            AQI: {tooltipData.aqi}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            PM2.5: {tooltipData.components.pm2_5.toFixed(1)} μg/m³
          </p>
        </div>
      )}

      {/* Legend (Тайлбар) */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        <span className="text-gray-700 font-semibold">Тайлбар:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#0e4429]"></div>
          <span>Сайн (0-50)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#fde047]"></div>
          <span>Дунд (51-100)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#fb923c]"></div>
          <span>Муу (101-150)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#f87171]"></div>
          <span>Хортой (151-200)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#a855f7]"></div>
          <span>Маш хортой (201-300)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#7f1d1d]"></div>
          <span>Аюултай (300+)</span>
        </div>
      </div>

      {/* Статистик (Statistics) */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Дундаж AQI</p>
          <p className="text-3xl font-bold text-gray-900">
            {selectedYearData.avgAqi}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Хамгийн их</p>
          <p className="text-3xl font-bold text-red-600">
            {selectedYearData.maxAqi}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Хамгийн бага</p>
          <p className="text-3xl font-bold text-green-600">
            {selectedYearData.minAqi}
          </p>
        </div>
      </div>
    </div>
  );
}
