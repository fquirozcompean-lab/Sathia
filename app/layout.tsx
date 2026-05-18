import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import StructuredData from "../components/StructuredData";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nutriologasathia.com"),
  title: {
    default: "Nutrióloga Clínica en León y en Línea | MNC. Sathia González",
    template: "%s | MNC. Sathia González",
  },
  description:
    "Nutrición clínica especializada con Maestría por el INSP y el Instituto Nacional de Perinatología. Análisis de composición corporal InBody 270. Consultas presenciales en León, Gto. y en línea. MNC. Sathia González Guzmán.",
  keywords: [
    "nutrióloga León",
    "nutrición clínica León",
    "InBody 270 León",
    "composición corporal León",
    "nutrióloga en línea",
    "nutrición perinatal",
    "plan nutricional León",
    "Sathia González nutrióloga",
    "Hospital Ángeles León nutrióloga",
    "INSP nutrición clínica",
  ],
  alternates: {
    canonical: "https://www.nutriologasathia.com",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.nutriologasathia.com",
    siteName: "Sathia González · Nutrición Clínica",
    title: "Nutrióloga Clínica en León y en Línea | MNC. Sathia González",
    description:
      "Nutrición clínica de alto nivel con análisis InBody 270. Maestría INSP + Perinatología. León, Gto. y consultas en línea.",
    images: [
      {
        url: "https://www.nutriologasathia.com/logo.png",
        width: 1200,
        height: 630,
        alt: "MNC. Sathia González, nutrióloga clínica en León",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrióloga Clínica en León y en Línea | MNC. Sathia González",
    description:
      "Nutrición clínica con análisis InBody 270. Maestría INSP + Perinatología. León y en línea.",
    images: ["https://www.nutriologasathia.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${josefin.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-[family-name:var(--font-body)]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
