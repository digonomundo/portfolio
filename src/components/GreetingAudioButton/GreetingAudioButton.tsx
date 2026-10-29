'use client';

import { useRef, useState } from 'react';
import { Pause, Play, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { AppLanguage } from '@/i18n/resources';
import styles from './GreetingAudioButton.module.css';

type DayKey = 'dom' | 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';
type TimePeriod = 'manha' | 'tarde' | 'noite';
type AudioStatus = 'idle' | 'playing' | 'paused' | 'error';
export type GreetingAudioVariant = 'social' | 'accent' | 'outline';

const dayAudioPaths: Record<DayKey, Record<TimePeriod, string>> = {
  dom: {
    manha: '/audio/days/dom/domingo-manha.mp3',
    tarde: '/audio/days/dom/domingo-tarde.mp3',
    noite: '/audio/days/dom/domingo-noite.mp3',
  },
  seg: {
    manha: '/audio/days/seg/segunda-manha.mp3',
    tarde: '/audio/days/seg/segunda-tarde.mp3',
    noite: '/audio/days/seg/segunda-noite.mp3',
  },
  ter: {
    manha: '/audio/days/ter/terca-manha.mp3',
    tarde: '/audio/days/ter/terca-tarde.mp3',
    noite: '/audio/days/ter/terca-noite.mp3',
  },
  qua: {
    manha: '/audio/days/qua/quarta-manha.mp3',
    tarde: '/audio/days/qua/quarta-tarde.mp3',
    noite: '/audio/days/qua/quarta-noite.mp3',
  },
  qui: {
    manha: '/audio/days/qui/quinta-manha.mp3',
    tarde: '/audio/days/qui/quinta-tarde.mp3',
    noite: '/audio/days/qui/quinta-noite.mp3',
  },
  sex: {
    manha: '/audio/days/sex/sexta-manha.mp3',
    tarde: '/audio/days/sex/sexta-tarde.mp3',
    noite: '/audio/days/sex/sexta-noite.mp3',
  },
  sab: {
    manha: '/audio/days/sab/sabado-manha.mp3',
    tarde: '/audio/days/sab/sabado-tarde.mp3',
    noite: '/audio/days/sab/sabado-noite.mp3',
  },
};

const dayKeys: DayKey[] = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

function getGreetingAudioPath(date: Date): string {
  const hour = date.getHours();
  const period: TimePeriod = hour >= 5 && hour < 12
    ? 'manha'
    : hour >= 12 && hour < 18
      ? 'tarde'
      : 'noite';

  return dayAudioPaths[dayKeys[date.getDay()]][period];
}

interface GreetingAudioButtonProps {
  language: AppLanguage;
  enabledLanguages?: readonly AppLanguage[];
  variant?: GreetingAudioVariant;
}

export function GreetingAudioButton({
  language,
  enabledLanguages = ['pt'],
  variant = 'social',
}: GreetingAudioButtonProps) {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<AudioStatus>('idle');

  if (!enabledLanguages.includes(language)) {
    return null;
  }

  const prepareAudio = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const path = getGreetingAudioPath(new Date());
    if (audio.src !== `${window.location.origin}${path}`) {
      audio.src = path;
      audio.preload = 'metadata';
      audio.load();
    }
  };

  const handleClick = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (status === 'playing') {
      audio.pause();
      setStatus('paused');
      return;
    }

    if (status === 'paused') {
      try {
        await audio.play();
        setStatus('playing');
      } catch {
        setStatus('error');
      }
      return;
    }

    const path = getGreetingAudioPath(new Date());
    audio.preload = 'auto';
    if (audio.src !== `${window.location.origin}${path}`) {
      audio.src = path;
      audio.load();
    }

    if (audio.ended || status === 'error') {
      audio.currentTime = 0;
    }
    setStatus('idle');

    try {
      await audio.play();
      setStatus('playing');
    } catch {
      setStatus('error');
    }
  };

  const handleEnded = () => {
    setStatus('idle');
  };

  const handleError = () => {
    setStatus('error');
  };

  const label = status === 'playing'
    ? t('hero.greetingAudio.pauseLabel')
    : status === 'paused'
      ? t('hero.greetingAudio.resumeLabel')
      : t('hero.greetingAudio.label');
  const statusMessage = status === 'playing'
    ? t('hero.greetingAudio.playing')
    : status === 'paused'
      ? t('hero.greetingAudio.paused')
    : status === 'error'
      ? t('hero.greetingAudio.error')
      : t('hero.greetingAudio.idle');

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${styles[variant]} ${status === 'playing' ? styles.playing : ''} ${status === 'paused' ? styles.paused : ''} ${status === 'error' ? styles.error : ''}`}
        aria-label={label}
        aria-pressed={status === 'playing'}
        onClick={handleClick}
        onMouseEnter={prepareAudio}
        onFocus={prepareAudio}
      >
        <span className={styles.controlIcon} aria-hidden="true">
          {status === 'error'
            ? <VolumeX size={16} />
            : status === 'playing'
              ? <Pause size={16} />
              : <Play size={16} />}
        </span>
        <span className={styles.buttonText}>
          {status === 'playing'
            ? t('hero.greetingAudio.playingLabel')
            : status === 'error'
              ? t('hero.greetingAudio.retry')
              : t('hero.greetingAudio.button')}
        </span>
        {status === 'playing' && (
          <span className={styles.equalizer} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
      </button>
      <audio
        ref={audioRef}
        className={styles.audio}
        onEnded={handleEnded}
        onError={handleError}
        aria-hidden="true"
      />
      <span className={styles.srOnly} aria-live="polite">
        {statusMessage}
      </span>
    </>
  );
}
