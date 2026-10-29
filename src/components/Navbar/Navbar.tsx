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
import { AboutStoryIndicator } from './AboutStoryIndicator';

// Constantes
const SUPPORTED_LANGUAGES: AppLanguage[] = ['pt', 'en', 'es', 'it'];

// Funções utilitárias (fora do componente)
const persistLanguageCookie = (language: AppLanguage) => {
  document.cookie = `app_language=${language}; path=/; max-age=31536000; SameSite=Lax`;
};

const getNextLanguagePath = (language: AppLanguage, pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && SUPPORTED_LANGUAGES.includes(segments[0] as AppLanguage)) {
    return `/${[language, ...segments.slice(1)].join('/')}`;
  }
  
  return `/${language}${pathname === '/' ? '' : pathname}`;
};

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMenuOpenRef = useRef(false);
  const pendingSectionRef = useRef<string | null>(null);

  const isTutoringPage = pathname
    ? pathname === '/tutoring' ||
      pathname.endsWith('/tutoring') ||
      pathname.endsWith('/tutoring/si100') ||
      pathname.endsWith('/tutoring/tt314') ||
      pathname.includes('/tutoring/')
    : false;
    
  const isAboutPage = pathname ? pathname.endsWith('/about') : false;

  useEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (wasMenuOpenRef.current) {
        toggleButtonRef.current?.focus();
      }
    }
    wasMenuOpenRef.current = isMenuOpen;
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleMobileLanguageChange = (language: AppLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    persistLanguageCookie(language);
    void i18n.changeLanguage(language);
    setIsMenuOpen(false);

    if (pathname) {
      const nextPath = getNextLanguagePath(language, pathname);
      window.location.assign(nextPath);
    }
  };

  const currentLanguage = SUPPORTED_LANGUAGES.includes(i18n.language as AppLanguage)
    ? (i18n.language as AppLanguage)
    : (SUPPORTED_LANGUAGES.includes((i18n.language || 'pt').slice(0, 2) as AppLanguage)
      ? (i18n.language || 'pt').slice(0, 2) as AppLanguage
      : 'pt');

  const homePath = `/${currentLanguage}`;
  const isHomePage = pathname === homePath || pathname === `${homePath}/`;
  const [activeSection, setActiveSection] = useState<string | null>(
    isHomePage ? 'inicio' : null,
  );
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const aboutSection = document.getElementById('about');
    if (!aboutSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible((isVisible) => (
          isVisible === entry.isIntersecting ? isVisible : entry.isIntersecting
        ));
      },
      { threshold: 0.2, rootMargin: '-80px 0px -20% 0px' },
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage || !pendingSectionRef.current) {
      return;
    }

    const sectionId = pendingSectionRef.current;
    pendingSectionRef.current = null;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = ['inicio', 'about', 'education', 'experience', 'projects', 'contact'];
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = 'inicio';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isHomePage]);

  const handleSectionClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    e.preventDefault();
    pendingSectionRef.current = id;
    router.push(homePath);
  };

  const showDefaultNav = !isTutoringPage && !isAboutPage;

  const navLinks = [
    { href: `${homePath}#inicio`, id: 'inicio', label: t('navbar.home') },
    { href: `${homePath}#about`, id: 'about', label: t('navbar.about') },
    { href: `${homePath}#education`, id: 'education', label: t('navbar.education') },
    { href: `${homePath}#experience`, id: 'experience', label: t('navbar.experience') },
    { href: `${homePath}#projects`, id: 'projects', label: t('navbar.projects') },
    { href: `${homePath}#contact`, id: 'contact', label: t('navbar.contact') },
  ];
  const isJournalPage = pathname?.includes('/journal') ?? false;

  return (
    <>
      <header className={styles.navbarContainer}>
        <nav className={styles.navbar} aria-label={t('navbar.navigation')}>
          {/* Logo + Localização */}
          <div className={styles.leftBadge}>
            <Link
              href={homePath}
              onClick={() => setIsMenuOpen(false)}
              className={styles.homeLink}
            >
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
              id="mobile-navigation"
              className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}
              ref={menuRef}
            >
              {navLinks.map((link, index) => (
                link.id === 'about' ? (
                  <div className={styles.aboutNavItem} key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSectionClick(link.id, e)}
                      className={`${styles.navLink} ${
                        isHomePage && activeSection === link.id ? styles.navLinkActive : ''
                      }`}
                      aria-current={
                        isHomePage && activeSection === link.id ? 'location' : undefined
                      }
                      ref={index === 0 ? firstLinkRef : undefined}
                    >
                      {link.label}
                    </Link>
                    <AboutStoryIndicator
                      href={`/${currentLanguage}/about`}
                      label={t('navbar.fullStory')}
                      ariaLabel={t('navbar.fullStoryAria')}
                      isVisible={isHomePage && isAboutVisible}
                      isMobileVisible={isMenuOpen}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                ) : (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleSectionClick(link.id, e)}
                    className={`${styles.navLink} ${
                      isHomePage && activeSection === link.id ? styles.navLinkActive : ''
                    }`}
                    aria-current={
                      isHomePage && activeSection === link.id ? 'location' : undefined
                    }
                    ref={index === 0 ? firstLinkRef : undefined}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                href={`/${currentLanguage}/journal`}
                className={`${styles.navLink} ${isJournalPage ? styles.navLinkActive : ''}`}
                aria-current={isJournalPage ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.journal')}
              </Link>

              {/* Language Switcher MOBILE (aparece apenas dentro do menu hambúrguer) */}
              <div className={styles.mobileLanguageSwitcher}>
                <span className={styles.mobileLanguageLabel}>
                  {t('navbar.language')}
                </span>
                <div className={styles.mobileLanguageButtons}>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleMobileLanguageChange(lang)}
                      className={`${styles.mobileLangButton} ${
                        currentLanguage === lang ? styles.mobileLangActive : ''
                      }`}
                      aria-label={t('navbar.switchLanguage', { language: lang.toUpperCase() })}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Botões de ação (lado direito) */}
          <div className={styles.rightControls}>
            {isTutoringPage ? (
              <Link
                href={`/${currentLanguage}`}
                className={styles.rightButton}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.portfolio')} <MoveUpLeft size={16} />
              </Link>
            ) : isAboutPage ? (
              <Link
                href={`/${currentLanguage}`}
                className={styles.rightButton}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.portfolio2')} <MoveUpLeft size={16} />
              </Link>
            ) : (
              <Link href={`/${currentLanguage}/tutoring`} className={styles.rightButton}>
                {t('navbar.tutoring')} <MoveUpRight size={16} />
              </Link>
            )}

            {/* Menu hambúrguer - visível APENAS em mobile e apenas nas páginas com navegação */}
            {showDefaultNav && (
              <button
                ref={toggleButtonRef}
                className={styles.menuToggle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </nav>

        {/* Dock de temas e idioma (desktop) */}
        <div className={styles.themeDock}>
          <ThemeToggle />
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