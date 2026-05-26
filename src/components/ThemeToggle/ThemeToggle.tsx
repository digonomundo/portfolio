'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme/ThemeProvider';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  
  useEffect(() => {

    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={styles.toggle}
        aria-label={t('navbar.themeToggle')}
        title={t('navbar.themeToggle')}
      >
        <span style={{ width: 16, height: 16, display: 'inline-block' }} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={t('navbar.themeToggle')}
      title={t('navbar.themeToggle')}
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}