# =====================================================================
# DRD2 Engenharia — Neighborhood Page Optimizer
# Adds: BreadcrumbNav, TrustBar, CtaWhatsApp (x3), SocialProof
# =====================================================================

$appDir = "src\app"
$successCount = 0
$skipCount = 0
$errorCount = 0

$neighborhoodDirs = Get-ChildItem -Path $appDir -Directory | Where-Object {
    $_.Name -match "^avcb-(moema|brooklin|pinheiros|vila-madalena|itaim-bibi|bela-vista|consolacao|lapa|perdizes|morumbi|campo-belo|saude|jabaquara|santana|tucuruvi|casa-verde|limao|jacana|ipiranga|tatuape|penha|mooca|analia-franco|aricanduva|itaquera|vila-prudente|vila-leopoldina|liberdade|republica|se|centro-sao-paulo|centro-bela-vista|sacoma|butanta|santo-amaro|guarulhos|osasco|santo-andre|sao-bernardo|sao-caetano|alphaville-barueri|barueri-alphaville|vila-mariana|vila-olimpia|zona-sul|zona-leste-sao-paulo|zona-norte-sao-paulo|zona-oeste-sao-paulo)$"
}

foreach ($dir in $neighborhoodDirs) {
    $pageFile = Join-Path $dir.FullName "page.tsx"
    
    if (-not (Test-Path $pageFile)) {
        Write-Host "  SKIP (no page.tsx): $($dir.Name)" -ForegroundColor Yellow
        $skipCount++
        continue
    }

    $content = Get-Content $pageFile -Raw -Encoding UTF8

    # Skip if already optimized
    if ($content -match "import TrustBar") {
        Write-Host "  SKIP (already done): $($dir.Name)" -ForegroundColor Cyan
        $skipCount++
        continue
    }

    # --- 1. ADD IMPORTS ---
    $oldImport = 'import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";'
    $newImport = @"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
"@
    if ($content -notmatch [regex]::Escape($oldImport)) {
        Write-Host "  SKIP (import anchor not found): $($dir.Name)" -ForegroundColor Yellow
        $skipCount++
        continue
    }
    $content = $content.Replace($oldImport, $newImport)

    # --- 2. Get neighborhood name from slug ---
    $slug = $dir.Name  # e.g. "avcb-moema"
    $neighborhoodRaw = $slug -replace "^avcb-", "" -replace "-", " "
    # Title case
    $neighborhood = (Get-Culture).TextInfo.ToTitleCase($neighborhoodRaw)
    
    # Determine zone for breadcrumb
    $zoneSul = @("moema","brooklin","campo-belo","saude","jabaquara","santo-amaro","vila-mariana","vila-olimpia","zona-sul")
    $zoneOeste = @("pinheiros","lapa","perdizes","consolacao","morumbi","butanta","vila-madalena","vila-leopoldina","zona-oeste-sao-paulo")
    $zoneNorte = @("santana","tucuruvi","casa-verde","limao","jacana","zona-norte-sao-paulo")
    $zoneLeste = @("tatuape","penha","mooca","analia-franco","aricanduva","itaquera","vila-prudente","ipiranga","sacoma","zona-leste-sao-paulo")
    $zoneABC = @("santo-andre","sao-bernardo","sao-caetano","guarulhos","osasco","alphaville-barueri","barueri-alphaville")
    
    $dirName = $dir.Name -replace "^avcb-",""
    if ($zoneSul -contains $dirName) { $zoneLabel = "Zona Sul"; $zoneHref = "/avcb-zona-sul" }
    elseif ($zoneOeste -contains $dirName) { $zoneLabel = "Zona Oeste"; $zoneHref = "/avcb-zona-oeste-sao-paulo" }
    elseif ($zoneNorte -contains $dirName) { $zoneLabel = "Zona Norte"; $zoneHref = "/avcb-zona-norte-sao-paulo" }
    elseif ($zoneLeste -contains $dirName) { $zoneLabel = "Zona Leste"; $zoneHref = "/avcb-zona-leste-sao-paulo" }
    elseif ($zoneABC -contains $dirName) { $zoneLabel = "Grande SP"; $zoneHref = "/avcb-sao-paulo" }
    else { $zoneLabel = "Regioes"; $zoneHref = "/avcb-sao-paulo" }

    # --- 3. ADD BREADCRUMB + TRUSTBAR after hero closing </section> ---
    $heroClose = '{/* Introdução + Cards de Números - ESTILO CASA DE REPOUSO */}'
    $breadcrumbBlock = @"
      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "$zoneLabel", href: "$zoneHref" },
          { label: "AVCB $neighborhood" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* Introdução + Cards de Números - ESTILO CASA DE REPOUSO */}
"@
    if ($content -match [regex]::Escape($heroClose)) {
        $content = $content.Replace($heroClose, $breadcrumbBlock)
    }

    # --- 4. ADD CTA 2 after specialty cards (before PTS section) ---
    $ptsAnchor = '{/* PTS vs PT - ESTILO CASA DE REPOUSO */}'
    $cta2Block = @"
      {/* ── CTA 2 — APÓS ESPECIALIDADES ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB em $neighborhood? Fale agora com um engenheiro.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico gratuito pelo WhatsApp"
            occupationType="imóvel em $neighborhood"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* PTS vs PT - ESTILO CASA DE REPOUSO */}
"@
    if ($content -match [regex]::Escape($ptsAnchor)) {
        $content = $content.Replace($ptsAnchor, $cta2Block)
    }

    # --- 5. ADD SocialProof before FAQ ---
    $faqAnchor = '{/* FAQ Estilo Casa de Repouso */}'
    $socialProofBlock = @"
      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em $neighborhood com agilidade e sem burocracia. Processo impecável, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário — $neighborhood, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
"@
    if ($content -match [regex]::Escape($faqAnchor)) {
        $content = $content.Replace($faqAnchor, $socialProofBlock)
    }

    # --- 6. ADD CTA 4 before LeadForm ---
    $leadFormAnchor = '      <LeadForm />'
    $cta4Block = @"
      {/* ── CTA 4 ── */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em $neighborhood.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em $neighborhood"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      <LeadForm />
"@
    if ($content -match [regex]::Escape($leadFormAnchor)) {
        $content = $content.Replace($leadFormAnchor, $cta4Block)
    }

    # --- WRITE BACK ---
    try {
        [System.IO.File]::WriteAllText($pageFile, $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "  OK: $($dir.Name)" -ForegroundColor Green
        $successCount++
    } catch {
        Write-Host "  ERROR writing $($dir.Name): $_" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host ""
Write-Host "=======================================" -ForegroundColor White
Write-Host "  DONE: $successCount optimized, $skipCount skipped, $errorCount errors" -ForegroundColor White
Write-Host "=======================================" -ForegroundColor White
