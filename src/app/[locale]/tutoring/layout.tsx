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

  const tutoringTitle = translation.navbar?.tutoring 
    ? `${translation.navbar.tutoring} Hub | Rodrigo Dias` 
    : 'Portal de Monitorias | Rodrigo Dias';
    
  const tutoringDescription = 'Portal acadêmico de monitoria feito para os alunos da Unicamp. Acesse nossos horários, materiais de apoio, listas de exercícios e cronogramas para SI100 (C) e TT314 (Java). Bem-vindos!';

  return {
    title: tutoringTitle,
    description: tutoringDescription,
    keywords: 'Unicamp, tutoring, monitoria, SI100, TT314, algoritmos, orientação a objetos, Rodrigo Dias, FT',
    alternates: {
      canonical: generateCanonicalUrl(`/${locale}/tutoring`),
      languages: {
        'pt-BR': generateCanonicalUrl('/pt/tutoring'),
        'en-US': generateCanonicalUrl('/en/tutoring'),
        'es-ES': generateCanonicalUrl('/es/tutoring'),
        'it-IT': generateCanonicalUrl('/it/tutoring'),
        'x-default': generateCanonicalUrl('/pt/tutoring'),
      },
    },
    openGraph: {
      title: tutoringTitle,
      description: tutoringDescription,
      type: 'website',
      url: generateCanonicalUrl(`/${locale}/tutoring`),
      locale: typedLocale === 'pt' ? 'pt_BR' : typedLocale === 'en' ? 'en_US' : typedLocale === 'es' ? 'es_ES' : 'it_IT',
      images: [
        {
          url: `${SITE_URL}/presentation-2.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Portal de Monitorias - Rodrigo Dias',
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
        ])}
      />
      {children}
    </>
  );
}