import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JournalGrid } from '@/components/journal/JournalGrid';
import { getCategoryLabel, getPosts, isJournalLocale, journalLocales, getLocaleHref, type JournalCategory } from '@/lib/journal';
import styles from './page.module.css';

type Props = { params: Promise<{ locale: string }> };

const copy = {
  pt: { title: 'Journal', description: 'Engenharia, desenvolvimento, projetos e conquistas.', archive: 'Arquivo' },
  en: { title: 'Journal', description: 'Engineering, development, projects and milestones.', archive: 'Archive' },
  es: { title: 'Journal', description: 'Ingeniería, desarrollo, proyectos y logros.', archive: 'Archivo' },
  it: { title: 'Journal', description: 'Ingegneria, sviluppo, progetti e traguardi.', archive: 'Archivio' },
} as const;
const visibleCategories: JournalCategory[] = ['milestones', 'learning-experiences', 'in-the-press'];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

export async function generateStaticParams() {
  return journalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isJournalLocale(locale)) return {};
  const languages = Object.fromEntries(journalLocales.map((language) => [language, `${siteUrl}${getLocaleHref(language)}`]));
  return {
    title: `${copy[locale].title} — Journal`,
    description: copy[locale].description,
    alternates: { canonical: `${siteUrl}${getLocaleHref(locale)}`, languages: { ...languages, 'x-default': languages.en } },
    openGraph: { type: 'website', title: copy[locale].title, description: copy[locale].description, url: `${siteUrl}${getLocaleHref(locale)}` },
    twitter: { card: 'summary', title: copy[locale].title, description: copy[locale].description },
  };
}

export default async function JournalPage({ params }: Props) {
  const { locale } = await params;
  if (!isJournalLocale(locale)) notFound();
  const posts = getPosts(locale);
  return <div className={styles.page}>
    <header className={styles.intro}>
      <h1>{copy[locale].title}</h1>
      <p>{copy[locale].description}</p>
      <nav className={styles.categoryNav} aria-label={locale === 'pt' ? 'Categorias' : locale === 'es' ? 'Categorías' : locale === 'it' ? 'Categorie' : 'Categories'}>
        {visibleCategories.map((category) => <a className={styles.categoryLink} href={`${getLocaleHref(locale)}/category/${category}`} key={category}>{getCategoryLabel(category, locale)}</a>)}
      </nav>
    </header>
    {posts.length ? <><section className={styles.archive} aria-labelledby="archive-title"><span id="archive-title" className={styles.archiveTitle}>{copy[locale].archive}</span><span>{new Date(posts[0].publishedAt).getFullYear()} — {locale === 'pt' ? 'mais recentes primeiro' : locale === 'es' ? 'más recientes primero' : locale === 'it' ? 'più recenti prima' : 'newest first'}</span></section><JournalGrid posts={posts} locale={locale} /></> : <p className={styles.empty}>{locale === 'pt' ? 'Nenhuma publicação disponível.' : locale === 'es' ? 'No hay publicaciones disponibles.' : locale === 'it' ? 'Nessuna pubblicazione disponibile.' : 'No publications available.'}</p>}
  </div>;
}
