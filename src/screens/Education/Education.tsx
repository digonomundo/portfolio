'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  GraduationCap, 
  Trophy, 
  Languages, 
  ExternalLink, 
  Code,
  Medal,
  Award
} from 'lucide-react';
import styles from './Education.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function Education() {
  const { t } = useTranslation();

  // Seleção estratégica das suas premiações de maior impacto
  const topAwards = [
    { year: '2026', title: t('education.awards.jubs'), icon: <Medal size={16} /> },
    { year: '2024', title: t('education.awards.hackathonPhp'), icon: <Code size={16} /> },
    { year: '2024', title: t('education.awards.ideathon'), icon: <Award size={16} /> },
    { year: '2023', title: t('education.awards.hackatonMinerva'), icon: <Trophy size={16} /> },
    { year: '2021', title: t('education.awards.obmep'), icon: <Award size={16} /> },
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>{t('education.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('education.subtitle')}</p>
        </motion.div>

        <div className={styles.gridContainer}>
          
          {/* Lado Esquerdo: Timeline de Formação */}
          <motion.div 
            className={styles.timelineColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className={styles.timelineTrack}>
              
              {/* Unicamp */}
              <motion.div variants={fadeInUp} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.dateBadge}>{t('education.unicamp.date')}</span>
                  <h3 className={styles.institution}>{t('education.unicamp.institution')}</h3>
                  <h4 className={styles.degree}>{t('education.unicamp.degree')}</h4>
                  <p className={styles.description}>{t('education.unicamp.description')}</p>
                  <div className={styles.tags}>
                    <span>{t('education.unicamp.tag1')}</span>
                    <span>{t('education.unicamp.tag2')}</span>
                  </div>
                </div>
              </motion.div>

              {/* UTFPR */}
              <motion.div variants={fadeInUp} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                    <span className={styles.dateBadge}>{t('education.utfpr.date')}</span>
                    <h3 className={styles.institution}>{t('education.utfpr.institution')}</h3>
                    <h4 className={styles.degree}>{t('education.utfpr.degree')}</h4>
                    <p className={styles.description}>{t('education.utfpr.description')}</p>
                    <div className={styles.tags}>
                        <span>{t('education.utfpr.tag1')}</span>
                        <span>{t('education.utfpr.tag2')}</span>
                    </div>
                </div>
              </motion.div>

              {/* ETEC */}
              <motion.div variants={fadeInUp} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.dateBadge}>{t('education.etec.date')}</span>
                  <h3 className={styles.institution}>{t('education.etec.institution')}</h3>
                  <h4 className={styles.degree}>{t('education.etec.degree')}</h4>
                  <p className={styles.description}>{t('education.etec.description')}</p>
                  <div className={styles.tags}>
                    <span>{t('education.etec.tag1')}</span>
                    <span>{t('education.etec.tag2')}</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Lado Direito: Bento Grid (Idiomas + Premiações) */}
          <motion.div 
            className={styles.bentoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            {/* Box de Idiomas */}
            <motion.div variants={fadeInUp} className={styles.bentoBox}>
              <div className={styles.bentoHeader}>
                <Languages className={styles.bentoIcon} />
                <h3>{t('education.languages.title')}</h3>
              </div>
              <ul className={styles.languageList}>
                <li className={styles.languageItem}>
                  <div className={styles.langInfo}>
                    <span className={styles.langName}>{t('education.languages.pt')}</span>
                    <span className={styles.langLevel}>{t('education.languages.ptLevel')}</span>
                  </div>
                </li>
                <li className={styles.languageItem}>
                  <div className={styles.langInfo}>
                    <span className={styles.langName}>{t('education.languages.en')}</span>
                    <span className={styles.langLevel}>{t('education.languages.enLevel')}</span>
                  </div>
                  <a href="https://cert.efset.org/en/UibmSE" target="_blank" rel="noreferrer" className={styles.certLink} aria-label="Ver certificado">
                    {t('education.languages.verify')} <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Box de Premiações (Highlights) */}
            <motion.div variants={fadeInUp} className={styles.bentoBox}>
              <div className={styles.bentoHeader}>
                <Trophy className={styles.bentoIcon} />
                <h3>{t('education.awards.title')}</h3>
              </div>
              <ul className={styles.awardsList}>
                {topAwards.map((award, idx) => (
                  <li key={idx} className={styles.awardItem}>
                    <div className={styles.awardIconWrapper}>{award.icon}</div>
                    <div className={styles.awardText}>
                      <span className={styles.awardYear}>{award.year}</span>
                      <span className={styles.awardTitle}>{award.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </div>

        {/* Gancho Largo para o Lattes */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.lattesBanner}
        >
          <div className={styles.lattesContent}>
            <GraduationCap className={styles.lattesIcon} />
            <div className={styles.lattesText}>
              <h3>{t('education.lattes.title')}</h3>
              <p>{t('education.lattes.description')}</p>
            </div>
          </div>
          <a 
            href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K1166553U8" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.lattesButton}
          >
            {t('education.lattes.button')} <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}