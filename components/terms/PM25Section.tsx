// ============================================
// ФАЙЛ: components/terms/PM25Section.tsx
// Файлын байршил: components/terms/PM25Section.tsx
// ============================================

"use client";

import { useState } from "react";

export function PM25Section() {
  const [showComparison, setShowComparison] = useState(false);

  const levels = [
    {
      range: "0-12",
      level: "Аюулгүй",
      color: "bg-green-500",
      impact: "Эрүүл мэндэд ямар ч эрсдэлгүй",
    },
    {
      range: "12-35",
      level: "Дунд",
      color: "bg-yellow-400",
      impact: "Мэдрэмтгий хүмүүст жижиг нөлөөтэй",
    },
    {
      range: "35-55",
      level: "Эрүүл мэндэд сөрөг",
      color: "bg-orange-500",
      impact: "Хүүхэд, настайчуудад сөрөг",
    },
    {
      range: "55-150",
      level: "Хортой",
      color: "bg-red-500",
      impact: "Бүх хүмүүст хортой нөлөөтэй",
    },
    {
      range: "150-250",
      level: "Маш хортой",
      color: "bg-purple-600",
      impact: "Ноцтой эрүүл мэндийн эрсдэл",
    },
    {
      range: "250+",
      level: "Аюултай",
      color: "bg-red-900",
      impact: "Эмнэлгийн тусламж шаардлагатай",
    },
  ];

  const sources = [
    { name: "Нүүрс түлэх", icon: "", percentage: "40%" },
    { name: "Автомашины яндан", icon: "", percentage: "30%" },
    { name: "Үйлдвэрийн утаа", icon: "", percentage: "20%" },
    { name: "Тоос шороо", icon: "", percentage: "10%" },
  ];

  return (
    <section className="mb-10">
      <div className="bg-linear-to-br from-gray-50 to-red-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl"></span>
          <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900">
            PM2.5 (Нарийн тоосонцор)
          </h2>
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          <strong>Particulate Matter 2.5 (Нарийн тоосонцор)</strong> - 2.5
          микрон буюу түүнээс бага хэмжээтэй тоосонцор. Маш жижиг учраас
          амьсгалын замаар уушгинд шууд нэвтэрч, эрүүл мэндэд ноцтой хортой.
        </p>

        {/* Size comparison (Хэмжээний харьцуулалт) */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mongolian font-bold text-gray-900 text-lg">
              Хэмжээний харьцуулалт
            </h3>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              {showComparison ? "Хураах" : "Харах"}
            </button>
          </div>

          {showComparison && (
            <div className="space-y-3 animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-bold text-gray-900">Хүний үс</p>
                  <p className="text-sm text-gray-600">
                    ~70 микрон (PM2.5-аас 28 дахин том)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-bold text-gray-900">Элсний ширхэг</p>
                  <p className="text-sm text-gray-600">
                    ~90 микрон (PM2.5-аас 36 дахин том)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-2 border-red-200">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-bold text-red-900">PM2.5</p>
                  <p className="text-sm text-red-700">
                    2.5 микрон (Нүдээр үл харагдах, уушгинд нэвтрэх)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sources (Эх үүсвэрүүд) */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
          <h3 className="font-mongolian font-bold text-gray-900 text-lg mb-4">
            Үүсэх эх үүсвэрүүд
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sources.map((source, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{source.icon}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">
                  {source.name}
                </p>
                <p className="text-xs text-gray-600">{source.percentage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Levels (Түвшингүүд) */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
          <h3 className="font-mongolian font-bold text-gray-900 text-lg mb-4">
            Хэмжих түвшингүүд
          </h3>
          <div className="space-y-2">
            {levels.map((level, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}
                >
                  {level.range}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">
                    {level.level}
                  </p>
                  <p className="text-xs text-gray-600">{level.impact}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            <strong>Хэмжих нэгж:</strong> μg/m³ (микрограмм/шоо метр)
          </p>
        </div>

        {/* Health effects (Эрүүл мэндэд үзүүлэх нөлөө) */}
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
          <div className="flex items-start gap-3">
            <span className="text-3xl shrink-0"></span>
            <div>
              <h3 className="font-mongolian font-bold text-red-900 text-lg mb-3">
                Эрүүл мэндэд үзүүлэх нөлөө
              </h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Зүрхний өвчин, цусны даралт нэмэгдэх</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Уушгины хорт хавдар, амьсгалын замын архаг өвчин</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Астма, бронхит, уушгины үрэвсэл</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Хүүхдийн тархи хөгжилд сөрөг нөлөө</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-sm text-red-900">
                  <strong> Онцгой эмзэг бүлэг:</strong> Хүүхэд, жирэмсэн
                  эмэгтэйчүүд, өндөр настан, астма болон зүрхний өвчтэй хүмүүс
                  PM2.5-д илүү мэдрэмтгий байдаг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
