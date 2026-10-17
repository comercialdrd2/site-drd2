/* DRD2 Fachadas — comportamento do site
   Configuração: preencha WHATSAPP com DDI+DDD+número (ex.: "5511912345678").
   Enquanto estiver vazio, os botões abrem o WhatsApp com a mensagem pronta para o visitante escolher o contato. */
(function () {
  "use strict";
  var CONFIG = {
    WHATSAPP: "5511942232969",   // WhatsApp comercial, só dígitos
    FORM_ENDPOINT: "https://formsubmit.co/ajax/comercial@drd2.com.br", // e-mail que recebe os pedidos de orçamento
    GTM_ID: "",                  // ID do Google Tag Manager, ex.: "GTM-ABC1234". Vazio = sem medição
    MAX_FOTOS: 10,
    MAX_MB: 10
  };

  window.dataLayer = window.dataLayer || [];
  if (CONFIG.GTM_ID) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    var gtm = document.createElement("script");
    gtm.async = true;
    gtm.src = "https://www.googletagmanager.com/gtm.js?id=" + CONFIG.GTM_ID;
    document.head.appendChild(gtm);
  }
  function track(name, params) {
    var ev = Object.assign({ event: name, page_path: location.pathname }, params || {});
    window.dataLayer.push(ev);
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }

  function waMessage(servico, local) {
    return "Olá! Gostaria de solicitar uma avaliação para um serviço de fachada. O imóvel está localizado em " +
      (local || "[cidade/bairro]") + " e preciso de atendimento para " + (servico || "pintura ou restauração de fachada") + ".";
  }
  function waUrl(text) {
    var base = CONFIG.WHATSAPP ? "https://wa.me/" + CONFIG.WHATSAPP : "https://wa.me/";
    return base + "?text=" + encodeURIComponent(text);
  }
  var pageService = document.body.getAttribute("data-servico") || "";

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var s = a.getAttribute("data-servico") || pageService;
    a.href = waUrl(waMessage(s));
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* Medição de cliques: WhatsApp, telefone, e-mail e botões de orçamento */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el) return;
    track(el.getAttribute("data-track"), { link_text: (el.textContent || "").trim().slice(0, 60), position: el.getAttribute("data-pos") || "" });
  });

  /* Menu no celular */
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.getElementById("mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
  }

  /* Galeria ampliada */
  var dlg = document.querySelector("dialog.lightbox");
  if (dlg) {
    var dImg = dlg.querySelector("img"), dCap = dlg.querySelector("p");
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lightbox]");
      if (!b) return;
      dImg.src = b.getAttribute("data-lightbox");
      dImg.alt = b.getAttribute("data-cap") || "";
      dCap.textContent = b.getAttribute("data-cap") || "";
      if (typeof dlg.showModal === "function") dlg.showModal();
    });
    dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.closest(".close")) dlg.close(); });
  }

  /* Filtro de projetos por região */
  var filters = document.querySelector(".filters");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      var f = b.getAttribute("data-filter");
      document.querySelectorAll("[data-regiao]").forEach(function (card) {
        card.hidden = !(f === "todas" || card.getAttribute("data-regiao") === f);
      });
    });
  }

  /* Máscara simples de telefone */
  document.querySelectorAll("input[type=tel]").forEach(function (inp) {
    inp.addEventListener("input", function () {
      var d = inp.value.replace(/\D/g, "").slice(0, 11);
      var out = d;
      if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
      if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length - 4) + "-" + d.slice(-4);
      inp.value = out;
    });
  });

  /* Envio de fotos com pré-visualização */
  document.querySelectorAll(".drop").forEach(function (drop) {
    var input = drop.querySelector("input[type=file]");
    var list = drop.querySelector(".previews");
    var status = drop.querySelector(".drop-status");
    var files = [];
    function render() {
      list.innerHTML = "";
      files.forEach(function (f, i) {
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        img.alt = f.name;
        img.src = URL.createObjectURL(f);
        var rm = document.createElement("button");
        rm.type = "button"; rm.textContent = "×"; rm.setAttribute("aria-label", "Remover " + f.name);
        rm.addEventListener("click", function () { files.splice(i, 1); render(); });
        fig.appendChild(img); fig.appendChild(rm); list.appendChild(fig);
      });
      status.textContent = files.length ? files.length + " foto(s) selecionada(s)" : "Nenhuma foto selecionada";
      drop.dataset.count = files.length;
    }
    function add(fl) {
      Array.prototype.forEach.call(fl, function (f) {
        if (!/^image\//.test(f.type)) return;
        if (f.size > CONFIG.MAX_MB * 1024 * 1024) { status.textContent = f.name + " passa de " + CONFIG.MAX_MB + " MB e não foi incluída."; return; }
        if (files.length < CONFIG.MAX_FOTOS) files.push(f);
      });
      render();
    }
    input.addEventListener("change", function () { add(input.files); input.value = ""; });
    ["dragenter", "dragover"].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add("is-over"); }); });
    ["dragleave", "drop"].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove("is-over"); }); });
    drop.addEventListener("drop", function (e) { if (e.dataTransfer) add(e.dataTransfer.files); });
    render();
  });

  /* Formulários de orçamento */
  document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    var started = false;
    form.addEventListener("input", function () {
      if (!started) { started = true; track("form_start", { form_id: form.id }); }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (el) {
        var err = form.querySelector('[data-err-for="' + el.id + '"]');
        var bad = el.type === "checkbox" ? !el.checked : !String(el.value).trim();
        if (!bad && el.type === "tel") bad = el.value.replace(/\D/g, "").length < 10;
        if (!bad && el.type === "email" && el.value) bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
        el.setAttribute("aria-invalid", String(bad));
        if (err) err.textContent = bad ? (el.getAttribute("data-msg") || "Preencha este campo.") : "";
        if (bad && ok) { ok = false; el.focus(); }
      });
      if (!ok) return;
      var data = {};
      new FormData(form).forEach(function (v, k) {
        if (v instanceof File) return;
        data[k] = data[k] ? data[k] + ", " + v : v;
      });
      var drop = form.querySelector(".drop");
      data.fotos = drop ? Number(drop.dataset.count || 0) : 0;
      try { sessionStorage.setItem("drd2_lead", JSON.stringify(data)); } catch (err) { /* sem armazenamento: segue sem resumo */ }
      track("generate_lead", { form_id: form.id, servico: data.servico || "", cidade: data.cidade || "" });
      var thanks = form.getAttribute("data-thanks") || "/obrigado/";
      var btn = form.querySelector("[type=submit]");
      if (btn) { btn.classList.add("form-sending"); btn.dataset.label = btn.textContent; btn.textContent = "Enviando…"; }
      var payload = Object.assign({
        _subject: "Pedido de orçamento de fachada: " + (data.nome || "") + " · " + (data.cidade || ""),
        _template: "table",
        _captcha: "false",
        pagina: location.pathname,
        fotos_selecionadas: data.fotos ? data.fotos + " (pedir pelo WhatsApp)" : "0"
      }, data);
      var done = false;
      function go() { if (done) return; done = true; location.href = thanks; }
      setTimeout(go, 5000);
      if (CONFIG.FORM_ENDPOINT && window.fetch) {
        fetch(CONFIG.FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).then(go, go);
      } else { go(); }
    });
  });

  /* Página de agradecimento */
  var sumBox = document.getElementById("lead-summary");
  if (sumBox) {
    var d = null;
    try { d = JSON.parse(sessionStorage.getItem("drd2_lead") || "null"); } catch (err) { d = null; }
    var labels = { nome: "Nome", telefone: "Telefone", email: "E-mail", empresa: "Condomínio ou empresa", cidade: "Cidade e bairro", imovel: "Tipo de imóvel", pavimentos: "Pavimentos", fachada: "Tipo de fachada", servico: "Serviço", problema: "Problema identificado", prazo: "Prazo pretendido", fotos: "Fotos anexadas" };
    var waBtn = document.getElementById("wa-thanks");
    if (d) {
      var dl = document.createElement("dl");
      Object.keys(labels).forEach(function (k) {
        if (d[k] === undefined || d[k] === "") return;
        var dt = document.createElement("dt"); dt.textContent = labels[k];
        var dd = document.createElement("dd"); dd.textContent = d[k];
        dl.appendChild(dt); dl.appendChild(dd);
      });
      sumBox.appendChild(dl);
      sumBox.hidden = false;
      if (waBtn) {
        var msg = waMessage(d.servico, d.cidade) + (d.empresa ? " Imóvel: " + d.empresa + "." : "") + (d.problema ? " Problema: " + d.problema + "." : "") + " Vou enviar as fotos por aqui.";
        waBtn.href = waUrl(msg);
      }
    }
  }

  /* Abas (antes e depois) */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(i); });
      tab.addEventListener("keydown", function (ev) {
        if (ev.key === "ArrowRight") { select((i + 1) % tabs.length); tabs[(i + 1) % tabs.length].focus(); }
        if (ev.key === "ArrowLeft") { select((i - 1 + tabs.length) % tabs.length); tabs[(i - 1 + tabs.length) % tabs.length].focus(); }
      });
    });
    function select(n) {
      tabs.forEach(function (t, k) {
        t.setAttribute("aria-selected", String(k === n));
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = k !== n;
      });
    }
  });

  /* Carrossel de obras */
  document.querySelectorAll("[data-car]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var track = btn.closest("section").querySelector(".car-track");
      var card = track && track.querySelector(".car-card");
      if (!card) return;
      track.scrollBy({ left: Number(btn.getAttribute("data-car")) * (card.offsetWidth + 18), behavior: "smooth" });
    });
  });

  /* Sombra no cabeçalho ao rolar */
  var hdr = document.querySelector(".site-header");
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Sintomas: no celular mostra 6 e abre o resto */
  var pm = document.querySelector(".prob-more");
  if (pm) {
    pm.addEventListener("click", function () {
      var g = document.getElementById("prob-grid");
      var open = g.classList.toggle("is-open");
      pm.setAttribute("aria-expanded", String(open));
      pm.textContent = open ? "Mostrar menos" : "Ver os 12 sintomas";
    });
  }

  var y = document.querySelectorAll("[data-year]");
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
