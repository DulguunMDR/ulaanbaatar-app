// components/map/WeatherLayerControls.tsx

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

const LAYERS = [
  {
    key: "rain" as const,
    label: "Бороо / Цас",
    sublabel: "Radar",
  },
  {
    key: "stationWind" as const,
    label: "Станцын салхи",
    sublabel: "Хэмжилтийн цэг",
  },
  {
    key: "regionalWind" as const,
    label: "Бүсийн салхи",
    sublabel: "Open-Meteo",
  },
  {
    key: "temperature" as const,
    label: "Температур",
    sublabel: "Станцуудаар",
  },
] as const;

export default function WeatherLayerControls({
  layers,
  onToggle,
}: WeatherLayerControlsProps) {
  return (
    <div
      className="border-b border-gray-100 mb-0"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-3 flex items-baseline justify-between">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Давхаргууд · Layers
        </p>
        <p
          className="text-gray-300"
          style={{ fontSize: "9px", letterSpacing: "0.10em" }}
        >
          Сонгох
        </p>
      </div>

      {/* Layer rows */}
      <div>
        {LAYERS.map((layer, i) => {
          const isActive = layers[layer.key];
          return (
            <button
              key={layer.key}
              onClick={() => onToggle(layer.key)}
              className={`
                w-full text-left px-6 py-3 flex items-center justify-between
                border-t border-gray-100
                transition-colors duration-150
                ${isActive ? "bg-gray-50" : "bg-white hover:bg-gray-50"}
              `}
            >
              <div className="flex items-center gap-4">
                {/* Active indicator — thin left pip */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "2px",
                    height: "28px",
                    background: isActive ? "#1a1a1a" : "transparent",
                    transition: "background 0.15s",
                  }}
                />
                <div>
                  <p
                    className={`transition-colors ${
                      isActive ? "text-gray-900" : "text-gray-400"
                    }`}
                    style={{ fontSize: "12px", letterSpacing: "0.02em" }}
                  >
                    {layer.label}
                  </p>
                  <p
                    className="text-gray-300 mt-0.5"
                    style={{ fontSize: "9px", letterSpacing: "0.10em" }}
                  >
                    {layer.sublabel}
                  </p>
                </div>
              </div>

              {/* Toggle — minimal pill */}
              <div
                style={{
                  width: "28px",
                  height: "14px",
                  borderRadius: "7px",
                  background: isActive ? "#1a1a1a" : "transparent",
                  border: isActive ? "none" : "1px solid #d1d5db",
                  transition: "background 0.15s, border 0.15s",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: isActive ? "16px" : "2px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: isActive ? "#fff" : "#d1d5db",
                    transition: "left 0.15s, background 0.15s",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer note */}
      {Object.values(layers).some((v) => v) && (
        <div className="px-6 py-3 border-t border-gray-100">
          <p
            className="text-gray-300"
            style={{
              fontSize: "9px",
              letterSpacing: "0.10em",
              lineHeight: "1.6",
            }}
          >
            Хүчтэй салхи (5 м/с+) агаарын бохирдлыг тараадаг
          </p>
        </div>
      )}
    </div>
  );
}
