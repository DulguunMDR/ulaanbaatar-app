// components/terms/PM25Section.tsx

"use client";

import { useState } from "react";

const levels = [
  {
    range: "0–12",
    label: "Аюулгүй",
    labelEn: "Good",
    dot: "#16a34a",
    impact: "Эрүүл мэндэд ямар ч эрсдэлгүй",
  },
  {
    range: "12–35",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#ca8a04",
    impact: "Мэдрэмтгий хүмүүст жижиг нөлөөтэй",
  },
  {
    range: "35–55",
    label: "Мэдрэмтгий бүлэгт муу",
    labelEn: "Sensitive",
    dot: "#ea580c",
    impact: "Хүүхэд, настайчуудад сөрөг нөлөөтэй",
  },
  {
    range: "55–150",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    dot: "#dc2626",
    impact: "Бүх хүмүүст хортой нөлөөтэй",
  },
  {
    range: "150–250",
    label: "Маш муу",
    labelEn: "Very Unhealthy",
    dot: "#7c3aed",
    impact: "Ноцтой эрүүл мэндийн эрсдэл",
  },
  {
    range: "250+",
    label: "Аюултай",
    labelEn: "Hazardous",
    dot: "#450a0a",
    impact: "Эмнэлгийн тусламж шаардлагатай",
  },
];

const sources = [
  { label: "Нүүрс түлэх", share: "40%" },
  { label: "Автомашины яндан", share: "30%" },
  { label: "Үйлдвэрийн утаа", share: "20%" },
  { label: "Тоос шороо", share: "10%" },
];

const healthEffects = [
  "Зүрхний өвчин, цусны даралт нэмэгдэх",
  "Уушгины хорт хавдар, амьсгалын замын архаг өвчин",
  "Астма, бронхит, уушгины үрэвсэл",
  "Хүүхдийн тархи хөгжилд сөрөг нөлөө",
];

const comparisons = [
  { label: "Хүний үс", microns: "~70 мкм", ratio: "28×" },
  { label: "Элсний ширхэг", microns: "~90 мкм", ratio: "36×" },
  { label: "PM2.5", microns: "2.5 мкм", ratio: "—", highlight: true },
];

export function PM25Section() {
  const [showComparison, setShowComparison] = useState(false);

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
        PM2.5
      </h2>
      <p
        className="text-gray-400 mb-4"
        style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
      >
        Нарийн тоосонцор · Fine Particulate Matter
      </p>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        2.5 микрон буюу түүнээс бага хэмжээтэй тоосонцор. Маш жижиг учраас
        амьсгалын замаар уушгинд шууд нэвтэрч, цусны эргэлтэд орж, эрүүл мэндэд
        ноцтой хортой. Улаанбаатарын өвлийн бохирдлын гол үзүүлэлт.
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
        Концентрацийн түвшин · μg/m³
      </p>

      <div className="border border-gray-100 mb-10">
        {/* Header */}
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "12px 1fr 80px" }}
        >
          {["", "Түвшин", "μg/m³"].map((h, i) => (
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
            className="grid border-b border-gray-100 last:border-0"
            style={{ gridTemplateColumns: "12px 1fr 80px" }}
          >
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
                {level.impact}
              </p>
            </div>
            <div className="px-5 py-4">
              <p className="font-mono text-sm text-gray-500">{level.range}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Size comparison — collapsible */}
      <div className="border border-gray-100 mb-2">
        <button
          className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
          onClick={() => setShowComparison(!showComparison)}
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
              Хэмжээний харьцуулалт · Size Comparison
            </p>
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {showComparison ? "−" : "+"}
            </p>
          </div>
        </button>

        {showComparison && (
          <div className="border-t border-gray-100">
            {comparisons.map((c, i) => (
              <div
                key={i}
                className={`grid border-b border-gray-100 last:border-0 ${
                  c.highlight ? "bg-gray-50" : ""
                }`}
                style={{ gridTemplateColumns: "1fr 100px 60px" }}
              >
                <div className="px-5 py-4 border-r border-gray-100">
                  <p
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {c.label}
                  </p>
                </div>
                <div className="px-5 py-4 border-r border-gray-100">
                  <p className="font-mono text-sm text-gray-500">{c.microns}</p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className={`font-mono text-sm ${
                      c.highlight ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {c.ratio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sources */}
      <div className="border border-gray-100 mb-10">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <p
            className="text-gray-400 uppercase"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Үүсэх эх үүсвэр · Sources — Улаанбаатар
          </p>
        </div>
        {sources.map((s, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0 px-5 py-4"
            style={{ gridTemplateColumns: "1fr 60px" }}
          >
            <p
              className="text-sm text-gray-700"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              {s.label}
            </p>
            <p className="font-mono text-sm text-gray-400 text-right">
              {s.share}
            </p>
          </div>
        ))}
      </div>

      {/* Health effects */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Эрүүл мэндэд үзүүлэх нөлөө · Health Effects
      </p>
      <div className="border border-gray-100 mb-6">
        {healthEffects.map((item, i) => (
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
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        className="text-gray-400 leading-relaxed"
        style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
      >
        Онцгой эмзэг бүлэг: хүүхэд, жирэмсэн эмэгтэйчүүд, өндөр настан, астма
        болон зүрхний өвчтэй хүмүүс PM2.5-д илүү мэдрэмтгий байдаг.
      </p>
    </section>
  );
}
