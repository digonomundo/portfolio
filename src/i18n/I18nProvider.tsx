'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './config';
import { defaultLanguage, LANGUAGE_STORAGE_KEY, languageOptions, type AppLanguage } from './resources';
import { getLocaleCode, getLocaleLanguageTag } from '@/lib/locales';

function resolveLanguage(): AppLanguage {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && languageOptions.some(({ code }) => code === storedLanguage)) {
    return storedLanguage as AppLanguage;
  }

  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();

  if (languageOptions.some(({ code }) => code === browserLanguage)) {
    return browserLanguage as AppLanguage;
  }

  return defaultLanguage;
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateAlternateLanguageLinks(currentLanguage: AppLanguage) {
  const pathname = window.location.pathname;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

  const languageCodes: AppLanguage[] = ['pt', 'en', 'es', 'it'];

  // Remove existing hreflang links
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Add updated hreflang links
  languageCodes.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    (link as any).hreflang = getLocaleLanguageTag(lang);
    link.href = `${baseUrl}${pathname}`;
    document.head.appendChild(link);
  });

  // Add x-default hreflang
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  (defaultLink as any).hreflang = 'x-default';
  defaultLink.href = `${baseUrl}${pathname}`;
  document.head.appendChild(defaultLink);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const language = resolveLanguage();

    void i18n.changeLanguage(language);
    document.documentElement.lang = getLocaleLanguageTag(language);

    const handleLanguageChanged = (nextLanguage: string) => {
      const nextLang = nextLanguage as AppLanguage;

      document.documentElement.lang = getLocaleLanguageTag(nextLang);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);

      // Update title
      document.title = i18n.t('meta.title');

      // Update description meta tag
      updateMetaTag('description', i18n.t('meta.description'));

      // Update OpenGraph tags
      updateMetaTag('og:title', i18n.t('meta.title'));
      updateMetaTag('og:description', i18n.t('meta.ogDescription'));
      updateMetaTag('og:locale', getLocaleCode(nextLang));

      // Update hreflang links
      updateAlternateLanguageLinks(nextLang);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    handleLanguageChanged(language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
