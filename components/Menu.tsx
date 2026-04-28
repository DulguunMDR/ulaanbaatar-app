"use client";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    label: "Нүүр хуудас",
    href: "/",
  },
  {
    label: "Цаг агаар",
    href: "/weather",
    sub: { label: "↳ Нэр томъёо", href: "/weather/terms" },
  },
  {
    label: "Passivhaus",
    href: "/passivhaus",
  },
  {
    label: "Бидний тухай",
    href: "/about",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2 hover:bg-gray-50 rounded-lg transition-colors z-50 relative"
        aria-label="Цэс"
      >
        <span
          className={`w-5 h-px bg-gray-600 transition-transform origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`w-5 h-px bg-gray-600 transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-5 h-px bg-gray-600 transition-transform origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`fixed left-0 right-0 bg-white border-b border-gray-100
                    transition-all duration-300 ease-in-out z-40
                    ${isOpen ? "top-14 md:top-16 opacity-100" : "top-0 opacity-0 pointer-events-none"}`}
      >
        <nav className="max-w-7xl mx-auto px-8 md:px-14 py-8">
          <p
            className="text-gray-300 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Цэс · Navigation
          </p>
          <ul className="space-y-0.5">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-0 py-2.5 text-gray-600 hover:text-gray-900
                             transition-colors border-b border-gray-50"
                  style={{ fontSize: "15px" }}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <Link
                    href={item.sub.href}
                    onClick={closeMenu}
                    className="block pl-4 py-2 text-gray-400 hover:text-gray-700
                               transition-colors border-b border-gray-50"
                    style={{ fontSize: "13px" }}
                  >
                    {item.sub.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/10 z-30" onClick={closeMenu} />
      )}
    </>
  );
}
