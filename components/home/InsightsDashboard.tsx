// components/home/InsightsDashboard.tsx
"use client";

import { useEffect, useState } from "react";
import AQITrendChart from "@/components/charts/AQITrendChart";
import WeeklyComparison from "@/components/charts/WeeklyComparison";
import BestWorstTimes from "@/components/charts/BestWorstTimes";
import CurrentWeather from "@/components/weather/CurrentWeather";
import ForecastCards from "@/components/weather/ForecastCards";
import WeatherImpact from "@/components/weather/WeatherImpact";
import TodayInHistoryCard from "@/components/charts/TodayInHistoryCard";
import YearComparisonChart from "@/components/charts/YearComparisonChart";
import PollutionHeatmap from "@/components/charts/PollutionHeatmap";
import SeasonalComparison from "@/components/charts/SeasonalComparison";
import { HistoricalAQIData } from "@/lib/fetchHistoricalAQI";
import { WeatherForecast } from "@/lib/fetchForecast";
import { MultiYearHistoricalData } from "@/types";
import {
  analyzeWeatherImpact,
  findBestTimeOutside,
} from "@/lib/weatherImpactAnalyzer";

interface Props {
  stationId?: string;
  currentAqi: number;
}

// Shared section wrapper — vertical spine + content
function Section({
  spineLabel,
  children,
}: {
  spineLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div
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
          {spineLabel}
        </span>
      </div>
      <div className="px-8 md:px-14 py-10">{children}</div>
    </div>
  );
}

function SectionLabel({ mn, en }: { mn: string; en: string }) {
  return (
    <p
      className="text-gray-400 uppercase mb-6"
      style={{ fontSize: "9px", letterSpacing: "0.14em" }}
    >
      {mn} · {en}
    </p>
  );
}

export default function InsightsDashboard({ stationId, currentAqi }: Props) {
  const [historicalData, setHistoricalData] =
    useState<HistoricalAQIData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [multiYearData, setMultiYearData] =
    useState<MultiYearHistoricalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [multiYearLoading, setMultiYearLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [multiYearError, setMultiYearError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        if (!stationId) throw new Error("Станцын ID олдсонгүй");
        const [historicalRes, weatherRes] = await Promise.all([
          fetch(`/api/historical?stationId=${stationId}`),
          fetch("/api/forecast"),
        ]);
        if (!historicalRes.ok)
          throw new Error(`Түүхэн өгөгдөл: ${historicalRes.status}`);
        if (!weatherRes.ok) throw new Error(`Цаг агаар: ${weatherRes.status}`);
        const historical = await historicalRes.json();
        const weather = await weatherRes.json();
        setHistoricalData(historical);
        setWeatherData(weather);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Алдаа гарлаа");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [stationId, currentAqi]);

  useEffect(() => {
    async function fetchMultiYearData() {
      try {
        setMultiYearLoading(true);
        setMultiYearError(null);
        const response = await fetch("/api/historical-pollution");
        if (!response.ok)
          throw new Error(`Олон жилийн өгөгдөл: ${response.status}`);
        const data = await response.json();
        setMultiYearData(data);
      } catch (err) {
        setMultiYearError(err instanceof Error ? err.message : "Алдаа гарлаа");
      } finally {
        setMultiYearLoading(false);
      }
    }
    fetchMultiYearData();
  }, []);

  // Loading
  if (loading) {
    return (
      <Section spineLabel="АЧААЛЛАЖ · LOADING">
        <p
          className="text-gray-400 uppercase mb-3"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Өгөгдөл татаж байна · Loading data
        </p>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border border-gray-300 border-t-gray-600 animate-spin" />
          <span
            className="text-gray-500"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
          >
            Түүхэн өгөгдөл татаж байна...
          </span>
        </div>
        <p
          className="text-gray-300 mt-2"
          style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
        >
          {stationId}
        </p>
      </Section>
    );
  }

  // Error
  if (error || !historicalData || !weatherData) {
    return (
      <Section spineLabel="АЛДАА · ERROR">
        <p
          className="text-gray-400 uppercase mb-4"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Өгөгдөл олдсонгүй · Data unavailable
        </p>
        <p
          className="text-gray-700 mb-6"
          style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
        >
          {error || "Өгөгдөл олдсонгүй"}
        </p>
        <div className="border border-gray-100 mb-6">
          {[
            { label: "Station ID", value: stationId || "undefined" },
            { label: "Historical", value: historicalData ? "OK" : "Failed" },
            { label: "Weather", value: weatherData ? "OK" : "Failed" },
          ].map((row, i) => (
            <div
              key={i}
              className="flex justify-between px-4 py-3 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-400" style={{ fontSize: "11px" }}>
                {row.label}
              </span>
              <span
                className="text-gray-700 font-mono"
                style={{ fontSize: "11px" }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            letterSpacing: "0.04em",
          }}
        >
          Дахин ачаалах · Reload
        </button>
      </Section>
    );
  }

  const weatherImpact = analyzeWeatherImpact(
    weatherData.current.windSpeed,
    weatherData.current.humidity,
    weatherData.current.temp,
    currentAqi,
  );

  const bestTime = findBestTimeOutside(
    historicalData.hourly,
    weatherData.current.windSpeed,
  );

  return (
    <div>
      {/* Weather section */}
      <Section spineLabel="ЦАГ АГААР · WEATHER">
        <SectionLabel mn="Цаг агаарын мэдээлэл" en="Weather" />
        <div className="space-y-0 -mx-8 md:-mx-14">
          <CurrentWeather
            temp={weatherData.current.temp}
            tempMin={weatherData.current.tempMin}
            tempMax={weatherData.current.tempMax}
            feelsLike={weatherData.current.feelsLike}
            humidity={weatherData.current.humidity}
            windSpeed={weatherData.current.windSpeed}
            condition={weatherData.current.condition}
            description={weatherData.current.description}
            icon={weatherData.current.icon}
          />
          <WeatherImpact
            level={weatherImpact.level}
            message={weatherImpact.message}
            icon={weatherImpact.icon}
            recommendation={weatherImpact.recommendation}
          />
          <ForecastCards forecast={weatherData.forecast} />
        </div>
      </Section>

      {/* Short-term history */}
      <Section spineLabel="ХАНДЛАГА · TREND">
        <SectionLabel mn="Сүүлийн үеийн хандлага" en="Recent trends" />
        <div className="space-y-6">
          <AQITrendChart data={historicalData.hourly} />
          <WeeklyComparison data={historicalData.daily} />
          <BestWorstTimes
            bestTime={bestTime.bestTime}
            bestAqi={bestTime.bestAqi}
            worstTime={bestTime.worstTime}
            worstAqi={bestTime.worstAqi}
            message={bestTime.message}
          />
        </div>
      </Section>

      {/* Multi-year history */}
      <Section spineLabel="ТҮҮХ · HISTORY">
        <SectionLabel mn="Олон жилийн түүхэн өгөгдөл" en="Multi-year history" />
        <p
          className="text-gray-400 mb-8"
          style={{ fontFamily: "var(--font-inter)", fontSize: "12px" }}
        >
          2020 оноос хойшхи агаарын чанарын өөрчлөлт
        </p>

        {multiYearLoading ? (
          <div className="flex items-center gap-3 py-8">
            <div className="w-4 h-4 rounded-full border border-gray-300 border-t-gray-600 animate-spin flex-shrink-0" />
            <span
              className="text-gray-400"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
            >
              Олон жилийн өгөгдөл татаж байна...
            </span>
          </div>
        ) : multiYearError || !multiYearData ? (
          <div>
            <p
              className="text-gray-500 mb-4"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
            >
              {multiYearError || "Олон жилийн өгөгдөл олдсонгүй"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 border border-gray-200 text-gray-600 hover:border-gray-400 transition-colors"
              style={{ fontFamily: "var(--font-inter)", fontSize: "12px" }}
            >
              Дахин оролдох · Retry
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Year stats table */}
            <div className="border border-gray-100">
              <div
                className="grid border-b border-gray-100"
                style={{ gridTemplateColumns: "80px 1fr 1fr 1fr" }}
              >
                {["Жил", "Дундаж", "Дээд", "Доод"].map((h) => (
                  <div
                    key={h}
                    className="px-4 py-2 border-r border-gray-100 last:border-r-0"
                  >
                    <span
                      className="text-gray-300 uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
              {multiYearData.years.map((year) => (
                <div
                  key={year.year}
                  className="grid border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  style={{ gridTemplateColumns: "80px 1fr 1fr 1fr" }}
                >
                  <div className="px-4 py-3 border-r border-gray-100">
                    <span
                      className="text-gray-900"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {year.year}
                    </span>
                  </div>
                  <div className="px-4 py-3 border-r border-gray-100">
                    <span
                      className="text-gray-900"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {year.avgAqi}
                    </span>
                  </div>
                  <div className="px-4 py-3 border-r border-gray-100">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {year.maxAqi}
                    </span>
                  </div>
                  <div className="px-4 py-3">
                    <span
                      className="text-gray-400"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {year.minAqi}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <TodayInHistoryCard
                data={multiYearData}
                currentAqi={currentAqi}
              />
              <YearComparisonChart data={multiYearData} />
            </div>
            <PollutionHeatmap data={multiYearData} />
            <SeasonalComparison data={multiYearData} />
          </div>
        )}
      </Section>

      {/* Info note */}
      <Section spineLabel="ТАЙЛБАР · INFO">
        <SectionLabel mn="Мэдээлэл" en="About this data" />
        <div className="border border-gray-100">
          {[
            {
              label: "Олон жилийн өгөгдөл",
              value:
                "Сүүлийн 30 хоногийн бодит өгөгдөл + 2020–2024 оны улирлын хандлагад суурилсан симуляци.",
            },
            {
              label: "AQI тооцоолол",
              value:
                "PM2.5 утга дээр суурилсан EPA стандарт ашиглана (0–500 scale).",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="px-5 py-4 border-b border-gray-100 last:border-b-0"
            >
              <p
                className="text-gray-400 uppercase mb-1"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {row.label}
              </p>
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
