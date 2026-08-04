import type { MetadataRoute } from 'next';

const LANGUAGES = ['pt', 'en', 'es', 'it'] as const;

const ROUTES = [
  { path: '', changefreq: 'weekly' as const, priority: 1.0 },
  { path: '/about', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tutoring', changefreq: 'weekly' as const, priority: 0.7 },
  { path: '/tutoring/si100', changefreq: 'weekly' as const, priority: 0.7 },
  { path: '/tutoring/tt314', changefreq: 'weekly' as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
  const sitemapEntries: MetadataRoute.Sitemap = [];

  LANGUAGES.forEach((lang) => {
    const prefix = lang === 'pt' ? '' : `/${lang}`;

    ROUTES.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changefreq,
        priority: route.priority,
      });
    });
  });

  return sitemapEntries;
}