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
        description: 'Portfólio de Rodrigo Dias, Desenvolvedor Full Stack',
        keywords: 'desenvolvedor, full-stack, next.js, typescript, react, web development, portfólio, swift, java, apple developer academy',
        ogDescription: 'Conheça meus projetos, experiência e expertise em desenvolvimento full-stack com tecnologias modernas.',
        twitterHandle: '@digonomundo'
      },
      navbar: {
        location: 'Campinas - SP',
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
        paragraph1: 'Também conhecido como <highlight>Digo</highlight>, sou Técnico em Desenvolvimento de Sistemas pela Etec, estudo Engenharia de Telecomunicações na Unicamp e <highlight> pretendo </highlight> ingressar e me formar na <highlight>Apple Developer Academy</highlight>.',
        paragraph2: 'Tenho experiência com desenvolvimento de <highlight>aplicações web</highlight> com <highlight>Next.js, TypeScript</highlight> e <highlight>React.js</highlight>, além de saber utilizar <highlight>ferramentas no-code</highlight> como <highlight>WordPress (Elementor)</highlight> e <highlight>Wix</highlight>. Também possuo experiência com desenvolvimento de <highlight>aplicativos móveis nativos</highlight> em <highlight>Kotlin</highlight> e <highlight>Java</highlight>.',
        paragraph3: 'Para mim, o código vai muito além da sintaxe; é sobre <highlight>resolver problemas reais</highlight>. Por isso, busco constantemente expandir meus limites, explorando desde a precisão lógica da programação com <highlight>C/C++</highlight>, até a análise de dados.',
        paragraph4: 'A tecnologia é o meu ofício, mas são as <highlight>histórias e as pessoas</highlight> que me movem. Quando não estou codando, você provavelmente vai me encontrar imerso em <highlight>esportes</highlight>, <highlight>ouvindo música</highlight>, <highlight>tocando instrumentos</highlight> ou até <highlight>participando de competições</highlight>.',
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
          degree: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas',
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
        unicampMonitor2: {
          date: 'Ago 2026 — Presente',
          role: 'Monitor de POO em Java (PAD)',
          desc: 'Atuo no Programa de Apoio Didático para a disciplina de Programação Orientada a Objetos, sob supervisão da Profª Drª Livia Ruback.'
        },
        unicampMonitor1: {
          date: 'Fev 2026 — Jul 2026',
          role: 'Monitor de Algoritmos (PAD)',
          desc: 'Atuei no Programa de Apoio Didático para a disciplina de Algoritmos e Programação de Computadores I, sob supervisão da Profª Drª Ieda Hidalgo.'
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
        badge: "Monitoria / Unicamp",
        title: "Portal de Monitorias",
        subtitle: "Bem-vindo ao portal de monitorias. Preparei este espaço especialmente para apoiar você. Selecione uma disciplina para mais informações.",
        loading: "Carregando informações...",
        footer: {
          builtWith: 'Construído com',
          purpose: 'e propósito.',
          disclaimer: 'Esta é uma página pessoal e não uma página oficial da universidade. Seu conteúdo é de minha autoria e responsabilidade. Foi desenvolvida para auxiliar os alunos nas disciplinas que sou ou fui monitor na Unicamp.'
        },
        si100: {
          code: "SI100",
          name: "Algoritmos e Programação de Computadores I",
          professor: "Profª Drª Ieda Geriberto Hidalgo",
          schedule: "Finalizada",
          language: "Linguagem C",
          description: "Representação de problemas do mundo real em algoritmos. Foco em estruturas de controle, alocação dinâmica e modularização.",
          tags: ["Lógica", "Estruturas de Controle", "Ponteiros", "Matrizes"],
          cta: "Acessar SI100"
        },
        tt314: {
          code: "TT314",
          name: "Orientação a Objetos I",
          professor: "Profª Drª Lívia Couto Ruback Rodrigues",
          schedule: "Segundas-feiras, 14h às 18h",
          language: "Java",
          description: "Desenvolvimento de projetos no paradigma orientado a objetos, incluindo classes, herança, polimorfismo e refatoração.",
          tags: ["Classes e Objetos", "Herança", "Polimorfismo", "Exceções"],
          cta: "Acessar TT314"
        }
      },
      tutoringsi100: {
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
        ],
        footer: {
          builtWith: 'Construído com',
          purpose: 'e propósito.',
          disclaimer: 'Esta é uma página pessoal e não uma página oficial da universidade. Seu conteúdo é de minha autoria e responsabilidade. Foi desenvolvida para auxiliar os alunos na disciplina de Algoritmos e Programação de Computadores I, ministrada na FT - Unicamp.'
        },
      },
      tutoringtt314: {
        navbarTitle: 'Monitoria TT314',
        backToPortfolio: 'Ir para o Portfólio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/2 • TT314',
        heroTitle: 'Programação Orientada a Objetos I',
        heroSubtitle: 'Bem-vindo à central de monitoria. Aqui você encontra o cronograma, aulas, materiais de apoio e exercícios.',
        professor: 'Profª Drª Lívia Couto Ruback Rodrigues',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Buscar por conteúdo (ex: Ponteiros, Prova, Vetores)...',
        emptyLessons: 'Conteúdo será liberado em breve.',
        noResults: 'Nenhum conteúdo encontrado para',
        criteria: {
          title: 'Critérios de Avaliação',
          formula: 'MP = P1 * 0.3 + P2 * 0.3 + S * 0.2 + AP * 0.2',
          p1: 'Prova 1 (P1):',
          p2: 'Prova 2 (P2):',
          s: 'Seminário (S):',
          ap: 'Atividades Práticas (AP):',
          notes: '*Aprovação direta: MP ≥ 6.0 e Frequência ≥ 75%\n*Aprovação com Exame: MF ≥ 5.0 e Frequência ≥ 75%\n*Cálculo Final: MF = (MP + Nota Exame) / 2'
        },
        calculator: {
          title: 'Simule sua Média',
          p1Label: 'Nota P1',
          p2Label: 'Nota P2',
          sLabel: 'Seminário (S)',
          apLabel: 'Ativ. (AP)',
          placeholder: '0.0 - 10.0',
          buttonCalculate: 'Calcular Média',
          resultLabel: 'Média Parcial (MP):',
          approved: '✅ Aprovado(a) direto!',
          exam: '⚠️ Exame Final',
          failed: '❌ Reprovado(a)',
          examFormula: 'MF = (MP + Nota Exame) / 2 ≥ 5.0',
          examRequirement: 'Nota mínima no Exame:',
        },
        syllabus: {
          title: 'Ementa & Objetivo',
          ementaLabel: 'Ementa:',
          ementaText: 'Estudo e desenvolvimento em uma linguagem de programação Orientada a Objetos. Técnicas de depuração e documentação de programas.',
          objectiveLabel: 'Objetivo:',
          objectiveText: 'Introduzir os conceitos de programação orientada a objetos; compreender e utilizar os conceitos de classe, objetos, herança e polimorfismo para a implementação de projetos no paradigma orientado a objetos; introduzir conceitos e exemplos de tratamento de exceções e refatoração utilizando a linguagem Java.',
          methodologyTitle: 'Metodologia',
          methodologyText: 'Aulas expositivas e práticas com conceitos e exemplos relacionados ao conteúdo apresentado; apresentação de seminários em dupla sobre os temas pré-estabelecidos.'
        },
        skills: {
          title: 'Competências Desenvolvidas',
          text: 'Habilidade de compreender e aplicar os conceitos do paradigma orientado a objetos e de construir projetos flexíveis utilizando o paradigma.'
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
          subject: 'com o assunto "TT314"'
        },
        footer: {
          builtWith: 'Construído com',
          purpose: 'e propósito.',
          disclaimer: 'Esta é uma página pessoal e não uma página oficial da universidade. Seu conteúdo é de minha autoria e responsabilidade. Foi desenvolvida para auxiliar os alunos na disciplina de Orientação a Objetos I, ministrada na FT - Unicamp.'
        },
        courseData: [
          { 
            id: 1, 
            date: "10/08", 
            type: "Teoria", 
            title: "Aula 01: Apresentação da Disciplina", 
            description: "Apresentação da disciplina, critérios de avaliação e introdução ao plano de ensino.",
            lessons: [
              { title: "Plano de Ensino e Critérios", type: "doc", document: "planoEnsinoTT314.pdf" },
              { title: "Por que Java?", type: "slide" }
            ] 
          },
          { 
            id: 2, 
            date: "17/08", 
            type: "Teoria", 
            title: "Aula 02: Introdução à Orientação a Objetos", 
            description: "Paradigmas de programação, histórico e comparação entre linguagens procedurais e orientadas a objetos.",
            lessons: [
              { title: "Paradigmas de Programação - entre em contato", type: "slide" },
              { title: "Manual de instalação do Java e VS Code para Windows", type: "doc", document: "ManualInstalacaoJavaWindowsTT314.pdf" },
              { title: "Manual de configuração do VS Code", type: "doc", document: "ManualConfiguracaoVSCodeTT314.pdf" },
              { title: "Configuração do Ambiente (JDK + VSCODE) - entre em contato", type: "video" },
              { title: "Primeiro Programa em Java", type: "code", document: "App.java" }
            ] 
          },
          { 
            id: 3, 
            date: "24/08", 
            type: "Laboratório", 
            title: "Aula 03: Classes e Objetos", 
            description: "Conceitos fundamentais de classes, objetos, atributos, métodos e construtores.",
            lessons: [
              { title: "Definindo Classes e Instanciando Objetos", type: "slide" },
              { title: "Atributos e Métodos", type: "code" },
              { title: "Construtores em Java", type: "code" },
              { title: "Exercício Prático 01", type: "doc", document: "Exercicio01.pdf" }
            ] 
          },
          { 
            id: 4, 
            date: "31/08", 
            type: "Teoria", 
            title: "Aula 04: Herança", 
            description: "Mecanismo de herança, palavra-chave extends, superclasse e subclasse, reutilização de código.",
            lessons: [
              { title: "Herança em Java: extends", type: "slide" },
              { title: "Super e Sobrescrita de Métodos", type: "code" },
              { title: "Modificadores de Acesso: protected", type: "doc" }
            ] 
          },
          { 
            id: 5, 
            date: "07/09", 
            type: "Recurso", 
            title: "Sem Atividades (Recesso)", 
            description: "Não haverá atividades nesta data conforme cronograma oficial. Período para preparação dos seminários restantes.",
            lessons: [] 
          },
          { 
            id: 6, 
            date: "14/09", 
            type: "Recurso", 
            title: "Sem Atividades (Recesso)", 
            description: "Não haverá atividades nesta data conforme cronograma oficial. Período para preparação dos seminários restantes.",
            lessons: [] 
          },
          { 
            id: 7, 
            date: "21/09", 
            type: "Laboratório", 
            title: "Aula 05: Polimorfismo – Parte 1", 
            description: "Conceito de polimorfismo, classes abstratas e métodos abstratos, upcasting.",
            lessons: [
              { title: "Classes Abstratas e Métodos Abstratos", type: "slide" },
              { title: "Upcasting e Ligação Dinâmica", type: "code" },
              { title: "Atividade de Lab 01", type: "code" }
            ] 
          },
          { 
            id: 8, 
            date: "28/09", 
            type: "Avaliação", 
            highlight: true, 
            title: "P1 - PROVA 1", 
            description: "Avaliação referente ao conteúdo ministrado nas aulas 1 a 5. Introdução a OO, classes, objetos, herança e polimorfismo (parte 1).",
            lessons: [
              { title: "Revisão Geral P1", type: "video" },
              { title: "Lista de Revisão P1", type: "doc", document: "RevisaoP1.pdf" }
            ] 
          },
          { 
            id: 9, 
            date: "05/10", 
            type: "Teoria", 
            title: "Aula 07: Atividade Mentor-Aprendiz", 
            description: "Correção comentada da P1. Revisão de conceitos com maior índice de erros. Atividade em pares (mentoria entre alunos).",
            lessons: [
              { title: "Gabarito Comentado P1", type: "doc", document: "GabaritoP1.pdf" },
              { title: "Principais Erros e Soluções", type: "slide" },
              { title: "Atividade Mentor-Aprendiz", type: "doc", document: "AtividadeMentoria.pdf" }
            ] 
          },
          { 
            id: 10, 
            date: "12/10", 
            type: "Recurso", 
            title: "Sem Atividades (Recesso)", 
            description: "Não haverá atividades nesta data conforme cronograma oficial. Período para preparação dos seminários restantes.",
            lessons: [] 
          },
          { 
            id: 11, 
            date: "19/10", 
            type: "Laboratório", 
            title: "Aula 08: Tratamento de Exceções", 
            description: "Hierarquia de exceções, try-catch-finally, throw e throws, exceções verificadas vs não verificadas.",
            lessons: [
              { title: "Interfaces em Java", type: "slide" },
              { title: "Implementando Múltiplas Interfaces", type: "code" },
              { title: "Atividade de Lab 02", type: "code" }
            ] 
          },
          { 
            id: 12, 
            date: "26/10", 
            type: "Laboratório", 
            title: "Aula 08: Polimorfismo – Parte 2", 
            description: "Interfaces, implementação múltipla de comportamentos, diferenças entre interface e classe abstrata.",
            lessons: [
              { title: "Interfaces em Java", type: "slide" },
              { title: "Implementando Múltiplas Interfaces", type: "code" },
              { title: "Atividade de Lab 02", type: "code" }
            ] 
          },
          { 
            id: 13, 
            date: "02/11", 
            type: "Recurso", 
            title: "Sem Atividades (Recesso)", 
            description: "Não haverá atividades nesta data conforme cronograma oficial. Período para preparação dos seminários restantes.",
            lessons: [] 
          },
          { 
            id: 14, 
            date: "09/11", 
            type: "Avaliação", 
            highlight: true, 
            title: "Aula 11: Seminários – Parte 1", 
            description: "Apresentação de seminários em dupla sobre temas pré-estabelecidos do paradigma OO. Avaliação dos grupos.",
            lessons: [
              { title: "Orientações para Seminário", type: "doc", document: "OrientacoesSeminario.pdf" },
              { title: "Critérios de Avaliação", type: "slide" }
            ] 
          },
          { 
            id: 15, 
            date: "16/11", 
            type: "Avaliação", 
            highlight: true, 
            title: "Aula 12: Seminários – Parte 2", 
            description: "Continuação das apresentações de seminários. Avaliação dos grupos.",
            lessons: [
              { title: "Cronograma de Apresentações", type: "doc", document: "CronogramaSeminarios.pdf" }
            ] 
          },
          { 
            id: 16, 
            date: "23/11", 
            type: "Avaliação", 
            highlight: true, 
            title: "P2 - PROVA 2", 
            description: "Avaliação final contemplando todo o conteúdo do semestre com ênfase em polimorfismo, exceções, modificadores e refatoração.",
            lessons: [
              { title: "Revisão Geral P2", type: "video" },
              { title: "Lista de Revisão P2", type: "doc", document: "RevisaoP2.pdf" }
            ] 
          },
          { 
            id: 17, 
            date: "30/11", 
            type: "Encerramento", 
            title: "Aula 15: Entrega da P2 – Encerramento", 
            description: "Devolutiva da P2, revisão de notas, faltas e encerramento oficial da disciplina.",
            lessons: [
              { title: "Gabarito P2", type: "doc", document: "GabaritoP2.pdf" }
            ] 
          },
          { 
            id: 18, 
            date: "14/12", 
            type: "Avaliação", 
            highlight: true, 
            title: "EXAME FINAL", 
            description: "Para alunos com média >= 2.5 e < 5.0 e Frequência >= 75%. Conteúdo cumulativo de todo o semestre.",
            lessons: [
              { title: "Guia de Estudo para Exame", type: "doc", document: "GuiaExame.pdf" }
            ] 
          }
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
            p2: 'Criado em fazenda, um dos meus momentos mais inesquecíveis (e talvez hilários) foi quando meus pais criavam porcos no quintal, e eu, com toda a minha genialidade, resolvi pegar um filhote e levar pra mostrar pro meu pai. O resultado? O porquinho ficou tão assustado que começou a gritar e a mãe dele correu atrás de mim (spoiler: ela me mordeu, e esse é o motivo da minha cicatriz no queixo).',
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
            p1: 'E talvez o momento mais esperado pelas crianças chegou pra mim, a formatura. E Com toda certeza, foi uma das coisas mais gratificantes que já vivi. Juntamente com alguns professores, organizamos quermesses, rifas, e outras atividades para arrecadar fundos para a festa de formatura.',
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
              desc: 'Lembro que cheguei, e tudo era novo, novos professores, novos colegas, novas salas e laboratórios, tudo foi mágico!',
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
              desc2: 'Eu tinha o youtube, um violão velho e a vontade de aprender. Depois de um tempo, postando alguns vídeos tocando, fui convidado para tocar no Coral da Etec, onde tive a oportunidade de tocar em algumas apresentações.',
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
              title: 'Primeira aparição na TV',
              desc: 'Ao longo de vários acontecimentos, tive a oportunidade de aparecer em programas de televisão.'
            },
            teach: {
              title: 'Aparições em revistas',
              desc: 'Sempre fui uma pessoa muito tímida. Me expor, como modelo na adolescência, foi uma das formas que encontrei pra superar isso. Sem esperar, recebi alguns prêmios, alguns contratos, e aos poucos fui perdendo o medo do público.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Primeira aprovação em um vestibular',
            p1: 'E o um dos momentos mais cobrados na vida de um jovem do ensino médio chegou, a escolha da faculdade. E para mim, foi um processo muito difícil, cheio de dúvidas e incertezas. Na época havia sido aprovado em diversas universidades, mas acabei escolhendo cursar Ciência da Computação na UTFPR.',
            p2: 'Obviamente, tudo foi mágico, a alegria de passar, a ansiedade de começar, a mudança de estado, a expectativa de como seria a faculdade, tudo isso foi uma mistura de emoções que, quando vejo outros passando por isso, me lembro de como foi para mim, e fico genuinamente feliz.',
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
        description: 'Portfolio of Rodrigo Dias, Full Stack Developer',
        keywords: 'developer, full-stack, next.js, typescript, react, web development, portfolio, swift, java, apple developer academy',
        ogDescription: 'Explore my projects, experience, and expertise in full-stack development with modern technologies.',
        twitterHandle: '@digonomundo'
      },
      navbar: {
        location: 'Campinas - SP',
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
        paragraph1: 'Also known as <highlight>Digo</highlight>, I\'m a Systems Development Technician from Etec, I study Telecommunications Engineering at Unicamp and I <highlight>intend</highlight> to join and graduate from the <highlight>Apple Developer Academy</highlight>.',
        paragraph2: 'I have experience developing <highlight>web applications</highlight> with <highlight>Next.js, TypeScript</highlight> and <highlight>React.js</highlight>, as well as knowing how to use <highlight>no-code tools</highlight> like <highlight>WordPress (Elementor)</highlight> and <highlight>Wix</highlight>. I also have experience developing <highlight>native mobile apps</highlight> in <highlight>Kotlin</highlight> and <highlight>Java</highlight>.',
        paragraph3: 'For me, code goes far beyond syntax; it\'s about <highlight>solving real problems</highlight>. That\'s why I constantly seek to push my limits, exploring everything from the logical precision of <highlight>C/C++</highlight> programming to data analysis.',
        paragraph4: 'Technology is my craft, but it\'s the <highlight>stories and people</highlight> that drive me. When I\'m not coding, you\'ll probably find me immersed in <highlight>sports</highlight>, <highlight>listening to music</highlight>, <highlight>playing instruments</highlight> or even <highlight>participating in competitions</highlight>.',
        readMore: 'You can learn more about me by clicking here! ; )',
      },
      education: {
        title: 'Education & Achievements',
        subtitle: 'A solid academic foundation in technology, complemented by the discipline of high-performance sports and continuous innovation.',
        unicamp: {
          date: '2025 — Present',
          institution: 'State University of Campinas (UNICAMP)',
          degree: 'Bachelor\'s in Telecommunications Engineering',
          description: 'Focus on engineering, complex algorithms, and systems architecture. Actively engaged in the academic community.',
          tag1: 'Systems Design & Algorithm Analysis',
          tag2: 'Software Engineering'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Federal University of Technology – Paraná (UTFPR)',
          degree: 'Bachelor\'s in Computer Science',
          description: 'A period of deep immersion in core development concepts, design patterns, and mathematical foundations for computing.',
          tag1: 'Algorithm Analysis',
          tag2: 'Systems Design'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'High School integrated with Systems Development Technician',
          description: 'Where the passion for technology began. Development of early programming logic and complete applications.',
          tag1: 'Algorithms',
          tag2: 'Systems Analysis'
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
          hackathonPhp: '1st Place PHP Hackathon (Rem Soft) - 2024',
          ideathon: '3rd Place IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3rd Place Bruto Hacka & InovAgro Hackathon (Minerva Foods) - 2023',
          obmep: 'Honorable Mention 16th OBMEP - 2021'
        },
        languages2: {
          title: 'Extra Courses',
          wizard: {
            date: 'FEB 2026 - Present',
            title: 'Wizard By Pearson',
            desc: 'English course focused on vocabulary and conversation.'
          },
          cel: {
            date: 'FEB 2026 - Present',
            title: 'Unicamp Language Teaching Center',
            desc: 'English focused on speaking, writing, listening, and reading. With academic themes.'
          },
          usp: {
            date: 'Completed',
            title: 'USP (University of São Paulo)',
            desc: 'University extension course in English focused on reading and writing.'
          }
        },
        lattes: {
          title: 'Complete History',
          description: 'You can also access my Lattes Curriculum to view the full list of awards, medals, research projects, and complementary courses.',
          button: 'Access Lattes'
        }
      },
      experience: {
        tagline: 'Beyond education',
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
        unicampMonitor2: {
          date: 'Ago 2026 —  Present',
          role: 'OOP Teaching Assistant (PAD)',
          desc: 'Working in the Didactic Support Program for the Object-Oriented Programming I course, under the supervision of Prof. Dr. Livia Ruback.'
        },
        unicampMonitor1: {
          date: 'Jan 2026 — Jul 2026',
          role: 'Algorithms Teaching Assistant (PAD)',
          desc: 'Working in the Didactic Support Program for the Algorithms and Computer Programming I course, under the supervision of Prof. Dr. Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Present',
          role: 'IoT Researcher and Analyst',
          desc: 'Research and development focused on automation and the accessibility module to enable cycling for visually impaired people through a semi-autonomous bicycle.'
        },
        haken: {
          date: 'Mar 2024 — Jan 2025',
          role: 'Director & Project Assistant',
          bullet1: 'Led the structuring and reactivation of processes, visual identity, and contracts of the Junior Enterprise at MEJ.',
          bullet2: 'Developed a practical training ecosystem with Next.js and Tailwind, optimizing the ramp-up of new trainees from 90 to 30 days.',
          bullet3: 'Corporate brand representation at global youth entrepreneurship events, such as ENEJ in Florianópolis.'
        },
        desktop: {
          date: 'Jan 2024 — Feb 2024',
          role: 'Summer - Technical Support Analyst',
          bullet1: 'Analysis, triage, and remote network infrastructure resolution for an active base of over 1 million customers.',
          bullet2: 'High-performance maintenance and support under the quality criteria of the best internet provider in SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Present',
          role: 'Sales & International Trade Assistant',
          desc: 'Responsible for managing the corporate funnel in the Outgoing Global Volunteer (oGV) area, leading prospecting and strategic international consultancy for exchanges aligned with UN SDGs.',
          bullet1: 'Pipeline management via active CRM, qualification of high-standard leads, and closing complex contracts.',
          bullet2: 'International negotiation in English with global committees for alignment of legal visa and insurance compliance.'
        },
        lau: {
          date: 'May 2026 — Present',
          role: 'Starting Athlete (Jiu-Jitsu)',
          bullet1_bold: 'JUBs 2026 State Champion',
          bullet1_text: 'and Absolute Runner-Up in the SP Phase of the Brazilian University Games, called up to represent the State of São Paulo in the National Stage.',
          bullet2: 'Representative starting athlete for the entire Unicamp delegation. Representing all university courses.'
        },
        leu: {
          date: 'Mar 2026 — Present',
          role: 'Starting Athlete (Judo)',
          bullet1_bold: '3rd Place National JUBs Atléticas 2026',
          bullet1_text: 'and 3rd Place state. Tournament organized by CBDU, consolidating positions on the state and national podium.',
          bullet2: 'Official Judo representative at the Unicamp Engineering League, representing all engineering courses at the university. Also part of TIME SP, the São Paulo State University Team.'
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
          category: 'INSTITUTIONAL WEBSITE',
          title: 'Solução JR',
          desc: 'Institutional presentation portal developed for Solução JR, a civil engineering and architecture junior enterprise from UTFPR. Developed in co-creation and strategic collaboration with Therion EJ.'
        },
        tetrisEj: {
          category: 'INSTITUTIONAL WEBSITE',
          title: 'TETRIS EJ',
          desc: 'Modern and responsive web platform designed for Tetris EJ, a civil engineering and architecture junior enterprise from UTFPR, focused on usability, performance, and strengthening the brand\'s digital identity.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Semi-Autonomous Bicycle',
          desc: 'Hardware adaptation and engineering so that visually impaired people can ride bicycles safely, minimizing human interference. High-impact research project supervised by Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'INDUSTRIAL APPLICATION // AI',
          title: 'Inova Chat',
          desc: 'Intelligent chatbot system developed to filter and select feedback and reports from Minerva Foods employees, making corporate communication highly assertive. Solution integrated with OpenAI APIs.',
          badge: '3rd Place InovAgro Hackathon'
        },
        meuTreino: {
          category: 'ANDROID MOBILE APP',
          title: 'Meu Treino - Capstone Project',
          desc: 'A native Android app focused on managing and instructing weight training workouts, developed as a capstone project at ETEC. Uses NoSQL database and secure authentication to deliver a fluid and scalable experience.'
        }
      },
      footer: {
        builtWith: 'Built with',
        andPurpose: 'and purpose.',
        disclaimer: 'This portfolio is not just a showcase of code. It was designed pixel by pixel with a singular goal: to demonstrate my passion, my skills, and my genuine desire to join the Apple Developer Academy. It is the materialization of my goal.',
        designedIn: 'Designed in Brazil 🇧🇷'
      },
      tutoring: {
        badge: "Tutoring / Unicamp",
        title: "Tutoring Portal",
        subtitle: "Welcome to the tutoring portal. I prepared this space especially to support you. Select a course for more information.",
        loading: "Loading information...",
        footer: {
          builtWith: 'Built with',
          purpose: 'and purpose.',
          disclaimer: 'This is a personal page and not an official university page. Its content is my authorship and responsibility. It was developed to assist students in the courses I am or was a teaching assistant for at Unicamp.'
        },
        si100: {
          code: "SI100",
          name: "Algorithms and Computer Programming I",
          professor: "Prof. Dr. Ieda Geriberto Hidalgo",
          schedule: "Completed",
          language: "C Language",
          description: "Representation of real-world problems in algorithms. Focus on control structures, dynamic allocation, and modularization.",
          tags: ["Logic", "Control Structures", "Pointers", "Matrices"],
          cta: "Access SI100"
        },
        tt314: {
          code: "TT314",
          name: "Object-Oriented Programming I",
          professor: "Prof. Dr. Lívia Couto Ruback Rodrigues",
          schedule: "Mondays, 2pm to 6pm",
          language: "Java",
          description: "Project development in the object-oriented paradigm, including classes, inheritance, polymorphism, and refactoring.",
          tags: ["Classes & Objects", "Inheritance", "Polymorphism", "Exceptions"],
          cta: "Access TT314"
        }
      },
      tutoringsi100: {
        navbarTitle: 'SI100 Tutoring',
        backToPortfolio: 'Go to Portfolio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algorithms and Computer Programming I',
        heroSubtitle: 'Welcome to the tutoring center. Here you will find the schedule, classes, support materials, and exercises.',
        professor: 'Prof. Dr. Ieda Geriberto Hidalgo',
        monitor: 'Teaching Assistant: Rodrigo Marques Dias',
        searchPlaceholder: 'Search for content (e.g.: Pointers, Exam, Arrays)...',
        emptyLessons: 'Content will be released soon.',
        noResults: 'No content found for',
        criteria: {
          title: 'Assessment Criteria',
          formula: 'MP = (P1 + P2 + Activity Average) / 3',
          p1: 'Exam 1 (P1):',
          p2: 'Exam 2 (P2):',
          ml: 'Lab Average (ML):',
          notes: '*Direct approval: MP ≥ 6.0 and Attendance ≥ 75%\n*Approval with Final Exam: MF ≥ 5.0 and Attendance ≥ 75%\n*Final Calculation: MF = (MP + Exam Grade) / 2'
        },
        syllabus: {
          title: 'Syllabus & Objective',
          ementaLabel: 'Syllabus:',
          ementaText: 'Algorithms: representations and construction techniques. Program data and control structures. Modularization, Dynamic allocation, and Implementation in C.',
          objectiveLabel: 'Objective:',
          objectiveText: 'Provide learning of an efficient high-level language. Enable the student to represent real-world problems in algorithms and convert them to the C language.',
          methodologyTitle: 'Methodology',
          methodologyText: 'Each class is divided into theoretical and practical lab parts. The first part is theoretical; in the second, the practical activity is developed, which must be delivered at the end of the class to compose the assessment.'
        },
        skills: {
          title: 'Developed Competencies',
          text: '(1) Deductive logical reasoning aimed at creating computer programs;\n(2) Ability to recognize different programming structures, establish relationships between problems with similar structures, and implement computationally efficient algorithms for real-world problems.\nThrough group activities, it is expected to develop the student\'s social and communication skills.'
        },
        bibliography: {
          title: 'Bibliography',
          basicTitle: 'Basic',
          complementaryTitle: 'Complementary'
        },
        absences: {
          title: 'Observations on Absences (Art. 72 of the General Undergraduate Regulations)',
          subtitle: 'Absence justification must be requested by submitting documents to the Academic Office within 15 days after the occurrence. The foreseen cases are:',
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
          subject: 'with the subject "SI100"'
        },
        courseData: [
          { id: 1, date: "02/27", type: "Theory", title: "Class 01: Presentation & Introduction", description: "Course presentation, assessment criteria, and introduction to algorithms.", lessons: [{ title: "Teaching Plan and Criteria", type: "doc", document: "planoEnsino.pdf" }, { title: "Algorithm Concept", type: "slide", document: "planoEnsino.pdf" }, { title: "Environment Setup (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "03/06", type: "Lab", title: "Class 02: Basic Concepts", description: "Constants, variables, primitive types, and input/output commands.", lessons: [{ title: "Data Types in C (int, float, char)", type: "slide" }, { title: "List 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "03/13", type: "Theory", title: "Class 03: Assignments and Operators", description: "Arithmetic expressions, precedence, and relational operators.", lessons: [{ title: "Arithmetic and Relational Operators", type: "slide" }, { title: "List 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "03/20", type: "Lab", title: "Class 04: Sequential and Conditional Structure", description: "Simple and compound decision commands (if/else).", lessons: [{ title: "Boolean Logic in C", type: "video" }, { title: "If and Else Structures", type: "code" }, { title: "List 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "03/27", type: "Theory", title: "Class 05: Multiple Selection & Logical Operators", description: "Switch-case command and logical operators (AND, OR, NOT).", lessons: [{ title: "The Switch Command", type: "code" }, { title: "Truth Table and &&, ||, ! Operators", type: "slide" }, { title: "Practice Exercises", type: "doc" }] },
          { id: 6, date: "04/10", type: "Lab", title: "Class 06: Repetition (Test at Beginning/End)", description: "While and do-while repetition structures.", lessons: [{ title: "While Loop: Syntax and Usage", type: "video" }, { title: "Do-While Loop: Differences", type: "code" }, { title: "Lab Activity 03", type: "code" }] },
          { id: 7, date: "04/17", type: "Theory", title: "Class 07: Repetition (Control Variable)", description: "For repetition structure and nested loops.", lessons: [{ title: "The For Loop", type: "slide" }, { title: "Loops Inside Loops", type: "code" }, { title: "Repetition List", type: "doc" }] },
          { id: 8, date: "04/24", type: "Exam", highlight: true, title: "P1 - THEORETICAL EXAM 1", description: "Exam covering content from classes 1 to 7.", lessons: [{ title: "P1 General Review", type: "video" }] },
          { id: 9, date: "05/08", type: "Lab", title: "Class 08: Vectors (One-Dimensional Arrays)", description: "Declaration, initialization, and manipulation of vectors.", lessons: [{ title: "Array Concept", type: "slide" }, { title: "Traversing Vectors with Loops", type: "code" }, { title: "Lab Activity 04", type: "code" }] },
          { id: 10, date: "05/15", type: "Theory", title: "Class 09: Matrices and Strings", description: "Multidimensional arrays and character string manipulation.", lessons: [{ title: "Matrices in C", type: "slide" }, { title: "Strings: Char Vectors", type: "code" }, { title: "string.h Library", type: "doc" }] },
          { id: 11, date: "05/22", type: "Lab", title: "Class 10: Modularization (Functions)", description: "Functions, variable scope, and parameter passing.", lessons: [{ title: "Creating Your Own Functions", type: "video" }, { title: "Parameters by Value vs Reference", type: "code" }, { title: "Lab Activity 05", type: "code" }] },
          { id: 12, date: "05/29", type: "Theory", title: "Class 11: Pointers", description: "Memory address concept, pointers, and pointer arithmetic.", lessons: [{ title: "What is a Pointer?", type: "slide" }, { title: "Operators & and *", type: "code" }, { title: "Pointers and Vectors", type: "doc" }] },
          { id: 13, date: "06/12", type: "Lab", title: "Class 12: Dynamic Allocation & Structs", description: "Malloc, free, and heterogeneous data structures (records).", lessons: [{ title: "Dynamic Memory Allocation", type: "video" }, { title: "Structs (Records)", type: "code" }, { title: "Lab Activity 06", type: "code" }] },
          { id: 14, date: "06/19", type: "Exam", highlight: true, title: "P2 - THEORETICAL EXAM 2", description: "Cumulative exam (focus on classes 8 to 13).", lessons: [{ title: "P2 Review", type: "video" }] },
          { id: 15, date: "06/26", type: "Closing", title: "Class 13: Review and Averages", description: "Grade delivery and absence review.", lessons: [] },
          { id: 16, date: "07/17", type: "Exam", highlight: true, title: "FINAL EXAM", description: "For students with average >= 2.5 and < 5.0 and Attendance >= 75%.", lessons: [] }
        ],
        footer: {
          builtWith: 'Built with',
          purpose: 'and purpose.',
          disclaimer: 'This is a personal page and not an official university page. Its content is my authorship and responsibility. It was developed to assist students in the Algorithms and Computer Programming I course, taught at FT - Unicamp.'
        },
      },
      tutoringtt314: {
        navbarTitle: 'TT314 Tutoring',
        backToPortfolio: 'Go to Portfolio',
        locationCampinas: 'Campinas - SP',
        heroBadge: '2026/2 • TT314',
        heroTitle: 'Object-Oriented Programming I',
        heroSubtitle: 'Welcome to the tutoring center. Here you will find the schedule, classes, support materials, and exercises.',
        professor: 'Prof. Dr. Lívia Couto Ruback Rodrigues',
        monitor: 'Teaching Assistant: Rodrigo Marques Dias',
        searchPlaceholder: 'Search for content (e.g.: Inheritance, Exam, Interfaces)...',
        emptyLessons: 'Content will be released soon.',
        noResults: 'No content found for',
        criteria: {
          title: 'Assessment Criteria',
          formula: 'MP = P1 * 0.3 + P2 * 0.3 + S * 0.2 + AP * 0.2',
          p1: 'Exam 1 (P1):',
          p2: 'Exam 2 (P2):',
          s: 'Seminar (S):',
          ap: 'Practical Activities (AP):',
          notes: '*Direct approval: MP ≥ 6.0 and Attendance ≥ 75%\n*Approval with Final Exam: MF ≥ 5.0 and Attendance ≥ 75%\n*Final Calculation: MF = (MP + Exam Grade) / 2'
        },
        calculator: {
          title: 'Calculate Your Grade',
          p1Label: 'P1 Grade',
          p2Label: 'P2 Grade',
          sLabel: 'Seminar (S)',
          apLabel: 'Pract. Act. (AP)',
          placeholder: '0.0 - 10.0',
          buttonCalculate: 'Calculate Average',
          resultLabel: 'Partial Average (MP):',
          approved: '✅ Approved!',
          exam: '⚠️ Final Exam Required',
          failed: '❌ Failed',
          examFormula: 'MF = (MP + Exam Grade) / 2 ≥ 5.0',
          examRequirement: 'Minimum exam grade required:',
        },
        syllabus: {
          title: 'Syllabus & Objective',
          ementaLabel: 'Syllabus:',
          ementaText: 'Study and development in an Object-Oriented programming language. Program debugging and documentation techniques.',
          objectiveLabel: 'Objective:',
          objectiveText: 'Introduce object-oriented programming concepts; understand and use class, object, inheritance, and polymorphism concepts for implementing projects in the object-oriented paradigm; introduce concepts and examples of exception handling and refactoring using the Java language.',
          methodologyTitle: 'Methodology',
          methodologyText: 'Lectures and practical classes with concepts and examples related to the presented content; seminar presentations in pairs on pre-established themes.'
        },
        skills: {
          title: 'Developed Competencies',
          text: 'Ability to understand and apply the concepts of the object-oriented paradigm and to build flexible projects using the paradigm.'
        },
        bibliography: {
          title: 'Bibliography',
          basicTitle: 'Basic',
          complementaryTitle: 'Complementary'
        },
        absences: {
          title: 'Observations on Absences (Art. 72 of the General Undergraduate Regulations)',
          subtitle: 'Absence justification must be requested by submitting documents to the Academic Office within 15 days after the occurrence. The foreseen cases are:',
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
          subject: 'with the subject "TT314"'
        },
        footer: {
          builtWith: 'Built with',
          purpose: 'and purpose.',
          disclaimer: 'This is a personal page and not an official university page. Its content is my authorship and responsibility. It was developed to assist students in the Object-Oriented Programming I course, taught at FT - Unicamp.'
        },
        courseData: [
          { 
            id: 1, 
            date: "08/10", 
            type: "Theory", 
            title: "Class 01: Course Introduction", 
            description: "Course introduction, evaluation criteria, and an overview of the syllabus.",
            lessons: [
              { title: "Syllabus and Evaluation Criteria", type: "doc", document: "planoEnsinoTT314.pdf" },
              { title: "Why Java?", type: "slide" }
            ] 
          },
          { 
            id: 2, 
            date: "08/17", 
            type: "Theory", 
            title: "Class 02: Introduction to Object-Oriented Programming", 
            description: "Programming paradigms, history, and a comparison between procedural and object-oriented languages.",
            lessons: [
              { title: "Programming Paradigms - contact us", type: "slide" },
              { title: "Java and VS Code Installation Manual for Windows", type: "doc", document: "ManualInstalacaoJavaWindowsTT314.pdf" },
              { title: "VS Code Configuration Manual", type: "doc", document: "ManualConfiguracaoVSCodeTT314.pdf" },
              { title: "Environment Setup (JDK + VSCODE) - contact us", type: "video" },
              { title: "First Program in Java", type: "code", document: "App.java" }
            ]
          },
          { 
            id: 3, 
            date: "08/24", 
            type: "Lab", 
            title: "Class 03: Classes and Objects", 
            description: "Fundamental concepts of classes, objects, attributes, methods, and constructors.",
            lessons: [
              { title: "Defining Classes and Instantiating Objects", type: "slide" },
              { title: "Attributes and Methods", type: "code" },
              { title: "Constructors in Java", type: "code" },
              { title: "Practical Exercise 01", type: "doc", document: "Exercicio01.pdf" }
            ] 
          },
          { 
            id: 4, 
            date: "08/31", 
            type: "Theory", 
            title: "Class 04: Inheritance", 
            description: "The inheritance mechanism, the extends keyword, superclass and subclass, and code reuse.",
            lessons: [
              { title: "Inheritance in Java: extends", type: "slide" },
              { title: "Super and Method Overriding", type: "code" },
              { title: "Access Modifiers: protected", type: "doc" }
            ] 
          },
          { 
            id: 5, 
            date: "09/07", 
            type: "Break", 
            title: "No Activities (Break)", 
            description: "There will be no activities on this date as per the official schedule. Time to prepare for the remaining seminars.",
            lessons: [] 
          },
          { 
            id: 6, 
            date: "09/14", 
            type: "Break", 
            title: "No Activities (Break)", 
            description: "There will be no activities on this date as per the official schedule. Time to prepare for the remaining seminars.",
            lessons: [] 
          },
          { 
            id: 7, 
            date: "09/21", 
            type: "Lab", 
            title: "Class 05: Polymorphism – Part 1", 
            description: "The concept of polymorphism, abstract classes and abstract methods, and upcasting.",
            lessons: [
              { title: "Abstract Classes and Abstract Methods", type: "slide" },
              { title: "Upcasting and Dynamic Binding", type: "code" },
              { title: "Lab Activity 01", type: "code" }
            ] 
          },
          { 
            id: 8, 
            date: "09/28", 
            type: "Assessment", 
            highlight: true, 
            title: "P1 - TEST 1", 
            description: "Assessment covering the content taught in classes 1 through 5. Intro to OOP, classes, objects, inheritance, and polymorphism (part 1).",
            lessons: [
              { title: "General Review for P1", type: "video" },
              { title: "P1 Review List", type: "doc", document: "RevisaoP1.pdf" }
            ] 
          },
          { 
            id: 9, 
            date: "10/05", 
            type: "Theory", 
            title: "Class 07: Mentor-Apprentice Activity", 
            description: "Annotated P1 correction. Review of concepts with the highest error rate. Pair activity (peer mentoring among students).",
            lessons: [
              { title: "P1 Annotated Answer Key", type: "doc", document: "GabaritoP1.pdf" },
              { title: "Main Errors and Solutions", type: "slide" },
              { title: "Mentor-Apprentice Activity", type: "doc", document: "AtividadeMentoria.pdf" }
            ] 
          },
          { 
            id: 10, 
            date: "10/12", 
            type: "Break", 
            title: "No Activities (Break)", 
            description: "There will be no activities on this date as per the official schedule. Time to prepare for the remaining seminars.",
            lessons: [] 
          },
          { 
            id: 11, 
            date: "10/19", 
            type: "Lab", 
            title: "Class 08: Exception Handling", 
            description: "Exception hierarchy, try-catch-finally, throw and throws, checked vs unchecked exceptions.",
            lessons: [
              { title: "Interfaces in Java", type: "slide" },
              { title: "Implementing Multiple Interfaces", type: "code" },
              { title: "Lab Activity 02", type: "code" }
            ] 
          },
          { 
            id: 12, 
            date: "10/26", 
            type: "Lab", 
            title: "Class 08: Polymorphism – Part 2", 
            description: "Interfaces, multiple behavior implementation, differences between interfaces and abstract classes.",
            lessons: [
              { title: "Interfaces in Java", type: "slide" },
              { title: "Implementing Multiple Interfaces", type: "code" },
              { title: "Lab Activity 02", type: "code" }
            ] 
          },
          { 
            id: 13, 
            date: "11/02", 
            type: "Break", 
            title: "No Activities (Break)", 
            description: "There will be no activities on this date as per the official schedule. Time to prepare for the remaining seminars.",
            lessons: [] 
          },
          { 
            id: 14, 
            date: "11/09", 
            type: "Assessment", 
            highlight: true, 
            title: "Class 11: Seminars – Part 1", 
            description: "Pair presentations on pre-established OO paradigm topics. Group evaluation.",
            lessons: [
              { title: "Seminar Guidelines", type: "doc", document: "OrientacoesSeminario.pdf" },
              { title: "Evaluation Criteria", type: "slide" }
            ] 
          },
          { 
            id: 15, 
            date: "11/16", 
            type: "Assessment", 
            highlight: true, 
            title: "Class 12: Seminars – Part 2", 
            description: "Continuation of seminar presentations. Group evaluation.",
            lessons: [
              { title: "Presentation Schedule", type: "doc", document: "CronogramaSeminarios.pdf" }
            ] 
          },
          { 
            id: 16, 
            date: "11/23", 
            type: "Assessment", 
            highlight: true, 
            title: "P2 - TEST 2", 
            description: "Final assessment covering all semester content with emphasis on polymorphism, exceptions, modifiers, and refactoring.",
            lessons: [
              { title: "General Review for P2", type: "video" },
              { title: "P2 Review List", type: "doc", document: "RevisaoP2.pdf" }
            ] 
          },
          { 
            id: 17, 
            date: "11/30", 
            type: "Closing", 
            title: "Class 15: P2 Submission – Closing", 
            description: "P2 feedback, grade review, absences, and official course closing.",
            lessons: [
              { title: "P2 Answer Key", type: "doc", document: "GabaritoP2.pdf" }
            ] 
          },
          { 
            id: 18, 
            date: "12/14", 
            type: "Assessment", 
            highlight: true, 
            title: "FINAL EXAM", 
            description: "For students with average grade >= 2.5 and < 5.0 and attendance >= 75%. Cumulative content from the entire semester.",
            lessons: [
              { title: "Exam Study Guide", type: "doc", document: "GuiaExame.pdf" }
            ] 
          }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Soundtrack Playing',
          paused: 'Soundtrack Paused',
          ariaLabel: 'Toggle background music',
        },
        hero: {
          badge: 'A RETROSPECTIVE OF THE YEARS',
          title: 'Who is Digo?',
          subtitle: 'This is not a simple "About Me" page. It\'s an unfiltered collection of memories, chords, sports, and some funny situations that brought me here. Grab a coffee, press play on the soundtrack, and enjoy the journey.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'The Mischievous and Curious Child',
            p1: 'If you see me focused on VS Code today, you might not imagine that my journey began by taking things apart as a child. I was that kid who liked to see what was inside things, and it wasn\'t long before I started disassembling and reassembling toys, computers, video games, and even a fan (which never worked again).',
            p2: 'Raised on a farm, one of my most unforgettable (and perhaps hilarious) moments was when my parents raised pigs in the backyard, and I, with all my genius, decided to grab a piglet and take it to show my dad. The result? The little pig got so scared it started screaming and its mother ran after me (spoiler: she bit me, and that\'s the reason for the scar on my chin).',
          },
          math: {
            num: '02',
            title: 'Mathematics and School',
            p1: 'In childhood, I confess I didn\'t like studying, but besides taking things apart, I also had a curiosity for numbers. Mathematics was one of my favorite subjects, and I loved solving problems and challenges, which led me to participate in knowledge competitions in the region, where I won some awards.',
            p2: 'My first medal was related to this!',
          },
          soccer: {
            num: '03',
            title: 'My First Sport: Football (Soccer)',
            text: {
              desc1: 'My relationship with sports began early, and curiously, with football, thanks to my dad, who took me to the games of the team he coached.',
              desc2: 'Unfortunately, my ball skills weren\'t the best, so this part of life didn\'t last long.',
              descImg: 'Pre-game team huddle.'
            }
          },
          martial1: {
            num: '04',
            title: 'The Martial Arts: Kung Fu',
            p1: 'During my childhood, I had the opportunity to practice my first martial art in a project at my school at the time. That\'s where I got to know Kung Fu.',
            p2: 'The brief experience with Kung Fu taught me discipline, focus, and the importance of doing everything with excellence (or at least trying). It was an incredible experience that deeply marked me, and to this day I carry some teachings from that time.',
          },
          martial2: {
            num: '05',
            title: 'The Martial Arts: Muay Thai',
            p1: 'In my pre-adolescence, I had the opportunity to practice another martial art, Muay Thai, in a social project at a local church in my city.',
            p2: 'Over time, I became one of the most dedicated students and received a scholarship from Professor Júnior Shaolin to train at his gym.',
            descImg: 'Muay Thai training with Professor Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'The Day They Threw Me a Surprise Party at School',
            p1: 'I never gave much significance to my birthdays, but one day, still during my middle school years, my friends got together, without me knowing anything, and threw me a surprise birthday party at school.',
            p2: 'It was such a remarkable moment that even today, when I remember, I feel very grateful to have such incredible friends. And of course, the party was amazing, complete with cake, brigadeiros, and lots of fun. Special thanks to my 9th-grade class, who made that day so special for me.',
            descImg: 'Cutting the cake for friends'
          },
          formatura1: {
            num: '07',
            title: 'My Middle School Graduation',
            p1: 'And perhaps the most awaited moment for children came for me: graduation. And with all certainty, it was one of the most rewarding things I\'ve ever experienced. Together with some teachers, we organized fairs, raffles, and other activities to raise funds for the graduation party.',
            p2: 'When the big day arrived, it was simply incredible. Thanks to teacher Paulo Bernardo, I wrote my first excerpts of a book, which was also written by each of my classmates, printed, and given to each of us as a memento of this important phase. And of course, the party was amazing.',
            descImg: 'Receiving the book and graduation diploma from the hands of teacher Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: 'I Was Accepted to High School and Technical Course at Etec!',
            diary: {
              title: 'My First Embedded Systems Classes',
              desc: 'A record of the day we had a challenge to build a traffic light circuit using Arduino.'
            },
            tests: {
              title: 'My First Programming Exams',
              desc: 'And the exams were like this, with a bunch of handwritten codes, and me trying to understand what was happening. It was a challenge, but also part of the set of triggers for my love of programming.'
            },
            first: {
              title: 'My First Day of Class at ETEC',
              desc: 'I remember arriving, and everything was new: new teachers, new classmates, new classrooms and laboratories. Everything was magical!',
            },
            codes: {
              title: 'My First Written Codes',
              desc: 'Here began my journey with code. Everything was very ambiguous and new for a 15-year-old boy. It was a process of trial and error, but every line of code written was a small victory.',
            }
          },
          coral: {
            num: '9',
            title: 'First Chords',
            music: {
              desc1: 'During the COVID-19 pandemic, spending months at home, the curiosity to learn new things arose again. Among them, playing musical instruments. And that\'s how I started learning guitar and ukulele.',
              desc2: 'I had YouTube, an old guitar, and the will to learn. After a while, posting some videos playing, I was invited to play in the Etec Choir, where I had the opportunity to perform at some events.',
              descImg: 'A record of the day of my first performance playing guitar in the choir I participated in at Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'The Martial Arts: Jiu-Jitsu',
            p1: 'Here began my relationship with Jiu-Jitsu, which is the sport that marked me the most and taught me the most throughout my life. I started practicing as a hobby, but in less than a month, my professor, Huelder Motta, already signed me up to compete. Unexpectedly, I was champion in all the championships I fought as a white belt. That\'s when it all began.',
            p2: 'Being an atypical case, I was promoted to blue belt in 3 months, even without really knowing what I was doing. Even so, I kept improving, winning the competitions I participated in, and soon I started receiving sponsorships, scholarships, and invitations to train at other academies.',
            descImg: 'First Jiu-Jitsu Experience.'
          },
          firstHacka: {
            num: '11',
            title: '1st Inovagro Congress & Bruto Hacka',
            text: {
              desc1: 'In the photo, Maria Eduarda Ayres, Leona do Nascimento, and me, developing the project for the final Hackathon presentation.',
              desc2: 'Without any shadow of a doubt, this was definitely the turning point for choosing my career. It was the first time I participated in a hackathon, and amidst so many uncertainties, nervousness, and inexperience, it was here that I realized I was truly on the right path. I saw that I could really solve real society problems by doing what I loved, even with little experience at the time.',
              descImg: 'We received the 3rd place award with the Inova Chat project, an intelligent chatbot system developed to filter and select feedback and reports from Minerva Foods employees, making corporate communication highly assertive. Solution integrated with OpenAI APIs.',
              descImg2: '3rd Place Winners'
            }
          },
          diary: {
            num: '12',
            title: 'First Newspaper Feature',
            diary: {
              title: 'The Beginning of a Legacy',
              desc: 'A record of the day of my first newspaper feature, where one of my first Jiu-Jitsu titles was documented.'
            },
            tv: {
              title: 'First TV Appearance',
              desc: 'Throughout various events, I had the opportunity to appear on television programs.'
            },
            teach: {
              title: 'Magazine Appearances',
              desc: 'I\'ve always been a very shy person. Exposing myself as a model in adolescence was one of the ways I found to overcome this. Unexpectedly, I received some awards, some contracts, and gradually I lost my fear of the public.'
            }
          },
          utfpr: {
            num: '13',
            title: 'First University Acceptance',
            p1: 'And one of the most demanding moments in a high school student\'s life arrived: choosing a college. And for me, it was a very difficult process, full of doubts and uncertainties. At the time, I had been accepted into several universities, but I ended up choosing to study Computer Science at UTFPR.',
            p2: 'Obviously, everything was magical: the joy of passing, the anxiety of starting, the change of state, the expectation of what college would be like. All of this was a mix of emotions that, when I see others going through it, reminds me of how it was for me, and I feel genuinely happy.',
            descImg: 'First Jiu-Jitsu Experience.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon FAEP/SENAR System',
            text: {
              desc1: 'Already in college, but still in the context of technical education, I had the opportunity to participate in the Ideathon of the FAEP/SENAR System, a hackathon where I was able to develop, in a group, a business model for the agricultural sector.',
              desc2: 'The solution earned us the 3rd place award, and more importantly, the certainty that I was on the right path and that I could really make a difference.',
              descImg: 'Receiving the award from Ricardo Ost and Jefrey Kleine Albers',
              descImg2: 'Presenting the project'
            }
          },
        },
        labels: {
          liveChildhood: 'Lively Childhood',
          mediaHighlight: 'Media Highlight',
        }
      }
    }
  },
  es: {
    translation: {
      meta: {
        title: 'Rodrigo Dias - Desarrollador Full Stack',
        description: 'Portafolio de Rodrigo Dias, Desarrollador Full Stack',
        keywords: 'desarrollador, full-stack, next.js, typescript, react, desarrollo web, portafolio, swift, java, apple developer academy',
        ogDescription: 'Conoce mis proyectos, experiencia y expertise en desarrollo full-stack con tecnologías modernas.',
        twitterHandle: '@digonomundo'
      },
      navbar: {
        location: 'Campinas - SP, Brasil',
        themeToggle: 'Alternar tema claro y oscuro',
        home: 'Inicio',
        about: 'Sobre mí',
        education: 'Formación',
        experience: 'Experiencia',
        projects: 'Proyectos',
        contact: 'Contacto',
        tutoring: 'Monitoría',
        portfolio: 'Ir al portafolio',
        portfolio2: 'Volver al portafolio',
        language: 'Idioma'
      },
      hero: {
        titleLine1: 'Futuro',
        titleLine2: 'Apple developer',
        summary: 'Técnico en Desarrollo de Sistemas y estudiante de Ingeniería de Telecomunicaciones',
        email: 'Correo electrónico',
        contactCta: 'Ponte en contacto',
        downloadCv: 'Descargar CV'
      },
      about: {
        title: 'Sobre Mí',
        paragraph1: 'También conocido como <highlight>Digo</highlight>, soy Técnico en Desarrollo de Sistemas por Etec, estudio Ingeniería de Telecomunicaciones en Unicamp y <highlight>pretendo</highlight> ingresar y graduarme en la <highlight>Apple Developer Academy</highlight>.',
        paragraph2: 'Tengo experiencia en desarrollo de <highlight>aplicaciones web</highlight> con <highlight>Next.js, TypeScript</highlight> y <highlight>React.js</highlight>, además de saber utilizar <highlight>herramientas no-code</highlight> como <highlight>WordPress (Elementor)</highlight> y <highlight>Wix</highlight>. También tengo experiencia en desarrollo de <highlight>aplicaciones móviles nativas</highlight> en <highlight>Kotlin</highlight> y <highlight>Java</highlight>.',
        paragraph3: 'Para mí, el código va mucho más allá de la sintaxis; se trata de <highlight>resolver problemas reales</highlight>. Por eso busco constantemente expandir mis límites, explorando desde la precisión lógica de la programación con <highlight>C/C++</highlight>, hasta el análisis de datos.',
        paragraph4: 'La tecnología es mi oficio, pero son las <highlight>historias y las personas</highlight> las que me mueven. Cuando no estoy programando, probablemente me encontrarás inmerso en <highlight>deportes</highlight>, <highlight>escuchando música</highlight>, <highlight>tocando instrumentos</highlight> o incluso <highlight>participando en competiciones</highlight>.',
        readMore: '¡Puedes saber más sobre mí haciendo clic aquí! ; )',
      },
      education: {
        title: 'Formación y Títulos',
        subtitle: 'Una base académica sólida en tecnología, complementada por la disciplina del deporte de alto rendimiento e innovación continua.',
        unicamp: {
          date: '2025 — Presente',
          institution: 'Universidad Estatal de Campinas (UNICAMP)',
          degree: 'Licenciatura en Ingeniería de Telecomunicaciones',
          description: 'Enfoque en ingeniería, algoritmos complejos y arquitectura de sistemas. Participando activamente en la comunidad académica.',
          tag1: 'Diseño de Sistemas y Análisis de Algoritmos',
          tag2: 'Ingeniería de Software'
        },
        utfpr: {
          date: '2024 - 2025',
          institution: 'Universidad Tecnológica Federal de Paraná (UTFPR)',
          degree: 'Licenciatura en Ciencias de la Computación',
          description: 'Período de inmersión profunda en conceptos iniciales de desarrollo, patrones de diseño y fundamentos matemáticos para computación.',
          tag1: 'Análisis de Algoritmos',
          tag2: 'Diseño de Sistemas'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'Bachillerato integrado al Técnico en Desarrollo de Sistemas',
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
          jubs: '1er Lugar JUBs SP (Jiu-jitsu) - 2026',
          hackathonPhp: '1er Lugar Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3er Lugar IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3er Lugar Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Mención Honorífica 16ª OBMEP - 2021'
        },
        languages2: {
          title: 'Cursos extras',
          wizard: {
            date: 'FEB 2026 - Actualmente',
            title: 'Wizard By Pearson',
            desc: 'Curso de inglés con enfoque en vocabulario y conversación.'
          },
          cel: {
            date: 'FEB 2026 - Actualmente',
            title: 'Centro de Enseñanza de Lenguas de Unicamp',
            desc: 'Inglés con enfoque en habla, escritura, comprensión oral y lectura. Con temas académicos.'
          },
          usp: {
            date: 'Concluido',
            title: 'USP (Universidad de São Paulo)',
            desc: 'Curso de extensión universitaria en lengua inglesa con enfoque en reading y writing.'
          }
        },
        lattes: {
          title: 'Historial Completo',
          description: 'También puedes acceder a mi Currículum Lattes para visualizar la lista completa de premios, medallas, proyectos de investigación y cursos complementarios.',
          button: 'Acceder a Lattes'
        }
      },
      experience: {
        tagline: 'Más allá de la formación',
        title: 'Experiencia Desarrollada',
        subtitle: 'Un poco de lo que vengo haciendo con ingeniería, computación, liderazgo y disciplina.',
        tracks: {
          professional: {
            title: 'Experiencia profesional y Soluciones Técnicas',
            subtitle: 'Actuaciones profesionales, investigación corporativa y docencia.'
          },
          volunteering: {
            title: 'Liderazgo y Rendimiento',
            subtitle: 'Iniciativas voluntarias globales y representación deportiva.'
          }
        },
        unicampMonitor2: {
          date: 'Ago 2026 — Presente',
          role: 'Monitor de POO en Java (PAD)',
          desc: 'Actúo en el Programa de Apoyo Didáctico para la asignatura de Programación Orientada a Objetos, bajo supervisión de la Profª Drª Livia Ruback.'
        },
        unicampMonitor1: {
          date: 'Feb 2026 — Jul 2026',
          role: 'Monitor de Algoritmos (PAD)',
          desc: 'Actué en el Programa de Apoyo Didáctico para la asignatura de Algoritmos y Programación de Computadores I, bajo supervisión de la Profª Drª Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Presente',
          role: 'Investigador y Analista IoT',
          desc: 'Investigación y desarrollo enfocado en automatización y en el módulo de accesibilidad para permitir la práctica del ciclismo por PCD visuales mediante una bicicleta semiautónoma.'
        },
        haken: {
          date: 'Mar 2024 — Ene 2025',
          role: 'Director y Asistente de Proyectos',
          bullet1: 'Lideré la estructuración y reactivación de procesos, identidad visual y contratos de la Empresa Junior en MEJ.',
          bullet2: 'Desarrollé un ecosistema de entrenamiento práctico con Next.js y Tailwind, optimizando el ramp-up de nuevos trainees de 90 a 30 días.',
          bullet3: 'Representación de la marca corporativa en eventos globales de emprendimiento juvenil, como el ENEJ en Florianópolis.'
        },
        desktop: {
          date: 'Ene 2024 — Feb 2024',
          role: 'Summer - Analista de Soporte Técnico',
          bullet1: 'Análisis, clasificación y resolución remota de infraestructura de red para una base activa con más de 1 millón de clientes.',
          bullet2: 'Mantenimiento de alto rendimiento y soporte bajo los criterios de calidad del mejor proveedor de internet de SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Presente',
          role: 'Sales & International Trade Assistant',
          desc: 'Responsable de la gestión del embudo corporativo en el área de Outgoing Global Volunteer (oGV), liderando prospecciones y consultoría estratégica internacional de intercambios alineados con los ODS de la ONU.',
          bullet1: 'Gestión de pipeline vía CRM activo, calificación de leads de alto estándar y cierre de contratos complejos.',
          bullet2: 'Negociación internacional en lengua inglesa con comités globales para la alineación de conformidades legales de visa y seguros.'
        },
        lau: {
          date: 'May 2026 — Presente',
          role: 'Atleta Titular (Jiu-Jitsu)',
          bullet1_bold: 'Campeón Estatal JUBs 2026',
          bullet1_text: 'y Subcampeón Absoluto en la Fase SP de los Juegos Universitarios Brasileños, convocado para representar al Estado de São Paulo en la Etapa Nacional.',
          bullet2: 'Atleta titular representativo de toda la delegación de Unicamp. Representando a todos los cursos de la universidad.'
        },
        leu: {
          date: 'Mar 2026 — Presente',
          role: 'Atleta Titular (Judo)',
          bullet1_bold: '3er Lugar Nacional JUBs Atléticas 2026',
          bullet1_text: 'y 3er Lugar estatal. Torneo organizado por CBDU, consolidando posiciones en el podio estatal y nacional.',
          bullet2: 'Representante oficial de Judo en la Liga de Ingenierías de Unicamp, representando a todos los cursos de ingeniería de la universidad. Además de formar parte de TIME SP, la Selección Paulista Universitaria.'
        },
        etecTalk: {
          date: 'Feb 2023 — Dic 2023',
          role: 'Asistente de Producción Audiovisual',
          desc: 'Responsable directo del diseño de identidad estética, configuración de transmisión técnica y dirección de grabaciones, enfocándose en la democratización de inteligencia técnica para la comunidad.'
        }
      },
      projects: {
        index: 'PROYECTOS SELECCIONADOS',
        title: 'Proyectos.',
        subtitle: 'Una vitrina conceptual con soluciones robustas de ingeniería de software, interfaces fluidas y arquitectura limpia.',
        viewProject: 'Visitar proyecto',
        ctaHover: 'Ver proyecto',
        ctaText: 'Acceder',
        solucaoJr: {
          category: 'SITIO INSTITUCIONAL',
          title: 'Solução JR',
          desc: 'Portal de presentación institucional desarrollado para Solução JR, una empresa junior de ingeniería civil y arquitectura de UTFPR. Desarrollado en régimen de cocreación y colaboración estratégica con Therion EJ.'
        },
        tetrisEj: {
          category: 'SITIO INSTITUCIONAL',
          title: 'TETRIS EJ',
          desc: 'Plataforma web moderna y responsiva diseñada para Tetris EJ, empresa junior de ingeniería civil y arquitectura de UTFPR, con enfoque en usabilidad, rendimiento y fortalecimiento de la identidad digital de la marca.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Bicicleta Semiautónoma',
          desc: 'Adaptación e ingeniería de hardware para que personas con deficiencias visuales puedan andar en bicicleta con seguridad, minimizando la interferencia humana. Proyecto de investigación de alto impacto orientado por el Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'APLICACIÓN INDUSTRIAL // IA',
          title: 'Inova Chat',
          desc: 'Sistema de chatbot inteligente desarrollado para filtrar y seleccionar feedbacks y relatos de empleados de Minerva Foods, haciendo la comunicación empresarial altamente asertiva. Solución integrada con las APIs de OpenAI.',
          badge: '3er Lugar Hackathon InovAgro'
        },
        meuTreino: {
          category: 'APP MOBILE ANDROID',
          title: 'Meu Treino - TCC',
          desc: 'Una aplicación nativa Android enfocada en la gestión e instrucción de entrenamientos de musculación, desarrollada como trabajo de fin de curso en ETEC. Utiliza base de datos NoSQL y autenticación segura para entregar una experiencia fluida y escalable.'
        }
      },
      footer: {
        builtWith: 'Hecho con',
        andPurpose: 'y propósito.',
        disclaimer: 'Este portafolio no es solo una vitrina de códigos. Fue diseñado píxel a píxel con un objetivo singular: demostrar mi pasión, mis habilidades y mi voluntad genuina de integrar el Apple Developer Academy. Es la materialización de mi objetivo.',
        designedIn: 'Diseñado en Brasil 🇧🇷'
      },
      tutoring: {
        badge: "Monitoría / Unicamp",
        title: "Portal de Monitorías",
        subtitle: "Bienvenido al portal de monitorías. Preparé este espacio especialmente para apoyarte. Selecciona una asignatura para más información.",
        loading: "Cargando información...",
        footer: {
          builtWith: 'Construido con',
          purpose: 'y propósito.',
          disclaimer: 'Esta es una página personal y no una página oficial de la universidad. Su contenido es de mi autoría y responsabilidad. Fue desarrollada para auxiliar a los alumnos en las asignaturas en las que soy o fui monitor en Unicamp.'
        },
        si100: {
          code: "SI100",
          name: "Algoritmos y Programación de Computadores I",
          professor: "Profª Drª Ieda Geriberto Hidalgo",
          schedule: "Finalizada",
          language: "Lenguaje C",
          description: "Representación de problemas del mundo real en algoritmos. Enfoque en estructuras de control, asignación dinámica y modularización.",
          tags: ["Lógica", "Estructuras de Control", "Punteros", "Matrices"],
          cta: "Acceder SI100"
        },
        tt314: {
          code: "TT314",
          name: "Orientación a Objetos I",
          professor: "Profª Drª Lívia Couto Ruback Rodrigues",
          schedule: "Lunes, 14h a 18h",
          language: "Java",
          description: "Desarrollo de proyectos en el paradigma orientado a objetos, incluyendo clases, herencia, polimorfismo y refactorización.",
          tags: ["Clases y Objetos", "Herencia", "Polimorfismo", "Excepciones"],
          cta: "Acceder TT314"
        }
      },
      tutoringsi100: {
        navbarTitle: 'Monitoría SI100',
        backToPortfolio: 'Ir al Portafolio',
        locationCampinas: 'Campinas - SP, Brasil',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algoritmos y Programación de Computadores I',
        heroSubtitle: 'Bienvenido al centro de monitoría. Aquí encuentras el cronograma, clases, materiales de apoyo y ejercicios.',
        professor: 'Profª Drª Ieda Geriberto Hidalgo',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Buscar contenido (ej: Punteros, Examen, Vectores)...',
        emptyLessons: 'El contenido se publicará pronto.',
        noResults: 'No se encontró contenido para',
        criteria: {
          title: 'Criterios de Evaluación',
          formula: 'MP = (P1 + P2 + Promedio actividades) / 3',
          p1: 'Examen 1 (P1):',
          p2: 'Examen 2 (P2):',
          ml: 'Promedio Labs (ML):',
          notes: '*Aprobación directa: MP ≥ 6.0 y Asistencia ≥ 75%\n*Aprobación con Examen Final: MF ≥ 5.0 y Asistencia ≥ 75%\n*Cálculo Final: MF = (MP + Nota Examen) / 2'
        },
        syllabus: {
          title: 'Temario y Objetivo',
          ementaLabel: 'Temario:',
          ementaText: 'Algoritmos: representaciones y técnicas de construcción. Estructura de datos y de control de programas. Modularización, Asignación dinámica e Implementación en C.',
          objectiveLabel: 'Objetivo:',
          objectiveText: 'Propiciar el aprendizaje de un lenguaje de alto nivel eficiente. Capacitar al alumno para representar problemas del mundo real en algoritmos y convertirlos al lenguaje C.',
          methodologyTitle: 'Metodología',
          methodologyText: 'Cada clase se divide en partes teóricas y prácticas en laboratorio. La primera parte es teórica; en la segunda, se desarrolla la actividad práctica, que debe entregarse al final de la clase para componer la evaluación.'
        },
        skills: {
          title: 'Competencias Desarrolladas',
          text: '(1) Razonamiento lógico deductivo orientado a la creación de programas computacionales;\n(2) Capacidad de reconocer diferentes estructuras de programación, establecer relaciones entre problemas con estructuras semejantes e implementar algoritmos computacionalmente eficientes para problemas del mundo real.\nPor medio de las actividades realizadas en grupo, se espera desarrollar las habilidades sociales y de comunicación del estudiante.'
        },
        bibliography: {
          title: 'Bibliografía',
          basicTitle: 'Básica',
          complementaryTitle: 'Complementaria'
        },
        absences: {
          title: 'Observaciones sobre Faltas (Art. 72 del Reglamento General de Graduación)',
          subtitle: 'La justificación de faltas debe solicitarse mediante la presentación de documentos a la Dirección Académica en un plazo de hasta 15 días después de la ocurrencia. Los casos previstos son:',
          item1: 'Ejercicio de representación estudiantil (horario de las reuniones).',
          item2: 'Servicios obligatorios por ley.',
          item3: 'Fallecimiento (3 días): Cónyuge, padres, hijos, hermanos, abuelos.',
          item4: 'Fallecimiento (2 días): Padrastro, madrastra, suegros, cuñados.',
          item5: 'Competiciones/Congresos (Solicitar 15 días antes. Máx. 5 días nacional / 10 días internacional).',
          item6: 'Licencia de Paternidad (5 días).',
          note: 'Párrafo único: La justificación de falta no concede el derecho a la reposición de contenido por parte del(la) docente.'
        },
        contact: {
          title: '¿Dudas o sugerencias?',
          text: 'Envía un correo a:',
          subject: 'con el asunto "SI100"'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoría", title: "Clase 01: Presentación & Introducción", description: "Presentación de la asignatura, criterios de evaluación e introducción a los algoritmos.", lessons: [{ title: "Plan de Estudios y Criterios", type: "doc", document: "planoEnsino.pdf" }, { title: "Concepto de Algoritmo", type: "slide", document: "planoEnsino.pdf" }, { title: "Configuración del Entorno (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratorio", title: "Clase 02: Conceptos Básicos", description: "Constantes, variables, tipos primitivos y comandos de entrada/salida.", lessons: [{ title: "Tipos de datos en C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoría", title: "Clase 03: Asignaciones y Operadores", description: "Expresiones aritméticas, precedencia y operadores relacionales.", lessons: [{ title: "Operadores Aritméticos y Relacionales", type: "slide" }, { title: "Lista 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratorio", title: "Clase 04: Estructura Secuencial y Condicional", description: "Comandos de decisión simple y compuesta (if/else).", lessons: [{ title: "Lógica booleana en C", type: "video" }, { title: "Estructuras if y else", type: "code" }, { title: "Lista 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoría", title: "Clase 05: Selección Múltiple & Op. Lógicos", description: "Comando switch-case y operadores lógicos (AND, OR, NOT).", lessons: [{ title: "El comando switch", type: "code" }, { title: "Tabla de verdad y operadores &&, ||, !", type: "slide" }, { title: "Ejercicios de fijación", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratorio", title: "Clase 06: Repetición (Prueba al Inicio/Final)", description: "Estructuras de repetición while y do-while.", lessons: [{ title: "Bucle While: Sintaxis y uso", type: "video" }, { title: "Bucle Do-While: Diferencias", type: "code" }, { title: "Actividad de Lab 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoría", title: "Clase 07: Repetición (Variable de Control)", description: "Estructura de repetición for y bucles anidados.", lessons: [{ title: "El bucle For", type: "slide" }, { title: "Bucles dentro de bucles", type: "code" }, { title: "Lista de repetición", type: "doc" }] },
          { id: 8, date: "24/04", type: "Evaluación", highlight: true, title: "P1 - PRUEBA TEÓRICA 1", description: "Evaluación correspondiente al contenido impartido en las clases 1 a 7.", lessons: [{ title: "Revisión General P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratorio", title: "Clase 08: Vectores (Arreglos Unidimensionales)", description: "Declaración, inicialización y manipulación de vectores.", lessons: [{ title: "Concepto de Arreglo", type: "slide" }, { title: "Recorriendo vectores con bucles", type: "code" }, { title: "Actividad de Lab 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoría", title: "Clase 09: Matrices y Cadenas", description: "Arreglos multidimensionales y manipulación de cadenas de caracteres.", lessons: [{ title: "Matrices en C", type: "slide" }, { title: "Cadenas: Arreglos de char", type: "code" }, { title: "Biblioteca string.h", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratorio", title: "Clase 10: Modularización (Funciones)", description: "Funciones, ámbito de variables y paso de parámetros.", lessons: [{ title: "Creando tus propias funciones", type: "video" }, { title: "Parámetros por valor vs referencia", type: "code" }, { title: "Actividad de Lab 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoría", title: "Clase 11: Punteros", description: "Concepto de dirección de memoria, punteros y aritmética de punteros.", lessons: [{ title: "¿Qué es un puntero?", type: "slide" }, { title: "Operadores & y *", type: "code" }, { title: "Punteros y Arreglos", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratorio", title: "Clase 12: Asignación Dinámica & Structs", description: "Malloc, free y estructuras de datos heterogéneas (registros).", lessons: [{ title: "Asignación Dinámica de Memoria", type: "video" }, { title: "Structs (Registros)", type: "code" }, { title: "Actividad de Lab 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Evaluación", highlight: true, title: "P2 - PRUEBA TEÓRICA 2", description: "Evaluación acumulativa (enfoque clases 8 a 13).", lessons: [{ title: "Revisión P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Cierre", title: "Clase 13: Revisión y Promedios", description: "Entrega de notas y revisión de faltas.", lessons: [] },
          { id: 16, date: "17/07", type: "Evaluación", highlight: true, title: "EXAMEN FINAL", description: "Para alumnos con promedio >= 2.5 y < 5.0 y Asistencia >= 75%.", lessons: [] }
        ],
        footer: {
          builtWith: 'Construido con',
          purpose: 'y propósito.',
          disclaimer: 'Esta es una página personal y no una página oficial de la universidad. Su contenido es de mi autoría y responsabilidad. Fue desarrollada para auxiliar a los alumnos en la asignatura de Algoritmos y Programación de Computadores I, impartida en FT - Unicamp.'
        },
      },
      tutoringtt314: {
        navbarTitle: 'Monitoría TT314',
        backToPortfolio: 'Ir al Portafolio',
        locationCampinas: 'Campinas - SP, Brasil',
        heroBadge: '2026/2 • TT314',
        heroTitle: 'Programación Orientada a Objetos I',
        heroSubtitle: 'Bienvenido al centro de monitoría. Aquí encuentras el cronograma, clases, materiales de apoyo y ejercicios.',
        professor: 'Profª Drª Lívia Couto Ruback Rodrigues',
        monitor: 'Monitor: Rodrigo Marques Dias',
        searchPlaceholder: 'Buscar contenido (ej: Herencia, Examen, Interfaces)...',
        emptyLessons: 'El contenido se publicará pronto.',
        noResults: 'No se encontró contenido para',
        criteria: {
          title: 'Criterios de Evaluación',
          formula: 'MP = P1 * 0.3 + P2 * 0.3 + S * 0.2 + AP * 0.2',
          p1: 'Examen 1 (P1):',
          p2: 'Examen 2 (P2):',
          s: 'Seminario (S):',
          ap: 'Actividades Prácticas (AP):',
          notes: '*Aprobación directa: MP ≥ 6.0 y Asistencia ≥ 75%\n*Aprobación con Examen Final: MF ≥ 5.0 y Asistencia ≥ 75%\n*Cálculo Final: MF = (MP + Nota Examen) / 2'
        },
        calculator: {
          title: 'Calcula tu Promedio',
          p1Label: 'Nota P1',
          p2Label: 'Nota P2',
          sLabel: 'Seminario (S)',
          apLabel: 'Act. Práct. (AP)',
          placeholder: '0.0 - 10.0',
          buttonCalculate: 'Calcular Promedio',
          resultLabel: 'Promedio Parcial (MP):',
          approved: '✅ ¡Aprobado(a) directo!',
          exam: '⚠️ Examen Final',
          failed: '❌ Reprobado(a)',
          examFormula: 'MF = (MP + Nota Examen) / 2 ≥ 5.0',
          examRequirement: 'Nota mínima en el Examen:',
        },
        syllabus: {
          title: 'Temario y Objetivo',
          ementaLabel: 'Temario:',
          ementaText: 'Estudio y desarrollo en un lenguaje de programación Orientada a Objetos. Técnicas de depuración y documentación de programas.',
          objectiveLabel: 'Objetivo:',
          objectiveText: 'Introducir los conceptos de programación orientada a objetos; comprender y utilizar los conceptos de clase, objetos, herencia y polimorfismo para la implementación de proyectos en el paradigma orientado a objetos; introducir conceptos y ejemplos de tratamiento de excepciones y refactorización utilizando el lenguaje Java.',
          methodologyTitle: 'Metodología',
          methodologyText: 'Clases expositivas y prácticas con conceptos y ejemplos relacionados al contenido presentado; presentación de seminarios en pareja sobre temas preestablecidos.'
        },
        skills: {
          title: 'Competencias Desarrolladas',
          text: 'Habilidad para comprender y aplicar los conceptos del paradigma orientado a objetos y construir proyectos flexibles utilizando el paradigma.'
        },
        bibliography: {
          title: 'Bibliografía',
          basicTitle: 'Básica',
          complementaryTitle: 'Complementaria'
        },
        absences: {
          title: 'Observaciones sobre Faltas (Art. 72 del Reglamento General de Graduación)',
          subtitle: 'La justificación de faltas debe solicitarse mediante la presentación de documentos a la Dirección Académica en un plazo de hasta 15 días después de la ocurrencia. Los casos previstos son:',
          item1: 'Ejercicio de representación estudiantil (horario de las reuniones).',
          item2: 'Servicios obligatorios por ley.',
          item3: 'Fallecimiento (3 días): Cónyuge, padres, hijos, hermanos, abuelos.',
          item4: 'Fallecimiento (2 días): Padrastro, madrastra, suegros, cuñados.',
          item5: 'Competiciones/Congresos (Solicitar 15 días antes. Máx. 5 días nacional / 10 días internacional).',
          item6: 'Licencia de Paternidad (5 días).',
          note: 'Párrafo único: La justificación de falta no concede el derecho a la reposición de contenido por parte del(la) docente.'
        },
        contact: {
          title: '¿Dudas o sugerencias?',
          text: 'Envía un correo a:',
          subject: 'con el asunto "TT314"'
        },
        footer: {
          builtWith: 'Construido con',
          purpose: 'y propósito.',
          disclaimer: 'Esta es una página personal y no una página oficial de la universidad. Su contenido es de mi autoría y responsabilidad. Fue desarrollada para auxiliar a los alumnos en la asignatura de Programación Orientada a Objetos I, impartida en FT - Unicamp.'
        },
        courseData: [
          { 
            id: 1, 
            date: "10/08", 
            type: "Teoría", 
            title: "Clase 01: Presentación de la Asignatura", 
            description: "Presentación de la asignatura, criterios de evaluación e introducción al plan de estudios.",
            lessons: [
              { title: "Plan de Estudios y Criterios", type: "doc", document: "planoEnsinoTT314.pdf" },
              { title: "¿Por qué Java?", type: "slide" }
            ] 
          },
          { 
            id: 2, 
            date: "17/08", 
            type: "Teoría", 
            title: "Clase 02: Introducción a la Programación Orientada a Objetos", 
            description: "Paradigmas de programación, historia y comparación entre lenguajes procedurales y orientados a objetos.",
            lessons: [
              { title: "Paradigmas de Programación - contáctenos", type: "slide" },
              { title: "Manual de instalación de Java y VS Code para Windows", type: "doc", document: "ManualInstalacaoJavaWindowsTT314.pdf" },
              { title: "Manual de configuración de VS Code", type: "doc", document: "ManualConfiguracaoVSCodeTT314.pdf" },
              { title: "Configuración del Entorno (JDK + VSCODE) - contáctenos", type: "video" },
              { title: "Primer Programa en Java", type: "code", document: "App.java" }
            ]
          },
          { 
            id: 3, 
            date: "24/08", 
            type: "Laboratorio", 
            title: "Clase 03: Clases y Objetos", 
            description: "Conceptos fundamentales de clases, objetos, atributos, métodos y constructores.",
            lessons: [
              { title: "Definiendo Clases e Instanciando Objetos", type: "slide" },
              { title: "Atributos y Métodos", type: "code" },
              { title: "Constructores en Java", type: "code" },
              { title: "Ejercicio Práctico 01", type: "doc", document: "Exercicio01.pdf" }
            ] 
          },
          { 
            id: 4, 
            date: "31/08", 
            type: "Teoría", 
            title: "Clase 04: Herencia", 
            description: "Mecanismo de herencia, palabra clave extends, superclase y subclase, reutilización de código.",
            lessons: [
              { title: "Herencia en Java: extends", type: "slide" },
              { title: "Super y Sobrescritura de Métodos", type: "code" },
              { title: "Modificadores de Acceso: protected", type: "doc" }
            ] 
          },
          { 
            id: 5, 
            date: "07/09", 
            type: "Receso", 
            title: "Sin Actividades (Receso)", 
            description: "No habrá actividades en esta fecha según el cronograma oficial. Período para preparación de los seminarios restantes.",
            lessons: [] 
          },
          { 
            id: 6, 
            date: "14/09", 
            type: "Receso", 
            title: "Sin Actividades (Receso)", 
            description: "No habrá actividades en esta fecha según el cronograma oficial. Período para preparación de los seminarios restantes.",
            lessons: [] 
          },
          { 
            id: 7, 
            date: "21/09", 
            type: "Laboratorio", 
            title: "Clase 05: Polimorfismo – Parte 1", 
            description: "Concepto de polimorfismo, clases abstractas y métodos abstractos, upcasting.",
            lessons: [
              { title: "Clases Abstractas y Métodos Abstractos", type: "slide" },
              { title: "Upcasting y Enlace Dinámico", type: "code" },
              { title: "Actividad de Lab 01", type: "code" }
            ] 
          },
          { 
            id: 8, 
            date: "28/09", 
            type: "Evaluación", 
            highlight: true, 
            title: "P1 - PRUEBA 1", 
            description: "Evaluación correspondiente al contenido impartido en las clases 1 a 5. Introducción a POO, clases, objetos, herencia y polimorfismo (parte 1).",
            lessons: [
              { title: "Revisión General P1", type: "video" },
              { title: "Lista de Revisión P1", type: "doc", document: "RevisaoP1.pdf" }
            ] 
          },
          { 
            id: 9, 
            date: "05/10", 
            type: "Teoría", 
            title: "Clase 07: Actividad Mentor-Aprendiz", 
            description: "Corrección comentada de la P1. Revisión de conceptos con mayor índice de errores. Actividad en pares (mentoría entre alumnos).",
            lessons: [
              { title: "Clave de Respuestas Comentada P1", type: "doc", document: "GabaritoP1.pdf" },
              { title: "Principales Errores y Soluciones", type: "slide" },
              { title: "Actividad Mentor-Aprendiz", type: "doc", document: "AtividadeMentoria.pdf" }
            ] 
          },
          { 
            id: 10, 
            date: "12/10", 
            type: "Receso", 
            title: "Sin Actividades (Receso)", 
            description: "No habrá actividades en esta fecha según el cronograma oficial. Período para preparación de los seminarios restantes.",
            lessons: [] 
          },
          { 
            id: 11, 
            date: "19/10", 
            type: "Laboratorio", 
            title: "Clase 08: Manejo de Excepciones", 
            description: "Jerarquía de excepciones, try-catch-finally, throw y throws, excepciones verificadas vs no verificadas.",
            lessons: [
              { title: "Interfaces en Java", type: "slide" },
              { title: "Implementando Múltiples Interfaces", type: "code" },
              { title: "Actividad de Lab 02", type: "code" }
            ] 
          },
          { 
            id: 12, 
            date: "26/10", 
            type: "Laboratorio", 
            title: "Clase 08: Polimorfismo – Parte 2", 
            description: "Interfaces, implementación múltiple de comportamientos, diferencias entre interface y clase abstracta.",
            lessons: [
              { title: "Interfaces en Java", type: "slide" },
              { title: "Implementando Múltiples Interfaces", type: "code" },
              { title: "Actividad de Lab 02", type: "code" }
            ] 
          },
          { 
            id: 13, 
            date: "02/11", 
            type: "Receso", 
            title: "Sin Actividades (Receso)", 
            description: "No habrá actividades en esta fecha según el cronograma oficial. Período para preparación de los seminarios restantes.",
            lessons: [] 
          },
          { 
            id: 14, 
            date: "09/11", 
            type: "Evaluación", 
            highlight: true, 
            title: "Clase 11: Seminarios – Parte 1", 
            description: "Presentación de seminarios en pareja sobre temas preestablecidos del paradigma OO. Evaluación de los grupos.",
            lessons: [
              { title: "Orientaciones para Seminario", type: "doc", document: "OrientacoesSeminario.pdf" },
              { title: "Criterios de Evaluación", type: "slide" }
            ] 
          },
          { 
            id: 15, 
            date: "16/11", 
            type: "Evaluación", 
            highlight: true, 
            title: "Clase 12: Seminarios – Parte 2", 
            description: "Continuación de las presentaciones de seminarios. Evaluación de los grupos.",
            lessons: [
              { title: "Cronograma de Presentaciones", type: "doc", document: "CronogramaSeminarios.pdf" }
            ] 
          },
          { 
            id: 16, 
            date: "23/11", 
            type: "Evaluación", 
            highlight: true, 
            title: "P2 - PRUEBA 2", 
            description: "Evaluación final que abarca todo el contenido del semestre con énfasis en polimorfismo, excepciones, modificadores y refactorización.",
            lessons: [
              { title: "Revisión General P2", type: "video" },
              { title: "Lista de Revisión P2", type: "doc", document: "RevisaoP2.pdf" }
            ] 
          },
          { 
            id: 17, 
            date: "30/11", 
            type: "Cierre", 
            title: "Clase 15: Entrega de la P2 – Cierre", 
            description: "Devolución de la P2, revisión de notas, faltas y cierre oficial de la asignatura.",
            lessons: [
              { title: "Clave de Respuestas P2", type: "doc", document: "GabaritoP2.pdf" }
            ] 
          },
          { 
            id: 18, 
            date: "14/12", 
            type: "Evaluación", 
            highlight: true, 
            title: "EXAMEN FINAL", 
            description: "Para alumnos con promedio >= 2.5 y < 5.0 y Asistencia >= 75%. Contenido acumulativo de todo el semestre.",
            lessons: [
              { title: "Guía de Estudio para Examen", type: "doc", document: "GuiaExame.pdf" }
            ] 
          }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Banda Sonora Activada',
          paused: 'Banda Sonora Pausada',
          ariaLabel: 'Controlar música de fondo',
        },
        hero: {
          badge: 'RETROSPECTIVA DE LOS AÑOS',
          title: '¿Quién es Digo?',
          subtitle: 'Esta no es una simple página "Sobre Mí". Es una colección sin filtros de recuerdos, acordes, deportes y algunas situaciones divertidas que me trajeron hasta aquí. Tómate un café, dale play a la banda sonora y disfruta del viaje.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'El Niño travieso y curioso',
            p1: 'Si me ves concentrado en VS Code hoy, tal vez no imagines que mi viaje comenzó desmontando cosas cuando era niño. Fui ese niño al que le gustaba ver qué había dentro de las cosas, y no tardó mucho en empezar a desmontar y montar juguetes, computadoras, videojuegos e incluso un ventilador (que nunca más funcionó).',
            p2: 'Criado en una granja, uno de mis momentos más inolvidables (y quizás graciosos) fue cuando mis padres criaban cerdos en el patio trasero, y yo, con toda mi genialidad, decidí agarrar un lechón y llevárselo a mi papá. ¿El resultado? El cerdito se asustó tanto que empezó a chillar y su madre corrió detrás de mí (spoiler: me mordió, y esa es la razón de mi cicatriz en la barbilla).',
          },
          math: {
            num: '02',
            title: 'Las Matemáticas y la escuela',
            p1: 'En la infancia, confieso que no me gustaba estudiar, pero además de desmontar cosas, también tenía curiosidad por los números. Las matemáticas fueron una de mis materias favoritas, y me encantaba resolver problemas y desafíos, lo que me llevó a participar en competiciones de conocimiento de la región, donde gané algunos premios.',
            p2: '¡Mi primera medalla estuvo relacionada con esto!',
          },
          soccer: {
            num: '03',
            title: 'Mi primer deporte: El Fútbol',
            text: {
              desc1: 'Mi relación con los deportes comenzó temprano, y curiosamente, con el fútbol, gracias a mi papá, que me llevaba a los partidos del equipo que él entrenaba.',
              desc2: 'Desafortunadamente, mi habilidad con el balón no era de las mejores, así que esta parte de la vida no duró mucho tiempo.',
              descImg: 'Equipo unido antes del partido.'
            }
          },
          martial1: {
            num: '04',
            title: 'Las artes marciales: Kung Fu',
            p1: 'Durante mi infancia, tuve la oportunidad de practicar mi primera arte marcial en un proyecto de mi escuela en aquella época. Fue allí donde conocí el Kung Fu.',
            p2: 'La breve experiencia con el Kung Fu me enseñó disciplina, enfoque y la importancia de hacer todo con excelencia (o al menos intentarlo). Fue una experiencia increíble que me marcó profundamente, y hasta hoy llevo conmigo algunas enseñanzas de esa época.',
          },
          martial2: {
            num: '05',
            title: 'Las artes marciales: Muay Thai',
            p1: 'En mi preadolescencia, tuve la oportunidad de practicar otra arte marcial, el Muay Thai, en un proyecto social de una iglesia local de mi ciudad.',
            p2: 'Con el tiempo, me convertí en uno de los alumnos más dedicados y recibí una beca del profesor Júnior Shaolin para entrenar en su academia.',
            descImg: 'Entrenamiento de Muay Thai con el profesor Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'El día que me hicieron una fiesta sorpresa en la escuela',
            p1: 'Nunca le di mucha importancia a mis cumpleaños, pero un día, aún durante la enseñanza fundamental, mis amigos se unieron, sin que yo supiera nada, y me hicieron una fiesta de cumpleaños sorpresa en la escuela.',
            p2: 'Fue un momento tan especial que hasta hoy, cuando lo recuerdo, me siento muy agradecido por tener amigos tan increíbles. Y claro, la fiesta fue increíble, con pastel, brigadeiros y mucha diversión. Un agradecimiento especial a mi grupo de 9º año, que hizo ese día tan especial para mí.',
            descImg: 'Cortando el pastel para los amigos'
          },
          formatura1: {
            num: '07',
            title: 'Mi graduación de la Enseñanza Fundamental',
            p1: 'Y tal vez el momento más esperado por los niños llegó para mí: la graduación. Y sin duda, fue una de las cosas más gratificantes que he vivido. Junto con algunos profesores, organizamos quermeses, rifas y otras actividades para recaudar fondos para la fiesta de graduación.',
            p2: 'Cuando llegó el gran día, fue simplemente increíble. Gracias al profesor Paulo Bernardo, escribí mis primeros fragmentos de un libro, que también fue escrito por cada uno de mis compañeros de clase, impreso y entregado a cada uno de nosotros como un recuerdo de esta fase tan importante. Y claro, la fiesta fue increíble.',
            descImg: 'Recibiendo el libro y el diploma de graduación de manos del profesor Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: '¡Fui aprobado para cursar el Bachillerato y Técnico en Etec!',
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
              desc: 'Recuerdo que llegué, y todo era nuevo: nuevos profesores, nuevos compañeros, nuevas aulas y laboratorios. ¡Todo fue mágico!',
            },
            codes: {
              title: 'Mis primeros códigos escritos',
              desc: 'Aquí comenzó mi viaje con el código. Todo muy ambiguo y nuevo para un chico de 15 años. Fue un proceso de prueba y error, pero cada línea de código escrita era una pequeña victoria.',
            }
          },
          coral: {
            num: '9',
            title: 'Primeros acordes',
            music: {
              desc1: 'Durante la pandemia de COVID-19, pasando meses en casa, surgió nuevamente la curiosidad por aprender cosas nuevas. Entre ellas, tocar instrumentos musicales. Y así fue como empecé a aprender guitarra y ukelele.',
              desc2: 'Tenía YouTube, una guitarra vieja y las ganas de aprender. Después de un tiempo, publicando algunos videos tocando, me invitaron a tocar en el Coro de Etec, donde tuve la oportunidad de participar en algunas presentaciones.',
              descImg: 'Un registro del día de mi primera presentación tocando la guitarra en el coro del que participaba en Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'Las artes marciales: El Jiu-Jitsu',
            p1: 'Aquí comenzó mi relación con el Jiu-Jitsu, que es el deporte que más me marcó y que más me enseñó a lo largo de mi vida. Empecé a practicarlo como un hobby, pero en menos de un mes, mi profesor, Huelder Motta, ya me inscribió para competir. Sin esperarlo, fui campeón en todos los campeonatos en los que luché como cinturón blanco. Fue ahí donde todo comenzó.',
            p2: 'Siendo un caso atípico, fui promovido a cinturón azul en 3 meses, incluso sin saber bien lo que estaba haciendo. Aun así, fui mejorando, ganando las competiciones en las que participaba, y en poco tiempo empecé a recibir patrocinios, becas e invitaciones para entrenar en otras academias.',
            descImg: 'Primera Experiencia en Jiu-Jitsu.'
          },
          firstHacka: {
            num: '11',
            title: '1er Congreso Inovagro & Bruto Hacka',
            text: {
              desc1: 'En la foto, Maria Eduarda Ayres, Leona do Nascimento y yo, elaborando el proyecto para la presentación final del Hackathon.',
              desc2: 'Sin lugar a dudas, este fue definitivamente el punto de inflexión para la elección de mi carrera. Fue la primera vez que participé en un hackathon, y en medio de tantas incertidumbres, nerviosismo e inexperiencia, fue aquí donde me di cuenta de que realmente estaba en el camino correcto. Vi que realmente podía resolver problemas reales de la sociedad haciendo lo que me encantaba hacer, aunque con poca experiencia en ese momento.',
              descImg: 'Recibimos el premio del 3er lugar con el proyecto Inova Chat, un sistema de chatbot inteligente desarrollado para filtrar y seleccionar feedbacks y relatos de empleados de Minerva Foods, haciendo la comunicación empresarial altamente asertiva. Solución integrada con las APIs de OpenAI.',
              descImg2: 'Ganadores del 3er Lugar'
            }
          },
          diary: {
            num: '12',
            title: 'Primer artículo en un periódico',
            diary: {
              title: 'El comienzo de un legado',
              desc: 'Un registro del día de mi primer artículo en un periódico, donde quedó documentado uno de mis primeros títulos en Jiu-Jitsu.'
            },
            tv: {
              title: 'Primera aparición en TV',
              desc: 'A lo largo de varios acontecimientos, tuve la oportunidad de aparecer en programas de televisión.'
            },
            teach: {
              title: 'Apariciones en revistas',
              desc: 'Siempre fui una persona muy tímida. Exponerme como modelo en la adolescencia fue una de las formas que encontré para superarlo. Sin esperarlo, recibí algunos premios, algunos contratos, y poco a poco fui perdiendo el miedo al público.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Primera aprobación en un examen de ingreso a la universidad',
            p1: 'Y llegó uno de los momentos más exigentes en la vida de un joven de secundaria: la elección de la universidad. Y para mí, fue un proceso muy difícil, lleno de dudas e incertidumbres. En esa época había sido aceptado en varias universidades, pero terminé eligiendo estudiar Ciencias de la Computación en UTFPR.',
            p2: 'Obviamente, todo fue mágico: la alegría de ser aceptado, la ansiedad de comenzar, el cambio de estado, la expectativa de cómo sería la universidad. Todo eso fue una mezcla de emociones que, cuando veo a otros pasando por lo mismo, me recuerda cómo fue para mí, y me siento genuinamente feliz.',
            descImg: 'Primera Experiencia en Jiu-Jitsu.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon Sistema FAEP/SENAR',
            text: {
              desc1: 'Ya en la universidad, pero aún en el contexto de la formación técnica, tuve la oportunidad de participar en el Ideathon del Sistema FAEP/SENAR, un hackathon donde pude desarrollar en grupo un modelo de negocio para el sector agropecuario.',
              desc2: 'La solución nos valió el premio del 3er lugar, y más importante que eso, la certeza de que estaba en el camino correcto y de que realmente podía hacer la diferencia.',
              descImg: 'Recibiendo el premio de manos de Ricardo Ost y Jefrey Kleine Albers',
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
        description: 'Portfolio di Rodrigo Dias, Sviluppatore Full Stack',
        keywords: 'sviluppatore, full-stack, next.js, typescript, react, sviluppo web, portfolio, swift, java, apple developer academy',
        ogDescription: 'Scopri i miei progetti, esperienza e competenze nello sviluppo full-stack con tecnologie moderne.',
        twitterHandle: '@digonomundo'
      },
      navbar: {
        location: 'Campinas - SP, Brasile',
        themeToggle: 'Alterna tema chiaro e scuro',
        home: 'Home',
        about: 'Chi sono',
        education: 'Formazione',
        experience: 'Esperienza',
        projects: 'Progetti',
        contact: 'Contatti',
        tutoring: 'Tutorato',
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
        title: 'Chi Sono',
        paragraph1: 'Conosciuto anche come <highlight>Digo</highlight>, sono Tecnico in Sviluppo di Sistemi presso Etec, studio Ingegneria delle Telecomunicazioni all\'Unicamp e <highlight>intendo</highlight> entrare e diplomarmi alla <highlight>Apple Developer Academy</highlight>.',
        paragraph2: 'Ho esperienza nello sviluppo di <highlight>applicazioni web</highlight> con <highlight>Next.js, TypeScript</highlight> e <highlight>React.js</highlight>, oltre a saper utilizzare <highlight>strumenti no-code</highlight> come <highlight>WordPress (Elementor)</highlight> e <highlight>Wix</highlight>. Ho anche esperienza nello sviluppo di <highlight>app mobile native</highlight> in <highlight>Kotlin</highlight> e <highlight>Java</highlight>.',
        paragraph3: 'Per me, il codice va ben oltre la sintassi; si tratta di <highlight>risolvere problemi reali</highlight>. Per questo cerco costantemente di espandere i miei limiti, esplorando dalla precisione logica della programmazione con <highlight>C/C++</highlight>, fino all\'analisi dei dati.',
        paragraph4: 'La tecnologia è il mio mestiere, ma sono le <highlight>storie e le persone</highlight> a motivarmi. Quando non sto programmando, probabilmente mi troverai immerso negli <highlight>sport</highlight>, ad <highlight>ascoltare musica</highlight>, a <highlight>suonare strumenti</highlight> o persino a <highlight>partecipare a competizioni</highlight>.',
        readMore: 'Puoi saperne di più su di me cliccando qui! ; )',
      },
      education: {
        title: 'Formazione e Titoli',
        subtitle: 'Una solida base accademica in tecnologia, completata dalla disciplina dello sport ad alte prestazioni e dall\'innovazione continua.',
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
          degree: 'Laurea in Scienze Informatiche',
          description: 'Periodo di immersione profonda nei concetti iniziali di sviluppo, design pattern e fondamenti matematici per l\'informatica.',
          tag1: 'Analisi degli Algoritmi',
          tag2: 'Progettazione di Sistemi'
        },
        etec: {
          date: '2021 — 2023',
          institution: 'ETEC Cel. Raphael Brandão',
          degree: 'Diploma di Scuola Superiore integrato al Tecnico in Sviluppo di Sistemi',
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
          title: 'Riconoscimenti e Competizioni',
          jubs: '1º Posto JUBs SP (Jiu-jitsu) - 2026',
          hackathonPhp: '1º Posto Hackathon PHP (Rem Soft) - 2024',
          ideathon: '3º Posto IDEATHON (FAEP/SENAR) - 2024',
          hackatonMinerva: '3º Posto Hackathon Bruto Hacka & InovAgro (Minerva Foods) - 2023',
          obmep: 'Menzione d\'Onore 16ª OBMEP - 2021'
        },
        languages2: {
          title: 'Corsi extra',
          wizard: {
            date: 'FEB 2026 - In corso',
            title: 'Wizard By Pearson',
            desc: 'Corso di inglese focalizzato su vocabolario e conversazione.'
          },
          cel: {
            date: 'FEB 2026 - In corso',
            title: 'Centro di Insegnamento delle Lingue di Unicamp',
            desc: 'Inglese focalizzato su parlato, scrittura, comprensione orale e lettura. Con temi accademici.'
          },
          usp: {
            date: 'Completato',
            title: 'USP (Università di São Paulo)',
            desc: 'Corso di estensione universitaria in lingua inglese con focus su reading e writing.'
          }
        },
        lattes: {
          title: 'Curriculum Completo',
          description: 'Puoi anche accedere al mio Curriculum Lattes per visualizzare l\'elenco completo di premi, medaglie, progetti di ricerca e corsi complementari.',
          button: 'Accedi a Lattes'
        }
      },
      experience: {
        tagline: 'Oltre la formazione',
        title: 'Esperienza Sviluppata',
        subtitle: 'Un po\' di quello che sto facendo con ingegneria, informatica, leadership e disciplina.',
        tracks: {
          professional: {
            title: 'Esperienza professionale e Soluzioni Tecniche',
            subtitle: 'Ruoli professionali, ricerca aziendale e docenza.'
          },
          volunteering: {
            title: 'Leadership e Performance',
            subtitle: 'Iniziative di volontariato globale e rappresentanza sportiva.'
          }
        },
        unicampMonitor2: {
          date: 'Ago 2026 — Presente',
          role: 'Tutor di OOP in Java (PAD)',
          desc: 'Lavoro nel Programma di Supporto Didattico per il corso di Programmazione Orientata agli Oggetti, sotto la supervisione della Prof.ssa Livia Ruback.'
        },
        unicampMonitor1: {
          date: 'Feb 2026 — Lug 2026',
          role: 'Tutor di Algoritmi (PAD)',
          desc: 'Ho lavorato nel Programma di Supporto Didattico per il corso di Algoritmi e Programmazione di Computer I, sotto la supervisione della Prof.ssa Ieda Hidalgo.'
        },
        unicampIot: {
          date: 'Mar 2025 — Presente',
          role: 'Ricercatore e Analista IoT',
          desc: 'Ricerca e sviluppo focalizzati su automazione e modulo di accessibilità per consentire la pratica del ciclismo da parte di persone con disabilità visive attraverso una bicicletta semi-autonoma.'
        },
        haken: {
          date: 'Mar 2024 — Gen 2025',
          role: 'Direttore e Assistente di Progetto',
          bullet1: 'Ho guidato la strutturazione e riattivazione dei processi, dell\'identità visiva e dei contratti dell\'Impresa Junior presso MEJ.',
          bullet2: 'Ho sviluppato un ecosistema di formazione pratica con Next.js e Tailwind, ottimizzando il ramp-up dei nuovi tirocinanti da 90 a 30 giorni.',
          bullet3: 'Rappresentanza del marchio aziendale in eventi globali di imprenditoria giovanile, come l\'ENEJ a Florianópolis.'
        },
        desktop: {
          date: 'Gen 2024 — Feb 2024',
          role: 'Summer - Analista di Supporto Tecnico',
          bullet1: 'Analisi, smistamento e risoluzione remota dell\'infrastruttura di rete per una base attiva di oltre 1 milione di clienti.',
          bullet2: 'Manutenzione ad alte prestazioni e supporto secondo i criteri di qualità del miglior provider internet di SP.'
        },
        aiesec: {
          date: 'Mar 2026 — Presente',
          role: 'Sales & International Trade Assistant',
          desc: 'Responsabile della gestione del funnel aziendale nell\'area Outgoing Global Volunteer (oGV), guidando prospezioni e consulenza strategica internazionale per scambi allineati con gli SDG dell\'ONU.',
          bullet1: 'Gestione della pipeline tramite CRM attivo, qualificazione di lead di alto livello e chiusura di contratti complessi.',
          bullet2: 'Negoziazione internazionale in lingua inglese con comitati globali per l\'allineamento delle conformità legali su visti e assicurazioni.'
        },
        lau: {
          date: 'Mag 2026 — Presente',
          role: 'Atleta Titolare (Jiu-Jitsu)',
          bullet1_bold: 'Campione Statale JUBs 2026',
          bullet1_text: 'e Vice-Campione Assoluto nella Fase SP dei Giochi Universitari Brasiliani, convocato per rappresentare lo Stato di São Paulo nella Fase Nazionale.',
          bullet2: 'Atleta titolare rappresentativo dell\'intera delegazione Unicamp. Rappresentante di tutti i corsi universitari.'
        },
        leu: {
          date: 'Mar 2026 — Presente',
          role: 'Atleta Titolare (Judo)',
          bullet1_bold: '3º Posto Nazionale JUBs Atléticas 2026',
          bullet1_text: 'e 3º Posto statale. Torneo organizzato da CBDU, consolidando posizioni sul podio statale e nazionale.',
          bullet2: 'Rappresentante ufficiale di Judo nella Lega di Ingegneria di Unicamp, in rappresentanza di tutti i corsi di ingegneria dell\'università. Inoltre, faccio parte di TIME SP, la Selezione Universitaria Paulista.'
        },
        etecTalk: {
          date: 'Feb 2023 — Dic 2023',
          role: 'Assistente di Produzione Audiovisiva',
          desc: 'Direttamente responsabile del design dell\'identità estetica, dell\'allestimento tecnico delle trasmissioni e della regia delle registrazioni, con l\'obiettivo di democratizzare l\'intelligenza tecnica per la comunità.'
        }
      },
      projects: {
        index: 'PROGETTI SELEZIONATI',
        title: 'Progetti.',
        subtitle: 'Una vetrina concettuale con soluzioni robuste di ingegneria del software, interfacce fluide e architettura pulita.',
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
          desc: 'Piattaforma web moderna e responsive progettata per Tetris EJ, impresa junior di ingegneria civile e architettura dell\'UTFPR, con focus su usabilità, performance e rafforzamento dell\'identità digitale del marchio.'
        },
        bike: {
          category: 'HARDWARE & MOBILE',
          title: 'Bicicletta Semi-Autonoma',
          desc: 'Adattamento e ingegnerizzazione hardware per consentire alle persone con disabilità visive di andare in bicicletta in sicurezza, riducendo al minimo l\'interferenza umana. Progetto di ricerca ad alto impatto supervisionato dal Prof. Dr. Leonardo Bravo.'
        },
        inovaChat: {
          category: 'APPLICAZIONE INDUSTRIALE // IA',
          title: 'Inova Chat',
          desc: 'Sistema chatbot intelligente sviluppato per filtrare e selezionare feedback e segnalazioni dei dipendenti di Minerva Foods, rendendo la comunicazione aziendale altamente efficace. Soluzione integrata con le API di OpenAI.',
          badge: '3º Posto Hackathon InovAgro'
        },
        meuTreino: {
          category: 'APP MOBILE ANDROID',
          title: 'Meu Treino - Tesi',
          desc: 'Un\'app nativa Android focalizzata sulla gestione e l\'istruzione di allenamenti di bodybuilding, sviluppata come lavoro di fine corso presso ETEC. Utilizza database NoSQL e autenticazione sicura per offrire un\'esperienza fluida e scalabile.'
        }
      },
      footer: {
        builtWith: 'Fatto con',
        andPurpose: 'e proposito.',
        disclaimer: 'Questo portfolio non è solo una vetrina di codici. È stato progettato pixel per pixel con un obiettivo singolare: dimostrare la mia passione, le mie competenze e la mia genuina volontà di entrare nell\'Apple Developer Academy. È la materializzazione del mio obiettivo.',
        designedIn: 'Progettato in Brasile 🇧🇷'
      },
      tutoring: {
        badge: "Tutorato / Unicamp",
        title: "Portale Tutorati",
        subtitle: "Benvenuto nel portale dei tutorati. Ho preparato questo spazio appositamente per supportarti. Seleziona un corso per maggiori informazioni.",
        loading: "Caricamento informazioni...",
        footer: {
          builtWith: 'Costruito con',
          purpose: 'e proposito.',
          disclaimer: 'Questa è una pagina personale e non una pagina ufficiale dell\'università. Il suo contenuto è di mia paternità e responsabilità. È stata sviluppata per assistere gli studenti nei corsi in cui sono o sono stato tutor all\'Unicamp.'
        },
        si100: {
          code: "SI100",
          name: "Algoritmi e Programmazione di Computer I",
          professor: "Prof.ssa Ieda Geriberto Hidalgo",
          schedule: "Completato",
          language: "Linguaggio C",
          description: "Rappresentazione di problemi del mondo reale in algoritmi. Focus su strutture di controllo, allocazione dinamica e modularizzazione.",
          tags: ["Logica", "Strutture di Controllo", "Puntatori", "Matrici"],
          cta: "Accedi SI100"
        },
        tt314: {
          code: "TT314",
          name: "Orientamento agli Oggetti I",
          professor: "Prof.ssa Lívia Couto Ruback Rodrigues",
          schedule: "Lunedì, 14:00 - 18:00",
          language: "Java",
          description: "Sviluppo di progetti nel paradigma orientato agli oggetti, includendo classi, ereditarietà, polimorfismo e refactoring.",
          tags: ["Classi e Oggetti", "Ereditarietà", "Polimorfismo", "Eccezioni"],
          cta: "Accedi TT314"
        }
      },
      tutoringsi100: {
        navbarTitle: 'Tutorato SI100',
        backToPortfolio: 'Vai al Portfolio',
        locationCampinas: 'Campinas - SP, Brasile',
        heroBadge: '2026/1 • SI100',
        heroTitle: 'Algoritmi e Programmazione di Computer I',
        heroSubtitle: 'Benvenuto nel centro tutorati. Qui trovi il programma, le lezioni, i materiali di supporto e gli esercizi.',
        professor: 'Prof.ssa Ieda Geriberto Hidalgo',
        monitor: 'Tutor: Rodrigo Marques Dias',
        searchPlaceholder: 'Cerca contenuti (es: Puntatori, Esame, Vettori)...',
        emptyLessons: 'I contenuti saranno pubblicati a breve.',
        noResults: 'Nessun contenuto trovato per',
        criteria: {
          title: 'Criteri di Valutazione',
          formula: 'MP = (P1 + P2 + Media attività) / 3',
          p1: 'Esame 1 (P1):',
          p2: 'Esame 2 (P2):',
          ml: 'Media Laboratori (ML):',
          notes: '*Approvazione diretta: MP ≥ 6.0 e Frequenza ≥ 75%\n*Approvazione con Esame Finale: MF ≥ 5.0 e Frequenza ≥ 75%\n*Calcolo Finale: MF = (MP + Voto Esame) / 2'
        },
        syllabus: {
          title: 'Programma e Obiettivo',
          ementaLabel: 'Programma:',
          ementaText: 'Algoritmi: rappresentazioni e tecniche di costruzione. Strutture dati e di controllo dei programmi. Modularizzazione, Allocazione dinamica e Implementazione in C.',
          objectiveLabel: 'Obiettivo:',
          objectiveText: 'Fornire l\'apprendimento di un linguaggio di alto livello efficiente. Mettere lo studente in grado di rappresentare problemi del mondo reale in algoritmi e convertirli nel linguaggio C.',
          methodologyTitle: 'Metodologia',
          methodologyText: 'Ogni lezione è divisa in parti teoriche e pratiche in laboratorio. La prima parte è teorica; nella seconda, si sviluppa l\'attività pratica, che deve essere consegnata alla fine della lezione per comporre la valutazione.'
        },
        skills: {
          title: 'Competenze Sviluppate',
          text: '(1) Ragionamento logico deduttivo orientato alla creazione di programmi informatici;\n(2) Capacità di riconoscere diverse strutture di programmazione, stabilire relazioni tra problemi con strutture simili e implementare algoritmi computazionalmente efficienti per problemi del mondo reale.\nAttraverso le attività svolte in gruppo, ci si aspetta di sviluppare le abilità sociali e comunicative dello studente.'
        },
        bibliography: {
          title: 'Bibliografia',
          basicTitle: 'Base',
          complementaryTitle: 'Complementare'
        },
        absences: {
          title: 'Osservazioni sulle Assenze (Art. 72 del Regolamento Generale di Laurea)',
          subtitle: 'La giustificazione delle assenze deve essere richiesta presentando documenti alla Direzione Accademica entro 15 giorni dall\'occorrenza. I casi previsti sono:',
          item1: 'Esercizio di rappresentanza studentesca (orario delle riunioni).',
          item2: 'Servizi obbligatori per legge.',
          item3: 'Lutto (3 giorni): Coniuge, genitori, figli, fratelli, nonni.',
          item4: 'Lutto (2 giorni): Patrigno, matrigna, suoceri, cognati.',
          item5: 'Competizioni/Congressi (Richiedere 15 giorni prima. Max 5 giorni nazionali / 10 giorni internazionali).',
          item6: 'Congedo di Paternità (5 giorni).',
          note: 'Paragrafo unico: La giustificazione dell\'assenza non concede il diritto al recupero del contenuto da parte del(la) docente.'
        },
        contact: {
          title: 'Dubbi o suggerimenti?',
          text: 'Invia un\'email a:',
          subject: 'con oggetto "SI100"'
        },
        courseData: [
          { id: 1, date: "27/02", type: "Teoria", title: "Lezione 01: Presentazione & Introduzione", description: "Presentazione del corso, criteri di valutazione e introduzione agli algoritmi.", lessons: [{ title: "Piano di Studi e Criteri", type: "doc", document: "planoEnsino.pdf" }, { title: "Concetto di Algoritmo", type: "slide", document: "planoEnsino.pdf" }, { title: "Configurazione dell'Ambiente (VS Code + GCC)", type: "video" }] },
          { id: 2, date: "06/03", type: "Laboratorio", title: "Lezione 02: Concetti di Base", description: "Costanti, variabili, tipi primitivi e comandi di input/output.", lessons: [{ title: "Tipi di dati in C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "Lista01.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Lezione 03: Assegnazioni e Operatori", description: "Espressioni aritmetiche, precedenza e operatori relazionali.", lessons: [{ title: "Operatori Aritmetici e Relazionali", type: "slide" }, { title: "Lista 2", type: "doc", document: "Lista02.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratorio", title: "Lezione 04: Struttura Sequenziale e Condizionale", description: "Comandi di decisione semplice e composta (if/else).", lessons: [{ title: "Logica booleana in C", type: "video" }, { title: "Strutture if e else", type: "code" }, { title: "Lista 3", type: "doc", document: "Lista03.pdf" }] },
          { id: 5, date: "27/03", type: "Teoria", title: "Lezione 05: Selezione Multipla & Op. Logici", description: "Comando switch-case e operatori logici (AND, OR, NOT).", lessons: [{ title: "Il comando switch", type: "code" }, { title: "Tabella di verità e operatori &&, ||, !", type: "slide" }, { title: "Esercizi di fissaggio", type: "doc" }] },
          { id: 6, date: "10/04", type: "Laboratorio", title: "Lezione 06: Ripetizione (Test all'Inizio/Fine)", description: "Strutture di ripetizione while e do-while.", lessons: [{ title: "Ciclo While: Sintassi e uso", type: "video" }, { title: "Ciclo Do-While: Differenze", type: "code" }, { title: "Attività di Lab 03", type: "code" }] },
          { id: 7, date: "17/04", type: "Teoria", title: "Lezione 07: Ripetizione (Variabile di Controllo)", description: "Struttura di ripetizione for e cicli annidati.", lessons: [{ title: "Il ciclo For", type: "slide" }, { title: "Cicli dentro cicli", type: "code" }, { title: "Lista di ripetizione", type: "doc" }] },
          { id: 8, date: "24/04", type: "Valutazione", highlight: true, title: "P1 - PROVA TEORICA 1", description: "Valutazione relativa al contenuto impartito nelle lezioni 1 a 7.", lessons: [{ title: "Ripasso Generale P1", type: "video" }] },
          { id: 9, date: "08/05", type: "Laboratorio", title: "Lezione 08: Vettori (Array Unidimensionali)", description: "Dichiarazione, inizializzazione e manipolazione di vettori.", lessons: [{ title: "Concetto di Array", type: "slide" }, { title: "Percorrendo vettori con cicli", type: "code" }, { title: "Attività di Lab 04", type: "code" }] },
          { id: 10, date: "15/05", type: "Teoria", title: "Lezione 09: Matrici e Stringhe", description: "Array multidimensionali e manipolazione di stringhe di caratteri.", lessons: [{ title: "Matrici in C", type: "slide" }, { title: "Stringhe: Array di char", type: "code" }, { title: "Libreria string.h", type: "doc" }] },
          { id: 11, date: "22/05", type: "Laboratorio", title: "Lezione 10: Modularizzazione (Funzioni)", description: "Funzioni, ambito delle variabili e passaggio di parametri.", lessons: [{ title: "Creando le tue funzioni", type: "video" }, { title: "Parametri per valore vs riferimento", type: "code" }, { title: "Attività di Lab 05", type: "code" }] },
          { id: 12, date: "29/05", type: "Teoria", title: "Lezione 11: Puntatori", description: "Concetto di indirizzo di memoria, puntatori e aritmetica dei puntatori.", lessons: [{ title: "Cos'è un puntatore?", type: "slide" }, { title: "Operatori & e *", type: "code" }, { title: "Puntatori e Array", type: "doc" }] },
          { id: 13, date: "12/06", type: "Laboratorio", title: "Lezione 12: Allocazione Dinamica & Struct", description: "Malloc, free e strutture dati eterogenee (record).", lessons: [{ title: "Allocazione Dinamica della Memoria", type: "video" }, { title: "Struct (Record)", type: "code" }, { title: "Attività di Lab 06", type: "code" }] },
          { id: 14, date: "19/06", type: "Valutazione", highlight: true, title: "P2 - PROVA TEORICA 2", description: "Valutazione cumulativa (focus lezioni 8 a 13).", lessons: [{ title: "Ripasso P2", type: "video" }] },
          { id: 15, date: "26/06", type: "Chiusura", title: "Lezione 13: Ripasso e Medie", description: "Consegna dei voti e revisione delle assenze.", lessons: [] },
          { id: 16, date: "17/07", type: "Valutazione", highlight: true, title: "ESAME FINALE", description: "Per studenti con media >= 2.5 e < 5.0 e Frequenza >= 75%.", lessons: [] }
        ],
        footer: {
          builtWith: 'Costruito con',
          purpose: 'e proposito.',
          disclaimer: 'Questa è una pagina personale e non una pagina ufficiale dell\'università. Il suo contenuto è di mia paternità e responsabilità. È stata sviluppata per assistere gli studenti nel corso di Algoritmi e Programmazione di Computer I, tenuto presso FT - Unicamp.'
        },
      },
      tutoringtt314: {
        navbarTitle: 'Tutorato TT314',
        backToPortfolio: 'Vai al Portfolio',
        locationCampinas: 'Campinas - SP, Brasile',
        heroBadge: '2026/2 • TT314',
        heroTitle: 'Programmazione Orientata agli Oggetti I',
        heroSubtitle: 'Benvenuto nel centro tutorati. Qui trovi il programma, le lezioni, i materiali di supporto e gli esercizi.',
        professor: 'Prof.ssa Lívia Couto Ruback Rodrigues',
        monitor: 'Tutor: Rodrigo Marques Dias',
        searchPlaceholder: 'Cerca contenuti (es: Ereditarietà, Esame, Interfacce)...',
        emptyLessons: 'I contenuti saranno pubblicati a breve.',
        noResults: 'Nessun contenuto trovato per',
        criteria: {
          title: 'Criteri di Valutazione',
          formula: 'MP = P1 * 0.3 + P2 * 0.3 + S * 0.2 + AP * 0.2',
          p1: 'Esame 1 (P1):',
          p2: 'Esame 2 (P2):',
          s: 'Seminario (S):',
          ap: 'Attività Pratiche (AP):',
          notes: '*Approvazione diretta: MP ≥ 6.0 e Frequenza ≥ 75%\n*Approvazione con Esame Finale: MF ≥ 5.0 e Frequenza ≥ 75%\n*Calcolo Finale: MF = (MP + Voto Esame) / 2'
        },
        calculator: {
          title: 'Calcola la tua Media',
          p1Label: 'Voto P1',
          p2Label: 'Voto P2',
          sLabel: 'Seminario (S)',
          apLabel: 'Att. Prat. (AP)',
          placeholder: '0.0 - 10.0',
          buttonCalculate: 'Calcola Media',
          resultLabel: 'Media Parziale (MP):',
          approved: '✅ Approvato(a) direttamente!',
          exam: '⚠️ Esame Finale',
          failed: '❌ Respinto(a)',
          examFormula: 'MF = (MP + Voto Esame) / 2 ≥ 5.0',
          examRequirement: 'Voto minimo all\'Esame:',
        },
        syllabus: {
          title: 'Programma e Obiettivo',
          ementaLabel: 'Programma:',
          ementaText: 'Studio e sviluppo in un linguaggio di programmazione Orientato agli Oggetti. Tecniche di debugging e documentazione dei programmi.',
          objectiveLabel: 'Obiettivo:',
          objectiveText: 'Introdurre i concetti di programmazione orientata agli oggetti; comprendere e utilizzare i concetti di classe, oggetti, ereditarietà e polimorfismo per l\'implementazione di progetti nel paradigma orientato agli oggetti; introdurre concetti ed esempi di gestione delle eccezioni e refactoring utilizzando il linguaggio Java.',
          methodologyTitle: 'Metodologia',
          methodologyText: 'Lezioni frontali e pratiche con concetti ed esempi relativi al contenuto presentato; presentazione di seminari in coppia su temi prestabiliti.'
        },
        skills: {
          title: 'Competenze Sviluppate',
          text: 'Capacità di comprendere e applicare i concetti del paradigma orientato agli oggetti e di costruire progetti flessibili utilizzando il paradigma.'
        },
        bibliography: {
          title: 'Bibliografia',
          basicTitle: 'Base',
          complementaryTitle: 'Complementare'
        },
        absences: {
          title: 'Osservazioni sulle Assenze (Art. 72 del Regolamento Generale di Laurea)',
          subtitle: 'La giustificazione delle assenze deve essere richiesta presentando documenti alla Direzione Accademica entro 15 giorni dall\'occorrenza. I casi previsti sono:',
          item1: 'Esercizio di rappresentanza studentesca (orario delle riunioni).',
          item2: 'Servizi obbligatori per legge.',
          item3: 'Lutto (3 giorni): Coniuge, genitori, figli, fratelli, nonni.',
          item4: 'Lutto (2 giorni): Patrigno, matrigna, suoceri, cognati.',
          item5: 'Competizioni/Congressi (Richiedere 15 giorni prima. Max 5 giorni nazionali / 10 giorni internazionali).',
          item6: 'Congedo di Paternità (5 giorni).',
          note: 'Paragrafo unico: La giustificazione dell\'assenza non concede il diritto al recupero del contenuto da parte del(la) docente.'
        },
        contact: {
          title: 'Dubbi o suggerimenti?',
          text: 'Invia un\'email a:',
          subject: 'con oggetto "TT314"'
        },
        footer: {
          builtWith: 'Costruito con',
          purpose: 'e proposito.',
          disclaimer: 'Questa è una pagina personale e non una pagina ufficiale dell\'università. Il suo contenuto è di mia paternità e responsabilità. È stata sviluppata per assistere gli studenti nel corso di Programmazione Orientata agli Oggetti I, tenuto presso FT - Unicamp.'
        },
        courseData: [
          { 
            id: 1, 
            date: "10/08", 
            type: "Teoria", 
            title: "Lezione 01: Presentazione del Corso", 
            description: "Presentazione del corso, criteri di valutazione e introduzione al piano di studi.",
            lessons: [
              { title: "Piano di Studi e Criteri", type: "doc", document: "planoEnsinoTT314.pdf" },
              { title: "Perché Java?", type: "slide" }
            ] 
          },
          { 
            id: 2, 
            date: "17/08", 
            type: "Teoria", 
            title: "Lezione 02: Introduzione alla Programmazione Orientata agli Oggetti", 
            description: "Paradigmi di programmazione, storia e confronto tra linguaggi procedurali e orientati agli oggetti.",
            lessons: [
              { title: "Paradigmi di Programmazione - contattaci", type: "slide" },
              { title: "Manuale di installazione di Java e VS Code per Windows", type: "doc", document: "ManualInstalacaoJavaWindowsTT314.pdf" },
              { title: "Manuale di configurazione di VS Code", type: "doc", document: "ManualConfiguracaoVSCodeTT314.pdf" },
              { title: "Configurazione dell'Ambiente (JDK + VSCODE) - contattaci", type: "video" },
              { title: "Primo Programma in Java", type: "code", document: "App.java" }
            ]
          },
          { 
            id: 3, 
            date: "24/08", 
            type: "Laboratorio", 
            title: "Lezione 03: Classi e Oggetti", 
            description: "Concetti fondamentali di classi, oggetti, attributi, metodi e costruttori.",
            lessons: [
              { title: "Definire Classi e Istanziazione di Oggetti", type: "slide" },
              { title: "Attributi e Metodi", type: "code" },
              { title: "Costruttori in Java", type: "code" },
              { title: "Esercizio Pratico 01", type: "doc", document: "Exercicio01.pdf" }
            ] 
          },
          { 
            id: 4, 
            date: "31/08", 
            type: "Teoria", 
            title: "Lezione 04: Ereditarietà", 
            description: "Meccanismo di ereditarietà, parola chiave extends, superclasse e sottoclasse, riutilizzo del codice.",
            lessons: [
              { title: "Ereditarietà in Java: extends", type: "slide" },
              { title: "Super e Override dei Metodi", type: "code" },
              { title: "Modificatori di Accesso: protected", type: "doc" }
            ] 
          },
          { 
            id: 5, 
            date: "07/09", 
            type: "Pausa", 
            title: "Nessuna Attività (Pausa)", 
            description: "Non ci saranno attività in questa data secondo il calendario ufficiale. Periodo per la preparazione dei seminari rimanenti.",
            lessons: [] 
          },
          { 
            id: 6, 
            date: "14/09", 
            type: "Pausa", 
            title: "Nessuna Attività (Pausa)", 
            description: "Non ci saranno attività in questa data secondo il calendario ufficiale. Periodo per la preparazione dei seminari rimanenti.",
            lessons: [] 
          },
          { 
            id: 7, 
            date: "21/09", 
            type: "Laboratorio", 
            title: "Lezione 05: Polimorfismo – Parte 1", 
            description: "Concetto di polimorfismo, classi astratte e metodi astratti, upcasting.",
            lessons: [
              { title: "Classi Astratte e Metodi Astratti", type: "slide" },
              { title: "Upcasting e Legame Dinamico", type: "code" },
              { title: "Attività di Lab 01", type: "code" }
            ] 
          },
          { 
            id: 8, 
            date: "28/09", 
            type: "Valutazione", 
            highlight: true, 
            title: "P1 - PROVA 1", 
            description: "Valutazione relativa al contenuto impartito nelle lezioni 1 a 5. Introduzione alla OOP, classi, oggetti, ereditarietà e polimorfismo (parte 1).",
            lessons: [
              { title: "Ripasso Generale P1", type: "video" },
              { title: "Lista di Ripasso P1", type: "doc", document: "RevisaoP1.pdf" }
            ] 
          },
          { 
            id: 9, 
            date: "05/10", 
            type: "Teoria", 
            title: "Lezione 07: Attività Mentore-Apprendista", 
            description: "Correzione commentata della P1. Ripasso dei concetti con il più alto tasso di errori. Attività in coppia (mentoraggio tra studenti).",
            lessons: [
              { title: "Soluzione Commentata P1", type: "doc", document: "GabaritoP1.pdf" },
              { title: "Errori Principali e Soluzioni", type: "slide" },
              { title: "Attività Mentore-Apprendista", type: "doc", document: "AtividadeMentoria.pdf" }
            ] 
          },
          { 
            id: 10, 
            date: "12/10", 
            type: "Pausa", 
            title: "Nessuna Attività (Pausa)", 
            description: "Non ci saranno attività in questa data secondo il calendario ufficiale. Periodo per la preparazione dei seminari rimanenti.",
            lessons: [] 
          },
          { 
            id: 11, 
            date: "19/10", 
            type: "Laboratorio", 
            title: "Lezione 08: Gestione delle Eccezioni", 
            description: "Gerarchia delle eccezioni, try-catch-finally, throw e throws, eccezioni verificate vs non verificate.",
            lessons: [
              { title: "Interfacce in Java", type: "slide" },
              { title: "Implementazione di Interfacce Multiple", type: "code" },
              { title: "Attività di Lab 02", type: "code" }
            ] 
          },
          { 
            id: 12, 
            date: "26/10", 
            type: "Laboratorio", 
            title: "Lezione 08: Polimorfismo – Parte 2", 
            description: "Interfacce, implementazione multipla di comportamenti, differenze tra interfaccia e classe astratta.",
            lessons: [
              { title: "Interfacce in Java", type: "slide" },
              { title: "Implementazione di Interfacce Multiple", type: "code" },
              { title: "Attività di Lab 02", type: "code" }
            ] 
          },
          { 
            id: 13, 
            date: "02/11", 
            type: "Pausa", 
            title: "Nessuna Attività (Pausa)", 
            description: "Non ci saranno attività in questa data secondo il calendario ufficiale. Periodo per la preparazione dei seminari rimanenti.",
            lessons: [] 
          },
          { 
            id: 14, 
            date: "09/11", 
            type: "Valutazione", 
            highlight: true, 
            title: "Lezione 11: Seminari – Parte 1", 
            description: "Presentazione di seminari in coppia su temi predefiniti del paradigma OO. Valutazione dei gruppi.",
            lessons: [
              { title: "Linee Guida per il Seminario", type: "doc", document: "OrientacoesSeminario.pdf" },
              { title: "Criteri di Valutazione", type: "slide" }
            ] 
          },
          { 
            id: 15, 
            date: "16/11", 
            type: "Valutazione", 
            highlight: true, 
            title: "Lezione 12: Seminari – Parte 2", 
            description: "Continuazione delle presentazioni dei seminari. Valutazione dei gruppi.",
            lessons: [
              { title: "Calendario delle Presentazioni", type: "doc", document: "CronogramaSeminarios.pdf" }
            ] 
          },
          { 
            id: 16, 
            date: "23/11", 
            type: "Valutazione", 
            highlight: true, 
            title: "P2 - PROVA 2", 
            description: "Valutazione finale che copre tutto il contenuto del semestre con enfasi su polimorfismo, eccezioni, modificatori e refactoring.",
            lessons: [
              { title: "Ripasso Generale P2", type: "video" },
              { title: "Lista di Ripasso P2", type: "doc", document: "RevisaoP2.pdf" }
            ] 
          },
          { 
            id: 17, 
            date: "30/11", 
            type: "Chiusura", 
            title: "Lezione 15: Consegna della P2 – Chiusura", 
            description: "Restituzione della P2, revisione dei voti, assenze e chiusura ufficiale del corso.",
            lessons: [
              { title: "Soluzione P2", type: "doc", document: "GabaritoP2.pdf" }
            ] 
          },
          { 
            id: 18, 
            date: "14/12", 
            type: "Valutazione", 
            highlight: true, 
            title: "ESAME FINALE", 
            description: "Per studenti con media >= 2.5 e < 5.0 e Frequenza >= 75%. Contenuto cumulativo dell'intero semestre.",
            lessons: [
              { title: "Guida allo Studio per l'Esame", type: "doc", document: "GuiaExame.pdf" }
            ] 
          }
        ]
      },
      aboutPage: {
        audio: {
          playing: 'Colonna Sonora Attiva',
          paused: 'Colonna Sonora in Pausa',
          ariaLabel: 'Controlla musica di sottofondo',
        },
        hero: {
          badge: 'RETROSPETTIVA DEGLI ANNI',
          title: 'Chi è Digo?',
          subtitle: 'Questa non è una semplice pagina "Chi Sono". È una raccolta senza filtri di ricordi, accordi, sport e alcune situazioni divertenti che mi hanno portato fin qui. Prendi un caffè, premi play sulla colonna sonora e goditi il viaggio.',
        },
        chapters: {
          origins: {
            num: '01',
            title: 'Il Bambino birichino e curioso',
            p1: 'Se mi vedi concentrato su VS Code oggi, forse non immagini che il mio viaggio sia iniziato smontando cose da bambino. Ero quel bambino a cui piaceva vedere cosa c\'era dentro le cose, e non ci volle molto prima che iniziassi a smontare e rimontare giocattoli, computer, videogiochi e persino un ventilatore (che non ha mai più funzionato).',
            p2: 'Cresciuto in una fattoria, uno dei miei momenti più indimenticabili (e forse esilaranti) fu quando i miei genitori allevavano maiali in giardino, e io, con tutta la mia genialità, decisi di prendere un maialino e portarlo da mio papà. Il risultato? Il maialino si spaventò così tanto che iniziò a strillare e sua madre mi corse dietro (spoiler: mi morse, e questa è la ragione della mia cicatrice sul mento).',
          },
          math: {
            num: '02',
            title: 'La Matematica e la scuola',
            p1: 'Nell\'infanzia, confesso che non mi piaceva studiare, ma oltre a smontare cose, avevo anche una curiosità per i numeri. La matematica era una delle mie materie preferite e adoravo risolvere problemi e sfide, il che mi portò a partecipare a competizioni di conoscenza nella regione, dove vinsi alcuni premi.',
            p2: 'La mia prima medaglia fu legata a questo!',
          },
          soccer: {
            num: '03',
            title: 'Il mio primo sport: Il Calcio',
            text: {
              desc1: 'Il mio rapporto con lo sport è iniziato presto, e curiosamente, con il calcio, grazie a mio padre, che mi portava alle partite della squadra che allenava.',
              desc2: 'Sfortunatamente, la mia abilità con il pallone non era delle migliori, quindi questa parte della vita non durò a lungo.',
              descImg: 'Squadra unita prima della partita.'
            }
          },
          martial1: {
            num: '04',
            title: 'Le arti marziali: Kung Fu',
            p1: 'Durante la mia infanzia, ebbi l\'opportunità di praticare la mia prima arte marziale in un progetto della mia scuola di allora. Fu lì che conobbi il Kung Fu.',
            p2: 'La breve esperienza con il Kung Fu mi insegnò disciplina, concentrazione e l\'importanza di fare tutto con eccellenza (o almeno provarci). Fu un\'esperienza incredibile che mi segnò profondamente, e ancora oggi porto con me alcuni insegnamenti di quel periodo.',
          },
          martial2: {
            num: '05',
            title: 'Le arti marziali: Muay Thai',
            p1: 'Nella mia preadolescenza, ebbi l\'opportunità di praticare un\'altra arte marziale, il Muay Thai, in un progetto sociale di una chiesa locale della mia città.',
            p2: 'Col tempo, diventai uno degli allievi più dedicati e ricevetti una borsa di studio dal professor Júnior Shaolin per allenarmi nella sua palestra.',
            descImg: 'Allenamento di Muay Thai con il professor Júnior Shaolin'
          },
          surprise: {
            num: '06',
            title: 'Il giorno in cui mi fecero una festa a sorpresa a scuola',
            p1: 'Non ho mai dato molta importanza ai miei compleanni, ma un giorno, ancora durante la scuola media, i miei amici si unirono, a mia insaputa, e mi fecero una festa di compleanno a sorpresa a scuola.',
            p2: 'Fu un momento così speciale che ancora oggi, quando ci ripenso, mi sento molto grato di avere amici così incredibili. E naturalmente, la festa fu fantastica, con torta, brigadeiros e tanto divertimento. Un ringraziamento speciale alla mia classe del 9º anno, che rese quel giorno così speciale per me.',
            descImg: 'Tagliando la torta per gli amici'
          },
          formatura1: {
            num: '07',
            title: 'Il mio diploma di Scuola Media',
            p1: 'E forse il momento più atteso dai bambini arrivò per me: il diploma. E senza dubbio, fu una delle cose più gratificanti che abbia mai vissuto. Insieme ad alcuni professori, organizzammo sagre, lotterie e altre attività per raccogliere fondi per la festa di diploma.',
            p2: 'Quando arrivò il grande giorno, fu semplicemente incredibile. Grazie al professor Paulo Bernardo, scrissi i miei primi brani di un libro, che fu scritto anche da ciascuno dei miei compagni di classe, stampato e consegnato a ognuno di noi come ricordo di questa fase così importante. E naturalmente, la festa fu incredibile.',
            descImg: 'Ricevendo il libro e il diploma dalle mani del professor Paulo Bernardo'
          },
          etec1: {
            num: '08',
            title: 'Fui accettato per frequentare il Liceo e il Tecnico all\'ETEC!',
            diary: {
              title: 'Le mie prime lezioni di sistemi embedded',
              desc: 'Una registrazione del giorno in cui affrontammo la sfida di costruire un circuito semaforico usando Arduino.'
            },
            tests: {
              title: 'I miei primi esami di programmazione',
              desc: 'E gli esami erano così, con un sacco di codici scritti a mano, e io che cercavo di capire cosa stesse succedendo. Fu una sfida, ma anche parte dell\'insieme di fattori scatenanti per il mio amore per la programmazione.'
            },
            first: {
              title: 'Il mio primo giorno di lezione all\'ETEC',
              desc: 'Ricordo che arrivai, e tutto era nuovo: nuovi professori, nuovi compagni, nuove aule e laboratori. Fu tutto magico!',
            },
            codes: {
              title: 'I miei primi codici scritti',
              desc: 'Qui iniziò il mio viaggio con il codice. Tutto molto ambiguo e nuovo per un ragazzo di 15 anni. Fu un processo di tentativi ed errori, ma ogni linea di codice scritta era una piccola vittoria.',
            }
          },
          coral: {
            num: '9',
            title: 'Primi accordi',
            music: {
              desc1: 'Durante la pandemia di COVID-19, passando mesi a casa, sorse di nuovo la curiosità di imparare cose nuove. Tra queste, suonare strumenti musicali. E fu così che iniziai a imparare la chitarra e l\'ukulele.',
              desc2: 'Avevo YouTube, una vecchia chitarra e la voglia di imparare. Dopo un po\', pubblicando alcuni video mentre suonavo, fui invitato a suonare nel Coro dell\'Etec, dove ebbi l\'opportunità di esibirmi in alcune presentazioni.',
              descImg: 'Una registrazione del giorno della mia prima esibizione alla chitarra, nel coro a cui partecipavo all\'Etec.'
            }
          },
          martial3: {
            num: '10',
            title: 'Le arti marziali: Il Jiu-Jitsu',
            p1: 'Qui iniziò il mio rapporto con il Jiu-Jitsu, che è lo sport che mi ha segnato di più e che mi ha insegnato di più nel corso della mia vita. Iniziai a praticarlo come hobby, ma in meno di un mese, il mio professore, Huelder Motta, mi iscrisse già per competere. Inaspettatamente, fui campione in tutti i campionati in cui lottai come cintura bianca. Fu lì che tutto ebbe inizio.',
            p2: 'Essendo un caso atipico, fui promosso a cintura blu in 3 mesi, pur senza sapere bene cosa stessi facendo. Ciononostante, continuai a migliorare, vincendo le competizioni a cui partecipavo, e in poco tempo iniziai a ricevere sponsorizzazioni, borse di studio e inviti ad allenarmi in altre palestre.',
            descImg: 'Prima Esperienza di Jiu-Jitsu.'
          },
          firstHacka: {
            num: '11',
            title: '1º Congresso Inovagro & Bruto Hacka',
            text: {
              desc1: 'Nella foto, Maria Eduarda Ayres, Leona do Nascimento e io, mentre elaboriamo il progetto per la presentazione finale dell\'Hackathon.',
              desc2: 'Senza alcun dubbio, questo fu decisamente il punto di svolta per la scelta della mia carriera. Fu la prima volta che partecipai a un hackathon, e in mezzo a tante incertezze, nervosismo e inesperienza, fu qui che capii che ero davvero sulla strada giusta. Vidi che potevo davvero risolvere problemi reali della società facendo ciò che amavo fare, anche se con poca esperienza all\'epoca.',
              descImg: 'Ricevemmo il premio del 3º posto con il progetto Inova Chat, un sistema chatbot intelligente sviluppato per filtrare e selezionare feedback e segnalazioni dei dipendenti di Minerva Foods, rendendo la comunicazione aziendale altamente efficace. Soluzione integrata con le API di OpenAI.',
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
              title: 'Prima apparizione in TV',
              desc: 'Nel corso di vari eventi, ebbi l\'opportunità di apparire in programmi televisivi.'
            },
            teach: {
              title: 'Apparizioni su riviste',
              desc: 'Sono sempre stato una persona molto timida. Espormi come modello nell\'adolescenza fu uno dei modi che trovai per superarlo. Inaspettatamente, ricevetti alcuni premi, alcuni contratti, e a poco a poco persi la paura del pubblico.'
            }
          },
          utfpr: {
            num: '13',
            title: 'Prima ammissione all\'università',
            p1: 'E uno dei momenti più impegnativi nella vita di un giovane del liceo arrivò: la scelta dell\'università. E per me, fu un processo molto difficile, pieno di dubbi e incertezze. All\'epoca ero stato accettato in diverse università, ma alla fine scelsi di studiare Scienze Informatiche all\'UTFPR.',
            p2: 'Ovviamente, tutto fu magico: la gioia di essere passato, l\'ansia di iniziare, il cambio di stato, l\'aspettativa di come sarebbe stata l\'università. Tutto questo fu un mix di emozioni che, quando vedo altri passarci, mi ricorda com\'è stato per me, e mi sento genuinamente felice.',
            descImg: 'Prima Esperienza di Jiu-Jitsu.'
          },
          ideathon: {
            num: '14',
            title: 'Ideathon Sistema FAEP/SENAR',
            text: {
              desc1: 'Già all\'università, ma ancora nel contesto della formazione tecnica, ebbi l\'opportunità di partecipare all\'Ideathon del Sistema FAEP/SENAR, un hackathon dove potei sviluppare in gruppo un modello di business per il settore agricolo.',
              desc2: 'La soluzione ci valse il premio del 3º posto, e cosa più importante, la certezza che ero sulla strada giusta e che potevo davvero fare la differenza.',
              descImg: 'Ricevendo il premio dalle mani di Ricardo Ost e Jefrey Kleine Albers',
              descImg2: 'Presentando il progetto'
            }
          },
        },
        labels: {
          liveChildhood: 'Infanzia Vivace',
          mediaHighlight: 'In Evidenza sui Media',
        }
      }
    }
  },
};