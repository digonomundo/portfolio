'use client';

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Code2, User, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import styles from "./page.module.css";
import { FooterLinksSection } from "./FooterLinksSection";

export default function TutoringHubPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const isDarkMode = theme === 'dark';
  const currentLocale = i18n.language || 'pt';

if (!isMounted) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.loadingContainer}>
           <Sparkles className="animate-pulse" size={32} />
           <span>{t('tutoring.loading', 'Carregando...')}</span>
        </div>
      </div>
    );
  }

  const rawSi100Tags = t('tutoring.si100.tags', { returnObjects: true });
  const si100Tags = Array.isArray(rawSi100Tags) ? rawSi100Tags : [];

  const rawTt314Tags = t('tutoring.tt314.tags', { returnObjects: true });
  const tt314Tags = Array.isArray(rawTt314Tags) ? rawTt314Tags : [];

  // Variantes de animação para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <div className={`${isDarkMode ? styles.darkMode : styles.lightMode} ${styles.pageWrapper}`}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.heroHeader}
        >
          <span className={styles.heroBadge}>
            <Sparkles size={16} /> {t('tutoring.badge')}
          </span>
          <h1 className={styles.heroTitle}>{t('tutoring.title')}</h1>
          <p className={styles.heroSubtitle}>{t('tutoring.subtitle')}</p>
        </motion.div>

        {/* Grid de Disciplinas */}
        <motion.div 
          className={styles.subjectGrid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          
          {/* Card SI100 */}
          <motion.div variants={itemVariants}>
            <Link href={`/${currentLocale}/tutoring/si100`} className={styles.subjectCard}>
              <div className={styles.cardHeader}>
              <div className={`${styles.subjectIconWrapper} ${styles.iconBlue}`}>
                  <Terminal size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <div className={styles.subjectCode}>{t('tutoring.si100.code')} • {t('tutoring.si100.language')}</div>
                  <h2 className={styles.subjectTitle}>{t('tutoring.si100.name')}</h2>
                </div>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                  <User size={18} /> <span>{t('tutoring.si100.professor')}</span>
                </div>
                <div className={styles.infoRow}>
                  <Clock size={18} /> <span>{t('tutoring.si100.schedule')}</span>
                </div>
              </div>

              <p className={styles.subjectDesc}>{t('tutoring.si100.description')}</p>

              <div className={styles.tagsContainer}>
                {si100Tags.map((tag, index) => (
                  <span key={`si100-${index}`} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.actionButton}>
                {t('tutoring.si100.cta')} <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>

          {/* Card TT314 */}
          <motion.div variants={itemVariants}>
            <Link href={`/${currentLocale}/tutoring/tt314`} className={styles.subjectCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.subjectIconWrapper} ${styles.iconOrange}`}>
                  <Code2 size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <div className={styles.subjectCode}>{t('tutoring.tt314.code')} • {t('tutoring.tt314.language')}</div>
                  <h2 className={styles.subjectTitle}>{t('tutoring.tt314.name')}</h2>
                </div>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                  <User size={18} /> <span>{t('tutoring.tt314.professor')}</span>
                </div>
                <div className={styles.infoRow}>
                  <Clock size={18} /> <span>{t('tutoring.tt314.schedule')}</span>
                </div>
              </div>

              <p className={styles.subjectDesc}>{t('tutoring.tt314.description')}</p>

              <div className={styles.tagsContainer}>
                {tt314Tags.map((tag, index) => (
                  <span key={`tt314-${index}`} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.actionButton}>
                {t('tutoring.tt314.cta')} <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
                

      {/* --- Footer Cópia da Home --- */}
        <footer className={styles.footerContainer}>
          <div className={styles.footerContent}>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={styles.footerGrid}
            >
              <div className={styles.brandColumn}>
                <h3 className={styles.brandTitle}>
                  {t('tutoring.footer.builtWith')}{' '}
                  <span className={styles.heartAnimation}>❤️</span>{' '}
                  {t('tutoring.footer.purpose')}
                </h3>
                <p className={styles.brandDescription}>
                  {t('tutoring.footer.disclaimer')}
                </p>
              </div>

              <div className={styles.linksGrid}>
                 <FooterLinksSection />
              </div>
            </motion.div>

            {/* Barra Inferior Corporativa / Minimalista */}
            <div className={styles.bottomBar}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} Rodrigo Dias. {t('footer.designedIn')} 🇧🇷
              </p>
              
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>CSS Modules</span>
              </div>
            </div>

          </div>
        </footer>

    </div>
  );
}