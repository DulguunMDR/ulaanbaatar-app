// app/passivhaus/materials/page.tsx
// Файлын байршил: app/passivhaus/materials/page.tsx
// Материал ба Нийлүүлэгчийн хуудас

import Link from "next/link";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/passivhaus"
            className="text-violet-600 hover:text-violet-800 font-mongolian text-sm flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Passivhaus гарын авлага руу буцах
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-semibold tracking-widest text-violet-600 uppercase mb-2">
              07 — Материал ба Нийлүүлэгч
            </div>
            <h1 className="font-mongolian text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Материалын
              <br />
              Сонголт
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-purple-500 mb-6"></div>
          <p className="text-xl text-gray-600 font-mongolian leading-relaxed max-w-2xl">
            Монгол дахь боломжит материалууд
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <div className="bg-white border-l-4 border-violet-500 rounded-r-xl p-8 shadow-sm">
              <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
                Материал сонгохдоо анхаарах зүйлс
              </h2>
              <p className="font-mongolian text-gray-700 leading-relaxed mb-4">
                Passivhaus барихад зөв материал сонгох нь амжилтын түлхүүр юм.
                Монголд зарим материал олдохгүй, зарим нь импортоор авах
                шаардлагатай. Дотоод болон гадаад материалыг хослуулан ашиглах
                нь ихэвчлэн хамгийн сайн шийдэл байдаг.
              </p>
              <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        100м²
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mongolian font-semibold text-violet-900 mb-2">
                      Материалын нийт зардал
                    </h3>
                    <p className="font-mongolian text-sm text-violet-800 leading-relaxed">
                      100м² байшинд: ₮80,000,000-120,000,000 (дулаалга, цонх,
                      агааржуулалт, битүүмжлэл). Энэ нь ердийн барилгаас 40-60%
                      илүү, гэхдээ 5-10 жилд өөрийгөө нөхнө.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insulation Materials */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дулаалгын материалууд
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mongolian font-semibold text-gray-900 text-lg">
                    Эрдэсийн ноолуур (Mineral Wool)
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Монголд олдоно
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Давуу тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Галд тэсвэртэй</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Авиа ашиглахад хялбар</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Монголд үйлдвэрлэдэг</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Сул тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Чийгтэй байх үед үр ашиг буурна</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Хоолой битүүмжлэх хэцүү</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      λ-утга
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      0.035-0.040
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">Үнэ</p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      ₮8,000-12,000/м²
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      Нийлүүлэгч
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      Дотоод
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mongolian font-semibold text-gray-900 text-lg">
                    EPS (Хөөсөнцөр)
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Монголд олдоно
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Давуу тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Хямд үнэтэй</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Хөнгөн жин</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Чийгнээс сайн хамгаална</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Сул тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Галд тэсвэрлэлт муу</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Мэрэгч эвдэж болзошгүй</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      λ-утга
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      0.030-0.038
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">Үнэ</p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      ₮6,000-10,000/м²
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      Нийлүүлэгч
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      Дотоод
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mongolian font-semibold text-gray-900 text-lg">
                    XPS (Extruded Polystyrene)
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Импорт
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Давуу тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Бат бөх бүтэц</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Суурийн дулаалгад тохиромжтой</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Чийг шингээхгүй</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Сул тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Үнэ өндөр</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Монголд хязгаарлагдмал</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      λ-утга
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      0.028-0.036
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">Үнэ</p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      ₮15,000-25,000/м²
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      Нийлүүлэгч
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      Импорт
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mongolian font-semibold text-gray-900 text-lg">
                    PIR/PUR (Полиизоцианурат)
                  </h3>
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Тусгай захиалга
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Давуу тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Хамгийн сайн дулаалга</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Нимгэн зузаан хангалттай</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-600 flex-shrink-0 mt-1">
                          +
                        </span>
                        <span>Галд тэсвэртэй</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mongolian text-sm text-gray-600 mb-2">
                      Сул тал:
                    </p>
                    <ul className="space-y-1 font-mongolian text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Маш өндөр үнэтэй</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1">
                          -
                        </span>
                        <span>Монголд олдоцгүй</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      λ-утга
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      0.022-0.028
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">Үнэ</p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      ₮25,000-40,000/м²
                    </p>
                  </div>
                  <div>
                    <p className="font-mongolian text-xs text-gray-600">
                      Нийлүүлэгч
                    </p>
                    <p className="font-mongolian font-semibold text-gray-900">
                      Импорт
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Windows */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Цонх хаалга
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <p className="font-mongolian text-gray-700 leading-relaxed mb-6">
                Passivhaus стандартын цонх (U≤0.8) нь Монголд ховор. Дараах
                сонголтууд байна:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6 py-3">
                  <h3 className="font-mongolian font-semibold text-gray-900 mb-2">
                    Гадаадын брэндүүд
                  </h3>
                  <p className="font-mongolian text-sm text-gray-700 mb-2">
                    Герман, Польш, Орос цонх. Импортоор авна.
                  </p>
                  <div className="flex gap-4 text-xs">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      Чанар өндөр
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                      Үнэ: ₮500,000-800,000/м²
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3">
                  <h3 className="font-mongolian font-semibold text-gray-900 mb-2">
                    Дотоодын үйлдвэрүүд
                  </h3>
                  <p className="font-mongolian text-sm text-gray-700 mb-2">
                    PVC профиль импортлож, Монголд угсардаг. Чанар харилцан
                    адилгүй.
                  </p>
                  <div className="flex gap-4 text-xs">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      U-утгыг шалгах
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      Үнэ: ₮200,000-400,000/м²
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-mongolian font-semibold text-yellow-900 mb-1">
                      Анхаар
                    </h4>
                    <p className="font-mongolian text-sm text-yellow-800 leading-relaxed">
                      Сертификат заавал шаардах. &quot;Эрчим хүч хэмнэсэн&quot;
                      гэсэн нэр томъёо төөрөгдүүлэх боломжтой. Лабораторийн
                      тестийн үр дүн (U-утга) харах.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Airtightness materials */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Битүүмжлэх материалууд
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Битүүмжих хальс (Tape)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 mb-4">
                  Агаар битүүмжих тусгай хальс. Гадаад импорт.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Брэнд:</span>
                    <span className="font-mongolian font-semibold">
                      Pro Clima, Siga
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Үнэ:</span>
                    <span className="font-mongolian font-semibold">
                      ₮50,000-100,000/roll
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">
                      Авах газар:
                    </span>
                    <span className="font-mongolian font-semibold text-orange-600">
                      Онлайн захиалга
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Битүүмжих будаг (Sealant)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 mb-4">
                  Уян хатан, -40°C-д тэсвэртэй битүүмжлэх будаг.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Төрөл:</span>
                    <span className="font-mongolian font-semibold">
                      Силикон, Акрил
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Үнэ:</span>
                    <span className="font-mongolian font-semibold">
                      ₮15,000-30,000/тюб
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">
                      Авах газар:
                    </span>
                    <span className="font-mongolian font-semibold text-green-600">
                      Барилгын дэлгүүр
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Уур битүүмжлэх хальс (Vapor Barrier)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 mb-4">
                  Дотор талын чийг битүүмжлэл. Хуванцар хальс.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">
                      Зузаан:
                    </span>
                    <span className="font-mongolian font-semibold">
                      0.2-0.3мм
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Үнэ:</span>
                    <span className="font-mongolian font-semibold">
                      ₮8,000-15,000/м²
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">
                      Авах газар:
                    </span>
                    <span className="font-mongolian font-semibold text-green-600">
                      Монголд байна
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                <h3 className="font-mongolian font-semibold text-gray-900 mb-3">
                  Дулаалгатай дэвсгэр (Expanding Foam)
                </h3>
                <p className="font-mongolian text-sm text-gray-700 mb-4">
                  Том зайг дүүргэх полиуретан дэвсгэр.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Төрөл:</span>
                    <span className="font-mongolian font-semibold">
                      1-компонент, 2-компонент
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">Үнэ:</span>
                    <span className="font-mongolian font-semibold">
                      ₮10,000-20,000/can
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mongolian text-gray-600">
                      Авах газар:
                    </span>
                    <span className="font-mongolian font-semibold text-green-600">
                      Монголд байна
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local vs Import */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Дотоод эсвэл импорт?
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mongolian font-semibold text-gray-900 mb-4 text-lg">
                    Дотоодын материал
                  </h3>
                  <ul className="space-y-3 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span>Эрдэсийн ноолуур (дулаалга)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span>EPS хөөсөнцөр (дулаалга)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span>Уур битүүмжлэх хальс</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span>Битүүмжих будаг (ердийн)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span>Модон хүрээ, тоосго</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-mongolian font-semibold text-gray-900 mb-4 text-lg">
                    Импорт материал
                  </h3>
                  <ul className="space-y-3 font-mongolian text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        ⊕
                      </span>
                      <span>Passivhaus цонх (U≤0.8)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        ⊕
                      </span>
                      <span>HRV/ERV систем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        ⊕
                      </span>
                      <span>Битүүмжих хальс (тусгай)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        ⊕
                      </span>
                      <span>XPS, PIR/PUR дулаалга</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 flex-shrink-0 mt-1">
                        ⊕
                      </span>
                      <span>Blower Door тестийн төхөөрөмж</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Budget estimation */}
          <section>
            <h2 className="font-mongolian text-2xl font-bold text-gray-900 mb-6">
              Материалын төсөвлөгөө (100м²)
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    Дулаалга (хана, дээвэр, суурь)
                  </span>
                  <strong className="font-mongolian">
                    ₮30,000,000-40,000,000
                  </strong>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    Цонх хаалга (20-25м²)
                  </span>
                  <strong className="font-mongolian">
                    ₮10,000,000-20,000,000
                  </strong>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    HRV/ERV систем
                  </span>
                  <strong className="font-mongolian">
                    ₮8,000,000-15,000,000
                  </strong>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    Битүүмжлэх материалууд
                  </span>
                  <strong className="font-mongolian">
                    ₮5,000,000-8,000,000
                  </strong>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    Халаалтын систем
                  </span>
                  <strong className="font-mongolian">
                    ₮3,000,000-5,000,000
                  </strong>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-mongolian text-gray-700">
                    Бусад (хоолой, шүүлтүүр, тусгай хэрэгсэл)
                  </span>
                  <strong className="font-mongolian">
                    ₮4,000,000-7,000,000
                  </strong>
                </div>

                <div className="flex justify-between pt-4">
                  <span className="font-mongolian text-gray-900 font-semibold text-lg">
                    Нийт материалын зардал:
                  </span>
                  <strong className="font-mongolian text-violet-600 text-xl">
                    ₮60,000,000-95,000,000
                  </strong>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="font-mongolian text-sm text-blue-800 leading-relaxed">
                  <strong>Тэмдэглэл:</strong> Энэ нь зөвхөн материалын зардал.
                  Ажлын хөлс, зураг төсөл, тест, сертификат нэмэгдэнэ. Нийт
                  барилгын зардал: ₮1,200,000-1,500,000/м²
                </p>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 rounded-xl p-8">
              <h2 className="font-mongolian text-2xl font-bold text-violet-900 mb-6">
                Материал худалдан авах шалгах жагсаалт
              </h2>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Дулаалгын λ-утгыг баталгаажуулах (сертификат)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Цонхны U-утгыг шалгах (лабораторийн тест үр дүн)
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Битүүмжих материал -40°C-д тэсвэртэй эсэхийг лавлах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    HRV системийн дулаан сэргээлт ≥85% эсэхийг шалгах
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Нийлүүлэгчийн засвар үйлчилгээний баталгааг асуух
                  </span>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-violet-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-violet-600"
                  />
                  <span className="font-mongolian text-sm text-gray-700">
                    Нийт төсвийг тооцоолж, нөөц мөнгө (10-15%) нэмэх
                  </span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t-2 border-gray-200 mt-12">
          <Link
            href="/passivhaus/heating"
            className="text-gray-600 hover:text-gray-900 font-mongolian flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Өмнөх: Халаалт
          </Link>

          <Link
            href="/passivhaus/construction"
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-violet-700 hover:to-purple-700 font-mongolian flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Дараах: Барилгын Процесс
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
