'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Award, Sparkles, Code, Smartphone, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from './Projects.module.css';

// Mantendo os imports corretos que você ajustou localmente
import MockImgMeuTreino from '@/assets/images/meuTreino.png'; 
import MockImgInovaChat from '@/assets/images/inovaChat.svg';
import MockImgBike from '@/assets/images/bicicletaSa.png';
import MockImgSolucaoJr from '@/assets/images/solucaojr.svg';
import MockImgTetris from '@/assets/images/tetrisej.svg';

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  badge?: string;
  icon: React.ReactNode;
  imageSrc: StaticImageData;
}

const cardFadeInUp = {
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

export function Projects() {
  const { t } = useTranslation();

  const projectList: ProjectItem[] = [
    {
      id: 'solucao-jr',
      category: t('projects.solucaoJr.category'),
      title: t('projects.solucaoJr.title'),
      description: t('projects.solucaoJr.desc'),
      tags: ['WordPress', 'Elementor', 'React.js'],
      link: 'https://solucaojr.com',
      icon: <Globe size={16} />,
      imageSrc: MockImgSolucaoJr
    },
    {
      id: 'tetris-ej',
      category: t('projects.tetrisEj.category'),
      title: t('projects.tetrisEj.title'),
      description: t('projects.tetrisEj.desc'),
      tags: ['WIX', 'Figma'],
      link: 'https://www.tetrisej.com',
      icon: <Code size={16} />,
      imageSrc: MockImgTetris
    },
    {
      id: 'bike-autonoma',
      category: t('projects.bike.category'),
      title: t('projects.bike.title'),
      description: t('projects.bike.desc'),
      tags: ['C++', 'Bluetooth', 'ESP-NOW', 'Jetson Nano'],
      link: 'https://bicicletaft.vercel.app',
      icon: <Cpu size={16} />,
      imageSrc: MockImgBike
    },    
    {
      id: 'inova-chat',
      category: t('projects.inovaChat.category'),
      title: t('projects.inovaChat.title'),
      description: t('projects.inovaChat.desc'),
      tags: ['JavaScript', 'HTML', 'CSS', 'OpenAI API'],
      link: '#',
      badge: t('projects.inovaChat.badge'),
      icon: <Sparkles size={16} />,
      imageSrc: MockImgInovaChat
    },
    {
      id: 'meu-treino',
      category: t('projects.meuTreino.category'),
      title: t('projects.meuTreino.title'),
      description: t('projects.meuTreino.desc'),
      tags: ['Kotlin', 'XML', 'Firestore', 'Firebase Auth'],
      link: 'https://github.com/digonomundo/MeuTreino-TCC',
      icon: <Smartphone size={16} />,
      imageSrc: MockImgMeuTreino
    }
  ];

  return (
    <section id="projects" className={styles.sectionContainer} aria-labelledby="projects-title">
      <div className={styles.contentWrapper}>
        
        {/* Cabeçalho de Seção Minimalista e Premium */}
        <motion.div 
          className={styles.headerRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.sectionIndex}>{t('projects.index')}</span>
          <div className={styles.titleMeta}>
            <h2 id="projects-title" className={styles.sectionTitle}>
              {t('projects.title')}
            </h2>
            <p className={styles.sectionSubtitle}>
              {t('projects.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Grid Permanente com Exibição de Alto Impacto */}
        <motion.div 
          className={styles.projectsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {projectList.map((project) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCard}
              variants={cardFadeInUp}
            >
              
              {/* CONTAINER DA IMAGEM: Foco da interação de Hover com Link Embutido */}
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.imageInteractiveWrapper}
                aria-label={`${t('projects.viewProject')} ${project.title}`}
              >
                <div className={styles.imageAspectRatioBox}>
                  <Image 
                    src={project.imageSrc} 
                    alt={`Preview do projeto ${project.title}`}
                    className={styles.projectImage}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTYxNjE2Ii8+PC9zdmc+"
                  />
                  
                  {/* OVERLAY FLUIDO: Aparece suavemente no Hover */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.overlayGlassButton}>
                      <span>{t('projects.ctaHover')}</span>
                      <ArrowUpRight size={16} className={styles.overlayIcon} />
                    </div>
                  </div>
                </div>
              </a>

              {/* CONTEÚDO DETALHADO: Totalmente legível e desobstruído */}
              <div className={styles.projectDetails}>
                
                <div className={styles.cardHeaderRow}>
                  <div className={styles.categoryBadge}>
                    <span className={styles.iconBox}>{project.icon}</span>
                    <span className={styles.categoryText}>{project.category}</span>
                  </div>
                  
                  {project.badge && (
                    <span className={styles.awardBadge}>
                      <Award size={12} className={styles.badgeIcon} />
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className={styles.titleTitleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>
                
                {/* Rodapé do card: Tags técnicas e Link Direto redundante de Acessibilidade */}
                <div className={styles.cardFooter}>
                  <div className={styles.techStack}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className={styles.textLinkCta}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`${t('projects.viewProject')} ${project.title}`}
                  >
                    <span className={styles.linkText}>{t('projects.ctaText')}</span>
                    <ExternalLink size={14} className={styles.textLinkIcon} />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}