# DRD2 Engenharia - Segurança Contra Incêndio

Site institucional voltado à engenharia de segurança contra incêndio, desenvolvido em Next.js (App Router), focado em performance (SSG), conversão e SEO orgânico de alta autoridade para São Paulo e Grande SP.

## Tecnologias Utilizadas

- **Next.js 14+ (App Router)** - SSR e SSG
- **React 18**
- **Tailwind CSS** - Estilização utilitária e cores da marca (Primária #C0392B, Secundária #2C3E50)
- **TypeScript** - Tipagem rigorosa
- **Lucide React** - Ícones leves

## Estrutura de Pastas e Componentes Modulares

O projeto adere às melhores práticas separando totalmente a estruturação visual (components, pages) da base de dados e copy (data):

- `src/data/services.ts` - Dados de todos os Serviços e FAQs por página
- `src/data/blog.ts` - Artigos do blog, resumos e linkagem interna
- `src/components/` - Header, Footer e injetor JsonLD utilitário
- `src/app/` - Estrutura de roteamento SSG e páginas de exibição

## Instalação Local

1. Verifique se o **Node.js** está instalado em seu ambiente (`node -v`).
2. Acesse a raiz do diretório.
3. Instale as dependências via NPM:
   ```bash
   npm install
   ```
4. Verifique as configurações de ambiente caso precise integrar algo na sua máquina (ex: Google Analytics).

## Variáveis de Ambiente (`.env`)

Crie o respectivo arquivo se necessário deployar (ou confira se o incluído está coerente):
- `NEXT_PUBLIC_WHATSAPP` -> Fatoração limpa do número para redirecionamento.
- `NEXT_PUBLIC_EMAIL` -> E-mail comercial para mailto links.
- `NEXT_PUBLIC_SITE_URL` -> Base URL contida na compilação do Sitemap XML.

## Build e Execução

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

Para realizar a **Compilação SSG** rigorosa assegurando Geração Estática de Dados (ideal antes do deploy):
```bash
npm run build
```

## Deploy na VERCEL

O projeto está otimizado como padrão nativo Next.js, 100% integrável com Vercel:
1. Suba o repositório completo para o GitHub/GitLab/Bitbucket.
2. Crie um novo projeto na Vercel e importe o repositório.
3. Configure a seção **Environment Variables** lá mesmo e informe todos os `NEXT_PUBLIC_` presentes.
4. O build command já está reconhecido default (`next build`). 
5. Clica Deploy e aproveite performance extrema com pre-rendering e Cache massivo SSG.
