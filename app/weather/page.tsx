// app/weather/page.tsx

import { fetchAQI } from "@/lib/fetchAQI";
import { fetchAllStations } from "@/lib/fetchStations";
import InteractiveHero from "@/components/home/InteractiveHero";
import AQIMapWrapper from "@/components/map/AQIMapWrapper";
import InsightsDashboard from "@/components/home/InsightsDashboard";
import OpenMeteoForecast from "@/components/weather/OpenMeteoForecast";

export default async function WeatherPage() {
  const [aqiData, stations] = await Promise.all([
    fetchAQI(),
    fetchAllStations(),
  ]);

  // Error state
  if (!aqiData) {
    return (
      <main className="pt-14 md:pt-16 min-h-screen bg-white">
        <section
          className="grid border-b border-gray-100"
          style={{ gridTemplateColumns: "32px 1fr" }}
        >
          <div className="border-r border-gray-100" />
          <div className="px-8 md:px-14 py-20">
            <p
              className="text-gray-400 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Алдаа · Error
            </p>
            <h1
              className="font-normal text-gray-800 mb-4"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4vw, 40px)",
              }}
            >
              Өгөгдөл татаж чадсангүй
            </h1>
            <hr className="border-gray-100 mb-6 max-w-xs" />
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              API түлхүүрүүдээ шалгана уу.
            </p>
            <code className="block text-xs text-gray-400 font-mono bg-gray-50 border border-gray-100 rounded p-4 max-w-xs">
              NEXT_PUBLIC_WAQI_TOKEN
              <br />
              NEXT_PUBLIC_OPENWEATHER_KEY
            </code>
          </div>
        </section>
      </main>
    );
  }

  const stationId = aqiData.idx ? `@${aqiData.idx}` : undefined;

  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* HERO — page label */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div
          className="border-r border-gray-100 flex items-center justify-center py-10"
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
            ЦАГ АГААР · WEATHER
          </span>
        </div>

        <div className="px-8 md:px-14 py-8 md:py-12">
          <p
            className="text-gray-400 uppercase mb-3"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Агаарын чанар · Air quality
          </p>
          <h1
            className="font-normal text-gray-900"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 48px)",
            }}
          >
            Цаг агаар
          </h1>
        </div>
      </section>

      {/* INTERACTIVE HERO — station selector + AQI */}
      {stations.length > 0 ? (
        <InteractiveHero stations={stations} initialData={aqiData} />
      ) : (
        <div className="px-8 md:px-14 py-12 border-b border-gray-100">
          <p className="text-sm text-gray-400">Станцын өгөгдөл олдсонгүй</p>
        </div>
      )}

      {/* MAP */}
      {stations.length > 0 && (
        <section className="border-t border-gray-100 px-4 md:px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-gray-400 uppercase mb-6 px-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Станцуудын газрын зураг · Station map
            </p>
            <AQIMapWrapper stations={stations} />
          </div>
        </section>
      )}

      {/* FORECAST */}
      <section className="border-t border-gray-100">
        <OpenMeteoForecast />
      </section>

      {/* INSIGHTS DASHBOARD */}
      {stationId ? (
        <section className="border-t border-gray-100">
          <InsightsDashboard stationId={stationId} currentAqi={aqiData.aqi} />
        </section>
      ) : (
        <section className="px-8 md:px-14 py-10 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Station ID олдсонгүй — dashboard харагдахгүй байна.
          </p>
        </section>
      )}
    </main>
  );
}
