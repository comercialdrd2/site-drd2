import Link from "next/link";
import { ArrowRight, Building2, Clock3, MessageCircle, Wallet } from "lucide-react";

type ServiceBlogLinksProps = {
  currentSlug: string;
};

type BlogLink = {
  href: string;
  label: string;
  desc: string;
  kind: "custo" | "renovacao" | "ocupacao";
};

const costLink: BlogLink = {
  href: "/blog/quanto-custa-avcb-em-sao-paulo",
  label: "Quanto custa o AVCB em São Paulo?",
  desc: "Veja preço, prazo, fatores técnicos e o que muda conforme área, risco e ocupação do imóvel.",
  kind: "custo",
};

const gasCostLink: BlogLink = {
  href: "/blog/quanto-custa-teste-de-estanqueidade-de-gas",
  label: "Quanto custa teste de gás?",
  desc: "Veja fatores de custo para condomínio, restaurante, cozinha industrial, GLP, GN, laudo e ART.",
  kind: "custo",
};

const stairCostLink: BlogLink = {
  href: "/quanto-custa-escada-pressurizada-sp",
  label: "Quanto custa escada pressurizada?",
  desc: "Fatores de custo: altura, pavimentos, ocupação, ventilador, dutos e regularização para AVCB.",
  kind: "custo",
};

const renewalLink: BlogLink = {
  href: "/blog/avcb-vencido-o-que-fazer",
  label: "AVCB vencido ou perto de vencer?",
  desc: "Entenda como renovar, evitar multa, reduzir risco de interdição e manter a licença regular.",
  kind: "renovacao",
};

const occupationLinks: Array<{ match: RegExp; link: BlogLink }> = [
  {
    match: /escada|pressurizada|pressurizacao|pressurização|enclausurada/,
    link: {
      href: "/regularizacao-escada-incendio",
      label: "Regularizar escada de incêndio",
      desc: "Entenda adequação de escada, rota de fuga, sistema de pressurização e exigências dos Bombeiros.",
      kind: "ocupacao",
    },
  },
  {
    match: /estanqueidade|gas|gás|glp|gn|cozinha-industrial|central-de-gas|central-de-gás/,
    link: {
      href: "/blog/o-que-e-teste-de-estanqueidade-de-gas-condominios",
      label: "Teste de gás em condomínio",
      desc: "Entenda laudo de gás, rede predial, risco de vazamento e relação com AVCB e segurança do síndico.",
      kind: "ocupacao",
    },
  },
  {
    match: /restaurante|bar|bares|cozinha|lanchonete/,
    link: {
      href: "/blog/avcb-para-restaurante-em-sp-como-regularizar-em-2026",
      label: "AVCB para restaurante em SP",
      desc: "Exigências para GLP, coifa, extintor Classe K, rotas de fuga e aprovação no Corpo de Bombeiros.",
      kind: "ocupacao",
    },
  },
  {
    match: /condominio|condomínio|sindico|síndico/,
    link: {
      href: "/blog/como-regularizar-condominio-corpo-de-bombeiros",
      label: "Como regularizar condomínio",
      desc: "Guia para síndicos sobre responsabilidade, vistoria, renovação e aprovação do AVCB do prédio.",
      kind: "ocupacao",
    },
  },
  {
    match: /galpao|galpão|industrial|industria|indústria/,
    link: {
      href: "/blog/como-tirar-avcb-galpao-industrial-sp",
      label: "AVCB para galpão industrial",
      desc: "Carga de incêndio, hidrantes, alarme, projeto técnico e riscos que travam a vistoria.",
      kind: "ocupacao",
    },
  },
  {
    match: /veterinario|veterinaria|pet-shop|petshop|pet/,
    link: {
      href: "/avcb-clinica-hospital-veterinario-sao-paulo",
      label: "AVCB para clinica veterinaria",
      desc: "Enquadramento H-1, pet shop com veterinario, hospital veterinario, banho e tosa, internacao e rotas.",
      kind: "ocupacao",
    },
  },
  {
    match: /estacionamento|garagem|rotativo|edificio-garagem/,
    link: {
      href: "/avcb-estacionamento-garagem-sao-paulo",
      label: "AVCB para estacionamento",
      desc: "Grupo G, garagem comercial, subsolo, rotas de pedestres, sinalizacao, extintores e sistemas exigidos.",
      kind: "ocupacao",
    },
  },
  {
    match: /clinica|clínica|hospital|consultorio|consultório|odontologico|odontológico|medico|médico/,
    link: {
      href: "/blog/requisitos-avcb-clinica-medica-sao-paulo",
      label: "AVCB para clínica e consultório",
      desc: "Exigências para saúde, evacuação assistida, sinalização, laudos e responsabilidade técnica.",
      kind: "ocupacao",
    },
  },
  {
    match: /creche/,
    link: {
      href: "/blog/avcb-para-creche-sao-paulo",
      label: "AVCB para creche",
      desc: "Rotas de fuga, crianças, sinalização, brigada e cuidados técnicos para aprovação.",
      kind: "ocupacao",
    },
  },
  {
    match: /escola|faculdade|ensino/,
    link: {
      href: "/blog/alarme-incendio-escola-faculdade-obrigatorio-sp",
      label: "Segurança contra incêndio em escola",
      desc: "Alarme, abandono, brigada, sinalização e exigências para instituições de ensino.",
      kind: "ocupacao",
    },
  },
  {
    match: /casa-de-repouso|repouso|ilpi|idoso/,
    link: {
      href: "/blog/avcb-para-casa-de-repouso-sao-paulo",
      label: "AVCB para casa de repouso",
      desc: "Ocupação H-3, idosos, evacuação assistida, gerenciamento de risco e Vigilância Sanitária.",
      kind: "ocupacao",
    },
  },
  {
    match: /academia|esporte|fitness/,
    link: {
      href: "/blog/avcb-para-academia-sao-paulo",
      label: "AVCB para academia",
      desc: "Exigências para academias, fluxo de alunos, saídas, lotação, sinalização e regularização.",
      kind: "ocupacao",
    },
  },
  {
    match: /farmacia|farmácia|drogaria/,
    link: {
      href: "/blog/avcb-para-farmacia-drogaria-sao-paulo",
      label: "AVCB para farmácia e drogaria",
      desc: "Regularização para funcionamento, estoque, atendimento ao público e exigências de licença.",
      kind: "ocupacao",
    },
  },
  {
    match: /padaria/,
    link: {
      href: "/blog/avcb-para-padaria-sao-paulo",
      label: "AVCB para padaria",
      desc: "Forno, GLP, exaustão, extintores, sinalização e cuidados para evitar reprovação.",
      kind: "ocupacao",
    },
  },
  {
    match: /supermercado|mercado/,
    link: {
      href: "/blog/avcb-para-supermercado-sao-paulo",
      label: "AVCB para supermercado",
      desc: "Área de venda, estoque, câmaras, GLP, rotas de fuga e sistemas exigidos na vistoria.",
      kind: "ocupacao",
    },
  },
  {
    match: /posto-combustivel|posto-de-combustivel|combustivel|combustível/,
    link: {
      href: "/blog/avcb-para-posto-combustivel-sao-paulo",
      label: "AVCB para posto de combustível",
      desc: "Risco inflamável, áreas classificadas, laudos, sinalização e aprovação com segurança.",
      kind: "ocupacao",
    },
  },
  {
    match: /igreja|templo|religioso/,
    link: {
      href: "/blog/avcb-para-igreja-sao-paulo",
      label: "AVCB para igreja",
      desc: "Reunião de público, lotação, saídas de emergência, brigada e regularização do templo.",
      kind: "ocupacao",
    },
  },
  {
    match: /hotel|pousada|hostel/,
    link: {
      href: "/blog/avcb-para-hotel-pousada-sao-paulo",
      label: "AVCB para hotel e pousada",
      desc: "Hospedagem, quartos, rotas de fuga, alarme, iluminação e responsabilidade do operador.",
      kind: "ocupacao",
    },
  },
  {
    match: /casa-noturna|boate|motel/,
    link: {
      href: "/blog/avcb-para-casa-noturna-boate-sao-paulo",
      label: "AVCB para casa noturna e boate",
      desc: "Lotação, controle de público, saídas, alarme, sinalização e risco de interdição.",
      kind: "ocupacao",
    },
  },
  {
    match: /shopping/,
    link: {
      href: "/blog/avcb-para-shopping-sao-paulo",
      label: "AVCB para shopping",
      desc: "Áreas comuns, lojas, praça de alimentação, sistemas integrados e gestão de risco.",
      kind: "ocupacao",
    },
  },
  {
    match: /salao-de-festas|salão-de-festas|festa|eventos/,
    link: {
      href: "/blog/avcb-para-salao-de-festas-sao-paulo",
      label: "AVCB para salão de festas",
      desc: "Lotação, eventos, saídas, sinalização, iluminação de emergência e aprovação técnica.",
      kind: "ocupacao",
    },
  },
  {
    match: /escritorio|escritório|comercial|sala-comercial|loja/,
    link: {
      href: "/blog/avcb-para-escritorio-sala-comercial-sao-paulo",
      label: "AVCB para escritório e sala comercial",
      desc: "Regularização para locação, licença de funcionamento, CLCB ou AVCB e vistoria.",
      kind: "ocupacao",
    },
  },
];

const defaultOccupationLink: BlogLink = {
  href: "/blog/quem-precisa-de-avcb",
  label: "Quem precisa de AVCB?",
  desc: "Veja quais imóveis precisam de AVCB ou CLCB e como identificar a exigência correta.",
  kind: "ocupacao",
};

const ptotepGuideLinks: BlogLink[] = [
  {
    href: "/blog/quanto-custa-ptotep-para-evento",
    label: "Quanto custa PTOTEP?",
    desc: "Entenda o que muda o preco conforme evento, publico, montagem, ART, documentos e prazo.",
    kind: "custo",
  },
  {
    href: "/blog/prazo-aprovacao-bombeiros-evento-ptotep",
    label: "Prazo de aprovacao para evento",
    desc: "Veja como organizar cronograma, protocolo, montagem e documentos antes da data do evento.",
    kind: "renovacao",
  },
  {
    href: "/blog/documentos-necessarios-para-ptotep-evento",
    label: "Documentos necessarios para PTOTEP",
    desc: "Checklist de licenca do local, layout, ART/RRT, memorial, eletrica, GLP, gerador e brigada.",
    kind: "ocupacao",
  },
  {
    href: "/blog/diferenca-entre-avcb-e-ptotep-eventos",
    label: "Diferenca entre AVCB e PTOTEP",
    desc: "Entenda quando o AVCB do local nao basta e quando o evento precisa de projeto temporario.",
    kind: "ocupacao",
  },
  {
    href: "/blog/o-que-e-ptotep-quando-evento-precisa",
    label: "Quando precisa de ocupacao temporaria?",
    desc: "Sinais de alerta: palco, stand, shopping, fila, GLP, gerador, controle de acesso e grande publico.",
    kind: "ocupacao",
  },
];

const iconByKind = {
  custo: Wallet,
  renovacao: Clock3,
  ocupacao: Building2,
};

function normalizeSlug(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getOccupationLink(currentSlug: string) {
  const normalizedSlug = normalizeSlug(currentSlug);
  return occupationLinks.find(({ match }) => match.test(normalizedSlug))?.link ?? defaultOccupationLink;
}

function getLinks(currentSlug: string) {
  const normalizedSlug = normalizeSlug(currentSlug);

  if (
    /ptotep|ocupacao-temporaria|aprovacao-bombeiros-evento|avcb-para-feira|avcb-para-show|avcb-para-exposicao|avcb-para-evento/.test(
      normalizedSlug,
    )
  ) {
    return ptotepGuideLinks.filter((link) => normalizeSlug(link.href) !== normalizedSlug);
  }
  if (/veterinario|veterinaria|pet-shop|petshop|pet/.test(normalizedSlug)) {
    return [
      costLink,
      renewalLink,
      {
        href: "/avcb-hospital-clinica-sao-paulo",
        label: "AVCB para clinicas de saude",
        desc: "Compare exigencias de clinicas, hospitais, consultorios e unidades com atendimento especializado.",
        kind: "ocupacao" as const,
      },
    ];
  }

  if (/estacionamento|garagem|rotativo|edificio-garagem/.test(normalizedSlug)) {
    return [
      costLink,
      renewalLink,
      {
        href: "/avcb-condominio-sao-paulo",
        label: "AVCB para garagem de condominio",
        desc: "Entenda quando a garagem entra no AVCB do condominio e quando precisa de analise propria.",
        kind: "ocupacao" as const,
      },
    ];
  }

  if (/estanqueidade|gas|gás|glp|gn|cozinha-industrial|central-de-gas|central-de-gás/.test(normalizedSlug)) {
    const seen = new Set<string>([currentSlug]);
    return [
      gasCostLink,
      {
        href: "/blog/vazamento-de-gas-em-predios-causas-como-evitar",
        label: "Vazamento de gás em prédios",
        desc: "Veja causas, sinais de alerta e como evitar acidentes com inspeção e laudo técnico.",
        kind: "renovacao" as const,
      },
      getOccupationLink(currentSlug),
    ].filter((link) => {
      if (seen.has(link.href)) return false;
      seen.add(link.href);
      return true;
    });
  }

  if (/escada|pressurizada|pressurizacao|pressurização|enclausurada/.test(normalizedSlug)) {
    const seen = new Set<string>([currentSlug]);
    return [
      stairCostLink,
      {
        href: "/escada-pressurizada-obrigatoria-avcb-sp",
        label: "Escada pressurizada é obrigatória?",
        desc: "Entenda quando a pressurização é exigida pelo Corpo de Bombeiros e o que acontece sem ela.",
        kind: "renovacao" as const,
      },
      getOccupationLink(currentSlug),
    ].filter((link) => {
      if (seen.has(link.href)) return false;
      seen.add(link.href);
      return true;
    });
  }

  const seen = new Set<string>([currentSlug]);
  return [costLink, renewalLink, getOccupationLink(currentSlug)].filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

export default function ServiceBlogLinks({ currentSlug }: ServiceBlogLinksProps) {
  const links = getLinks(currentSlug);

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
          <div>
            <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
              Guias técnicos
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">
              Artigos úteis para regularizar seu imóvel
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-2xl">
            Conteúdo selecionado para tirar dúvidas sobre custo, renovação de AVCB e exigências específicas do seu tipo de ocupação antes de falar com o engenheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((link) => {
            const Icon = iconByKind[link.kind];
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-slate-50 border border-slate-200 hover:bg-white hover:border-red-500 rounded-2xl p-5 flex items-start gap-4 transition-all shadow-sm hover:shadow-lg"
              >
                <span className="w-11 h-11 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-slate-950 font-black uppercase italic tracking-tight leading-tight">
                    {link.label}
                  </span>
                  <span className="block mt-2 text-sm text-slate-500 font-medium leading-relaxed">
                    {link.desc}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 ml-auto mt-1 text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950 text-white rounded-2xl p-5 border border-slate-800">
          <p className="text-sm md:text-base font-semibold text-slate-200 leading-relaxed">
            Precisa transformar a dúvida em regularização? Um engenheiro da DRD2 avalia custo, prazo, renovação e exigências do Corpo de Bombeiros para o seu imóvel.
          </p>
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com engenheiro
          </Link>
        </div>
      </div>
    </section>
  );
}
