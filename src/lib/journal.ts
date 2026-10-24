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

function requiredField(fields: Record<string, string | string[]>, field: string, file: string): string {
  const value = fields[field];
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Invalid Journal frontmatter in ${file}: "${field}" is required`);
  }
  return value;
}

function parseJsonField<T>(value: string, field: string, file: string): T {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    throw new Error(`Invalid Journal frontmatter in ${file}: "${field}" must be valid JSON`, { cause: error });
  }
}

function parseFrontmatter(file: string, locale: JournalLocale): JournalPost {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(frontmatterPattern);
  if (!match) throw new Error(`Invalid Journal frontmatter: ${file}`);

  const fields = Object.fromEntries(
    match[1].split('\n').filter(Boolean).map((line) => {
      const separator = line.indexOf(':');
      if (separator < 1) {
        throw new Error(`Invalid Journal frontmatter in ${file}: expected "key: value"`);
      }
      return [line.slice(0, separator).trim(), parseValue(line.slice(separator + 1))];
    }),
  );
  const slug = requiredField(fields, 'slug', file);
  const category = requiredField(fields, 'category', file);
  if (!['milestones', 'engineering-development', 'projects-apps', 'learning-experiences', 'in-the-press'].includes(category)) {
    throw new Error(`Invalid Journal frontmatter in ${file}: unsupported category "${category}"`);
  }
  const publishedAt = requiredField(fields, 'publishedAt', file);
  if (Number.isNaN(Date.parse(publishedAt))) {
    throw new Error(`Invalid Journal frontmatter in ${file}: "publishedAt" must be an ISO date`);
  }
  if (fields.updatedAt && Number.isNaN(Date.parse(String(fields.updatedAt)))) {
    throw new Error(`Invalid Journal frontmatter in ${file}: "updatedAt" must be an ISO date`);
  }
  const readingTimeValue = fields.readingTime ? Number(fields.readingTime) : 4;
  const width = fields.heroWidth ? Number(fields.heroWidth) : 1600;
  const height = fields.heroHeight ? Number(fields.heroHeight) : 900;
  if (!Number.isFinite(readingTimeValue) || readingTimeValue <= 0 || !Number.isFinite(width) || width <= 0 || !Number.isFinite(height) || height <= 0) {
    throw new Error(`Invalid Journal frontmatter in ${file}: readingTime and hero dimensions must be positive numbers`);
  }
  const tags = fields.tags;
  if (tags !== undefined && !Array.isArray(tags)) {
    throw new Error(`Invalid Journal frontmatter in ${file}: "tags" must be an array`);
  }

  const body = match[2].trim();
  if (!body) {
    throw new Error(`Invalid Journal content in ${file}: article body is required`);
  }

  return {
    slug,
    locale,
    category: category as JournalCategory,
    title: requiredField(fields, 'title', file),
    excerpt: requiredField(fields, 'excerpt', file),
    heroImage: {
      src: requiredField(fields, 'heroImage', file),
      alt: requiredField(fields, 'heroAlt', file),
      credit: fields.heroCredit ? String(fields.heroCredit) : undefined,
      caption: fields.heroCaption ? String(fields.heroCaption) : undefined,
      width,
      height,
    },
    publishedAt,
    updatedAt: fields.updatedAt ? String(fields.updatedAt) : undefined,
    author: requiredField(fields, 'author', file),
    readingTime: readingTimeValue,
    tags: tags ?? [],
    sources: fields.sources ? parseJsonField<JournalSource[]>(String(fields.sources), 'sources', file) : [],
    attachments: fields.attachments ? parseJsonField<JournalPost['attachments']>(String(fields.attachments), 'attachments', file) : undefined,
    translations: fields.translations ? parseJsonField<Partial<Record<JournalLocale, string>>>(String(fields.translations), 'translations', file) : {},
    body,
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
