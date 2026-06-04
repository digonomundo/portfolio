'use client';

import Image from 'next/image';
import styles from './HeroImage.module.css';
import ProfilePhoto from '@/assets/images/euRemovido.png';

export function HeroImage() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.ambientGlow} />
      <div className={styles.imageWrapper}>
        <Image
          src={ProfilePhoto}
          alt="Rodrigo Dias"
          fill
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 450px, 600px"
          priority
          className={styles.profileImage}
        />
      </div>
    </div>
  );
}