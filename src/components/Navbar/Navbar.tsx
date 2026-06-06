'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Menu, MoveUpLeft, MoveUpRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import Digo from '@/assets/images/Digo.jpg';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { LANGUAGE_STORAGE_KEY, type AppLanguage } from '@/i18n/resources';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const isTutoringPage = pathname ? pathname.endsWith('/tutoring') : false;
  const isAboutPage = pathname ? pathname.endsWith('/about') : false;

  // Gerenciar foco e scroll do body
  useEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      toggleButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/' || availableLanguages.some(lang => pathname === `/${lang}`)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleMobileLanguageChange = (language: AppLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.cookie = `app_language=${language}; path=/; max-age=31536000; SameSite=Lax`;
    void i18n.changeLanguage(language);
    setIsMenuOpen(false);

    if (pathname) {
      const segments = pathname.split('/');
      // Remove empty first segment
      const cleanSegments = segments.filter(Boolean);
      
      if (cleanSegments.length > 0 && availableLanguages.includes(cleanSegments[0] as AppLanguage)) {
        cleanSegments[0] = language;
        window.location.href = `/${cleanSegments.join('/')}`;
      } else {
        window.location.href = `/${language}${pathname === '/' ? '' : pathname}`;
      }
    }
  };

  const availableLanguages: AppLanguage[] = ['pt', 'en', 'es', 'it'];
  const currentLanguage = availableLanguages.includes(i18n.language as AppLanguage)
    ? (i18n.language as AppLanguage)
    : ((i18n.language || 'pt').slice(0, 2) as AppLanguage);

  // Determina se a navegação padrão (com links) deve ser exibida
  const showDefaultNav = !isTutoringPage && !isAboutPage;

  return (
    <>
      <header className={styles.navbarContainer}>
        <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
          {/* Logo + Localização */}
          <div className={styles.leftBadge}>
            <Link href="/" onClick={handleHomeClick} className={styles.homeLink}>
              <Image
                src={Digo}
                alt="Rodrigo Dias"
                className={styles.avatar}
              />
              <span style={{ fontWeight: 600 }}>
                Rodrigo <span className={styles.nameText}>Dias</span>
              </span>
            </Link>
            <div className={styles.locationWrapper}>
              <FaMapMarkerAlt size={12} className={styles.locationIcon} />
              <span className={styles.locationText}>{t('navbar.location')}</span>
            </div>
          </div>

          {/* Links de navegação (apenas nas páginas principais) */}
          {showDefaultNav && (
            <div
              className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}
              ref={menuRef}
              aria-hidden={!isMenuOpen}
            >
              <a
                href="#inicio"
                onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }}
                className={styles.navLink}
                ref={firstLinkRef}
              >
                {t('navbar.home')}
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
                className={styles.navLink}
              >
                {t('navbar.about')}
              </a>
              <a
                href="#education"
                onClick={(e) => { e.preventDefault(); scrollTo('education'); }}
                className={styles.navLink}
              >
                {t('navbar.education')}
              </a>
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}
                className={styles.navLink}
              >
                {t('navbar.experience')}
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
                className={styles.navLink}
              >
                {t('navbar.projects')}
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className={styles.navLink}
              >
                {t('navbar.contact')}
              </a>

              {/* Language Switcher MOBILE (aparece apenas dentro do menu hambúrguer) */}
              <div className={styles.mobileLanguageSwitcher}>
                <span className={styles.mobileLanguageLabel} suppressHydrationWarning >
                  {t('navbar.language')}
                </span>
                <div className={styles.mobileLanguageButtons}>
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleMobileLanguageChange(lang)}
                      className={`${styles.mobileLangButton} ${
                        currentLanguage === lang ? styles.mobileLangActive : ''
                      }`}
                      aria-label={`Mudar para ${lang.toUpperCase()}`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.rightControls}>
            {isTutoringPage && (
              <Link href={`/${currentLanguage}`} className={styles.rightButton} onClick={() => setIsMenuOpen(false)}>
                {t('navbar.portfolio')} <MoveUpLeft size={16} />
              </Link>
            )}

            {!isTutoringPage && !isAboutPage && (
              <Link href={`/${currentLanguage}/tutoring`} className={styles.rightButton}>
                {t('navbar.tutoring')} <MoveUpRight size={16} />
              </Link>
            )}

            {isAboutPage && !isTutoringPage && (
              <Link href={`/${currentLanguage}`} className={styles.rightButton} onClick={() => setIsMenuOpen(false)}>
                {t('navbar.portfolio2')} <MoveUpLeft size={16} />
              </Link>
            )}

            {/* Menu hambúrguer - visível APENAS em mobile e apenas nas páginas com navegação */}
            {showDefaultNav && (
              <button
                ref={toggleButtonRef}
                className={styles.menuToggle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </nav>

        {/* Dock de temas e idioma (desktop) */}
        <div className={styles.themeDock}>
          <ThemeToggle />
          {/* LanguageSwitcher desktop - escondido em mobile */}
          <div className={styles.desktopOnly}>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Overlay do menu mobile */}
      {showDefaultNav && isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}