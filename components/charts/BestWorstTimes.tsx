// components/charts/BestWorstTimes.tsx
"use client";

interface Props {
  bestTime: string;
  bestAqi: number;
  worstTime: string;
  worstAqi: number;
  message: string;
}

function getAQIDotColor(aqi: number): string {
  if (aqi <= 50) return "#22c55e";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 150) return "#f97316";
  if (aqi <= 200) return "#ef4444";
  if (aqi <= 300) return "#a855f7";
  return "#7c2d12";
}

function getAQILabel(aqi: number): string {
  if (aqi <= 50) return "Сайн";
  if (aqi <= 100) return "Хэвийн";
  if (aqi <= 150) return "Эмзэг бүлэгт муу";
  if (aqi <= 200) return "Муу";
  if (aqi <= 300) return "Маш муу";
  return "Аюултай";
}

export default function BestWorstTimes({
  bestTime,
  bestAqi,
  worstTime,
  worstAqi,
  message,
}: Props) {
  return (
    <div className="border border-gray-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p
          className="text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Гадаа гарахад тохиромжтой цаг · Best time outside
        </p>
      </div>

      {/* Best / Worst — two column table */}
      <div
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Best */}
        <div className="px-5 py-6 border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-3"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хамгийн сайн · Best
          </p>
          <div className="flex items-baseline gap-3 mb-1">
            <span
              className="text-gray-900 font-normal"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "36px" }}
            >
              {bestTime}
            </span>
            <span
              className="text-gray-900"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {bestAqi}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block rounded-full"
              style={{
                width: 6,
                height: 6,
                backgroundColor: getAQIDotColor(bestAqi),
                flexShrink: 0,
              }}
            />
            <span className="text-gray-400" style={{ fontSize: "10px" }}>
              {getAQILabel(bestAqi)}
            </span>
          </div>
        </div>

        {/* Worst */}
        <div className="px-5 py-6">
          <p
            className="text-gray-400 uppercase mb-3"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хамгийн муу · Worst
          </p>
          <div className="flex items-baseline gap-3 mb-1">
            <span
              className="text-gray-900 font-normal"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "36px" }}
            >
              {worstTime}
            </span>
            <span
              className="text-gray-600"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {worstAqi}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block rounded-full"
              style={{
                width: 6,
                height: 6,
                backgroundColor: getAQIDotColor(worstAqi),
                flexShrink: 0,
              }}
            />
            <span className="text-gray-400" style={{ fontSize: "10px" }}>
              {getAQILabel(worstAqi)}
            </span>
          </div>
        </div>
      </div>

      {/* Timeline bar */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          {["00:00", "06:00", "12:00", "18:00", "24:00"].map((t) => (
            <span key={t} className="text-gray-300" style={{ fontSize: "9px" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="relative h-1 bg-gray-100 rounded-full overflow-visible">
          {/* Best marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white"
            style={{
              left: `${(parseInt(bestTime) / 24) * 100}%`,
              backgroundColor: getAQIDotColor(bestAqi),
            }}
          />
          {/* Worst marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white"
            style={{
              left: `${(parseInt(worstTime) / 24) * 100}%`,
              backgroundColor: getAQIDotColor(worstAqi),
            }}
          />
        </div>
      </div>

      {/* Recommendation */}
      <div className="px-5 py-4">
        <p
          className="text-gray-400 uppercase mb-2"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Зөвлөмж · Recommendation
        </p>
        <p
          className="text-gray-600"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
