import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Sociais from "@/components/Sociais";
import Fotoapr from "@/components/Foto"; 
import Audio from "@/components/Audio";

export default function Home (){
  return (
    <main className="mx-auto flex flex-col justify-center items-center">
      
        <div className="xl:container mx-auto flex flex-col xl:flex-row items-center justify-center gap-x-56">
          {/* Texto de apresentação */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none">
            <h1 className="h1 mb-3 text-white ">
              Olá, eu sou o
              <br />
              <span className="text-azul flex gap-6 larcaco:gap-10 xl:gap-10">Rodrigo! <Audio /></span> 
            </h1>
            <span className="text-lg largaco:text-xl text-white">Um desenvolvedor de software jr.</span>

            {/* Botões */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
              <a href="/assets/Curriculo Rodrigo.pdf" download="Rodrigo Dias">
                <Button variant="outline" size="md" className="items-center gap-2">
                  <span className="text-white font-semibold">Baixe meu currículo!</span>
                  <FiDownload className="text-xl text-white mb-1" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Sociais
                  containerStyles="flex gap-6"
                  iconSyles="largaco:w-20 w-10 h-10 border border-azul rounded-full flex justify-center items-center text-white text-base hover-azul hover:text-white hover:bg-azul hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Foto de apresentação */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Fotoapr />
          </div>
        </div>
 
    </main>
  );
};
