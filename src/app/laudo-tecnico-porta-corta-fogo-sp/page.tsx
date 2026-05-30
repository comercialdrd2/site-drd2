import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-tecnico-porta-corta-fogo-sp",
  meta: {
    title: "Laudo Técnico de Porta Corta-Fogo em SP — ART CREA-SP para AVCB | DRD2 Engenharia",
    description: "A DRD2 emite laudo técnico de porta corta-fogo em SP com ART CREA-SP para AVCB e renovação. Inspeção conforme NBR 11742 e IT 11/25. Entrega em 48h.",
  },
  eyebrow: "NBR 11742 e IT 11/25 — Laudo para AVCB",
  h1Line1: "Laudo Técnico de Porta Corta-Fogo",
  h1Line2: "em São Paulo — ART CREA-SP para AVCB",
  heroBg: "/images/bg-galpao.jpg",
  introP1: "O laudo técnico de porta corta-fogo com ART CREA-SP é o documento exigido pelo CBPMESP para aprovação do AVCB e resposta a Comunique-se sobre saídas de emergência. A DRD2 emite laudos conformes com a NBR 11742 e IT 11/25 em até 48h após a inspeção técnica.",
  introP2: "Processo completo: inspeção técnica com checklist normativo, relatório fotográfico e laudo assinado por engenheiro com ART específica para o laudo. Diagnóstico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Porta Corta-Fogo", href: "/manutencao-porta-corta-fogo-sp" },
    { label: "Laudo Técnico de Porta Corta-Fogo" },
  ],
  occupationType: "edificação com porta corta-fogo",
  h2_principal: {
    heading: "Quando o laudo técnico de porta corta-fogo é exigido?",
    body: "O CBPMESP exige laudo técnico de porta corta-fogo com ART em três situações principais: processo de AVCB (primeira emissão ou renovação), resposta a Comunique-se específico sobre saídas de emergência e auditoria de seguradora que exige comprovação técnica de conformidade das portas. O laudo deve ser emitido por engenheiro habilitado com ART CREA-SP recolhida especificamente para o laudo — relatório de técnico de manutenção não é aceito.",
    body2: "Para renovação do AVCB, o laudo deve estar emitido nos últimos 12 meses conforme as ITs do CBPMESP. Laudos anteriores, mesmo tecnicamente corretos, são rejeitados se estiverem fora do prazo.",
  },
  h2_riscos: {
    heading: "Por que o laudo de porta corta-fogo é rejeitado pelo CBPMESP?",
    intro: "Esses são os 6 motivos mais frequentes de rejeição de laudo técnico de porta corta-fogo pelo CBPMESP — todos evitáveis com profissional especializado.",
    itens: [
      { titulo: "Laudo sem ART específica", desc: "ART de manutenção periódica não cobre o laudo técnico de conformidade. O CBPMESP exige ART recolhida especificamente para a emissão do laudo, com descrição do objeto da ART correspondente ao laudo apresentado." },
      { titulo: "Engenheiro sem habilitação para o sistema", desc: "O laudo de porta corta-fogo deve ser assinado por engenheiro habilitado para a área. Laudos emitidos por técnico de nível médio ou profissional sem ART ativa são automaticamente rejeitados." },
      { titulo: "Laudo sem checklist normativo", desc: "O laudo deve referenciar explicitamente a NBR 11742 e a IT 11/25, apresentar os resultados dos testes realizados (tempo de fechamento, força da barra, verificação de empenamento) e identificar cada porta por localização." },
      { titulo: "Laudo fora do prazo de 12 meses", desc: "Para AVCB, o laudo deve estar dentro da validade de 12 meses. Laudo emitido antes desse prazo é rejeitado — mesmo que as portas estejam em perfeito estado." },
      { titulo: "Laudo sem relatório fotográfico", desc: "O CBPMESP exige relatório fotográfico identificando cada porta inspecionada. Laudo sem fotos ou com fotos sem identificação de localização gera exigência de complementação." },
      { titulo: "Portas não conformes incluídas no laudo", desc: "Incluir portas com defeitos no laudo e atestar conformidade é vício técnico grave. O correto é condicionar o laudo à manutenção das não conformidades antes da emissão." },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo técnico de porta corta-fogo",
    etapas: [
      { numero: "ETAPA 01", titulo: "Inspeção técnica com checklist normativo", desc: "Inspeção individual de cada porta corta-fogo com checklist conforme NBR 11742 e IT 11/25: empenamento, tempo de fechamento, funcionamento da barra antipânico, vedação intumescente, sinalização e ferragens." },
      { numero: "ETAPA 02", titulo: "Relatório fotográfico identificado", desc: "Fotos de cada porta com identificação de localização (pavimento, setor, número da porta). Registro de não conformidades com referência normativa específica." },
      { numero: "ETAPA 03", titulo: "Manutenção das não conformidades", desc: "Portas com defeitos são manutenidas antes da emissão do laudo. O laudo atesta o estado das portas após a manutenção — não o estado inicial da inspeção." },
      { numero: "ETAPA 04", titulo: "Emissão do laudo técnico", desc: "Laudo técnico com identificação do responsável técnico, referência às normas aplicadas, resultados dos testes realizados e conclusão de conformidade — no formato aceito pelo CBPMESP." },
      { numero: "ETAPA 05", titulo: "Emissão da ART CREA-SP", desc: "ART específica para o laudo de porta corta-fogo recolhida no CREA-SP — documento exigido pelo CBPMESP para protocolo do processo de AVCB." },
      { numero: "ETAPA 06", titulo: "Entrega em até 48h", desc: "Laudo técnico completo com ART CREA-SP entregue em até 48 horas após a conclusão da inspeção e manutenção das não conformidades." },
    ],
  },
  h2_detalhes: {
    heading: "O que o laudo técnico de porta corta-fogo deve conter",
    body1: "O CBPMESP não possui um modelo padronizado de laudo de porta corta-fogo, mas exige que o documento comprove tecnicamente que as portas atendem aos requisitos da NBR 11742 e da IT 11/25. O laudo deve ser suficientemente detalhado para que o analista do CBPMESP possa verificar a conformidade sem ambiguidade.",
    alerta: "Relatório de manutenção emitido por técnico de nível médio não substitui o laudo técnico de engenheiro. O CBPMESP rejeita documentos sem ART de engenheiro habilitado — sem exceção.",
    itens: [
      { titulo: "Identificação completa do imóvel e das portas", desc: "Endereço completo, número do processo de AVCB (quando existente), número de portas inspecionadas, localização de cada porta (pavimento e setor) e número de identificação." },
      { titulo: "Referência normativa explícita", desc: "O laudo deve referenciar explicitamente a NBR 11742 e a IT 11/25 do CBPMESP vigente. Laudos com referência a versões desatualizadas das normas podem ser questionados." },
      { titulo: "Resultados dos testes realizados", desc: "Tempo de fechamento medido de cada porta, força de acionamento da barra antipânico (quando aplicável), resultado da verificação de empenamento e estado da vedação intumescente." },
      { titulo: "Conclusão técnica e validade", desc: "Conclusão de conformidade ou não conformidade de cada porta e do conjunto. Indicação da validade do laudo (12 meses) e recomendação de manutenção periódica." },
    ],
    closing: "A DRD2 emite laudos no formato técnico aceito pelo CBPMESP, com ART específica e relatório fotográfico completo — tudo pronto para protocolo no processo de AVCB.",
  },
  h2_quando: {
    heading: "Quando solicitar o laudo técnico de porta corta-fogo?",
    body1: "Antes do protocolo do AVCB ou da renovação, com pelo menos 30 dias de antecedência para permitir manutenção das não conformidades. Para resposta a Comunique-se do CBPMESP sobre saídas de emergência, o prazo é determinado pelo próprio Comunique-se.",
    body2: "Atenção: o laudo tem validade de 12 meses. Solicitar o laudo muito antes do protocolo significa que ele pode vencer antes da aprovação — planeje o timing correto com a DRD2.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para laudo técnico de porta corta-fogo?",
    body1: "A DRD2 emite laudos de porta corta-fogo aceitos pelo CBPMESP e pelas principais seguradoras do mercado. Cada laudo é emitido por engenheiro com ART CREA-SP ativa, com checklist normativo e relatório fotográfico completo.",
    body2: "Entrega em até 48h após a inspeção. Sem retrabalho e sem Comunique-se sobre documentação de porta corta-fogo.",
  },
  h2_cobertura: {
    heading: "Laudo técnico de porta corta-fogo em toda a Grande São Paulo",
    body1: "A DRD2 atende edificações em toda a Grande SP: Zona Sul, Zona Norte, Zona Leste, ABC Paulista, Guarulhos, Osasco e Barueri.",
    body2: "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica.",
  },
  faqs: [
    { question: "Qual a validade do laudo técnico de porta corta-fogo?", answer: "12 meses conforme as ITs do CBPMESP. Para renovação de AVCB, o laudo deve estar emitido dentro desse prazo. Laudos mais antigos são rejeitados pelo CBPMESP." },
    { question: "Técnico de manutenção pode emitir laudo de porta corta-fogo?", answer: "Não. O CBPMESP exige laudo assinado por engenheiro habilitado com ART CREA-SP específica para o laudo. Relatório de técnico de nível médio é rejeitado no protocolo." },
    { question: "Quanto tempo leva para emitir o laudo?", answer: "Até 48h após a conclusão da inspeção e da manutenção das não conformidades. Para edificações com mais de 50 portas, o prazo é estimado na proposta." },
    { question: "O laudo de porta corta-fogo é aceito por seguradoras?", answer: "Sim. Laudos emitidos pela DRD2 com ART CREA-SP são aceitos pelas principais seguradoras do mercado que exigem comprovação de conformidade das portas corta-fogo." },
    { question: "É necessário fazer manutenção para emitir o laudo?", answer: "Se todas as portas estiverem em conformidade, o laudo pode ser emitido após a inspeção. Se houver não conformidades, a manutenção deve ser concluída antes da emissão do laudo de conformidade." },
  ],
  linksInternos: [
    { href: "/manutencao-porta-corta-fogo-sp", label: "Manutenção de Porta Corta-Fogo" },
    { href: "/adequacao-porta-corta-fogo-avcb-sp", label: "Adequação para AVCB" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
    { href: "/blog/o-que-reprova-porta-corta-fogo-no-avcb", label: "O que reprova a porta corta-fogo no AVCB" },
    { href: "/blog/quando-trocar-porta-corta-fogo", label: "Quando trocar a porta corta-fogo" },
  ],
  ctaFinal: {
    heading: "LAUDO TÉCNICO DE PORTA CORTA-FOGO — ART CREA-SP + ENTREGA EM 48H",
    body: "Inspeção conforme NBR 11742 e IT 11/25. Laudo com ART específica aceito pelo CBPMESP. Relatório fotográfico completo.",
    cta: "Solicitar Diagnóstico Técnico Gratuito",
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
