// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

// Load Noto Sans for Mongolian (Монгол бичгийн фонт)
const notoSansMongolian = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mongolian",
});

// Viewport тохиргоо (themeColor энд байрлана)
export const viewport: Viewport = {
  themeColor: "#FFC107",
};

export const metadata: Metadata = {
  title: "Улаанбаатар - Агаарын чанар LIVE",
  description: "Улаанбаатарын агаарын чанар, цаг агаар, эрүүл мэндийн зөвлөмж",
  metadataBase: new URL("https://www.ulaanbaatar.app"),

  // Favicon (Хөтчийн таб дээрх жижиг зураг)
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },

  // Open Graph - Нийгмийн сүлжээнд хуваалцахад харагдах мэдээлэл
  openGraph: {
    title: "Улаанбаатар - Агаарын чанар LIVE",
    description:
      "Улаанбаатарын агаарын чанар, цаг агаар, эрүүл мэндийн зөвлөмж",
    url: "https://www.ulaanbaatar.app",
    siteName: "Ulaanbaatar.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Улаанбаатар - Агаарын чанар",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },

  // Twitter Card (Twitter дээр хуваалцахад)
  twitter: {
    card: "summary_large_image",
    title: "Улаанбаатар - Агаарын чанар LIVE",
    description:
      "Улаанбаатарын агаарын чанар, цаг агаар, эрүүл мэндийн зөвлөмж",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body
        className={`${inter.variable} ${notoSansMongolian.variable} antialiased`}
      >
        {/* Header автоматаар бүх хуудсанд харагдана */}
        <Header temp={null} windSpeed={0} />

        {/* Page content (Хуудасны агуулга) */}
        {children}

        {/* Footer автоматаар бүх хуудсанд харагдана */}
        <Footer />
      </body>
    </html>
  );
}
