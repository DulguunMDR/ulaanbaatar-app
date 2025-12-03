// components/weather/ForecastCards.tsx
// 5 хоногийн цаг агаарын таамаглал (5-day weather forecast)

"use client";

import { getShortWeekdayMn, formatDateShort } from "@/lib/mongolianDate";

interface ForecastDay {
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  icon: string;
  windSpeed: number;
  humidity: number;
}

interface Props {
  forecast: ForecastDay[];
}

export default function ForecastCards({ forecast }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        📅 5 хоногийн таамаглал
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {forecast.map((day, index) => {
          const date = new Date(day.date);
          const dayName = getShortWeekdayMn(date); // Монгол гарагийн нэр (Mongolian weekday)
          const dateNum = formatDateShort(date); // MM/DD формат
          const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;

          return (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200 hover:shadow-md transition-shadow"
            >
              {/* Огноо (Date) */}
              <div className="text-center mb-2">
                <p className="text-sm font-bold text-gray-900">{dayName}</p>
                <p className="text-xs text-gray-600">{dateNum}</p>
              </div>

              {/* Цаг агаарын icon (Weather icon) */}
              <div className="flex justify-center mb-2">
                <img src={iconUrl} alt={day.condition} className="w-16 h-16" />
              </div>

              {/* Температур (Temperature) */}
              <div className="text-center mb-2">
                <p className="text-2xl font-bold text-gray-900">{day.temp}°</p>
                <p className="text-xs text-gray-600">
                  {day.tempMin}° / {day.tempMax}°
                </p>
              </div>

              {/* Нөхцөл (Condition) */}
              <p className="text-xs text-center text-gray-700 font-medium mb-2">
                {day.condition}
              </p>

              {/* Салхи ба чийгшил (Wind & Humidity) */}
              <div className="flex justify-between text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <span>💨</span>
                  <span>{day.windSpeed}м/с</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💧</span>
                  <span>{day.humidity}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Нэмэлт мэдээлэл (Additional info) */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">💡 Анхааруулга:</span> Цаг агаарын
          таамаглал нь ойролцоо утга юм. Өдөр бүр шинэчлэгдэнэ.
        </p>
      </div>
    </div>
  );
}
