# COMIX Pharmaceuticals — Project Context

## What this is
Landing page and tooling for **COMIX Pharmaceuticals**, a UAE-based market access company that helps global pharmaceutical manufacturers enter the GCC/Middle East market. Core services: regulatory registration, market access strategy, and commercialization/distribution.

## Tech stack
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (full component library in `components/ui/`)
- **Three.js** / `@react-three/fiber` for 3D animations
- **Fonts:** Instrument Sans (body), Instrument Serif (display/headlines), JetBrains Mono (mono)
- **Package manager:** npm (pnpm-lock.yaml exists but pnpm not available — use npm)
- **Deployment:** Vercel, auto-deploys from `main` on GitHub → `https://github.com/Hazaloum/ComixWeb`

## Running locally
```bash
npm run dev      # starts on http://localhost:3000
npm run build
npm run lint
```
If port 3000 is in use: `pkill -f "next dev" && npm run dev`

## Project structure
```
app/
  layout.tsx          # Root layout — fonts, metadata, Vercel Analytics
  page.tsx            # Single page, assembles all sections in order
  globals.css         # CSS variables, Tailwind theme, custom utilities

components/landing/   # All page sections (in render order):
  navigation.tsx          Sticky nav, shrinks on scroll, full-screen mobile menu
  hero-section.tsx        Full-screen hero, animated word cycling, stats marquee
  features-section.tsx    4 services with animated SVG visuals
  how-it-works-section.tsx  Regulatory process steps (dark bg)
  infrastructure-section.tsx
  metrics-section.tsx
  integrations-section.tsx  Therapy areas + partners marquees
  security-section.tsx
  developers-section.tsx
  testimonials-section.tsx
  pricing-section.tsx     3-column services breakdown
  cta-section.tsx
  footer-section.tsx
  comix-logo.tsx          SVG logo — network C + COMIX wordmark (two variants)
  animated-sphere.tsx     Three.js 3D sphere (hero background)
  animated-tetrahedron.tsx
  animated-wave.tsx

components/ui/        # shadcn/ui components — don't modify unless needed
components/theme-provider.tsx

data/
  iqvia.csv           # IQVIA UAE pharmaceutical sales data 2020–2025
                      # 1.16M rows, columns: Molecule, Market, Manufacturer, Product,
                      # ATC1/2/3/4, Launch Year, LC Value & Units per year (2020–2025)
                      # Two markets: PRIVATE MARKET and LPO (hospital)

public/               # Icons and placeholder images
```

## Key design decisions
- **Light theme only**, warm off-white background (`oklch(0.985 0.002 90)`)
- **No dark mode** — single theme
- `font-display` = Instrument Serif (headlines), `font-mono` = JetBrains Mono
- Custom CSS utilities in `globals.css`: `.marquee`, `.marquee-reverse`, `.animate-char-in`, `.text-stroke`, `.noise-overlay`
- Logo has two components: `ComixLogo` (icon + wordmark, used in expanded nav) and `ComixLogoIcon` (icon only, used when scrolled)

## The IQVIA data
UAE pharma market data. Key facts from analysis:
- Total UAE market 2024: **AED 22.6B** (+17% YoY)
- **2,281 unique molecules**, **919 manufacturers**
- Top molecules: Tirzepatide (AED 1.6B, +95%), Semaglutide (AED 514M, +34%), Metformin, Onasemnogene abeparvovec
- 566 molecules with a single manufacturer and >AED 500K sales — these are the gap/opportunity signals
- CSV has newlines in header names — always strip with `.replace('\n','').strip()` when parsing

## Planned: LinkedIn content automation pipeline
Goal: auto-generate LinkedIn posts from IQVIA data + regulatory feeds.

**Logic:**
1. Monitor EMA/FDA approval feeds for new/trending molecules
2. Look up molecule in `iqvia.csv` to get UAE sales, growth, manufacturer count
3. If global performance >> UAE presence → gap identified
4. Claude generates a post: global context → UAE data → gap analysis → registration steps → CTA
5. WhatsApp approval (one-tap) → auto-schedule to LinkedIn

**Post format that works:**
- Hook: number contrast (global sales vs UAE reality)
- IQVIA data block (AED figures, YoY growth, manufacturer count)
- Named gap (which competitors are absent)
- UAE MOH registration steps (6-8 months total)
- CTA to DM for full assessment

## Business context
- Target buyers: BD directors, licensing leads, regional GMs at mid-size European/Asian pharma companies
- Therapy areas: Psychiatry & Neurology, Cardio & Diabetes, Pulmonology, Gynecology, Consumer Health, Medical Devices
- GCC markets: UAE (primary), Saudi Arabia, Kuwait, and broader GCC
- Key differentiator: in-house IQVIA data + opaque registration process made transparent
