import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SAMA RR.HH | El Futuro del Talento Humano",
  description: "Consultora con 20+ años decodificando talento humano. Reclutamiento de precisión, psicometría avanzada y soluciones que escalan organizaciones.",
  keywords: ["Samarrhh", "SAMA RR.HH", "Reclutamiento", "Selección", "Recursos Humanos", "Consultoría", "Psicometría", "Talento", "Bogotá", "Colombia"],
  authors: [{ name: "SAMA RR.HH - Antonio Santibañez" }],
  openGraph: {
    title: "SAMA RR.HH | El Futuro del Talento Humano",
    description: "No reclutamos personal. Decodificamos talento humano para construir equipos que no fallan.",
    type: "website",
    locale: "es_CO",
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
