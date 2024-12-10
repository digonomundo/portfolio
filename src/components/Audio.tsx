"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";

const buscarPeriodo = (): string => {

  const date = new Date();
  const dia = new Date(date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })).getDay();
  const hora = new Date(date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })).getHours();
  
  const periodos = {
    manha: "manha", // 0h–11h
    tarde: "tarde", // 12h–17h
    noite: "noite", // 18h–23h
  };

  // Determina o período do dia
  const period = hora < 12 ? periodos.manha : hora < 18 ? periodos.tarde : periodos.noite;

  // Mapeia combinações de dia e período para arquivos de áudio
  const audioMap: Record<number, Record<string, string>> = {
    0: { manha: "/assets/dom/domingo-manha.mp3", tarde: "/assets/dom/domingo-tarde.mp3", noite: "/assets/dom/domingo-noite.mp3" },
    1: { manha: "/assets/seg/segunda-manha.mp3", tarde: "/assets/seg/segunda-tarde.mp3", noite: "/assets/seg/segunda-noite.mp3" },
    2: { manha: "/assets/ter/terca-manha.mp3", tarde: "/assets/ter/terca-tarde.mp3", noite: "/assets/ter/terca-noite.mp3" },
    3: { manha: "/assets/qua/quarta-manha.mp3", tarde: "/assets/qua/quarta-tarde.mp3", noite: "/assets/qua/quarta-noite.mp3" },
    4: { manha: "/assets/qui/quinta-manha.mp3", tarde: "/assets/qui/quinta-tarde.mp3", noite: "/assets/qui/quinta-noite.mp3" },
    5: { manha: "/assets/sex/sexta-manha.mp3", tarde: "/assets/sex/sexta-tarde.mp3", noite: "/assets/sex/sexta-noite.mp3" },
    6: { manha: "/assets/sab/sabado-manha.mp3", tarde: "/assets/sab/sabado-tarde.mp3", noite: "/assets/sab/sabado-noite.mp3" },
  };

  return audioMap[dia]?.[period] || "/assets/snowfall.mp3";
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
      audioRef.current.load(); // carrega o novo áudio    
    }
  }, []);

  useEffect(() => {
    const handleAudioEnded = () => {
      setIsPlaying(false); // estado para "parado" quando o áudio terminar
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
          width={isPlaying ? 70 : 35}
          height={isPlaying ? 70 : 35}
          unoptimized
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default Audio;