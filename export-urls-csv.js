/**
 * export-urls-csv.js
 * Gera um arquivo CSV com todas as URLs atualizadas para submissão no GSC.
 * Uso: node export-urls-csv.js
 * Saída: urls-gsc-drd2.csv
 */

const fs = require("fs");

const BASE_URL = "https://drd2engenharia.com.br";
const TODAY = "2026-04-29";

const URLS = [
  // ── HOME ─────────────────────────────────────────────────────────────────
  { url: "/",                                              tipo: "Home",       prioridade: "1.0", categoria: "Principal" },

  // ── HUBS PRINCIPAIS ──────────────────────────────────────────────────────
  { url: "/avcb-sao-paulo",                               tipo: "Hub",        prioridade: "0.9", categoria: "Principal" },
  { url: "/renovacao-avcb",                               tipo: "Hub",        prioridade: "0.9", categoria: "Principal" },
  { url: "/clcb-sao-paulo",                               tipo: "Hub",        prioridade: "0.9", categoria: "Principal" },
  { url: "/empresa-avcb-sao-paulo",                       tipo: "Hub",        prioridade: "0.9", categoria: "Principal" },
  { url: "/engenheiro-avcb-sao-paulo",                    tipo: "Hub",        prioridade: "0.9", categoria: "Principal" },

  // ── OCUPAÇÕES — ÁLVARÁ BOMBEIRO ──────────────────────────────────────────
  { url: "/alvara-bombeiro-bar-restaurante-sao-paulo",    tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-supermercado-sao-paulo",       tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-hospital-clinica-sao-paulo",   tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-escola-faculdade-sao-paulo",   tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-condominio-sao-paulo",         tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-academia-sao-paulo",           tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-hotel-pousada-sao-paulo",      tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-hostel-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-motel-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-pousada-sao-paulo",            tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-shopping-sao-paulo",           tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-igreja-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-creche-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-casa-de-repouso-sao-paulo",    tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-farmacia-drogaria-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-padaria-sao-paulo",            tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-escritorio-sao-paulo",         tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-galpao-industrial-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-posto-combustivel-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-salao-de-festas-sao-paulo",    tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-casa-noturna-boate-sao-paulo", tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-consultorio-medico-sao-paulo", tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-restaurante-sao-paulo",        tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },
  { url: "/alvara-bombeiro-escola-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Álvará Bombeiro" },

  // ── OCUPAÇÕES — RENOVAÇÃO AVCB ───────────────────────────────────────────
  { url: "/renovacao-avcb-condominio-sao-paulo",          tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-galpao-industrial-sao-paulo",   tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-hostel-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-escola-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-igreja-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-motel-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-restaurante-sao-paulo",         tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-supermercado-sao-paulo",        tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-hotel-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-hospital-clinica-sao-paulo",    tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-academia-sao-paulo",            tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-casa-de-repouso-sao-paulo",     tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-casa-noturna-boate-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-farmacia-drogaria-sao-paulo",   tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-bares-restaurantes-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-salao-de-festas-sao-paulo",     tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-pousada-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-posto-combustivel-sao-paulo",   tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-creche-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-escritorio-sao-paulo",          tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-padaria-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-shopping-sao-paulo",            tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },
  { url: "/renovacao-avcb-consultorio-medico-sao-paulo",  tipo: "Ocupação",   prioridade: "0.8", categoria: "Renovação AVCB" },

  // ── OCUPAÇÕES — AVCB POR TIPO ────────────────────────────────────────────
  { url: "/avcb-condominio-sao-paulo",                    tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-condominio-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-hospital-clinica-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-escola-faculdade-sao-paulo",              tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-escola-sao-paulo",                   tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-restaurante-sao-paulo",                   tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-bares-restaurantes-sao-paulo",            tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-supermercado-sao-paulo",                  tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-salao-de-festas-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-hoteis-pousadas-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-hostel-sao-paulo",                        tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-motel-sao-paulo",                         tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-pousada-sao-paulo",                       tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-posto-combustivel-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-galpao-industrial-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-comercial-escritorio-sao-paulo",          tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-creche-sao-paulo",                   tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-casa-de-repouso-sao-paulo",          tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-academia-sao-paulo",                 tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-escritorio-sao-paulo",               tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-farmacia-drogaria-sao-paulo",             tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-padaria-sao-paulo",                  tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-shopping-sao-paulo",                 tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-casas-noturnas-boates-sao-paulo",         tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-consultorios-medicos-odontologicos-sao-paulo", tipo: "Ocupação", prioridade: "0.8", categoria: "AVCB por Tipo" },
  { url: "/avcb-para-igreja-sao-paulo",                   tipo: "Ocupação",   prioridade: "0.8", categoria: "AVCB por Tipo" },

  // ── BAIRROS ───────────────────────────────────────────────────────────────
  { url: "/avcb-moema",              tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-itaim-bibi",         tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-brooklin",           tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-campo-belo",         tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-sacoma",             tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-jabaquara",          tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-saude",              tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-santo-amaro",        tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-vila-olimpia",       tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-vila-mariana",       tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-ipiranga",           tipo: "Bairro", prioridade: "0.7", categoria: "Zona Sul" },
  { url: "/avcb-morumbi",            tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-pinheiros",          tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-vila-madalena",      tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-perdizes",           tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-lapa",               tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-butanta",            tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-vila-leopoldina",    tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-osasco",             tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-barueri-alphaville", tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-alphaville-barueri", tipo: "Bairro", prioridade: "0.7", categoria: "Zona Oeste" },
  { url: "/avcb-santana",            tipo: "Bairro", prioridade: "0.7", categoria: "Zona Norte" },
  { url: "/avcb-casa-verde",         tipo: "Bairro", prioridade: "0.7", categoria: "Zona Norte" },
  { url: "/avcb-tucuruvi",           tipo: "Bairro", prioridade: "0.7", categoria: "Zona Norte" },
  { url: "/avcb-limao",              tipo: "Bairro", prioridade: "0.7", categoria: "Zona Norte" },
  { url: "/avcb-jacana",             tipo: "Bairro", prioridade: "0.7", categoria: "Zona Norte" },
  { url: "/avcb-tatuape",            tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-mooca",              tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-analia-franco",      tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-penha",              tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-itaquera",           tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-aricanduva",         tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-vila-prudente",      tipo: "Bairro", prioridade: "0.7", categoria: "Zona Leste" },
  { url: "/avcb-centro-sao-paulo",   tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-republica",          tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-bela-vista",         tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-liberdade",          tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-consolacao",         tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-se",                 tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-centro-bela-vista",  tipo: "Bairro", prioridade: "0.7", categoria: "Centro" },
  { url: "/avcb-guarulhos",          tipo: "Bairro", prioridade: "0.7", categoria: "Grande SP" },
  { url: "/avcb-santo-andre",        tipo: "Bairro", prioridade: "0.7", categoria: "Grande SP" },
  { url: "/avcb-sao-bernardo",       tipo: "Bairro", prioridade: "0.7", categoria: "Grande SP" },
  { url: "/avcb-sao-caetano",        tipo: "Bairro", prioridade: "0.7", categoria: "Grande SP" },
  { url: "/avcb-zona-sul",           tipo: "Zona",   prioridade: "0.7", categoria: "Zona" },
  { url: "/avcb-zona-norte-sao-paulo", tipo: "Zona", prioridade: "0.7", categoria: "Zona" },
  { url: "/avcb-zona-leste-sao-paulo", tipo: "Zona", prioridade: "0.7", categoria: "Zona" },
  { url: "/avcb-zona-oeste-sao-paulo", tipo: "Zona", prioridade: "0.7", categoria: "Zona" },
];

// ── Gerar CSV ─────────────────────────────────────────────────────────────────
const header = "URL Completa,Slug,Tipo,Prioridade,Categoria,Atualizado Em,Acao GSC";
const rows = URLS.map(u => {
  const full = BASE_URL + u.url;
  return [full, u.url, u.tipo, u.prioridade, u.categoria, TODAY, "Solicitar Indexacao"].join(",");
});

const csv = [header, ...rows].join("\n");
fs.writeFileSync("urls-gsc-drd2.csv", csv, "utf8");

console.log("─────────────────────────────────────────────");
console.log(" DRD2 — Exportação de URLs para GSC");
console.log("─────────────────────────────────────────────");
console.log(" Total de URLs: " + URLS.length);
console.log(" Arquivo salvo: urls-gsc-drd2.csv");
console.log(" Abra no Excel ou Google Planilhas!");
console.log("─────────────────────────────────────────────");
