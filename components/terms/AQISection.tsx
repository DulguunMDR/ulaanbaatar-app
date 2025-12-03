// ============================================
// ФАЙЛ 1: components/terms/AQISection.tsx
// Файлын байршил: components/terms/AQISection.tsx
// ============================================

export default function AQISection() {
  return (
    <section className="mb-10">
      <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl p-8 shadow-lg">
        <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-4">
          🌍 AQI (Air Quality Index)
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          <strong>Агаарын чанарын индекс</strong> - Агаарын бохирдлын түвшинг
          хэмжих олон улсын стандарт. 0-500 хүртэлх утгатай бөгөөд тоо их байх
          тусам агаар бохирдсон гэсэн үг.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shrink-0">
              0-50
            </div>
            <div>
              <p className="font-mongolian font-bold text-gray-900">Сайн</p>
              <p className="text-sm text-gray-600">
                Агаар цэвэр, гадаа явах аюулгүй
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold shrink-0">
              51-100
            </div>
            <div>
              <p className="font-mongolian font-bold text-gray-900">Дунд</p>
              <p className="text-sm text-gray-600">Ихэнх хүмүүст аюулгүй</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">
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

          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold shrink-0">
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

          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shrink-0">
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

          <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center text-white font-bold shrink-0">
              300+
            </div>
            <div>
              <p className="font-mongolian font-bold text-gray-900">Аюултай</p>
              <p className="text-sm text-gray-600">
                Эрүүл мэндэд ноцтой аюултай
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
