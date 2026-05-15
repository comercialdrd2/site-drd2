'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, GraduationCap, Hospital, Factory, ShoppingBag, ChevronDown, ChevronUp, CheckCircle2, Bed } from 'lucide-react';

interface Occupancy {
  code: string;
  name: string;
  href?: string;
}

interface Category {
  title: string;
  icon: any;
  items: Occupancy[];
}

const categories: Category[] = [
  {
    title: "Residencial e Condomínios",
    icon: Building2,
    items: [
      { code: "Renovação", name: "Renovação de AVCB para Condomínios", href: "/renovacao-avcb-condominio-sao-paulo" },
      { code: "A-2 / A-3", name: "Condomínios Verticais e Horizontais", href: "/avcb-condominio-sao-paulo" },
      { code: "A-1 / A-2", name: "Habitações Unifamiliares e Estúdios" },
      { code: "A-2 / A-3", name: "Prédios Antigos e Retrofits (Décadas 70/80)" },
      { code: "G-1 / G-2", name: "Garagens Coletivas e Estacionamentos", href: "/avcb-estacionamento-garagem-sao-paulo" }
    ]
  },
  {
    title: "Comércio, Escritórios e Alimentação",
    icon: ShoppingBag,
    items: [
      { code: "C-1 / C-2", name: "Restaurantes, Bares, Padarias e Lanchonetes", href: "/avcb-restaurante-sao-paulo" },
      { code: "D-1 / D-2", name: "Escritórios e Agências Bancárias", href: "/avcb-para-escritorio-sao-paulo" },
      { code: "C-3", name: "Shopping Centers e Galerias Comerciais", href: "/avcb-para-shopping-sao-paulo" },
      { code: "C-2", name: "Lojas de Varejo e Magazines" }
    ]
  },
  {
    title: "Indústria, Logística e Depósitos",
    icon: Factory,
    items: [
      { code: "I-1 a I-3", name: "Fábricas e Indústrias Diversas" },
      { code: "J-1 a J-4", name: "Galpões e Depósitos Logísticos", href: "/avcb-galpao-industrial-sao-paulo" },
      { code: "M-1 / M-2", name: "Postos de Combustível e Inflamáveis", href: "/avcb-posto-combustivel-sao-paulo" },
      { code: "J-4", name: "Depósitos de Materiais Químicos" }
    ]
  },
  {
    title: "Saúde, Educação e Bem-Estar",
    icon: Hospital,
    items: [
      { code: "H-2 / H-3", name: "Hospitais e Clínicas Médicas", href: "/avcb-hospital-clinica-sao-paulo" },
      { code: "Grupo I", name: "Clínicas Odontológicas e Dentistas", href: "/avcb-consultorios-medicos-odontologicos-sao-paulo" },
      { code: "E-1 a E-6", name: "Escolas, Faculdades e Creches", href: "/avcb-para-escola-sao-paulo" },
      { code: "H-5", name: "Casas de Repouso e Asilos", href: "/avcb-para-casa-de-repouso-sao-paulo" },
      { code: "H-1", name: "Pet Shops e Clinicas Veterinarias", href: "/avcb-clinica-hospital-veterinario-sao-paulo" }
    ]
  },
  {
    title: "Hospedagem, Turismo e Lazer",
    icon: Bed,
    items: [
      { code: "B-1 / B-2", name: "Hotéis e Apart-Hotéis", href: "/avcb-hoteis-pousadas-sao-paulo" },
      { code: "B-1 / B-2", name: "Motéis e Suítes", href: "/avcb-motel-sao-paulo" },
      { code: "B-1 / B-2", name: "Pousadas e Hostels", href: "/avcb-hoteis-pousadas-sao-paulo" },
    ]
  },
  {
    title: "Outros Tipos de Edificações e Espaços",
    icon: GraduationCap,
    items: [
      { code: "F-1 a F-7", name: "Igrejas, Templos e Centros Religiosos", href: "/avcb-para-igreja-sao-paulo" },
      { code: "F-3", name: "Academia, Clubes e Centros Esportivos", href: "/avcb-para-academia-sao-paulo" },
      { code: "F-5 / F-6", name: "Teatros, Cinemas e Casas de Show" },
      { code: "F-2", name: "Espaços de Eventos, Buffets e Salões", href: "/avcb-salao-de-festas-sao-paulo" },
      { code: "H-1 / H-6", name: "Clínicas de Estética e Laboratórios" },
      { code: "F-3 / F-4", name: "Piscinas Públicas e Quadras Cobertas" },
      { code: "D-3", name: "Data Centers e Centros de Tecnologia" }
    ]
  }
];

export default function OccupancyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0D121F] py-24 border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Áreas de Atuação por Ocupação</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para todas as classificações do Corpo de Bombeiros de SP (IT-01). 
            Selecione uma categoria para ver as sub-ocupações atendidas.
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(idx)}
                className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-all ${openIndex === idx ? 'bg-gray-800/50' : 'hover:bg-gray-800/30'}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${openIndex === idx ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-gray-800 text-gray-400'}`}>
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{cat.title}</h3>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-red-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {openIndex === idx && (
                <div className="p-8 pt-0 bg-gray-800/20 border-t border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {cat.items.map((item, i) => {
                      const Content = () => (
                        <div className="flex gap-4 items-start group cursor-pointer">
                          <div className="mt-1">
                            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                          </div>
                          <div>
                            <p className="text-red-500 font-black text-xs uppercase tracking-widest mb-1">{item.code}</p>
                            <p className="text-gray-300 font-medium leading-relaxed group-hover:text-red-400 transition-colors">
                              {item.name} {item.href && <span className="text-[10px] bg-red-600/20 text-red-400 px-2 py-0.5 rounded-full ml-2">Ver Página →</span>}
                            </p>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <Link key={i} href={item.href}>
                          <Content />
                        </Link>
                      ) : (
                        <div key={i}>
                          <Content />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-10 p-4 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-500">
                      Não encontrou sua ocupação específica? Nossa engenharia cobre todos os grupos (A a M) do Decreto Estadual de SP. 
                      <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} target="_blank" className="text-red-500 font-bold ml-1 hover:underline">Consulte um engenheiro →</Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
