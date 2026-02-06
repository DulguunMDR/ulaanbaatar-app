// ============================================
// ФАЙЛ: app/about/page.tsx
// Файлын байршил: app/about/page.tsx
// Тухай хуудас - Шинэчлэгдсэн загвар
// ============================================

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section (Гарчиг хэсэг) */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Улаанбаатарын Агаарын Чанар
            </div>
            <h1 className="font-mongolian text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Бидний
              <br />
              Тухай
            </h1>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-600 font-mongolian max-w-3xl mx-auto leading-relaxed">
            Улаанбаатарын агаарын чанар, цаг агаарын мэдээллийг бодит цагт,
            ойлгомжтой, үзэмжтэй хэлбэрээр хүргэдэг платформ
          </p>
        </div>

        {/* Mission Statement (Эрхэм зорилго) */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12 border-2 border-blue-100">
          <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Эрхэм Зорилго
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p className="text-base md:text-lg">
              <strong className="text-blue-600">ulaanbaatar.app</strong> нь
              Улаанбаатар хотын иргэд бүрт агаарын чанарын мэдээллийг
              хүртээмжтэй, ойлгомжтой хэлбэрээр хүргэх зорилготой. Бид хүн бүр
              өөрийн эрүүл мэндээ хамгаалж, мэдээлэлтэй шийдвэр гаргахад нь
              туслахыг эрхэмлэдэг.
            </p>
            <p className="text-gray-600">
              Агаарын бохирдол нь бидний хотын хамгийн ноцтой асуудлуудын нэг.
              Бид энэ асуудлыг шийдвэрлэхийн тулд өгөгдөл, мэдлэг, боловсрол
              гэсэн гурван чиглэлээр ажиллаж байна.
            </p>
          </div>
        </div>

        {/* Why This Matters (Яагаад энэ чухал вэ) */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900">
                Яагаад Энэ Чухал Вэ?
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base">
                Улаанбаатар хот нь{" "}
                <strong>
                  дэлхийд агаарын бохирдол хамгийн их хотуудын нэг
                </strong>{" "}
                юм. Ялангуяа өвлийн улиралд нүүрсний утаа, машины яндан, усан
                үеийн нөхцөл байдлаас шалтгаалан агаарын чанар эрс муудардаг.
              </p>
              <p className="text-gray-600">
                Агаарын бохирдол нь хүүхдүүд, өндөр настнууд, уушигны өвчтэй
                хүмүүст ялангуяа хортой. Мэдээллийг мэдэж байж, өдөр тутмын үйл
                ажиллагаагаа төлөвлөх (гадуур гарах, дасгал хөдөлгөөн хийх,
                хүүхдийг сургуульд явуулах гэх мэт) нь{" "}
                <strong>эрүүл мэндийг хамгаалахад чухал ач холбогдолтой</strong>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Vision for Clean City (Цэвэр хотын төлөвлөгөө) */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Цэвэр, Ногоон Улаанбаатарт
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Бид зөвхөн агаарын чанарыг хэмжихээс гадна шийдлийг санал болгож
              байна. Эрчим хүч хэмнэсэн, байгальд ээлтэй барилга барих мэдлэгийг
              хүртээмжтэй болгож, хотын агаарын чанарыг сайжруулахад хувь нэмрээ
              оруулахыг эрмэлж байна.
            </p>
            <Link
              href="/passivhaus"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-mongolian font-medium text-sm transition-colors group"
            >
              <span>Passivhaus Гарын Авлага</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Contact Section (Холбоо барих хэсэг) */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-mongolian text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Холбоо Барих
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Санал хүсэлт, асуулт байвал бидэнтэй холбогдоорой. Таны саналыг
              үнэлж, платформоо сайжруулахад ашиглана.
            </p>

            <div className="inline-block bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">МД</span>
              </div>
              <p className="text-gray-900 mb-1 font-semibold text-lg font-mongolian">
                М.Дөлгөөн
              </p>
              <p className="text-gray-600 text-sm mb-4 font-mongolian">
                Үүсгэн байгуулагч
              </p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:dulguun.mdr@gmail.com"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium text-sm"
                  >
                    dulguun.mdr@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.ulaanbaatar.app"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ulaanbaatar.app
                  </a>
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-8 italic font-mongolian">
              &quot;Улаанбаатарын цэвэр агаарт хамтдаа&quot;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
