
## Overview

**Stack:** Next.js 16.2 (App Router), Payload CMS 3.85, PostgreSQL (Neon), Tailwind CSS v4, TypeScript, React 19.

**Purpose:** A public-facing marketing website for owner-operators/small fleets, with a headless CMS backend for blog content, media, categories, and admin auth.

---

## Project Layout

```
D:\CMS_payload_secondary\
├── src/
│   ├── app/
│   │   ├── (app)/                    # Public marketing site
│   │   │   ├── layout.tsx            # Root layout: fonts, SEO meta, JSON-LD, SiteShell wrapper
│   │   │   ├── globals.css           # ~55KB Tailwind + custom bb-* utility classes
│   │   │   ├── page.tsx              # Homepage (Hero + 8 sections)
│   │   │   ├── about/page.tsx        # Mission, stats, values, FAQ, CTA
│   │   │   ├── contact/page.tsx      # Info cards + contact form
│   │   │   ├── pricing/page.tsx      # Rates table, benefits, FAQ
│   │   │   ├── blog/page.tsx         # Blog listing with category filters
│   │   │   ├── blog/[slug]/page.tsx  # Blog detail: rich text, FAQ accordion, ToC
│   │   │   ├── service/page.tsx      # 8 service cards
│   │   │   ├── service/load-booking/page.tsx  # Load booking sub-page
│   │   │   ├── state/page.tsx        # 10-state listing (Ohio featured)
│   │   │   ├── state/stateDetails/page.tsx  # Ohio dispatch details
│   │   │   └── components/           # Shared UI components (14 files)
│   │   │       ├── SiteShell.tsx      # Navbar + RouteFrame + Footer router
│   │   │       ├── Navbar.tsx         # Client sticky nav, hamburger, 7 links
│   │   │       ├── RouteFrame.tsx     # Conditional layout dispatcher
│   │   │       ├── LandingPageFrame.tsx # Client: absolute-position context, resize/scroll
│   │   │       ├── Hero.tsx           # Dual-mode (absolute/flow), 2 truck images
│   │   │       ├── BlogSection.tsx    # Featured + 3 cards
│   │   │       ├── FaqSection.tsx     # FAQ accordion
│   │   │       ├── CtaSection.tsx     # CTA banner
│   │   │       └── ... (8 more sections)
│   │   └── (payload)/                # CMS admin + API routes
│   │       ├── layout.tsx             # Auto-generated Payload admin layout
│   │       ├── admin/[[...segments]]/page.tsx     # Admin SPA
│   │       ├── admin/[[...segments]]/not-found.tsx
│   │       ├── api/[...slug]/route.ts             # REST API
│   │       ├── api/graphql/route.ts               # GraphQL POST
│   │       └── api/graphql-playground/route.ts    # GraphQL playground
│   ├── collections/
│   │   ├── Users.ts               # Auth (email/password)
│   │   ├── Media.ts               # Uploads, 4 WebP sizes (320-1920)
│   │   ├── Categories.ts          # Name + slug, revalidation hooks
│   │   └── Posts.ts               # Title, slug, Lexical content, FAQs array, SEO fields
│   ├── lib/
│   │   ├── extract-headings.ts    # Parse Lexical AST → h2/h3 headings + reading time
│   │   ├── payload-data.ts        # Data layer: getPosts, getPostBySlug, etc. (use cache)
│   │   └── payload-revalidation.ts  # CMS hooks → revalidateTag("max")
│   ├── migrations/                # PostgreSQL migrations (1 performance migration)
│   ├── payload.config.ts          # Payload config: 4 collections, Postgres, Vercel Blob
│   └── payload-types.ts           # Auto-generated TS types
├── next.config.ts                 # withPayload() plugin, cache/image headers
├── package.json                   # Scripts: dev, build, start, lint, generate:importmap
├── public/                        # ~85.4 MB of static assets (images, SVGs, icons)
├── optimization_implementation_plan.md  # Performance audit + 9-phase roadmap
└── Readme.md                      # Full project documentation
```

---

## Key Architecture Decisions

### 1. Dual Route Groups
- `(app)` — public marketing pages
- `(payload)` — CMS admin at `/admin`, API at `/api/graphql`, `/api/rest`

### 2. SiteShell Layout Router
`SiteShell.tsx` dynamically wraps pages based on the current path:
- **Blog pages** → plain `<main>` with `Navbar("flow")` + `Footer("flow")`
- **Service pages** → `LandingPageFrame` wrapper
- **Default (homepage)** → `LandingPageFrame` + `FaqSection` + `CtaSection` + `Footer`

### 3. Dual-Component Rendering
Most sections (`Hero`, `Navbar`, `BlogSection`, `ReadyTruckSection`) have `"absolute"` and `"flow"` variants via a `variant` prop:
- **`"absolute"`** — pixel-perfect positioning using `bb-*` CSS classes (legacy Figma design)
- **`"flow"`** — standard document flow with Tailwind (responsive/modern)

### 4. Payload Collections (4 total)
| Collection | Purpose | Key Fields |
|---|---|---|
| **Users** | Admin auth | email, password |
| **Media** | Uploaded images | alt, 4 responsive WebP sizes |
| **Categories** | Blog taxonomy | name, auto-slug |
| **Posts** | Blog content | title, slug, content (Lexical), FAQs, featureImage, SEO (metaTitle, metaDescription, focusKeyphrase), status, publishedDate, author, category |

### 5. Content Strategy
- **Hardcoded fallback data** — `lib/payload-data.ts` contains 3 inline fallback posts that render when the DB is unavailable
- **Server-side caching** — Blog queries use Next.js `"use cache"` with `cacheLife("days")` and `cacheTag()` for revalidation via CMS hooks
- **Not yet CMS-driven** — Most pages show static mock data; CMS integration is partially wired but the front-end still renders inline content arrays

### 6. SEO Infrastructure
- `robots.txt` via `/robots.ts` (two copies)
- `sitemap.xml` via `/sitemap.ts`
- Comprehensive `metadata` export in root layout (Open Graph, Twitter, JSON-LD)
- `X-Robots-Tag` header via `next.config.ts`

### 7. Data Layer
`src/lib/payload-data.ts` provides 4 exported functions:
- `getPosts()` — fetches all published posts, cached with tag `"posts"`
- `getPostBySlug(slug)` — fetches single post, cached with tag `post:<slug>`
- `getCategories()` — fetches all categories, cached with tag `"categories"`
- `generateStaticParams()` (default export) — for dynamic SSG

### 8. Known Issues
- **Build failure** — `npm run build` crashes with `EmptyGenerateStaticParamsError` on `/blog/[slug]` when the PostgreSQL DB is unreachable (since `generateStaticParams` returns empty)
- **Performance problems** — documented in `optimization_implementation_plan.md`:
  - `SiteShell.tsx` is a Client Component
  - `LandingPageFrame.tsx` runs resize handlers/DOM measurements
  - Duplicate desktop/mobile DOM trees in Hero and several sections
  - 85.4 MB of static assets (26 files > 1 MB)
  - ~55KB global CSS with Google Fonts `@import`
  - No PPR or ISR configured
  - Geist loaded via `next/font` but mostly unused (site uses Outfit, DM Sans, Poppins)

---

## Routes

| Path | File | Description |
|---|---|---|
| `/` | `(app)/page.tsx` | Homepage: Hero, StatePicker, Intro, Services Process, Why Us, Pricing, Blog, Testimonials |
| `/about` | `(app)/about/page.tsx` | Mission, stats, values, FAQ |
| `/contact` | `(app)/contact/page.tsx` | Contact info + form |
| `/pricing` | `(app)/pricing/page.tsx` | Rates table + FAQ |
| `/blog` | `(app)/blog/page.tsx` | Blog listing with category filter |
| `/blog/[slug]` | `(app)/blog/[slug]/page.tsx` | Blog detail with ToC, rich text, FAQs |
| `/service` | `(app)/service/page.tsx` | 8 service cards |
| `/service/load-booking` | `(app)/service/load-booking/page.tsx` | Load booking subpage |
| `/state` | `(app)/state/page.tsx` | 10-state directory |
| `/state/stateDetails` | `(app)/state/stateDetails/page.tsx` | Ohio dispatch details |
| `/admin` | Payload CMS admin | Managed by `(payload)` |
| `/api/*` | Payload REST/GraphQL | REST, GraphQL, GraphQL Playground |

---

## npm Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build (currently broken — see above) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint (v9 flat config) |
| `npm run generate:importmap` | Regenerate Payload import map |

---

**Bottom line:** This is a visually designed, pixel-perfect marketing site that prioritizes Figma fidelity over performance. It's in an intermediate state — the CMS is fully wired but the front-end mostly renders hardcoded data. The `optimization_implementation_plan.md` provides a detailed 9-phase roadmap to fix build issues, migrate to server components, eliminate duplicate DOM, optimize assets/fonts, and enable caching/PPR.

---

