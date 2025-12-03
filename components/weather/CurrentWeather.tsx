// components/weather/CurrentWeather.tsx
// Одоогийн цаг агаар (Current weather display)

"use client";

interface Props {
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  description: string;
  icon: string;
}

export default function CurrentWeather({
  temp,
  tempMin,
  tempMax,
  feelsLike,
  humidity,
  windSpeed,
  condition,
  description,
  icon,
}: Props) {
  // OpenWeather icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">Одоогийн цаг агаар</h3>
          <p className="text-blue-100 capitalize">{description}</p>
        </div>
        <img
          src={iconUrl}
          alt={condition}
          className="w-24 h-24 drop-shadow-lg"
        />
      </div>

      {/* Температур (Temperature) */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-6xl font-bold">{temp}°</span>
        <div className="text-sm text-blue-100">
          <p>↑ {tempMax}°</p>
          <p>↓ {tempMin}°</p>
        </div>
      </div>

      {/* Нарийвчилсан мэдээлэл (Detailed info) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🌡️</span>
            <p className="text-xs text-blue-100">Мэдрэмж</p>
          </div>
          <p className="text-2xl font-bold">{feelsLike}°</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">💨</span>
            <p className="text-xs text-blue-100">Салхи</p>
          </div>
          <p className="text-2xl font-bold">{windSpeed} м/с</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">💧</span>
            <p className="text-xs text-blue-100">Чийгшил</p>
          </div>
          <p className="text-2xl font-bold">{humidity}%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🌤️</span>
            <p className="text-xs text-blue-100">Нөхцөл</p>
          </div>
          <p className="text-lg font-bold">{condition}</p>
        </div>
      </div>
    </div>
  );
}
