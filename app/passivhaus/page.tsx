// app/passivhaus/page.tsx

import Link from "next/link";

const topics = [
  {
    id: "introduction",
    number: "01",
    title: "Танилцуулга",
    description: "Passivhaus гэж юу вэ? Яагаад Монголд чухал вэ?",
    href: "/passivhaus/introduction",
  },
  {
    id: "insulation",
    number: "02",
    title: "Дулаалга",
    description: "−40°C-д тэсвэрлэх дулаалгын систем",
    href: "/passivhaus/insulation",
  },
  {
    id: "windows",
    number: "03",
    title: "Цонх ба Хаалга",
    description: "Өндөр чанарын цонх сонгох заавар",
    href: "/passivhaus/windows",
  },
  {
    id: "ventilation",
    number: "04",
    title: "Агааржуулалтын систем",
    description: "Дулаан сэргээх агааржуулалтын систем",
    href: "/passivhaus/ventilation",
  },
  {
    id: "airtightness",
    number: "05",
    title: "Агаар орохгүй битүүмжлэлт",
    description: "Агаар алдагдахгүй барилгын техник",
    href: "/passivhaus/airtightness",
  },
  {
    id: "heating",
    number: "06",
    title: "Халаалт",
    description: "Эрчим хүч хэмнэсэн халаалтын шийдэл",
    href: "/passivhaus/heating",
  },
  {
    id: "materials",
    number: "07",
    title: "Материал ба Нийлүүлэгч",
    description: "Монгол дахь материалын сонголт",
    href: "/passivhaus/materials",
  },
  {
    id: "construction",
    number: "08",
    title: "Барилгын Процесс",
    description: "Алхам алхмаар барих заавар",
    href: "/passivhaus/construction",
  },
];

const benefits = [
  {
    stat: "−40°C",
    label: "Тэсвэртэй",
    body: "Монголын хатуу өвлийг даван туулах дулаалга",
  },
  {
    stat: "90%",
    label: "Эрчим хүч хэмнэнэ",
    body: "Жилийн халаалтын зардал эрс буурна",
  },
  {
    stat: "CO₂",
    label: "Байгальд ээлтэй",
    body: "Ялгаруулалт багатай, ногоон барилга",
  },
];

export default function PassivhausPage() {
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
            PASSIVHAUS · ГАРЫН АВЛАГА
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Эрчим хүч хэмнэсэн барилга · Energy-efficient building
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Passivhaus
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Гарын Авлага
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Монголын хүйтэн уур амьсгалд тохирсон эрчим хүчний хэмнэлттэй,
            байгальд ээлтэй гэр барих бүрэн гарын авлага.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
        {benefits.map((b, i) => (
          <div
            key={b.stat}
            className={
              "p-8 md:p-12 " +
              (i < benefits.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-100"
                : "")
            }
          >
            <p
              className="text-gray-400 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {b.label}
            </p>
            <div
              className="font-mono font-light text-gray-900 mb-3"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1 }}
            >
              {b.stat}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{b.body}</p>
          </div>
        ))}
      </section>

      {/* TOPICS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-10 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Сэдвүүд · Topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Link
              key={topic.id}
              href={topic.href}
              className={
                "group p-8 hover:bg-gray-50 transition-colors duration-300 border-b border-gray-100 " +
                (i % 4 < 3 ? "lg:border-r lg:border-gray-100" : "")
              }
            >
              <span
                className="font-mono text-gray-300 block mb-4"
                style={{ fontSize: "11px" }}
              >
                {topic.number}
              </span>
              <h3
                className="font-normal text-gray-800 mb-2"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "18px",
                }}
              >
                {topic.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {topic.description}
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

      {/* CTA */}
      <section className="px-8 md:px-14 py-12 md:py-16 bg-gray-50/50">
        <p
          className="text-gray-300 uppercase mb-5"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Эхлэх · Get started
        </p>
        <p
          className="font-normal text-gray-600 leading-relaxed max-w-xl mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(16px, 2vw, 20px)",
          }}
        >
          Танилцуулга хэсгээс эхэлж, алхам алхмаар суралцаарай.
        </p>
        <Link
          href="/passivhaus/introduction"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          Танилцуулга унших →
        </Link>
      </section>
    </main>
  );
}
