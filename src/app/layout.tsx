import "./globals.css";

import { JetBrains_Mono } from "next/font/google";

import NavBar from "@/components/NavBar";
import CustomCursor from "@/components/CustomCursor";

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
        <CustomCursor />
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
