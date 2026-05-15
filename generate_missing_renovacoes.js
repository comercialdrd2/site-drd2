const fs = require('fs');
const path = require('path');

const targets = [
  { slug: "bares-restaurantes", name: "Bares e Restaurantes", keyword: "bares e restaurantes", badge: "GRUPO F-8 — LOCAIS DE REFEIÇÃO — RENOVAÇÃO 2026", pain: "Bares e restaurantes com AVCB vencido em São Paulo correm risco imediato de interdição pelo PSIU e Vigilância Sanitária, além de multas pesadas. Coifas sem manutenção e centrais de GLP desatualizadas são as principais causas de reprovação.", iconGroup: "ShoppingBag" },
  { slug: "salao-de-festas", name: "Salões de Festas", keyword: "salões de festas e eventos", badge: "GRUPO F-3 — CENTROS ESPORTIVOS E EVENTOS — RENOVAÇÃO 2026", pain: "Salões de festas sem AVCB válido não podem obter alvará para eventos. O risco de embargo durante uma festa é altíssimo, gerando processos judiciais. Falhas em saídas de emergência e rotas de fuga são os maiores motivos de Comunique-se.", iconGroup: "Building2" },
  { slug: "pousada", name: "Pousadas", keyword: "pousadas", badge: "GRUPO B-1 — HOSPEDAGEM — RENOVAÇÃO 2026", pain: "Pousadas com AVCB vencido perdem credibilidade nas plataformas de reserva e ficam suscetíveis a interdições da prefeitura. Falta de manutenção em detectores de fumaça e extintores é a principal falha na vistoria.", iconGroup: "Building2" },
  { slug: "posto-combustivel", name: "Postos de Combustível", keyword: "postos de combustível", badge: "GRUPO G-3 — COMÉRCIO DE DERIVADOS — RENOVAÇÃO 2026", pain: "Postos de combustível operam com altíssimo risco de inflamáveis. AVCB vencido significa interdição imediata pela ANP e CETESB. Projetos de espuma desatualizados e laudos de estanqueidade vencidos travam o processo.", iconGroup: "Zap" },
  { slug: "creche", name: "Creches", keyword: "creches e escolas infantis", badge: "GRUPO E-1 — ESCOLAS E CRECHES — RENOVAÇÃO 2026", pain: "Creches sem AVCB válido podem ser fechadas pela Secretaria de Educação. A segurança de crianças pequenas exige rigor extremo em rotas de fuga, corrimãos e brigada de incêndio.", iconGroup: "Users" },
  { slug: "escritorio", name: "Escritórios Corporativos", keyword: "escritórios corporativos", badge: "GRUPO D-1 — LOCAIS PARA PRESTAÇÃO DE SERVIÇOS — RENOVAÇÃO 2026", pain: "Escritórios com AVCB vencido enfrentam problemas com seguradoras e laudos prediais. Muitas vezes as adequações internas não refletem o projeto do condomínio, gerando conflitos no CBPMESP.", iconGroup: "LayoutGrid" },
  { slug: "padaria", name: "Padarias", keyword: "padarias e confeitarias", badge: "GRUPO C-1 — COMÉRCIO VAREJISTA — RENOVAÇÃO 2026", pain: "Padarias utilizam grandes centrais de gás (GLP) ou gás natural. O AVCB vencido pode paralisar a produção e fechar as portas. A principal causa de recusa é o laudo de estanqueidade do gás.", iconGroup: "ShoppingBag" },
  { slug: "shopping", name: "Shoppings", keyword: "shoppings e centros comerciais", badge: "GRUPO C-3 — SHOPPING CENTERS — RENOVAÇÃO 2026", pain: "Shoppings sem AVCB regularizado enfrentam multas milionárias e perda do seguro patrimonial. A complexidade do sistema de sprinklers, alarmes e extração de fumaça exige engenharia especializada.", iconGroup: "Building2" },
  { slug: "consultorio-medico", name: "Consultórios Médicos", keyword: "consultórios médicos e clínicas", badge: "GRUPO H-2 — ASILOS E CLÍNICAS — RENOVAÇÃO 2026", pain: "Consultórios e clínicas dependem da aprovação da Vigilância Sanitária (LTA/CMVS), que exige AVCB ativo. Oxigênio e equipamentos de risco devem constar em projeto atualizado.", iconGroup: "Stethoscope" }
];

const generateData = (target) => {
  return "export const renovacaoAvcbContent = {\n" +
  "  meta: {\n" +
  "    title: \"Renovação de AVCB para " + target.name + " em São Paulo | DRD2 Engenharia\",\n" +
  "    description: \"" + target.pain.substring(0, 150) + "... DRD2 Engenharia renova com agilidade.\",\n" +
  "    canonical: \"/renovacao-avcb-" + target.slug + "-sao-paulo\",\n" +
  "  },\n" +
  "  badge: \"" + target.badge + "\",\n" +
  "  h1: \"Renovação de AVCB para " + target.name + " em São Paulo\",\n" +
  "  intro: [\n" +
  "    \"<strong>" + target.name + " com AVCB vencido em São Paulo</strong> correm sérios riscos. " + target.pain + "<br/><br/>📲 <strong>Evite multas e interdições.</strong> Fale agora com um engenheiro: <a href='https://wa.me/5511993206900' class='text-green-600 font-bold underline'>Chamar no WhatsApp</a>\",\n" +
  "    \"A <strong>DRD2 Engenharia</strong> executa a renovação completa do projeto à instalação — levantamento técnico, atualização da documentação, adequação dos sistemas e aprovação junto ao Corpo de Bombeiros, com resposta incluída a qualquer Comunique-se, sem custo adicional.\"\n" +
  "  ],\n" +
  "  sections: [\n" +
  "    {\n" +
  "      title: \"Por que a renovação do AVCB para " + target.keyword + " tem prazo crítico\",\n" +
  "      content: [\n" +
  "        \"Estabelecimentos do tipo " + target.keyword + " operam sob fiscalização permanente. O AVCB válido é condição obrigatória para a renovação de alvarás de funcionamento.\",\n" +
  "        \"Na prática, isso significa que operar com AVCB vencido bloqueia a renovação de outros documentos e expõe a empresa. O prazo crítico para iniciar o processo de renovação é de <strong>60 a 90 dias antes do vencimento</strong>.\"\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      title: \"Principais motivos de Comunique-se na renovação de AVCB\",\n" +
  "      content: [\n" +
  "        \"<strong>Layout desatualizado</strong>: Reformas internas sem atualização da planta geram inconsistência entre o projeto aprovado e o estado atual do estabelecimento.\",\n" +
  "        \"<strong>Laudos de manutenção vencidos</strong>: Os laudos de manutenção de extintores, hidrantes e sistemas de detecção têm validade definida. Documentação vencida paralisa o processo.\",\n" +
  "        \"<strong>Brigada sem treinamento atualizado</strong>: Certificado de treinamento vencido é causa frequente de Comunique-se em renovações de estabelecimentos de médio porte.\"\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      title: \"Instruções Técnicas aplicáveis à renovação\",\n" +
  "      content: [\n" +
  "        \"<strong>IT-02/2019</strong>: Enquadramento e carga de incêndio aplicáveis.\",\n" +
  "        \"<strong>IT-17 — Brigada de Incêndio</strong>: documentação de treinamento atualizada obrigatória.\",\n" +
  "        \"<strong>IT-20 e IT-21</strong>: Detecção, alarme e hidrantes (se aplicável ao porte).\"\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      title: \"Unidades em Galerias e Edifícios Comerciais\",\n" +
  "      content: [\n" +
  "        \"Locais em galerias comerciais ou prédios têm uma camada adicional de complexidade: além das obrigações da unidade, é necessário verificar a situação do AVCB da edificação matriz.\",\n" +
  "        \"A <strong>DRD2 Engenharia</strong> conhece os procedimentos do CBPMESP para edificações mistas e orienta sobre o caminho mais eficiente para a aprovação.\"\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      title: \"O que a DRD2 Engenharia entrega na renovação\",\n" +
  "      content: [\n" +
  "        \"<strong>Vistoria técnica presencial</strong>: Levantamento in loco do estado atual.\",\n" +
  "        \"<strong>Atualização técnica</strong>: Revisão completa da documentação técnica e memoriais.\",\n" +
  "        \"<strong>Verificação e coordenação dos laudos</strong>: Identificação e gestão dos laudos vencidos.\",\n" +
  "        \"<strong>Protocolo e aprovação no CBPMESP</strong>: Acompanhamento até a emissão do AVCB.\"\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      title: \"Prazo de validade do AVCB\",\n" +
  "      content: [\n" +
  "        \"O AVCB em São Paulo tem validade definida pelo Decreto Estadual nº 69.118/2024. Após o vencimento o estabelecimento entra em situação irregular.\"\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  faq: [\n" +
  "    {\n" +
  "      question: \"O AVCB vencido impede a renovação do alvará?\",\n" +
  "      answer: \"Sim. A prefeitura e outros órgãos exigem AVCB válido como condição para renovação.\"\n" +
  "    },\n" +
  "    {\n" +
  "      question: \"Qual o prazo para renovar o AVCB em São Paulo?\",\n" +
  "      answer: \"O prazo médio é de 30 a 90 dias. O processo deve ser iniciado com 60 a 90 dias de antecedência.\"\n" +
  "    },\n" +
  "    {\n" +
  "      question: \"A DRD2 responde Comunique-se sem custo adicional?\",\n" +
  "      answer: \"Sim. Qualquer exigência técnica emitida pelo Corpo de Bombeiros durante o processo é respondida pela DRD2 sem custo adicional para o cliente.\"\n" +
  "    }\n" +
  "  ]\n" +
  "};\n";
};

const generatePage = (target) => {
  return "import Link from \"next/link\";\n" +
  "import Image from \"next/image\";\n" +
  "import {\n" +
  "  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,\n" +
  "  ShieldX, AlertTriangle, MapPin, Building2, Stethoscope, Pills, ShoppingBag,\n" +
  "  ClipboardList, Hammer, LayoutGrid, Clock, Users, Zap\n" +
  "} from \"lucide-react\";\n" +
  "import { JsonLD, generateMasterSchema } from \"@/components/JsonLD\";\n" +
  "import LeadForm from \"@/components/LeadForm\";\n" +
  "import TrustBar from \"@/components/TrustBar\";\n" +
  "import CtaWhatsApp from \"@/components/CtaWhatsApp\";\n" +
  "import BreadcrumbNav from \"@/components/BreadcrumbNav\";\n" +
  "import { renovacaoAvcbContent as c } from \"@/data/pages/renovacao-avcb-" + target.slug + "-sao-paulo\";\n\n" +
  "export const metadata = {\n" +
  "  title: c.meta.title,\n" +
  "  description: c.meta.description,\n" +
  "  alternates: {\n" +
  "    canonical: c.meta.canonical,\n" +
  "  },\n" +
  "};\n\n" +
  "export default function RenovacaoAVCBPage() {\n" +
  "  const whatsappLink = \"https://wa.me/\" + process.env.NEXT_PUBLIC_WHATSAPP;\n\n" +
  "  return (\n" +
  "    <>\n" +
  "      <JsonLD schema={generateMasterSchema({\n" +
  "        slug: \"/renovacao-avcb-" + target.slug + "-sao-paulo\",\n" +
  "        title: c.meta.title,\n" +
  "        description: c.meta.description,\n" +
  "        serviceName: \"Renovação de AVCB para " + target.name + " em São Paulo\",\n" +
  "        faqs: c.faq.map((f) => ({ question: f.question, answer: f.answer })),\n" +
  "        breadcrumbs: [\n" +
  "          { name: \"Home\", item: \"/\" },\n" +
  "          { name: \"Serviços\", item: \"/servicos\" },\n" +
  "          { name: \"Renovação de AVCB para " + target.name + "\", item: \"/renovacao-avcb-" + target.slug + "-sao-paulo\" },\n" +
  "        ],\n" +
  "      })} />\n\n" +
  "      <section className=\"relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-900 border-b-8 border-red-600\">\n" +
  "        <div className=\"absolute inset-0 bg-slate-900\"></div>\n" +
  "        <div className=\"absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent\" />\n" +
  "        \n" +
  "        <div className=\"relative z-10 container mx-auto px-4 max-w-6xl w-full\">\n" +
  "          <div className=\"lg:w-3/5\">\n" +
  "            <span className=\"inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20\">\n" +
  "              {c.badge}\n" +
  "            </span>\n" +
  "            <h1 className=\"text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col\">\n" +
  "              <span className=\"text-white\">RENOVAÇÃO DE AVCB</span>\n" +
  "              <span className=\"text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl\">\n" +
  "                PARA " + target.name.toUpperCase() + " EM SP\n" +
  "              </span>\n" +
  "            </h1>\n" +
  "            <div className=\"mb-4\">\n" +
  "                <p className=\"text-base md:text-lg text-gray-200 leading-relaxed font-medium max-w-2xl text-balance border-l-4 border-red-600 pl-6 py-1\" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />\n" +
  "            </div>\n" +
  "            <div className=\"block mt-4\">\n" +
  "              <a \n" +
  "                href={whatsappLink} \n" +
  "                className=\"cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity\"\n" +
  "              >\n" +
  "                <Phone className=\"w-5 h-5 flex-shrink-0\" /> \n" +
  "                <span className=\"sm:whitespace-nowrap font-black\">FALAR COM ENGENHEIRO AGORA</span>\n" +
  "              </a>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n\n" +
  "      <BreadcrumbNav\n" +
  "        items={[\n" +
  "          { label: \"Home\", href: \"/\" },\n" +
  "          { label: \"Serviços\", href: \"/servicos\" },\n" +
  "          { label: \"Renovação de AVCB para " + target.name + "\" },\n" +
  "        ]}\n" +
  "        dark\n" +
  "      />\n" +
  "      <TrustBar dark />\n\n" +
  "      <section className=\"py-16 bg-white border-b border-slate-100\">\n" +
  "        <div className=\"container mx-auto px-4 max-w-4xl text-center text-balance\">\n" +
  "            <div className=\"space-y-6 text-lg md:text-xl text-slate-700 font-medium leading-relaxed\">\n" +
  "                <p dangerouslySetInnerHTML={{ __html: c.intro[1] }} />\n" +
  "            </div>\n" +
  "        </div>\n" +
  "      </section>\n\n" +
  "      <section className=\"py-24 bg-white\">\n" +
  "        <div className=\"container mx-auto px-4 max-w-6xl text-balance\">\n" +
  "          <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-16 items-start\">\n" +
  "            <div className=\"lg:col-span-7\">\n" +
  "              <h2 className=\"text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic\">\n" +
  "                {c.sections[0].title}\n" +
  "              </h2>\n" +
  "              <div className=\"space-y-6 text-lg text-slate-700 leading-relaxed font-medium\">\n" +
  "                {c.sections[0].content.map((p, i) => (\n" +
  "                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />\n" +
  "                ))}\n" +
  "              </div>\n" +
  "            </div>\n\n" +
  "            <div className=\"lg:col-span-5 w-full\">\n" +
  "              <div className=\"bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full text-balance\">\n" +
  "                <h3 className=\"text-2xl font-black text-slate-900 mb-6 italic leading-tight\">\n" +
  "                  Regularize hoje mesmo\n" +
  "                </h3>\n" +
  "                <LeadForm variant=\"compact\" />\n" +
  "              </div>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n\n" +
  "      <section className=\"py-24 bg-slate-950 text-white relative overflow-hidden\">\n" +
  "        <div className=\"absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2\" />\n" +
  "        <div className=\"container mx-auto px-4 max-w-6xl relative z-10\">\n" +
  "          <div className=\"text-center mb-16\">\n" +
  "            <h2 className=\"text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none\" dangerouslySetInnerHTML={{ __html: c.sections[1].title }} />\n" +
  "          </div>\n" +
  "          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">\n" +
  "            {c.sections[1].content.map((item, i) => (\n" +
  "              <div key={i} className=\"bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group\">\n" +
  "                <div className=\"flex items-start gap-5\">\n" +
  "                  <div className=\"w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0\">\n" +
  "                    <ShieldAlert className=\"w-6 h-6 text-white\" />\n" +
  "                  </div>\n" +
  "                  <div>\n" +
  "                    <p className=\"text-white font-black text-lg mb-2 italic uppercase tracking-tight leading-tight\" dangerouslySetInnerHTML={{ __html: item.includes(': ') ? item.split(': ')[0] : item }} />\n" +
  "                    {item.includes(': ') && (\n" +
  "                        <p className=\"text-slate-400 font-medium leading-relaxed text-sm italic\" dangerouslySetInnerHTML={{ __html: item.split(': ')[1] }} />\n" +
  "                    )}\n" +
  "                  </div>\n" +
  "                </div>\n" +
  "              </div>\n" +
  "            ))}\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n\n" +
  "      <div className=\"py-16 bg-[#7F1D1D] border-y border-red-900\">\n" +
  "        <div className=\"container mx-auto px-4 max-w-4xl text-center\">\n" +
  "          <p className=\"text-white text-lg font-black uppercase italic tracking-tight mb-6\">\n" +
  "            Não arrisque a interdição do seu negócio. Fale agora com a DRD2 Engenharia.\n" +
  "          </p>\n" +
  "          <CtaWhatsApp\n" +
  "            label=\"Solicitar vistoria diagnóstica gratuita\"\n" +
  "            occupationType=\"" + target.slug + "\"\n" +
  "            variant=\"primary\"\n" +
  "            centered\n" +
  "          />\n" +
  "        </div>\n" +
  "      </div>\n\n" +
  "      <section className=\"py-24 bg-white\">\n" +
  "        <div className=\"container mx-auto px-4 max-w-6xl\">\n" +
  "          <div className=\"text-center mb-16\">\n" +
  "            <h2 className=\"text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none\" dangerouslySetInnerHTML={{ __html: c.sections[2].title }} />\n" +
  "          </div>\n" +
  "          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">\n" +
  "            {c.sections[2].content.map((p, i) => (\n" +
  "              <div key={i} className=\"bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all\">\n" +
  "                <div className=\"flex items-start gap-4\">\n" +
  "                  <div className=\"w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0\">\n" +
  "                    <CheckCircle2 className=\"w-5 h-5 text-white\" />\n" +
  "                  </div>\n" +
  "                  <div>\n" +
  "                    <p className=\"text-slate-900 font-black text-base mb-1 italic uppercase tracking-tight leading-tight\" dangerouslySetInnerHTML={{ __html: p.includes(': ') ? p.split(': ')[0] : p }} />\n" +
  "                    {p.includes(': ') && (\n" +
  "                        <p className=\"text-slate-600 font-medium leading-relaxed text-sm italic\" dangerouslySetInnerHTML={{ __html: p.split(': ')[1] }} />\n" +
  "                    )}\n" +
  "                  </div>\n" +
  "                </div>\n" +
  "              </div>\n" +
  "            ))}\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n" +
  "    </>\n" +
  "  );\n" +
  "}\n";
};

targets.forEach(target => {
  const dataDir = path.join(__dirname, 'src', 'data', 'pages');
  const appDir = path.join(__dirname, 'src', 'app', "renovacao-avcb-" + target.slug + "-sao-paulo");
  
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

  const dataFile = path.join(dataDir, "renovacao-avcb-" + target.slug + "-sao-paulo.ts");
  fs.writeFileSync(dataFile, generateData(target));

  const pageFile = path.join(appDir, 'page.tsx');
  fs.writeFileSync(pageFile, generatePage(target));

  console.log("Generated " + target.slug);
});
