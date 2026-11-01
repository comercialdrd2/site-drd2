"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE, waMessage, waUrl } from "@/lib/site";

// Comportamento do site (antigo assets/site.js), adaptado para a navegação do Next.js:
// os eventos ficam no documento inteiro, então funcionam em qualquer página sem recarregar.

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function track(name: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, page_path: location.pathname, ...params });
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  if (typeof window.clarity === "function") window.clarity("event", name);
}

const LABELS: Record<string, string> = {
  nome: "Nome", telefone: "Telefone", email: "E-mail", empresa: "Condomínio ou empresa",
  cidade: "Cidade e bairro", imovel: "Tipo de imóvel", pavimentos: "Pavimentos", fachada: "Tipo de fachada",
  servico: "Serviço", problema: "Problema identificado", prazo: "Prazo pretendido", mensagem: "Mensagem",
};

/* ---------- Envio de fotos com pré-visualização ---------- */
const dropFiles = new WeakMap<HTMLElement, File[]>();

function renderDrop(drop: HTMLElement) {
  const files = dropFiles.get(drop) || [];
  const list = drop.querySelector<HTMLElement>(".previews");
  const status = drop.querySelector<HTMLElement>(".drop-status");
  if (list) {
    list.innerHTML = "";
    files.forEach((f, i) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.alt = f.name;
      img.src = URL.createObjectURL(f);
      const rm = document.createElement("button");
      rm.type = "button";
      rm.textContent = "×";
      rm.setAttribute("aria-label", "Remover " + f.name);
      rm.addEventListener("click", () => {
        files.splice(i, 1);
        renderDrop(drop);
      });
      fig.appendChild(img);
      fig.appendChild(rm);
      list.appendChild(fig);
    });
  }
  if (status) status.textContent = files.length ? files.length + " foto(s) selecionada(s)" : "Nenhuma foto selecionada";
  drop.dataset.count = String(files.length);
}

function addFiles(drop: HTMLElement, fl: FileList | null) {
  if (!fl) return;
  const files = dropFiles.get(drop) || [];
  dropFiles.set(drop, files);
  const status = drop.querySelector<HTMLElement>(".drop-status");
  for (const f of Array.from(fl)) {
    if (!/^image\//.test(f.type)) continue;
    if (f.size > SITE.maxMb * 1024 * 1024) {
      if (status) status.textContent = f.name + " passa de " + SITE.maxMb + " MB e não foi incluída.";
      return;
    }
    if (files.length < SITE.maxFotos) files.push(f);
  }
  renderDrop(drop);
}

/* ---------- Máscara de telefone ---------- */
function maskTel(inp: HTMLInputElement) {
  let d = inp.value.replace(/\D/g, "");
  if (d.length > 11 && d.indexOf("55") === 0) d = d.slice(2); // tira o +55 colado
  if (d.charAt(0) === "0") d = d.slice(1); // tira o 0 de DDD (011)
  d = d.slice(0, 11);
  let out = d;
  if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
  if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length - 4) + "-" + d.slice(-4);
  inp.value = out;
}

/* ---------- Origem do visitante (vai junto no e-mail do pedido) ---------- */
type Origin = { referrer: string; landingPage: string; utmSource: string; utmMedium: string; utmCampaign: string; utmTerm: string };

function rememberOrigin() {
  try {
    if (sessionStorage.getItem("drd2_origin")) return;
    const q = new URLSearchParams(location.search);
    const o: Origin = {
      referrer: document.referrer || "",
      landingPage: location.pathname + location.search,
      utmSource: q.get("utm_source") || (q.get("gclid") ? "google-ads" : ""),
      utmMedium: q.get("utm_medium") || (q.get("gclid") ? "cpc" : ""),
      utmCampaign: q.get("utm_campaign") || "",
      utmTerm: q.get("utm_term") || "",
    };
    sessionStorage.setItem("drd2_origin", JSON.stringify(o));
  } catch {
    /* sem armazenamento */
  }
}

function getOrigin(): Partial<Origin> {
  try {
    return JSON.parse(sessionStorage.getItem("drd2_origin") || "{}");
  } catch {
    return {};
  }
}

/* ---------- Formulários de orçamento ---------- */
const startedForms = new WeakSet<HTMLFormElement>();
const sendingForms = new WeakSet<HTMLFormElement>();

async function postJson(url: string, body: unknown, ms: number): Promise<Response | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Envia pelo próprio site (Resend). Se não der, tenta o FormSubmit. Só devolve true com confirmação de entrega. */
async function sendLead(form: HTMLFormElement, data: Record<string, string>): Promise<boolean> {
  const res = await postJson("/api/lead/", { ...data, ...getOrigin(), pagina: location.pathname, formId: form.id }, 12000);
  if (res && res.ok) {
    const j = await res.json().catch(() => null);
    if (j && j.ok) return true;
  }
  if (res && res.status === 400) return false; // dados recusados: não adianta tentar de novo
  if (!SITE.formEndpoint) return false;
  const fs = await postJson(
    SITE.formEndpoint,
    {
      _subject: "Pedido de orçamento de fachada: " + (data.nome || "") + " · " + (data.cidade || ""),
      _template: "table",
      _captcha: "false",
      pagina: location.pathname,
      ...data,
    },
    12000,
  );
  if (!fs || !fs.ok) return false;
  const j = await fs.json().catch(() => null);
  return !!j && String(j.success) === "true";
}

function showFormError(form: HTMLFormElement, data: Record<string, string>) {
  let box = form.querySelector<HTMLElement>(".form-alert");
  if (!box) {
    box = document.createElement("div");
    box.className = "form-alert";
    box.setAttribute("role", "alert");
    form.appendChild(box);
  }
  const msg =
    waMessage(data.servico, data.cidade) +
    (data.nome ? " Meu nome é " + data.nome + "." : "") +
    (data.mensagem ? " " + data.mensagem : "");
  box.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = "Não conseguimos enviar seu pedido agora. Fale direto com a gente pelo WhatsApp, com seus dados já preenchidos:";
  const a = document.createElement("a");
  a.className = "btn btn-primary btn-sm";
  a.href = waUrl(msg);
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("data-track", "whatsapp_click");
  a.setAttribute("data-pos", "form-error");
  a.textContent = "Enviar pelo WhatsApp";
  const small = document.createElement("small");
  small.textContent = "Ou ligue: " + SITE.telefoneExibicao + " · " + SITE.email;
  box.append(p, a, small);
  box.hidden = false;
  box.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

async function submitLead(form: HTMLFormElement) {
  if (sendingForms.has(form)) return;
  let ok = true;
  form.querySelectorAll<HTMLInputElement>("[required]").forEach((el) => {
    const err = form.querySelector<HTMLElement>('[data-err-for="' + el.id + '"]');
    let bad = el.type === "checkbox" ? !el.checked : !String(el.value).trim();
    if (!bad && el.type === "tel") bad = el.value.replace(/\D/g, "").length < 10;
    if (!bad && el.type === "email" && el.value) bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
    el.setAttribute("aria-invalid", String(bad));
    if (err) err.textContent = bad ? el.getAttribute("data-msg") || "Preencha este campo." : "";
    if (bad && ok) {
      ok = false;
      el.focus();
    }
  });
  if (!ok) return;

  const data: Record<string, string> = {};
  new FormData(form).forEach((v, k) => {
    if (v instanceof File) return;
    data[k] = data[k] ? data[k] + ", " + v : String(v);
  });
  const website = data.website || "";
  delete data.website;

  const btn = form.querySelector<HTMLButtonElement>("[type=submit]");
  const label = btn ? btn.textContent || "" : "";
  if (btn) {
    btn.classList.add("form-sending");
    btn.disabled = true;
    btn.textContent = "Enviando…";
  }
  const alertBox = form.querySelector<HTMLElement>(".form-alert");
  if (alertBox) alertBox.hidden = true;
  sendingForms.add(form);

  const sent = website ? true : await sendLead(form, data);
  sendingForms.delete(form);

  if (sent) {
    try {
      sessionStorage.setItem("drd2_lead", JSON.stringify(data));
    } catch {
      /* sem armazenamento: segue sem resumo */
    }
    track("generate_lead", { form_id: form.id, servico: data.servico || "", cidade: data.cidade || "" });
    location.href = form.getAttribute("data-thanks") || "/obrigado/";
    return;
  }

  track("form_error", { form_id: form.id });
  if (btn) {
    btn.classList.remove("form-sending");
    btn.disabled = false;
    btn.textContent = label;
  }
  showFormError(form, data);
}

/* ---------- Página de agradecimento ---------- */
function fillThanks() {
  const sumBox = document.getElementById("lead-summary");
  if (!sumBox || sumBox.dataset.filled) return;
  let d: Record<string, string> | null = null;
  try {
    d = JSON.parse(sessionStorage.getItem("drd2_lead") || "null");
  } catch {
    d = null;
  }
  if (!d) return;
  const dl = document.createElement("dl");
  Object.keys(LABELS).forEach((k) => {
    if (d![k] === undefined || d![k] === "") return;
    const dt = document.createElement("dt");
    dt.textContent = LABELS[k];
    const dd = document.createElement("dd");
    dd.textContent = d![k];
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  sumBox.appendChild(dl);
  sumBox.hidden = false;
  sumBox.dataset.filled = "1";
  const waBtn = document.getElementById("wa-thanks") as HTMLAnchorElement | null;
  if (waBtn) {
    const msg =
      waMessage(d.servico, d.cidade) +
      (d.empresa ? " Imóvel: " + d.empresa + "." : "") +
      (d.problema ? " Problema: " + d.problema + "." : "") +
      " Vou enviar as fotos por aqui.";
    waBtn.href = waUrl(msg);
  }
}

export default function SiteScripts() {
  const pathname = usePathname();

  // Eventos registrados uma vez, valem para todas as páginas
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;

      // Medição de cliques: WhatsApp, telefone, e-mail e botões de orçamento
      const tr = t.closest<HTMLElement>("[data-track]");
      if (tr) track(tr.getAttribute("data-track") || "", { link_text: (tr.textContent || "").trim().slice(0, 60), position: tr.getAttribute("data-pos") || "" });

      // Galeria ampliada
      const lb = t.closest<HTMLElement>("[data-lightbox]");
      const dlg = document.querySelector<HTMLDialogElement>("dialog.lightbox");
      if (lb && dlg) {
        const img = dlg.querySelector("img");
        const cap = dlg.querySelector("p");
        if (img) {
          img.src = lb.getAttribute("data-lightbox") || "";
          img.alt = lb.getAttribute("data-cap") || "";
        }
        if (cap) cap.textContent = lb.getAttribute("data-cap") || "";
        if (typeof dlg.showModal === "function") dlg.showModal();
        return;
      }
      if (dlg && dlg.open && (t === dlg || t.closest(".close"))) {
        dlg.close();
        return;
      }

      // Filtro de projetos por região
      const fb = t.closest<HTMLButtonElement>(".filters button");
      if (fb) {
        const filters = fb.closest(".filters")!;
        filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === fb)));
        const f = fb.getAttribute("data-filter");
        document.querySelectorAll<HTMLElement>("[data-regiao]").forEach((card) => {
          card.hidden = !(f === "todas" || card.getAttribute("data-regiao") === f);
        });
        return;
      }

      // Abas (antes e depois)
      const tab = t.closest<HTMLElement>('[role="tablist"] [role="tab"]');
      if (tab) {
        selectTab(tab);
        return;
      }

      // Carrossel de obras
      const car = t.closest<HTMLElement>("[data-car]");
      if (car) {
        const trackEl = car.closest("section")?.querySelector<HTMLElement>(".car-track");
        const card = trackEl?.querySelector<HTMLElement>(".car-card");
        if (trackEl && card) trackEl.scrollBy({ left: Number(car.getAttribute("data-car")) * (card.offsetWidth + 18), behavior: "smooth" });
        return;
      }

      // Sintomas: no celular mostra 6 e abre o resto
      const pm = t.closest<HTMLElement>(".prob-more");
      if (pm) {
        const g = document.getElementById("prob-grid");
        if (!g) return;
        const isOpen = g.classList.toggle("is-open");
        pm.setAttribute("aria-expanded", String(isOpen));
        pm.textContent = isOpen ? "Mostrar menos" : "Ver os 12 sintomas";
      }
    };

    function selectTab(tab: HTMLElement) {
      const list = tab.closest('[role="tablist"]');
      if (!list) return;
      list.querySelectorAll<HTMLElement>('[role="tab"]').forEach((x) => {
        const on = x === tab;
        x.setAttribute("aria-selected", String(on));
        const panel = document.getElementById(x.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !on;
      });
    }

    const onKey = (e: KeyboardEvent) => {
      const tab = (e.target as HTMLElement | null)?.closest?.<HTMLElement>('[role="tablist"] [role="tab"]');
      if (!tab || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
      const tabs = Array.from(tab.closest('[role="tablist"]')!.querySelectorAll<HTMLElement>('[role="tab"]'));
      const i = tabs.indexOf(tab);
      const n = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
      selectTab(tabs[n]);
      tabs[n].focus();
    };

    const onInput = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el instanceof HTMLInputElement && el.type === "tel") maskTel(el);
      const form = el.closest?.<HTMLFormElement>("form[data-lead-form]");
      if (form && !startedForms.has(form)) {
        startedForms.add(form);
        track("form_start", { form_id: form.id });
      }
    };

    const onChange = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el instanceof HTMLInputElement && el.type === "file") {
        const drop = el.closest<HTMLElement>(".drop");
        if (drop) {
          addFiles(drop, el.files);
          el.value = "";
        }
      }
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      if (!form.matches("form[data-lead-form]")) return;
      e.preventDefault();
      submitLead(form);
    };

    const onDrag = (e: DragEvent) => {
      const drop = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".drop");
      if (!drop) return;
      e.preventDefault();
      if (e.type === "dragenter" || e.type === "dragover") drop.classList.add("is-over");
      else drop.classList.remove("is-over");
      if (e.type === "drop" && e.dataTransfer) addFiles(drop, e.dataTransfer.files);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("input", onInput);
    document.addEventListener("change", onChange);
    document.addEventListener("submit", onSubmit);
    for (const ev of ["dragenter", "dragover", "dragleave", "drop"] as const) document.addEventListener(ev, onDrag);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("input", onInput);
      document.removeEventListener("change", onChange);
      document.removeEventListener("submit", onSubmit);
      for (const ev of ["dragenter", "dragover", "dragleave", "drop"] as const) document.removeEventListener(ev, onDrag);
    };
  }, []);

  // Ajustes que dependem da página aberta
  useEffect(() => {
    rememberOrigin();
    document.querySelectorAll<HTMLElement>(".drop").forEach((d) => renderDrop(d));
    fillThanks();
    const y = String(new Date().getFullYear());
    document.querySelectorAll<HTMLElement>("[data-year]").forEach((el) => {
      if (el.textContent !== y) el.textContent = y;
    });
  }, [pathname]);

  return null;
}
