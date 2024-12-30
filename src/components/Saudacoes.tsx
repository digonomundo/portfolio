'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";

export function Saudacoes() {
  const [dataHora, setDataHora] = useState<Date | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setDataHora(new Date()); // Inicializa a data no cliente
    const interval = setInterval(() => {
      setDataHora(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup do intervalo
  }, []);

  const buscarPeriodo = () => {
    if (!dataHora) return null; // `dataHora` definido
    const hora = dataHora.getHours();
    const dia = dataHora.getDay(); // 0 = domingo, 6 = sábado

    const periodos = {
      manha: "manha",
      tarde: "tarde",
      noite: "noite",
    };

    const periodo = hora < 12 ? periodos.manha : hora < 18 ? periodos.tarde : periodos.noite;

    const audioMap: Record<number, Record<string, string>> = {
      0: { manha: "/assets/dom/domingo-manha.mp3", tarde: "/assets/dom/domingo-tarde.mp3", noite: "/assets/dom/domingo-noite.mp3" },
      1: { manha: "/assets/seg/segunda-manha.mp3", tarde: "/assets/seg/segunda-tarde.mp3", noite: "/assets/seg/segunda-noite.mp3" },
      2: { manha: "/assets/ter/terca-manha.mp3", tarde: "/assets/ter/terca-tarde.mp3", noite: "/assets/ter/terca-noite.mp3" },
      3: { manha: "/assets/qua/quarta-manha.mp3", tarde: "/assets/qua/quarta-tarde.mp3", noite: "/assets/qua/quarta-noite.mp3" },
      4: { manha: "/assets/qui/quinta-manha.mp3", tarde: "/assets/qui/quinta-tarde.mp3", noite: "/assets/qui/quinta-noite.mp3" },
      5: { manha: "/assets/sex/sexta-manha.mp3", tarde: "/assets/sex/sexta-tarde.mp3", noite: "/assets/sex/sexta-noite.mp3" },
      6: { manha: "/assets/sab/sabado-manha.mp3", tarde: "/assets/sab/sabado-tarde.mp3", noite: "/assets/sab/sabado-noite.mp3" },
    };

    return audioMap[dia]?.[periodo] || "/assets/snowfall.mp3";
  };

  const alternarAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const novoAudio = buscarPeriodo();
        if (novoAudio) {
          audioRef.current.src = novoAudio;
          audioRef.current.load();
          audioRef.current.play();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleAudioEnded = () => setIsPlaying(false);

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
    <div className="flex items-center justify-center">
      <button
        onClick={() => alternarAudio()}
        className="flex items-center justify-center"
      >
        <audio ref={audioRef}>
          <source type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <Image
          src={isPlaying ? "/assets/voz.gif" : "/assets/mute1.gif"}
          alt={isPlaying ? "Pause" : "Play"}
          width={isPlaying ? 65 : 60}
          height={isPlaying ? 65 : 60}
          className="object-contain"
          unoptimized
        />
      </button>
    </div>
  );
}
