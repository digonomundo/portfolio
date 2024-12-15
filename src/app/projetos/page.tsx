import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";

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

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-500">
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
      </div>
    </div>
  );
}