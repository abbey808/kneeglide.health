---
name: knee-relief lead capture + analytics
description: How the static knee-relief landing page sends form leads and tracks conversions without a backend
---

# Knee-relief lead capture + GA4 conversion tracking

The `knee-relief` artifact is a static React+Vite app with NO backend. Lead capture and analytics are wired through external services, configured via build-time `VITE_*` env vars (shared environment).

## Lead capture (Google Apps Script webhook)
- The qualification form POSTs a human-readable payload to a Google Apps Script web app (`VITE_FORM_WEBHOOK_URL`, the `/exec` URL), then redirects to `/thank-you`.
- POST uses `fetch(..., { mode: "no-cors", headers: {"Content-Type":"text/plain;charset=utf-8"}, keepalive: true })`.
  - **Why text/plain + no-cors:** avoids the CORS preflight that Apps Script can't answer, so the request actually goes through. Tradeoff: the response is opaque, so client cannot verify success. It's intentionally fire-and-forget — the user always reaches /thank-you.
- The Apps Script source lives in-repo at `artifacts/knee-relief/google-apps-script.gs` (reference copy; the live copy is pasted into the user's Sheet's Apps Script editor and must be redeployed as a *new version* after any edit).
- **Apps Script writes to a tab named "Leads", NOT the default first tab (gid=0).** Users repeatedly look at gid=0 and think nothing saved. Data + auto-created bold header row are in the "Leads" tab.
- Notification email recipient is set by `NOTIFY_EMAIL` inside the .gs file.

## GA4 conversion tracking
- `src/lib/analytics.ts`: `initAnalytics()` loads gtag.js for `VITE_GTAG_ID` (current tag is a GA4 `G-` id), called once in `App`.
- Conversion fires on `/thank-you` mount, but **gated behind a `sessionStorage` flag (`kg_lead_submitted`)** set in the form's onSubmit, so direct visits/refreshes of /thank-you don't inflate counts.
- If `VITE_GTAG_CONVERSION_SEND_TO` is set, it fires a Google Ads `conversion` event; otherwise a GA4 `generate_lead` event. GA4 requires marking `generate_lead` as a key event to count it as a conversion.

## Meta (Facebook) Pixel
- Base pixel code lives directly in `index.html` <head> (pixel id hardcoded), firing `PageView` on full page load. This is separate from the GA env-var pattern — the id is NOT in an env var.
- The `Lead` conversion fires via `trackMetaLead()` in `src/lib/analytics.ts`, called UNCONDITIONALLY on `/thank-you` mount (per user: fire for everyone who reaches the page). This is intentionally NOT gated, unlike the GA `generate_lead` which stays gated behind the `kg_lead_submitted` sessionStorage flag.
- **Do NOT put `<noscript><img></noscript>` in `<head>`.** Vite's HTML parser (parse5) throws `disallowed-content-in-noscript-in-head` (img is not metadata content). It was removed; it's useless anyway for a JS-mandatory SPA.
- **Meta suppresses the `Lead` event** on the dev preview: browser console shows "[Meta Pixel] You are attempting to send a restricted event. The event was suppressed." PageView still sends. This is Meta-side policy (health/sensitive-category vertical and/or firing from the unverified `*.replit.dev` domain rather than the registered `kneeglide.health`), NOT a code bug. Verify on the real published domain + Meta Events Manager (restricted/sensitive data settings, domain verification).

## Gotchas
- `VITE_*` vars are inlined at **build time** — the app must be **republished/redeployed** for prod to pick up new env values; dev needs a workflow restart.
- The Apps Script endpoint is public/unauthenticated (Who has access: Anyone) — known spam exposure inherent to the no-backend design.
