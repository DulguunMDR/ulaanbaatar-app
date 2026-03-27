// app/page.tsx
import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-20">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-8">
            <h1 className="font-mongolian text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-4 tracking-tight break-words max-w-full px-2">
              Улаанбаатар
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>
        </div>

        {/* Passivhaus banner */}
        <Link
          href="/passivhaus"
          className="group relative block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="hidden md:block w-16 h-16 bg-white/20 rounded-xl flex-shrink-0 backdrop-blur-sm border border-white/30 p-3">
                <svg
                  className="w-full h-full text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-mongolian text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Passivhaus Гарын Авлага
                </h2>
                <p className="font-mongolian text-xs md:text-sm lg:text-base text-emerald-50 max-w-xl">
                  Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн, байгальд
                  ээлтэй байшин барих бүрэн гарын авлага
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-colors">
                <svg
                  className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
