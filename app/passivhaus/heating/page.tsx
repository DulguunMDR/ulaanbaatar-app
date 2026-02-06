// app/passivhaus/heating/page.tsx
// Файлын байршил: app/passivhaus/heating/page.tsx
// Халаалтын хуудас - Шинэчлэгдсэн загвар

import Link from "next/link";

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-rose-600 hover:text-rose-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-rose-600 uppercase mb-2">
              06 — Халаалт
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Эрчим Хүч Хэмнэсэн
              <br />
              Халаалтын Систем
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-pink-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Бага эрчим хүчээр дулаацуулах шийдэл
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Minimal heating needs */}
          <section>
            <div className="bg-white border-l-4 border-rose-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Passivhaus-д халаалтын хэрэгцээ бага
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Дулаалга, агааргүйдэл, HRV системийн ачаар Passivhaus-д халаалт
                бараг хэрэггүй болдог. Жилийн халаалтын эрчим хүч нь{" "}
                <strong>15 кWh/м² хүртэл</strong> байна. Энэ нь ердийн гэрээс{" "}
                <strong>90% бага</strong>.
              </p>
              <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        15кWh
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-rose-900 mb-2">
                      Жишээ тооцоолол
                    </h3>
                    <p className="font-mongolian text-sm text-rose-800 leading-relaxed">
                      100м² байшин: 15 кWh/м² × 100м² = 1,500 кWh жилд. Энэ нь
                      сард ойролцоогоор 125 кWh буюу{" "}
                      <strong>₮25,000-35,000</strong> (цахилгаан халаалт).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Heating comparison */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Халаалтын зардлын харьцуулалт
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-red-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Ердийн гэр
                </div>
                <div className="text-4xl font-bold text-red-900 mb-2">
                  150+ кWh
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed mb-4">
                  Жилд 100м² тутамд
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-mongolian text-xs text-gray-600 mb-1">
                    Сарын зардал (өвөл):
                  </p>
                  <p className="font-mongolian text-lg font-bold text-red-700">
                    ₮300,000-500,000
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Passivhaus
                </div>
                <div className="text-4xl font-bold text-green-900 mb-2">
                  ≤15 кWh
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed mb-4">
                  Жилд 100м² тутамд
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-mongolian text-xs text-gray-600 mb-1">
                    Сарын зардал (өвөл):
                  </p>
                  <p className="font-mongolian text-lg font-bold text-green-700">
                    ₮25,000-35,000
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Heating options */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Халаалтын сонголтууд
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Цахилгаан халаалт (Electric Heating)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-3">
                      Хамгийн энгийн, суурилуулахад хямд. Passivhaus-д бага
                      эрчим хүч шаардагдах тул үр ашигтай.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үр ашиг:</span>{" "}
                        <strong className="text-green-600">100%</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Суурилуулалт:</span>{" "}
                        <strong className="text-blue-600">₮2-3 сая</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Ажиллалт:</span>{" "}
                        <strong className="text-orange-600">₮0.12/кWh</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Засвар:</span>{" "}
                        <strong className="text-purple-600">Бага</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Агаарын дулааны насос (Air Source Heat Pump)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-3">
                      Гадны агаарын дулааныг ашиглан халаана. Монголын -40°C-д
                      үр ашиг буурдаг, гэхдээ бага эрчим хүч хэрэглэнэ.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үр ашиг:</span>{" "}
                        <strong className="text-green-600">200-300%</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Суурилуулалт:</span>{" "}
                        <strong className="text-blue-600">₮8-12 сая</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Ажиллалт:</span>{" "}
                        <strong className="text-orange-600">Бага</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Засвар:</span>{" "}
                        <strong className="text-purple-600">Дунд зэрэг</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Газрын дулааны насос (Ground Source Heat Pump)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-3">
                      Газрын доорх тогтвортой дулааныг ашиглана. Монголд хамгийн
                      тохиромжтой, гэхдээ өндөр үнэтэй.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үр ашиг:</span>{" "}
                        <strong className="text-green-600">300-400%</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Суурилуулалт:</span>{" "}
                        <strong className="text-blue-600">₮15-25 сая</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Ажиллалт:</span>{" "}
                        <strong className="text-orange-600">Маш бага</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Засвар:</span>{" "}
                        <strong className="text-purple-600">Бага</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Нарны коллектор (Solar Thermal)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-3">
                      Нарны эрчим хүчийг ашиглана. Зуны улиралд сайн, өвөл
                      нэмэлт халаалт хэрэгтэй.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үр ашиг:</span>{" "}
                        <strong className="text-green-600">
                          Улирлаас хамаарна
                        </strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Суурилуулалт:</span>{" "}
                        <strong className="text-blue-600">₮5-8 сая</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Ажиллалт:</span>{" "}
                        <strong className="text-orange-600">Үнэгүй</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Засвар:</span>{" "}
                        <strong className="text-purple-600">Бага</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Backup heating */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Нөөц халаалт (-40°C-д)
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-gray-700 leading-relaxed mb-6">
                Монголын хамгийн хүйтэн өдрүүдэд (5-10 хоног) нэмэлт халаалт
                шаардлагатай байж болно. Passivhaus зарчим нь бага эрчим хүчээр
                удаан хугацаагаар халаах.
              </p>

              <div className="space-y-3">
                <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                  <h3 className="font-mongolian font-semibold text-blue-900 mb-2">
                    Цахилгаан халаагч (Нөөц)
                  </h3>
                  <p className="font-mongolian text-sm text-gray-700">
                    1-2 кВт чадалтай, жижиг өрөө тус бүрт байршуулах. Зөвхөн
                    хамгийн хүйтэн үед ашиглана.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-5 shadow-sm">
                  <h3 className="font-mongolian font-semibold text-orange-900 mb-2">
                    Шалны халаалт (Нөөц)
                  </h3>
                  <p className="font-mongolian text-sm text-gray-700">
                    Ариун цэврийн өрөө, хүүхдийн өрөөнд. Тав тухтай, дулааныг
                    жигд тархаана.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-5 shadow-sm">
                  <h3 className="font-mongolian font-semibold text-green-900 mb-2">
                    Модны зуух (Нэмэлт)
                  </h3>
                  <p className="font-mongolian text-sm text-gray-700">
                    Зөвхөн онцгой үед. Утаа HRV системээр дамжуулж гадагш гаргах
                    шаардлагатай.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1"
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
                    <h4 className="font-mongolian font-semibold text-yellow-900 mb-1">
                      Чухал
                    </h4>
                    <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                      Passivhaus-д халаалтын систем жижиг байж болно. Том зуух,
                      халаагч худалдан авахгүй. Үр ашиггүй, үнэтэй.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost analysis */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              20 жилийн зардлын харьцуулалт
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-4">
                  Ердийн гэр (100м²)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-mongolian text-gray-600">
                      Халаалтын систем:
                    </span>
                    <strong className="font-mongolian">₮5,000,000</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-mongolian text-gray-600">
                      Жилийн зардал:
                    </span>
                    <strong className="font-mongolian">₮3,600,000</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-mongolian text-gray-600">
                      20 жилийн ажиллалт:
                    </span>
                    <strong className="font-mongolian">₮72,000,000</strong>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-mongolian text-gray-900 font-semibold">
                      Нийт зардал:
                    </span>
                    <strong className="font-mongolian text-red-600 text-lg">
                      ₮77,000,000
                    </strong>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <h3 className="font-mongolian font-semibold text-green-900 mb-4">
                  Passivhaus (100м²)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span className="font-mongolian text-gray-700">
                      Халаалтын систем:
                    </span>
                    <strong className="font-mongolian">₮3,000,000</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span className="font-mongolian text-gray-700">
                      Жилийн зардал:
                    </span>
                    <strong className="font-mongolian">₮360,000</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span className="font-mongolian text-gray-700">
                      20 жилийн ажиллалт:
                    </span>
                    <strong className="font-mongolian">₮7,200,000</strong>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-mongolian text-gray-900 font-semibold">
                      Нийт зардал:
                    </span>
                    <strong className="font-mongolian text-green-600 text-lg">
                      ₮10,200,000
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="font-mongolian text-blue-900 font-semibold text-lg mb-2">
                20 жилд хэмнэлт
              </p>
              <p className="font-mongolian text-4xl font-bold text-blue-600">
                ₮66,800,000
              </p>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-rose-900 mb-6">
                Халаалтын систем сонгох
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-rose-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Халаалтын хэрэгцээг тооцоолох (PHPP програм ашиглах)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-rose-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Монголын -40°C-д ажиллах эсэхийг шалгах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-rose-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Нөөц халаалтын систем төлөвлөх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-rose-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    20 жилийн зардлыг харьцуулах (анхны үнэ + ажиллалт)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-rose-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Засвар үйлчилгээ хийх мэргэжилтэн байгаа эсэхийг лавлах
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/airtightness"
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
            Өмнөх: Агааргүйдэл
          </Link>

          <Link
            href="/passivhaus/materials"
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-rose-700 hover:to-pink-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Материал ба Нийлүүлэгч
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
