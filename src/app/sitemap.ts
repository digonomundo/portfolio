import type { MetadataRoute } from 'next';
import { getAllPosts, getLocaleHref, getPostsByCategory, journalLocales, type JournalCategory } from '@/lib/journal';

const LANGUAGES = journalLocales;
const JOURNAL_CATEGORIES: JournalCategory[] = ['milestones', 'engineering-development', 'projects-apps', 'learning-experiences', 'in-the-press'];

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

  getAllPosts().forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}${getLocaleHref(post.locale, post.slug)}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    });

    LANGUAGES.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}${getLocaleHref(locale)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
      JOURNAL_CATEGORIES.filter((category) => getPostsByCategory(locale, category).length > 0).forEach((category) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/journal/category/${category}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  });

  return sitemapEntries;
}