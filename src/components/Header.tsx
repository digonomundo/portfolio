'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const HeaderPage = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledDown(window.scrollY > 0);
    };

    const handleAudioEnded = () => {
      setIsPlaying(false); // Atualiza o estado para "parado" quando o áudio terminar
    };

    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnded);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnded);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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


  return (
    <header className={`py-3 xl:py-5 text-white z-50 
        ${pathname === "/teste" ? "sticky top-0" : "fixed top-0 left-0 right-0 z-50"}`}>

      <div className={`container mx-auto flex justify-between items-center transition-all rounded-2xl p-1.5 xl:p-2.5 ${hasScrolledDown ? "bg-white/[10%]" : "bg-transparent"}`}>
        {/* Logo */}
        <Link href="#home">
          <h1 className="text-3xl font-semibold">
            Digo<span className="text-blue-500">.</span>
          </h1>
        </Link>

        {/* Navbar pc */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />

          {/* Controle de áudio */}
          <div className="flex items-center">
            <audio ref={audioRef}>
              <source src="/assets/snowfall.mp3" type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <button
              onClick={toggleAudio} className="flex items-center justify-center">
              <Image
                src={isPlaying ? "/assets/music.gif" : "/assets/semsom.png"}
                alt={isPlaying ? "Pause" : "Play"}
                width={isPlaying ? 22 : 21}
                height={isPlaying ? 22 : 21}
                unoptimized
                className="object-contain" />
            </button>
          </div>

        </div>

        {/* Navbar mobile */}
        <div className="xl:hidden">
          <MobNavbar />
        </div>
      </div>
    </header>
  );
};
export default HeaderPage