// components/Menu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button (Цэс товч) */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors z-50 relative"
        aria-label="Цэс"
      >
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu Panel (Цэсний самбар - дээрээс буух) */}
      <div
        className={`fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "top-16 opacity-100" : "top-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Items (Цэсний жагсаалт) */}
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-mongolian text-gray-700 hover:text-gray-900"
              >
                Нүүр хуудас
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-mongolian text-gray-700 hover:text-gray-900"
              >
                Нэр томъёо
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-mongolian text-gray-700 hover:text-gray-900"
              >
                Бидний тухай
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay (Дэвсгэр) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-30" onClick={closeMenu} />
      )}
    </>
  );
}
