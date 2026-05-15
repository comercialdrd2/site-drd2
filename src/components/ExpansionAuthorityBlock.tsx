import Link from "next/link";
import { cidadesExpansao } from "@/data/expansao-cidades";
import CtaWhatsApp from "@/components/CtaWhatsApp";

type CityProfile = {
  city: string;
  region: string;
  fireDepartmentContext: string;
  approvalContext: string;
  commonBuildings: string;
  localRisk: string;
  authorityDetail: string;
  complementaryServices: { label: string; href: string; reason: string }[];
};

const cityProfiles: Record<string, CityProfile> = {
  guarulhos: {
    city: "Guarulhos",
    region: "Grande São Paulo",
    fireDepartmentContext:
      "Em Guarulhos, o processo passa pelo sistema estadual do CBPMESP e costuma envolver imóveis logisticos, industriais, comerciais e condomínios de grande porte. A análise técnica precisa considerar acesso de viaturas, reserva de incêndio, recalque, rotas de fuga e compatibilidade entre o projeto aprovado e a ocupação real.",
    approvalContext:
      "Para empresas em Cumbica, Bonsucesso, Centro, Pimentas e regiao do aeroporto, o maior gargalo costuma ser a divergencia entre área construida, atividade exercida e sistemas existentes. Antes do protocolo, a DRD2 confere projeto, ART, laudos, carga de incêndio e documentos do imóvel para reduzir exigencias.",
    commonBuildings:
      "Os casos mais comuns sao galpões na Dutra e no entorno do aeroporto, centros de distribuicao, indústrias leves, supermercados, prédios comerciais e condomínios verticais.",
    localRisk:
      "A combinacao de carga armazenada, docas, fluxo de caminhoes e reformas internas aumenta o risco de hidrantes obstruidos, sprinklers sem cobertura adequada e saidas de emergência bloqueadas por estoque.",
    authorityDetail:
      "A página precisa ser tratada como consulta técnica local: não basta citar Guarulhos; e necessario explicar por que a logistica, a verticalizacao e o uso misto mudam o caminho de aprovação.",
    complementaryServices: [
      { label: "sistema de hidrantes", href: "/hidrantes", reason: "essencial para galpões, condomínios e indústrias com grande área" },
      { label: "sprinklers", href: "/sprinklers", reason: "frequente em armazenagem, risco elevado e áreas amplas" },
      { label: "alarme de incêndio", href: "/alarme-incendio-sao-paulo", reason: "base para abandono rapido e acionamento seguro" },
    ],
  },
  campinas: {
    city: "Campinas",
    region: "Regiao Metropolitana de Campinas",
    fireDepartmentContext:
      "Em Campinas, o AVCB precisa dialogar com um mercado imobiliario e empresarial mais técnico: polos de saude, tecnologia, universidades, restaurantes, condomínios novos e indústrias. A vistoria tende a observar documentação, rotas de fuga, sinalização, sistemas ativos e manutenção dos equipamentos.",
    approvalContext:
      "O ponto critico em Campinas e evitar protocolo com informacao incompleta. Imóveis no Cambui, Guanabara, Taquaral, Barao Geraldo e Mansoes Santo Antonio frequentemente misturam comércio, servicos, residencias e áreas comuns, o que muda enquadramento, lotação e exigencias.",
    commonBuildings:
      "Os casos mais comuns sao clínicas, laboratorios, restaurantes, prédios residenciais altos, escolas, universidades, salas comerciais e pequenos centros de servicos.",
    localRisk:
      "Os riscos recorrentes sao coifas sem laudo, gases sem documentação, portas corta-fogo sem manutenção, alarme sem bateria, sinalização decorativa fora de norma e SPDA vencido.",
    authorityDetail:
      "A forca local vem de diferenciar cada bairro: Cambui tem restaurantes e condomínios de alto padrao; Guanabara tem saude; Barao Geraldo tem educacao e tecnologia; Taquaral e Mansoes concentram verticalizacao.",
    complementaryServices: [
      { label: "laudo de estanqueidade de gas", href: "/laudo-estanqueidade-gas-sao-paulo", reason: "muito comum em restaurantes, escolas, clínicas e condomínios" },
      { label: "alarme de incêndio", href: "/alarme-incendio-sao-paulo", reason: "reduz exigencias por falhas de acionamento e abandono" },
      { label: "SPDA", href: "/spda", reason: "critico em torres residenciais, prédios comerciais e áreas abertas" },
    ],
  },
  santos: {
    city: "Santos",
    region: "Baixada Santista",
    fireDepartmentContext:
      "Em Santos, a regularização de AVCB exige olhar técnico para ambiente litoraneo. Maresia, corrosao, umidade, prédios antigos, hotéis, comércio de praia e operacoes ligadas ao porto mudam a manutenção dos sistemas e o risco de reprovacao.",
    approvalContext:
      "Antes da vistoria, a DRD2 verifica sinais de corrosao em hidrantes, bombas, registros, paineis elétricos, portas corta-fogo, mangueiras e iluminação de emergência. Esse diagnóstico e decisivo porque o sistema pode existir no projeto, mas falhar no teste pratico.",
    commonBuildings:
      "Os casos mais comuns sao condomínios verticais na orla, hotéis, restaurantes, comércios de alto fluxo, prédios historicos, clínicas e edificios corporativos ligados ao porto.",
    localRisk:
      "O maior risco local e o equipamento parecer regular visualmente, mas perder pressão, travar registro ou falhar elétricamente por salitre e oxidacao.",
    authorityDetail:
      "Para Santos, SEO local forte precisa mostrar conhecimento de Gonzaga, Ponta da Praia, Boqueirao, Aparecida, Centro e Embare, porque cada regiao tem perfil de edificação e problema técnico diferente.",
    complementaryServices: [
      { label: "manutenção preventiva", href: "/manutencao", reason: "fundamental contra corrosao, falhas de bomba e perda de pressão" },
      { label: "sistema de hidrantes", href: "/hidrantes", reason: "ponto mais sensivel em prédios altos e na orla" },
      { label: "SPDA", href: "/spda", reason: "necessario para torres expostas e áreas abertas no litoral" },
    ],
  },
};

function normalizeSlug(slug: string) {
  return slug.replace(/^\/?avcb-/, "");
}

function getCityKey(slug: string) {
  const normalized = normalizeSlug(slug);
  if (normalized.startsWith("guarulhos")) return "guarulhos";
  if (normalized.startsWith("campinas")) return "campinas";
  if (normalized.startsWith("santos")) return "santos";
  return "guarulhos";
}

export default function ExpansionAuthorityBlock({ slug }: { slug: string }) {
  const normalized = normalizeSlug(slug);
  const data = cidadesExpansao.find((item) => item.slug === normalized);

  if (!data) return null;

  const profile = cityProfiles[getCityKey(slug)];
  const leadType = `AVCB em ${data.nome} - ${profile.city}`;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-600 mb-4">
            Diagnóstico técnico local
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight mb-6">
            Como aprovar o AVCB em {data.nome}, {profile.city}, sem cair em exigencias evitaveis
          </h2>
          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            Esta página foi estruturada para quem precisa contratar regularização, renovacao ou emissão de AVCB em {data.nome}. O objetivo não e apenas explicar a licença, mas antecipar os pontos que normalmente travam o processo no Corpo de Bombeiros: documentação incompleta, sistemas sem laudo, divergencia de área, mudanca de uso e equipamentos instalados sem manutenção comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <article className="bg-white border border-slate-200 p-7 rounded-lg shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Perfil da regiao</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              {data.nome} esta dentro do contexto de {profile.region}. O perfil predominante e de {data.perfil}. Isso muda a leitura técnica do AVCB porque cada ocupação tem lotação, carga de incêndio, rotas de fuga e sistemas obrigatórios diferentes.
            </p>
          </article>

          <article className="bg-white border border-slate-200 p-7 rounded-lg shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Referencias locais</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              O atendimento considera acessos e eixos conhecidos como {data.avenidas}. Essas referencias ajudam no planejamento da vistoria, na avaliacao de acesso de viaturas, na logistica de visita técnica e no entendimento do tipo de edificação mais comum no entorno.
            </p>
          </article>

          <article className="bg-white border border-slate-200 p-7 rounded-lg shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Risco técnico dominante</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              {data.box} Por isso, antes de protocolar, a auditoria precisa separar o que e falha documental, o que e falha de sistema e o que exige adequação fisica com ART.
            </p>
          </article>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-7 border-b border-slate-200">
              <h3 className="text-2xl font-black text-slate-950">Checklist de exigencias por tipo de imóvel</h3>
              <p className="mt-3 text-slate-600 font-medium">
                A tabela abaixo resume o que costuma ser conferido antes do protocolo. A confirmacao final depende de área, altura, lotação, ocupação, carga de incêndio e historico do projeto aprovado.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="p-4 font-black uppercase">Tipo de edificação</th>
                    <th className="p-4 font-black uppercase">Itens que travam o AVCB</th>
                    <th className="p-4 font-black uppercase">Acao recomendada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Ate 750 m2 e baixo risco</td>
                    <td className="p-4 text-slate-700">Enquadramento incorreto, extintores vencidos, sinalização ausente e documentos divergentes.</td>
                    <td className="p-4 text-slate-700">Validar possibilidade de CLCB, corrigir layout e reunir ARTs antes do envio.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">750 a 2.500 m2</td>
                    <td className="p-4 text-slate-700">Rotas de fuga, iluminação de emergência, alarme, hidrantes e controle de materiais.</td>
                    <td className="p-4 text-slate-700">Fazer vistoria técnica, plano de adequação e teste funcional dos sistemas.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Acima de 2.500 m2 ou risco elevado</td>
                    <td className="p-4 text-slate-700">Projeto desatualizado, carga de incêndio, sprinklers, reserva técnica e laudos vencidos.</td>
                    <td className="p-4 text-slate-700">Revisar projeto técnico, memoriais, ARTs, laudos e cronograma de execução.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="bg-slate-950 text-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-black mb-5">Prazos medios em {profile.city}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              Para imóveis simples, a triagem documental pode ser feita em 24 a 72 horas. Quando ha necessidade de adequação, o prazo real depende de fornecedores, testes e emissão de laudos. Em processos completos, a janela mais comum fica entre 30 e 90 dias.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              {profile.approvalContext}
            </p>
            <CtaWhatsApp
              label={`Analisar meu caso em ${data.nome}`}
              occupationType={leadType}
              variant="primary"
              centered
            />
          </aside>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-black text-slate-950 mb-5">O que torna esta página local de verdade</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-4">
              {profile.fireDepartmentContext}
            </p>
            <p className="text-slate-700 leading-relaxed font-medium mb-4">
              {profile.commonBuildings}
            </p>
            <p className="text-slate-700 leading-relaxed font-medium">
              {profile.authorityDetail}
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-black text-slate-950 mb-5">Servicos conectados ao AVCB</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-5">
              O AVCB raramente e aprovado por um unico documento. Em {data.nome}, a regularização normalmente depende de sistemas complementares funcionando e com laudo atualizado. Por isso esta página se conecta a servicos especificos que resolvem as causas reais de exigencia.
            </p>
            <div className="space-y-4">
              {profile.complementaryServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block border border-slate-200 rounded-lg p-4 hover:border-red-500 hover:bg-red-50 transition-colors"
                >
                  <span className="block text-red-700 font-black uppercase text-sm">{service.label}</span>
                  <span className="block text-slate-700 text-sm mt-1">{service.reason}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-red-50 border border-red-100 p-7 rounded-lg">
          <h3 className="text-xl font-black text-red-950 mb-3">Conclusao técnica para {data.nome}</h3>
          <p className="text-red-950 leading-relaxed font-medium">
            {profile.localRisk} A melhor estrategia e iniciar com diagnóstico presencial ou por documentos, confirmar o enquadramento, corrigir sistemas criticos e so depois protocolar. Esse fluxo reduz retrabalho, evita exigencias previsiveis e melhora a chance de aprovação dentro do prazo comercial que o cliente precisa.
          </p>
        </div>
      </div>
    </section>
  );
}
