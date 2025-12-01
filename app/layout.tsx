import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

// Load Noto Sans for Mongolian
const notoSansMongolian = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mongolian",
});

export const metadata: Metadata = {
  title: "Улаанбаатар - Агаарын чанар LIVE",
  description: "Улаанбаатарын агаарын чанар, цаг агаар, эрүүл мэндийн зөвлөмж",
  themeColor: "#FFC107",
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
        {children}
      </body>
    </html>
  );
}
