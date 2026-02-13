# Cryfield Investments

Corporate website for **Cryfield Investments Ltd** — a privately owned company specialising in land acquisition, development, investment and funding in both private and public sectors. Incorporated in 2017 and based in London's West End.

## About the Company

Cryfield Investments has developed over 500,000 sq ft of residential, commercial, retail and office space across the UK and Europe. The company operates two primary funds:

- **Cryfield Regions Fund (CRF IV)** — Sources, invests and manages businesses throughout the UK, from urban regeneration to healthcare and public safety supply chains.
- **Cryfield SouthEast Fund (CSF II)** — Completed a pipeline of over £150m, delivering 300,000+ sqft of quality residential space through landmark developments.

**Company No.** 11001318 | Registered in England and Wales
**Address:** 51 New Cavendish Street, London, W1G 9TG
**Email:** info@cryfieldinvestments.com

## Tech Stack

- **React 18** — UI library
- **Vite 6** — Build tool and dev server
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility-first styling (via `@tailwindcss/vite` plugin)
- **Framer Motion** — Scroll-driven animations
- **Lucide React** — Icon library

## Project Structure

```
src/
├── App.tsx                    # Main single-page app (Hero, Stats, About, Values, Services, Funds, Contact)
├── main.tsx                   # Entry point
├── index.css                  # Tailwind imports + custom navy/gold theme
├── components/
│   ├── Animations.tsx         # Scroll animation wrappers (FadeUp, SlideLeft, SlideRight, ScaleIn, etc.)
│   ├── ContactForm.tsx        # Contact form component
│   ├── Footer.tsx             # Site footer with links, funds, contact info
│   ├── Header.tsx             # Fixed header with navigation + mobile menu
│   └── Logo.tsx               # SVG logo — London skyline + two-tone wordmark
public/
└── images/                    # Hero and section background images
```

## Design

- **Color palette:** Navy (#0a1929 → #f0f4f8) and Gold (#604517 → #fdf8f0)
- **Logo:** London skyline silhouette (Big Ben, London Eye, The Shard, Gherkin, Canary Wharf, Tower Bridge) above "CRYFIELD" (white) + "INVESTMENTS" (gold)
- **Layout:** Single-page with anchor navigation and fixed header
- **Animations:** Unique scroll-driven animations per section — fade up, slide left/right, blur in, flip up, rotate in, scale in, parallax floating orbs, and staggered reveals

## Sections

1. **Hero** — Full-width background image with headline, tagline, and CTAs
2. **Stats** — Key figures (500k+ sq ft, £150m+ pipeline, 300k+ sqft residential, 20+ years)
3. **About** — Company overview with image and stat grid
4. **Values** — Six core values in a card grid (Aligned Interests, Local Knowledge, Proven Track Record, Strong Relationships, Specialist Expertise, Rapid Execution)
5. **Services** — Six service areas in a card grid (Land Acquisition, Residential Development, Commercial & Retail, Investment & Funding, Healthcare Investment, Urban Regeneration)
6. **Funds** — CRF IV and CSF II fund details
7. **Contact** — Contact info + form
8. **Footer** — Quick links, fund list, address, company registration

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```
