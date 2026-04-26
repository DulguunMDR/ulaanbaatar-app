// components/terms/OzoneSection.tsx

"use client";

import { useState } from "react";

const levels = [
  {
    range: "0–54",
    label: "Аюулгүй",
    labelEn: "Good",
    dot: "#16a34a",
  },
  {
    range: "54–70",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#ca8a04",
  },
  {
    range: "70–85",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    dot: "#ea580c",
  },
  {
    range: "85+",
    label: "Аюултай",
    labelEn: "Hazardous",
    dot: "#dc2626",
  },
];

const formationSteps = [
  {
    n: "01",
    label: "Бохирдуулагч ялгарна",
    detail: "Машин, үйлдвэрээс NOx, VOC ялгарна",
  },
  {
    n: "02",
    label: "Нарны туяа нэмэгдэнэ",
    detail: "UV туяа химийн урвалыг идэвхжүүлнэ",
  },
  {
    n: "03",
    label: "Химийн урвал үүснэ",
    detail: "NOx + VOC + нарны гэрэл → урвал",
  },
  {
    n: "04",
    label: "Озон үүснэ",
    detail: "O₃ агаарт хуримтлагдана",
  },
];

const healthEffects = [
  { label: "Нүдний цочрол", severity: "Дунд" },
  { label: "Уушгины үрэвсэл", severity: "Хүнд" },
  { label: "Астма дордох", severity: "Хүнд" },
  { label: "Амьсгал хүндрэх", severity: "Дунд" },
];

const seasonal = [
  { label: "Хавар", labelEn: "Spring", level: "Дунд" },
  { label: "Зун", labelEn: "Summer", level: "Өндөр" },
  { label: "Намар", labelEn: "Autumn", level: "Дунд" },
  { label: "Өвөл", labelEn: "Winter", level: "Бага" },
];

const recommendations = [
  "Үд дундын 12:00–17:00 цагт гадуур гарахаас зайлсхийх",
  "Зуны халуун өдрүүдэд гадаа дасгал хийхгүй байх",
  "Өндөр түвшинд цонхоо хааж, дотор байх",
  "Озоны мэдээллийг өглөө шалгах",
];

type Tab = "info" | "formation" | "effects";

export function OzoneSection() {
  const [tab, setTab] = useState<Tab>("info");

  const tabs: { key: Tab; label: string }[] = [
    { key: "info", label: "Мэдээлэл" },
    { key: "formation", label: "Үүсэх үйл явц" },
    { key: "effects", label: "Эрүүл мэнд" },
  ];

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
        O₃
      </h2>
      <p
        className="text-gray-400 mb-4"
        style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
      >
        Озон · Ozone — Газрын гадаргын
      </p>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-4"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Озон шууд ялгардаггүй — нарны гэрэл, автомашины яндан, үйлдвэрийн
        ялгарлын химийн урвалаар үүсдэг хоёрдогч бохирдуулагч. Зуны нартай
        өдрүүдэд хамгийн өндөр байна.
      </p>

      {/* Stratospheric note */}
      <div className="border-l-2 border-gray-200 pl-5 mb-10">
        <p
          className="text-sm text-gray-500 leading-relaxed"
          style={{ fontFamily: "var(--font-mongolian)" }}
        >
          Стратосферийн озон (дээд давхарга) биднийг нарны туяанаас хамгаална.
          Харин газрын гадарга дээрх озон (доод давхарга) хортой — нэг нэр,
          эсрэг нөлөө.
        </p>
      </div>

      {/* Levels */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Концентрацийн түвшин · ppb
      </p>

      <div className="border border-gray-100 mb-10">
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "12px 1fr 80px" }}
        >
          {["", "Түвшин", "ppb"].map((h, i) => (
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
              <div className="flex items-baseline gap-3">
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
            </div>
            <div className="px-5 py-4">
              <p className="font-mono text-sm text-gray-500">{level.range}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tab switcher */}
      <div className="flex gap-6 border-b border-gray-100 mb-8">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 transition-colors duration-100 ${
              tab === t.key
                ? "border-b border-gray-900 text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
            style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-inter)",
              marginBottom: "-1px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Info */}
      {tab === "info" && (
        <div>
          <div className="border border-gray-100 mb-8">
            {[
              {
                label: "Химийн томьёо",
                value: "O₃ — гурван хүчилтөрөгчийн атом",
              },
              { label: "Хэмжих нэгж", value: "ppb — parts per billion" },
              { label: "Оргил цаг", value: "12:00–17:00 — үд дунд" },
              { label: "Оргил улирал", value: "Зун — нартай, халуун өдрүүдэд" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "140px 1fr" }}
              >
                <div className="px-5 py-4 border-r border-gray-100">
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {row.label}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Seasonal grid */}
          <p
            className="text-gray-400 uppercase mb-3"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Улирлын хэлбэлзэл · Seasonal Variation
          </p>
          <div
            className="grid border border-gray-100"
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
          >
            {seasonal.map((s, i) => (
              <div
                key={i}
                className="border-r border-gray-100 last:border-0 px-4 py-4"
              >
                <p
                  className="text-gray-400 uppercase mb-2"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.labelEn}
                </p>
                <p
                  className="text-sm text-gray-900 mb-1"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {s.label}
                </p>
                <p
                  className="font-mono text-gray-500"
                  style={{ fontSize: "11px" }}
                >
                  {s.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Formation */}
      {tab === "formation" && (
        <div>
          <p
            className="text-sm text-gray-500 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            Озон нь шууд ялгардаггүй, харин химийн урвалаар үүснэ:
          </p>
          <div className="border border-gray-100">
            {formationSteps.map((step, i) => (
              <div
                key={i}
                className="grid border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "48px 1fr" }}
              >
                <div className="flex items-start px-5 py-4 border-r border-gray-100">
                  <p
                    className="font-mono text-gray-300"
                    style={{ fontSize: "11px" }}
                  >
                    {step.n}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className="text-sm text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-gray-200 pl-5 mt-6">
            <p
              className="text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              Зуны халуун, нартай өдрүүдэд озоны түвшин огцом өснө. Үд дундын
              цагаар гадаа явахаас зайлсхийх хэрэгтэй.
            </p>
          </div>
        </div>
      )}

      {/* Tab: Health effects */}
      {tab === "effects" && (
        <div>
          <div className="border border-gray-100 mb-8">
            <div
              className="grid border-b border-gray-100 bg-gray-50"
              style={{ gridTemplateColumns: "1fr 80px" }}
            >
              {["Нөлөө", "Ноцтой байдал"].map((h, i) => (
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
            {healthEffects.map((item, i) => (
              <div
                key={i}
                className="grid border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "1fr 80px" }}
              >
                <div className="px-5 py-4 border-r border-gray-100">
                  <p
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {item.label}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className="font-mono text-gray-500"
                    style={{ fontSize: "11px" }}
                  >
                    {item.severity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vulnerable groups */}
          <p
            className="text-gray-400 uppercase mb-3"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Эмзэг бүлэг · Vulnerable Groups
          </p>
          <div className="border border-gray-100">
            {[
              "Астма өвчтэй хүмүүс",
              "Хүүхдүүд — уушиг хөгжиж байгаа",
              "Өндөр настнууд",
              "Гадаа ажилладаг хүмүүс",
            ].map((group, i) => (
              <div
                key={i}
                className="grid border-b border-gray-100 last:border-0 px-5 py-4"
                style={{ gridTemplateColumns: "24px 1fr" }}
              >
                <p
                  className="font-mono text-gray-300"
                  style={{ fontSize: "11px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {group}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations — always visible */}
      <p
        className="text-gray-400 uppercase mb-3 mt-10"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Хамгаалах арга хэмжээ · Recommendations
      </p>
      <div className="border border-gray-100">
        {recommendations.map((rec, i) => (
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
