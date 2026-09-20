import React, { useState, useMemo } from "react";
import type { Fruit, BenefitTag } from "@/types";

interface BenefitsExplorerProps {
  allFruits: Fruit[];
}

export interface SystemicCohort {
  id: string;
  name: string;
  shortLabel: string;
  icon: string;
  description: string;
  match: (tag: BenefitTag, fruit: Fruit) => boolean;
}

export const SYSTEMIC_COHORTS: SystemicCohort[] = [
  {
    id: "all",
    name: "All Biological Systems",
    shortLabel: "All Systems",
    icon: "🔬",
    description: "Exhaustive directory of all 24 peer-reviewed wellness phenomena across the 8 production fruits.",
    match: () => true,
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular & Vascular Health",
    shortLabel: "Cardiovascular",
    icon: "🫀",
    description: "Nutrients and bioactive polyphenols that support vascular elasticity, endothelial nitric oxide synthesis, and blood pressure regulation.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("heart") ||
        text.includes("vascular") ||
        text.includes("blood pressure") ||
        text.includes("nitric oxide") ||
        text.includes("citrulline") ||
        text.includes("hesperidin") ||
        text.includes("potassium") ||
        text.includes("endothelial") ||
        text.includes("quercetin")
      );
    },
  },
  {
    id: "immunity",
    name: "Immune & Cellular Defense",
    shortLabel: "Immunity & Defense",
    icon: "🛡️",
    description: "Exogenous antioxidants, carotenoids, and ascorbic acid that neutralize reactive oxygen species and support immune cell proliferation.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("antioxidant") ||
        text.includes("vitamin c") ||
        text.includes("ascorbic") ||
        text.includes("immune") ||
        text.includes("defense") ||
        text.includes("carotenoid") ||
        text.includes("lycopene") ||
        text.includes("anthocyanin") ||
        text.includes("free-radical")
      );
    },
  },
  {
    id: "digestive",
    name: "Digestive Health & Gut Microbiome",
    shortLabel: "Gut & Digestion",
    icon: "🌿",
    description: "Soluble and insoluble dietary fibers, protopectins, and prebiotic matrices that fuel beneficial gut microbiome flora.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("fiber") ||
        text.includes("pectin") ||
        text.includes("digestive") ||
        text.includes("gut") ||
        text.includes("microbiom") ||
        text.includes("microbiota") ||
        text.includes("amylase") ||
        text.includes("resistant starch")
      );
    },
  },
  {
    id: "metabolic",
    name: "Metabolic & Glycemic Balance",
    shortLabel: "Metabolism & Energy",
    icon: "⚡",
    description: "Naturally occurring nutrient complexes that promote steady postprandial glucose absorption and optimal enzymatic coenzyme function.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("glycemic") ||
        text.includes("metabolic") ||
        text.includes("glucose") ||
        text.includes("pyridox") ||
        text.includes("b6") ||
        text.includes("manganese") ||
        text.includes("energy") ||
        text.includes("satiety")
      );
    },
  },
  {
    id: "hydration",
    name: "Cellular Hydration & Recovery",
    shortLabel: "Hydration & Recovery",
    icon: "💧",
    description: "Intrinsic biological water matrices bound with bioavailable potassium and magnesium electrolytes for optimal fluid balance.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("hydration") ||
        text.includes("water") ||
        text.includes("electrolyte") ||
        text.includes("fluid") ||
        text.includes("citrulline")
      );
    },
  },
  {
    id: "bone-tissue",
    name: "Bone Density & Tissue Integrity",
    shortLabel: "Bone & Tissue",
    icon: "🦴",
    description: "Essential cofactors like vitamin K phylloquinone and manganese that catalyze osteocalcin carboxylation and collagen synthesis.",
    match: (tag) => {
      const text = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
      return (
        text.includes("vitamin k") ||
        text.includes("bone") ||
        text.includes("collagen") ||
        text.includes("manganese") ||
        text.includes("connective")
      );
    },
  },
];

export function getPrimaryBiomarker(fruitId: string, index: number): string {
  switch (fruitId) {
    case "peach":
      return index === 0
        ? "Chlorogenic Acid & Epicatechin (14–28 mg / 100g)"
        : index === 1
        ? "Beta-Carotene & Cryptoxanthin (16 µg RAE · 2% DV)"
        : "Soluble Pectin & Cell Water (88.9% hydration)";
    case "banana":
      return index === 0
        ? "Pyridoxal Phosphate / B6 (0.367 mg / 100g · 22% DV)"
        : index === 1
        ? "Ionic Potassium K⁺ (358 mg / 100g · 8% DV)"
        : "Soluble Pectin & Resistant Starch (2.6g / 100g)";
    case "mango":
      return index === 0
        ? "Beta-Carotene & Lutein (54 µg RAE / 100g · 6% DV)"
        : index === 1
        ? "Ascorbic Acid (36.4 mg / 100g · 40% DV)"
        : "Mangiferin & Digestive Amylases";
    case "orange":
      return index === 0
        ? "Ascorbic Acid (53.2 mg / 100g · 59% DV)"
        : index === 1
        ? "Hesperidin (30–65 mg / 100g albedo)"
        : "Soluble Pectin & Protopectin (2.4g / 100g)";
    case "strawberry":
      return index === 0
        ? "Ascorbic Acid (58.8 mg / 100g · 65% DV)"
        : index === 1
        ? "Manganese (0.386 mg / 100g · 17% DV)"
        : "Pelargonidin-3-glucoside & Ellagic Acid";
    case "apple":
      return index === 0
        ? "Soluble Apple Pectin (2.4g / 100g · 9% DV)"
        : index === 1
        ? "Quercetin & Flavonols (Peel Concentration)"
        : "Low-Glycemic Pectin-Fructose Matrix";
    case "watermelon":
      return index === 0
        ? "Cell Water (91.4%) & Potassium Electrolytes"
        : index === 1
        ? "Lycopene (4,532 µg / 100g)"
        : "L-Citrulline Bioavailable Amino Acid";
    case "blueberry":
    default:
      return index === 0
        ? "Anthocyanins (163 mg / 100g fresh weight)"
        : index === 1
        ? "Phylloquinone / Vitamin K (19.3 µg / 100g · 16% DV)"
        : "Soluble Pectin & Insoluble Cellulose (2.4g / 100g)";
  }
}

export interface BenefitEntry {
  fruit: Fruit;
  tag: BenefitTag;
  index: number;
  biomarker: string;
}

export const BenefitsExplorer: React.FC<BenefitsExplorerProps> = ({ allFruits }) => {
  const [selectedCohortId, setSelectedCohortId] = useState<string>("all");
  const [evidenceFilter, setEvidenceFilter] = useState<"all" | "established" | "emerging" | "limited">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Flatten all benefit tags into standardized entries
  const allEntries: BenefitEntry[] = useMemo(() => {
    const entries: BenefitEntry[] = [];
    allFruits.forEach((fruit) => {
      fruit.benefitTags.forEach((tag, idx) => {
        entries.push({
          fruit,
          tag,
          index: idx,
          biomarker: getPrimaryBiomarker(fruit.id, idx),
        });
      });
    });
    return entries;
  }, [allFruits]);

  const activeCohort = useMemo(
    () => SYSTEMIC_COHORTS.find((c) => c.id === selectedCohortId) || SYSTEMIC_COHORTS[0],
    [selectedCohortId]
  );

  // Filter entries based on cohort, evidence level, and search query
  const filteredEntries = useMemo(() => {
    return allEntries.filter((entry) => {
      // Cohort match
      if (selectedCohortId !== "all" && !activeCohort.match(entry.tag, entry.fruit)) {
        return false;
      }

      // Evidence level match
      if (evidenceFilter !== "all" && entry.tag.evidenceLevel !== evidenceFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim();
        const haystack = `${entry.fruit.name} ${entry.fruit.taxonomy.species ?? ""} ${entry.tag.label} ${entry.tag.phenomenon} ${entry.tag.description} ${entry.biomarker}`.toLowerCase();
        if (!haystack.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [allEntries, selectedCohortId, activeCohort, evidenceFilter, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Control Panel: Cohort Selection, Search & Evidence Filters */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Functional Profile Directory
            </span>
            <h2 id="benefits-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Peer-Reviewed Wellness Phenomena
            </h2>
            <p className="font-editorial text-zinc-400 text-sm mt-1 max-w-2xl">
              Classified by biological system and substantiated by replicated nutritional research. Never exaggerated; strictly grounded in biochemical evidence.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-right">
              <span className="block font-display text-lg font-bold text-white leading-none">
                {filteredEntries.length}{" "}
                <span className="text-zinc-500 font-ui text-xs font-normal">/ {allEntries.length}</span>
              </span>
              <span className="font-ui text-[11px] text-zinc-400">Documented Phenomena</span>
            </div>
          </div>
        </div>

        {/* Systemic Cohort Tabs */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Biological Target Cohort:
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-ui text-xs">
            {SYSTEMIC_COHORTS.map((cohort) => {
              const isSelected = cohort.id === selectedCohortId;
              return (
                <button
                  key={cohort.id}
                  type="button"
                  onClick={() => setSelectedCohortId(cohort.id)}
                  className={`shrink-0 px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-500"
                      : "bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <span>{cohort.icon}</span>
                  <span>{cohort.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Cohort Description Banner */}
        <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/40 text-xs font-ui text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <strong className="text-zinc-200">{activeCohort.name}:</strong>{" "}
            {activeCohort.description}
          </div>
        </div>

        {/* Search Bar & Evidence Level Filters Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by fruit, biomarker, or biological mechanism..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-ui text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Evidence Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950 border border-zinc-800 self-start sm:self-auto shrink-0 font-ui text-xs">
            <span className="text-zinc-500 text-[11px] px-2 uppercase font-medium">Confidence:</span>
            {(
              [
                { id: "all", label: "All Levels" },
                { id: "established", label: "Established Consensus" },
                { id: "emerging", label: "Emerging Clinical" },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setEvidenceFilter(filter.id)}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  evidenceFilter === filter.id
                    ? "bg-zinc-800 text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid / Editorial Staggered Layout */}
      {filteredEntries.length === 0 ? (
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-12 text-center space-y-4">
          <span className="text-3xl">🔍</span>
          <h3 className="font-display text-lg font-semibold text-white">No Matching Wellness Phenomena</h3>
          <p className="font-editorial text-zinc-400 text-sm max-w-md mx-auto">
            No documented physiological records matched your search query. Try broadening your keywords or selecting another biological system.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCohortId("all");
              setEvidenceFilter("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-ui text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map(({ fruit, tag, index, biomarker }) => {
            const isEstablished = tag.evidenceLevel === "established";

            return (
              <article
                key={`${fruit.id}-${tag.label}-${index}`}
                className="group relative rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/60 flex flex-col lg:flex-row lg:items-baseline gap-6 lg:gap-8 justify-between"
              >
                {/* Left: Fruit Identity & Thumbnail */}
                <div className="lg:w-64 shrink-0 flex items-center gap-4">
                  {/* Thumbnail Avatar */}
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                    <img
                      src={fruit.images.hero.src}
                      alt={fruit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: "72% center" }}
                    />
                  </div>

                  {/* Fruit Names & Category */}
                  <div className="min-w-0">
                    <a
                      href={`/fruit/${fruit.slug}`}
                      className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors block truncate"
                    >
                      {fruit.name}
                    </a>
                    <span className="font-editorial italic text-xs text-zinc-400 truncate block">
                      {fruit.taxonomy.species}
                    </span>
                    <span
                      className="inline-block font-ui text-[10px] uppercase tracking-wider font-semibold mt-1 px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400"
                    >
                      {fruit.taxonomy.categoryId}
                    </span>
                  </div>
                </div>

                {/* Center: Evidence Tag, Title & Narrative */}
                <div className="flex-1 min-w-0 space-y-3">
                  {/* Confidence Badge & Phenomenon */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 font-ui text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                        isEstablished
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isEstablished ? "bg-emerald-400" : "bg-indigo-400"}`} />
                      <span>{tag.evidenceLevel} scientific consensus</span>
                    </span>

                    <span className="text-zinc-600 text-xs">·</span>

                    <span className="font-ui text-xs text-zinc-400 font-medium capitalize">
                      {tag.phenomenon}
                    </span>
                  </div>

                  {/* Benefit Label */}
                  <h3 className="font-editorial text-2xl text-white font-normal leading-snug">
                    {tag.label}
                  </h3>

                  {/* Narrative Description */}
                  <p className="font-editorial text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                    {tag.description}
                  </p>

                  {/* Primary Biomarker Compound Pill */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-ui">
                    <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">
                      Primary Biomarker:
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-lg border border-zinc-800/80 bg-zinc-950 font-medium"
                      style={{ color: fruit.theme.secondary }}
                    >
                      {biomarker}
                    </span>
                  </div>
                </div>

                {/* Right: Direct Monograph Action */}
                <div className="lg:w-36 shrink-0 flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-800/60">
                  <span className="font-ui text-[11px] text-zinc-500 text-right hidden lg:block">
                    Peer-Reviewed Monograph
                  </span>
                  <a
                    href={`/fruit/${fruit.slug}#benefits`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs font-ui font-medium cursor-pointer"
                  >
                    <span>Read Record</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Institutional Methodology & Regulatory Disclaimer Callout */}
      <section
        aria-labelledby="compliance-heading"
        className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-md space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <h4 id="compliance-heading" className="font-ui text-xs font-bold uppercase tracking-wider text-zinc-300">
            Institutional Research Standards & Regulatory Transparency
          </h4>
        </div>
        <p className="font-editorial text-zinc-400 text-sm leading-relaxed">
          The wellness insights compiled in Fruitypedia represent educational syntheses derived from peer-reviewed botanical, nutritional, and pharmacological literature (including USDA FoodData Central and biochemical meta-analyses). Fruitypedia does not publish unverified health claims or advocate fruits as therapeutic cures or medical treatments.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-ui text-zinc-500">
          <a
            href="/about#academic-registry"
            className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center gap-1"
          >
            <span>Institutional Sources & Botanical Citations Registry</span>
            <span>→</span>
          </a>
          <span>·</span>
          <span>FDA 21 CFR 101.14 Educational Compliance</span>
        </div>
      </section>
    </div>
  );
};

export default BenefitsExplorer;
