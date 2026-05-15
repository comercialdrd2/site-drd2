# Doctor Script - EMERGENCY REPAIR - Silos (12 Master Specialties)
$files = Get-ChildItem -Path "src/app" -Filter "page.tsx" -Recurse

$newSpecialtiesArr = @"
              {[
                { title: "Condomínios Residenciais", text: "Regularização de prédios, torres e condomínios clube com foco em renovação rápida." },
                { title: "Indústrias e Galpões", text: "Projetos de alta complexidade para depósitos, fábricas e centros logísticos." },
                { title: "Hospitais e Clínicas", text: "Segurança máxima para ambientes de saúde e atendimento médico (Grupo H)." },
                { title: "Academias e Fitness", text: "Proteção para centros esportivos, estúdios e ginásios (Grupo E-6)." },
                { title: "Escolas e Faculdades", text: "Segurança para ambiente educacional com foco na vulnerabilidade estudantil." },
                { title: "Igrejas e Templos", text: "Regularização de locais de reunião de público com grande lotação (Grupo F)." },
                { title: "Hotéis Master 10/10", text: "Gestão de risco para ocupações de uso noturno e rotatividade de hóspedes." },
                { title: "Motéis Master 10/10", text: "Regularização com total discrição e foco na segurança para público vulnerável." },
                { title: "Hostels e Albergues", text: "Segurança para hospedagem coletiva, dormitórios compartilhados e público internacional." },
                { title: "Restaurantes e Bares", text: "Segurança para o setor de gastronomia, eventos e entretenimento." },
                { title: "Comércio e Serviços", text: "Regularização de lojas, escritórios e edifícios comerciais." },
                { title: "Shoppings e Centros", text: "Projetos de grande porte com múltiplos riscos e alta carga de incêndio." }
              ]
"@

foreach ($file in $files) {
    try {
        [string]$content = Get-Content $file.FullName -Raw -ErrorAction Stop
    } catch { continue }
    
    # Target neighborhood silo pages
    if ($content -match 'O Que Regularizamos') {
        Write-Host "Emergency Repair Silo: $($file.FullName)"
        
        # This regex matches the broken start { {[ and the end of the array, cleaning everything between the grid div and .map
        # It's defensive against multiple { or whitespace
        $pattern = '(?s)(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">)\s*\{*\s*\{*\s*\[.*?\]\s*\}*\s*(\.map)'
        $replacement = "`$1`n$newSpecialtiesArr`$2"
        
        $newContent = [regex]::Replace($content, $pattern, $replacement)
        
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
    }
}
