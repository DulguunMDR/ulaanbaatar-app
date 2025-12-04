// ============================================
// ФАЙЛ: app/about/page.tsx
// Файлын байршил: app/about/page.tsx
// ============================================

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section (Гарчиг хэсэг) */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title (Гарчиг) */}
          <div className="text-center mb-12">
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Бидний тухай
            </h1>
          </div>

          {/* Mission Statement (Эрхэм зорилго) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="text-4xl"></div>
              <div>
                <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                  Бидний эрхэм зорилго
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>ulaanbaatar.app</strong> нь Улаанбаатар хотын агаарын
                  чанар, цаг агаарын мэдээллийг ойлгомжтой, үзэмжтэй хэлбэрээр
                  хүргэдэг платформ юм.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Бид хүн бүр өөрийн эрүүл мэндээ хамгаалж, мэдээлэлтэй шийдвэр
                  гаргахад туслах зорилготой. Агаарын чанарын өгөгдлийг бодит
                  цагийн горимоор, ойлгомжтой дүрслэлээр, монгол хэлээр хүргэж
                  байна.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do (Бид юу хийдэг вэ) */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-mongolian text-xl font-bold text-gray-900 mb-3">
                Бодит өгөгдөл
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Агаарын чанар (AQI), PM2.5, PM10, озон, температур, салхи болон
                бусад үзүүлэлтүүдийг бодит цагийн горимоор харуулж байна.
                Мэдээлэл минут бүр шинэчлэгддэг.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-mongolian text-xl font-bold text-gray-900 mb-3">
                Газрын зураг
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Улаанбаатар хот даяар хэмжилтийн станцуудын мэдээллийг газрын
                зураг дээр харуулж, аль хэсэгт агаарын чанар муу байгааг
                ойлгоход тусална.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-mongolian text-xl font-bold text-gray-900 mb-3">
                Чиг хандлага
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Өнгөрсөн хоног, долоо хоног, сарын мэдээллийг график, диаграмаар
                харуулж, агаарын чанарын өөрчлөлтийг ойлгоход тусална.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-mongolian text-xl font-bold text-gray-900 mb-3">
                Тайлбар, зөвлөмж
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                AQI, PM2.5, озон гэх мэт нэр томъёонуудын тайлбар, эрүүл мэндэд
                үзүүлэх нөлөө, хамгаалах арга хэмжээний зөвлөгөө өгч байна.
              </p>
            </div>
          </div>

          {/* Why This Matters (Яагаад энэ чухал вэ) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3"></div>
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                Яагаад энэ чухал вэ?
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Улаанбаатар хот нь дэлхийд агаарын бохирдол хамгийн их хотуудын
                нэг юм. Ялангуяа өвлийн улиралд нүүрсний утаа, машины яндан,
                усан үеийн нөхцөл байдлаас шалтгаалан агаарын чанар эрс
                муудардаг.
              </p>
              <p>
                Агаарын бохирдол нь хүүхдүүд, өндөр настнууд, уушигны өвчтэй
                хүмүүст ялангуяа хортой. Мэдээллийг мэдэж байж, өдөр тутмын үйл
                ажиллагаагаа төлөвлөх (гадуур гарах, дасгал хөдөлгөөн хийх,
                нүүрс хүүхдийг сургуульд явуулах гэх мэт) нь эрүүл мэндийг
                хамгаалахад чухал ач холбогдолтой.
              </p>
            </div>
          </div>

          {/* Contact (Холбоо барих) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                Холбоо барих
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Санал хүсэлт, асуулт байвал бидэнтэй холбогдоорой. Таны саналыг
                үнэлж, платформоо сайжруулахад ашиглана.
              </p>

              <div className="inline-block bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold text-lg">
                  М.Дөлгөөн
                </p>
                <p className="text-gray-600 text-sm mb-3">Үүсгэн байгуулагч</p>
                <div className="space-y-2">
                  <p>
                    <a
                      href="mailto:dulguun.mdr@gmail.com"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                    >
                      dulguun.mdr@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.ulaanbaatar.app"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.ulaanbaatar.app
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-8 italic">
                Улаанбаатарын цэвэр агаарт хамтдаа
              </p>
            </div>
          </div>

          {/* Footer Message (Төгсгөлийн мессеж) */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">ulaanbaatar.app</span> нь хүн
              бүрийн эрүүл мэндэнд хувь нэмэр оруулахыг эрхэмлэдэг.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
