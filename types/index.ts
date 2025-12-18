// types/index.ts
// TypeScript төрлүүдийн тодорхойлолт (Type definitions)

export interface AQIData {
  idx: string; // 🆕 Station ID нэмэгдсэн (Added for InsightsDashboard)
  aqi: number;
  pm25: number | null;
  pm10: number | null;
  o3: number | null; // Ozone (Озон)
  no2: number | null; // Nitrogen Dioxide (Азотын давхар исэл)
  so2: number | null; // Sulfur Dioxide (Хүхрийн давхар исэл)
  co: number | null; // Carbon Monoxide (Нүүрстөрөгчийн дутуу исэл)
  temp: number | null;
  humidity: number | null;
  pressure?: number | null; // Атмосферийн даралт
  wind?: number | null; // Салхины хурд
  time: string;
  city: string;
  dominantPollutant?: string; // Гол бохирдуулагч (хамгийн их утгатай)
}

export interface StationData {
  uid: number;
  aqi: number;
  station: {
    name: string;
    geo: [number, number]; // [lat, lon]
    time?: string;
  };
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyWeather {
  dt: number;
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherCondition[];
  pop: number;
}

export interface DailyWeather {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  wind_speed: number;
  weather: WeatherCondition[];
  pop: number;
}

export interface WeatherData {
  current: {
    temp: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    weather: WeatherCondition;
  };
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export interface HealthMessage {
  text: string;
  color: string;
  advice: string;
}

export interface PollutantInfo {
  name: string; // Англи нэр
  nameMn: string; // Монгол нэр
  value: number | null;
  unit: string;
  description: string; // Тайлбар
  threshold: {
    // Хэвийн түвшин
    good: number;
    moderate: number;
    unhealthy: number;
  };
}

// Шинэ төрлүүд - Historical Data & Weather Features
// (New types for Historical Data & Weather Features)

export interface HistoricalDataPoint {
  time: string; // ISO timestamp
  aqi: number;
  dominantPollutant: string;
}

export interface HistoricalAQIData {
  hourly: HistoricalDataPoint[]; // Сүүлийн 24 цаг (Last 24 hours)
  daily: HistoricalDataPoint[]; // Сүүлийн 7 хоног (Last 7 days)
}

export interface ForecastDay {
  date: string; // YYYY-MM-DD
  temp: number; // Дундаж температур (Average temp in Celsius)
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number; // Чийгшил (Humidity %)
  windSpeed: number; // Салхины хурд (Wind speed m/s)
  description: string; // "clear sky", "light rain"
  icon: string; // OpenWeather icon code
  condition: string; // Монголоор (In Mongolian)
}

export interface WeatherForecast {
  current: ForecastDay;
  forecast: ForecastDay[]; // 5 хоногийн таамаглал (5-day forecast)
}

export interface WeatherImpact {
  level: "good" | "moderate" | "bad"; // Нөлөөлөл (Impact level)
  message: string; // Монгол хэл дээрх мессеж (Message in Mongolian)
  icon: string; // Emoji
  recommendation: string; // Зөвлөмж (Recommendation)
}

// ============================================
// 🆕 ОЛОН ЖИЛИЙН ТҮҮХЭН ӨГӨГДӨЛ
// MULTI-YEAR HISTORICAL DATA TYPES
// ============================================
// OpenWeather Air Pollution API-с авсан өгөгдөл (Data from OpenWeather Air Pollution API)

export interface PollutionComponents {
  co: number; // Carbon monoxide (μg/m³)
  no: number; // Nitrogen monoxide (μg/m³)
  no2: number; // Nitrogen dioxide (μg/m³)
  o3: number; // Ozone (μg/m³)
  so2: number; // Sulphur dioxide (μg/m³)
  pm2_5: number; // Fine particles matter (μg/m³)
  pm10: number; // Coarse particulate matter (μg/m³)
  nh3: number; // Ammonia (μg/m³)
}

export interface HistoricalPollutionDataPoint {
  dt: number; // Unix timestamp
  date: string; // ISO date string for easier use
  aqi: number; // 1-5 scale (1=Good, 5=Very Poor) - converted to 0-500 EPA scale
  components: PollutionComponents;
  dominantPollutant: string; // Which pollutant is highest
}

export interface YearlyData {
  year: number;
  data: HistoricalPollutionDataPoint[];
  avgAqi: number; // Жилийн дундаж AQI (Yearly average AQI)
  maxAqi: number; // Хамгийн их AQI (Maximum AQI)
  minAqi: number; // Хамгийн бага AQI (Minimum AQI)
}

export interface MultiYearHistoricalData {
  years: YearlyData[]; // Жил бүрийн өгөгдөл (Data for each year)
  startDate: string; // Эхлэх огноо (Start date)
  endDate: string; // Дуусах огноо (End date)
  totalDays: number; // Нийт өдрийн тоо (Total days)
}

// "Өнөөдөр түүхэнд" - "Today in History"
export interface TodayInHistoryData {
  currentDate: string; // Өнөөдрийн огноо (Today's date)
  dayOfYear: number; // Жилийн хэддүгээр өдөр (Day of year 1-365)
  historicalData: {
    year: number;
    date: string;
    aqi: number;
    pm25: number;
    comparison: string; // "Better", "Worse", "Similar"
  }[];
}

// Улирлын харьцуулалт - Seasonal Comparison
export interface SeasonData {
  season: string; // "Зун" | "Өвөл" | "Хавар" | "Намар"
  avgAqi: number;
  avgPm25: number;
  avgTemp: number;
  daysCount: number;
}

export interface SeasonalComparison {
  years: {
    year: number;
    seasons: SeasonData[];
  }[];
}

// Heatmap өгөгдөл - Calendar Heatmap Data
export interface HeatmapDataPoint {
  date: string; // YYYY-MM-DD
  count: number; // AQI value (used for color intensity)
  aqi: number; // Actual AQI for tooltip
}
