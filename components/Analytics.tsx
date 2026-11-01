import Script from "next/script";
import { SITE } from "@/lib/site";

/** Google Analytics 4, Google Tag Manager (se configurado) e Microsoft Clarity. */
export default function Analytics() {
  return (
    <>
      <Script id="init-datalayer" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];`}
      </Script>
      {SITE.gtmId ? (
        <Script id="init-gtm" strategy="afterInteractive">
          {`window.dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtm.js?id=${SITE.gtmId}";document.head.appendChild(s);`}
        </Script>
      ) : null}
      {SITE.ga4Id ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`} strategy="afterInteractive" />
          <Script id="init-ga4" strategy="afterInteractive">
            {`window.gtag=function(){window.dataLayer.push(arguments);};window.gtag("js",new Date());window.gtag("config","${SITE.ga4Id}");`}
          </Script>
        </>
      ) : null}
      {SITE.clarityId ? (
        <Script id="init-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${SITE.clarityId}");`}
        </Script>
      ) : null}
    </>
  );
}
