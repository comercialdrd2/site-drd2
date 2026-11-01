# DRD2 Fachadas (fachadas.drd2.com.br) em Next.js

Site de pintura e restauração de fachadas da DRD2 Engenharia, migrado do HTML estático para **Next.js 16 (App Router)**.
Todas as páginas são geradas de forma estática no build, com as mesmas URLs, textos, fotos e visual do site anterior.

## Onde mexer

| O que | Arquivo |
|---|---|
| WhatsApp, mensagem pronta, quem recebe os pedidos, GA4, Clarity, GTM, verificação do Search Console | `lib/site.ts` |
| Envio dos pedidos de orçamento por e-mail | `app/api/lead/route.ts` |
| Cabeçalho e menu | `components/Header.tsx` |
| Faixa do topo, rodapé, botão flutuante e barra do celular | `components/SiteChrome.tsx` |
| Formulário "Peça uma avaliação" (fim das páginas) | `components/LeadSection.tsx` |
| Botões, formulários, galeria, filtros, abas, carrossel, medição de cliques | `components/SiteScripts.tsx` |
| Visual (cores, espaçamentos) | `app/site.css` |
| Cada página | `app/<caminho>/page.tsx` (ex.: `app/servicos/pintura-predial/page.tsx`) |
| Título, descrição e imagem de compartilhamento de uma página | `export const metadata` no topo do `page.tsx` |
| Dados estruturados (schema.org) | `const schema` no topo do `page.tsx` |
| Sitemap | `app/sitemap.ts` (inclua aqui as páginas novas) |

Links de WhatsApp: use `<WaLink servico="Nome do serviço">` (o endereço com a mensagem pronta é montado automaticamente).

## Rodar no computador

Precisa do Node.js 20.9 ou mais novo.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # confere se está tudo certo antes de publicar
```

## Formulário de orçamento

1. O site envia o pedido pelo **Resend** (mesma conta do www.drd2.com.br), para comercial@drd2.com.br e comercial.drd2@gmail.com. O e-mail traz os dados, um botão "Responder pelo WhatsApp" e de onde o visitante veio (Google, Google Ads com campanha, direto etc.).
2. Se o Resend falhar, o site tenta o **FormSubmit** (o envio antigo) como reserva.
3. Só leva para a página de obrigado quando um dos dois confirma a entrega. Se os dois falharem, aparece um aviso no formulário com um botão de WhatsApp já preenchido com os dados do visitante.
4. Um campo escondido barra robôs de spam.

**Configuração obrigatória na Vercel:** em *Settings → Environment Variables*, crie `RESEND_API_KEY` com a mesma chave usada no projeto do www.drd2.com.br (ambientes Production e Preview). Sem ela, o site funciona, mas usa só o FormSubmit.

## Publicação (Vercel)

- `vercel.json` já indica o framework Next.js, então a Vercel passa a compilar o site em vez de publicar os arquivos como estão.
- `next.config.ts` mantém as URLs com barra no final e redireciona os endereços antigos com `.html` (301/308).
- Cache de 30 dias para `/img/` e de 1 dia para `/assets/`, como antes.

## O que mudou em relação ao site estático

- Na página inicial, título, descrição, canonical, Open Graph e a verificação do Search Console estavam dentro do `<body>`; agora ficam no `<head>`, onde o Google lê.
- Os links de WhatsApp já saem prontos no HTML (antes eram `href="#"` preenchidos por JavaScript).
- Nova mensagem pronta do WhatsApp, sem o "[cidade/bairro]" entre colchetes: "Olá! Vim pelo site e quero uma avaliação de fachada. Serviço: Pintura predial. O prédio fica em: ".
- Formulário com confirmação de entrega (antes ia para a página de obrigado mesmo se o envio falhasse).
- Fontes hospedadas no próprio site (sem a folha do Google Fonts bloqueando a renderização).
- Navegação entre páginas sem recarregar e pré-carregamento dos links.
- Artigos do blog marcados como `og:type=article`.
