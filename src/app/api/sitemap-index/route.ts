import { NextResponse } from 'next/server';

const languages = ['pt', 'en', 'es', 'it'] as const;

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
  const entries = languages
    .map((language) => `<sitemap><loc>${baseUrl}/sitemap/${language}.xml</loc></sitemap>`)
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</sitemapindex>`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
