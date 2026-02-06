// app/passivhaus/windows/page.tsx
// Файлын байршил: app/passivhaus/windows/page.tsx
// Цонх ба Хаалгын хуудас - Шинэчлэгдсэн загвар

import Link from "next/link";

export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-emerald-600 hover:text-emerald-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
              03 — Цонх ба Хаалга
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Өндөр Чанарын
              <br />
              Цонх Хаалга
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Дулаан алдалтыг багасгах түлхүүр
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Why Windows Matter */}
          <section>
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Яагаад цонх хамгийн чухал вэ?
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Ердийн байшинд дулаан алдалтын <strong>30-40%</strong> нь
                цонхноор дамждаг. Passivhaus-д энэ тоог <strong>5%</strong>{" "}
                хүртэл багасгадаг.
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">≤0.8</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-emerald-900 mb-2">
                      Анхаарах
                    </h3>
                    <p className="font-mongolian text-sm text-emerald-800 leading-relaxed">
                      Монголын -40°C-д ердийн цонх (U=2.8) нь хананы дулаалгаас
                      олон дахин муу юм. Passivhaus цонх (U≤0.8) шаардлагатай.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Requirements */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Техникийн шаардлага
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-2 text-sm">
                  U-утга
                </h3>
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  ≤0.8
                </div>
                <p className="font-mongolian text-xs text-gray-600">
                  W/m²K (Стандарт: 2.5-3.0)
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-2 text-sm">
                  Шилний тоо
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
                <p className="font-mongolian text-xs text-gray-600">
                  давхар (аргон хийтэй)
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-2 text-sm">
                  Хүрээ
                </h3>
                <div className="text-lg font-bold text-purple-600 mb-1">
                  PVC/Мод
                </div>
                <p className="font-mongolian text-xs text-gray-600">
                  Битүүмжлэлтэй
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-2 text-sm">
                  g-утга
                </h3>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  ≥0.5
                </div>
                <p className="font-mongolian text-xs text-gray-600">
                  Нарны ачаалал
                </p>
              </div>
            </div>
          </section>

          {/* Window Types */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Цонхны төрлүүд
            </h2>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-green-900 mb-2">
                  Зөвлөмж: Эргэдэг цонх (Tilt & Turn)
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Агааржуулалттай, битүүмжлэл сайн, Passivhaus стандартад
                  тохирдог
                </p>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-yellow-900 mb-2">
                  Бага зөвшөөрөх: Хабтгайтай цонх
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Зөвхөн том цонхонд, ололт багатай, битүүмжлэл анхаарах
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-red-900 mb-2">
                  Зайлсхийх: Гулсамал цонх (Sliding)
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Битүүмжлэл муу, агаар алддаг, Passivhaus-д тохиромжгүй
                </p>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Угсралтын заавар
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Дулаалгын давхаргад суурилуулах
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Цонх нь дулаалгын давхаргын дотор буюу түүнтэй ойр байх
                      ёстой. Энэ нь &quot;дулаан гүүр&quot; үүсэхээс сэргийлнэ.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Битүүмжлэх хэрэгслүүд
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Дотор тал: Уур битүүмжлэл (vapor barrier tape), Гадна тал:
                      Цаг агаараас хамгаалах битүүмжлэл (weatherproof membrane)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Blower Door тестээр шалгах
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Угсралтын дараа агаар алдалтыг шалгах. Passivhaus
                      стандарт: ≤0.6 ACH50
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mongolia Suppliers */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Монгол дахь нийлүүлэгчид
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-sm text-gray-600 mb-6">
                <strong>Анхаар:</strong> Passivhaus сертификаттай цонх Монголд
                ховор. Гадаадаас импортлох эсвэл дотоодын найдвартай
                компаниудтай ажиллах.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
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
                      Зөвлөгөө
                    </h4>
                    <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                      U-утгыг баталгаажуулах сертификат шаардах. Ердийн 2 давхар
                      шилтэй цонхыг &quot;эрчим хүч хэмнэсэн&quot; гэж зарах нь
                      түгээмэл.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-emerald-900 mb-6">
                Цонх сонгохын өмнө шалгах
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-emerald-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    U-утга ≤ 0.8 W/m²K эсэхийг шалгах (сертификаттай)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-emerald-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    3 давхар шил, аргон хийгээр дүүргэсэн эсэхийг лавлах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-emerald-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Битүүмжлэлийн материал (tape, membrane) худалдан авах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-emerald-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Угсралтын заавартай мэргэжилтэн олох (Passivhaus
                    туршлагатай)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-emerald-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Blower Door тест хийх төлөвлөгөөтэй эсэхийг тодорхойлох
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/insulation"
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
            Өмнөх: Дулаалга
          </Link>

          <Link
            href="/passivhaus/ventilation"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full hover:from-emerald-700 hover:to-teal-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Агааржуулалт
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
