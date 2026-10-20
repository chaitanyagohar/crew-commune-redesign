# Crew Commune — website

**Sports. People. Experiences. Building communities that move.**

Static site built with **Astro 7 + TypeScript**. It ships plain HTML and CSS plus ~50 KB (gzipped) of JavaScript for the animations, with no client framework. Photos are converted to AVIF/WebP at build time, and SEO, sitemap and structured data are generated automatically.

## Quick start
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + build to dist/
npm run preview    # serve the built site
```
Requires Node 22.12 or newer.

## Deploy on Vercel (GitHub)
1. Replace the contents of your GitHub repo with this folder (keep `.gitignore`; don't commit `node_modules` or `dist`).
2. In Vercel → Project → Settings → Build and Deployment:
   - **Root Directory:** empty, because the project is at the repo root (clear the old `site` value)
   - **Framework Preset:** Astro (picked up from `vercel.json`)
   - **Node.js version:** 22.x
3. Push. Vercel builds and deploys automatically.

`vercel.json` sets the security headers (strict CSP, HSTS, frame blocking and more), clean URLs and long-term caching for hashed assets.

## Where things live
| What | Where |
|---|---|
| Brand facts, contact details, pillars, Udaan race data | `src/data/site.ts` |
| Stock photos and Mixkit videos, hero reel | `src/data/media.ts` |
| Pages | `src/pages/*.astro` |
| Navbar, menu, loader, footer, SEO head | `src/layouts/Base.astro`, `src/components/Seo.astro` |
| Media frame (photo → stock → typographic panel, plus video) | `src/components/Media.astro` |
| Styles | `src/styles/global.css` |
| Scripts (TypeScript) | `src/scripts/` (core, media, shell, fx, events, gallery, form) |
| Social card, icons, robots.txt | `public/` |

## Adding Crew Commune's photos
1. Save them as `src/assets/instagram/ig1.jpg`, `ig2.jpg`, `ig3.jpg` … (jpg, png or webp; any size, at least 1600 px wide is ideal).
2. Commit and push. That's all.

Every frame that names an Instagram slot (`ig={n}`) uses that photo instead of the stock one, and **every photo in the folder appears in the Gallery automatically** under a "Crew Commune" filter. Astro resizes and converts them to AVIF/WebP.

Slots used around the site: ig1 start line · ig2 Udaan / women's run · ig3 on course · ig4 pacing / wellness · ig5 crowd · ig6 sports day · ig7 finish line · ig8 medals · ig9 team photo · ig10 prizes · ig11 details.

## Before going live: SEO checklist
- Set the real domain in **three places**: `astro.config.mjs` (`site`), `src/data/site.ts` (`url`), and `public/robots.txt` (sitemap line).
- Add `email` and `phone` in `src/data/site.ts`. They appear on Contact and in the footer, and feed the structured data.
- Add a Formspree endpoint to `formEndpoint` in `src/data/site.ts` to receive enquiries by email.
- Submit `https://<domain>/sitemap-index.xml` in Google Search Console.

What's already set up: unique title and description per page, canonical URLs, Open Graph and Twitter cards (`public/og.jpg`), `SportsOrganization` + `WebSite` + `BreadcrumbList` structured data on every page, `SportsEvent` for the Udaan Nari Shakti Run, `FAQPage` on What we do, a sitemap, robots.txt, a web manifest, a noindex 404 page, and semantic headings and landmarks.

## Media credits
- Photos: Crew Commune; stock from Unsplash (Unsplash licence: free for commercial use).
- Video: Mixkit (Mixkit Stock Video Free License: free for commercial use). For launch, consider downloading the clips into `public/video/` and pointing `src/data/media.ts` at them.
- Fonts: Archivo, Geist, Geist Mono (SIL Open Font License), self-hosted.
- Libraries: GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13.
