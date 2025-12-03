// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
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

          {/* Contact (Холбоо барих) */}
          <div className="text-center border-t pt-8">
            <h2 className="font-mongolian text-xl font-bold text-gray-900 mb-4">
              Холбоо барих
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>М.Дөлгөөн</strong>
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {" "}
              <a
                href="mailto:dulguun.mdr@gmail.com"
                className="text-blue-600 hover:underline"
              >
                dulguun.mdr@gmail.com
              </a>
            </p>
            <p className="text-gray-500 text-sm mb-2">
              {" "}
              <a
                href="https://www.ulaanbaatar.app"
                className="text-blue-600 hover:underline"
              >
                www.ulaanbaatar.app
              </a>
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Улаанбаатарын ирээдүйд хамтдаа
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
