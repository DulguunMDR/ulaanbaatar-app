// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* City */}
          <div>
            <p
              className="text-gray-300 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Хот · City
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/sacred"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Ариун хот
                </Link>
              </li>
              <li>
                <Link
                  href="/museums"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Музей · Галерей
                </Link>
              </li>
            </ul>
          </div>

          {/* Data */}
          <div>
            <p
              className="text-gray-300 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Өгөгдөл · Data
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/weather"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Цаг агаар
                </Link>
              </li>
              <li>
                <Link
                  href="/weather/terms"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Нэр томъёо
                </Link>
              </li>
            </ul>
          </div>

          {/* Living */}
          <div>
            <p
              className="text-gray-300 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Амьдрал · Living
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/passivhaus"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Passivhaus
                </Link>
              </li>
            </ul>
          </div>

          {/* Site */}
          <div>
            <p
              className="text-gray-300 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Сайт · Site
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  Бидний тухай
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span
            className="font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "var(--font-inter)", fontSize: "14px" }}
          >
            ulaanbaatar<span className="text-gray-300">.app</span>
          </span>
          <span className="text-gray-300" style={{ fontSize: "12px" }}>
            © {currentYear} · Улаанбаатарт хийсэн
          </span>
        </div>
      </div>
    </footer>
  );
}
