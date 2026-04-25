// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchAQI } from "@/lib/fetchAQI";
import { fetchOpenMeteo } from "@/lib/fetchOpenMeteo";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansMongolian = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mongolian",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#FFC107",
};

export const metadata: Metadata = {
  title: "Улаанбаатар",
  description: "Улаанбаатар",
  metadataBase: new URL("https://www.ulaanbaatar.app"),
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Улаанбаатар",
    description: "Улаанбаатар",
    url: "https://www.ulaanbaatar.app",
    siteName: "Ulaanbaatar.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Улаанбаатар",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Улаанбаатар",
    description: "Улаанбаатар",
    images: ["/og-image.png"],
  },
};

function getAQILabel(aqi: number): string {
  if (aqi <= 50) return "Сайн";
  if (aqi <= 100) return "Дунд зэрэг";
  if (aqi <= 150) return "Эрүүл мэндэд сөрөг";
  if (aqi <= 200) return "Хортой";
  if (aqi <= 300) return "Маш хортой";
  return "Аюултай";
}

function getCurrentHourIndex(times: string[]): number {
  const now = new Date();
  const currentHour = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}T${String(now.getHours()).padStart(2, "0")}:00`;
  const idx = times.indexOf(currentHour);
  return idx !== -1 ? idx : 0;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [aqiData, meteoData] = await Promise.all([
    fetchAQI(),
    fetchOpenMeteo(),
  ]);

  const hourIdx = meteoData ? getCurrentHourIndex(meteoData.hourly.time) : 0;

  const temp = meteoData
    ? Math.round(meteoData.hourly.temperature_2m[hourIdx])
    : null;

  const windSpeed = meteoData
    ? Math.round(meteoData.hourly.wind_speed_10m[hourIdx])
    : 0;

  const aqi = aqiData?.aqi ?? null;
  const aqiLabel = aqi !== null ? getAQILabel(aqi) : null;

  return (
    <html lang="mn">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansMongolian.variable} ${playfair.variable} antialiased`}
      >
        <Header
          temp={temp}
          windSpeed={windSpeed}
          aqi={aqi}
          aqiLabel={aqiLabel}
        />
        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js" />
      </body>
    </html>
  );
}
