import React, { useState, useEffect, useMemo } from "react";
import type { Fruit } from "@/types";

interface FruitCompareProps {
  allFruits: Fruit[];
  initialFruitASlug?: string;
  initialFruitBSlug?: string;
}

interface NutrientMetricConfig {
  id: string;
  label: string;
  unit: string;
  category: "macro" | "micro";
  getValue: (fruit: Fruit) => number;
  getDv?: (fruit: Fruit) => number | undefined;
  higherIsBetter?: boolean;
}

const METRICS: NutrientMetricConfig[] = [
  // Energy & Macros
  {
    id: "calories",
    label: "Calories / Energy",
    unit: "kcal",
    category: "macro",
    getValue: (f) => f.nutrition.calories.amount,
  },
  {
    id: "sugars",
    label: "Natural Sugars",
    unit: "g",
    category: "macro",
    getValue: (f) =>
      f.nutrition.nutrients.totalSugars?.amount ??
      f.nutrition.nutrients.sugars?.amount ??
      0,
  },
  {
    id: "fiber",
    label: "Dietary Fiber",
    unit: "g",
    category: "macro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.fiber?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.fiber?.dailyValuePercent,
  },
  {
    id: "carbs",
    label: "Carbohydrates",
    unit: "g",
    category: "macro",
    getValue: (f) => f.nutrition.nutrients.carbohydrates?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.carbohydrates?.dailyValuePercent,
  },
  {
    id: "protein",
    label: "Protein",
    unit: "g",
    category: "macro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.protein?.amount ?? 0,
  },
  {
    id: "fat",
    label: "Total Fat",
    unit: "g",
    category: "macro",
    getValue: (f) => f.nutrition.nutrients.totalFat?.amount ?? 0,
  },
  // Micronutrients
  {
    id: "vitaminC",
    label: "Vitamin C",
    unit: "mg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.vitaminC?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.vitaminC?.dailyValuePercent,
  },
  {
    id: "potassium",
    label: "Potassium",
    unit: "mg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.potassium?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.potassium?.dailyValuePercent,
  },
  {
    id: "calcium",
    label: "Calcium",
    unit: "mg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.calcium?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.calcium?.dailyValuePercent,
  },
  {
    id: "magnesium",
    label: "Magnesium",
    unit: "mg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.magnesium?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.magnesium?.dailyValuePercent,
  },
  {
    id: "iron",
    label: "Iron",
    unit: "mg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.iron?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.iron?.dailyValuePercent,
  },
  {
    id: "vitaminK",
    label: "Vitamin K",
    unit: "µg",
    category: "micro",
    higherIsBetter: true,
    getValue: (f) => f.nutrition.nutrients.vitaminK?.amount ?? 0,
    getDv: (f) => f.nutrition.nutrients.vitaminK?.dailyValuePercent,
  },
];

const PRESETS = [
  { label: "Berry Duel", a: "strawberry", b: "blueberry", icon: "🍓🫐" },
  { label: "Citrus vs Tropical", a: "orange", b: "mango", icon: "🍊🥭" },
  { label: "Orchard Classics", a: "apple", b: "peach", icon: "🍎🍑" },
  { label: "Hydration & Energy", a: "watermelon", b: "banana", icon: "🍉🍌" },
  { label: "Vitamin C Showdown", a: "strawberry", b: "orange", icon: "🍓🍊" },
];

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const FruitCompare: React.FC<FruitCompareProps> = ({
  allFruits,
  initialFruitASlug = "strawberry",
  initialFruitBSlug = "blueberry",
}) => {
  // Find initial fruits safely
  const defaultA =
    allFruits.find((f) => f.slug === initialFruitASlug) || allFruits[0] || null;
  const defaultB =
    allFruits.find((f) => f.slug === initialFruitBSlug && f.slug !== defaultA?.slug) ||
    allFruits.find((f) => f.slug !== defaultA?.slug) ||
    allFruits[1] ||
    null;

  const [fruitA, setFruitA] = useState<Fruit | null>(defaultA);
  const [fruitB, setFruitB] = useState<Fruit | null>(defaultB);
  const [copiedToast, setCopiedToast] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "macro" | "micro">("all");

  // Read URL params on initial browser mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const paramA = urlParams.get("a");
    const paramB = urlParams.get("b");

    if (paramA) {
      const matchA = allFruits.find((f) => f.slug === paramA || f.id === paramA);
      if (matchA) setFruitA(matchA);
    }
    if (paramB) {
      const matchB = allFruits.find((f) => f.slug === paramB || f.id === paramB);
      if (matchB) setFruitB(matchB);
    }
  }, [allFruits]);

  // Sync URL state whenever fruits change
  const updateUrl = (aSlug: string, bSlug: string) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("a", aSlug);
    url.searchParams.set("b", bSlug);
    window.history.replaceState({}, "", url.toString());
  };

  const handleSelectA = (slug: string) => {
    const selected = allFruits.find((f) => f.slug === slug);
    if (!selected) return;
    if (fruitB && selected.slug === fruitB.slug) {
      // If user selected same fruit as B, swap them
      handleSwap();
      return;
    }
    setFruitA(selected);
    if (fruitB) updateUrl(selected.slug, fruitB.slug);
  };

  const handleSelectB = (slug: string) => {
    const selected = allFruits.find((f) => f.slug === slug);
    if (!selected) return;
    if (fruitA && selected.slug === fruitA.slug) {
      // If user selected same fruit as A, swap them
      handleSwap();
      return;
    }
    setFruitB(selected);
    if (fruitA) updateUrl(fruitA.slug, selected.slug);
  };

  const handleSwap = () => {
    if (!fruitA || !fruitB) return;
    const temp = fruitA;
    setFruitA(fruitB);
    setFruitB(temp);
    updateUrl(fruitB.slug, temp.slug);
  };

  const handlePreset = (aSlug: string, bSlug: string) => {
    const nextA = allFruits.find((f) => f.slug === aSlug);
    const nextB = allFruits.find((f) => f.slug === bSlug);
    if (nextA && nextB) {
      setFruitA(nextA);
      setFruitB(nextB);
      updateUrl(nextA.slug, nextB.slug);
    }
  };

  const handleCopyShare = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Compute key editorial takeaways
  const takeaways = useMemo(() => {
    if (!fruitA || !fruitB) return [];
    const results = [];

    // Caloric takeaway
    const calA = fruitA.nutrition.calories.amount;
    const calB = fruitB.nutrition.calories.amount;
    if (calA !== calB) {
      const lowerFruit = calA < calB ? fruitA : fruitB;
      const higherFruit = calA < calB ? fruitB : fruitA;
      const lowerVal = Math.min(calA, calB);
      const higherVal = Math.max(calA, calB);
      const pctDiff = Math.round(((higherVal - lowerVal) / higherVal) * 100);
      results.push({
        title: "Caloric Density",
        highlight: `${lowerFruit.name} has ${pctDiff}% fewer calories`,
        detail: `${lowerFruit.name} (${lowerVal} kcal) vs ${higherFruit.name} (${higherVal} kcal per 100g)`,
        accent: lowerFruit.theme.primary,
        icon: "⚡",
      });
    }

    // Vitamin C takeaway
    const vitA = fruitA.nutrition.nutrients.vitaminC?.amount ?? 0;
    const vitB = fruitB.nutrition.nutrients.vitaminC?.amount ?? 0;
    if (vitA !== vitB) {
      const leader = vitA > vitB ? fruitA : fruitB;
      const follower = vitA > vitB ? fruitB : fruitA;
      const highVal = Math.max(vitA, vitB);
      const lowVal = Math.min(vitA, vitB);
      const ratio = lowVal > 0 ? (highVal / lowVal).toFixed(1) : `${highVal}mg advantage`;
      results.push({
        title: "Vitamin C Potency",
        highlight: `${leader.name} provides ${typeof ratio === "string" && ratio.includes("x") ? ratio : ratio + "×"} more Vitamin C`,
        detail: `${leader.name} (${highVal} mg, ${leader.nutrition.nutrients.vitaminC?.dailyValuePercent ?? 0}% DV) vs ${follower.name} (${lowVal} mg)`,
        accent: leader.theme.primary,
        icon: "🛡️",
      });
    }

    // Fiber takeaway
    const fibA = fruitA.nutrition.nutrients.fiber?.amount ?? 0;
    const fibB = fruitB.nutrition.nutrients.fiber?.amount ?? 0;
    if (fibA !== fibB) {
      const leader = fibA > fibB ? fruitA : fruitB;
      const follower = fibA > fibB ? fruitB : fruitA;
      const diff = Math.abs(fibA - fibB).toFixed(1);
      results.push({
        title: "Dietary Fiber",
        highlight: `${leader.name} leads in fiber density`,
        detail: `${leader.name} (${Math.max(fibA, fibB)}g) provides +${diff}g more digestive fiber per 100g serving vs ${follower.name} (${Math.min(fibA, fibB)}g)`,
        accent: leader.theme.primary,
        icon: "🌾",
      });
    }

    return results;
  }, [fruitA, fruitB]);

  if (!fruitA || !fruitB) {
    return (
      <div className="p-12 text-center text-zinc-400 font-ui">
        Loading comparison laboratory...
      </div>
    );
  }

  const filteredMetrics = METRICS.filter(
    (m) => activeCategory === "all" || m.category === activeCategory
  );

  return (
    <div className="space-y-12">
      {/* Preset Cohort Discovery Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-ui uppercase tracking-wider text-zinc-500 font-semibold shrink-0 mr-1">
          Cohorts:
        </span>
        {PRESETS.map((preset) => {
          const isActive =
            (fruitA.slug === preset.a && fruitB.slug === preset.b) ||
            (fruitA.slug === preset.b && fruitB.slug === preset.a);
          return (
            <button
              key={preset.label}
              onClick={() => handlePreset(preset.a, preset.b)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-ui transition-all ${
                isActive
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span>{preset.icon}</span>
              <span>{preset.label}</span>
            </button>
          );
        })}
      </div>

      {/* Primary Interactive Dual Selector Header */}
      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Ambient dual-glow background */}
        <div
          className="absolute -left-20 -top-20 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: fruitA.theme.primary }}
        />
        <div
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: fruitB.theme.primary }}
        />

        {/* Global Toolbar inside header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-ui text-xs font-medium text-zinc-300">
              Laboratory Reference Basis: <strong className="text-white">100g Raw Edible Portion (USDA)</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-ui font-medium border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Copy shareable link"
            >
              {copiedToast ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-semibold">Copied URL!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dual Fruit Cards & Central Swap Action */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
          {/* Fruit A Selector Card */}
          <div
            className="md:col-span-5 rounded-2xl p-5 sm:p-6 border transition-all duration-500 bg-zinc-950/70"
            style={{ borderColor: `${fruitA.theme.primary}55` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-ui text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${fruitA.theme.primary}22`,
                  color: fruitA.theme.primary,
                  border: `1px solid ${fruitA.theme.primary}44`,
                }}
              >
                Slot A · {fruitA.taxonomy.family}
              </span>
              <span className="font-script text-sm text-zinc-400">
                {fruitA.editorial.nickname}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
                <img
                  src={fruitA.images.hero.src}
                  alt={fruitA.images.hero.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "72% center" }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight truncate">
                  {fruitA.name}
                </h3>
                <p className="font-editorial italic text-xs sm:text-sm text-zinc-400 truncate mt-0.5">
                  {fruitA.taxonomy.genus} {fruitA.taxonomy.species}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-ui text-zinc-400">
                  <span><strong>{fruitA.nutrition.calories.amount}</strong> kcal</span>
                  <span>•</span>
                  <span><strong>{fruitA.nutrition.nutrients.vitaminC?.amount ?? 0}mg</strong> Vit C</span>
                </div>
              </div>
            </div>

            {/* Selector Dropdown for Slot A */}
            <div className="space-y-1.5">
              <label htmlFor="select-fruit-a" className="block text-[11px] font-ui text-zinc-500 uppercase tracking-wider font-semibold">
                Switch Slot A Fruit:
              </label>
              <select
                id="select-fruit-a"
                value={fruitA.slug}
                onChange={(e) => handleSelectA(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white font-ui focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors cursor-pointer"
              >
                {allFruits.map((f) => (
                  <option key={f.slug} value={f.slug} disabled={f.slug === fruitB.slug}>
                    {f.name} ({f.taxonomy.family}) {f.slug === fruitB.slug ? "— Active in Slot B" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Center Swap Action Button */}
          <div className="md:col-span-1 flex justify-center py-2 md:py-0">
            <button
              onClick={handleSwap}
              className="group p-3 rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-lg cursor-pointer"
              title="Swap Fruit A and Fruit B"
              aria-label="Swap Fruit A and Fruit B"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </div>

          {/* Fruit B Selector Card */}
          <div
            className="md:col-span-5 rounded-2xl p-5 sm:p-6 border transition-all duration-500 bg-zinc-950/70"
            style={{ borderColor: `${fruitB.theme.primary}55` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-ui text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${fruitB.theme.primary}22`,
                  color: fruitB.theme.primary,
                  border: `1px solid ${fruitB.theme.primary}44`,
                }}
              >
                Slot B · {fruitB.taxonomy.family}
              </span>
              <span className="font-script text-sm text-zinc-400">
                {fruitB.editorial.nickname}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
                <img
                  src={fruitB.images.hero.src}
                  alt={fruitB.images.hero.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "72% center" }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight truncate">
                  {fruitB.name}
                </h3>
                <p className="font-editorial italic text-xs sm:text-sm text-zinc-400 truncate mt-0.5">
                  {fruitB.taxonomy.genus} {fruitB.taxonomy.species}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-ui text-zinc-400">
                  <span><strong>{fruitB.nutrition.calories.amount}</strong> kcal</span>
                  <span>•</span>
                  <span><strong>{fruitB.nutrition.nutrients.vitaminC?.amount ?? 0}mg</strong> Vit C</span>
                </div>
              </div>
            </div>

            {/* Selector Dropdown for Slot B */}
            <div className="space-y-1.5">
              <label htmlFor="select-fruit-b" className="block text-[11px] font-ui text-zinc-500 uppercase tracking-wider font-semibold">
                Switch Slot B Fruit:
              </label>
              <select
                id="select-fruit-b"
                value={fruitB.slug}
                onChange={(e) => handleSelectB(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white font-ui focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors cursor-pointer"
              >
                {allFruits.map((f) => (
                  <option key={f.slug} value={f.slug} disabled={f.slug === fruitA.slug}>
                    {f.name} ({f.taxonomy.family}) {f.slug === fruitA.slug ? "— Active in Slot A" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Analytical Takeaways Section */}
      {takeaways.length > 0 && (
        <section aria-labelledby="takeaways-heading" className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-indigo-400">
              Key Differentials
            </span>
            <span className="h-px flex-1 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {takeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ backgroundColor: item.accent }}
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-ui text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {item.title}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-1.5">
                  {item.highlight}
                </h4>
                <p className="font-ui text-xs text-zinc-400 leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Side-by-Side Nutritional Delta Visualizer */}
      <section aria-labelledby="nutrition-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
          <div>
            <h3 id="nutrition-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Nutritional Delta Analysis
            </h3>
            <p className="font-editorial text-zinc-400 text-sm mt-1">
              Side-by-side comparative laboratory values normalized to 100g raw edible portion.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="inline-flex rounded-xl p-1 bg-zinc-900 border border-zinc-800 self-start sm:self-auto font-ui text-xs">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === "all" ? "bg-zinc-800 text-white font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              All Metrics ({METRICS.length})
            </button>
            <button
              onClick={() => setActiveCategory("macro")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === "macro" ? "bg-zinc-800 text-white font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              Energy & Macros (6)
            </button>
            <button
              onClick={() => setActiveCategory("micro")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === "micro" ? "bg-zinc-800 text-white font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              Micronutrients (6)
            </button>
          </div>
        </div>

        {/* Nutritional Metric Comparison Grid */}
        <div className="space-y-4">
          {filteredMetrics.map((metric) => {
            const valA = metric.getValue(fruitA);
            const valB = metric.getValue(fruitB);
            const dvA = metric.getDv ? metric.getDv(fruitA) : undefined;
            const dvB = metric.getDv ? metric.getDv(fruitB) : undefined;

            const maxVal = Math.max(valA, valB, 0.001);
            const pctA = Math.round((valA / maxVal) * 100);
            const pctB = Math.round((valB / maxVal) * 100);

            // Determine delta & leader
            const diff = Math.abs(valA - valB);
            const isTie = diff < 0.001;
            const aIsHigher = valA > valB;
            const leader = aIsHigher ? fruitA : fruitB;
            const percentDiff =
              Math.min(valA, valB) > 0
                ? Math.round((diff / Math.min(valA, valB)) * 100)
                : undefined;

            return (
              <div
                key={metric.id}
                className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-[var(--border-emphasis)] hover:bg-zinc-900/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-ui text-sm font-semibold text-white tracking-tight">
                      {metric.label}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      [{metric.unit} / 100g]
                    </span>
                  </div>

                  {/* Delta tag with debossed plate */}
                  <div className="self-start sm:self-auto">
                    {isTie ? (
                      <span className="debossed-plate font-mono text-[11px] px-2.5 py-0.5 rounded-[var(--radius-sm)] text-zinc-400">
                        Equilibrium ({valA} {metric.unit})
                      </span>
                    ) : (
                      <span
                        className="debossed-plate font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-[var(--radius-sm)] inline-flex items-center gap-1.5"
                        style={{
                          color: leader.theme.primary,
                          borderColor: `${leader.theme.primary}44`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: leader.theme.primary }} />
                        <span>{leader.name} +{diff >= 1 ? diff.toFixed(1) : diff.toFixed(2)} {metric.unit}</span>
                        {percentDiff !== undefined && (
                          <span className="opacity-80 tabular-nums">(+{percentDiff}%)</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dual Proportional Precision Gauge Bars */}
                <div className="space-y-3 font-ui text-xs">
                  {/* Fruit A Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1 font-mono">
                      <span className="text-zinc-300 font-medium font-ui">{fruitA.name}</span>
                      <span className="text-white font-bold tabular-nums">
                        {valA} {metric.unit}
                        {dvA !== undefined && <span className="text-zinc-500 font-normal ml-1">({dvA}% DV)</span>}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-950 overflow-hidden border border-[var(--border-subtle)]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${pctA}%`,
                          backgroundColor: fruitA.theme.primary,
                        }}
                      />
                    </div>
                  </div>

                  {/* Fruit B Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1 font-mono">
                      <span className="text-zinc-300 font-medium font-ui">{fruitB.name}</span>
                      <span className="text-white font-bold tabular-nums">
                        {valB} {metric.unit}
                        {dvB !== undefined && <span className="text-zinc-500 font-normal ml-1">({dvB}% DV)</span>}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-950 overflow-hidden border border-[var(--border-subtle)]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${pctB}%`,
                          backgroundColor: fruitB.theme.primary,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sensory & Taste Architecture Comparison */}
      <section aria-labelledby="taste-heading" className="space-y-6">
        <div className="pb-2 border-b border-zinc-800">
          <h3 id="taste-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Sensory Architecture & Taste Profile
          </h3>
          <p className="font-editorial text-zinc-400 text-sm mt-1">
            Standardized 10-point editorial sensory balance scores and aromatic flavor notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fruit A Taste Card */}
          <div
            className="rounded-2xl border p-6 bg-zinc-950/60 backdrop-blur-sm space-y-5"
            style={{ borderColor: `${fruitA.theme.primary}44` }}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-display text-xl font-bold text-white">{fruitA.name} Taste</h4>
              <span className="font-script text-sm text-zinc-400">{fruitA.editorial.nickname}</span>
            </div>

            <div className="space-y-3 font-ui text-xs">
              {/* Sweetness */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-zinc-400">Sweetness Perception</span>
                  <span className="font-bold text-amber-300">{fruitA.tasteProfile.sweetness.value} / 10</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-700"
                    style={{ width: `${fruitA.tasteProfile.sweetness.value * 10}%` }}
                  />
                </div>
              </div>

              {/* Acidity */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-zinc-400">Acidity / Tartness</span>
                  <span className="font-bold text-emerald-300">{fruitA.tasteProfile.acidity.value} / 10</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-700"
                    style={{ width: `${fruitA.tasteProfile.acidity.value * 10}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80">
              <span className="block text-[11px] font-ui uppercase font-semibold text-zinc-500 mb-1.5">
                Tasting Notes:
              </span>
              <p className="font-editorial text-sm text-zinc-300 italic leading-relaxed">
                "{fruitA.tasteProfile.notes}"
              </p>
            </div>
          </div>

          {/* Fruit B Taste Card */}
          <div
            className="rounded-2xl border p-6 bg-zinc-950/60 backdrop-blur-sm space-y-5"
            style={{ borderColor: `${fruitB.theme.primary}44` }}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-display text-xl font-bold text-white">{fruitB.name} Taste</h4>
              <span className="font-script text-sm text-zinc-400">{fruitB.editorial.nickname}</span>
            </div>

            <div className="space-y-3 font-ui text-xs">
              {/* Sweetness */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-zinc-400">Sweetness Perception</span>
                  <span className="font-bold text-amber-300">{fruitB.tasteProfile.sweetness.value} / 10</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-700"
                    style={{ width: `${fruitB.tasteProfile.sweetness.value * 10}%` }}
                  />
                </div>
              </div>

              {/* Acidity */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-zinc-400">Acidity / Tartness</span>
                  <span className="font-bold text-emerald-300">{fruitB.tasteProfile.acidity.value} / 10</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-700"
                    style={{ width: `${fruitB.tasteProfile.acidity.value * 10}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80">
              <span className="block text-[11px] font-ui uppercase font-semibold text-zinc-500 mb-1.5">
                Tasting Notes:
              </span>
              <p className="font-editorial text-sm text-zinc-300 italic leading-relaxed">
                "{fruitB.tasteProfile.notes}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Botanical Lineage & Origin Overlap */}
      <section aria-labelledby="botanical-heading" className="space-y-6">
        <div className="pb-2 border-b border-zinc-800">
          <h3 id="botanical-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Botanical Taxonomy & Origin
          </h3>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
          <table className="w-full text-left font-ui text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/60 text-zinc-400 font-semibold uppercase text-[11px] tracking-wider">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5" style={{ color: fruitA.theme.primary }}>
                  {fruitA.name}
                </th>
                <th className="p-4 sm:p-5" style={{ color: fruitB.theme.primary }}>
                  {fruitB.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr>
                <td className="p-4 sm:p-5 font-medium text-zinc-400">Botanical Family</td>
                <td className="p-4 sm:p-5 text-white font-semibold">{fruitA.taxonomy.family}</td>
                <td className="p-4 sm:p-5 text-white font-semibold">{fruitB.taxonomy.family}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium text-zinc-400">Binomial Species</td>
                <td className="p-4 sm:p-5 text-zinc-200 font-editorial italic">
                  {fruitA.taxonomy.genus} {fruitA.taxonomy.species}
                </td>
                <td className="p-4 sm:p-5 text-zinc-200 font-editorial italic">
                  {fruitB.taxonomy.genus} {fruitB.taxonomy.species}
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium text-zinc-400">Native Origin Region</td>
                <td className="p-4 sm:p-5 text-zinc-300">{fruitA.origin.region}</td>
                <td className="p-4 sm:p-5 text-zinc-300">{fruitB.origin.region}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium text-zinc-400">Major Modern Cultivars</td>
                <td className="p-4 sm:p-5 text-zinc-400">
                  {fruitA.varieties.slice(0, 3).map((v) => v.name).join(", ")}
                </td>
                <td className="p-4 sm:p-5 text-zinc-400">
                  {fruitB.varieties.slice(0, 3).map((v) => v.name).join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seasonality & Harvest Calendar Overlap */}
      <section aria-labelledby="seasons-heading" className="space-y-6">
        <div className="pb-2 border-b border-zinc-800">
          <h3 id="seasons-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Seasonal Harvest Calendar
          </h3>
          <p className="font-editorial text-zinc-400 text-sm mt-1">
            Month-by-month Northern Hemisphere harvest window and peak freshness overlap.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-6">
          {/* 12-month timeline for Fruit A */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-ui text-xs">
              <span className="font-semibold text-white">{fruitA.name} Availability:</span>
              <span className="text-zinc-400">{fruitA.season[0]?.label || "Seasonal"}</span>
            </div>
            <div className="grid grid-cols-12 gap-1 sm:gap-2">
              {MONTH_NAMES.map((m, idx) => {
                const monthNum = idx + 1;
                const isAvail = fruitA.season[0]?.months.includes(monthNum);
                const isPeak = fruitA.season[0]?.peakMonths?.includes(monthNum);
                return (
                  <div
                    key={m}
                    className={`py-2 text-center rounded-lg font-ui text-[10px] sm:text-xs font-semibold transition-colors ${
                      isPeak
                        ? "text-black shadow-md font-bold"
                        : isAvail
                        ? "text-white border border-white/20"
                        : "bg-zinc-950/60 text-zinc-600"
                    }`}
                    style={
                      isPeak
                        ? { backgroundColor: fruitA.theme.primary }
                        : isAvail
                        ? { backgroundColor: `${fruitA.theme.primary}44` }
                        : {}
                    }
                  >
                    {m}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 12-month timeline for Fruit B */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-ui text-xs">
              <span className="font-semibold text-white">{fruitB.name} Availability:</span>
              <span className="text-zinc-400">{fruitB.season[0]?.label || "Seasonal"}</span>
            </div>
            <div className="grid grid-cols-12 gap-1 sm:gap-2">
              {MONTH_NAMES.map((m, idx) => {
                const monthNum = idx + 1;
                const isAvail = fruitB.season[0]?.months.includes(monthNum);
                const isPeak = fruitB.season[0]?.peakMonths?.includes(monthNum);
                return (
                  <div
                    key={m}
                    className={`py-2 text-center rounded-lg font-ui text-[10px] sm:text-xs font-semibold transition-colors ${
                      isPeak
                        ? "text-black shadow-md font-bold"
                        : isAvail
                        ? "text-white border border-white/20"
                        : "bg-zinc-950/60 text-zinc-600"
                    }`}
                    style={
                      isPeak
                        ? { backgroundColor: fruitB.theme.primary }
                        : isAvail
                        ? { backgroundColor: `${fruitB.theme.primary}44` }
                        : {}
                    }
                  >
                    {m}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Monograph Exploration Portals */}
      <section aria-labelledby="portals-heading" className="space-y-6 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`/fruit/${fruitA.slug}`}
            className="group block p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 transition-all duration-300"
            style={{ borderLeftColor: fruitA.theme.primary, borderLeftWidth: "4px" }}
          >
            <span className="text-[11px] font-ui font-semibold uppercase tracking-wider text-zinc-400">
              Full Monograph
            </span>
            <h4 className="font-display text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors mt-1">
              Explore {fruitA.name} Archive →
            </h4>
            <p className="font-editorial text-zinc-400 text-sm mt-1 line-clamp-2">
              {fruitA.editorial.heroDescription}
            </p>
          </a>

          <a
            href={`/fruit/${fruitB.slug}`}
            className="group block p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 transition-all duration-300"
            style={{ borderLeftColor: fruitB.theme.primary, borderLeftWidth: "4px" }}
          >
            <span className="text-[11px] font-ui font-semibold uppercase tracking-wider text-zinc-400">
              Full Monograph
            </span>
            <h4 className="font-display text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors mt-1">
              Explore {fruitB.name} Archive →
            </h4>
            <p className="font-editorial text-zinc-400 text-sm mt-1 line-clamp-2">
              {fruitB.editorial.heroDescription}
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};
export default FruitCompare;
