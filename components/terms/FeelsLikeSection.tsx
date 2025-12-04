// ============================================
// ФАЙЛ 9: components/terms/FeelsLikeSection.tsx
// Файлын байршил: components/terms/FeelsLikeSection.tsx
// ============================================

export function FeelsLikeSection() {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          Мэдрэмж (Feels Like)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Жинхэнэ температур биш, харин хүний биед мэдрэгдэх температур.{" "}
          <strong>Салхины хурд</strong> болон <strong>чийгшил</strong> зэргийг
          харгалзан тооцдог. Энэ нь гадаа гарахдаа ямар хувцас өмсөх, хэр удаан
          байх вэ гэдгийг шийдэхэд тусалдаг.
        </p>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">
            Хэрхэн тооцдог вэ?
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong> Өвлийн улиралд (Wind Chill):</strong> Салхи арьсны
              гадаргуугаас дулааныг хурдан авч, илүү хүйтэн мэдрэгдүүлнэ.
            </p>
            <p className="pl-4 text-gray-600">
              • Жишээ: -20°C + салхи 10 м/с = -30°C шиг мэдрэгдэнэ
            </p>
            <p className="mt-3">
              <strong> Зуны улиралд (Heat Index):</strong> Чийгшил өндөр үед
              хөлрөх нь удааширч, илүү халуун мэдрэгдэнэ.
            </p>
            <p className="pl-4 text-gray-600">
              • Жишээ: +30°C + чийгшил 80% = +35°C шиг мэдрэгдэнэ
            </p>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong> Улаанбаатарт:</strong> Өвлийн улиралд салхины хүчтэй үед
            &quot;мэдрэмж&quot; температур жинхэнэ температураас 5-15°C-аар
            доогуур байж болно. Хүйтний өвчин, цус хөлдөлтийн эрсдэлийг
            нэмэгдүүлдэг.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong> Салхины нөлөө (Wind Chill эффект):</strong>
          </p>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              • <strong>Салхигүй:</strong> -20°C → -20°C мэдрэгдэнэ
            </p>
            <p>
              • <strong>Сул салхи (5 м/с):</strong> -20°C → -25°C мэдрэгдэнэ
            </p>
            <p>
              • <strong>Хүчтэй салхи (10 м/с):</strong> -20°C → -30°C мэдрэгдэнэ
            </p>
            <p>
              • <strong>Шуурга (15+ м/с):</strong> -20°C → -35°C+ мэдрэгдэнэ
            </p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-orange-800 mb-2">
            <strong> Яагаад чухал вэ?</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Жинхэнэ температураас илүү бодит мэдрэмж өгдөг</li>
            <li>Хувцасны сонголтонд тусална (салхины куртка, малгай)</li>
            <li>Хүйтрэлт, дулааны цочролоос урьдчилан сэргийлнэ</li>
            <li>Гадаа байх аюулгүй хугацааг тооцоход тусална</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
