'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'; 
import { useTranslation } from 'react-i18next';
import { Play, Pause, BookOpen, Sparkles } from 'lucide-react';
import styles from './page.module.css';
import { Footer } from '@/screens/Footer/Footer';

// Importação das Imagens
import PhotoChild1 from '@/assets/images/EuCriPri.jpg';
import PhotoChild2 from '@/assets/images/EuCriancaBone.jpg';
import PhotoChild3 from '@/assets/images/EuCriança.jpeg';
import PhotoChild4 from '@/assets/images/EuCriancaCavalo1.jpg';
import PhotoChild5 from '@/assets/images/EuCriancaCavalo2.jpg';
import PhotoChild6 from '@/assets/images/PrimMed.jpg';
import PhotoChild7 from '@/assets/images/EuQuintoAno.jpeg';
import PhotoFut from '@/assets/images/FutPedreira.png';
import PhotoEuTV from '@/assets/images/EuNaTV.jpg';
import PhotoGGE from '@/assets/images/EuModeloGGE.jpg';
import PhotoMartial1 from '@/assets/images/KungFu.png';
import PhotoMartial2 from '@/assets/images/MuayThaiGuaraci.jpeg';
import PhotoMartial3 from '@/assets/images/CinturaoJiu.jpeg';
import PhotoMateria from '@/assets/images/Materia.jpeg';
import PhotoParty from '@/assets/images/FestaSurpresa.jpeg';
import PhotoFormatura from '@/assets/images/Formatura9Ano.jpeg';
import PhotoEtec from '@/assets/images/FachadaEtec.jpeg';
import PhotoCodesEtec from '@/assets/images/CodigosEtec.jpeg';
import PhotoEmbarcadosEtec from '@/assets/images/EtecEmbarcados.png';
import PhotoProvaEtec from '@/assets/images/PrimProva.jpeg';
import PhotoBrutoHacka from '@/assets/images/BrutoHackaFoto1.jpeg';
import PhotoBrutoHacka2 from '@/assets/images/BrutoHackaPremiacao.jpg';
import PhotoCoral from '@/assets/images/Coral.jpeg';
import PhotoEuUtf from '@/assets/images/AceptUtfpr.jpeg';
import PhotoIdeathonPresentation from '@/assets/images/presentation.jpg';
import PhotoIdeathonAward from '@/assets/images/IedathonAward.jpg';

export default function AboutContent() {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

    useEffect(() => {
        audioRef.current = new Audio('/audio/RememberYou.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.35;
        return () => audioRef.current?.pause();
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
    };

    return (
        <main>
            <div className={styles.mainContainer}>

                {/* Acessibilidade: aria-label traduzido para leitores de tela internacionais */}
                <div 
                    className={styles.audioDock} 
                    onClick={toggleAudio} 
                    role="button" 
                    tabIndex={0} 
                    aria-label={t('aboutPage.audio.ariaLabel', 'Controlar música de fundo')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleAudio()}
                >
                    <div className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}>
                        {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ transform: 'translateX(1px)' }} />}
                    </div>
                    <div className={styles.audioInfo}>
                        <span className={styles.audioText}>
                            {isPlaying ? t('aboutPage.audio.playing') : t('aboutPage.audio.paused')}
                        </span>
                        {isPlaying && (
                            <div className={styles.waveContainer}>
                                <span className={styles.wave}></span>
                                <span className={styles.wave}></span>
                                <span className={styles.wave}></span>
                            </div>
                        )}
                    </div>
                </div>

                {/* SEÇÃO HERO */}
                <motion.section className={styles.hero} style={{ y: yHero, opacity: opacityHero }}>
                    <div className={styles.vintageTopLayer}>
                        <div className={`${styles.retroFrame} ${styles.topPosLeft}`}>
                            <Image 
                                src={PhotoChild5} 
                                alt={t('aboutPage.chapters.origins.title')} 
                                fill 
                                priority 
                                sizes="150px" 
                                className={styles.imgCover} 
                            />
                        </div>
                        <div className={`${styles.retroFrame} ${styles.topPosRight}`}>
                            <Image 
                                src={PhotoChild2} 
                                alt={t('aboutPage.chapters.math.title')} 
                                fill 
                                priority 
                                sizes="150px" 
                                className={styles.imgCover} 
                            />
                        </div>
                    </div>

                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>{t('aboutPage.hero.badge')}</span>
                        <h1 className={styles.heroTitle}>{t('aboutPage.hero.title')}</h1>
                        <p className={styles.heroSubtitle}>{t('aboutPage.hero.subtitle')}</p>
                    </div>

                    <div className={styles.heroImages}>
                        <div className={`${styles.heroImgWrapper} ${styles.imgPos1}`}>
                            <Image src={PhotoChild1} alt={t('aboutPage.chapters.origins.title')} fill priority sizes="(max-width: 768px) 50vw, 300px" className={styles.imgCover} />
                        </div>
                        <div className={`${styles.heroImgWrapper} ${styles.imgPos2}`}>
                            <Image src={PhotoChild3} alt={t('aboutPage.chapters.firstHacka.title')} fill priority sizes="(max-width: 768px) 80vw, 500px" className={styles.imgCover} />
                        </div>
                        <div className={`${styles.heroImgWrapper} ${styles.imgPos3}`}>
                            <Image src={PhotoChild6} alt={t('aboutPage.chapters.martial1.title')} fill priority sizes="(max-width: 768px) 50vw, 300px" className={styles.imgCover} />
                        </div>
                    </div>
                </motion.section>

                <div className={styles.contentWrapper}>
                    {/* Cap 1 - Origens */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.origins.num')}</span>
                                <h2>{t('aboutPage.chapters.origins.title')}</h2>
                                <p>{t('aboutPage.chapters.origins.p1')}</p>
                                <p className={styles.highlightTextCard}>{t('aboutPage.chapters.origins.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaGrid}>
                                <div className={styles.mediaFrameSquare}>
                                    <Image src={PhotoChild1} alt={t('aboutPage.chapters.origins.title')} fill sizes="(max-width: 768px) 100vw, 400px" className={styles.imgCover} />
                                </div>
                                <div className={styles.mediaFrameVerticalVideo}>
                                    <Image src={PhotoChild4} alt={t('aboutPage.chapters.origins.title')} fill sizes="(max-width: 768px) 100vw, 400px" className={styles.imgCover} />
                                    <div className={styles.videoTextTag}><Sparkles size={12} /> {t('aboutPage.labels.liveChildhood', 'Infância Viva')}</div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 2 - Matemática */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.math.num')}</span>
                                <h2>{t('aboutPage.chapters.math.title')}</h2>
                                <p>{t('aboutPage.chapters.math.p1')}</p>
                                <p className={styles.highlightTextCard}>{t('aboutPage.chapters.math.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaGrid}>
                                <div className={styles.mediaFrameVerticalVideo}>
                                    <Image src={PhotoChild7} alt={t('aboutPage.chapters.math.title')} fill sizes="(max-width: 768px) 100vw, 400px" className={styles.imgCover} />
                                    <div className={styles.videoTextTag}><Sparkles size={12} /> {t('aboutPage.labels.liveChildhood', 'Infância Viva')}</div>
                                </div>
                                <div className={styles.mediaFrameSquare}>
                                    <Image src={PhotoChild6} alt={t('aboutPage.chapters.math.title')} fill sizes="(max-width: 768px) 100vw, 400px" className={styles.imgCover} />
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 3 - Futebol */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.soccer.num')}</span>
                                <h2>{t('aboutPage.chapters.soccer.title')}</h2>
                                <p>{t('aboutPage.chapters.soccer.text.desc1')}</p>
                                <div className={styles.quoteBoxLeftBorder}>
                                    &quot;{t('aboutPage.chapters.soccer.text.desc2')}&quot;
                                </div>
                            </div>
                            <div className={styles.chapterMediaSplit}>
                                <div className={styles.mediaFrameSquareSubtitle}>
                                    <div className={styles.teachingImageWrapper}>
                                        <Image src={PhotoFut} alt={t('aboutPage.chapters.soccer.text.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    </div>
                                    <p className={styles.underImageText}>{t('aboutPage.chapters.soccer.text.descImg')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 4 - Kung Fu */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.martial1.num')}</span>
                                <h2>{t('aboutPage.chapters.martial1.title')}</h2>
                                <p>{t('aboutPage.chapters.martial1.p1')}</p>
                                <p>{t('aboutPage.chapters.martial1.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoMartial1} alt={t('aboutPage.chapters.martial1.title')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaTextOverlayBottom}>
                                        <BookOpen size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 5 - Muay Thai */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoMartial2} alt={t('aboutPage.chapters.martial2.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaTextOverlayBottom}>
                                        <BookOpen size={16} />
                                        <span>{t('aboutPage.chapters.martial2.descImg')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.martial2.num')}</span>
                                <h2>{t('aboutPage.chapters.martial2.title')}</h2>
                                <p>{t('aboutPage.chapters.martial2.p1')}</p>
                                <p>{t('aboutPage.chapters.martial2.p2')}</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 6 - Festa Surpresa */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.surprise.num')}</span>
                                <h2>{t('aboutPage.chapters.surprise.title')}</h2>
                                <p>{t('aboutPage.chapters.surprise.p1')}</p>
                                <p>{t('aboutPage.chapters.surprise.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoParty} alt={t('aboutPage.chapters.surprise.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaTextOverlayBottom}>
                                        <BookOpen size={16} />
                                        <span>{t('aboutPage.chapters.surprise.descImg')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 7 - Formatura */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoFormatura} alt={t('aboutPage.chapters.formatura1.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaTextOverlayBottom}>
                                        <BookOpen size={16} />
                                        <span>{t('aboutPage.chapters.formatura1.descImg')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.formatura1.num')}</span>
                                <h2>{t('aboutPage.chapters.formatura1.title')}</h2>
                                <p>{t('aboutPage.chapters.formatura1.p1')}</p>
                                <p>{t('aboutPage.chapters.formatura1.p2')}</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 8 - Bento Grid ETEC */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapterBento}>
                        <div className={styles.bentoHeader}>
                            <span className={styles.chapterNum}>{t('aboutPage.chapters.etec1.num')}</span>
                            <h2>{t('aboutPage.chapters.etec1.title')}</h2>
                        </div>

                        <div className={styles.bentoGrid}>
                            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                                <Image src={PhotoEmbarcadosEtec} alt={t('aboutPage.chapters.etec1.diary.title')} fill sizes="(max-width: 768px) 100vw, 60vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <h3>{t('aboutPage.chapters.etec1.diary.title')}</h3>
                                    <p>{t('aboutPage.chapters.etec1.diary.desc')}</p>
                                </div>
                            </div>

                            <div className={`${styles.bentoCard} ${styles.bentoTall}`}>
                                <Image src={PhotoEtec} alt={t('aboutPage.chapters.etec1.first.title')} fill sizes="(max-width: 768px) 100vw, 40vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <h3>{t('aboutPage.chapters.etec1.first.title')}</h3>
                                    <p>{t('aboutPage.chapters.etec1.first.desc')}</p>
                                </div>
                            </div>
                            <div className={`${styles.bentoCard} ${styles.bentoTall}`}>
                                <Image src={PhotoCodesEtec} alt={t('aboutPage.chapters.etec1.codes.title')} fill sizes="(max-width: 768px) 100vw, 40vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <h3>{t('aboutPage.chapters.etec1.codes.title')}</h3>
                                    <p>{t('aboutPage.chapters.etec1.codes.desc')}</p>
                                </div>
                            </div>

                            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                                <Image src={PhotoProvaEtec} alt={t('aboutPage.chapters.etec1.tests.title')} fill sizes="(max-width: 768px) 100vw, 60vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <h3>{t('aboutPage.chapters.etec1.tests.title')}</h3>
                                    <p>{t('aboutPage.chapters.etec1.tests.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 9 - Coral */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.coral.num')}</span>
                                <h2>{t('aboutPage.chapters.coral.title')}</h2>
                                <p>{t('aboutPage.chapters.coral.music.desc1')}</p>
                                <div className={styles.quoteBoxLeftBorder}>
                                    &quot;{t('aboutPage.chapters.coral.music.desc2')}&quot;
                                </div>
                            </div>
                            <div className={styles.chapterMediaSplit}>
                                <div className={styles.mediaFrameSquareSubtitle}>
                                    <div className={styles.teachingImageWrapper}>
                                        <Image src={PhotoCoral} alt={t('aboutPage.chapters.coral.music.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    </div>
                                    <p className={styles.underImageText}>{t('aboutPage.chapters.coral.music.descImg')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 10 - Jiu Jitsu */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.martial3.num')}</span>
                                <h2>{t('aboutPage.chapters.martial3.title')}</h2>
                                <p>{t('aboutPage.chapters.martial3.p1')}</p>
                                <p>{t('aboutPage.chapters.martial3.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoMartial3} alt={t('aboutPage.chapters.martial3.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaTextOverlayBottom}></div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 11 - Hackathon Bruto */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterMediaSplit}>
                                <div className={styles.mediaFrameCinematic}>
                                    <Image src={PhotoBrutoHacka2} alt={t('aboutPage.chapters.firstHacka.text.descImg2')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaCardFloatingTag}>{t('aboutPage.chapters.firstHacka.text.descImg2')}</div>
                                </div>
                                <div className={styles.mediaFrameSquareSubtitle}>
                                    <div className={styles.teachingImageWrapper}>
                                        <Image src={PhotoBrutoHacka} alt={t('aboutPage.chapters.firstHacka.text.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    </div>
                                    <p className={styles.underImageText}>{t('aboutPage.chapters.firstHacka.text.desc1')}</p>
                                </div>
                            </div>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.firstHacka.num')}</span>
                                <h2>{t('aboutPage.chapters.firstHacka.title')}</h2>
                                <p>{t('aboutPage.chapters.firstHacka.text.desc2')}</p>
                                <div className={styles.quoteBoxLeftBorder}>
                                    &quot;{t('aboutPage.chapters.firstHacka.text.descImg')}&quot;
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 12 - Bento Grid Mídia */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapterBento}>
                        <div className={styles.bentoHeader}>
                            <span className={styles.chapterNum}>{t('aboutPage.chapters.diary.num')}</span>
                            <h2>{t('aboutPage.chapters.diary.title')}</h2>
                        </div>

                        <div className={styles.bentoGrid}>
                            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                                <Image src={PhotoMateria} alt={t('aboutPage.chapters.diary.diary.title')} fill sizes="(max-width: 768px) 100vw, 60vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <div className={styles.bentoBadgeTag}>{t('aboutPage.labels.mediaHighlight', 'Destaque na Mídia')}</div>
                                    <h3>{t('aboutPage.chapters.diary.diary.title')}</h3>
                                    <p>{t('aboutPage.chapters.diary.diary.desc')}</p>
                                </div>
                            </div>

                            <div className={`${styles.bentoCard} ${styles.bentoTall}`}>
                                <Image src={PhotoGGE} alt={t('aboutPage.chapters.diary.teach.title')} fill sizes="(max-width: 768px) 100vw, 40vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <h3>{t('aboutPage.chapters.diary.teach.title')}</h3>
                                    <p>{t('aboutPage.chapters.diary.teach.desc')}</p>
                                </div>
                            </div>

                            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                                <Image src={PhotoEuTV} alt={t('aboutPage.chapters.diary.tv.title')} fill sizes="(max-width: 768px) 100vw, 60vw" className={styles.bentoBg} />
                                <div className={styles.bentoOverlayHighContrast}>
                                    <div className={styles.bentoBadgeTag}>{t('aboutPage.labels.mediaHighlight', 'Destaque na Mídia')}</div>
                                    <h3>{t('aboutPage.chapters.diary.tv.title')}</h3>
                                    <p>{t('aboutPage.chapters.diary.tv.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 13 - UTFPR */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={`${styles.chapterLayout} ${styles.reverse}`}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.utfpr.num')}</span>
                                <h2>{t('aboutPage.chapters.utfpr.title')}</h2>
                                <p>{t('aboutPage.chapters.utfpr.p1')}</p>
                                <p>{t('aboutPage.chapters.utfpr.p2')}</p>
                            </div>
                            <div className={styles.chapterMediaSingle}>
                                <div className={styles.mediaFramePortrait}>
                                    <Image src={PhotoEuUtf} alt={t('aboutPage.chapters.utfpr.title')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Cap 14 - Ideathon */}
                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={styles.chapter}>
                        <div className={styles.chapterLayout}>
                            <div className={styles.chapterText}>
                                <span className={styles.chapterNum}>{t('aboutPage.chapters.ideathon.num')}</span>
                                <h2>{t('aboutPage.chapters.ideathon.title')}</h2>
                                <p>{t('aboutPage.chapters.ideathon.text.desc1')}</p>
                                <div className={styles.quoteBoxLeftBorder}>
                                    &quot;{t('aboutPage.chapters.ideathon.text.desc2')}&quot;
                                </div>
                            </div>
                            <div className={styles.chapterMediaSplit}>
                                <div className={styles.mediaFrameCinematic}>
                                    <Image src={PhotoIdeathonPresentation} alt={t('aboutPage.chapters.ideathon.text.descImg2')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    <div className={styles.mediaCardFloatingTag}>{t('aboutPage.chapters.ideathon.text.descImg2')}</div>
                                </div>
                                <div className={styles.mediaFrameSquareSubtitle}>
                                    <div className={styles.teachingImageWrapper}>
                                        <Image src={PhotoIdeathonAward} alt={t('aboutPage.chapters.ideathon.text.descImg')} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.imgCover} />
                                    </div>
                                    <p className={styles.underImageText}>{t('aboutPage.chapters.ideathon.text.descImg')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </main>
    );
}