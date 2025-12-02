// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          {/* 404 Number (404 дугаар) */}
          <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>

          {/* Title (Гарчиг) */}
          <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-4">
            Хуудас олдсонгүй
          </h2>

          {/* Description (Тайлбар) */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Таны хайж буй хуудас олдсонгүй эсвэл устсан байна.
          </p>

          {/* Back to Home Button (Нүүр хуудас руу буцах товч) */}
          <Link
            href="/"
            className="inline-block bg-golden hover:bg-golden-hover text-white font-mongolian font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
          >
            🏠 Нүүр хуудас руу буцах
          </Link>
        </div>
      </div>
    </main>
  );
}
