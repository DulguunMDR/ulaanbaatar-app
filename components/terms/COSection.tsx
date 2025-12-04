// ============================================
// ФАЙЛ: components/terms/COSection.tsx
// Файлын байршил: components/terms/COSection.tsx
// ============================================

"use client";

import { useState } from "react";

export function COSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const levels = [
    {
      range: "0-4.4",
      label: "Аюулгүй",
      color: "bg-green-100 border-green-300 text-green-800",
      description: "Эрүүл мэндэд сөрөг нөлөөгүй.",
    },
    {
      range: "4.4-9.4",
      label: "Дунд зэрэг",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      description: "Зүрхний өвчтэй хүмүүст нөлөөлж болно.",
    },
    {
      range: "9.4-15.4",
      label: "Эрүүл мэндэд муу",
      color: "bg-orange-100 border-orange-300 text-orange-800",
      description: "Толгой өвдөх, ядрах шинж тэмдэг гарна.",
    },
    {
      range: "15.4+",
      label: "Аюултай - Амь насанд аюултай!",
      color: "bg-red-100 border-red-400 text-red-900",
      description:
        "Ухаан алдах, нас баралт хүртэл үүсч болно. Яаралтай арга хэмжээ авах!",
    },
  ];

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-300">
        {/* Анхааруулга (Warning Banner) */}
        <div className="bg-orange-600 text-white rounded-lg p-4 mb-6">
          <p className="font-bold text-center text-lg">
            АМЬ НАСАНД АЮУЛТАЙ ХИЙ
          </p>
          <p className="text-center text-sm mt-1">
            Нүүрстөрөгчийн дутуу исэл нь үнэргүй, өнгөгүй
          </p>
        </div>

        {/* Гарчиг (Header) */}
        <div className="border-b border-red-200 pb-4 mb-6">
          <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-2">
            CO
          </h2>
          <p className="text-lg text-gray-700 font-semibold">
            Нүүрстөрөгчийн дутуу исэл
          </p>
          <p className="text-sm text-gray-500 mt-1">Carbon Monoxide</p>
        </div>

        {/* Тодорхойлолт (Definition) */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Тодорхойлолт
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Нүүрстөрөгчийн дутуу исэл (CO) нь түлш бүрэн шатаагүй үед үүсдэг
            <strong className="text-orange-700">
              {" "}
              үнэргүй, өнгөгүй, хорт хий
            </strong>{" "}
            юм. Энэ нь хамгийн аюултай бохирдуулагчдын нэг бөгөөд хүний
            мэдрэхгүй байхад амь насанд аюул учруулж болно.
          </p>
          <div className="bg-red-100 rounded-lg p-4 border-l-4 border-orange-600">
            <p className="text-sm text-orange-900 font-semibold">
              CO нь цусан дахь хүчилтөрөгчийг орлож, биеийн эд эрхтнүүдэд
              хүчилтөрөгч хүргэхэд саад болдог. Энэ нь тархи, зүрх зэрэг чухал
              эрхтнүүдийг гэмтээж, амь насанд аюултай.
            </p>
          </div>
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
                className={`${
                  level.color
                } border-2 rounded-lg p-4 transition-all duration-300 ${
                  index === levels.length - 1 ? "ring-2 ring-orange-500" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">
                      {level.range} ppm - {level.label}
                    </p>
                    <p className="text-sm opacity-90">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            * ppm = parts per million (саяны хэсэг)
          </p>
        </div>

        {/* Эх үүсвэр (Sources) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("sources")}
            className="w-full bg-white rounded-lg p-4 border border-red-200 hover:border-red-300 transition-all duration-300 text-left"
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
            <div className="mt-3 bg-white rounded-lg p-4 border border-red-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Автомашины яндан:</strong> Битүү гаражид хөдөлгүүр
                    ажиллуулах
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Зуух, пич:</strong> Яндан муу, агааржуулалт
                    хангалтгүй
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Халаалтын систем:</strong> Нүүрсээр халаах буруу
                    хийгдсэн зуух
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">▸</span>
                  <span>
                    <strong>Газын зуух, хийн тогоо:</strong> Битүү өрөөнд
                    ашиглах
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Улаанбаатарт (In Ulaanbaatar) */}
        <div className="bg-red-100 rounded-lg p-5 mb-6 border-l-4 border-orange-600">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Улаанбаатар хотод
          </h3>
          <div className="space-y-3">
            <p className="text-gray-800 text-sm leading-relaxed">
              Өвлийн улиралд зуух, пичний утаа, автомашины яндангийн хийнээс
              CO-ийн хэмжээ өндөр байдаг. Битүү орчинд түлш түлдэг гэр
              хорооллууд илүү эрсдэлтэй байна.
            </p>
            <div className="bg-white/70 rounded p-3">
              <p className="text-xs text-gray-600 mb-2">
                <strong>Өндөр эрсдэлтэй нөхцөл:</strong>
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Агааржуулалтгүй гэрт зуух, пич түлэх</li>
                <li>• Битүү гаражид машины хөдөлгүүр ажиллуулах</li>
                <li>• Яндан буруу хийгдсэн эсвэл бітүүрсэн</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Хордлогын шинж тэмдэг (Poisoning Symptoms) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("symptoms")}
            className="w-full bg-orange-600 text-white rounded-lg p-4 hover:bg-orange-700 transition-all duration-300 text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                CO хордлогын шинж тэмдэг - ЗААВАЛ МЭДЭХ!
              </h3>
              <span className="text-white font-bold text-xl">
                {expandedSection === "symptoms" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedSection === "symptoms" && (
            <div className="mt-3 bg-white rounded-lg p-4 border-2 border-red-300 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-4">
                <div className="bg-orange-50 rounded p-3">
                  <p className="font-semibold text-orange-900 mb-2 text-sm">
                    Бага хордлого (богино хугацаа):
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Толгой өвдөх (ханиад шиг мэт мэдрэмж)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Эргэлзэх, дотор муухайрах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Сул дорой, ядарсан мэдрэмж</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Харах муудах, бүдгэрч байх</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded p-3 border-2 border-red-400">
                  <p className="font-semibold text-orange-900 mb-2 text-sm">
                    Хүнд хордлого (яаралтай тусламж шаардлагатай!):
                  </p>
                  <ul className="space-y-1 text-sm text-orange-800">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span className="font-semibold">
                        Ухаан алдах, мэдрэл тогтворгүй болох
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span className="font-semibold">
                        Амьсгал авахад хүндрэх, цээж чангарах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span className="font-semibold">Татаж чирэх, таталт</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1 font-bold">•</span>
                      <span className="font-semibold">
                        Нас барах эрсдэл өндөр
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Яаралтай арга хэмжээ (Emergency Actions) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("emergency")}
            className="w-full bg-orange-600 text-white rounded-lg p-4 hover:bg-orange-700 transition-all duration-300 text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                CO хордлого сэжиглэвэл юу хийх вэ?
              </h3>
              <span className="text-white font-bold text-xl">
                {expandedSection === "emergency" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedSection === "emergency" && (
            <div className="mt-3 bg-white rounded-lg p-4 border-2 border-orange-300 animate-in fade-in slide-in-from-top-2 duration-300">
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3 p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                  <span className="text-orange-700 font-bold text-lg">1.</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Шуурхай гадагш гар
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Цонх хаалга нээж, шинэ агаар авах
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                  <span className="text-orange-700 font-bold text-lg">2.</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      103 дугаарт залгах
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Түргэн тусламж дуудах
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                  <span className="text-orange-700 font-bold text-lg">3.</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Галын эх үүсвэрийг унтраах
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Зуух, пич, машины хөдөлгүүр унтраах
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                  <span className="text-orange-700 font-bold text-lg">4.</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Тэнд буцаж орохгүй байх
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Мэргэжилтэн шалгаж, аюулгүй гэтэл орохгүй
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Урьдчилан сэргийлэх (Prevention) */}
        <div className="bg-white rounded-lg p-5 border-2 border-red-300">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
            <span className="text-orange-600"></span>
            Хэрхэн урьдчилан сэргийлэх вэ?
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>CO мэдрүүлэгч хэрэгсэл суулгах</strong> - Унтлагын өрөө,
                зуухны ойролцоо
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>Зуухны яндан жилд 2 удаа цэвэрлүүлэх</strong> - Өвөл
                ирэхийн өмнө болон дундуур
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>Өдөр бүр агааржуулах</strong> - Өглөө, орой 10-15 минут
                цонх нээх
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>Автомашин битүү гаражид халаахгүй байх</strong> -
                Гаражийн хаалга нээх
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>Унтахын өмнө зуухны гал унтраах</strong> - Шөнийн галыг
                холсдохгүй байх
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-700 font-bold">✓</span>
              <span>
                <strong>Газын зуух зөв ашиглах</strong> - Заавар дагаж, цонх
                нээлттэй байлгах
              </span>
            </div>
          </div>
        </div>

        {/* Эцсийн анхааруулга */}
        <div className="mt-6 bg-orange-600 text-white rounded-lg p-4 text-center">
          <p className="text-sm">
            CO мэдрэгч хэрэгсэл таны болон гэр бүлийнхээ амь насыг аврах
            боломжтой.
          </p>
        </div>
      </div>
    </section>
  );
}
