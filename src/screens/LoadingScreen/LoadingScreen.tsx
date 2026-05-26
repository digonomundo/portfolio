'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Safety exit: force loading complete after 4s if anything hangs
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.loadingContainer}
        exit={{ y: '-100vh', opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div 
          className={styles.counter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Math.min(count, 100)}%
        </motion.div>
        <div className={styles.brand}>&lt;/&gt; RODRIGO DIAS</div>
      </motion.div>
    </AnimatePresence>
  );
}
