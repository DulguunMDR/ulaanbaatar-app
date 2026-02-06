// app/passivhaus/introduction/page.tsx
// Файлын байршил: app/passivhaus/introduction/page.tsx
// Passivhaus танилцуулга хуудас - Шинэчлэгдсэн загвар

import Link from "next/link";

export default function IntroductionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-blue-600 hover:text-blue-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
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
            <div className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
              01 — Танилцуулга
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Passivhaus
              <br />
              Үндсэн Ойлголт
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Эрчим хүчний хэмнэлттэй барилгын дэлхийн стандарт
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* What is Passivhaus */}
          <section>
            <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Passivhaus гэж юу вэ?
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                <strong>Passivhaus</strong> (Пассив Хаус) нь Германд үүссэн
                эрчим хүчний хэмнэлттэй барилгын стандарт юм. Энэ нь ердийн
                байшингаас <strong>90% бага эрчим хүч</strong> зарцуулдаг,
                гэхдээ жилийн дөрвөн улиралд тогтвортой тав тухтай дулаан
                хадгална.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">90%</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-blue-900 mb-2">
                      Үндсэн санаа
                    </h3>
                    <p className="font-mongolian text-sm text-blue-800 leading-relaxed">
                      &quot;Идэвхгүй&quot; (passive) дулаан - нарны гэрэл,
                      хүмүүсийн биеийн дулаан, гэрийн техникийн дулааныг
                      ашиглан, бага халаалтаар гэрийг дулаацуулах.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Mongolia */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Яагаад Монголд Passivhaus чухал вэ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6">
                <div className="text-cyan-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Хамгийн хүйтэн нийслэл
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Улаанбаатар өвлийн улиралд <strong>-40°C</strong> хүртэл
                  хүрдэг. Ердийн гэрүүд халаалтад асар их эрчим хүч зарцуулдаг.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Агаарын бохирдол
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Халаалтын нүүрсний зуух агаарын бохирдлын гол эх үүсвэр.
                  Passivhaus халаалтын хэрэгцээг <strong>90%</strong> бууруулна.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="text-orange-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Өндөр эрчим хүчний зардал
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Монгол айл өлсгөлний улиралд сард{" "}
                  <strong>300,000₮-500,000₮</strong> халаалтанд зарцуулдаг.
                  Passivhaus энэ зардлыг <strong>10 дахин</strong> бууруулна.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="text-purple-600 font-bold text-sm mb-3 uppercase tracking-wide">
                  Байгальд ээлтэй
                </div>
                <p className="font-mongolian text-sm text-gray-700 leading-relaxed">
                  Нүүрсхүчлийн хийн ялгаруулалтыг багасгаж, дэлхийн дулааралтын
                  эсрэг тэмцэнэ.
                </p>
              </div>
            </div>
          </section>

          {/* 5 Core Principles */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Passivhaus-ын 5 үндсэн зарчим
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Дэд зэргийн дулаалга
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Хана, дээвэр, суурь бүгд зузаан дулаалгатай. Монголд{" "}
                      <strong>400-600мм</strong> зузаан шаардлагатай.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Өндөр чанарын цонх
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      3 давхар шилтэй, аргон хийгээр дүүргэсэн, дулаан алдалт
                      багатай цонх. U-утга ≤ 0.8 W/m²K.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Дулаан сэргээх агааржуулалт
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Гадагш гарах агаарын дулааныг дотогш орох агаарт шилжүүлэх
                      систем. <strong>90%</strong> дулааныг буцаана.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Агааргүй барилга
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Агаар алдагдах бүх цоорхойг битүүмжилсэн. Blower Door
                      тестээр шалгах.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mongolian font-semibold text-gray-900 mb-1">
                      Дулаан гүүр байхгүй
                    </h3>
                    <p className="font-mongolian text-sm text-gray-700">
                      Дулаалгын давхарга тасралтгүй, төмөр эд анги
                      хязгаарлагдмал ашиглах.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Facts */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Түргэн баримтууд
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <div className="text-3xl font-bold text-blue-600 mb-1">90%</div>
                <p className="font-mongolian text-xs text-gray-700">
                  Эрчим хүчний хэмнэлт
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  20-22°C
                </div>
                <p className="font-mongolian text-xs text-gray-700">
                  Жилийн дөрвөн улиралд тогтмол температур
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  15 кWh
                </div>
                <p className="font-mongolian text-xs text-gray-700">
                  Жилийн халаалтын эрчим хүч (м² тутамд)
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  0.6 ACH
                </div>
                <p className="font-mongolian text-xs text-gray-700">
                  Агаар нэвтрэлтийн дээд хязгаар
                </p>
              </div>
            </div>
          </section>

          {/* Checklist Section */}
          <section>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-blue-900 mb-6">
                Эхлэхийн өмнө шалгах зүйлс
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Төсөв тооцох (Passivhaus нь анхны зардал өндөр, гэхдээ 5-10
                    жилд өөрийгөө нөхнө)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Газар сонгох (Өмнө зүгт харсан, салхинаас хамгаалагдсан
                    газар сайн)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Мэргэжилтэн олох (Passivhaus туршлагатай архитектор,
                    барилгачин)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Материал нийлүүлэгч судлах (Монгол дахь боломжит
                    материалууд)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    PHPP програм суулгах (Passivhaus тооцоолох программ)
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus"
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
            Буцах
          </Link>

          <Link
            href="/passivhaus/insulation"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Дулаалга
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
