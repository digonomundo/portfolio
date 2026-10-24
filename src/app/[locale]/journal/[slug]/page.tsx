import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/StructuredData/StructuredData';
import { RichContent } from '@/components/journal/RichContent';
import { getAllPosts, getCategoryLabel, getLocaleHref, getPost, getTranslationSlugs, isJournalLocale, journalLocales } from '@/lib/journal';
import { getLocaleLanguageTag } from '@/lib/locales';
import styles from './page.module.css';

type Props = { params: Promise<{ locale: string; slug: string }> };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ locale: post.locale, slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isJournalLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return {};
  const translationSlugs = getTranslationSlugs(slug);
  const languages = Object.fromEntries(
    journalLocales.flatMap((language) => {
      const translatedSlug = translationSlugs[language];
      return translatedSlug
        ? [[getLocaleLanguageTag(language), `${siteUrl}${getLocaleHref(language, translatedSlug)}`]]
        : [];
    }),
  );
  const defaultLanguageUrl = languages['en-US'];
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}${getLocaleHref(locale, slug)}`,
      languages: {
        ...languages,
        ...(defaultLanguageUrl ? { 'x-default': defaultLanguageUrl } : {}),
      },
    },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `${siteUrl}${getLocaleHref(locale, slug)}`, images: [{ url: `${siteUrl}${post.heroImage.src}`, alt: post.heroImage.alt }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [`${siteUrl}${post.heroImage.src}`] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isJournalLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();
  const canonical = `${siteUrl}${getLocaleHref(locale, slug)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': post.category === 'in-the-press' ? 'NewsArticle' : 'BlogPosting', headline: post.title, description: post.excerpt, datePublished: post.publishedAt, dateModified: post.updatedAt ?? post.publishedAt, inLanguage: { pt: 'pt-BR', en: 'en-US', es: 'es-ES', it: 'it-IT' }[locale], author: { '@type': 'Person', name: post.author }, image: [`${siteUrl}${post.heroImage.src}`], mainEntityOfPage: canonical },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Journal', item: `${siteUrl}${getLocaleHref(locale)}` }, { '@type': 'ListItem', position: 2, name: post.title, item: canonical }] },
    ],
  };
  return <div className={styles.page}>
    <StructuredData id={`journal-${post.slug}-${locale}`} data={schema} />
    <Link className={styles.back} href={getLocaleHref(locale)}>← {locale === 'pt' ? 'Voltar ao Journal' : locale === 'es' ? 'Volver al Journal' : locale === 'it' ? 'Torna al Journal' : 'Back to Journal'}</Link>
    <header className={styles.header}>
      <span className={styles.category}>{getCategoryLabel(post.category, locale)}</span>
      <h1>{post.title}</h1>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.meta}><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale)}</time><span>{post.author}</span><span>{post.readingTime} min</span></div>
    </header>
    <figure>
      <div className={styles.hero}><Image src={post.heroImage.src} alt={post.heroImage.alt} width={post.heroImage.width} height={post.heroImage.height} priority sizes="(max-width: 900px) 100vw, 900px" /></div>
      {post.heroImage.credit && <figcaption className={styles.credit}>{post.heroImage.credit}</figcaption>}
      {post.heroImage.caption && <figcaption className={styles.caption}>{post.heroImage.caption}</figcaption>}
    </figure>
    <article className={styles.article}>
      <RichContent body={post.body} />
      {post.attachments?.length ? <section className={styles.sources} aria-labelledby="attachments-title">
        <h2 id="attachments-title">{locale === 'pt' ? 'Anexos' : locale === 'es' ? 'Adjuntos' : locale === 'it' ? 'Allegati' : 'Attachments'}</h2>
        {post.attachments.map((attachment) => <a href={attachment.url} key={attachment.url} target="_blank" rel="noreferrer">{attachment.label} ({attachment.type}) ↗</a>)}
      </section> : null}
      <section className={styles.sources} aria-labelledby="sources-title">
        <h2 id="sources-title">{locale === 'pt' ? 'Fontes originais' : locale === 'es' ? 'Fuentes originales' : locale === 'it' ? 'Fonti originali' : 'Original sources'}</h2>
        {post.sources.map((source) => <a href={source.url} key={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}
      </section>
    </article>
  </div>;
}
