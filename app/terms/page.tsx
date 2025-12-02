// app/terms/page.tsx

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content (Агуулга) */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title (Гарчиг) */}
          <h1 className="font-mongolian text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Нэр томъёоны тайлбар
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Агаарын чанар, цаг агаарын үзүүлэлтүүдийн тайлбар
          </p>

          {/* AQI Section */}
          <section className="mb-10">
            <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-4">
                🔴 AQI (Air Quality Index)
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <strong>Агаарын чанарын индекс</strong> - Агаарын бохирдлын
                түвшинг хэмжих олон улсын стандарт. 0-500 хүртэлх утгатай бөгөөд
                тоо их байх тусам агаар бохирдсон гэсэн үг.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    0-50
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Сайн
                    </p>
                    <p className="text-sm text-gray-600">
                      Агаар цэвэр, гадаа явах аюулгүй
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
                    51-100
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Дунд
                    </p>
                    <p className="text-sm text-gray-600">
                      Ихэнх хүмүүст аюулгүй
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    101-150
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Эрүүл мэндэд сөрөг
                    </p>
                    <p className="text-sm text-gray-600">
                      Мэдрэмтгий хүмүүст сөрөг нөлөөтэй
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    151-200
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Эрүүл мэндэд хортой
                    </p>
                    <p className="text-sm text-gray-600">
                      Бүх хүмүүст сөрөг нөлөөтэй
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                    201-300
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Маш хортой
                    </p>
                    <p className="text-sm text-gray-600">
                      Гадуур гарахгүй байх хэрэгтэй
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center text-white font-bold">
                    300+
                  </div>
                  <div>
                    <p className="font-mongolian font-bold text-gray-900">
                      Аюултай
                    </p>
                    <p className="text-sm text-gray-600">
                      Эрүүл мэндэд ноцтой аюултай
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PM2.5 */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                🔬 PM2.5
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Particulate Matter 2.5</strong> - 2.5 микрон буюу
                түүнээс бага хэмжээтэй тоосонцор. Маш жижиг учраас амьсгалын
                замаар уушгинд шууд нэвтэрч, эрүүл мэндэд ноцтой хортой.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  📏 <strong>Хэмжих нэгж:</strong> μg/m³ (микрограмм/шоо метр)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  ⚠️ <strong>Аюулгүй түвшин:</strong> 0-12 μg/m³
                </p>
              </div>
            </div>
          </section>

          {/* PM10 */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                🔬 PM10
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Particulate Matter 10</strong> - 10 микрон хүртэлх
                хэмжээтэй тоосонцор. PM2.5-аас том боловч амьсгалын замд
                бохирдол үүсгэдэг.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  📏 <strong>Хэмжих нэгж:</strong> μg/m³ (микрограмм/шоо метр)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  ⚠️ <strong>Аюулгүй түвшин:</strong> 0-54 μg/m³
                </p>
              </div>
            </div>
          </section>

          {/* Temperature */}
          <section className="mb-10">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                🌡️ Температур
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Агаарын халуун, хүйтний хэмжээ. Celsius (°C) хэмжигдэхүүнээр
                илэрхийлэгддэг.
              </p>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">
                  ❄️ <strong>0°C ба түүнээс доош:</strong> Хүйтэн, халуун хувцас
                  өмсөх
                </p>
                <p className="text-sm text-gray-600">
                  🌤️ <strong>0°C - 20°C:</strong> Сэрүүн, дунд зэргийн хувцас
                </p>
                <p className="text-sm text-gray-600">
                  ☀️ <strong>20°C+:</strong> Дулаан, хөнгөн хувцас
                </p>
              </div>
            </div>
          </section>

          {/* Feels Like */}
          <section className="mb-10">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                🤚 Мэдрэмж (Feels Like)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Жинхэнэ температур биш, харин хүний биед мэдрэгдэх температур.
                Салхины хурд, чийгшил зэргийг харгалзан тооцдог.
              </p>
            </div>
          </section>

          {/* Wind Speed */}
          <section className="mb-10">
            <div className="bg-cyan-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                💨 Салхины хурд
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Салхи хөдөлж буй хурд. Метр/секунд (м/с) эсвэл километр/цаг
                (км/ц) хэмжигдэхүүнээр илэрхийлнэ.
              </p>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">
                  🍃 <strong>0-5 м/с:</strong> Зөөлөн, тайван
                </p>
                <p className="text-sm text-gray-600">
                  🌬️ <strong>6-10 м/с:</strong> Дунд зэрэг
                </p>
                <p className="text-sm text-gray-600">
                  🌪️ <strong>11+ м/с:</strong> Хүчтэй салхи
                </p>
              </div>
            </div>
          </section>

          {/* Humidity */}
          <section className="mb-10">
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
                💧 Чийгшил (Humidity)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Агаарт агуулагдах усны уурын хэмжээ. Хувиар (%) илэрхийлэгддэг.
              </p>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">
                  🏜️ <strong>0-30%:</strong> Хуурай
                </p>
                <p className="text-sm text-gray-600">
                  ✅ <strong>30-60%:</strong> Тохиромжтой
                </p>
                <p className="text-sm text-gray-600">
                  💦 <strong>60-100%:</strong> Чийглэг
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center border-t pt-8 text-gray-400 text-sm">
            <p>
              💡 Эдгээр үзүүлэлтүүдийг ойлгож, өөрийн эрүүл мэндээ хамгаалаарай
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
