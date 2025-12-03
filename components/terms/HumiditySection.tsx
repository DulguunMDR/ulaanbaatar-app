// ============================================
// ФАЙЛ 11: components/terms/HumiditySection.tsx
// Файлын байршил: components/terms/HumiditySection.tsx
// ============================================

export function HumiditySection() {
  return (
    <section className="mb-10">
      <div className="bg-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          💧 Чийгшил (Humidity)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Агаарт агуулагдах усны уурын хэмжээ. Хувиар (%) илэрхийлэгддэг.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            🏜️ <strong>0-30%:</strong> Хуурай (арьс хатна)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>30-60%:</strong> Тохиромжтой (эрүүл)
          </p>
          <p className="text-sm text-gray-600">
            💦 <strong>60-80%:</strong> Чийглэг (амьсгалахад хүнд)
          </p>
          <p className="text-sm text-gray-600">
            🌧️ <strong>80-100%:</strong> Маш чийглэг (манан, бороо)
          </p>
        </div>
      </div>
    </section>
  );
}
