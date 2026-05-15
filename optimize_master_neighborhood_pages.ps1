# =====================================================================
# DRD2 — Neighborhood Pages Optimizer v2 (Master Style)
# Targets: pages WITHOUT WhatsAppFloatingButton import
# Adds: imports, BreadcrumbNav + TrustBar, CtaWhatsApp (x2), SocialProof
# =====================================================================

$appDir = "src\app"
$successCount = 0
$skipCount = 0

$neighborhoodDirs = Get-ChildItem -Path $appDir -Directory | Where-Object {
    $_.Name -match "^avcb-(butanta|casa-verde|centro-bela-vista|centro-sao-paulo|ipiranga|jacana|lapa|limao|penha|perdizes|pinheiros|santana|tucuruvi|vila-leopoldina|vila-madalena|vila-prudente|zona-oeste-sao-paulo)$"
}

foreach ($dir in $neighborhoodDirs) {
    $pageFile = Join-Path $dir.FullName "page.tsx"
    if (-not (Test-Path $pageFile)) { $skipCount++; continue }

    $content = Get-Content $pageFile -Raw -Encoding UTF8

    if ($content -match "import TrustBar") {
        Write-Host "  SKIP (already done): $($dir.Name)" -ForegroundColor Cyan
        $skipCount++
        continue
    }

    # Neighborhood display name
    $dirName = $dir.Name -replace "^avcb-",""
    $neighborhoodRaw = $dirName -replace "-", " "
    $neighborhood = (Get-Culture).TextInfo.ToTitleCase($neighborhoodRaw)

    # Zone for breadcrumb
    $zoneOeste  = @("pinheiros","lapa","perdizes","consolacao","morumbi","butanta","vila-madalena","vila-leopoldina","zona-oeste-sao-paulo")
    $zoneNorte  = @("santana","tucuruvi","casa-verde","limao","jacana","zona-norte-sao-paulo")
    $zoneLeste  = @("tatuape","penha","mooca","analia-franco","aricanduva","itaquera","vila-prudente","ipiranga","sacoma","zona-leste-sao-paulo")
    $zonaCentro = @("centro-sao-paulo","centro-bela-vista","se","liberdade","republica")

    if ($zoneOeste  -contains $dirName) { $zoneLabel = "Zona Oeste"; $zoneHref = "/avcb-zona-oeste-sao-paulo" }
    elseif ($zoneNorte  -contains $dirName) { $zoneLabel = "Zona Norte"; $zoneHref = "/avcb-zona-norte-sao-paulo" }
    elseif ($zoneLeste  -contains $dirName) { $zoneLabel = "Zona Leste"; $zoneHref = "/avcb-zona-leste-sao-paulo" }
    elseif ($zonaCentro -contains $dirName) { $zoneLabel = "Centro";     $zoneHref = "/avcb-centro-sao-paulo" }
    else { $zoneLabel = "São Paulo"; $zoneHref = "/avcb-sao-paulo" }

    # --- 1. ADD IMPORTS (after NeighborhoodSilo or LeadForm import) ---
    # These pages DON'T have WhatsAppFloatingButton — use NeighborhoodSilo as anchor
    $importAnchor = 'import NeighborhoodSilo from "@/components/NeighborhoodSilo";'
    if ($content -notmatch [regex]::Escape($importAnchor)) {
        # Try LeadForm as fallback anchor
        $importAnchor = 'import LeadForm from "@/components/LeadForm";'
    }
    if ($content -notmatch [regex]::Escape($importAnchor)) {
        Write-Host "  SKIP (no import anchor): $($dir.Name)" -ForegroundColor Yellow
        $skipCount++
        continue
    }

    $newImportBlock = @"
$importAnchor
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
"@
    $content = $content.Replace($importAnchor, $newImportBlock)

    # --- 2. ADD BreadcrumbNav + TrustBar after hero section ---
    # Hero ends and Authority section begins
    $heroEndAnchor = '{/* Authority Section */}'
    if ($content -match [regex]::Escape($heroEndAnchor)) {
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

      {/* Authority Section */}
"@
        $content = $content.Replace($heroEndAnchor, $breadcrumbBlock)
    }

    # --- 3. ADD CTA 2 after Services Grid (before Local Footprint) ---
    $servicesEndAnchor = '{/* Local Footprint */}'
    if ($content -match [regex]::Escape($servicesEndAnchor)) {
        $cta2Block = @"
      {/* ── CTA 2 — APÓS SERVIÇOS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB em $neighborhood? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico gratuito pelo WhatsApp"
            occupationType="imóvel em $neighborhood"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* Local Footprint */}
"@
        $content = $content.Replace($servicesEndAnchor, $cta2Block)
    }

    # --- 4. ADD SocialProof before FAQ ---
    $faqAnchor = '{/* FAQ */}'
    if ($content -match [regex]::Escape($faqAnchor)) {
        $socialProofBlock = @"
      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em $neighborhood com agilidade e sem burocracia. AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário — $neighborhood, São Paulo",
        }}
      />

      {/* FAQ */}
"@
        $content = $content.Replace($faqAnchor, $socialProofBlock)
    }

    # --- 5. ADD CTA 4 before Final Conversion section ---
    $finalAnchor = '{/* Final Conversion */}'
    if ($content -match [regex]::Escape($finalAnchor)) {
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

      {/* Final Conversion */}
"@
        $content = $content.Replace($finalAnchor, $cta4Block)
    }

    # Write back
    try {
        [System.IO.File]::WriteAllText($pageFile, $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "  OK: $($dir.Name)" -ForegroundColor Green
        $successCount++
    } catch {
        Write-Host "  ERROR: $($dir.Name) — $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "======================================="
Write-Host "  DONE: $successCount optimized, $skipCount skipped"
Write-Host "======================================="
