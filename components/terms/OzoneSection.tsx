// ============================================
// ФАЙЛ 4: components/terms/OzoneSection.tsx
// Файлын байршил: components/terms/OzoneSection.tsx
// ============================================

export function OzoneSection() {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          ☀️ O₃ (Озон)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Ozone (Озон)</strong> - Газрын гадаргад үүссэн озон.
          Автомашин, үйлдвэрийн хий нарны гэрэлтэй урвалд ороход үүснэ. Нүд,
          уушгинд цухуйна. Нарны улиралд ихэснэ.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            📏 <strong>Хэмжих нэгж:</strong> ppb (parts per billion - тэрбум
            хэсэг)
          </p>
          <p className="text-sm text-gray-600">
            ✅ <strong>Аюулгүй түвшин:</strong> 0-54 ppb
          </p>
          <p className="text-sm text-gray-600">
            ⚠️ <strong>Дунд түвшин:</strong> 54-70 ppb
          </p>
          <p className="text-sm text-gray-600">
            🚫 <strong>Хортой түвшин:</strong> 70+ ppb
          </p>
        </div>
      </div>
    </section>
  );
}
