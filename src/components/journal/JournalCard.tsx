import Image from 'next/image';
import Link from 'next/link';
import type { JournalPost, JournalLocale } from '@/lib/journal';
import { getCategoryLabel, getLocaleHref } from '@/lib/journal';
import styles from './JournalCard.module.css';

export function JournalCard({ post, locale, variant = 'standard' }: { post: JournalPost; locale: JournalLocale; variant?: 'featured' | 'standard' | 'compact' }) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <Link href={getLocaleHref(locale, post.slug)} className={styles.imageLink} aria-label={post.title}>
        <Image src={post.heroImage.src} alt={post.heroImage.alt} width={post.heroImage.width} height={post.heroImage.height} sizes="(max-width: 700px) 100vw, 50vw" />
      </Link>
      <div className={styles.content}>
        <span className={styles.category}>{getCategoryLabel(post.category, locale)}</span>
        <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale)}</time>
        <h2><Link href={getLocaleHref(locale, post.slug)}>{post.title}</Link></h2>
        {variant !== 'compact' && <p>{post.excerpt}</p>}
        <Link className={styles.readMore} href={getLocaleHref(locale, post.slug)}>
          {locale === 'pt' ? 'Ler história' : locale === 'es' ? 'Leer historia' : locale === 'it' ? 'Leggi la storia' : 'Read story'}
        </Link>
      </div>
    </article>
  );
}
