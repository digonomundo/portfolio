'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
              <a href="https://www.sistemafaep.org.br/ideathon-do-sistema-faep-senar-pr-em-campo-mourao-abordou-a-gestao-de-residuos-no-meio-rural/" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>
                <span>Ideathon 2024 / Faep Senar PR</span> <ExternalLink size={12} />
              </a>
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

            <motion.div className={styles.bioParagraph} variants={fadeInUp}>
              <p>
                <Trans
                  i18nKey="about.paragraph4"
                  components={{ highlight: <Highlight /> }}
                />
              </p>
            </motion.div>

            {/* Nova Action Row Minimalista */}
            <motion.div className={styles.actionRow} variants={fadeInUp}>
              <Link href="/about" className={styles.aboutLink}>
                <span className={styles.linkText}>{t('about.readMore')}</span>
                <span className={styles.linkIconWrapper}>
                  <ArrowRight size={18} className={styles.linkIcon} />
                </span>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}