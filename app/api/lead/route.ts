import { NextResponse } from "next/server";
import { Resend } from "resend";
import { describeOrigin, esc, originBanner, originShort, originTable, row } from "@/lib/leadEmail";
import { SITE } from "@/lib/site";

// Recebe os pedidos de orçamento dos formulários e envia por e-mail pelo Resend.
// Precisa da variável RESEND_API_KEY na Vercel (a mesma chave do www.drd2.com.br serve).

const LABELS: [string, string][] = [
  ["servico", "O que precisa"],
  ["nome", "Nome"],
  ["telefone", "WhatsApp"],
  ["email", "E-mail"],
  ["empresa", "Condomínio ou empresa"],
  ["cidade", "Cidade e bairro"],
  ["imovel", "Tipo de imóvel"],
  ["pavimentos", "Pavimentos"],
  ["fachada", "Tipo de fachada"],
  ["problema", "Problema identificado"],
  ["prazo", "Prazo pretendido"],
  ["mensagem", "Mensagem"],
];

const str = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
  }

  // Campo escondido que só robôs preenchem: finge sucesso e descarta
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const data: Record<string, string> = {};
  for (const [k] of LABELS) {
    const v = str(body[k], k === "mensagem" ? 3000 : 300);
    if (v) data[k] = v;
  }
  if (!data.nome || !data.cidade || (data.telefone || "").replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Preencha nome, WhatsApp com DDD e cidade." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Sem chave configurada: o navegador usa o envio reserva (FormSubmit)
    return NextResponse.json({ ok: false, error: "Envio de e-mail não configurado" }, { status: 503 });
  }

  const referrer = str(body.referrer, 500);
  const utmSource = str(body.utmSource, 200);
  const utmMedium = str(body.utmMedium, 200);
  const utmCampaign = str(body.utmCampaign, 200);
  const utmTerm = str(body.utmTerm, 200);
  const landingPage = str(body.landingPage, 500);
  const page = str(body.pagina, 500);
  const formId = str(body.formId, 100);
  const origin = describeOrigin(referrer, utmSource, utmMedium);
  const digits = data.telefone.replace(/\D/g, "");
  const waLink = `https://wa.me/55${digits}`;

  const html = `
    <h2 style="margin:0 0 12px">Novo pedido de orçamento de fachada</h2>
    ${originBanner(origin)}
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      ${LABELS.filter(([k]) => data[k]).map(([k, label]) => row(label, data[k])).join("")}
    </table>
    <p style="margin:18px 0"><a href="${esc(waLink)}" style="display:inline-block;padding:10px 16px;background:#1f7a4d;color:#fff;text-decoration:none;border-radius:6px">Responder pelo WhatsApp</a></p>
    ${originTable({ referrer, utmSource, utmMedium, utmCampaign, utmTerm, landingPage, page: page ? SITE.url + page : "" })}
    ${formId ? `<p style="color:#888;font-size:12px">Formulário: ${esc(formId)}</p>` : ""}
  `;

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: SITE.leadFrom,
      to: [...SITE.leadTo],
      subject: `Fachada via ${originShort(referrer, utmSource, utmMedium)}: ${data.nome} · ${data.cidade}`,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "Falha ao enviar e-mail" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ ok: false, error: "Falha ao enviar e-mail" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
