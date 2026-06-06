'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { LANGUAGE_STORAGE_KEY, type AppLanguage } from '@/i18n/resources';
import styles from './LanguageSwitcher.module.css';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const availableLanguages: AppLanguage[] = ['pt', 'en', 'es', 'it'];
  const languageLabels: Record<AppLanguage, string> = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
    it: 'Italiano',
  };

  const currentLanguage = availableLanguages.includes(i18n.language as AppLanguage)
    ? (i18n.language as AppLanguage)
    : ((i18n.language || 'pt').slice(0, 2) as AppLanguage);

  const handleLanguageChange = (language: AppLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.cookie = `app_language=${language}; path=/; max-age=31536000; SameSite=Lax`;
    void i18n.changeLanguage(language);
    setIsOpen(false);
    
    // Redirect logic
    if (pathname) {
      const segments = pathname.split('/');
      const cleanSegments = segments.filter(Boolean);
      
      if (cleanSegments.length > 0 && availableLanguages.includes(cleanSegments[0] as AppLanguage)) {
        cleanSegments[0] = language;
        window.location.href = `/${cleanSegments.join('/')}`;
      } else {
        window.location.href = `/${language}${pathname === '/' ? '' : pathname}`;
      }
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
        {availableLanguages.map((code) => {
          const isActive = currentLanguage === code;

          return (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`${styles.langButton} ${isActive ? styles.active : ''}`}
              role="menuitemradio"
              aria-checked={isActive}
              aria-label={languageLabels[code]}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
