'use client';

import React, { useEffect, useState } from "react";
import { ChevronDown, FileText, Code2, Search, BookOpen, Calculator, Calendar, Library, GraduationCap, Target, Users, Scale, Download, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FooterLinksSection } from "./FooterLinksSection";
import styles from "./page.module.css";
import { useTheme } from "@/theme/ThemeProvider";

interface Lesson {
  title: string;
  type: string;
  document?: string;
}

interface CourseModule {
  id: number;
  title: string;
  date: string;
  type: string;
  description: string;
  highlight?: boolean;
  lessons: Lesson[];
}

export default function TutoringPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const isDarkMode = mounted ? theme === 'dark' : false;

  const toggleModule = (id: number) => {
    setExpandedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  if (!mounted) {
    return <div className={`${isDarkMode ? styles.darkMode : styles.lightMode}`} />;
  }
  
  const courseData = t('tutoring.courseData', { returnObjects: true }) as CourseModule[];

  const filteredModules = Array.isArray(courseData) ? courseData.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.lessons.some(lesson => lesson.title.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  return (
    <div className={` ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.container}>
        
        {/* Header da Monitoria */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className={styles.heroHeader}
        >
          <div className={styles.heroBadge}>
            {t('tutoring.heroBadge')}
          </div>
          <h1 className={styles.heroTitle}>
            {t('tutoring.heroTitle')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('tutoring.heroSubtitle')}
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}><GraduationCap size={16}/> {t('tutoring.professor')}</span>
            <span className={styles.metaSpacer}>•</span>
            <span className={styles.metaItem}><Code2 size={16}/> {t('tutoring.monitor')}</span>
          </div>
        </motion.div>

        {/* Grid de Informações Acadêmicas */}
        <div className={styles.infoGrid}>
          
          {/* Critérios de Avaliação */}
          <div className={styles.infoCard}>
            <div className={styles.cardWatermark}><Calculator size={80} /></div>
            <h3 className={styles.cardTitle}>
              <Calculator size={20} className={styles.iconBlue} /> {t('tutoring.criteria.title')}
            </h3>
            <div className={styles.formulaBox}>
              {t('tutoring.criteria.formula')}
            </div>
            <ul className={styles.criteriaList}>
              <li><span>{t('tutoring.criteria.p1')}</span> <span className={styles.boldText}>33%</span></li>
              <li><span>{t('tutoring.criteria.p2')}</span> <span className={styles.boldText}>33%</span></li>
              <li><span>{t('tutoring.criteria.ml')}</span> <span className={styles.boldText}>33%</span></li>
            </ul>
            <div className={styles.cardNotes}>
              {t('tutoring.criteria.notes')}
            </div>
          </div>

          {/* Ementa e Objetivos */}
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>
              <Target size={20} className={styles.iconPurple} /> {t('tutoring.syllabus.title')}
            </h3>
            <p className={styles.cardText}>
              <strong className={styles.boldText}>{t('tutoring.syllabus.ementaLabel')}</strong> {t('tutoring.syllabus.ementaText')}
            </p>
            <p className={styles.cardText}>
              <strong className={styles.boldText}>{t('tutoring.syllabus.objectiveLabel')}</strong> {t('tutoring.syllabus.objectiveText')}
            </p>
            <div className={styles.cardDivider}></div>
            <h4 className={styles.cardSubTitle}>{t('tutoring.syllabus.methodologyTitle')}</h4>
            <p className={styles.cardText}>{t('tutoring.syllabus.methodologyText')}</p>
          </div>

          {/* Competências */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <Users size={20} className={styles.iconGreen} /> {t('tutoring.skills.title')}
            </h3>
            <p className={styles.cardText}>{t('tutoring.skills.text')}</p>
          </div>

          {/* Bibliografia */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <Library size={20} className={styles.iconOrange} /> {t('tutoring.bibliography.title')}
            </h3>
            <div className={styles.bibGrid}>
              <div>
                <h4 className={`${styles.bibCategoryTitle} ${styles.textBlue}`}>{t('tutoring.bibliography.basicTitle')}</h4>
                <ul className={styles.bibList}>
                  <li>SOUZA, M. A. F. et al. <em>Algoritmos e Lógica de Programação</em>. 3ª Ed. Cengage, 2019.</li>
                  <li>PUGA, S., RISSETTI, G. <em>Lógica de Programação e Estrutura de Dados</em>. 3ª Ed. Prentice Hall, 2016.</li>
                  <li>FORBELLONE, A. L. V. <em>Lógica de Programação</em>. 3ª Ed. Pearson Prentice Hall, 2005.</li>
                  <li>ASCENCIO, A. F. G. <em>Fundamentos da Programação de Computadores</em>. Pearson, 2012.</li>
                  <li>DEITEL, H. M., DEITEL, P. J. <em>C: Como Programar</em>. LTC, 2011.</li>
                  <li>MIZRAHI, V. V. <em>Treinamento em Linguagem C</em>. 2ª Ed. Pearson, 2008.</li>
                </ul>
              </div>
              <div>
                <h4 className={`${styles.bibCategoryTitle} ${styles.textBlue}`}>{t('tutoring.bibliography.complementaryTitle')}</h4>
                <ul className={styles.bibList}>
                  <li>CELES, W. et al. <em>Introdução a Estrutura de Dados com Técnicas de Programação em C</em>. Campus, 2016.</li>
                  <li>VAREJÃO, F. M. <em>Introdução à Programação: Uma nova abordagem usando C</em>. Campus, 2015.</li>
                  <li>SCHILDT, H. <em>C Completo e Total</em>. 3ª Ed. Makron Books, 1997.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Observações de Faltas */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard} ${styles.alertCard}`}>
            <div className={styles.alertHeader}>
              <Scale size={20} /> {t('tutoring.absences.title')}
            </div>
            <div className={styles.alertContent}>
              <p>{t('tutoring.absences.subtitle')}</p>
              <ul className={styles.alertList}>
                <li><span className={styles.boldText}>I.</span> {t('tutoring.absences.item1')}</li>
                <li><span className={styles.boldText}>II.</span> {t('tutoring.absences.item2')}</li>
                <li><span className={styles.boldText}>III.</span> {t('tutoring.absences.item3')}</li>
                <li><span className={styles.boldText}>IV.</span> {t('tutoring.absences.item4')}</li>
                <li className={styles.alertFullRow}><span className={styles.boldText}>V.</span> {t('tutoring.absences.item5')}</li>
                <li><span className={styles.boldText}>VI.</span> {t('tutoring.absences.item6')}</li>
              </ul>
              <p className={styles.alertFooter}>
                {t('tutoring.absences.note')}
              </p>
            </div>
          </div>

          {/* Suporte / Contato */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <GraduationCap size={20} className={styles.iconGreen} /> {t('tutoring.contact.title')}
            </h3>
            <div className={styles.contactContainer}>
              {t('tutoring.contact.text')} <strong>r184789@dac.unicamp.br</strong> {t('tutoring.contact.subject')}
            </div>
          </div>

        </div>

        {/* Campo de Busca */}
        <div className={styles.searchSection}>
          <div className={styles.searchIcon}><Search size={20} /></div>
          <input 
            type="text" 
            placeholder={t('tutoring.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Cronograma / Timeline */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineStack}>
            {filteredModules.length > 0 ? (
              filteredModules.map((module, index) => (
                <motion.div 
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.03 }}
                  className={styles.timelineItem}
                >
                  <div className={`${styles.timelineDot} ${module.highlight ? styles.dotHighlight : expandedModules.includes(module.id) ? styles.dotActive : ''}`}>
                    {module.highlight ? <Calendar size={16}/> : <BookOpen size={16} />}
                  </div>

                  <div 
                    className={`${styles.moduleCard} ${module.highlight ? styles.cardHighlight : ''} ${expandedModules.includes(module.id) && !module.highlight ? styles.moduleCardExpanded : ''}`}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className={styles.moduleHeader}>
                      <div>
                        <div className={`${styles.moduleMeta} ${module.highlight ? styles.metaHighlight : styles.textBlue}`}>
                          {module.date} • {module.type}
                        </div>
                        <h3 className={styles.moduleTitle}>{module.title}</h3>
                        <p className={styles.moduleDescription}>{module.description}</p>
                      </div>
                      <div className={`${styles.chevronWrapper} ${expandedModules.includes(module.id) ? styles.rotated : ''}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedModules.includes(module.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={styles.moduleDropdown}
                        >
                          <div className={styles.lessonsContainer}>
                            {module.lessons.length > 0 ? module.lessons.map((lesson, idx) => {
                              const content = (
                                <div className={styles.lessonRow}>
                                  <div className={styles.lessonIconBox}>
                                    {lesson.type === 'video' && <PlayCircle size={18} />}
                                    {lesson.type === 'code' && <Code2 size={18} />}
                                    {lesson.type === 'doc' && <FileText size={18} />}
                                    {lesson.type === 'slide' && <BookOpen size={18} />}
                                  </div>
                                  <div className={styles.lessonInfo}>
                                    <p className={styles.lessonTitle}>{lesson.title}</p>
                                    <p className={styles.lessonTypeLabel}>
                                      {lesson.type === 'video' ? 'Videoaula' : lesson.type === 'code' ? 'Prática' : 'Material'}
                                    </p>
                                  </div>
                                  {lesson.document && <Download size={16} className={styles.downloadIcon} />}
                                </div>
                              );

                              return lesson.document ? (
                                <a 
                                  key={idx} 
                                  href={`/${lesson.document}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={styles.lessonLink}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {content}
                                </a>
                              ) : (
                                <div key={idx} className={styles.lessonStaticBlock}>{content}</div>
                              );
                            }) : (
                              <div className={styles.emptyLessons}>{t('tutoring.emptyLessons')}</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className={styles.noResults}>
                {t('tutoring.noResults')} &quot;{searchTerm}&quot;
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrandColumn}>
              <h3 className={styles.footerBrandTitle}>
                {t('tutoring.footer.builtWith')} <span className={styles.heart}>❤️</span> {t('tutoring.footer.purpose')}
              </h3>
              <p className={styles.footerDisclaimer}>
                {t('tutoring.footer.disclaimer')}
              </p>
            </div>
            <div className={styles.footerLinksGrid}>
              <FooterLinksSection />
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Rodrigo Dias. Designed in Brazil 🇧🇷</p>
            <div className={styles.techBadges}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>CSS Modules</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}