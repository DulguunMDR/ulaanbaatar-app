// components/terms/NO2Section.tsx

"use client";

import { useState } from "react";

const levels = [
  {
    range: "0–53",
    unit: "ppb",
    label: "Аюулгүй",
    labelEn: "Good",
    dot: "#16a34a",
    description:
      "Эрүүл мэндэд аюулгүй. Гадаа чөлөөтэй үйл ажиллагаа явуулж болно.",
  },
  {
    range: "53–100",
    unit: "ppb",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#ca8a04",
    description:
      "Амьсгалын мэдрэмтгий хүмүүст бага зэргийн цухуйлт үүсч болно.",
  },
  {
    range: "100–360",
    unit: "ppb",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    dot: "#ea580c",
    description: "Амьсгалын өвчтэй хүмүүс болгоомжтой байх шаардлагатай.",
  },
  {
    range: "360+",
    unit: "ppb",
    label: "Аюултай",
    labelEn: "Hazardous",
    dot: "#dc2626",
    description:
      "Бүх хүн өртөх эрсдэлтэй. Гадаа гарах хугацааг багасгах хэрэгтэй.",
  },
];

const sources = [
  {
    label: "Автомашины яндан",
    detail: "Дизель болон бензин хөдөлгүүр",
  },
  {
    label: "Үйлдвэрийн үйл ажиллагаа",
    detail: "Дулааны цахилгаан станц, үйлдвэр",
  },
  {
    label: "Халаалтын систем",
    detail: "Нүүрс, газрын тос түлдэг зуух",
  },
];

const healthEffects = {
  short: [
    "Амьсгалын замын цочрол, ханиад",
    "Астмын доргилт",
    "Амьсгалахад хүндрэх",
  ],
  long: [
    "Хүүхдийн уушгины хөгжил суларна",
    "Архаг амьсгалын өвчин үүсэх эрсдэл нэмэгдэнэ",
    "Халдварт өвчинд өртөх эрсдэл өсдөг",
  ],
};

type AccordionKey = "sources" | "health";

export function NO2Section() {
  const [open, setOpen] = useState<AccordionKey | null>(null);

  const toggle = (key: AccordionKey) =>
    setOpen((prev) => (prev === key ? null : key));

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
        Агаарын бохирдол · Pollutant
      </p>

      {/* Title */}
      <h2
        className="font-normal tracking-tight text-gray-900 mb-1"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(28px, 4vw, 42px)",
          lineHeight: "1",
        }}
      >
        NO₂
      </h2>
      <p
        className="text-gray-400 mb-4"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "13px",
        }}
      >
        Азотын давхар исэл · Nitrogen Dioxide
      </p>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Автомашин, үйлдвэрийн шаталтын явцад үүсдэг хүрэн өнгөтэй бохирдуулагч
        хий. Амьсгалын замын эсүүдийг гэмтээж, уушгины үрэвсэл үүсгэдэг. Астма
        болон бусад амьсгалын өвчнийг дордуулж, хүүхдийн уушгины хөгжилд сөрөг
        нөлөө үзүүлдэг.
      </p>

      {/* Concentration levels */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Концентрацийн түвшин · Concentration Levels
      </p>

      <div className="border border-gray-100 mb-10">
        {/* Header */}
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "12px 1fr 100px" }}
        >
          {["", "Түвшин", "Концентраци"].map((h, i) => (
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

        {levels.map((level, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0 group"
            style={{ gridTemplateColumns: "12px 1fr 100px" }}
          >
            {/* Dot column */}
            <div className="flex items-start pt-4 pl-5">
              <span
                className="block rounded-full mt-1"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: level.dot,
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Label + description */}
            <div className="px-4 py-4 border-r border-gray-100">
              <div className="flex items-baseline gap-3 mb-1">
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
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {level.description}
              </p>
            </div>

            {/* Range */}
            <div className="px-5 py-4 flex items-start">
              <p className="font-mono text-sm text-gray-500">
                {level.range}
                <span
                  className="text-gray-300 ml-1"
                  style={{ fontSize: "10px" }}
                >
                  {level.unit}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* UB context note */}
      <div className="border-l-2 border-gray-200 pl-5 mb-10">
        <p
          className="text-gray-400 uppercase mb-2"
          style={{
            fontSize: "9px",
            letterSpacing: "0.14em",
            fontFamily: "var(--font-inter)",
          }}
        >
          Улаанбаатар хотод
        </p>
        <p
          className="text-sm text-gray-600 leading-relaxed"
          style={{ fontFamily: "var(--font-mongolian)" }}
        >
          Оргил цагуудад (07:00–09:00, 17:00–19:00) автомашины урсгал ихэсдэг
          тул NO₂-ийн түвшин мэдэгдэхүйц өндөр байна. Их тээврийн урсгалтай
          замын 100 метрийн тойрогт амьдардаг хүмүүс илүү их өртдөг.
        </p>
      </div>

      {/* Accordion: Sources */}
      <div className="border border-gray-100 mb-2">
        <button
          className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
          onClick={() => toggle("sources")}
        >
          <div className="flex items-center justify-between">
            <p
              className="text-gray-400 uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                fontFamily: "var(--font-inter)",
              }}
            >
              Гол эх үүсвэр · Sources
            </p>
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {open === "sources" ? "−" : "+"}
            </p>
          </div>
        </button>
        {open === "sources" && (
          <div className="border-t border-gray-100">
            {sources.map((s, i) => (
              <div
                key={i}
                className="grid px-5 py-3 border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <p
                  className="text-sm text-gray-700"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accordion: Health effects */}
      <div className="border border-gray-100 mb-10">
        <button
          className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
          onClick={() => toggle("health")}
        >
          <div className="flex items-center justify-between">
            <p
              className="text-gray-400 uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                fontFamily: "var(--font-inter)",
              }}
            >
              Эрүүл мэндэд үзүүлэх нөлөө · Health Effects
            </p>
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {open === "health" ? "−" : "+"}
            </p>
          </div>
        </button>
        {open === "health" && (
          <div
            className="grid gap-px bg-gray-100 border-t border-gray-100"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div className="bg-white px-5 py-4">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Богино хугацааны нөлөө
              </p>
              <ul className="space-y-2">
                {healthEffects.short.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="text-gray-300 mt-1 flex-shrink-0"
                      style={{ fontSize: "10px" }}
                    >
                      —
                    </span>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white px-5 py-4">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Урт хугацааны нөлөө
              </p>
              <ul className="space-y-2">
                {healthEffects.long.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="text-gray-300 mt-1 flex-shrink-0"
                      style={{ fontSize: "10px" }}
                    >
                      —
                    </span>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Recommendations */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Хамгаалах арга хэмжээ · Recommendations
      </p>
      <div className="border border-gray-100">
        {[
          "Оргил цагуудад гол замын дагуух газарт цаг өнгөрөөхгүй байх",
          "Нийтийн тээвэр ашиглах, хамтран зорчих замаар машины тоог багасгах",
          "Астма, амьсгалын өвчтэй бол эмч зөвлөгөө авах",
        ].map((rec, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0 px-5 py-4"
            style={{ gridTemplateColumns: "24px 1fr" }}
          >
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              {rec}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
