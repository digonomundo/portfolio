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
        portfolio: 'Ir para o portfólio'
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
        paragraph1: 'Em resumo, eu tenho 21 anos, sou Técnico em Desenvolvimento de Sistemas e atualmente estudo Engenharia de Telecomunicações na Unicamp.',
        paragraph2: 'Tenho experiência com desenvolvimento de aplicações web com Next.js, TypeScript e React.js, além de saber utilizar ferramentas no-code como WordPress (Elementor) e Wix. Também possuo experiência com desenvolvimento nativo de aplicativos móveis em Kotlin e Java.',
        paragraph3: 'Seja desenvolvendo ou explorando novas tecnologias, meu foco está sempre na performance e na experiência do usuário. Acredito que o design não é apenas como parece, mas como funciona. Atualmente, também estou aprofundando meus estudos em programação competitiva e Data Science.',
        yearsExperience: 'Anos de Idade',
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
        lattes: {
          title: 'Histórico Completo',
          description: 'Você pode acessar meu Currículo Lattes para visualizar a lista integral de premiações, medalhas, projetos de pesquisa e cursos complementares.',
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
          { id: 2, date: "06/03", type: "Laboratório", title: "Aula 02: Conceitos Básicos", description: "Constantes, variáveis, tipos primitivos e comandos de entrada/saída.", lessons: [{ title: "Tipos de dados em C (int, float, char)", type: "slide" }, { title: "Lista 1", type: "doc", document: "lista 1.pdf" }] },
          { id: 3, date: "13/03", type: "Teoria", title: "Aula 03: Atribuições e Operadores", description: "Expressões aritméticas, precedência e operadores relacionais.", lessons: [{ title: "Operadores Aritméticos e Relacionais", type: "slide" }, { title: "Lista 2", type: "doc", document: "lista 2.pdf" }] },
          { id: 4, date: "20/03", type: "Laboratório", title: "Aula 04: Estrutura Sequencial e Condicional", description: "Comandos de decisão simples e composta (if/else).", lessons: [{ title: "Lógica booleana em C", type: "video" }, { title: "Estruturas if e else", type: "code" }, { title: "Atividade de Lab 02", type: "code" }] },
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
        tutoring: 'Tutoring'
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
        paragraph1: 'In short, I am 21 years old, a Systems Development Technician, and I am currently studying Telecommunications Engineering at Unicamp.',
        paragraph2: 'I have experience developing web applications with Next.js, TypeScript, and React.js, as well as using no-code tools like WordPress (Elementor) and Wix. I also have experience with native mobile app development in Kotlin and Java.',
        paragraph3: 'Whether developing or exploring new technologies, my focus is always on performance and user experience. I believe that design is not just how it looks, but how it works. Currently, I am also deepening my studies in competitive programming and Data Science.',
        yearsExperience: 'Years Old',
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
        lattes: {
          title: 'Full History',
          description: 'Access my Lattes Curriculum to view the full list of awards, dozens of sports medals, research projects, and additional courses.',
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
        tutoring: 'Tutoría'
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
        paragraph1: 'En resumen, tengo 21 años, soy Técnico en Desarrollo de Sistemas y actualmente estudio Ingeniería de Telecomunicaciones en la Unicamp.',
        paragraph2: 'Tengo experiencia en el desarrollo de aplicaciones web con Next.js, TypeScript y React.js, además de saber utilizar herramientas no-code como WordPress (Elementor) y Wix. También tengo experiencia en el desarrollo nativo de aplicaciones móviles en Kotlin y Java.',
        paragraph3: 'Ya sea desarrollando o explorando nuevas tecnologías, mi enfoque siempre está en el rendimiento y la experiencia del usuario. Creo que el diseño no es solo cómo se ve, sino cómo funciona. Actualmente, también estoy profundizando mis estudios en programación competitiva y Ciencia de Datos.',
        yearsExperience: 'Años de Edad',
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
        lattes: {
          title: 'Historial Completo',
          description: 'Accede a mi Currículo Lattes para ver la lista completa de premios, decenas de medallas deportivas, proyectos de investigación y cursos complementarios.',
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
        tutoring: 'Tutoraggio'
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
        paragraph1: 'In sintesi, ho 21 anni, sono un Tecnico in Sviluppo di Sistemi e attualmente studio Ingegneria delle Telecomunicazioni presso l\'Unicamp.',
        paragraph2: 'Ho esperienza nello sviluppo di applicazioni web con Next.js, TypeScript e React.js, oltre a saper utilizzare strumenti no-code come WordPress (Elementor) e Wix. Ho anche esperienza nello sviluppo nativo di app mobili in Kotlin e Java.',
        paragraph3: 'Che si tratti di sviluppare o esplorare nuove tecnologie, il mio focus è sempre sulle prestazioni e sull\'esperienza utente. Credo che il design non sia solo come appare, ma come funziona. Attualmente, sto anche approfondendo i miei studi in programmazione competitiva e Data Science.',
        yearsExperience: 'Anni di Età',
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
        lattes: {
          title: 'Storia Completa',
          description: 'Accedi al mio Curriculum Lattes per visualizzare l\'elenco completo dei premi, decine di medaglie sportive, progetti di ricerca e corsi complementari.',
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
      }
    }
  }
};