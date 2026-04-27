// app/museums/page.tsx
// Route: /museums
// Static server component — no data fetching required

import Link from "next/link";

export const metadata = {
  title: "Музей ба Галерей | Улаанбаатар",
  description: "Улаанбаатарын соёлын санах ойн гарын авлага.",
};

// ─── Types ───────────────────────────────────────────────────────────────────
interface Museum {
  id: string;
  eyebrow: string;
  name: string;
  nameEn: string;
  founded?: string;
  district?: string;
  hours?: string;
  mapsUrl: string;
  description: string[];
  personalNote: string;
  tag?: "active" | "museum" | "gallery";
}

// ─── Data ────────────────────────────────────────────────────────────────────
const museums: Museum[] = [
  {
    id: "zanabazar",
    eyebrow: "Чингэлтэй дүүрэг · 1966",
    name: "Занабазарын дүрслэх урлагийн музей",
    nameEn: "Zanabazar Fine Arts Museum",
    founded: "1966",
    hours: "Мяг–Ням 10:00–18:00",
    mapsUrl:
      "https://maps.google.com/?q=Zanabazar+Fine+Arts+Museum+Ulaanbaatar",
    description: [
      "1966 онд үндэслэгдсэн энэ нь дэлхийд оршин буй Монголын Буддын урлагийн хамгийн өндөр түвшний цуглуулга юм. Музей хотыг үндэслэсэн оюун санааны эцэг Занабазарын өөрийн бүтээлийг, мөн Монголын соёл иргэншлийн харааны зүрхийг бүрдүүлсэн тханк зураг, хүрэл хөшөө, хэрэглээний урлагийн зууны бүтээлийг агуулдаг.",
      "Гол бүтээл нь Занабазарын өөрийн хүрэл хөшөөнүүд: Цагаан Дар эх, Ногоон Дар эх, таван Дхяани Бурхан. 17-р зуунд цутгасан. Бусад бүх зүйл устгагдсан 1930-аад оны Сталинист цэвэрлэгээнээс амьд үлджээ. Жижигхэн, маш нам гүм — тэд тэднийг устгахыг оролдсон бүх зүйлийг тэвчиж гарсан.",
    ],
    personalNote:
      "Тэр өрөөнд олон удаа зогссон. Цагаан Дар эхийн нам гүм байдалд бэлтгэх арга байхгүй — Занабазар түүний нүүрийг дүрсэлсэн байдал нь урлагаас илүүтэй, тэрээр үнэхээр харсан зүйлийнхээ бичлэг мэт санагддаг.",
    tag: "museum",
  },
  {
    id: "choijin",
    eyebrow: "Төв дүүрэг · 1904–1908",
    name: "Чойжин ламын сүм музей",
    nameEn: "Choijin Lama Temple Museum",
    hours: "Мяг–Ням 9:00–18:00",
    mapsUrl:
      "https://maps.google.com/?q=Choijin+Lama+Temple+Museum+Ulaanbaatar",
    description: [
      "1904-1908 оны хооронд Лувсанхайдав — Чойжин лам, улсын зөнч, 8-р Богд хааны дүү — ын ёслолын орон байшин болгон баригдсан. Орчин үеийн байшингуудын дунд нуугдсан дөрвөн дуганы цогцолбор нь яг тийм учраас олдсон хүмүүсийг гайхшруулдаг.",
      "1938 онд үйл ажиллагаа явуулж буй хийд болгон хаагдав. Музей болгон хувиргасан — энэ нь эргэн тойрон нь нуржаад байхад цэвэрлэгээнээс амьд үлдсэн шалтгаан юм. Өнөөдөр Цам ёслолын бүжгийн маск, тханк, ариун практикт ашиглагдаж байсан зан үйлийн эд зүйлсийн онцгой цуглуулгыг хадгалдаг.",
    ],
    personalNote:
      "Маскнууд аймшигтай. Тэд тийм байхаар зориулагдсан. Тэдний харьяалагдах Цам бүжгүүд чөтгөрүүдийг аймшигдуулж, нийгэмлэгийг хамгаалах зорилгоор хийдэг ёслолын тоглолт байсан. Тэдний хажуу талд шилний ард зогсох нь арай буруу мэт санагддаг — одоо ч ажиллаж байгаа зүйлийг урлаг болгон авч үзэж байгаа мэт.",
    tag: "museum",
  },
  {
    id: "bogdkhan",
    eyebrow: "Хан-Уул дүүрэг · 1893",
    name: "Богд хааны ордон музей",
    nameEn: "Bogd Khan Palace Museum",
    hours: "Мяг–Ням 9:00–18:00",
    mapsUrl: "https://maps.google.com/?q=Bogd+Khan+Palace+Museum+Ulaanbaatar",
    description: [
      "8-р Жавзандамба хутагтын — Монголын хамгийн сүүлчийн теократ захирагч, хотыг удирдсан хамгийн сүүлчийн амьд Бурхан — өвлийн ордон. 20-р зууны эхэн үед баригдсан, 1924 оны коммунист авлалын өмнөх Буддын теократийн хамгийн сүүлчийн цэцэглэлтийг илэрхийлдэг.",
      "Цогцолбор нь зургаан дуган, гайхамшигт цуглуулгатай: ариун эд зүйлс, ёслолын дэгэл, гадаадын удирдагчдын бэлэг, мөн нэгэн зэрэг Монгол дахь Гэлүг Буддын удмын тэргүүн болон бие даасан Монголын төрийн тэргүүн байсан эрийн хувийн эд зүйлс. Анхны гэрийн ордон — тэр зуны орон байшин — хажуу талд оршдог. Та дотуур нь алхаж болно.",
    ],
    personalNote:
      "Санаанаас гарахгүй зүйл бол түүний цуглуулгын хачирхал: дипломат бэлэг болгон өгсөн ариусгасан амьтад, ариун тханкуудын хажуу талд байрлах. Дундад зуун болон орчин үеийн огтлолцлын нэгэн эрийн хоёулыг барьж байхыг оролдож буй нь.",
    tag: "museum",
  },
  {
    id: "national",
    eyebrow: "Төв дүүрэг · 1991",
    name: "Монголын үндэсний музей",
    nameEn: "Үндэсний музей",
    hours: "Мяг–Ням 9:00–18:00",
    mapsUrl:
      "https://maps.google.com/?q=National+Museum+of+Mongolia+Ulaanbaatar",
    description: [
      "Чулуун зэвсгийн эринээс 20-р зуун хүртэлх Монголын дэлгэрэнгүй түүх. Бүрэн нуман зам — эртний нүүдэлчид, Хүннүгийн эзэнт гүрэн, оргил үедээ Монголын эзэнт гүрэн, теократийн үе, Зөвлөлтийн коллективжуулалт, тусгаар тогтнол — нэг байшинд танилцуулсан.",
      "Монголын эзэнт гүрний хэсэг нь ганцаараа зочлоход хүрэлцэнэ. Энд баригдсан зүйлийн цар хэмжээг ямар ч ном хийж чадахгүй биет хэлбэрт оруулж өгдөг. Номхон далайгаас Дунай хүрч удирдаж байсан эзэнт гүрэн цонхны гадах орчинтой төстэй газар нутгаас зохион байгуулагдсан байсан.",
    ],
    personalNote:
      "Монгол дөнгөж танилцаж байгаа бол эхлэх зөв газар энэ юм. Хотын бусад бүх зүйлийг ойлгоход хэрэгтэй цаг хугацааны дарааллыг өгдөг.",
    tag: "museum",
  },
  {
    id: "gandan",
    eyebrow: "Баянгол дүүрэг · 1838 · Идэвхтэй хийд",
    name: "Гандантэгчинлэн хийд",
    nameEn: "Гандан",
    hours: "Өдөр бүр 9:00–18:00 · Өглөөний дуусал 9:00",
    mapsUrl: "https://maps.google.com/?q=Gandan+Monastery+Ulaanbaatar",
    description: [
      "Музей биш. Үйл ажиллагаа явуулж буй хийд — Монгол дахь хамгийн чухал Буддын институт, Улаанбаатарын оюун санааны төв. 1838 онд Их хүрээний байнгын хийдийн орон байшин болгон баригдсан, Зөвлөлтийн үед хязгаарлагдмал хэлбэрээр амьд үлдэж, 1990 оноос хойш бүрэн үйл ажиллагаандаа сэргэсэн.",
      "Үндсэн дуган доторх Мигжид Жанрайсэг хөшөө 26.5 метр өндөр — дэлхийн хамгийн том тагт Буддын хөшөөнүүдийн нэг. Анхных нь 1938 онд Зөвлөлтийн эрх баригчид хайлуулж, зэс нь дайны хэрэгцээнд явуулсан. Одоогийн хөшөөг 1996 онд дуусгасан, хүрэл цутгаж алтаар бүрсэн. Анхных нь ариун эд зүйлсийг өөртөө агуулдаг.",
    ],
    personalNote:
      "Ламнар өглөө 9 цагт дуусал уншдаг. Байх нь зүйтэй — жуулчин биш, зүгээр нэг бодит зүйл болж буй өрөөнд байгаа хүн болж. Хэдэн минут эртхэн оч. Ар талд сууж бай.",
    tag: "active",
  },
  {
    id: "modern",
    eyebrow: "Төв дүүрэг",
    name: "Монголын орчин үеийн урлагийн галерей",
    nameEn: "Орчин үеийн урлаг",
    hours: "Мяг–Ням 10:00–18:00",
    mapsUrl: "https://maps.google.com/?q=Gallery+of+Modern+Art+Ulaanbaatar",
    description: [
      "Орчин үеийн Монголын урлаг. Түүхэн музейнүүдийнхээс бага зочлогддог, яг тийм учраас л мэдэх хэрэгтэй. Энд байгаа бүтээлүүд Зөвлөлтийн эрин үеийн дүрслэх уламжлал, Барууны орчин үеийн урлагийн нөлөөллөөр хийсэн хийсвэр бүтээл, мөн байгалийн доройтол болон дарлалдах нүүдэлчний байдлыг шууд авч үзэж буй урлагийн хэсгийн хооронд явагддаг.",
      "Цуглуулга жигд бус — амьд бүтээлийн ямар ч шударга цуглуулга ийм байх ёстой. Гэхдээ энд байгаа хамгийн сайн бүтээлүүд түүхэн музейнүүдийн хийж чадахгүй зүйлийг хийж байна: одоог тухай бодох.",
    ],
    personalNote:
      "Занабазарын музейн дараа эн тэнд ир. 17-р зуунд Монголын харааны урлаг байсан болон одоо юу болж хувирч байгааны хоорондох зөрүү өөрөө нэг зүйл юм.",
    tag: "gallery",
  },
];

// ─── Tag pill ────────────────────────────────────────────────────────────────
function TagPill({ tag }: { tag: Museum["tag"] }) {
  if (!tag) return null;
  const labels: Record<NonNullable<Museum["tag"]>, string> = {
    active: "Идэвхтэй хийд",
    museum: "Музей",
    gallery: "Галерей",
  };
  return (
    <span
      className="inline-block border border-gray-100 text-gray-300 px-2 py-0.5"
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: "9px",
        letterSpacing: "0.12em",
      }}
    >
      {labels[tag]}
    </span>
  );
}

// ─── Museum card ─────────────────────────────────────────────────────────────
function MuseumCard({ museum }: { museum: Museum }) {
  return (
    <article className="bg-white p-8 md:p-10 flex flex-col">
      {/* Eyebrow */}
      <p
        className="text-gray-400 uppercase mb-4"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "9px",
          letterSpacing: "0.14em",
        }}
      >
        {museum.eyebrow}
      </p>

      {/* Name */}
      <h2
        className="font-normal text-gray-900 leading-tight mb-1"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(20px, 2.5vw, 28px)",
        }}
      >
        {museum.name}
      </h2>

      {/* Description */}
      <div className="flex-1 space-y-3 mb-6 mt-5">
        {museum.description.map((para, i) => (
          <p key={i} className="text-sm text-gray-500 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Personal note */}
      <p
        className="text-sm text-gray-400 leading-relaxed mb-6 border-l-2 border-amber-100 pl-4"
        style={{ fontStyle: "italic", fontFamily: "var(--font-playfair)" }}
      >
        {museum.personalNote}
      </p>

      {/* Footer */}
      <div className="flex flex-wrap items-end justify-between gap-4 pt-4 border-t border-gray-100">
        <div className="space-y-1">
          {museum.hours && (
            <p className="font-mono text-gray-300" style={{ fontSize: "10px" }}>
              {museum.hours}
            </p>
          )}
          <TagPill tag={museum.tag} />
        </div>
        <a
          href={museum.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span
            className="text-gray-400 group-hover:text-gray-600 transition-colors tracking-wider"
            style={{ fontSize: "11px" }}
          >
            Газрын зураг харах →
          </span>
        </a>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MuseumsPage() {
  return (
    <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* ── HERO — vertical spine ─────────────────────────────────────── */}
      <section
        className="grid border-b border-gray-100"
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
            className="text-gray-300 uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            МУЗЕЙ · ГАЛЕРЕЙ
          </span>
        </div>

        {/* Hero content */}
        <div className="px-8 md:px-14 py-12 md:py-20">
          <p
            className="text-gray-400 uppercase mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.14em",
            }}
          >
            Улаанбаатар · Соёлын санах ой
          </p>

          <h1
            className="font-normal text-gray-900 leading-tight mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 5vw, 56px)",
            }}
          >
            Хотын санах ой
          </h1>

          <p
            className="text-gray-500 leading-relaxed mb-6 max-w-xl"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            Эдгээр газруудад хотын зүрх байна.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed max-w-prose">
            Энэ нь жуулчлалын жагсаалт биш. Эн тэнд өссөн хүний тэмдэглэл — тэр
            өрөөнд байхын ямар санагдахыг, зарлалын цаана юу чухал болохыг
            агуулдаг. Таныг дуудсан газруудад оч. Аажуу яв.
          </p>
        </div>
      </section>

      {/* ── MUSEUM GRID ───────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
        {museums.map((museum) => (
          <MuseumCard key={museum.id} museum={museum} />
        ))}
      </section>

      {/* ── PRACTICAL NOTE ────────────────────────────────────────────── */}
      <section className="px-8 md:px-14 py-12 border-t border-b border-gray-100">
        <div className="max-w-prose">
          <p
            className="text-gray-300 uppercase mb-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "0.14em",
            }}
          >
            Зөвлөгөө
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            Эдгээр музейнүүдийн ихэнх нь хотын төвд эсвэл ойролцоо байрладаг тул
            хоорондоо богино зайтай. Үл хамаарах зүйл бол хотын өмнөд зүгт, Богд
            хаан уулын бэлд байрлах Богд хааны ордон музей — агаар цэвэрхэн бол
            уулаар алхахтай хослуулах нь зохимжтой.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ажиллах цагийн хуваарь ойролцоо бөгөөд улирлаас хамаарч өөрчлөгдөж
            болно. Оролтын хураамж боломжийн. Гэрэл зургийн бодлого өөр өөр —
            хаалганаас асуугаарай.
          </p>
        </div>
      </section>

      {/* ── FOOTER LINKS ──────────────────────────────────────────────── */}
      <section className="px-8 md:px-14 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <Link href="/sacred" className="group">
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
              Ариун хотын түүх
            </p>
            <span
              className="text-gray-400 group-hover:text-gray-600 transition-colors block tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Музейн цаана байгаа түүхийг унших →
            </span>
          </Link>

          <Link href="/journal" className="group">
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
              Тэмдэглэл
            </p>
            <span
              className="text-gray-400 group-hover:text-gray-600 transition-colors block tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Хотод амьдрах тухай →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
