import React, { useState, useMemo } from "react";
import type { Fruit } from "@/types";

interface NutritionExplorerProps {
  allFruits: Fruit[];
}

export interface NutrientDefinition {
  id: string;
  name: string;
  shortLabel: string;
  unit: string;
  category: "macro" | "vitamin" | "mineral" | "hydration";
  description: string;
  fdaDailyValue?: number; // Reference daily intake according to FDA (for 2,000 kcal diet)
  getValue: (fruit: Fruit) => number;
  getDvPercent?: (fruit: Fruit) => number | undefined;
}

export const NUTRIENT_DEFINITIONS: NutrientDefinition[] = [
  {
    id: "vitaminC",
    name: "Vitamin C (Ascorbic Acid)",
    shortLabel: "Vitamin C",
    unit: "mg",
    category: "vitamin",
    description: "Water-soluble antioxidant essential for collagen synthesis, immune function, and iron absorption.",
    fdaDailyValue: 90, // mg
    getValue: (f) => f.nutrition.nutrients.vitaminC?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.vitaminC?.dailyValuePercent,
  },
  {
    id: "fiber",
    name: "Dietary Fiber",
    shortLabel: "Fiber",
    unit: "g",
    category: "macro",
    description: "Indigestible plant carbohydrates supporting gut microbiome diversity, glycemic stability, and digestion.",
    fdaDailyValue: 28, // g
    getValue: (f) => f.nutrition.nutrients.fiber?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.fiber?.dailyValuePercent,
  },
  {
    id: "calories",
    name: "Caloric Energy",
    shortLabel: "Calories",
    unit: "kcal",
    category: "macro",
    description: "Standard measure of food energy yield per 100g raw edible portion.",
    getValue: (f) => f.nutrition.calories.amount,
  },
  {
    id: "sugars",
    name: "Natural Sugars (Fructose & Glucose)",
    shortLabel: "Sugars",
    unit: "g",
    category: "macro",
    description: "Naturally occurring simple carbohydrates bound within intact cellular plant matrices.",
    getValue: (f) =>
      f.nutrition.nutrients.totalSugars?.amount ??
      f.nutrition.nutrients.sugars?.amount ??
      0,
  },
  {
    id: "potassium",
    name: "Potassium",
    shortLabel: "Potassium",
    unit: "mg",
    category: "mineral",
    description: "Essential systemic electrolyte regulating intracellular fluid balance and neurovascular tension.",
    fdaDailyValue: 4700, // mg
    getValue: (f) => f.nutrition.nutrients.potassium?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.potassium?.dailyValuePercent,
  },
  {
    id: "water",
    name: "Hydration / Water Content",
    shortLabel: "Water",
    unit: "%",
    category: "hydration",
    description: "Intrinsic biological water content contributing to cellular hydration and satiety.",
    getValue: (f) => f.nutrition.waterContentPercent ?? f.nutrition.nutrients.water?.amount ?? (100 - (f.nutrition.nutrients.carbohydrates?.amount ?? 15) - 1.5),
  },
  {
    id: "carbs",
    name: "Total Carbohydrates",
    shortLabel: "Carbs",
    unit: "g",
    category: "macro",
    description: "Combined sugars, complex starches, and fibers providing metabolic fuel.",
    fdaDailyValue: 275, // g
    getValue: (f) => f.nutrition.nutrients.carbohydrates?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.carbohydrates?.dailyValuePercent,
  },
  {
    id: "protein",
    name: "Protein",
    shortLabel: "Protein",
    unit: "g",
    category: "macro",
    description: "Constituent amino acids present in low amounts across fresh botanicals.",
    fdaDailyValue: 50, // g
    getValue: (f) => f.nutrition.nutrients.protein?.amount ?? 0,
  },
  {
    id: "calcium",
    name: "Calcium",
    shortLabel: "Calcium",
    unit: "mg",
    category: "mineral",
    description: "Structural macro-mineral vital for bone density, nerve signaling, and vascular contraction.",
    fdaDailyValue: 1300, // mg
    getValue: (f) => f.nutrition.nutrients.calcium?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.calcium?.dailyValuePercent,
  },
  {
    id: "magnesium",
    name: "Magnesium",
    shortLabel: "Magnesium",
    unit: "mg",
    category: "mineral",
    description: "Cofactor in >300 enzymatic reactions including ATP production and DNA synthesis.",
    fdaDailyValue: 420, // mg
    getValue: (f) => f.nutrition.nutrients.magnesium?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.magnesium?.dailyValuePercent,
  },
  {
    id: "iron",
    name: "Iron",
    shortLabel: "Iron",
    unit: "mg",
    category: "mineral",
    description: "Trace mineral central to hemoglobin formation and systemic oxygen transport.",
    fdaDailyValue: 18, // mg
    getValue: (f) => f.nutrition.nutrients.iron?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.iron?.dailyValuePercent,
  },
  {
    id: "vitaminK",
    name: "Vitamin K",
    shortLabel: "Vitamin K",
    unit: "µg",
    category: "vitamin",
    description: "Fat-soluble vitamin required for hepatic blood-clotting factors and bone mineralization.",
    fdaDailyValue: 120, // µg
    getValue: (f) => f.nutrition.nutrients.vitaminK?.amount ?? 0,
    getDvPercent: (f) => f.nutrition.nutrients.vitaminK?.dailyValuePercent,
  },
];

export interface FdaDvClassification {
  tier: "high" | "good" | "low";
  label: string;
  badgeClass: string;
}

/**
 * Standardized FDA 21 CFR 101.54 Daily Value Nutrient Claims Helper
 * - High / Excellent Source: ≥ 20% DV
 * - Good Source: 10% - 19% DV
 * - Low: ≤ 5% DV
 */
export function getFdaDvClassification(dvPercent: number | undefined): FdaDvClassification | null {
  if (dvPercent === undefined || isNaN(dvPercent)) return null;
  if (dvPercent >= 20) {
    return {
      tier: "high",
      label: "High Source",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    };
  }
  if (dvPercent >= 10 && dvPercent < 20) {
    return {
      tier: "good",
      label: "Good Source",
      badgeClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    };
  }
  if (dvPercent <= 5) {
    return {
      tier: "low",
      label: "Low",
      badgeClass: "bg-zinc-800/80 text-zinc-400 border-zinc-700/60",
    };
  }
  return null;
}

export interface GoalPreset {
  id: string;
  label: string;
  icon: string;
  description: string;
  match: (fruit: Fruit) => boolean;
}

export const GOAL_PRESETS: GoalPreset[] = [
  {
    id: "vitamin-c-power",
    label: "Immunity & Vitamin C",
    icon: "🛡️",
    description: "Fruits meeting the FDA 'High / Excellent Source' threshold (≥ 20% Daily Value).",
    match: (f) => (f.nutrition.nutrients.vitaminC?.dailyValuePercent ?? 0) >= 20,
  },
  {
    id: "high-fiber",
    label: "High Dietary Fiber",
    icon: "🌾",
    description: "High-density fiber fruits delivering ≥ 2.0g per 100g serving.",
    match: (f) => (f.nutrition.nutrients.fiber?.amount ?? 0) >= 2.0,
  },
  {
    id: "low-calorie",
    label: "Low Caloric Density",
    icon: "⚡",
    description: "Light, energy-modest fruits providing under 45 kcal per 100g.",
    match: (f) => f.nutrition.calories.amount < 45,
  },
  {
    id: "maximum-hydration",
    label: "Maximum Hydration",
    icon: "💧",
    description: "Extraordinarily juicy fruits with ≥ 86% intrinsic cellular water content.",
    match: (f) => {
      const w = f.nutrition.nutrients.water?.amount ?? (100 - (f.nutrition.nutrients.carbohydrates?.amount ?? 15));
      return w >= 86;
    },
  },
  {
    id: "low-sugar",
    label: "Lower Natural Sugar",
    icon: "🍓",
    description: "Modest sugar density with under 9g natural fructose/glucose per 100g.",
    match: (f) => {
      const s = f.nutrition.nutrients.totalSugars?.amount ?? f.nutrition.nutrients.sugars?.amount ?? 0;
      return s < 9.0;
    },
  },
  {
    id: "potassium-rich",
    label: "Potassium Rich",
    icon: "🍌",
    description: "Electrolyte-replenishing fruits delivering ≥ 180 mg potassium.",
    match: (f) => (f.nutrition.nutrients.potassium?.amount ?? 0) >= 180,
  },
];

export const NutritionExplorer: React.FC<NutritionExplorerProps> = ({ allFruits }) => {
  const [selectedNutrientId, setSelectedNutrientId] = useState<string>("vitaminC");
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "macro" | "vitamin" | "mineral" | "hydration">("all");
  const [activeGoalId, setActiveGoalId] = useState<string | null>("vitamin-c-power");
  const [matrixSortCol, setMatrixSortCol] = useState<string>("calories");
  const [matrixSortDir, setMatrixSortDir] = useState<"desc" | "asc">("desc");

  const currentNutrient = useMemo(
    () => NUTRIENT_DEFINITIONS.find((n) => n.id === selectedNutrientId) || NUTRIENT_DEFINITIONS[0],
    [selectedNutrientId]
  );

  const filteredNutrients = useMemo(() => {
    if (categoryFilter === "all") return NUTRIENT_DEFINITIONS;
    return NUTRIENT_DEFINITIONS.filter((n) => n.category === categoryFilter);
  }, [categoryFilter]);

  // Compute leaderboard ranking for current nutrient
  const rankedFruits = useMemo(() => {
    return [...allFruits]
      .map((fruit) => {
        const value = currentNutrient.getValue(fruit);
        const dvPercent = currentNutrient.getDvPercent ? currentNutrient.getDvPercent(fruit) : undefined;
        return { fruit, value, dvPercent };
      })
      .sort((a, b) => (sortDirection === "desc" ? b.value - a.value : a.value - b.value));
  }, [allFruits, currentNutrient, sortDirection]);

  // Max value for visual relative bar calculation
  const maxValue = useMemo(() => {
    const vals = allFruits.map((f) => currentNutrient.getValue(f));
    return Math.max(...vals, 0.001);
  }, [allFruits, currentNutrient]);

  // Goal-matched fruits
  const matchedGoalFruits = useMemo(() => {
    if (!activeGoalId) return allFruits;
    const goal = GOAL_PRESETS.find((g) => g.id === activeGoalId);
    if (!goal) return allFruits;
    return allFruits.filter(goal.match);
  }, [allFruits, activeGoalId]);

  // Matrix sorted rows
  const matrixSortedFruits = useMemo(() => {
    return [...allFruits].sort((a, b) => {
      let valA = 0;
      let valB = 0;
      if (matrixSortCol === "name") {
        return matrixSortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if (matrixSortCol === "calories") {
        valA = a.nutrition.calories.amount;
        valB = b.nutrition.calories.amount;
      } else {
        const metric = NUTRIENT_DEFINITIONS.find((n) => n.id === matrixSortCol);
        if (metric) {
          valA = metric.getValue(a);
          valB = metric.getValue(b);
        }
      }
      return matrixSortDir === "desc" ? valB - valA : valA - valB;
    });
  }, [allFruits, matrixSortCol, matrixSortDir]);

  const handleMatrixSort = (col: string) => {
    if (matrixSortCol === col) {
      setMatrixSortDir((prev) => (prev === "desc" ? "asc" : "desc"));
    } else {
      setMatrixSortCol(col);
      setMatrixSortDir("desc");
    }
  };

  return (
    <div className="space-y-16">
      {/* ─── SECTION 1: DYNAMIC LEADERBOARD & NUTRIENT RANKING ─── */}
      <section aria-labelledby="ranking-heading" className="space-y-8">
        {/* Category Pills & Nutrient Selector */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
                Nutrient Leaderboard
              </span>
              <h2 id="ranking-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Comparative Nutrient Observatory
              </h2>
              <p className="font-editorial text-zinc-400 text-sm mt-1">
                Rank and inspect verified biochemical levels across all 8 production monographs.
              </p>
            </div>

            {/* Sort Order Toggle */}
            <div className="flex items-center gap-2 self-start sm:self-auto font-ui text-xs">
              <span className="text-zinc-500 font-medium">Order:</span>
              <button
                type="button"
                onClick={() => setSortDirection((prev) => (prev === "desc" ? "asc" : "desc"))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer font-medium"
              >
                <span>{sortDirection === "desc" ? "Highest First ↓" : "Lowest First ↑"}</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-ui text-xs">
            <span className="text-zinc-500 uppercase tracking-wider font-semibold text-[11px] shrink-0 mr-1">
              Class:
            </span>
            {(
              [
                { id: "all", label: "All Nutrients" },
                { id: "macro", label: "Energy & Macros" },
                { id: "vitamin", label: "Vitamins" },
                { id: "mineral", label: "Minerals" },
                { id: "hydration", label: "Hydration" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                    : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Metric Selector Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {filteredNutrients.map((metric) => {
              const isSelected = metric.id === currentNutrient.id;
              return (
                <button
                  key={metric.id}
                  type="button"
                  onClick={() => setSelectedNutrientId(metric.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-ui transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-500"
                      : "bg-zinc-950/80 border border-zinc-800/80 text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                  }`}
                >
                  <span>{metric.shortLabel}</span>
                  <span className="text-[11px] opacity-70">({metric.unit})</span>
                </button>
              );
            })}
          </div>

          {/* Active Metric Description Banner */}
          <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/40 text-xs font-ui text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-zinc-200">{currentNutrient.name}:</strong>{" "}
              {currentNutrient.description}
            </div>
            {currentNutrient.fdaDailyValue && (
              <span className="shrink-0 text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-[11px]">
                FDA Daily Value Reference: <strong>{currentNutrient.fdaDailyValue} {currentNutrient.unit}</strong>
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Ranking Cards Grid */}
        <div className="space-y-3.5">
          {rankedFruits.map(({ fruit, value, dvPercent }, index) => {
            const pct = Math.round((value / maxValue) * 100);
            const isLeader = index === 0 && sortDirection === "desc";

            const fdaDv = getFdaDvClassification(dvPercent);

            return (
              <div
                key={fruit.id}
                className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/60 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
              >
                {/* Left identity & thumbnail */}
                <div className="flex items-center gap-4 min-w-0 sm:w-64 shrink-0">
                  {/* Rank badge */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-display text-xs font-bold shrink-0 ${
                      isLeader
                        ? "bg-amber-400 text-black shadow-md shadow-amber-500/30"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    #{index + 1}
                  </span>

                  {/* Thumbnail Avatar */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                    <img
                      src={fruit.images.hero.src}
                      alt={fruit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: "72% center" }}
                    />
                  </div>

                  {/* Names */}
                  <div className="min-w-0">
                    <a
                      href={`/fruit/${fruit.slug}`}
                      className="font-display text-base font-bold text-white group-hover:text-indigo-300 transition-colors block truncate"
                    >
                      {fruit.name}
                    </a>
                    <span className="font-editorial italic text-xs text-zinc-400 truncate block">
                      {fruit.taxonomy.species}
                    </span>
                  </div>
                </div>

                {/* Center Proportional Data Bar */}
                <div className="flex-1 min-w-0 px-0 sm:px-4">
                  <div className="h-3 w-full rounded-full bg-zinc-950 overflow-hidden border border-zinc-800/80">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.max(pct, 3)}%`,
                        backgroundColor: fruit.theme.primary,
                      }}
                    />
                  </div>
                </div>

                {/* Right Numerical Values & Badges */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  {/* FDA Classification Tag */}
                  {fdaDv && (
                    <span className={`font-ui text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${fdaDv.badgeClass}`}>
                      {fdaDv.label} {dvPercent !== undefined ? `(${dvPercent}% DV)` : ""}
                    </span>
                  )}

                  {/* Exact Number */}
                  <div className="text-right">
                    <span className="font-display text-lg font-bold text-white">
                      {value >= 10 ? value.toFixed(0) : value >= 1 ? value.toFixed(1) : value.toFixed(2)}{" "}
                      <span className="font-ui text-xs font-normal text-zinc-400">{currentNutrient.unit}</span>
                    </span>
                    {dvPercent !== undefined && (
                      <span className="block font-ui text-[11px] text-zinc-500">
                        {dvPercent}% DV
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SECTION 2: GOAL-BASED NUTRIENT TARGETER ("FIND FRUITS BY NUTRIENT") ─── */}
      <section aria-labelledby="goals-heading" className="space-y-8 pt-6">
        <div className="pb-2 border-b border-zinc-800">
          <span className="text-xs font-ui uppercase font-bold tracking-widest text-emerald-400">
            Nutritional Discovery
          </span>
          <h3 id="goals-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Find Fruits by Dietary Target
          </h3>
          <p className="font-editorial text-zinc-400 text-sm mt-1">
            Filter the catalog to discover fruits that meet specific nutritional criteria and functional targets.
          </p>
        </div>

        {/* Goal Preset Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {GOAL_PRESETS.map((goal) => {
            const isSelected = activeGoalId === goal.id;
            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => setActiveGoalId((prev) => (prev === goal.id ? null : goal.id))}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-zinc-800 border-zinc-600 shadow-lg text-white"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <div className="text-2xl mb-2">{goal.icon}</div>
                <div>
                  <div className="font-ui text-xs font-bold leading-tight mb-1 text-white">
                    {goal.label}
                  </div>
                  <div className="text-[11px] font-ui text-zinc-400 line-clamp-2">
                    {goal.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Matching Fruits Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-ui text-zinc-400">
            <span>
              Matching monographs: <strong className="text-white">{matchedGoalFruits.length}</strong> of {allFruits.length} fruits
            </span>
            {activeGoalId && (
              <button
                type="button"
                onClick={() => setActiveGoalId(null)}
                className="text-indigo-400 hover:underline cursor-pointer"
              >
                Clear goal filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchedGoalFruits.map((fruit) => (
              <div
                key={fruit.id}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950 mb-3 border border-zinc-800/60">
                    <img
                      src={fruit.images.hero.src}
                      alt={fruit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: "72% center" }}
                    />
                    <span className="absolute bottom-2 left-2 font-ui text-[10px] font-semibold bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-zinc-200 border border-white/10">
                      {fruit.nutrition.calories.amount} kcal
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {fruit.name}
                  </h4>
                  <span className="font-editorial italic text-xs text-zinc-400 block mb-2">
                    {fruit.taxonomy.species}
                  </span>

                  <div className="text-xs font-ui text-zinc-400 space-y-1 pt-2 border-t border-zinc-800/60">
                    <div className="flex justify-between">
                      <span>Vitamin C:</span>
                      <strong className="text-zinc-200">{fruit.nutrition.nutrients.vitaminC?.amount ?? 0} mg</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Dietary Fiber:</span>
                      <strong className="text-zinc-200">{fruit.nutrition.nutrients.fiber?.amount ?? 0} g</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Natural Sugars:</span>
                      <strong className="text-zinc-200">
                        {fruit.nutrition.nutrients.totalSugars?.amount ?? fruit.nutrition.nutrients.sugars?.amount ?? 0} g
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-ui">
                  <a
                    href={`/fruit/${fruit.slug}`}
                    className="font-semibold text-white hover:text-indigo-300 transition-colors"
                  >
                    View Monograph →
                  </a>
                  <a
                    href={`/compare?a=${fruit.slug}`}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    title="Compare this fruit"
                  >
                    Compare ⇄
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: COMPREHENSIVE CROSS-CATALOG NUTRIENT MATRIX ─── */}
      <section aria-labelledby="matrix-heading" className="space-y-6 pt-6">
        <div className="pb-2 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-amber-400">
              Cross-Catalog Matrix
            </span>
            <h3 id="matrix-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Complete Nutritional Laboratory Grid
            </h3>
            <p className="font-editorial text-zinc-400 text-sm mt-1">
              Click any column header to sort all 8 monographs dynamically by that nutrient.
            </p>
          </div>
          <span className="text-xs font-ui text-zinc-500">All values per 100g raw edible portion</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
          <table className="w-full text-left font-ui text-xs">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/70 text-zinc-400 font-semibold uppercase text-[11px] tracking-wider whitespace-nowrap">
                <th
                  onClick={() => handleMatrixSort("name")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors"
                >
                  Fruit {matrixSortCol === "name" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("calories")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Calories {matrixSortCol === "calories" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("sugars")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Sugars {matrixSortCol === "sugars" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("fiber")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Fiber {matrixSortCol === "fiber" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("carbs")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Carbs {matrixSortCol === "carbs" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("protein")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Protein {matrixSortCol === "protein" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("vitaminC")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right text-emerald-400"
                >
                  Vit C {matrixSortCol === "vitaminC" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("potassium")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Potassium {matrixSortCol === "potassium" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("calcium")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Calcium {matrixSortCol === "calcium" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => handleMatrixSort("magnesium")}
                  className="p-3.5 sm:p-4 cursor-pointer hover:text-white transition-colors text-right"
                >
                  Magnesium {matrixSortCol === "magnesium" && (matrixSortDir === "desc" ? "↓" : "↑")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {matrixSortedFruits.map((fruit) => {
                const cal = fruit.nutrition.calories.amount;
                const sug = fruit.nutrition.nutrients.totalSugars?.amount ?? fruit.nutrition.nutrients.sugars?.amount ?? 0;
                const fib = fruit.nutrition.nutrients.fiber?.amount ?? 0;
                const carb = fruit.nutrition.nutrients.carbohydrates?.amount ?? 0;
                const prot = fruit.nutrition.nutrients.protein?.amount ?? 0;
                const vitC = fruit.nutrition.nutrients.vitaminC?.amount ?? 0;
                const pot = fruit.nutrition.nutrients.potassium?.amount ?? 0;
                const calc = fruit.nutrition.nutrients.calcium?.amount ?? 0;
                const mag = fruit.nutrition.nutrients.magnesium?.amount ?? 0;

                return (
                  <tr key={fruit.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-white whitespace-nowrap">
                      <a href={`/fruit/${fruit.slug}`} className="hover:text-indigo-300 transition-colors">
                        {fruit.name}
                      </a>
                    </td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-200 font-medium">{cal} kcal</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-300">{sug.toFixed(1)} g</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-300">{fib.toFixed(1)} g</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-400">{carb.toFixed(1)} g</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-400">{prot.toFixed(2)} g</td>
                    <td className="p-3.5 sm:p-4 text-right text-emerald-400 font-semibold">{vitC.toFixed(1)} mg</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-300">{pot.toFixed(0)} mg</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-400">{calc.toFixed(0)} mg</td>
                    <td className="p-3.5 sm:p-4 text-right text-zinc-400">{mag.toFixed(0)} mg</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SECTION 4: LABORATORY METHODOLOGY & CITATION PROVENANCE ─── */}
      <section aria-labelledby="methodology-heading" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <h4 id="methodology-heading" className="font-ui text-xs font-bold uppercase tracking-wider text-zinc-300">
            Laboratory Methodology & Daily Value Standards
          </h4>
        </div>
        <p className="font-editorial text-zinc-400 text-sm leading-relaxed">
          All nutritional metrics across Fruitypedia are anchored to the <strong>USDA FoodData Central SR Legacy</strong> and Foundation datasets. Values reflect raw, edible portions without added sweeteners or preservatives. Percent Daily Values (% DV) are computed according to current FDA nutrition labeling regulations (21 CFR 101.9 / 21 CFR 101.54) based on a standard 2,000-calorie reference diet.
        </p>
        <div className="pt-2">
          <a
            href="/about#academic-registry"
            className="inline-flex items-center gap-1.5 text-xs font-ui font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Review Full Institutional Sources & Botanical Citations Registry</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};
export default NutritionExplorer;
