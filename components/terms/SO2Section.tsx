// ============================================
// ФАЙЛ: components/terms/SO2Section.tsx
// Файлын байршил: components/terms/SO2Section.tsx
// ============================================

"use client";

import { useState } from "react";

export function SO2Section() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const levels = [
    {
      range: "0-35",
      label: "Аюулгүй",
      color: "bg-green-100 border-green-300 text-green-800",
      description: "Эрүүл мэндэд аюул учруулахгүй түвшин.",
    },
    {
      range: "35-75",
      label: "Дунд зэрэг",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      description: "Мэдрэмтгий хүмүүст бага зэргийн нөлөө үзүүлж болно.",
    },
    {
      range: "75-185",
      label: "Эрүүл мэндэд муу",
      color: "bg-orange-100 border-orange-300 text-orange-800",
      description: "Амьсгалын өвчтэй хүмүүст сөрөг нөлөө үзүүлнэ.",
    },
    {
      range: "185+",
      label: "Аюултай",
      color: "bg-red-100 border-red-300 text-red-800",
      description: "Бүх хүн амьсгалын замын цочролд өртөх эрсдэлтэй.",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
        {/* Гарчиг (Header) */}
        <div className="border-b border-purple-200 pb-4 mb-6">
          <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-2">
            SO₂
          </h2>
          <p className="text-lg text-gray-700 font-semibold">
            Хүхрийн давхар исэл
          </p>
          <p className="text-sm text-gray-500 mt-1">Sulfur Dioxide</p>
        </div>

        {/* Тодорхойлолт (Definition) */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Тодорхойлолт
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Хүхрийн давхар исэл нь хүхэр агуулсан түлш (нүүрс, түүхий тос)
            шатаахад үүсдэг өнгөгүй хий юм. Энэ нь амьсгалын замд хүчтэй цухуйлт
            үүсгэж, астмын доргилт, уушгины үрэвсэл бий болгодог. Агаар мандалд
            хүчиллэг бороо үүсгэх гол шалтгаан болдог.
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
            className="w-full bg-white rounded-lg p-4 border border-purple-200 hover:border-purple-300 transition-all duration-300 text-left"
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
            <div className="mt-3 bg-white rounded-lg p-4 border border-purple-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Нүүрсний халаалт:</strong> Гэр, орон сууц, дулааны
                    станц
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Үйлдвэрийн үйл ажиллагаа:</strong> Төмөр хайлуулах,
                    цахилгаан үйлдвэрлэл
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Галт уулын идэвхжил:</strong> Байгалийн эх үүсвэр
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Улаанбаатарт (In Ulaanbaatar) */}
        <div className="bg-purple-100 rounded-lg p-5 mb-6 border-l-4 border-purple-500">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Улаанбаатар хотод
          </h3>
          <div className="space-y-3">
            <p className="text-gray-800 text-sm leading-relaxed">
              Өвлийн улиралд (11-р сараас 3-р сар) нүүрсээр халаалт хийдэг тул
              SO₂-ийн хэмжээ мэдэгдэхүйц өндөр байна. Гэр хороолол, хашааны
              байшин ихтэй бүс нутагт онцгой анхаарал хандуулах шаардлагатай.
            </p>
            <div className="bg-white/70 rounded p-3">
              <p className="text-xs text-gray-600 mb-1">
                <strong>Улирлын харьцуулалт:</strong>
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>• Зун: 5-15 ppb</div>
                <div>• Өвөл: 40-100+ ppb</div>
              </div>
            </div>
          </div>
        </div>

        {/* Эрүүл мэндэд үзүүлэх нөлөө (Health Effects) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("health")}
            className="w-full bg-white rounded-lg p-4 border border-purple-200 hover:border-purple-300 transition-all duration-300 text-left"
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
            <div className="mt-3 bg-white rounded-lg p-4 border border-purple-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-sm">
                    Шууд нөлөө:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Амьсгалын замын цочрол, хоолой өвдөх</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Ханиад, амьсгал давчдах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Нүдний цочрол, нулимс гарах</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-sm">
                    Эрсдэлтэй бүлгүүд:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Астма, архаг амьсгалын өвчтэй хүмүүс</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Хүүхэд, өндөр настнууд</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Зүрхний өвчтэй иргэд</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Байгаль орчинд үзүүлэх нөлөө (Environmental Impact) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("environment")}
            className="w-full bg-white rounded-lg p-4 border border-purple-200 hover:border-purple-300 transition-all duration-300 text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-lg">
                Байгаль орчинд үзүүлэх нөлөө
              </h3>
              <span className="text-gray-500">
                {expandedSection === "environment" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedSection === "environment" && (
            <div className="mt-3 bg-white rounded-lg p-4 border border-purple-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Хүчиллэг бороо:</strong> Ургамал, ой мод гэмтээж,
                    газрын доорх ус бохирдуулна
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Барилга байгууламж:</strong> Металл, чулуун
                    гадаргууг зэврүүлнэ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>
                    <strong>Харагдах зай:</strong> Агаарын тунгалаг байдал
                    муудна
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Зөвлөмж (Recommendations) */}
        <div className="bg-white rounded-lg p-5 border border-purple-200">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Хамгаалах арга хэмжээ
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded">
              <span className="text-purple-600 font-bold">1.</span>
              <span>
                Өвлийн улиралд гадаа гарах хугацааг хязгаарлах, ялангуяа өглөө
                06:00-10:00 цагт
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded">
              <span className="text-purple-600 font-bold">2.</span>
              <span>Гэртээ цэвэр түлш хэрэглэх, зуухны галыг зөв асаах</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded">
              <span className="text-purple-600 font-bold">3.</span>
              <span>
                Амьсгалын өвчтэй бол гадаа алхахаас өмнө эм уух, маск өмсөх
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded">
              <span className="text-purple-600 font-bold">4.</span>
              <span>
                Гэртээ агааржуулагч, ургамал байршуулж агаарыг цэвэрлэх
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
