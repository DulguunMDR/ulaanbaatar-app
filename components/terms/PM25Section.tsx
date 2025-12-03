// ============================================
// ФАЙЛ 2: components/terms/PM25Section.tsx
// Файлын байршил: components/terms/PM25Section.tsx
// ============================================

export function PM25Section() {
  return (
    <section className="mb-10">
      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          💨 PM2.5
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Particulate Matter 2.5 (Нарийн тоосонцор)</strong> - 2.5
          микрон буюу түүнээс бага хэмжээтэй тоосонцор. Маш жижиг учраас
          амьсгалын замаар уушгинд шууд нэвтэрч, эрүүл мэндэд ноцтой хортой.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> μg/m³ (микрограмм/шоо метр)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-12 μg/m³
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 12-35 μg/m³
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 35+ μg/m³
          </p>
        </div>
        <div className="mt-4 bg-red-50 rounded-lg p-4">
          <p className="text-sm text-red-800">
            <strong>⚠️ Анхаарал:</strong> PM2.5 нь зүрхний өвчин, уушгины хорт
            хавдар, астмыг үүсгэдэг. Хүүхэд, өндөр настан, астма өвчтэй хүмүүст
            илүү хортой.
          </p>
        </div>
      </div>
    </section>
  );
}
