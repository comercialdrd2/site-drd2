import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = body.Nome || body.name || "";
  const email = body.Email || body.email || "";
  const whatsapp = body.WhatsApp || body.whatsapp || "";
  const type = body.Tipo_Edificacao || body.type || "";
  const message = body.Mensagem || body.message || "";
  const page = body.URL_Atual || body.Caminho || "";
  const service = body.service || "";

  if (!name || !whatsapp) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  const emailHtml = `
    <h2>Novo lead pelo formulário do site</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nome</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">WhatsApp</td><td style="padding:8px;border:1px solid #eee">${whatsapp}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">E-mail</td><td style="padding:8px;border:1px solid #eee">${email || "não informado"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Tipo de edificação</td><td style="padding:8px;border:1px solid #eee">${type || "não informado"}</td></tr>
      ${service ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Serviço</td><td style="padding:8px;border:1px solid #eee">${service}</td></tr>` : ""}
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Mensagem</td><td style="padding:8px;border:1px solid #eee">${message || "não informada"}</td></tr>
      ${page ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Página</td><td style="padding:8px;border:1px solid #eee">${page}</td></tr>` : ""}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Site DRD2 <onboarding@resend.dev>",
    to: ["comercial.drd2@gmail.com"],
    subject: `Novo lead: ${type || service || "Site"} — ${name}`,
    html: emailHtml,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Falha ao enviar e-mail" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
