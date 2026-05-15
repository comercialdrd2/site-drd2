# Final Silo Update Script (Schools, Churches, Academies)
$files = Get-ChildItem -Path "src/app" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    try {
        [string]$content = Get-Content $file.FullName -Raw -ErrorAction Stop
    } catch {
        Write-Host "Skipping file due to access error: $($file.FullName)"
        continue
    }
    
    if ($content -match 'h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Que Regularizamos') {
        Write-Host "Processing Silo: $($file.Name)"
        
        # 1. Update grid cols to lg:grid-cols-3 (best for 6 items)
        if ($content -contains 'lg:grid-cols-4') {
            $content = $content.Replace('lg:grid-cols-4', 'lg:grid-cols-3')
        }
        
        # 2. Add Academies if missing
        if (-not ($content -contains '"Academias e Fitness"')) {
            $target = '{ title: "Centros Médicos", text: "Clínicas especializadas integradas à rede hospitalar regional." }'
            $newEntry = '{ title: "Centros Médicos", text: "Clínicas especializadas integradas à rede hospitalar regional." },`n                { title: "Academias e Fitness", text: "Centros esportivos e ginásios com foco no Grupo E-6." }'
            $content = $content.Replace($target, $newEntry)
        }
        
        # 3. Add Churches if missing
        if (-not ($content -contains '"Igrejas e Templos"')) {
            $target = '{ title: "Academias e Fitness", text: "Centros esportivos e ginásios com foco no Grupo E-6." }'
            $newEntry = '{ title: "Academias e Fitness", text: "Centros esportivos e ginásios com foco no Grupo E-6." },`n                { title: "Igrejas e Templos", text: "Regularização de locais de reunião de público (Grupo F-6) com foco em segurança." }'
            $content = $content.Replace($target, $newEntry)
        }
        
        # 4. Add Schools if missing
        if (-not ($content -contains '"Escolas e Faculdades"')) {
            $target = '{ title: "Igrejas e Templos", text: "Regularização de locais de reunião de público (Grupo F-6) com foco em segurança." }'
            $newEntry = '{ title: "Igrejas e Templos", text: "Regularização de locais de reunião de público (Grupo F-6) com foco em segurança." },`n                { title: "Escolas e Faculdades", text: "Proteção máxima para o ambiente educacional e público estudantil (Grupo E)." }'
            $content = $content.Replace($target, $newEntry)
        }
        
        # Save back
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}
