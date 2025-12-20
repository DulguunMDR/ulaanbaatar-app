// components/map/WeatherLayerControls.tsx
// Цаг агаарын давхаргууд унтраах/асаах (Weather layer toggle controls)

"use client";

interface WeatherLayerControlsProps {
  layers: {
    rain: boolean;
    stationWind: boolean;
    regionalWind: boolean;
    temperature: boolean;
  };
  onToggle: (layer: keyof WeatherLayerControlsProps["layers"]) => void;
}

export default function WeatherLayerControls({
  layers,
  onToggle,
}: WeatherLayerControlsProps) {
  const layerButtons = [
    {
      key: "rain" as const,
      label: "Бороо/Цас Radar",
      icon: "🌧️",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      description: "Бодит цагийн хур тунадас",
    },
    {
      key: "stationWind" as const,
      label: "Станцын Салхи",
      icon: "💨",
      color: "bg-cyan-500",
      hoverColor: "hover:bg-cyan-600",
      description: "Станц бүрийн салхины хурд",
    },
    {
      key: "regionalWind" as const,
      label: "Бүсийн Салхи",
      icon: "🌬️",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      description: "Ерөнхий салхины урсгал",
    },
    {
      key: "temperature" as const,
      label: "Температур",
      icon: "🌡️",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      description: "Станцуудын температур",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-4 border-2 border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900">
          🗺️ Цаг агаарын давхаргууд
        </h3>
        <p className="text-xs text-gray-500 hidden sm:block">
          Товчлуур дарж асаах/унтраах
        </p>
      </div>

      {/* Desktop: горизонтал, Mobile: grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {layerButtons.map((btn) => {
          const isActive = layers[btn.key];
          return (
            <button
              key={btn.key}
              onClick={() => onToggle(btn.key)}
              className={`
                flex flex-col items-center justify-center
                px-3 py-4 rounded-lg
                transition-all duration-200
                border-2
                ${
                  isActive
                    ? `${btn.color} text-white border-transparent shadow-md scale-105`
                    : `bg-gray-50 text-gray-600 border-gray-200 ${btn.hoverColor} hover:text-white hover:scale-105`
                }
              `}
              title={btn.description}
            >
              <span className="text-3xl mb-2">{btn.icon}</span>
              <span className="text-xs font-semibold text-center leading-tight">
                {btn.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Зааварчилгаа (Instructions) */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
          <p>
            🌧️ <strong>Бороо/Цас</strong>: Бодит цагийн radar (RainViewer)
          </p>
          <p>
            💨 <strong>Станцын салхи</strong>: Хэмжилтийн цэг бүрийн өгөгдөл
          </p>
          <p>
            🌬️ <strong>Бүсийн салхи</strong>: Ерөнхий урсгалын чиглэл
          </p>
          <p>
            🌡️ <strong>Температур</strong>: Станцуудын температурын зураглал
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          💡 Салхи нь агаарын бохирдлыг тараахад тусалдаг. Хүчтэй салхи (5 м/с+)
          = Агаар цэвэрхэн байх магадлал өндөр
        </p>
      </div>
    </div>
  );
}
