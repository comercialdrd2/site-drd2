
$content = Get-Content 'src\data\pages\temp_seo_copy.txt' -Raw
for ($i=0; $i -lt $content.Length; $i+=5000) {
    $len = [Math]::Min(5000, $content.Length - $i)
    Write-Host "--- START CHUNK $($i) ---"
    Write-Host $content.Substring($i, $len)
    Write-Host "--- END CHUNK ---"
}
