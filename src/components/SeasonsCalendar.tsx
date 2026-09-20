import React, { useState, useMemo } from "react";
import type { Fruit } from "@/types";

interface SeasonsCalendarProps {
  allFruits: Fruit[];
}

export interface MonthInfo {
  num: number;
  short: string;
  full: string;
}

export const MONTHS: MonthInfo[] = [
  { num: 1, short: "Jan", full: "January" },
  { num: 2, short: "Feb", full: "February" },
  { num: 3, short: "Mar", full: "March" },
  { num: 4, short: "Apr", full: "April" },
  { num: 5, short: "May", full: "May" },
  { num: 6, short: "Jun", full: "June" },
  { num: 7, short: "Jul", full: "July" },
  { num: 8, short: "Aug", full: "August" },
  { num: 9, short: "Sep", full: "September" },
  { num: 10, short: "Oct", full: "October" },
  { num: 11, short: "Nov", full: "November" },
  { num: 12, short: "Dec", full: "December" },
];

export interface SeasonStatus {
  isPeak: boolean;
  isSeason: boolean;
  statusText: "Peak" | "Harvest" | "Off-Season";
  label?: string;
}

/**
 * Calculates whether a fruit is in season / peak season for a given month and hemisphere.
 */
export function getFruitSeasonStatus(
  fruit: Fruit,
  monthNum: number,
  hemisphere: "north" | "south" = "north"
): SeasonStatus {
  if (!fruit.season || fruit.season.length === 0) {
    return { isPeak: false, isSeason: false, statusText: "Off-Season" };
  }

  // Find direct match or equatorial
  let targetSeason = fruit.season.find((s) => s.hemisphere === hemisphere);
  if (!targetSeason) {
    targetSeason = fruit.season.find((s) => s.hemisphere === "equatorial" || s.hemisphere === "mixed");
  }

  // If Southern Hemisphere selected and fruit only defined for Northern Hemisphere,
  // apply the standard 6-month botanical inversion for temperate fruit phenology.
  let lookupMonth = monthNum;
  if (!targetSeason && hemisphere === "south") {
    targetSeason = fruit.season.find((s) => s.hemisphere === "north");
    if (targetSeason) {
      // Invert month: (month + 6 - 1) % 12 + 1
      lookupMonth = ((monthNum + 5) % 12) + 1;
    }
  }

  if (!targetSeason) {
    targetSeason = fruit.season[0];
  }

  const isPeak = Boolean(targetSeason.peakMonths?.includes(lookupMonth));
  const isSeason = Boolean(targetSeason.months?.includes(lookupMonth));

  return {
    isPeak,
    isSeason,
    statusText: isPeak ? "Peak" : isSeason ? "Harvest" : "Off-Season",
    label: targetSeason.label,
  };
}

export const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "berry", label: "Berries" },
  { id: "citrus", label: "Citrus" },
  { id: "tropical", label: "Tropical" },
  { id: "stone-fruit", label: "Stone Fruits" },
  { id: "melon", label: "Melons" },
  { id: "pome", label: "Pome" },
] as const;

export const SeasonsCalendar: React.FC<SeasonsCalendarProps> = ({ allFruits }) => {
  // Real-time current month detection (1-12)
  const currentMonthNum = useMemo(() => new Date().getMonth() + 1, []);
  
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonthNum);
  const [hemisphere, setHemisphere] = useState<"north" | "south">("north");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [onlyInSeasonFilter, setOnlyInSeasonFilter] = useState<boolean>(false);

  const selectedMonthInfo = useMemo(
    () => MONTHS.find((m) => m.num === selectedMonth) || MONTHS[currentMonthNum - 1],
    [selectedMonth, currentMonthNum]
  );

  // Filtered fruit set
  const filteredFruits = useMemo(() => {
    return allFruits.filter((f) => {
      if (selectedCategory !== "all" && f.taxonomy.categoryId !== selectedCategory) {
        return false;
      }
      if (onlyInSeasonFilter) {
        const status = getFruitSeasonStatus(f, selectedMonth, hemisphere);
        if (!status.isSeason) return false;
      }
      return true;
    });
  }, [allFruits, selectedCategory, onlyInSeasonFilter, selectedMonth, hemisphere]);

  // Fruits in season for currently selected month
  const monthlyInSeasonFruits = useMemo(() => {
    return allFruits
      .map((fruit) => {
        const status = getFruitSeasonStatus(fruit, selectedMonth, hemisphere);
        return { fruit, status };
      })
      .filter(({ status }) => status.isSeason)
      .sort((a, b) => {
        // Peak fruits first, then harvest
        if (a.status.isPeak && !b.status.isPeak) return -1;
        if (!a.status.isPeak && b.status.isPeak) return 1;
        return a.fruit.name.localeCompare(b.fruit.name);
      });
  }, [allFruits, selectedMonth, hemisphere]);

  return (
    <div className="space-y-16">
      {/* ─── SECTION 1: INTERACTIVE MONTH SELECTOR & CONTROL BAR ─── */}
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
                Interactive Harvest Calendar
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-ui font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Month: {MONTHS[currentMonthNum - 1].full}</span>
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {selectedMonthInfo.full} Harvest Cycles
            </h2>
            <p className="font-editorial text-zinc-400 text-sm mt-1 max-w-2xl">
              Inspect physiological peak maturation windows, Brix sugar accumulation, and seasonal availability across global agricultural hemispheres.
            </p>
          </div>

          {/* Quick Controls: Hemisphere & In-Season-Now Toggle */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto shrink-0 font-ui text-xs">
            {/* Hemisphere Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800">
              <button
                type="button"
                onClick={() => setHemisphere("north")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  hemisphere === "north"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Northern Hemisphere
              </button>
              <button
                type="button"
                onClick={() => setHemisphere("south")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  hemisphere === "south"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Southern (+6 Mo.)
              </button>
            </div>

            {/* Jump to Current Month Button */}
            {selectedMonth !== currentMonthNum && (
              <button
                type="button"
                onClick={() => setSelectedMonth(currentMonthNum)}
                className="px-3 py-1.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jump to Today</span>
                <span>↻</span>
              </button>
            )}
          </div>
        </div>

        {/* 12-Month Selector Strip */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Select Calendar Month:
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {MONTHS.map((m) => {
              const isSelected = m.num === selectedMonth;
              const isCurrent = m.num === currentMonthNum;
              
              // Count fruits in peak or season this month
              const peakCount = allFruits.filter((f) => getFruitSeasonStatus(f, m.num, hemisphere).isPeak).length;
              const harvestCount = allFruits.filter((f) => getFruitSeasonStatus(f, m.num, hemisphere).isSeason).length;

              return (
                <button
                  key={m.num}
                  type="button"
                  onClick={() => setSelectedMonth(m.num)}
                  className={`p-3 rounded-2xl border transition-all text-center cursor-pointer flex flex-col items-center justify-between gap-1 relative ${
                    isSelected
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400/40"
                      : "bg-zinc-950/80 border-zinc-800/80 text-zinc-300 hover:bg-zinc-800/60 hover:border-zinc-700"
                  }`}
                >
                  {isCurrent && (
                    <span
                      className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-zinc-950"
                      title="Current Calendar Month"
                    />
                  )}
                  <span className="font-display text-sm font-bold">{m.short}</span>
                  <span className={`text-[10px] font-ui ${isSelected ? "text-indigo-200" : "text-zinc-500"}`}>
                    {peakCount > 0 ? `${peakCount} Peak` : `${harvestCount} Active`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Pills & Only-In-Season Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-ui text-xs">
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                      : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* In-Season Only Checkbox Toggle */}
          <label className="flex items-center gap-2 font-ui text-xs text-zinc-400 cursor-pointer self-start sm:self-auto select-none">
            <input
              type="checkbox"
              checked={onlyInSeasonFilter}
              onChange={(e) => setOnlyInSeasonFilter(e.target.checked)}
              className="rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 w-3.5 h-3.5 cursor-pointer"
            />
            <span>Show only fruits active in {selectedMonthInfo.short}</span>
          </label>
        </div>
      </section>

      {/* ─── SECTION 2: IN-SEASON HIGHLIGHT CARDS FOR SELECTED MONTH ─── */}
      <section aria-labelledby="month-spotlight-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Monthly Spotlight
            </span>
            <h3 id="month-spotlight-heading" className="font-display text-2xl font-bold text-white tracking-tight mt-1">
              Harvest Cohort: {selectedMonthInfo.full} ({hemisphere === "north" ? "Northern Hemisphere" : "Southern Hemisphere"})
            </h3>
          </div>
          <span className="font-ui text-xs text-zinc-500">
            {monthlyInSeasonFruits.length} of {allFruits.length} Catalog Fruits Harvesting
          </span>
        </div>

        {monthlyInSeasonFruits.length === 0 ? (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-12 text-center space-y-3">
            <span className="text-3xl">❄️</span>
            <h4 className="font-display text-lg font-semibold text-white">Dormant Month for Selected Filter</h4>
            <p className="font-editorial text-zinc-400 text-sm max-w-md mx-auto">
              No fruits in this category are actively harvesting in {selectedMonthInfo.full} in the {hemisphere === "north" ? "Northern" : "Southern"} Hemisphere.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyInSeasonFruits.map(({ fruit, status }) => {
              const isPeak = status.isPeak;

              return (
                <article
                  key={fruit.id}
                  className="group rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/60 flex flex-col justify-between space-y-5"
                >
                  {/* Top Row: Thumbnail, Name, Status Badge */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                          <img
                            src={fruit.images.hero.src}
                            alt={fruit.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ objectPosition: "72% center" }}
                          />
                        </div>
                        <div className="min-w-0">
                          <a
                            href={`/fruit/${fruit.slug}`}
                            className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors block truncate"
                          >
                            {fruit.name}
                          </a>
                          <span className="font-editorial italic text-xs text-zinc-400 block truncate">
                            {fruit.taxonomy.species}
                          </span>
                        </div>
                      </div>

                      {/* Peak vs Harvest Pill */}
                      {isPeak ? (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-[10px] font-ui font-bold uppercase tracking-wider">
                          <span>★ Peak</span>
                        </span>
                      ) : (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-[10px] font-ui font-medium uppercase tracking-wider">
                          <span>Active</span>
                        </span>
                      )}
                    </div>

                    {/* Window Timeline Label */}
                    <div className="p-3 rounded-xl border border-zinc-800/60 bg-zinc-950/50 text-xs font-ui text-zinc-300 flex items-center justify-between">
                      <span className="text-zinc-500 text-[11px] uppercase">Window:</span>
                      <span className="font-medium text-right text-zinc-200">
                        {status.label || "Seasonal Cycle"}
                      </span>
                    </div>

                    {/* Sensory Tasting Note excerpt */}
                    <p className="font-editorial text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {fruit.tasteProfile.notes}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-ui">
                    <span className="text-zinc-500 capitalize">
                      {fruit.taxonomy.categoryId} Family
                    </span>
                    <a
                      href={`/fruit/${fruit.slug}`}
                      className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Monograph</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── SECTION 3: CROSS-CATALOG PHENOLOGICAL MASTER MATRIX ─── */}
      <section aria-labelledby="matrix-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Master Phenology Grid
            </span>
            <h3 id="matrix-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Annual 12-Month Cross-Catalog Calendar
            </h3>
            <p className="font-editorial text-zinc-400 text-sm mt-1">
              Full cross-comparison across all {filteredFruits.length} catalog fruits. Cells reflect physiological maturation phases for {hemisphere === "north" ? "Northern Hemisphere" : "Southern Hemisphere"} cultivation.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-ui text-zinc-400 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-400 border border-amber-300" />
              <span>Peak Flavor & Brix</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-900/60 border border-indigo-700/50" />
              <span>Active Harvest</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-zinc-900 border border-zinc-800" />
              <span>Dormancy</span>
            </div>
          </div>
        </div>

        {/* Scrollable Matrix Table */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[840px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80 font-ui text-[11px] uppercase tracking-wider text-zinc-400">
                  <th scope="col" className="py-4 px-5 font-semibold sticky left-0 z-20 bg-zinc-950 w-52 shadow-[2px_0_8px_rgba(0,0,0,0.5)]">
                    Fruit Monograph
                  </th>
                  {MONTHS.map((m) => {
                    const isSelected = m.num === selectedMonth;
                    return (
                      <th
                        key={m.num}
                        scope="col"
                        className={`py-4 px-2 text-center font-semibold transition-colors cursor-pointer ${
                          isSelected ? "text-indigo-400 bg-indigo-950/30" : "text-zinc-400 hover:text-zinc-200"
                        }`}
                        onClick={() => setSelectedMonth(m.num)}
                      >
                        <span>{m.short}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs font-ui">
                {filteredFruits.map((fruit) => {
                  return (
                    <tr
                      key={fruit.id}
                      className="hover:bg-zinc-900/50 transition-colors group"
                    >
                      {/* Sticky Fruit Identity Column */}
                      <th
                        scope="row"
                        className="py-3 px-5 font-medium sticky left-0 z-10 bg-zinc-950/95 group-hover:bg-zinc-900/95 transition-colors shadow-[2px_0_8px_rgba(0,0,0,0.5)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                            <img
                              src={fruit.images.hero.src}
                              alt={fruit.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "72% center" }}
                            />
                          </div>
                          <div className="min-w-0">
                            <a
                              href={`/fruit/${fruit.slug}`}
                              className="font-display text-sm font-bold text-white group-hover:text-indigo-300 transition-colors block truncate"
                            >
                              {fruit.name}
                            </a>
                            <span className="font-editorial italic text-[11px] text-zinc-500 block truncate">
                              {fruit.taxonomy.species}
                            </span>
                          </div>
                        </div>
                      </th>

                      {/* 12 Months Cells */}
                      {MONTHS.map((m) => {
                        const status = getFruitSeasonStatus(fruit, m.num, hemisphere);
                        const isCurrentCol = m.num === selectedMonth;

                        return (
                          <td
                            key={m.num}
                            onClick={() => setSelectedMonth(m.num)}
                            className={`p-1.5 text-center cursor-pointer transition-colors ${
                              isCurrentCol ? "bg-indigo-950/20" : ""
                            }`}
                          >
                            <div
                              className={`w-full h-9 rounded-lg flex items-center justify-center font-ui text-[10px] transition-all ${
                                status.isPeak
                                  ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20 ring-1 ring-amber-300"
                                  : status.isSeason
                                  ? "bg-indigo-950/80 text-indigo-300 border border-indigo-700/50 font-medium"
                                  : "bg-zinc-950/40 text-zinc-700 hover:bg-zinc-900"
                              }`}
                              title={`${fruit.name} in ${m.full}: ${status.statusText}`}
                            >
                              {status.isPeak ? "Peak" : status.isSeason ? "Active" : "—"}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: AGRONOMIC & RIPENING SCIENCE METHODOLOGY ─── */}
      <section
        aria-labelledby="agronomy-heading"
        className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-md space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <h4 id="agronomy-heading" className="font-ui text-xs font-bold uppercase tracking-wider text-zinc-300">
            Agronomic Maturity & Biochemical Ripening Science
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-editorial text-zinc-400 text-sm leading-relaxed">
          <div className="space-y-2">
            <h5 className="font-display font-semibold text-white text-base">Physiological Maturation vs Shelf-Life</h5>
            <p>
              Fruits harvested during their authentic climatic harvest window synthesize higher concentrations of volatile aroma esters, anthocyanin pigments, and organic acids. Tree-ripened specimens reach an optimal soluble solid content (Brix rating) that artificial ethylene gas ripening cannot fully reproduce.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-display font-semibold text-white text-base">Global Hemispheric Inversion</h5>
            <p>
              The 6-month seasonal opposition between the Northern and Southern Hemispheres enables continuous year-round access to fresh temperate crops. When North American and European orchards enter winter dormancy (November–March), Southern Hemisphere production hubs across Chile, Peru, South Africa, and Australasia enter their peak harvest cycles.
            </p>
          </div>
        </div>
        <div className="pt-2">
          <a
            href="/about#academic-registry"
            className="text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-ui font-medium inline-flex items-center gap-1"
          >
            <span>Review Botanical Climate Citations & Institutional Methodology</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SeasonsCalendar;
