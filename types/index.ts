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

// 🆕 Шинэ төрлүүд - Historical Data & Weather Features
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
