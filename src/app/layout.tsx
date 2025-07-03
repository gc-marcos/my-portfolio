import "./globals.css";

// Importação da fonte JetBrains Mono via Next.js
import { JetBrains_Mono } from "next/font/google";

// Importação de componente interno
import NavBar from "@/components/NavBar";

// Configuração da fonte com suas variáveis CSS
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jetBrainsMono.variable}>
      <body className={jetBrainsMono.className}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
