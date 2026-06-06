import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { generateCanonicalUrl } from '@/lib/metadata';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { generateBreadcrumbSchema, generateProfilePageSchema } from '@/lib/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
const aboutTitle = 'About Rodrigo Dias | Full Stack Developer';
const aboutDescription = 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.';

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  keywords: 'about, portfolio, developer, full-stack, story, journey',
  alternates: {
    canonical: generateCanonicalUrl('/about'),
    languages: {
      'pt-BR': generateCanonicalUrl('/about'),
      'en-US': generateCanonicalUrl('/about'),
      'es-ES': generateCanonicalUrl('/about'),
      'it-IT': generateCanonicalUrl('/about'),
      'x-default': generateCanonicalUrl('/about'),
    },
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    type: 'profile',
    url: generateCanonicalUrl('/about'),
    locale: 'en_US',
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

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          generateProfilePageSchema(aboutTitle, aboutDescription, `${SITE_URL}/presentation-2.jpeg`, 'en'),
          generateBreadcrumbSchema([
            { name: 'Portfolio', url: SITE_URL },
            { name: 'About', url: generateCanonicalUrl('/about') },
          ]),
        ]}
      />
      <AboutContent />
    </>
  );
}
