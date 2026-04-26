// components/terms/TemperatureSection.tsx

const temperatureRanges = [
  {
    range: "−40°C ба доош",
    label: "Онцгой хүйтэн",
    labelEn: "Extreme Cold",
    advice: "Гадаа гарахгүй байх — царай, мөчрийн цус хөлдөх эрсдэл",
  },
  {
    range: "−40 → −20°C",
    label: "Маш хүйтэн",
    labelEn: "Very Cold",
    advice: "Бүрэн өвлийн хувцас, царай бүрэн таглах",
  },
  {
    range: "−20 → 0°C",
    label: "Хүйтэн",
    labelEn: "Cold",
    advice: "Дулаан хувцас, ноосон малгай, бээлий",
  },
  {
    range: "0 → 10°C",
    label: "Сэрүүн",
    labelEn: "Cool",
    advice: "Дунд зэргийн куртка — хаврын эхэн / намрын эцэс",
  },
  {
    range: "10 → 20°C",
    label: "Тааламжтай",
    labelEn: "Comfortable",
    advice: "Хөнгөн куртка — зун эхлэх, намрын эхэн",
  },
  {
    range: "20 → 30°C",
    label: "Дулаан",
    labelEn: "Warm",
    advice: "Зуны хувцас — зуны өдрүүд",
  },
  {
    range: "30°C+",
    label: "Халуун",
    labelEn: "Hot",
    advice: "Богино ханцуй, ус ихээр уух, нарнаас хамгаалах",
  },
];

const aqiRelationships = [
  "Өвлийн хүйтэнд халаалт ихэсч, агаарын бохирдол өсдөг",
  "−30°C-аас хүйтэн үед тоосонцор агаарт удаан хугацаагаар үлдэнэ",
  "Зуны халуунд озоны түвшин өндөр байдаг",
  "Температурын огцом өөрчлөлт эрүүл мэндэд хортой",
];

export function TemperatureSection() {
  return (
    <section>
      {/* Eyebrow */}
      <p
        className="text-gray-400 uppercase mb-5"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Цаг агаар · Weather
      </p>

      {/* Title */}
      <h2
        className="font-normal tracking-tight text-gray-900 mb-4"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(28px, 4vw, 42px)",
          lineHeight: "1",
        }}
      >
        Температур
      </h2>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Агаарын халуун, хүйтний хэмжээ. Celsius (°C) хэмжигдэхүүнээр
        илэрхийлэгддэг. Температур нь биеийн дулааны баланс, агаарын чанар,
        эрүүл мэндэд шууд нөлөөлдөг.
      </p>

      {/* Temperature range table */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Температурын хүрээ · °C
      </p>

      <div className="border border-gray-100 mb-10">
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "130px 140px 1fr" }}
        >
          {["°C", "Түвшин", "Зөвлөмж"].map((h, i) => (
            <div
              key={i}
              className="px-5 py-3 border-r border-gray-100 last:border-0"
            >
              <p
                className="text-gray-400 uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {h}
              </p>
            </div>
          ))}
        </div>

        {temperatureRanges.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0"
            style={{ gridTemplateColumns: "130px 140px 1fr" }}
          >
            <div className="px-5 py-4 border-r border-gray-100">
              <p className="font-mono text-sm text-gray-900">{row.range}</p>
            </div>
            <div className="px-5 py-4 border-r border-gray-100">
              <p
                className="text-sm text-gray-700"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {row.label}
              </p>
              <p
                className="text-gray-400 uppercase mt-0.5"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {row.labelEn}
              </p>
            </div>
            <div className="px-5 py-4">
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {row.advice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* UB context */}
      <div className="border-l-2 border-gray-200 pl-5 mb-10">
        <p
          className="text-gray-400 uppercase mb-2"
          style={{
            fontSize: "9px",
            letterSpacing: "0.14em",
            fontFamily: "var(--font-inter)",
          }}
        >
          Улаанбаатар хотод
        </p>
        <p
          className="text-sm text-gray-600 leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-mongolian)" }}
        >
          Дэлхийн хамгийн хүйтэн нийслэл. Өвөл −40°C хүртэл хүрч, зун +30°C
          болдог. Жилийн температурын зөрүү 70°C-аас дээш — хоёуланд дасах
          шаардлагатай.
        </p>
        <div
          className="grid border border-gray-100"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="px-5 py-4 border-r border-gray-100">
            <p className="font-mono text-sm text-gray-900 mb-1">−40°C</p>
            <p
              className="text-gray-400"
              style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
            >
              Өвлийн хамгийн хүйтэн
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="font-mono text-sm text-gray-900 mb-1">+30°C</p>
            <p
              className="text-gray-400"
              style={{ fontSize: "11px", fontFamily: "var(--font-inter)" }}
            >
              Зуны хамгийн халуун
            </p>
          </div>
        </div>
      </div>

      {/* Temperature & AQI relationship */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Температур ба агаарын чанарын хамаарал
      </p>
      <div className="border border-gray-100">
        {aqiRelationships.map((item, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0 px-5 py-4"
            style={{ gridTemplateColumns: "24px 1fr" }}
          >
            <p className="font-mono text-gray-300" style={{ fontSize: "11px" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "var(--font-mongolian)" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
