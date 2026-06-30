## Main findings

  The largest performance constraints are not SSR versus PPR yet:

  - The public site shell is a Client Component in src/app/(app)/components/SiteShell.tsx:1.
  - src/app/(app)/components/LandingPageFrame.tsx:1 runs resize handlers, ResizeObserver, DOM measurements, and page-wide scaling.
  - Several homepage sections render separate desktop and mobile DOM trees. src/app/(app)/components/Hero.tsx:7, for example, renders two hero images as eager/high-priority resources.
  - public/ contains approximately 85.4 MB of assets:
      - 26 files exceed 1 MB.
      - 54 files exceed 500 KB.
      - Several PNGs are 2–4.9 MB.
      - Some SVGs exceed 2 MB, likely because they embed raster data.

  - src/app/(app)/globals.css:1 is 91 KB of source CSS and includes a render-blocking Google Fonts @import.
  - Geist is loaded with next/font, but most of the application uses Outfit, DM Sans, Poppins, or Arial.
  - Blog detail pages query PostgreSQL through Payload on every request in src/app/(app)/blog/[slug]/page.tsx:33, with no application cache or static generation.
  - Next.js 16 Cache Components/PPR are not enabled in next.config.ts:4.
  - The production code compiles, but type checking fails because .next/dev/types references a deleted /api/revalidate route. This currently blocks reliable route and bundle reporting.

  ## Recommended rendering architecture

   Routes                                             Recommended strategy
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   /, /about, /service, /pricing, /contact, /state    Fully static prerendering
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   /blog                                              Cached Payload query with on-demand revalidation
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   /blog/[slug]                                       Prerender known posts, cache other slugs on first request
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   Draft/preview pages                                Dynamic SSR, uncached
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   Payload /admin                                     Dynamic SSR
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   Form/API endpoints                                 Dynamic Route Handlers
  ─────────────────────────────────────────────────  ───────────────────────────────────────────────────────────
   Personalized/request-dependent UI                  PPR dynamic islands under Suspense

  Do not use SSR globally. Fully static pages will be faster than PPR or SSR.

  PPR should only be introduced where a page has a static shell plus genuinely request-time content. Most current marketing pages do not need PPR.

  ## Implementation plan

  ### Phase 1: Establish performance gates

  1. Clear stale generated .next state and make a clean production build pass.
  2. Add reproducible commands for:
      - Clean build.
      - Next.js Turbopack bundle analysis.
      - Lighthouse mobile tests.

  3. Record baselines for /, /blog, and /blog/[slug].
  4. Set budgets:
      - LCP below 2.5 seconds.
      - INP below 200 ms.
      - CLS below 0.1.
      - Initial public-route JavaScript below roughly 100 KB gzip.
      - LCP image below roughly 200 KB.
      - Initial page transfer below 1 MB where practical.

  ### Phase 2: Remove page-wide client rendering

  1. Convert SiteShell back into a Server Component.
  2. Replace usePathname shell decisions with route-group layouts:
      - Marketing layout.
      - Blog layout.
      - Payload/admin layout.

  3. Keep only the mobile navigation toggle as a small Client Component.
  4. Make the footer a Server Component.
  5. Replace JavaScript canvas scaling and DOM measurements in LandingPageFrame with responsive CSS Grid/Flexbox/container queries.
  6. Turn FAQ interactions into either:
      - Small client islands, or
      - Native <details> elements.

  7. Keep forms as Server Components around minimal interactive form controls.
  8. Lazy-load interactive functionality only when it is below the fold or expensive.

  This is likely the largest JavaScript, hydration, INP, and CLS improvement.

  ### Phase 3: Eliminate duplicate responsive markup

  1. Refactor Hero, blog, pricing, testimonial, FAQ, CTA, and footer sections to use one semantic DOM tree.
  2. Handle desktop/mobile differences through CSS rather than rendering two copies.
  3. Ensure only one hero/LCP image exists.
  4. Remove duplicate high-priority and eager image requests.
  5. Use content-visibility: auto selectively for heavy below-the-fold sections after layout refactoring.

  ### Phase 4: Image and media pipeline

  1. Convert photographic PNGs to AVIF/WebP.
  2. Resize source images to their maximum actual rendered dimensions.
  3. Replace oversized SVGs containing raster data.
  4. Deduplicate repeated icons and social assets.
  5. Configure Payload Media with responsive image sizes for:
      - Thumbnails.
      - Blog cards.
      - Article heroes.
      - Full-width heroes.

  6. Store production media in object storage/CDN rather than serving large uploads from the application server.
  7. Configure narrow remotePatterns for Payload media.
  8. Give every responsive Image an accurate sizes value.
  9. Preload only the actual LCP image.
  10. Use static imports and blur placeholders for local hero imagery where appropriate.

  ### Phase 5: Fonts and CSS

  1. Remove the Google Fonts CSS @import.
  2. Load Outfit, DM Sans, and only genuinely required fonts through next/font.
  3. Remove Geist if it remains unused.
  4. Limit font weights and subsets.
  5. Split large global CSS into route/component-scoped styles.
  6. Remove obsolete absolute-positioning classes after the responsive-layout rewrite.
  7. Remove styles belonging to the duplicate desktop/mobile DOM.
  8. Re-run CSS coverage and establish a per-route CSS budget.

  ### Phase 6: Payload caching and PPR

  1. Enable cacheComponents: true after the client/layout refactor.
  2. Create a server-only data layer:
      - getPosts
      - getPostBySlug
      - getCategories

  3. Add "use cache", cacheLife, and cacheTag to these functions.
  4. Use tags such as:
      - posts
      - post:<slug>
      - categories

  5. Add Payload afterChange and afterDelete hooks that trigger precise tag revalidation.
  6. Prefer revalidateTag(..., "max") for blog content.
  7. Add generateStaticParams for published posts.
  8. Keep unknown/new slugs available through dynamic fallback and cache them after the first request.
  9. Keep draft mode outside the cache.
  10. Add generateMetadata using the same cached post function to avoid duplicate database queries.

  ### Phase 7: Database and query optimization

  1. Query only fields required by each view using Payload select.
  2. Reduce depth: 2 where full relationships are unnecessary.
  3. Filter public queries by published status.
  4. Ensure PostgreSQL indexes exist for:
      - slug
      - status
      - publishedDate
      - Category relationships used for filtering

  5. Use pooled database connections and host PostgreSQL in the same region as Next.js/Payload.
  6. Add pagination rather than loading an entire blog collection.

  ### Phase 8: Delivery infrastructure

  1. Put static assets and media behind a CDN.
  2. Apply long immutable caching to fingerprinted assets.
  3. Ensure Brotli compression and HTTP/2 or HTTP/3 are enabled.
  4. If self-hosting across multiple instances, configure shared Next.js cache storage; in-memory caching alone will not be sufficient.
  5. Keep application, image optimizer, Payload, and database geographically close.

  ## Recommended implementation order

  1. Fix clean production build and establish measurements.
  2. Remove LandingPageFrame scaling and shrink client boundaries.
  3. Remove duplicate responsive DOM.
  4. Optimize images and fonts.
  5. Reduce and split CSS.
  6. Implement Payload caching, static blog generation, and tag invalidation.
  7. Enable Cache Components/PPR.
  8. Tune PostgreSQL and deployment infrastructure.
  9. Add CI performance budgets to prevent regressions.

  The critical point is that PPR should be a later architectural optimization. The immediate gains will come from removing page-wide hydration, browser measurement work, duplicate
  layouts, oversized assets, and render-blocking fonts.