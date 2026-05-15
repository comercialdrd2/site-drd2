"""Adiciona slugs CLCB ao internalLinks.json para que <InternalLinksBlock> renderize."""
import json
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "src" / "data" / "internalLinks.json"

with open(JSON_PATH, encoding="utf-8") as f:
    data = json.load(f)

bairros = {k: {"label": v["label"], "zona": v["zona"]} for k, v in data["bairroParaOcupacoes"].items()}
print(f"Total bairros disponiveis: {len(bairros)}")

def pick_bairros(max_n=8):
    by_zona = {}
    for slug, info in bairros.items():
        by_zona.setdefault(info["zona"], []).append((slug, info))
    items = []
    while len(items) < max_n and any(by_zona.values()):
        for z in list(by_zona.keys()):
            if by_zona[z] and len(items) < max_n:
                items.append(by_zona[z].pop(0))
    return items

clcb_occs = [
    ("/renovacao-clcb-restaurante-sao-paulo",
     "Renovacao de CLCB para Restaurante",
     "renovar o CLCB do restaurante",
     "Renovacao de CLCB para restaurante em {bairro} com diagnostico tecnico gratuito e atendimento sem interromper a operacao."),
    ("/renovacao-clcb-academia-sao-paulo",
     "Renovacao de CLCB para Academia",
     "renovar o CLCB da academia",
     "Renovacao de CLCB para academia em {bairro} com cronograma compativel com horarios de aula e diagnostico gratuito."),
    ("/renovacao-clcb-escola-sao-paulo",
     "Renovacao de CLCB para Escola",
     "renovar o CLCB da escola",
     "Renovacao de CLCB para escola em {bairro} com adequacoes em horario sem aula e atencao as exigencias para criancas."),
    ("/renovacao-clcb-galpao-industrial-sao-paulo",
     "Renovacao de CLCB para Galpao",
     "renovar o CLCB do galpao",
     "Renovacao de CLCB para galpao industrial em {bairro} com avaliacao de carga de incendio e sistemas hidraulicos."),
    ("/renovacao-clcb-farmacia-sao-paulo",
     "Renovacao de CLCB para Farmacia",
     "renovar o CLCB da farmacia",
     "Renovacao de CLCB para farmacia ou drogaria em {bairro} com atencao a produtos inflamaveis e exigencias da Vigilancia Sanitaria."),
    ("/renovacao-clcb-padaria-sao-paulo",
     "Renovacao de CLCB para Padaria",
     "renovar o CLCB da padaria",
     "Renovacao de CLCB para padaria em {bairro} com avaliacao do forno a gas, GLP e limpeza de coifa com ART."),
    ("/renovacao-clcb-supermercado-sao-paulo",
     "Renovacao de CLCB para Supermercado",
     "renovar o CLCB do supermercado",
     "Renovacao de CLCB para supermercado em {bairro} com avaliacao de camaras frias, acougue e produtos inflamaveis em prateleira."),
    ("/renovacao-clcb-bar-sao-paulo",
     "Renovacao de CLCB para Bar",
     "renovar o CLCB do bar",
     "Renovacao de CLCB para bar em {bairro} com atencao a operacao noturna, lotacao e compatibilidade com som ambiente."),
    ("/renovacao-clcb-salao-festas-sao-paulo",
     "Renovacao de CLCB para Salao de Festas",
     "renovar o CLCB do salao de festas",
     "Renovacao de CLCB para salao de festas em {bairro} sem comprometer eventos agendados e com avaliacao de decoracao inflamavel."),
    ("/renovacao-clcb-clinica-sao-paulo",
     "Renovacao de CLCB para Clinica Medica",
     "renovar o CLCB da clinica medica",
     "Renovacao de CLCB para clinica medica em {bairro} com atencao a oxigenio medicinal e exigencias de planos de saude."),
    ("/renovacao-clcb-odontologica-sao-paulo",
     "Renovacao de CLCB para Clinica Odontologica",
     "renovar o CLCB do consultorio odontologico",
     "Renovacao de CLCB para clinica odontologica em {bairro} com extintor CO2 correto para sala de raio-X e avaliacao de gases comprimidos."),
    ("/renovacao-clcb-fisioterapia-sao-paulo",
     "Renovacao de CLCB para Clinica de Fisioterapia",
     "renovar o CLCB da clinica de fisioterapia",
     "Renovacao de CLCB para clinica de fisioterapia em {bairro} com atencao a equipamentos de eletroterapia e pacientes com mobilidade reduzida."),
    ("/renovacao-clcb-igreja-sao-paulo",
     "Renovacao de CLCB para Igreja",
     "renovar o CLCB da igreja",
     "Renovacao de CLCB para igreja em {bairro} com avaliacao de lotacao, saidas de emergencia e seguranca em cultos."),
    ("/renovacao-clcb-comercio-sao-paulo",
     "Renovacao de CLCB para Comercio",
     "renovar o CLCB da loja",
     "Renovacao de CLCB para loja ou comercio em {bairro} com diagnostico gratuito e atendimento sem fechar o estabelecimento."),
    ("/renovacao-clcb-escritorio-sao-paulo",
     "Renovacao de CLCB para Escritorio",
     "renovar o CLCB do escritorio",
     "Renovacao de CLCB para escritorio em {bairro} com avaliacao de saidas, sinalizacao e iluminacao de emergencia."),
    ("/renovacao-clcb-consultorio-clinica-sao-paulo",
     "Renovacao de CLCB para Consultorio e Clinica",
     "renovar o CLCB do consultorio",
     "Renovacao de CLCB para consultorio e clinica em {bairro} com atencao as exigencias de predios comerciais e atendimento sem agenda comprometida."),
    ("/renovacao-clcb-salao-beleza-sao-paulo",
     "Renovacao de CLCB para Salao de Beleza",
     "renovar o CLCB do salao de beleza",
     "Renovacao de CLCB para salao de beleza em {bairro} com atencao a produtos quimicos inflamaveis e equipamentos eletricos."),
]

added = updated = 0
for slug, label, ancora, texto_template in clcb_occs:
    chosen = pick_bairros(max_n=8)
    links = []
    for bslug, binfo in chosen:
        links.append({
            "bairroSlug": bslug,
            "bairroLabel": binfo["label"],
            "zona": binfo["zona"],
            "ancora": ancora,
            "textoSugerido": texto_template.format(bairro=binfo["label"]),
        })
    entry = {"label": label, "totalLinks": len(links), "links": links}
    if slug in data["ocupacaoParaBairros"]:
        updated += 1
    else:
        added += 1
    data["ocupacaoParaBairros"][slug] = entry

data["totalOcupacoes"] = len(data["ocupacaoParaBairros"])
data["geradoEm"] = datetime.now().isoformat()

with open(JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Adicionados: {added} | Atualizados: {updated}")
print(f"Total ocupacoes no JSON agora: {data['totalOcupacoes']}")
