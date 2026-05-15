import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/troca-mola-hidraulica-porta-corta-fogo-sp",
  meta: {
    title: "Troca de Mola Hidráulica de Porta Corta-Fogo em SP — NBR 11742 | DRD2 Engenharia",
    description: "A DRD2 substitui mola hidráulica de porta corta-fogo em SP conforme NBR 11742. Molas certificadas, ajuste de fechamento e laudo técnico para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "NBR 11742 — Manutenção de Porta Corta-Fogo",
  h1Line1: "Troca de Mola Hidráulica",
  h1Line2: "de Porta Corta-Fogo em São Paulo",
  heroBg: "/images/bg-galpao.jpg",
  introP1: "Mola hidráulica vencida, travada ou com fechamento lento é o defeito mais frequente em portas corta-fogo — e um dos que mais reprovam na vistoria do Corpo de Bombeiros. A DRD2 substitui molas hidráulicas em SP com peças certificadas compatíveis com cada modelo de porta corta-fogo, ajuste de fechamento conforme NBR 11742 e laudo técnico para AVCB.",
  introP2: "Atendimento rápido para mola com defeito urgente. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Porta Corta-Fogo", href: "/manutencao-porta-corta-fogo-sp" },
    { label: "Troca de Mola Hidráulica" },
  ],
  occupationType: "edificação com porta corta-fogo",
  h2_principal: {
    heading: "Por que a mola hidráulica da porta corta-fogo reprova no AVCB?",
    body: "A NBR 11742 exige que a porta corta-fogo feche automaticamente após cada abertura, retornando à posição completamente fechada sem intervenção humana. O tempo máximo de fechamento é 10 segundos para folhas de até 100 kg. Mola com fechamento lento, incompleto ou que mantém a porta aberta reprova na vistoria do CBPMESP.",
    body2: "Os sinais de mola vencida são: porta que fecha devagar e para no meio do caminho, porta que não fecha completamente (deixa fresta), mola com vazamento de óleo hidráulico visível, fechamento brusco (mola sem amortecimento adequado) e mola travada que impede a abertura da porta.",
  },
  h2_riscos: {
    heading: "Quando a mola hidráulica da porta corta-fogo precisa ser trocada?",
    intro: "Esses são os 6 sinais que indicam necessidade de substituição imediata da mola hidráulica da porta corta-fogo.",
    itens: [
      { titulo: "Porta não fecha completamente", desc: "Mola sem força suficiente para fechar a folha deixa fresta no batente. Em incêndio, a fresta permite passagem de fumaça e invalida a compartimentação — reprovação imediata na vistoria." },
      { titulo: "Fechamento acima de 10 segundos", desc: "A NBR 11742 determina fechamento completo em até 10 segundos. Mola com óleo vencido ou regulagem incorreta fecha devagar e reprova no teste cronometrado do vistoriador do CBPMESP." },
      { titulo: "Vazamento de óleo hidráulico", desc: "Mola com vedação interna comprometida apresenta vazamento de óleo hidráulico visível. Além da reprovação na vistoria, a mola com vazamento perde progressivamente a força de fechamento." },
      { titulo: "Mola travada — porta não abre", desc: "Mola com mecanismo interno travado impede a abertura da porta ou exige força excessiva. Além da reprovação, representa risco real de bloqueio da rota de fuga em emergência." },
      { titulo: "Fechamento brusco — porta bate", desc: "Mola sem amortecimento hidráulico adequado fecha a porta com impacto violento. Além do risco de dano à porta e ao batente, o fechamento brusco pode machucar usuários." },
      { titulo: "Mola incompatível com o peso da folha", desc: "Substituição anterior por mola de especificação errada (force insuficiente ou excessiva para o peso da folha) gera fechamento inadequado. A substituição correta exige seleção de mola compatível com o peso e dimensão da porta." },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa a troca de mola hidráulica",
    etapas: [
      { numero: "ETAPA 01", titulo: "Diagnóstico da mola existente", desc: "Inspeção da mola atual: medição do tempo de fechamento, verificação de vazamento, teste de força e análise do modelo e especificação instalada." },
      { numero: "ETAPA 02", titulo: "Seleção da mola correta", desc: "Definição da especificação de força da mola (EN 1–6) compatível com o peso e dimensão da folha corta-fogo. Mola com força insuficiente não fecha; mola com força excessiva fecha bruscamente e danifica o batente." },
      { numero: "ETAPA 03", titulo: "Fornecimento de mola certificada", desc: "Fornecimento de mola hidráulica com certificação compatível com a porta corta-fogo existente — item exigido pela NBR 11742 para manter a classificação de resistência ao fogo da porta." },
      { numero: "ETAPA 04", titulo: "Instalação e ajuste", desc: "Instalação técnica com fixação correta no batente e na folha. Ajuste do velocímetro de fechamento para tempo de 3 a 7 segundos e regulagem do amortecimento final (fechamento suave no último centímetro)." },
      { numero: "ETAPA 05", titulo: "Teste e validação", desc: "Teste de fechamento cronometrado, verificação de ausência de fresta no batente e confirmação de funcionamento completo da porta após a substituição da mola." },
      { numero: "ETAPA 06", titulo: "Registro técnico", desc: "Registro fotográfico da substituição para inclusão no laudo técnico geral da manutenção da porta corta-fogo com ART CREA-SP." },
    ],
  },
  h2_detalhes: {
    heading: "Especificações técnicas da mola hidráulica para porta corta-fogo",
    body1: "A mola hidráulica (também chamada de mola de fechamento de porta) para porta corta-fogo deve ser compatível com a classificação da porta (P-30 ou P-60) e ter certificação conforme a norma aplicável. A força da mola é classificada em graus (EN 1 a EN 6) conforme a norma europeia EN 1154, adotada como referência no mercado brasileiro.",
    alerta: "Mola hidráulica instalada em porta corta-fogo sem certificação compatível com a classificação da porta invalida a resistência ao fogo do conjunto — mesmo que a mola feche corretamente.",
    itens: [
      { titulo: "Graus de força da mola: EN 1 a EN 6", desc: "EN 1 e EN 2 para portas leves (até 60 kg). EN 3 e EN 4 para portas médias (60–80 kg). EN 5 e EN 6 para portas pesadas (acima de 80 kg). A mola deve ser selecionada conforme o peso real da folha." },
      { titulo: "Tempo de fechamento recomendado", desc: "NBR 11742 exige fechamento completo em até 10 segundos. O ideal é ajustar para 4 a 7 segundos — rápido o suficiente para garantir o fechamento antes da propagação de fumaça e lento o suficiente para não machucar usuários." },
      { titulo: "Frequência de substituição", desc: "A vida útil da mola hidráulica em porta corta-fogo de alto tráfego (escada de emergência) é de 3 a 5 anos. Em portas de baixo tráfego, pode chegar a 8 anos. A NBR 11742 exige inspeção semestral." },
      { titulo: "Compatibilidade com porta corta-fogo", desc: "A mola deve ser do mesmo fabricante da porta ou ter certificação específica de compatibilidade com a classificação P-30 ou P-60. Molas genéricas não certificadas comprometem a classificação de resistência ao fogo." },
    ],
    closing: "A DRD2 seleciona a mola correta para cada porta, executa a substituição com técnico especializado e emite laudo técnico com ART para o processo de AVCB.",
  },
  h2_quando: {
    heading: "Quando chamar a DRD2 para trocar a mola?",
    body1: "Troca imediata quando: porta não fecha completamente, vazamento de óleo visível na mola, porta fecha em mais de 10 segundos, mola travada impedindo abertura ou Comunique-se do CBPMESP sobre fechamento de porta.",
    body2: "Troca preventiva conforme NBR 11742: a cada 3 anos em portas de alto tráfego (escadas de emergência, garagem) e a cada 5 anos nas demais.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para troca de mola de porta corta-fogo?",
    body1: "A DRD2 tem estoque de molas hidráulicas certificadas para os principais modelos de porta corta-fogo do mercado. Atendemos em emergência quando a porta não fecha e precisamos resolver com urgência antes de uma vistoria.",
    body2: "Cada substituição é registrada com relatório fotográfico para inclusão no laudo técnico geral com ART CREA-SP.",
  },
  h2_cobertura: {
    heading: "Troca de mola de porta corta-fogo em toda a Grande São Paulo",
    body1: "A DRD2 atende edificações em toda a Grande SP: Zona Sul (Santo Amaro, Moema), Zona Norte, Zona Leste, ABC Paulista, Guarulhos, Osasco e Barueri.",
    body2: "Atendimento de emergência disponível para edificações com vistoria iminente do CBPMESP.",
  },
  faqs: [
    { question: "Qual o tempo máximo de fechamento da porta corta-fogo?", answer: "10 segundos conforme NBR 11742. O ideal é ajustar para 4 a 7 segundos. Porta com fechamento mais lento reprova na vistoria do CBPMESP." },
    { question: "Posso trocar a mola por qualquer modelo disponível no mercado?", answer: "Não. A mola deve ser compatível com a classificação P-30 ou P-60 da porta e ter certificação específica. Mola genérica não certificada invalida a resistência ao fogo do conjunto." },
    { question: "A mola da porta corta-fogo pode ser regulada sem troca?", answer: "Sim, quando o problema é apenas de regulagem (fechamento lento por ajuste incorreto). Quando a mola tem vazamento de óleo ou desgaste interno, a substituição é necessária." },
    { question: "Quanto custa a troca de mola de porta corta-fogo?", answer: "O custo depende do modelo de mola e do número de portas. A DRD2 apresenta orçamento após o diagnóstico gratuito." },
    { question: "A DRD2 faz atendimento de emergência para mola travada?", answer: "Sim. Para situações onde a porta não abre ou não fecha e há vistoria agendada, realizamos atendimento prioritário. Entre em contato pelo WhatsApp para verificar disponibilidade." },
  ],
  linksInternos: [
    { href: "/manutencao-porta-corta-fogo-sp", label: "Manutenção de Porta Corta-Fogo" },
    { href: "/adequacao-porta-corta-fogo-avcb-sp", label: "Adequação para AVCB" },
    { href: "/instalacao-barra-antipanico-sp", label: "Instalação de Barra Antipânico" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
  ],
  ctaFinal: {
    heading: "TROCA DE MOLA — MOLA CERTIFICADA + AJUSTE + LAUDO TÉCNICO",
    body: "Diagnóstico gratuito. Molas certificadas para porta P-30 e P-60. Atendimento de emergência disponível.",
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
