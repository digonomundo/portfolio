import type { AppLanguage } from '@/i18n/resources';
import { getLocaleCode } from './locales';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  email: string;
  image?: string;
  location?: {
    city: string;
    region: string;
    country: string;
  };
  sameAs?: string[];
}

export function generatePersonSchema(props: PersonSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name,
    jobTitle: props.jobTitle,
    description: props.description,
    email: props.email,
    image: props.image || `${SITE_URL}/presentation-2.jpeg`,
    url: SITE_URL,
    sameAs: props.sameAs || [],
    ...(props.location && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: props.location.city,
        addressRegion: props.location.region,
        addressCountry: props.location.country,
      },
    }),
  };
}

interface ProjectSchemaProps {
  name: string;
  description: string;
  image?: string;
  url?: string;
  dateCreated?: string;
  creator?: {
    name: string;
    url?: string;
  };
}

export function generateProjectSchema(props: ProjectSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    image: props.image,
    url: props.url || SITE_URL,
    applicationCategory: 'Utility',
    ...(props.dateCreated && { dateCreated: props.dateCreated }),
    ...(props.creator && { creator: props.creator }),
  };
}

export function generateProfilePageSchema(
  title: string,
  description: string,
  image?: string,
  language: AppLanguage = 'en'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: title,
    description,
    inLanguage: getLocaleCode(language).replace('_', '-'),
    image: image || `${SITE_URL}/presentation-2.jpeg`,
    url: `${SITE_URL}/about`,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rodrigo Dias',
    url: SITE_URL,
    logo: `${SITE_URL}/presentation-2.jpeg`,
    sameAs: [
      'https://github.com/digonomundo',
      'https://linkedin.com/in/digonomundo',
      'https://twitter.com/digonomundo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General',
      email: 'contact@digonomundo.com',
    },
  };
}
