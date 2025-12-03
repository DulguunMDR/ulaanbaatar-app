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
          үйлдвэрээс гардаг. Астма, амьсгалын өвчнийг дордуулна.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> ppb (parts per billion)
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
      </div>
    </section>
  );
}
