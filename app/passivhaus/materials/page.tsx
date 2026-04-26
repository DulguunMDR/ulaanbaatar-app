// app/passivhaus/materials/page.tsx

import Link from "next/link";

const insulationMaterials = [
  {
    number: "01",
    name: "Эрдэсийн ноолуур",
    nameEn: "Mineral Wool",
    lambda: "0.035–0.040",
    price: "₮8,000–12,000/м²",
    availability: "Монголд байна",
    pros: ["Галд тэсвэртэй", "Авиа ашиглахад хялбар", "Монголд үйлдвэрлэдэг"],
    cons: ["Чийгтэй байх үед үр ашиг буурна"],
  },
  {
    number: "02",
    name: "EPS",
    nameEn: "Expanded Polystyrene",
    lambda: "0.030–0.038",
    price: "₮6,000–10,000/м²",
    availability: "Монголд байна",
    pros: ["Хямд үнэтэй", "Хөнгөн жин", "Чийгнээс хамгаална"],
    cons: ["Галд тэсвэрлэлт муу", "Мэрэгч эвдэж болзошгүй"],
  },
  {
    number: "03",
    name: "XPS",
    nameEn: "Extruded Polystyrene",
    lambda: "0.028–0.036",
    price: "₮15,000–25,000/м²",
    availability: "Импорт",
    pros: ["Бат бөх бүтэц", "Чийг шингээхгүй", "Суурийн дулаалгад тохиромжтой"],
    cons: ["Үнэ өндөр", "Монголд хязгаарлагдмал"],
  },
  {
    number: "04",
    name: "PIR / PUR",
    nameEn: "Polyisocyanurate",
    lambda: "0.022–0.028",
    price: "₮25,000–40,000/м²",
    availability: "Тусгай захиалга",
    pros: [
      "Хамгийн сайн дулаалга",
      "Нимгэн зузаан хангалттай",
      "Галд тэсвэртэй",
    ],
    cons: ["Маш өндөр үнэтэй", "Монголд олдоцгүй"],
  },
];

const sealingMaterials = [
  {
    name: "Битүүмжих хальс",
    nameEn: "Airtightness Tape",
    brands: "Pro Clima, Siga",
    price: "₮50,000–100,000/roll",
    source: "Онлайн захиалга",
  },
  {
    name: "Битүүмжих будаг",
    nameEn: "Sealant",
    brands: "Силикон, Акрил",
    price: "₮15,000–30,000/тюб",
    source: "Барилгын дэлгүүр",
  },
  {
    name: "Уур битүүмжлэх хальс",
    nameEn: "Vapour Barrier",
    brands: "0.2–0.3мм хуванцар",
    price: "₮8,000–15,000/м²",
    source: "Монголд байна",
  },
  {
    name: "Полиуретан дэвсгэр",
    nameEn: "Expanding Foam",
    brands: "1- ба 2-компонент",
    price: "₮10,000–20,000/can",
    source: "Монголд байна",
  },
];

const budget = [
  { item: "Дулаалга — хана, дээвэр, суурь", cost: "₮30,000,000–40,000,000" },
  { item: "Цонх хаалга (20–25м²)", cost: "₮10,000,000–20,000,000" },
  { item: "HRV / ERV систем", cost: "₮8,000,000–15,000,000" },
  { item: "Битүүмжлэх материалууд", cost: "₮5,000,000–8,000,000" },
  { item: "Халаалтын систем", cost: "₮3,000,000–5,000,000" },
  { item: "Бусад", cost: "₮4,000,000–7,000,000" },
];

const checklist = [
  "Дулаалгын λ-утгыг баталгаажуулах — сертификат шаардах",
  "Цонхны U-утгыг шалгах — лабораторийн тест үр дүн",
  "Битүүмжих материал −40°C-д тэсвэртэй эсэхийг лавлах",
  "HRV системийн дулаан сэргээлт ≥85% эсэхийг шалгах",
  "Нийлүүлэгчийн засвар үйлчилгээний баталгааг асуух",
  "Нийт төсвийг тооцоолж, нөөц мөнгө 10–15% нэмэх",
];

export default function MaterialsPage() {
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
            07 · МАТЕРИАЛ
          </span>
        </div>

        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Passivhaus · Материал ба нийлүүлэгч
          </p>

          <h1
            className="font-normal tracking-tight text-gray-900 mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "0.9",
            }}
          >
            Материалын
            <span
              className="block text-gray-300"
              style={{ marginLeft: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              Сонголт
            </span>
          </h1>

          <hr className="border-gray-100 mb-6" />

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Монголд зарим материал олдохгүй, зарим нь импортоор авах
            шаардлагатай. Дотоод болон гадаад материалыг хослуулах нь хамгийн
            сайн шийдэл.
          </p>
        </div>
      </section>

      {/* INSULATION MATERIALS */}
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
          {insulationMaterials.map((m, i) => (
            <div
              key={m.number}
              className={
                "px-8 md:px-14 py-8 " +
                (i < insulationMaterials.length - 1
                  ? "border-b border-gray-100"
                  : "")
              }
            >
              <div
                className="grid gap-6"
                style={{ gridTemplateColumns: "3rem 1fr auto" }}
              >
                <span
                  className="font-mono text-gray-200 pt-px"
                  style={{ fontSize: "11px" }}
                >
                  {m.number}
                </span>

                <div>
                  <h3
                    className="font-normal text-gray-800 mb-0.5"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "18px",
                    }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="text-gray-400 mb-4"
                    style={{ fontSize: "11px" }}
                  >
                    {m.nameEn}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p
                        className="text-gray-400 uppercase mb-2"
                        style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                      >
                        Давуу тал
                      </p>
                      <ul className="space-y-1">
                        {m.pros.map((p) => (
                          <li
                            key={p}
                            className="text-sm text-gray-500 flex items-start gap-2"
                          >
                            <span className="text-gray-300 flex-shrink-0">
                              +
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className="text-gray-400 uppercase mb-2"
                        style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                      >
                        Сул тал
                      </p>
                      <ul className="space-y-1">
                        {m.cons.map((c) => (
                          <li
                            key={c}
                            className="text-sm text-gray-500 flex items-start gap-2"
                          >
                            <span className="text-gray-300 flex-shrink-0">
                              –
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-8 pt-4 border-t border-gray-100">
                    <div>
                      <p
                        className="text-gray-400 uppercase mb-1"
                        style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                      >
                        λ-утга
                      </p>
                      <p className="font-mono text-gray-600 text-xs">
                        {m.lambda} W/mK
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-gray-400 uppercase mb-1"
                        style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                      >
                        Үнэ
                      </p>
                      <p className="font-mono text-gray-600 text-xs">
                        {m.price}
                      </p>
                    </div>
                  </div>
                </div>

                <span
                  className="text-gray-400 text-right"
                  style={{ fontSize: "10px", letterSpacing: "0.05em" }}
                >
                  {m.availability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINDOWS NOTE */}
      <section
        className="grid border-b border-gray-100"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        <div className="border-r border-gray-100" />
        <div className="px-8 md:px-14 py-12">
          <p
            className="text-gray-400 uppercase mb-6"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Цонх хаалга
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
            Passivhaus стандартын цонх (U≤0.8) нь Монголд ховор. Хоёр сонголт
            байна.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            <div className="bg-white p-8">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Гадаадын брэнд
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Герман, Польш, Орос цонх. Импортоор авна. Чанар баталгаатай.
              </p>
              <p className="font-mono text-gray-600 text-xs">
                ₮500,000–800,000/м²
              </p>
            </div>
            <div className="bg-white p-8">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.14em" }}
              >
                Дотоодын үйлдвэр
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                PVC профиль импортлож, Монголд угсардаг. Чанар харилцан адилгүй
                — U-утгыг шалгах.
              </p>
              <p className="font-mono text-gray-600 text-xs">
                ₮200,000–400,000/м²
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEALING MATERIALS */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Битүүмжлэх материалууд
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {sealingMaterials.map((s, i) => (
            <div
              key={s.name}
              className={
                "p-8 " +
                (i % 2 === 0 ? "md:border-r border-gray-100 " : "") +
                (i < 2 ? "border-b border-gray-100" : "")
              }
            >
              <h3
                className="font-normal text-gray-800 mb-0.5"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "16px" }}
              >
                {s.name}
              </h3>
              <p className="text-gray-400 mb-4" style={{ fontSize: "11px" }}>
                {s.nameEn}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span
                    className="text-gray-400 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                  >
                    Брэнд / Төрөл
                  </span>
                  <span className="text-gray-600 text-xs">{s.brands}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <span
                    className="text-gray-400 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                  >
                    Үнэ
                  </span>
                  <span className="font-mono text-gray-600 text-xs">
                    {s.price}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <span
                    className="text-gray-400 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                  >
                    Авах газар
                  </span>
                  <span className="text-gray-600 text-xs">{s.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="border-b border-gray-100">
        <div className="px-8 md:px-14 py-8 border-b border-gray-100">
          <p
            className="text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Материалын төсөвлөгөө · 100м²
          </p>
        </div>
        <div className="px-8 md:px-14 py-8">
          <div className="max-w-2xl">
            {budget.map((b, i) => (
              <div
                key={b.item}
                className={
                  "flex justify-between py-4 " +
                  (i < budget.length - 1 ? "border-b border-gray-100" : "")
                }
              >
                <span className="text-sm text-gray-500">{b.item}</span>
                <span className="font-mono text-gray-700 text-sm ml-4 text-right">
                  {b.cost}
                </span>
              </div>
            ))}
            <div className="flex justify-between py-6 mt-2 border-t-2 border-gray-200">
              <span className="text-sm text-gray-700 font-medium">
                Нийт материалын зардал
              </span>
              <span className="font-mono text-gray-900 text-sm font-medium">
                ₮60,000,000–95,000,000
              </span>
            </div>
            <p
              className="text-gray-400 leading-relaxed mt-2"
              style={{ fontSize: "11px" }}
            >
              Зөвхөн материал. Ажлын хөлс, зураг төсөл, тест нэмэгдэнэ. Нийт
              барилга: ₮1,200,000–1,500,000/м²
            </p>
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
            Материал худалдан авах шалгах жагсаалт
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
            href="/passivhaus/heating"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            ← 06 · Халаалт
          </Link>
          <Link
            href="/passivhaus/construction"
            className="text-gray-400 hover:text-gray-700 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            08 · Барилгын Процесс →
          </Link>
        </div>
      </section>
    </main>
  );
}
