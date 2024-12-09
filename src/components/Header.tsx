"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function HeaderPage() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const routes: [string, string][] = [
    ["/", "Home"],
    ["/sobre", "Quem sou"],
    ["/projetos", "Projetos"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
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
    <header
      className=  {`p-4 flex items-center justify-between mb-0 sticky top-0 transition-all duration-200 border-b border-transparent ${
        hasScrolledDown
          ? "bg-white/[1%] z-50"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center sticky justify-between">
        <Image
          src="/assets/logo.svg"
          alt="Rodrigo Dias"
          width={50}
          height={50}
          priority
          quality={100}
          className="max-xs:hidden size-12 object-contain"
        />
        <h1 className="text-2xl font-light flex items-center gap-2 tracking-widest text-white">
          DIGO
        </h1>
      </Link>

      {/* Navegação */}
      <nav
        className={`px-5 py-2 rounded-2xl bg-white/10 flex items-center gap-8 prose-a:text-white/60 hover:prose-a:text-white/70 active:prose-a:text-white/80 ${
          "data-[active=true]:prose-a:text-white prose-a:transition-all prose-a:duration-100 prose-a:text-sm prose-a:cursor-default prose-a:font-medium max-xs:w-full max-xs:prose-a:flex-1 max-xs:prose-a:text-center max-xs:hover:prose-a:bg-white/5 max-xs:prose-a:px-5 max-xs:prose-a:py-2.5 max-xs:p-0 max-xs:gap-0 max-xs:overflow-hidden"
        }`}
      >
        {routes.map(([path, label]) => (
          <Link
            key={`layout_navbar_${path}-${label}`}
            href={path}
            data-active={path === pathname}
            className={path === pathname ? "text-white border-b-2 border-azul" : "text-white"}
          >
            {label}
          </Link>
        ))}

        {/* Controle de áudio */}
        <div className="flex items-center">
          <audio ref={audioRef}>
            <source src="/assets/coffe.mp3" type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <button
            onClick={toggleAudio}
            className="flex items-center justify-center"
          >
            <Image
              src={isPlaying ? "/assets/music.gif" : "/assets/semsom.png"}
              alt={isPlaying ? "Pause" : "Play"}
              width={isPlaying ? 22 : 21}
              height={isPlaying ? 22 : 21}
              unoptimized
              className="object-contain"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}