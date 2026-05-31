import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-alarme-incendio-escola-sao-paulo",
  meta: {
    title: "Laudo de Alarme de Incêndio para Escola em SP | DRD2 Engenharia",
    description: "Laudo técnico de alarme de incêndio para escolas e creches em São Paulo. IT 18/2019, integração com plano de abandono, cobertura de salas e ginásio. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 18 — Alarme de Incêndio para Escola",
  h1Line1: "Laudo de Alarme de Incêndio",
  h1Line2: "para Escola em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_creche.webp",
  introP1: "Escolas têm uma exigência que nenhuma outra ocupação tem: o sistema de alarme de incêndio precisa estar integrado ao plano de abandono. Não basta a sirene soar — o sinal precisa ser diferente do sinal de intervalo, os professores precisam saber como reagir a cada tipo de alarme e a brigada de incêndio escolar precisa estar treinada para conduzir a evacuação por rota de fuga validada.",
  introP2: "A DRD2 emite o laudo técnico do alarme conforme a IT 18/2019, com vistoria em todas as salas de aula, laboratórios, ginásio, cantina e áreas administrativas. Validamos a integração do sistema com o plano de abandono e a compatibilidade com as exigências da IT 17 (brigada de incêndio) — os dois documentos caminham juntos no processo de AVCB da escola.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Alarme — Escola SP" },
  ],
  occupationType: "escola",
  h2_principal: {
    heading: "Por que o alarme em escolas tem exigências únicas",
    body: "A IT 18/2019 classifica escolas no Grupo E (educacional). O sistema de alarme precisa cobrir todas as edificações do campus — não apenas o prédio principal. Ginásio, quadra coberta, cantina independente, secretaria e banheiros externos precisam de cobertura individual. Escolas com múltiplos blocos precisam de central com zonas separadas por bloco.",
    body2: "A principal particularidade é a integração com o plano de abandono: o sinal sonoro do alarme de incêndio deve ser diferente do sinal de aula e de intervalo. O CBPMESP verifica essa diferenciação na vistoria — e se o sinal for idêntico ao de aula, o processo é reprovado mesmo com o sistema fisicamente conforme.",
  },
  h2_riscos: {
    heading: "Problemas mais comuns em sistemas de alarme de escolas",
    intro: "Esses são os não-conformes encontrados com maior frequência pela DRD2 em vistorias de escolas:",
    itens: [
      {
        titulo: "Sinal de alarme idêntico ao sinal de aula",
        desc: "Escolas que usam a mesma campainha para o alarme de incêndio e para o controle de horário criam confusão na evacuação. O CBPMESP exige sinal inequívoco e distinto — em geral, padrão intermitente para incêndio.",
      },
      {
        titulo: "Ginásio e quadra sem cobertura",
        desc: "Ginásios e quadras cobertas são áreas grandes com alta concentração de alunos — e frequentemente ficam sem detector porque o projeto original não os incluiu. Área sem cobertura é Comunique-se certo na vistoria.",
      },
      {
        titulo: "Laboratório de química sem detector compatível",
        desc: "Laboratórios que trabalham com reagentes ou bunsen precisam de detector de chama — detector de fumaça pode não reagir a fogo sem fumaça visível em ambientes abertos. Laboratório de informática exige detector óptico de alta sensibilidade.",
      },
      {
        titulo: "Central sem autonomia para o horário noturno",
        desc: "Se houver vigilante noturno, a central precisa manter autonomia de 24h em bateria. Escolas com queda frequente de energia precisam verificar a capacidade real da bateria.",
      },
      {
        titulo: "Plano de abandono sem integração documentada",
        desc: "O CBPMESP exige documento comprovando que o plano de abandono foi elaborado com base no sistema de alarme instalado — com rotas de fuga por zona de alarme. Sem esse documento, o laudo de alarme não comprova conformidade.",
      },
      {
        titulo: "Detectores na cantina industrial sem tipo correto",
        desc: "Cantinas com fogão e fritadeira têm as mesmas exigências das cozinhas industriais: detector termovelocimétrico na área de cocção. Cantinas com detector de fumaça nessa área são não-conformes.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de alarme para escolas",
    etapas: [
      {
        numero: "01",
        titulo: "Mapeamento do campus completo",
        desc: "Levantamos todas as edificações do campus — prédio principal, ginásio, cantina, secretaria, banheiros externos e guarita — para garantir que nenhuma área fique descoberta.",
      },
      {
        numero: "02",
        titulo: "Teste por sala e por zona",
        desc: "Cada sala de aula é testada individualmente: ativamos o alarme e verificamos se o sinal é audível com a porta fechada e com alunos presentes (nível sonoro com ruído de sala).",
      },
      {
        numero: "03",
        titulo: "Verificação da integração com o plano de abandono",
        desc: "Confirmamos que o padrão sonoro do alarme de incêndio é diferente do sinal de aula, e que as rotas de fuga por zona de alarme estão documentadas e sinalizadas.",
      },
      {
        numero: "04",
        titulo: "Checklist de laboratórios e cantina",
        desc: "Ambientes especiais recebem verificação específica de tipo de detector, sensibilidade e instalação — laboratórios, cantina e sala de informática têm exigências distintas.",
      },
      {
        numero: "05",
        titulo: "Laudo com ART e planta do campus",
        desc: "Laudo técnico completo com ART CREA-SP, planta do campus com cobertura por zona, resultado dos testes e declaração de integração com o plano de abandono.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de alarme exigida no AVCB da escola",
    body1: "O processo de AVCB de escolas no CBPMESP exige os seguintes documentos do sistema de alarme:",
    alerta: "Escola com processo de AVCB pendente não consegue renovar o alvará de funcionamento junto à Secretaria de Educação do Estado. O laudo de alarme é parte obrigatória desse processo.",
    itens: [
      { titulo: "Laudo técnico IT 18/2019 com ART", desc: "Laudo assinado por engenheiro CREA-SP com declaração de conformidade do sistema por edificação e por zona." },
      { titulo: "Planta do campus com cobertura por zona", desc: "Planta de todas as edificações do campus com marcação de detectores, sirenes e acionadores — incluindo ginásio, cantina e áreas externas cobertas." },
      { titulo: "Documento de integração com plano de abandono", desc: "Declaração ou memorial descrevendo como o sinal de alarme dispara a evacuação, quais rotas correspondem a quais zonas e como a brigada é acionada." },
      { titulo: "Relatório de manutenção anual", desc: "Manutenção preventiva documentada dos últimos 12 meses com resultado de teste por dispositivo." },
      { titulo: "Certificado de treinamento da brigada (IT 17)", desc: "Embora seja documento separado, o CBPMESP verifica a consistência entre o sistema de alarme e o treinamento da brigada — os dois precisam estar alinhados." },
    ],
    closing: "A DRD2 coordena o laudo de alarme e o certificado de brigada em paralelo — os dois documentos entram juntos no processo de AVCB da escola.",
  },
  h2_quando: {
    heading: "Quando a escola precisa emitir ou renovar o laudo de alarme",
    body1: "O laudo de alarme é obrigatório em toda renovação do AVCB — geralmente a cada 3 anos para escolas. Também é exigido quando há ampliação do campus (novo bloco ou ginásio), quando há substituição da central de alarme ou quando a escola nunca teve AVCB e está iniciando o processo pela primeira vez.",
    body2: "Escolas credenciadas pelo Ministério da Educação ou pela Secretaria Estadual de Educação frequentemente têm exigência de AVCB ativo como condição de credenciamento e de renovação de autorização de funcionamento. A DRD2 emite laudo compatível com ambas as exigências.",
  },
  h2_escolher: {
    heading: "Início do ano letivo: o momento certo para regularizar",
    body1: "A DRD2 recomenda que escolas façam a vistoria de alarme no mês anterior ao início do ano letivo. Esse é o momento em que a escola está vazia, facilitando o acesso a todas as salas, e quando eventuais não-conformes podem ser corrigidos sem impactar as aulas.",
    body2: "Escolas que iniciam o ano com AVCB vencido ficam em situação irregular imediatamente — e a fiscalização tende a aumentar no início do ano escolar.",
  },
  h2_cobertura: {
    heading: "Atendimento para escolas em SP e Grande SP",
    body1: "A DRD2 atende escolas de educação básica, creches, faculdades e centros de treinamento em toda São Paulo Capital e Grande SP. Vistoria agendada no contraturno ou nas férias escolares para não interromper as aulas.",
    body2: "Para redes de escola com múltiplas unidades, oferecemos contrato de laudo anual com preço por unidade e agenda consolidada.",
  },
  faqs: [
    {
      question: "O sinal de alarme de incêndio pode ser o mesmo sinal de aula?",
      answer: "Não. O CBPMESP exige que o sinal de alarme de incêndio seja inequívoco e diferenciado do sinal de controle de horário. O padrão mais aceito é o sinal intermitente (tipo campainha pulsada) para incêndio, diferente do sinal contínuo de aula.",
    },
    {
      question: "A quadra esportiva descoberta precisa de detector?",
      answer: "Não. Apenas áreas cobertas precisam de detector. Quadras ao ar livre não têm exigência de sistema de alarme. Ginásios com cobertura, independente do material, precisam de cobertura.",
    },
    {
      question: "A creche tem as mesmas exigências de alarme que a escola?",
      answer: "As exigências técnicas são similares (IT 18, Grupo E), mas creches têm exigências adicionais por atender crianças menores — a brigada de incêndio precisa de treinamento específico para evacuação de bebês e crianças não ambulantes, o que influencia o dimensionamento do sistema de acionamento.",
    },
    {
      question: "Com que frequência a escola precisa fazer manutenção do alarme?",
      answer: "A IT 18 exige manutenção anual. A DRD2 recomenda inspeção semestral para escolas com cantina industrial — a gordura afeta os detectores da área de cocção mais rapidamente.",
    },
    {
      question: "O laudo de alarme serve para o credenciamento junto à Secretaria de Educação?",
      answer: "Sim. O laudo técnico com ART emitido pela DRD2 é aceito tanto pelo CBPMESP quanto pela Secretaria Estadual de Educação como documentação de conformidade do sistema de alarme.",
    },
  ],
  linksInternos: [
    { href: "/avcb-para-escola-sao-paulo", label: "AVCB para Escola em SP" },
    { href: "/alvara-bombeiro-escola-faculdade-sao-paulo", label: "Alvará Bombeiro — Escola" },
    { href: "/laudo-alarme-incendio-sao-paulo", label: "Laudo de Alarme de Incêndio SP" },
    { href: "/laudo-hidrante-escola-sao-paulo", label: "Laudo de Hidrante — Escola" },
    { href: "/treinamento-brigada", label: "Treinamento de Brigada de Incêndio" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de alarme para a sua escola — vistoria no contraturno",
    body: "Agendamos a vistoria para não interromper as aulas. Laudo com ART, planta do campus e integração com o plano de abandono — tudo que o CBPMESP exige.",
    cta: "Solicitar laudo de alarme para minha escola",
  },
};

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.slug },
};

export default function Page() {
  return <UniversalSeoPage data={data} />;
}
