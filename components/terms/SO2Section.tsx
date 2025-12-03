// ============================================
// ФАЙЛ 6: components/terms/SO2Section.tsx
// Файлын байршил: components/terms/SO2Section.tsx
// ============================================

export function SO2Section() {
  return (
    <section className="mb-10">
      <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          🏭 SO₂ (Хүхрийн давхар исэл)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Sulfur Dioxide (Хүхрийн давхар исэл)</strong> - Нүүрс, түүхий
          тос шатаахад үүснэ. Амьсгалын замд цухуйж, астма үүсгэнэ. Агаар
          мандалд хүчиллэг бороо үүсгэх гол нэг шалтгаан.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> ppb (parts per billion - тэрбумын
            хэсэг)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-35 ppb
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 35-75 ppb
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 75+ ppb
          </p>
        </div>
        <div className="mt-4 bg-purple-100 rounded-lg p-4">
          <p className="text-sm text-purple-900 mb-2">
            <strong>🏙️ Улаанбаатарт:</strong> Өвлийн улиралд нүүрсээр халаалт
            хийдэг тул SO₂-ийн хэмжээ мэдэгдэхүйц нэмэгддэг. Нарны улиралд
            ихэвчлэн бага байна.
          </p>
        </div>
        <div className="mt-4 bg-white border-l-4 border-purple-500 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>💡 Эрүүл мэндэд үзүүлэх нөлөө:</strong> Амьсгалын замын
            цочрол, ханиад, уушгины үрэвсэл, астмын хүндрэл, өвчтөнүүдэд өдөөлт
            үүсгэнэ. Хүүхэд, настай хүмүүст илүү хортой.
          </p>
        </div>
      </div>
    </section>
  );
}
