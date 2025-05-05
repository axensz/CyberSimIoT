import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberSimIoT - Talleres de Ciberseguridad IoT Accesibles",
  description:
    "CyberSimIoT ofrece talleres de capacitación prácticos y accesibles para ayudar a estudiantes y profesionales a aprender a proteger dispositivos de Internet de las Cosas (IoT) a través de escenarios de simulación de ataques reales.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
