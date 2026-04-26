// app/passivhaus/introduction/page.tsx

import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Дэд зэргийн дулаалга",
    body: "Хана, дээвэр, суурь бүгд зузаан дулаалгатай. Монголд 400–600мм зузаан шаардлагатай.",
  },
  {
    number: "02",
    title: "Өндөр чанарын цонх",
    body: "3 давхар шилтэй, аргон хийгээр дүүргэсэн. U-утга ≤ 0.8 W/m²K.",
  },
  {
    number: "03",
    title: "Дулаан сэргээх агааржуулалт",
    body: "Гадагш гарах агаарын дулааныг дотогш орох агаарт шилжүүлэх систем. 90% дулааныг буцаана.",
  },
  {
    number: "04",
    title: "Агааргүй барилга",
    body: "Агаар алдагдах бүх цоорхойг битүүмжилсэн. Blower Door тестээр шалгах.",
  },
  {
    number: "05",
    title: "Дулаан гүүр байхгүй",
    body: "Дулаалгын давхарга тасралтгүй, төмөр эд анги хязгаарлагдмал ашиглах.",
  },
];

const stats = [
  { value: "90%", label: "Эрчим хүчний хэмнэлт" },
  { value: "20–22°C", label: "Тогтвортой температур" },
  { value: "15 кWh", label: "Жилийн халаалт / м²" },
  { value: "0.6 ACH", label: "Агаар нэвтрэлтийн хязгаар" },
];

const checklist = [
  "Төсөв тооцох — Passivhaus анхны зардал өндөр, гэхдээ 5–10 жилд өөрийгөө нөхнө",
  "Газар сонгох — Өмнө зүгт харсан, салхинаас хамгаалагдсан газар сайн",
  "Мэргэжилтэн олох — Passivhaus туршлагатай архитектор, барилгачин",
  "Материал нийлүүлэгч судлах — Монгол дахь боломжит материалууд",
  "PHPP програм суулгах — Passivhaus тооцоолох программ",
];

export default function IntroductionPage() {
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
            01 · ТАНИЛЦУУЛГА
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus · Үндсэн ойлголт
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
              гэж юу вэ?
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Германд үүссэн эрчим хүчний хэмнэлттэй барилгын стандарт — ердийн
            байшингаас 90% бага эрчим хүч зарцуулдаг.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={
              "p-8 md:p-10 " +
              (i < stats.length - 1
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
            <div
              className="font-mono font-light text-gray-900"
              style={{ fontSize: "clamp(22px, 4vw, 32px)", lineHeight: 1 }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </section>

      {/* WHY MONGOLIA */}
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
            Яагаад Монголд чухал вэ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {[
              {
                label: "Хамгийн хүйтэн нийслэл",
                body: "Улаанбаатар өвлийн улиралд −40°C хүртэл хүрдэг. Ердийн гэрүүд халаалтад асар их эрчим хүч зарцуулдаг.",
              },
              {
                label: "Агаарын бохирдол",
                body: "Халаалтын нүүрсний зуух агаарын бохирдлын гол эх үүсвэр. Passivhaus халаалтын хэрэгцээг 90% бууруулна.",
              },
              {
                label: "Өндөр халаалтын зардал",
                body: "Монгол айл өвлийн улиралд сард ₮300,000–500,000 халаалтанд зарцуулдаг. Passivhaus энэ зардлыг 10 дахин бууруулна.",
              },
              {
                label: "Байгальд ээлтэй",
                body: "Нүүрсхүчлийн хийн ялгаруулалтыг багасгаж, дэлхийн дулааралтын эсрэг тэмцэнэ.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <p
                  className="text-gray-400 uppercase mb-3"
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
        </div>
      </section>

      {/* 5 PRINCIPLES */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus-ын 5 үндсэн зарчим
          </p>
        </div>
        <div>
          {principles.map((p, i) => (
            <div
              key={p.number}
              className={
                "grid px-8 md:px-14 py-8 " +
                (i < principles.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr" }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {p.number}
              </span>
              <div>
                <h3
                  className="font-normal text-gray-800 mb-1"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
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
            Эхлэхийн өмнө шалгах зүйлс
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
            href="/passivhaus"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            ← Буцах
          </Link>
          <Link
            href="/passivhaus/insulation"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            02 · Дулаалга →
          </Link>
        </div>
      </section>
    </main>
  );
}
