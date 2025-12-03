// ============================================
// ФАЙЛ 9: components/terms/FeelsLikeSection.tsx
// Файлын байршил: components/terms/FeelsLikeSection.tsx
// ============================================

export function FeelsLikeSection() {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          🤚 Мэдрэмж (Feels Like)
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Жинхэнэ температур биш, харин хүний биед мэдрэгдэх температур. Салхины
          хурд, чийгшил зэргийг харгалзан тооцдог. Жишээ нь: Гадаа -20°C байсан
          ч салхитай бол -30°C шиг мэдрэгдэнэ.
        </p>
      </div>
    </section>
  );
}
