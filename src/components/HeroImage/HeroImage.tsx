'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroImage.module.css';
import ProfilePhoto from '@/assets/images/euRemovido.png'; // Utilizando o mesmo caminho de imagem da sua Navbar

export function HeroImage() {
  return (
    <div className={styles.imageContainer}>
      {/* Uma aura de luz de fundo opcional para dar profundidade (estilo o brilho do antigo globo) */}
      <div className={styles.ambientGlow} />
      
      {/* Container com máscara de degradê para sumir com as bordas inferiores da foto */}
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