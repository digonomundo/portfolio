import Image from "next/image";
import {FaArrowCircleUp} from "react-icons/fa";

export default function Projetos() {
  return (
   <div className="relative ">
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">

    <h2 className="text-4xl">Aqui estão meus melhores projetos</h2>
    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-indigo-50 ">
              <FaArrowCircleUp className="h-5 w-5 animate-bounce text-azul" />
              <span>Role para baixo</span>
            </div>
    </div>

    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white text-white">

    <section className="w-full mx-auto py-10  dark:text-white">


<div className="w-full h-full flex flex-col items-center md:py-4 py-10">

  <div
    className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
    
    <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="/assets/meuTreino.svg" alt="billboard image" />

    <div className="md:w-[50%] w-full dark:text-gray-400 md:p-4 p-0 rounded-md flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-roxo">Meu treino</h2>
      <p className="text-md font-semibold mt-4 text-black">Aplicativo móvel focado no gerenciamento e instrução de treinos de musculação, desenvolvido como trabalho de conclusão de curso na ETEC. 
        Utiliza tecnologias como o Kotlin para desenvolvimento nativo e o Google Firebase como banco de dados não relacional (NoSQL), garantindo uma experiência eficiente e escalável para os usuários. </p>
    </div>

  </div>


</div>
</section>
       
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-700 text-white">
      <h2 className="text-4xl">Terceiro Projeto</h2>
        
  </div>
</div>
  );
}