import type { AppLanguage } from '@/i18n/resources';

export const languageToLocaleMap: Record<AppLanguage, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
  it: 'it_IT',
};

export function getLocaleCode(language: AppLanguage): string {
  return languageToLocaleMap[language] || 'en_US';
}

export function getLocaleLanguageTag(language: AppLanguage): string {
  return language === 'pt' ? 'pt-BR' : language;
}
