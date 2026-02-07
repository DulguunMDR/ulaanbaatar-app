// ============================================
// ФАЙЛ: app/passivhaus/page.tsx
// Файлын байршил: app/passivhaus/page.tsx
// Passivhaus үндсэн хуудас - Мобайл дэлгэцэнд сайжруулсан
// ============================================

import Link from "next/link";

export default function PassivhausPage() {
  // Passivhaus сэдвүүд
  const topics = [
    {
      id: "introduction",
      number: "01",
      title: "Танилцуулга",
      description: "Passivhaus гэж юу вэ? Яагаад Монголд чухал вэ?",
      href: "/passivhaus/introduction",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
    },
    {
      id: "insulation",
      number: "02",
      title: "Дулаалга",
      description: "-40°C-д тэсвэрлэх дулаалгын систем",
      href: "/passivhaus/insulation",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      hoverBorder: "hover:border-amber-400",
    },
    {
      id: "windows",
      number: "03",
      title: "Цонх ба Хаалга",
      description: "Өндөр чанарын цонх сонгох заавар",
      href: "/passivhaus/windows",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      hoverBorder: "hover:border-emerald-400",
    },
    {
      id: "ventilation",
      number: "04",
      title: "Агааржуулалт",
      description: "Дулаан сэргээх агааржуулалтын систем",
      href: "/passivhaus/ventilation",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      hoverBorder: "hover:border-indigo-400",
    },
    {
      id: "airtightness",
      number: "05",
      title: "Агааргүйдэл",
      description: "Агаар алдагдахгүй барилгын техник",
      href: "/passivhaus/airtightness",
      color: "teal",
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      hoverBorder: "hover:border-teal-400",
    },
    {
      id: "heating",
      number: "06",
      title: "Халаалт",
      description: "Эрчим хүч хэмнэсэн халаалтын шийдэл",
      href: "/passivhaus/heating",
      color: "rose",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      hoverBorder: "hover:border-rose-400",
    },
    {
      id: "materials",
      number: "07",
      title: "Материал ба Нийлүүлэгч",
      description: "Монгол дахь материалын сонголт",
      href: "/passivhaus/materials",
      color: "violet",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200",
      hoverBorder: "hover:border-violet-400",
    },
    {
      id: "construction",
      number: "08",
      title: "Барилгын Процесс",
      description: "Алхам алхмаар барих заавар",
      href: "/passivhaus/construction",
      color: "slate",
      gradient: "from-slate-500 to-gray-500",
      bgGradient: "from-slate-50 to-gray-50",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-slate-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 
        МОБАЙЛ ЗАСВАР:
        - pt-20 (mobile) = 80px - Header-ын өндрийг тооцох
        - md:pt-24 (desktop) = 96px - Том дэлгэцэнд илүү их зай
        - Энэ нь header доогуур контент харагдахгүй байхыг баталгаажуулна
      */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Эрчим Хүч Хэмнэсэн Барилга
            </div>
            {/* 
              Responsive heading:
              - text-4xl (mobile) = 36px
              - md:text-6xl (tablet) = 60px
              - lg:text-7xl (desktop) = 72px
            */}
            <h1 className="font-mongolian text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Passivhaus
              <br />
              Гарын Авлага
            </h1>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          {/* 
            Responsive subtitle:
            - text-base (mobile) = 16px
            - md:text-lg (tablet) = 18px
            - lg:text-xl (desktop) = 20px
          */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 font-mongolian max-w-3xl mx-auto leading-relaxed px-4">
            Монголын хүйтэн уур амьсгалд тохирсон эрчим хүчний хэмнэлттэй,
            байгальд ээлтэй гэр барих бүрэн гарын авлага
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="font-mongolian font-semibold text-cyan-900 mb-2 text-lg">
              -40°C-д Тэсвэртэй
            </h3>
            <p className="text-sm text-cyan-700 font-mongolian leading-relaxed">
              Монголын хатуу өвлийг даван туулах дулаалга
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white font-bold text-xl">90%</div>
            </div>
            <h3 className="font-mongolian font-semibold text-green-900 mb-2 text-lg">
              Эрчим Хүч Хэмнэнэ
            </h3>
            <p className="text-sm text-green-700 font-mongolian leading-relaxed">
              Жилийн халаалтын зардал эрс буурна
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-mongolian font-semibold text-purple-900 mb-2 text-lg">
              Байгальд Ээлтэй
            </h3>
            <p className="text-sm text-purple-700 font-mongolian leading-relaxed">
              CO₂ ялгаруулалт багатай, ногоон барилга
            </p>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-16">
          <h2 className="font-mongolian text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Сэдвүүд
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.href}
                className={`group bg-gradient-to-br ${topic.bgGradient} border-2 ${topic.borderColor} ${topic.hoverBorder} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`bg-gradient-to-r ${topic.gradient} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {topic.number}
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-mongolian font-semibold text-gray-900 mb-2 text-base group-hover:text-gray-700 transition-colors">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 font-mongolian leading-relaxed">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 md:p-14 text-center text-white shadow-xl">
          <h2 className="font-mongolian text-3xl md:text-4xl font-bold mb-4">
            Өөрийн Passivhaus-аа барихад бэлэн үү?
          </h2>
          <p className="font-mongolian text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Танилцуулга хэсгээс эхэлж, алхам алхмаар суралцаарай
          </p>
          <Link
            href="/passivhaus/introduction"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-mongolian font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            <span>Эхлэх</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
