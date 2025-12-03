// lib/fetchForecast.ts
// Цаг агаарын таамаглал татах функц (Weather forecast fetcher)

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

// OpenWeather API item-ийн төрөл (OpenWeather API item type)
interface WeatherListItem {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

/**
 * Цаг агаарын таамаглал татах (Fetch weather forecast)
 */
export async function fetchForecast(): Promise<WeatherForecast | null> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

  if (!apiKey) {
    console.error("❌ NEXT_PUBLIC_OPENWEATHER_KEY олдсонгүй");
    return null;
  }

  try {
    // Улаанбаатарын координат (Ulaanbaatar coordinates)
    const lat = 47.9077;
    const lon = 106.9145;

    // 5 хоногийн таамаглал (5-day forecast)
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=mn`;

    const response = await fetch(forecastUrl, {
      next: { revalidate: 1800 }, // 30 минут бүр шинэчлэх (Cache for 30 minutes)
    });

    if (!response.ok) {
      throw new Error(`HTTP алдаа: ${response.status}`);
    }

    const json = await response.json();

    if (!json.list || json.list.length === 0) {
      console.error("❌ OpenWeather API өгөгдөл буруу");
      return null;
    }

    // Өдөр бүрийн дундаж тооцоолох (Calculate daily averages)
    const dailyData: Record<string, WeatherListItem[]> = {};

    json.list.forEach((item: WeatherListItem) => {
      const date = item.dt_txt.split(" ")[0]; // YYYY-MM-DD
      if (!dailyData[date]) {
        dailyData[date] = [];
      }
      dailyData[date].push(item);
    });

    // 5 хоногийн өгөгдөл боловсруулах (Process 5 days)
    const forecast: ForecastDay[] = [];
    const dates = Object.keys(dailyData).slice(0, 5);

    dates.forEach((date) => {
      const dayData = dailyData[date];
      const temps = dayData.map((d) => d.main.temp);
      const feelsLikes = dayData.map((d) => d.main.feels_like);
      const humidities = dayData.map((d) => d.main.humidity);
      const windSpeeds = dayData.map((d) => d.wind.speed);

      const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
      const avgFeelsLike =
        feelsLikes.reduce((a, b) => a + b, 0) / feelsLikes.length;
      const avgHumidity =
        humidities.reduce((a, b) => a + b, 0) / humidities.length;
      const avgWindSpeed =
        windSpeeds.reduce((a, b) => a + b, 0) / windSpeeds.length;

      const midday = dayData[Math.floor(dayData.length / 2)]; // Үд дундын өгөгдөл (Midday data)

      forecast.push({
        date,
        temp: Math.round(avgTemp),
        tempMin: Math.round(Math.min(...temps)),
        tempMax: Math.round(Math.max(...temps)),
        feelsLike: Math.round(avgFeelsLike),
        humidity: Math.round(avgHumidity),
        windSpeed: Math.round(avgWindSpeed * 10) / 10,
        description: midday.weather[0].description,
        icon: midday.weather[0].icon,
        condition: translateWeatherCondition(midday.weather[0].main),
      });
    });

    // Одоогийн өдрийг current болгох (First day as current)
    const current = forecast[0];
    const futureForecast = forecast.slice(1);

    return {
      current,
      forecast: futureForecast,
    };
  } catch (error) {
    console.error("❌ Цаг агаарын таамаглал татахад алдаа:", error);
    return null;
  }
}

/**
 * Цаг агаарын нөхцөлийг монголоор орчуулах (Translate weather condition to Mongolian)
 */
function translateWeatherCondition(condition: string): string {
  const translations: Record<string, string> = {
    Clear: "Цэлмэг",
    Clouds: "Үүлэрхэг",
    Rain: "Бороотой",
    Snow: "Цастай",
    Drizzle: "Шиврээ бороо",
    Thunderstorm: "Аянга цахилгаантай",
    Mist: "Манантай",
    Fog: "Манантай",
    Haze: "Манангартай",
  };

  return translations[condition] || condition;
}
