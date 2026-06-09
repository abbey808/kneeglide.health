declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const GTAG_ID = import.meta.env.VITE_GTAG_ID as string | undefined;
const CONVERSION_SEND_TO = import.meta.env.VITE_GTAG_CONVERSION_SEND_TO as
  | string
  | undefined;

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined" || !GTAG_ID) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GTAG_ID);
}

// Google Analytics / Google Ads conversion. Gated to genuine submissions by the
// caller so refreshes/direct visits don't inflate counts.
export function trackLeadConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  if (CONVERSION_SEND_TO) {
    window.gtag("event", "conversion", { send_to: CONVERSION_SEND_TO });
  } else {
    window.gtag("event", "generate_lead");
  }
}

// Meta Pixel standard "Lead" event. The base pixel is initialized in index.html.
// Fired for everyone who reaches the thank-you page.
export function trackMetaLead() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}
