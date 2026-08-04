'use client';

import React, { useEffect, useState } from "react";
import { ChevronDown, FileText, Code2, Search, BookOpen, Calculator, Calendar, Library, GraduationCap, Target, Users, Scale, Download, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FooterLinksSection } from "../FooterLinksSection";
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



  // Estados da calculadora
const [p1, setP1] = useState<number | null>(null);
const [p2, setP2] = useState<number | null>(null);
const [s, setS] = useState<number | null>(null);
const [ap, setAP] = useState<number | null>(null);
const [calculated, setCalculated] = useState(false);
const [mp, setMP] = useState(0);
const [needsExam, setNeedsExam] = useState(false);
const [minExamNote, setMinExamNote] = useState(0);

const allFieldsFilled = p1 !== null && p2 !== null && s !== null && ap !== null;

const calculateMP = () => {
  if (!allFieldsFilled) return;
  
  // MP = P1 * 0.3 + P2 * 0.3 + S * 0.2 + AP * 0.2
  const calculatedMP = (p1! * 0.3) + (p2! * 0.3) + (s! * 0.2) + (ap! * 0.2);
  setMP(calculatedMP);
  setCalculated(true);
  
  // Verifica se precisa de exame (MP < 6.0 e MP >= 2.5)
  if (calculatedMP < 6.0 && calculatedMP >= 2.5) {
    setNeedsExam(true);
    // MF = (MP + Exame) / 2 >= 5.0 → Exame >= 10.0 - MP
    setMinExamNote(Math.max(0, 10.0 - calculatedMP));
  } else {
    setNeedsExam(false);
    setMinExamNote(0);
  }
};

// Função para validar e formatar a nota
const handleNoteChange = (
  value: string, 
  setter: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (value === '') {
    setter(null);
    return;
  }
  
  const numValue = Number(value);
  
  // Impede valores negativos
  if (numValue < 0) {
    setter(0);
    return;
  }
  
  // Impede valores acima de 10
  if (numValue > 10) {
    setter(10);
    return;
  }
  
  setter(numValue);
};


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

  const handleModuleKeyDown = (id: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleModule(id);
    }
  };

  if (!mounted) {
    return <div className={`${isDarkMode ? styles.darkMode : styles.lightMode}`} />;
  }
  
  const courseData = t('tutoringtt314.courseData', { returnObjects: true }) as CourseModule[];

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
            {t('tutoringtt314.heroBadge')}
          </div>
          <h1 className={styles.heroTitle}>
            {t('tutoringtt314.heroTitle')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('tutoringtt314.heroSubtitle')}
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}><GraduationCap size={16}/> {t('tutoringtt314.professor')}</span>
            <span className={styles.metaSpacer}>•</span>
            <span className={styles.metaItem}><Code2 size={16}/> {t('tutoringtt314.monitor')}</span>
          </div>
        </motion.div>

        {/* Grid de Informações Acadêmicas */}
        <div className={styles.infoGrid}>
          
        {/* Critérios de Avaliação */}
        <div className={styles.infoCard}>
          <div className={styles.cardWatermark}><Calculator size={80} /></div>
          <h3 className={styles.cardTitle}>
            <Calculator size={20} className={styles.iconBlue} /> {t('tutoringtt314.criteria.title')}
          </h3>
          <div className={styles.formulaBox}>
            {t('tutoringtt314.criteria.formula')}
          </div>
          <ul className={styles.criteriaList}>
            <li><span>{t('tutoringtt314.criteria.p1')}</span> <span className={styles.boldText}>30%</span></li>
            <li><span>{t('tutoringtt314.criteria.p2')}</span> <span className={styles.boldText}>30%</span></li>
            <li><span>{t('tutoringtt314.criteria.s')}</span> <span className={styles.boldText}>20%</span></li>
            <li><span>{t('tutoringtt314.criteria.ap')}</span> <span className={styles.boldText}>20%</span></li>
          </ul>
          <div className={styles.cardNotes}>
            {t('tutoringtt314.criteria.notes')}
          </div>

          {/* Calculadora de Notas */}
          <div className={styles.calculatorSection}>
            <h4 className={styles.calculatorTitle}>
              <Calculator size={16} /> {t('tutoringtt314.calculator.title')}
            </h4>
            <div className={styles.calculatorGrid}>
              <div className={styles.calculatorField}>
                <label htmlFor="p1" className={styles.calculatorLabel}>{t('tutoringtt314.calculator.p1Label')}</label>
                <input 
                  id="p1"
                  type="number" 
                  min="0" 
                  max="10" 
                  step="0.1"
                  placeholder={t('tutoringtt314.calculator.placeholder')}
                  className={styles.calculatorInput}
                  value={p1 !== null ? p1 : ''}
                  onChange={(e) => handleNoteChange(e.target.value, setP1)}
                  onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className={styles.calculatorField}>
                <label htmlFor="p2" className={styles.calculatorLabel}>{t('tutoringtt314.calculator.p2Label')}</label>
                <input 
                  id="p2"
                  type="number" 
                  min="0" 
                  max="10" 
                  step="0.1"
                  placeholder={t('tutoringtt314.calculator.placeholder')}
                  className={styles.calculatorInput}
                  value={p2 !== null ? p2 : ''}
                  onChange={(e) => handleNoteChange(e.target.value, setP2)}
                  onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className={styles.calculatorField}>
                <label htmlFor="s" className={styles.calculatorLabel}>{t('tutoringtt314.calculator.sLabel')}</label>
                <input 
                  id="s"
                  type="number" 
                  min="0" 
                  max="10" 
                  step="0.1"
                  placeholder={t('tutoringtt314.calculator.placeholder')}
                  className={styles.calculatorInput}
                  value={s !== null ? s : ''}
                  onChange={(e) => handleNoteChange(e.target.value, setS)}
                  onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className={styles.calculatorField}>
                <label htmlFor="ap" className={styles.calculatorLabel}>{t('tutoringtt314.calculator.apLabel')}</label>
                <input 
                  id="ap"
                  type="number" 
                  min="0" 
                  max="10" 
                  step="0.1"
                  placeholder={t('tutoringtt314.calculator.placeholder')}
                  className={styles.calculatorInput}
                  value={ap !== null ? ap : ''}
                  onChange={(e) => handleNoteChange(e.target.value, setAP)}
                  onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </div>

            <div className={styles.calculatorResult}>
              {calculated && (
                <div className={`${styles.resultBadge} ${mp >= 6.0 ? styles.resultApproved : mp >= 2.5 ? styles.resultExam : styles.resultFailed}`}>
                  <span className={styles.resultLabel}>{t('tutoringtt314.calculator.resultLabel')}</span>
                  <span className={styles.resultValue}>{mp.toFixed(2)}</span>
                  <span className={styles.resultStatus}>
                    {mp >= 6.0 
                      ? t('tutoringtt314.calculator.approved') 
                      : mp >= 2.5 
                        ? t('tutoringtt314.calculator.exam') 
                        : t('tutoringtt314.calculator.failed')
                    }
                  </span>
                </div>
              )}
              
              {needsExam && (
                <div className={styles.examNote}>
                  <p className={styles.examFormula}>
                    {t('tutoringtt314.calculator.examFormula')}
                  </p>
                  <p className={styles.examRequirement}>
                    {t('tutoringtt314.calculator.examRequirement')} <strong>{minExamNote.toFixed(2)}</strong>
                  </p>
                </div>
              )}
            </div>

            <button 
              onClick={calculateMP} 
              disabled={!allFieldsFilled}
              className={styles.calculatorButton}
              aria-label={t('tutoringtt314.calculator.buttonCalculate')}
            >
              <Calculator size={16} /> {t('tutoringtt314.calculator.buttonCalculate')}
            </button>
          </div>        </div>

          {/* Ementa e Objetivos */}
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>
              <Target size={20} className={styles.iconPurple} /> {t('tutoringtt314.syllabus.title')}
            </h3>
            <p className={styles.cardText}>
              <strong className={styles.boldText}>{t('tutoringtt314.syllabus.ementaLabel')}</strong> {t('tutoringtt314.syllabus.ementaText')}
            </p>
            <p className={styles.cardText}>
              <strong className={styles.boldText}>{t('tutoringtt314.syllabus.objectiveLabel')}</strong> {t('tutoringtt314.syllabus.objectiveText')}
            </p>
            <div className={styles.cardDivider}></div>
            <h4 className={styles.cardSubTitle}>{t('tutoringtt314.syllabus.methodologyTitle')}</h4>
            <p className={styles.cardText}>{t('tutoringtt314.syllabus.methodologyText')}</p>
          </div>

          {/* Competências */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <Users size={20} className={styles.iconGreen} /> {t('tutoringtt314.skills.title')}
            </h3>
            <p className={styles.cardText}>{t('tutoringtt314.skills.text')}</p>
          </div>

          {/* Bibliografia */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <Library size={20} className={styles.iconOrange} /> {t('tutoringtt314.bibliography.title')}
            </h3>
            <div className={styles.bibGrid}>
              <div>
                <h4 className={`${styles.bibCategoryTitle} ${styles.textBlue}`}>{t('tutoringtt314.bibliography.basicTitle')}</h4>
                <ul className={styles.bibList}>
                  <li>DEITEL, H.; DEITEL, P. <em>Java: Como Programar</em>. 10ª ed. Pearson, 2016.</li>
                  <li>ORACLE. <em>The Java Tutorials</em>. Disponível em: <a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/tutorial/</a></li>
                </ul>
              </div>
              <div>
                <h4 className={`${styles.bibCategoryTitle} ${styles.textBlue}`}>{t('tutoringtt314.bibliography.complementaryTitle')}</h4>
                <ul className={styles.bibList}>
                  <li>BLOCH, J. <em>Java Efetivo</em>. 3ª ed. Alta Books, 2019.</li>
                  <li>LARMAN, C. <em>Utilizando UML e Padrões: Uma Introdução à Análise e ao Projeto Orientados a Objetos</em>. 3ª ed. Bookman, 2000.</li>
                  <li>ANICHE, M. <em>Orientação a Objetos e SOLID para Ninjas: Projetando Classes Flexíveis</em>. Casa do Código, 2015.</li>
                  <li>MARTIN, R. C. <em>Código Limpo: Habilidades Práticas do Agile Software</em>. Alta Books, 2009.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Observações de Faltas */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard} ${styles.alertCard}`}>
            <div className={styles.alertHeader}>
              <Scale size={20} /> {t('tutoringtt314.absences.title')}
            </div>
            <div className={styles.alertContent}>
              <p>{t('tutoringtt314.absences.subtitle')}</p>
              <ul className={styles.alertList}>
                <li><span className={styles.boldText}>I.</span> {t('tutoringtt314.absences.item1')}</li>
                <li><span className={styles.boldText}>II.</span> {t('tutoringtt314.absences.item2')}</li>
                <li><span className={styles.boldText}>III.</span> {t('tutoringtt314.absences.item3')}</li>
                <li><span className={styles.boldText}>IV.</span> {t('tutoringtt314.absences.item4')}</li>
                <li className={styles.alertFullRow}><span className={styles.boldText}>V.</span> {t('tutoringtt314.absences.item5')}</li>
                <li><span className={styles.boldText}>VI.</span> {t('tutoringtt314.absences.item6')}</li>
              </ul>
              <p className={styles.alertFooter}>
                {t('tutoringtt314.absences.note')}
              </p>
            </div>
          </div>

          {/* Suporte / Contato */}
          <div className={`${styles.infoCard} ${styles.fullWidthCard}`}>
            <h3 className={styles.cardTitle}>
              <GraduationCap size={20} className={styles.iconGreen} /> {t('tutoringtt314.contact.title')}
            </h3>
            <div className={styles.contactContainer}>
              {t('tutoringtt314.contact.text')} <strong>r184789@dac.unicamp.br</strong> {t('tutoringtt314.contact.subject')}
            </div>
          </div>

        </div>

        {/* Campo de Busca */}
        <div className={styles.searchSection}>
          <div className={styles.searchIcon}><Search size={20} /></div>
          <input
            type="text"
            placeholder={t('tutoringtt314.searchPlaceholder')}
            aria-label="Search course modules and lessons"
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
                    onKeyDown={(e) => handleModuleKeyDown(module.id, e)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedModules.includes(module.id)}
                    aria-controls={`module-content-${module.id}`}
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
                          id={`module-content-${module.id}`}
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
                              <div className={styles.emptyLessons}>{t('tutoringtt314.emptyLessons')}</div>
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
                {t('tutoringtt314.noResults')} &quot;{searchTerm}&quot;
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
                {t('tutoringtt314.footer.builtWith')} <span className={styles.heart}>❤️</span> {t('tutoringtt314.footer.purpose')}
              </h3>
              <p className={styles.footerDisclaimer}>
                {t('tutoringtt314.footer.disclaimer')}
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