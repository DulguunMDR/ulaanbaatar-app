// app/passivhaus/airtightness/page.tsx
// Файлын байршил: app/passivhaus/airtightness/page.tsx
// Агааргүйдлийн хуудас

import Link from "next/link";

export default function AirtightnessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-teal-600 hover:text-teal-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">
              05 — Агааргүйдэл
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Агаар Нэвтрэлтгүй
              <br />
              Барилга
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Агаар алдалтгүй байх - Дулаан хадгалалтын түлхүүр
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* What is Airtightness */}
          <section>
            <div className="bg-white border-l-4 border-teal-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Агааргүйдэл гэж юу вэ?
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Агааргүйдэл гэдэг нь байшингийн бүх хэсгүүдийг агаар нэвтрэхгүй
                байдлаар битүүмжилсэн байдлыг хэлнэ. Энэ нь зөвхөн цонх хаалганы
                тухай биш - барилгын бүх холбоос, нугалаа, цоорхой
                битүүмжилэгдсэн байх ёстой.
              </p>
              <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">≤0.6</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-teal-900 mb-2">
                      Passivhaus стандарт
                    </h3>
                    <p className="font-mongolian text-sm text-teal-800 leading-relaxed">
                      Агаар солилцоо: <strong>≤0.6 ACH50</strong> (Air Changes
                      per Hour at 50 Pascals pressure). Энэ нь цагт 0.6 удаа бүх
                      агаар солигдох гэсэн үг. Ердийн гэр: 5-15 ACH50.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why it matters */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Яагаад чухал вэ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-red-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Дулаан алдалт
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Агаар нэвтэрч байвал дулаалга, цонх ямар ч сайн байсан дулаан
                  алдана. -40°C-д 1мм цоорхой нь цагт <strong>10-20м³</strong>{" "}
                  хүйтэн агаар оруулна.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-blue-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Чийгшлийн хяналт
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Агаар нэвтэрвэл чийг конденсацилж, ус үүснэ. Энэ нь хөгц,
                  мөөг, барилгын материалын эвдрэлд хүргэнэ.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="text-purple-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Агаарын чанар
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Агаар нэвтрэх замаар тоос, бохирдол ордог. HRV систем зөвхөн
                  агааргүйдэлтэй барилгад үр ашигтай.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Эрчим хүч хэмнэлт
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Агааргүй барилга нь халаалтын зардлыг 40-60% бууруулна. Энэ нь
                  хамгийн том хэмнэлт.
                </p>
              </div>
            </div>
          </section>

          {/* Blower Door Test */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Blower Door тест
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-gray-700 leading-relaxed mb-6">
                Blower Door тест нь байшингийн агаар нэвтрэлтийг хэмжих үндсэн
                арга. Хаалганы хүрээнд том сэнс суурилуулж, байшинд даралт
                үүсгэн, агаар алдагдах цэгүүдийг олдог.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Бэлтгэл ажил
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Бүх цонх хаалга хааж, агааржуулалтын систем унтраана.
                      Байшинг бүрэн битүүмжилнэ.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Даралт үүсгэх
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Сэнсийг ажиллуулж 50 Паскалийн дотоод даралт үүсгэнэ. Энэ
                      нь ойролцоогоор 20 км/ц хурдтай салхинтай тэнцэнэ.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Алдагдал олох
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Утаа генератор ашиглан агаар алдагдах цэгүүдийг харж,
                      тэмдэглэнэ. Инфрагэрэм камер ашиглаж болно.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Үр дүн гаргах
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Компьютер ACH50 утгыг тооцож гаргана. ≤0.6 бол тэнцсэн,
                      түүнээс их бол засах шаардлагатай.
                    </p>
                  </div>
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-mongolian font-semibold text-yellow-900 mb-1">
                      Хэзээ тест хийх вэ?
                    </h4>
                    <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                      Барилгын явцад 2 удаа: (1) Дулаалга хийсний дараа, (2)
                      Дууссаны дараа. Эрт илрүүлсэн алдаа засахад хялбар.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common air leakage points */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Агаар алдагдах ердийн цэгүүд
            </h2>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <span className="text-red-600">01</span>
                  Цонх хаалгын хүрээ
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Хамгийн түгээмэл. Суурилуулалтын үед битүүмжлэл тааруу
                  хийгдсэн байна.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-orange-900 mb-2 flex items-center gap-2">
                  <span className="text-orange-600">02</span>
                  Хананы холбоос
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Хана ба дээвэр, хана ба суурийн холбоос. Холбоосын хальс
                  ашиглах шаардлагатай.
                </p>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <span className="text-yellow-600">03</span>
                  Цахилгааны залгуур
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Залгуур, унтраалга, цэнэглэгчийн цоорхойгоор агаар нэвтэрнэ.
                  Битүүмжих хайрцаг хэрэгтэй.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-green-600">04</span>
                  Хоолойн нэвтрэлт
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Ус, халаалт, агааржуулалтын хоолойн орох газар. Нэвтрэлтийг
                  битүүмжлэх тусгай материал хэрэг.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">05</span>
                  Дээврийн цонх
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Дээврийн цонх суурилуулах нь хүндрэлтэй. Агаар алдалтын өндөр
                  эрсдэлтэй газар.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-5 shadow-sm">
                <h3 className="font-mongolian font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">06</span>
                  Шатны орц
                </h3>
                <p className="font-mongolian text-sm text-gray-700">
                  Доод давхар, дээд давхрын хооронд агаар урсдаг. Битүүмжлэх
                  хальс хэрэгтэй.
                </p>
              </div>
            </div>
          </section>

          {/* Sealing materials */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Битүүмжлэх материалууд
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Битүүмжих хальс (Tape)
                </h3>
                <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>
                      Дотор тал: Уур битүүмжлэх хальс (vapor barrier tape)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>
                      Гадна тал: Цаг агаарын битүүмжлэх хальс (weatherproof
                      tape)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Үнэ: ₮50,000-100,000/roll (25м)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Битүүмжих будаг (Sealant)
                </h3>
                <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Акрил эсвэл силикон суурьтай</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Уян хатан, хагарахгүй, -40°C-д тэсвэртэй</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Үнэ: ₮15,000-30,000/тюб (310мл)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Уур битүүмжлэх хальс (Membrane)
                </h3>
                <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Хананы дотор талд хуванцар хальс</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>
                      Чийгийг дотогш нэвтрүүлэхгүй, агаар нэвтрүүлэхгүй
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Үнэ: ₮8,000-15,000/м²</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Дулаалгатай дэвсгэр (Foam)
                </h3>
                <ul className="space-y-2 font-mongolian text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Том зайг дүүргэхэд ашиглана</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Полиуретан дэвсгэр (expanding foam)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Үнэ: ₮10,000-20,000/can (750мл)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-teal-900 mb-6">
                Агааргүйдлийн шалгах жагсаалт
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Бүх цонх хаалганд битүүмжлэх хальс ашигласан эсэхийг шалгах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Хана ба дээвэр, хана ба суурийн бүх холбоосыг битүүмжлэх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Цахилгааны залгуур, унтраалганд битүүмжих хайрцаг
                    суурилуулах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Хоолой, кабель нэвтрэх бүх цэгийг битүүмжлэх будгаар дүүргэх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Барилга дууссаны дараа Blower Door тест хийх
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-teal-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Үр дүн ≤0.6 ACH50 байх хүртэл алдааг засах
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/ventilation"
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
            Өмнөх: Агааржуулалт
          </Link>

          <Link
            href="/passivhaus/heating"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-emerald-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Халаалт
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
