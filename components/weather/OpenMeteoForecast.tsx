// components/weather/OpenMeteoForecast.tsx
// Open-Meteo цаг агаарын 7 хоногийн таамаглал (7-day weather forecast)

import {
  fetchOpenMeteo,
  getWeatherDescription,
  getWindDescription,
} from "@/lib/fetchOpenMeteo";

export default async function OpenMeteoForecast() {
  const data = await fetchOpenMeteo();

  if (!data) {
    return (
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
          <p className="text-2xl mb-2">⚠️</p>
          <p className="text-red-900 font-semibold">
            Цаг агаарын таамагллыг татаж чадсангүй
          </p>
        </div>
      </section>
    );
  }

  // 7 хоногийн өгөгдөл боловсруулах (Process 7-day forecast)
  const forecastDays = data.daily.time.map((date, index) => {
    const weatherDesc = getWeatherDescription(data.daily.weather_code[index]);
    return {
      date,
      tempMax: Math.round(data.daily.temperature_2m_max[index]),
      tempMin: Math.round(data.daily.temperature_2m_min[index]),
      weatherText: weatherDesc.text,
      weatherEmoji: weatherDesc.emoji,
      windSpeed: data.daily.wind_speed_10m_max[index],
      windDesc: getWindDescription(data.daily.wind_speed_10m_max[index]),
      precipitation: data.daily.precipitation_sum[index],
    };
  });

  // Маргаашийн өгөгдөл (Tomorrow's data - index 1)
  const tomorrow = forecastDays[1];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🌤️ Цаг агаарын таамаглал
        </h2>
        <p className="text-gray-600">
          Маргаашийн цаг агаар болон 7 хоногийн таамаглал
        </p>
      </div>

      {/* Маргаашийн онцлох карт (Tomorrow's highlight card) */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 mb-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wide">
              Маргааш
            </p>
            <p className="text-3xl font-bold">{tomorrow.weatherEmoji}</p>
          </div>
          <div className="text-right">
            <p className="text-5xl font-bold">{tomorrow.tempMax}°</p>
            <p className="text-blue-100 text-sm">Бага {tomorrow.tempMin}°</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
            <span className="text-sm">Цаг агаар:</span>
            <span className="font-semibold">{tomorrow.weatherText}</span>
          </div>
          <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
            <span className="text-sm">Салхи:</span>
            <span className="font-semibold">
              {tomorrow.windSpeed.toFixed(1)} м/с ({tomorrow.windDesc})
            </span>
          </div>
          {tomorrow.precipitation > 0 && (
            <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
              <span className="text-sm">Хур тунадас:</span>
              <span className="font-semibold">{tomorrow.precipitation} мм</span>
            </div>
          )}
        </div>

        {/* Агаарын чанарт нөлөөлөх зөвлөмж */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-sm text-blue-100">
            {tomorrow.windSpeed > 5
              ? "💨 Хүчтэй салхи агаарын бохирдлыг тараана"
              : tomorrow.precipitation > 0
              ? "🌧️ Бороо/цас агаарыг цэвэрлэнэ"
              : "⚠️ Сул салхи - бохирдол үлдэж магадгүй"}
          </p>
        </div>
      </div>

      {/* 7 хоногийн таамаглал (7-day forecast grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
        {forecastDays.map((day, index) => {
          const date = new Date(day.date);
          const dayName = date.toLocaleDateString("mn-MN", {
            weekday: "short",
          });
          const isToday = index === 0;
          const isTomorrow = index === 1;

          return (
            <div
              key={day.date}
              className={`
                rounded-xl p-4 text-center transition-all
                ${
                  isTomorrow
                    ? "bg-blue-50 border-2 border-blue-300 shadow-md"
                    : isToday
                    ? "bg-gray-50 border-2 border-gray-300"
                    : "bg-white border-2 border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                {isToday ? "Өнөөдөр" : isTomorrow ? "Маргааш" : dayName}
              </p>
              <p className="text-3xl mb-2">{day.weatherEmoji}</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {day.tempMax}°
              </p>
              <p className="text-xs text-gray-600 mb-2">{day.tempMin}°</p>
              <p className="text-xs text-gray-500">{day.weatherText}</p>

              {/* Салхины мэдээлэл (Wind info) */}
              {day.windSpeed > 3 && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    💨 {day.windSpeed.toFixed(0)} м/с
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Тайлбар (Explanation) */}
      <div className="mt-6 bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
        <p className="text-sm text-gray-700">
          💡 <strong>Яагаад энэ чухал вэ?</strong> Хүчтэй салхи (5 м/с-аас их)
          PM2.5 тоосонцорыг тараана. Бороо/цас агаарыг цэвэрлэнэ. Сул салхи +
          хүйтэн (temperature inversion) = бохирдол ихсэнэ.
        </p>
      </div>
    </section>
  );
}
