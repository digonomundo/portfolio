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
      0: { manha: "/assets/audios/days/dom/domingo-manha.mp3", tarde: "/assets/audios/days/dom/domingo-tarde.mp3", noite: "/assets/audios/days/dom/domingo-noite.mp3" },
      1: { manha: "/assets/audios/days/seg/segunda-manha.mp3", tarde: "/assets/audios/days/seg/segunda-tarde.mp3", noite: "/assets/audios/days/seg/segunda-noite.mp3" },
      2: { manha: "/assets/audios/days/ter/terca-manha.mp3", tarde: "/assets/audios/days/ter/terca-tarde.mp3", noite: "/assets/audios/days/ter/terca-noite.mp3" },
      3: { manha: "/assets/audios/days/qua/quarta-manha.mp3", tarde: "/assets/audios/days/qua/quarta-tarde.mp3", noite: "/assets/audios/days/qua/quarta-noite.mp3" },
      4: { manha: "/assets/audios/days/qui/quinta-manha.mp3", tarde: "/assets/audios/days/qui/quinta-tarde.mp3", noite: "/assets/audios/days/qui/quinta-noite.mp3" },
      5: { manha: "/assets/audios/days/sex/sexta-manha.mp3", tarde: "/assets/audios/days/sex/sexta-tarde.mp3", noite: "/assets/audios/days/sex/sexta-noite.mp3" },
      6: { manha: "/assets/audios/days/sab/sabado-manha.mp3", tarde: "/assets/audios/days/sab/sabado-tarde.mp3", noite: "/assets/audios/days/sab/sabado-noite.mp3" },
    };

    return audioMap[dia]?.[periodo] || "/assets/audios/music/snowfall.mp3";
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
          src={isPlaying ? "/assets/images/site/buttons/pause/pauseSaudacao.gif" : "/assets/images/site/buttons/play/playSaudacao.gif"} alt={isPlaying ? "Pause" : "Play"}
          width={50} height={50}
          style={{ width: "10vw", height: "10vw", maxWidth: "50px", maxHeight: "50px" }}
          className="object-contain"
          unoptimized
        />
      </button>
    </div>
  );
}
