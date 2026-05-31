import Link from "next/link";
import { bairrosCondominio, bairrosRestaurante } from "@/data/bairros-renovacao";
import { cidadesExpansao } from "@/data/expansao-cidades";
import { alarmSeoPages } from "@/data/alarmSeoPages";
import { hydrantSeoPages } from "@/data/hydrantSeoPages";
import { sprinklerSeoPages } from "@/data/sprinklerSeoPages";
import { fireProjectSeoPages } from "@/data/fireProjectSeoPages";
import { brigadeSeoPages } from "@/data/brigadeSeoPages";
import { spdaSeoPages } from "@/data/spdaSeoPages";
import { localNeighborhoods, missingAvcbNeighborhoods } from "@/data/localNeighborhoodSeoPages";
import { ptotepMapLinks } from "@/data/ptotepSeoPages";
import { avcbNicheMapLinks } from "@/data/avcbNichePages";
import { blogPosts } from "@/data/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa de Páginas | DRD2 Engenharia",
  robots: { index: false, follow: true },
};

// ------------------------------------------------------------------------------
// PÁGINA ADMINISTRATIVA — MAPA DO SITE DRD2 ENGENHARIA
// Acesse em: http://localhost:3000/mapa-paginas
// ------------------------------------------------------------------------------

const zonas = [
  { label: "Zona Sul", href: "/avcb-zona-sul" },
  { label: "Zona Leste", href: "/avcb-zona-leste-sao-paulo" },
  { label: "Zona Norte", href: "/avcb-zona-norte-sao-paulo" },
  { label: "Zona Oeste", href: "/avcb-zona-oeste-sao-paulo" },
];

const bairrosSP = [
  { label: "Jabaquara", href: "/avcb-jabaquara" },
  { label: "Moema", href: "/avcb-moema" },
  { label: "Itaim Bibi", href: "/avcb-itaim-bibi" },
  { label: "Vila Olímpia", href: "/avcb-vila-olimpia" },
  { label: "Brooklin", href: "/avcb-brooklin" },
  { label: "Campo Belo", href: "/avcb-campo-belo" },
  { label: "Santo Amaro", href: "/avcb-santo-amaro" },
  { label: "Saúde", href: "/avcb-saude" },
  { label: "Vila Mariana", href: "/avcb-vila-mariana" },
  { label: "Tatuapé", href: "/avcb-tatuape" },
  { label: "Centro SP", href: "/avcb-centro-sao-paulo" },
  { label: "Alphaville / Barueri (bairro)", href: "/avcb-alphaville-barueri" },
  { label: "Pinheiros", href: "/avcb-pinheiros" },
  { label: "Bela Vista", href: "/avcb-bela-vista" },
  { label: "Consolação", href: "/avcb-consolacao" },
  { label: "República", href: "/avcb-republica" },
  { label: "Liberdade", href: "/avcb-liberdade" },
  { label: "Sé", href: "/avcb-se" },
  { label: "Morumbi", href: "/avcb-morumbi" },
  { label: "Ipiranga", href: "/avcb-ipiranga" },
  { label: "Sacomã", href: "/avcb-sacoma" },
  { label: "Penha", href: "/avcb-penha" },
  { label: "Mooca", href: "/avcb-mooca" },
  { label: "Anália Franco", href: "/avcb-analia-franco" },
  { label: "Aricanduva", href: "/avcb-aricanduva" },
  { label: "Itaquera", href: "/avcb-itaquera" },
  { label: "Jaçanã", href: "/avcb-jacana" },
  { label: "Lapa", href: "/avcb-lapa" },
  { label: "Limão", href: "/avcb-limao" },
  { label: "Casa Verde", href: "/avcb-casa-verde" },
  { label: "Santana", href: "/avcb-santana" },
  { label: "Tucuruvi", href: "/avcb-tucuruvi" },
  { label: "Butantã", href: "/avcb-butanta" },
  { label: "Perdizes", href: "/avcb-perdizes" },
  { label: "Vila Madalena", href: "/avcb-vila-madalena" },
  { label: "Vila Leopoldina", href: "/avcb-vila-leopoldina" },
  { label: "Vila Prudente", href: "/avcb-vila-prudente" },
  { label: "Centro / Bela Vista", href: "/avcb-centro-bela-vista" },
];

const grandesp = [
  { label: "Guarulhos", href: "/avcb-guarulhos" },
  { label: "Osasco", href: "/avcb-osasco" },
  { label: "Santo André", href: "/avcb-santo-andre" },
  { label: "São Bernardo do Campo", href: "/avcb-sao-bernardo" },
  { label: "São Caetano do Sul", href: "/avcb-sao-caetano" },
  { label: "Barueri / Alphaville", href: "/avcb-barueri-alphaville" },
  { label: "Mogi das Cruzes", href: "/avcb-mogi-das-cruzes" },
  { label: "Suzano", href: "/avcb-suzano" },
  { label: "Poá", href: "/avcb-poa" },
];

const universalSeoPages = [
  // P1 — Urgência
  { label: "AVCB Vencido — O Que Fazer?", href: "/avcb-vencido-o-que-fazer" },
  { label: "Embargo Corpo de Bombeiros SP", href: "/embargo-corpo-de-bombeiros-sao-paulo" },
  { label: "Multa Corpo de Bombeiros — Como Resolver", href: "/multa-corpo-de-bombeiros-como-resolver" },
  { label: "AVCB Urgente em São Paulo", href: "/avcb-urgente-sao-paulo" },
  { label: "AVCB ou CLCB — Qual Preciso?", href: "/avcb-ou-clcb-qual-preciso" },
  // P2 — Educacional
  { label: "Como Regularizar AVCB Vencido", href: "/como-regularizar-avcb-vencido" },
  { label: "Documentos para AVCB em SP", href: "/documentos-necessarios-avcb-sao-paulo" },
  { label: "Prazo de Renovação do AVCB em SP", href: "/prazo-renovacao-avcb-sao-paulo" },
  { label: "Vistoria do Corpo de Bombeiros — Checklist", href: "/vistoria-corpo-de-bombeiros-o-que-esperar" },
  // P3 — Localização
  { label: "AVCB em Jundiaí", href: "/avcb-jundiai" },
  { label: "AVCB em Carapicuíba", href: "/avcb-carapicuiba" },
  { label: "AVCB em Taboão da Serra", href: "/avcb-taboao-da-serra" },
  { label: "AVCB na Pompeia", href: "/avcb-pompeia" },
  { label: "AVCB nos Jardins", href: "/avcb-jardins" },
  { label: "AVCB no Campo Grande", href: "/avcb-campo-grande" },
  { label: "AVCB no Bom Retiro", href: "/avcb-bom-retiro" },
  { label: "AVCB na Santa Cecília", href: "/avcb-santa-cecilia" },
  { label: "AVCB na Vila Clementino", href: "/avcb-vila-clementino" },
  // P4 — Hidrantes cross-matrix
  { label: "Hidrantes para Restaurante SP", href: "/sistema-de-hidrantes-para-restaurante-sao-paulo" },
  { label: "Hidrantes para Escola SP", href: "/sistema-de-hidrantes-para-escola-sao-paulo" },
  { label: "Hidrantes para Academia SP", href: "/sistema-de-hidrantes-para-academia-sao-paulo" },
  { label: "Hidrantes para Pousada SP", href: "/sistema-de-hidrantes-para-pousada-sao-paulo" },
  // P4 — Sprinkler cross-matrix
  { label: "Sprinkler para Restaurante SP", href: "/sistema-de-sprinkler-para-restaurante-sao-paulo" },
  { label: "Sprinkler para Escola SP", href: "/sistema-de-sprinkler-para-escola-sao-paulo" },
  { label: "Sprinkler para Academia SP", href: "/sistema-de-sprinkler-para-academia-sao-paulo" },
  { label: "Sprinkler para Pousada SP", href: "/sistema-de-sprinkler-para-pousada-sao-paulo" },
  // Laudos técnicos de sistema
  { label: "Laudo de Alarme de Incêndio SP", href: "/laudo-alarme-incendio-sao-paulo" },
  { label: "Laudo de Sistema de Hidrantes SP", href: "/laudo-sistema-hidrantes-sao-paulo" },
  { label: "Laudo de Sprinkler SP", href: "/laudo-sprinkler-sao-paulo" },
];

const servicos = [
  { label: "AVCB em São Paulo", href: "/avcb-sao-paulo" },
  { label: "CLCB em São Paulo", href: "/clcb-sao-paulo" },
  { label: "Renovação de AVCB", href: "/renovacao-avcb" },
  { label: "Quanto Custa o AVCB", href: "/quanto-custa-avcb-sao-paulo" },
  { label: "Sprinklers", href: "/sprinklers" },
  { label: "Hidrantes", href: "/hidrantes" },
  { label: "SPDA", href: "/spda" },
  { label: "Alarme de Incêndio", href: "/alarme-incendio-sao-paulo" },
  { label: "Manutenção de Alarme de Incêndio", href: "/manutencao-alarme-de-incendio-sao-paulo" },
  { label: "Manutenção", href: "/manutencao" },
  { label: "Projetos de Incêndio", href: "/projetos-incendio" },
  { label: "Treinamento Brigada", href: "/treinamento-brigada" },
  { label: "Laudo Estanqueidade Gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
  { label: "Projeto PET", href: "/projeto-pet" },
  { label: "Escada Pressurizada em São Paulo", href: "/escada-pressurizada-sao-paulo" },
  { label: "Projeto Escada Pressurizada AVCB SP", href: "/projeto-escada-pressurizada-avcb-sao-paulo" },
  { label: "Instalação Escada Pressurizada SP", href: "/instalacao-escada-pressurizada-sp" },
  { label: "Manutenção Escada Pressurizada SP", href: "/manutencao-escada-pressurizada-sp" },
  { label: "Laudo Escada Pressurizada SP", href: "/laudo-escada-pressurizada-sp" },
  { label: "Regularização Escada de Incêndio", href: "/regularizacao-escada-incendio" },
  { label: "Empresa Especializada em AVCB", href: "/empresa-avcb-sao-paulo" },
  { label: "Engenheiro para AVCB", href: "/engenheiro-avcb-sao-paulo" },
  { label: "Quanto Custa Renovar o AVCB", href: "/quanto-custa-renovacao-avcb-sao-paulo" },
  { label: "Melhor Empresa de AVCB SP", href: "/melhor-empresa-avcb-sao-paulo" },
  { label: "Prazo do AVCB em SP", href: "/prazo-avcb-sao-paulo" },
];

const renovacoes = [
  { label: "Condomínio", href: "/renovacao-avcb-condominio-sao-paulo" },
  { label: "Galpão Industrial", href: "/renovacao-avcb-galpao-industrial-sao-paulo" },
  { label: "Hostel", href: "/renovacao-avcb-hostel-sao-paulo" },
  { label: "Escola", href: "/renovacao-avcb-escola-sao-paulo" },
  { label: "Igreja", href: "/renovacao-avcb-igreja-sao-paulo" },
  { label: "Motel", href: "/renovacao-avcb-motel-sao-paulo" },
  { label: "Restaurante", href: "/renovacao-avcb-restaurante-sao-paulo" },
  { label: "Supermercado", href: "/renovacao-avcb-supermercado-sao-paulo" },
  { label: "Hotel", href: "/renovacao-avcb-hotel-sao-paulo" },
  { label: "Hospital / Clínica", href: "/renovacao-avcb-hospital-clinica-sao-paulo" },
  { label: "Academia", href: "/renovacao-avcb-academia-sao-paulo" },
  { label: "Casa de Repouso", href: "/renovacao-avcb-casa-de-repouso-sao-paulo" },
  { label: "Casa Noturna / Boate", href: "/renovacao-avcb-casa-noturna-boate-sao-paulo" },
  { label: "Farmácia / Drogaria", href: "/renovacao-avcb-farmacia-drogaria-sao-paulo" },
  { label: "Bares e Restaurantes", href: "/renovacao-avcb-bares-restaurantes-sao-paulo" },
  { label: "Salão de Festas", href: "/renovacao-avcb-salao-de-festas-sao-paulo" },
  { label: "Pousada", href: "/renovacao-avcb-pousada-sao-paulo" },
  { label: "Posto de Combustível", href: "/renovacao-avcb-posto-combustivel-sao-paulo" },
  { label: "Creche", href: "/renovacao-avcb-creche-sao-paulo" },
  { label: "Escritório", href: "/renovacao-avcb-escritorio-sao-paulo" },
  { label: "Padaria", href: "/renovacao-avcb-padaria-sao-paulo" },
  { label: "Shopping", href: "/renovacao-avcb-shopping-sao-paulo" },
  { label: "Consultório Médico", href: "/renovacao-avcb-consultorio-medico-sao-paulo" },
  { label: "Mogi das Cruzes", href: "/renovacao-avcb-mogi-das-cruzes" },
  { label: "Suzano", href: "/renovacao-avcb-suzano" },
  { label: "Poá", href: "/renovacao-avcb-poa" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLCB — Certificado de Licença do Corpo de Bombeiros (até 750m², baixo risco)
// ─────────────────────────────────────────────────────────────────────────────
const clcbPrincipal = [
  { label: "CLCB em São Paulo (página pillar)", href: "/clcb-sao-paulo" },
  { label: "Renovação de CLCB em SP (pillar renovação)", href: "/renovacao-clcb-sao-paulo" },
  { label: "AVCB ou CLCB — Qual preciso?", href: "/avcb-ou-clcb-qual-preciso" },
];

const renovacaoClcbOcupacoes = [
  { label: "Restaurante", href: "/renovacao-clcb-restaurante-sao-paulo" },
  { label: "Bar", href: "/renovacao-clcb-bar-sao-paulo" },
  { label: "Padaria", href: "/renovacao-clcb-padaria-sao-paulo" },
  { label: "Supermercado", href: "/renovacao-clcb-supermercado-sao-paulo" },
  { label: "Farmácia", href: "/renovacao-clcb-farmacia-sao-paulo" },
  { label: "Academia", href: "/renovacao-clcb-academia-sao-paulo" },
  { label: "Escola", href: "/renovacao-clcb-escola-sao-paulo" },
  { label: "Clínica Médica", href: "/renovacao-clcb-clinica-sao-paulo" },
  { label: "Clínica Odontológica", href: "/renovacao-clcb-odontologica-sao-paulo" },
  { label: "Clínica de Fisioterapia", href: "/renovacao-clcb-fisioterapia-sao-paulo" },
  { label: "Consultório / Clínica (geral)", href: "/renovacao-clcb-consultorio-clinica-sao-paulo" },
  { label: "Salão de Beleza", href: "/renovacao-clcb-salao-beleza-sao-paulo" },
  { label: "Salão de Festas", href: "/renovacao-clcb-salao-festas-sao-paulo" },
  { label: "Comércio / Loja", href: "/renovacao-clcb-comercio-sao-paulo" },
  { label: "Escritório", href: "/renovacao-clcb-escritorio-sao-paulo" },
  { label: "Igreja", href: "/renovacao-clcb-igreja-sao-paulo" },
  { label: "Galpão Industrial", href: "/renovacao-clcb-galpao-industrial-sao-paulo" },
];

const renovacaoClcbZonas = [
  { label: "Zona Sul SP", href: "/renovacao-clcb-zona-sul-sao-paulo" },
  { label: "Zona Norte SP", href: "/renovacao-clcb-zona-norte-sao-paulo" },
  { label: "Zona Leste SP", href: "/renovacao-clcb-zona-leste-sao-paulo" },
  { label: "Zona Oeste SP", href: "/renovacao-clcb-zona-oeste-sao-paulo" },
];

const renovacaoClcbCidades = [
  { label: "Campinas", href: "/renovacao-clcb-campinas" },
  { label: "Guarulhos", href: "/renovacao-clcb-guarulhos" },
  { label: "Osasco", href: "/renovacao-clcb-osasco" },
  { label: "Santo André", href: "/renovacao-clcb-santo-andre" },
  { label: "São Bernardo", href: "/renovacao-clcb-sao-bernardo" },
  { label: "São José dos Campos", href: "/renovacao-clcb-sao-jose-dos-campos" },
  { label: "Sorocaba", href: "/renovacao-clcb-sorocaba" },
  { label: "Diadema", href: "/renovacao-clcb-diadema" },
  { label: "Mauá", href: "/renovacao-clcb-maua" },
];

const renovacaoClcbBairros = [
  { label: "Aclimação", href: "/renovacao-clcb-aclimacao-sao-paulo" },
  { label: "Água Rasa", href: "/renovacao-clcb-agua-rasa-sao-paulo" },
  { label: "Aricanduva", href: "/renovacao-clcb-aricanduva-sao-paulo" },
  { label: "Bela Vista", href: "/renovacao-clcb-bela-vista-sao-paulo" },
  { label: "Belém", href: "/renovacao-clcb-belem-sao-paulo" },
  { label: "Brás", href: "/renovacao-clcb-bras-sao-paulo" },
  { label: "Brasilândia", href: "/renovacao-clcb-brasilandia-sao-paulo" },
  { label: "Brooklin", href: "/renovacao-clcb-brooklin-sao-paulo" },
  { label: "Butantã", href: "/renovacao-clcb-butanta-sao-paulo" },
  { label: "Cambuci", href: "/renovacao-clcb-cambuci-sao-paulo" },
  { label: "Campo Belo", href: "/renovacao-clcb-campo-belo-sao-paulo" },
  { label: "Campo Limpo", href: "/renovacao-clcb-campo-limpo-sao-paulo" },
  { label: "Cangaíba", href: "/renovacao-clcb-cangaiba-sao-paulo" },
  { label: "Capão Redondo", href: "/renovacao-clcb-capao-redondo-sao-paulo" },
  { label: "Carrão", href: "/renovacao-clcb-carrao-sao-paulo" },
  { label: "Casa Verde", href: "/renovacao-clcb-casa-verde-sao-paulo" },
  { label: "Consolação", href: "/renovacao-clcb-consolacao-sao-paulo" },
  { label: "Cursino", href: "/renovacao-clcb-cursino-sao-paulo" },
  { label: "Ermelino Matarazzo", href: "/renovacao-clcb-ermelino-matarazzo-sao-paulo" },
  { label: "Freguesia do Ó", href: "/renovacao-clcb-freguesia-do-o-sao-paulo" },
  { label: "Grajaú", href: "/renovacao-clcb-graja-sao-paulo" },
  { label: "Higienópolis", href: "/renovacao-clcb-higienopolis-sao-paulo" },
  { label: "Interlagos", href: "/renovacao-clcb-interlagos-sao-paulo" },
  { label: "Ipiranga", href: "/renovacao-clcb-ipiranga-sao-paulo" },
  { label: "Itaim Bibi", href: "/renovacao-clcb-itaim-bibi-sao-paulo" },
  { label: "Itaquera", href: "/renovacao-clcb-itaquera-sao-paulo" },
  { label: "Jabaquara", href: "/renovacao-clcb-jabaquara-sao-paulo" },
  { label: "Jaçanã", href: "/renovacao-clcb-jacana-sao-paulo" },
  { label: "Jardins", href: "/renovacao-clcb-jardins-sao-paulo" },
  { label: "Lapa", href: "/renovacao-clcb-lapa-sao-paulo" },
  { label: "Liberdade", href: "/renovacao-clcb-liberdade-sao-paulo" },
  { label: "Mandaqui", href: "/renovacao-clcb-mandaqui-sao-paulo" },
  { label: "M'Boi Mirim", href: "/renovacao-clcb-mboi-mirim-sao-paulo" },
  { label: "Moema", href: "/renovacao-clcb-moema-sao-paulo" },
  { label: "Mooca", href: "/renovacao-clcb-mooca-sao-paulo" },
  { label: "Morumbi", href: "/renovacao-clcb-morumbi-sao-paulo" },
  { label: "Paraíso", href: "/renovacao-clcb-paraiso-sao-paulo" },
  { label: "Penha", href: "/renovacao-clcb-penha-sao-paulo" },
  { label: "Perdizes", href: "/renovacao-clcb-perdizes-sao-paulo" },
  { label: "Pinheiros", href: "/renovacao-clcb-pinheiros-sao-paulo" },
  { label: "Pirituba", href: "/renovacao-clcb-pirituba-sao-paulo" },
  { label: "Pompeia", href: "/renovacao-clcb-pompeia-sao-paulo" },
  { label: "Rio Pequeno", href: "/renovacao-clcb-rio-pequeno-sao-paulo" },
  { label: "Sacomã", href: "/renovacao-clcb-sacoma-sao-paulo" },
  { label: "Santana", href: "/renovacao-clcb-santana-sao-paulo" },
  { label: "Santo Amaro", href: "/renovacao-clcb-santo-amaro-sao-paulo" },
  { label: "São Mateus", href: "/renovacao-clcb-sao-mateus-sao-paulo" },
  { label: "São Miguel Paulista", href: "/renovacao-clcb-sao-miguel-paulista-sao-paulo" },
  { label: "Sapopemba", href: "/renovacao-clcb-sapopemba-sao-paulo" },
  { label: "Saúde", href: "/renovacao-clcb-saude-sao-paulo" },
  { label: "Tatuapé", href: "/renovacao-clcb-tatuape-sao-paulo" },
  { label: "Tremembé", href: "/renovacao-clcb-tremembe-sao-paulo" },
  { label: "Tucuruvi", href: "/renovacao-clcb-tucuruvi-sao-paulo" },
  { label: "Vila Andrade", href: "/renovacao-clcb-vila-andrade-sao-paulo" },
  { label: "Vila Formosa", href: "/renovacao-clcb-vila-formosa-sao-paulo" },
  { label: "Vila Madalena", href: "/renovacao-clcb-vila-madalena-sao-paulo" },
  { label: "Vila Mariana", href: "/renovacao-clcb-vila-mariana-sao-paulo" },
  { label: "Vila Matilde", href: "/renovacao-clcb-vila-matilde-sao-paulo" },
  { label: "Vila Olímpia", href: "/renovacao-clcb-vila-olimpia-sao-paulo" },
  { label: "Vila Prudente", href: "/renovacao-clcb-vila-prudente-sao-paulo" },
];

const ocupacoes = [
  { label: "Condomínio", href: "/avcb-para-condominio-sao-paulo" },
  { label: "Hospital / Clínica", href: "/avcb-hospital-clinica-sao-paulo" },
  { label: "Escola / Faculdade", href: "/avcb-para-escola-sao-paulo" },
  { label: "Restaurantes e Bares", href: "/avcb-restaurante-sao-paulo" },
  { label: "Supermercado", href: "/avcb-supermercado-sao-paulo" },
  { label: "Salão de Festas", href: "/avcb-salao-de-festas-sao-paulo" },
  { label: "Hotéis e Pousadas", href: "/avcb-hoteis-pousadas-sao-paulo" },
  { label: "Hostel", href: "/avcb-hoteis-pousadas-sao-paulo" },
  { label: "Motel", href: "/avcb-motel-sao-paulo" },
  { label: "Posto de Combustível", href: "/avcb-posto-combustivel-sao-paulo" },
  { label: "Galpão Industrial", href: "/avcb-galpao-industrial-sao-paulo" },
  { label: "Creche", href: "/avcb-para-creche-sao-paulo" },
  { label: "Casa de Repouso", href: "/avcb-para-casa-de-repouso-sao-paulo" },
  { label: "Academia", href: "/avcb-para-academia-sao-paulo" },
  { label: "Escritório", href: "/avcb-para-escritorio-sao-paulo" },
  { label: "Farmácia / Drogaria", href: "/avcb-farmacia-drogaria-sao-paulo" },
  { label: "Padaria", href: "/avcb-para-padaria-sao-paulo" },
  { label: "Shopping", href: "/avcb-para-shopping-sao-paulo" },
  { label: "Casas Noturnas / Boates", href: "/avcb-casas-noturnas-boates-sao-paulo" },
  { label: "Consultórios Médicos", href: "/avcb-consultorios-medicos-odontologicos-sao-paulo" },
  { label: "Igreja", href: "/avcb-para-igreja-sao-paulo" },
  ...avcbNicheMapLinks,
];

const alvaraBombeiro = [
  { label: "Restaurante / Bar", href: "/alvara-bombeiro-bar-restaurante-sao-paulo" },
  { label: "Supermercado", href: "/alvara-bombeiro-supermercado-sao-paulo" },
  { label: "Hospital / Clínica", href: "/alvara-bombeiro-hospital-clinica-sao-paulo" },
  { label: "Escola / Faculdade", href: "/alvara-bombeiro-escola-faculdade-sao-paulo" },
  { label: "Condomínio", href: "/alvara-bombeiro-condominio-sao-paulo" },
  { label: "Academia", href: "/alvara-bombeiro-academia-sao-paulo" },
  { label: "Hotel / Pousada", href: "/alvara-bombeiro-hotel-pousada-sao-paulo" },
  { label: "Hostel", href: "/alvara-bombeiro-hostel-sao-paulo" },
  { label: "Motel", href: "/alvara-bombeiro-motel-sao-paulo" },
  { label: "Shopping", href: "/alvara-bombeiro-shopping-sao-paulo" },
  { label: "Igreja", href: "/alvara-bombeiro-igreja-sao-paulo" },
  { label: "Creche", href: "/alvara-bombeiro-creche-sao-paulo" },
  { label: "Casa de Repouso", href: "/alvara-bombeiro-casa-de-repouso-sao-paulo" },
  { label: "Farmácia / Drogaria", href: "/alvara-bombeiro-farmacia-drogaria-sao-paulo" },
  { label: "Padaria", href: "/alvara-bombeiro-padaria-sao-paulo" },
  { label: "Escritório", href: "/alvara-bombeiro-escritorio-sao-paulo" },
  { label: "Galpão Industrial", href: "/alvara-bombeiro-galpao-industrial-sao-paulo" },
  { label: "Posto de Combustível", href: "/alvara-bombeiro-posto-combustivel-sao-paulo" },
  { label: "Salão de Festas", href: "/alvara-bombeiro-salao-de-festas-sao-paulo" },
  { label: "Casa Noturna / Boate", href: "/alvara-bombeiro-casa-noturna-boate-sao-paulo" },
  { label: "Consultório Médico", href: "/alvara-bombeiro-consultorio-medico-sao-paulo" },
  { label: "Restaurante (específico)", href: "/alvara-bombeiro-bar-restaurante-sao-paulo" },
  { label: "Pousada (específico)", href: "/alvara-bombeiro-hotel-pousada-sao-paulo" },
  { label: "Escola (específico)", href: "/alvara-bombeiro-escola-faculdade-sao-paulo" },
];

const laudosBombeiro = [
  { label: "Bar e Restaurante", href: "/laudo-bombeiro-bar-restaurante-sao-paulo" },
  { label: "Supermercado", href: "/laudo-bombeiro-supermercado-sao-paulo" },
  { label: "Hospital / Clínica", href: "/laudo-bombeiro-hospital-clinica-sao-paulo" },
  { label: "Escola / Faculdade", href: "/laudo-bombeiro-escola-faculdade-sao-paulo" },
  { label: "Condomínio", href: "/laudo-bombeiro-condominio-sao-paulo" },
  { label: "Academia", href: "/laudo-bombeiro-academia-sao-paulo" },
  { label: "Hotel e Pousada", href: "/laudo-bombeiro-hotel-pousada-sao-paulo" },
  { label: "Hostel", href: "/laudo-bombeiro-hostel-sao-paulo" },
  { label: "Motel", href: "/laudo-bombeiro-motel-sao-paulo" },
  { label: "Shopping", href: "/laudo-bombeiro-shopping-sao-paulo" },
  { label: "Igreja", href: "/laudo-bombeiro-igreja-sao-paulo" },
  { label: "Creche", href: "/laudo-bombeiro-creche-sao-paulo" },
  { label: "Casa de Repouso", href: "/laudo-bombeiro-casa-de-repouso-sao-paulo" },
  { label: "Farmácia / Drogaria", href: "/laudo-bombeiro-farmacia-drogaria-sao-paulo" },
  { label: "Padaria", href: "/laudo-bombeiro-padaria-sao-paulo" },
  { label: "Escritório", href: "/laudo-bombeiro-escritorio-sao-paulo" },
  { label: "Galpão Industrial", href: "/laudo-bombeiro-galpao-industrial-sao-paulo" },
  { label: "Posto de Combustível", href: "/laudo-bombeiro-posto-combustivel-sao-paulo" },
  { label: "Salão de Festas", href: "/laudo-bombeiro-salao-de-festas-sao-paulo" },
  { label: "Casa Noturna / Boate", href: "/laudo-bombeiro-casa-noturna-boate-sao-paulo" },
  { label: "Consultório Médico", href: "/laudo-bombeiro-consultorio-medico-sao-paulo" },
];

const consolidacoesSeo = [
  {
    tema: "AVCB para restaurantes e bares",
    manter: "/avcb-restaurante-sao-paulo",
    redirecionar: "/avcb-bares-restaurantes-sao-paulo, /avcb-para-bar-sao-paulo, /avcb-bar-sao-paulo",
    decisao: "Uma página canônica, porque bar comum, lanchonete e restaurante compartilham intenção de busca e exigências de alimentação/bebidas.",
  },
  {
    tema: "AVCB para hotéis e pousadas",
    manter: "/avcb-hoteis-pousadas-sao-paulo",
    redirecionar: "/avcb-pousada-sao-paulo, /avcb-para-pousada-sao-paulo, /avcb-hotel-sao-paulo",
    decisao: "Uma página canônica de hospedagem. A página emocional de pousada fica fora do índice para não dividir autoridade.",
  },
  {
    tema: "AVCB para escolas",
    manter: "/avcb-para-escola-sao-paulo",
    redirecionar: "/avcb-escola-faculdade-sao-paulo",
    decisao: "Uma página canônica para Grupo E; escola, faculdade e cursos ficam tratados dentro da mesma intenção.",
  },
  {
    tema: "AVCB para farmácia e drogaria",
    manter: "/avcb-farmacia-drogaria-sao-paulo",
    redirecionar: "/avcb-para-farmacia-sao-paulo, /avcb-para-drogaria-sao-paulo",
    decisao: "Manter combinado, porque farmácia e drogaria disputam a mesma busca e a mesma dor de CMVS/Vigilância Sanitária.",
  },
  {
    tema: "AVCB para boates e casas noturnas",
    manter: "/avcb-casas-noturnas-boates-sao-paulo",
    redirecionar: "/avcb-para-boate-sao-paulo, /avcb-para-casa-noturna-sao-paulo, /avcb-para-bar-com-show-sao-paulo",
    decisao: "Manter combinado. Separar boate e casa noturna geraria páginas quase iguais; bares com pista entram nesse mesmo risco F-6.",
  },
  {
    tema: "Alvará do Bombeiro por ocupação",
    manter: "21 páginas canônicas no mapa",
    redirecionar: "restaurante, pousada e escola isolados redirecionam para as versões combinadas",
    decisao: "Redução de 24 para 21 páginas úteis, evitando canibalização nos pares Restaurante/Bar, Hotel/Pousada e Escola/Faculdade.",
  },
];

const hidrantesOcupacao = [
  { label: "Galpão Industrial", href: "/sistema-de-hidrantes-para-galpao-sao-paulo" },
  { label: "Indústria", href: "/sistema-de-hidrantes-para-industria-sao-paulo" },
  { label: "Condomínio", href: "/sistema-de-hidrantes-para-condominio-sao-paulo" },
];

const sprinklersOcupacao = [
  { label: "Indústria", href: "/sistema-de-sprinkler-para-industria-sao-paulo" },
  { label: "Condomínio", href: "/sistema-de-sprinkler-para-condominio-sao-paulo" },
];

const escadaPressurizada = [
  { label: "Escada Pressurizada em São Paulo", href: "/escada-pressurizada-sao-paulo" },
  { label: "Projeto Escada Pressurizada AVCB SP", href: "/projeto-escada-pressurizada-avcb-sao-paulo" },
  { label: "Regularização Escada de Incêndio", href: "/regularizacao-escada-incendio" },
  { label: "Escada Pressurizada para Condomínio SP", href: "/escada-pressurizada-condominio-sp" },
  { label: "Escada Pressurizada para Hotel SP", href: "/escada-pressurizada-hotel-sp" },
  { label: "Escada Pressurizada para Hospital SP", href: "/escada-pressurizada-hospital-sp" },
  { label: "Escada Pressurizada para Edifício Comercial SP", href: "/escada-pressurizada-edificio-comercial-sp" },
  { label: "Escada Pressurizada para Shopping SP", href: "/escada-pressurizada-shopping-sp" },
  { label: "Escada Pressurizada para Galpão Industrial SP", href: "/escada-pressurizada-galpao-industrial-sp" },
  { label: "Quanto Custa Escada Pressurizada SP", href: "/quanto-custa-escada-pressurizada-sp" },
  { label: "Escada Pressurizada Obrigatória AVCB SP", href: "/escada-pressurizada-obrigatoria-avcb-sp" },
  { label: "Manutenção de Escada Pressurizada SP", href: "/manutencao-escada-pressurizada-sp" },
  { label: "Laudo de Escada Pressurizada SP", href: "/laudo-escada-pressurizada-sp" },
  { label: "Instalação de Escada Pressurizada SP", href: "/instalacao-escada-pressurizada-sp" },
];

const gasEstanqueidade = [
  { label: "Laudo Estanqueidade Gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
  { label: "Manutenção de Rede de Gás SP", href: "/manutencao-rede-gas-sao-paulo" },
  { label: "Central de Gás para Condomínio SP", href: "/central-de-gas-condominio-sao-paulo" },
  ...blogPosts
    .filter(post => post.relatedServiceSlug === "laudo-estanqueidade-gas-sao-paulo")
    .map(post => ({
      label: `Blog: ${post.title}`,
      href: `/blog/${post.slug}`,
    })),
];

const ptotepBlogLinks = blogPosts
  .filter(post => post.relatedServiceSlug === "ptotep")
  .map(post => ({
    label: `Blog: ${post.title}`,
    href: `/blog/${post.slug}`,
  }));

const clusterCondominio = bairrosCondominio.map(b => ({
  label: b.nome,
  href: `/renovacao-avcb-condominio-${b.slug}`
}));

const clusterRestaurante = bairrosRestaurante.map(b => ({
  label: b.nome,
  href: `/renovacao-avcb-restaurante-${b.slug}`
}));

const clusterExpansao = cidadesExpansao.map(c => ({
  label: c.nome,
  href: `/avcb-${c.slug}`
}));

const clusterAlarme = Object.values(alarmSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterHidrantesSeo = Object.values(hydrantSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterSprinklersSeo = Object.values(sprinklerSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterProjetosIncendioSeo = Object.values(fireProjectSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterBrigadaSeo = Object.values(brigadeSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterSpdaSeo = Object.values(spdaSeoPages).map(page => ({
  label: page.h1,
  href: page.slug
}));

const clusterRenovacaoBairrosSeo = localNeighborhoods.map(page => ({
  label: `Renovação AVCB ${page.name}`,
  href: `/renovacao-avcb-${page.slug}`
}));

const clusterAvcbBairrosNovosSeo = localNeighborhoods
  .filter(page => missingAvcbNeighborhoods.includes(page.slug))
  .map(page => ({
    label: `AVCB ${page.name}`,
    href: `/avcb-${page.slug}`
  }));

const clusterVGA = [
  // Pillar
  { label: "Válvula de Governo e Alarme SP (Pillar)", href: "/vga-sprinkler-sao-paulo" },
  // Serviço técnico
  { label: "Instalação de VGA", href: "/instalacao-vga-sprinkler-sp" },
  { label: "Projeto de VGA", href: "/projeto-vga-sistema-sprinkler-sp" },
  { label: "Manutenção de VGA", href: "/manutencao-vga-sprinkler-sp" },
  { label: "Teste e Comissionamento de VGA", href: "/teste-comissionamento-vga-sp" },
  { label: "Adequação de VGA para AVCB", href: "/adequacao-vga-avcb-sp" },
  // Informacional / topo de funil
  { label: "O que é VGA?", href: "/o-que-e-valvula-governo-alarme" },
  { label: "Como Funciona a VGA?", href: "/como-funciona-vga-sprinkler" },
  { label: "Quando a VGA é Obrigatória?", href: "/quando-vga-obrigatoria-sp" },
  { label: "VGA vs. Válvula Dilúvio", href: "/diferenca-vga-valvula-diluvi" },
  { label: "Válvula de Retenção para Sprinkler", href: "/valvula-retencao-sprinkler-sp" },
  { label: "Válvula de Alarme de Incêndio", href: "/valvula-alarme-incendio-sp" },
  // Ocupação
  { label: "VGA para Galpão Industrial", href: "/vga-galpao-industrial-sp" },
  { label: "VGA para Hospital", href: "/vga-hospital-sp" },
  { label: "VGA para Shopping Center", href: "/vga-shopping-center-sp" },
  { label: "VGA para Centro de Distribuição", href: "/vga-centro-distribuicao-sp" },
  { label: "VGA para Hotel", href: "/vga-hotel-sp" },
  { label: "VGA para Supermercado", href: "/vga-supermercado-sp" },
  // Preço
  { label: "Quanto Custa a VGA?", href: "/quanto-custa-vga-sprinkler-sp" },
];

const clusterPortaCortaFogo = [
  { label: "Manutenção de Porta Corta-Fogo em SP", href: "/manutencao-porta-corta-fogo-sp" },
  { label: "Adequação Porta Corta-Fogo AVCB SP", href: "/adequacao-porta-corta-fogo-avcb-sp" },
  { label: "Empresa de Manutenção Porta Corta-Fogo SP", href: "/empresa-manutencao-porta-corta-fogo-sp" },
  { label: "Laudo Técnico Porta Corta-Fogo SP", href: "/laudo-tecnico-porta-corta-fogo-sp" },
  { label: "Manutenção Porta Corta-Fogo ABC Paulista", href: "/manutencao-porta-corta-fogo-abc-paulista" },
  { label: "Manutenção Porta Corta-Fogo Campinas", href: "/manutencao-porta-corta-fogo-campinas" },
  { label: "Manutenção Porta Corta-Fogo Guarulhos", href: "/manutencao-porta-corta-fogo-guarulhos" },
  { label: "Manutenção Porta Corta-Fogo Santo Amaro SP", href: "/manutencao-porta-corta-fogo-santo-amaro-sp" },
  { label: "Manutenção Porta Corta-Fogo Zona Sul SP", href: "/manutencao-porta-corta-fogo-zona-sul-sp" },
  { label: "Orçamento Porta Corta-Fogo SP", href: "/orcamento-porta-corta-fogo-sp" },
  { label: "Porta Corta-Fogo Condenada SP", href: "/porta-corta-fogo-condenada-sp" },
  { label: "Porta Corta-Fogo Condomínio SP", href: "/porta-corta-fogo-condominio-sp" },
  { label: "Porta Corta-Fogo Galpão Industrial SP", href: "/porta-corta-fogo-galpao-industrial-sp" },
  { label: "Porta Corta-Fogo Hospital SP", href: "/porta-corta-fogo-hospital-sp" },
  { label: "Porta Corta-Fogo Hotel SP", href: "/porta-corta-fogo-hotel-sp" },
  { label: "Porta Corta-Fogo Não Fecha SP", href: "/porta-corta-fogo-nao-fecha-sp" },
  { label: "Troca de Mola Hidráulica Porta Corta-Fogo SP", href: "/troca-mola-hidraulica-porta-corta-fogo-sp" },
];

function Section({ title, color, items }: { title: string; color: string; items: { label: string; href: string }[] }) {
  return (
    <div className="mb-10">
      <h2 className={`text-xs font-black uppercase tracking-[0.2em] mb-4 px-4 py-2 rounded-full inline-block ${color}`}>
        {title} — {items.length} páginas
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            target="_blank"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function MapaPaginasPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12 bg-slate-950 text-white p-10 rounded-[2rem] border-l-8 border-red-600 shadow-2xl">
          <p className="text-red-500 font-black text-xs uppercase tracking-widest mb-2">Painel Interno — DRD2 Engenharia</p>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-3">
            Mapa de Todas as Páginas
          </h1>
          <p className="text-slate-400 font-medium text-base">
            Clique em qualquer página para abrir e visualizar. Para editar, acesse o arquivo correspondente em{" "}
            <code className="bg-white/10 px-2 py-0.5 rounded text-red-400 font-mono text-xs">src/app/[slug]/page.tsx</code>
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-black">
            <span className="bg-red-600 text-white px-3 py-1.5 rounded-full">
              {zonas.length + bairrosSP.length + grandesp.length} páginas de localização
            </span>
            <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full">
              {servicos.length} páginas de serviço
            </span>
            <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-full">
              {renovacoes.length} páginas de renovação
            </span>
            <span className="bg-orange-600 text-white px-3 py-1.5 rounded-full">
              {ocupacoes.length} páginas de ocupação
            </span>
            <span className="bg-rose-700 text-white px-3 py-1.5 rounded-full">
              {clcbPrincipal.length + renovacaoClcbOcupacoes.length + renovacaoClcbZonas.length + renovacaoClcbCidades.length + renovacaoClcbBairros.length} páginas CLCB
            </span>
            <span className="bg-yellow-600 text-white px-3 py-1.5 rounded-full">
              {alvaraBombeiro.length} páginas de alvará
            </span>
            <span className="bg-indigo-600 text-white px-3 py-1.5 rounded-full">
              {laudosBombeiro.length} páginas de laudo
            </span>
            <span className="bg-cyan-600 text-white px-3 py-1.5 rounded-full">
              {hidrantesOcupacao.length} páginas de hidrantes
            </span>
            <span className="bg-sky-600 text-white px-3 py-1.5 rounded-full">
              {sprinklersOcupacao.length} páginas de sprinklers
            </span>
            <span className="bg-amber-700 text-white px-3 py-1.5 rounded-full">
              {escadaPressurizada.length} páginas de escada pressurizada
            </span>
            <span className="bg-lime-700 text-white px-3 py-1.5 rounded-full">
              {gasEstanqueidade.length} páginas de gás / estanqueidade
            </span>
            <span className="bg-fuchsia-700 text-white px-3 py-1.5 rounded-full">
              {ptotepMapLinks.length} páginas de PTOTEP
            </span>
            <span className="bg-fuchsia-900 text-white px-3 py-1.5 rounded-full">
              {ptotepBlogLinks.length} blogs PTOTEP
            </span>
            <span className="bg-teal-600 text-white px-3 py-1.5 rounded-full">
              {clusterCondominio.length + clusterRestaurante.length} clusters locais
            </span>
            <span className="bg-rose-600 text-white px-3 py-1.5 rounded-full">
              {clusterExpansao.length} novas regiões (Expansão)
            </span>
            <span className="bg-red-800 text-white px-3 py-1.5 rounded-full">
              {clusterAlarme.length} páginas de alarme
            </span>
            <span className="bg-cyan-800 text-white px-3 py-1.5 rounded-full">
              {clusterHidrantesSeo.length} páginas de hidrantes SEO
            </span>
            <span className="bg-sky-800 text-white px-3 py-1.5 rounded-full">
              {clusterSprinklersSeo.length} páginas de sprinklers SEO
            </span>
            <span className="bg-orange-800 text-white px-3 py-1.5 rounded-full">
              {clusterProjetosIncendioSeo.length} páginas de projeto SEO
            </span>
            <span className="bg-red-700 text-white px-3 py-1.5 rounded-full">
              {clusterBrigadaSeo.length} páginas de brigada SEO
            </span>
            <span className="bg-violet-800 text-white px-3 py-1.5 rounded-full">
              {clusterSpdaSeo.length} páginas de SPDA SEO
            </span>
            <span className="bg-emerald-800 text-white px-3 py-1.5 rounded-full">
              {clusterRenovacaoBairrosSeo.length} renovacoes bairro SEO
            </span>
            <span className="bg-purple-800 text-white px-3 py-1.5 rounded-full">
              {clusterAvcbBairrosNovosSeo.length} AVCB bairro novos
            </span>
            <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full">
              {clusterVGA.length} páginas VGA
            </span>
            <span className="bg-red-500 text-white px-3 py-1.5 rounded-full">
              {clusterPortaCortaFogo.length} páginas Porta Corta-Fogo
            </span>

          </div>
        </div>

        <div className="mb-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-900">
              Decisões de Consolidação SEO
            </h2>
            <p className="text-xs text-slate-500 font-bold mt-2">
              Páginas mantidas como canônicas e URLs antigas preservadas com redirect 301/308.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {consolidacoesSeo.map((item) => (
              <div key={item.tema} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-3">{item.tema}</p>
                <div className="space-y-2 text-xs leading-relaxed">
                  <p><span className="font-black text-slate-900">Manter:</span> <code className="text-slate-700">{item.manter}</code></p>
                  <p><span className="font-black text-slate-900">Redirecionar:</span> <code className="text-slate-700 break-words">{item.redirecionar}</code></p>
                  <p className="text-slate-600 font-bold">{item.decisao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-amber-800 mb-4">
              Atalho Interno — Escada Pressurizada
            </h2>
            <div className="flex flex-wrap gap-2">
              {escadaPressurizada.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-amber-200 text-amber-900 hover:border-amber-700 hover:text-amber-800 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-lime-50 border border-lime-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-lime-800 mb-4">
              Atalho Interno — Gás / Estanqueidade
            </h2>
            <div className="flex flex-wrap gap-2">
              {gasEstanqueidade.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-lime-200 text-lime-900 hover:border-lime-700 hover:text-lime-800 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Zonas */}
        <Section
          title="Silos por Zona"
          color="bg-red-600 text-white"
          items={zonas}
        />

        {/* Bairros SP */}
        <Section
          title="Bairros de São Paulo"
          color="bg-red-100 text-red-700"
          items={bairrosSP}
        />

        {/* Grande SP */}
        <Section
          title="Grande São Paulo"
          color="bg-orange-100 text-orange-700"
          items={grandesp}
        />

        {/* Serviços */}
        <Section
          title="Serviços Principais"
          color="bg-blue-100 text-blue-700"
          items={servicos}
        />

        {/* Renovações */}
        <Section
          title="Renovações de AVCB por Segmento"
          color="bg-emerald-100 text-emerald-700"
          items={renovacoes}
        />

        {/* Ocupações */}
        <Section
          title="AVCB por Tipo de Ocupação"
          color="bg-purple-100 text-purple-700"
          items={ocupacoes}
        />

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* CLCB — Páginas pillar + ocupações + zonas + cidades + bairros      */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section
          title="CLCB — Páginas Principais (pillar)"
          color="bg-rose-700 text-white"
          items={clcbPrincipal}
        />

        <Section
          title="Renovação CLCB por Tipo de Ocupação"
          color="bg-rose-100 text-rose-700"
          items={renovacaoClcbOcupacoes}
        />

        <Section
          title="Renovação CLCB — Silos por Zona SP"
          color="bg-rose-200 text-rose-800"
          items={renovacaoClcbZonas}
        />

        <Section
          title="Renovação CLCB — Cidades (Grande SP + Interior)"
          color="bg-pink-100 text-pink-700"
          items={renovacaoClcbCidades}
        />

        <Section
          title="Renovação CLCB — Bairros de São Paulo"
          color="bg-pink-50 text-pink-800"
          items={renovacaoClcbBairros}
        />

        {/* Alvará do Bombeiro */}
        <Section
          title="Alvará do Bombeiro por Ocupação"
          color="bg-yellow-100 text-yellow-800"
          items={alvaraBombeiro}
        />

        {/* Laudo do Bombeiro */}
        <Section
          title="Laudo do Bombeiro por Ocupação"
          color="bg-indigo-100 text-indigo-800"
          items={laudosBombeiro}
        />

        {/* Hidrantes */}
        <Section
          title="Hidrantes por Ocupação"
          color="bg-cyan-100 text-cyan-800"
          items={hidrantesOcupacao}
        />

        {/* Sprinklers */}
        <Section
          title="Sprinklers por Ocupação"
          color="bg-sky-100 text-sky-800"
          items={sprinklersOcupacao}
        />

        {/* Escada Pressurizada */}
        <Section
          title="Escada Pressurizada"
          color="bg-amber-100 text-amber-800"
          items={escadaPressurizada}
        />

        {/* Gás e Estanqueidade */}
        <Section
          title="Gás / Estanqueidade"
          color="bg-lime-100 text-lime-800"
          items={gasEstanqueidade}
        />

        {/* PTOTEP */}
        <Section
          title="PTOTEP / Eventos Temporários"
          color="bg-fuchsia-100 text-fuchsia-800"
          items={ptotepMapLinks}
        />
        <Section
          title="Blog PTOTEP / Eventos Temporários"
          color="bg-fuchsia-900 text-white"
          items={ptotepBlogLinks}
        />

        {/* Alarme de Incendio */}
        <Section
          title="Cluster SEO: Alarme de Incêndio"
          color="bg-red-900 text-white"
          items={clusterAlarme}
        />

        {/* Hidrantes SEO */}
        <Section
          title="Cluster SEO: Hidrantes"
          color="bg-cyan-900 text-white"
          items={clusterHidrantesSeo}
        />

        {/* Sprinklers SEO */}
        <Section
          title="Cluster SEO: Sprinklers"
          color="bg-sky-900 text-white"
          items={clusterSprinklersSeo}
        />

        {/* VGA */}
        <Section
          title="Cluster SEO: Válvula de Governo e Alarme (VGA)"
          color="bg-orange-500 text-white"
          items={clusterVGA}
        />

        {/* Porta Corta-Fogo */}
        <Section
          title="Cluster SEO: Porta Corta-Fogo (Manutenção e Adequação)"
          color="bg-red-500 text-white"
          items={clusterPortaCortaFogo}
        />

        {/* Projetos de Incendio SEO */}
        <Section
          title="Cluster SEO: Projetos de Incêndio"
          color="bg-orange-900 text-white"
          items={clusterProjetosIncendioSeo}
        />

        {/* Brigada SEO */}
        <Section
          title="Cluster SEO: Brigada de Incêndio"
          color="bg-red-800 text-white"
          items={clusterBrigadaSeo}
        />

        {/* SPDA SEO */}
        <Section
          title="Cluster SEO: SPDA Para-raios"
          color="bg-violet-900 text-white"
          items={clusterSpdaSeo}
        />

        {/* Renovação AVCB por Bairro SEO */}
        <Section
          title="Cluster SEO: Renovação AVCB por Bairro"
          color="bg-emerald-900 text-white"
          items={clusterRenovacaoBairrosSeo}
        />

        {/* AVCB Bairros Novos SEO */}
        <Section
          title="Cluster SEO: AVCB Bairros Novos"
          color="bg-purple-900 text-white"
          items={clusterAvcbBairrosNovosSeo}
        />

        {/* Clusters Locais SEO */}
        <Section
          title="Cluster SEO: Renovação Condomínio"
          color="bg-teal-100 text-teal-800"
          items={clusterCondominio}
        />
        <Section
          title="Cluster SEO: Renovação Restaurante"
          color="bg-rose-100 text-rose-800"
          items={clusterRestaurante}
        />
        <Section
          title="Novas Regiões: Expansão (Guarulhos, Campinas, Santos)"
          color="bg-slate-900 text-white"
          items={clusterExpansao}
        />

        {/* Páginas Universal SEO — 29 páginas de alta intenção */}
        <Section
          title="🔥 Páginas Universal SEO — Alta Intenção (29 páginas)"
          color="bg-red-700 text-white"
          items={universalSeoPages}
        />


        {/* Rodapé informativo */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-black text-slate-900 uppercase italic text-sm mb-4">Onde editar cada tipo de página</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              { tipo: "Bairros e Zonas", caminho: "src/app/avcb-[bairro]/page.tsx" },
              { tipo: "Renovações", caminho: "src/app/renovacao-avcb-[segmento]/page.tsx" },
              { tipo: "Serviços", caminho: "src/app/[servico]/page.tsx" },
              { tipo: "Dados SEO das páginas novas", caminho: "src/data/pages/*.ts" },
              { tipo: "Dados SEO PTOTEP", caminho: "src/data/ptotepSeoPages.ts" },
              { tipo: "Dados de serviços antigos", caminho: "src/data/services.ts" },
              { tipo: "Menu principal", caminho: "src/components/Header.tsx" },
              { tipo: "Sitemap", caminho: "src/app/sitemap.ts" },
              { tipo: "Redirects 301", caminho: "next.config.mjs" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <span className="font-black text-slate-900 text-xs">{item.tipo}:</span>
                <code className="text-red-600 font-mono text-xs">{item.caminho}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
