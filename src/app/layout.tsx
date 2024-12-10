import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { HeaderPage } from "@/components/Header";
import Starfield from "@/components/BackgroundStars";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu portfolio",
  keywords: "Rodrigo, Rodrigo Dias, Digo, Rodrigo Marques Dias, Digonomundo, Rodrigodias, Rodrigomarquesdias, digolar, portfolio, desenvolvedor web, desenvolvedor, etec, utfpr, barretos, engenheiro de software, software, jr",
  description: "Meu portfólio, falando um pouco sobre mim e meus projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" sizes="any" />
        <meta property="og:site_name" content="Meu Portfolio"></meta>
        <meta property="og:title" content="Meu Portfolio" />
        <meta property="og:description" content="Meu portfólio, falando um pouco sobre mim e meus projetos" />
        <meta property="og:image" content="https://www.digonomundo.com/assets/logo.svg" />
        <meta property="og:url" content="https://www.digonomundo.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meu Portfolio" />
        <meta name="twitter:description" content="Meu portfólio, falando um pouco sobre mim e meus projetos" />
        <meta name="twitter:image" content="https://www.digonomundo.com/assets/logo.svg" />
      </head>
      <body
        className={`${poppins.variable} + "antialiased bg-background min-h-full h-full `}
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
