'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Menu, MoveUpLeft, MoveUpRight, X,  } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import Digo from '@/assets/images/Digo.jpg';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';

export function Navbar() {
const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTutoringPage = pathname === '/tutoring';
  const isAboutPage = pathname === '/about';

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.leftBadge}>
          <Link href="/" onClick={handleHomeClick} className={styles.homeLink}>
            <Image 
              src={Digo} 
              alt="Rodrigo Dias" 
              className={styles.avatar}
              unoptimized
            />
            <span style={{ fontWeight: 600}}>Rodrigo <span className={styles.nameText}>Dias</span></span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-muted)' }}>
            <FaMapMarkerAlt size={12} style={{ color: 'var(--primary)' }} className={styles.local}/>
            <span className={styles.local}>{t('navbar.location')}</span>
          </div>
        </div>
        {!isTutoringPage && !isAboutPage && (
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }} className={styles.navLink}>{t('navbar.home')}</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className={styles.navLink}>{t('navbar.about')}</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollTo('education'); }} className={styles.navLink}>{t('navbar.education')}</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }} className={styles.navLink}>{t('navbar.experience')}</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className={styles.navLink}>{t('navbar.projects')}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className={styles.navLink}>{t('navbar.contact')}</a>
          </div>
        )}

        <div className={styles.rightControls}>
          {isTutoringPage &&(
            <Link 
            href="/" 
            className={styles.rightButton} 
            onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.portfolio')} <MoveUpLeft size={16}/>
            </Link>
          )}

          {!isTutoringPage && !isAboutPage && (
            <Link href="/tutoring" className={styles.rightButton}>
              {t('navbar.tutoring')} <MoveUpRight size={16}/>
            </Link>
          )}
          
          {isAboutPage && !isTutoringPage &&(
            <Link 
              href="/" 
              className={styles.rightButton} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.portfolio2')} <MoveUpLeft size={16}/>
            </Link>
          )}

          {!isTutoringPage && !isAboutPage && (
            <button
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>
      
      <div className={styles.themeDock}>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}