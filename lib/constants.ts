// lib/constants.ts

import { HealthMessage } from "@/types";

export function getHealthMessage(aqi: number): HealthMessage {
  if (aqi <= 50) {
    return {
      text: "Сайн",
      color: "bg-green-500",
      advice: "Гадаа явах аюулгүй. Амьсгал авах дасгал хийж болно.",
    };
  }
  if (aqi <= 100) {
    return {
      text: "Хүлээн зөвшөөрөгдөх",
      color: "bg-golden",
      advice: "Мэдрэмтгий хүмүүс анхаарах хэрэгтэй.",
    };
  }
  if (aqi <= 150) {
    return {
      text: "Мэдрэмтгий бүлэгт эрүүл бус",
      color: "bg-orange-500",
      advice: "Маск зүүх, хүүхдүүдийг дотор байлга.",
    };
  }
  if (aqi <= 200) {
    return {
      text: "Эрүүл бус",
      color: "bg-red-500",
      advice: "HEPA шүүлтүүр асаа. Цонхнууд хаа. Гадуур богино явах.",
    };
  }
  if (aqi <= 300) {
    return {
      text: "Маш эрүүл бус",
      color: "bg-purple-600",
      advice: "Гадуур явахгүй байх. Бүх цонхнууд хаах. HEPA 24/7.",
    };
  }
  return {
    text: "Аюултай",
    color: "bg-red-900",
    advice: "ГАДУУР ГАРАХ ХОРИОТОЙ. Амьсгалын эрхтэн хамгаалах!",
  };
}

export const UI_TEXT = {
  title: "Улаанбаатар LIVE",
  updated: "шинэчлэгдсэн",
  minutesAgo: "мин өмнө",
  temperature: "Температур",
  wind: "Салхи",
  emergency: "Яаралтай тусламж",
  hospital: "Ойр эмнэлэг",
  oxygen: "Хүчилтөрөгчийн цэг",
  pharmacy: "Эм эмийн сан",
};
