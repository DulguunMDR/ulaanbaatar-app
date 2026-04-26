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
  { slug: "aqi", label: "AQI" },
  { slug: "pm25", label: "PM2.5" },
  { slug: "pm10", label: "PM10" },
  { slug: "ozone", label: "Озон" },
  { slug: "no2", label: "NO₂" },
  { slug: "so2", label: "SO₂" },
  { slug: "co", label: "CO" },
  { slug: "temp", label: "Температур" },
  { slug: "feels-like", label: "Мэдрэгдэх температур" },
  { slug: "wind", label: "Салхины хурд" },
  { slug: "humidity", label: "Чийгшил" },
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
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
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
          <p
            className="text-sm text-gray-400 leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            Агаарын чанар, цаг агаарын үзүүлэлтүүдийн дэлгэрэнгүй тайлбар.
          </p>
        </div>
      </section>

      {/* INDEX */}
      <section className="border-b border-gray-100">
        <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
          <div className="border-r border-gray-100" />
          <div className="px-8 md:px-14 py-5 overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              {termsList.map((term, i) => (
                <a
                  key={term.slug}
                  href={`#${term.slug}`}
                  className="flex items-baseline gap-2 text-gray-400 hover:text-gray-700 transition-colors duration-150 group"
                >
                  <span
                    className="text-gray-200 font-mono group-hover:text-gray-400 transition-colors"
                    style={{ fontSize: "9px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-mono whitespace-nowrap"
                    style={{ fontSize: "11px" }}
                  >
                    {term.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
        <div className="border-r border-gray-100" />
        <div className="max-w-4xl px-8 md:px-14 py-16 space-y-20">
          <div id="aqi">
            <AQISection />
          </div>
          <div id="pm25">
            <PM25Section />
          </div>
          <div id="pm10">
            <PM10Section />
          </div>
          <div id="ozone">
            <OzoneSection />
          </div>
          <div id="no2">
            <NO2Section />
          </div>
          <div id="so2">
            <SO2Section />
          </div>
          <div id="co">
            <COSection />
          </div>
          <div id="temp">
            <TemperatureSection />
          </div>
          <div id="feels-like">
            <FeelsLikeSection />
          </div>
          <div id="wind">
            <WindSpeedSection />
          </div>
          <div id="humidity">
            <HumiditySection />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="grid border-t border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-10">
          <p
            className="text-gray-300"
            style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
          >
            Эдгээр үзүүлэлтүүдийг ойлгож, өөрийн эрүүл мэндээ хамгаалаарай.
          </p>
        </div>
      </div>
    </main>
  );
}
