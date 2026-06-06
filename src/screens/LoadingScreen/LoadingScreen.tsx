'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setVisible(false);
          setTimeout(onComplete, 800);
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
      {visible && (
        <motion.div 
          className={styles.loadingContainer}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
      )}
    </AnimatePresence>
  );
}
