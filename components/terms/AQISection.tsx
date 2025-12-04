// ============================================
// ФАЙЛ: components/terms/AQISection.tsx
// Файлын байршил: components/terms/AQISection.tsx
// ============================================

"use client";

import { useState } from "react";

export default function AQISection() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const aqiLevels = [
    {
      range: "0-50",
      level: "Сайн",
      color: "bg-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      description: "Агаар цэвэр, гадаа явах аюулгүй",
      emoji: "",
      details:
        "Агаарын чанар маш сайн байна. Ямар ч үйл ажиллагаа хийхэд тохиромжтой. Гадаа спорт хичээл хийх, алхах, хүүхдүүдийг гадаа тоглуулахад таатай.",
      advice: " Гадаа явах, дасгал хийх, цонх нээх боломжтой",
    },
    {
      range: "51-100",
      level: "Дунд",
      color: "bg-yellow-400",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-50",
      description: "Ихэнх хүмүүст аюулгүй",
      emoji: "",
      details:
        "Агаарын чанар хүлээн зөвшөөрөгдөх түвшинд байна. Ихэнх хүмүүст эрсдэл бага боловч маш мэдрэмтгий хүмүүс (астма өвчтэй) жижиг эрсдэлтэй.",
      advice: " Мэдрэмтгий хүмүүс урт хугацаагаар гадаа байхаас зайлсхийх",
    },
    {
      range: "101-150",
      level: "Эрүүл мэндэд сөрөг",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      description: "Мэдрэмтгий хүмүүст сөрөг нөлөөтэй",
      emoji: "",
      details:
        "Мэдрэмтгий бүлэг (хүүхэд, өндөр настан, амьсгалын замын өвчтэй хүмүүс) эрүүл мэндийн асуудалтай тулгарч болно. Энгийн хүмүүст нөлөө бага.",
      advice: " Хүүхэд, настайчууд гадаа цаг алдахаас зайлсхийх. Маск зүүх",
    },
    {
      range: "151-200",
      level: "Эрүүл мэндэд хортой",
      color: "bg-red-500",
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      description: "Бүх хүмүүст сөрөг нөлөөтэй",
      emoji: "",
      details:
        "Бүх хүмүүс эрүүл мэндийн асуудал мэдэрч эхэлнэ. Мэдрэмтгий бүлэгт илүү ноцтой нөлөө үзүүлнэ. Гадаа явахаас зайлсхийх шаардлагатай.",
      advice: " Гадаа хөдөлгөөн хязгаарлах. Өрөөний агаар цэвэрлэгч ашиглах",
    },
    {
      range: "201-300",
      level: "Маш хортой",
      color: "bg-purple-600",
      borderColor: "border-purple-600",
      bgColor: "bg-purple-50",
      description: "Гадуур гарахгүй байх хэрэгтэй",
      emoji: "",
      details:
        "Эрүүл мэндийн яаралтай байдал. Бүх хүмүүс ноцтой нөлөө мэдрэнэ. Гадаа гарахаас бүрэн зайлсхийх. Цонх хаалттай байлгах.",
      advice: " Гэртээ байх. N95 маск зүүх. Агаар цэвэрлэгч ажиллуулах",
    },
    {
      range: "300+",
      level: "Аюултай",
      color: "bg-red-900",
      borderColor: "border-red-900",
      bgColor: "bg-red-50",
      description: "Эрүүл мэндэд ноцтой аюултай",
      emoji: "",
      details:
        "Эрүүл мэндэд онцгой аюултай түвшин. Бүх хүмүүс ноцтой нөлөө мэдэрч, эмнэлгийн тусламж шаардлагатай байж болно. Яаралтай байдал.",
      advice: " Гадаа бүү гарах. Эмнэлгийн туслалцаа авах",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-linear-to-r from-green-50 to-red-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl"></span>
          <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900">
            AQI (Air Quality Index)
          </h2>
        </div>

        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          <strong>Агаарын чанарын индекс</strong> - Агаарын бохирдлын түвшинг
          хэмжих олон улсын стандарт. 0-500 хүртэлх утгатай бөгөөд тоо их байх
          тусам агаар бохирдсон гэсэн үг.
        </p>

        {/* Info Cards (Мэдээллийн картууд) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-blue-200">
            <div className="text-2xl mb-2"></div>
            <h3 className="font-mongolian font-bold text-gray-900 mb-1">
              Хэмжих аргачлал
            </h3>
            <p className="text-sm text-gray-600">
              PM2.5, PM10, O₃, NO₂, SO₂, CO зэрэг бохирдуулагчдын хамгийн өндөр
              утгыг авна
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-green-200">
            <div className="text-2xl mb-2"></div>
            <h3 className="font-mongolian font-bold text-gray-900 mb-1">
              Шинэчлэлт
            </h3>
            <p className="text-sm text-gray-600">
              Цаг бүр шинэчлэгдэж, одоогийн агаарын чанарыг харуулна
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-purple-200">
            <div className="text-2xl mb-2"></div>
            <h3 className="font-mongolian font-bold text-gray-900 mb-1">
              Олон улсын стандарт
            </h3>
            <p className="text-sm text-gray-600">
              EPA (Америкийн Байгаль орчны агентлаг)-ын стандартыг мөрдөнө
            </p>
          </div>
        </div>

        {/* AQI Levels (AQI түвшингүүд) */}
        <div className="space-y-3">
          {aqiLevels.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                selectedLevel === index
                  ? item.borderColor
                  : "border-transparent"
              }`}
              onClick={() =>
                setSelectedLevel(selectedLevel === index ? null : index)
              }
            >
              {/* Main card (Үндсэн карт) */}
              <div className="flex items-center gap-4 p-4">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm md:text-base shrink-0`}
                >
                  {item.range}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="font-mongolian font-bold text-gray-900 text-lg">
                      {item.level}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div
                  className={`text-2xl transition-transform duration-300 ${
                    selectedLevel === index ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </div>
              </div>

              {/* Expanded details (Дэлгэрэнгүй мэдээлэл) */}
              {selectedLevel === index && (
                <div
                  className={`${item.bgColor} p-4 border-t-2 ${item.borderColor} animate-in slide-in-from-top duration-300`}
                >
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {item.details}
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm font-bold text-gray-900 mb-2">
                      Зөвлөмж:
                    </p>
                    <p className="text-sm text-gray-700">{item.advice}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tip (Доод зөвлөмж) */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
          <p className="text-sm text-blue-900">
            <strong> Зөвлөгөө:</strong> AQI утгыг өдөр бүр шалгаж, өөрийн болон
            гэр бүлийнхээ эрүүл мэндийг хамгаалаарай. Ялангуяа өглөө, орой гадаа
            гарахын өмнө шалгах нь зүйтэй.
          </p>
        </div>
      </div>
    </section>
  );
}
