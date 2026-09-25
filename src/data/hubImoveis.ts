// Página-índice "AVCB por tipo de imóvel".
// Gerado em 25/09/2026 a partir das páginas existentes em src/app.
// Quando duas páginas tratam exatamente do mesmo assunto, só uma entra aqui
// (a outra é candidata a ser unificada com redirecionamento 301).
// Ao criar uma nova página de tipo de imóvel, acrescente o link no grupo certo.

export type LinkImovel = { label: string; href: string };
export type GrupoImovel = { tipo: string; links: LinkImovel[] };

export const tiposDeImovel: GrupoImovel[] = [
  {
    "tipo": "Condomínios",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-condominio-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-condominio-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-condominio-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-condominio-sao-paulo"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/alarme-de-incendio-para-condominio-sao-paulo"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-de-hidrantes-para-condominio-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-de-sprinkler-para-condominio-sao-paulo"
      },
      {
        "label": "Laudo de alarme de incêndio",
        "href": "/laudo-alarme-incendio-condominio-sao-paulo"
      },
      {
        "label": "Laudo de hidrantes",
        "href": "/laudo-hidrante-condominio-sao-paulo"
      },
      {
        "label": "Laudo de sprinklers",
        "href": "/laudo-sprinkler-condominio-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Galpões, indústrias e centros de distribuição",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-galpao-industrial-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-galpao-industrial-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — galpão",
        "href": "/renovacao-clcb-galpao-industrial-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-galpao-industrial-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-galpao-industrial-sao-paulo"
      },
      {
        "label": "Projeto de incêndio",
        "href": "/projeto-incendio-galpao-industrial-avcb-sp"
      },
      {
        "label": "Projeto de incêndio — centro de distribuição",
        "href": "/projeto-incendio-centro-distribuicao-sp"
      },
      {
        "label": "Projeto de incêndio — indústria química",
        "href": "/projeto-incendio-industria-quimica-sp"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/alarme-de-incendio-galpao-industrial-sp"
      },
      {
        "label": "Alarme de incêndio — centro de distribuição",
        "href": "/alarme-incendio-centro-distribuicao-sp"
      },
      {
        "label": "Alarme de incêndio — indústria química",
        "href": "/sistema-alarme-incendio-industria-quimica-sp"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-de-hidrantes-para-galpao-sao-paulo"
      },
      {
        "label": "Sistema de hidrantes — centro de distribuição",
        "href": "/hidrante-centro-distribuicao-sp"
      },
      {
        "label": "Sistema de hidrantes — indústria",
        "href": "/sistema-de-hidrantes-para-industria-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-sprinkler-galpao-industrial-avcb-sp"
      },
      {
        "label": "Sistema de sprinklers — centro de distribuição",
        "href": "/sprinkler-centro-distribuicao-sp"
      },
      {
        "label": "Sistema de sprinklers — indústria",
        "href": "/sistema-de-sprinkler-para-industria-sao-paulo"
      },
      {
        "label": "VGA (válvula de governo e alarme) — centro de distribuição",
        "href": "/vga-centro-distribuicao-sp"
      },
      {
        "label": "VGA (válvula de governo e alarme) — galpão",
        "href": "/vga-galpao-industrial-sp"
      },
      {
        "label": "Escada pressurizada",
        "href": "/escada-pressurizada-galpao-industrial-sp"
      },
      {
        "label": "Porta corta-fogo",
        "href": "/porta-corta-fogo-galpao-industrial-sp"
      },
      {
        "label": "Brigada de incêndio",
        "href": "/brigada-incendio-galpao-industrial-sp"
      },
      {
        "label": "Brigada de incêndio — centro de distribuição",
        "href": "/brigada-incendio-centro-distribuicao-sp"
      },
      {
        "label": "Laudo de hidrantes — galpão",
        "href": "/laudo-hidrante-galpao-sao-paulo"
      },
      {
        "label": "Laudo de sprinklers — galpão",
        "href": "/laudo-sprinkler-galpao-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Hospitais, clínicas e consultórios",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-hospital-clinica-sao-paulo"
      },
      {
        "label": "AVCB — consultórios médicos e odontológicos",
        "href": "/avcb-consultorios-medicos-odontologicos-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-hospital-clinica-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — consultório",
        "href": "/renovacao-avcb-consultorio-medico-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — clínica",
        "href": "/renovacao-clcb-clinica-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — clínica odontológica",
        "href": "/renovacao-clcb-odontologica-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — consultório",
        "href": "/renovacao-clcb-consultorio-clinica-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-hospital-clinica-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro — consultório",
        "href": "/alvara-bombeiro-consultorio-medico-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-hospital-clinica-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — consultório",
        "href": "/laudo-bombeiro-consultorio-medico-sao-paulo"
      },
      {
        "label": "Projeto de incêndio",
        "href": "/projeto-incendio-hospital-sp"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/alarme-de-incendio-hospital-clinica-sp"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-hidrante-hospital-avcb-sp"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-sprinkler-hospital-avcb-sp"
      },
      {
        "label": "VGA (válvula de governo e alarme)",
        "href": "/vga-hospital-sp"
      },
      {
        "label": "Escada pressurizada",
        "href": "/escada-pressurizada-hospital-sp"
      },
      {
        "label": "Porta corta-fogo",
        "href": "/porta-corta-fogo-hospital-sp"
      },
      {
        "label": "Brigada de incêndio",
        "href": "/brigada-incendio-hospital-sp"
      },
      {
        "label": "Laudo de sprinklers — clínica",
        "href": "/laudo-sprinkler-clinica-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Escolas e creches",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-escola-sao-paulo"
      },
      {
        "label": "AVCB — creche",
        "href": "/avcb-para-creche-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-escola-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — creche",
        "href": "/renovacao-avcb-creche-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-escola-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-escola-faculdade-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro — creche",
        "href": "/alvara-bombeiro-creche-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-escola-faculdade-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — creche",
        "href": "/laudo-bombeiro-creche-sao-paulo"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/alarme-de-incendio-escola-faculdade-sp"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-de-hidrantes-para-escola-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-de-sprinkler-para-escola-sao-paulo"
      },
      {
        "label": "Laudo de alarme de incêndio",
        "href": "/laudo-alarme-incendio-escola-sao-paulo"
      },
      {
        "label": "Laudo de hidrantes",
        "href": "/laudo-hidrante-escola-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Hotéis, pousadas e hostels",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-hostel-sao-paulo"
      },
      {
        "label": "AVCB — hotéis e pousadas",
        "href": "/avcb-hoteis-pousadas-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-hotel-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — hostel",
        "href": "/renovacao-avcb-hostel-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — pousada",
        "href": "/renovacao-avcb-pousada-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-hotel-pousada-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro — hostel",
        "href": "/alvara-bombeiro-hostel-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro — pousada",
        "href": "/alvara-bombeiro-pousada-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-hotel-pousada-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — hostel",
        "href": "/laudo-bombeiro-hostel-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — pousada",
        "href": "/laudo-bombeiro-pousada-sao-paulo"
      },
      {
        "label": "Projeto de incêndio",
        "href": "/projeto-incendio-hotel-sp"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/sistema-alarme-incendio-hotel-avcb-sp"
      },
      {
        "label": "Sistema de hidrantes — pousada",
        "href": "/sistema-de-hidrantes-para-pousada-sao-paulo"
      },
      {
        "label": "Sistema de hidrantes — hotel",
        "href": "/sistema-hidrante-hotel-avcb-sp"
      },
      {
        "label": "Sistema de sprinklers — pousada",
        "href": "/sistema-de-sprinkler-para-pousada-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers — hotel",
        "href": "/sistema-sprinkler-hotel-avcb-sp"
      },
      {
        "label": "VGA (válvula de governo e alarme)",
        "href": "/vga-hotel-sp"
      },
      {
        "label": "Escada pressurizada",
        "href": "/escada-pressurizada-hotel-sp"
      },
      {
        "label": "Porta corta-fogo",
        "href": "/porta-corta-fogo-hotel-sp"
      },
      {
        "label": "Brigada de incêndio",
        "href": "/brigada-incendio-hotel-sp"
      },
      {
        "label": "Laudo de alarme de incêndio",
        "href": "/laudo-alarme-incendio-hotel-sao-paulo"
      },
      {
        "label": "Laudo de sprinklers",
        "href": "/laudo-sprinkler-hotel-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Supermercados",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-supermercado-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-supermercado-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-supermercado-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-supermercado-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-supermercado-sao-paulo"
      },
      {
        "label": "Projeto de incêndio",
        "href": "/projeto-incendio-supermercado-sp"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/alarme-incendio-supermercado-avcb-sp"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/hidrante-supermercado-avcb-sp"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sprinkler-supermercado-avcb-sp"
      },
      {
        "label": "VGA (válvula de governo e alarme)",
        "href": "/vga-supermercado-sp"
      },
      {
        "label": "Brigada de incêndio",
        "href": "/brigada-incendio-supermercado-sp"
      }
    ]
  },
  {
    "tipo": "Shoppings",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-shopping-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-shopping-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-shopping-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-shopping-sao-paulo"
      },
      {
        "label": "Projeto de incêndio",
        "href": "/projeto-incendio-shopping-center-sp"
      },
      {
        "label": "Alarme de incêndio",
        "href": "/sistema-alarme-incendio-shopping-center-sp"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-hidrante-shopping-center-sp"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-sprinkler-shopping-center-sp"
      },
      {
        "label": "VGA (válvula de governo e alarme)",
        "href": "/vga-shopping-center-sp"
      },
      {
        "label": "Escada pressurizada",
        "href": "/escada-pressurizada-shopping-sp"
      },
      {
        "label": "Brigada de incêndio",
        "href": "/brigada-incendio-shopping-sp"
      }
    ]
  },
  {
    "tipo": "Escritórios e edifícios comerciais",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-escritorio-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-escritorio-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-escritorio-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-escritorio-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — escritório",
        "href": "/laudo-bombeiro-escritorio-sao-paulo"
      },
      {
        "label": "Projeto de incêndio — edifício comercial",
        "href": "/projeto-incendio-edificio-comercial-sp"
      },
      {
        "label": "Alarme de incêndio — escritório",
        "href": "/alarme-de-incendio-comercial-escritorio-sp"
      },
      {
        "label": "Sistema de hidrantes — edifício comercial",
        "href": "/sistema-hidrante-edificio-comercial-sp"
      },
      {
        "label": "Sistema de sprinklers — edifício comercial",
        "href": "/sistema-sprinkler-edificio-comercial-sp"
      },
      {
        "label": "Escada pressurizada — edifício comercial",
        "href": "/escada-pressurizada-edificio-comercial-sp"
      },
      {
        "label": "Brigada de incêndio — prédio comercial",
        "href": "/brigada-incendio-predio-comercial-sp"
      }
    ]
  },
  {
    "tipo": "Bares, restaurantes e padarias",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-padaria-sao-paulo"
      },
      {
        "label": "AVCB — restaurante",
        "href": "/avcb-restaurante-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — padaria",
        "href": "/renovacao-avcb-padaria-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — restaurante",
        "href": "/renovacao-avcb-restaurante-sao-paulo"
      },
      {
        "label": "Renovação de AVCB — restaurante em Pinheiros",
        "href": "/renovacao-avcb-restaurante-pinheiros"
      },
      {
        "label": "Renovação de AVCB — restaurante na Vila Madalena",
        "href": "/renovacao-avcb-restaurante-vila-madalena"
      },
      {
        "label": "Renovação de CLCB — bar",
        "href": "/renovacao-clcb-bar-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — padaria",
        "href": "/renovacao-clcb-padaria-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — restaurante",
        "href": "/renovacao-clcb-restaurante-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-bar-restaurante-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro — padaria",
        "href": "/alvara-bombeiro-padaria-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-bar-restaurante-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro — padaria",
        "href": "/laudo-bombeiro-padaria-sao-paulo"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-de-hidrantes-para-restaurante-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-de-sprinkler-para-restaurante-sao-paulo"
      },
      {
        "label": "Laudo de alarme de incêndio",
        "href": "/laudo-alarme-incendio-restaurante-sao-paulo"
      },
      {
        "label": "Laudo de hidrantes",
        "href": "/laudo-hidrante-restaurante-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Igrejas",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-igreja-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-igreja-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-igreja-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-igreja-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-igreja-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Academias",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-academia-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-academia-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-academia-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-academia-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-academia-sao-paulo"
      },
      {
        "label": "Sistema de hidrantes",
        "href": "/sistema-de-hidrantes-para-academia-sao-paulo"
      },
      {
        "label": "Sistema de sprinklers",
        "href": "/sistema-de-sprinkler-para-academia-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Salões de festas",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-salao-de-festas-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-salao-de-festas-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-salao-festas-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-salao-de-festas-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-salao-de-festas-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Casas noturnas e boates",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-casas-noturnas-boates-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-casa-noturna-boate-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-casa-noturna-boate-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-casa-noturna-boate-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Farmácias e drogarias",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-farmacia-drogaria-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-farmacia-drogaria-sao-paulo"
      },
      {
        "label": "Renovação de CLCB",
        "href": "/renovacao-clcb-farmacia-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-farmacia-drogaria-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-farmacia-drogaria-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Casas de repouso",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-para-casa-de-repouso-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-casa-de-repouso-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-casa-de-repouso-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-casa-de-repouso-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Clínicas veterinárias",
    "links": [
      {
        "label": "AVCB — clínica e hospital veterinário",
        "href": "/avcb-clinica-hospital-veterinario-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Motéis",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-motel-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-motel-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-motel-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-motel-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Postos de combustível",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-posto-combustivel-sao-paulo"
      },
      {
        "label": "Renovação de AVCB",
        "href": "/renovacao-avcb-posto-combustivel-sao-paulo"
      },
      {
        "label": "Alvará do Bombeiro",
        "href": "/alvara-bombeiro-posto-combustivel-sao-paulo"
      },
      {
        "label": "Laudo do Bombeiro",
        "href": "/laudo-bombeiro-posto-combustivel-sao-paulo"
      }
    ]
  },
  {
    "tipo": "Estacionamentos",
    "links": [
      {
        "label": "AVCB",
        "href": "/avcb-estacionamento-garagem-sao-paulo"
      }
    ]
  }
];
