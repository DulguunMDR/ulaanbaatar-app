// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console (Алдааг консол руу бичих)
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          {/* Error Icon (Алдааны дүрс) */}
          <div className="text-8xl mb-6">⚠️</div>

          {/* Title (Гарчиг) */}
          <h2 className="font-mongolian text-3xl font-bold text-gray-900 mb-4">
            Алдаа гарлаа
          </h2>

          {/* Description (Тайлбар) */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Уучлаарай, ямар нэг алдаа гарлаа. Дахин оролдоно уу.
          </p>

          {/* Error message for development (Хөгжүүлэлтийн орчинд харагдах алдааны мессеж) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-xs font-mono text-red-700 break-words">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons (Товчнууд) */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-golden hover:bg-golden-hover text-white font-mongolian font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              🔄 Дахин оролдох
            </button>

            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-mongolian font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              🏠 Нүүр хуудас
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
