'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, 
  Heart, 
  ExternalLink, 
  MapPin, 
  Award,
  Zap
} from 'lucide-react';
import styles from './Experience.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.sectionHeader}
        >
          <span className={styles.sectionTagline}>{t('experience.tagline')}</span>
          <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('experience.subtitle')}</p>
        </motion.div>

        {/* Layout de Dois Pesos (Colunas Paralelas) */}
        <div className={styles.dualTrackGrid}>
          
          {/* COLUNA 1: Impacto Profissional & Engenharia */}
          <motion.div 
            className={styles.trackColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className={styles.trackHeader}>
              <div className={styles.iconCircle}>
                <Briefcase size={18} />
              </div>
              <div>
                <h3 className={styles.trackTitle}>{t('experience.tracks.professional.title')}</h3>
                <p className={styles.trackSubtitle}>{t('experience.tracks.professional.subtitle')}</p>
              </div>
            </div>

            <div className={styles.streamList}>
              
              {/* Unicamp - Monitoria */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.unicampMonitor.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Campinas, SP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.unicampMonitor.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <a href="https://www.unicamp.br" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    UNICAMP <ExternalLink size={12} />
                  </a>
                </h4>
                <p className={styles.itemDescription}>{t('experience.unicampMonitor.desc')}</p>
              </motion.div>

              {/* Unicamp - IoT Research */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.unicampIot.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Campinas, SP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.unicampIot.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <a href="https://www.unicamp.br" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    UNICAMP <ExternalLink size={12} />
                  </a>
                </h4>
                <p className={styles.itemDescription}>{t('experience.unicampIot.desc')}</p>
                <div className={styles.projectBadge}>
                  <Zap size={12} /> Orientação: Prof. Dr. Leonardo Lorenzo Bravo Roger
                </div>
              </motion.div>

              {/* Haken - Diretor / Assistente */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.haken.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Campo Mourão, PR
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.haken.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <span className={styles.companyStatic}>Haken Empresa Júnior</span>
                </h4>
                <ul className={styles.bulletList}>
                  <li>{t('experience.haken.bullet1')}</li>
                  <li>{t('experience.haken.bullet2')}</li>
                  <li>{t('experience.haken.bullet3')}</li>
                </ul>
              </motion.div>

              {/* Desktop Sigmanet */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.desktop.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Barretos, SP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.desktop.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <a href="https://www.desktop.com.br" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    Desktop S.A. <ExternalLink size={12} />
                  </a>
                </h4>
                <ul className={styles.bulletList}>
                  <li>{t('experience.desktop.bullet1')}</li>
                  <li>{t('experience.desktop.bullet2')}</li>
                </ul>
              </motion.div>

            </div>
          </motion.div>
          
          {/* COLUNA 2: Liderança, Voluntariado & Alta Performance Esportiva */}
          <motion.div 
            className={styles.trackColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className={styles.trackHeader}>
              <div className={styles.iconCircleBlue}>
                <Heart size={18} />
              </div>
              <div>
                <h3 className={styles.trackTitle}>{t('experience.tracks.volunteering.title')}</h3>
                <p className={styles.trackSubtitle}>{t('experience.tracks.volunteering.subtitle')}</p>
              </div>
            </div>

            <div className={styles.streamList}>
              
              {/* AIESEC */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.aiesec.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Global / Campinas
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.aiesec.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <a href="https://aiesec.org.br" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    AIESEC <ExternalLink size={12} />
                  </a>
                </h4>
                <p className={styles.itemDescription}>{t('experience.aiesec.desc')}</p>
                <ul className={styles.bulletList}>
                  <li>{t('experience.aiesec.bullet1')}</li>
                  <li>{t('experience.aiesec.bullet2')}</li>
                </ul>
              </motion.div>

              {/* LAU Unicamp - Jiu Jitsu */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.lau.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> UNICAMP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.lau.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <span className={styles.companyStatic}>Liga das Atléticas da Unicamp</span>
                </h4>
                <ul className={styles.bulletList}>
                  <li className={styles.premiumBullet}>
                    <Award size={14} className={styles.bulletIcon} /> 
                    <strong>{t('experience.lau.bullet1_bold')}</strong> {t('experience.lau.bullet1_text')}
                  </li>
                  <li>{t('experience.lau.bullet2')}</li>
                </ul>
              </motion.div>

              {/* LEU Unicamp - Judô */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.leu.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> UNICAMP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.leu.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <span className={styles.companyStatic}>Liga das Engenharias Unicamp</span>
                </h4>
                <ul className={styles.bulletList}>
                  <li className={styles.premiumBullet}>
                    <Award size={14} className={styles.bulletIcon} /> 
                    <strong>{t('experience.leu.bullet1_bold')}</strong> {t('experience.leu.bullet1_text')}
                  </li>
                  <li>{t('experience.leu.bullet2')}</li>
                </ul>
              </motion.div>

              {/* Etec Talk */}
              <motion.div variants={fadeInUp} className={styles.experienceItem}>
                <div className={styles.timelineDot} />
                <div className={styles.itemMeta}>
                  <span className={styles.itemDuration}>{t('experience.etecTalk.date')}</span>
                  <span className={styles.itemLocation}>
                    <MapPin size={12} /> Barretos, SP
                  </span>
                </div>
                <h4 className={styles.itemRole}>
                  {t('experience.etecTalk.role')} 
                  <span className={styles.companyDivider}>·</span> 
                  <span className={styles.companyStatic}>Etec Talk Podcast</span>
                </h4>
                <p className={styles.itemDescription}>{t('experience.etecTalk.desc')}</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}