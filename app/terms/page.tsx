// ============================================
// ФАЙЛ 12: app/terms/page.tsx (UPDATED)
// Файлын байршил: app/terms/page.tsx
// ============================================

import AQISection from "@/components/terms/AQISection";
import { PM25Section } from "@/components/terms/PM25Section";
import { PM10Section } from "@/components/terms/PM10Section";
import { OzoneSection } from "@/components/terms/OzoneSection";
import { NO2Section } from "@/components/terms/NO2Section";
import { SO2Section } from "@/components/terms/SO2Section";
import { COSection } from "@/components/terms/COSection";
import { TemperatureSection } from "@/components/terms/TemperatureSection";
import { FeelsLikeSection } from "@/components/terms/FeelsLikeSection";
import { WindSpeedSection } from "@/components/terms/WindSpeedSection";
import { HumiditySection } from "@/components/terms/HumiditySection";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title (Гарчиг) */}
          <h1 className="font-mongolian text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Нэр томъёоны тайлбар
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Агаарын чанар, цаг агаарын үзүүлэлтүүдийн дэлгэрэнгүй тайлбар
          </p>

          {/* All sections as separate components */}
          <AQISection />
          <PM25Section />
          <PM10Section />
          <OzoneSection />
          <NO2Section />
          <SO2Section />
          <COSection />
          <TemperatureSection />
          <FeelsLikeSection />
          <WindSpeedSection />
          <HumiditySection />

          {/* Footer */}
          <div className="text-center border-t pt-8 text-gray-400 text-sm">
            <p>
              💡 Эдгээр үзүүлэлтүүдийг ойлгож, өөрийн эрүүл мэндээ хамгаалаарай
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
