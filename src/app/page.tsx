import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Sociais from "@/components/Sociais";
import Fotoapr from "@/components/Foto";
import { Saudacoes } from "@/components/Saudacoes";

export default function Home() {
    return (
        <main className="relative mx-auto flex flex-col xl:flex-row h-screen w-full items-center justify-center overflow-hidden gap-x-56">
            <div className="text-center xl:text-left items-center xl:items-start order-2 xl:order-none">
                <h1 className="h1 mb-3 text-white ">
                    Olá, eu sou o <br /><span className="text-azul flex gap-6 xl:justify-start justify-center larcaco:gap-10 xl:gap-10">Rodrigo!<Saudacoes /></span>
                </h1>
                <p className="text-lg largaco:text-xl text-white">Um desenvolvedor de software jr.</p>

                {/* Botões */}
                <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
                    <a href="/assets/Curriculo Rodrigo.pdf" download="Rodrigo Dias">
                        <Button variant="outline" size="md" className="items-center gap-2">
                            <p className="text-white font-semibold">Baixe meu currículo!</p>
                            <FiDownload className="text-xl text-white mb-1" />
                        </Button>
                    </a>
                    <div className="mb-8 xl:mb-0">
                        <Sociais containerStyles="flex gap-6"
                            iconSyles="largaco:w-20 w-10 h-10 border border-azul rounded-full flex justify-center items-center text-white text-base hover-azul hover:text-white hover:bg-azul hover:transition-all duration-500" />
                    </div>
                </div>
            </div>

            {/* Foto de apresentação */}
            <figure className="order-1 xl:order-none mb-8 xl:mb-0">
                <Fotoapr />
            </figure>
        </main>
    );
};
