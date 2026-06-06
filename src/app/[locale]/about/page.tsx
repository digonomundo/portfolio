import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { generateCanonicalUrl } from '@/lib/metadata';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { generateBreadcrumbSchema, generateProfilePageSchema } from '@/lib/schema';
import type { AppLanguage } from '@/i18n/resources';
import { resources } from '@/i18n/resources';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLanguage;
  const translation = resources[typedLocale]?.translation || resources['en'].translation;

  const aboutTitle = translation.navbar?.about ? `${translation.navbar.about} - Rodrigo Dias` : 'About Rodrigo Dias | Full Stack Developer';
  const aboutDescription = translation.meta?.description || 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.';

  return {
    title: aboutTitle,
    description: aboutDescription,
    keywords: 'about, portfolio, developer, full-stack, story, journey',
    alternates: {
      canonical: generateCanonicalUrl('/about'),
      languages: {
        'pt-BR': generateCanonicalUrl('/pt/about'),
        'en-US': generateCanonicalUrl('/en/about'),
        'es-ES': generateCanonicalUrl('/es/about'),
        'it-IT': generateCanonicalUrl('/it/about'),
        'x-default': generateCanonicalUrl('/en/about'),
      },
    },
    openGraph: {
      title: aboutTitle,
      description: aboutDescription,
      type: 'profile',
      url: generateCanonicalUrl(`/${locale}/about`),
      locale: typedLocale === 'pt' ? 'pt_BR' : typedLocale === 'en' ? 'en_US' : typedLocale === 'es' ? 'es_ES' : 'it_IT',
      images: [
        {
          url: `${SITE_URL}/presentation-2.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Rodrigo Dias',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: aboutTitle,
      description: aboutDescription,
      creator: '@digonomundo',
      images: [`${SITE_URL}/presentation-2.jpeg`],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const typedLocale = locale as AppLanguage;
  const translation = resources[typedLocale]?.translation || resources['en'].translation;
  const aboutTitle = translation.navbar?.about ? `${translation.navbar.about} - Rodrigo Dias` : 'About Rodrigo Dias | Full Stack Developer';
  const aboutDescription = translation.meta?.description || 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.';

  return (
    <>
      <StructuredData
        data={[
          generateProfilePageSchema(aboutTitle, aboutDescription, `${SITE_URL}/presentation-2.jpeg`, typedLocale),
          generateBreadcrumbSchema([
            { name: 'Portfolio', url: SITE_URL },
            { name: 'About', url: generateCanonicalUrl(`/${locale}/about`) },
          ]),
        ]}
      />
      <AboutContent />
    </>
  );
}
