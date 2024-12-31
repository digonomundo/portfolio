'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const HeaderPage = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== hasScrolledDown) setHasScrolledDown(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledDown]);

  const toggleAudio = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  return (
    <header className="py-3 xl:py-5 text-white fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-4 xl:mx-6 flex justify-between items-center transition-all rounded-2xl p-1.5 xl:p-2.5 ${hasScrolledDown ? "bg-white/[10%]" : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="#home">
          <h1 className="text-3xl font-semibold">
            Digo<span className="text-blue-500">.</span>
          </h1>
        </Link>

        {/* Navbar para PC */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <div className="flex items-center">
            <audio ref={audioRef}>
              <source src="/assets/snowfall.mp3" type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <button onClick={toggleAudio} className="flex items-center justify-center">
              <Image
                src={isPlaying ? "/assets/music.gif" : "/assets/semsom.png"}
                alt={isPlaying ? "Pause" : "Play"}
                width={24}
                height={24}
                priority
                className={`object-contain ${!isPlaying ? "animate-pulse" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Navbar para mobile */}
        <div className="xl:hidden">
          <MobNavbar />
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
