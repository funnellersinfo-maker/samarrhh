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
  title: "SAMA RR.HH | Decodificamos Talento Humano con Precisión",
  description: "Consultora con 20+ años decodificando talento humano. Reclutamiento de precisión, psicometría avanzada, administración de personal y soluciones que escalan organizaciones.",
  keywords: ["Samarrhh", "SAMA RR.HH", "Reclutamiento", "Selección", "Recursos Humanos", "Consultoría", "Psicometría", "Talento", "México", "Monterrey"],
  authors: [{ name: "SAMA RR.HH - Antonio Santibañez" }],
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
    title: "SAMA RR.HH | Decodificamos Talento Humano con Precisión",
    description: "No reclutamos personal. Decodificamos talento humano para construir equipos que no fallan. 20+ años de experiencia en reclutamiento, psicometría y gestión del talento.",
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
        className={`${inter.variable} antialiased bg-[#0a0a0c] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
