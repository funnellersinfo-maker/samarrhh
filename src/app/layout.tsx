import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAMA RR.HH | Soluciones Integrales en Recursos Humanos",
  description: "Consultora con 20+ años de experiencia en reclutamiento, selección, administración de personal, psicometría y consultoría organizacional. Transformamos tu capital humano en ventaja competitiva.",
  keywords: ["SAMA RRHH", "Reclutamiento", "Selección", "Recursos Humanos", "Consultoría", "Psicometría", "Administración de Personal", "Inplant", "Talento", "México", "Monterrey"],
  authors: [{ name: "SAMA RR.HH" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SAMA RR.HH | Soluciones Integrales en Recursos Humanos",
    description: "Más de 20 años transformando organizaciones a través de soluciones estratégicas en capital humano.",
    type: "website",
    locale: "es_MX",
    url: "https://samarrhh.pages.dev",
    siteName: "SAMA RR.HH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-white text-slate-800`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
