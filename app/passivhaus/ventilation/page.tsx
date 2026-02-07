// app/passivhaus/ventilation/page.tsx
// Файлын байршил: app/passivhaus/ventilation/page.tsx
// Дулаан сэргээх агааржуулалтын хуудас

import Link from "next/link";

export default function VentilationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-indigo-600 hover:text-indigo-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-2">
              04 — Агааржуулалт
            </div>
            <h1 className="font-mongolian text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Дулаан Сэргээх
              <br />
              Агааржуулалт
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            HRV/ERV систем - Цэвэр агаар, дулаан хадгалах
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* What is HRV/ERV */}
          <section>
            <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Дулаан сэргээх агааржуулалт гэж юу вэ?
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                <strong>HRV</strong> (Heat Recovery Ventilation) болон{" "}
                <strong>ERV</strong> (Energy Recovery Ventilation) систем нь
                гэрийн дотор агаарыг байнга шинэчлэхийн зэрэгцээ дулааныг
                хадгалдаг технологи юм.
              </p>
              <p className="font-mongolian text-gray-700 leading-relaxed">
                Ердийн гэрт цонх нээж агаар шинэчлэхэд бүх дулаан алддаг. HRV
                систем нь гадагш гарах агаарын дулааныг{" "}
                <strong className="text-indigo-600">90% хүртэл</strong> буцааж,
                дотогш орох шинэ агаарт шилжүүлдэг.
              </p>
            </div>
          </section>

          {/* How it works */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Хэрхэн ажилладаг вэ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-red-600 font-bold text-sm mb-2 uppercase tracking-wide">
                  Гадагш гарах агаар
                </div>
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3 text-lg">
                  Дулаан агаар (+22°C)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Байшингийн доторх дулаан, бохир агаар гадагш гарахдаа дулаан
                  солилцуур (heat exchanger) дундуур явна. Энэ үед дулаан нь
                  хадгалагдана.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-wide">
                  Дотогш орох агаар
                </div>
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3 text-lg">
                  Хүйтэн агаар (-40°C)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Гаднаас орж ирэх цэвэр агаар дулаан солилцуураар дамжин,
                  хадгалагдсан дулаанаар халаагдаж (+18°C хүртэл), өрөөнд ордог.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">90%</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-mongolian font-semibold text-indigo-900 mb-2">
                    Дулаан сэргээлтийн үр ашиг
                  </h4>
                  <p className="font-mongolian text-sm text-indigo-800 leading-relaxed">
                    Өндөр чанарын систем нь дулааны 85-95%-ийг буцааж өгдөг. Энэ
                    нь -40°C агаарыг бараг 0°C болгож, халаалтын зардлыг эрс
                    багасгана.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why needed in Mongolia */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Яагаад Монголд заавал хэрэгтэй вэ?
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="font-mongolian font-semibold text-purple-900 mb-2">
                  01 — Цонх нээх боломжгүй
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  -40°C-д цонх нээх нь практик биш. HRV систем цонх нээхгүйгээр
                  24 цаг цэвэр агаартай байна.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="font-mongolian font-semibold text-green-900 mb-2">
                  02 — Эрчим хүчний өндөр үнэ
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Цонх нээж дулаан алдах нь халаалтын зардлыг 3-5 дахин
                  нэмэгдүүлдэг. HRV энэ зардлыг багасгана.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="font-mongolian font-semibold text-orange-900 mb-2">
                  03 — Чийгшил хяналт
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Монголын өвөл маш хуурай. ERV систем чийгшлийг зохицуулж, тав
                  тухтай орчин бүрдүүлнэ.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="font-mongolian font-semibold text-red-900 mb-2">
                  04 — Агаарын чанар
                </h3>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Гаднах бохир агаараас шүүлтүүрээр дамжуулан цэвэр агаар дотогш
                  оруулна. PM2.5, PM10-ийг шүүнэ.
                </p>
              </div>
            </div>
          </section>

          {/* System components */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Системийн бүрэлдэхүүн хэсгүүд
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Дулаан солилцуур (Heat Exchanger)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Системийн зүрх. Дулааныг хоёр агаарын урсгалын хооронд
                      дамжуулна. Үнэ: ₮1,500,000-3,000,000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Сэнс (Fans/Blowers)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Агаарыг эргүүлэх хоёр сэнс. Бага дуу чимээтэй, бага эрчим
                      хүчний моторууд.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Шүүлтүүр (Air Filters)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      F7 эсвэл илүү өндөр зэрэглэлийн шүүлтүүр. PM2.5, тоос, цаг
                      тугийг шүүнэ. 3-6 сар тутамд солих.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Хоолойнууд (Ductwork)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Агаарыг өрөө бүрт хүргэх дулаалгатай хоолойнууд. Диаметр:
                      100-200мм.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Удирдлагын систем (Control System)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Сэнсний хурд, температурыг удирдах. Өдөрт 24 цаг ажиллахад
                      бэлэн.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation tips */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Суурилуулалтын зөвлөмжүүд
            </h2>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-4">
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
                  <h3 className="font-mongolian font-semibold text-yellow-900 mb-2">
                    Чухал анхааруулга
                  </h3>
                  <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                    HRV систем зөвхөн Passivhaus стандартын агаар нэвтрэлтгүй
                    байшинд үр ашигтай. Ердийн байшинд суурилуулбал агаар
                    алдагдана, систем хэрэггүй болно.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <p className="font-mongolian text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Байршил:</span>{" "}
                  Техникийн өрөөнд суурилуулах. Дуу чимээнээс хол, засвар
                  үйлчилгээнд хялбар.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <p className="font-mongolian text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Хоолойнууд:
                  </span>{" "}
                  Богино замаар дамжуулах. Урт хоолой нь дулаан алдалт
                  нэмэгдүүлнэ.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <p className="font-mongolian text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Гадна агаарын оролт:
                  </span>{" "}
                  Баруун хойд талд байрлуулах. Салхинаас хамгаалах.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <p className="font-mongolian text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Ус зайлуулалт:
                  </span>{" "}
                  Конденсацын ус гаргах хоолой татан суулгах ёстой.
                </p>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-indigo-900 mb-6">
                Худалдан авахын өмнө шалгах
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаан сэргээлтийн үр ашиг 85% ба түүнээс дээш эсэхийг
                    баталгаажуулах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Монголын -40°C хүйтэнд тэсвэртэй эсэхийг лавлах (anti-freeze
                    функц)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    F7 эсвэл илүү сайн шүүлтүүртэй эсэхийг шалгах (PM2.5 шүүнэ)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дуу чимээний түвшин 25-35 дБ-ээс хэтрэхгүй байх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Засвар үйлчилгээ хийх компани Монголд байгаа эсэхийг
                    тодруулах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-indigo-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    5-10 жилийн баталгаатай эсэхийг лавлах
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/windows"
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
            Өмнөх: Цонх ба Хаалга
          </Link>

          <Link
            href="/passivhaus/airtightness"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Агааргүйдэл
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
