import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Sociais from "@/components/Sociais";
import { Saudacoes } from "@/components/Saudacoes";
import Image from "next/image";
import TextParallaxContent from "@/components/Sobre";

export default function Home() {
    return (
        <main >
            <section id="home" className="flex flex-col xl:flex-row h-screen w-full items-center justify-center overflow-hidden gap-x-56">
                <div className="text-center xl:text-left items-center xl:items-start order-2 xl:order-none">
                    <h1 className="h1 mb-3 text-white">
                        Olá, eu sou o <br />
                        <span className="text-azul flex gap-5 xl:justify-start justify-center larcaco:gap-8 xl:gap-8">
                            Rodrigo!<Saudacoes />
                        </span>
                    </h1>
                    <p className="text-lg largaco:text-xl text-white">Um desenvolvedor de software jr.</p>

                    <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
                        <a href="/assets/cv/Rodrigo Marques Dias.pdf" download="Rodrigo Dias">
                            <Button variant="outline" size="md" className="items-center gap-2">
                                <p className="text-white font-semibold">Baixe meu currículo!</p>
                                <FiDownload className="text-xl text-white mb-1" />
                            </Button>
                        </a>
                        <Sociais
                            containerStyles="flex gap-6"
                            iconSyles="largaco:w-20 w-10 h-10 border border-azul rounded-full flex justify-center items-center text-white text-base hover-azul hover:text-white hover:bg-azul hover:transition-all duration-500"
                        />
                    </div>
                </div>

                <figure className="order-1 xl:order-none mb-8 xl:mb-0">
                    <div className="w-[298px] h-[298px] xl:w-[500px] xl:h-[498px] largaco:w-[650px] largaco:h-[650px] relative">
                        <Image src="/assets/images/site/eu/euPrincipal.svg" priority quality={100} fill alt="minha foto" className="object-contain" />
                    </div>
                </figure>
            </section>

            <section id="sobre">
                <div>
                    <section className="bg-black pt-6">
                        <TextParallaxContent
                            imgUrl="/assets/images/site/eu/euApresentando.jpg" heading="Sobre Mim" subheading=""
                            content={
                                <p className="text-xl md:text-2xl text-center text-balance text-white"> <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                                    Sou o Rodrigo, também conhecido como Digo. Tenho 20 anos, sou desenvolvedor,{" "}
                                    <a href="https://www.etecbarretos.com.br/ensino-medio-integrado/desenvolvimento-de-sistemas-2" className="hover:text-white hover:underline text-azul font-bold" target="_blank" rel="noopener noreferrer">
                                        Técnico em Desenvolvimento de Sistemas
                                    </a>{" "} formado pela{" "}
                                    <a href="https://www.etecbarretos.com.br/" className="hover:text-white hover:underline text-azul font-bold" target="_blank" rel="noopener noreferrer">
                                        ETEC
                                    </a>{" "} e atualmente estou cursando{" "}
                                    <a href="https://www.comvest.unicamp.br/cursos/curso-engenharia-de-telecomunicacoes/" className="hover:text-white hover:underline text-azul font-bold" target="_blank" rel="noopener noreferrer">
                                        Engenharia de Telecomunicações
                                    </a>{" "} pela{" "}
                                    <a href="https://unicamp.br/historia/" className="hover:text-white hover:underline text-azul font-bold" target="_blank" rel="noopener noreferrer">UNICAMP</a>
                                    . Tenho experiência com desenvolvimento de aplicações web com Next.js, PHP, TypeScript e React.js, além de saber utilizar ferramentas no-code como WordPress (Elementor) e Wix. Também possuo experiência com desenvolvimento nativo de aplicativos móveis em Kotlin e Java.
                                </p>
                            }
                        />
                    </section>

                    <section>
                        <h1 className="text-center text-2xl font-bold text-indigo-50 xsm:px-2 sm:text-3xl md:text-4xl lg:text-5xl xl:px-0 xl:text-[50px] 3xl:text-7xl 4xl:text-[80px]">
                            Minha trajetória
                        </h1>
                        <div className="py-8 container mx-auto flex flex-col items-start md:flex-row">
                            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                                <p className="text-azul text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                                    Quer saber como tudo começou?
                                </p>
                                <p className="md:text-base mb-4">
                                    Senta que lá vem história! Seja você um colega cientista, engenheiro, entusiasta da tecnologia ou simplesmente interessado em uma boa conversa, estou sempre aberto a conexões e troca de insights. Seja bem vindo ao meu mundo!
                                </p>
                                <a
                                    href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K1166553U8"
                                    className="bg-transparent font-bold mr-auto hover:bg-azul text-azul hover:text-white rounded-xl duration-500 shadow hover:shadow-lg py-2 px-4 border border-azul hover:border-transparent"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Veja meu currículo lattes!
                                </a>
                            </div>
                            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                                <div className="container mx-auto w-full h-full">
                                    <div className="relative wrap overflow-hidden p-10 h-full">
                                        <div className="border-2-2 border-yellow-555 absolute h-full border" style={{ right: '50%', border: '1px solid #0C95E2', borderRadius: '100%', }}></div>
                                        <div className="border-2-2 border-yellow-555 absolute h-full border" style={{ left: '50%', border: '1px solid #0C95E2', borderRadius: '100%', }}></div>
                                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                <p className="mb-3 text-base font-bold text-azul">Fev, 2021</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">A Etec</h4>
                                                <p className="md:text-base leading-snug text-opacity-100 text-balance">
                                                    Tudo começou com a minha escolha de estudar na ETEC.
                                                    Morava em uma fazenda, no interior do estado de SP.
                                                    Mas, como nada na vida é simples... por
                                                    problemas de locomoção para a escola,
                                                    tive que se mudar SOZINHO aos 16 anos para a cidade
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1  w-5/12 px-1 py-4 text-left">
                                                <p className="mb-3 text-base font-bold text-azul">2022</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">Meu Segundo ano</h4>
                                                <p className="md:text-base leading-snug text-opacity-100 text-balance">
                                                Nesse período, além de desenvolver uma sólida afinidade com lógica, técnicas de programação e algoritmos, dediquei-me ao Jiu-Jítsu, competindo em diversos torneios e conquistando múltiplos títulos. Meu desempenho me rendeu o reconhecimento como atleta destaque do ano pela CIJJ. 
                                                <br /><br />
                                                Além disso, participei da minha segunda OBMEP, sendo premiado com uma menção honrosa pelo meu desempenho, concedida pelo Instituto de Matemática Pura e Aplicada (IMPA).                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                <p className="mb-3 text-base font-bold text-azul">2023</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">Meu Terceiro ano</h4>
                                                <p className="md:text-base leading-snug text-opacity-100 text-balance">
                                                    Meu último ano do ensino médio, COM TODA CERTEZA foi um ano de grandes desafios e mudanças. Tendo que conciliar os estudos para vestibulares, os treinos e o tão temido TCC da etec. <br />
                                                    Também pude participar de algumas maratonas de resolução de problemas, como o HACKATHON promovido pela empresa MINERVA FOODS, Obtendo a premiação de 3º lugar, em 8 equipes
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1  w-5/12 px-1 py-4">
                                                <p className="mb-3 text-base font-bold text-azul">2024</p>
                                                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">A UTFPR</h4>
                                                <p className="md:text-base leading-snug text-opacity-100 text-balance">
                                                    Optei por me mudar de cidade para o meu ensino superior. Fui aprovado em S.I na UFU, BCC na UTFPR e ADS na Fatec. Acabei escolhendo ir cursar Ciência da Computação na UTFPR, onde pude me aprofundar integralmente de forma mais ampla nas áreas da tecnologia em geral. <br />
                                                    Já neste ano, pude participar do ideathon promovido pelo Sistema Faep/Senar, onde obtive a premiação de 3º lugar entre as equipes, além 1º lugar obtido no Hackathon em PHP da Rem Soft Sistemas.
                                                </p>
                                            </div>
                                        </div>


                                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                <p className="mb-3 text-base font-bold text-azul">2025</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">A UNICAMP</h4>
                                                <p className="md:text-base leading-snug text-opacity-100 text-balance">
                                                Após enfrentar a escassez de estágios no interior enquanto estudava na UTFPR, decidi mudar de faculdade e retornar ao estado com mais oportunidades. Fui aprovado em Engenharia de Telecomunicações na UNICAMP e em Ciência e Tecnologia na UFABC. No fim, escolhi a UNICAMP pelo seu grande renome e excelência acadêmica.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="projetos" className="bg-black">
                        <TextParallaxContent
                            imgUrl="/assets/images/site/eu/euMej.jpg"
                            heading="Projetos"
                            subheading="Um pouco sobre meus" />
                    </section>
                </div>
            </section>

            <section >
                <article className="sticky top-0 h-screen flex flex-col items-center justify-center bg-roxo rounded-3xl m-6">
                    <div className="w-full mx-auto py-10">
                        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
                            <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
                                <a href="https://github.com/digonomundo/MeuTreino-TCC" target="_blank" rel="noopener noreferrer" className="md:w-[50%] w-full md:rounded-t-lg rounded-sm">
                                    <Image className="w-full h-auto" src="/assets/images/site/projects/meuTreino/meuTreino.svg" alt="Logo do app Meu treino" width={100} height={100} />
                                </a>
                                <div className="md:w-[50%] w-full dark:text-gray-400 md:p-4 p-0 rounded-md flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-white">
                                        <a href="https://github.com/digonomundo/MeuTreino-TCC" className="hover:underline hover:text-black" target="_blank" rel="noopener noreferrer">Meu treino - TCC</a>
                                    </h2>
                                    <p className="text-md font-semibold mt-4 text-black">
                                        Um Aplicativo para dispositivos móveis android, focado no gerenciamento e instrução de treinos de musculação, desenvolvido como trabalho de conclusão de curso na ETEC. Utiliza tecnologias
                                        como o Kotlin para desenvolvimento nativo, o Google Cloud Firestore (Firebase) como banco de dados não relacional (NoSQL) e o Firebase Auth para a autenticação dos usuários, garantindo uma experiência eficiente e escalável para os usuários.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-500 rounded-3xl m-6">
                    <div className="w-full mx-auto py-10  ">
                        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
                            <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
                                <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="/assets/images/site/projects/inovaChat/inovaChat.svg" alt="Logo da solução, inova chat" width={100} height={100} />
                                <div className="md:w-[50%] w-full dark:text-gray-400 md:p-4 p-0 rounded-md flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-dourado">Inova Chat</h2>
                                    <p className="text-md font-semibold mt-4 text-white">Solução: Um sistema de chatbot voltado para filtrar e selecionar feedbacks e comunicações dos funcionários da <a href="https://minervafoods.com/" target="_blank" rel="noopener noreferrer" className="text-dourado hover:text-azulao hover:transition duration-500">Minerva Foods</a>, com o objetivo de tornar a comunicação empresarial mais assertiva e eficiente.
                                        Para isso, foi utilizado tecnologias como JavaScript, HTML, e CSS, integradas a uma API de inteligência artificial baseada no ChatGPT. Garantindo a premiação 3º lugar no Hackathon Bruto Hacka e InovAgro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};
