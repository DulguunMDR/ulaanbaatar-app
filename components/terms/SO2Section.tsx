// components/terms/SO2Section.tsx

"use client";

import { useState } from "react";

const levels = [
  {
    range: "0–35",
    label: "Аюулгүй",
    labelEn: "Good",
    dot: "#16a34a",
    description: "Эрүүл мэндэд аюул учруулахгүй түвшин.",
  },
  {
    range: "35–75",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#ca8a04",
    description: "Мэдрэмтгий хүмүүст бага зэргийн нөлөө үзүүлж болно.",
  },
  {
    range: "75–185",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    dot: "#ea580c",
    description: "Амьсгалын өвчтэй хүмүүст сөрөг нөлөө үзүүлнэ.",
  },
  {
    range: "185+",
    label: "Аюултай",
    labelEn: "Hazardous",
    dot: "#dc2626",
    description: "Бүх хүн амьсгалын замын цочролд өртөх эрсдэлтэй.",
  },
];

const sources = [
  { label: "Нүүрсний халаалт", detail: "Гэр, орон сууц, дулааны станц" },
  {
    label: "Үйлдвэрийн үйл ажиллагаа",
    detail: "Төмөр хайлуулах, цахилгаан үйлдвэрлэл",
  },
  { label: "Галт уулын идэвхжил", detail: "Байгалийн эх үүсвэр" },
];

const healthShort = [
  "Амьсгалын замын цочрол, хоолой өвдөх",
  "Ханиад, амьсгал давчдах",
  "Нүдний цочрол, нулимс гарах",
];

const healthVulnerable = [
  "Астма, архаг амьсгалын өвчтэй хүмүүс",
  "Хүүхэд, өндөр настнууд",
  "Зүрхний өвчтэй иргэд",
];

const environmental = [
  {
    label: "Хүчиллэг бороо",
    detail: "Ургамал, ой мод гэмтээж, газрын доорх ус бохирдуулна",
  },
  { label: "Барилга байгууламж", detail: "Металл, чулуун гадаргууг зэврүүлнэ" },
  { label: "Харагдах зай", detail: "Агаарын тунгалаг байдал муудна" },
];

const recommendations = [
  "Өвлийн улиралд гадаа гарах хугацааг хязгаарлах, ялангуяа өглөө 06:00–10:00 цагт",
  "Гэртээ цэвэр түлш хэрэглэх, зуухны галыг зөв асаах",
  "Амьсгалын өвчтэй бол гадаа алхахаас өмнө эм уух, маск өмсөх",
  "Гэртээ агааржуулагч, ургамал байршуулж агаарыг цэвэрлэх",
];

type AccordionKey = "sources" | "health" | "environment";

export function SO2Section() {
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
        SO₂
      </h2>
      <p
        className="text-gray-400 mb-4"
        style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
      >
        Хүхрийн давхар исэл · Sulfur Dioxide
      </p>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Хүхэр агуулсан түлш — нүүрс, түүхий тос — шатаахад үүсдэг өнгөгүй хий.
        Амьсгалын замд хүчтэй цочрол үүсгэж, астмын доргилт, уушгины үрэвсэл бий
        болгодог. Агаар мандалд хүчиллэг бороо үүсгэх гол шалтгаан.
      </p>

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
            <div className="px-5 py-4">
              <p className="font-mono text-sm text-gray-500">{level.range}</p>
            </div>
          </div>
        ))}
      </div>

      {/* UB context */}
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
          className="text-sm text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-mongolian)" }}
        >
          Өвлийн улиралд (11–3-р сар) нүүрсээр халаалт хийдэг тул SO₂-ийн хэмжээ
          мэдэгдэхүйц өндөр байна. Гэр хороолол, хашааны байшин ихтэй бүс нутагт
          онцгой анхаарал хандуулах шаардлагатай.
        </p>
        <div
          className="grid border border-gray-100"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="px-5 py-4 border-r border-gray-100">
            <p className="font-mono text-sm text-gray-900 mb-1">5–15 ppb</p>
            <p
              className="text-gray-400"
              style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
            >
              Зун
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="font-mono text-sm text-gray-900 mb-1">40–100+ ppb</p>
            <p
              className="text-gray-400"
              style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
            >
              Өвөл
            </p>
          </div>
        </div>
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
                className="grid border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div className="px-5 py-4 border-r border-gray-100">
                  <p
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {s.label}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accordion: Health */}
      <div className="border border-gray-100 mb-2">
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
                Шууд нөлөө
              </p>
              <ul className="space-y-2">
                {healthShort.map((item, i) => (
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
                Эрсдэлтэй бүлгүүд
              </p>
              <ul className="space-y-2">
                {healthVulnerable.map((item, i) => (
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

      {/* Accordion: Environment */}
      <div className="border border-gray-100 mb-10">
        <button
          className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors duration-100"
          onClick={() => toggle("environment")}
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
              Байгаль орчинд үзүүлэх нөлөө · Environmental Impact
            </p>
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {open === "environment" ? "−" : "+"}
            </p>
          </div>
        </button>
        {open === "environment" && (
          <div className="border-t border-gray-100">
            {environmental.map((e, i) => (
              <div
                key={i}
                className="grid border-b border-gray-100 last:border-0"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div className="px-5 py-4 border-r border-gray-100">
                  <p
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {e.label}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {e.detail}
                  </p>
                </div>
              </div>
            ))}
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
