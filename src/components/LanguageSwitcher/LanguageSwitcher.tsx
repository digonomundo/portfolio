'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { LANGUAGE_STORAGE_KEY, type AppLanguage } from '@/i18n/resources';
import styles from './LanguageSwitcher.module.css';
import { usePathname } from 'next/navigation';

const AVAILABLE_LANGUAGES: AppLanguage[] = ['pt', 'en', 'es', 'it'];
const LANGUAGE_LABELS: Record<AppLanguage, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
};

const persistLanguageCookie = (language: AppLanguage) => {
  document.cookie = `app_language=${language}; path=/; max-age=31536000; SameSite=Lax`;
};

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const currentLanguage = AVAILABLE_LANGUAGES.includes(i18n.language as AppLanguage)
    ? (i18n.language as AppLanguage)
    : (AVAILABLE_LANGUAGES.includes((i18n.language || 'pt').slice(0, 2) as AppLanguage)
      ? (i18n.language || 'pt').slice(0, 2) as AppLanguage
      : 'pt');

  const handleLanguageChange = (language: AppLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    persistLanguageCookie(language);
    setIsOpen(false);

    const segments = (pathname || '/').split('/').filter(Boolean);
    const nextPath = segments.length > 0 && AVAILABLE_LANGUAGES.includes(segments[0] as AppLanguage)
      ? `/${[language, ...segments.slice(1)].join('/')}`
      : `/${language}${pathname === '/' ? '' : pathname || ''}`;

    if (nextPath !== pathname) {
      window.location.assign(nextPath);
    }
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Botão de Ícone (Gatilho visualmente igual ao ThemeToggle) */}
      <button
        type="button"
        className={styles.toggle}
        aria-label={t('navbar.language')}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        title={t('navbar.language')}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Globe size={16} />
      </button>

      {/* Menu Dropdown Retrátil Vertical */}
      <div
        id={dropdownId}
        className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
        role="menu"
        aria-label={t('navbar.language')}
      >
        {AVAILABLE_LANGUAGES.map((code) => {
          const isActive = currentLanguage === code;

          return (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`${styles.langButton} ${isActive ? styles.active : ''}`}
              role="menuitemradio"
              aria-checked={isActive}
              aria-label={LANGUAGE_LABELS[code]}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
