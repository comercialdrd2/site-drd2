$files = Get-ChildItem "src\app" -Recurse -Filter "page.tsx" | Where-Object { $_.FullName -match "avcb-[a-z]" -or $_.FullName -match "zona-" }

$replacements = [ordered]@{
    "NÃ£o" = "Não"
    "nÃ£o" = "não"
    "Ã£o" = "ão"
    "Ã£" = "ã"
    "Ã¡" = "á"
    "Ã³" = "ó"
    "Ã©" = "é"
    "Ã§" = "ç"
    "Ã­" = "í"
    "Ãª" = "ê"
    "Ãµ" = "õ"
    "Ã¢" = "â"
    "â€"" = "—"
    "â€˜" = "'"
    "â€™" = "'"
    "imÃ³vel" = "imóvel"
    "diagnÃ³stico" = "diagnóstico"
    "EmpresÃ¡rio" = "Empresário"
    "empresÃ¡rio" = "empresário"
    "impecÃ¡vel" = "impecável"
    "RegularizaÃ§Ã£o" = "Regularização"
    "regularizaÃ§Ã£o" = "regularização"
    "SÃ£o" = "São"
    "sÃ£o" = "são"
    "SÃ" = "Sã"
    "Ã´" = "ô"
    "Ã¼" = "ü"
    "PendÃªncia" = "Pendência"
    "pendÃªncia" = "pendência"
    "tÃ©cnica" = "técnica"
    "TÃ©cnica" = "Técnica"
    "TÃ©cnico" = "Técnico"
    "tÃ©cnico" = "técnico"
    "edifÃ­cio" = "edifício"
    "EdifÃ­cio" = "Edifício"
    "InstrucÃ§Ãµes" = "Instruções"
    "instruÃ§Ãµes" = "instruções"
    "Ã" = "À"
}

$totalFixed = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $changed = $false
    foreach ($key in $replacements.Keys) {
        if ($content.Contains($key)) {
            $content = $content.Replace($key, $replacements[$key])
            $changed = $true
        }
    }
    if ($changed) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed: $($file.DirectoryName | Split-Path -Leaf)"
        $totalFixed++
    }
}

Write-Host ""
Write-Host "Total files fixed: $totalFixed"
