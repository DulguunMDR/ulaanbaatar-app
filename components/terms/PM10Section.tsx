// ============================================
// ФАЙЛ 1: components/terms/PM10Section.tsx
// Файлын байршил: components/terms/PM10Section.tsx
// ============================================

"use client";

import { useState } from "react";

export function PM10Section() {
  const [activeTab, setActiveTab] = useState<"info" | "sources" | "protection">(
    "info"
  );

  // Түвшний өгөгдөл (Level indicators)
  const levels = [
    { range: "0-54", label: "Сайн", color: "bg-green-500", width: "25%" },
    { range: "54-154", label: "Дунд", color: "bg-yellow-500", width: "40%" },
    { range: "154-254", label: "Муу", color: "bg-orange-500", width: "20%" },
    { range: "254+", label: "Аюултай", color: "bg-red-600", width: "15%" },
  ];

  // Эх үүсвэрүүд (Sources)
  const sources = [
    { icon: "", name: "Барилгын ажил", description: "Тоос шороо" },
    { icon: "", name: "Авто зам", description: "Дугуйн хуучирсан хэсэг" },
    { icon: "", name: "Хөдөө аж ахуй", description: "Хөрсний тоос" },
    { icon: "", name: "Үйлдвэрлэл", description: "Үйлдвэрийн утаа" },
  ];

  // Хамгаалах арга (Protection methods)
  const protectionTips = [
    {
      level: "0-54",
      tip: "Ердийн амьдралын хэв маяг",
      color: "text-green-700",
    },
    {
      level: "54-154",
      tip: "Гадаа удаан хугацаа өнгөрөөхөөс зайлсхийх",
      color: "text-yellow-700",
    },
    {
      level: "154-254",
      tip: "Амны хаалт зүүх, цонх хаах",
      color: "text-orange-700",
    },
    {
      level: "254+",
      tip: "Гадуур гарахгүй байх, агaar цэвэршүүлэгч ашиглах",
      color: "text-red-700",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
        {/* Header section */}
        <div className="flex items-start gap-4 mb-6">
          <div className="text-5xl">🌫️</div>
          <div className="flex-1">
            <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              PM10 - Бүдүүн тоосонцор
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Particulate Matter 10 микрон хүртэлх хэмжээтэй тоосонцор
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
                ? "bg-gray-700 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Мэдээлэл
          </button>
          <button
            onClick={() => setActiveTab("sources")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "sources"
                ? "bg-gray-700 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Эх үүсвэр
          </button>
          <button
            onClick={() => setActiveTab("protection")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "protection"
                ? "bg-gray-700 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Хамгаалалт
          </button>
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-xl p-6 shadow-inner">
          {activeTab === "info" && (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-semibold text-gray-800">Хэмжих нэгж</p>
                  <p className="text-gray-600">μg/m³ (микрограмм/шоо метр)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-semibold text-gray-800">Хэмжээ</p>
                  <p className="text-gray-600">
                    10 микрон (0.01 мм) хүртэлх жижиг хэсэгчлэл
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl"></span>
                <div>
                  <p className="font-semibold text-gray-800">
                    Эрүүл мэндийн нөлөө
                  </p>
                  <p className="text-gray-600">
                    Ханиад, нүдний цочрол, амьсгалын замын өвчин үүсгэнэ
                  </p>
                </div>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 mt-4">
                <p className="text-sm text-orange-900">
                  <strong> Онцгой анхаарал:</strong> Хүүхэд, өндөр настан, астма
                  өвчтэй хүмүүст илүү хортой. PM2.5-аас том боловч амьсгалын
                  дээд замд бохирдол үүсгэнэ.
                </p>
              </div>
            </div>
          )}

          {activeTab === "sources" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sources.map((source, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{source.icon}</span>
                    <p className="font-semibold text-gray-800">{source.name}</p>
                  </div>
                  <p className="text-sm text-gray-600 ml-12">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "protection" && (
            <div className="space-y-3">
              {protectionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200"
                >
                  <span className="font-bold text-gray-700 min-w-[80px]">
                    {tip.level} μg/m³
                  </span>
                  <p className={`${tip.color} font-medium`}>{tip.tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Comparison with PM2.5 */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong> PM2.5-тай харьцуулбал:</strong> PM10 нь PM2.5-аас 4 дахин
            том. PM2.5 уушгинд хүрч чадах бол, PM10 амьсгалын дээд замд (хамар,
            хоолой) үлдэнэ.
          </p>
        </div>
      </div>
    </section>
  );
}
