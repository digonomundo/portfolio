# 🚀 Meu Portfólio Pessoal

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=fff)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=fff)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Este é o repositório do meu **portfólio pessoal**, desenvolvido em **Next.js** e **TailwindCSS**.  
Aqui você encontra minha trajetória, projetos, formas de contato e a opção de baixar meu currículo.

---

## 📑 Índice
- [🎯 Objetivo](#-objetivo)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [🚀 Como Rodar](#-como-rodar-o-projeto)
- [🤝 Contribuindo](#-contribuindo)
- [🔒 Segurança](#-segurança)
- [📄 Licença](#-licença)
- [📬 Contato](#-contato)

---

## 🎯 Objetivo
Disponibilizar um **portfólio online, organizado e responsivo**, onde visitantes possam conhecer mais sobre mim, visualizar meus trabalhos e acessar facilmente meus contatos.

---

## ✨ Funcionalidades
* **Home** → Página inicial com apresentação e destaques e opção para baixar o currículo.
* **Sobre Mim** → Informações pessoais e detalhes da minha trajetória.
* **Formação** → Informações e detalhes da minha trajetória acadêmica.
* **Experiência** → Informações e detalhes da minha trajetória profissional.
* **Projetos** → Exibição de projetos desenvolvidos com descrições e links.
* **Contato** → Links para redes sociais.

---

## 🛠️ Tecnologias
- **Next.js** – Framework React para aplicações web.  
- **React** – Biblioteca para construção de interfaces.  
- **TailwindCSS** – Estilização e design responsivo.  

---

## 🚀 Como Rodar o Projeto

### Requisitos

* [Node.js](https://nodejs.org/) (v14 ou superior)
* [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build && npm start
# ou
yarn build && yarn start
# ou
pnpm build && pnpm start
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas!
Antes de abrir um Pull Request, leia o [Guia de Contribuição](./CONTRIBUTING.md) e siga o [Código de Conduta](./CODE_OF_CONDUCT.md).

---

## 🔒 Segurança

Caso encontre alguma vulnerabilidade, **não abra uma issue pública**.
Veja a [Política de Segurança](./SECURITY.md) para detalhes sobre como reportar problemas.

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.
Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📬 Contato

Para mais informações ou dúvidas, entre em contato:

* **LinkedIn**: [https://www.linkedin.com/in/digonomundo/](https://www.linkedin.com/in/digonomundo/)
* **Email**: [rodrigo@digonomundo.com](mailto:rodrigo@digonomundo.com)

## ✦ Journal

O Journal está disponível em `/pt/journal`, `/en/journal`, `/es/journal` e `/it/journal`.
Os artigos vivem em `src/content/journal/<locale>/*.mdx`. Para adicionar um artigo:

1. Escolha uma categoria editorial estável: `milestones`, `engineering-development`, `projects-apps`, `learning-experiences` ou `in-the-press`.
2. Copie o artigo para os quatro diretórios de idioma, mantendo o mesmo identificador estável e preenchendo `translations`.
3. Escreva traduções reais para `title`, `excerpt`, headings e corpo; não declare uma tradução que não exista.
4. Use uma imagem local correspondente ao conteúdo em `public/`, informando `heroAlt`, `heroWidth`, `heroHeight`, caption e crédito somente quando forem confirmados.
5. Adicione as fontes originais em `sources` com `label`, `url` e `fetchedAt`. Não reproduza o texto integral da fonte.
6. Para anexos editoriais, inclua `attachments` no frontmatter; imagens internas podem usar o formato `![[/caminho|largura|altura|legenda]]`.

O carregador editorial em `src/lib/journal.ts` alimenta a listagem, artigos, categorias, metadata, dados estruturados e sitemap.

---

💙 Obrigado por visitar meu portfólio!
