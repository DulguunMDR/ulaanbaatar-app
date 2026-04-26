// app/passivhaus/insulation/page.tsx

import Link from "next/link";

const materials = [
  {
    number: "01",
    name: "Эрдэсийн ноолуур",
    nameEn: "Mineral Wool / Rockwool",
    lambda: "0.035–0.040 W/mK",
    price: "₮8,000–12,000/м²",
    note: "Хамгийн түгээмэл. Галд тэсвэртэй, чийг нэвтрүүлдэг.",
    availability: "Монголд байна",
  },
  {
    number: "02",
    name: "EPS",
    nameEn: "Expanded Polystyrene",
    lambda: "0.030–0.038 W/mK",
    price: "₮6,000–10,000/м²",
    note: "Хөнгөн, хямд. Гал тэсвэрлэлт муу.",
    availability: "Монголд байна",
  },
  {
    number: "03",
    name: "XPS",
    nameEn: "Extruded Polystyrene",
    lambda: "0.028–0.036 W/mK",
    price: "₮15,000–25,000/м²",
    note: "EPS-ээс бат бөх. Суурийн дулаалгад тохиромжтой.",
    availability: "Импорт",
  },
  {
    number: "04",
    name: "PIR / PUR",
    nameEn: "Polyisocyanurate",
    lambda: "0.022–0.028 W/mK",
    price: "₮25,000–40,000/м²",
    note: "Хамгийн сайн дулаалгын чадвартай. Монголд импортоор.",
    availability: "Тусгай захиалга",
  },
];

const thicknesses = [
  {
    zone: "Хана",
    thickness: "400–500мм",
    note: "Гаднах температур хамгийн их нөлөөлдөг",
  },
  {
    zone: "Дээвэр",
    thickness: "500–600мм",
    note: "Дулаан агаар дээшээ урсдаг тул хамгийн зузаан",
  },
  {
    zone: "Суурь",
    thickness: "300–400мм",
    note: "Газрын дулаан тогтвортой байдаг",
  },
];

const layers = [
  {
    number: "01",
    name: "Дотор талын хана",
    spec: "200мм · Бетон эсвэл тоосго",
  },
  {
    number: "02",
    name: "Уур битүүмжлэл",
    spec: "Vapor barrier — чийгнаас хамгаална",
  },
  {
    number: "03",
    name: "Дулаалга (1-р давхар)",
    spec: "200мм · Эрдэсийн ноолуур",
  },
  {
    number: "04",
    name: "Дулаалга (2-р давхар)",
    spec: "200мм · Холбоос давхцуулах",
  },
  {
    number: "05",
    name: "Цаг агаарын хамгаалалт",
    spec: "Wind barrier — салхи, бороо, цаснаас хамгаална",
  },
  {
    number: "06",
    name: "Гадна талын бүрээс",
    spec: "Тоосго, мод, төмөр — сонголтоор",
  },
];

const checklist = [
  "Дулаалгын зузааныг тооцоолох — Хана: 400–500мм, Дээвэр: 500–600мм",
  "Материал сонгох — λ-утгыг баталгаажуулах (сертификат шаардах)",
  "Уур битүүмжлэл (vapor barrier) байршуулах",
  "Дулаалгын давхарга тасралтгүй байлгах",
  "Дулаан гүүр үүсэхээс сэргийлэх — төмөр эд анги хязгаарлах",
  "Цаг агаарын хамгаалалт (wind barrier) суурилуулах",
];

export default function InsulationPage() {
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
            02 · ДУЛААЛГА
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus · Дулаалга
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Дэд Зэргийн
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Дулаалга
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            −40°C-д тэсвэрлэх дулаалгын систем. Зузаан дулаалга нь халаалтын
            зардлыг 80–90% бууруулдаг.
          </p>
        </div>
      </section>

      {/* REQUIRED THICKNESS */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
        {thicknesses.map((t, i) => (
          <div
            key={t.zone}
            className={
              "p-8 md:p-12 " +
              (i < thicknesses.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-100"
                : "")
            }
          >
            <p
              className="text-gray-400 uppercase mb-4"
              style={{ fontSize: "9px", letterSpacing: "0.14em" }}
            >
              {t.zone}
            </p>
            <div
              className="font-mono font-light text-gray-900 mb-3"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1 }}
            >
              {t.thickness}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t.note}</p>
          </div>
        ))}
      </section>

      {/* MATERIALS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Дулаалгын материалууд
          </p>
        </div>
        <div>
          {materials.map((m, i) => (
            <div
              key={m.number}
              className={
                "grid px-8 md:px-14 py-8 gap-4 md:gap-0 " +
                (i < materials.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{
                gridTemplateColumns: "3rem 1fr auto",
                alignItems: "start",
              }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {m.number}
              </span>
              <div className="pr-8">
                <h3
                  className="font-normal text-gray-800 mb-0.5"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                  }}
                >
                  {m.name}
                </h3>
                <p className="text-gray-400 mb-3" style={{ fontSize: "11px" }}>
                  {m.nameEn}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  {m.note}
                </p>
                <div className="flex gap-6">
                  <div>
                    <p
                      className="text-gray-400 uppercase mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                    >
                      λ-утга
                    </p>
                    <p className="font-mono text-gray-600 text-xs">
                      {m.lambda}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-gray-400 uppercase mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                    >
                      Үнэ
                    </p>
                    <p className="font-mono text-gray-600 text-xs">{m.price}</p>
                  </div>
                </div>
              </div>
              <span
                className="text-gray-400"
                style={{ fontSize: "10px", letterSpacing: "0.05em" }}
              >
                {m.availability}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* WALL LAYERS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Дулаалгын давхаргууд · Хананы жишээ
          </p>
        </div>
        <div>
          {layers.map((l, i) => (
            <div
              key={l.number}
              className={
                "grid px-8 md:px-14 py-6 " +
                (i < layers.length - 1 ? "border-b border-gray-100" : "")
              }
              style={{ gridTemplateColumns: "3rem 1fr" }}
            >
              <span
                className="font-mono text-gray-200 pt-px"
                style={{ fontSize: "11px" }}
              >
                {l.number}
              </span>
              <div>
                <p className="text-sm text-gray-700">{l.name}</p>
                <p
                  className="text-gray-400 mt-0.5"
                  style={{ fontSize: "11px" }}
                >
                  {l.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning note */}
        <div className="px-8 md:px-14 py-6 border-t border-gray-100 bg-gray-50/50">
          <p
            className="text-gray-400 uppercase mb-2"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Чухал анхааруулга
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            Дулаалгын давхаргууд тасралтгүй байх ёстой. Холбоосыг давхцуулж,
            &quot;дулаан гүүр&quot; үүсэхээс сэргийлнэ.
          </p>
        </div>
      </section>

      {/* THERMAL BRIDGES */}
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
            Дулаан гүүр · Thermal Bridge
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
            Дулаан гүүр гэдэг нь дулаалга тасарч, дулаан түргэн алддаг газар юм
            — төмөр баганууд, цонхны хүрээ, ханын нугалаа зэрэг.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            <div className="bg-white p-8">
              <p
                className="text-gray-400 uppercase mb-4"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Зайлсхийх
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Төмөр багана дулаалгыг нэвтлэх</li>
                <li>Дулаалгын давхарга тасрах</li>
                <li>Цонх дулаалгын гадна байрлах</li>
              </ul>
            </div>
            <div className="bg-white p-8">
              <p
                className="text-gray-400 uppercase mb-4"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Шийдэл
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Модон хүрээ ашиглах</li>
                <li>Дулаалга тасралтгүй байлгах</li>
                <li>Цонх дулаалгын дотор байрлуулах</li>
              </ul>
            </div>
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
            Шалгах жагсаалт
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
            href="/passivhaus/introduction"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            ← 01 · Танилцуулга
          </Link>
          <Link
            href="/passivhaus/windows"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            03 · Цонх ба Хаалга →
          </Link>
        </div>
      </section>
    </main>
  );
}
