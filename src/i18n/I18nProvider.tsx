'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './config';
import { defaultLanguage, LANGUAGE_STORAGE_KEY, languageOptions, type AppLanguage } from './resources';
import { getLocaleCode, getLocaleLanguageTag } from '@/lib/locales';

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale?: AppLanguage;
}

function resolveLanguage(initialLocale?: AppLanguage): AppLanguage {
  if (initialLocale) {
    return initialLocale;
  }
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

function normalizeLanguage(language: string): AppLanguage {
  const languageCode = language.slice(0, 2).toLowerCase();

  if (languageOptions.some(({ code }) => code === languageCode)) {
    return languageCode as AppLanguage;
  }

  return defaultLanguage;
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateCanonicalLink() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';
  const href = `${baseUrl}${window.location.pathname}`;
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = href;
}

function updateAlternateLanguageLinks() {
  const pathname = window.location.pathname;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digonomundo.com';

  const languageCodes: AppLanguage[] = ['pt', 'en', 'es', 'it'];

  // Remove existing hreflang links
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Add updated hreflang links
  languageCodes.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = getLocaleLanguageTag(lang);
    link.href = `${baseUrl}${pathname}`;
    document.head.appendChild(link);
  });

  // Add x-default hreflang
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `${baseUrl}${pathname}`;
  document.head.appendChild(defaultLink);
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  useEffect(() => {
    const language = resolveLanguage(initialLocale);

    void i18n.changeLanguage(language);
    document.documentElement.lang = getLocaleLanguageTag(language);

    const handleLanguageChanged = (nextLanguage: string) => {
      const nextLang = normalizeLanguage(nextLanguage);

      document.documentElement.lang = getLocaleLanguageTag(nextLang);
      document.documentElement.dir = 'ltr';
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);

      // Update title
      document.title = i18n.t('meta.title');

      // Update description meta tag
      updateMetaTag('description', i18n.t('meta.description'));
      updateMetaTag('keywords', i18n.t('meta.keywords'));

      // Update OpenGraph tags
      updateMetaTag('og:title', i18n.t('meta.title'), 'property');
      updateMetaTag('og:description', i18n.t('meta.ogDescription'), 'property');
      updateMetaTag('og:locale', getLocaleCode(nextLang), 'property');

      // Update Twitter Card tags
      updateMetaTag('twitter:title', i18n.t('meta.title'));
      updateMetaTag('twitter:description', i18n.t('meta.ogDescription'));

      // Update hreflang links
      updateCanonicalLink();
      updateAlternateLanguageLinks();
    };

    i18n.on('languageChanged', handleLanguageChanged);
    handleLanguageChanged(language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
