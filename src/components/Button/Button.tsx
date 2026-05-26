import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghostPrimary';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ variant = 'primary', children, icon, ...props }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
