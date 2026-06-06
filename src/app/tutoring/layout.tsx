import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/lib/metadata';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
const tutoringTitle = 'SI100 Tutoring | Rodrigo Dias';
const tutoringDescription = 'Algorithms and Computer Programming I tutoring hub with schedule, assessment criteria, bibliography and support materials for Unicamp students.';

export const metadata: Metadata = {
  title: tutoringTitle,
  description: tutoringDescription,
  keywords: 'SI100, Unicamp, algorithms, programming, tutoring, C language, Rodrigo Dias',
  alternates: {
    canonical: generateCanonicalUrl('/tutoring'),
    languages: {
      'pt-BR': generateCanonicalUrl('/tutoring'),
      'en-US': generateCanonicalUrl('/tutoring'),
      'es-ES': generateCanonicalUrl('/tutoring'),
      'it-IT': generateCanonicalUrl('/tutoring'),
      'x-default': generateCanonicalUrl('/tutoring'),
    },
  },
  openGraph: {
    title: tutoringTitle,
    description: tutoringDescription,
    type: 'website',
    url: generateCanonicalUrl('/tutoring'),
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/presentation-2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Rodrigo Dias SI100 tutoring hub',
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

export default function TutoringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: 'Portfolio', url: SITE_URL },
          { name: 'SI100 Tutoring', url: generateCanonicalUrl('/tutoring') },
        ])}
      />
      {children}
    </>
  );
}
