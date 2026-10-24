'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './config';
import { defaultLanguage, LANGUAGE_STORAGE_KEY, languageOptions, type AppLanguage } from './resources';
import { getLocaleLanguageTag } from '@/lib/locales';

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

    };

    i18n.on('languageChanged', handleLanguageChanged);
    handleLanguageChanged(language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
