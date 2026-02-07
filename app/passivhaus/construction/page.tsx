// app/passivhaus/construction/page.tsx
// Файлын байршил: app/passivhaus/construction/page.tsx
// Барилгын процессын хуудас

import Link from "next/link";

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-slate-600 hover:text-slate-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Passivhaus гарын авлага руу буцах
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-semibold tracking-widest text-slate-600 uppercase mb-2">
              08 — Барилгын процесс
            </div>
            <h1 className="font-mongolian text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Алхам Алхмаар
              <br />
              Барих Заавар
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-500 to-gray-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Төлөвлөлтөөс эхлэн дуустал
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <div className="bg-white border-l-4 border-slate-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Барилгын ерөнхий хугацаа
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Passivhaus барих нь ердийн барилгаас 20-30% илүү удаан болно.
                Шалтгаан нь дулаалгын зузаан, битүүмжлэлийн анхаарал, тестүүд
                юм. Гэхдээ энэ бол чанарын баталгаа.
              </p>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        12-18
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-slate-900 mb-2">
                      Барилгын нийт хугацаа
                    </h3>
                    <p className="font-mongolian text-sm text-slate-800 leading-relaxed">
                      100м² байшин: 12-18 сар (Төлөвлөлт: 2-3 сар, Барилга: 6-10
                      сар, Тест ба засвар: 2-3 сар, Дотоод засал: 2-3 сар)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 1: Planning & Design */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 1: Төлөвлөлт ба зураг төсөл
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-mongolian font-semibold text-blue-900 text-lg">
                  Хугацаа: 2-3 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Газар сонгох:</strong> Өмнө зүгт харсан,
                        салхинаас хамгаалагдсан, нарны гэрэл сайн орох газар
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Архитектор олох:</strong> Passivhaus туршлагатай
                        архитектор. Гадаадын зөвлөх авч болно.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>PHPP тооцоолол:</strong> Passivhaus Planning
                        Package программ ашиглан энергийн хэрэгцээ тооцоолох
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Зураг төсөл:</strong> Дулаан гүүргүй зураг,
                        цонхны байршил, агааржуулалтын хоолой
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        05
                      </span>
                      <span>
                        <strong>Төсөвлөгөө:</strong> Материал, ажлын хөлс, тест,
                        нөөц мөнгө (10-15%)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-mongolian font-semibold text-yellow-900 mb-1 text-sm">
                        Зардал
                      </h4>
                      <p className="font-mongolian text-xs text-yellow-800">
                        Зураг төсөл: ₮5,000,000-10,000,000, PHPP тооцоолол:
                        ₮2,000,000-3,000,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 2: Foundation */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 2: Суурь барилга
            </h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-mongolian font-semibold text-orange-900 text-lg">
                  Хугацаа: 1-2 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Газар гүнзгийрүүлэлт:</strong> Монголын
                        хөлдөлтийн гүн (1.5-2.0м) хүртэл
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Суурийн дулаалга:</strong> XPS 300-400мм суурийн
                        доор болон хажууд
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Төмөр бетон цутгах:</strong> Дулаан гүүргүй
                        холбоосууд ашиглах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Битүүмжлэл:</strong> Ус нэвтрэлтээс хамгаалах
                        хальс, суурь-хананы холбоос битүүмжлэх
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-mongolian font-semibold text-red-900 mb-1 text-sm">
                        Анхааруулга
                      </h4>
                      <p className="font-mongolian text-xs text-red-800">
                        Суурийн дулаалга тасралтгүй байх ёстой. Дулаан гүүр
                        үүсэх нь хамгийн түгээмэл алдаа.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3: Walls & Roof */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 3: Хана ба дээвэр
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-mongolian font-semibold text-green-900 text-lg">
                  Хугацаа: 2-3 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Дотор хана босгох:</strong> Төмөр бетон эсвэл
                        тоосго (200мм)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Уур битүүмжлэл:</strong> Vapor barrier хальс
                        дотор талд
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Дулаалга (1-р давхар):</strong> Эрдэсийн ноолуур
                        200мм
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Дулаалга (2-р давхар):</strong> Холбоос
                        давхцуулж дахин 200мм
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        05
                      </span>
                      <span>
                        <strong>Салхины хамгаалалт:</strong> Wind barrier гадна
                        талд
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        06
                      </span>
                      <span>
                        <strong>Дээвэр:</strong> 500-600мм дулаалга,
                        агааржуулалт
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        07
                      </span>
                      <span>
                        <strong>Гадна бүрээс:</strong> Тоосго, модон хавтан,
                        эсвэл төмөр хавтан
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 4: Windows & Doors */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 4: Цонх хаалга
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="font-mongolian font-semibold text-purple-900 text-lg">
                  Хугацаа: 1-2 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Цонх захиалах:</strong> Passivhaus сертификаттай
                        цонх (U≤0.8). 2-3 сар урьдчилан захиалах.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Суурилуулалт:</strong> Дулаалгын давхаргын дотор
                        эсвэл түүнтэй ойр байрлуулах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Битүүмжлэх:</strong> Дотор тал: Vapor barrier
                        tape, Гадна тал: Weatherproof membrane
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Шалгах:</strong> Утаа генератороор битүүмжлэл
                        шалгах
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 5: First Blower Door Test */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 5: Анхны Blower Door тест
            </h2>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="font-mongolian font-semibold text-cyan-900 text-lg">
                  Хугацаа: 1 өдөр + засвар (1-2 долоо хоног)
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Бэлтгэл:</strong> Бүх цонх хаалга хаах,
                        агааржуулалт унтраах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Тест хийх:</strong> 50 Па даралт үүсгэж, ACH50
                        утга хэмжих
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Алдаа олох:</strong> Утаа генератор, инфрагэрэм
                        камер ашиглах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Засах:</strong> Олдсон бүх агаар алдалтын цэгийг
                        битүүмжлэх
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          ≤0.6
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-mongolian font-semibold text-blue-900 mb-1 text-sm">
                        Зорилт
                      </h4>
                      <p className="font-mongolian text-xs text-blue-800">
                        ACH50 ≤0.6 байх ёстой. Эхний тестэд ихэвчлэн 0.8-1.2
                        гардаг, засвар хийсний дараа 0.4-0.6 болно.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 6: Ventilation System */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 6: Агааржуулалтын систем
            </h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                  6
                </div>
                <h3 className="font-mongolian font-semibold text-indigo-900 text-lg">
                  Хугацаа: 1-2 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>HRV систем суурилуулах:</strong> Техникийн
                        өрөөнд байршуулах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Хоолойнууд татах:</strong> Өрөө бүрт агаар
                        хүргэх дулаалгатай хоолой
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Гадна агаарын оролт:</strong> Баруун хойд талд,
                        салхинаас хамгаалах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Тохируулга:</strong> Агаарын урсгал, дулаан
                        сэргээлт шалгах
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 7: Heating & Utilities */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 7: Халаалт ба бусад систем
            </h2>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">
                  7
                </div>
                <h3 className="font-mongolian font-semibold text-rose-900 text-lg">
                  Хугацаа: 1 сар
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Халаалтын систем:</strong> Цахилгаан халаагч,
                        эсвэл дулааны насос
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Усны систем:</strong> Хоолой, шүүлтүүр, халуун
                        усны хуримтлуулагч
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Цахилгаан:</strong> Битүүмжих хайрцаг ашиглах
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 8: Final Test */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Үе шат 8: Эцсийн тест ба сертификат
            </h2>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                  8
                </div>
                <h3 className="font-mongolian font-semibold text-teal-900 text-lg">
                  Хугацаа: 1-2 долоо хоног
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-mongolian font-semibold text-gray-900 mb-3">
                    Хийх ажлууд:
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 flex-shrink-0 mt-1">
                        01
                      </span>
                      <span>
                        <strong>Blower Door тест (2-р удаа):</strong> ACH50 ≤0.6
                        баталгаажуулах
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 flex-shrink-0 mt-1">
                        02
                      </span>
                      <span>
                        <strong>Агааржуулалтын үр ашиг тест:</strong> Дулаан
                        сэргээлт ≥85%
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 flex-shrink-0 mt-1">
                        03
                      </span>
                      <span>
                        <strong>Температур тест:</strong> -40°C гаднах
                        температурт дотор +20-22°C байх эсэх
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 flex-shrink-0 mt-1">
                        04
                      </span>
                      <span>
                        <strong>Сертификат авах:</strong> (Сонголт) Passivhaus
                        Institute-аас баталгаажуулалт
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Budget timeline */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Төлбөрийн хуваарь
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-sm text-gray-600 mb-6">
                Барилгын явцад хэзээ хэдийг төлөх талаар төлөвлөгөө:
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Зураг төсөл
                    </h4>
                    <p className="font-mongolian text-sm text-gray-600">
                      Эхлэхийн өмнө
                    </p>
                  </div>
                  <strong className="font-mongolian text-gray-900">
                    10-15%
                  </strong>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Материал худалдан авалт (эхний хэсэг)
                    </h4>
                    <p className="font-mongolian text-sm text-gray-600">
                      Барилга эхлэхэд
                    </p>
                  </div>
                  <strong className="font-mongolian text-gray-900">
                    30-40%
                  </strong>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Барилгын ажил (давхар бүр)
                    </h4>
                    <p className="font-mongolian text-sm text-gray-600">
                      Ажил явцад
                    </p>
                  </div>
                  <strong className="font-mongolian text-gray-900">
                    20-30%
                  </strong>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Цонх, HRV систем
                    </h4>
                    <p className="font-mongolian text-sm text-gray-600">
                      Хүлээн авахад
                    </p>
                  </div>
                  <strong className="font-mongolian text-gray-900">
                    10-15%
                  </strong>
                </div>

                <div className="flex justify-between items-start pt-4">
                  <div className="flex-1">
                    <h4 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Төгсгөлийн төлбөр
                    </h4>
                    <p className="font-mongolian text-sm text-gray-600">
                      Тест тэнцсэний дараа
                    </p>
                  </div>
                  <strong className="font-mongolian text-gray-900">10%</strong>
                </div>
              </div>
            </div>
          </section>

          {/* Quality control checklist */}
          <section>
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-slate-900 mb-6">
                Чанарын хяналтын шалгах жагсаалт
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаалгын давхарга тасралтгүй эсэхийг үе шат бүрт шалгах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Цонх суурилуулалтын битүүмжлэл зөв хийгдсэн эсэх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Blower Door тест 2 удаа хийх (дулаалгын дараа ба дууссаны
                    дараа)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    HRV системийн дулаан сэргээлт тест хийх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Барилгын фото бичлэг хийх (дулаалга, битүүмжлэл, хоолой)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-slate-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    PHPP тооцоолол болон бодит хэмжилтийг харьцуулах
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/materials"
            className="text-gray-600 hover:text-gray-900 font-mongolian flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Өмнөх: Материал ба Нийлүүлэгч
          </Link>

          <Link
            href="/passivhaus"
            className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-full hover:from-slate-700 hover:to-gray-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Passivhaus гарын авлага руу буцах
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
