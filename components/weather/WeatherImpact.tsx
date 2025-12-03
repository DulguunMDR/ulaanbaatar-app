// components/weather/WeatherImpact.tsx
// Цаг агаарын агаарын чанарт үзүүлэх нөлөө (Weather impact on air quality)

"use client";

interface Props {
  level: "good" | "moderate" | "bad";
  message: string;
  icon: string;
  recommendation: string;
}

export default function WeatherImpact({
  level,
  message,
  icon,
  recommendation,
}: Props) {
  // Түвшингээр өнгө сонгох (Color by impact level)
  const getLevelStyle = () => {
    switch (level) {
      case "good":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-900",
          badge: "bg-green-500 text-white",
        };
      case "moderate":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          text: "text-yellow-900",
          badge: "bg-yellow-500 text-white",
        };
      case "bad":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-900",
          badge: "bg-red-500 text-white",
        };
    }
  };

  const style = getLevelStyle();

  // Түвшингийн текст (Level label)
  const getLevelLabel = () => {
    switch (level) {
      case "good":
        return "Сайн нөлөө";
      case "moderate":
        return "Дунд зэрэг";
      case "bad":
        return "Муу нөлөө";
    }
  };

  return (
    <div
      className={`${style.bg} rounded-2xl shadow-lg p-6 border-2 ${style.border}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="text-5xl">{icon}</div>

        <div className="flex-1">
          {/* Гарчиг (Header) */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`text-xl font-bold ${style.text}`}>
              Цаг агаарын нөлөө
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${style.badge}`}
            >
              {getLevelLabel()}
            </span>
          </div>

          {/* Үндсэн мессеж (Main message) */}
          <p className={`text-lg font-semibold ${style.text} mb-3`}>
            {message}
          </p>

          {/* Зөвлөмж (Recommendation) */}
          <div className="bg-white/50 rounded-lg p-3 border border-gray-200">
            <div className="flex gap-2">
              <span className="text-lg">💡</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Зөвлөмж
                </p>
                <p className={`text-sm ${style.text} leading-relaxed`}>
                  {recommendation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Цаг агаарын хүчин зүйлс (Weather factors) */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-white/50 rounded-lg p-2">
          <p className="text-xs text-gray-600 mb-1">Салхи</p>
          <p className="text-sm font-semibold text-gray-900">
            {level === "good"
              ? "Шүүрч байна"
              : level === "moderate"
              ? "Сул"
              : "Салхигүй"}
          </p>
        </div>
        <div className="bg-white/50 rounded-lg p-2">
          <p className="text-xs text-gray-600 mb-1">Чийгшил</p>
          <p className="text-sm font-semibold text-gray-900">
            {level === "good"
              ? "Сайн"
              : level === "moderate"
              ? "Хэвийн"
              : "Хуурай"}
          </p>
        </div>
        <div className="bg-white/50 rounded-lg p-2">
          <p className="text-xs text-gray-600 mb-1">Температур</p>
          <p className="text-sm font-semibold text-gray-900">
            {level === "good"
              ? "Тохиромжтой"
              : level === "moderate"
              ? "Хэвийн"
              : "Хүйтэн"}
          </p>
        </div>
      </div>
    </div>
  );
}
