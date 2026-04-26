// components/terms/FeelsLikeSection.tsx

export function FeelsLikeSection() {
  const windChill = [
    { wind: "Салхигүй", speed: "0 м/с", actual: "−20°C", feels: "−20°C" },
    { wind: "Сул салхи", speed: "5 м/с", actual: "−20°C", feels: "−25°C" },
    { wind: "Хүчтэй салхи", speed: "10 м/с", actual: "−20°C", feels: "−30°C" },
    { wind: "Шуурга", speed: "15+ м/с", actual: "−20°C", feels: "−35°C+" },
  ];

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
        Мэдрэгдэх температур
      </h2>
      <hr className="border-gray-100 mb-6" />

      {/* Body */}
      <p
        className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10"
        style={{ fontFamily: "var(--font-mongolian)" }}
      >
        Жинхэнэ температур биш, харин хүний биед мэдрэгдэх температур. Салхины
        хурд болон чийгшлийг харгалзан тооцдог. Гадаа гарахдаа ямар хувцас
        өмсөх, хэр удаан байх вэ гэдгийг шийдэхэд тусалдаг.
      </p>

      {/* Two mechanisms */}
      <div
        className="grid border border-gray-100 mb-10"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="p-6 border-r border-gray-100">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Өвлийн улиралд · Wind Chill
          </p>
          <p
            className="text-sm text-gray-600 leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            Салхи арьсны гадаргуугаас дулааныг хурдан авч, илүү хүйтэн
            мэдрэгдүүлнэ.
          </p>
          <div className="border-t border-gray-100 pt-4">
            <p
              className="text-gray-400 mb-1"
              style={{ fontSize: "9px", fontFamily: "var(--font-inter)" }}
            >
              Жишээ
            </p>
            <p className="font-mono text-sm text-gray-900">
              −20°C + 10 м/с → −30°C
            </p>
          </div>
        </div>

        <div className="p-6">
          <p
            className="text-gray-400 uppercase mb-4"
            style={{
              fontSize: "9px",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Зуны улиралд · Heat Index
          </p>
          <p
            className="text-sm text-gray-600 leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-mongolian)" }}
          >
            Чийгшил өндөр үед хөлрөх нь удааширч, илүү халуун мэдрэгдэнэ.
          </p>
          <div className="border-t border-gray-100 pt-4">
            <p
              className="text-gray-400 mb-1"
              style={{ fontSize: "9px", fontFamily: "var(--font-inter)" }}
            >
              Жишээ
            </p>
            <p className="font-mono text-sm text-gray-900">
              +30°C + 80% → +35°C
            </p>
          </div>
        </div>
      </div>

      {/* Wind chill table */}
      <p
        className="text-gray-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          fontFamily: "var(--font-inter)",
        }}
      >
        Салхины нөлөөний хүснэгт · Wind Chill Table
      </p>

      <div className="border border-gray-100">
        {/* Header row */}
        <div
          className="grid border-b border-gray-100 bg-gray-50"
          style={{ gridTemplateColumns: "1fr 80px 80px 80px" }}
        >
          {["Салхи", "Хурд", "Жинхэнэ", "Мэдрэгдэх"].map((h) => (
            <div
              key={h}
              className="px-4 py-3 border-r border-gray-100 last:border-0"
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

        {windChill.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-gray-100 last:border-0"
            style={{ gridTemplateColumns: "1fr 80px 80px 80px" }}
          >
            <div className="px-4 py-4 border-r border-gray-100">
              <p
                className="text-sm text-gray-700"
                style={{ fontFamily: "var(--font-mongolian)" }}
              >
                {row.wind}
              </p>
            </div>
            <div className="px-4 py-4 border-r border-gray-100">
              <p className="font-mono text-sm text-gray-500">{row.speed}</p>
            </div>
            <div className="px-4 py-4 border-r border-gray-100">
              <p className="font-mono text-sm text-gray-900">{row.actual}</p>
            </div>
            <div className="px-4 py-4">
              <p className="font-mono text-sm text-gray-900">{row.feels}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        className="text-gray-400 mt-6 leading-relaxed"
        style={{
          fontSize: "11px",
          fontFamily: "var(--font-inter)",
        }}
      >
        Улаанбаатарт өвлийн улиралд салхины хүчтэй үед мэдрэгдэх температур
        жинхэнэ утгаас 5–15°C-аар доогуур байж болно — хүйтний өвчин, цус
        хөлдөлтийн эрсдэлийг нэмэгдүүлдэг.
      </p>
    </section>
  );
}
