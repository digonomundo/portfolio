'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import styles from './AboutMe.module.css';
import PhotoMain from '@/assets/images/presentation.jpg'; 

const Highlight = ({ children }: { children?: React.ReactNode }) => (
  <strong className={styles.textHighlight}>{children}</strong>
);

export function AboutMe() {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="about" className={styles.sectionContainer} aria-labelledby="about-title">
      <div className={styles.contentWrapper}>
        
        <motion.div 
          className={styles.headerRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
        >
          <span className={styles.sectionIndex}>{'// BIO'}</span>
          <h2 id="about-title" className={styles.sectionTitle}>
            {t('about.title', 'Sobre Mim')}
          </h2>
        </motion.div>

        <div className={styles.mainGrid}>
          
          <motion.div 
            className={styles.imageColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className={styles.imageFrame}>
              <Image 
                src={PhotoMain} 
                alt="Rodrigo Dias" 
                fill
                priority
                quality={90} 
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, (max-width: 2000px) 500px, 800px" 
                className={styles.interactivePhoto}
              />
            </div>
            
            <div className={styles.geometricTag}>
              <span>Ideathon 2024 / Faep Senar PR</span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.textColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className={styles.bioParagraph} variants={fadeInUp}>
              <p>
                <Trans 
                  i18nKey="about.paragraph1" 
                  components={{ highlight: <Highlight /> }}
                />
              </p>
            </motion.div>

            <motion.div className={styles.bioParagraph} variants={fadeInUp}>
              <p>
                <Trans 
                  i18nKey="about.paragraph2"
                  components={{ highlight: <Highlight /> }}
                />
              </p>
            </motion.div>

            <motion.div className={styles.bioParagraph} variants={fadeInUp}>
              <p>
                <Trans 
                  i18nKey="about.paragraph3"
                  components={{ highlight: <Highlight /> }}
                />
              </p>
            </motion.div>

            <motion.div className={styles.metricsRow} variants={fadeInUp}>
              <div className={styles.metricNode}>
                <span className={styles.metricNumber}>21</span>
                <span className={styles.metricLabel}>{t('about.yearsExperience', 'Anos de Idade')}</span>
              </div>
              <div className={styles.metricNode}>
                <span className={styles.metricNumber}>+3</span>
                <span className={styles.metricLabel}>Idiomas (i18n)</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}