// app/passivhaus/construction/page.tsx

import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Төлөвлөлт ба зураг төсөл",
    subtitle: "Planning & design",
    duration: "2–3 сар",
    cost: "₮7–13 сая",
    steps: [
      {
        label: "Газар сонгох",
        detail:
          "Өмнө зүгт харсан, салхинаас хамгаалагдсан, нарны гэрэл сайн орох газар",
      },
      {
        label: "Архитектор олох",
        detail: "Passivhaus туршлагатай архитектор. Гадаадын зөвлөх авч болно.",
      },
      {
        label: "PHPP тооцоолол",
        detail:
          "Passivhaus Planning Package программ ашиглан энергийн хэрэгцээ тооцоолох",
      },
      {
        label: "Зураг төсөл",
        detail: "Дулаан гүүргүй зураг, цонхны байршил, агааржуулалтын хоолой",
      },
      {
        label: "Төсөвлөгөө",
        detail: "Материал, ажлын хөлс, тест, нөөц мөнгө (10–15%)",
      },
    ],
  },
  {
    number: "02",
    title: "Суурь барилга",
    subtitle: "Foundation",
    duration: "1–2 сар",
    cost: null,
    warning:
      "Суурийн дулаалга тасралтгүй байх ёстой. Дулаан гүүр үүсэх нь хамгийн түгээмэл алдаа.",
    steps: [
      {
        label: "Газар гүнзгийрүүлэлт",
        detail: "Монголын хөлдөлтийн гүн (1.5–2.0м) хүртэл",
      },
      {
        label: "Суурийн дулаалга",
        detail: "XPS 300–400мм суурийн доор болон хажууд",
      },
      {
        label: "Төмөр бетон цутгах",
        detail: "Дулаан гүүргүй холбоосууд ашиглах",
      },
      {
        label: "Битүүмжлэл",
        detail:
          "Ус нэвтрэлтээс хамгаалах хальс, суурь-хананы холбоос битүүмжлэх",
      },
    ],
  },
  {
    number: "03",
    title: "Хана ба дээвэр",
    subtitle: "Walls & roof",
    duration: "2–3 сар",
    cost: null,
    steps: [
      {
        label: "Дотор хана босгох",
        detail: "Төмөр бетон эсвэл тоосго (200мм)",
      },
      { label: "Уур битүүмжлэл", detail: "Vapor barrier хальс дотор талд" },
      { label: "Дулаалга (1-р давхар)", detail: "Эрдэсийн ноолуур 200мм" },
      {
        label: "Дулаалга (2-р давхар)",
        detail: "Холбоос давхцуулж дахин 200мм",
      },
      { label: "Салхины хамгаалалт", detail: "Wind barrier гадна талд" },
      { label: "Дээвэр", detail: "500–600мм дулаалга, агааржуулалт" },
      {
        label: "Гадна бүрээс",
        detail: "Тоосго, модон хавтан, эсвэл төмөр хавтан",
      },
    ],
  },
  {
    number: "04",
    title: "Цонх хаалга",
    subtitle: "Windows & doors",
    duration: "1–2 сар",
    cost: null,
    steps: [
      {
        label: "Цонх захиалах",
        detail:
          "Passivhaus сертификаттай цонх (U≤0.8). 2–3 сар урьдчилан захиалах.",
      },
      {
        label: "Суурилуулалт",
        detail: "Дулаалгын давхаргын дотор эсвэл түүнтэй ойр байрлуулах",
      },
      {
        label: "Битүүмжлэх",
        detail:
          "Дотор тал: Vapor barrier tape. Гадна тал: Weatherproof membrane.",
      },
      {
        label: "Шалгах",
        detail: "Утаа генератороор битүүмжлэл шалгах",
      },
    ],
  },
  {
    number: "05",
    title: "Анхны Blower Door тест",
    subtitle: "First pressure test",
    duration: "1 өдөр + засвар",
    cost: null,
    steps: [
      {
        label: "Бэлтгэл",
        detail: "Бүх цонх хаалга хаах, агааржуулалт унтраах",
      },
      { label: "Тест хийх", detail: "50 Па даралт үүсгэж, ACH50 утга хэмжих" },
      {
        label: "Алдаа олох",
        detail: "Утаа генератор, инфрагэрэм камер ашиглах",
      },
      { label: "Засах", detail: "Олдсон бүх агаар алдалтын цэгийг битүүмжлэх" },
    ],
    note: "Зорилт: ACH50 ≤0.6. Эхний тестэд ихэвчлэн 0.8–1.2 гардаг.",
  },
  {
    number: "06",
    title: "Агааржуулалтын систем",
    subtitle: "Ventilation system",
    duration: "1–2 сар",
    cost: null,
    steps: [
      {
        label: "HRV систем суурилуулах",
        detail: "Техникийн өрөөнд байршуулах",
      },
      {
        label: "Хоолойнууд татах",
        detail: "Өрөө бүрт агаар хүргэх дулаалгатай хоолой",
      },
      {
        label: "Гадна агаарын оролт",
        detail: "Баруун хойд талд, салхинаас хамгаалах",
      },
      { label: "Тохируулга", detail: "Агаарын урсгал, дулаан сэргээлт шалгах" },
    ],
  },
  {
    number: "07",
    title: "Халаалт ба бусад систем",
    subtitle: "Heating & utilities",
    duration: "1 сар",
    cost: null,
    steps: [
      {
        label: "Халаалтын систем",
        detail: "Цахилгаан халаагч, эсвэл дулааны насос",
      },
      {
        label: "Усны систем",
        detail: "Хоолой, шүүлтүүр, халуун усны хуримтлуулагч",
      },
      { label: "Цахилгаан", detail: "Битүүмжих хайрцаг ашиглах" },
    ],
  },
  {
    number: "08",
    title: "Эцсийн тест ба сертификат",
    subtitle: "Final test & certification",
    duration: "1–2 долоо хоног",
    cost: null,
    steps: [
      {
        label: "Blower Door тест (2-р удаа)",
        detail: "ACH50 ≤0.6 баталгаажуулах",
      },
      { label: "Агааржуулалтын үр ашиг тест", detail: "Дулаан сэргээлт ≥85%" },
      {
        label: "Температур тест",
        detail: "−40°C гаднах температурт дотор +20–22°C байх эсэх",
      },
      {
        label: "Сертификат авах",
        detail: "(Сонголт) Passivhaus Institute-аас баталгаажуулалт",
      },
    ],
  },
];

const paymentSchedule = [
  { label: "Зураг төсөл", timing: "Эхлэхийн өмнө", pct: "10–15%" },
  { label: "Материал (эхний хэсэг)", timing: "Барилга эхлэхэд", pct: "30–40%" },
  { label: "Барилгын ажил (давхар бүр)", timing: "Ажил явцад", pct: "20–30%" },
  { label: "Цонх, HRV систем", timing: "Хүлээн авахад", pct: "10–15%" },
  { label: "Төгсгөлийн төлбөр", timing: "Тест тэнцсэний дараа", pct: "10%" },
];

const checklist = [
  "Дулаалгын давхарга тасралтгүй эсэхийг үе шат бүрт шалгах",
  "Цонх суурилуулалтын битүүмжлэл зөв хийгдсэн эсэх",
  "Blower Door тест 2 удаа хийх (дулаалгын дараа ба дууссаны дараа)",
  "HRV системийн дулаан сэргээлт тест хийх",
  "Барилгын фото бичлэг хийх (дулаалга, битүүмжлэл, хоолой)",
  "PHPP тооцоолол болон бодит хэмжилтийг харьцуулах",
];

export default function ConstructionPage() {
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
            08 · БАРИЛГЫН ПРОЦЕСС
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
            Construction process · Алхам алхмаар барих заавар
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: "0.92",
            }}
          >
            Барилгын
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Процесс
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Төлөвлөлтөөс эхлэн дуустал — 100м² байшин{" "}
            <span className="font-mono">12–18 сар</span>. Ердийн барилгаас
            20–30% удаан, гэхдээ чанарын баталгаа.
          </p>
        </div>
      </section>

      {/* TIMELINE OVERVIEW */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
        {[
          { label: "Нийт хугацаа", value: "12–18 сар" },
          { label: "Төлөвлөлт", value: "2–3 сар" },
          { label: "Барилга", value: "6–10 сар" },
          { label: "Тест ба засал", value: "4–6 сар" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={
              "p-8 " +
              (i < 3
                ? "border-b md:border-b-0 md:border-r border-gray-100"
                : "")
            }
          >
            <p
              className="text-gray-400 uppercase mb-3"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {item.label}
            </p>
            <div
              className="font-mono font-light text-gray-900"
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: 1 }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </section>

      {/* PHASES */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Үе шатууд · Phases
          </p>
        </div>

        {phases.map((phase, pi) => (
          <div
            key={phase.number}
            className={
              "grid border-b border-gray-100 " +
              (pi === phases.length - 1 ? "border-b-0" : "")
            }
            style={{ gridTemplateColumns: "32px 1fr" }}
          >
            <div className="border-r border-gray-100" />
            <div>
              {/* Phase header */}
              <div className="px-8 md:px-14 py-8 border-b border-gray-100 flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-gray-200"
                    style={{ fontSize: "11px" }}
                  >
                    {phase.number}
                  </span>
                  <div>
                    <h3
                      className="text-gray-800 font-normal"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "20px",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className="text-gray-300 uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                    >
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-sm text-gray-500">
                    {phase.duration}
                  </p>
                  {phase.cost && (
                    <p
                      className="text-gray-300 uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                    >
                      {phase.cost}
                    </p>
                  )}
                </div>
              </div>

              {/* Steps */}
              <div className="px-8 md:px-14 py-6">
                {phase.steps.map((step, si) => (
                  <div
                    key={step.label}
                    className={
                      "flex gap-6 py-4 " +
                      (si < phase.steps.length - 1
                        ? "border-b border-gray-100"
                        : "")
                    }
                  >
                    <span
                      className="font-mono text-gray-200 shrink-0 mt-0.5"
                      style={{ fontSize: "10px" }}
                    >
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="text-sm text-gray-700 font-medium">
                        {step.label}
                      </span>
                      {step.detail && (
                        <span className="text-sm text-gray-400">
                          {" "}
                          — {step.detail}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {phase.note && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span
                        className="text-gray-300 uppercase mr-2"
                        style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                      >
                        Зорилт:
                      </span>
                      {phase.note}
                    </p>
                  </div>
                )}

                {phase.warning && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span
                        className="text-gray-300 uppercase mr-2"
                        style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                      >
                        Анхааруулга:
                      </span>
                      {phase.warning}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PAYMENT SCHEDULE */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Төлбөрийн хуваарь · Payment schedule
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
          <div className="border-r border-gray-100" />
          <div className="px-8 md:px-14 py-10">
            {paymentSchedule.map((row, i) => (
              <div
                key={row.label}
                className={
                  "flex items-center justify-between py-5 " +
                  (i < paymentSchedule.length - 1
                    ? "border-b border-gray-100"
                    : "")
                }
              >
                <div>
                  <p className="text-sm text-gray-700">{row.label}</p>
                  <p
                    className="text-gray-300 uppercase mt-0.5"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    {row.timing}
                  </p>
                </div>
                <span className="font-mono text-sm text-gray-500">
                  {row.pct}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Чанарын хяналт · Quality checklist
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
          href="/passivhaus/materials"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          ← Материал ба Нийлүүлэгч
        </Link>
        <Link
          href="/passivhaus"
          className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
          style={{ fontSize: "11px" }}
        >
          Гарын авлага →
        </Link>
      </section>
    </main>
  );
}
