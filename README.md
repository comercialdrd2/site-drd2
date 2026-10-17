# DRD2 Fachadas — fachadas.drd2.com.br

Site estático (HTML, CSS e JS) de pintura e restauração de fachadas da DRD2 Engenharia.

- Hospedagem: Vercel (projeto separado do site principal), ramo `fachadas`.
- Sem etapa de build: a Vercel publica os arquivos como estão. `vercel.json` ativa URLs sem `.html` e com barra no final.
- Formulário: `assets/site.js` (`FORM_ENDPOINT` envia para comercial@drd2.com.br via FormSubmit; `GTM_ID` para o Google Tag Manager).
- Este ramo não tem relação com o código do site principal no ramo `main`.
