import type { JournalLocale, JournalPost } from '@/lib/journal';
import { JournalCard } from './JournalCard';
import styles from './JournalGrid.module.css';

export function JournalGrid({ posts, locale }: { posts: JournalPost[]; locale: JournalLocale }) {
  return <div className={styles.grid}>{posts.map((post, index) => <JournalCard key={post.slug} post={post} locale={locale} variant={index === 0 ? 'featured' : index % 3 === 0 ? 'compact' : 'standard'} />)}</div>;
}
