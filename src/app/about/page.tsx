import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'Quem é o Digo? | Sobre Mim',
  description: 'Uma retrospectiva não filtrada de memórias, tecnologia, artes marciais e a jornada que me trouxe até aqui.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Quem é o Digo? | Sobre Mim',
    description: 'Uma retrospectiva de memórias, tecnologia e artes marciais.',
    type: 'profile',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}