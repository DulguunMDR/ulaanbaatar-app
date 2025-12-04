// ============================================
// ФАЙЛ: components/terms/WindSpeedSection.tsx
// Файлын байршил: components/terms/WindSpeedSection.tsx
// ============================================

"use client";

import { useState } from "react";

export function WindSpeedSection() {
  const [selectedSpeed, setSelectedSpeed] = useState<number | null>(null);

  const windLevels = [
    {
      range: "0-5",
      label: "Зөөлөн, тайван",
      icon: "",
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800",
      description: "Модны навч аяархан хөдөлнө. Гадаа явахад тааламжтай.",
      beaufort: "Beaufort 0-3",
      kmh: "0-18 км/ц",
    },
    {
      range: "6-10",
      label: "Дунд зэрэг",
      icon: "",
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800",
      description: "Жижиг мөчрүүд хөдөлнө. Туг, далбаа сэгсэрнэ.",
      beaufort: "Beaufort 4-5",
      kmh: "19-38 км/ц",
    },
    {
      range: "11-15",
      label: "Хүчтэй салхи",
      icon: "",
      color: "bg-orange-100 border-orange-300",
      textColor: "text-orange-800",
      description: "Том мөчрүүд хөдөлнө. Шүхэр ашиглахад хүндрэлтэй.",
      beaufort: "Beaufort 6-7",
      kmh: "39-61 км/ц",
    },
    {
      range: "16+",
      label: "Маш хүчтэй, шуурга",
      icon: "",
      color: "bg-red-100 border-red-300",
      textColor: "text-red-800",
      description: "Модны мөчир хугарна. Явахад хүндрэлтэй. Аюултай!",
      beaufort: "Beaufort 8+",
      kmh: "62+ км/ц",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
        {/* Гарчиг (Header) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl"></div>
          <div>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900">
              Салхины хурд
            </h2>
            <p className="text-sm text-gray-500">Wind Speed</p>
          </div>
        </div>

        {/* Тайлбар (Description) */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Салхи нь агаарын масс хөдөлж буй хурд юм. Цаг агаарт томоохон нөлөө
          үзүүлж, агаарын чанарыг тараах, температурыг өөрчлөх үүрэгтэй.
          Метр/секунд (м/с) хэмжээсээр хэмжигддэг.
        </p>

        {/* Түвшин (Levels) */}
        <div className="space-y-3 mb-6">
          {windLevels.map((level, index) => (
            <div
              key={index}
              className={`${
                level.color
              } border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                selectedSpeed === index ? "ring-4 ring-cyan-400 shadow-lg" : ""
              }`}
              onClick={() =>
                setSelectedSpeed(selectedSpeed === index ? null : index)
              }
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{level.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg ${level.textColor}`}>
                      {level.range} м/с - {level.label}
                    </h3>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                      {level.kmh}
                    </span>
                  </div>

                  {/* Дэлгэрэнгүй мэдээлэл (Expanded details) */}
                  {selectedSpeed === index && (
                    <div className="mt-3 pt-3 border-t border-current/20 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-gray-700 mb-2">
                        {level.description}
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        {level.beaufort} шкалаар
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Нэмэлт мэдээлэл (Additional info) */}
        <div className="bg-white/70 rounded-lg p-4 border border-cyan-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span></span>
            Хэмжих нэгж (Measurement units)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-cyan-50 rounded-lg p-3">
              <p className="font-semibold text-cyan-800">1 м/с</p>
              <p className="text-gray-600">= 3.6 км/ц</p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-3">
              <p className="font-semibold text-cyan-800">10 м/с</p>
              <p className="text-gray-600">= 36 км/ц</p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-3">
              <p className="font-semibold text-cyan-800">20 м/с</p>
              <p className="text-gray-600">= 72 км/ц (шуурга)</p>
            </div>
          </div>
        </div>

        {/* Зөвлөмж (Tips) */}
        <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-900">
            <span className="font-semibold"> Зөвлөгөө:</span> Салхины хурд 15
            м/с-аас их байвал гадаа явахдаа болгоомжтой байж, хүүхдүүдийг гадаа
            гаргахгүй байх нь зүйтэй.
          </p>
        </div>
      </div>
    </section>
  );
}
