// components/terms/PM10Section.tsx

"use client";

import { useState } from "react";

const levels = [
  {
    range: "0–54",
    label: "Аюулгүй",
    labelEn: "Good",
    dot: "#16a34a",
    tip: "Ердийн амьдралын хэв маяг",
  },
  {
    range: "54–154",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    dot: "#ca8a04",
    tip: "Гадаа удаан хугацаа өнгөрөөхөөс зайлсхийх",
  },
  {
    range: "154–254",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    dot: "#ea580c",
    tip: "Амны хаалт зүүх, цонх хаах",
  },
  {
    range: "254+",
    label: "Аюултай",
    labelEn: "Hazardous",
    dot: "#dc2626",
    tip: "Гадуур гарахгүй байх, агаар цэвэршүүлэгч ашиглах",
  },
];

const sources = [
  { label: "Барилгын ажил", detail: "Тоос шороо" },
  { label: "Авто зам", detail: "Дугуйн хуучирсан хэсэг" },
  { label: "Хөдөө аж ахуй", detail: "Хөрсний тоос" },
  { label: "Үйлдвэрлэл", detail: "Үйлдвэрийн утаа" },
];

type Tab = "info" | "sources" | "protection";

export function PM10Section() {
  const [tab, setTab] = useState<Tab>("info");

  const tabs: { key: Tab; label: string; labelEn: string }[] = [
    { key: "info", label: "Мэдээлэл", labelEn: "Info" },
    { key: "sources", label: "Эх үүсвэр", labelEn: "Sources" },
    { key: "protection", label: "Хамгаалалт", labelEn: "Protection" },
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
        PM10
      </h2>
      <p
        className="text-gray-400 mb-4"
        style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
      >
        Бүдүүн тоосонцор · Coarse Particulate Matter
      </p>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        10 микрон хүртэлх хэмжээтэй тоосонцор. PM2.5-аас 4 дахин том бөгөөд
        уушгинд хүрч чадахгүй, харин амьсгалын дээд замд — хамар, хоолойд —
        үлдэж, цочрол, үрэвсэл үүсгэдэг.
      </p>

      {/* Tab switcher — styled as plain text links */}
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
              { label: "Хэмжих нэгж", value: "μg/m³ — микрограмм / шоо метр" },
              {
                label: "Хэмжээ",
                value: "≤ 10 мкм — нүдэнд үл харагдах",
              },
              {
                label: "Нэвтрэх гүн",
                value: "Амьсгалын дээд зам (хамар, хоолой)",
              },
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

          {/* PM10 vs PM2.5 note */}
          <div className="border-l-2 border-gray-200 pl-5">
            <p
              className="text-gray-400 uppercase mb-2"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                fontFamily: "var(--font-inter)",
              }}
            >
              PM2.5-тай харьцуулбал
            </p>
            <p
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              PM2.5 уушгинд хүрч цусны эргэлтэд нэвтэрдэг бол, PM10 амьсгалын
              дээд замд үлдэнэ — хоёулаа хортой, гэхдээ өөр өөр механизмаар
              нөлөөлдөг.
            </p>
          </div>
        </div>
      )}

      {/* Tab: Sources */}
      {tab === "sources" && (
        <div className="border border-gray-100">
          <div
            className="grid border-b border-gray-100 bg-gray-50"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {["Эх үүсвэр", "Дэлгэрэнгүй"].map((h, i) => (
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

      {/* Tab: Protection */}
      {tab === "protection" && (
        <div className="border border-gray-100">
          <div
            className="grid border-b border-gray-100 bg-gray-50"
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            {["μg/m³", "Зөвлөмж"].map((h, i) => (
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
              style={{ gridTemplateColumns: "100px 1fr" }}
            >
              <div className="px-5 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2">
                  <span
                    className="block rounded-full flex-shrink-0"
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: level.dot,
                    }}
                  />
                  <p className="font-mono text-sm text-gray-500">
                    {level.range}
                  </p>
                </div>
              </div>
              <div className="px-5 py-4">
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {level.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
