// components/terms/WindSpeedSection.tsx

"use client";

import { useState } from "react";

const windLevels = [
  {
    range: "0–5",
    label: "Зөөлөн, тайван",
    labelEn: "Calm",
    dot: "#16a34a",
    beaufort: "Beaufort 0–3",
    kmh: "0–18 км/ц",
    description: "Модны навч аяархан хөдөлнө. Гадаа явахад тааламжтай.",
  },
  {
    range: "6–10",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#2563eb",
    beaufort: "Beaufort 4–5",
    kmh: "19–38 км/ц",
    description: "Жижиг мөчрүүд хөдөлнө. Туг, далбаа сэгсэрнэ.",
  },
  {
    range: "11–15",
    label: "Хүчтэй салхи",
    labelEn: "Strong",
    dot: "#ea580c",
    beaufort: "Beaufort 6–7",
    kmh: "39–61 км/ц",
    description: "Том мөчрүүд хөдөлнө. Шүхэр ашиглахад хүндрэлтэй.",
  },
  {
    range: "16+",
    label: "Маш хүчтэй, шуурга",
    labelEn: "Storm",
    dot: "#dc2626",
    beaufort: "Beaufort 8+",
    kmh: "62+ км/ц",
    description: "Модны мөчир хугарна. Явахад хүндрэлтэй. Аюултай.",
  },
];

const conversions = [
  { ms: "1 м/с", kmh: "3.6 км/ц" },
  { ms: "5 м/с", kmh: "18 км/ц" },
  { ms: "10 м/с", kmh: "36 км/ц" },
  { ms: "15 м/с", kmh: "54 км/ц" },
  { ms: "20 м/с", kmh: "72 км/ц — шуурга" },
];

export function WindSpeedSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section>
      {/* Eyebrow */}
      <p
        className="text-gray-400 uppercase mb-5"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Цаг агаар · Weather
      </p>

      {/* Title */}
      <h2
        className="font-normal tracking-tight text-gray-900 mb-4"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(28px, 4vw, 42px)",
          lineHeight: "1",
        }}
      >
        Салхины хурд
      </h2>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Агаарын масс хөдөлж буй хурд. Цаг агаарт томоохон нөлөө үзүүлж, агаарын
        бохирдлыг тараах, температурыг өөрчлөх үүрэгтэй. Метр / секунд (м/с)
        хэмжэсээр илэрхийлэгддэг.
      </p>

      {/* Wind levels — interactive rows */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Салхины хурдны түвшин · м/с
      </p>

      <div className="border border-gray-100 mb-10">
        {windLevels.map((level, i) => {
          const isOpen = selected === i;
          return (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button
                className="w-full text-left"
                onClick={() => setSelected(isOpen ? null : i)}
              >
                <div
                  className="grid px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
                  style={{ gridTemplateColumns: "12px 1fr 80px 80px 16px" }}
                >
                  {/* Dot */}
                  <div className="flex items-center">
                    <span
                      className="block rounded-full"
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: level.dot,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className="flex items-center gap-3">
                    <p
                      className="text-sm text-gray-900"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {level.label}
                    </p>
                    <p
                      className="text-gray-400 uppercase hidden sm:block"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {level.labelEn}
                    </p>
                  </div>

                  {/* м/с */}
                  <div className="flex items-center justify-end">
                    <p className="font-mono text-sm text-gray-500">
                      {level.range}
                      <span
                        className="text-gray-300 ml-1"
                        style={{ fontSize: "10px" }}
                      >
                        м/с
                      </span>
                    </p>
                  </div>

                  {/* км/ц */}
                  <div className="flex items-center justify-end">
                    <p
                      className="font-mono text-gray-400"
                      style={{ fontSize: "11px" }}
                    >
                      {level.kmh}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className="flex items-center justify-end">
                    <p
                      className="font-mono text-gray-300"
                      style={{ fontSize: "11px" }}
                    >
                      {isOpen ? "−" : "+"}
                    </p>
                  </div>
                </div>
              </button>

              {/* Expanded */}
              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p
                    className="text-sm text-gray-500 leading-relaxed mt-4 mb-3"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {level.description}
                  </p>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {level.beaufort} шкалаар
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Unit conversion table */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Хэмжих нэгж хөрвүүлэлт · Unit Conversion
      </p>

      <div className="border border-gray-100 mb-6">
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {["м/с", "км/ц"].map((h, i) => (
            <div
              key={i}
              className="px-5 py-3 border-r border-gray-100 last:border-0"
            >
              <p
                className="text-gray-400 uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {h}
              </p>
            </div>
          ))}
        </div>
        {conversions.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div className="px-5 py-4 border-r border-gray-100">
              <p className="font-mono text-sm text-gray-900">{row.ms}</p>
            </div>
            <div className="px-5 py-4">
              <p className="font-mono text-sm text-gray-500">{row.kmh}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        className="text-gray-400 leading-relaxed"
        style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
      >
        Салхины хурд 15 м/с-аас их байвал гадаа явахдаа болгоомжтой байж,
        хүүхдүүдийг гадаа гаргахгүй байх нь зүйтэй.
      </p>
    </section>
  );
}
