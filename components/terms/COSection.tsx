// ============================================
// ФАЙЛ 7: components/terms/COSection.tsx
// Файлын байршил: components/terms/COSection.tsx
// ============================================

export function COSection() {
  return (
    <section className="mb-10">
      <div className="bg-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          ⛽ CO (Нүүрстөрөгчийн дутуу исэл)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Carbon Monoxide (Нүүрстөрөгчийн дутуу исэл)</strong> - Төрөл
          бүрийн түлш шатаахад үүснэ. Өндөр хэмжээнд хорт.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> ppm (parts per million - саяны
            хэсэг)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-4.4 ppm
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 4.4-9.4 ppm
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 9.4+ ppm
          </p>
        </div>
      </div>
    </section>
  );
}
