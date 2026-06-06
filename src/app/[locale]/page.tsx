'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/screens/Hero/Hero';
import { LoadingScreen } from '@/screens/LoadingScreen/LoadingScreen';
import styles from './page.module.css';
import { AboutMe } from '@/screens/AboutMe/AboutMe';
import { Footer } from '@/screens/Footer/Footer';
import { Education } from '@/screens/Education/Education';
import { Experience } from '@/screens/Expericence/Experience';
import { Projects } from '@/screens/Projects/Projects';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Impede scroll enquanto carrega
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div 
        className={styles.contentWrapper}
        style={{ 
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? 'none' : 'auto',
          transition: 'opacity 0.6s ease-in'
        }}
      >
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
