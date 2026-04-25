// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white flex flex-col">
      <section
        className="flex-1 grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        {/* Vertical spine */}
        <div
          className="border-r border-gray-100 flex items-center justify-center"
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
            404 · ОЛДСОНГҮЙ
          </span>
        </div>

        <div className="px-8 md:px-14 py-20 md:py-32 flex flex-col justify-center">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Алдаа · Error
          </p>

          <div
            className="font-mono font-light text-gray-100 mb-6 select-none"
            style={{ fontSize: "clamp(80px, 16vw, 160px)", lineHeight: 1 }}
          >
            404
          </div>

          <h1
            className="font-normal text-gray-800 mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(24px, 4vw, 40px)",
            }}
          >
            Хуудас олдсонгүй
          </h1>

          <hr className="border-gray-100 mb-6 max-w-xs" />

          <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs">
            Таны хайж буй хуудас олдсонгүй эсвэл устсан байна.
          </p>

          <Link
            href="/"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            Нүүр хуудас руу буцах →
          </Link>
        </div>
      </section>
    </main>
  );
}
