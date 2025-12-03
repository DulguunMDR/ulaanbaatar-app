// ============================================
// ФАЙЛ 3: components/terms/PM10Section.tsx
// Файлын байршил: components/terms/PM10Section.tsx
// ============================================

export function PM10Section() {
  return (
    <section className="mb-10">
      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          🌫️ PM10
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Particulate Matter 10 (Бүдүүн тоосонцор)</strong> - 10 микрон
          хүртэлх хэмжээтэй тоосонцор. PM2.5-аас том боловч амьсгалын замд
          бохирдол үүсгэдэг.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> μg/m³ (микрограмм/шоо метр)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-54 μg/m³
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 54-154 μg/m³
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 154+ μg/m³
          </p>
        </div>
        <div className="mt-4 bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-orange-800">
            <strong>💡 Мэдэх зүйл:</strong> PM10 нь ханиад, нүдний цочрол,
            шинээр хүүхэд, настай хүмүүст амьсгалын замын өвчин үүсгэнэ.
          </p>
        </div>
      </div>
    </section>
  );
}
