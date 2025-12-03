// ============================================
// ФАЙЛ 2: components/terms/OzoneSection.tsx
// Файлын байршил: components/terms/OzoneSection.tsx
// ============================================

"use client";

import { useState } from "react";

export function OzoneSection() {
  const [activeTab, setActiveTab] = useState<"info" | "formation" | "effects">(
    "info"
  );

  // Түвшний өгөгдөл (Level indicators)
  const levels = [
    { range: "0-54", label: "Сайн", color: "bg-green-500", width: "35%" },
    { range: "54-70", label: "Дунд", color: "bg-yellow-500", width: "25%" },
    { range: "70-85", label: "Муу", color: "bg-orange-500", width: "20%" },
    { range: "85+", label: "Аюултай", color: "bg-red-600", width: "20%" },
  ];

  // Үүсэх механизм (Formation process)
  const formationSteps = [
    {
      step: 1,
      icon: "🚗",
      text: "Машин, үйлдвэрээс NOx, VOC ялгарна",
      color: "text-gray-700",
    },
    {
      step: 2,
      icon: "☀️",
      text: "Нарны хурц гэрэл (UV туяа)",
      color: "text-yellow-600",
    },
    { step: 3, icon: "⚗️", text: "Химийн урвал үүснэ", color: "text-blue-600" },
    { step: 4, icon: "☁️", text: "Озон (O₃) үүснэ", color: "text-purple-600" },
  ];

  // Эрүүл мэндийн нөлөө (Health effects)
  const healthEffects = [
    {
      icon: "👁️",
      effect: "Нүдний цочрол",
      severity: "Дунд",
      color: "bg-yellow-100",
    },
    {
      icon: "🫁",
      effect: "Уушгины үрэвсэл",
      severity: "Хүнд",
      color: "bg-orange-100",
    },
    {
      icon: "😮‍💨",
      effect: "Астма дордох",
      severity: "Хүнд",
      color: "bg-red-100",
    },
    {
      icon: "🤧",
      effect: "Амьсгал хүндрэх",
      severity: "Дунд",
      color: "bg-yellow-100",
    },
  ];

  // Улирлын хувилбар (Seasonal variation)
  const seasonalData = [
    { season: "🌸 Хавар", level: "Дунд", description: "Озон эхэлж нэмэгдэнэ" },
    {
      season: "☀️ Зун",
      level: "Өндөр",
      description: "Хамгийн их түвшин (халуун, нартай)",
    },
    { season: "🍂 Намар", level: "Дунд", description: "Аажмаар буурна" },
    {
      season: "❄️ Өвөл",
      level: "Бага",
      description: "Хамгийн бага (нар багатай)",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
        {/* Header section */}
        <div className="flex items-start gap-4 mb-6">
          <div className="text-5xl">☀️</div>
          <div className="flex-1">
            <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              O₃ - Озон (Газрын гадаргын)
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Ozone - Нарны гэрэлтэй үүсдэг химийн бодис
            </p>
          </div>
        </div>

        {/* Visual scale indicator */}
        <div className="mb-6">
          <div className="flex h-8 rounded-lg overflow-hidden shadow-inner mb-2">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className={`${level.color} flex items-center justify-center text-white text-xs font-bold transition-all hover:opacity-80`}
                style={{ width: level.width }}
                title={level.range}
              >
                {level.range}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Аюулгүй</span>
            <span>Аюултай →</span>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "info"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
          >
            📊 Мэдээлэл
          </button>
          <button
            onClick={() => setActiveTab("formation")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "formation"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
          >
            ⚗️ Үүсэх үйл явц
          </button>
          <button
            onClick={() => setActiveTab("effects")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "effects"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
          >
            ⚕️ Эрүүл мэнд
          </button>
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-xl p-6 shadow-inner">
          {activeTab === "info" && (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <p className="font-semibold text-gray-800">Хэмжих нэгж</p>
                  <p className="text-gray-600">
                    ppb (parts per billion - тэрбумын хэсэг)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <p className="font-semibold text-gray-800">Химийн томьёо</p>
                  <p className="text-gray-600">
                    O₃ (гурван хүчилтөрөгчийн атом)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-semibold text-gray-800">Огцом цаг</p>
                  <p className="text-gray-600">
                    Үд дунд 12:00-17:00 цагт хамгийн өндөр байна
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-900">
                  <strong>ℹ️ Сонирхолтой:</strong> Стратосферийн озон (дээд
                  давхарга) биднийг хамгаална. Харин газрын гадарга дээрх озон
                  (доод давхарга) хортой!
                </p>
              </div>

              {/* Seasonal variation mini section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {seasonalData.map((season, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-lg border border-blue-100 text-center"
                  >
                    <p className="text-2xl mb-1">
                      {season.season.split(" ")[0]}
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      {season.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "formation" && (
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Озон нь шууд ялгардаггүй, харин химийн урвалаар үүснэ:
              </p>
              {formationSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                    {step.step}
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                  <p className={`${step.color} font-medium`}>{step.text}</p>
                </div>
              ))}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-yellow-900">
                  <strong>⚠️ Анхаарах:</strong> Зуны халуун, нартай өдрүүдэд
                  озоны түвшин огцом өснө. Үд дундын цагаар гадаа явахаас
                  зайлсхийх хэрэгтэй!
                </p>
              </div>
            </div>
          )}

          {activeTab === "effects" && (
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Өндөр түвшний озон дараах эрүүл мэндийн асуудал үүсгэнэ:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {healthEffects.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} p-4 rounded-lg border-2 border-gray-200 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.effect}
                        </p>
                        <p className="text-xs text-gray-600">
                          Ноцтой байдал: {item.severity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4 mt-4">
                <p className="text-sm text-red-900 mb-2">
                  <strong>🚨 Эмзэг бүлэг:</strong>
                </p>
                <ul className="text-sm text-red-800 space-y-1 ml-4">
                  <li>• Астма өвчтэй хүмүүс</li>
                  <li>• Хүүхдүүд (уушиг хөгжиж байгаа)</li>
                  <li>• Өндөр настнууд</li>
                  <li>• Гадаа ажилладаг хүмүүс</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Protection tips */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            🛡️ Хамгаалах аргууд:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>• Үд дундын 12:00-17:00 цагт гадуур гарахаас зайлсхийх</li>
            <li>• Зуны халуун өдрүүдэд гадаа дасгал хийхгүй байх</li>
            <li>• Цонхоо хааж, дотор байх (өндөр түвшинд)</li>
            <li>• Озоны мэдээллийг өглөө шалгах</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
