declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

// Google Tag Manager (GTM-KBPBZGGT) is loaded in index.html. All Google-side
// tracking now flows through the GTM container via dataLayer events — the
// direct gtag.js / GA4 tag has been removed to avoid double-counting.

// Lead conversion, gated to genuine submissions by the caller so
// refreshes/direct visits don't inflate counts. Pushed to the dataLayer so
// GTM can pick it up with a Custom Event trigger named "generate_lead".
export function trackLeadConversion() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead" });
}

// Meta Pixel standard "Lead" event. The base pixel is initialized in index.html.
// Fired for everyone who reaches the thank-you page.
export function trackMetaLead() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}
