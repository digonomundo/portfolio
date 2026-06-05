export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export const languageOptions = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' }
] as const;

export type AppLanguage = (typeof languageOptions)[number]['code'];

export const defaultLanguage: AppLanguage = 'en';

export const resources = {
  pt: {
    translation: {
      meta: {
        title: 'Rodrigo Dias - Desenvolvedor Full Stack',
        description: 'Portfólio de Rodrigo Dias, Desenvolvedor Full Stack'
      },
      navbar: {
        location: 'Limeira - SP',
        themeToggle: 'Alternar tema claro e escuro',
        home: 'Início',
        about: 'Sobre',
        education: 'Formação',
        experience: 'Experiência',
        projects: 'Projetos',
        contact: 'Contato',
        tutoring: 'Monitoria',
        portfolio: 'Ir para o portfólio',
        portfolio2: 'Voltar ao portfólio',
        language: 'Idioma'
      },
      hero: {
        titleLine1: 'Futuro',
        titleLine2: 'Apple developer',
        summary: 'Técnico em Desenvolvimento de Sistemas e estudante de Engenharia de Telecomunicações',
        email: 'E-mail',
        contactCta: 'Entre em contato',
        downloadCv: 'Baixar CV'
      },
      about: {
        title: 'Sobre Mim',
        paragraph1: 'Também conhecido como <highlight>Digo</highlight>, sou Técnico em Desenvolvimento de Sistemas pela Etec e atualmente estudo Engenharia de Telecomunicações na Unicamp.',
        paragraph2: 'Tenho experiência com desenvolvimento de <highlight>aplicações web</highlight> com <highlight>Next.js, TypeScript</highlight> e <highlight>React.js</highlight>, além de saber utilizar <highlight>ferramentas no-code</highlight> como <highlight>WordPress (Elementor)</highlight> e <highlight>Wix</highlight>. Também possuo experiência com desenvolvimento de <highlight>aplicativos móveis nativos</highlight> em <highlight>Kotlin</highlight> e <highlight>Java</highlight>.',
        paragraph3: 'Para mim, o código vai muito além da sintaxe; é sobre <highlight>resolver problemas reais</highlight>. Por isso, busco constantemente expandir meus limites, explorando desde a precisão lógica da programação com <highlight>C/C++</highlight>, até a análise de dados.',
        paragraph4: 'A tecnologia é o meu ofício, mas são as <highlight>histórias e as pessoas</highlight> que me movem. Quando não estou codando, você provavelmente vai me encontrar imerso em esportes, ouvindo música, tocando instrumentos ou até participando de competições.',
        readMore: 'Você pode saber mais sobre mim clicando aqui! ; )',
      },
      education: {
        title: 'Formações & Títulos',
        subtitle: 'Uma base acadêmica sólida em tecnologia, complementada pela disciplina do esporte de alto rendimento e inovação contínua.',
        unicamp: {
          date: '2025 — Presente',
          institution: 'Universidade Estadual de Campinas (UNICAMP)',
          degree: 'Bacharelado em Engenharia de Telecomunicações',
          description: 'Foco em engenharia, algoritmos complexos e arquitetura de sistemas. Atuando de forma ativa na comunidade acadêmica.',
          tag1: 'Projeto de Sistemas e Análise de Algoritmos',
          tag2: 'Engenharia de Software'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
          degree: 'Bacharelado em Ciência da Computação',
          description: 'Período de imersão profunda em conceitos iniciais de desenvolvimento, design patterns e fundamentos matemáticos para computação.',
          tag1: 'Análise de Algoritmos',
          tag2: 'Projeto de Sistemas'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'Ensino Médio integrado ao Técnico em Informática',
          description: 'Onde a paixão pela tecnologia começou. Desenvolvimento das primeiras lógicas de programação e aplicações completas.',
          tag1: 'Algoritmos',
          tag2: 'Análise de Sistemas'
        },
        languages: {
          title: 'Idiomas',
          pt: 'Português',
          ptLevel: 'Nativo',
          en: 'Inglês',
          enLevel: 'B1 - Intermediário',
          verify: 'Certificação'
        },
        awards: {
          title: 'Destaques & Competições',
          jubs: '1º Lugar JUBs SP (Jiu jítsu) - 2026',
          hackathonPhp: '1º Lugar Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3º Lugar IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3º Lugar Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Menção Honrosa 16ª OBMEP - 2021'
        },
        languages2: {
          title: 'Cursos extras',
          wizard: {
            date: 'FEV 2026 - Atualmente',
            title: 'Wizard By Pearson',
            desc: 'Curso de Inglês com foco em vocabulário e conversação.'
          },
          cel: {
            date: 'FEV 2026 - Atualmente',
            title: 'Centro de Ensino de Línguas da Unicamp',
            desc: 'Inglês com foco na fala, escrita, compreensão oral e leitura. Com temas acadêmicos.'
          },
          usp: {
            date: 'Concluído',
            title: 'USP (Universidade de São Paulo)',
            desc: 'Curso de extensão universitária, em língua inglesa com foco na reading e writing.'
          }
        },
        lattes: {
          title: 'Histórico Completo',
          description: 'Você também pode acessar meu Currículo Lattes para visualizar a lista integral de premiações, medalhas, projetos de pesquisa e cursos complementares.',
          button: 'Acessar Lattes'
        }
      },
      experience: {
        tagline: 'Além da formação',
        title: 'Experiência Desenvolvida',
        subtitle: 'Um pouco do que venho fazendo com a engenharia, computação, liderança e disciplina.',
        tracks: {
          professional: {
            title: 'Experiência profissional & Soluções Técnicas',
            subtitle: 'Atuações profissionais, pesquisa corporativa e docência.'
          },
          volunteering: {
            title: 'Liderança & Performance',
            subtitle: 'Iniciativas voluntárias globais e representação esportiva.'
          }
        },
        unicampMonitor: {
          date: 'Fev 2026 — Presente',
          role: 'Monitor de Algoritmos (PAD)',
          desc: 'Atuação no Programa de Apoio Didático para a disciplina de Algoritmos e Programação de Computadores I, sob supervisão da Profª Drª Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Presente',
          role: 'Pesquisador e Analista IoT',
          desc: 'Pesquisa e desenvolvimento focado em automação e no módulo de acessibilidade para permitir a prática do ciclismo por PCDs visuais por meio de uma bicicleta semi-autônoma.'
        },
        haken: {
          date: 'Mar 2024 — Jan 2025',
          role: 'Diretor & Assistente de Projetos',
          bullet1: 'Liderei a estruturação e reativação de processos, identidade visual e contratos da Empresa Júnior no MEJ.',
          bullet2: 'Desenvolvi um ecossistema de treinamento prático com Next.js e Tailwind, otimizando o ramp-up de novos trainees de 90 para 30 dias.',
          bullet3: 'Representação da marca corporativa em eventos globais de empreendedorismo jovem, como o ENEJ in Florianópolis.'
        },
        desktop: {
          date: 'Jan 2024 — Fev 2024',
          role: 'Summer - Analista de Suporte Técnico',
          bullet1: 'Análise, triagem e resolução remota de infraestrutura de rede para uma base activa com mais de 1 milhão de clientes.',
          bullet2: 'Manutenção de alta performance e suporte sob os critérios de qualidade da melhor provedora de internet de SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Presente',
          role: 'Sales & International Trade Assistant',
          desc: 'Responsável pelo gerenciamento do funil corporativo na área de Outgoing Global Volunteer (oGV), liderando prospecções e consultoria estratégica internacional de intercâmbios alinhados com as ODS da ONU.',
          bullet1: 'Gestão de pipeline via CRM ativo, qualificação de leads de alto padrão e fechamento de contratos complexos.',
          bullet2: 'Negociação internacional em língua inglesa com comitês globais para o alinhamento de conformidades legais de visto e seguros.'
        },
        lau: {
          date: 'Mai 2026 — Presente',
          role: 'Atleta Titular (Jiu-Jitsu)',
          bullet1_bold: 'Campeão Estadual JUBs 2026',
          bullet1_text: 'e Vice-Campeão Absoluto na Fase SP dos Jogos Universitários Brasileiros, convocado para representar o Estado de São Paulo na Etapa Nacional.',
          bullet2: 'Atleta titular representativo de toda a delegação da Unicamp. Representando todos os cursos da universidade.'
        },
        leu: {
          date: 'Mar 2026 — Presente',
          role: 'Atleta Titular (Judô)',
          bullet1_bold: '3º Lugar Nacional JUBs Atléticas 2026',
          bullet1_text: 'e 3º Lugar estadual. Torneio organizado pela CBDU, consolidando posições no pódio estadual e nacional.',
          bullet2: 'Representante oficial de Judô na Liga das Engenharias da Unicamp, representando todos os cursos de engenharia da universidade. Além de fazer parte do TIME SP, a Seleção Paulista Universitária.'
        },
        etecTalk: {
          date: 'Fev 2023 — Dez 2023',
          role: 'Assistente de Produção Audiovisual',
          desc: 'Responsável direto pelo design de identidade estética, setup de transmissão técnica e direção das gravações, focando na democratização de inteligência técnica para a comunidade.'
        }
      },
      projects: {
        index: 'PROJETOS SELECIONADOS',
        title: 'Projetos.',
        subtitle: 'Uma vitrine conceitual com soluções robustas de engenharia de software, interfaces fluidas e arquitetura limpa.',
        viewProject: 'Visitar projeto',
        ctaHover: 'Ver projeto',
        ctaText: 'Acessar',
        solucaoJr: {
          category: 'SITE INSTITUCIONAL',
          title: 'Solução JR',
          desc: 'Portal de apresentação institucional desenvolvido para a Solução JR, uma empresa júnior de engenharia civil e arquitetura da UTFPR. Desenvolvido em regime de cocriação e colaboração estratégica com a Therion EJ.'
        },
        tetrisEj: {
          category: 'SITE INSTITUCIONAL',
          title: 'TETRIS EJ',
          desc: 'Plataforma web moderna e responsiva projetada para a Tetris EJ, empresa júnior de engenharia civil e arquitetura da UTFPR, com foco em usabilidade, performance e fortalecimento da identidade digital da marca.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Bicicleta Semi-Autônoma',
          desc: 'Adaptação e engenharia de hardware para que pessoas com deficiências visuais possam andar de bicicleta com segurança, minimizando a interferência humana. Projeto de pesquisa de alto impacto orientado pelo Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'APLICAÇÃO INDUSTRIAL // AI',
          title: 'Inova Chat',
          desc: 'Sistema de chatbot inteligente desenvolvido para filtrar e selecionar feedbacks e relatos de funcionários da Minerva Foods, tornando a comunicação empresarial altamente assertiva. Solução integrada com as APIs da OpenAI.',
          badge: '3º Lugar Hackathon InovAgro'
        },
        meuTreino: {
          category: 'APP MOBILE ANDROID',
          title: 'Meu Treino - TCC',
          desc: 'Um aplicativo nativo Android focado no gerenciamento e instrução de treinos de musculação, desenvolvido como trabalho de conclusão de curso na ETEC. Utiliza banco de dados NoSQL e autenticação segura para entregar uma experiência fluida e escalável.'
        }
      },
      footer: {
        builtWith: 'Feito com',
        andPurpose: 'e propósito.',
        disclaimer: 'Este portfólio não é apenas uma vitrine de códigos. Ele foi desenhado pixel a pixel com um objetivo singular: demonstrar minha paixão, minhas skills e minha vontade genuína de integrar o Apple Developer Academy. É a materialização do meu objetivo..',
        designedIn: 'Designed in Brazil 🇧🇷'
      },
      tutoring: {
        navbarTitle: 'Monitoria SI100',
        backToPortfolio: 'Ir para o Portfólio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algoritmos e Programação de Computadores I',
        heroSubtitle: 'Bem-vindo à central de monitoria. Aqui você encontra o cronograma, aulas, materiais de apoio e exercícios.',
        professor: 'Profª Drª Ieda Geriberto Hidalgo',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Buscar por conteúdo (ex: Ponteiros, Prova, Vetores)...',
        emptyLessons: 'Conteúdo será liberado em breve.',
        noResults: 'Nenhum conteúdo encontrado para',
        criteria: {
          title: 'Critérios de Avaliação',
          formula: 'MP = (P1 + P2 + Média atividades) / 3',
          p1: 'Prova 1 (P1):',
          p2: 'Prova 2 (P2):',
          ml: 'Média Labs (ML):',
          notes: '*Aprovação direta: MP ≥ 6.0 e Frequência ≥ 75%\n*Aprovação com Exame: MF ≥ 5.0 e Frequência ≥ 75%\n*Cálculo Final: MF = (MP + Nota Exame) / 2'
        },
        syllabus: {
          title: 'Ementa & Objetivo',
          ementaLabel: 'Ementa:',
          ementaText: 'Algoritmos: representações e técnicas de construção. Estrutura de dados e de controle de programas. Modularização, Alocação dinâmica e Implementação em C.',
          objectiveLabel: 'Objetivo:',
          objectiveText: 'Propiciar o aprendizado de uma linguagem de alto nível eficiente. Capacitar o aluno a representar problemas do mundo real em algoritmos e convertê-los para a linguagem C.',
          methodologyTitle: 'Metodologia',
          methodologyText: 'Cada aula é dividida em partes teóricas e práticas em laboratório. A primeira parte é teórica; na segunda, desenvolve-se a atividade prática, que deve ser entregue ao final da aula para compor a avaliação.'
        },
        skills: {
          title: 'Competências Desenvolvidas',
          text: '(1) Raciocínio lógico dedutivo voltado para a criação de programas computacionais;\n(2) Capacidade de reconhecer diferentes estruturas de programação, estabelecer relações entre problemas com estruturas semelhantes e implementar algoritmos computacionalmente eficientes para problemas do mundo real.\nPor meio das atividades realizadas em grupo, espera-se desenvolver as habilidades sociais e de comunicação do estudante.'
        },
        bibliography: {
          title: 'Bibliografia',
          basicTitle: 'Básica',
          complementaryTitle: 'Complementar'
        },
        absences: {
          title: 'Observações sobre Faltas (Art. 72 do Regimento Geral da Graduação)',
          subtitle: 'O abono de faltas deve ser solicitado mediante apresentação de documentos à Diretoria Acadêmica em até 15 dias após a ocorrência. Os casos previstos são:',
          item1: 'Exercício de representação estudantil (horário das reuniões).',
          item2: 'Serviços obrigatórios por lei.',
          item3: 'Falecimento (3 dias): Cônjuge, pais, filhos, irmãos, avós.',
          item4: 'Falecimento (2 dias): Padrasto, madrasta, sogros, cunhados.',
          item5: 'Competições/Congressos (Solicitar 15 dias antes. Max 5 dias nacional / 10 dias internacional).',
          item6: 'Licença Paternidade (5 dias).',
          note: 'Parágrafo único: O abono de falta não concede o direito à reposição de conteúdo pelo(a) docente.'
        },
        contact: {
          title: 'Dúvidas ou sugestões?',
          text: 'Envie um email para:',
          subject: 'com o assunto "SI100"'
        },
        footer: {
          builtWith: 'Construído com',
          purpose: 'e propósito.',
          disclaimer: 'Esta é uma página pessoal e não uma página oficial da universidade. Seu conteúdo é de minha autoria e responsabilidade. Foi desenvolvida para auxiliar os alunos na disciplina de Algoritmos e Programação de computadores I, ministrada na FT - Unicamp.'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoria", title: "Aula 01: Apresentação & Introdução", description: "Apresentação da disciplina, critérios de avaliação e introdução aos algoritmos.", lessons: [{ title: "Plano de Ensino e Critérios", type: "doc", document: "planoEnsino.pdf" }, { title: "Conceito de Algoritmo", type: "slide", document: "planoEnsino.pdf" }, { title: "Configuração do Ambiente (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratório", title: "Aula 02: Conceitos Básicos", description: "Constantes, variáveis, tipos primitivos e comandos de entrada/saída.", lessons: [{ title: "Tipos de dados em C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Aula 03: Atribuições e Operadores", description: "Expressões aritméticas, precedência e operadores relacionais.", lessons: [{ title: "Operadores Aritméticos e Relacionais", type: "slide" }, { title: "Lista 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratório", title: "Aula 04: Estrutura Sequencial e Condicional", description: "Comandos de decisão simples e composta (if/else).", lessons: [{ title: "Lógica booleana em C", type: "video" }, { title: "Estruturas if e else", type: "code" }, { title: "Lista 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoria", title: "Aula 05: Seleção Múltipla & Op. Lógicos", description: "Comando switch-case e operadores lógicos (AND, OR, NOT).", lessons: [{ title: "O comando switch", type: "code" }, { title: "Tabela verdade e operadores &&, ||, !", type: "slide" }, { title: "Exercícios de fixação", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratório", title: "Aula 06: Repetição (Teste no Início/Fim)", description: "Estruturas de repetição while e do-while.", lessons: [{ title: "Laço While: Sintaxe e uso", type: "video" }, { title: "Laço Do-While: Diferenças", type: "code" }, { title: "Atividade de Lab 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoria", title: "Aula 07: Repetição (Variável de Controle)", description: "Estrutura de repetição for e laços aninhados.", lessons: [{ title: "O laço For", type: "slide" }, { title: "Loops dentro de loops", type: "code" }, { title: "Lista de repetição", type: "doc" }] },
          { id: 8, date: "24/04", type: "Avaliação", highlight: true, title: "P1 - PROVA TEÓRICA 1", description: "Avaliação referente ao conteúdo ministrado nas aulas 1 a 7.", lessons: [{ title: "Revisão Geral P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratório", title: "Aula 08: Vetores (Arrays Unidimensionais)", description: "Declaração, inicialização e manipulação de vetores.", lessons: [{ title: "Conceito de Array", type: "slide" }, { title: "Percorrendo vetores com laços", type: "code" }, { title: "Atividade de Lab 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoria", title: "Aula 09: Matrizes e Strings", description: "Arrays multidimensionais e manipulação de cadeias de caracteres.", lessons: [{ title: "Matrizes em C", type: "slide" }, { title: "Strings: Vetores de char", type: "code" }, { title: "Biblioteca string.h", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratório", title: "Aula 10: Modularização (Funções)", description: "Funções, escopo de variáveis e passagem de parâmetros.", lessons: [{ title: "Criando suas próprias funções", type: "video" }, { title: "Parâmetros por valor vs referência", type: "code" }, { title: "Atividade de Lab 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoria", title: "Aula 11: Ponteiros", description: "Conceito de endereço de memória, ponteiros e aritmética de ponteiros.", lessons: [{ title: "O que é um ponteiro?", type: "slide" }, { title: "Operadores & e *", type: "code" }, { title: "Ponteiros e Vetores", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratório", title: "Aula 12: Alocação Dinâmica & Structs", description: "Malloc, free e estruturas de dados heterogêneas (registros).", lessons: [{ title: "Alocação Dinâmica de Memória", type: "video" }, { title: "Structs (Registros)", type: "code" }, { title: "Atividade de Lab 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Avaliação", highlight: true, title: "P2 - PROVA TEÓRICA 2", description: "Avaliação cumulativa (foco aulas 8 a 13).", lessons: [{ title: "Revisão P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Encerramento", title: "Aula 13: Revisão e Médias", description: "Entrega de notas e revisão de faltas.", lessons: [] },
          { id: 16, date: "17/07", type: "Avaliação", highlight: true, title: "EXAME FINAL", description: "Para alunos com média >= 2.5 e < 5.0 e Frequência >= 75%.", lessons: [] }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Trilha Sonora Ativa',
          paused: 'Trilha Sonora Pausada',
          ariaLabel: 'Controlar música de fundo',
        },
        hero: {
          badge: 'RETROSPECTIVA DOS ANOS',
          title: 'Quem é o Digo?',
          subtitle: 'Esta não é uma simples página "Sobre Mim". É uma coleção não filtrada de memórias, acordes, esportes, e algumas situações engraçadas que me trouxeram até aqui. Pegue um café, dê play na trilha sonora e aproveite a jornada.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'A Criança arteira e curiosa',
            p1: 'Se você me vê focado no VS Code hoje, talvez não imagine que minha jornada começou desmontando coisas quando criança. Fui aquela criança que gostava de ver o que tinha dentro das coisas, e não demorou muito para que eu começasse a desmontar e montar brinquedos, computadores, videogames e até um ventilador (que nunca mais funcionou).',
            p2: 'Criado em fazenda, um dos meus momentos mais inesquecíveis (e talvez hilários) foi quando meus pais criavam porcos no quintal, e eu, com toda a minha genialidade, resolvi pegar um filhote e levar pra mostrar pro meu pai. O resultado? O porquinho ficou tão assustado que começou a gritar e a mãe dele correr atrás de mim (spoiler: ela me mordeu, e esse é o motivo da minha cicatriz no queixo).',
          },
          math: {
            num: '02',
            title: 'Matemática e a escola',
            p1: 'Na infância, eu confesso que não gostava de estudar, mas, além de desmontar coisas, eu também tinha uma curiosidade por números. A matemática foi uma das minhas matérias favoritas, e eu adorava resolver problemas e desafios, o que me levou a participar de competições de conhecimentos da região, onde ganhei alguns prêmios.',
            p2: 'A minha primeira medalha foi relacionada a isso!',
          },
          soccer: {
            num: '03',
            title: 'Meu primeiro esporte: O Futebol',
            text: {
              desc1: 'Minha relação com os esportes começou cedo, e curiosamente, com o futebol, graças ao meu pai, me levando para os jogos do time que ele era treinador.',
              desc2: 'Infelizmente, minha habilidade com a bola não era das melhores, então essa parte da vida não durou muito tempo.',
              descImg: 'Time unido pré jogo.'
            }
          },
          martial1: {
            num: '04',
            title: 'As artes marciais: Kung Fu',
            p1: 'Durante minha infância, tive a oportunidade de praticar minha primeira arte marcial, em um projeto da minha escola na época. Foi lá que eu conheci o Kung Fu.',
            p2: 'A breve passagem pelo Kung Fu, me ensinou disciplina, foco e a importância de fazer tudo com excelência (ou ao menos, tentar). Foi uma experiência incrível que me marcou profundamente, e até hoje carrego alguns ensinamentos dessa época.',
          },
          martial2: {
            num: '05',
            title: 'As artes marciais: Muay Thai',
            p1: 'Na minha pré adolescência, tive a oportunidade de praticar outra arte marcial, o Muay Thai, em um projeto social de uma igreja local da minha cidade',
            p2: 'Com o tempo, me tornei um dos alunos mais dedicados e recebi uma bolsa do professor Júnior Shaolin, para treinar em sua academia.',
            descImg: 'Treino de Muay Thai com o professor Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'O dia em que me fizeram uma festa surpresa na escola',
            p1: 'Nunca dei tanta significancia aos meus aniversários, mas, um dia, ainda durante meu ensino fundamental, meus amigos se uniram, sem eu saber da nada, e me fizeram uma festa de aniversário surpresa na escola.',
            p2: 'Foi um momento tão marcante que até hoje, quando lembro, me sinto muito grato por ter amigos tão incríveis. E claro, a festa foi incrível, com direito a bolo, brigadeiro e muita diversão. Agradecimento especiais à minha turma do 9º ano, que fez esse dia tão especial para mim.',
            descImg: 'Cortando o bolo para os amigos'
          },
          formatura1: {
            num: '07',
            title: 'Minha formatura do Fundamental',
            p1: 'E talvez o momento mais esperado pelas crianças chegou pra mim, a formatura. E Com toda certeza, foi uma das coisas mais gratificates que já vivi. Juntamente com alguns professores, organizamos quermesses, rifas, e outras atividades para arrecadar fundos para a festa de formatura.',
            p2: 'Quando o grande dia chegou, foi simplesmente incrível. Graças ao professor Paulo Bernardo, escrevi meus primeiros trechos de um livro, que também foi escrito por cada um dos meus colegas de turma, impresso e entregue para cada um de nós como uma lembrança dessa fase tão importante. E claro, a festa foi incrível.',
            descImg: 'Recebendo o livro e o diploma de formatura das mãos do professor Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: 'Fui aprovado para cursar o Ensino Médio e Técnico na Etec!',
            diary: {
              title: 'Minhas primeiras aulas de sistemas embarcados',
              desc: 'Um registro do dia em que tivemos um desafio de montar um circuito de um semáforo utilizando o arduíno.'
            },
            tests: {
              title: 'Minhas primeiras provas de programação',
              desc: 'E as provas eram assim, com um monte de códigos escritos à mão, e eu tentando entender o que estava acontecendo. Foi um desafio, mas também parte do conjunto de gatilhos para o meu amor pela programação.'
            },
            first: {
              title: 'Meu primeiro dia de aula na ETEC',
              desc: 'Lembro que cheguei, e tudo era novo, novos professores, novos colegas, novas salas e laboratóriso, tudo foi mágico!',
            },
            codes: {
              title: 'Meus primeiros códigos escritos',
              desc: 'Aqui começou a minha jornada com códigos. Tudo muito ambíguo e novo pra um garoto de 15 anos. Foi um processo de tentativas e erros, mas cada linha de código escrita era uma pequena vitória.',
            }
          },
          coral: {
            num: '9',
            title: 'Primeiros acordes',
            music: {
              desc1: 'Durante a pandemia do covid-19, ficando meses em casa, surgiu novamente a curiosidade aprender novas coisas. Entre uma delas, tocar instrumentos musicais. E foi assim que comecei a aprender violão e ukulele.',
              desc2: 'Eu tinha o youtube, um vioão velho e a vontade de aprender. Depois de um tempo, postando alguns vídeos tocando, fui convidado para tocar no Coral da Etec, onde tive a oportunidade de tocar em algumas apresentações.',
              descImg: 'Um registro do dia da minha primeira apresentação tocando violão, no coral que participava na Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'As artes marciais: O Jiu Jítsu',
            p1: 'Aqui começou a minha relação com o Jiu Jítsu, que é o esporte que mais me marcou e que mais me ensinou ao longo da minha vida. Comecei a praticar como um hobby, mas, em menos de um mês, meu professor, Huelder Motta, já me inscreveu para competir. Sem esperar, fui campeão em todos os campeonatos que lutei na faixa branca. Foi aí que tudo começou. ',
            p2: 'Sendo um caso atípico, fui promovido à faixa azul em 3 meses, mesmo sem saber direito o que estava fazendo. Mesmo assim, fui melhorando, vencendo as competições que participava, e em pouco tempo, fui começando a receber patrocínios, bolsas e convites para treinar em outras academias. ',
            descImg: 'Prime Jiu Jítsu Experience.'
          },
          firstHacka: {
            num: '11',
            title: '1º Congresso Inovagro & Bruto Hacka',
            text: {
              desc1: 'Na foto, Maria Eduarda Ayres, Leona do Nascimento e eu, elaborando o projeto para a apresentação final do Hackathon.',
              desc2: 'Sem qualquer sombra de dúvidas, esse foi com certeza, o divisor de águas para a escolha da minha carreira. Foi a primeira vez que participei de um hackathon, e em meio a tantas incertezas, nervosismo e inexperiência, foi aqui que eu percebi que realmente estava no caminho certo. Vi que eu poderia realmente resolver problemas reais da sociedade, fazendo o que eu amava fazer, mesmo que com pouca experiência na época.',
              descImg: 'Recebemos a premiação de 3º lugar, com o projeto Inova Chat, um sistema de chatbot inteligente desenvolvido para filtrar e selecionar feedbacks e relatos de funcionários da Minerva Foods, tornando a comunicação empresarial altamente assertiva. Solução integrada com as APIs da OpenAI.',
              descImg2: 'Premiados do 3º Lugar'
            }
          },
          diary: {
            num: '12',
            title: 'Primeira matéria em um jornal',
            diary: {
              title: 'O começo de um legado',
              desc: 'Um registro do dia da minha primeira matéria em um jornal, onde ficou documentado um dos meus primeiros títulos no Jiu-Jítsu.'
            },
            tv: {
              title: 'Primeiras provas de programação',
              desc: 'Ao longo de vários acontecimentos, tive a oportunidade de aparecer em programas de televisão.'
            },
            teach: {
              title: 'Aparições em revistas',
              desc: 'Sempre fui uma pessoa muito tímida. Me expor, como modelo na adolescencia, foi uma das formas que encontrei pra superar isso. Sem esperar, recebi alguns prêmios, alguns contratos, e aos poucos fui perdendo o medo do público.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Primeira aprovação em um vestibular',
            p1: 'E o um dos momentos mais cobrados na vida de um jovem do ensino médio chegou, a escolha da faculdade. E para mim, foi um processo muito difícil, cheio de dúvidas e incertezas. Na época havia sido aprovadao em diversas univerisdades, mas acabei escolhendo cursar Ciência da Computação na UTFPR.',
            p2: 'Obviamente, tudo foi mágico, a alegria de passar, a ansiedade de começar, a mudança de estado, a expectativa de como seria a faculdade, tudo isso foi uma mistura de emoções que, quando vejo outros passando por isso, me lembro de como foi para mim, e fico genuínamente feliz.',
            descImg: 'Prime Jiu Jítsu Experience.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon Sistema FAEP/SENAR',
            text: {
              desc1: 'Já na faculdade, mas ainda no contexto da formação técnica, tive a oportunidade de participar do Ideathon do Sistema FAEP/SENAR, um hackathon onde pude desenvolver em grupo, um modelo de negócio para o setor agropecuário.',
              desc2: 'A solução nos rendeu a premiação de 3º lugar, e mais importante do que isso, a certeza de que eu estava no caminho certo, e que eu poderia realmente fazer a diferença.',
              descImg: 'Recebendo a premiação das mãos do Ricardo Ost e Jefrey kleine Albers ',
              descImg2: 'Apresentando o projeto'
            }
          },
        },
        labels: {
          liveChildhood: 'Infância Viva',
          mediaHighlight: 'Destaque na Mídia',
        }
      }
    }
  },
  en: {
    translation: {
      meta: {
        title: 'Rodrigo Dias - Full Stack Developer',
        description: 'Portfolio of Rodrigo Dias, Full Stack Developer'
      },
      navbar: {
        location: 'Campinas-SP',
        themeToggle: 'Toggle light and dark theme',
        home: 'Home',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
        tutoring: 'Tutoring',
        portfolio: 'Go to portfolio',
        portfolio2: 'Back to portfolio',
        language: 'Language'
      },
      hero: {
        titleLine1: 'Future',
        titleLine2: 'Apple developer',
        summary: 'Systems Development Technician and Telecommunications Engineering student',
        email: 'E-mail',
        contactCta: 'Get in touch',
        downloadCv: 'Download CV'
      },
      about: {
        title: 'About Me',
        paragraph1: 'Also known as <highlight>Digo</highlight>, I am a Systems Development Technician from Etec and I am currently studying Telecommunications Engineering at Unicamp.',
        paragraph2: 'I have experience developing <highlight>web applications</highlight> with <highlight>Next.js, TypeScript</highlight> and <highlight>React.js</highlight>, as well as using <highlight>no-code tools</highlight> like <highlight>WordPress (Elementor)</highlight> and <highlight>Wix</highlight>. I also have experience developing <highlight>native mobile applications</highlight> in <highlight>Kotlin</highlight> and <highlight>Java</highlight>.',
        paragraph3: 'For me, code goes far beyond syntax; it is about <highlight>solving real problems</highlight>. Therefore, I constantly seek to expand my limits, exploring from the logical precision of programming with <highlight>C/C++</highlight>, to data analysis.',
        paragraph4: 'Technology is my craft, but it is the <highlight>stories and people</highlight> that move me. When I am not coding, you will probably find me immersed in sports, listening to music, playing instruments, or even participating in competitions.',
        readMore: 'You can learn more about me by clicking here! ; )',
      },
      education: {
        title: 'Education & Achievements',
        subtitle: 'A solid academic foundation in technology, complemented by the discipline of high-performance sports and continuous innovation.',
        unicamp: {
          date: '2025 — Present',
          institution: 'State University of Campinas (UNICAMP)',
          degree: 'Bachelor of Telecommunications Engineering',
          description: 'Focus on engineering, complex algorithms, and system architecture. Actively involved in the academic community.',
          tag1: 'System Design and Algorithm Analysis',
          tag2: 'Software Engineering'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Federal University of Technology – Paraná (UTFPR)',
          degree: 'Bachelor of Computer Science',
          description: 'A period of deep immersion in initial development concepts, design patterns, and mathematical foundations for computing.',
          tag1: 'Algorithm Analysis',
          tag2: 'System Design'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'High School integrated with IT Technician',
          description: 'Where the passion for technology began. Development of the first programming logic and complete applications.',
          tag1: 'Algorithms',
          tag2: 'System Analysis'
        },
        languages: {
          title: 'Languages',
          pt: 'Portuguese',
          ptLevel: 'Native',
          en: 'English',
          enLevel: 'B1 - Intermediate',
          verify: 'Certification'
        },
        awards: {
          title: 'Highlights & Competitions',
          jubs: '1st Place JUBs SP (Jiu-Jitsu) - 2026',
          hackathonPhp: '1st Place Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3rd Place IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3rd Place Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Honorable Mention 16th OBMEP - 2021'
        },
        languages2: {
          title: 'Extra courses',
          wizard: {
            date: 'FEB 2026 - Currently',
            title: 'Wizard By Pearson',
            desc: 'English course focused on vocabulary and conversation.'
          },
          cel: {
            date: 'FEB 2026 - Currently',
            title: 'Unicamp Language Teaching Center',
            desc: 'English focused on speaking, writing, listening, and reading, with academic themes.'
          },
          usp: {
            date: 'Completed',
            title: 'USP (University of São Paulo)',
            desc: 'University extension course in English, focusing on reading and writing.'
          }
        },
        lattes: {
          title: 'Full History',
          description: 'You can also access my Lattes Curriculum to view the full list of awards, medals, research projects, and additional courses.',
          button: 'Access Lattes'
        }
      },
      experience: {
        tagline: 'Beyond Education',
        title: 'Developed Experience',
        subtitle: 'A glimpse of what I\'ve been doing with engineering, computing, leadership, and discipline.',
        tracks: {
          professional: {
            title: 'Professional Experience & Technical Solutions',
            subtitle: 'Professional roles, corporate research, and teaching.'
          },
          volunteering: {
            title: 'Leadership & Performance',
            subtitle: 'Global volunteer initiatives and sports representation.'
          }
        },
        unicampMonitor: {
          date: 'Feb 2026 — Present',
          role: 'Algorithms Monitor (PAD)',
          desc: 'Working in the Didactic Support Program for the Algorithms and Computer Programming I course, under the supervision of Prof. Dr. Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Present',
          role: 'Researcher and IoT Analyst',
          desc: 'Research and development focused on automation and the accessibility module to enable visually impaired individuals to cycle using a semi-autonomous bicycle.'
        },
        haken: {
          date: 'Mar 2024 — Jan 2025',
          role: 'Director & Project Assistant',
          bullet1: 'Led the structuring and reactivation of processes, visual identity, and contracts for the Junior Enterprise within the MEJ (Junior Enterprise Movement).',
          bullet2: 'Developed a practical training ecosystem with Next.js and Tailwind, optimizing the ramp-up of new trainees from 90 to 30 days.',
          bullet3: 'Represented the corporate brand at global youth entrepreneurship events, such as ENEJ in Florianópolis.'
        },
        desktop: {
          date: 'Jan 2024 — Feb 2024',
          role: 'Summer - Technical Support Analyst',
          bullet1: 'Analysis, triage, and remote resolution of network infrastructure for an active base of over 1 million customers.',
          bullet2: 'High-performance maintenance and support under the quality criteria of São Paulo\'s best internet provider.'
        },
        aiesec: {
          date: 'Mar 2026 — Present',
          role: 'Sales & International Trade Assistant',
          desc: 'Responsible for managing the corporate funnel in the Outgoing Global Volunteer (oGV) area, leading prospecting and strategic international exchange consulting aligned with the UN SDGs.',
          bullet1: 'Pipeline management via active CRM, qualification of high-standard leads, and closing of complex contracts.',
          bullet2: 'International negotiation in English with global committees for alignment of legal visa and insurance compliance.'
        },
        lau: {
          date: 'May 2026 — Present',
          role: 'Starting Athlete (Jiu-Jitsu)',
          bullet1_bold: 'State Champion JUBs 2026',
          bullet1_text: 'and Absolute Runner-up in the SP Phase of the Brazilian University Games, selected to represent São Paulo State in the National Stage.',
          bullet2: 'Starting athlete representing the entire Unicamp delegation, representing all university courses.'
        },
        leu: {
          date: 'Mar 2026 — Present',
          role: 'Starting Athlete (Judo)',
          bullet1_bold: '3rd Place National JUBs Atléticas 2026',
          bullet1_text: 'and 3rd Place state. Tournament organized by CBDU, consolidating state and national podium positions.',
          bullet2: 'Official Judo representative in the Unicamp Engineering League, representing all engineering courses of the university. Also part of TEAM SP, the São Paulo University Selection.'
        },
        etecTalk: {
          date: 'Feb 2023 — Dec 2023',
          role: 'Audiovisual Production Assistant',
          desc: 'Directly responsible for aesthetic identity design, technical transmission setup, and recording direction, focusing on democratizing technical intelligence for the community.'
        }
      },
      projects: {
        index: 'SELECTED PROJECTS',
        title: 'Projects.',
        subtitle: 'A conceptual showcase of robust software engineering solutions, fluid interfaces, and clean architecture.',
        viewProject: 'Visit project',
        ctaHover: 'View project',
        ctaText: 'Access',
        solucaoJr: {
          category: 'INSTITUTIONAL SITE',
          title: 'Solução JR',
          desc: 'Institutional presentation portal developed for Solução JR, a junior enterprise of civil engineering and architecture at UTFPR. Developed in co-creation and strategic collaboration with Therion EJ.'
        },
        tetrisEj: {
          category: 'INSTITUTIONAL SITE',
          title: 'TETRIS EJ',
          desc: 'Modern and responsive web platform designed for Tetris EJ, junior enterprise of civil engineering and architecture at UTFPR, focusing on usability, performance, and strengthening the brand\'s digital identity.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Semi-Autonomous Bicycle',
          desc: 'Hardware adaptation and engineering to enable visually impaired people to ride a bicycle safely, minimizing human interference. High-impact research project supervised by Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'INDUSTRIAL APPLICATION // AI',
          title: 'Inova Chat',
          desc: 'Intelligent chatbot system developed to filter and select employee feedback and reports at Minerva Foods, making corporate communication highly assertive. Solution integrated with OpenAI APIs.',
          badge: '3rd Place Hackathon InovAgro'
        },
        meuTreino: {
          category: 'ANDROID MOBILE APP',
          title: 'Meu Treino - Capstone',
          desc: 'A native Android application focused on managing and instructing weight training workouts, developed as a capstone project at ETEC. Uses NoSQL database and secure authentication to deliver a smooth and scalable experience.'
        }
      },
      footer: {
        builtWith: 'Built with',
        andPurpose: 'and purpose.',
        disclaimer: 'This portfolio is not just a showcase of code. It was designed pixel by pixel with a singular goal: to demonstrate my passion, my skills, and my genuine desire to join the Apple Developer Academy. It is the materialization of my goal..',
        designedIn: 'Designed in Brazil 🇧🇷'
      },
      tutoring: {
        navbarTitle: 'SI100 Tutoring',
        backToPortfolio: 'Back to Portfolio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algorithms and Computer Programming I',
        heroSubtitle: 'Welcome to the tutoring hub. Here you\'ll find the schedule, classes, support materials, and exercises.',
        professor: 'Prof. Dr. Ieda Geriberto Hidalgo',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Search for content (e.g., Pointers, Exam, Arrays)...',
        emptyLessons: 'Content will be released soon.',
        noResults: 'No results found for',
        criteria: {
          title: 'Assessment Criteria',
          formula: 'MP = (P1 + P2 + Activities Average) / 3',
          p1: 'Exam 1 (P1):',
          p2: 'Exam 2 (P2):',
          ml: 'Lab Average (ML):',
          notes: '*Direct pass: MP ≥ 6.0 and Attendance ≥ 75%\n*Pass with Final Exam: MF ≥ 5.0 and Attendance ≥ 75%\n*Final Calculation: MF = (MP + Exam Grade) / 2'
        },
        syllabus: {
          title: 'Syllabus & Objective',
          ementaLabel: 'Syllabus:',
          ementaText: 'Algorithms: representations and construction techniques. Data and control structures. Modularization, Dynamic allocation, and C implementation.',
          objectiveLabel: 'Objective:',
          objectiveText: 'Provide learning of an efficient high-level language. Enable the student to represent real-world problems in algorithms and convert them to C language.',
          methodologyTitle: 'Methodology',
          methodologyText: 'Each class is divided into theoretical and practical laboratory parts. The first part is theoretical; in the second, the practical activity is developed and must be submitted by the end of class to compose the assessment.'
        },
        skills: {
          title: 'Developed Competencies',
          text: '(1) Deductive logical reasoning oriented towards creating computer programs;\n(2) Ability to recognize different programming structures, establish relationships between problems with similar structures, and implement computationally efficient algorithms for real-world problems.\nThrough group activities, it is expected to develop the student\'s social and communication skills.'
        },
        bibliography: {
          title: 'Bibliography',
          basicTitle: 'Basic',
          complementaryTitle: 'Complementary'
        },
        absences: {
          title: 'Remarks on Absences (Art. 72 of the General Undergraduate Regulations)',
          subtitle: 'Absence justification must be requested by submitting documents to the Academic Directorate within 15 days after the occurrence. The foreseen cases are:',
          item1: 'Student representation duties (meeting times).',
          item2: 'Services required by law.',
          item3: 'Bereavement (3 days): Spouse, parents, children, siblings, grandparents.',
          item4: 'Bereavement (2 days): Stepfather, stepmother, in-laws, brothers/sisters-in-law.',
          item5: 'Competitions/Congresses (Request 15 days in advance. Max 5 days national / 10 days international).',
          item6: 'Paternity Leave (5 days).',
          note: 'Single paragraph: Absence justification does not grant the right to content replacement by the instructor.'
        },
        contact: {
          title: 'Questions or suggestions?',
          text: 'Send an email to:',
          subject: 'with subject "SI100"'
        },
        footer: {
          builtWith: 'Built with',
          purpose: 'and purpose.',
          disclaimer: 'This is a personal page and not an official university page. Its content is of my authorship and responsibility. It was developed to assist students in the Algorithms and Computer Programming I course, taught at FT - Unicamp.'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoria", title: "Class 01: Presentation & Introduction", description: "Course presentation, assessment criteria, and introduction to algorithms.", lessons: [{ title: "Teaching Plan and Criteria", type: "doc", document: "planoEnsino.pdf" }, { title: "Concept of Algorithm", type: "slide", document: "planoEnsino.pdf" }, { title: "Environment Setup (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratório", title: "Class 02: Basic Concepts", description: "Constants, variables, primitive types, and input/output commands.", lessons: [{ title: "Data types in C (int, float, char)", type: "slide" }, { title: "List 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Class 03: Assignments and Operators", description: "Arithmetic expressions, precedence, and relational operators.", lessons: [{ title: "Arithmetic and Relational Operators", type: "slide" }, { title: "List 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratório", title: "Class 04: Sequential and Conditional Structure", description: "Simple and compound decision commands (if/else).", lessons: [{ title: "Boolean logic in C", type: "video" }, { title: "Structures if and else", type: "code" }, { title: "List 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoria", title: "Class 05: Multiple Selection & Logical Operators", description: "Switch-case command and logical operators (AND, OR, NOT).", lessons: [{ title: "The switch command", type: "code" }, { title: "Truth table and operators &&, ||, !", type: "slide" }, { title: "Practice exercises", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratório", title: "Class 06: Repetition (Test at Beginning/End)", description: "While and do-while repetition structures.", lessons: [{ title: "While loop: Syntax and usage", type: "video" }, { title: "Do-While loop: Differences", type: "code" }, { title: "Lab Activity 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoria", title: "Class 07: Repetition (Control Variable)", description: "For repetition structure and nested loops.", lessons: [{ title: "The For loop", type: "slide" }, { title: "Loops inside loops", type: "code" }, { title: "Repetition list", type: "doc" }] },
          { id: 8, date: "24/04", type: "Avaliação", highlight: true, title: "P1 - THEORETICAL EXAM 1", description: "Exam covering content from classes 1 to 7.", lessons: [{ title: "General Review P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratório", title: "Class 08: Arrays (One-dimensional)", description: "Declaration, initialization, and manipulation of arrays.", lessons: [{ title: "Array Concept", type: "slide" }, { title: "Traversing arrays with loops", type: "code" }, { title: "Lab Activity 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoria", title: "Class 09: Matrices and Strings", description: "Multidimensional arrays and string manipulation.", lessons: [{ title: "Matrices in C", type: "slide" }, { title: "Strings: Character arrays", type: "code" }, { title: "string.h library", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratório", title: "Class 10: Modularization (Functions)", description: "Functions, variable scope, and parameter passing.", lessons: [{ title: "Creating your own functions", type: "video" }, { title: "Parameters by value vs reference", type: "code" }, { title: "Lab Activity 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoria", title: "Class 11: Pointers", description: "Memory address concept, pointers, and pointer arithmetic.", lessons: [{ title: "What is a pointer?", type: "slide" }, { title: "Operators & and *", type: "code" }, { title: "Pointers and Arrays", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratório", title: "Class 12: Dynamic Allocation & Structs", description: "Malloc, free, and heterogeneous data structures (records).", lessons: [{ title: "Dynamic Memory Allocation", type: "video" }, { title: "Structs (Records)", type: "code" }, { title: "Lab Activity 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Avaliação", highlight: true, title: "P2 - THEORETICAL EXAM 2", description: "Cumulative exam (focus classes 8 to 13).", lessons: [{ title: "Review P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Encerramento", title: "Class 13: Review and Grades", description: "Grade delivery and absence review.", lessons: [] },
          { id: 16, date: "17/07", type: "Avaliação", highlight: true, title: "FINAL EXAM", description: "For students with average >= 2.5 and < 5.0 and Attendance >= 75%.", lessons: [] }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Soundtrack Playing',
          paused: 'Soundtrack Paused',
          ariaLabel: 'Control background music',
        },
        hero: {
          badge: 'YEARS RETROSPECTIVE',
          title: 'Who is Digo?',
          subtitle: 'This is not a simple "About Me" page. It\'s an unfiltered collection of memories, chords, sports, and some funny situations that brought me here. Grab a coffee, press play on the soundtrack, and enjoy the journey.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'The mischievous and curious kid',
            p1: 'If you see me focused on VS Code today, you might not imagine that my journey began by taking things apart as a child. I was that kid who liked to see what was inside things, and it didn\'t take long before I started disassembling and reassembling toys, computers, video games, and even a fan (which never worked again).',
            p2: 'Raised on a farm, one of my most unforgettable (and perhaps hilarious) moments was when my parents raised pigs in the backyard, and I, with all my genius, decided to grab a piglet to show it to my dad. The result? The little pig got so scared it started squealing and its mother ran after me (spoiler: she bit me, and that\'s the reason for the scar on my chin).',
          },
          math: {
            num: '02',
            title: 'Math and school',
            p1: 'In childhood, I confess I didn\'t like to study, but besides taking things apart, I also had a curiosity for numbers. Math was one of my favorite subjects, and I loved solving problems and challenges, which led me to participate in regional knowledge competitions, where I won some prizes.',
            p2: 'My first medal was related to that!',
          },
          soccer: {
            num: '03',
            title: 'My first sport: Soccer',
            text: {
              desc1: 'My relationship with sports started early, and curiously, with soccer, thanks to my dad, who took me to the games of the team he coached.',
              desc2: 'Unfortunately, my skill with the ball wasn\'t the best, so this part of life didn\'t last long.',
              descImg: 'United team pre-game.'
            }
          },
          martial1: {
            num: '04',
            title: 'Martial arts: Kung Fu',
            p1: 'During my childhood, I had the opportunity to practice my first martial art, in a project at my school at the time. It was there that I got to know Kung Fu.',
            p2: 'The brief passage through Kung Fu taught me discipline, focus, and the importance of doing everything with excellence (or at least trying). It was an incredible experience that deeply marked me, and to this day I carry some teachings from that time.',
          },
          martial2: {
            num: '05',
            title: 'Martial arts: Muay Thai',
            p1: 'In my early adolescence, I had the opportunity to practice another martial art, Muay Thai, in a social project of a local church in my city.',
            p2: 'Over time, I became one of the most dedicated students and received a scholarship from teacher Júnior Shaolin to train at his gym.',
            descImg: 'Muay Thai training with teacher Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'The day they threw me a surprise party at school',
            p1: 'I never gave much importance to my birthdays, but one day, still during my middle school, my friends got together, without me knowing anything, and threw me a surprise birthday party at school.',
            p2: 'It was such a remarkable moment that even today, when I remember it, I feel very grateful for having such incredible friends. And of course, the party was amazing, with cake, brigadeiro, and lots of fun. Special thanks to my 9th-grade class, who made that day so special for me.',
            descImg: 'Cutting the cake for friends'
          },
          formatura1: {
            num: '07',
            title: 'My middle school graduation',
            p1: 'And perhaps the most awaited moment for kids came for me, the graduation. It was certainly one of the most rewarding things I\'ve ever experienced. Together with some teachers, we organized fairs, raffles, and other activities to raise funds for the graduation party.',
            p2: 'When the big day arrived, it was simply incredible. Thanks to teacher Paulo Bernardo, I wrote the first excerpts of a book, which was also written by each of my classmates, printed and given to each of us as a memento of that so important phase. And of course, the party was incredible.',
            descImg: 'Receiving the book and graduation diploma from teacher Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: 'I was approved to attend High School and Technical at Etec!',
            diary: {
              title: 'My first embedded systems classes',
              desc: 'A record of the day when we had a challenge to assemble a traffic light circuit using Arduino.'
            },
            tests: {
              title: 'My first programming tests',
              desc: 'And the tests were like this, with a bunch of handwritten codes, and me trying to understand what was happening. It was a challenge, but also part of the set of triggers for my love of programming.'
            },
            first: {
              title: 'My first day of class at ETEC',
              desc: 'I remember arriving, and everything was new, new teachers, new classmates, new rooms and laboratories, everything was magical!',
            },
            codes: {
              title: 'My first written codes',
              desc: 'Here my journey with codes began. Everything very ambiguous and new for a 15-year-old boy. It was a process of trial and error, but each line of code written was a small victory.',
            }
          },
          coral: {
            num: '9',
            title: 'First chords',
            music: {
              desc1: 'During the covid-19 pandemic, staying months at home, the curiosity to learn new things emerged again. Among them, playing musical instruments. And that\'s how I started learning guitar and ukulele.',
              desc2: 'I had YouTube, an old guitar, and the will to learn. After a while, posting some videos playing, I was invited to play in the Etec Choir, where I had the opportunity to play at some performances.',
              descImg: 'A record of the day of my first performance playing guitar, in the choir I participated in at Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'Martial arts: Jiu-Jitsu',
            p1: 'Here began my relationship with Jiu-Jitsu, which is the sport that most marked me and taught me the most throughout my life. I started practicing as a hobby, but within less than a month, my teacher, Huelder Motta, had already signed me up to compete. Without expecting it, I was champion in all the championships I fought at white belt. That\'s when it all started.',
            p2: 'Being an atypical case, I was promoted to blue belt in 3 months, even without really knowing what I was doing. Even so, I kept improving, winning the competitions I participated in, and in a short time, I started receiving sponsorships, scholarships, and invitations to train at other gyms.',
            descImg: 'First Jiu-Jitsu Experience.'
          },
          firstHacka: {
            num: '11',
            title: '1st Inovagro Congress & Bruto Hacka',
            text: {
              desc1: 'In the photo, Maria Eduarda Ayres, Leona do Nascimento, and I, preparing the project for the final presentation of the Hackathon.',
              desc2: 'Without any doubt, this was definitely the watershed moment for my career choice. It was the first time I participated in a hackathon, and amidst so many uncertainties, nervousness, and inexperience, it was here that I realized I was really on the right track. I saw that I could really solve real problems of society, doing what I loved to do, even with little experience at the time.',
              descImg: 'We received the 3rd place award, with the Inova Chat project, an intelligent chatbot system developed to filter and select feedback and reports from Minerva Foods employees, making corporate communication highly assertive. Solution integrated with OpenAI APIs.',
              descImg2: '3rd Place Winners'
            }
          },
          diary: {
            num: '12',
            title: 'First newspaper article',
            diary: {
              title: 'The beginning of a legacy',
              desc: 'A record of the day of my first newspaper article, where one of my first Jiu-Jitsu titles was documented.'
            },
            tv: {
              title: 'First programming tests',
              desc: 'Over several events, I had the opportunity to appear on television programs.'
            },
            teach: {
              title: 'Magazine appearances',
              desc: 'I have always been a very shy person. Exposing myself, as a model in adolescence, was one of the ways I found to overcome that. Without expecting it, I received some awards, some contracts, and gradually I lost my fear of the public.'
            }
          },
          utfpr: {
            num: '13',
            title: 'First college entrance exam approval',
            p1: 'And one of the most pressured moments in a high school student\'s life came, the choice of college. And for me, it was a very difficult process, full of doubts and uncertainties. At the time, I had been accepted at several universities, but I ended up choosing to study Computer Science at UTFPR.',
            p2: 'Obviously, everything was magical, the joy of passing, the anxiety of starting, the change of state, the expectation of what college would be like, all of this was a mix of emotions that, when I see others going through it, reminds me of how it was for me, and I feel genuinely happy.',
            descImg: 'First Jiu-Jitsu Experience.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon FAEP/SENAR System',
            text: {
              desc1: 'Already in college, but still in the context of technical education, I had the opportunity to participate in the Ideathon of the FAEP/SENAR System, a hackathon where I could develop, in a group, a business model for the agricultural sector.',
              desc2: 'The solution earned us the 3rd place award, and more importantly than that, the certainty that I was on the right path, and that I could really make a difference.',
              descImg: 'Receiving the award from Ricardo Ost and Jefrey kleine Albers',
              descImg2: 'Presenting the project'
            }
          },
        },
        labels: {
          liveChildhood: 'Vivid Childhood',
          mediaHighlight: 'Media Spotlight',
        }
      }
    }
  },
  es: {
    translation: {
      meta: {
        title: 'Rodrigo Dias - Desarrollador Full Stack',
        description: 'Portafolio de Rodrigo Dias, Desarrollador Full Stack'
      },
      navbar: {
        location: 'Campinas-SP',
        themeToggle: 'Alternar tema claro y oscuro',
        home: 'Inicio',
        about: 'Sobre mí',
        education: 'Formación',
        experience: 'Experiencia',
        projects: 'Proyectos',
        contact: 'Contacto',
        tutoring: 'Tutoría',
        portfolio: 'Ir al portafolio',
        portfolio2: 'Volver al portafolio',
        language: 'Idioma'
      },
      hero: {
        titleLine1: 'Futuro',
        titleLine2: 'Apple developer',
        summary: 'Técnico en Desarrollo de Sistemas y estudiante de Ingeniería de Telecomunicaciones',
        email: 'Correo electrónico',
        contactCta: 'Contáctame',
        downloadCv: 'Descargar CV'
      },
      about: {
        title: 'Sobre Mí',
        paragraph1: 'También conocido como <highlight>Digo</highlight>, soy Técnico en Desarrollo de Sistemas por Etec y actualmente estudio Ingeniería de Telecomunicaciones en la Unicamp.',
        paragraph2: 'Tengo experiencia en el desarrollo de <highlight>aplicaciones web</highlight> con <highlight>Next.js, TypeScript</highlight> y <highlight>React.js</highlight>, además de saber utilizar <highlight>herramientas sin código</highlight> como <highlight>WordPress (Elementor)</highlight> y <highlight>Wix</highlight>. También tengo experiencia en el desarrollo de <highlight>aplicaciones móviles nativas</highlight> en <highlight>Kotlin</highlight> y <highlight>Java</highlight>.',
        paragraph3: 'Para mí, el código va mucho más allá de la sintaxis; se trata de <highlight>resolver problemas reales</highlight>. Por eso, busco constantemente expandir mis límites, explorando desde la precisión lógica de la programación con <highlight>C/C++</highlight>, hasta el análisis de datos.',
        paragraph4: 'La tecnología es mi oficio, pero son las <highlight>historias y las personas</highlight> las que me mueven. Cuando no estoy programando, probablemente me encontrarás inmerso en deportes, escuchando música, tocando instrumentos o incluso participando en competiciones.',
        readMore: '¡Puedes saber más sobre mí haciendo clic aquí! ; )',
      },
      education: {
        title: 'Formación y Títulos',
        subtitle: 'Una base académica sólida en tecnología, complementada con la disciplina del deporte de alto rendimiento e innovación continua.',
        unicamp: {
          date: '2025 — Presente',
          institution: 'Universidad Estatal de Campinas (UNICAMP)',
          degree: 'Licenciatura en Ingeniería de Telecomunicaciones',
          description: 'Enfoque en ingeniería, algoritmos complejos y arquitectura de sistemas. Participación activa en la comunidad académica.',
          tag1: 'Diseño de Sistemas y Análisis de Algoritmos',
          tag2: 'Ingeniería de Software'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Universidad Tecnológica Federal de Paraná (UTFPR)',
          degree: 'Licenciatura en Ciencias de la Computación',
          description: 'Período de inmersión profunda en conceptos iniciales de desarrollo, patrones de diseño y fundamentos matemáticos para la computación.',
          tag1: 'Análisis de Algoritmos',
          tag2: 'Diseño de Sistemas'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'Enseñanza Media integrada al Técnico en Informática',
          description: 'Donde comenzó la pasión por la tecnología. Desarrollo de las primeras lógicas de programación y aplicaciones completas.',
          tag1: 'Algoritmos',
          tag2: 'Análisis de Sistemas'
        },
        languages: {
          title: 'Idiomas',
          pt: 'Portugués',
          ptLevel: 'Nativo',
          en: 'Inglés',
          enLevel: 'B1 - Intermedio',
          verify: 'Certificación'
        },
        awards: {
          title: 'Destacados y Competiciones',
          jubs: '1er Lugar JUBs SP (Jiu-Jitsu) - 2026',
          hackathonPhp: '1er Lugar Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3er Lugar IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3er Lugar Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Mención Honrosa 16ª OBMEP - 2021'
        },
        languages2: {
          title: 'Cursos extras',
          wizard: {
            date: 'FEB 2026 - Actualmente',
            title: 'Wizard By Pearson',
            desc: 'Curso de inglés enfocado en vocabulario y conversación.'
          },
          cel: {
            date: 'FEB 2026 - Actualmente',
            title: 'Centro de Enseñanza de Lenguas de la Unicamp',
            desc: 'Inglés con enfoque en habla, escritura, comprensión oral y lectura, con temas académicos.'
          },
          usp: {
            date: 'Completado',
            title: 'USP (Universidad de São Paulo)',
            desc: 'Curso de extensión universitaria en inglés, enfocado en lectura y escritura.'
          }
        },
        lattes: {
          title: 'Historial Completo',
          description: 'También puedes acceder a mi Currículo Lattes para ver la lista completa de premios, medallas, proyectos de investigación y cursos complementarios.',
          button: 'Acceder a Lattes'
        }
      },
      experience: {
        tagline: 'Más allá de la formación',
        title: 'Experiencia Desarrollada',
        subtitle: 'Un poco de lo que he estado haciendo con ingeniería, computación, liderazgo y disciplina.',
        tracks: {
          professional: {
            title: 'Experiencia profesional y Soluciones Técnicas',
            subtitle: 'Roles profesionales, investigación corporativa y docencia.'
          },
          volunteering: {
            title: 'Liderazgo y Rendimiento',
            subtitle: 'Iniciativas voluntarias globales y representación deportiva.'
          }
        },
        unicampMonitor: {
          date: 'Feb 2026 — Presente',
          role: 'Monitor de Algoritmos (PAD)',
          desc: 'Actuación en el Programa de Apoyo Didáctico para la asignatura de Algoritmos y Programación de Computadoras I, bajo la supervisión de la Prof. Dra. Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Presente',
          role: 'Investigador y Analista IoT',
          desc: 'Investigación y desarrollo centrados en la automatización y el módulo de accesibilidad para permitir la práctica del ciclismo por personas con discapacidad visual mediante una bicicleta semiautónoma.'
        },
        haken: {
          date: 'Mar 2024 — Ene 2025',
          role: 'Director y Asistente de Proyectos',
          bullet1: 'Lideré la estructuración y reactivación de procesos, identidad visual y contratos de la Empresa Junior en el MEJ.',
          bullet2: 'Desarrollé un ecosistema de entrenamiento práctico con Next.js y Tailwind, optimizando la incorporación de nuevos becarios de 90 a 30 días.',
          bullet3: 'Representación de la marca corporativa en eventos globales de emprendimiento juvenil, como el ENEJ en Florianópolis.'
        },
        desktop: {
          date: 'Ene 2024 — Feb 2024',
          role: 'Summer - Analista de Soporte Técnico',
          bullet1: 'Análisis, clasificación y resolución remota de infraestructura de red para una base activa de más de 1 millón de clientes.',
          bullet2: 'Mantenimiento de alto rendimiento y soporte bajo los criterios de calidad del mejor proveedor de internet de SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Presente',
          role: 'Asistente de Ventas y Comercio Internacional',
          desc: 'Responsable de la gestión del embudo corporativo en el área de Outgoing Global Volunteer (oGV), liderando prospecciones y consultoría estratégica internacional de intercambios alineados con los ODS de la ONU.',
          bullet1: 'Gestión de pipeline a través de CRM activo, calificación de leads de alto nivel y cierre de contratos complejos.',
          bullet2: 'Negociación internacional en inglés con comités globales para el alineamiento de conformidades legales de visa y seguros.'
        },
        lau: {
          date: 'May 2026 — Presente',
          role: 'Atleta Titular (Jiu-Jitsu)',
          bullet1_bold: 'Campeón Estatal JUBs 2026',
          bullet1_text: 'y Subcampeón Absoluto en la Fase SP de los Juegos Universitarios Brasileños, convocado para representar al Estado de São Paulo en la Etapa Nacional.',
          bullet2: 'Atleta titular representante de toda la delegación de la Unicamp, representando todos los cursos de la universidad.'
        },
        leu: {
          date: 'Mar 2026 — Presente',
          role: 'Atleta Titular (Judo)',
          bullet1_bold: '3º Lugar Nacional JUBs Atléticas 2026',
          bullet1_text: 'y 3º Lugar estatal. Torneo organizado por la CBDU, consolidando posiciones en el podio estatal y nacional.',
          bullet2: 'Representante oficial de Judo en la Liga de Ingenierías de la Unicamp, representando todos los cursos de ingeniería de la universidad. Además de formar parte de TIME SP, la Selección Universitaria Paulista.'
        },
        etecTalk: {
          date: 'Feb 2023 — Dic 2023',
          role: 'Asistente de Producción Audiovisual',
          desc: 'Responsable directo del diseño de identidad estética, configuración de transmisión técnica y dirección de grabaciones, enfocándose en la democratización de la inteligencia técnica para la comunidad.'
        }
      },
      projects: {
        index: 'PROYECTOS SELECCIONADOS',
        title: 'Proyectos.',
        subtitle: 'Una vitrina conceptual de soluciones robustas de ingeniería de software, interfaces fluidas y arquitectura limpia.',
        viewProject: 'Visitar proyecto',
        ctaHover: 'Ver proyecto',
        ctaText: 'Acceder',
        solucaoJr: {
          category: 'SITIO INSTITUCIONAL',
          title: 'Solução JR',
          desc: 'Portal de presentación institucional desarrollado para Solução JR, una empresa junior de ingeniería civil y arquitectura de la UTFPR. Desarrollado en co-creación y colaboración estratégica con Therion EJ.'
        },
        tetrisEj: {
          category: 'SITIO INSTITUCIONAL',
          title: 'TETRIS EJ',
          desc: 'Plataforma web moderna y responsiva diseñada para Tetris EJ, empresa junior de ingeniería civil y arquitectura de la UTFPR, con foco en usabilidad, rendimiento y fortalecimiento de la identidad digital de la marca.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Bicicleta Semi-Autónoma',
          desc: 'Adaptación e ingeniería de hardware para que personas con discapacidad visual puedan andar en bicicleta con seguridad, minimizando la interferencia humana. Proyecto de investigación de alto impacto dirigido por el Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'APLICACIÓN INDUSTRIAL // IA',
          title: 'Inova Chat',
          desc: 'Sistema de chatbot inteligente desarrollado para filtrar y seleccionar feedbacks y reportes de empleados de Minerva Foods, haciendo la comunicación empresarial altamente asertiva. Solución integrada con las APIs de OpenAI.',
          badge: '3er Lugar Hackathon InovAgro'
        },
        meuTreino: {
          category: 'APP MÓVIL ANDROID',
          title: 'Meu Treino - TCC',
          desc: 'Una aplicación nativa de Android enfocada en la gestión e instrucción de entrenamientos de musculación, desarrollada como trabajo de finalización de curso en ETEC. Utiliza base de datos NoSQL y autenticación segura para brindar una experiencia fluida y escalable.'
        }
      },
      footer: {
        builtWith: 'Hecho con',
        andPurpose: 'y propósito.',
        disclaimer: 'Este portafolio no es solo un escaparate de códigos. Fue diseñado píxel a píxel con un objetivo singular: demostrar mi pasión, mis habilidades y mi deseo genuino de integrar la Apple Developer Academy. Es la materialización de mi objetivo..',
        designedIn: 'Designed in Brazil 🇧🇷'
      },
      tutoring: {
        navbarTitle: 'Tutoría SI100',
        backToPortfolio: 'Volver al Portafolio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algoritmos y Programación de Computadoras I',
        heroSubtitle: 'Bienvenido al centro de tutoría. Aquí encuentras el cronograma, clases, materiales de apoyo y ejercicios.',
        professor: 'Profª Drª Ieda Geriberto Hidalgo',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Buscar contenido (ej: Punteros, Examen, Vectores)...',
        emptyLessons: 'El contenido se publicará pronto.',
        noResults: 'No se encontraron resultados para',
        criteria: {
          title: 'Criterios de Evaluación',
          formula: 'MP = (P1 + P2 + Promedio actividades) / 3',
          p1: 'Examen 1 (P1):',
          p2: 'Examen 2 (P2):',
          ml: 'Promedio Labs (ML):',
          notes: '*Aprobación directa: MP ≥ 6.0 y Asistencia ≥ 75%\n*Aprobación con Examen Final: MF ≥ 5.0 y Asistencia ≥ 75%\n*Cálculo Final: MF = (MP + Nota Examen) / 2'
        },
        syllabus: {
          title: 'Plan de Estudios & Objetivo',
          ementaLabel: 'Plan:',
          ementaText: 'Algoritmos: representaciones y técnicas de construcción. Estructura de datos y de control de programas. Modularización, Asignación dinámica e Implementación en C.',
          objectiveLabel: 'Objetivo:',
          objectiveText: 'Propiciar el aprendizaje de un lenguaje de alto nivel eficiente. Capacitar al alumno para representar problemas del mundo real en algoritmos y convertirlos al lenguaje C.',
          methodologyTitle: 'Metodología',
          methodologyText: 'Cada clase se divide en partes teóricas y prácticas de laboratorio. La primera parte es teórica; en la segunda, se desarrolla la actividad práctica, que debe entregarse al final de la clase para componer la evaluación.'
        },
        skills: {
          title: 'Competencias Desarrolladas',
          text: '(1) Raciocinio lógico deductivo orientado a la creación de programas computacionales;\n(2) Capacidad de reconocer diferentes estructuras de programación, establecer relaciones entre problemas con estructuras similares e implementar algoritmos computacionalmente eficientes para problemas del mundo real.\nMediante las actividades realizadas en grupo, se espera desarrollar las habilidades sociales y de comunicación del estudiante.'
        },
        bibliography: {
          title: 'Bibliografía',
          basicTitle: 'Básica',
          complementaryTitle: 'Complementaria'
        },
        absences: {
          title: 'Observaciones sobre Faltas (Art. 72 del Reglamento General de Graduación)',
          subtitle: 'La justificación de faltas debe solicitarse presentando documentos a la Dirección Académica dentro de los 15 días posteriores a la ocurrencia. Los casos previstos son:',
          item1: 'Ejercicio de representación estudiantil (horario de reuniones).',
          item2: 'Servicios obligatorios por ley.',
          item3: 'Fallecimiento (3 días): Cónyuge, padres, hijos, hermanos, abuelos.',
          item4: 'Fallecimiento (2 días): Padrastro, madrastra, suegros, cuñados.',
          item5: 'Competiciones/Congresos (Solicitar 15 días antes. Máx. 5 días nacional / 10 días internacional).',
          item6: 'Licencia de Paternidad (5 días).',
          note: 'Párrafo único: La justificación de falta no concede el derecho a la reposición de contenido por parte del docente.'
        },
        contact: {
          title: '¿Dudas o sugerencias?',
          text: 'Envía un correo a:',
          subject: 'con el asunto "SI100"'
        },
        footer: {
          builtWith: 'Construido con',
          purpose: 'y propósito.',
          disclaimer: 'Esta es una página personal y no una página oficial de la universidad. Su contenido es de mi autoría y responsabilidad. Fue desarrollada para ayudar a los estudiantes en la asignatura de Algoritmos y Programación de Computadoras I, dictada en FT - Unicamp.'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoria", title: "Clase 01: Presentación e Introducción", description: "Presentación de la asignatura, criterios de evaluación e introducción a los algoritmos.", lessons: [{ title: "Plan de Enseñanza y Criterios", type: "doc", document: "planoEnsino.pdf" }, { title: "Concepto de Algoritmo", type: "slide", document: "planoEnsino.pdf" }, { title: "Configuración del Entorno (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratório", title: "Clase 02: Conceptos Básicos", description: "Constantes, variables, tipos primitivos y comandos de entrada/salida.", lessons: [{ title: "Tipos de datos en C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Clase 03: Asignaciones y Operadores", description: "Expresiones aritméticas, precedencia y operadores relacionales.", lessons: [{ title: "Operadores Aritméticos y Relacionales", type: "slide" }, { title: "Lista 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratório", title: "Clase 04: Estructura Secuencial y Condicional", description: "Comandos de decisión simple y compuesta (if/else).", lessons: [{ title: "Lógica booleana en C", type: "video" }, { title: "Estructuras if y else", type: "code" }, { title: "Lista 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoria", title: "Clase 05: Selección Múltiple y Op. Lógicos", description: "Comando switch-case y operadores lógicos (AND, OR, NOT).", lessons: [{ title: "El comando switch", type: "code" }, { title: "Tabla de verdad y operadores &&, ||, !", type: "slide" }, { title: "Ejercicios de fijación", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratório", title: "Clase 06: Repetición (Prueba al Inicio/Fin)", description: "Estructuras de repetición while y do-while.", lessons: [{ title: "Lazo While: Sintaxis y uso", type: "video" }, { title: "Lazo Do-While: Diferencias", type: "code" }, { title: "Actividad de Lab 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoria", title: "Clase 07: Repetición (Variable de Control)", description: "Estructura de repetición for y lazos anidados.", lessons: [{ title: "El lazo For", type: "slide" }, { title: "Bucles dentro de bucles", type: "code" }, { title: "Lista de repetición", type: "doc" }] },
          { id: 8, date: "24/04", type: "Avaliação", highlight: true, title: "P1 - EXAMEN TEÓRICO 1", description: "Evaluación referente al contenido impartido en las clases 1 a 7.", lessons: [{ title: "Revisión General P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratório", title: "Clase 08: Vectores (Arrays Unidimensionales)", description: "Declaración, inicialización y manipulación de vectores.", lessons: [{ title: "Concepto de Array", type: "slide" }, { title: "Recorriendo vectores con lazos", type: "code" }, { title: "Actividad de Lab 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoria", title: "Clase 09: Matrices y Strings", description: "Arrays multidimensionales y manipulación de cadenas de caracteres.", lessons: [{ title: "Matrices en C", type: "slide" }, { title: "Strings: Vectores de char", type: "code" }, { title: "Biblioteca string.h", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratório", title: "Clase 10: Modularización (Funciones)", description: "Funciones, ámbito de variables y paso de parámetros.", lessons: [{ title: "Creando sus propias funciones", type: "video" }, { title: "Parámetros por valor vs referencia", type: "code" }, { title: "Actividad de Lab 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoria", title: "Clase 11: Punteros", description: "Concepto de dirección de memoria, punteros y aritmética de punteros.", lessons: [{ title: "¿Qué es un puntero?", type: "slide" }, { title: "Operadores & y *", type: "code" }, { title: "Punteros y Vectores", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratório", title: "Clase 12: Asignación Dinámica y Structs", description: "Malloc, free y estructuras de datos heterogéneas (registros).", lessons: [{ title: "Asignación Dinámica de Memoria", type: "video" }, { title: "Structs (Registros)", type: "code" }, { title: "Actividad de Lab 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Avaliação", highlight: true, title: "P2 - EXAMEN TEÓRICO 2", description: "Evaluación acumulativa (enfoque clases 8 a 13).", lessons: [{ title: "Revisión P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Encerramento", title: "Clase 13: Revisión y Promedios", description: "Entrega de notas y revisión de faltas.", lessons: [] },
          { id: 16, date: "17/07", type: "Avaliação", highlight: true, title: "EXAMEN FINAL", description: "Para alumnos con promedio >= 2.5 y < 5.0 y Asistencia >= 75%.", lessons: [] }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Banda Sonora Reproduciendo',
          paused: 'Banda Sonora Pausada',
          ariaLabel: 'Controlar música de fondo',
        },
        hero: {
          badge: 'RETROSPECTIVA DE AÑOS',
          title: '¿Quién es Digo?',
          subtitle: 'Esta no es una simple página "Sobre Mí". Es una colección sin filtrar de recuerdos, acordes, deportes y algunas situaciones divertidas que me trajeron hasta aquí. Toma un café, reproduce la banda sonora y disfruta del viaje.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'El niño travieso y curioso',
            p1: 'Si me ves concentrado en VS Code hoy, quizás no imagines que mi viaje comenzó desmontando cosas cuando era niño. Fui ese niño al que le gustaba ver qué había dentro de las cosas, y no tardó mucho en empezar a desmontar y montar juguetes, computadoras, videojuegos e incluso un ventilador (que nunca más funcionó).',
            p2: 'Criado en una granja, uno de mis momentos más inolvidables (y quizás graciosos) fue cuando mis padres criaban cerdos en el patio y yo, con toda mi genialidad, decidí agarrar un lechón para mostrárselo a mi papá. ¿El resultado? El cerdito se asustó tanto que empezó a chillar y su madre corrió detrás de mí (spoiler: me mordió, y esa es la razón de la cicatriz en mi barbilla).',
          },
          math: {
            num: '02',
            title: 'Matemáticas y la escuela',
            p1: 'En la infancia, confieso que no me gustaba estudiar, pero además de desmontar cosas, también tenía curiosidad por los números. Las matemáticas fueron una de mis materias favoritas y me encantaba resolver problemas y desafíos, lo que me llevó a participar en competencias de conocimiento de la región, donde gané algunos premios.',
            p2: '¡Mi primera medalla estuvo relacionada con eso!',
          },
          soccer: {
            num: '03',
            title: 'Mi primer deporte: El Fútbol',
            text: {
              desc1: 'Mi relación con los deportes comenzó temprano, y curiosamente, con el fútbol, gracias a mi papá, que me llevaba a los partidos del equipo que él entrenaba.',
              desc2: 'Lamentablemente, mi habilidad con el balón no era de las mejores, así que esta parte de la vida no duró mucho.',
              descImg: 'Equipo unido antes del partido.'
            }
          },
          martial1: {
            num: '04',
            title: 'Las artes marciales: Kung Fu',
            p1: 'Durante mi infancia, tuve la oportunidad de practicar mi primer arte marcial, en un proyecto de mi escuela en ese entonces. Fue allí donde conocí el Kung Fu.',
            p2: 'El breve paso por el Kung Fu me enseñó disciplina, enfoque y la importancia de hacer todo con excelencia (o al menos intentarlo). Fue una experiencia increíble que me marcó profundamente, y hasta hoy llevo algunas enseñanzas de esa época.',
          },
          martial2: {
            num: '05',
            title: 'Las artes marciales: Muay Thai',
            p1: 'En mi preadolescencia, tuve la oportunidad de practicar otro arte marcial, el Muay Thai, en un proyecto social de una iglesia local de mi ciudad.',
            p2: 'Con el tiempo, me convertí en uno de los alumnos más dedicados y recibí una beca del profesor Júnior Shaolin para entrenar en su academia.',
            descImg: 'Entrenamiento de Muay Thai con el profesor Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'El día que me hicieron una fiesta sorpresa en la escuela',
            p1: 'Nunca le di mucha importancia a mis cumpleaños, pero un día, aún en la primaria, mis amigos se unieron, sin que yo supiera nada, y me hicieron una fiesta de cumpleaños sorpresa en la escuela.',
            p2: 'Fue un momento tan marcante que hasta hoy, cuando lo recuerdo, me siento muy agradecido por tener amigos tan increíbles. Y claro, la fiesta fue increíble, con pastel, brigadeiro y mucha diversión. Agradecimientos especiales a mi clase de 9º grado, que hizo ese día tan especial para mí.',
            descImg: 'Cortando el pastel para los amigos'
          },
          formatura1: {
            num: '07',
            title: 'Mi graduación de la primaria',
            p1: 'Y quizás el momento más esperado por los niños llegó para mí, la graduación. Fue sin duda una de las cosas más gratificantes que he vivido. Junto con algunos profesores, organizamos quermeses, rifas y otras actividades para recaudar fondos para la fiesta de graduación.',
            p2: 'Cuando llegó el gran día, fue simplemente increíble. Gracias al profesor Paulo Bernardo, escribí los primeros fragmentos de un libro, que también fue escrito por cada uno de mis compañeros de clase, impreso y entregado a cada uno de nosotros como un recuerdo de esa fase tan importante. Y claro, la fiesta fue increíble.',
            descImg: 'Recibiendo el libro y el diploma de graduación de manos del profesor Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: '¡Fui aprobado para estudiar la Enseñanza Media y Técnica en Etec!',
            diary: {
              title: 'Mis primeras clases de sistemas embebidos',
              desc: 'Un registro del día en que tuvimos el desafío de montar un circuito de semáforo utilizando Arduino.'
            },
            tests: {
              title: 'Mis primeros exámenes de programación',
              desc: 'Y los exámenes eran así, con un montón de códigos escritos a mano, y yo tratando de entender qué estaba pasando. Fue un desafío, pero también parte del conjunto de detonantes para mi amor por la programación.'
            },
            first: {
              title: 'Mi primer día de clases en ETEC',
              desc: 'Recuerdo que llegué y todo era nuevo, nuevos profesores, nuevos compañeros, nuevas salas y laboratorios, ¡todo fue mágico!',
            },
            codes: {
              title: 'Mis primeros códigos escritos',
              desc: 'Aquí comenzó mi viaje con los códigos. Todo muy ambiguo y nuevo para un chico de 15 años. Fue un proceso de ensayo y error, pero cada línea de código escrita era una pequeña victoria.',
            }
          },
          coral: {
            num: '9',
            title: 'Primeros acordes',
            music: {
              desc1: 'Durante la pandemia de covid-19, al quedarme meses en casa, surgió nuevamente la curiosidad por aprender cosas nuevas. Entre ellas, tocar instrumentos musicales. Y así fue como empecé a aprender guitarra y ukelele.',
              desc2: 'Tenía YouTube, una guitarra vieja y las ganas de aprender. Después de un tiempo, publicando algunos videos tocando, fui invitado a tocar en el Coro de Etec, donde tuve la oportunidad de tocar en algunas presentaciones.',
              descImg: 'Un registro del día de mi primera presentación tocando la guitarra, en el coro del que participaba en Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'Las artes marciales: El Jiu-Jitsu',
            p1: 'Aquí comenzó mi relación con el Jiu-Jitsu, que es el deporte que más me marcó y que más me enseñó a lo largo de mi vida. Empecé a practicarlo como hobby, pero en menos de un mes, mi profesor, Huelder Motta, ya me inscribió para competir. Sin esperarlo, fui campeón en todos los campeonatos que peleé en la categoría de cinturón blanco. Ahí fue donde todo comenzó.',
            p2: 'Siendo un caso atípico, fui promovido a cinturón azul en 3 meses, incluso sin saber realmente lo que estaba haciendo. Aun así, fui mejorando, ganando las competiciones en las que participaba, y en poco tiempo empecé a recibir patrocinios, becas e invitaciones para entrenar en otras academias.',
            descImg: 'Primera Experiencia de Jiu-Jitsu.'
          },
          firstHacka: {
            num: '11',
            title: '1º Congreso Inovagro & Bruto Hacka',
            text: {
              desc1: 'En la foto, Maria Eduarda Ayres, Leona do Nascimento y yo, elaborando el proyecto para la presentación final del Hackathon.',
              desc2: 'Sin lugar a dudas, este fue definitivamente el punto de inflexión para la elección de mi carrera. Fue la primera vez que participé en un hackathon, y en medio de tantas incertidumbres, nerviosismo e inexperiencia, fue aquí donde me di cuenta de que realmente estaba en el camino correcto. Vi que podía realmente resolver problemas reales de la sociedad, haciendo lo que amaba hacer, incluso con poca experiencia en ese momento.',
              descImg: 'Recibimos el premio del 3º lugar, con el proyecto Inova Chat, un sistema de chatbot inteligente desarrollado para filtrar y seleccionar comentarios y reportes de los empleados de Minerva Foods, haciendo la comunicación empresarial altamente asertiva. Solución integrada con las APIs de OpenAI.',
              descImg2: 'Ganadores del 3º Lugar'
            }
          },
          diary: {
            num: '12',
            title: 'Primera nota en un periódico',
            diary: {
              title: 'El comienzo de un legado',
              desc: 'Un registro del día de mi primera nota en un periódico, donde quedó documentado uno de mis primeros títulos en Jiu-Jitsu.'
            },
            tv: {
              title: 'Primeras pruebas de programación',
              desc: 'A lo largo de varios acontecimientos, tuve la oportunidad de aparecer en programas de televisión.'
            },
            teach: {
              title: 'Apariciones en revistas',
              desc: 'Siempre he sido una persona muy tímida. Exponerme, como modelo en la adolescencia, fue una de las formas que encontré para superarlo. Sin esperarlo, recibí algunos premios, algunos contratos, y poco a poco fui perdiendo el miedo al público.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Primera aprobación en un examen de ingreso a la universidad',
            p1: 'Y llegó uno de los momentos más presionados en la vida de un joven de secundaria, la elección de la universidad. Y para mí, fue un proceso muy difícil, lleno de dudas e incertidumbres. En ese momento, había sido aceptado en varias universidades, pero terminé eligiendo estudiar Ciencias de la Computación en la UTFPR.',
            p2: 'Obviamente, todo fue mágico, la alegría de aprobar, la ansiedad de empezar, el cambio de estado, la expectativa de cómo sería la universidad, todo eso fue una mezcla de emociones que, cuando veo a otros pasar por ello, me recuerda cómo fue para mí, y me alegro genuinamente.',
            descImg: 'Primera Experiencia de Jiu-Jitsu.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon Sistema FAEP/SENAR',
            text: {
              desc1: 'Ya en la universidad, pero aún en el contexto de la formación técnica, tuve la oportunidad de participar en el Ideathon del Sistema FAEP/SENAR, un hackathon donde pude desarrollar en grupo un modelo de negocio para el sector agropecuario.',
              desc2: 'La solución nos valió el premio del 3º lugar, y más importante que eso, la certeza de que estaba en el camino correcto y que realmente podía hacer la diferencia.',
              descImg: 'Recibiendo el premio de manos de Ricardo Ost y Jefrey kleine Albers',
              descImg2: 'Presentando el proyecto'
            }
          },
        },
        labels: {
          liveChildhood: 'Infancia Viva',
          mediaHighlight: 'Destacado en los Medios',
        }
      }
    }
  },
  it: {
    translation: {
      meta: {
        title: 'Rodrigo Dias - Sviluppatore Full Stack',
        description: 'Portfolio di Rodrigo Dias, Sviluppatore Full Stack'
      },
      navbar: {
        location: 'Campinas-SP',
        themeToggle: 'Alterna tema chiaro e scuro',
        home: 'Inizio',
        about: 'Su di me',
        education: 'Formazione',
        experience: 'Esperienza',
        projects: 'Progetti',
        contact: 'Contatti',
        tutoring: 'Tutoraggio',
        portfolio: 'Vai al portfolio',
        portfolio2: 'Torna al portfolio',
        language: 'Lingua'
      },
      hero: {
        titleLine1: 'Futuro',
        titleLine2: 'Apple developer',
        summary: 'Tecnico in Sviluppo di Sistemi e studente di Ingegneria delle Telecomunicazioni',
        email: 'E-mail',
        contactCta: 'Contattami',
        downloadCv: 'Scarica CV'
      },
      about: {
        title: 'Su di Me',
        paragraph1: 'Conosciuto anche come <highlight>Digo</highlight>, sono un Tecnico in Sviluppo di Sistemi presso Etec e attualmente studio Ingegneria delle Telecomunicazioni all\'Unicamp.',
        paragraph2: 'Ho esperienza nello sviluppo di <highlight>applicazioni web</highlight> con <highlight>Next.js, TypeScript</highlight> e <highlight>React.js</highlight>, oltre a saper utilizzare <highlight>strumenti no-code</highlight> come <highlight>WordPress (Elementor)</highlight> e <highlight>Wix</highlight>. Ho anche esperienza nello sviluppo di <highlight>applicazioni mobile native</highlight> in <highlight>Kotlin</highlight> e <highlight>Java</highlight>.',
        paragraph3: 'Per me, il codice va ben oltre la sintassi; si tratta di <highlight>risolvere problemi reali</highlight>. Per questo cerco costantemente di espandere i miei limiti, esplorando dalla precisione logica della programmazione con <highlight>C/C++</highlight>, fino all\'analisi dei dati.',
        paragraph4: 'La tecnologia è il mio mestiere, ma sono le <highlight>storie e le persone</highlight> a muovermi. Quando non sto programmando, probabilmente mi troverete immerso nello sport, ad ascoltare musica, suonare strumenti o persino a partecipare a competizioni.',
        readMore: 'Puoi saperne di più su di me cliccando qui! ; )',
      },
      education: {
        title: 'Formazione e Titoli',
        subtitle: 'Una solida base accademica in tecnologia, completata dalla disciplina dello sport ad alto rendimento e dall\'innovazione continua.',
        unicamp: {
          date: '2025 — Presente',
          institution: 'Università Statale di Campinas (UNICAMP)',
          degree: 'Laurea in Ingegneria delle Telecomunicazioni',
          description: 'Focus su ingegneria, algoritmi complessi e architettura dei sistemi. Partecipazione attiva nella comunità accademica.',
          tag1: 'Progettazione di Sistemi e Analisi degli Algoritmi',
          tag2: 'Ingegneria del Software'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Università Tecnologica Federale del Paraná (UTFPR)',
          degree: 'Laurea in Informatica',
          description: 'Periodo di immersione profonda nei concetti iniziali di sviluppo, design pattern e fondamenti matematici per l\'informatica.',
          tag1: 'Analisi degli Algoritmi',
          tag2: 'Progettazione di Sistemi'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'Scuola superiore integrata con Tecnico Informatico',
          description: 'Dove è nata la passione per la tecnologia. Sviluppo delle prime logiche di programmazione e applicazioni complete.',
          tag1: 'Algoritmi',
          tag2: 'Analisi dei Sistemi'
        },
        languages: {
          title: 'Lingue',
          pt: 'Portoghese',
          ptLevel: 'Madrelingua',
          en: 'Inglese',
          enLevel: 'B1 - Intermedio',
          verify: 'Certificazione'
        },
        awards: {
          title: 'In Evidenza e Competizioni',
          jubs: '1° Posto JUBs SP (Jiu-Jitsu) - 2026',
          hackathonPhp: '1° Posto Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3° Posto IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3° Posto Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Menzione d\'Onore 16ª OBMEP - 2021'
        },
        languages2: {
          title: 'Corsi extra',
          wizard: {
            date: 'FEB 2026 - Attualmente',
            title: 'Wizard By Pearson',
            desc: 'Corso di inglese focalizzato sul vocabolario e la conversazione.'
          },
          cel: {
            date: 'FEB 2026 - Attualmente',
            title: 'Centro di Insegnamento delle Lingue dell\'Unicamp',
            desc: 'Inglese focalizzato su produzione orale, scrittura, comprensione orale e lettura, con temi accademici.'
          },
          usp: {
            date: 'Completato',
            title: 'USP (Università di San Paolo)',
            desc: 'Corso di estensione universitaria in lingua inglese, focalizzato su lettura e scrittura.'
          }
        },
        lattes: {
          title: 'Storia Completa',
          description: 'Puoi anche accedere al mio Curriculum Lattes per visualizzare l\'elenco completo di premi, medaglie, progetti di ricerca e corsi complementari.',
          button: 'Accedi a Lattes'
        }
      },
      experience: {
        tagline: 'Oltre la formazione',
        title: 'Esperienza Sviluppata',
        subtitle: 'Un assaggio di ciò che sto facendo con ingegneria, informatica, leadership e disciplina.',
        tracks: {
          professional: {
            title: 'Esperienza professionale e Soluzioni Tecniche',
            subtitle: 'Ruoli professionali, ricerca aziendale e insegnamento.'
          },
          volunteering: {
            title: 'Leadership e Performance',
            subtitle: 'Iniziative di volontariato globale e rappresentanza sportiva.'
          }
        },
        unicampMonitor: {
          date: 'Feb 2026 — Presente',
          role: 'Tutor di Algoritmi (PAD)',
          desc: 'Attività nel Programma di Supporto Didattico per il corso di Algoritmi e Programmazione di Computer I, sotto la supervisione della Prof.ssa Dr.ssa Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Presente',
          role: 'Ricercatore e Analista IoT',
          desc: 'Ricerca e sviluppo incentrati sull\'automazione e sul modulo di accessibilità per consentire la pratica del ciclismo da parte di persone con disabilità visive attraverso una bicicletta semi-autonoma.'
        },
        haken: {
          date: 'Mar 2024 — Gen 2025',
          role: 'Direttore e Assistente di Progetto',
          bullet1: 'Ho guidato la strutturazione e la riattivazione di processi, identità visiva e contratti della Junior Enterprise nel MEJ.',
          bullet2: 'Ho sviluppato un ecosistema di formazione pratica con Next.js e Tailwind, ottimizzando l\'inserimento dei nuovi tirocinanti da 90 a 30 giorni.',
          bullet3: 'Rappresentanza del marchio aziendale a eventi globali di imprenditoria giovanile, come ENEJ a Florianópolis.'
        },
        desktop: {
          date: 'Gen 2024 — Feb 2024',
          role: 'Summer - Analista del Supporto Tecnico',
          bullet1: 'Analisi, smistamento e risoluzione remota dell\'infrastruttura di rete per una base attiva di oltre 1 milione di clienti.',
          bullet2: 'Manutenzione ad alte prestazioni e supporto secondo i criteri di qualità del miglior provider internet di SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Presente',
          role: 'Assistente alle Vendite e Commercio Internazionale',
          desc: 'Responsabile della gestione del funnel aziendale nell\'area Outgoing Global Volunteer (oGV), guidando la ricerca di nuovi contatti e la consulenza strategica internazionale per scambi allineati con gli SDG dell\'ONU.',
          bullet1: 'Gestione della pipeline tramite CRM attivo, qualificazione di lead di alto livello e chiusura di contratti complessi.',
          bullet2: 'Negoziazione internazionale in lingua inglese con comitati globali per l\'allineamento delle conformità legali di visto e assicurazioni.'
        },
        lau: {
          date: 'Mag 2026 — Presente',
          role: 'Atleta Titolare (Jiu-Jitsu)',
          bullet1_bold: 'Campione Statale JUBs 2026',
          bullet1_text: 'e Vicecampione Assoluto nella Fase SP dei Giochi Universitari Brasiliani, convocato per rappresentare lo Stato di San Paolo nella Fase Nazionale.',
          bullet2: 'Atleta titolare in rappresentanza dell\'intera delegazione Unicamp, rappresentando tutti i corsi universitari.'
        },
        leu: {
          date: 'Mar 2026 — Presente',
          role: 'Atleta Titolare (Judo)',
          bullet1_bold: '3° Posto Nazionale JUBs Atléticas 2026',
          bullet1_text: 'e 3° Posto statale. Torneo organizzato da CBDU, consolidando posizioni sul podio statale e nazionale.',
          bullet2: 'Rappresentante ufficiale di Judo nella Lega di Ingegneria Unicamp, rappresentando tutti i corsi di ingegneria dell\'università. Inoltre, fa parte di TIME SP, la Selezione Universitaria Paulista.'
        },
        etecTalk: {
          date: 'Feb 2023 — Dic 2023',
          role: 'Assistente di Produzione Audiovisiva',
          desc: 'Direttamente responsabile della progettazione dell\'identità estetica, del setup di trasmissione tecnica e della regia delle registrazioni, con l\'obiettivo di democratizzare l\'intelligenza tecnica per la comunità.'
        }
      },
      projects: {
        index: 'PROGETTI SELEZIONATI',
        title: 'Progetti.',
        subtitle: 'Una vetrina concettuale di soluzioni robuste di ingegneria del software, interfacce fluide e architettura pulita.',
        viewProject: 'Visita progetto',
        ctaHover: 'Vedi progetto',
        ctaText: 'Accedi',
        solucaoJr: {
          category: 'SITO ISTITUZIONALE',
          title: 'Solução JR',
          desc: 'Portale di presentazione istituzionale sviluppato per Solução JR, un\'impresa junior di ingegneria civile e architettura dell\'UTFPR. Sviluppato in co-creazione e collaborazione strategica con Therion EJ.'
        },
        tetrisEj: {
          category: 'SITO ISTITUZIONALE',
          title: 'TETRIS EJ',
          desc: 'Piattaforma web moderna e reattiva progettata per Tetris EJ, impresa junior di ingegneria civile e architettura dell\'UTFPR, con focus su usabilità, performance e rafforzamento dell\'identità digitale del marchio.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Bicicletta Semi-Autonoma',
          desc: 'Adattamento e ingegneria hardware per consentire alle persone con disabilità visive di andare in bicicletta in sicurezza, minimizzando l\'interferenza umana. Progetto di ricerca ad alto impatto supervisionato dal Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'APPLICAZIONE INDUSTRIALE // IA',
          title: 'Inova Chat',
          desc: 'Sistema chatbot intelligente sviluppato per filtrare e selezionare feedback e segnalazioni dei dipendenti di Minerva Foods, rendendo la comunicazione aziendale altamente efficace. Soluzione integrata con le API di OpenAI.',
          badge: '3° Posto Hackathon InovAgro'
        },
        meuTreino: {
          category: 'APP MOBILE ANDROID',
          title: 'Meu Treino - Tesi',
          desc: 'Un\'applicazione nativa Android focalizzata sulla gestione e l\'istruzione degli allenamenti di bodybuilding, sviluppata come progetto di fine corso presso ETEC. Utilizza database NoSQL e autenticazione sicura per offrire un\'esperienza fluida e scalabile.'
        }
      },
      footer: {
        builtWith: 'Fatto con',
        andPurpose: 'e scopo.',
        disclaimer: 'Questo portfolio non è solo una vetrina di codici. È stato disegnato pixel per pixel con un unico obiettivo: dimostrare la mia passione, le mie competenze e il mio desiderio genuino di entrare a far parte dell\'Apple Developer Academy. È la materializzazione del mio obiettivo..',
        designedIn: 'Designed in Brazil 🇧🇷'
      },
      tutoring: {
        navbarTitle: 'Tutoraggio SI100',
        backToPortfolio: 'Torna al Portfolio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algoritmi e Programmazione di Computer I',
        heroSubtitle: 'Benvenuto nel centro di tutoraggio. Qui trovi il calendario, le lezioni, i materiali di supporto e gli esercizi.',
        professor: 'Prof.ssa Dr.ssa Ieda Geriberto Hidalgo',
        monitor: 'Tutor: Rodrigo Marques Dias',
        searchPlaceholder: 'Cerca contenuti (es: Puntatori, Esame, Array)...',
        emptyLessons: 'I contenuti saranno pubblicati a breve.',
        noResults: 'Nessun risultato trovato per',
        criteria: {
          title: 'Criteri di Valutazione',
          formula: 'MP = (P1 + P2 + Media attività) / 3',
          p1: 'Prova 1 (P1):',
          p2: 'Prova 2 (P2):',
          ml: 'Media Laboratori (ML):',
          notes: '*Approvazione diretta: MP ≥ 6.0 e Frequenza ≥ 75%\n*Approvazione con Esame: MF ≥ 5.0 e Frequenza ≥ 75%\n*Calcolo Finale: MF = (MP + Voto Esame) / 2'
        },
        syllabus: {
          title: 'Programma & Obiettivo',
          ementaLabel: 'Programma:',
          ementaText: 'Algoritmi: rappresentazioni e tecniche di costruzione. Struttura dati e controllo dei programmi. Modularizzazione, Allocazione dinamica e Implementazione in C.',
          objectiveLabel: 'Obiettivo:',
          objectiveText: 'Fornire l\'apprendimento di un linguaggio di alto livello efficiente. Abilitare lo studente a rappresentare problemi del mondo reale in algoritmi e convertirli in linguaggio C.',
          methodologyTitle: 'Metodologia',
          methodologyText: 'Ogni lezione è divisa in parti teoriche e pratiche di laboratorio. La prima parte è teorica; nella seconda si sviluppa l\'attività pratica, che deve essere consegnata al termine della lezione per comporre la valutazione.'
        },
        skills: {
          title: 'Competenze Sviluppate',
          text: '(1) Ragionamento logico deduttivo orientato alla creazione di programmi informatici;\n(2) Capacità di riconoscere diverse strutture di programmazione, stabilire relazioni tra problemi con strutture simili e implementare algoritmi computazionalmente efficienti per problemi del mondo reale.\nAttraverso le attività di gruppo, si prevede di sviluppare le abilità sociali e comunicative dello studente.'
        },
        bibliography: {
          title: 'Bibliografia',
          basicTitle: 'Di base',
          complementaryTitle: 'Complementare'
        },
        absences: {
          title: 'Osservazioni sulle Assenze (Art. 72 del Regolamento Generale di Laurea)',
          subtitle: 'La giustificazione delle assenze deve essere richiesta presentando documenti alla Direzione Accademica entro 15 giorni dall\'evento. I casi previsti sono:',
          item1: 'Esercizio di rappresentanza studentesca (orario delle riunioni).',
          item2: 'Servizi obbligatori per legge.',
          item3: 'Lutto (3 giorni): Coniuge, genitori, figli, fratelli, nonni.',
          item4: 'Lutto (2 giorni): Patrigno, matrigna, suoceri, cognati.',
          item5: 'Competizioni/Congressi (Richiedere 15 giorni prima. Max 5 giorni nazionali / 10 giorni internazionali).',
          item6: 'Congedo di Paternità (5 giorni).',
          note: 'Comma unico: La giustificazione dell\'assenza non dà diritto al recupero dei contenuti da parte del docente.'
        },
        contact: {
          title: 'Domande o suggerimenti?',
          text: 'Invia una email a:',
          subject: 'con oggetto "SI100"'
        },
        footer: {
          builtWith: 'Costruito con',
          purpose: 'e scopo.',
          disclaimer: 'Questa è una pagina personale e non una pagina ufficiale dell\'università. Il suo contenuto è di mia paternità e responsabilità. È stata sviluppata per assistere gli studenti nel corso di Algoritmi e Programmazione di Computer I, tenuto presso FT - Unicamp.'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoria", title: "Lezione 01: Presentazione e Introduzione", description: "Presentazione del corso, criteri di valutazione e introduzione agli algoritmi.", lessons: [{ title: "Piano di Insegnamento e Criteri", type: "doc", document: "planoEnsino.pdf" }, { title: "Concetto di Algoritmo", type: "slide", document: "planoEnsino.pdf" }, { title: "Configurazione dell'Ambiente (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratório", title: "Lezione 02: Concetti di Base", description: "Costanti, variabili, tipi primitivi e comandi di input/output.", lessons: [{ title: "Tipi di dati in C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Lezione 03: Assegnazioni e Operatori", description: "Espressioni aritmetiche, precedenza e operatori relazionali.", lessons: [{ title: "Operatori Aritmetici e Relazionali", type: "slide" }, { title: "Lista 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratório", title: "Lezione 04: Struttura Sequenziale e Condizionale", description: "Comandi di decisione semplici e composti (if/else).", lessons: [{ title: "Logica booleana in C", type: "video" }, { title: "Strutture if e else", type: "code" }, { title: "Lista 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoria", title: "Lezione 05: Selezione Multipla e Op. Logici", description: "Comando switch-case e operatori logici (AND, OR, NOT).", lessons: [{ title: "Il comando switch", type: "code" }, { title: "Tabella di verità e operatori &&, ||, !", type: "slide" }, { title: "Esercizi di consolidamento", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratório", title: "Lezione 06: Ripetizione (Test all'Inizio/Fine)", description: "Strutture di ripetizione while e do-while.", lessons: [{ title: "Ciclo While: Sintassi e uso", type: "video" }, { title: "Ciclo Do-While: Differenze", type: "code" }, { title: "Attività di Lab 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoria", title: "Lezione 07: Ripetizione (Variabile di Controllo)", description: "Struttura di ripetizione for e cicli annidati.", lessons: [{ title: "Il ciclo For", type: "slide" }, { title: "Cicli dentro cicli", type: "code" }, { title: "Lista di ripetizione", type: "doc" }] },
          { id: 8, date: "24/04", type: "Avaliação", highlight: true, title: "P1 - PROVA TEORICA 1", description: "Valutazione relativa al contenuto delle lezioni 1-7.", lessons: [{ title: "Ripasso Generale P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratório", title: "Lezione 08: Vettori (Array Monodimensionali)", description: "Dichiarazione, inizializzazione e manipolazione di vettori.", lessons: [{ title: "Concetto di Array", type: "slide" }, { title: "Scorrere vettori con cicli", type: "code" }, { title: "Attività di Lab 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoria", title: "Lezione 09: Matrici e Stringhe", description: "Array multidimensionali e manipolazione di stringhe.", lessons: [{ title: "Matrici in C", type: "slide" }, { title: "Stringhe: Vettori di char", type: "code" }, { title: "Libreria string.h", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratório", title: "Lezione 10: Modularizzazione (Funzioni)", description: "Funzioni, ambito delle variabili e passaggio di parametri.", lessons: [{ title: "Creare le proprie funzioni", type: "video" }, { title: "Parametri per valore vs riferimento", type: "code" }, { title: "Attività di Lab 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoria", title: "Lezione 11: Puntatori", description: "Concetto di indirizzo di memoria, puntatori e aritmetica dei puntatori.", lessons: [{ title: "Cos'è un puntatore?", type: "slide" }, { title: "Operatori & e *", type: "code" }, { title: "Puntatori e Vettori", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratório", title: "Lezione 12: Allocazione Dinamica e Struct", description: "Malloc, free e strutture dati eterogenee (record).", lessons: [{ title: "Allocazione Dinamica della Memoria", type: "video" }, { title: "Struct (Record)", type: "code" }, { title: "Attività di Lab 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Avaliação", highlight: true, title: "P2 - PROVA TEORICA 2", description: "Valutazione cumulativa (focus lezioni 8-13).", lessons: [{ title: "Ripasso P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Encerramento", title: "Lezione 13: Revisione e Medie", description: "Consegna voti e revisione assenze.", lessons: [] },
          { id: 16, date: "17/07", type: "Avaliação", highlight: true, title: "ESAME FINALE", description: "Per studenti con media >= 2.5 e < 5.0 e Frequenza >= 75%.", lessons: [] }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Colonna Sonora in Riproduzione',
          paused: 'Colonna Sonora in Pausa',
          ariaLabel: 'Controlla musica di sottofondo',
        },
        hero: {
          badge: 'RETROSPETTIVA DEGLI ANNI',
          title: 'Chi è Digo?',
          subtitle: 'Questa non è una semplice pagina "Su di Me". È una raccolta non filtrata di ricordi, accordi, sport e alcune situazioni divertenti che mi hanno portato fino a qui. Prendi un caffè, avvia la colonna sonora e goditi il viaggio.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'Il bambino birichino e curioso',
            p1: 'Se mi vedi concentrato su VS Code oggi, forse non immagini che il mio viaggio sia iniziato smontando cose da bambino. Ero quel bambino a cui piaceva vedere cosa c\'era dentro le cose, e non ci è voluto molto prima che iniziassi a smontare e rimontare giocattoli, computer, videogiochi e persino un ventilatore (che non ha mai più funzionato).',
            p2: 'Cresciuto in una fattoria, uno dei miei momenti più indimenticabili (e forse esilaranti) è stato quando i miei genitori allevavano maiali nel cortile, e io, con tutta la mia genialità, decisi di prendere un maialino per mostrarlo a mio padre. Il risultato? Il maialino si spaventò così tanto che iniziò a strillare e sua madre mi corse dietro (spoiler: mi morse, e questa è la ragione della cicatrice sul mio mento).',
          },
          math: {
            num: '02',
            title: 'Matematica e scuola',
            p1: 'Nell\'infanzia, confesso che non mi piaceva studiare, ma oltre a smontare cose, avevo anche una curiosità per i numeri. La matematica era una delle mie materie preferite e adoravo risolvere problemi e sfide, il che mi portò a partecipare a competizioni di conoscenza della regione, dove vinsi alcuni premi.',
            p2: 'La mia prima medaglia fu legata a questo!',
          },
          soccer: {
            num: '03',
            title: 'Il mio primo sport: Il Calcio',
            text: {
              desc1: 'Il mio rapporto con lo sport iniziò presto, e curiosamente con il calcio, grazie a mio padre che mi portava alle partite della squadra che allenava.',
              desc2: 'Purtroppo la mia abilità con la palla non era delle migliori, quindi questa parte della vita non durò a lungo.',
              descImg: 'Squadra unita prima della partita.'
            }
          },
          martial1: {
            num: '04',
            title: 'Le arti marziali: Kung Fu',
            p1: 'Durante la mia infanzia, ebbi l\'opportunità di praticare la mia prima arte marziale, in un progetto della mia scuola di allora. Fu lì che conobbi il Kung Fu.',
            p2: 'Il breve passaggio nel Kung Fu mi insegnò disciplina, concentrazione e l\'importanza di fare tutto con eccellenza (o almeno provarci). Fu un\'esperienza incredibile che mi segnò profondamente, e ancora oggi porto con me alcuni insegnamenti di quel periodo.',
          },
          martial2: {
            num: '05',
            title: 'Le arti marziali: Muay Thai',
            p1: 'Nella mia preadolescenza, ebbi l\'opportunità di praticare un\'altra arte marziale, il Muay Thai, in un progetto sociale di una chiesa locale della mia città.',
            p2: 'Col tempo, diventai uno degli allievi più dedicati e ricevetti una borsa di studio dal maestro Júnior Shaolin per allenarmi nella sua palestra.',
            descImg: 'Allenamento di Muay Thai con il maestro Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'Il giorno in cui mi fecero una festa a sorpresa a scuola',
            p1: 'Non ho mai dato molta importanza ai miei compleanni, ma un giorno, ancora durante le scuole medie, i miei amici si unirono, senza che io sapessi nulla, e mi fecero una festa di compleanno a sorpresa a scuola.',
            p2: 'Fu un momento così significativo che ancora oggi, quando lo ricordo, mi sento molto grato per avere amici così incredibili. E naturalmente la festa fu fantastica, con torta, brigadeiro e tanto divertimento. Un ringraziamento speciale alla mia classe di prima media, che rese quel giorno così speciale per me.',
            descImg: 'Tagliando la torta per gli amici'
          },
          formatura1: {
            num: '07',
            title: 'Il mio diploma di scuola media',
            p1: 'E forse il momento più atteso dai bambini arrivò per me, il diploma. Fu certamente una delle cose più gratificanti che abbia mai vissuto. Insieme ad alcuni insegnanti, organizzammo sagre, lotterie e altre attività per raccogliere fondi per la festa di diploma.',
            p2: 'Quando arrivò il grande giorno, fu semplicemente incredibile. Grazie al professor Paulo Bernardo, scrissi i primi brani di un libro, che fu scritto anche da ciascuno dei miei compagni di classe, stampato e consegnato a ognuno di noi come ricordo di quella fase così importante. E naturalmente la festa fu incredibile.',
            descImg: 'Ricevendo il libro e il diploma dalle mani del professor Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: 'Fui ammesso al Liceo e Tecnico all\'Etec!',
            diary: {
              title: 'Le mie prime lezioni di sistemi embedded',
              desc: 'Una registrazione del giorno in cui affrontammo la sfida di montare un circuito di un semaforo usando Arduino.'
            },
            tests: {
              title: 'I miei primi esami di programmazione',
              desc: 'E gli esami erano così, con un mucchio di codici scritti a mano, e io che cercavo di capire cosa stesse succedendo. Fu una sfida, ma anche parte dell\'insieme di inneschi per il mio amore per la programmazione.'
            },
            first: {
              title: 'Il mio primo giorno di lezione all\'ETEC',
              desc: 'Ricordo che arrivai e tutto era nuovo, nuovi insegnanti, nuovi compagni, nuove aule e laboratori, tutto fu magico!',
            },
            codes: {
              title: 'I miei primi codici scritti',
              desc: 'Qui iniziò il mio viaggio con i codici. Tutto molto ambiguo e nuovo per un ragazzo di 15 anni. Fu un processo di tentativi ed errori, ma ogni riga di codice scritta era una piccola vittoria.',
            }
          },
          coral: {
            num: '9',
            title: 'Primi accordi',
            music: {
              desc1: 'Durante la pandemia di covid-19, restando mesi a casa, emerse di nuovo la curiosità di imparare cose nuove. Tra queste, suonare strumenti musicali. E così iniziai a imparare chitarra e ukulele.',
              desc2: 'Avevo YouTube, una vecchia chitarra e la voglia di imparare. Dopo un po\', pubblicando alcuni video mentre suonavo, fui invitato a suonare nel Coro dell\'Etec, dove ebbi l\'opportunità di suonare in alcune esibizioni.',
              descImg: 'Una registrazione del giorno della mia prima esibizione alla chitarra, nel coro di cui facevo parte all\'Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'Le arti marziali: Il Jiu-Jitsu',
            p1: 'Qui iniziò il mio rapporto con il Jiu-Jitsu, che è lo sport che più mi ha segnato e che più mi ha insegnato nel corso della mia vita. Iniziai a praticarlo come hobby, ma in meno di un mese, il mio maestro, Huelder Motta, mi iscrisse già per competere. Senza aspettarmelo, fui campione in tutti i campionati in cui combattei nella cintura bianca. Fu allora che tutto ebbe inizio.',
            p2: 'Essendo un caso atipico, fui promosso cintura blu in 3 mesi, pur senza sapere bene cosa stessi facendo. Ciò nonostante, continuai a migliorare, vincendo le competizioni a cui partecipavo, e in poco tempo iniziai a ricevere sponsorizzazioni, borse di studio e inviti ad allenarmi in altre palestre.',
            descImg: 'Prima Esperienza di Jiu-Jitsu.'
          },
          firstHacka: {
            num: '11',
            title: '1º Congresso Inovagro & Bruto Hacka',
            text: {
              desc1: 'Nella foto, Maria Eduarda Ayres, Leona do Nascimento ed io, mentre elaboravamo il progetto per la presentazione finale dell\'Hackathon.',
              desc2: 'Senza alcun dubbio, questo fu sicuramente il punto di svolta per la scelta della mia carriera. Fu la prima volta che partecipai a un hackathon, e in mezzo a tante incertezze, nervosismo e inesperienza, fu qui che mi resi conto che ero davvero sulla strada giusta. Vidi che potevo davvero risolvere problemi reali della società, facendo ciò che amavo fare, anche se con poca esperienza all\'epoca.',
              descImg: 'Ricevemmo il premio del 3º posto, con il progetto Inova Chat, un sistema di chatbot intelligente sviluppato per filtrare e selezionare feedback e segnalazioni dei dipendenti di Minerva Foods, rendendo la comunicazione aziendale altamente assertiva. Soluzione integrata con le API di OpenAI.',
              descImg2: 'Vincitori del 3º Posto'
            }
          },
          diary: {
            num: '12',
            title: 'Primo articolo su un giornale',
            diary: {
              title: 'L\'inizio di un\'eredità',
              desc: 'Una registrazione del giorno del mio primo articolo su un giornale, dove fu documentato uno dei miei primi titoli nel Jiu-Jitsu.'
            },
            tv: {
              title: 'Primi esami di programmazione',
              desc: 'Nel corso di vari eventi, ebbi l\'opportunità di apparire in programmi televisivi.'
            },
            teach: {
              title: 'Apparizioni su riviste',
              desc: 'Sono sempre stato una persona molto timida. Espormi, come modello nell\'adolescenza, fu uno dei modi che trovai per superarlo. Senza aspettarmelo, ricevetti alcuni premi, alcuni contratti, e piano piano persi la paura del pubblico.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Prima ammissione a un test di ammissione all\'università',
            p1: 'E arrivò uno dei momenti più stressanti nella vita di un giovane delle superiori, la scelta dell\'università. E per me, fu un processo molto difficile, pieno di dubbi e incertezze. All\'epoca ero stato ammesso in diverse università, ma alla fine scelsi di studiare Informatica all\'UTFPR.',
            p2: 'Ovviamente, tutto fu magico, la gioia di passare, l\'ansia di iniziare, il cambiamento di stato, l\'aspettativa di come sarebbe stata l\'università, tutto ciò fu un mix di emozioni che, quando vedo altri attraversarlo, mi ricorda come fu per me, e mi sento genuinamente felice.',
            descImg: 'Prima Esperienza di Jiu-Jitsu.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon Sistema FAEP/SENAR',
            text: {
              desc1: 'Già all\'università, ma ancora nel contesto della formazione tecnica, ebbi l\'opportunità di partecipare all\'Ideathon del Sistema FAEP/SENAR, un hackathon dove potei sviluppare in gruppo un modello di business per il settore agricolo.',
              desc2: 'La soluzione ci valse il premio del 3º posto, e più importante di questo, la certezza di essere sulla strada giusta e di poter davvero fare la differenza.',
              descImg: 'Ricevendo il premio dalle mani di Ricardo Ost e Jefrey kleine Albers',
              descImg2: 'Presentando il progetto'
            }
          },
        },
        labels: {
          liveChildhood: 'Infanzia Vivace',
          mediaHighlight: 'In Primo Piano sui Media',
        }
      }
    }
  }
};