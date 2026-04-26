// app/page.tsx

import Link from "next/link";

export default function Home() {
  const today = new Date().toLocaleDateString("mn-MN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        {/* Vertical spine */}
        <div
          className="border-r border-gray-100 flex items-center justify-center py-16"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className="text-gray-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            УЛААНБААТАР · 1639 — 2026
          </span>
        </div>

        {/* Hero content */}
        <div className="px-8 md:px-14 py-12 md:py-20">
          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(52px, 11vw, 100px)",
              lineHeight: "0.86",
            }}
          >
            УЛААН
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(2rem, 5vw, 5rem)" }}
            >
              БААТАР
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MOUNTAIN SILHOUETTE DIVIDER
      ════════════════════════════════════════════ */}
      <div className="overflow-hidden border-b border-gray-100">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: "72px", display: "block" }}
          aria-hidden="true"
        >
          <path
            d="M0,80 L0,52 L120,28 L240,50 L380,10 L500,38
               L620,4 L740,30 L860,12 L980,36 L1100,18
               L1220,42 L1340,24 L1440,34 L1440,80 Z"
            fill="#f9fafb"
          />
          <path
            d="M0,80 L0,70 L180,60 L360,67 L540,56 L720,63
               L900,55 L1080,64 L1260,57 L1440,63 L1440,80 Z"
            fill="white"
          />
          <text
            x="50%"
            y="14"
            textAnchor="middle"
            fill="#d1d5db"
            fontSize="8.5"
            letterSpacing="5"
            fontFamily="var(--font-inter)"
          >
            БОГД ХАЙРХАН · ЧИНГЭЛТЭЙ · БАЯНЗҮРХ · СОНГИНОХАЙРХАН
          </text>
        </svg>
      </div>

      {/* ════════════════════════════════════════════
          BENTO ROW 1 — Sacred city (full width)
      ════════════════════════════════════════════ */}
      <section className="border-b border-gray-100">
        <Link
          href="/sacred"
          className="group flex flex-col md:flex-row md:items-end md:justify-between
                     p-8 md:p-12 bg-amber-50/40 hover:bg-amber-50/80
                     transition-colors duration-300"
        >
          <div className="max-w-xl">
            <p
              className="text-amber-500 uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Ариун хот · Sacred city
            </p>
            <h2
              className="font-normal text-gray-800 mb-4 leading-snug"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(24px, 4vw, 40px)",
              }}
            >
              Ариун Хот
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Улаанбаатар 1639 онд Буддын хийд болж үүссэн. 29 удаа нүүж, 4
              ариун уулаар хүрээлэгдсэн хөндийд суурьшжээ. 200 жил амьд Бурхан
              захирсан хот. Энэ түүхийг олон хүн мэддэггүй.
            </p>
            <blockquote className="border-l-2 border-amber-300 pl-4 italic text-sm text-amber-700 leading-relaxed">
              &quot;It is not a city that happens to have sacred sites — it is a
              sacred site that became a city.&quot;
            </blockquote>
          </div>
          <span
            className="text-gray-400 group-hover:text-gray-600 transition-colors
                       mt-8 md:mt-0 md:mb-1 block tracking-wider flex-shrink-0"
            style={{ fontSize: "11px" }}
          >
            Дэлгэрэнгүй унших →
          </span>
        </Link>
      </section>

      {/* ════════════════════════════════════════════
          BENTO ROW 2 — Passivhaus + Museums
      ════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
        {/* Passivhaus */}
        <Link
          href="/passivhaus"
          className="group p-8 md:p-12
                     border-b md:border-b-0 md:border-r border-gray-100
                     hover:bg-gray-50 transition-colors duration-300"
        >
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Байшин · Passivhaus
          </p>
          <h2
            className="font-normal text-gray-800 mb-3 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(20px, 2.5vw, 28px)",
            }}
          >
            Хүйтэнд дулаан байшин
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн байшин барих бүрэн
            гарын авлага.
          </p>
          <span
            className="text-gray-400 group-hover:text-gray-600 transition-colors mt-7 block tracking-wider"
            style={{ fontSize: "11px" }}
          >
            Гарын авлага →
          </span>
        </Link>

        {/* Museums */}
        <Link
          href="/museums"
          className="group md:col-span-2 p-8 md:p-12
                     hover:bg-gray-50 transition-colors duration-300"
        >
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Музей · Галерей
          </p>
          <h2
            className="font-normal text-gray-800 mb-3 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(22px, 3vw, 32px)",
            }}
          >
            Хотын Музей · Галерей
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            Чойжин ламын сүм. Богд хааны ордон. Занабазарын музей. Сталины
            цэргүүдээс амьд үлдсэн гэрч — эдгээр нь зүгээр нэг аялал жуулчлалын
            газрууд биш, манай хотын ой санамж.
          </p>
          <span
            className="text-gray-400 group-hover:text-gray-600 transition-colors mt-7 block tracking-wider"
            style={{ fontSize: "11px" }}
          >
            Газруудыг үзэх →
          </span>
        </Link>
      </section>

      {/* ════════════════════════════════════════════
          JOURNAL STRIP — personal voice
      ════════════════════════════════════════════ */}
      <section className="px-8 md:px-14 py-12 md:py-16 bg-gray-50/50">
        <p
          className="text-gray-300 uppercase mb-5"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          {today} · Өнөөдрийн тэмдэглэл
        </p>

        <Link
          href="/journal"
          className="text-gray-400 hover:text-gray-600 transition-colors mt-8 block tracking-wider"
          style={{ fontSize: "11px" }}
        >
          Тэмдэглэлийн бүх хуудас →
        </Link>
      </section>
    </main>
  );
}
