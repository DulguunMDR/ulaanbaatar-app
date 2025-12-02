// app/about/page.tsx
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header temp={null} windSpeed={0} />

      {/* Content (Агуулга) */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Title (Гарчиг) */}
          <h1 className="font-mongolian text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Бидний тухай
          </h1>

          {/* Simple intro */}
          <div className="text-center mb-12">
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              <strong>ulaanbaatar.app</strong> нь Улаанбаатар хотын агаарын
              чанар, цаг агаарын мэдээллийг ойлгомжтой, үзэмжтэй хэлбэрээр
              хүргэдэг платформ.
            </p>
          </div>

          {/* Data Sources (Өгөгдлийн эх үүсвэр) */}
          <section className="mb-12">
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6 text-center">
              Өгөгдлийн эх үүсвэр
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="font-mongolian font-bold text-gray-900 mb-2">
                  World Air Quality Index
                </h3>
                <p className="text-gray-600 text-sm">AQI, PM2.5, PM10</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="font-mongolian font-bold text-gray-900 mb-2">
                  OpenWeather
                </h3>
                <p className="text-gray-600 text-sm">
                  Температур, салхи, чийгшил
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <div className="text-center border-t pt-8">
            <p className="text-gray-500 text-sm mb-2">
              🌐{" "}
              <a
                href="https://www.ulaanbaatar.app"
                className="text-blue-600 hover:underline"
              >
                www.ulaanbaatar.app
              </a>
            </p>
            <p className="text-gray-400 text-xs">
              🏙️ Улаанбаатарын ирээдүйд хамтдаа
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
