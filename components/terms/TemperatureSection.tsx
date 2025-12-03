// ============================================
// ФАЙЛ 8: components/terms/TemperatureSection.tsx
// Файлын байршил: components/terms/TemperatureSection.tsx
// ============================================

export function TemperatureSection() {
  return (
    <section className="mb-10">
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-4">
          🌡️ Температур
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Агаарын халуун, хүйтний хэмжээ. Celsius (°C) хэмжигдэхүүнээр
          илэрхийлэгддэг.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-600">
            ❄️ <strong>-30°C ба түүнээс доош:</strong> Маш хүйтэн, өвлийн бүрэн
            хувцас
          </p>
          <p className="text-sm text-gray-600">
            🥶 <strong>-30°C - 0°C:</strong> Хүйтэн, дулаан хувцас өмсөх
          </p>
          <p className="text-sm text-gray-600">
            🌤️ <strong>0°C - 20°C:</strong> Сэрүүн, дунд зэргийн хувцас
          </p>
          <p className="text-sm text-gray-600">
            ☀️ <strong>20°C+:</strong> Дулаан, хөнгөн хувцас
          </p>
        </div>
      </div>
    </section>
  );
}
