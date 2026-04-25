// app/weather/terms/page.tsx

import AQISection from "@/components/terms/AQISection";
import { PM25Section } from "@/components/terms/PM25Section";
import { PM10Section } from "@/components/terms/PM10Section";
import { OzoneSection } from "@/components/terms/OzoneSection";
import { NO2Section } from "@/components/terms/NO2Section";
import { SO2Section } from "@/components/terms/SO2Section";
import { COSection } from "@/components/terms/COSection";
import { TemperatureSection } from "@/components/terms/TemperatureSection";
import { FeelsLikeSection } from "@/components/terms/FeelsLikeSection";
import { WindSpeedSection } from "@/components/terms/WindSpeedSection";
import { HumiditySection } from "@/components/terms/HumiditySection";

const termsList = [
  "AQI",
  "PM2.5",
  "PM10",
  "Озон",
  "NO₂",
  "SO₂",
  "CO",
  "Температур",
  "Мэдрэгдэх температур",
  "Салхины хурд",
  "Чийгшил",
];

export default function TermsPage() {
  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* HERO */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div
          className="border-r border-gray-100 flex items-center justify-center py-16"
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
            НЭР ТОМЪЁО · TERMS
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-16">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Тайлбар · Glossary
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: "0.9",
            }}
          >
            Нэр томъёоны
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              тайлбар
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Агаарын чанар, цаг агаарын үзүүлэлтүүдийн дэлгэрэнгүй тайлбар.
          </p>
        </div>
      </section>

      {/* INDEX ROW */}
      <section className="px-8 md:px-14 py-6 border-b border-gray-100 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {termsList.map((term) => (
            <span
              key={term}
              className="text-gray-400 font-mono whitespace-nowrap"
              style={{ fontSize: "11px" }}
            >
              {term}
            </span>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-8 md:px-14 py-12 space-y-16">
        <AQISection />
        <PM25Section />
        <PM10Section />
        <OzoneSection />
        <NO2Section />
        <SO2Section />
        <COSection />
        <TemperatureSection />
        <FeelsLikeSection />
        <WindSpeedSection />
        <HumiditySection />
      </div>

      {/* FOOTER NOTE */}
      <div className="border-t border-gray-100 px-8 md:px-14 py-10">
        <p className="text-gray-300" style={{ fontSize: "12px" }}>
          Эдгээр үзүүлэлтүүдийг ойлгож, өөрийн эрүүл мэндээ хамгаалаарай.
        </p>
      </div>
    </main>
  );
}
