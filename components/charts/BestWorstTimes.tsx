// components/charts/BestWorstTimes.tsx
// Хамгийн сайн/муу цагууд (Best/Worst times to go outside)

"use client";

interface Props {
  bestTime: string;
  bestAqi: number;
  worstTime: string;
  worstAqi: number;
  message: string;
}

export default function BestWorstTimes({
  bestTime,
  bestAqi,
  worstTime,
  worstAqi,
  message,
}: Props) {
  // AQI түвшингийн өнгө (AQI color)
  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return "bg-green-500 text-white";
    if (aqi <= 100) return "bg-yellow-500 text-white";
    if (aqi <= 150) return "bg-orange-500 text-white";
    if (aqi <= 200) return "bg-red-500 text-white";
    if (aqi <= 300) return "bg-purple-500 text-white";
    return "bg-red-900 text-white";
  };

  const getAQILabel = (aqi: number): string => {
    if (aqi <= 50) return "Сайн";
    if (aqi <= 100) return "Хэвийн";
    if (aqi <= 150) return "Эмзэг бүлэгт муу";
    if (aqi <= 200) return "Муу";
    if (aqi <= 300) return "Маш муу";
    return "Аюултай";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        ⏰ Гадаа гарахад тохиромжтой цаг
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Хамгийн сайн цаг (Best time) */}
        <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✅</span>
            <h4 className="font-bold text-green-900">Хамгийн сайн цаг</h4>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-green-700">{bestTime}</p>
            <div
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getAQIColor(
                bestAqi
              )}`}
            >
              {bestAqi}
            </div>
          </div>
          <p className="text-sm text-green-700 mt-1">{getAQILabel(bestAqi)}</p>
        </div>

        {/* Хамгийн муу цаг (Worst time) */}
        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚠️</span>
            <h4 className="font-bold text-red-900">Хамгийн муу цаг</h4>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-red-700">{worstTime}</p>
            <div
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getAQIColor(
                worstAqi
              )}`}
            >
              {worstAqi}
            </div>
          </div>
          <p className="text-sm text-red-700 mt-1">{getAQILabel(worstAqi)}</p>
        </div>
      </div>

      {/* Зөвлөмж (Recommendation) */}
      <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
        <div className="flex gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-blue-900 mb-1">Зөвлөмж</h4>
            <p className="text-blue-800 leading-relaxed">{message}</p>
          </div>
        </div>
      </div>

      {/* Цаг хэмжээний зурагт (Timeline visualization) */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          {/* Градиент харуулах (Show gradient) */}
          <div className="absolute inset-0 bg-linear-to.r from-red-500 via-yellow-500 to-green-500 opacity-50"></div>

          {/* Хамгийн сайн цаг тэмдэглэх (Mark best time) */}
          <div
            className="absolute top-0 w-1 h-full bg-green-600"
            style={{ left: `${(parseInt(bestTime) / 24) * 100}%` }}
          ></div>

          {/* Хамгийн муу цаг тэмдэглэх (Mark worst time) */}
          <div
            className="absolute top-0 w-1 h-full bg-red-600"
            style={{ left: `${(parseInt(worstTime) / 24) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
