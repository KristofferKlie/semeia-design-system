import type { Metadata } from "next";
import { Montserrat, Fraunces, DM_Mono } from "next/font/google";
import "@/styles/globals.css";

// SemeIA Typography System (3-font hierarchy)
// Sans (body/UI): Montserrat — verified from semeiaeducacao.ia.br
// Display (headings): Fraunces — organic serif, matches "growth/seed" brand
// Mono (labels/code): DM Mono — clean monospace for eyebrow labels & data
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
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
      <body className={`${montserrat.variable} ${fraunces.variable} ${dmMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
