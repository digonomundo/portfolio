'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaCode,
  FaGlobe,
  FaYoutube,
} from 'react-icons/fa';

import {  
  Terminal, 
  BookOpen, 
  Music, 
} from 'lucide-react';
import styles from './Footer.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.footerGrid}
        >
          <div className={styles.brandColumn}>
            <h3 className={styles.brandTitle}>
              {t('footer.builtWith')}{' '}
              <span className={styles.heartAnimation}>❤️</span>{' '}
              {t('footer.andPurpose')}
            </h3>
            <p className={styles.brandDescription}>
              {t('footer.disclaimer')}
            </p>
          </div>

          <div className={styles.linksGrid}>
            
            {/* Coluna 1 - Social & Contato */}
            <div className={styles.linksColumn}>
              <FooterLink href="https://linkedin.com/in/digonomundo" icon={<FaLinkedinIn size={16} />} label="LinkedIn" />
              <FooterLink href="https://instagram.com/digonomundo" icon={<FaInstagram size={16} />} label="Instagram" />
              <FooterLink href="https://discord.com/users/640632942703673374" icon={<FaDiscord size={16} />} label="Discord" />
              <FooterLink href="mailto:rodrigo@digonomundo.com" icon={<FaEnvelope size={16} />} label="Email" />
            </div>

            {/* Coluna 2 - Engenharia de Software / Code */}
            <div className={styles.linksColumn}>
              <FooterLink href="https://github.com/digonomundo" icon={<FaGithub size={16} />} label="GitHub" />
              <FooterLink href="https://leetcode.com/u/digonomundo/" icon={<Terminal size={16} />} label="LeetCode" />
              <FooterLink href="https://codeforces.com/profile/digonomundo" icon={<FaCode size={16} />} label="Codeforces" />
              <FooterLink href="https://stackoverflow.com/users/32219910/digonomundo" icon={<FaGlobe size={16} />} label="Stack Overflow" />
            </div>

            {/* Coluna 3 - Pesquisa & Mídia */}
            <div className={styles.linksColumn}>
              <FooterLink href="https://www.researchgate.net/profile/Rodrigo-Dias-49?ev=hdr_xprf" icon={<BookOpen size={16} />} label="ResearchGate" />
              <FooterLink href="https://medium.com/@digonomundo" icon={<BookOpen size={16} />} label="Medium" />
              <FooterLink href="https://music.apple.com/profile/digonomundo" icon={<Music size={16} />} label="Apple Music" />
              <FooterLink href="https://www.youtube.com/@digonomundo" icon={<FaYoutube size={16} />} label="YouTube" />
            </div>

          </div>
        </motion.div>

        {/* Barra Inferior Corporativa / Minimalista */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Rodrigo Dias. {t('footer.designedIn')}
          </p>
          
          <div className={styles.techStack}>
            <span className={styles.techBadge}>Next.js</span>
            <span className={styles.techBadge}>TypeScript</span>
            <span className={styles.techBadge}>CSS Modules</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function FooterLink({ href, icon, label }: FooterLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.linkItem}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <span className={styles.linkLabel}>{label}</span>
    </a>
  );
}