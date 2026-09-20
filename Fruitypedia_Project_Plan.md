# Fruitypedia — Project Plan V15

> **V15 update:** Current status:
>
> - **Phase 0 — Foundation + Feasibility Spike: COMPLETED**
> - **Phase 1 — Global Fruitypedia Landing Page: COMPLETED**
> - **Phase 1.5 — Responsive Design System + Motion Foundation + Blueberry Golden Master: COMPLETED**
> - **Phase 2 — Fruit Engine + Gold-Standard Blueberry: COMPLETED**
> - **Phase 2.5 — Multi-Fruit Stress Test + Content Scaling Pilot: COMPLETED**
> - **Phase 3 — Directory / Categories / Search / Public V1 & Design Polish: COMPLETED**
> - **Phase 4A — Compare Module: COMPLETED**
> - **Phase 4B — Nutrition Explorer: COMPLETED**
> - **Phase 4C — Health Benefits & Functional Profile Directory: COMPLETED**
> - **Phase 4D — Interactive Harvest Seasons & Phenology Calendar: COMPLETED**
> - **Phase 4E — Botanical World Atlas & Geographic Diaspora Explorer: NEXT**
>
> This update records the completion of **Phase 4D (Harvest Seasons Calendar — `/seasons`)**:
>
> 1. **Interactive Client Component (`src/components/SeasonsCalendar.tsx`)**: Replaced the static single-fruit preview with an interactive calendar spanning all 8 production fruits.
> 2. **Real-Time Month Detection & Live Status**: Automatically detects the current calendar month with a pulse indicator and one-click "Jump to Today" shortcut.
> 3. **Interactive 12-Month Selector Strip**: Visual month chips (Jan–Dec) displaying active and peak fruit counts for each month.
> 4. **Monthly Spotlight Deck**: Rich cards highlighting fruits peaking or harvesting during the selected month with Brix accumulation and flavor development summaries.
> 5. **Cross-Catalog Phenological Master Matrix**: Full 12-month grid mapping Peak, Active Harvest, and Dormancy across all 8 fruits with brand color fills and direct monograph links.
> 6. **Hemispheric Inversion Toggle**: Switches between Northern and Southern (+6 months) cultivation cycles to illustrate counter-seasonal global availability.
> 7. **Quality Gate**: 53/53 Vitest tests passing across 8 suites, 0 Astro check errors across 71 files, verified in browser.

## 1. Executive Summary

### 1.1 Product

**Fruitypedia** is a portfolio-quality public web product: a trustworthy visual fruit encyclopedia that combines editorial design, structured factual content, searchable discovery, and restrained interaction.

The product is not an animated fruit gallery. Photography, typography, color, maps, charts, and animation exist to help users:

1. discover a fruit;
2. understand it;
3. compare it with another fruit; and
4. find a specific fact quickly.

### 1.2 Product mode

**Current mode: portfolio-quality public product.**

The project should demonstrate production-grade web engineering and visual design, but there is no current revenue, subscription, or business-growth requirement. The launch is intended to be publicly shareable, technically polished, and useful as a portfolio project.

### 1.3 Audience

- Curious general users who want quick, understandable fruit information.
- Students and learners looking for an attractive reference experience.
- Users comparing fruits by nutrition, taste, origin, or typical seasonality.
- Design/engineering reviewers evaluating the project as a portfolio piece.

### 1.4 Public launch milestone

**Public V1 launch target: end of Phase 3.**

Current phase trajectory:

- **Phase 0 — Foundation + Feasibility Spike: COMPLETED**
- **Phase 1 — Global Fruitypedia Landing Page: COMPLETED**
- **Phase 1.5 — Responsive Design System + Motion Foundation: COMPLETED**
- **Phase 2 — Fruit Engine + Blueberry: COMPLETED**
- **Phase 2.5 — Multi-Fruit Stress Test: COMPLETED (8 production fruits verified)**
- **Phase 3 — Directory / Categories / Search / Public V1: NEXT (public launch gate)**

Phases 0–2.5 are development/preview milestones. The public V1 launches at the end of Phase 3 once the catalog and search experience are coherent and reviewed.

### 1.5 Product success measures

Success is primarily defined by product quality and completeness, not traffic targets.

- 100% of published factual fruit data has traceable source/provenance metadata.
- 0 fixtures/placeholders are counted as public production fruits.
- The reusable fruit template renders the launch set without fruit-specific layout forks.
- Public routes work and have intentional desktop/mobile compositions.
- Search resolves the supported fruit/category/nutrient terms in the acceptance suite.
- Published pages meet the agreed accessibility, SEO, image, and performance budgets.

Traffic targets, growth targets, conversion targets, and engagement targets are **out of scope for the current personal project**. If analytics becomes useful later, it can be added as an optional post-launch enhancement.

---

## 2. Ownership and Working Model

Fruitypedia is a **solo personal project owned and primarily built by Abhi**.

The same person owns product decisions, engineering, visual design, content research, image art direction, and QA. AI tools may assist with coding, research organization, drafting, and visual exploration, but final decisions remain with the project owner.

Health-adjacent content follows the separate review rule below.

### 2.1 Benefits publication rule

Until a second human reviewer is available, the Benefits experience is limited to **nutrient/content explanations and conservative educational language**. Claims that could materially affect health decisions are deferred rather than treated as approved simply because an evidence label exists.

### 2.2 Working day definition

Estimates below assume approximately **5 focused project hours per working day**, excluding unrelated work, classes, travel, and administrative interruptions.

---

# 3. Architecture Decision

## 3.1 Rendering decision: Astro + React

The production architecture is:

**Astro + React + TypeScript**.

A pure Vite + React client-rendered SPA was rejected for production because Fruitypedia treats fruit detail pages as indexable content landing pages. Astro's static rendering model pre-renders pages at build time, while React components can be selectively hydrated only where interaction is required. Dynamic routes in static mode are generated from `getStaticPaths()`. Official references:

- Astro routing: <https://docs.astro.build/en/guides/routing/>
- Astro static/dynamic rendering: <https://docs.astro.build/en/guides/on-demand-rendering/>
- Astro React integration: <https://docs.astro.build/en/guides/integrations-guide/react/>

## 3.2 Route syntax

Use Astro file-based routes:

```text
src/pages/index.astro
src/pages/directory.astro
src/pages/fruit/[slug].astro
src/pages/category/[category].astro
src/pages/compare.astro
src/pages/nutrition.astro
src/pages/benefits.astro
src/pages/explore.astro
src/pages/seasons.astro
src/pages/about.astro
```

Do not use or document Next.js-style or React Router `:slug` route syntax in the Astro route layer.

## 3.3 React usage model

Use React as an interactive island layer for:

- search dialog;
- category dock;
- Fruit of the Day client date resolution;
- Compare controls;
- interactive Nutrition/Benefits controls;
- Explore map;
- other components that genuinely require browser state.

Static text, headings, core fruit information, metadata, and simple decorative UI should remain renderable in HTML without client hydration.

---

# 4. Technology Stack

| Layer              | Choice                                                                 | Notes                                                                      |
| ------------------ | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Rendering          | Astro                                                                  | Static-first content architecture                                          |
| UI                 | React                                                                  | Selective hydration for interaction                                        |
| Language           | TypeScript                                                             | Strict mode                                                                |
| Styling            | Tailwind CSS + CSS custom properties                                   | Shared tokens + fruit themes                                               |
| Animation / Motion | Lenis + GSAP + ScrollTrigger                                           | Smooth scrolling (Lenis) + orchestrated motion & scroll-linked transitions |
| Map                | SVG/topojson build-time rendering + interactive map only on `/explore` | Keep maps out of the fruit-page JS path                                    |
| Data               | Typed TypeScript/JSON                                                  | Production dataset versioned in Git                                        |
| Search             | Client-side indexed search                                             | Expandable later                                                           |
| Persistence        | localStorage                                                           | Favorites/other light features later                                       |
| Hosting            | Static CDN/hosting                                                     | Preview deployments + production deployment                                |
| CI                 | GitHub Actions or equivalent                                           | Typecheck, tests, build, accessibility/performance checks                  |

## 4.1 Map dependency decision

`react-simple-maps` is **not** part of the fruit-page runtime path.

Current web verification (September 2026) shows the npm package currently publishes `react-simple-maps` 5.0.5, while the repository metadata and open issues still show React-19 compatibility history/questions around the older 3.x line. Therefore, the project must **pin an exact tested version and verify it against the exact React/Astro build before adoption** rather than treating the package as automatically compatible.

References:

- npm package: <https://www.npmjs.com/package/react-simple-maps>
- GitHub repository: <https://github.com/zcreativelabs/react-simple-maps>
- React 19 compatibility issue history: <https://github.com/zcreativelabs/react-simple-maps/issues/388>

### Map fallback rule

If the chosen package does not pass the Phase 0 compatibility test:

- fruit pages use build-time/static SVG maps;
- `/explore` may use a separately verified React-19-compatible map implementation;
- do not add a large client-side map dependency to every fruit page merely to satisfy the origin section.

## 4.2 Motion and Smooth Scroll Architecture

The project integrates **Lenis** with GSAP and ScrollTrigger for high-fidelity editorial pacing:

```text
Lenis
    ↓
Smooth scrolling
    ↓
GSAP
    ↓
ScrollTrigger
    ↓
Scroll-driven editorial animation
```

### Layer responsibilities

- **Lenis:** Smooth scrolling, normalized scroll delta, scroll interpolation, and global scroll feel across viewports.
- **GSAP:** Orchestrated animation timelines, coordinated entrance sequences, and editorial transitions.
- **ScrollTrigger:** Scroll-linked progress, section reveal triggers, and controlled parallax coordinates.
- **CSS:** Micro-interactions, hover/focus states, active states, and simple CSS transitions.

### Implementation rule

Lenis must be implemented as a **shared/global enhancement** (e.g. `SmoothScrollProvider` or equivalent global scroll layer), never instantiated redundantly or separately inside individual fruit pages.

> [!IMPORTANT]
> **Do not use Lenis to compensate for poor responsive layout.** The page must remain structurally, visually, and functionally correct without relying on smooth-scroll behavior.

### Accessibility and reduced-motion requirements for Lenis

When `prefers-reduced-motion: reduce` is detected:

- reduce or disable non-essential motion;
- avoid aggressive scroll interpolation or inertia smoothing;
- disable unnecessary parallax and transform animations;
- keep all content immediately readable and accessible;
- preserve standard browser navigation behavior.

Smooth scrolling must never become a barrier to accessing content or navigating the page.

---

# 5. Product and Design Principles

## 5.1 Information before decoration

Every animation or visual element must support discovery, understanding, comparison, or navigation.

## 5.2 One system, many fruits

One reusable fruit-page system. Fruit data controls content and theme, not component architecture.

## 5.3 Verified facts vs editorial voice

Scientific/nutritional facts require provenance. Nicknames, taglines, poetic labels, and editorial descriptions are clearly editorial.

## 5.4 Visual consistency beats novelty

AI imagery must feel like one art-directed campaign.

## 5.5 Composition over scaling (Mobile is a first-class composition)

Desktop is not simply stacked or shrunk. Important layouts are recomposed intentionally across breakpoints. Mobile is treated as a first-class editorial composition.

## 5.6 Performance is part of design

Heavy WebGL, perpetual effects, large image sequences, and unnecessary client hydration are rejected unless they provide clear value.

## 5.7 Honest catalog counts

The UI is designed for a large future catalog, but public counts always reflect **real, reviewed production records**.

Development fixtures may simulate 20/50/100+ fruits for scale testing, but they are never presented as public content.

## 5.8 Fluid over fixed

The interface is designed for the viewport, not for a single desktop canvas. Fruitypedia must never be built as a fixed 1440px composition that gets downscaled. The layout responds fluidly to the browser viewport from 390px through 1920px+.

## 5.9 Visual balance over decoration (60–30–10)

The 60–30–10 rule controls visual weight and prevents fruit colors, imagery, typography, and accents from competing. Fruit colors define atmospheric mood and accents rather than becoming overwhelming flat backgrounds.

## 5.10 Motion supports editorial storytelling

Lenis, GSAP, and ScrollTrigger are used strictly to improve the editorial pacing and feeling of the experience, not to create gratuitous effects. Smooth scrolling never compensates for poor structural layout, and reduced motion is strictly respected.

## 5.11 Golden Master without hardcoding

Blueberry establishes the visual standard and quality bar for the entire encyclopedia, while remaining 100% driven by the reusable fruit architecture without hardcoded coordinates or layout forks.

---

# 6. Design System

## 6.1 Global visual identity

All pages share:

- near-black/charcoal base;
- soft off-white primary text;
- muted secondary text;
- restrained borders;
- subtle surface elevation;
- limited global accent;
- consistent spacing and type hierarchy.

### Global pages

Global pages remain neutral and editorial. They do not inherit a single fruit color.

### Fruit pages

Fruit colors control:

- atmospheric glow;
- accents;
- badges;
- selected states;
- key dividers;
- image treatment;
- data accents.

Fruit color never becomes a giant flat page background.

---

## 6.2 Viewport-First / Fluid Composition

> [!IMPORTANT]
> **Fruitypedia must NOT be designed around a 1440px canvas.**
> The previous design process treated 1440px too much like the primary design canvas, creating composition, spacing, typography, image positioning, and responsiveness regressions. The system must be **viewport-first and fluid**. 1440px is only one validation/reference viewport, not the fundamental coordinate system.

Never design a Fruitypedia page as a fixed 1440px composition and then scale it down.

Instead:

```text
Viewport
    ↓
Fluid page padding
    ↓
Fluid layout/grid
    ↓
Readable content constraints
    ↓
Responsive typography
    ↓
Viewport-aware image composition
```

The viewport determines the composition. `max-width` is only used where appropriate to control readable content width or prevent excessive stretching on ultra-wide displays.

### Prohibited design strategies

Do **NOT** use the following as the primary design strategy:

- fixed 1440px canvas;
- fixed desktop coordinates (hardcoded pixel offsets);
- absolute positioning based on a 1440px reference frame;
- fixed-width hero compositions;
- excessive breakpoint patches;
- designing desktop first and simply shrinking it for mobile.

### Target viewports

The system must work naturally across:

```text
390px   (mobile portrait)
768px   (tablet portrait)
1024px  (tablet landscape / small laptop)
1280px  (standard laptop)
1440px  (desktop reference)
1920px+ (wide desktop)
```

1440px must be treated as **one tested state**, not the master canvas.

---

## 6.3 60–30–10 Visual Balance

The 60–30–10 rule guides visual weight across the composition rather than literal pixel area:

### 60% — Base (Dominant visual field)

- near-black / charcoal background (`#0A0B0E`, `#121318`);
- negative space and breathing room;
- primary page surface;
- quiet structural areas and layout containers.

### 30% — Secondary (Supporting visual layer)

- fruit atmosphere (radial glows, backdrop blurs, soft ambient lighting);
- fruit-colored gradients;
- image surfaces and fruit photography;
- secondary elevated surfaces (cards, docks, panels);
- muted fruit-related tones;
- supporting visual elements and divider borders.

### 10% — Accent (High-attention elements)

- fruit accent color (high vibrancy);
- active states and interactive focus rings;
- badges and key indicators;
- selected controls / active tabs;
- key dividers and micro-rules;
- important stat highlights and callouts;
- small visual emphasis marks.

The rule remains consistent across fruits while the fruit-specific color palette changes dynamically:

```text
Blueberry
60% → near-black base
30% → deep blue / violet atmosphere
10% → vibrant blueberry accent (#4D77FF / #7096FF)

Strawberry
60% → near-black base
30% → red / crimson atmosphere
10% → strawberry accent (#FF4D6D / #FF758F)

Orange
60% → near-black base
30% → amber / warm orange atmosphere
10% → citrus orange accent (#FF9E00 / #FFB703)
```

Do not turn the entire page into the fruit's accent color. Preserve the foundational Fruitypedia principle that fruit colors control atmosphere and accents rather than becoming giant flat backgrounds.

---

## 6.4 Typography — Locked Fruitypedia Type System

The Blueberry fruit-page reference is the **Golden Master** for the fruit-page typography hierarchy. The implementation must reproduce its hierarchy and visual roles rather than introducing a new type treatment for each fruit.

Fruitypedia uses **four controlled typographic voices** with explicit font families:

### 6.4.1 Display Sans — Urbanist

**Primary family:** `Urbanist`

Used for:

- fruit names in the immersive fruit hero;
- homepage hero headline and major display statements;
- large editorial UI statements where a modern display treatment is required.

The fruit name is the dominant typographic element on a fruit page. It should use a large, light-to-regular Urbanist weight with generous tracking/line-height tuned per viewport via fluid `clamp()` sizing. It must remain fully present in server-rendered HTML; any reveal animation is visual only.

**Rule:** Fruit names are **not serif**. This replaces the earlier generic "serif display" description and locks the implementation to the Blueberry Golden Master direction.

### 6.4.2 Script / Cursive — Ballet

**Primary family:** `Ballet`

Used **only** for the poetic fruit nickname/epithet in the fruit hero.

Example:

`la baie d'or bleu`

Purpose: emotion, personality, and the editorial signature of the fruit page.

Do not use script typography for navigation, statistics, buttons, body copy, scientific names, or nutritional values.

If a licensed production script is later selected to achieve a closer visual match, it must preserve the same role and hierarchy and must not become fruit-specific.

### 6.4.3 Editorial Serif — Cormorant Garamond

**Primary family:** `Cormorant Garamond`

Used for:

- editorial section headings;
- selected large editorial statements;
- long-form/About reading where a literary or natural-history voice improves the composition.

This is a supporting editorial voice, not the primary fruit-name font.

### 6.4.4 Italic Editorial Serif — Cormorant Garamond Italic

**Primary family:** `Cormorant Garamond Italic`

Used for:

- scientific names;
- botanical family labels;
- selected descriptive/editorial copy;
- secondary natural-history annotations.

Example:

`Vaccinium corymbosum · Ericaceae`

### 6.4.5 UI Sans — Inter

**Primary family:** `Inter`

Used for:

- global navigation;
- search;
- buttons and controls;
- stat labels and values where appropriate;
- badges;
- metadata;
- category labels;
- utility text.

Use uppercase/small-caps styling with controlled letter spacing for navigation, labels, and metadata rather than introducing another font.

### Typography hierarchy

The canonical fruit-page hierarchy is:

```text
SCRIPT / BALLET
    ↓
URBANIST — large fruit name (fluid clamp)
    ↓
CORMORANT GARAMOND ITALIC — scientific identity
    ↓
CORMORANT GARAMOND ITALIC / EDITORIAL SERIF — selected description
    ↓
INTER — navigation, stats, labels, controls
```

### Global page hierarchy

The homepage and global editorial pages share the same font families but may change emphasis:

- Urbanist → primary display/headline voice
- Cormorant Garamond → editorial statements and section headings
- Inter → navigation and functional UI
- Ballet → reserved for exceptional editorial/brand moments; do not overuse it globally

### Typography implementation rules

- No fruit-specific font families.
- No random font additions for individual pages.
- Maximum four font families in the production system: Urbanist, Ballet, Cormorant Garamond, Inter.
- Calibrate typography fluidly using CSS `clamp()` or modular viewport units rather than static pixel sizes per breakpoint.
- Define all weights, sizes, line-heights, and tracking values as design tokens.
- Use `font-display: swap` and preload only the critical above-the-fold font resources.
- Avoid loading unused weights/styles.
- Respect `prefers-reduced-motion`; typography must remain readable and complete without animation.
- The full fruit name and essential text must exist in the HTML before animation begins.

---

## 6.5 Core Tokens & Fluid Layout Primitives

Use semantic CSS variables for theme tokens:

```text
--color-bg
--color-surface
--color-surface-elevated
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
--color-border-strong
--color-accent-global
--fruit-primary
--fruit-secondary
--fruit-glow
--fruit-gradient-start
--fruit-gradient-end
```

Spacing scale:

```text
8  / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160
```

Fluid layout primitives:

```text
Fluid page padding: clamp(1.25rem, 3.5vw, 3.5rem)
Content container: fluid grid / flex with readable constraints (e.g. max-w-7xl, not fixed px)
Hero composition: viewport-aware height and proportional content/image split
```

Radius system:

```text
8px  / 12px / 18px / 24px
```

---

# 7. Shared UI Components

## Global

- `GlobalShell`
- `Navbar`
- `MobileNav`
- `Footer`
- `SearchTrigger`
- `SearchDialog`
- `SearchResults`
- `FruitOfTheDay`
- `FruitToolbar`

## Cards

- `FruitCard` — `standard`, `featured`, `compact`
- `FeatureCard`
- `CategoryCard`
- `KnowledgeCard`

## Data

- `Metric`
- `StatBlock`
- `DataBar`
- `ComparisonRow`
- `Scale`
- `Ranking`

## Motion

- `SmoothScrollProvider` (global Lenis smooth scroll provider)
- `ScrollReveal`
- `HorizontalTicker`
- `TypeReveal`
- `CountUp`
- `Parallax`

## Theme

- `ThemeProvider`
- `FruitTheme`
- `CategoryTheme`

The component vocabulary should remain intentionally small.

---

# 8. Page Design System

Each route has a distinct personality while retaining the same brand language.

| Route                  | Personality                    | Main question                               | Visual focus                                  | Signature            |
| ---------------------- | ------------------------------ | ------------------------------------------- | --------------------------------------------- | -------------------- |
| `/`                    | Cinematic Editorial Discovery  | What is Fruitypedia?                        | Typography + multi-fruit photography          | Horizontal ticker    |
| `/directory`           | Curated Catalog                | What fruits exist?                          | Search + fruit grid                           | Card interaction     |
| `/category/[category]` | Collection / Exhibition        | What belongs to this family?                | Category atmosphere + collection              | Category navigation  |
| `/fruit/[slug]`        | Immersive Editorial            | What is this fruit?                         | Full-bleed photography + editorial typography | Type reveal          |
| `/compare`             | Analytical Laboratory          | How are these fruits different?             | Comparison data                               | Data transition      |
| `/nutrition`           | Data Observatory               | What's inside fruit?                        | Nutritional visualization                     | Data animation       |
| `/benefits`            | Evidence-Aware Knowledge Index | Why might this matter?                      | Topics + evidence + fruit links               | Topic selection      |
| `/explore`             | World Atlas                    | Where does fruit come from?                 | Map + region discovery                        | Map interaction      |
| `/seasons`             | Botanical Calendar             | When is fruit typically in season?          | Timeline + month navigation                   | Timeline interaction |
| `/about`               | Editorial Manifesto            | Why does Fruitypedia exist/how is it built? | Typography + methodology                      | Quiet reading        |

---

# 9. Homepage Design — `/`

## Structure

```text
Navbar
→ Hero
→ Horizontal ticker
→ Explore the encyclopedia
→ Category dock
→ Featured fruits
→ Fruit of the Day
→ Learn by Interest
→ Seasonal preview
→ Editorial closing
→ Footer
```

## Hero

Purpose: communicate that Fruitypedia is a visual encyclopedia containing many fruits.

Use:

- near-black base;
- large serif statement;
- concise product explanation;
- prominent search field;
- primary CTA to Directory;
- secondary discovery action;
- coherent multi-fruit studio still-life;
- text-safe negative space;
- restrained depth/parallax.

The homepage hero is **not** a copy of the fruit detail hero.

### Recommended hierarchy

```text
THE VISUAL FRUIT ENCYCLOPEDIA

Every fruit has a story.

Explore origin, taste, nutrition, benefits, seasons,
and the details behind the fruits you eat.

[ Explore the Directory ]    [ Compare Fruits ]

[ Search a fruit, nutrient or category... ]
```

Exact marketing copy can be refined during implementation.

## Hero image

The hero requires a **single coherent multi-fruit photographic composition**, approximately 3–5 representative fruits, not floating cut-out objects.

## Ticker

One continuous editorial sentence immediately below the hero, e.g.:

`EVERY FRUIT HAS A STORY · EVERY FRUIT HAS A STRUCTURE · EVERY FRUIT HAS A SEASON · EVERY FRUIT HAS A PLACE`

## Explore/category section

- editorial heading;
- category dock on desktop;
- scrollable pills/tabs on touch;
- category atmosphere preview on hover;
- no category-dependent gimmicks.

## Featured fruits

Use mixed `FruitCard` variants to create editorial rhythm. Never hardcode a fruit-specific layout.

## Fruit of the Day

Use a large `FeatureCard` that bridges the global experience to one fruit page.

## Learn by Interest

Use `KnowledgeCard` modules linking to:

- Benefits;
- Nutrition;
- Origins/Explore.

## Seasonal preview

Compact only; link to `/seasons` and do not imply universal seasonal availability.

## Closing

Quiet editorial message such as:

`There is more to every fruit.`

Then link to the Directory.

---

# 10. Directory Design — `/directory`

## Purpose

The Directory is the product's scalable catalog. It must feel capable of handling hundreds of fruits even when the first production dataset is small.

## Structure

```text
Directory header
→ Search
→ Category/filter row
→ Sort
→ Fruit grid
→ Optional alphabet jump
→ Footer
```

## Catalog scaling rule

The UI architecture must support:

```text
8 real fruits
→ 20
→ 50
→ 100+
```

without a redesign.

Use development fixtures to stress-test dense grids, search, loading, filtering, and image transfer.

## Public count rule

If 8 fruits are reviewed, the public UI says 8. It must never say 50/100/120 simply because the interface supports that scale.

## Category pages and sparse categories

A public `/category/[category]` landing page is only published when the category has **at least 3 reviewed production fruits**.

If a category has fewer than 3 fruits, the category may still appear as a Directory filter and route to a filtered Directory state instead of opening a thin category landing page.

This prevents sparse public pages while retaining useful category navigation.

## Fruit card

Default content:

- image;
- name;
- category;
- short descriptor/family;
- arrow.

Do not turn the Directory into a nutrition dashboard.

---

# 11. Category Design — `/category/[category]`

## Personality

Collection / exhibition.

## Structure

```text
Category header
→ Category navigation
→ Category introduction
→ Fruit collection
→ Optional category spotlight
→ Related discovery
→ Footer
```

Category themes remain subtle:

- Berry — deep blue/violet
- Citrus — amber/yellow
- Tropical — green/gold
- Stone Fruit — warm peach/red
- Melon — muted green
- Pome — burgundy/green

Category theme affects atmosphere and accents, not the whole canvas.

---

# 12. Fruit Detail Design — `/fruit/[slug]`

This is the flagship visual page. The **Blueberry page is the Golden Master reference implementation** for the entire reusable fruit-page engine.

> [!IMPORTANT]
> **Blueberry is the visual reference, not a collection of hardcoded coordinates.**
> The implementation must prove that the exact same architecture supports future fruits. No fruit-specific layout fork is allowed.

### Golden Master architecture

```text
Fruit data
    ↓
Reusable FruitPage
    ↓
Reusable Fruit sections
    ↓
Fluid responsive layout
    ↓
Blueberry data/theme/assets
```

**Prohibited anti-pattern:**

```text
Blueberry
    ↓
Blueberry-specific coordinates
    ↓
Blueberry-specific CSS
    ↓
Blueberry-specific layout hacks
```

## Structure

```text
Global navbar
→ Fruit toolbar
→ Hero (Fluid, 60–30–10 visual balance)
→ Quick introduction
→ Origin (static SVG map)
→ Nutrition
→ Taste
→ Benefits/evidence
→ Varieties
→ Fun facts
→ Similar fruits
→ Sources/methodology
→ Footer
```

## Hero — Fluid Viewport-First Composition

The hero preserves the approved visual direction using fluid layout principles rather than a rigid 1440px canvas.

### Desktop composition concept

```text
┌─────────────────────────────────────────────────────────────┐
│ NAV                                                         │
│                                                             │
│ nickname                                                    │
│ BLUEBERRY                              ┌─────────────────┐  │
│ scientific name                        │                 │  │
│ description                            │    BLUEBERRY    │  │
│                                        │      IMAGE      │  │
│ stats                                  │                 │  │
│                                        └─────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The hero composition uses:

- **Editorial left-side content:** poetic nickname (`Ballet`), fruit name (`Urbanist`, fluid `clamp()`), scientific identity (`Cormorant Garamond Italic`), short narrative, and key stat callouts.
- **Contained right-side fruit imagery:** responsive, art-directed photography with soft edge masks, proportional to viewport.
- **Near-black base:** 60% dominant visual surface (`#0A0B0E`).
- **Atmospheric color:** 30% deep fruit-colored glow/gradient (`--fruit-glow`, `--fruit-gradient-start`).
- **Restrained accent usage:** 10% high-attention fruit accents (`--fruit-primary`, badges, active states).
- **Fluid spacing:** viewport-aware padding and spacing scales.
- **Fluid typography:** `clamp()`-driven sizing preventing text wrapping bugs or collisions.
- **Responsive image sizing:** fluid width/height constraints with zero overflow.

### Responsive compositional behavior

Desktop, tablet, and mobile are treated as distinct intentional compositions, never as the same layout merely scaled down:

- **Desktop (1024px–1920px+):** Editorial two-column composition, larger hero image, layered atmospheric lighting, 2–3 hero stats, expanded negative space.
- **Tablet (768px–1023px):** Compact two-column or balanced single-column, reduced simultaneous layers, moderate image scale, fewer floating elements, tightened spacing.
- **Mobile (390px–767px):** Intentionally recomposed vertical reading order. Do not simply downscale the desktop hero.

### Preferred mobile hero order

```text
nickname
↓
fruit name
↓
scientific identity
↓
description
↓
hero image
↓
selected stats
↓
benefit badges
```

### Hero rules

- Keep page surface near-black (60% base).
- Fruit color owns the atmosphere (30% secondary).
- Accent colors reserved for highlights (10% accent).
- Keep text-safe negative space.
- Do not display the full nutrition table in the hero.
- Every hero stat has an explicit reference/serving basis.
- Never hardcode fixed pixel coordinates for typography or imagery.

## Intro

Quiet typography-led reset after the cinematic hero.

## Origin

Compact build-time/static SVG map + concise context. Do not hydrate the interactive map stack on fruit pages.

## Nutrition

- serving/reference basis;
- featured metrics;
- accessible table;
- source context;
- optional bars/visuals later.

## Taste

Taste scores are explicitly **editorial sensory summaries**, not measured scientific quantities.

Use simple 0–10 scales plus notes. The method is documented in Section 17.

## Benefits

Conservative evidence-aware explanations. Do not present medical diagnosis/treatment claims or universal health winners.

## Varieties

Compact rows/list first. Richer imagery only where assets exist.

## Fun facts

Each production fun fact must have source IDs. Myths or folklore are either clearly labeled as such or excluded.

## Similar fruits

Use `similarFruitIds` and the reusable FruitCard.

## Sources

Compact source list + methodology link.

---

# 13. Compare Design — `/compare`

## Purpose

A visual laboratory for understanding differences, not a leaderboard.

## First complete version

Two fruits maximum.

## Structure

```text
Header
→ Fruit selectors
→ At a glance
→ Nutrition
→ Taste
→ Season
→ Origin
→ Characteristics
→ What stands out
→ New comparison
```

Use aligned values, data bars, and restrained fruit accents.

Never declare a universal nutritional or health winner.

Comparison state should be represented in URL query parameters where practical.

---

# 14. Nutrition Design — `/nutrition`

## Personality

Data observatory.

## Structure

```text
Hero
→ Nutrient categories
→ Nutrient explorer
→ Fruit ranking/comparison
→ Find fruits by nutrient
→ Methodology
→ Footer
```

Use:

- `Metric`
- `DataBar`
- `ComparisonRow`
- `Ranking`

Every value carries a reference basis.

### "High"/"low" rule

If the interface uses the wording **high** or **low** in a U.S. Daily Value context, the threshold is documented explicitly rather than invented in UI copy. FDA guidance describes 20% DV or more as a general "high" threshold and 5% DV or less as a general "low" threshold.

Reference:
<https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels>

Where a claim is not a Daily Value claim, use a relative/ranked statement instead of reusing the word "high."

---

# 15. Benefits Design — `/benefits`

## Personality

Evidence-aware knowledge index.

## Structure

```text
Hero
→ Topic navigation
→ Benefit topic grid
→ Featured topic
→ Related nutrients
→ Related fruits
→ Evidence/methodology
→ Footer
```

The Benefits page starts as a nutrient/content explorer. Consequential health claims are deferred until the second-reviewer requirement can be met.

Avoid:

- miracle;
- detox;
- cure;
- disease-treatment promises;
- universal healthiest-fruit rankings.

---

# 16. Explore Design — `/explore`

## Personality

World atlas.

## Core rule

The map is the interface, not a decorative background.

## Structure

```text
Compact hero
→ Interactive map
→ Origin / Grown Today toggle
→ Region panel
→ Fruit results
→ Featured regions
→ Footer
```

Only `/explore` hydrates the interactive map.

### Fruit detail origin maps

Use build-time static SVG output for the simple per-fruit origin context.

### Origin vs grown today

- **Origin:** historical/native context.
- **Grown today:** current regions only when supported by the data.

---

# 17. Seasons Design — `/seasons`

## Personality

Botanical calendar.

## Structure

```text
Hero
→ Season/month navigation
→ Timeline
→ In season now
→ Peak season
→ Coming next
→ Regional/methodology note
→ Footer
```

### Season model requirement

Every seasonal record must identify geography/context. Do not treat seasonality as universally global.

Example model:

```ts
interface SeasonData {
  regionId: string;
  hemisphere: "north" | "south" | "equatorial" | "mixed";
  months: number[];
  peakMonths?: number[];
  label?: string;
  sourceIds: string[];
}
```

Use wording such as:

- typical season;
- peak season;
- regional availability varies.

## Current date behavior

- `Fruit of the Day`: resolve client-side from the current UTC calendar date so it never goes stale between deployments.
- `In season now`: use an explicit user-selected region/context. Do not infer a universal season from build time.

---

# 18. About Design — `/about`

## Personality

Editorial manifesto.

## Structure

```text
Hero
→ Why Fruitypedia
→ How we work
→ Data methodology
→ Image provenance
→ Sources
→ Accessibility
→ Footer
```

Explain:

- content sourcing;
- nutrition reference basis;
- seasonality context;
- benefit wording rules;
- AI image provenance;
- editorial/factual boundaries;
- accessibility philosophy.

Keep animation minimal.

---

# 19. Data Architecture

## 19.1 Nutrition data source policy

Primary working source for generic produce nutrition is **USDA FoodData Central**, using **Foundation Foods** and **SR Legacy** where appropriate. Do not use Branded Foods as the default source for generic whole-fruit nutrition.

FoodData Central documentation identifies Foundation Foods and SR Legacy as distinct data types; SR Legacy is the final 2018 release while Foundation Foods continues to receive updates. Official documentation:

- Data documentation: <https://fdc.nal.usda.gov/data-documentation/>
- Downloads: <https://fdc.nal.usda.gov/download-datasets/>
- Foundation Foods: <https://fdc.nal.usda.gov/Foundation_Foods_Documentation/>
- SR Legacy documentation: <https://www.ars.usda.gov/arsuserfiles/80400525/data/sr-legacy/sr-legacy_doc.pdf>

FoodData Central states that its data are public domain/CC0 1.0 and requests attribution to FoodData Central. Record attribution in project sources.

Official licensing reference:
<https://fdc.nal.usda.gov/>

## 19.2 Import tooling

Build the FoodData Central import/normalization script in **Phase 0**, not after content entry begins.

Required capabilities:

- fetch/import selected food records;
- normalize nutrient IDs;
- convert numeric values/units without silently changing meaning;
- preserve source/reference IDs;
- preserve reference basis;
- validate expected food descriptions;
- generate typed project data;
- detect missing/duplicate nutrients;
- produce a review file before publication.

Never manually type copied USDA values into JSX or ad hoc JSON without provenance.

## 19.3 Data types

```ts
interface NutrientValue {
  amount: number;
  unit: string;
  dailyValuePercent?: number;
  sourceIds: string[];
  sourceReferenceIds?: string[];
}

interface Nutrition {
  referenceBasis: "per100g" | "perServing" | "other";
  servingSize: string;
  calories: NutrientValue;
  nutrients: Record<string, NutrientValue>;
}
```

## 19.4 Source model

Defined once:

```ts
interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessedAt: string;
  referenceId?: string;
  edition?: string;
}
```

## 19.5 Taste model

Taste ratings are editorial/sensory summaries.

```ts
interface TasteScore {
  value: number; // 0–10
  basis: "editorial-sensory";
  methodologyId: string;
}

interface TasteProfile {
  sweetness: TasteScore;
  acidity: TasteScore;
  bitterness?: TasteScore;
  notes: string;
}
```

### Taste scoring method

The 0–10 score is **not** presented as laboratory measurement.

The internal editorial rubric is:

- 0–2: very low perception;
- 3–4: low;
- 5–6: moderate;
- 7–8: high;
- 9–10: very high.

The rating is assigned from a documented sensory description using multiple reference descriptions where available. If evidence is weak or contradictory, the score is omitted rather than manufactured.

---

# 20. Fruit Data Model

```ts
interface FruitTheme {
  primary: string;
  secondary: string;
  glow: string;
  gradient: [string, string];
  textOnPrimary: string;
}

type FruitCategoryId =
  "berry" | "citrus" | "tropical" | "stone-fruit" | "melon" | "pome";

interface CategoryTheme {
  primary: string;
  secondary: string;
  glow: string;
}

interface OriginData {
  region: string;
  coordinates: [number, number];
  description: string;
  grownTodayRegions?: string[];
  sourceIds: string[];
}

interface SeasonData {
  regionId: string;
  hemisphere: "north" | "south" | "equatorial" | "mixed";
  months: number[];
  peakMonths?: number[];
  label?: string;
  sourceIds: string[];
}

interface FruitImage {
  src: string;
  alt: string;
  role: "hero" | "gallery" | "crossSection" | "card";
  generatedBy: "ai" | "photography";
  provider?: string;
  promptId?: string;
  reviewed: boolean;
  reviewedAt?: string;
  reviewerId?: string;
}

interface FruitImages {
  hero: FruitImage;
  gallery: FruitImage[];
  crossSection?: FruitImage;
}

interface BenefitTag {
  label: string;
  phenomenon: string;
  description: string;
  evidenceLevel: "established" | "emerging" | "limited";
  sourceIds: string[];
  icon: string;
  metric?: string;
}

interface HeroStat {
  nutrientId: string;
  label: string;
  value: number;
  unit: string;
  referenceContext: string;
  sourceIds: string[];
}

interface Fact {
  text: string;
  sourceIds: string[];
  reviewedAt?: string;
  reviewerId?: string;
}

interface Variety {
  name: string;
  description?: string;
  sourceIds: string[];
}

type ReviewStatus =
  "draft" | "fact-checked" | "editorially-reviewed" | "published";

interface ReviewMeta {
  status: ReviewStatus;
  reviewedAt?: string;
  reviewerId?: string;
}

interface Fruit {
  id: string;
  slug: string;
  name: string;

  editorial: {
    nickname?: string;
    tagline?: string;
    heroDescription: string;
  };

  taxonomy: {
    categoryId: FruitCategoryId;
    family: string;
    genus?: string;
    species?: string;
    botanicalNotes?: string[];
  };

  theme: FruitTheme;
  images: FruitImages;
  origin: OriginData;
  season: SeasonData[];
  nutrition: Nutrition;
  tasteProfile: TasteProfile;
  benefitTags: BenefitTag[];
  heroStats: HeroStat[];
  varieties: Variety[];
  funFacts: Fact[];
  similarFruitIds: string[];
  sourceIds: string[];
  review: ReviewMeta;
}
```

## 20.1 Factual/editorial/educational separation

### Factual

- taxonomy;
- nutrition;
- origin;
- seasonality;
- varieties;
- sourced facts.

### Editorial

- nickname;
- tagline;
- hero description;
- poetic benefit label;
- sensory taste summary.

### Educational

- explanations;
- sourced comparisons;
- conservative benefit context.

---

# 21. Category and Taxonomy Policy

Fruitypedia's navigation categories are an **editorial/culinary discovery taxonomy**.

They are not intended to replace botanical classification.

For example, a fruit can be shown under a user-friendly category while its botanical family/genus/species remain separately represented.

This prevents category navigation from implying strict botanical claims.

### Category page publication rule

At least **3 reviewed production fruits** are required before a category landing page becomes public.

The Directory may still filter to a category with fewer fruits.

---

# 22. Image Campaign and Legal/Commercial Review

## 22.1 Image feasibility spike

Phase 0 must test **both**:

1. three single-fruit campaign images;
2. one coordinated **3–5 fruit homepage still-life composition**.

This directly tests the hardest visual problem before Phase 1 commits the homepage hero to it.

## 22.2 Campaign grammar

Shared characteristics:

- premium macro photography feel;
- realistic texture;
- dramatic directional studio lighting;
- shallow depth of field;
- controlled glossy/wet highlights;
- dark atmospheric environment;
- fruit-derived ambient glow;
- text-safe negative space;
- believable scale/depth;
- anatomically plausible fruit surfaces/interiors.

## 22.3 Cross-section rule

A scientifically specific cut fruit is **not mandatory in the hero**.

When interior anatomy matters, use a separately reviewed educational/cross-section asset.

## 22.4 Provider terms check

Before public publication, record:

- image-generation provider/model;
- generation date;
- relevant commercial-use/disclosure terms in force at generation;
- whether human review was performed;
- any asset-specific restrictions.

Do not assume provider terms remain unchanged. The legal/commercial snapshot is stored with the project release notes.

## 22.5 Production image budget

Working planning budget for the first public content set:

- Phase 0 spike: **12–20 generated candidates** including one multi-fruit hero composition.
- Production launch assets: approximately **6–10 accepted assets per fruit**, with more generations allowed during iteration.
- Initial generation/review spend envelope: **US$50 working budget; US$75 alert threshold** for API/image generation during the first launch set.

These are project-control budgets, not claims about provider pricing. Current Google documentation shows image output pricing varies by model/resolution and identifies Gemini 3.1 Flash Image/Nano Banana 2 as the high-volume image option and Gemini 3 Pro Image/Nano Banana Pro as the higher-quality option. Verify current pricing at the time of generation.

References:

- Image generation guide: <https://ai.google.dev/gemini-api/docs/image-generation>
- Pricing: <https://ai.google.dev/gemini-api/docs/pricing>

---

# 23. Search System

Search is a global product feature.

## Entry

- `⌘ K` on macOS;
- `Ctrl K` on Windows/Linux;
- navbar search button;
- mobile search icon.

## MVP result groups

- Fruits;
- Categories;
- Nutrients where available.

Later:

- Benefits/topics;
- Regions;
- natural-language filters.

## Interaction

- Escape closes;
- arrow keys navigate;
- Enter opens selection;
- focus is trapped while dialog is open;
- focus returns to the trigger after close.

## Search architecture

Keep the search UI and result schema future-ready for queries such as:

```text
blueberry
berries
vitamin C
high fiber
in season
```

Do not require semantic search in the first release.

---

# 24. Date-Driven Features

Static generation must not make date-driven features stale.

## Fruit of the Day

Compute client-side from the current **UTC calendar date** and the ordered production fruit list.

This avoids daily rebuild requirements and keeps the result deterministic across deployments.

## Seasonal features

Seasonality requires region/context. The user selects a region where necessary; the current month is read client-side.

Do not embed a build-time "today" result into generated HTML as the only source of truth.

---

# 25. Animation System

## 25.1 Motion Architecture — Lenis + GSAP + ScrollTrigger

Fruitypedia uses a unified four-tier motion pipeline designed for cinematic editorial pacing:

```text
Lenis
    ↓
Smooth scrolling
    ↓
GSAP
    ↓
ScrollTrigger
    ↓
Scroll-driven editorial animation
```

### Motion tier responsibilities

- **Lenis:**
  - smooth scrolling;
  - normalized scroll delta across operating systems and input devices;
  - scroll interpolation;
  - unified global scroll experience.
- **GSAP:**
  - orchestrated animation timelines;
  - choreographed entrance sequences;
  - editorial page transitions;
  - high-precision controlled movement.
- **ScrollTrigger:**
  - scroll-linked animations and progress scrubbing;
  - section reveal triggers;
  - controlled parallax and depth cues.
- **CSS:**
  - micro-interactions and touch feedback;
  - hover states;
  - focus indicators;
  - simple non-choreographed transitions.

### Motion implementation rules

- Lenis must be implemented as a **shared/global enhancement** (e.g. `SmoothScrollProvider` or equivalent global scroll layer) rather than instantiated separately or redundantly inside individual fruit pages.
- **Do not use Lenis to compensate for poor responsive layout.** The page must remain structurally, visually, and functionally correct without relying on smooth-scroll behavior.
- CSS for micro-interactions; GSAP for orchestrated sequences; Lenis for viewport scroll smoothing.
- No perpetual particle canvases, cursor shaders, or 100+ frame fruit spinning loops.
- No stacked signature animations competing for attention on the same screen.
- No animation-only content: all content must be readable in static HTML.

## 25.2 Signature animations

- Home — horizontal ticker;
- Fruit page — type reveal;
- Compare — data transition;
- Nutrition — visualization transition;
- Benefits — topic selection;
- Explore — map selection;
- Seasons — timeline/month transition;
- About — minimal motion.

## 25.3 Motion timing

### Micro

150–250ms.

### UI

250–500ms.

### Editorial

600–1000ms.

### Ambient

Multi-second, low-amplitude movement only.

## 25.4 Accessibility and Reduced-Motion Requirements

Lenis and GSAP must strictly respect the `prefers-reduced-motion: reduce` media query.

When reduced motion is requested:

- reduce or disable non-essential motion;
- avoid aggressive scroll interpolation or inertia smoothing;
- avoid unnecessary parallax or scale transformations;
- keep all content immediately accessible and legible;
- preserve standard browser navigation behavior.

Smooth scrolling must never become necessary for accessing content.

### Fruit type reveal accessibility

The full fruit name must be present in server-rendered HTML from the initial render. The animated GSAP layer visually reveals the same existing text; it must never replace the accessible/static DOM content. Reduced-motion users receive the fully rendered name immediately without delays.

---

# 26. Responsive Design

> [!IMPORTANT]
> **Fruitypedia must NOT be designed around a 1440px canvas.**
> The previous process treated 1440px too much like the primary design canvas. The new system is **viewport-first and fluid**. 1440px is only one tested reference state, not the master coordinate frame.

## 26.1 Viewport-First / Fluid Composition

The viewport determines the layout composition:

```text
Viewport
    ↓
Fluid page padding
    ↓
Fluid layout/grid
    ↓
Readable content constraints
    ↓
Responsive typography
    ↓
Viewport-aware image composition
```

`max-width` is only used where appropriate to maintain readable line lengths and prevent extreme image stretching.

### Prohibited strategies

- Fixed 1440px canvas;
- Fixed desktop coordinates (hardcoded pixel positions);
- Absolute positioning based on a 1440px reference frame;
- Fixed-width hero compositions;
- Excessive breakpoint patches;
- Designing desktop first and simply shrinking it for mobile.

### Target viewports tested

```text
390px   (mobile portrait — e.g. iPhone)
768px   (tablet portrait — e.g. iPad)
1024px  (tablet landscape / small laptop)
1280px  (standard laptop)
1440px  (desktop reference)
1920px+ (wide desktop)
```

## 26.2 Compositional Responsive Behavior

Desktop, tablet, and mobile must not be treated as the same layout at different scales. Layouts must be recomposed intentionally:

### Desktop (1024px–1920px+)

Can use:

- larger image;
- layered atmosphere and radial glow;
- multiple hero stats;
- expanded spacing and generous negative space;
- editorial two-column composition;
- category dock.

### Tablet (768px–1023px)

Reduce:

- simultaneous layers;
- image scale;
- floating elements and badges;
- spacing scales;
- number of visible secondary elements and cards.

### Mobile (390px–767px)

Recompose intentionally following the principle: **Mobile is a first-class composition.** Do not simply shrink the desktop hero.

Preferred Blueberry hero order:

```text
nickname
↓
fruit name
↓
scientific identity
↓
description
↓
hero image
↓
selected stats
↓
benefit badges
```

### Other key route mobile compositions

- **Homepage hero:** Text first; search directly below copy; coordinated fruit composition positioned below or alongside depending on viewport height.
- **Compare:** Vertical comparison narrative instead of cramped desktop side-by-side table.
- **Explore:** Map positioned above selected region panel with easy touch panning/tapping.

---

# 27. Accessibility Standard

Target: **WCAG 2.2 AA**.

Reference:
<https://www.w3.org/WAI/standards-guidelines/wcag/>

Require:

- semantic headings;
- real links for navigational cards;
- visible keyboard focus;
- accessible dialogs;
- labelled controls;
- descriptive image alt text;
- sufficient contrast;
- accessible tables behind visualizations;
- no critical information conveyed only by color;
- touch targets around 44px or larger where practical;
- reduced-motion behavior;
- no dependency on hover for essential information.

---

# 28. Performance Budget

## Core Web Vitals project targets

On representative production pages under controlled testing:

- LCP <= 2.5s;
- INP <= 200ms;
- CLS <= 0.10.

## JavaScript

### Homepage

Initial non-image JS target: **<= 200 KB gzipped**.

### Fruit page

Initial non-image JS target: **<= 100 KB gzipped**.

The fruit page target is deliberately lower because its content should be mostly static HTML/CSS and it should not load the interactive Explore map stack.

### Enforcement

- warning at **>10% over target**;
- merge gate/failure at **>25% over target** unless a documented exception is approved.

## Images

### Hero

Target compressed hero image: **<= 500 KB**.

### Fruit page initial image transfer

Target: **<= 1.0 MB** before lazy-loaded below-fold assets.

### Image handling

- WebP/AVIF where supported;
- responsive `srcset`/sizes;
- lazy load below-fold images;
- preload only the primary hero image where justified;
- avoid shipping original-generation resolution to the browser.

## Quality checks

- Lighthouse Performance >= 90 target;
- Lighthouse Accessibility >= 90 target;
- Lighthouse SEO >= 90 target;
- no major axe automated violations;
- manual mobile/keyboard/reduced-motion checks.

Lighthouse reference:
<https://developer.chrome.com/docs/lighthouse/>

---

# 29. SEO Strategy

SEO is a foundational architecture requirement.

## Phase 1+

- per-page title;
- meta description;
- canonical URL;
- semantic headings;
- indexable HTML;
- sitemap;
- robots configuration;
- Open Graph/social metadata;
- structured data where appropriate;
- stable `/fruit/[slug]` pages.

## Fruit pages

Each production fruit page must have:

- unique title;
- unique description;
- meaningful page copy;
- canonical URL;
- image/social metadata;
- source-aware factual text.

Dynamic OG generation may remain Phase 5.

Thin-content risk is accepted during development but **public V1 should not expose large numbers of nearly empty fruit pages**.

---

# 30. Content Pipeline

Content is the primary scaling bottleneck.

## Lifecycle

```text
Research
→ Source capture
→ Import/normalization
→ Structured data entry
→ Editorial drafting
→ Fact check
→ Evidence review where applicable
→ Image review
→ QA
→ Publish
```

## Required provenance

Each factual group should preserve:

- source ID;
- source reference ID where available;
- access date/edition;
- reference/serving basis;
- reviewer/status.

## Fun facts

Fun facts use the same source discipline as nutrition. Unsourced trivia is not accepted merely because it sounds plausible.

## Review metadata

`reviewed: boolean` is not sufficient.

Use review status + reviewer + date.

---

# 31. Phase Roadmap

The roadmap follows the deliberate product sequence:

**Global Landing Page (Completed) → Responsive Foundation & Motion Spike (Phase 1.5) → Fruit Engine & Blueberry (Phase 2) → Multi-Fruit Stress Test (Phase 2.5) → Catalog & Launch (Phase 3) → Analytical Suite (Phase 4).**

The phases are disciplined increments, not one giant build.

---

## Phase 0 — Foundation + Feasibility Spike: COMPLETED

### Status

**COMPLETED.** Architectural, image, content-model, and deployment feasibility verified.

### Delivered

- Astro + React + TypeScript scaffold initialized;
- strict TypeScript schemas and strict typechecking;
- Tailwind CSS and base design tokens;
- GSAP + ScrollTrigger integration verified;
- typed fruit data architecture and schema validation;
- FoodData Central import/normalization prototype;
- category/taxonomy model and source/provenance model;
- taste, season, and review data models;
- accessibility baseline (WCAG 2.2 AA targeting);
- SEO metadata and sitemap strategy;
- CI pipeline and static deployment previews;
- image feasibility spike completed (single fruit + multi-fruit composition).

---

## Phase 1 — Global Fruitypedia Landing Page: COMPLETED

### Status

**COMPLETED.** The global brand and discovery experience is established.

### Delivered

- Fruitypedia wordmark and brand identity;
- desktop navbar and responsive mobile navigation;
- search trigger and command-style search dialog foundation;
- footer with legal, methodological, and provenance links;
- `SectionHeading`, `ArrowLink`, buttons, and interactive card primitives;
- `FruitCard` foundation, `FeatureCard`, and `KnowledgeCard`;
- global theme tokens and layout containers;
- homepage hero with search-first interaction;
- coordinated multi-fruit still-life hero visual;
- horizontal ticker signature animation;
- Explore section and category dock;
- featured fruits showcase and Fruit of the Day module;
- Learn by Interest section and seasonal preview module;
- editorial closing and responsive layout validation across initial breakpoints.

---

## Phase 1.5 — Responsive Design System + Motion Foundation + Blueberry Golden Master Preparation: NEXT

### Status

**NEXT / IN PROGRESS.** Bridge milestone between the completed homepage and the reusable fruit-page engine.

### Estimate

**3–5 working days / 15–25 focused hours.**

### Goal

Before building the full reusable fruit engine, establish and validate the responsive visual foundation that the entire Fruitypedia fruit-page system will use.

The most critical correction is:

> [!IMPORTANT]
> **Fruitypedia must NOT be designed around a 1440px canvas.**
> The previous implementation/design process treated 1440px too much like the primary design canvas. This created problems with composition, spacing, typography, image positioning, and responsiveness.
> The new system must be **viewport-first and fluid**.
> 1440px is only one validation/reference viewport, not the fundamental coordinate system.

### Tasks

#### A. Layout foundation

- remove 1440px-primary-canvas assumptions;
- audit and eliminate fixed pixel widths;
- audit and eliminate absolute positioning tied to desktop reference frames;
- audit and remove desktop-only hardcoded coordinates;
- create fluid page-shell primitive (`GlobalShell` / `FruitPageShell`);
- create fluid content-container primitive with readable constraints;
- establish responsive horizontal padding: `clamp(1.25rem, 3.5vw, 3.5rem)`;
- establish viewport-aware vertical rhythm and spacing scales;
- establish fluid grid and flex layout primitives.

#### B. Typography calibration

- calibrate `Urbanist` fruit-name sizing using fluid `clamp()` formulas;
- calibrate `Ballet` poetic nickname font scale and vertical alignment;
- calibrate `Cormorant Garamond` italic scientific identity and natural-history headings;
- calibrate `Inter` metadata, statistics, badges, and button text;
- verify zero line wrapping collisions or text clipping across all target widths.

#### C. Color system

- formalize the 60–30–10 visual balance rule (60% near-black base, 30% fruit atmosphere/images, 10% fruit accent);
- verify Blueberry color tokens (`--fruit-primary`, `--fruit-secondary`, `--fruit-glow`);
- ensure fruit colors remain strictly atmospheric and accented, never giant flat backgrounds;
- ensure accent colors are reserved for high-attention interactive and indicator elements;
- prevent large flat fruit-colored surfaces.

#### D. Motion foundation

- install and configure **Lenis** smooth scroll library;
- create reusable global `SmoothScrollProvider` abstraction;
- integrate Lenis with GSAP timelines and tickers;
- integrate Lenis with ScrollTrigger (`ScrollTrigger.update`, proxy/scroller compatibility);
- verify component mount/unmount cleanup and lifecycle stability;
- implement strict reduced-motion handling (`prefers-reduced-motion: reduce`) disabling inertia scroll and non-essential animations.

#### E. Blueberry Golden Master

- rebuild the Blueberry hero around fluid, viewport-first composition;
- calibrate image-to-content ratio dynamically across viewports;
- calibrate vertical rhythm and negative space;
- calibrate fruit title scale (`Urbanist`, not serif);
- calibrate atmospheric glow and background depth;
- verify 60–30–10 visual balance in the live rendered hero;
- verify intentional mobile composition order:
  `nickname → fruit name → scientific identity → description → hero image → selected stats → benefit badges`.

#### F. Regression testing

Test systematically across all target viewports:

- `390px` (mobile portrait)
- `768px` (tablet portrait)
- `1024px` (tablet landscape / small laptop)
- `1280px` (standard laptop)
- `1440px` (desktop reference)
- `1920px+` (wide desktop)

Verify:

- no horizontal overflow or unwanted page scrolling;
- no clipped content or truncated text;
- no overlapping text or unreadable collisions;
- no oversized empty dead regions caused by rigid desktop margins;
- no broken image aspect ratios or off-center composition;
- no typography collisions at boundary viewport sizes;
- no excessive whitespace caused by fixed desktop canvas assumptions;
- no breakpoint-specific hacks unless genuinely required.

### Phase 1.5 exit gate

Phase 1.5 is complete only when:

- the site no longer depends on a 1440px primary canvas;
- the layout is fluid and viewport-first across all screens;
- 60–30–10 visual balance is demonstrably maintained;
- Lenis works globally via `SmoothScrollProvider`;
- GSAP and ScrollTrigger integration works smoothly with Lenis;
- reduced-motion behavior works without layout shifts;
- Blueberry hero is visually approved and matches the Golden Master standard;
- Blueberry works seamlessly at 390px, 768px, 1024px, 1280px, 1440px, and 1920px+;
- typography matches the locked Golden Master hierarchy (Urbanist, Ballet, Cormorant Garamond, Inter);
- no fruit-specific layout fork exists;
- the reusable layout primitives are ready for Phase 2 consumption.

---

## Phase 2 — Fruit Engine + Gold-Standard Blueberry: UPCOMING

### Status

**UPCOMING.** Builds directly upon Phase 1.5.

### Estimate

**8–12 working days / 40–60 focused hours.**

### Dependency

```text
Phase 0 — COMPLETED
        ↓
Phase 1 — COMPLETED
        ↓
Phase 1.5 — Responsive Design + Motion Foundation (NEXT)
        ↓
Phase 2 — Fruit Engine + Blueberry (UPCOMING)
```

### Goal

Build the reusable fruit engine and complete the flagship Blueberry page using the responsive primitives and motion architecture established in Phase 1.5. Phase 2 focuses on content integration, data binding, and section completeness rather than simultaneously inventing the responsive foundation.

### Build

- `FruitToolbar` with sticky discovery controls;
- `ThemeProvider` dynamic fruit CSS variable injection;
- dynamic static fruit route (`src/pages/fruit/[slug].astro` via `getStaticPaths()`);
- reusable `FruitPage` component architecture;
- Blueberry hero (incorporating Phase 1.5 Golden Master hero);
- introduction section (quiet typography-led reset);
- static origin SVG map and botanical context;
- nutrition section with accessible table and serving-size toggle;
- taste profile sensory breakdown (editorial 0–10 scale);
- benefits section with conservative evidence-aware content;
- varieties catalog section;
- sourced fun facts module;
- similar fruits recommendation module;
- sources and methodology section;
- fruit-page SEO metadata, OpenGraph tags, and JSON-LD schema;
- Blueberry production photographic assets.

All sections must strictly use the Phase 1.5 fluid layout primitives, 60–30–10 balance, and Lenis motion system.

### Exit gate

Phase 2 is complete when:

- Blueberry page is production-quality end-to-end;
- Blueberry works seamlessly across all target viewport classes (390px to 1920px+);
- the fruit engine architecture is 100% reusable;
- no Blueberry-specific layout fork or coordinate hack exists;
- all factual content is traceable to verified sources with provenance;
- all fruit sections are responsive and compositionally sound;
- motion is restrained, cinematic, and accessible;
- Lenis/GSAP/ScrollTrigger integration is rock-solid and leak-free;
- image performance remains within the established budget (<500 KB hero image transfer);
- fruit SEO metadata and structured data are implemented;
- the architecture is verified ready to accept Strawberry, Orange, Mango, Banana, Peach, Watermelon, and Apple without structural redesign.

---

## Phase 2.5 — Multi-Fruit Stress Test + Content Scaling Pilot

### Estimate

**10–18 working days / 50–90 focused hours.**

This estimate is intentionally larger than the earlier version because research, source capture, taste/season modeling, image generation/review, and regression testing are the actual bottleneck.

### Goal

Prove that the content pipeline and reusable design work at fruit-level scale.

### Production fruits

Add:

- Strawberry;
- Orange;
- Mango;
- Banana;
- Peach;
- Watermelon;
- Apple.

Together with Blueberry, this gives eight production fruits.

### Approximate per-fruit content budget

**1–2 focused working days per fruit** may be required depending on evidence depth and image iteration, plus shared regression/cleanup time.

### Validate

- color/theme variation;
- shape variation;
- image composition variation;
- long names/descriptions;
- nutrition variability;
- taste model;
- season region model;
- source density;
- category coverage;
- mobile composition;
- static origin maps;
- page-weight budget.

### Exit gate

- all eight production fruits pass content/image review;
- no fruit-specific component hacks;
- all visible categories route to useful destinations;
- production image budget remains manageable;
- content pipeline is repeatable.

---

## Phase 3 — Directory, Category, Search + Public V1 Catalog — COMPLETED

### Estimate

**8–12 working days / 40–60 focused hours.**

### Status: COMPLETED

All Phase 3 deliverables implemented, scale benchmarked, and browser verified:

1. **Multi-dimensional Search Engine (`src/utils/searchEngine.ts` & `src/components/SearchDialog.tsx`)**:
   - Indexes binomial taxonomy, common names, poetic nicknames, cultivars, nutrients (Vitamin C, potassium, fiber, sugars, hydration, calories), biogeographic origin regions, and sensory flavor notes.
   - Match reason badges displayed dynamically (e.g. `Vitamin C: 58.8 mg (65% DV)`, `Origin: Central Asia`, `Cultivar: Honeycrisp`).
   - Global keyboard shortcuts (`⌘K`, `Ctrl+K`, `/`), arrow navigation (`↑`/`↓`/`↵`), discovery suggestion chips.
2. **Interactive Directory (`src/pages/directory.astro` & `src/components/FruitCard.astro`)**:
   - URL-synced category pill filtering (`?category=...`) without full-page reloads.
   - In-page live text filtering with instant match counts.
   - Multi-metric sorting (Name A-Z/Z-A, Calories, Vitamin C, Sugars, Potassium).
   - Empty state with filter reset actions.
3. **Category Dynamic Routing (`src/pages/category/[category].astro`)**:
   - Dedicated family landing page with full theme glow, stats, and fruit cards.
   - Graceful scaling policy for categories with $<3$ monographs with cross-links to filtered directory views.
4. **Scale Benchmark Suite (`src/tests/scale.test.ts`)**:
   - Benchmarked 20, 50, and 120 fixture records.
   - Search latency verified $<15$ms; filtering $<3$ms; sorting $<5$ms.
   - Truthful catalog invariant strictly verified (8 production fruits).
5. **Quality Gate Validation**:
   - 31/31 Vitest tests passing.
   - 0 TypeScript errors (`tsc --noEmit`).
   - Clean Astro static build generating 20 production pages in 4.39s.
6. **Editorial Art Direction & Design Polish**:
   - **Full-Bleed & Optical Subject Centering**: Implemented full-bleed right layout on "Fruit of the Day" and "Monograph of Distinction" cards; shifted fruit imagery leftwards (`object-position: 72% center`) in non-full-bleed contexts to compensate for photography negative space.
   - **Footer Architecture Modularization**: Replaced heavy universal 5-column footer with an ambient compact footer across catalog and monograph pages, reserving the comprehensive institutional footer exclusively for `/about`.
   - **Centralized Citation Registry**: Transferred verbose per-monograph reference lists into a master categorized citation registry on `/about`, substituting an Academic Provenance Stamp with deep anchor links on fruit pages.
   - **Recommendation Cleanliness**: Removed unreleased mock companion fruit ("Raspberry") from `SimilarFruits.astro`, standardizing an intelligent 3-card grid of real published monographs.

### Public launch gate

Phase 3 completion satisfies the **public V1 launch milestone**. Ready for design and workflow review.

---

## Phase 4 — Analytical & Discovery Suite

The earlier Phase 4 was too large. It is split into five independently gated workstreams.

### 4A — Compare — COMPLETED

**Status: COMPLETED**

- **Two-Fruit Selector Island (`src/components/FruitCompare.tsx`)**: Responsive dual-slot visual selector with dynamic ambient theme glow, animated fruit swap button, and quick cohort discovery presets (Berry Duel, Citrus vs Tropical, Orchard Classics, etc.).
- **Executive Analytical Differentials**: Automatically calculates key advantages in caloric density, Vitamin C potency, and digestive fiber ratios.
- **Nutritional Delta Visualizer**: Comparative proportional dual bars for 12 macro and micronutrients with visual leader badges and percentage differentials.
- **Sensory & Seasonal Contrast**: 10-point sweetness/acidity meters, editorial tasting note comparisons, botanical classification table, and 12-month harvest calendar overlap.
- **URL Synchronization & Shareability**: Instant two-way synchronization with `?a={slug}&b={slug}` and one-click clipboard sharing.
- **Test Suite**: 5/5 unit tests in `src/tests/compare.test.ts` (36/36 tests passing total).

### 4B — Nutrition Explorer (NEXT)

**4–7 days / 20–35 hours**

Build:

- nutrient categories;
- nutrient explorer;
- rankings;
- comparison views;
- find-by-nutrient;
- methodology.

### 4C — Benefits

**4–7 days / 20–35 hours**

Build only the conservative content-first version unless a second human reviewer is available for consequential health-adjacent claims.

### 4D — Explore

**4–7 days / 20–35 hours**

Build:

- interactive map;
- region selection;
- origin/grown-today states;
- region → fruit exploration;
- fruit → origin exploration.

### 4E — Seasons

**3–5 days / 15–25 hours**

Build:

- month/season selector;
- timeline;
- in-season-now;
- peak season;
- coming next;
- regional context.

### Phase 4 exit gate

Each sub-phase must independently satisfy accessibility, performance, data, and content gates.

---

## Phase 5 — Polish + Retention

### Estimate

**5–8 working days / 25–40 focused hours.**

Potential features:

- favorites;
- random fruit;
- richer fruit-to-fruit transitions;
- reviewed cross-section experiences;
- trivia/quiz;
- dynamic OG images;
- additional editorial modules.

Do not allow these to delay the core encyclopedia.

---

## Phase 6 — Stretch

Variable.

Potential features:

- historical trade-route maps;
- CMS-lite;
- multilingual support;
- advanced regional seasonality;
- deeper historical storytelling.

These require mature content before implementation.

---

# 37. Phase Dependency Map

```text
PHASE 0 (COMPLETED)
Foundation + feasibility
        │
        ▼
PHASE 1 (COMPLETED)
Global Fruitypedia Landing Page
        │
        ▼
PHASE 1.5 (NEXT)
Responsive Design System
+ Fluid Layout
+ 60–30–10 Visual System
+ Lenis Motion Foundation
+ Blueberry Golden Master Preparation
        │
        ▼
PHASE 2 (UPCOMING)
Fruit Engine + Complete Blueberry
        │
        ▼
PHASE 2.5
Multi-Fruit Stress Test
        │
        ▼
PHASE 3
Directory / Categories / Search / Public V1
        │
        ├──────────────┬──────────────┬──────────────┐
        ▼              ▼              ▼              ▼
     4A Compare    4B Nutrition   4C Benefits   4D Explore
                                                       │
                                                       ▼
                                                   4E Seasons
        │
        ▼
PHASE 5
Polish + Retention
        │
        ▼
PHASE 6
Stretch
```

---

# 38. Phase Gates

A phase is complete only when the resulting experience works end-to-end.

## Gate A — Product

The intended user task can be completed without dead ends.

## Gate B — Visual

The output matches the approved Fruitypedia visual system.

## Gate C — Content

Published facts have provenance and editorial content is clearly separated.

## Gate D — Responsive

Desktop/tablet/mobile are intentionally composed.

## Gate E — Accessibility

WCAG 2.2 AA target; automated and manual checks pass.

## Gate F — Performance

Budgets are met or a documented exception is approved.

## Gate G — Reusability

New fruits do not require layout forks.

## Gate H — Operations

Build, deployment, and content validation work reproducibly.

---

# 39. Definition of Done

A feature/page is not done merely because it renders.

It is done when:

- production or clearly labeled fixture data is present;
- factual content has provenance;
- routes and links work;
- no primary navigation points to a dead page;
- responsive layouts are intentional;
- keyboard/focus behavior works;
- reduced motion works;
- images have alt text and optimization;
- loading/error/empty states are acceptable;
- SEO metadata is present where relevant;
- performance is within budget or has an approved exception;
- adding a new fruit does not require a new layout system.

---

# 40. Risk Register

| Risk                             | Impact      | Mitigation                                                      | Trigger                                    |
| -------------------------------- | ----------- | --------------------------------------------------------------- | ------------------------------------------ |
| AI imagery inconsistency         | High        | Single + multi-fruit Phase 0 spike                              | Image campaign diverges visually           |
| AI anatomical errors             | High        | Separate scientific assets + review                             | Incorrect interior anatomy                 |
| Content bottleneck               | High        | Small reviewed launch + 1–2 day/fruit estimate + import tooling | UI work outruns research                   |
| Solo-owner burnout/schedule slip | High        | 5h/day estimate, phase gates, no parallel mega-phase            | Phase slips >20%                           |
| SEO weakness                     | High        | Astro static HTML + metadata + sitemap from foundation          | Indexable content depends on client JS     |
| React/map dependency mismatch    | Medium/High | Pin exact version; test; static SVG fallback                    | Install/build/runtime mismatch             |
| Benefit claim ambiguity          | High        | Conservative content + second-reviewer gate                     | Copy becomes medical/promotional           |
| Taxonomy confusion               | Medium      | Editorial category separated from botanical taxonomy            | User-facing category implies false biology |
| Sparse category pages            | Medium      | Require 3 reviewed fruits for category landing                  | Category has <3 production fruits          |
| Date feature staleness           | Medium      | Client-side date resolution                                     | Fruit/season output ages without deploy    |
| Image payload bloat              | High        | Responsive formats + 500 KB hero target + lazy loading          | Mobile transfer exceeds budget             |
| Animation hurting UX             | Medium      | Signature limits + reduced motion                               | Performance/accessibility regressions      |
| Data inconsistency               | High        | Numeric schema + import/validation tooling                      | Ranking/comparison requires string parsing |
| Thin-content SEO                 | High        | Do not expose large unreviewed/sparse fruit catalog             | Many pages have little unique content      |
| Legal/commercial terms drift     | Medium      | Record provider terms snapshot at generation/release            | Asset terms cannot be verified             |
| USDA/source attribution          | Low/Medium  | Preserve source IDs + attribution policy                        | Published data lacks attribution           |
| Scope expansion                  | High        | Phase gates + deferred-feature list                             | Feature blocks milestone                   |

---

# 41. Legal, Licensing and Attribution Checklist

Before public V1:

### USDA FoodData Central

- record FoodData Central source attribution;
- preserve source/reference IDs;
- record access date/edition where practical;
- do not imply USDA endorsement of Fruitypedia.

FoodData Central states its data are public domain/CC0 1.0 and requests source attribution.

Reference:
<https://fdc.nal.usda.gov/>

### AI imagery

- record provider/model;
- record generation date;
- retain prompt ID/reference;
- verify commercial-use/disclosure terms applicable at publication;
- review images for accuracy and policy/brand requirements.

### Third-party libraries

Maintain a dependency/license inventory in the repository.

---

# 42. Testing Strategy

## Content/schema tests

Validate:

- unique fruit IDs/slugs;
- required fields;
- numeric nutrient amounts;
- valid units;
- source IDs;
- valid category IDs;
- valid image paths;
- `similarFruitIds` exist;
- hero stats reference valid nutrients;
- seasonal records contain region/context;
- no production fruit is unpublished/unreviewed;
- no public category landing exists with <3 reviewed fruits.

## Visual tests

Representative viewports tested across the fluid spectrum:

- 390px (mobile portrait);
- 768px (tablet portrait);
- 1024px (tablet landscape / small laptop);
- 1280px (standard laptop);
- 1440px (desktop reference);
- 1920px+ (wide desktop).

Also test:

- reduced motion;
- long fruit names;
- long descriptions;
- sparse data;
- missing image;
- keyboard focus;
- active search;
- category filters.

## Integration tests

- search opens/closes;
- search keyboard controls;
- fruit links resolve;
- category filtering works;
- Fruit of the Day resolves to a real production fruit;
- fruit theme variables load;
- compare URL state restores;
- Explore map only loads on intended route;
- static fruit origin SVG exists in generated output.

## CI checks

Before merge:

- formatting/lint;
- TypeScript;
- unit/content tests;
- build;
- accessibility scan;
- Lighthouse/performance scan;
- bundle/image budget checks.

---

# 43. Deployment

## Pipeline

```text
Git push
→ install
→ typecheck
→ lint
→ unit/content tests
→ build
→ accessibility/performance checks
→ preview deploy
→ production gate
→ production deploy
```

## Hosting

Use simple static hosting capable of serving Astro's generated output. CDN scaling is not a project requirement for V1.

No backend is required for public V1 unless a later feature introduces a genuine server requirement.

## Secrets

No private API keys are shipped to the browser.

Image generation and data-import credentials remain local/CI secrets and are never bundled into public assets.

---

# 44. Initial Production Content Set

The initial production target is **8 reviewed fruits**:

- Blueberry
- Strawberry
- Orange
- Mango
- Banana
- Peach
- Watermelon
- Apple

This is a **launch set**, not the permanent catalog size.

The catalog architecture is designed for hundreds of fruits; content expansion happens incrementally.

### Development stress fixtures

Additional fixture records may include Kiwi, Pomegranate, and other fruits where needed to test:

- complex interiors;
- unusual shapes;
- long names;
- taxonomy edge cases;
- dense category filtering.

Fixtures must be visibly or programmatically prevented from public publication.

---

# 45. Budget and Time Control

## Estimated public V1 effort

Completed so far:

- **Phase 0 (Foundation + Feasibility Spike):** COMPLETED
- **Phase 1 (Global Fruitypedia Landing Page):** COMPLETED

Remaining to Public V1 (Phase 1.5 through Phase 3):

- **Phase 1.5 (Responsive Design & Motion Foundation):** 3–5 working days / 15–25 focused hours
- **Phase 2 (Fruit Engine + Complete Blueberry):** 8–12 working days / 40–60 focused hours
- **Phase 2.5 (Multi-Fruit Stress Test — 7 fruits):** 10–18 working days / 50–90 focused hours
- **Phase 3 (Directory / Categories / Search / Public V1):** 8–12 working days / 40–60 focused hours

Remaining effort to Public V1 launch:
**29–47 working days / 145–235 focused hours** at the planning rate of 5 focused hours/day.

The estimate includes content research, source verification, image art direction, and responsive regression testing rather than assuming engineering is the only task.

## Full product roadmap estimate

Through Phase 5, approximately:

**54–90 remaining working days / 270–450 focused hours**, depending on content depth, image iteration, and second-reviewer availability for health claims.

Phase 6 is intentionally unbounded.

## Re-estimation rule

At each phase gate:

1. record actual hours;
2. record image spend;
3. record content throughput;
4. revise the remaining estimate;
5. freeze new scope until the current phase is closed.

---

# 46. Reference Material

### Astro

- Routing: <https://docs.astro.build/en/guides/routing/>
- Rendering: <https://docs.astro.build/en/guides/on-demand-rendering/>
- React integration: <https://docs.astro.build/en/guides/integrations-guide/react/>

### React Simple Maps

- npm: <https://www.npmjs.com/package/react-simple-maps>
- GitHub: <https://github.com/zcreativelabs/react-simple-maps>
- React 19 issue: <https://github.com/zcreativelabs/react-simple-maps/issues/388>

### USDA FoodData Central

- Main: <https://fdc.nal.usda.gov/>
- Data documentation: <https://fdc.nal.usda.gov/data-documentation/>
- Downloads: <https://fdc.nal.usda.gov/download-datasets/>
- Foundation Foods: <https://fdc.nal.usda.gov/Foundation_Foods_Documentation/>
- API guide: <https://fdc.nal.usda.gov/api-guide/>

### FDA Daily Values

<https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels>

### WCAG 2.2

<https://www.w3.org/WAI/standards-guidelines/wcag/>

### Lighthouse

<https://developer.chrome.com/docs/lighthouse/>

### Gemini image generation

- Guide: <https://ai.google.dev/gemini-api/docs/image-generation>
- Pricing: <https://ai.google.dev/gemini-api/docs/pricing>

---

# 47. Current Decision State

The following are considered **locked for implementation**:

- Product name: **Fruitypedia**
- Production rendering: **Astro + React + TypeScript**
- Product mode: **portfolio-quality public product**
- Milestone progress:
  - **Phase 0 — COMPLETED**
  - **Phase 1 — COMPLETED**
  - **Phase 1.5 — NEXT / IN PROGRESS**
  - **Phase 2 — UPCOMING**
- Public V1 launch: **end of Phase 3**
- Build order: **Global Landing (Done) → Responsive Design System & Motion (Phase 1.5) → Fruit Engine (Phase 2) → Multi-Fruit Scaling (Phase 2.5) → Catalog & Search Launch (Phase 3) → Analytical Suite (Phase 4)**
- Layout principle: **Viewport-First / Fluid Composition** across 390px, 768px, 1024px, 1280px, 1440px, and 1920px+ (Fruitypedia must NOT be designed around a 1440px canvas; 1440px is only one reference state)
- Visual balance: **60–30–10 rule** (60% near-black base, 30% fruit atmosphere/imagery, 10% high-attention accent)
- Motion architecture: **Lenis (smooth scroll) → GSAP (orchestrated timelines) → ScrollTrigger (scroll-linked animation)** wrapped globally via `SmoothScrollProvider` with strict `prefers-reduced-motion` compliance
- Fruit-page Golden Master: **Blueberry reference** without hardcoded coordinates or layout forks
- Global pages: neutral dark editorial theme
- Fruit pages: fruit-specific atmospheric accents on a stable dark base
- Homepage signature: horizontal ticker
- Fruit-page signature: type reveal
- Search: global command-style search
- Catalog: scalable to 100+ fruits; public count always truthful
- Category landing threshold: **3 reviewed production fruits**
- Fruit initial production set: **8 fruits** (Blueberry, Strawberry, Orange, Mango, Banana, Peach, Watermelon, Apple)
- Benefits health-adjacent review: second-human-review requirement
- Fruit-page origin map: build-time/static SVG
- Interactive map: `/explore` only
- Date features: client-side resolution, not build-time stale values
- Nutrition baseline: FoodData Central Foundation/SR Legacy where applicable
- Accessibility target: WCAG 2.2 AA
- Performance budgets: numeric and enforced
- Typography system: **Urbanist + Ballet + Cormorant Garamond + Inter** (fluid clamp-calibrated)
- Fruit title: **Urbanist, not serif**
- Public V1: no CMS, quiz, favorites, historical trade routes, or multilingual requirements

---

# 48. Immediate Next Actions

With **Phase 0** and **Phase 1** successfully completed, the project transitions into **Phase 1.5**:

1. **Layout Foundation Audit:** Remove 1440px primary canvas assumptions, audit and eliminate fixed pixel widths and desktop-only coordinate positioning.
2. **Fluid Primitives:** Implement fluid page-shell, fluid content container primitives, responsive padding (`clamp(1.25rem, 3.5vw, 3.5rem)`), and fluid grid utilities.
3. **Typography Calibration:** Tune fluid `clamp()` sizing for `Urbanist` display fruit names, `Ballet` poetic nickname, `Cormorant Garamond` scientific identity, and `Inter` functional UI.
4. **Color Balance:** Formalize the 60–30–10 visual balance system across Blueberry design tokens.
5. **Motion Foundation:** Install and configure Lenis, implement `SmoothScrollProvider`, integrate with GSAP & ScrollTrigger, and wire `prefers-reduced-motion: reduce` controls.
6. **Blueberry Golden Master Hero:** Rebuild the Blueberry hero using fluid composition, calibrating image-to-content proportions and verifying intentional mobile composition ordering.
7. **Cross-Viewport Regression Suite:** Validate responsive behavior across 390px, 768px, 1024px, 1280px, 1440px, and 1920px+.
8. **Phase 1.5 Exit Gate:** Pass all exit gate criteria and commence **Phase 2 — Fruit Engine + Gold-Standard Blueberry**.
