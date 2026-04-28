import Link from "next/link";

const sections = [
  {
    label: "Агаарын чанар",
    href: "/weather",
    body: "Бодит цагийн AQI, PM2.5, PM10 болон цаг агаарын мэдээлэл. Өдөр бүр шинэчлэгддэг.",
  },
  {
    label: "Passivhaus",
    href: "/passivhaus",
    body: "Монголын уур амьсгалд тохирсон эрчим хүч хэмнэсэн байшин барих бүрэн гарын авлага.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* HERO */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
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
            БИДНИЙ ТУХАЙ · ABOUT
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Сайтын тухай · About this site
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Бидний
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Тухай
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />
        </div>
      </section>

      {/* WHO + WHY */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Хэн бэ · Who
          </p>

          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span
              className="font-mono text-gray-500 font-light"
              style={{ fontSize: "16px" }}
            >
              МД
            </span>
          </div>

          <h2
            className="font-normal text-gray-900 mb-1"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "22px",
            }}
          >
            М.Дөлгөөн
          </h2>

          <p className="text-gray-400 mb-6" style={{ fontSize: "13px" }}>
            Үүсгэн байгуулагч
          </p>

          <div className="space-y-2">
            <a
              href="mailto:dulguun.mdr@gmail.com"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
              style={{ fontSize: "13px" }}
            >
              dulguun.mdr@gmail.com
            </a>
            <a
              href="https://www.ulaanbaatar.app"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
              style={{ fontSize: "13px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ulaanbaatar.app
            </a>
          </div>
        </div>

        <div className="md:col-span-2 p-8 md:p-12">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Яагаад · Why
          </p>

          <h2
            className="font-normal text-gray-800 mb-5 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(22px, 3vw, 32px)",
            }}
          >
            Улаанбаатар хот
          </h2>

          <div className="space-y-4 max-w-lg">
            <p className="text-sm text-gray-500 leading-relaxed">
              Улаанбаатар бол дэлхийн хамгийн хүйтэн нийслэл хот. Өвлийн улиралд
              температур &minus;40&deg;C хүрдэг — энэ нь дулааны эрчим хүчний
              хэрэглээг асар их нэмэгдүүлдэг.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Гэрийн дулаалга муу байснаас болж нүүрс их шатааж, агаарын
              бохирдол үүсдэг. Passivhaus стандарт нь энэ асуудлыг үндсээр нь
              шийдэх арга зам юм &mdash; бага эрчим хүчээр, илүү дулаан байшин.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-10 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Юу хийдэг вэ · What this site does
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {sections.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "group p-8 hover:bg-gray-50 transition-colors duration-300 border-b border-gray-100 " +
                (i < sections.length - 1
                  ? "md:border-b-0 md:border-r"
                  : "md:border-b-0")
              }
            >
              <h3
                className="font-normal text-gray-800 mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "18px",
                }}
              >
                {item.label}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {item.body}
              </p>
              <span
                className="text-gray-400 group-hover:text-gray-600 transition-colors tracking-wider"
                style={{ fontSize: "11px" }}
              >
                Үзэх →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="px-8 md:px-14 py-12 md:py-16 bg-gray-50/50">
        <blockquote
          className="font-normal text-gray-400 leading-relaxed max-w-xl"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(16px, 2vw, 20px)",
          }}
        >
          &quot;Улаанбаатарт хамтдаа.&quot;
        </blockquote>
      </section>
    </main>
  );
}
