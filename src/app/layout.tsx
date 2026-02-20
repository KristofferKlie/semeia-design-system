import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

// Fonte oficial SemeIA: Montserrat
// Fonte verificada em https://semeiaeducacao.ia.br/ (Fevereiro 2026)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SemeIA Educação - Design System",
  description: "Design System para a plataforma educacional SemeIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
