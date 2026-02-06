// app/passivhaus/insulation/page.tsx
// Файлын байршил: app/passivhaus/insulation/page.tsx
// Дулаалгын хуудас - Шинэчлэгдсэн загвар

import Link from "next/link";

export default function InsulationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-amber-600 hover:text-amber-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-2">
              02 — Дулаалга
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Дэд Зэргийн
              <br />
              Дулаалга
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            -40°C-д тэсвэрлэх дулаалгын систем
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Why Super Insulation */}
          <section>
            <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Яагаад зузаан дулаалга хэрэгтэй вэ?
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Passivhaus стандартын гол зарчим бол дулаан алдалтыг багасгах
                юм. Монголын -40°C өвөлд энэ нь амьдралын асуудал. Зузаан
                дулаалга нь халаалтын зардлыг <strong>80-90%</strong>{" "}
                бууруулдаг.
              </p>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        400мм
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-amber-900 mb-2">
                      Монголд шаардлагатай зузаан
                    </h3>
                    <p className="font-mongolian text-sm text-amber-800 leading-relaxed">
                      Хана: 400-500мм, Дээвэр: 500-600мм, Суурь: 300-400мм. Энэ
                      нь ердийн гэрээс 3-4 дахин зузаан.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insulation thickness by location */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дулаалгын зузаан (газар бүрээр)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-blue-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Хана
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  400-500мм
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Гаднах температур хамгийн их нөлөөлдөг газар
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="text-orange-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Дээвэр
                </div>
                <div className="text-4xl font-bold text-orange-900 mb-2">
                  500-600мм
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Дулаан агаар дээшээ урсдаг тул хамгийн зузаан
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Суурь
                </div>
                <div className="text-4xl font-bold text-green-900 mb-2">
                  300-400мм
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Газрын дулаан тогтвортой байдаг тул бага зузаан
                </p>
              </div>
            </div>
          </section>

          {/* Insulation materials */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дулаалгын материалууд
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Эрдэсийн ноолуур (Mineral Wool / Rockwool)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-2">
                      Хамгийн түгээмэл. Галд тэсвэртэй, чийг нэвтрүүлдэг, хямд.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">λ-утга:</span>{" "}
                        <strong>0.035-0.040 W/mK</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үнэ:</span>{" "}
                        <strong>₮8,000-12,000/м²</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      EPS (Expanded Polystyrene / Хөөсөнцөр)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-2">
                      Хөнгөн, хямд, чийгнээс сайн хамгаалдаг. Гал тэсвэрлэлт
                      муу.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">λ-утга:</span>{" "}
                        <strong>0.030-0.038 W/mK</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үнэ:</span>{" "}
                        <strong>₮6,000-10,000/м²</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      XPS (Extruded Polystyrene)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-2">
                      EPS-ээс бат бөх, чийгнээс сайн хамгаалдаг. Суурийн
                      дулаалгад тохиромжтой.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">λ-утга:</span>{" "}
                        <strong>0.028-0.036 W/mK</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үнэ:</span>{" "}
                        <strong>₮15,000-25,000/м²</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      PIR/PUR (Polyisocyanurate / Polyurethane)
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700 mb-2">
                      Хамгийн сайн дулаалгын чадвартай. Өндөр үнэтэй. Монголд
                      импортоор.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">λ-утга:</span>{" "}
                        <strong>0.022-0.028 W/mK</strong>
                      </div>
                      <div className="bg-white rounded px-3 py-2">
                        <span className="text-gray-600">Үнэ:</span>{" "}
                        <strong>₮25,000-40,000/м²</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation layers */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дулаалгын давхаргууд (хананы жишээ)
            </h2>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-gray-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    01 - Дотор талын хана
                  </h3>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    200мм
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Төмөр бетон эсвэл тоосго (блок)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    02 - Уур битүүмжлэл
                  </h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    Хальс
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Vapor barrier - Чийгээс хамгаална
                </p>
              </div>

              <div className="bg-white border-l-4 border-amber-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    03 - Дулаалга (Давхар 1)
                  </h3>
                  <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                    200мм
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Эрдэсийн ноолуур (Mineral Wool)
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    04 - Дулаалга (Давхар 2)
                  </h3>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    200мм
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Эрдэсийн ноолуур - Холбоос давхцуулах
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    05 - Цаг агаарын хамгаалалт
                  </h3>
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                    Хальс
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Wind barrier - Салхи, бороо, цаснаас хамгаална
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-400 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mongolian font-semibold text-gray-900">
                    06 - Гадна талын бүрээс
                  </h3>
                  <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    Сонголт
                  </span>
                </div>
                <p className="font-mongolian text-sm text-gray-700">
                  Тоосго, модон хавтан, төмөр хавтан гэх мэт
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
                    Чухал анхааруулга
                  </h4>
                  <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                    Дулаалгын давхаргууд тасралтгүй байх ёстой. Холбоосыг
                    давхцуулж, &quot;дулаан гүүр&quot; үүсэхээс сэргийлнэ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Thermal bridges */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дулаан гүүр (Thermal Bridge) гэж юу вэ?
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-gray-700 leading-relaxed mb-6">
                Дулаан гүүр гэдэг нь дулаалга тасарч, дулаан түргэн алддаг газар
                юм. Жишээ нь: төмөр баганууд, цонхны хүрээ, ханын нугалаа.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <h4 className="font-mongolian font-semibold text-red-900 mb-2">
                    Зайлсхийх зүйлс
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>Төмөр багана дулаалгыг нэвтлэх</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>Дулаалгын давхарга тасрах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>Цонх дулаалгын гадна байрлах</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <h4 className="font-mongolian font-semibold text-green-900 mb-2">
                    Шийдэл
                  </h4>
                  <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>Модон хүрээ ашиглах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>Дулаалга тасралтгүй</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>Цонх дулаалгын дотор</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-amber-900 mb-6">
                Дулаалгын шалгах жагсаалт
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаалгын зузааныг тооцоолох (Хана: 400-500мм, Дээвэр:
                    500-600мм)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Материал сонгох (Эрдэсийн ноолуур, EPS, XPS, PIR)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Уур битүүмжлэл (vapor barrier) байршуулах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаалгын давхарга тасралтгүй байлгах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаан гүүр үүсэхээс сэргийлэх (төмөр эд анги хязгаарлах)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-amber-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Цаг агаарын хамгаалалт (wind barrier) суурилуулах
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/introduction"
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
            Өмнөх: Танилцуулга
          </Link>

          <Link
            href="/passivhaus/windows"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full hover:from-amber-700 hover:to-orange-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Цонх ба Хаалга
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
