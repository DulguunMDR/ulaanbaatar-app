// lib/weatherImpactAnalyzer.ts
// Цаг агаар, агаарын чанарын хамаарал шинжлэх (Weather impact on air quality analyzer)

export interface WeatherImpact {
  level: "good" | "moderate" | "bad"; // Нөлөөлөл (Impact level)
  message: string; // Монгол хэл дээрх мессеж (Message in Mongolian)
  icon: string; // Emoji
  recommendation: string; // Зөвлөмж (Recommendation)
}

/**
 * Цаг агаарын агаарын чанарт үзүүлэх нөлөөг тооцоолох
 * @param windSpeed - Салхины хурд (м/с)
 * @param humidity - Чийгшил (%)
 * @param temp - Температур (°C)
 * @param aqi - Одоогийн AQI индекс
 */
export function analyzeWeatherImpact(
  windSpeed: number,
  humidity: number,
  temp: number,
  aqi: number
): WeatherImpact {
  let score = 0;
  const factors: string[] = [];

  // 1️⃣ Салхи (Wind) - хамгийн чухал хүчин зүйл
  if (windSpeed > 5) {
    score += 3;
    factors.push("салхи шүүрч байна");
  } else if (windSpeed > 2) {
    score += 1;
    factors.push("салхи сул байна");
  } else {
    score -= 2;
    factors.push("салхигүй байна");
  }

  // 2️⃣ Чийгшил (Humidity)
  if (humidity > 70) {
    score += 1;
    factors.push("чийглэг агаар");
  } else if (humidity < 30) {
    score -= 1;
    factors.push("хуурай агаар");
  }

  // 3️⃣ Температур (Temperature) - өвлийн улиралд чухал
  if (temp < -15) {
    score -= 2;
    factors.push("хүйтэн агаар");
  } else if (temp > 20) {
    score += 1;
  }

  // 4️⃣ AQI-тай харьцуулах
  const aqiLevel = getAQILevel(aqi);

  // Үр дүн гаргах (Generate result)
  if (score >= 3 && windSpeed > 3) {
    return {
      level: "good",
      message: `Салхитай байх тул агаар сайжирна`,
      icon: "🌬️",
      recommendation: `Гадаа гарахад тохиромжтой цаг. ${
        aqiLevel === "Маш муу" || aqiLevel === "Аюултай"
          ? "Гэхдээ агаар бохирдолтой тул богино хугацаанд л гар."
          : ""
      }`,
    };
  } else if (score >= 0) {
    return {
      level: "moderate",
      message: `Цаг агаар дунд зэрэг нөлөөлж байна`,
      icon: "☁️",
      recommendation: `Агаар ${aqiLevel.toLowerCase()} түвшинд байна. Гадаа гарахдаа болгоомжтой бай.`,
    };
  } else {
    return {
      level: "bad",
      message: `${
        factors.includes("салхигүй байна") ? "Салхигүй" : "Цаг агаар муу"
      } байх тул бохирдол их байна`,
      icon: "⚠️",
      recommendation: `Гадаа гарахаас зайлсхий. ${
        temp < -15 ? "Хүйтэн бас байна." : ""
      } Цонхоо битүү хаа.`,
    };
  }
}

/**
 * AQI түвшин тодорхойлох (Get AQI level)
 */
function getAQILevel(aqi: number): string {
  if (aqi <= 50) return "Сайн";
  if (aqi <= 100) return "Хэвийн";
  if (aqi <= 150) return "Эмзэг бүлэгт муу";
  if (aqi <= 200) return "Муу";
  if (aqi <= 300) return "Маш муу";
  return "Аюултай";
}

/**
 * Гадаа гарахад хамгийн тохиромжтой цаг олох (Find best time to go outside)
 * @param hourlyData - 24 цагийн AQI өгөгдөл
 * @param windSpeed - Салхины хурд
 */
export function findBestTimeOutside(
  hourlyData: { time: string; aqi: number }[],
  windSpeed: number
): {
  bestTime: string;
  bestAqi: number;
  worstTime: string;
  worstAqi: number;
  message: string;
} {
  let bestIndex = 0;
  let worstIndex = 0;
  let minAqi = Infinity;
  let maxAqi = -Infinity;

  hourlyData.forEach((data, index) => {
    if (data.aqi < minAqi) {
      minAqi = data.aqi;
      bestIndex = index;
    }
    if (data.aqi > maxAqi) {
      maxAqi = data.aqi;
      worstIndex = index;
    }
  });

  const bestHour = new Date(hourlyData[bestIndex].time).getHours();
  const worstHour = new Date(hourlyData[worstIndex].time).getHours();

  let message = `Агаар хамгийн цэвэр: ${bestHour}:00 (AQI ${Math.round(
    minAqi
  )})`;
  if (windSpeed > 3) {
    message += `. Салхи шүүрч байгаа тул илүү сайжирна.`;
  }

  return {
    bestTime: `${bestHour}:00`,
    bestAqi: Math.round(minAqi),
    worstTime: `${worstHour}:00`,
    worstAqi: Math.round(maxAqi),
    message,
  };
}
