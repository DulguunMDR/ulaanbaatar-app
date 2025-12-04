// ============================================
// ФАЙЛ 8: components/terms/TemperatureSection.tsx
// Файлын байршил: components/terms/TemperatureSection.tsx
// ============================================

export function TemperatureSection() {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          Температур
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Агаарын халуун, хүйтний хэмжээ. Celsius (°C) хэмжигдэхүүнээр
          илэрхийлэгддэг. Температур нь биеийн дулааны баланс, агаарын чанар,
          эрүүл мэндэд шууд нөлөөлдөг.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            <strong>-40°C ба түүнээс доош:</strong> Онцгой хүйтэн - Хатуу ширүүн
            өвөл (Улаанбаатарт жилд хэдэн удаа)
          </p>
          <p className="text-sm text-gray-600">
            <strong>-40°C - -20°C:</strong> Маш хүйтэн - Өвлийн бүрэн хувцас,
            царай таглах
          </p>
          <p className="text-sm text-gray-600">
            <strong>-20°C - 0°C:</strong> Хүйтэн - Дулаан хувцас, ноосон малгай
          </p>
          <p className="text-sm text-gray-600">
            <strong>0°C - 10°C:</strong> Сэрүүн - Дунд зэргийн куртка, өвлийн
            эцэс/хаврын эхэн
          </p>
          <p className="text-sm text-gray-600">
            <strong>10°C - 20°C:</strong> Тааламжтай - Хөнгөн куртка, зун эхлэх
          </p>
          <p className="text-sm text-gray-600">
            <strong>20°C - 30°C:</strong> Дулаан - Намрын хувцас, зуны өдрүүд
          </p>
          <p className="text-sm text-gray-600">
            <strong>30°C+:</strong> Халуун - Богино ханцуй, усны хэрэглээ
            нэмэгдүүлэх
          </p>
        </div>
        <div className="mt-4 bg-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong> Улаанбаатарт:</strong> Дэлхийн хамгийн хүйтэн нийслэл. Өвөл
            -40°C хүртэл хүрч, зун +30°C болдог. Температурын зөрүү 70°C+ хүрнэ.
            Халуун, хүйтэн хоёуланд дасах шаардлагатай.
          </p>
        </div>
        <div className="mt-4 bg-white border-l-4 border-blue-500 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong> Температур ба агаарын чанар:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Өвлийн хүйтэнд халаалт ихэсч, агаар бохирдол өсдөг</li>
            <li>
              -30°C-аас хүйтэн үед тооsonцор агаарт удаан хугацаагаар үлдэнэ
            </li>
            <li>Зуны халуунд озон түвшин өндөр байдаг</li>
            <li>Температурын огцом өөрчлөлт эрүүл мэндэд хортой</li>
          </ul>
        </div>
        <div className="mt-4 bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-orange-800">
            <strong> Зөвлөгөө:</strong> -30°C-аас хүйтэн үед гадаа байх хугацааг
            багасгах, царайгаа хамгаалах. +25°C-аас дээш үед ус ихээр уух,
            нарнаас хамгаална. Температурыг агаарын чанартай хамт харгалзан
            гадаагаа гарах эсэхээ шийднэ.
          </p>
        </div>
      </div>
    </section>
  );
}
