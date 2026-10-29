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
const SUPPORTED_LANGUAGES: AppLanguage[] = ['pt', 'en', 'es', 'it'];

type TutoringCourse = 'hub' | 'si100' | 'tt314';

const tutoringDescriptions: Record<TutoringCourse, Record<AppLanguage, string>> = {
  hub: {
    pt: 'Portal acadêmico de monitoria para alunos da Unicamp, com horários, materiais de apoio, listas de exercícios e cronogramas de SI100 e TT314.',
    en: 'Academic tutoring portal for Unicamp students, with schedules, support materials, exercise lists and course plans for SI100 and TT314.',
    es: 'Portal académico de tutoría para estudiantes de la Unicamp, con horarios, materiales de apoyo, listas de ejercicios y planes de SI100 y TT314.',
    it: 'Portale accademico di tutorato per gli studenti dell’Unicamp, con orari, materiali di supporto, esercizi e programmi di SI100 e TT314.',
  },
  si100: {
    pt: 'Portal de monitoria de Algoritmos e Programação de Computadores I para alunos da Unicamp, com horários, critérios, bibliografia e materiais de apoio.',
    en: 'Algorithms and Computer Programming I tutoring portal for Unicamp students, with schedules, assessment criteria, bibliography and support materials.',
    es: 'Portal de tutoría de Algoritmos y Programación de Computadores I para estudiantes de la Unicamp, con horarios, criterios, bibliografía y materiales de apoyo.',
    it: 'Portale di tutorato di Algoritmi e Programmazione I per gli studenti dell’Unicamp, con orari, criteri, bibliografia e materiali di supporto.',
  },
  tt314: {
    pt: 'Portal de monitoria de Programação Orientada a Objetos I para alunos da Unicamp, com horários, critérios, bibliografia e materiais de apoio.',
    en: 'Object-Oriented Programming I tutoring portal for Unicamp students, with schedules, assessment criteria, bibliography and support materials.',
    es: 'Portal de tutoría de Programación Orientada a Objetos I para estudiantes de la Unicamp, con horarios, criterios, bibliografía y materiales de apoyo.',
    it: 'Portale di tutorato di Programmazione a oggetti I per gli studenti dell’Unicamp, con orari, criteri, bibliografia e materiali di supporto.',
  },
};

function normalizePath(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return path === '/' ? '' : path.replace(/\/+$/, '');
}

export function generateLocalizedPath(language: AppLanguage, pathname: string = ''): string {
  return `/${language}${normalizePath(pathname)}`;
}

export function getTutoringDescription(course: TutoringCourse, language: AppLanguage): string {
  return tutoringDescriptions[course][language];
}

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
  const canonicalUrl = generateCanonicalUrl(generateLocalizedPath(language, pathname));

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
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
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
          width: 2048,
          height: 1365,
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
  return [
    ...SUPPORTED_LANGUAGES.map((language) => ({
      rel: 'alternate',
      hrefLang: getLocaleLanguageTag(language),
      href: generateCanonicalUrl(generateLocalizedPath(language, pathname)),
    })),
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: generateCanonicalUrl(generateLocalizedPath('pt', pathname)),
    },
  ];
}
