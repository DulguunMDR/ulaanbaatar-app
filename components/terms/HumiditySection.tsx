// components/terms/HumiditySection.tsx

"use client";

import { useState } from "react";

const humidityLevels = [
  {
    range: "0–30%",
    label: "Хуурай",
    labelEn: "Dry",
    dot: "#d97706", // amber — only for data semantics
    health: "Арьсны асуудал, амьсгалын замын цочрол",
    advice: "Чийгшүүлэгч ашиглах, ус их уух",
    description:
      "Агаар хэт хуурай. Арьс, хамар, хоолой хатна. Цахилгаан гарах магадлал өндөр.",
  },
  {
    range: "30–60%",
    label: "Тохиромжтой",
    labelEn: "Comfortable",
    dot: "#16a34a",
    health: "Эрүүл мэндэд оновчтой, тав тухтай",
    advice: "Энэ түвшинг хадгалахыг эрмэлзээрэй",
    description: "Хүний биед хамгийн тааламжтай түвшин.",
  },
  {
    range: "60–80%",
    label: "Чийглэг",
    labelEn: "Humid",
    dot: "#2563eb",
    health: "Хэт халалт мэдрэгдэх, амьсгал давчдах",
    advice: "Агааржуулалт сайжруулах, салхивч ашиглах",
    description: "Агаар чийглэг. Халуунд амьсгалахад хүндрэлтэй.",
  },
  {
    range: "80–100%",
    label: "Маш чийглэг",
    labelEn: "Saturated",
    dot: "#7c3aed",
    health: "Мөөгөнцөр, хөгц үүсэх, амьсгалд хүндрэх",
    advice: "Чийгшилтэй газар агааржуулах, чийгшилт арилгагч ашиглах",
    description: "Агаар ханасан. Манан, бороо орох магадлал өндөр.",
  },
];

export function HumiditySection() {
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
        Чийгшил
      </h2>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Харьцангуй чийгшил (Relative Humidity) гэдэг нь тухайн температурт агаар
        хамгийн ихдээ агуулж чадах чийгний хэдэн хувь байгааг харуулна. Хувиар
        (%) илэрхийлэгддэг.
      </p>

      {/* Levels — interactive rows */}
      <div className="border border-gray-100 mb-10">
        {humidityLevels.map((level, i) => {
          const isOpen = selected === i;
          return (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button
                className="w-full text-left"
                onClick={() => setSelected(isOpen ? null : i)}
              >
                <div
                  className="grid px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
                  style={{ gridTemplateColumns: "12px 1fr 80px 16px" }}
                >
                  {/* Color dot */}
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
                      className="text-gray-400 uppercase"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {level.labelEn}
                    </p>
                  </div>

                  {/* Range */}
                  <div className="flex items-center justify-end">
                    <p className="font-mono text-sm text-gray-500">
                      {level.range}
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
                    className="text-sm text-gray-500 leading-relaxed mt-4 mb-5"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {level.description}
                  </p>
                  <div
                    className="grid gap-px bg-gray-100"
                    style={{ gridTemplateColumns: "1fr 1fr" }}
                  >
                    <div className="bg-white px-4 py-3">
                      <p
                        className="text-gray-400 uppercase mb-2"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.14em",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        Эрүүл мэндэд үзүүлэх нөлөө
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "var(--font-mongolian)" }}
                      >
                        {level.health}
                      </p>
                    </div>
                    <div className="bg-white px-4 py-3">
                      <p
                        className="text-gray-400 uppercase mb-2"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.14em",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        Зөвлөмж
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "var(--font-mongolian)" }}
                      >
                        {level.advice}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Humidity scale — data viz strip */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Чийгшлийн шкал · Scale
      </p>
      <div
        className="h-px w-full mb-2"
        style={{
          background:
            "linear-gradient(to right, #d97706, #16a34a 40%, #2563eb 70%, #7c3aed)",
        }}
      />
      <div
        className="flex justify-between"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {["0%", "30%", "60%", "80%", "100%"].map((v) => (
          <p
            key={v}
            className="font-mono text-gray-300"
            style={{ fontSize: "9px" }}
          >
            {v}
          </p>
        ))}
      </div>

      {/* Temperature relationship note */}
      <div className="border border-gray-100 mt-10">
        <div className="grid border-b border-gray-100 bg-gray-50 px-5 py-3">
          <p
            className="text-gray-400 uppercase"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Температур ба чийгшлийн хамаарал
          </p>
        </div>
        <div
          className="grid gap-px bg-gray-100"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="bg-white px-5 py-4">
            <p className="font-mono text-sm text-gray-900 mb-1">−20°C · Өвөл</p>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              40% чийгшил = тохиромжтой
            </p>
          </div>
          <div className="bg-white px-5 py-4">
            <p className="font-mono text-sm text-gray-900 mb-1">+30°C · Зун</p>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              50% чийгшил = халуун мэдрэгдэнэ
            </p>
          </div>
        </div>
      </div>

      {/* Note */}
      <p
        className="text-gray-400 mt-6 leading-relaxed"
        style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
      >
        Гэртээ чийгшлийг хэмжих багаж (hygrometer) байлгавал эрүүл орчинг
        хадгалахад тустай. Идэвхтэй чийгшил: 40–50% нь оновчтой.
      </p>
    </section>
  );
}
