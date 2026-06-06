import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { I18nProvider } from '@/i18n/I18nProvider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { THEME_STORAGE_KEY } from '@/theme/theme';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { generatePageMetadata, generateCanonicalMetaTag, generateAlternateLanguageLinks } from '@/lib/metadata';
import { getLocaleLanguageTag } from '@/lib/locales';
import { generateOrganizationSchema, generatePersonSchema } from '@/lib/schema';
import type { AppLanguage } from '@/i18n/resources';
import { resources } from '@/i18n/resources';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLanguage;
  const translation = resources[typedLocale]?.translation || resources['en'].translation;

  const homeCanonical = generateCanonicalMetaTag('/');
  const homeAlternateLanguages = Object.fromEntries(
    generateAlternateLanguageLinks('/').map(({ hrefLang, href }) => [hrefLang, href])
  );

  return {
    ...generatePageMetadata({
      title: translation.meta?.title || 'Rodrigo Dias - Full Stack Developer',
      description: translation.meta?.description || 'Portfolio of Rodrigo Dias, Full Stack Developer focused on Apple Developer Academy.',
      keywords: translation.meta?.keywords || 'Rodrigo Dias, Apple Developer Academy, full-stack developer',
      pathname: '/',
      twitterHandle: '@digonomundo',
    }, typedLocale),
    alternates: {
      canonical: homeCanonical.href,
      languages: homeAlternateLanguages,
    },
    manifest: '/manifest.json',
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020202' },
  ],
  colorScheme: 'light dark',
};

const rootStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    generatePersonSchema({
      name: 'Rodrigo Dias',
      jobTitle: 'Full Stack Developer',
      description: 'Full Stack Developer and Telecommunications Engineering student building accessible, internationalized and performance-conscious web experiences.',
      email: 'rodrigo@digonomundo.com',
      image: 'https://digonomundo.com/presentation-2.jpeg',
      location: {
        city: 'Campinas',
        region: 'SP',
        country: 'BR',
      },
      sameAs: [
        'https://github.com/digonomundo',
        'https://linkedin.com/in/digonomundo',
        'https://instagram.com/digonomundo',
      ],
    }),
    generateOrganizationSchema(),
  ],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  const typedLocale = locale as AppLanguage;

  const themeInitScript = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('${THEME_STORAGE_KEY}');
        var theme = storedTheme === 'dark' || storedTheme === 'light'
          ? storedTheme
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (error) {}
    })();
  `;

  return (
    <html
      lang={getLocaleLanguageTag(typedLocale)}
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData data={rootStructuredData} />
      </head>
      <body>
        <ThemeProvider>
          <I18nProvider initialLocale={typedLocale}>
            <SpeedInsights />
            <Analytics />
            <ScrollProgress />
            <Navbar />
            <main className="container">
              {children}
            </main>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
