
$logPath = 'C:\Users\Administrador\.gemini\antigravity\brain\d92f03b6-0f74-487e-ad9d-6c5424746c1c\.system_generated\logs\overview.txt'
$outputPath = 'c:\Users\Administrador\OneDrive\Área de Trabalho\site SEO\src\data\pages\temp_seo_copy.txt'

$lines = Get-Content -Path $logPath
foreach ($line in $lines) {
    if ($line -like '*"step_index":303*') {
        try {
            $json = $line | ConvertFrom-Json
            $json.content | Out-File -FilePath $outputPath -Encoding utf8
            Write-Host "Success!"
            break
        } catch {
            Write-Host "Failed to parse JSON"
        }
    }
}
