import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goddess OFM — Curso Completo: Crecimiento y Monetización Estratégica",
  description:
    "Guía paso a paso para OnlyFans y Reddit. Crea dinero de forma discreta con la metodología Goddess OFM.",
  keywords: ["Goddess OFM", "OnlyFans", "Reddit Marketing", "Monetización LATAM"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable}`}>
      <body className="min-h-dvh" style={{ background: "#111011", color: "#E6D8BE" }}>
        {children}
      </body>
    </html>
  );
}
