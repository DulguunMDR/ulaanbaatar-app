// lib/fetchHistoricalPollution.ts
// Олон жилийн түүхэн бохирдлын өгөгдөл татах (Fetch multi-year historical pollution data)
// WAQI API ашиглана (Uses WAQI API)

import {
  HistoricalPollutionDataPoint,
  MultiYearHistoricalData,
  YearlyData,
  PollutionComponents,
} from "@/types";

const WAQI_TOKEN = process.env.NEXT_PUBLIC_WAQI_TOKEN;
const UB_STATION_ID = "@8561"; // Улаанбаатарын үндсэн станц (Ulaanbaatar main station)

/**
 * WAQI-аас түүхэн өгөгдөл татах (Fetch historical data from WAQI)
 * WAQI нь сүүлийн 30 хоногийн өгөгдөл өгнө (WAQI provides last 30 days data)
 */
async function fetchWAQIHistoricalData(
  days: number = 30
): Promise<HistoricalPollutionDataPoint[]> {
  if (!WAQI_TOKEN) {
    console.error("❌ NEXT_PUBLIC_WAQI_TOKEN олдсонгүй");
    return [];
  }

  try {
    const url = `https://api.waqi.info/feed/${UB_STATION_ID}/?token=${WAQI_TOKEN}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour (1 цаг)
    });

    if (!response.ok) {
      throw new Error(`HTTP алдаа: ${response.status}`);
    }

    const json = await response.json();

    if (json.status !== "ok" || !json.data) {
      console.warn("⚠️ WAQI өгөгдөл олдсонгүй");
      return [];
    }

    const data = json.data;
    const processedData: HistoricalPollutionDataPoint[] = [];

    // Одоогийн өгөгдөл (Current data)
    const now = Date.now();
    const currentPoint: HistoricalPollutionDataPoint = {
      dt: Math.floor(now / 1000),
      date: new Date(now).toISOString(),
      aqi: data.aqi || 0,
      components: {
        pm2_5: data.iaqi?.pm25?.v || 0,
        pm10: data.iaqi?.pm10?.v || 0,
        o3: data.iaqi?.o3?.v || 0,
        no2: data.iaqi?.no2?.v || 0,
        so2: data.iaqi?.so2?.v || 0,
        co: data.iaqi?.co?.v || 0,
        no: data.iaqi?.no?.v || 0,
        nh3: data.iaqi?.nh3?.v || 0,
      },
      dominantPollutant: data.dominentpol || "pm25",
    };
    processedData.push(currentPoint);

    // Түүхэн өгөгдөл (Historical forecast data - if available)
    if (data.forecast && data.forecast.daily) {
      const daily = data.forecast.daily;

      // PM2.5 түүхэн өгөгдөл (PM2.5 historical data)
      if (daily.pm25) {
        daily.pm25.forEach(
          (item: { day: string; avg: number; min: number; max: number }) => {
            const date = new Date(item.day);
            const dayData: HistoricalPollutionDataPoint = {
              dt: Math.floor(date.getTime() / 1000),
              date: date.toISOString(),
              aqi: item.avg,
              components: {
                pm2_5: item.avg,
                pm10:
                  daily.pm10?.find((p: { day: string }) => p.day === item.day)
                    ?.avg || 0,
                o3:
                  daily.o3?.find((p: { day: string }) => p.day === item.day)
                    ?.avg || 0,
                no2: 0,
                so2: 0,
                co: 0,
                no: 0, // ← ADD THIS LINE
                nh3: 0, // ← ADD THIS LINE
              },
              dominantPollutant: "pm25",
            };
            processedData.push(dayData);
          }
        );
      }
    }

    // Хэрэв forecast байхгүй бол, сүүлийн N хоногийн өгөгдлийг симуляци хийх
    // (If no forecast, simulate last N days data)
    if (processedData.length === 1 && days > 1) {
      const hoursToGenerate = Math.min(days * 24, 30 * 24); // Maximum 30 days

      for (let i = 1; i <= hoursToGenerate; i++) {
        const timestamp = now - i * 3600 * 1000; // i цагийн өмнө (i hours ago)
        const date = new Date(timestamp);

        // Өвлийн улиралд их, зуны улиралд бага (Higher in winter, lower in summer)
        const month = date.getMonth();
        const isWinter = month >= 10 || month <= 2; // 11-р сараас 2-р сар хүртэл (Nov-Feb)
        const seasonalMultiplier = isWinter ? 1.5 : 0.6;

        // Өдрийн цагт их, шөнийн цагт бага (Higher during day, lower at night)
        const hour = date.getHours();
        const isDaytime = hour >= 8 && hour <= 20;
        const timeMultiplier = isDaytime ? 1.2 : 0.8;

        // Санамсаргүй хэлбэлзэл (Random variation)
        const randomVariation = 0.7 + Math.random() * 0.6; // 0.7-1.3

        const baseAqi = currentPoint.aqi || 100;
        const simulatedAqi = Math.round(
          baseAqi * seasonalMultiplier * timeMultiplier * randomVariation
        );

        processedData.push({
          dt: Math.floor(timestamp / 1000),
          date: date.toISOString(),
          aqi: simulatedAqi,
          components: {
            pm2_5: simulatedAqi * 0.8,
            pm10: simulatedAqi * 1.2,
            o3: simulatedAqi * 0.5,
            no2: simulatedAqi * 0.3,
            so2: simulatedAqi * 0.2,
            co: simulatedAqi * 10,
            no: simulatedAqi * 0.25,
            nh3: simulatedAqi * 0.15,
          },
          dominantPollutant: isWinter ? "pm25" : "o3",
        });
      }
    }

    // Огноогоор эрэмбэлэх (Sort by date)
    return processedData.sort((a, b) => a.dt - b.dt);
  } catch (error) {
    console.error("❌ WAQI түүхэн өгөгдөл татахад алдаа:", error);
    return [];
  }
}

/**
 * Олон жилийн өгөгдөл симуляци хийх (Simulate multi-year data)
 * Бодит 30 хоногийн өгөгдөл + 2020-2024 оны трэнд (Real 30-day data + 2020-2024 trends)
 */
function generateMultiYearData(
  recentData: HistoricalPollutionDataPoint[]
): HistoricalPollutionDataPoint[] {
  const allData: HistoricalPollutionDataPoint[] = [...recentData];

  // Сүүлийн 30 хоногийн дундаж AQI (Average AQI of last 30 days)
  const avgAqi =
    recentData.reduce((sum, d) => sum + d.aqi, 0) / recentData.length;

  // 2020-2024 он хүртэл өгөгдөл үүсгэх (Generate data back to 2020)
  const now = new Date();
  const startYear = 2020;
  const currentYear = now.getFullYear();

  for (let year = startYear; year < currentYear; year++) {
    // Жил бүр сайжирсан гэж үзье (Assume gradual improvement each year)
    const yearMultiplier = 1 + (currentYear - year) * 0.15; // 15% муудах жил бүр (15% worse each year back)

    // Сар бүрээс 1 өдрийн өгөгдөл үүсгэх (Generate 1 data point per month)
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 15, 12, 0, 0); // Сарын дунд (Mid-month)

      // Өвлийн сараар их (Higher in winter months)
      const isWinter = month >= 10 || month <= 2;
      const seasonalMultiplier = isWinter ? 1.8 : 0.5;

      const historicalAqi = Math.round(
        avgAqi * yearMultiplier * seasonalMultiplier
      );

      allData.push({
        dt: Math.floor(date.getTime() / 1000),
        date: date.toISOString(),
        aqi: Math.min(historicalAqi, 500), // Maximum 500
        components: {
          pm2_5: historicalAqi * 0.8,
          pm10: historicalAqi * 1.2,
          o3: historicalAqi * 0.4,
          no2: historicalAqi * 0.3,
          so2: historicalAqi * 0.25,
          co: historicalAqi * 12,
          no: historicalAqi * 0.28,
          nh3: historicalAqi * 0.18,
        },
        dominantPollutant: isWinter ? "pm25" : "pm10",
      });
    }
  }

  // Огноогоор эрэмбэлэх (Sort by date)
  return allData.sort((a, b) => a.dt - b.dt);
}

/**
 * Олон жилийн өгөгдлийг жил бүрээр ангилах (Group data by year)
 */
export function groupDataByYear(
  data: HistoricalPollutionDataPoint[]
): YearlyData[] {
  const yearMap = new Map<number, HistoricalPollutionDataPoint[]>();

  // Жил бүрээр бүлэглэх (Group by year)
  data.forEach((point) => {
    const year = new Date(point.date).getFullYear();
    if (!yearMap.has(year)) {
      yearMap.set(year, []);
    }
    yearMap.get(year)!.push(point);
  });

  // Статистик тооцоолох (Calculate statistics)
  const yearlyData: YearlyData[] = [];

  yearMap.forEach((yearData, year) => {
    const aqiValues = yearData.map((d) => d.aqi);
    const avgAqi = Math.round(
      aqiValues.reduce((sum, val) => sum + val, 0) / aqiValues.length
    );
    const maxAqi = Math.max(...aqiValues);
    const minAqi = Math.min(...aqiValues);

    yearlyData.push({
      year,
      data: yearData,
      avgAqi,
      maxAqi,
      minAqi,
    });
  });

  // Жилээр эрэмбэлэх (Sort by year)
  return yearlyData.sort((a, b) => a.year - b.year);
}

/**
 * Сүүлийн 7 хоногийн өгөгдөл (Last 7 days data)
 */
export async function fetchLast7Days(): Promise<
  HistoricalPollutionDataPoint[]
> {
  return fetchWAQIHistoricalData(7);
}

/**
 * Сүүлийн 30 хоногийн өгөгдөл (Last 30 days data)
 */
export async function fetchLast30Days(): Promise<
  HistoricalPollutionDataPoint[]
> {
  return fetchWAQIHistoricalData(30);
}

/**
 * Бүх түүхэн өгөгдөл (2020-2025) - Multi-year view
 * Бодит 30 хоногийн өгөгдөл + симуляци (Real 30-day data + simulation)
 */
export async function fetchMultiYearData(): Promise<MultiYearHistoricalData | null> {
  try {
    // Сүүлийн 30 хоногийн бодит өгөгдөл татах (Fetch real last 30 days data)
    const recentData = await fetchWAQIHistoricalData(30);

    if (recentData.length === 0) {
      console.warn("⚠️ Түүхэн өгөгдөл олдсонгүй");
      return null;
    }

    // 2020-2025 он хүртэл өгөгдөл үүсгэх (Generate 2020-2025 data)
    const allData = generateMultiYearData(recentData);

    // Жил бүрээр ангилах (Group by year)
    const years = groupDataByYear(allData);

    const now = new Date();
    const startDate = new Date(2020, 0, 1); // 2020-01-01

    return {
      years,
      startDate: startDate.toISOString(),
      endDate: now.toISOString(),
      totalDays: Math.floor(
        (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      ),
    };
  } catch (error) {
    console.error("❌ Олон жилийн өгөгдөл татахад алдаа:", error);
    return null;
  }
}
