import fs from 'node:fs';
import path from 'node:path';
import type { AppLanguage } from '@/i18n/resources';

export const journalLocales = ['pt', 'en', 'es', 'it'] as const;
export type JournalLocale = (typeof journalLocales)[number];
export type JournalCategory = 'milestones' | 'engineering-development' | 'projects-apps' | 'learning-experiences' | 'in-the-press';

export type JournalSource = {
  label: string;
  url: string;
  fetchedAt: string;
};

export type JournalPost = {
  slug: string;
  locale: JournalLocale;
  category: JournalCategory;
  title: string;
  excerpt: string;
  heroImage: { src: string; alt: string; credit?: string; caption?: string; width: number; height: number };
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: number;
  tags: string[];
  sources: JournalSource[];
  attachments?: { label: string; url: string; type: string }[];
  translations: Partial<Record<JournalLocale, string>>;
  body: string;
};

const contentRoot = path.join(process.cwd(), 'src/content/journal');
const frontmatterPattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

function parseValue(value: string): string | string[] {
  const trimmed = value.trim();
  if (trimmed.startsWith('[{') || trimmed.startsWith('{')) return trimmed;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean);
  }
  return trimmed.replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(file: string, locale: JournalLocale): JournalPost {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(frontmatterPattern);
  if (!match) throw new Error(`Invalid Journal frontmatter: ${file}`);

  const fields = Object.fromEntries(
    match[1].split('\n').filter(Boolean).map((line) => {
      const separator = line.indexOf(':');
      return [line.slice(0, separator).trim(), parseValue(line.slice(separator + 1))];
    }),
  );
  const slug = String(fields.slug);

  return {
    slug,
    locale,
    category: String(fields.category) as JournalCategory,
    title: String(fields.title),
    excerpt: String(fields.excerpt),
    heroImage: {
      src: String(fields.heroImage),
      alt: String(fields.heroAlt),
      credit: fields.heroCredit ? String(fields.heroCredit) : undefined,
      caption: fields.heroCaption ? String(fields.heroCaption) : undefined,
      width: Number(fields.heroWidth || 1600),
      height: Number(fields.heroHeight || 900),
    },
    publishedAt: String(fields.publishedAt),
    updatedAt: fields.updatedAt ? String(fields.updatedAt) : undefined,
    author: String(fields.author),
    readingTime: Number(fields.readingTime || 4),
    tags: Array.isArray(fields.tags) ? fields.tags : [],
    sources: fields.sources ? JSON.parse(String(fields.sources)) : [],
    attachments: fields.attachments ? JSON.parse(String(fields.attachments)) : undefined,
    translations: fields.translations ? JSON.parse(String(fields.translations)) : {},
    body: match[2].trim(),
  };
}

function readLocale(locale: JournalLocale): JournalPost[] {
  const directory = path.join(contentRoot, locale);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => parseFrontmatter(path.join(directory, file), locale));
}

export function isJournalLocale(value: string): value is JournalLocale {
  return journalLocales.includes(value as JournalLocale);
}

export function getAllPosts(): JournalPost[] {
  return journalLocales.flatMap(readLocale);
}

export function getPosts(locale: JournalLocale): JournalPost[] {
  return readLocale(locale).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(locale: JournalLocale, slug: string): JournalPost | undefined {
  return getPosts(locale).find((post) => post.slug === slug);
}

export function getTranslationSlugs(slug: string): Partial<Record<JournalLocale, string>> {
  const source = getPost('pt', slug) ?? getAllPosts().find((post) => post.slug === slug);
  return journalLocales.reduce((result, locale) => {
    const translatedSlug = source?.translations[locale];
    if (translatedSlug && getPost(locale, translatedSlug)) {
      result[locale] = translatedSlug;
    }
    return result;
  }, {} as Partial<Record<JournalLocale, string>>);
}

export function getPostsByCategory(locale: JournalLocale, category: JournalCategory): JournalPost[] {
  return getPosts(locale).filter((post) => post.category === category);
}

export function getCategoryLabel(category: JournalCategory, locale: JournalLocale): string {
  const labels: Record<JournalCategory, Record<JournalLocale, string>> = {
    milestones: { pt: 'Conquistas', en: 'Milestones', es: 'Logros', it: 'Traguardi' },
    'engineering-development': { pt: 'Engenharia e desenvolvimento', en: 'Engineering & Development', es: 'Ingeniería y desarrollo', it: 'Ingegneria e sviluppo' },
    'projects-apps': { pt: 'Projetos e aplicativos', en: 'Projects & Apps', es: 'Proyectos y aplicaciones', it: 'Progetti e applicazioni' },
    'learning-experiences': { pt: 'Aprendizados e experiências', en: 'Learning & Experiences', es: 'Aprendizajes y experiencias', it: 'Apprendimento ed esperienze' },
    'in-the-press': { pt: 'Na imprensa', en: 'In the Press', es: 'En la prensa', it: 'Sulla stampa' },
  };
  return labels[category][locale];
}

export function getLocaleHref(locale: JournalLocale, slug?: string): string {
  return `/${locale}/journal${slug ? `/${slug}` : ''}`;
}

export function toJournalLocale(locale: AppLanguage): JournalLocale {
  return locale;
}
