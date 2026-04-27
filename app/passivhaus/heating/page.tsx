// app/passivhaus/heating/page.tsx

import Link from "next/link";

const heatingOptions = [
  {
    number: "01",
    title: "Цахилгаан халаалт",
    subtitle: "Electric Heating",
    description:
      "Хамгийн энгийн, суурилуулахад хямд. Passivhaus-д бага эрчим хүч шаардагдах тул үр ашигтай.",
    stats: [
      { label: "Үр ашиг", value: "100%" },
      { label: "Суурилуулалт", value: "₮2–3 сая" },
      { label: "Ажиллалт", value: "₮0.12/кWh" },
      { label: "Засвар", value: "Бага" },
    ],
  },
  {
    number: "02",
    title: "Агаарын дулааны насос",
    subtitle: "Air Source Heat Pump",
    description:
      "Гадны агаарын дулааныг ашиглан халаана. Монголын −40°C-д үр ашиг буурдаг, гэхдээ бага эрчим хүч хэрэглэнэ.",
    stats: [
      { label: "Үр ашиг", value: "200–300%" },
      { label: "Суурилуулалт", value: "₮8–12 сая" },
      { label: "Ажиллалт", value: "Бага" },
      { label: "Засвар", value: "Дунд зэрэг" },
    ],
  },
  {
    number: "03",
    title: "Газрын дулааны насос",
    subtitle: "Ground Source Heat Pump",
    description:
      "Газрын доорх тогтвортой дулааныг ашиглана. Монголд хамгийн тохиромжтой, гэхдээ өндөр үнэтэй.",
    stats: [
      { label: "Үр ашиг", value: "300–400%" },
      { label: "Суурилуулалт", value: "₮15–25 сая" },
      { label: "Ажиллалт", value: "Маш бага" },
      { label: "Засвар", value: "Бага" },
    ],
  },
  {
    number: "04",
    title: "Нарны коллектор",
    subtitle: "Solar Thermal",
    description:
      "Нарны эрчим хүчийг ашиглана. Зуны улиралд сайн, өвөл нэмэлт халаалт хэрэгтэй.",
    stats: [
      { label: "Үр ашиг", value: "Улирлаас" },
      { label: "Суурилуулалт", value: "₮5–8 сая" },
      { label: "Ажиллалт", value: "Үнэгүй" },
      { label: "Засвар", value: "Бага" },
    ],
  },
];

const backupOptions = [
  {
    title: "Цахилгаан халаагч",
    subtitle: "Нөөц",
    body: "1–2 кВт чадалтай, жижиг өрөө тус бүрт байршуулах. Зөвхөн хамгийн хүйтэн үед ашиглана.",
  },
  {
    title: "Шалны халаалт",
    subtitle: "Нөөц",
    body: "Ариун цэврийн өрөө, хүүхдийн өрөөнд. Тав тухтай, дулааныг жигд тархаана.",
  },
  {
    title: "Модны зуух",
    subtitle: "Нэмэлт",
    body: "Зөвхөн онцгой үед. Утаа HRV системээр дамжуулж гадагш гаргах шаардлагатай.",
  },
];

const checklist = [
  "Халаалтын хэрэгцээг тооцоолох (PHPP програм ашиглах)",
  "Монголын −40°C-д ажиллах эсэхийг шалгах",
  "Нөөц халаалтын систем төлөвлөх",
  "20 жилийн зардлыг харьцуулах (анхны үнэ + ажиллалт)",
  "Засвар үйлчилгээ хийх мэргэжилтэн байгаа эсэхийг лавлах",
];

export default function HeatingPage() {
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
            06 · ХАЛААЛТ
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <Link
            href="/passivhaus"
            className="text-gray-300 hover:text-gray-500 transition-colors mb-8 inline-block"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            ← Passivhaus гарын авлага
          </Link>

          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Heating · Эрчим хүч хэмнэсэн халаалт
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: "0.92",
            }}
          >
            Халаалт
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Heating
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Бага эрчим хүчээр дулаацуулах шийдэл. Жилийн халаалтын эрчим хүч{" "}
            <span className="font-mono">15 кWh/м²</span> хүртэл — ердийн гэрээс
            90% бага.
          </p>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus стандарт
          </p>
          <div
            className="font-mono font-light text-gray-900 mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1 }}
          >
            15 кWh
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Жилд 100м² тутамд
          </p>
        </div>
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Ердийн гэр
          </p>
          <div
            className="font-mono font-light text-gray-900 mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1 }}
          >
            150+ кWh
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Жилд 100м² тутамд
          </p>
        </div>
        <div className="p-8 md:p-12">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            20 жилийн хэмнэлт
          </p>
          <div
            className="font-mono font-light text-gray-900 mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1 }}
          >
            ₮66.8 сая
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">100м² байшинд</p>
        </div>
      </section>

      {/* HEATING OPTIONS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Халаалтын сонголтууд · Heating options
          </p>
        </div>
        {heatingOptions.map((opt, i) => (
          <div
            key={opt.number}
            className={
              "grid border-b border-gray-100 " +
              (i === heatingOptions.length - 1 ? "border-b-0" : "")
            }
            style={{ gridTemplateColumns: "32px 1fr" }}
          >
            <div className="border-r border-gray-100" />
            <div className="px-8 md:px-14 py-10">
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-mono text-gray-200"
                  style={{ fontSize: "11px" }}
                >
                  {opt.number}
                </span>
                <div>
                  <h3
                    className="text-gray-800 font-normal"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "20px",
                    }}
                  >
                    {opt.title}
                  </h3>
                  <p
                    className="text-gray-300 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    {opt.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xl">
                {opt.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100">
                {opt.stats.map((stat, si) => (
                  <div
                    key={stat.label}
                    className={
                      "p-4 " +
                      (si < opt.stats.length - 1
                        ? "border-b md:border-b-0 md:border-r border-gray-100"
                        : "")
                    }
                  >
                    <p
                      className="text-gray-300 uppercase mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                    >
                      {stat.label}
                    </p>
                    <p className="font-mono text-sm text-gray-700">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 20-YEAR COST COMPARISON */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            20 жилийн зардлын харьцуулалт · 20-year cost comparison
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Regular house */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
            <p
              className="text-gray-400 uppercase mb-6"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Ердийн гэр · 100м²
            </p>
            {[
              { label: "Халаалтын систем", value: "₮5,000,000" },
              { label: "Жилийн зардал", value: "₮3,600,000" },
              { label: "20 жилийн ажиллалт", value: "₮72,000,000" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-3 border-b border-gray-100"
              >
                <span className="text-sm text-gray-400">{row.label}</span>
                <span className="font-mono text-sm text-gray-600">
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between pt-4">
              <span className="text-sm text-gray-700 font-medium">
                Нийт зардал
              </span>
              <span className="font-mono text-sm text-gray-900">
                ₮77,000,000
              </span>
            </div>
          </div>

          {/* Passivhaus */}
          <div className="p-8 md:p-12">
            <p
              className="text-gray-400 uppercase mb-6"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Passivhaus · 100м²
            </p>
            {[
              { label: "Халаалтын систем", value: "₮3,000,000" },
              { label: "Жилийн зардал", value: "₮360,000" },
              { label: "20 жилийн ажиллалт", value: "₮7,200,000" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-3 border-b border-gray-100"
              >
                <span className="text-sm text-gray-400">{row.label}</span>
                <span className="font-mono text-sm text-gray-600">
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between pt-4">
              <span className="text-sm text-gray-700 font-medium">
                Нийт зардал
              </span>
              <span className="font-mono text-sm text-gray-900">
                ₮10,200,000
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BACKUP HEATING */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Нөөц халаалт · Backup heating (−40°C)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {backupOptions.map((opt, i) => (
            <div
              key={opt.title}
              className={
                "p-8 " +
                (i < backupOptions.length - 1
                  ? "border-b md:border-b-0 md:border-r border-gray-100"
                  : "")
              }
            >
              <p
                className="text-gray-300 uppercase mb-2"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {opt.subtitle}
              </p>
              <h3
                className="text-gray-800 font-normal mb-4"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "17px" }}
              >
                {opt.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {opt.body}
              </p>
            </div>
          ))}
        </div>
        <div className="px-8 md:px-14 py-6 border-t border-gray-100">
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
            <span
              className="text-gray-300 uppercase mr-2"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              Чухал:
            </span>
            Passivhaus-д халаалтын систем жижиг байж болно. Том зуух, халаагч
            худалдан авахгүй — үр ашиггүй, үнэтэй.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Шалгах жагсаалт · Checklist
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
          <div className="border-r border-gray-100" />
          <div className="px-8 md:px-14 py-10">
            {checklist.map((item, i) => (
              <label
                key={i}
                className={
                  "flex items-start gap-5 py-5 cursor-pointer group " +
                  (i < checklist.length - 1 ? "border-b border-gray-100" : "")
                }
              >
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 border-gray-300 rounded-none accent-gray-800 shrink-0"
                />
                <span className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* NAV */}
      <section className="px-8 md:px-14 py-10 flex justify-between items-center">
        <Link
          href="/passivhaus/airtightness"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          ← Агаар орохгүйгээр битүүмжлэх
        </Link>
        <Link
          href="/passivhaus/materials"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          Материал →
        </Link>
      </section>
    </main>
  );
}
