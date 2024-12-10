"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const buscarPeriodo = (): string => {

  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  const periodos = {
    manha: "manha", // 0h–11h
    tarde: "tarde", // 12h–17h
    noite: "noite", // 18h–23h
  };

  // Determina o período do dia
  const period = hour < 12 ? periodos.manha : hour < 18 ? periodos.tarde : periodos.noite;

  // Mapeia combinações de dia e período para arquivos de áudio
  const audioMap: Record<number, Record<string, string>> = {
    0: { manha: "/assets/domingo-manha.mp3", tarde: "/assets/domingo-tarde.mp3", noite: "/assets/domingo-noite.mp3" },
    1: { manha: "/assets/segunda-manha.mp3", tarde: "/assets/segunda-tarde.mp3", noite: "/assets/segunda-noite.mp3" },
    2: { manha: "/assets/terca-manha.mp3", tarde: "/assets/terca-tarde.mp3", noite: "/assets/terca-noite.mp3" },
    3: { manha: "/assets/quarta-manha.mp3", tarde: "/assets/quarta-tarde.mp3", noite: "/assets/quarta-noite.mp3" },
    4: { manha: "/assets/quinta-manha.mp3", tarde: "/assets/quinta-tarde.mp3", noite: "/assets/quinta-noite.mp3" },
    5: { manha: "/assets/sexta-manha.mp3", tarde: "/assets/sexta-tarde.mp3", noite: "/assets/sexta-noite.mp3" },
    6: { manha: "/assets/sabado-manha.mp3", tarde: "/assets/sabado-tarde.mp3", noite: "/assets/sabado-noite.mp3" },
  };

  return audioMap[day]?.[period] || "/assets/default.mp3";
};

const Audio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>(buscarPeriodo());
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    setAudioSrc(buscarPeriodo());
    if (audioRef.current) {
      audioRef.current.load(); // Recarrega o novo áudio    
    }
  }, []);

  useEffect(() => {
    const handleAudioEnded = () => {
      setIsPlaying(false); // Atualiza o estado para "parado" quando o áudio terminar
    };

    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  return (
    <div className="flex items-center">
      {/* Controle de áudio */}
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <button onClick={toggleAudio} className="flex items-center justify-center">
        <Image
          src={isPlaying ? "/assets/voz.gif" : "/assets/semsom.png"}
          alt={isPlaying ? "Pause" : "Play"}
          width={isPlaying ? 80 : 40}
          height={isPlaying ? 80 : 40}
          unoptimized
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default Audio;