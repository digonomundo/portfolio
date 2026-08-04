import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/lib/metadata';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { AppLanguage } from '@/i18n/resources';
import { resources } from '@/i18n/resources';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLanguage;
  const translation = resources[typedLocale]?.translation || resources['en'].translation;

  const tutoringTitle = translation.navbar?.tutoring ? `${translation.navbar.tutoring} | Rodrigo Dias` : 'TT314 Tutoring | Rodrigo Dias';
  const tutoringDescription = 'Object oriented programming I tutoring hub with schedule, assessment criteria, bibliography and support materials for Unicamp students.';

  return {
    title: tutoringTitle,
    description: tutoringDescription,
    keywords: 'TT314, Unicamp, algorithms, programming, tutoring, Java language, Rodrigo Dias, Rodrigo Marques Dias, Digo',
    alternates: {
      canonical: generateCanonicalUrl(`/${locale}/tutoring/tt314`),
      languages: {
        'pt-BR': generateCanonicalUrl('/pt/tutoring/tt314'),
        'en-US': generateCanonicalUrl('/en/tutoring/tt314'),
        'es-ES': generateCanonicalUrl('/es/tutoring/tt314'),
        'it-IT': generateCanonicalUrl('/it/tutoring/tt314'),
        'x-default': generateCanonicalUrl('/pt/tutoring/tt314'),
      },
    },
    openGraph: {
      title: tutoringTitle,
      description: tutoringDescription,
      type: 'website',
      url: generateCanonicalUrl(`/${locale}/tutoring/tt314`),
      locale: typedLocale === 'pt' ? 'pt_BR' : typedLocale === 'en' ? 'en_US' : typedLocale === 'es' ? 'es_ES' : 'it_IT',
      images: [
        {
          url: `${SITE_URL}/presentation-2.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Rodrigo Dias TT314 tutoring hub',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tutoringTitle,
      description: tutoringDescription,
      creator: '@digonomundo',
      images: [`${SITE_URL}/presentation-2.jpeg`],
    },
  };
}

export default async function TutoringLayout({ children, params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: 'Portfolio', url: SITE_URL },
          { name: 'Tutoring Hub', url: generateCanonicalUrl(`/${locale}/tutoring`) },
          { name: 'TT314 Tutoring', url: generateCanonicalUrl(`/${locale}/tutoring/tt314`) },
        ])}
      />
      {children}
    </>
  );
}
