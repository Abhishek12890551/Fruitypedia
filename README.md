# 🍓 Fruitypedia — The Visual Fruit Encyclopedia

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-56_Tests_Passing-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![USDA FoodData Central](https://img.shields.io/badge/USDA-FoodData_Central_Verified-107C41?style=flat-square)](https://fdc.nal.usda.gov)

**Fruitypedia** is an editorial-grade, scientifically rigorous digital encyclopedia of fruit. Built as a high-performance web application, it synthesizes laboratory nutritional biochemistry, taxonomic botany, global agricultural phenology, and ancient trade history into an interactive reference platform.

Every monograph is normalized directly from peer-reviewed scientific literature, the **USDA FoodData Central SR Legacy** dataset, and botanical records from **Royal Botanic Gardens, Kew** — with zero placeholder records or unverified medical claims.

---

## 🌟 Key Exploration Modules

### 🍇 1. Individual Botanical Monographs (`/fruit/[slug]`)

- **Fine-Art Editorial Presentation**: Staggered layout with authentic macro photography, botanical taxonomy, and family lineage.
- **USDA Laboratory Nutrition Deck**: 25+ verified nutrients per 100g raw edible portion, with interactive serving size scaler (100g, 1 cup, whole fruit).
- **Sensory Taste Profile**: Calibrated 10-point sweetness, acidity, and bitterness meters with sommelier-grade tasting notes.
- **Evidence-Tiered Wellness Insights**: Scientific consensus tiering (`Established`, `Emerging`) with exact compound biomarkers (e.g. _Anthocyanins 163 mg / 100g_, _L-Citrulline_).
- **Cultivar Diversity Guide**: Physical characteristics, culinary utility, and ripening markers for heritage and commercial varieties.

### 🔬 2. Side-by-Side Analytical Laboratory (`/compare`)

- **Dual-Slot Fruit Selector**: Responsive visual selector with dynamic ambient theme glow and quick-cohort presets (_Berry Duel_, _Citrus vs Tropical_, _Orchard Classics_).
- **Executive Differentials**: Automatic calculation of key nutritional advantages (calories, Vitamin C potency, dietary fiber).
- **Nutritional Delta Visualizer**: Comparative proportional dual bars for 12 macro and micronutrients with visual leader badges.
- **Sensory & Harvest Contrast**: Direct sensory meters and 12-month harvest overlap matrix.
- **URL Synchronization**: Shareable deep-links via `?a={slug}&b={slug}` with 1-click clipboard copying.

### 📊 3. Macro & Micronutrient Observatory (`/nutrition`)

- **Dynamic Leaderboards**: Interactive ranking across 12 nutrients with relative percentage bars.
- **FDA Daily Value Benchmarking**: Automated categorization compliant with **FDA 21 CFR 101.54** (`High Source ≥20% DV`, `Good Source 10–19% DV`, `Low ≤5% DV`).
- **Goal-Based Targeter**: Instant dietary presets (_Immunity & Vitamin C_, _High Fiber_, _Low Calorie_, _Maximum Hydration_, _Low Sugar_).
- **Cross-Catalog Matrix Table**: Comprehensive, sortable laboratory table comparing all fruits simultaneously.

### 🩺 4. Health Benefits Directory (`/benefits`)

- **7 Biological System Cohorts**: Cardiovascular, Immune Defense, Gut Microbiome & Digestion, Metabolic Balance, Cellular Hydration, and Bone & Connective Tissue.
- **Strict Anti-Hype Standard**: Full compliance with **FDA 21 CFR 101.14** educational standards — strictly grounded in replicated biochemical literature with zero speculative "superfood" or "miracle" claims.
- **Live Biomarker Search**: Instant real-time search across fruits, biological mechanisms, and phytochemicals.

### 🗓️ 5. Harvest Seasons & Phenology Calendar (`/seasons`)

- **Real-Time Month Detection**: Detects user's current month with a live pulsating status indicator.
- **12-Month Selector Strip**: Visual month chips displaying active and peak fruit counts.
- **Master Phenology Grid**: Cross-catalog matrix mapping Peak Harvest, Active Harvest, and Dormancy across all fruits.
- **Hemispheric Inversion**: Toggle between Northern and Southern (+6 months) cultivation cycles to explore counter-seasonal import windows.

### 🌍 6. Botanical World Atlas (`/explore`)

- **Interactive TopoJSON Cartography**: SVG world map visualizing native evolutionary cradles and modern cultivation hubs.
- **Continental Biomes**: Filter by speciation biomes (_Tian Shan Silk Road_, _Yangtze Valley_, _Indo-Malayan Archipelago_, _Boreal Heath_, _Nile Basin_).
- **Historical Diaspora Dossiers**: Ancient trade corridors, domestication epochs, and ancestral wild progenitors (_Malus sieversii_, _Musa acuminata_, _Fragaria chiloensis_).

### ⚡ 7. Command Palette Quick Search (`⌘K`)

- **Instant Client-Side Search**: Powered by Fuse.js with fuzzy matching across common names, scientific species, botanical families, taste attributes, and nutrients.

---

## 🛠️ Technology Stack

| Layer                | Technologies                                                                          |
| :------------------- | :------------------------------------------------------------------------------------ |
| **Framework**        | [Astro 5](https://astro.build) (Islands Architecture, SSR/SSG hybrid)                 |
| **UI Components**    | [React 19](https://react.dev) (Hydrated Client Islands: `client:load`, `client:idle`) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com) + Custom Vanilla CSS Variables                |
| **Typography**       | Self-hosted Google Fonts (_Urbanist_, _Ballet_, _Cormorant Garamond_, _Inter_)        |
| **Cartography**      | [React Simple Maps](https://www.react-simple-maps.io) + TopoJSON World Atlas          |
| **Smooth Motion**    | [Lenis](https://lenis.darkroom.engineering) (With `prefers-reduced-motion` detection) |
| **Data Validation**  | [Zod](https://zod.dev) (Strict runtime schema enforcement for all monographs)         |
| **Testing**          | [Vitest](https://vitest.dev) (56 automated unit and data integrity tests)             |

---

## 📁 Repository Structure

```text
fruitypedia/
├── public/
│   ├── fonts/               # Self-hosted WOFF2 web fonts
│   ├── images/              # Optimized fruit photography & hero assets
│   └── maps/                # Static TopoJSON country boundaries (110m)
├── src/
│   ├── components/          # Astro & React interactive UI islands
│   │   ├── fruit/           # Monograph section components
│   │   ├── BenefitsExplorer.tsx
│   │   ├── FruitCompare.tsx
│   │   ├── NutritionExplorer.tsx
│   │   ├── OriginMap.tsx
│   │   ├── SearchDialog.tsx
│   │   ├── SeasonsCalendar.tsx
│   │   └── WorldAtlasExplorer.tsx
│   ├── data/                # Validated fruit monographs & raw USDA inputs
│   │   └── fruits/          # 8 production monographs (Apple, Banana, Blueberry, etc.)
│   ├── layouts/             # BaseLayout with dynamic theming & responsive navigation
│   ├── pages/               # Astro route pages (/directory, /compare, /nutrition, etc.)
│   ├── schemas/             # Zod validation schemas for all data models
│   ├── styles/              # Global CSS & typography tokens
│   └── tests/               # Vitest automated test suite (56 tests)
├── astro.config.mjs         # Astro build configuration
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.17.0` or higher
- npm `v9.0.0` or higher

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Abhishek12890551/Fruitypedia.git
   cd Fruitypedia
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🧪 Testing & Validation

Run the complete Vitest test suite (validates Zod schemas, USDA calculations, FDA Daily Values, and algorithms):

```bash
# Run unit tests
npm run test

# Run Astro TypeScript diagnostics
npx astro check
```

---

## 📚 Data Provenance & Academic Standards

- **Nutritional Metrics**: Formatted per 100g raw edible portion from the [USDA FoodData Central SR Legacy](https://fdc.nal.usda.gov) and Foundation databases.
- **Percent Daily Values (% DV)**: Computed according to current FDA nutrition labeling standards (**21 CFR 101.9** and **21 CFR 101.54**) based on a 2,000-calorie reference diet.
- **Botanical Taxonomy**: Aligned with the **APG IV** (Angiosperm Phylogeny Group) classification and the **Royal Botanic Gardens, Kew** taxonomic database.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
