// types/index.ts

export interface AQIData {
  aqi: number;
  pm25: number | null;
  pm10: number | null;
  temp: number | null;
  humidity: number | null;
  time: string;
  city: string;
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
  pop: number; // Probability of precipitation
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
