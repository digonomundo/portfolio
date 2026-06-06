import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { generateCanonicalUrl } from '@/lib/metadata';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

export const metadata: Metadata = {
  title: 'About Rodrigo Dias | Full Stack Developer',
  description: 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.',
  keywords: 'about, portfolio, developer, full-stack, story, journey',
  alternates: {
    canonical: generateCanonicalUrl('/about'),
    languages: {
      'pt-BR': generateCanonicalUrl('/about'),
      'en-US': generateCanonicalUrl('/about'),
      'es-ES': generateCanonicalUrl('/about'),
      'it-IT': generateCanonicalUrl('/about'),
    },
  },
  openGraph: {
    title: 'About Rodrigo Dias | Full Stack Developer',
    description: 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.',
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
    title: 'About Rodrigo Dias | Full Stack Developer',
    description: 'An unfiltered retrospective of memories, technology, martial arts and the journey that brought me here.',
    creator: '@digonomundo',
    images: [`${SITE_URL}/presentation-2.jpeg`],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}