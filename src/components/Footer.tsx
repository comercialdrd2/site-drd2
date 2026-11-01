import MainNavLink from "@/components/MainNavLink";
import Image from "next/image";
import { Zap, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t-4 border-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo e Info */}
          <div className="space-y-6 lg:col-span-1">
            <Image
              src="/images/logo-dark.jpg"
              alt="DRD2 Engenharia e Serviços"
              width={200}
              height={70}
              className="h-16 w-auto object-contain brightness-110"
            />
            <p className="text-sm text-slate-400 font-medium leading-relaxed italic">
              Excelência técnica em projetos de combate a incêndio, proteção à vida e consultoria patrimonial de alto rigor.
            </p>

            {/* Mesma empresa, outra frente de atuação — sinaliza ao Google que os dois domínios são a mesma DRD2 Engenharia */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <p className="text-slate-400 text-xs leading-relaxed">
                A DRD2 Engenharia também cuida de <strong className="text-white">Alvará de Funcionamento, laudos técnicos e regularização de imóveis</strong>.
              </p>
              <a
                href="https://drd1.com.br"
                className="inline-flex items-center gap-1.5 mt-2 text-sm font-black uppercase tracking-tight text-primary hover:text-white transition-colors"
              >
                Ver alvarás e regularização →
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-inner flex items-center gap-4">
              <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-slate-700 shadow-md">
                <Image 
                  src="/images/eng-samuel-oficial-v3.webp" 
                  alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570" 
                  fill 
                  className="object-cover" 
                  loading="lazy" 
                  sizes="48px"
                />
              </div>
              <div>
                 <div className="flex items-center gap-1 text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">
                   <ShieldCheck className="w-3 h-3 text-primary" /> Eng. Samuel Costa
                 </div>
                 <div className="text-white text-xs font-bold uppercase tracking-tight">
                   <a
                     href="https://www.creasp.org.br"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:underline focus:underline"
                     title="Verificar registro CREA-SP 5070163570 no site oficial"
                   >
                     CREA-SP 5070163570
                   </a>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Serviços Master */}
          <div>
            <h3 className="text-slate-100 font-black mb-6 uppercase tracking-wides border-b border-white/10 pb-2 text-sm flex items-center gap-2 italic">
               <Zap className="w-4 h-4 text-primary" /> Ocupações Especiais
            </h3>
            <ul className="space-y-3 text-[13px] font-bold text-slate-400 uppercase tracking-tight">
              <li><MainNavLink href="/renovacao-avcb-condominio-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2 text-white">▶ Renovação de AVCB</MainNavLink></li>
              <li><MainNavLink href="/avcb-galpao-industrial-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Galpões Industriais</MainNavLink></li>
              <li><MainNavLink href="/avcb-restaurante-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Alta Gastronomia</MainNavLink></li>
              <li><MainNavLink href="/avcb-hospital-clinica-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Hospitais & Clínicas</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-condominio-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Condomínios Residenciais</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-escola-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Escolas Infantis</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-academia-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Academias & Fitness</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-igreja-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Igrejas & Templos</MainNavLink></li>
              <li><MainNavLink href="/ptotep" className="hover:text-primary transition-colors flex items-center gap-2 text-red-400 font-black">▶ PTOTEP Eventos</MainNavLink></li>
              <li><MainNavLink href="/avcb-salao-de-festas-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2 text-red-500 font-black">▶ Salão de Festas</MainNavLink></li>
              <li><MainNavLink href="/avcb-consultorios-medicos-odontologicos-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Clínica Odontológica</MainNavLink></li>
              <li><MainNavLink href="/avcb-clinica-hospital-veterinario-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Clinica Veterinaria</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-escritorio-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Escritórios Corporativos</MainNavLink></li>
              <li><MainNavLink href="/avcb-para-shopping-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Shoppings & Centros Comerciais</MainNavLink></li>
              <li><MainNavLink href="/avcb-posto-combustivel-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Postos de Combustível</MainNavLink></li>
              <li><MainNavLink href="/avcb-estacionamento-garagem-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Estacionamentos</MainNavLink></li>
              <li><MainNavLink href="/renovacao-avcb-restaurante-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Renovação AVCB Restaurante</MainNavLink></li>
              <li><MainNavLink href="/renovacao-avcb-pousada-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Renovação AVCB Pousada</MainNavLink></li>
              <li><MainNavLink href="/laudo-sprinkler-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Laudo de Sprinkler SP</MainNavLink></li>
              <li><MainNavLink href="/porta-corta-fogo-condominio-sp" className="hover:text-primary transition-colors flex items-center gap-2">▶ Porta Corta-Fogo Condomínio</MainNavLink></li>
              <li><MainNavLink href="/sistema-de-hidrantes-para-restaurante-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Hidrante para Restaurante</MainNavLink></li>
              <li><MainNavLink href="/avcb-por-tipo-de-imovel" className="hover:text-primary transition-colors flex items-center gap-2 text-white font-black">▶ Ver todos os tipos de imóvel</MainNavLink></li>
            </ul>
          </div>

          {/* Polos Financeiros */}
          <div>
            <h3 className="text-slate-100 font-black mb-6 uppercase tracking-wides border-b border-white/10 pb-2 text-sm flex items-center gap-2 italic">
               Eixos Corporativos
            </h3>
            <ul className="space-y-3 text-[13px] font-bold text-slate-400 uppercase tracking-tight">
              <li><MainNavLink href="/avcb-itaim-bibi" className="hover:text-stone-400 transition-colors flex items-center gap-2">▶ Itaim Bibi & JK</MainNavLink></li>
              <li><MainNavLink href="/avcb-alphaville-barueri" className="hover:text-yellow-500 transition-colors flex items-center gap-2">▶ Alphaville Logística</MainNavLink></li>
              <li><MainNavLink href="/avcb-pinheiros" className="hover:text-primary transition-colors flex items-center gap-2">▶ Polo Pinheiros</MainNavLink></li>
              <li><MainNavLink href="/avcb-vila-olimpia" className="hover:text-primary transition-colors flex items-center gap-2">▶ Vila Olímpia</MainNavLink></li>
              <li><MainNavLink href="/avcb-zona-sul" className="hover:text-primary transition-colors flex items-center gap-2">▶ Zona Sul Startups</MainNavLink></li>
              <li><MainNavLink href="/avcb-perdizes" className="hover:text-primary transition-colors flex items-center gap-2">▶ Perdizes</MainNavLink></li>
              <li><MainNavLink href="/ptotep-sorocaba" className="hover:text-primary transition-colors flex items-center gap-2">▶ PTOTEP Sorocaba</MainNavLink></li>
              <li><MainNavLink href="/ptotep-para-evento-universitario" className="hover:text-primary transition-colors flex items-center gap-2">▶ PTOTEP Evento Universitário</MainNavLink></li>
              <li><MainNavLink href="/ptotep-para-evento-em-igreja" className="hover:text-primary transition-colors flex items-center gap-2">▶ PTOTEP Evento em Igreja</MainNavLink></li>
              <li><MainNavLink href="/vga-galpao-industrial-sp" className="hover:text-primary transition-colors flex items-center gap-2">▶ VGA Galpão Industrial</MainNavLink></li>
              <li><MainNavLink href="/vga-hotel-sp" className="hover:text-primary transition-colors flex items-center gap-2">▶ VGA Hotel SP</MainNavLink></li>
              <li><MainNavLink href="/avcb-clcb-por-regiao" className="hover:text-primary transition-colors flex items-center gap-2 text-white font-black">▶ Ver todos os bairros e cidades</MainNavLink></li>
            </ul>
          </div>

          {/* Polos Históricos */}
          <div>
            <h3 className="text-slate-100 font-black mb-6 uppercase tracking-wides border-b border-white/10 pb-2 text-sm flex items-center gap-2 italic">
               Regiões atendidas
            </h3>
            <ul className="space-y-3 text-[13px] font-bold text-slate-400 uppercase tracking-tight">
              <li><MainNavLink href="/avcb-centro-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Centro de SP</MainNavLink></li>
              <li><MainNavLink href="/avcb-zona-norte-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Zona Norte</MainNavLink></li>
              <li><MainNavLink href="/avcb-zona-leste-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Zona Leste</MainNavLink></li>
              <li><MainNavLink href="/avcb-zona-oeste-sao-paulo" className="hover:text-primary transition-colors flex items-center gap-2">▶ Zona Oeste</MainNavLink></li>
              <li><MainNavLink href="/avcb-santo-andre" className="hover:text-primary transition-colors flex items-center gap-2">▶ Grande ABC</MainNavLink></li>
              <li><MainNavLink href="/avcb-santos" className="hover:text-primary transition-colors flex items-center gap-2">▶ Baixada Santista</MainNavLink></li>
              <li><MainNavLink href="/avcb-campinas" className="hover:text-primary transition-colors flex items-center gap-2">▶ Campinas e interior</MainNavLink></li>
            </ul>
          </div>

          {/* Operacional Corporativo */}
          <div>
            <h3 className="text-slate-100 font-black mb-6 uppercase tracking-wides border-b border-white/10 pb-2 text-sm flex items-center gap-2 italic">
               Operacional DRD2
            </h3>
            <ul className="space-y-3 text-[12px] font-bold text-slate-400 uppercase tracking-widest break-words">
              <li className="text-white bg-white/5 p-2 rounded-lg border border-white/10 inline-block mb-2">Rua Cel. José Eusébio, 95 — Casa 13, Higienópolis, São Paulo/SP — CEP 01239-030</li>
              <li>
                 <a href={`tel:+${process.env.NEXT_PUBLIC_WHATSAPP || "5511942232969"}`} className="hover:text-white transition-colors block py-1 border-b border-slate-800 text-primary">
                    (11) 94223-2969
                 </a>
              </li>
              <li>
                 <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "comercial@drd2.com.br"}`} className="hover:text-white transition-colors block py-1 border-b border-slate-800">
                    {process.env.NEXT_PUBLIC_EMAIL || "comercial@drd2.com.br"}
                 </a>
              </li>
              <li>
                 <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || ""}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-white transition-colors block py-2">
                    WHATSAPP DIRETORIA
                 </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} DRD2 ENGENHARIA LTDA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <MainNavLink href="/clcb-sao-paulo" className="hover:text-white transition-colors">CLCB Rápido</MainNavLink>
            <MainNavLink href="/renovacao-avcb-condominio-sao-paulo" className="hover:text-white transition-colors">Renovação</MainNavLink>
            <MainNavLink href="/blog" className="hover:text-white transition-colors">Dossiês DRD2</MainNavLink>
            <MainNavLink href="/avcb-clcb-por-regiao" className="hover:text-white transition-colors">Regiões atendidas</MainNavLink>
            <MainNavLink href="/avcb-por-tipo-de-imovel" className="hover:text-white transition-colors">Tipos de imóvel</MainNavLink>
            <MainNavLink href="/engenheiro-avcb-sao-paulo" className="hover:text-white transition-colors">Engenheiro de AVCB</MainNavLink>
            <MainNavLink href="/avcb-sao-paulo#urgencia" className="hover:text-white transition-colors">AVCB urgente</MainNavLink>
            <MainNavLink href="/ptotep" className="hover:text-white transition-colors">Eventos (PTOTEP)</MainNavLink>
            <MainNavLink href="/plano-de-emergencia-contra-incendio-sp" className="hover:text-white transition-colors">Plano de emergência</MainNavLink>
            <MainNavLink href="/politica-de-privacidade" className="hover:text-white transition-colors">Privacidade</MainNavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
