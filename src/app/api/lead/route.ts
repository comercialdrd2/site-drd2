import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { describeOrigin, originBanner, originShort, originTable, row } from "@/lib/leadEmail";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = body.Nome || body.name || "";
  const email = body.Email || body.email || "";
  const whatsapp = body.WhatsApp || body.whatsapp || "";
  const type = body.Tipo_Edificacao || body.type || "";
  const message = body.Mensagem || body.message || "";
  const page = body.URL_Atual || body.Caminho || "";
  const service = body.service || "";

  // Contexto de origem: o formulario sempre enviou, o e-mail descartava.
  const referrer = body.Referrer || "";
  const utmSource = body.UTM_Source || "";
  const utmMedium = body.UTM_Medium || "";
  const utmCampaign = body.UTM_Campaign || "";
  const utmTerm = body.UTM_Term || "";
  const landingPage = body.Pagina_Entrada || "";
  const neighborhood = body.Endereco_Bairro || "";
  const origin = describeOrigin(referrer, utmSource, utmMedium);

  if (!name || !whatsapp) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  const emailHtml = `
    <h2>Novo lead pelo formulário do site</h2>

    ${originBanner(origin)}

    <table style="border-collapse:collapse;width:100%;max-width:600px">
      ${row("Nome", name)}
      ${row("WhatsApp", whatsapp)}
      ${row("E-mail", email || "não informado")}
      ${row("Tipo de edificação", type || "não informado")}
      ${neighborhood ? row("Bairro / endereço", neighborhood) : ""}
      ${service ? row("Serviço", service) : ""}
      ${row("Mensagem", message || "não informada")}
    </table>

    ${originTable({ referrer, utmSource, utmMedium, utmCampaign, utmTerm, landingPage, page })}
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Site DRD2 <noreply@drd2.com.br>",
      to: ["comercial.drd2@gmail.com", "comercial@drd2.com.br"],
      subject: `Novo lead via ${originShort(referrer, utmSource, utmMedium)}: ${type || service || "Site"} — ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Falha ao enviar e-mail", detail: error }, { status: 500 });
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ error: "Exceção ao enviar e-mail", detail: String(err) }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
