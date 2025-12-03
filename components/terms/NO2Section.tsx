// ============================================
// ФАЙЛ 5: components/terms/NO2Section.tsx
// Файлын байршил: components/terms/NO2Section.tsx
// ============================================

export function NO2Section() {
  return (
    <section className="mb-10">
      <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          🚗 NO₂ (Азотын давхар исэл)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Nitrogen Dioxide (Азотын давхар исэл)</strong> - Автомашин,
          үйлдвэрийн шаталтын явцад үүснэ. Астма, амьсгалын өвчнийг дордуулж,
          уушгины үрэвслийг бий болгоно. Хүүхдийн уушгины хөгжилд сөргөөр
          нөлөөлдөг.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> ppb (parts per billion - тэрбумын
            хэсэг)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-53 ppb
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 53-100 ppb
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 100+ ppb
          </p>
        </div>
        <div className="mt-4 bg-yellow-100 rounded-lg p-4">
          <p className="text-sm text-yellow-900 mb-2">
            <strong>🚦 Улаанбаатарт:</strong> Оргил цагуудад (07:00-09:00,
            17:00-19:00) автомашины урсгал ихэсдэг тул NO₂-ийн түвшин өндөр
            байна. Гол замуудын дагуух хорооллууд илүү өртдөг.
          </p>
        </div>
        <div className="mt-4 bg-white border-l-4 border-yellow-500 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>💡 Анхааруулга:</strong> Өндөр түвшинд хүрэхэд амьсгалахад
            хүндрэлтэй болох, ханиад, астмын хүндрэл, уушгины халдварт өвчинд
            илүү өртөмтгий болно. Хүүхэд, ахмад настан, амьсгалын өвчтэй хүмүүс
            анхааралтай байх шаардлагатай.
          </p>
        </div>
      </div>
    </section>
  );
}
