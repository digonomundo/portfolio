import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Starfield from "@/components/BackgroundStars";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderPage from "@/components/Header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Dias - Desenvolvedor",
  keywords: [
    "Rodrigo Dias",
    "Digo",
    "Rodrigo Marques Dias",
    "Digonomundo",
    "portfolio",
    "desenvolvedor web",
    "web developer",
    "engenheiro de software",
    "UTFPR",
    "ETEC",
    "Barretos",
    "projetos",
    "tecnologia",
    "web site",
    "Rodrigodias",
    "Rodrigomarquesdias",
    "digolar",
    "desenvolvedor",
    "software",
    "jr",
  ].join(", "),
  description:
    "Conheça Rodrigo Dias, desenvolvedor. Explore meu portfólio, projetos e trajetória profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />

        {/* Meta Tags Essenciais */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description ?? "Conheça Rodrigo Dias, desenvolvedor. Explore meu portfólio, projetos e trajetória profissional."} />
        <meta name="keywords" content={typeof metadata.keywords === "string" ? metadata.keywords : "Rodrigo Dias, Digo, Rodrigo Marques Dias, Digonomundo, portfolio, desenvolvedor web, web developer, engenheiro de software, UTFPR, ETEC, Barretos, projetos, tecnologia, web site, Rodrigodias, Rodrigomarquesdias, digolar, desenvolvedor, software, jr"} />
        <meta name="author" content="Rodrigo Marques Dias" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="Rodrigo Dias Portfolio" />
        <meta property="og:title" content={typeof metadata.title === 'string' ? metadata.title : "Rodrigo Dias - Desenvolvedor"} />
        <meta property="og:description" content={metadata.description ?? "Conheça Rodrigo Dias, desenvolvedor. Explore meu portfólio, projetos e trajetória profissional."} />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta property="og:url" content="https://www.digonomundo.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={typeof metadata.title === 'string' ? metadata.title : "Rodrigo Dias - Desenvolvedor"} />
        <meta name="twitter:description" content={metadata.description ?? "Conheça Rodrigo Dias, desenvolvedor. Explore meu portfólio, projetos e trajetória profissional."} />
        <meta name="twitter:image" content="/assets/logo.svg" />

        {/* Links Relacionados */}
        <link rel="canonical" href="https://www.digonomundo.com" />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-background min-h-full h-full`}
      >
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <HeaderPage />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
