'use client';

import { useState } from 'react';
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

  return (
    <>
      {loading ? ( 
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className={styles.contentWrapper}>
          <Hero />
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
          <Footer />
          
        </div>
      )}
    </>
  );
}
