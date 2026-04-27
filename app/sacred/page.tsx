// app/sacred/page.tsx
// Route: /sacred
// Static server component — no data fetching required

import Link from "next/link";

export const metadata = {
  title: "Ариун хот | Улаанбаатар",
  description:
    "Улаанбаатар бол зүгээр нэг хот биш. Энэ бол ариун газар. Хийдүүд, уулнууд, Занабазар.",
};

// ─── Mountain SVG silhouette ────────────────────────────────────────────────
function MountainSilhouette() {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full opacity-20"
      aria-hidden="true"
    >
      {/* Богд хаан (өмнөд / төв — хамгийн өндөр) */}
      <path
        d="M380 180 L280 60 L180 180Z"
        fill="currentColor"
        className="text-amber-800"
      />
      {/* Чингэлтэй (хойд / зүүн) */}
      <path
        d="M160 180 L80 95 L10 180Z"
        fill="currentColor"
        className="text-amber-700"
      />
      {/* Баянзүрх (зүүн / баруун) */}
      <path
        d="M600 180 L520 80 L440 180Z"
        fill="currentColor"
        className="text-amber-700"
      />
      {/* Сонгино хайрхан (баруун / алс баруун) */}
      <path
        d="M790 180 L710 100 L630 180Z"
        fill="currentColor"
        className="text-amber-600"
      />
      {/* Газрын шугам */}
      <line
        x1="0"
        y1="180"
        x2="800"
        y2="180"
        stroke="currentColor"
        strokeWidth="1"
        className="text-amber-300"
      />
    </svg>
  );
}

// ─── Eyebrow label ───────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-amber-600 uppercase mb-5"
      style={{
        fontSize: "9px",
        letterSpacing: "0.14em",
        fontFamily: "var(--font-inter)",
      }}
    >
      {children}
    </p>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({
  children,
  amber = false,
}: {
  children: React.ReactNode;
  amber?: boolean;
}) {
  return (
    <section
      className={`px-8 md:px-14 py-14 md:py-20 border-b border-gray-100 ${
        amber ? "bg-amber-50/20" : ""
      }`}
    >
      {children}
    </section>
  );
}

// ─── Blockquote ──────────────────────────────────────────────────────────────
function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="border-l-2 border-amber-200 pl-6 my-8 text-gray-500 leading-relaxed max-w-2xl"
      style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "18px",
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  );
}

// ─── Mountain card ───────────────────────────────────────────────────────────
function MountainCard({
  direction,
  mongolian,
  english,
  note,
}: {
  direction: string;
  mongolian: string;
  english: string;
  note: string;
}) {
  return (
    <div className="border border-gray-100 p-6 bg-white">
      <p
        className="text-amber-400 uppercase mb-3"
        style={{
          fontSize: "9px",
          letterSpacing: "0.18em",
          fontFamily: "var(--font-inter)",
        }}
      >
        {direction}
      </p>
      <h3
        className="font-normal text-gray-900 mb-1"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "20px" }}
      >
        {mongolian}
      </h3>
      <p
        className="text-gray-400 mb-4"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "11px",
          letterSpacing: "0.06em",
        }}
      >
        {english}
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">{note}</p>
    </div>
  );
}

// ─── Era card ─────────────────────────────────────────────────────────────────
function EraCard({
  era,
  years,
  note,
}: {
  era: string;
  years: string;
  note: string;
}) {
  return (
    <div className="border-l border-amber-100 pl-5 py-1">
      <p className="font-mono text-amber-500 mb-1" style={{ fontSize: "10px" }}>
        {years}
      </p>
      <p
        className="text-gray-700 mb-1"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "14px" }}
      >
        {era}
      </p>
      <p className="text-gray-400 leading-relaxed" style={{ fontSize: "12px" }}>
        {note}
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function SacredPage() {
  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* ── HERO — vertical spine ─────────────────────────────────────── */}
      <section
        className="grid border-b border-gray-100 bg-amber-50/30"
        style={{ gridTemplateColumns: "32px 1fr" }}
      >
        {/* Spine */}
        <div
          className="border-r border-gray-100 flex items-center justify-center py-16"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className="text-amber-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            АРИУН ХОТ
          </span>
        </div>

        {/* Hero content */}
        <div className="px-8 md:px-14 py-12 md:py-20">
          <Eyebrow>Улаанбаатар · 1639–өнөөдөр</Eyebrow>

          <h1
            className="font-normal text-gray-900 leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 5vw, 56px)",
            }}
          >
            Улаанбаатар —<br />
            <span className="text-amber-700">ариун хот</span>
          </h1>

          <p
            className="text-gray-500 leading-relaxed max-w-xl mb-3"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            Улаанбаатар бол зүгээр нэг хот биш.
            <br />
            Энэ бол ариун газар.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed max-w-prose mb-10">
            Худалдааны цэг биш. Цэргийн бэхлэлт биш. Буддын хийд — 1639 онд
            үүсч, 139 жил нүүдэллэн, дөрвөн ариун уулаар хүрээлэгдсэн хөндийд
            суурьшжээ. Ихэнх хүмүүс, тэр дундаа олон монголчууд энэ түүхийг
            мэддэггүй. Энэ хуудас тэр түүхийг анхааралтайгаар хадгалах оролдлого
            юм.
          </p>

          {/* Mountain silhouette */}
          <div className="max-w-lg">
            <MountainSilhouette />
            <p
              className="text-center text-gray-300 mt-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.12em",
              }}
            >
              ДӨРВӨН АРИУН УУЛ
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 0: Deep prehistory ────────────────────────────────── */}
      <Section>
        <Eyebrow>300,000 жилийн өмнөөс · Эртний суурьшил</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Хүн төрөлхтний эртний гэр
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Улаанбаатар орчмын газарт хүн суурьшсан түүх доод палеолитоос
              эхэлдэг. 1949, 1960 оны археологийн судалгаагаар Богд хаан уул,
              Буянт-Ухаа, Сонгино хайрхан уулын орчмоос олон тооны палеолитын
              дурсгалт газар илрүүлжээ. 1962 онд Сонгино хайрхан болон
              Буянт-Ухаанд олдсон 23 чулуун зэвсгийг эрдэмтэд 300,000-аас 12,000
              жилийн өмнөхийнх гэж тогтоосон.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Зайсаны толгойн өмнөд захад орших дээд палеолитын суурин
              (40,000–12,000 жилийн өмнө) хоёр давхаргат суурин бөгөөд доод
              давхаргаас Левалуагийн техникээр хийсэн зэвсгүүд гарсан. Тэр үеийн
              хүмүүс Туул голын хөвөөгөөр мамонт, үслэг хирс агнаж байжээ — яс
              нь одоо ч Улаанбаатарын орчимд элбэг олддог.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Хүрлийн зуунд (МЭӨ 1-р мянган жил) Богд хаан уулын хойд хажуугийн
              Их Тэнгэр хавцалд улаан охрын будгаар зурсан хадны зураг үлдсэн
              байдаг. Зургуудад хүн, адуу, бүргэд, хэвтээ шугам, дотроо олон
              цэгтэй том дөрвөлжин зэрэг дүрслэлүүд бий. Адилхан хэв маягийн
              зургууд хотын зүүн талын Гачуурт болон Хөвсгөл аймагт ч олдсон нь
              нийтлэг өмнөд Сибирийн нүүдлийн мал аж ахуйн соёлыг гэрчилдэг.
            </p>
          </div>
          <div>
            <Pull>
              Богд хаан уул бол хүрлийн зуунаас өмнөх хүмүүсийн оюун санааны
              тахилын газар байсан байх — хэдэн мянган жилийн ариун ач холбогдол
              1778 онд хотыг тэнд байршуулахад нөлөөлсөн байж болзошгүй.
            </Pull>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <EraCard
                era="Хүннү (Сюнну)"
                years="МЭӨ 209 — МЭ 93"
                note="Туул голын хөвөөд хүчирхэг нүүдэлчин гүрэн оршин тогтнов. Ноён уулын хааны оршуулгын цогцолбор хотын хойд талд өнөөдрийг хүртэл хадгалагдаж байна. Богд хаан уулын Баруун богинийн амнаас 'Хүннү хатны булш' нээгдэж, модон аяга, шаазан савнууд олдов."
              />
              <EraCard
                era="Түрэгийн хаант улс"
                years="555–745"
                note="Налайх дүүрэгт байгаа Тонюкукийн хөшөө (МЭ 722 орчим) нь хуучин түрэг хэлний Орхоны бичгээр бичсэн чухал дурсгал юм. Хот 1778 онд суурьшихдаа ёслолын суурь чулуу болгон сонгосон балбал ч энэ эрин үеийнх."
              />
              <EraCard
                era="Уйгурын хаант улс"
                years="745–840"
                note="Туул голын хөндий нүүдэлчин гүрнүүдийн нөлөөний хүрээнд байсаар байв. Орхон голын хөндийд Уйгурын нийслэл Хар балгас байрлаж, Улаанбаатарын орчим чухал нутаг хэвээр байлаа."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 0b: Medieval & Mongol Empire ─────────────────────── */}
      <Section amber>
        <Eyebrow>12–14-р зуун · Чингисийн эзэнт гүрэн</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Хар ой — Туул голын хөвөөд
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Монголчуудын нууц товчоонд Туул голын &quot;хар ой&quot;-г олон
              удаа дурдсан байдаг. Кераитын хаан Ван хан Тогрул (1130–1203) —
              Марко Пологийн &quot;Лам хаан&quot; хэмээн тодотгосон Несторын
              Христийн монарх — энд ордонтой байсан гэж тэмдэглэжээ. Тэрээр Богд
              хаан уулд ан агнахыг хориглодог байжээ.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1949 онд Сонгино хайрхан дүүргийн нутагт Ван ханы ордны туурь
              (15×27 метр, өмнө харсан хаалгатай) олдож, 2006 онд Д. Навааны баг
              малтлага хийжээ. Хятадын архитектурын нөлөөтэй энэ тоосгон байшинг
              хожим Чингис хааны гурав дахь ордон, Есүй хатны ордон гэж
              нэрлэжээ. Монголчуудын нууц товчооны 264-р зүйлд Чингис хаан 1225
              онд тахиа жилийн намар Туул голын хар ойд өвөлжсөн тухай өгүүлсэн
              байдаг.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              1984 онд Сонгино хайрхан уулын Дадарт уулнаас 13-р зууны баян булш
              малтаж гаргажээ. 175 сантиметр өндөр, 50–60 насны дайчин цогцос
              алтан бүстэй оршуулагдсан байв. 39 хэсгээс бүрдэх чимэглэлт бүс нь
              энэ хүн Жамухагийн булш байж болзошгүй гэсэн таамаглалыг
              төрүүлсэн.
            </p>
          </div>
          <div>
            <Pull>
              Монголчуудын нууц товчоо Туул голын хар ойг олон удаа дурддаг.
              Өнөөдрийн Улаанбаатар суурьшсан газрыг Чингис хааны өвөл
              өнгөрүүлэх газар гэж 800 жилийн өмнөх бичгийн дурсгал тэмдэглэсэн
              байдаг.
            </Pull>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              Монголын эзэнт гүрний (1206–1368) үед Улаанбаатарын орчим нутаг
              нийслэл Хархорумаас зүүн тийш чухал нутаг байв. Аbtай саин хан
              16-р зуунд Богд хаан уулд мөргөж байсан тухай баримт бий. Францын
              лаллын шашны номлогч Жербильон 1698 оны 8-р сарын 5-нд Туул голын
              эрэгт буудаллаж, дневникийнхээ тэмдэглэлд &quot;Хан алин&quot; —
              Богд хаан уул — нарс, гацуур модоор бүрхэгдэж, баавгай, зэрлэг
              гахай, буга элбэг байдгийг дурссан байдаг.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 0c: Qing era & trade city ───────────────────────── */}
      <Section>
        <Eyebrow>17–19-р зуун · Маймаа хот ба Манжийн эрин</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Цайны замын голомт
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              18-р зуунд Их хүрээ зөвхөн шашны төв биш, Хятад, Орос, Төв Азийг
              холбосон Цайны замын гол цэг болжээ. Сибирийн үс арьс, Хятадын
              торго, цай зэрэг бараа Урга орж гарч байв. 1728 онд Манжийн эрин
              үед хотын ойролцоо Маймаа хот — тусдаа Хятадын худалдааны дүүрэг —
              байгуулагдав.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Манжийн Цяньлун эзэн 1778 онд зарлиг гаргаж, дөрвөн уулыг албан
              ёсоор ариун болгов. Энэ нь хот тухайн газарт суурьшсантай давхцсан
              тул санамсаргүй биш — дөрвөн уулаар хүрээлэгдсэн хөндийг
              санаатайгаар ариун газар болгон тунхагласан хэрэг юм.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              19-р зуунд Их хүрээ зөвхөн шашны бус мөн улс төр, захиргаа, соёлын
              томоохон төв, Монголын худалдаа харилцааны гол цэг болжээ. Тухайн
              үед хотын нийт хүн ам ойролцоогоор 15,000–20,000 байсан гэж
              тооцдог. Гандантэгчинлэн хийд, Зүүн хүрээ, Баруун дамнуурчин,
              Маймаа хот, Консулын яамны яам, Дамбадаржаа нь тухайн үеийн хотын
              томоохон газрууд байв.
            </p>
          </div>
          <div>
            <Pull>
              1797 онд тогтоол гарч, Их хүрээнд &quot;дуулах, нумаар харваах,
              мяамаа, шатар тоглох, хүүлийн мөнгө авах, тамхи татах&quot;-ыг
              хориглов. Хот нь лам нарын хурааг амьдруулдаг дүрэм журмын дагуу
              ажилладаг байв.
            </Pull>
            <div className="mt-6 border border-gray-100 p-6 bg-gray-50">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                }}
              >
                1778 он гэхэд
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Их хүрээнд ойролцоогоор 10,000 лам оршин сууж байв. Буддын шашны
                дээд эрх мэдэл болон арилжааны идэвх хоёулаа нэг газарт — Хатан
                Туулын эрэгт, дөрвөн ариун уулын тэвэрт суурьшсан хотод
                төвлөрчээ.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 1: Founding ───────────────────────────────────────── */}
      <Section amber>
        <Eyebrow>1639 · Үүссэн нь</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Шашны институт дээр байгуулагдсан хот
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1639 онд, өнөөдрийн хотоос ойролцоогоор 340 км зайтай Ширээт
              Цагаан нуурт Түшээт хан Гомбодорж болон Сэцэн хан Шолой нар таван
              настай Занабазарыг Халх монголчуудын дээд шашны удирдагч — анхны
              Богд Жавзандамба хутагт болгон залав. Түүний эргэн тойронд
              байгуулагдсан суурингийн нэрийг Өргөө гэж нэрлэв — агуу ордон-гэр.
              Энэ нь хот биш байв. Нүүдэллэн явдаг хийдийн нийгэмлэг байв.
              Замдаа байгаа амьд шашны институт.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              1640-1778 оны хооронд энэ хийд-хот Туул болон Орхон голын
              хөндийгөөр ойролцоогоор 29 удаа нүүжээ — цэргийн шалтгаанаар биш,
              шинэ бэлчээр дагаж, шашны удирдлагаар тогтоосон оюун санааны
              шалгуурыг хүндэтгэн. Нүүдэл бүрийг итгэл үнэмшил удирдсан.
            </p>
          </div>
          <div>
            <Pull>
              &quot;Хот ариун газрын эргэн тойронд өсөн төрөөгүй. Хот өөрөө
              ариун газар байсан — бараг 140 жил газар нутгаар нүүдэллэн
              явав.&quot;
            </Pull>
            <p className="text-sm text-gray-500 leading-relaxed">
              Эцэст нь 1778 онд Алтан Тавшид — Алтан Таваг хөндийд — суурьшжээ,
              учир нь энэ газрыг дөрвөн зүгт Монголын уламжлалд ариун дагшин гэж
              тооцогддог уулнууд хүрээлж байв. Сонголт нь сансрын, газарзүйн биш
              байв.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              Үүний дараа бараг 200 жилийн турш хотыг ертөнцийн захирагч биш,
              амьд Бурхан — Жавзандамба хутагт удирдаж байв. 1639-1924 оны
              хооронд наймдугаар амьд Бурхан эрх мэдлийг барьсан. Тэдний
              сүүлчийнх нь 1911 оноос 1924 онд нас нөгчтлөө бие даасан Монголын
              төрийн тэргүүн байсан бөгөөд ингэснээр Улаанбаатар орчин үеийн
              ертөнцийн хамгийн сүүлчийн Буддын теократ улсын нэг болжээ.
            </p>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="mt-12 border-t border-gray-100 pt-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {[
              { year: "1639", label: "Өргөө үүсэв\nЗанабазар залагдав" },
              {
                year: "1651",
                label: "Номийн хүрээ нэрлэгдэв\n7 шашны тасаг",
              },
              {
                year: "1706",
                label: "Их хүрээ нэрлэгдэв\nБайнгын шашны төв",
              },
              { year: "1778", label: "Эцэст суурьшив\nАлтан Таваг хөндий" },
              { year: "1838", label: "Гандан хийд\nбаригдав" },
              { year: "1911", label: "Нийслэл хүрээ\nнэрлэгдэв" },
              { year: "1924", label: "Улаанбаатар\nнэрлэгдэв" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 border-l border-amber-100 pl-4 pr-8"
              >
                <p
                  className="font-mono text-amber-500 mb-1"
                  style={{ fontSize: "11px" }}
                >
                  {item.year}
                </p>
                <p
                  className="text-gray-400 leading-snug whitespace-pre-line"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "10px" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 2: Four Sacred Mountains ─────────────────────────── */}
      <Section>
        <Eyebrow>Дөрвөн ариун уул</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Дөрвөн зүгийн сахиус
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-prose mb-10">
          Хот энд санамсаргүй байршаагүй. Алтан Таваг хөндийг дөрвөн зүгт нэг
          нэг ариун уул хүрээлж байдаг учраас сонгосон юм. Монголын уламжлалд{" "}
          Богд гэж нэрлэгдсэн уулыг Бурхантай адил хүндэтгэдэг. Дөрвөн ийм
          уулаар хүрээлэгдсэн хот зүгээр нэг хамгаалагдаад зогсохгүй.
          Ариусгагдсан байдаг.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          <MountainCard
            direction="Өмнөд"
            mongolian="Богд хаан уул"
            english="2,261м"
            note="Оргил болор эрдэнэ. Дор хаяж 12-р зуунаас — Монголын эзэнт гүрний өмнөөс эхтэй ариун хамгаалалт. 1778 онд Цяньлун эзэний зарлигаар албан ёсоор ариусгагдав. Занабазар 1653 онд энд бясалгал хийсэн; тэр газрыг Нухт хөндийд өнөөдрийг хүртэл хадгалж байна. Дэлхийд тасралтгүй хамгаалагдсан хамгийн эртний ариун газруудын нэг. Энэ уулын тэнгэр Дунжингарав 33 саарал морин цуваагаар — улсын ёслолд, дөрвөн жилд нэг удаа өнөөдрийг хүртэл дуудагддаг."
          />
          <MountainCard
            direction="Хойд"
            mongolian="Чингэлтэй уул"
            english=""
            note="Хотыг хатуу хойд салхинаас хамгаалдаг. Ариун суурин байршлыг эрс тэс уур амьсгалаас хамгаалсан уул болохын хувьд түүхэн ач холбогдолтой. Өнөөгийн хотын хязгаарт орших Чингэлтэй дүүргээс Хүннүгийн булш олдсон — энд хэдэн давхрааны ариун түүх оршдог."
          />
          <MountainCard
            direction="Зүүн"
            mongolian="Баянзүрх уул"
            english="Баян зүрх"
            note="Нэр нь Баян Зүрх гэсэн утгатай. Орон нутгийн оюун санааны шүтлэг болон өвөг дээдсийн уламжлалтай удаан холбоотой. Ёслолын зан үйлийн газар. Монголын сансрын ухааны дагуу аз жаргалтай зүйл ирдэг зүг болох нарны мандах зүгийг харадаг."
          />
          <MountainCard
            direction="Баруун"
            mongolian="Сонгино хайрхан уул"
            english=""
            note="Үндэсний хамгаалалтад байдаг. Нэрэн дэх Хайрхан гэдэг нь Буддын өмнөх бөөгийн уламжлалаас хүчтэй газрын доорх сүнсийг хүндэтгэдэг — ийм нэртэй уулнууд ихэвчлэн эгц, цаст оргилтой байдаг. 2000 гаруй жилийн өмнөх Хүннүгийн хааны булш уулын баруун хажуугаас олдсон."
          />
        </div>

        <p className="text-sm text-gray-400 leading-relaxed max-w-prose mt-8 italic">
          Богд хаан уул ойролцоогоор 12-р зуунаас тасралтгүй хамгаалагдаж ирсэн
          — ингэснээр дэлхийн хамгийн эртний байгалийн нөөц газруудын нэг
          болжээ. Монголын ЮНЕСКО-гийн Дэлхийн өвийн нэр дэвшигчдийн жагсаалтад
          байна.
        </p>
      </Section>

      {/* ── SECTION 3: Zanabazar ──────────────────────────────────────── */}
      <Section amber>
        <Eyebrow>Занабазар · 1635–1723</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Хотын түүх
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Занабазар 1639 онд анхны Жавзандамба хутагт болгон залагдах үед
              таван настай байв. Тэрээр огт өөр зүйл болов: Төв Азийн соёл
              иргэншлийн түүхэн дэх хамгийн гайхамшигт хүмүүсийн нэг. Тийм ээ,
              шашны удирдагч — мөн скульптор, хэл шинжээч, улс төрч бөгөөд
              түүний нөлөө дараа нь болсон бүх зүйлийг бүрдүүлсэн.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Тэрээр 5-р Далай ламын дор Төвдөд суралцаж, Монголд гүнзгий
              мэдлэгтэй буцаж ирэн Монголын Буддизмыг өөрчилсэн. Тэрээр Соёмбо
              бичгийг зохиосон — анхны тэмдэг нь өнөөдрийг хүртэл Монгол улсын
              далбаан дээр байдаг. 1653 онд Богд хаан уулын Нухт хөндийд
              бясалгал хийсэн; тэр газрыг өнөөдрийг хүртэл хадгалж байна.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Түүний хүрэл хөшөө бүтээлүүд — Дар эх, Цагаан Дар эх, таван Дхяани
              Бурхан — өнөөдөр Занабазарын дүрслэх урлагийн музейд байна. 17-р
              зуунд цутгасан. 1930-аад оны цэвэрлэгээнээс амьд үлджээ. Бүх
              зүйлийг тэвчиж гарсан.
            </p>
          </div>
          <div>
            <Pull>
              Тэр өрөөнд олон удаа зогссон. Цагаан Дар эхийн нам гүм байдалд
              бэлтгэх арга байхгүй — Занабазар түүний нүүрийг дүрсэлсэн байдал
              нь урлагаас илүүтэй, тэрээр үнэхээр харсан зүйлийнхээ бичлэг мэт
              санагддаг.
            </Pull>
            <p
              className="text-gray-400 mt-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                letterSpacing: "0.08em",
              }}
            >
              — Хувийн тэмдэглэл
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: The Tuul River ─────────────────────────────────── */}
      <Section>
        <Eyebrow>Туул гол · Ариун гол</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Хатан Туул
        </h2>
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Туул гол — Хатан Туул — доод Палеолитоос эхлэн энэ хөндийд ариун
            оршихуй байжээ. Эргэн тойрны уулнуудаас олдсон чулуун зэвсгүүд
            300,000 жилийн өмнөхийг гэрчилдэг. Зайсаны хөндийн дээд Палеолитын
            оршин суугчид эрэг дагуу мамонт болон үслэг хирсийг агнадаг байв.
            Занабазар анхны ордноо Туулын эрэгт санаатайгаар барьсан. Хот 1778
            онд эцэст нь Туул болон Сэлбэ голын нийлэх цэгт, Богд хаан уулын
            бэлд суурьшихдаа практик шалтгаанаасаа бараг илүүтэйгээр ариун утга
            учраасаа сонгогдсон газарт суурьшив.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Монголын домогт Хатан Туул гэж нэрлэдэг. Бөөгийн уламжлал болон
            Буддын шашны практик хоёулаа хүндэтгэдэг. Хотдоо эцсийн гэрийг
            өгсөн.
          </p>

          {/* The hard truth */}
          <div className="border border-gray-100 p-6 bg-gray-50 mt-6">
            <p
              className="text-gray-400 uppercase mb-3"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.14em",
              }}
            >
              Өнөөдөр
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Туул гол одоо Монголын хамгийн их бохирдсон голуудын нэг болжээ.
              Уул уурхай, хотын бохир ус болон хангалтгүй ариутгалын систем нь
              хэдэн зуун мянган жилийн хүн суурьшлын туршид ариун байсан усан
              замыг сүйтгэжээ. Хот дотроо амьдарч буй хурцадмал байдал энэ юм.
              Ариун гол урсаж байсаар байна. Зуун жилийн хурдацтай хот суурьшил
              болон олборлох үйлдвэрийн үр дагаврыг үүрч урсдаг. Хоёул үнэн.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 5: Independence 1911 ─────────────────────────────── */}
      <Section amber>
        <Eyebrow>1911 · Тусгаар тогтнол</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Нийслэл хүрээ — сүүлчийн теократ
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1911 оны зун Наадамын үеэр монгол ноёд Манжийн Чин гүрний сулралыг
              ашиглах шийдвэр гаргав. Тэд Богд хаан уулын ариун ойн дор нуугдан
              уулзсан — уул нь нуугдах газар ч, оюун санааны зөвшөөрлийн тэмдэг
              ч байв. 12-р сарын 1-нд тусгаар тогтнолоо зарлаж, 8-р Жавзандамба
              хутагтыг Монгол улсын Богд хаан болгон залав.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Хотыг Нийслэл хүрээ — Нийслэлийн дуган хийд — гэж нэрлэв. Шашны
              удирдагч улсын тэргүүн болсон. 1911-1924 оны хооронд Улаанбаатар
              орчин үеийн дэлхийн хамгийн сүүлчийн Буддын теократ улсуудын
              нэгийн нийслэл байв. Богд хааны өвлийн ордон (1903) өнөөдрийг
              хүртэл амьд үлдсэн байна.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1921 онд Монголын хувьсгалчид болон Зөвлөлтийн Улаан арми хотыг
              эзлэн авав. Дамдины Сүхбаатарын удирдсан ардын хувьсгал Манжийн
              захиргааг авч орлов. Хотын гол төвд морин хөшөө нь 1946 онд
              Сүхбаатарын нэрэмжит талбайд баригдав.
            </p>
            <div className="border border-gray-100 p-6 bg-white mt-4">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                }}
              >
                Нэрний хувьсал
              </p>
              <div className="space-y-2">
                {[
                  { year: "1639", name: "Өргөө", note: "Агуу ордон-гэр" },
                  { year: "1651", name: "Номийн хүрээ", note: "Шашны дуган" },
                  { year: "1706", name: "Их хүрээ", note: "Их дуган" },
                  {
                    year: "1912",
                    name: "Нийслэл хүрээ",
                    note: "Нийслэлийн хийд",
                  },
                  { year: "1924", name: "Улаанбаатар", note: "Улаан баатар" },
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span
                      className="font-mono text-amber-400 flex-shrink-0"
                      style={{ fontSize: "10px", width: "36px" }}
                    >
                      {item.year}
                    </span>
                    <span
                      className="text-gray-700"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "13px",
                      }}
                    >
                      {item.name}
                    </span>
                    <span className="text-gray-400 text-xs">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: Communist Suppression ─────────────────────────── */}
      <Section>
        <Eyebrow>1937 · Цус урсгасан жил</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Устгал
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1937-1939 оны хооронд Сталины ойрын холбоотон Хорлогийн
              Чойбалсангийн удирдлаган дор Монгол орчин үеийн түүхэн дэх хамгийн
              харгис хэрцгий шашны цэвэрлэгээний нэгийг амссан. Сүйрэл
              Улаанбаатарт, Буддизмын үндэсний төвд хамгийн хүнд буужээ.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Ойролцоогоор 17,000 лам баривчлагдав. Ихэнх нь цаазаар авагдсан
              эсвэл хөдөлмөрийн лагерт нас барав. Монголын хийд, дуган сүмийн
              цогцолборуудын дийлэнх хэсэг нуржээ. Мянга мянган ариун бичиг,
              хөшөө, тханк, ёслолын эд зүйлийг устгав. Жавзандамба хутагтын
              удмыг хориглов — коммунизм унатал шинэ амьд Бурхан хүлээн
              зөвшөөрөгдөхгүй байв.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Хотын нэр аль хэдийн шашны Нийслэл Хүрээнээс — Дуган Сүмийн
              Нийслэл — 1924 онд ертөнцийн Улаанбаатар болж өөрчлөгдсөн байв.
              Зөвлөлтүүд хуучин нэрнүүд ариун ач холбогдлоо хэтэрхий их агуулж
              байгааг ойлгосон тул бүтэн байдлаар орхиход аргагүй байсан.
            </p>
          </div>
          <div>
            <Pull>Одоо байгаа нь амьд үлдсэн зүйл.</Pull>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              Гандан хийд амьд үлдсэн — гадаадын зочдод үзүүлэх болон Зөвлөлтийн
              аппарат ч хотын зүрхэнд байгааг бүрэн устгахад хүндрэлтэй байсан
              тул хязгаарлагдмал хэлбэрээр нээлттэй байлгасан. Чойжин ламын сүм
              музей болгон хувиргасан тул амьд үлдсэн. Богд хааны ордон мөн адил
              шалтгаанаар амьд үлдсэн. Дөрвөн уул амьд үлдсэн, учир нь уулнууд
              оршин тогтнохдоо зөвшөөрөл хэрэггүй.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 7: Soviet era ─────────────────────────────────────── */}
      <Section amber>
        <Eyebrow>1924–1990 · Социалист эрин</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Зөвлөлтийн хот
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1924 оноос хойш Зөвлөлтийн тусламжтайгаар Улаанбаатарыг шинэ
              хотоор дахин байгуулав. Түүний гол цэг болгон Сталинист неоклассик
              байшингуудтай Сүхбаатарын талбайг бүтээв — засгийн газрын ордон,
              Улсын дуурь, балетын театр, Монгол Улсын их сургуулийн гол байшин
              тэгш хэмтэй, баганатай, сүр жавхлант байдлаар баригдав.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1956 онд Улаанбаатарыг Москва болон Бээжинтэй холбосон
              Трансмонголын төмөр зам ашиглалтад оров. Кино театр, театр,
              музейнууд баригдав. 1960-1985 оны хооронд хотын ихэнх хэсэг
              стандарт самбар хавтангийн орон сууцан байшингаас бүрдсэн орон
              сууцны дүүргүүдээр дүүрэв — өнөөдрийг хүртэл хотын орон сууцны
              санд чухал хувийг эзэлдэг.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              1944 онд АНУ-ын Дэд ерөнхийлөгч Хенри Уоллас Монголд айлчлах үедээ
              хийд үзэхийг хүссэний дараа Гандан хийдийг дахин нээв. Зөвлөлтийн
              эрин үед хотын хүн ам урт хугацааны суурьшлын хэв маягт шилжин,
              гэр дүүрэг аажмаар тогтмол орон сууцаар солигдов.
            </p>
          </div>
          <div>
            <div className="border border-gray-100 p-6 bg-white">
              <p
                className="text-gray-400 uppercase mb-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                }}
              >
                Социалист эрин үеийн гол дурсгалт газрууд
              </p>
              <div className="space-y-4">
                <div>
                  <p
                    className="text-gray-700 mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "14px",
                    }}
                  >
                    Зайсаны мемориал
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Монголын болон Зөвлөлтийн дайчдын дурсгалд зориулсан ил
                    задгай дурсгал. 1921 онд Зөвлөлтийн Монголын тусгаар
                    тогтнолыг дэмжсэн болон 1939 онд Японы армийг ялсныг
                    дүрсэлсэн зурган дүрслэлтэй.
                  </p>
                </div>
                <div>
                  <p
                    className="text-gray-700 mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "14px",
                    }}
                  >
                    Монгол Улсын их сургууль
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    1942 онд нээгдсэн — орны хамгийн анхны дээд боловсролын
                    байгууллага. Шинжлэх ухаан, боловсролын суурийг тавьсан.
                  </p>
                </div>
                <div>
                  <p
                    className="text-gray-700 mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "14px",
                    }}
                  >
                    Трансмонголын төмөр зам
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    1956 онд ашиглалтад оров. Улаанбаатарыг чухал тээврийн гол
                    болгон Москва болон Бээжинтэй шууд холбов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 8: Democracy 1990 ─────────────────────────────────── */}
      <Section>
        <Eyebrow>1990 · Ардчиллын хувьсгал</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Талбайд гарсан хүмүүс
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              1989 оны 12-р сарын 10-нд Залуучуудын соёлын төвийн гадаа
              жагсагчид Монголд перестройка болон гласностыг бүрэн утгаар
              хэрэгжүүлэхийг уриалав. Хэдэн сарын турш өрнөсөн томоохон жагсаал
              цуглаан болон өлсгөлөн зарласны эцэст захирлах Монголын ардын
              хувьсгалт нам 1990 оны 3-р сарын 9-нд огцорлоо.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Ардчилсан шилжилтийн дараа Монгол зах зээлийн эдийн засагт шилжив.
              Хүн ам 2007 он гэхэд 1 саяд хүрч, Улаанбаатар улсын нийт хүн амын
              тал орчим хувийг хамарсан мегаполис болов. Шинэ эрх чөлөө нь гэр
              дүүргийн хурдацтай өсөлтийг дагуулж ирлээ — малчид хотод шилжин
              суурьших болсноор байшингийн дутагдал, агаарын бохирдол нэмэгдэв.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              2008 онд сонгуулийн дүнг эсэргүүцсэн дэмжигчид үймээн дэгдээв.
              Дөрвөн өдрийн онц байдал зарлагдаж, нийслэлд цагийн хязгаарлалт
              тогтоов. Энэ нь орчин үеийн Улаанбаатарын түүхэн дэх анхны цусан
              маргаан байв.
            </p>
          </div>
          <div>
            <Pull>
              Улаанбаатар болон Сүхбаатарын талбай нь Монголыг ардчилал, зах
              зээлийн эдийн засагт шилжүүлсэн жагсаалын гол тайз болов.
              Нийслэлийн зүрх дэх тэр талбай утга учраа өөрчилсөн — хувьсгалын
              хөшөөнөөс ардчилсан жагсаалын цуглах цэг болов.
            </Pull>
            <div className="mt-6 border border-gray-100 p-6 bg-gray-50">
              <p
                className="text-gray-400 uppercase mb-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                }}
              >
                Оюун санааны сэргэлт
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                1990-ийн дараах шилжилт оюун санааны сэргэлтийг дагуулав. Гандан
                хийд бүрэн үйл ажиллагаандаа сэргэв. Шинэ хийдүүд баригдав. 9-р
                Жавзандамба хутагт хүлээн зөвшөөрөгдөж, хэдэн арван жилийн
                дарлалын дараа амьд Бурханы удмыг сэргээв.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 9: What Remains ───────────────────────────────────── */}
      <Section amber>
        <Eyebrow>Өнөөдөр</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          Үлдсэн зүйл
        </h2>
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            1990 оны ардчилсан шилжилтийн дараа Монгол гайхалтай оюун санааны
            сэргэлтийг туулсан. Гандан хийд бүрэн үйл ажиллагаандаа сэргэв. Шинэ
            хийдүүд баригдав. Ариун уулын ёслолыг ерөнхийлөгчийн зарлигаар
            сэргээв — Монгол улсын Ерөнхийлөгч дөрвөн жилд нэг удаа Богд хаан
            уулын ёслолд оролцдог. 9-р Жавзандамба хутагт хүлээн зөвшөөрөгдөж,
            хэдэн арван жилийн дарлалын дараа амьд Бурханы удмыг сэргээв.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            2010-аад оноос эхлэн Улаанбаатар өндөр барилгын бум дагуулжээ — шил,
            бетоноор баригдсан орчин үеийн бизнесийн төв, орон сууцны
            цогцолборууд болон зочид буудлуудаар хотын дүр төрх эрчимтэй
            өөрчлөгдсөн. 2021 оны 7-р сарын 4-нд Чингис хааны нэрэмжит олон
            улсын нисэх онгоцны буудал хотын өмнөд хэсэгт нээгдэв. Хотын хамгийн
            өндөр байшин болох Шангри-Ла зочид буудлын C цамхаг 120 метрт хүрдэг
            бол 2026 онд дуусгах төлөвтэй 150 метрийн Энканто худалдааны төв
            ойрын ирээдүйд тэрхүү байрыг авах болно.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Дөрвөн уул өнөөдрийг хүртэл хотын дөрвөн зүгт зогсоод байна. Туул
            гол, хэчнээн сулрагдсан ч, хотын ирмэгт урсаж байна. Ёслолын суурь
            чулуу — хот 1778 онд суурьшихдаа ариун тулгын цэг болгон сонгосон
            Түрэгийн эрин үеийн балбал — Сүхбаатарын талбайн дор оршсоор байна,
            одоо чулуун яст мэлхийгээр тэмдэглэгдэн, нийслэлийн газарзүйн
            зүрхэнд нүдэнд ил далдуурч байна.
          </p>

          <Pull>
            Утаа бодит. Замын хөдөлгөөн бодит. Зөвлөлтийн эрин үеийн орон сууцны
            байшингууд бодит. Бүгдийн дор ариун газарзүй өнөөдрийг хүртэл
            тогтоод байна. Уулнууд хөдлөхгүй. Би тэдний дунд өссөн. Цэлмэг
            өдрүүдэд тэднийг хайж байсаар байна, олоход, ямар нэг зүйл тогтдог.
          </Pull>
          <p
            className="text-gray-400 mt-2"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              letterSpacing: "0.08em",
            }}
          >
            — Хувийн тэмдэглэл
          </p>
        </div>
      </Section>

      {/* ── MASTER TIMELINE ───────────────────────────────────────────── */}
      <Section>
        <Eyebrow>Бүрэн түүхийн он цаг</Eyebrow>
        <h2
          className="font-normal text-gray-900 mb-10 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(24px, 3vw, 36px)",
          }}
        >
          300,000 жилийн товч тэмдэглэл
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {/* Column 1: Ancient */}
          <div className="space-y-6">
            <p
              className="text-amber-600 uppercase mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.18em",
              }}
            >
              Эртний
            </p>
            <EraCard
              era="Доод палеолит"
              years="МЭӨ 300,000"
              note="Сонгино хайрхан, Буянт-Ухаанаас 23 чулуун зэвсэг олдсон. Хотын орчмын анхны хүн суурьшлын нотолгоо."
            />
            <EraCard
              era="Дээд палеолит"
              years="МЭӨ 40,000–12,000"
              note="Зайсаны даваанд мамонт, үслэг хирс агначид суурьшсан. Левалуагийн техникийн зэвсгүүд олдов."
            />
            <EraCard
              era="Хүрлийн зуун"
              years="МЭӨ 1000-р он"
              note="Богд хаан уулд улаан охрын хадны зургууд — хүн, адуу, бүргэд дүрсэлсэн. Дөрвөлжин чулуун булш."
            />
            <EraCard
              era="Хүннү"
              years="МЭӨ 209–МЭ 93"
              note="Ноён уулын хааны оршуулгын цогцолбор. Богд хаан уулын Хүннү хатны булш. Чингэлтэй дүүрэгт оршуулгын газар."
            />
            <EraCard
              era="Сяньби, Жужань, Түрэг, Уйгур"
              years="МЭ 93–840"
              note="Туул голын хөндий залгамжлагдан нүүдлийн эзэнт гүрнүүдийн нутаг байв. Налайхад Тонюкукийн хөшөө (722 он)."
            />
            <EraCard
              era="Хятан"
              years="907–1125"
              note="Хөндий нь нийт дайн тулаан болон Хятан гүрний нөлөөний хүрээнд байлаа."
            />
          </div>

          {/* Column 2: Medieval to early modern */}
          <div className="space-y-6">
            <p
              className="text-amber-600 uppercase mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.18em",
              }}
            >
              Дундад зуун — орчин үеийн эхлэл
            </p>
            <EraCard
              era="Кераит, Чингис хаан"
              years="12–13-р зуун"
              note="Ван хан Тогрул Туул голын хар ойд ордонтой байв. Чингис хаан 1225 онд энд өвөлжсөн. Монголчуудын нууц товчоонд тэмдэглэгдсэн."
            />
            <EraCard
              era="Монголын эзэнт гүрэн"
              years="1206–1368"
              note="Дөрвөн ариун уулын хоорондох хөндий стратегийн ач холбогдолтой нутаг байв. Хархорумаас зүүн тийш чухал газар."
            />
            <EraCard
              era="Абтай Сайн хан"
              years="16-р зуун"
              note="Богд хаан уулд мөргөж байсан тухай баримт үлдсэн. Уул шашны ач холбогдолтой газар болж эхлэв."
            />
            <EraCard
              era="Өргөө үүссэн"
              years="1639"
              note="Ширээт Цагаан нуурт Занабазар анхны Жавзандамба хутагт болгон залагдав. Нүүдэллэдэг хийдийн нийгэмлэг үүсэв."
            />
            <EraCard
              era="Занабазар Төвдөд суралцав"
              years="1649–1651"
              note="5-р Далай ламын дор суралцаж ирээд 7 хийдийн тасгийг байгуулав. Соёмбо бичгийг зохиов."
            />
            <EraCard
              era="Их хүрээ болов"
              years="1706"
              note="Хийд-хот Их хүрээ нэртэй болж, байнгын шашны төв болов."
            />
            <EraCard
              era="Цяньлуны зарлиг"
              years="1778"
              note="Дөрвөн уул ариун болгов. Хот Туул, Сэлбэ голын нийлэлд эцэст суурьшив. Балбал суурь чулуу болов."
            />
          </div>

          {/* Column 3: Modern */}
          <div className="space-y-6">
            <p
              className="text-amber-600 uppercase mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.18em",
              }}
            >
              Орчин үе
            </p>
            <EraCard
              era="Гандан хийд баригдав"
              years="1838"
              note="Улаанбаатарын Буддын шашны гол цэг болсон их хийдийн барилга эхлэв."
            />
            <EraCard
              era="Тусгаар тогтнол"
              years="1911"
              note="Богд хаан уулын ойд нуугдан уулзаж хуйвалдаан гаргав. Нийслэл хүрээ болж, 8-р Жавзандамба теократ улсыг удирдав."
            />
            <EraCard
              era="Хувьсгал, Нийслэл"
              years="1921–1924"
              note="Зөвлөлтийн туслалцаатай Ардын хувьсгал. Улаанбаатар нэрийг авав — Улаан баатар. БНМАУ тунхаглав."
            />
            <EraCard
              era="Устгал"
              years="1937–1939"
              note="17,000 лам баривчлагдав. Ихэнх хийд нурсан. Мянга мянган ариун зүйл устгагдав."
            />
            <EraCard
              era="Зөвлөлтийн бүтээн байгуулалт"
              years="1950–1985"
              note="Хотын анхны иж бүрэн ерөнхий төлөвлөгөө 1954 онд батлагдав. Орон сууцны дүүргүүд баригдав. Трансмонголын төмөр зам 1956 онд нээгдэв."
            />
            <EraCard
              era="Ардчилсан хувьсгал"
              years="1990"
              note="Сүхбаатарын талбайд жагсаал болж, МАХН огцров. Монгол олон намын тогтолцоонд шилжив."
            />
            <EraCard
              era="Сэргэлт ба өсөлт"
              years="1990–өнөөдөр"
              note="Буддизм сэргэв. 2007 онд хүн ам 1 саяд хүрэв. Чингис хааны нисэх буудал 2021 онд нээгдэв. Мегаполис өсч байна."
            />
          </div>
        </div>
      </Section>

      {/* ── FOOTER LINKS ──────────────────────────────────────────────── */}
      <section className="px-8 md:px-14 py-12 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
          <Link href="/museums" className="group">
            <p
              className="text-gray-300 uppercase mb-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.14em",
              }}
            >
              Холбоотой
            </p>
            <p
              className="text-gray-700 mb-1"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "16px" }}
            >
              Занабазарын музей
            </p>
            <span
              className="text-gray-400 group-hover:text-gray-600 transition-colors block tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Дэлгэрэнгүй унших →
            </span>
          </Link>

          <Link href="/museums" className="group">
            <p
              className="text-gray-300 uppercase mb-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.14em",
              }}
            >
              Холбоотой
            </p>
            <p
              className="text-gray-700 mb-1"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "16px" }}
            >
              Чойжин ламын сүм
            </p>
            <span
              className="text-gray-400 group-hover:text-gray-600 transition-colors block tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Дэлгэрэнгүй унших →
            </span>
          </Link>

          <Link href="/weather" className="group">
            <p
              className="text-gray-300 uppercase mb-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                letterSpacing: "0.14em",
              }}
            >
              Холбоотой
            </p>
            <p
              className="text-gray-700 mb-1"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "16px" }}
            >
              Агаарын бохирдол
            </p>
            <span
              className="text-gray-400 group-hover:text-gray-600 transition-colors block tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Голыг бохирдуулсан хот →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
