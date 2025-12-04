// ============================================
// ФАЙЛ: components/terms/HumiditySection.tsx
// Файлын байршил: components/terms/HumiditySection.tsx
// ============================================

"use client";

import { useState } from "react";

export function HumiditySection() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const humidityLevels = [
    {
      range: "0-30%",
      label: "Хуурай",
      icon: "",
      color: "bg-yellow-100 border-yellow-300",
      textColor: "text-yellow-800",
      description: "Агаар хэт хуурай. Арьс, хамар, хоолой хатна.",
      health: "Арьсны асуудал, амьсгалын замын цочрол",
      advice: "Чийгшүүлэгч ашиглах, ус их уух",
    },
    {
      range: "30-60%",
      label: "Тохиромжтой",
      icon: "",
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800",
      description: "Хүний биед хамгийн тааламжтай түвшин.",
      health: "Эрүүл мэндэд оновчтой, тав тухтай",
      advice: "Энэ түвшинг хадгалахыг эрмэлзээрэй",
    },
    {
      range: "60-80%",
      label: "Чийглэг",
      icon: "",
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800",
      description: "Агаар чийглэг. Халуунд амьсгалахад хүндрэлтэй.",
      health: "Хэт халалт мэдрэгдэх, амьсгал давчдах",
      advice: "Агааржуулалт сайжруулах, салхивч ашиглах",
    },
    {
      range: "80-100%",
      label: "Маш чийглэг",
      icon: "",
      color: "bg-indigo-100 border-indigo-300",
      textColor: "text-indigo-800",
      description: "Агаар ханасан. Манан, бороо орох магадлал өндөр.",
      health: "Мөөгөнцөр, хөгц үүсэх, амьсгалд хүндрэх",
      advice: "Чийгшилтэй газар агааржуулах, чийгшилт арилгагч ашиглах",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
        {/* Гарчиг (Header) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl"></div>
          <div>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900">
              Чийгшил
            </h2>
            <p className="text-sm text-gray-500">
              Humidity / Харьцангуй чийгшил
            </p>
          </div>
        </div>

        {/* Тайлбар (Description) */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Чийгшил буюу харьцангуй чийгшил (Relative Humidity) гэдэг нь агаарт
          агуулагдах усны уурын хэмжээ юм. Тухайн температурт агаар хамгийн
          ихдээ агуулж чадах чийгний хэдэн хувь байгааг харуулна. Хувиар (%)
          илэрхийлэгддэг.
        </p>

        {/* Түвшин (Levels) */}
        <div className="space-y-3 mb-6">
          {humidityLevels.map((level, index) => (
            <div
              key={index}
              className={`${
                level.color
              } border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                selectedLevel === index
                  ? "ring-4 ring-indigo-400 shadow-lg"
                  : ""
              }`}
              onClick={() =>
                setSelectedLevel(selectedLevel === index ? null : index)
              }
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{level.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg ${level.textColor}`}>
                      {level.range} - {level.label}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    {level.description}
                  </p>

                  {/* Дэлгэрэнгүй мэдээлэл (Expanded details) */}
                  {selectedLevel === index && (
                    <div className="mt-3 pt-3 border-t border-current/20 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="bg-white/50 rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          Эрүүл мэндэд үзүүлэх нөлөө:
                        </p>
                        <p className="text-sm text-gray-600">{level.health}</p>
                      </div>
                      <div className="bg-white/50 rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          Зөвлөмж:
                        </p>
                        <p className="text-sm text-gray-600">{level.advice}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Чийгшилийн визуал индикатор (Visual humidity indicator) */}
        <div className="bg-white/70 rounded-lg p-4 border border-indigo-200 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span></span>
            Чийгшлийн шкал (Humidity scale)
          </h3>
          <div className="relative h-8 bg-gradient-to-r from-yellow-200 via-green-200 via-blue-200 to-indigo-300 rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-semibold text-gray-700">
              <span>0%</span>
              <span>30%</span>
              <span>60%</span>
              <span>80%</span>
              <span>100%</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
            <span> Хуурай</span>
            <span> Эрүүл</span>
            <span> Чийглэг</span>
            <span> Их чийглэг</span>
          </div>
        </div>

        {/* Нэмэлт мэдээлэл (Additional info) */}
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h3 className="font-semibold text-gray-900 mb-3">
            Температур ба чийгшлийн хамаарал
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            Халуун агаар их усны ууp агуулж чаддаг. Иймээс зуны улиралд 60%
            чийгшил өвлийн 60%-аас илүү чийглэг мэдрэгддэг. Мөн халуун + өндөр
            чийгшил нь хүнийг илүү халаах шалтгаан болдог (heat index).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3">
              <p className="font-semibold text-purple-800">Өвөл (−20°C)</p>
              <p className="text-gray-600">40% чийгшил = тохиромжтой</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-semibold text-purple-800">Зун (+30°C)</p>
              <p className="text-gray-600">50% чийгшил = халуун мэдрэгдэнэ</p>
            </div>
          </div>
        </div>

        {/* Зөвлөгөө (General advice) */}
        <div className="mt-4 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <p className="text-sm text-indigo-900">
            <span className="font-semibold"> Ерөнхий зөвлөгөө:</span> Гэртээ
            чийгшлийг хэмжих багаж (hygrometer) байлгавал эрүүл орчинг
            хадгалахад тустай. Идэвхтэй чийгшил: 40-50% нь оновчтой.
          </p>
        </div>
      </div>
    </section>
  );
}
