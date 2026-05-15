import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { ShieldCheck, FileText, Lock } from "lucide-react";

const _pageTitle = "Política de Privacidade | DRD2 Engenharia";
const _pageDesc = "Saiba como a DRD2 Engenharia coleta, usa e protege seus dados pessoais em conformidade com a LGPD — Lei Geral de Proteção de Dados.";

export const metadata = {
  title: "Política de Privacidade | DRD2 Engenharia",
  description: "Saiba como a DRD2 Engenharia coleta, usa e protege seus dados pessoais em conformidade com a LGPD — Lei Geral de Proteção de Dados.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  const _schema = generateMasterSchema({
        slug: "/politica-de-privacidade",
        title: _pageTitle,
        description: _pageDesc,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Política de Privacidade", item: "/politica-de-privacidade" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero */}
      <section className="bg-slate-950 text-white pt-[85px] pb-16 border-b-4 border-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center py-12">
          <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            LGPD — Lei 13.709/2018
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Política de Privacidade
          </h1>
          <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
            Última atualização: 27 de abril de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-slate prose-lg">

          <div className="not-prose flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10">
            <Lock className="w-8 h-8 text-red-600 shrink-0" />
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              A DRD2 Engenharia respeita sua privacidade. Esta política explica de forma clara quais dados coletamos, por que os coletamos e como os utilizamos, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>
          </div>

          <h2>1. Quem somos</h2>
          <p>
            <strong>DRD2 Engenharia LTDA</strong> — CNPJ 51.774.619/0001-94 — é empresa especializada em engenharia de segurança contra incêndio, regularização de AVCB e CLCB em São Paulo. Para dúvidas sobre privacidade, entre em contato pelo e-mail: <a href="mailto:comercial.drd2@gmail.com">comercial.drd2@gmail.com</a>.
          </p>

          <h2>2. Dados que coletamos</h2>
          <p>Coletamos apenas os dados necessários para o atendimento das suas solicitações:</p>
          <ul>
            <li><strong>Dados de contato:</strong> nome, e-mail, número de WhatsApp/telefone, fornecidos voluntariamente através do formulário de contato ou pelo botão de WhatsApp.</li>
            <li><strong>Dados da edificação:</strong> tipo de estabelecimento, cidade/bairro, necessidade de serviço — informações técnicas fornecidas para elaboração de diagnóstico e proposta.</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência — coletados automaticamente via cookies de análise.</li>
          </ul>

          <h2>3. Finalidade do uso dos dados</h2>
          <p>Utilizamos seus dados exclusivamente para:</p>
          <ul>
            <li>Responder solicitações de orçamento, contato e diagnóstico técnico.</li>
            <li>Enviar informações técnicas e comerciais relevantes (mediante consentimento).</li>
            <li>Analisar o desempenho do site para melhoria contínua da experiência do usuário.</li>
          </ul>
          <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.</p>

          <h2>4. Base legal</h2>
          <p>O tratamento de dados é realizado com base nas seguintes hipóteses previstas na LGPD:</p>
          <ul>
            <li><strong>Consentimento</strong> (art. 7º, I): quando você preenche e envia o formulário de contato.</li>
            <li><strong>Legítimo interesse</strong> (art. 7º, IX): para análise interna de navegação e melhoria do serviço.</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site e cookies de análise de desempenho (Google Analytics). Você pode desativar cookies através das configurações do seu navegador a qualquer momento, sem prejuízo ao acesso ao conteúdo do site.
          </p>

          <h2>6. Compartilhamento de dados</h2>
          <p>
            Seus dados poderão ser compartilhados apenas com:
          </p>
          <ul>
            <li><strong>Google LLC</strong> (Analytics e Google Business Profile) — para análise de acesso e otimização.</li>
            <li><strong>Meta Platforms</strong> — se você chegou ao site por anúncios, para fins de mensuração de campanhas.</li>
          </ul>
          <p>Esses parceiros possuem suas próprias políticas de privacidade e estão sujeitos às normas da LGPD e do GDPR.</p>

          <h2>7. Seus direitos como titular</h2>
          <p>Nos termos da LGPD, você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar, corrigir ou solicitar a exclusão dos seus dados.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
            <li>Solicitar a portabilidade dos dados.</li>
          </ul>
          <p>Para exercer qualquer direito, envie e-mail para <a href="mailto:comercial.drd2@gmail.com">comercial.drd2@gmail.com</a> com o assunto "LGPD – Meus Dados".</p>

          <h2>8. Retenção e segurança</h2>
          <p>
            Seus dados são armazenados pelo período necessário ao atendimento da finalidade declarada ou enquanto exigido por lei. Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda ou destruição.
          </p>

          <h2>9. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. A data da última revisão está sempre indicada no topo desta página. Alterações significativas serão comunicadas de forma destacada no site.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para qualquer dúvida relacionada a esta política ou ao tratamento dos seus dados, entre em contato:<br />
            <strong>E-mail:</strong> <a href="mailto:comercial.drd2@gmail.com">comercial.drd2@gmail.com</a><br />
            <strong>WhatsApp:</strong> <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          </p>
        </div>
      </section>

      {/* Back link */}
      <div className="py-10 bg-slate-50 border-t border-slate-200 text-center">
        <Link href="/" className="text-red-600 font-black uppercase italic tracking-tight hover:underline text-sm">
          ← Voltar para a página inicial
        </Link>
      </div>
    </>
  );
}
