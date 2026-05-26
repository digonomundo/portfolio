'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './config';
import { defaultLanguage, LANGUAGE_STORAGE_KEY, languageOptions, type AppLanguage } from './resources';

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

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const language = resolveLanguage();

    void i18n.changeLanguage(language);
    document.documentElement.lang = language;

    const handleLanguageChanged = (nextLanguage: string) => {
      document.documentElement.lang = nextLanguage;
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
      document.title = i18n.t('meta.title');

      const descriptionElement = document.querySelector('meta[name="description"]');

      if (descriptionElement) {
        descriptionElement.setAttribute('content', i18n.t('meta.description'));
      }
    };

    i18n.on('languageChanged', handleLanguageChanged);
    handleLanguageChanged(language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
