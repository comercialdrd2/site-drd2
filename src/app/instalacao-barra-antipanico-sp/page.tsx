import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/instalacao-barra-antipanico-sp",
  meta: {
    title: "Instalação de Barra Antipânico em SP — NBR 11785 e IT 11/25 | DRD2 Engenharia",
    description: "A DRD2 instala barra antipânico em SP conforme NBR 11785 e IT 11/25. Certificação INMETRO, laudo técnico com ART CREA-SP para aprovação no AVCB. Orçamento gratuito.",
  },
  eyebrow: "NBR 11785 e IT 11/25 — Saídas de Emergência",
  h1Line1: "Instalação de Barra Antipânico",
  h1Line2: "em São Paulo — NBR 11785 e AVCB",
  heroBg: "/images/bg-galpao.jpg",
  introP1: "Saída de emergência sem barra antipânico ou com barra inoperante reprova na vistoria do CBPMESP e representa risco real em situação de pânico. A DRD2 instala barras antipânico certificadas conforme NBR 11785 e IT 11/25 em SP, com laudo técnico e ART CREA-SP para aprovação no AVCB.",
  introP2: "Processo completo: diagnóstico das saídas de emergência, fornecimento de barras certificadas INMETRO, instalação técnica e laudo com ART. Orçamento gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Porta Corta-Fogo", href: "/manutencao-porta-corta-fogo-sp" },
    { label: "Instalação de Barra Antipânico" },
  ],
  occupationType: "edificação com saída de emergência",
  h2_principal: {
    heading: "Quando a barra antipânico é obrigatória em SP?",
    body: "A IT 11/25 do CBPMESP e a NBR 11785 determinam que toda porta de saída de emergência com capacidade de passagem simultânea de mais de 50 pessoas deve ter dispositivo antipânico certificado. Na prática, isso inclui todas as saídas de escadas de emergência em edifícios residenciais acima de 12 m, edifícios comerciais, shoppings, hotéis, hospitais, galpões e locais de reunião de público.",
    body2: "A barra antipânico deve abrir a porta com pressão de até 67 N aplicada sobre o elemento de atuação — sem necessidade de girar maçaneta ou usar chave. Em caso de pânico, qualquer pessoa empurrada contra a porta consegue abri-la. Barras que travam, enferrujam ou exigem mais força estão em não conformidade com a NBR 11785.",
  },
  h2_riscos: {
    heading: "Situações que exigem instalação ou troca de barra antipânico",
    intro: "Esses são os 6 cenários mais frequentes que levam à exigência de instalação de barra antipânico pelo CBPMESP.",
    itens: [
      { titulo: "Saída de emergência sem nenhum dispositivo antipânico", desc: "Porta de escada ou saída de emergência com maçaneta comum ou tranca é reprovação imediata. A NBR 11785 é clara: portas com fluxo acima de 50 pessoas exigem barra antipânico certificada." },
      { titulo: "Barra antipânico sem certificação INMETRO", desc: "Barras importadas sem certificação nacional ou fabricadas fora do padrão INMETRO não são aceitas pelo CBPMESP. O laudo deve referenciar o certificado de conformidade da barra instalada." },
      { titulo: "Barra que não abre de dentro", desc: "A barra antipânico deve abrir a porta pelo lado interno com simples pressão. Barras que travam, exigem chave ou não operam pelo acionamento de pressão estão em desacordo com a norma." },
      { titulo: "Barra sem abertura pelo lado externo", desc: "Em portas que precisam de acesso dos dois lados (como acesso de serviço), a barra antipânico deve ter cilindro externo com chave. Portas sem essa configuração onde o acesso externo é necessário geram autuação." },
      { titulo: "Barra enferrujada ou com acionamento travado", desc: "Barras em ambientes com umidade elevada (garagens, áreas externas) oxidam e travam. A barra inoperante é reprovação imediata — e risco real em emergência." },
      { titulo: "Barra instalada em altura incorreta", desc: "A NBR 11785 define a altura de instalação do elemento de atuação entre 900 mm e 1.100 mm do piso. Barras instaladas fora dessa faixa geram exigência técnica específica na vistoria." },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 instala barra antipânico",
    etapas: [
      { numero: "ETAPA 01", titulo: "Diagnóstico das saídas de emergência", desc: "Levantamento de todas as saídas de emergência com checklist conforme IT 11/25 e NBR 11785: quantidade de pessoas por rota, tipo de porta, dimensão do vão e situação atual do dispositivo." },
      { numero: "ETAPA 02", titulo: "Definição do modelo adequado", desc: "Seleção do modelo de barra antipânico conforme o tipo de porta (corta-fogo, ferro, madeira, vidro), necessidade de abertura pelo lado externo, dimensão do vão e certificação INMETRO." },
      { numero: "ETAPA 03", titulo: "Fornecimento de barras certificadas", desc: "Fornecimento de barras antipânico com certificação INMETRO conforme NBR 11785, com certificado de conformidade do fabricante para cada unidade instalada." },
      { numero: "ETAPA 04", titulo: "Instalação técnica", desc: "Instalação por equipe especializada com posicionamento correto (900–1.100 mm), fixação adequada ao tipo de porta e verificação de funcionamento conforme NBR 11785." },
      { numero: "ETAPA 05", titulo: "Teste de funcionamento", desc: "Teste de abertura pelo lado interno com medição da força de acionamento (máximo 67 N), verificação do lado externo quando aplicável e conferência da sinalização de saída de emergência." },
      { numero: "ETAPA 06", titulo: "Laudo técnico com ART CREA-SP", desc: "Laudo técnico de conformidade das barras antipânico instaladas com ART CREA-SP — aceito pelo CBPMESP para AVCB e por seguradoras." },
    ],
  },
  h2_detalhes: {
    heading: "O que a NBR 11785 exige para dispositivos antipânico",
    body1: "A NBR 11785 classifica os dispositivos antipânico em Tipo A (barra de empurrar horizontal) e Tipo B (barra com braço articulado). Ambos devem abrir a porta com pressão máxima de 67 N e retornar ao estado fechado automaticamente após a liberação.",
    alerta: "Barra antipânico instalada em porta que não é corta-fogo em local que exige porta corta-fogo não resolve o problema — a adequação da porta é necessária em conjunto com a instalação da barra.",
    itens: [
      { titulo: "Força de acionamento máxima: 67 N", desc: "Qualquer barra que exija mais de 67 N para abrir não está em conformidade com a NBR 11785. O teste é realizado com dinamômetro durante a inspeção." },
      { titulo: "Altura de instalação: 900–1.100 mm", desc: "O elemento de atuação (barra de pressão) deve estar entre 900 mm e 1.100 mm do piso conforme NBR 11785. Altura incorreta gera exigência específica." },
      { titulo: "Compatibilidade com porta corta-fogo", desc: "A barra antipânico instalada em porta corta-fogo deve ter certificação INMETRO compatível com a classificação da porta (P-30 ou P-60). Barra não certificada para porta corta-fogo invalida a classificação do conjunto." },
      { titulo: "Cilindro externo opcional", desc: "Quando o acesso pelo lado externo é necessário, a barra deve ter cilindro com chave. Em saídas de emergência puras (sem acesso externo habitual), o cilindro externo não é exigido mas pode ser instalado para controle operacional." },
    ],
    closing: "A DRD2 realiza o diagnóstico gratuito de todas as saídas de emergência, define o modelo correto de barra antipânico e apresenta proposta com fornecimento, instalação e laudo para AVCB.",
  },
  h2_quando: {
    heading: "Quando instalar ou trocar a barra antipânico?",
    body1: "Instalação obrigatória em novas edificações antes do protocolo do AVCB. Troca necessária quando: barra não opera com até 67 N, barra enferrujada ou inoperante, Comunique-se do CBPMESP sobre saídas de emergência ou auditoria de seguradora.",
    body2: "Revisão periódica: a NBR 11785 recomenda verificação semestral do funcionamento das barras antipânico, incluindo medição da força de acionamento.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para instalação de barra antipânico?",
    body1: "A DRD2 instala barras antipânico em condomínios, edifícios comerciais, hospitais, galpões e hotéis em São Paulo. Fornecemos modelos certificados INMETRO compatíveis com portas corta-fogo e emitimos laudo técnico com ART CREA-SP.",
    body2: "Processo completo sem terceiros: diagnóstico, fornecimento, instalação e laudo — responsabilidade técnica unificada.",
  },
  h2_cobertura: {
    heading: "Instalação de barra antipânico em toda a Grande São Paulo",
    body1: "A DRD2 atende edificações em toda a Grande SP: Zona Sul, Zona Norte, Zona Leste, ABC Paulista, Guarulhos, Osasco e Barueri.",
    body2: "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica.",
  },
  faqs: [
    { question: "Qual é a força máxima para acionar a barra antipânico?", answer: "67 N conforme NBR 11785. Qualquer barra que exija mais força está em não conformidade com a norma e será reprovada na vistoria do CBPMESP." },
    { question: "A barra antipânico pode ser instalada em porta de madeira comum?", answer: "Pode tecnicamente, mas se a porta está em local que exige porta corta-fogo (rota de fuga), a porta comum também precisará ser substituída. A barra não substitui a exigência de porta corta-fogo." },
    { question: "Qual a diferença entre barra antipânico Tipo A e Tipo B?", answer: "Tipo A é a barra horizontal clássica (toda a largura da porta). Tipo B tem braço articulado e ocupa menos espaço. Ambos atendem a NBR 11785 — a escolha depende do tipo de porta e da preferência estética." },
    { question: "Preciso de laudo técnico para barra antipânico?", answer: "Sim. O CBPMESP exige laudo técnico com ART comprovando a conformidade das barras antipânico instaladas para o processo de AVCB." },
    { question: "Quanto custa a instalação de barra antipânico?", answer: "O custo depende do número de portas, do modelo de barra e do tipo de porta. A DRD2 apresenta proposta fechada após o diagnóstico gratuito." },
  ],
  linksInternos: [
    { href: "/manutencao-porta-corta-fogo-sp", label: "Manutenção de Porta Corta-Fogo" },
    { href: "/adequacao-porta-corta-fogo-avcb-sp", label: "Adequação de Porta Corta-Fogo para AVCB" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "INSTALAÇÃO DE BARRA ANTIPÂNICO — CERTIFICAÇÃO INMETRO + LAUDO + ART",
    body: "Diagnóstico gratuito das saídas de emergência. Barras certificadas NBR 11785. Laudo técnico com ART CREA-SP para AVCB.",
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
