// app/passivhaus/airtightness/page.tsx

import Link from "next/link";

const leakagePoints = [
  {
    number: "01",
    title: "Цонх хаалгын хүрээ",
    body: "Хамгийн түгээмэл. Суурилуулалтын үед битүүмжлэл тааруу хийгдсэн байна.",
  },
  {
    number: "02",
    title: "Хананы холбоос",
    body: "Хана ба дээвэр, хана ба суурийн холбоос. Холбоосын хальс ашиглах шаардлагатай.",
  },
  {
    number: "03",
    title: "Цахилгааны залгуур",
    body: "Залгуур, унтраалга, цэнэглэгчийн цоорхойгоор агаар нэвтэрнэ. Битүүмжих хайрцаг хэрэгтэй.",
  },
  {
    number: "04",
    title: "Хоолойн нэвтрэлт",
    body: "Ус, халаалт, агааржуулалтын хоолойн орох газар. Нэвтрэлтийг битүүмжлэх тусгай материал хэрэг.",
  },
  {
    number: "05",
    title: "Дээврийн цонх",
    body: "Дээврийн цонх суурилуулах нь хүндрэлтэй. Агаар алдалтын өндөр эрсдэлтэй газар.",
  },
  {
    number: "06",
    title: "Шатны орц",
    body: "Доод давхар, дээд давхрын хооронд агаар урсдаг. Битүүмжлэх хальс хэрэгтэй.",
  },
];

const materials = [
  {
    title: "Битүүмжих хальс",
    subtitle: "Tape",
    specs: [
      "Дотор тал: Уур битүүмжлэх хальс (vapor barrier tape)",
      "Гадна тал: Цаг агаарын битүүмжлэх хальс",
      "₮50,000–100,000 / roll (25м)",
    ],
  },
  {
    title: "Битүүмжих будаг",
    subtitle: "Sealant",
    specs: [
      "Акрил эсвэл силикон суурьтай",
      "Уян хатан, хагарахгүй, −40°C-д тэсвэртэй",
      "₮15,000–30,000 / тюб (310мл)",
    ],
  },
  {
    title: "Уур битүүмжлэх хальс",
    subtitle: "Membrane",
    specs: [
      "Хананы дотор талд хуванцар хальс",
      "Чийгийг дотогш нэвтрүүлэхгүй, агаар нэвтрүүлэхгүй",
      "₮8,000–15,000 / м²",
    ],
  },
  {
    title: "Дулаалгатай дэвсгэр",
    subtitle: "Foam",
    specs: [
      "Том зайг дүүргэхэд ашиглана",
      "Полиуретан дэвсгэр (expanding foam)",
      "₮10,000–20,000 / can (750мл)",
    ],
  },
];

const blowerSteps = [
  {
    n: "01",
    title: "Бэлтгэл ажил",
    body: "Бүх цонх хаалга хааж, агааржуулалтын систем унтраана. Байшинг бүрэн битүүмжилнэ.",
  },
  {
    n: "02",
    title: "Даралт үүсгэх",
    body: "Сэнсийг ажиллуулж 50 Паскалийн дотоод даралт үүсгэнэ. Ойролцоогоор 20 км/ц хурдтай салхинтай тэнцэнэ.",
  },
  {
    n: "03",
    title: "Алдагдал олох",
    body: "Утаа генератор ашиглан агаар алдагдах цэгүүдийг харж, тэмдэглэнэ. Инфрагэрэм камер ашиглаж болно.",
  },
  {
    n: "04",
    title: "Үр дүн гаргах",
    body: "Компьютер ACH50 утгыг тооцож гаргана. ≤0.6 бол тэнцсэн, түүнээс их бол засах шаардлагатай.",
  },
];

const checklist = [
  "Бүх цонх хаалганд битүүмжлэх хальс ашигласан эсэхийг шалгах",
  "Хана ба дээвэр, хана ба суурийн бүх холбоосыг битүүмжлэх",
  "Цахилгааны залгуур, унтраалганд битүүмжих хайрцаг суурилуулах",
  "Хоолой, кабель нэвтрэх бүх цэгийг битүүмжлэх будгаар дүүргэх",
  "Барилга дууссаны дараа Blower Door тест хийх",
  "Үр дүн ≤0.6 ACH50 байх хүртэл алдааг засах",
];

export default function AirtightnessPage() {
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
            05 · АГААР ОРОХГҮЙГЭЭР БИТҮҮМЖЛЭХ
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
            Airtightness · Агаар нэвтрэлтгүй барилга
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: "0.92",
            }}
          >
            Агаар орохгүйгээр битүүмжлэх
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Airtightness
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Дулаан хадгалалтын түлхүүр — байшингийн бүх хэсгийг агаар нэвтрэхгүй
            байдлаар битүүмжлэсэн байдал.
          </p>
        </div>
      </section>

      {/* STANDARD CALLOUT */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-10 flex items-baseline gap-6">
          <div
            className="font-mono font-light text-gray-900 shrink-0"
            style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1 }}
          >
            ≤0.6
          </div>
          <div>
            <p
              className="text-gray-400 uppercase mb-1"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              ACH50 · Passivhaus стандарт
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Цагт 0.6 удаа бүх агаар солигдох. Ердийн гэр: 5–15 ACH50.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Яагаад чухал вэ · Why it matters
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Дулаан алдалт",
              body: "−40°C-д 1мм цоорхой нь цагт 10–20м³ хүйтэн агаар оруулна.",
            },
            {
              label: "Чийгшлийн хяналт",
              body: "Агаар нэвтэрвэл чийг конденсацилж хөгц, мөөг, материалын эвдрэлд хүргэнэ.",
            },
            {
              label: "Агаарын чанар",
              body: "Агаар нэвтрэх замаар тоос, бохирдол ордог. HRV систем зөвхөн агаар орохгүйгээр битүүмжилсэн барилгад үр ашигтай.",
            },
            {
              label: "Эрчим хүч хэмнэлт",
              body: "Агаар орохгүй битүүмжилсэн барилга нь халаалтын зардлыг 40–60% бууруулна.",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className={
                "p-8 " +
                (i < 3
                  ? "border-b md:border-b-0 md:border-r border-gray-100 lg:border-b-0 lg:border-r"
                  : "")
              }
            >
              <p
                className="text-gray-400 uppercase mb-4"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {item.label}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOWER DOOR TEST */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Blower Door тест · Pressure test
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
          <div className="border-r border-gray-100" />
          <div className="px-8 md:px-14 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100">
              {blowerSteps.map((step, i) => (
                <div
                  key={step.n}
                  className={
                    "p-8 " +
                    (i % 2 === 0 ? "border-r border-gray-100" : "") +
                    (i < 2 ? " border-b border-gray-100" : "")
                  }
                >
                  <span
                    className="font-mono text-gray-200 block mb-4"
                    style={{ fontSize: "11px" }}
                  >
                    {step.n}
                  </span>
                  <h3
                    className="text-gray-800 font-normal mb-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "17px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-gray-100 p-6">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Хэзээ тест хийх вэ
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                Барилгын явцад 2 удаа — (1) дулаалга хийсний дараа, (2) барилга
                дууссаны дараа. Эрт илрүүлсэн алдаа засахад хялбар.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON LEAKAGE POINTS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Агаар алдагдах ердийн цэгүүд · Common leakage points
          </p>
        </div>
        {leakagePoints.map((point, i) => (
          <div
            key={point.number}
            className={
              "grid border-b border-gray-100 " +
              (i === leakagePoints.length - 1 ? "border-b-0" : "")
            }
            style={{ gridTemplateColumns: "32px 80px 1fr" }}
          >
            <div className="border-r border-gray-100" />
            <div className="border-r border-gray-100 flex items-center justify-center py-6">
              <span
                className="font-mono text-gray-200"
                style={{ fontSize: "11px" }}
              >
                {point.number}
              </span>
            </div>
            <div className="px-8 py-6">
              <h3
                className="text-gray-800 font-normal mb-1"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "17px" }}
              >
                {point.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {point.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SEALING MATERIALS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Битүүмжлэх материалууд · Sealing materials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((mat, i) => (
            <div
              key={mat.title}
              className={
                "p-8 " +
                (i < materials.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-gray-100"
                  : "")
              }
            >
              <p
                className="text-gray-400 uppercase mb-1"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                {mat.subtitle}
              </p>
              <h3
                className="text-gray-800 font-normal mb-5"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "17px" }}
              >
                {mat.title}
              </h3>
              <ul className="space-y-2">
                {mat.specs.map((s) => (
                  <li key={s} className="text-sm text-gray-400 leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          href="/passivhaus/ventilation"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          ← Агааржуулалт
        </Link>
        <Link
          href="/passivhaus/heating"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          Халаалт →
        </Link>
      </section>
    </main>
  );
}
