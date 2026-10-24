import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { JournalGrid } from '@/components/journal/JournalGrid';
import { getCategoryLabel, getPostsByCategory, isJournalLocale, journalLocales, type JournalCategory } from '@/lib/journal';
import { getLocaleLanguageTag } from '@/lib/locales';
import styles from '../../page.module.css';

type Props = { params: Promise<{ locale: string; cat: string }> };
const categories = ['milestones', 'engineering-development', 'projects-apps', 'learning-experiences', 'in-the-press'] as const;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

export async function generateStaticParams() {
  return journalLocales.flatMap((locale) => categories.filter((cat) => getPostsByCategory(locale, cat).length > 0).map((cat) => ({ locale, cat })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, cat } = await params;
  if (!isJournalLocale(locale) || !categories.includes(cat as JournalCategory)) return {};
  const languages = Object.fromEntries(
    journalLocales
      .filter((language) => getPostsByCategory(language, cat as JournalCategory).length > 0)
      .map((language) => [getLocaleLanguageTag(language), `${siteUrl}/${language}/journal/category/${cat}`]),
  );
  const title = `${getCategoryLabel(cat as JournalCategory, locale)} — Journal`;
  return {
    title,
    alternates: {
      canonical: `${siteUrl}/${locale}/journal/category/${cat}`,
      languages: { ...languages, ...(languages['en-US'] ? { 'x-default': languages['en-US'] } : {}) },
    },
    openGraph: { type: 'website', title, url: `${siteUrl}/${locale}/journal/category/${cat}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, cat } = await params;
  if (!isJournalLocale(locale) || !categories.includes(cat as JournalCategory)) notFound();
  const posts = getPostsByCategory(locale, cat as JournalCategory);
  if (!posts.length) notFound();
  const categoryName = getCategoryLabel(cat as JournalCategory, locale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Journal', item: `${siteUrl}/${locale}/journal` },
      { '@type': 'ListItem', position: 2, name: categoryName, item: `${siteUrl}/${locale}/journal/category/${cat}` },
    ],
  };
  return <div className={styles.page}>
    <StructuredData id={`journal-category-${locale}-${cat}`} data={breadcrumb} />
    <header className={styles.intro}><span className={styles.eyebrow}>Journal</span><h1>{categoryName}</h1></header>
    <JournalGrid posts={posts} locale={locale} />
  </div>;
}
