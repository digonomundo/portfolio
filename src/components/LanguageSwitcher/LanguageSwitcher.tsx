'use client';

import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { LANGUAGE_STORAGE_KEY, type AppLanguage } from '@/i18n/resources';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const availableLanguages: AppLanguage[] = ['pt', 'en', 'es', 'it'];

  const currentLanguage = availableLanguages.includes(i18n.language as AppLanguage)
    ? (i18n.language as AppLanguage)
    : ((i18n.language || 'pt').slice(0, 2) as AppLanguage);

  const handleLanguageChange = (language: AppLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    void i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container} aria-label="Seletor de idiomas">
      {/* Botão de Ícone (Gatilho visualmente igual ao ThemeToggle) */}
      <button type="button" className={styles.toggle}>
        <Globe size={16} />
      </button>

      {/* Menu Dropdown Retrátil Vertical */}
      <div className={styles.dropdown}>
        {availableLanguages.map((code) => {
          const isActive = currentLanguage === code;

          return (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`${styles.langButton} ${isActive ? styles.active : ''}`}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}