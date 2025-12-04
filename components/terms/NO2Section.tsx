// ============================================
// ФАЙЛ: components/terms/NO2Section.tsx
// Файлын байршил: components/terms/NO2Section.tsx
// ============================================

"use client";

import { useState } from "react";

export function NO2Section() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const levels = [
    {
      range: "0-53",
      label: "Аюулгүй",
      color: "bg-green-100 border-green-300 text-green-800",
      description:
        "Эрүүл мэндэд аюулгүй түвшин. Гадаа чөлөөтэй үйл ажиллагаа явуулж болно.",
    },
    {
      range: "53-100",
      label: "Дунд зэрэг",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      description:
        "Амьсгалын мэдрэмтгий хүмүүст бага зэргийн цухуйлт үүсч болно.",
    },
    {
      range: "100-360",
      label: "Эрүүл мэндэд муу",
      color: "bg-orange-100 border-orange-300 text-orange-800",
      description: "Амьсгалын өвчтэй хүмүүс болгоомжтой байх шаардлагатай.",
    },
    {
      range: "360+",
      label: "Аюултай",
      color: "bg-red-100 border-red-300 text-red-800",
      description:
        "Бүх хүн өртөх эрсдэлтэй. Гадаа гарах хугацааг багасгах хэрэгтэй.",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200">
        {/* Гарчиг (Header) */}
        <div className="border-b border-yellow-200 pb-4 mb-6">
          <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-2">
            NO₂
          </h2>
          <p className="text-lg text-gray-700 font-semibold">
            Азотын давхар исэл
          </p>
          <p className="text-sm text-gray-500 mt-1">Nitrogen Dioxide</p>
        </div>

        {/* Тодорхойлолт (Definition) */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Тодорхойлолт
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Азотын давхар исэл нь автомашин, үйлдвэрийн шаталтын явцад үүсдэг
            хүрэн өнгөтэй бохирдуулагч хий юм. Энэ нь амьсгалын замын эсүүдийг
            гэмтээж, уушгины үрэвсэл үүсгэдэг. Астма болон бусад амьсгалын
            өвчнийг дордуулж, хүүхдийн уушгины хөгжилд сөрөг нөлөө үзүүлдэг.
          </p>
        </div>

        {/* Түвшин (Levels) */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Концентрацийн түвшин
          </h3>
          <div className="space-y-3">
            {levels.map((level, index) => (
              <div
                key={index}
                className={`${level.color} border-2 rounded-lg p-4 transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">
                      {level.range} ppb - {level.label}
                    </p>
                    <p className="text-sm opacity-90">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            * ppb = parts per billion (тэрбумын хэсэг)
          </p>
        </div>

        {/* Эх үүсвэр (Sources) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("sources")}
            className="w-full bg-white rounded-lg p-4 border border-yellow-200 hover:border-yellow-300 transition-all duration-300 text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-lg">
                Гол эх үүсвэр
              </h3>
              <span className="text-gray-500">
                {expandedSection === "sources" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedSection === "sources" && (
            <div className="mt-3 bg-white rounded-lg p-4 border border-yellow-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Автомашины яндан:</strong> Дизель болон бензин
                    хөдөлгүүр
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Үйлдвэрийн үйл ажиллагаа:</strong> Дулааны цахилгаан
                    станц, үйлдвэр
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Халаалтын систем:</strong> Нүүрс, газрын тос түлдэг
                    зуух
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Улаанбаатарт (In Ulaanbaatar) */}
        <div className="bg-yellow-100 rounded-lg p-5 mb-6 border-l-4 border-yellow-500">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            Улаанбаатар хотод
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed mb-3">
            Оргил цагуудад (07:00-09:00, 17:00-19:00) автомашины урсгал ихэсдэг
            тул NO₂-ийн түвшин мэдэгдэхүйц өндөр байна. Гол замуудын дагуух
            хороолол, хорооллууд илүү их өртдөг.
          </p>
          <div className="bg-white/70 rounded p-3">
            <p className="text-xs text-gray-600">
              <strong>Өндөр эрсдэлтэй бүс:</strong> Их тээврийн урсгалтай замын
              100 метрийн тойрогт амьдардаг хүмүүс
            </p>
          </div>
        </div>

        {/* Эрүүл мэндэд үзүүлэх нөлөө (Health Effects) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("health")}
            className="w-full bg-white rounded-lg p-4 border border-yellow-200 hover:border-yellow-300 transition-all duration-300 text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-lg">
                Эрүүл мэндэд үзүүлэх нөлөө
              </h3>
              <span className="text-gray-500">
                {expandedSection === "health" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedSection === "health" && (
            <div className="mt-3 bg-white rounded-lg p-4 border border-yellow-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-sm">
                    Богино хугацааны нөлөө:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Амьсгалын замын цочрол, ханиад</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Астмын доргилт</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Амьсгалахад хүндрэх</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-sm">
                    Урт хугацааны нөлөө:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Хүүхдийн уушгины хөгжил суларна</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Архаг амьсгалын өвчин үүсэх эрсдэл нэмэгдэнэ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Халдварт өвчинд өртөх эрсдэл өсдөг</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Зөвлөмж (Recommendations) */}
        <div className="bg-white rounded-lg p-5 border border-yellow-200">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Хамгаалах арга хэмжээ
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded">
              <span className="text-yellow-600 font-bold">1.</span>
              <span>
                Оргил цагуудад гол замын дагуух газарт цаг өнгөрөөхгүй байх
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded">
              <span className="text-yellow-600 font-bold">2.</span>
              <span>
                Нийтийн тээвэр ашиглах, хамтран зорчих замаар машины тоог
                багасгах
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded">
              <span className="text-yellow-600 font-bold">3.</span>
              <span>Астма, амьсгалын өвчтэй бол эмч зөвлөгөө авах</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
