// lib/pollutantInfo.ts
// Бохирдуулагч бүрийн дэлгэрэнгүй мэдээлэл

export const POLLUTANT_INFO = {
  pm25: {
    name: "PM2.5",
    nameMn: "Нарийн тоос",
    unit: "μg/m³",
    icon: "💨",
    description:
      "2.5 микрон хэмжээтэй нарийн тоосонцор. Уушгинд нэвт шингэж, эрүүл мэндэд хор учруулна.",
    threshold: { good: 12, moderate: 35, unhealthy: 55 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
  pm10: {
    name: "PM10",
    nameMn: "Бүдүүн тоос",
    unit: "μg/m³",
    icon: "🌫️",
    description: "10 микрон хэмжээтэй тоосонцор. Амьсгалын замд цухуйна.",
    threshold: { good: 54, moderate: 154, unhealthy: 254 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
  o3: {
    name: "O₃",
    nameMn: "Озон",
    unit: "ppb",
    icon: "☀️",
    description:
      "Газрын гадаргад үүссэн озон. Нүд, уушгинд цухуйна. Нарны улиралд ихэснэ.",
    threshold: { good: 54, moderate: 70, unhealthy: 85 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
  no2: {
    name: "NO₂",
    nameMn: "Азотын давхар исэл",
    unit: "ppb",
    icon: "🚗",
    description:
      "Автомашин, үйлдвэрээс гардаг. Астма, амьсгалын өвчнийг дордуулна.",
    threshold: { good: 53, moderate: 100, unhealthy: 360 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
  so2: {
    name: "SO₂",
    nameMn: "Хүхрийн давхар исэл",
    unit: "ppb",
    icon: "🏭",
    description: "Нүүрс шатаахад үүснэ. Амьсгалын замд цухуйж, астма үүсгэнэ.",
    threshold: { good: 35, moderate: 75, unhealthy: 185 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
  co: {
    name: "CO",
    nameMn: "Нүүрстөрөгчийн дутуу исэл",
    unit: "ppm",
    icon: "⛽",
    description: "Төрөл бүрийн түлш шатаахад үүснэ. Өндөр хэмжээнд хорт.",
    threshold: { good: 4.4, moderate: 9.4, unhealthy: 12.4 },
    color: {
      good: "bg-green-500",
      moderate: "bg-golden",
      unhealthy: "bg-red-500",
    },
  },
};

// Утга байгаа эсэхийг шалгаад, өнгө өгөх функц
export function getPollutantColor(
  pollutantKey: string,
  value: number | null
): string {
  if (!value) return "bg-gray-200";

  const info = POLLUTANT_INFO[pollutantKey as keyof typeof POLLUTANT_INFO];
  if (!info) return "bg-gray-200";

  if (value <= info.threshold.good) return info.color.good;
  if (value <= info.threshold.moderate) return info.color.moderate;
  return info.color.unhealthy;
}
