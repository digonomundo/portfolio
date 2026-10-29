import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JournalGrid } from '@/components/journal/JournalGrid';
import { getCategoryLabel, getPosts, isJournalLocale, journalLocales, getLocaleHref, type JournalCategory } from '@/lib/journal';
import { getLocaleLanguageTag } from '@/lib/locales';
import { resources } from '@/i18n/resources';
import styles from './page.module.css';

type Props = { params: Promise<{ locale: string }> };

const visibleCategories: JournalCategory[] = ['milestones', 'learning-experiences', 'in-the-press'];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

export async function generateStaticParams() {
  return journalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isJournalLocale(locale)) return {};
  const translation = resources[locale].translation;
  const journalTitle = translation.navbar.journal;
  const languages = Object.fromEntries(
    journalLocales.map((language) => [getLocaleLanguageTag(language), `${siteUrl}${getLocaleHref(language)}`]),
  );
  return {
    title: journalTitle,
    description: translation.journal.description,
    alternates: {
      canonical: `${siteUrl}${getLocaleHref(locale)}`,
      languages: { ...languages, 'x-default': languages['en-US'] },
    },
    openGraph: { type: 'website', title: journalTitle, description: translation.journal.description, url: `${siteUrl}${getLocaleHref(locale)}` },
    twitter: { card: 'summary', title: journalTitle, description: translation.journal.description },
  };
}

export default async function JournalPage({ params }: Props) {
  const { locale } = await params;
  if (!isJournalLocale(locale)) notFound();
  const posts = getPosts(locale);
  const translation = resources[locale].translation;
  return <div className={styles.page}>
    <header className={styles.intro}>
      <h1>Journal</h1>
      <p>{translation.journal.description}</p>
      <nav className={styles.categoryNav} aria-label={translation.journal.categories}>
        {visibleCategories.map((category) => <a className={styles.categoryLink} href={`${getLocaleHref(locale)}/category/${category}`} key={category}>{getCategoryLabel(category, locale)}</a>)}
      </nav>
    </header>
    {posts.length ? <><section className={styles.archive} aria-labelledby="archive-title"><span id="archive-title" className={styles.archiveTitle}>{translation.journal.archive}</span><span>{new Date(posts[0].publishedAt).getFullYear()} — {translation.journal.newestFirst}</span></section><JournalGrid posts={posts} locale={locale} /></> : <p className={styles.empty}>{translation.journal.empty}</p>}
  </div>;
}
