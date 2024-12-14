import { FaMouse } from "react-icons/fa";

export default function Sobre() {
	return (
		<main>
			<section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
				<div className="flex flex-col items-center justify-center gap-4 text-balance">
					<h1 className="text-center text-4xl font-bold text-indigo-50 xsm:px-2 sm:text-5xl md:text-6xl lg:text-7xl xl:px-0 xl:text-[68px] 3xl:text-9xl 4xl:text-[112px]"> Sobre mim</h1>
					<p className="text-md largaco:text-xl text-center">
						Sou o Rodrigo, também conhecido como Digo. Tenho 20 anos, sou
						<a href="https://www.etecbarretos.com.br/ensino-medio-integrado/desenvolvimento-de-sistemas-2" className="text-azul hover:underline" target='_blank'> Técnico em Desenvolvimento de Sistemas</a> formado pela
						<a href="https://www.etecbarretos.com.br/" className="text-azul hover:underline" target='_blank'> ETEC</a> e atualmente estou cursando <a href="https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/campo-mourao/cm-ciencia-da-computacao/apresentacao" className="text-azul hover:underline" target='_blank'> Ciência da Computação </a>
						pela <a href="https://www.utfpr.edu.br" className="text-azul hover:underline" target='_blank'>UTFPR-CM</a>. Seja você um colega cientista, engenheiro, entusiasta da tecnologia ou simplesmente interessado em uma boa conversa, estou sempre aberto a conexões e troca de insights.
					</p >
				</div>
				<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-indigo-50">
					<FaMouse className="h-6 w-6 animate-bounce" />
					<span>Role para baixo</span>
				</div>
			</section>

			<section className="bg-black text-white py-8 container mx-auto flex flex-col items-start md:flex-row ">
				<div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
					<p className="text-azul text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Quer saber como tudo começou?</p>
					<p className="md:text-base mb-4">Senta que lá vem história, seja bem vindo ao meu mundo!</p>
					<a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K1166553U8"
						className="bg-transparent font-bold mr-auto hover:bg-azul text-azul hover:text-white rounded-xl duration-500 shadow hover:shadow-lg py-2 px-4 border border-azul hover:border-transparent" target="_blank">
						Veja meu currículo lattes!</a>
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
									<p className="md:text-base leading-snug text-opacity-100">
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
									<p className="md:text-base leading-snug text-opacity-100">
										Nesse meio tempo, além de adquirir uma sólida afinidade com lógica, técnicas de programação e algorítmos, pude me dedicar como atleta de JIU JÍTSU
										onde pude participar de algumas competições e sagrar-se atleta destaque do ano pela CIJJ.
									</p>
								</div>
							</div>
							<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="order-1 w-5/12 px-1 py-4 text-right">
									<p className="mb-3 text-base font-bold text-azul">2023</p>
									<h4 className="mb-3 font-bold text-lg md:text-2xl">Meu Terceiro ano</h4>
									<p className="md:text-base leading-snug text-opacity-100">
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
									<p className="md:text-base leading-snug text-opacity-100">
										Optei por me mudar de cidade para o meu ensino superior, e atualmente fui aprovado para cursar Ciência da Computação na UTFPR, onde posso me aprofundar integralmente de forma mais ampla nas áreas da tecnologia em geral. <br />
										Já neste ano, pude participar do ideathon promovido pelo Sistema Faep/Senar, onde obtive a premiação de 3º lugar entre as equipes, além 1º lugar obtido no Hackathon em PHP da Rem Soft Sistemas.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="absolute bottom flex flex-col items-center gap-4 text-indigo-50 p-6">
				<span className={`text-white/60`}>
					© Todos os direitos reservados.
				</span>
			</footer>
		</main>
	);
}
