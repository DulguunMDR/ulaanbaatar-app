// app/passivhaus/windows/page.tsx

import Link from "next/link";

const specs = [
  { value: "≤0.8", unit: "W/m²K", label: "U-утга (стандарт: 2.5–3.0)" },
  { value: "3", unit: "давхар", label: "Шилний тоо — аргон хийтэй" },
  { value: "≥0.5", unit: "g-утга", label: "Нарны ачаалал" },
  { value: "≤0.6", unit: "ACH50", label: "Агаар нэвтрэлтийн хязгаар" },
];

const windowTypes = [
  {
    recommendation: "Зөвлөмж",
    name: "Эргэдэг цонх",
    nameEn: "Tilt & Turn",
    note: "Агааржуулалттай, битүүмжлэл сайн. Passivhaus стандартад тохирдог.",
    status: "good",
  },
  {
    recommendation: "Болгоомжтой",
    name: "Хабтгайтай цонх",
    nameEn: "Fixed / Casement",
    note: "Зөвхөн том цонхонд. Битүүмжлэл анхаарах шаардлагатай.",
    status: "neutral",
  },
  {
    recommendation: "Зайлсхийх",
    name: "Гулсамал цонх",
    nameEn: "Sliding",
    note: "Битүүмжлэл муу, агаар алддаг. Passivhaus-д тохиромжгүй.",
    status: "bad",
  },
];

const installationSteps = [
  {
    number: "01",
    title: "Дулаалгын давхаргад суурилуулах",
    body: "Цонх нь дулаалгын давхаргын дотор буюу түүнтэй ойр байх ёстой. Энэ нь дулаан гүүр үүсэхээс сэргийлнэ.",
  },
  {
    number: "02",
    title: "Битүүмжлэх хэрэгслүүд",
    body: "Дотор тал: Уур битүүмжлэл (vapor barrier tape). Гадна тал: Цаг агаараас хамгаалах битүүмжлэл (weatherproof membrane).",
  },
  {
    number: "03",
    title: "Blower Door тестээр шалгах",
    body: "Угсралтын дараа агаар алдалтыг шалгах. Passivhaus стандарт: ≤0.6 ACH50.",
  },
];

const checklist = [
  "U-утга ≤ 0.8 W/m²K эсэхийг шалгах — сертификат шаардах",
  "3 давхар шил, аргон хийгээр дүүргэсэн эсэхийг лавлах",
  "Битүүмжлэлийн материал (tape, membrane) худалдан авах",
  "Угсралтын мэргэжилтэн олох — Passivhaus туршлагатай",
  "Blower Door тест хийх төлөвлөгөөтэй эсэхийг тодорхойлох",
];

export default function WindowsPage() {
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
            03 · ЦОНХ БА ХААЛГА
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus · Цонх ба хаалга
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Өндөр Чанарын
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Цонх Хаалга
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Ердийн байшинд дулаан алдалтын 30–40% нь цонхноор дамждаг.
            Passivhaus-д энэ тоог 5% хүртэл багасгадаг.
          </p>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
        {specs.map((s, i) => (
          <div
            key={s.label}
            className={
              "p-8 md:p-10 " +
              (i < specs.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-100"
                : "")
            }
          >
            <p
              className="text-gray-400 uppercase mb-3"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {s.label}
            </p>
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-mono font-light text-gray-900"
                style={{ fontSize: "clamp(22px, 3vw, 28px)", lineHeight: 1 }}
              >
                {s.value}
              </span>
              <span className="font-mono text-gray-400 text-xs">{s.unit}</span>
            </div>
          </div>
        ))}
      </section>

      {/* WINDOW TYPES */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Цонхны төрлүүд
          </p>
        </div>
        <div>
          {windowTypes.map((w, i) => (
            <div
              key={w.name}
              className={
                "grid px-8 md:px-14 py-7 " +
                (i < windowTypes.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr auto" }}
            >
              <span
                className={
                  "font-mono text-xs pt-px " +
                  (w.status === "good"
                    ? "text-gray-400"
                    : w.status === "neutral"
                      ? "text-gray-300"
                      : "text-gray-200")
                }
              >
                {w.status === "good" ? "✓" : w.status === "neutral" ? "○" : "×"}
              </span>
              <div className="pr-8">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3
                    className="font-normal text-gray-800"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "18px",
                    }}
                  >
                    {w.name}
                  </h3>
                  <span className="text-gray-400" style={{ fontSize: "11px" }}>
                    {w.nameEn}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {w.note}
                </p>
              </div>
              <span
                className="text-gray-400 text-right"
                style={{ fontSize: "10px", letterSpacing: "0.05em" }}
              >
                {w.recommendation}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Угсралтын заавар
          </p>
        </div>
        <div>
          {installationSteps.map((s, i) => (
            <div
              key={s.number}
              className={
                "grid px-8 md:px-14 py-8 " +
                (i < installationSteps.length - 1
                  ? "border-b border-gray-100"
                  : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr" }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {s.number}
              </span>
              <div>
                <h3
                  className="font-normal text-gray-800 mb-1"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONGOLIA NOTE */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-12">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Монгол дахь нийлүүлэгчид
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-6">
            Passivhaus сертификаттай цонх Монголд ховор. Гадаадаас импортлох
            эсвэл дотоодын найдвартай компаниудтай ажиллах.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 max-w-2xl">
            <div className="bg-white p-6">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Гадаадын брэнд
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Герман, Польш, Орос цонх. Импортоор. Чанар баталгаатай.
              </p>
              <p className="font-mono text-gray-600 text-xs">
                ₮500,000–800,000/м²
              </p>
            </div>
            <div className="bg-white p-6">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Дотоодын үйлдвэр
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                PVC профиль импортлож угсардаг. Чанар харилцан адилгүй — U-утгыг
                заавал шалгах.
              </p>
              <p className="font-mono text-gray-600 text-xs">
                ₮200,000–400,000/м²
              </p>
            </div>
          </div>
          <p
            className="text-gray-400 mt-4 max-w-lg"
            style={{ fontSize: "11px" }}
          >
            &quot;Эрчим хүч хэмнэсэн&quot; гэсэн нэр томъёо төөрөгдүүлэх
            боломжтой. Лабораторийн тестийн U-утгыг шалгах.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-12">
          <p
            className="text-gray-400 uppercase mb-8"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Цонх сонгохын өмнө шалгах
          </p>
          <div className="space-y-0">
            {checklist.map((item, i) => (
              <label
                key={i}
                className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 flex-shrink-0 accent-gray-600"
                />
                <span className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-10 flex items-center justify-between">
          <Link
            href="/passivhaus/insulation"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            ← 02 · Дулаалга
          </Link>
          <Link
            href="/passivhaus/ventilation"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            04 · Агааржуулалт →
          </Link>
        </div>
      </section>
    </main>
  );
}
