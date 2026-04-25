"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        {/* Vertical spine */}
        <div
          className="border-r border-gray-100 flex items-center justify-center py-10"
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
            АЛДАА · ERROR
          </span>
        </div>

        {/* Content */}
        <div className="px-8 md:px-14 py-16 md:py-24">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.14em",
            }}
          >
            Алдаа гарлаа
          </p>

          <h1
            className="font-normal text-gray-900 mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 40px)",
            }}
          >
            Ямар нэг зүйл буруу боллоо
          </h1>

          <hr className="border-gray-100 mb-6 max-w-xs" />

          <p
            className="text-gray-400 leading-relaxed mb-10 max-w-sm"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
          >
            Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.
          </p>

          {/* Dev error detail */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-10 border border-gray-100 p-4 max-w-sm">
              <p
                className="text-gray-300 uppercase mb-2"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Алдааны мессеж
              </p>
              <code
                className="text-gray-500 break-words"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  lineHeight: "1.6",
                }}
              >
                {error.message}
              </code>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-8">
            <button
              onClick={reset}
              className="text-gray-900 border-b border-gray-900 pb-px transition-colors hover:text-gray-400 hover:border-gray-400"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                background: "none",
                cursor: "pointer",
              }}
            >
              Дахин оролдох
            </button>

            <Link
              href="/"
              className="text-gray-400 border-b border-gray-200 pb-px transition-colors hover:text-gray-900 hover:border-gray-900"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                letterSpacing: "0.06em",
              }}
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
