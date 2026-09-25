// Páginas-índice "AVCB e CLCB por região".
// Gerado em 25/09/2026 a partir das páginas de bairro/cidade existentes em src/app.
// Ao criar uma nova página de bairro ou cidade, acrescente o link aqui para que
// ela não fique isolada (sem nenhum link apontando para ela).

export type LinkRegiao = { label: string; href: string };
export type LocalAtendido = { nome: string; links: LinkRegiao[] };
export type GrupoRegiao = { regiao: string; paginasDaRegiao: LinkRegiao[]; locais: LocalAtendido[] };

export const regioesAtendidas: GrupoRegiao[] = [
  {
    "regiao": "Centro de São Paulo",
    "paginasDaRegiao": [
      {
        "label": "AVCB — Centro",
        "href": "/avcb-centro-sao-paulo"
      }
    ],
    "locais": [
      {
        "nome": "Aclimação",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-aclimacao-sao-paulo"
          }
        ]
      },
      {
        "nome": "Bela Vista",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-bela-vista"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-bela-vista"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-bela-vista-sao-paulo"
          }
        ]
      },
      {
        "nome": "Bom Retiro",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-bom-retiro"
          }
        ]
      },
      {
        "nome": "Cambuci",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-cambuci-sao-paulo"
          }
        ]
      },
      {
        "nome": "Centro (região da Bela Vista)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-centro-bela-vista"
          }
        ]
      },
      {
        "nome": "Centro de São Paulo",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-centro-sao-paulo"
          }
        ]
      },
      {
        "nome": "Consolação",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-consolacao"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-consolacao"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-consolacao"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-consolacao-sao-paulo"
          }
        ]
      },
      {
        "nome": "Higienópolis",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-higienopolis"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-higienopolis"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-higienopolis"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-higienopolis-sao-paulo"
          }
        ]
      },
      {
        "nome": "Liberdade",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-liberdade"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-liberdade"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-liberdade-sao-paulo"
          }
        ]
      },
      {
        "nome": "Paraíso",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-paraiso"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-paraiso"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-paraiso-sao-paulo"
          }
        ]
      },
      {
        "nome": "República",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-republica"
          }
        ]
      },
      {
        "nome": "Santa Cecília",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santa-cecilia"
          }
        ]
      },
      {
        "nome": "Sé",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-se"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-se"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Zona Sul de São Paulo",
    "paginasDaRegiao": [
      {
        "label": "AVCB — Zona Sul",
        "href": "/avcb-zona-sul"
      },
      {
        "label": "Renovação de CLCB — Zona Sul",
        "href": "/renovacao-clcb-zona-sul-sao-paulo"
      }
    ],
    "locais": [
      {
        "nome": "Brooklin",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-brooklin"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-brooklin"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-brooklin-sao-paulo"
          }
        ]
      },
      {
        "nome": "Campo Belo",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campo-belo"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-campo-belo"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-campo-belo-sao-paulo"
          }
        ]
      },
      {
        "nome": "Campo Grande",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campo-grande"
          }
        ]
      },
      {
        "nome": "Campo Limpo",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-campo-limpo-sao-paulo"
          }
        ]
      },
      {
        "nome": "Capão Redondo",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-capao-redondo-sao-paulo"
          }
        ]
      },
      {
        "nome": "Chácara Klabin",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-chacara-klabin"
          }
        ]
      },
      {
        "nome": "Chácara Santo Antônio",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-chacara-santo-antonio"
          }
        ]
      },
      {
        "nome": "Cidade Monções",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-cidade-moncoes"
          }
        ]
      },
      {
        "nome": "Cursino",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-cursino-sao-paulo"
          }
        ]
      },
      {
        "nome": "Grajaú",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-graja-sao-paulo"
          }
        ]
      },
      {
        "nome": "Interlagos",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-interlagos-sao-paulo"
          }
        ]
      },
      {
        "nome": "Ipiranga",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-ipiranga"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-ipiranga"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-ipiranga"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-ipiranga-sao-paulo"
          }
        ]
      },
      {
        "nome": "Jabaquara",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-jabaquara"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-jabaquara"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-jabaquara"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-jabaquara-sao-paulo"
          }
        ]
      },
      {
        "nome": "M'Boi Mirim",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-mboi-mirim-sao-paulo"
          }
        ]
      },
      {
        "nome": "Moema",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-moema"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-moema"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-moema-sao-paulo"
          }
        ]
      },
      {
        "nome": "Moema Pássaros",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-moema-passaros"
          }
        ]
      },
      {
        "nome": "Moema Índios",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-moema-indios"
          }
        ]
      },
      {
        "nome": "Morumbi",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-morumbi"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-morumbi"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-morumbi"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-morumbi-sao-paulo"
          }
        ]
      },
      {
        "nome": "Sacomã",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sacoma"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sacoma-sao-paulo"
          }
        ]
      },
      {
        "nome": "Santo Amaro",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santo-amaro"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-santo-amaro"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-santo-amaro-sao-paulo"
          }
        ]
      },
      {
        "nome": "Saúde",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-saude"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-saude"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-saude"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-saude-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Andrade",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-andrade"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-andrade-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Clementino",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-clementino"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-clementino"
          }
        ]
      },
      {
        "nome": "Vila Mariana",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-mariana"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-mariana"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-mariana-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Nova Conceição",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-nova-conceicao"
          }
        ]
      },
      {
        "nome": "Vila Olímpia",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-olimpia"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-olimpia"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-olimpia-sao-paulo"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Zona Oeste de São Paulo",
    "paginasDaRegiao": [
      {
        "label": "AVCB — Zona Oeste",
        "href": "/avcb-zona-oeste-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — Zona Oeste",
        "href": "/renovacao-clcb-zona-oeste-sao-paulo"
      }
    ],
    "locais": [
      {
        "nome": "Barra Funda",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-barra-funda"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-barra-funda"
          }
        ]
      },
      {
        "nome": "Butantã",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-butanta"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-butanta-sao-paulo"
          }
        ]
      },
      {
        "nome": "Itaim Bibi",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-itaim-bibi"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-itaim-bibi"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-itaim-bibi-sao-paulo"
          }
        ]
      },
      {
        "nome": "Jardins",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-jardins"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-jardins"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-jardins-sao-paulo"
          }
        ]
      },
      {
        "nome": "Lapa",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-lapa"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-lapa"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-lapa-sao-paulo"
          }
        ]
      },
      {
        "nome": "Perdizes",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-perdizes"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-perdizes"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-perdizes-sao-paulo"
          }
        ]
      },
      {
        "nome": "Pinheiros",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-pinheiros"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-pinheiros"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-pinheiros-sao-paulo"
          }
        ]
      },
      {
        "nome": "Pompeia",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-pompeia"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-pompeia-sao-paulo"
          }
        ]
      },
      {
        "nome": "Rio Pequeno",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-rio-pequeno-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Ipojuca",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-ipojuca"
          }
        ]
      },
      {
        "nome": "Vila Leopoldina",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-leopoldina"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-vila-leopoldina"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-leopoldina"
          }
        ]
      },
      {
        "nome": "Vila Madalena",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-madalena"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-vila-madalena"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-madalena-sao-paulo"
          }
        ]
      },
      {
        "nome": "Água Branca",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-agua-branca"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Zona Norte de São Paulo",
    "paginasDaRegiao": [
      {
        "label": "AVCB — Zona Norte",
        "href": "/avcb-zona-norte-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — Zona Norte",
        "href": "/renovacao-clcb-zona-norte-sao-paulo"
      }
    ],
    "locais": [
      {
        "nome": "Altos de Santana",
        "links": [
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-altos-de-santana"
          }
        ]
      },
      {
        "nome": "Brasilândia",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-brasilandia-sao-paulo"
          }
        ]
      },
      {
        "nome": "Casa Verde",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-casa-verde"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-casa-verde"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-casa-verde-sao-paulo"
          }
        ]
      },
      {
        "nome": "Freguesia do Ó",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-freguesia-do-o"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-freguesia-do-o"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-freguesia-do-o-sao-paulo"
          }
        ]
      },
      {
        "nome": "Jaçanã",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-jacana"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-jacana"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-jacana-sao-paulo"
          }
        ]
      },
      {
        "nome": "Limão",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-limao"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-limao"
          }
        ]
      },
      {
        "nome": "Mandaqui",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-mandaqui-sao-paulo"
          }
        ]
      },
      {
        "nome": "Pirituba",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-pirituba-sao-paulo"
          }
        ]
      },
      {
        "nome": "Santana",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santana"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-santana"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-santana"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-santana-sao-paulo"
          }
        ]
      },
      {
        "nome": "Tremembé",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-tremembe-sao-paulo"
          }
        ]
      },
      {
        "nome": "Tucuruvi",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-tucuruvi"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-tucuruvi"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-tucuruvi"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-tucuruvi-sao-paulo"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Zona Leste de São Paulo",
    "paginasDaRegiao": [
      {
        "label": "AVCB — Zona Leste",
        "href": "/avcb-zona-leste-sao-paulo"
      },
      {
        "label": "Renovação de CLCB — Zona Leste",
        "href": "/renovacao-clcb-zona-leste-sao-paulo"
      }
    ],
    "locais": [
      {
        "nome": "Anália Franco",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-analia-franco"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-analia-franco"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-analia-franco"
          }
        ]
      },
      {
        "nome": "Aricanduva",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-aricanduva"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-aricanduva"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-aricanduva-sao-paulo"
          }
        ]
      },
      {
        "nome": "Belém",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-belem-sao-paulo"
          }
        ]
      },
      {
        "nome": "Brás",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-bras-sao-paulo"
          }
        ]
      },
      {
        "nome": "Cangaíba",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-cangaiba-sao-paulo"
          }
        ]
      },
      {
        "nome": "Carrão",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-carrao"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-carrao"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-carrao-sao-paulo"
          }
        ]
      },
      {
        "nome": "Itaquera",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-itaquera"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-itaquera"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-itaquera-sao-paulo"
          }
        ]
      },
      {
        "nome": "Mooca",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-mooca"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-mooca"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-mooca-sao-paulo"
          }
        ]
      },
      {
        "nome": "Penha",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-penha"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-penha"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-penha-sao-paulo"
          }
        ]
      },
      {
        "nome": "Sapopemba",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sapopemba"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-sapopemba"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sapopemba-sao-paulo"
          }
        ]
      },
      {
        "nome": "São Mateus",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sao-mateus-sao-paulo"
          }
        ]
      },
      {
        "nome": "São Miguel Paulista",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sao-miguel-paulista-sao-paulo"
          }
        ]
      },
      {
        "nome": "Tatuapé",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-tatuape"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-tatuape"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-tatuape-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Formosa",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-formosa-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Prudente",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-prudente"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-vila-prudente"
          },
          {
            "label": "Renovação de AVCB de condomínio",
            "href": "/renovacao-avcb-condominio-vila-prudente"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-vila-prudente-sao-paulo"
          }
        ]
      },
      {
        "nome": "Vila Ré",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-vila-re"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-vila-re"
          }
        ]
      },
      {
        "nome": "Água Rasa",
        "links": [
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-agua-rasa-sao-paulo"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Grande São Paulo e ABC",
    "paginasDaRegiao": [],
    "locais": [
      {
        "nome": "Alphaville (Barueri)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-alphaville-barueri"
          }
        ]
      },
      {
        "nome": "Bonsucesso (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-bonsucesso"
          }
        ]
      },
      {
        "nome": "Carapicuíba",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-carapicuiba"
          }
        ]
      },
      {
        "nome": "Centro de Guarulhos",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-centro"
          }
        ]
      },
      {
        "nome": "Diadema",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-diadema"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-diadema"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-diadema"
          }
        ]
      },
      {
        "nome": "Guarulhos",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-guarulhos"
          }
        ]
      },
      {
        "nome": "Macedo (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-macedo"
          }
        ]
      },
      {
        "nome": "Mauá",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-maua"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-maua"
          }
        ]
      },
      {
        "nome": "Mogi das Cruzes",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-mogi-das-cruzes"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-mogi-das-cruzes"
          }
        ]
      },
      {
        "nome": "Osasco",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-osasco"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-osasco"
          }
        ]
      },
      {
        "nome": "Parque Maia (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-maia"
          }
        ]
      },
      {
        "nome": "Pimentas (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-pimentas"
          }
        ]
      },
      {
        "nome": "Poá",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-poa"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-poa"
          }
        ]
      },
      {
        "nome": "Região do Aeroporto (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-aeroporto"
          }
        ]
      },
      {
        "nome": "Santo André",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santo-andre"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-santo-andre"
          }
        ]
      },
      {
        "nome": "Suzano",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-suzano"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-suzano"
          }
        ]
      },
      {
        "nome": "São Bernardo do Campo",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sao-bernardo"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sao-bernardo"
          }
        ]
      },
      {
        "nome": "São Caetano do Sul",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sao-caetano"
          }
        ]
      },
      {
        "nome": "Taboão da Serra",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-taboao-da-serra"
          }
        ]
      },
      {
        "nome": "Vila Augusta (Guarulhos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guarulhos-vila-augusta"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Litoral (Baixada Santista)",
    "paginasDaRegiao": [],
    "locais": [
      {
        "nome": "Aparecida (Santos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-aparecida"
          }
        ]
      },
      {
        "nome": "Bertioga",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-bertioga"
          }
        ]
      },
      {
        "nome": "Boqueirão (Santos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-boqueirao"
          }
        ]
      },
      {
        "nome": "Centro de Santos",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-centro"
          }
        ]
      },
      {
        "nome": "Cubatão",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-cubatao"
          }
        ]
      },
      {
        "nome": "Embaré (Santos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-embare"
          }
        ]
      },
      {
        "nome": "Gonzaga (Santos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-gonzaga"
          }
        ]
      },
      {
        "nome": "Guarujá",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-guaruja"
          }
        ]
      },
      {
        "nome": "Itanhaém",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-itanhaem"
          }
        ]
      },
      {
        "nome": "Ponta da Praia (Santos)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos-ponta-da-praia"
          }
        ]
      },
      {
        "nome": "Praia Grande",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-praia-grande"
          }
        ]
      },
      {
        "nome": "Santos",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-santos"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-santos"
          }
        ]
      },
      {
        "nome": "São Vicente",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sao-vicente"
          }
        ]
      }
    ]
  },
  {
    "regiao": "Interior de São Paulo",
    "paginasDaRegiao": [],
    "locais": [
      {
        "nome": "Barão Geraldo (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-barao-geraldo"
          }
        ]
      },
      {
        "nome": "Cambuí (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-cambui"
          }
        ]
      },
      {
        "nome": "Campinas",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-campinas"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-campinas"
          }
        ]
      },
      {
        "nome": "Castelo (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-castelo"
          }
        ]
      },
      {
        "nome": "Centro de Campinas",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-centro"
          }
        ]
      },
      {
        "nome": "Jardim Guanabara (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-guanabara"
          }
        ]
      },
      {
        "nome": "Jundiaí",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-jundiai"
          }
        ]
      },
      {
        "nome": "Mansões Santo Antônio (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-mansoes-santo-antonio"
          }
        ]
      },
      {
        "nome": "Sorocaba",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sorocaba"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-sorocaba"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sorocaba"
          }
        ]
      },
      {
        "nome": "São José dos Campos",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-sao-jose-dos-campos"
          },
          {
            "label": "Renovação de AVCB",
            "href": "/renovacao-avcb-sao-jose-dos-campos"
          },
          {
            "label": "Renovação de CLCB",
            "href": "/renovacao-clcb-sao-jose-dos-campos"
          }
        ]
      },
      {
        "nome": "Taquaral (Campinas)",
        "links": [
          {
            "label": "AVCB",
            "href": "/avcb-campinas-taquaral"
          }
        ]
      }
    ]
  }
];
