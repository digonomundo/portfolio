'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';
import styles from './ScrollProgress.module.css';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001
  });
  
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  const labelLeft = useTransform(scaleX, (latest) => {
    return `${Math.max(2, Math.min(latest * 100, 98))}%`;
  });

  return (
    <div className={styles.progressWrapper}>
      <motion.div 
        className={styles.progressBar} 
        style={{ scaleX }} 
      />
      <motion.div 
        className={styles.progressLabelWrapper}
        style={{ left: labelLeft }}
      >
        {percent > 0 && (
          <>
            <div className={styles.progressText}>{percent}%</div>
            <div className={styles.progressDot} />
          </>
        )}
      </motion.div>
    </div>
  );
}
