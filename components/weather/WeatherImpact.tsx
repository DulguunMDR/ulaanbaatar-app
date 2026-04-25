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
  // Semantic color — only the indicator dot uses color, everything else is grayscale
  const dotColor =
    level === "good" ? "#22c55e" : level === "moderate" ? "#f59e0b" : "#ef4444";

  const levelLabelMn =
    level === "good"
      ? "Сайн нөлөө"
      : level === "moderate"
        ? "Дунд зэрэг"
        : "Муу нөлөө";

  const levelLabelEn =
    level === "good"
      ? "Positive"
      : level === "moderate"
        ? "Neutral"
        : "Negative";

  const factors = [
    {
      labelMn: "Салхи",
      labelEn: "Wind",
      value:
        level === "good"
          ? "Шүүрч байна"
          : level === "moderate"
            ? "Сул"
            : "Салхигүй",
    },
    {
      labelMn: "Чийгшил",
      labelEn: "Humidity",
      value:
        level === "good" ? "Сайн" : level === "moderate" ? "Хэвийн" : "Хуурай",
    },
    {
      labelMn: "Температур",
      labelEn: "Temperature",
      value:
        level === "good"
          ? "Тохиромжтой"
          : level === "moderate"
            ? "Хэвийн"
            : "Хүйтэн",
    },
  ];

  return (
    <div
      className="grid border-b border-gray-100"
      style={{ gridTemplateColumns: "32px 1fr" }}
    >
      {/* Vertical spine */}
      <div
        className="border-r border-gray-100 flex items-center justify-center py-10"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        <span
          className="text-gray-300 uppercase"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            letterSpacing: "0.4em",
          }}
        >
          НӨЛӨӨ · IMPACT
        </span>
      </div>

      {/* Content */}
      <div className="px-8 md:px-14 py-10">
        {/* Eyebrow with level indicator */}
        <div className="flex items-center gap-3 mb-6">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Цаг агаарын нөлөө · Weather impact on air quality
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block rounded-full flex-shrink-0"
              style={{ width: 6, height: 6, backgroundColor: dotColor }}
            />
            <span
              className="text-gray-400"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {levelLabelMn} · {levelLabelEn}
            </span>
          </div>
        </div>

        {/* Icon + message */}
        <div className="flex items-start gap-6 mb-8">
          {/* Icon — rendered as muted text, not emoji decoration */}
          <span
            className="text-gray-200 flex-shrink-0 select-none leading-none"
            style={{ fontSize: "48px" }}
            aria-hidden="true"
          >
            {icon}
          </span>

          <div>
            <p
              className="text-gray-900 mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {message}
            </p>
          </div>
        </div>

        <hr className="border-gray-100 mb-6" />

        {/* Recommendation */}
        <div className="mb-8">
          <p
            className="text-gray-400 uppercase mb-3"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Зөвлөмж · Recommendation
          </p>
          <p
            className="text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
          >
            {recommendation}
          </p>
        </div>

        {/* Factors grid — hairline table */}
        <div className="border border-gray-100">
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {factors.map((f, i) => (
              <div
                key={i}
                className="px-5 py-4"
                style={{
                  borderRight:
                    i < factors.length - 1 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <p
                  className="text-gray-400 uppercase mb-2"
                  style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                >
                  {f.labelMn}
                </p>
                <p
                  className="text-gray-900"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {f.value}
                </p>
                <p
                  className="text-gray-300 mt-0.5"
                  style={{ fontSize: "9px", letterSpacing: "0.08em" }}
                >
                  {f.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
