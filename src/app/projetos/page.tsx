import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Projetos() {
  return (
    <main className="relative ">

      <section className="sticky top-0 h-screen flex flex-col items-center justify-center text-white ">
        <div className="bg-cover bg-center py-32 px-2 w-full" >
          <div className="container mx-auto text-left text-white">
            <div className="flex flex-col xl:flex-row items-center">
              <div className="w-1/2">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium mb-6 text-azul">Que bom que você está aqui!</h1>
                <p className="text-lg md:text-2lg lg:text-3lg xl:text-xl mb-12">Aqui estão meus projetos favoritos, espero que goste!</p>
              </div>
              <div className="w-1/2 pl-1 xl:pl-16 ">
                <Image src="/assets/video-bg.gif" className="h-64 xl:h-full w-full object-cover rounded-3xl" width={100} height={100} unoptimized alt="Layout Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-indigo-50 ">
          <FaArrowCircleUp className="h-5 w-5 animate-bounce text-azul" />
          <span>Role para baixo</span>
        </div>
      </section>

      <section className="sticky top-0 h-screen flex flex-col items-center justify-center bg-roxo ">
        <div className="w-full mx-auto py-10  ">
          <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
            <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4 ">
              <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="/assets/meuTreino.svg" alt="billboard image" width={100} height={100} />
              <div className="md:w-[50%] w-full dark:text-gray-400 md:p-4 p-0 rounded-md flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white">Meu treino - TCC</h2>
                <p className="text-md font-semibold mt-4 text-black">Um Aplicativo para dispositivos móveis android, focado no gerenciamento e instrução de treinos de musculação, desenvolvido como trabalho de conclusão de curso na ETEC.
                  Utiliza tecnologias como o Kotlin para desenvolvimento nativo, o Google Cloud Firestore (Firebase) como banco de dados não relacional (NoSQL) e o Firebase Auth para a autenticação dos usuários, garantindo uma experiência eficiente e escalável para os usuários.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-500">
        <div className="w-full mx-auto py-10  ">
          <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
            <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
              <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="/assets/inovaChat.svg" alt="billboard image" width={100} height={100} />
              <div className="md:w-[50%] w-full dark:text-gray-400 md:p-4 p-0 rounded-md flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-dourado">Inova Chat</h2>
                <p className="text-md font-semibold mt-4 text-white">Solução: Um sistema de chatbot voltado para filtrar e selecionar feedbacks e comunicações dos funcionários da <a href="https://minervafoods.com/" target="_blank" rel="noopener noreferrer" className="text-dourado hover:text-azulao hover:transition duration-500">Minerva Foods</a>, com o objetivo de tornar a comunicação empresarial mais assertiva e eficiente.
                  Para isso, foi utilizado tecnologias como JavaScript, HTML, e CSS, integradas a uma API de inteligência artificial baseada no ChatGPT. Garantindo a premiação 3º lugar no Hackathon Bruto Hacka e InovAgro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}