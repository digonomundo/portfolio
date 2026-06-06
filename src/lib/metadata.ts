import type { Metadata } from 'next';
import type { AppLanguage } from '@/i18n/resources';
import { getLocaleCode, getLocaleLanguageTag } from './locales';

interface PageMetadataConfig {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterHandle?: string;
  keywords?: string;
  pathname?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
const SITE_NAME = 'Rodrigo Dias - Full Stack Developer';

export function generateCanonicalUrl(pathname: string = ''): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}

export function generatePageMetadata(
  config: PageMetadataConfig,
  language: AppLanguage = 'en'
): Metadata {
  const locale = getLocaleCode(language);
  const pathname = config.pathname || '';
  const canonicalUrl = generateCanonicalUrl(pathname);

  const title = config.title || SITE_NAME;
  const description = config.description || 'Portfolio showcasing projects, experience and expertise in full-stack development';
  const ogImage = config.ogImage ? `${SITE_URL}${config.ogImage}` : `${SITE_URL}/presentation-2.jpeg`;
  const twitterHandle = config.twitterHandle || '@digonomundo';
  const keywords = config.keywords || 'full-stack, developer, typescript, react, next.js';
  const alternateLanguageLinks = generateAlternateLanguageLinks(pathname);
  const languages = Object.fromEntries(
    alternateLanguageLinks.map(({ hrefLang, href }) => [hrefLang, href])
  );

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale,
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: [ogImage],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    formatDetection: {
      telephone: false,
      email: false,
    },
  };
}

export function generateAlternateLanguageLinks(pathname: string = ''): Array<{ rel: string; hrefLang: string; href: string }> {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return [
    { rel: 'alternate', hrefLang: 'pt-BR', href: generateCanonicalUrl(path) },
    { rel: 'alternate', hrefLang: 'en-US', href: generateCanonicalUrl(path) },
    { rel: 'alternate', hrefLang: 'es-ES', href: generateCanonicalUrl(path) },
    { rel: 'alternate', hrefLang: 'it-IT', href: generateCanonicalUrl(path) },
    { rel: 'alternate', hrefLang: 'x-default', href: generateCanonicalUrl(path) },
  ];
}

export function generateCanonicalMetaTag(pathname: string = ''): { rel: string; href: string } {
  return {
    rel: 'canonical',
    href: generateCanonicalUrl(pathname),
  };
}
