// components/charts/TodayInHistoryCard.tsx
// "Өнөөдөр түүхэнд" - өнөөдөртэй ижил өдрийн өмнөх жилүүдийн бохирдол (Today in History - pollution on this day in previous years)

"use client";

import { format } from "date-fns";
import { MultiYearHistoricalData } from "@/types";

interface Props {
  data: MultiYearHistoricalData;
  currentAqi: number;
}

function getAqiColor(aqi: number): string {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-500";
  if (aqi <= 150) return "bg-orange-500";
  if (aqi <= 200) return "bg-red-500";
  if (aqi <= 300) return "bg-purple-500";
  return "bg-red-900";
}

function getAqiLabel(aqi: number): string {
  if (aqi <= 50) return "Сайн";
  if (aqi <= 100) return "Дунд";
  if (aqi <= 150) return "Эрүүл мэндэд муу";
  if (aqi <= 200) return "Хортой";
  if (aqi <= 300) return "Маш хортой";
  return "Аюултай";
}

function getComparison(
  historicalAqi: number,
  currentAqi: number
): {
  text: string;
  icon: string;
  color: string;
} {
  const diff = currentAqi - historicalAqi;
  const percentDiff = Math.abs((diff / historicalAqi) * 100);

  if (Math.abs(diff) < 10) {
    return { text: "Ижил түвшин", icon: "➡️", color: "text-gray-600" };
  } else if (diff > 0) {
    return {
      text: `${Math.round(percentDiff)}% муудсан`,
      icon: "📈",
      color: "text-red-600",
    };
  } else {
    return {
      text: `${Math.round(percentDiff)}% сайжирсан`,
      icon: "📉",
      color: "text-green-600",
    };
  }
}

export default function TodayInHistoryCard({ data, currentAqi }: Props) {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  // Өнөөдөртэй ижил өдрийг жил бүрээс олох (Find same day in each year)
  const historicalToday = data.years
    .map((yearData) => {
      // Энэ жилийн өнөөдөртэй ижил өдрийг олох
      const sameDay = yearData.data.find((point) => {
        const pointDate = new Date(point.date);
        return (
          pointDate.getMonth() === todayMonth &&
          pointDate.getDate() === todayDate
        );
      });

      if (!sameDay) return null;

      return {
        year: yearData.year,
        aqi: sameDay.aqi,
        pm25: sameDay.components.pm2_5,
        date: sameDay.date,
      };
    })
    .filter(Boolean);

  if (historicalToday.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          📅 Өнөөдөр түүхэнд
        </h3>
        <p className="text-gray-600">Өгөгдөл олдсонгүй</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border-2 border-blue-200">
      <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        📅 Өнөөдөр түүхэнд
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {format(today, "MM сарын dd")} - өмнөх жилүүдтэй харьцуулалт
      </p>

      <div className="space-y-3">
        {historicalToday.map((item) => {
          if (!item) return null;

          const comparison = getComparison(item.aqi, currentAqi);
          const aqiColor = getAqiColor(item.aqi);

          return (
            <div
              key={item.year}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-bold text-gray-900">{item.year} он</p>
                  <p className="text-sm text-gray-600">
                    {format(new Date(item.date), "MM/dd")}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${aqiColor}`}
                    ></span>
                    <span className="text-2xl font-bold text-gray-900">
                      {item.aqi}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {getAqiLabel(item.aqi)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
                <span className="text-gray-600">
                  PM2.5: {item.pm25.toFixed(1)} μg/m³
                </span>
                <span className={`font-semibold ${comparison.color}`}>
                  {comparison.icon} {comparison.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 bg-blue-100 rounded-lg p-3">
        <p className="text-sm text-blue-900">
          <strong>Өнөөдөр:</strong> AQI {currentAqi} - {getAqiLabel(currentAqi)}
        </p>
      </div>
    </div>
  );
}
