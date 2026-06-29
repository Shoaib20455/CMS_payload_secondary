
## Overview

A **Next.js 16 + Payload CMS 3** website for a box truck dispatching service. It serves a marketing front-end for owner-operators and small fleets, with a headless CMS backend for managing blog content, media, categories, and users.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.2.9 (App Router) |
| **CMS** | Payload CMS 3.85.1 |
| **Database** | PostgreSQL via `@payloadcms/db-postgres` (hosted on Neon) |
| **Rich Text** | Lexical editor (`@payloadcms/richtext-lexical`) |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Geist (Google Fonts via `next/font`) |
| **Languages** | TypeScript, React 19 |

---

## Project Structure

```
src/
├── app/
│   ├── (app)/                    # Public-facing website
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   ├── robots.ts             # robots.txt
│   │   ├── blog/[slug]/page.tsx  # Blog detail page (hardcoded for now)
│   │   ├── service/
│   │   │   ├── page.tsx          # Services overview page
│   │   │   └── load-booking/
│   │   │       └── page.tsx      # Load booking sub-service page
│   │   └── components/           # Shared UI components
│   │       ├── SiteShell.tsx     # Layout shell (Navbar/Footer routing)
│   │       ├── Navbar.tsx        # Dual-mode navbar (absolute/flow)
│   │       ├── Hero.tsx          # Homepage hero with truck image
│   │       ├── BlogSection.tsx   # Blog preview section
│   │       ├── ...               # Other section components
│   │       └── Footer.tsx
│   ├── (payload)/                # Payload Admin panel
│   │   ├── layout.tsx
│   │   ├── admin/...             # Admin UI pages
│   │   └── api/...               # REST, GraphQL routes
│   ├── sitemap.ts                # Dynamic sitemap
│   └── my-route/route.ts
├── collections/                  # Payload CMS collections
│   ├── Posts.ts                  # Blog posts (title, slug, rich content, FAQs, SEO fields)
│   ├── Categories.ts             # Blog categories (name, slug)
│   ├── Media.ts                  # Uploaded images (alt text)
│   └── Users.ts                  # Auth users (email/password)
├── lib/
│   └── extract-headings.ts       # Utility: parse Lexical rich text → headings, reading time
├── payload.config.ts             # Payload CMS configuration
└── payload-types.ts              # Auto-generated TS types
```

---

## Key Architecture Decisions

### 1. Dual Route Groups
- `(app)` — public marketing pages (home, services, blog)
- `(payload)` — CMS admin panel at `/admin`, API at `/api`

### 2. SiteShell Layout Router
`SiteShell.tsx` dynamically switches layouts based on the current path:
- **Blog pages**: `Navbar("flow")` + `Footer("flow")` (sticky, centered, slim)
- **Service pages**: `Navbar` + children wrapped in `LandingPageFrame`
- **Default (homepage)**: `Navbar` + `FaqSection` + `CtaSection` + `Footer`

### 3. Dual-Component Rendering Strategy
Many components (`Navbar`, `BlogSection`, `Navbar`) have **two rendering modes** via a `variant` prop:
- `"absolute"` — positioned hero-style with `bb-*` CSS classes (legacy Figma design)
- `"flow"` — standard document flow with Tailwind classes (responsive, modern)

### 4. Payload Collections
| Collection | Purpose | Key Fields |
|---|---|---|
| **Users** | Admin auth | email, password (built-in) |
| **Media** | Image uploads | alt, file upload |
| **Categories** | Blog taxonomy | name, auto-slug |
| **Posts** | Blog content | title, slug, content (Lexical rich text), FAQs (array), featureImage, SEO fields (metaTitle, metaDescription, focusKeyphrase), status (draft/published), publishedDate, author, category |

### 5. Content is Currently Hardcoded
The front-end pages show static mock data (blog posts, services, testimonials). The Payload CMS is wired up and running, but the public pages do **not** yet fetch from the CMS API — they render inline content arrays. This is a typical intermediate state before integrating CMS-driven content.

### 6. SEO Infrastructure
- `robots.txt` via `/robots.ts` (two copies — one in `(app)`, one in root `app/`)
- `sitemap.xml` via `/sitemap.ts`
- Comprehensive `metadata` export in `layout.tsx` (Open Graph, Twitter, JSON-LD compatible)
- `X-Robots-Tag` header set in `next.config.ts`

### 7. Utility Library
`src/lib/extract-headings.ts` provides helpers for Payload's Lexical rich text format:
- `extractHeadings()` — walks the JSON tree to extract h2/h3 headings for table of contents
- `extractAllText()` — concatenates all text nodes
- `calculateReadingTime()` — estimates read time at 200 wpm

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `(app)/page.tsx` | Homepage with Hero, StatePicker, Intro, Services Process, Why Us, Pricing, Blog, Testimonials |
| `/service` | `(app)/service/page.tsx` | Services overview (8 service cards), contact form |
| `/service/load-booking` | `(app)/service/load-booking/page.tsx` | Load booking subpage with benefits, process, FAQs |
| `/blog/[slug]` | `(app)/blog/[slug]/page.tsx` | Blog detail (hardcoded article with sections, author meta) |
| `/admin` | Payload CMS admin | Managed by `(payload)/admin/[[...segments]]/page.tsx` |
| `/api/*` | Payload REST/GraphQL | REST, GraphQL, GraphQL Playground |

---

## Environment & Configuration

- **`.env`** contains `PAYLOAD_SECRET` and `DATABASE_URL` (Neon PostgreSQL)
- **`next.config.ts`** wraps the Next config with `withPayload()` plugin + custom headers
- **`tsconfig.json`** — standard Next.js TypeScript config
- **`eslint.config.mjs`** — ESLint v9 flat config
- **`postcss.config.mjs`** — PostCSS with Tailwind CSS v4

---

## npm Scripts

| Script | Command |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run generate:importmap` | Regenerate Payload import map |

---

