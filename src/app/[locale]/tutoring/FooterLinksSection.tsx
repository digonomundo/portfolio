'use client';


import { Code2, Globe, } from "lucide-react";
import styles from "./page.module.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

import {  
  Terminal, 
  BookOpen, 
  Music, 
} from 'lucide-react';

export function FooterLinksSection() {
  return (
    <>
      <div className={styles.linksColumn}>
        <a href="https://linkedin.com/in/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><FaLinkedinIn size={16} /></div> <span>LinkedIn</span>
        </a>
        <a href="https://instagram.com/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><FaInstagram size={16} /></div> <span>Instagram</span>
        </a>
        <a href="https://discord.com/users/640632942703673374" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><FaDiscord size={16} /></div> <span>Discord</span>
        </a>
        <a href="mailto:rodrigo@digonomundo.com" className={styles.fLink}>
          <div className={styles.fIcon}><FaEnvelope size={16} /></div> <span>Email</span>
        </a>
      </div>

      <div className={styles.linksColumn}>
        <a href="https://github.com/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><FaGithub size={16} /></div> <span>GitHub</span>
        </a>
        <a href="https://leetcode.com/u/digonomundo/" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><Terminal size={16} /></div> <span>LeetCode</span>
        </a>
        <a href="https://codeforces.com/profile/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><Code2 size={16} /></div> <span>Codeforces</span>
        </a>
        <a href="https://stackoverflow.com/users/32219910/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><Globe size={16} /></div> <span>Stack Overflow</span>
        </a>
      </div>

      <div className={styles.linksColumn}>
        <a href="https://www.researchgate.net/profile/Rodrigo-Dias-49?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><BookOpen size={16} /></div> <span>ResearchGate</span>
        </a>
        <a href="https://medium.com/@digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><BookOpen size={16} /></div> <span>Medium</span>
        </a>
        <a href="https://music.apple.com/profile/digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><Music size={16} /></div> <span>Apple Music</span>
        </a>
        <a href="https://www.youtube.com/@digonomundo" target="_blank" rel="noopener noreferrer" className={styles.fLink}>
          <div className={styles.fIcon}><FaYoutube size={16} /></div> <span>YouTube</span>
        </a>
      </div>
    </>
  );
}