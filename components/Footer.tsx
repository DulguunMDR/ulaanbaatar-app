// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Links (Холбоосууд) */}
        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            Нүүр
          </Link>
          <Link
            href="/terms"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            Нэр томъёо
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            Бидний тухай
          </Link>
        </div>

        {/* Copyright (Зохиогчийн эрх) */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} ulaanbaatar.app</p>
        </div>
      </div>
    </footer>
  );
}
