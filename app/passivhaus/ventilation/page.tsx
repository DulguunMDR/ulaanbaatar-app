// app/passivhaus/ventilation/page.tsx

import Link from "next/link";

const whyNeeded = [
  {
    number: "01",
    title: "Цонх нээх боломжгүй",
    body: "−40°C-д цонх нээх нь практик биш. HRV систем цонх нээхгүйгээр 24 цаг цэвэр агаартай байна.",
  },
  {
    number: "02",
    title: "Эрчим хүчний өндөр үнэ",
    body: "Цонх нээж дулаан алдах нь халаалтын зардлыг 3–5 дахин нэмэгдүүлдэг. HRV энэ зардлыг багасгана.",
  },
  {
    number: "03",
    title: "Чийгшил хяналт",
    body: "Монголын өвөл маш хуурай. ERV систем чийгшлийг зохицуулж, тав тухтай орчин бүрдүүлнэ.",
  },
  {
    number: "04",
    title: "Агаарын чанар",
    body: "Гаднах бохир агаараас шүүлтүүрээр дамжуулан цэвэр агаар дотогш оруулна. PM2.5, PM10-ийг шүүнэ.",
  },
];

const components = [
  {
    number: "01",
    name: "Дулаан солилцуур",
    nameEn: "Heat Exchanger",
    body: "Системийн зүрх. Дулааныг хоёр агаарын урсгалын хооронд дамжуулна.",
    spec: "₮1,500,000–3,000,000",
  },
  {
    number: "02",
    name: "Сэнс",
    nameEn: "Fans / Blowers",
    body: "Агаарыг эргүүлэх хоёр сэнс. Бага дуу чимээтэй, бага эрчим хүчний мотор.",
    spec: "25–35 дБ",
  },
  {
    number: "03",
    name: "Шүүлтүүр",
    nameEn: "Air Filters",
    body: "F7 эсвэл илүү өндөр зэрэглэл. PM2.5, тоос шүүнэ. 3–6 сар тутамд солих.",
    spec: "F7+",
  },
  {
    number: "04",
    name: "Хоолойнууд",
    nameEn: "Ductwork",
    body: "Агаарыг өрөө бүрт хүргэх дулаалгатай хоолойнууд.",
    spec: "Ø100–200мм",
  },
  {
    number: "05",
    name: "Удирдлагын систем",
    nameEn: "Control System",
    body: "Сэнсний хурд, температурыг удирдах. Өдөрт 24 цаг ажиллана.",
    spec: "Автомат",
  },
];

const installationNotes = [
  {
    label: "Байршил",
    note: "Техникийн өрөөнд суурилуулах. Дуу чимээнээс хол, засвар үйлчилгээнд хялбар.",
  },
  {
    label: "Хоолойнууд",
    note: "Богино замаар дамжуулах. Урт хоолой нь дулаан алдалт нэмэгдүүлнэ.",
  },
  {
    label: "Гадна агаарын оролт",
    note: "Баруун хойд талд байрлуулах. Салхинаас хамгаалах.",
  },
  {
    label: "Ус зайлуулалт",
    note: "Конденсацын ус гаргах хоолой татан суулгах ёстой.",
  },
];

const checklist = [
  "Дулаан сэргээлтийн үр ашиг 85% ба түүнээс дээш эсэхийг баталгаажуулах",
  "Монголын −40°C хүйтэнд тэсвэртэй эсэхийг лавлах — anti-freeze функц",
  "F7 эсвэл илүү сайн шүүлтүүртэй эсэхийг шалгах — PM2.5 шүүнэ",
  "Дуу чимээний түвшин 25–35 дБ-ээс хэтрэхгүй байх",
  "Засвар үйлчилгээ хийх компани Монголд байгаа эсэхийг тодруулах",
  "5–10 жилийн баталгаатай эсэхийг лавлах",
];

export default function VentilationPage() {
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
            04 · АГААРЖУУЛАЛТ
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus · HRV / ERV систем
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Дулаан Сэргээх
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Агааржуулалт
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            HRV систем нь гадагш гарах агаарын дулааныг 90% хүртэл буцааж,
            дотогш орох шинэ агаарт шилжүүлдэг.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — two columns */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Гадагш гарах агаар
          </p>
          <div
            className="font-mono font-light text-gray-900 mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1 }}
          >
            +22°C
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Байшингийн дотор дулаан, бохир агаар гадагш гарахдаа дулаан
            солилцуур дундуур явна. Дулаан нь хадгалагдана.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Дотогш орох агаар
          </p>
          <div
            className="font-mono font-light text-gray-900 mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1 }}
          >
            −40°C → +18°C
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Гаднаас орж ирэх цэвэр агаар дулаан солилцуураар дамжин,
            хадгалагдсан дулаанаар халаагдаж өрөөнд ордог.
          </p>
        </div>
      </section>

      {/* EFFICIENCY CALLOUT */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-10">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Дулаан сэргээлтийн үр ашиг
          </p>
          <div className="flex items-baseline gap-3">
            <span
              className="font-mono font-light text-gray-900"
              style={{ fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1 }}
            >
              85–95%
            </span>
            <span className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Өндөр чанарын систем. −40°C агаарыг бараг 0°C болгож, халаалтын
              зардлыг эрс багасгана.
            </span>
          </div>
          <p
            className="text-sm text-gray-400 mt-4 max-w-lg"
            style={{ fontSize: "11px" }}
          >
            Чухал: HRV систем зөвхөн Passivhaus стандартын агаар нэвтрэлтгүй
            байшинд үр ашигтай. Ердийн байшинд суурилуулбал агаар алдагдана.
          </p>
        </div>
      </section>

      {/* WHY NEEDED */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Яагаад Монголд заавал хэрэгтэй вэ?
          </p>
        </div>
        <div>
          {whyNeeded.map((w, i) => (
            <div
              key={w.number}
              className={
                "grid px-8 md:px-14 py-7 " +
                (i < whyNeeded.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr" }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {w.number}
              </span>
              <div>
                <h3
                  className="font-normal text-gray-800 mb-1"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                  }}
                >
                  {w.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {w.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Системийн бүрэлдэхүүн хэсгүүд
          </p>
        </div>
        <div>
          {components.map((c, i) => (
            <div
              key={c.number}
              className={
                "grid px-8 md:px-14 py-7 " +
                (i < components.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr auto" }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {c.number}
              </span>
              <div className="pr-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3
                    className="font-normal text-gray-800"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "18px",
                    }}
                  >
                    {c.name}
                  </h3>
                  <span className="text-gray-400" style={{ fontSize: "11px" }}>
                    {c.nameEn}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
              <span className="font-mono text-gray-400 text-xs text-right">
                {c.spec}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INSTALLATION NOTES */}
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
            Суурилуулалтын зөвлөмжүүд
          </p>
          <div className="space-y-0 max-w-2xl">
            {installationNotes.map((n, i) => (
              <div
                key={n.label}
                className={
                  "grid py-4 gap-4 " +
                  (i < installationNotes.length - 1
                    ? "border-b border-gray-100"
                    : "")
                }
                style={{ gridTemplateColumns: "8rem 1fr" }}
              >
                <span
                  className="text-gray-400 uppercase pt-px"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  {n.label}
                </span>
                <span className="text-sm text-gray-500 leading-relaxed">
                  {n.note}
                </span>
              </div>
            ))}
          </div>
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
            Худалдан авахын өмнө шалгах
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
            href="/passivhaus/windows"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            ← 03 · Цонх ба Хаалга
          </Link>
          <Link
            href="/passivhaus/airtightness"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            05 · Агаар орохгүйгээр битүүмжлэх →
          </Link>
        </div>
      </section>
    </main>
  );
}
