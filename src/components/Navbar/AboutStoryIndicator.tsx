'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

type AboutStoryIndicatorProps = {
  href: string;
  label: string;
  ariaLabel: string;
  isVisible: boolean;
  isMobileVisible: boolean;
  onClick: () => void;
};

export function AboutStoryIndicator({
  href,
  label,
  ariaLabel,
  isVisible,
  isMobileVisible,
  onClick,
}: AboutStoryIndicatorProps) {
  const isDisplayed = isVisible || isMobileVisible;
  const className = [
    styles.storyIndicator,
    isVisible ? styles.storyIndicatorVisible : '',
    isMobileVisible ? styles.storyIndicatorMobileVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={!isDisplayed}
      tabIndex={isDisplayed ? 0 : -1}
      onClick={onClick}
    >
      <span>{label}</span>
      <ArrowRight size={14} aria-hidden="true" />
    </Link>
  );
}
