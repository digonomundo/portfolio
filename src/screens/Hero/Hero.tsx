'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import { HeroImage } from '@/components/HeroImage/HeroImage'; 

export function Hero() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

    const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={styles.heroSection}>
      
      {/* Background Typography */}
      <div className={styles.bgTypography} aria-hidden="true">
        <motion.span 
          className={styles.solidText}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
        >
          RODRIGO
        </motion.span>
        <motion.span 
          className={styles.outlineText}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.1 }}
        >
          DIAS
        </motion.span>
      </div>

      <div className={styles.frontContent}>
        {/* Globe Container no centro exato */}
        <div className={styles.globeOverlay}>
          <HeroImage />
        </div>

        {/* Informational Columns */}
        <div className={styles.sideColumns}>
          
          {/* Left Column */}
          <motion.div 
            className={styles.leftCol}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
          >
            <h1 className={styles.jobTitle}>{t('hero.titleLine1')} <br/>{t('hero.titleLine2')}</h1>
            <p className={styles.summary}>
              {t('hero.summary')}
            </p>
            <div className={styles.ctaRow}>
              <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className={styles.primaryCta}>
                {t('hero.contactCta')}
              </a>
              <a
                href="/api/curriculo"
                download="RodrigoDias.pdf"
                className={styles.secondaryCta}
              >
                {t('hero.downloadCv')}
                <Download size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className={styles.rightCol}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
          >
            <a href="https://github.com/digonomundo" target="_blank" rel="noreferrer" className={styles.socialPill} aria-label={t('hero.githubLabel')}>
              <FaGithub size={16} aria-hidden="true" /> GitHub
            </a>
            <a href="https://linkedin.com/in/digonomundo" target="_blank" rel="noreferrer" className={styles.socialPill} aria-label={t('hero.linkedinLabel')}>
              <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://instagram.com/digonomundo" target="_blank" rel="noreferrer" className={styles.socialPill} aria-label={t('hero.instagramLabel')}>
              <FaInstagram size={16} aria-hidden="true" /> Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
