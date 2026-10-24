import type { MetadataRoute } from 'next';
import { getLocaleHref, getPosts, getPostsByCategory, journalLocales, type JournalCategory } from '@/lib/journal';

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
  const sitemapEntries = new Map<string, MetadataRoute.Sitemap[number]>();

  LANGUAGES.forEach((lang) => {
    ROUTES.forEach((route) => {
      const url = `${baseUrl}/${lang}${route.path}`;
      sitemapEntries.set(url, {
        url,
        lastModified: new Date(),
        changeFrequency: route.changefreq,
        priority: route.priority,
      });
    });
  });

  LANGUAGES.forEach((locale) => {
    const journalUrl = `${baseUrl}${getLocaleHref(locale)}`;
    sitemapEntries.set(journalUrl, {
    url: journalUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    });

    JOURNAL_CATEGORIES.filter((category) => getPostsByCategory(locale, category).length > 0).forEach((category) => {
    const categoryUrl = `${baseUrl}/${locale}/journal/category/${category}`;
    sitemapEntries.set(categoryUrl, {
      url: categoryUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
    });

    getPosts(locale).forEach((post) => {
    const url = `${baseUrl}${getLocaleHref(post.locale, post.slug)}`;
    sitemapEntries.set(url, {
      url,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    });
  });

  return [...sitemapEntries.values()];
}