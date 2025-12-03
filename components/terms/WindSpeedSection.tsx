// ============================================
// ФАЙЛ 10: components/terms/WindSpeedSection.tsx
// Файлын байршил: components/terms/WindSpeedSection.tsx
// ============================================

export function WindSpeedSection() {
  return (
    <section className="mb-10">
      <div className="bg-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          💨 Салхины хурд
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Салхи хөдөлж буй хурд. Метр/секунд (м/с) эсвэл километр/цаг (км/ц)
          хэмжигдэхүүнээр илэрхийлнэ.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            🍃 <strong>0-5 м/с:</strong> Зөөлөн, тайван
          </p>
          <p className="text-sm text-gray-600">
            🌬️ <strong>6-10 м/с:</strong> Дунд зэрэг
          </p>
          <p className="text-sm text-gray-600">
            🌪️ <strong>11-15 м/с:</strong> Хүчтэй салхи
          </p>
          <p className="text-sm text-gray-600">
            🌀 <strong>16+ м/с:</strong> Маш хүчтэй, шуурга
          </p>
        </div>
      </div>
    </section>
  );
}
