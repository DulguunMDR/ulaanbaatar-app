"use client";

import { useState } from "react";

const aqiLevels = [
  {
    range: "0–50",
    level: "Сайн",
    labelEn: "Good",
    color: "#16a34a",
    bg: "#f0fdf4",
    description: "Агаар цэвэр, гадаа явах аюулгүй",
    details:
      "Агаарын чанар маш сайн байна. Ямар ч үйл ажиллагаа хийхэд тохиромжтой. Гадаа спорт хичээл хийх, алхах, хүүхдүүдийг гадаа тоглуулахад таатай.",
    advice: "Гадаа явах, дасгал хийх, цонх нээх боломжтой.",
  },
  {
    range: "51–100",
    level: "Дунд",
    labelEn: "Moderate",
    color: "#ca8a04",
    bg: "#fefce8",
    description: "Ихэнх хүмүүст аюулгүй",
    details:
      "Агаарын чанар хүлээн зөвшөөрөгдөх түвшинд байна. Ихэнх хүмүүст эрсдэл бага боловч маш мэдрэмтгий хүмүүс (астма өвчтэй) жижиг эрсдэлтэй.",
    advice: "Мэдрэмтгий хүмүүс урт хугацаагаар гадаа байхаас зайлсхийх.",
  },
  {
    range: "101–150",
    level: "Эрүүл мэндэд сөрөг",
    labelEn: "Unhealthy for Sensitive",
    color: "#ea580c",
    bg: "#fff7ed",
    description: "Мэдрэмтгий хүмүүст сөрөг нөлөөтэй",
    details:
      "Мэдрэмтгий бүлэг (хүүхэд, өндөр настан, амьсгалын замын өвчтэй хүмүүс) эрүүл мэндийн асуудалтай тулгарч болно.",
    advice: "Хүүхэд, настайчууд гадаа цаг алдахаас зайлсхийх. Маск зүүх.",
  },
  {
    range: "151–200",
    level: "Эрүүл мэндэд хортой",
    labelEn: "Unhealthy",
    color: "#dc2626",
    bg: "#fef2f2",
    description: "Бүх хүмүүст сөрөг нөлөөтэй",
    details:
      "Бүх хүмүүс эрүүл мэндийн асуудал мэдэрч эхэлнэ. Мэдрэмтгий бүлэгт илүү ноцтой нөлөө үзүүлнэ.",
    advice: "Гадаа хөдөлгөөн хязгаарлах. Өрөөний агаар цэвэрлэгч ашиглах.",
  },
  {
    range: "201–300",
    level: "Маш хортой",
    labelEn: "Very Unhealthy",
    color: "#7c3aed",
    bg: "#f5f3ff",
    description: "Гадуур гарахгүй байх хэрэгтэй",
    details:
      "Эрүүл мэндийн яаралтай байдал. Бүх хүмүүс ноцтой нөлөө мэдрэнэ. Гадаа гарахаас бүрэн зайлсхийх.",
    advice: "Гэртээ байх. N95 маск зүүх. Агаар цэвэрлэгч ажиллуулах.",
  },
  {
    range: "300+",
    level: "Аюултай",
    labelEn: "Hazardous",
    color: "#7f1d1d",
    bg: "#fef2f2",
    description: "Эрүүл мэндэд ноцтой аюултай",
    details:
      "Эрүүл мэндэд онцгой аюултай түвшин. Бүх хүмүүс ноцтой нөлөө мэдэрч, эмнэлгийн тусламж шаардлагатай байж болно.",
    advice: "Гадаа бүү гарах. Эмнэлгийн туслалцаа авах.",
  },
];

export default function AQISection() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  return (
    <section>
      <div className="flex items-baseline gap-8 mb-10 pb-5 border-b border-gray-100">
        <span
          className="text-gray-200 font-mono shrink-0"
          style={{ fontSize: "11px", letterSpacing: "0.08em" }}
        >
          01
        </span>
        <div>
          <p
            className="text-gray-400 uppercase mb-1"
            style={{
              fontSize: "9px",
              letterSpacing: "0.18em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Air Quality Index
          </p>
          <h2
            className="text-gray-900 font-normal"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 42px)",
              lineHeight: 1,
            }}
          >
            AQI
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p
            className="text-gray-600 leading-relaxed text-sm mb-4"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            <strong className="text-gray-900">Агаарын чанарын индекс</strong> —
            агаарын бохирдлын түвшинг хэмжих олон улсын стандарт. 0–500 хүртэлх
            утгатай бөгөөд тоо их байх тусам агаар бохирдсон гэсэн үг.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            EPA стандартыг үндэслэн PM2.5, PM10, O₃, NO₂, SO₂, CO-ийн хамгийн
            өндөр утгыг авна.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { label: "Шинэчлэлт", value: "Цаг бүр" },
            { label: "Стандарт", value: "US EPA" },
            {
              label: "Бохирдуулагч",
              value: "PM2.5 · PM10 · O₃ · NO₂ · SO₂ · CO",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-baseline justify-between py-2 border-b border-gray-100"
            >
              <span
                className="text-gray-400 text-xs uppercase"
                style={{
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {item.label}
              </span>
              <span className="text-gray-700 font-mono text-xs">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <p
          className="text-gray-300 uppercase mb-3"
          style={{ fontSize: "9px", letterSpacing: "0.18em" }}
        >
          Хэмжих шкал · Scale
        </p>
        <div className="flex h-1.5 rounded-full overflow-hidden">
          {aqiLevels.map((l) => (
            <div
              key={l.range}
              className="flex-1"
              style={{ backgroundColor: l.color }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-gray-300 font-mono" style={{ fontSize: "9px" }}>
            0
          </span>
          <span className="text-gray-300 font-mono" style={{ fontSize: "9px" }}>
            500+
          </span>
        </div>
      </div>

      <div className="space-y-px">
        {aqiLevels.map((item, index) => {
          const isOpen = selectedLevel === index;
          return (
            <div key={index} className="border border-gray-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center gap-5 hover:bg-gray-50 transition-colors duration-150"
                onClick={() => setSelectedLevel(isOpen ? null : index)}
              >
                <span
                  className="w-2 h-8 rounded-sm shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="text-gray-300 font-mono shrink-0 w-20"
                  style={{ fontSize: "11px" }}
                >
                  {item.range}
                </span>
                <div className="flex-1">
                  <p
                    className="text-gray-900 text-sm mb-0.5"
                    style={{ fontFamily: "var(--font-mongolian)" }}
                  >
                    {item.level}
                  </p>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.labelEn}
                  </p>
                </div>
                <p
                  className="text-gray-500 text-xs hidden md:block max-w-xs text-right"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {item.description}
                </p>
                <span
                  className="text-gray-300 ml-4 shrink-0 transition-transform duration-200"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    fontSize: "12px",
                  }}
                >
                  ▾
                </span>
              </button>
              {isOpen && (
                <div
                  className="px-6 pb-6 pt-0"
                  style={{
                    backgroundColor: item.bg,
                    borderTop: `1px solid ${item.color}20`,
                  }}
                >
                  <div
                    className="pl-7 border-l-2 mt-4"
                    style={{ borderColor: item.color }}
                  >
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {item.details}
                    </p>
                    <div className="flex items-start gap-2">
                      <span
                        className="text-gray-300 text-xs uppercase mt-0.5"
                        style={{
                          letterSpacing: "0.12em",
                          fontFamily: "var(--font-inter)",
                          minWidth: "60px",
                        }}
                      >
                        Зөвлөмж
                      </span>
                      <p
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: "var(--font-mongolian)" }}
                      >
                        {item.advice}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-start gap-4 py-4 border-t border-gray-100">
        <span
          className="text-gray-200 font-mono shrink-0"
          style={{ fontSize: "9px", letterSpacing: "0.1em" }}
        >
          NOTE
        </span>
        <p className="text-gray-400 text-xs leading-relaxed">
          AQI утгыг өдөр бүр шалгаж, өөрийн болон гэр бүлийнхээ эрүүл мэндийг
          хамгаалаарай. Ялангуяа өглөө, орой гадаа гарахын өмнө шалгах нь
          зүйтэй.
        </p>
      </div>
    </section>
  );
}
