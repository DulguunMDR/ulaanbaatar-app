"use client";

import { useState } from "react";

const coLevels = [
  {
    range: "0–4.4 ppm",
    label: "Аюулгүй",
    labelEn: "Safe",
    color: "#16a34a",
    description: "Эрүүл мэндэд сөрөг нөлөөгүй.",
  },
  {
    range: "4.4–9.4 ppm",
    label: "Дунд зэрэг",
    labelEn: "Moderate",
    color: "#ca8a04",
    description: "Зүрхний өвчтэй хүмүүст нөлөөлж болно.",
  },
  {
    range: "9.4–15.4 ppm",
    label: "Эрүүл мэндэд муу",
    labelEn: "Unhealthy",
    color: "#ea580c",
    description: "Толгой өвдөх, ядрах шинж тэмдэг гарна.",
  },
  {
    range: "15.4+ ppm",
    label: "Аюултай",
    labelEn: "Hazardous",
    color: "#7f1d1d",
    description: "Ухаан алдах, нас баралт хүртэл үүсч болно.",
  },
];

const symptoms = {
  mild: [
    "Толгой өвдөх — ханиад шиг мэт мэдрэмж",
    "Эргэлзэх, дотор муухайрах",
    "Сул дорой, ядарсан мэдрэмж",
    "Харах муудах, бүдгэрч байх",
  ],
  severe: [
    "Ухаан алдах, мэдрэл тогтворгүй болох",
    "Амьсгал авахад хүндрэх, цээж чангарах",
    "Татаж чирэх, таталт",
    "Нас барах эрсдэл өндөр",
  ],
};

const emergencySteps = [
  {
    num: "01",
    title: "Шуурхай гадагш гар",
    sub: "Цонх хаалга нээж, шинэ агаар авах",
  },
  { num: "02", title: "103 дугаарт залгах", sub: "Түргэн тусламж дуудах" },
  {
    num: "03",
    title: "Галын эх үүсвэрийг унтраах",
    sub: "Зуух, пич, машины хөдөлгүүр унтраах",
  },
  {
    num: "04",
    title: "Тэнд буцаж орохгүй байх",
    sub: "Мэргэжилтэн шалгаж, аюулгүй гэтэл орохгүй",
  },
];

const prevention = [
  "CO мэдрүүлэгч хэрэгсэл суулгах — унтлагын өрөө, зуухны ойролцоо",
  "Зуухны яндан жилд 2 удаа цэвэрлүүлэх — өвөл ирэхийн өмнө болон дундуур",
  "Өдөр бүр агааржуулах — өглөө, орой 10–15 минут цонх нээх",
  "Автомашин битүү гаражид халаахгүй байх — гаражийн хаалга нээх",
  "Унтахын өмнө зуухны гал унтраах — шөнийн галыг холсдохгүй байх",
  "Газын зуух зөв ашиглах — заавар дагаж, цонх нээлттэй байлгах",
];

type ExpandedKey = "symptoms" | "emergency" | null;

export function COSection() {
  const [expanded, setExpanded] = useState<ExpandedKey>(null);
  const toggle = (key: ExpandedKey) =>
    setExpanded((prev) => (prev === key ? null : key));

  return (
    <section>
      <div className="flex items-baseline gap-8 mb-10 pb-5 border-b border-gray-100">
        <span
          className="text-gray-200 font-mono shrink-0"
          style={{ fontSize: "11px", letterSpacing: "0.08em" }}
        >
          07
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
            Carbon Monoxide
          </p>
          <h2
            className="text-gray-900 font-normal"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 42px)",
              lineHeight: 1,
            }}
          >
            CO
          </h2>
        </div>
        <div className="ml-auto flex items-center gap-2 bg-red-50 border border-red-100 rounded px-3 py-1.5">
          <span className="block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span
            className="text-red-600 uppercase"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Амь насанд аюултай
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p
            className="text-gray-600 leading-relaxed text-sm mb-4"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            <strong className="text-gray-900">Нүүрстөрөгчийн дутуу исэл</strong>{" "}
            нь түлш бүрэн шатаагүй үед үүсдэг{" "}
            <em>үнэргүй, өнгөгүй, хорт хий</em> юм. Хүний мэдрэхгүй байхад амь
            насанд аюул учруулж болно.
          </p>
          <div className="py-3 px-4 border-l-2 border-gray-200">
            <p
              className="text-gray-500 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              CO нь цусан дахь хүчилтөрөгчийг орлож, биеийн эд эрхтнүүдэд
              хүчилтөрөгч хүргэхэд саад болдог. Тархи, зүрх зэрэг чухал
              эрхтнүүдийг гэмтээж, амь насанд аюултай.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: "Шинж чанар", value: "Үнэргүй · Өнгөгүй · Хорт" },
            { label: "Хэмжих нэгж", value: "ppm (саяны хэсэг)" },
            { label: "Эх үүсвэр", value: "Бүрэн бус шаталт" },
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

      <div className="mb-12">
        <p
          className="text-gray-300 uppercase mb-4"
          style={{ fontSize: "9px", letterSpacing: "0.18em" }}
        >
          Концентрацийн түвшин · Concentration Levels
        </p>
        <div className="space-y-px">
          {coLevels.map((level, i) => (
            <div
              key={i}
              className="flex items-center gap-5 px-6 py-4 border border-gray-100"
              style={{
                background: i === coLevels.length - 1 ? "#fef2f2" : "white",
              }}
            >
              <span
                className="w-2 h-6 rounded-sm shrink-0"
                style={{ backgroundColor: level.color }}
              />
              <span
                className="text-gray-300 font-mono shrink-0 w-28"
                style={{ fontSize: "11px" }}
              >
                {level.range}
              </span>
              <div className="flex-1">
                <p
                  className="text-gray-900 text-sm"
                  style={{ fontFamily: "var(--font-mongolian)" }}
                >
                  {level.label}
                </p>
                <p
                  className="text-gray-400"
                  style={{
                    fontSize: "10px",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {level.labelEn}
                </p>
              </div>
              <p
                className="text-gray-500 text-xs hidden md:block max-w-xs text-right"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {(
        [
          {
            key: "symptoms" as ExpandedKey,
            title: "Хордлогын шинж тэмдэг",
            titleEn: "Poisoning Symptoms",
            content: (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <p
                    className="text-gray-400 uppercase mb-3"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    Бага хордлого
                  </p>
                  <ul className="space-y-2">
                    {symptoms.mild.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-600"
                        style={{ fontFamily: "var(--font-mongolian)" }}
                      >
                        <span
                          className="text-gray-200 font-mono mt-0.5"
                          style={{ fontSize: "9px" }}
                        >
                          —
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="text-red-400 uppercase mb-3"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    Хүнд хордлого · Яаралтай!
                  </p>
                  <ul className="space-y-2">
                    {symptoms.severe.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-red-700"
                        style={{ fontFamily: "var(--font-mongolian)" }}
                      >
                        <span
                          className="text-red-300 font-mono mt-0.5"
                          style={{ fontSize: "9px" }}
                        >
                          —
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          },
          {
            key: "emergency" as ExpandedKey,
            title: "CO хордлого сэжиглэвэл юу хийх вэ?",
            titleEn: "Emergency Actions",
            content: (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 mt-2">
                {emergencySteps.map((step) => (
                  <div key={step.num} className="bg-white px-5 py-4">
                    <span
                      className="text-gray-200 font-mono block mb-2"
                      style={{ fontSize: "11px" }}
                    >
                      {step.num}
                    </span>
                    <p
                      className="text-gray-900 text-sm mb-1"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-gray-400 text-xs"
                      style={{ fontFamily: "var(--font-mongolian)" }}
                    >
                      {step.sub}
                    </p>
                  </div>
                ))}
              </div>
            ),
          },
        ] as {
          key: ExpandedKey;
          title: string;
          titleEn: string;
          content: React.ReactNode;
        }[]
      ).map(({ key, title, titleEn, content }) => (
        <div key={key} className="mb-4 border border-gray-100">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150"
            onClick={() => toggle(key)}
          >
            <div>
              <p
                className="text-gray-900 text-sm"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {title}
              </p>
              <p
                className="text-gray-400"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {titleEn}
              </p>
            </div>
            <span
              className="text-gray-300 ml-4 shrink-0 transition-transform duration-200"
              style={{
                transform: expanded === key ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: "12px",
              }}
            >
              ▾
            </span>
          </button>
          {expanded === key && (
            <div className="px-6 pb-6 border-t border-gray-100">{content}</div>
          )}
        </div>
      ))}

      <div className="mt-10">
        <p
          className="text-gray-300 uppercase mb-5"
          style={{ fontSize: "9px", letterSpacing: "0.18em" }}
        >
          Урьдчилан сэргийлэх · Prevention
        </p>
        <div className="space-y-px">
          {prevention.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 px-6 py-3 border border-gray-100 hover:bg-gray-50 transition-colors duration-100"
            >
              <span
                className="text-gray-200 font-mono shrink-0 mt-0.5"
                style={{ fontSize: "9px" }}
              >
                0{i + 1}
              </span>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-4 py-4 border-t border-gray-100">
        <span
          className="text-gray-200 font-mono shrink-0"
          style={{ fontSize: "9px", letterSpacing: "0.1em" }}
        >
          NOTE
        </span>
        <p className="text-gray-400 text-xs leading-relaxed">
          CO мэдрэгч хэрэгсэл таны болон гэр бүлийнхээ амь насыг аврах
          боломжтой. Өвлийн улирлаар ялангуяа анхааралтай байх хэрэгтэй.
        </p>
      </div>
    </section>
  );
}
