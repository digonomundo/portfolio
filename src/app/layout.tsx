import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "@/components/Header";
import Starfield from "@/components/ui/BackgroundStars";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import TransitionPage from "@/components/TransitionPage";

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
    "Rodrigo Dias, técnico e desenvolvedor. Conheça meu portfólio e trajetória profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" dir="ltr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" href="/assets/images/logo/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/assets/images/logo/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/assets/images/logo/android-chrome-192x192.png" sizes="200x200" type="image/png" />
        <link rel="icon" href="/assets/images/logo/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/logo/apple-touch-icon.png" />
        
        {/* Meta Tags Essenciais */}
        <meta name="description" content={metadata.description ?? "Rodrigo Dias, técnico e desenvolvedor. Conheça meu portfólio e trajetória profissional."} />
        <meta name="keywords" content={typeof metadata.keywords === "string" ? metadata.keywords : "Rodrigo Dias, Digo, Rodrigo Marques Dias, Digonomundo, portfolio, desenvolvedor web, web developer, engenheiro de software, UTFPR, ETEC, Barretos, projetos, tecnologia, web site, Rodrigodias, Rodrigomarquesdias, digolar, desenvolvedor, software, jr"} />
        <meta name="author" content="Rodrigo Marques Dias" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph / Facebook */}
        <meta property="fb:app_id" content="1672796953651442" />
        <meta property="og:site_name" content="Rodrigo Marques Dias - Portfolio" />
        <meta property="og:title" content={typeof metadata.title === 'string' ? metadata.title : "Rodrigo Dias - Desenvolvedor"} />
        <meta property="og:description" content={metadata.description ?? "Rodrigo Dias, técnico e desenvolvedor. Conheça meu portfólio e trajetória profissional."} />
        <meta property="og:image" content="https://www.digonomundo.com/assets/images/logo/android-chrome-192x192.png" />
        <meta property="og:url" content="https://www.digonomundo.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Minha logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={typeof metadata.title === 'string' ? metadata.title : "Rodrigo Dias - Desenvolvedor"} />
        <meta name="twitter:description" content={metadata.description ?? "Rodrigo Dias, técnico e desenvolvedor. Conheça meu portfólio e trajetória profissional."} />
        <meta name="twitter:image" content="https://www.digonomundo.com/assets/images/logo/android-chrome-512x512.png" />

        {/* Links Relacionados */}
        <link rel="canonical" href="https://www.digonomundo.com" />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-background min-h-full h-full`}
      >
        <TransitionPage/>
        <Starfield />
        <HeaderPage />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
