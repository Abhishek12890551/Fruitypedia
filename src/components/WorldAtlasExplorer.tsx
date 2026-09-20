import React, { useState, useMemo } from "react";
import type { Fruit } from "@/types";
import { OriginMap } from "./OriginMap";

interface WorldAtlasExplorerProps {
  allFruits: Fruit[];
}

export interface ContinentalBiome {
  id: string;
  name: string;
  shortLabel: string;
  icon: string;
  description: string;
  fruitSlugs: string[];
}

export const CONTINENTAL_BIOMES: ContinentalBiome[] = [
  {
    id: "all",
    name: "All Continental Biomes",
    shortLabel: "All Continents",
    icon: "🌍",
    description: "Global geographic provenance and evolutionary birthplaces across all 8 production monographs.",
    fruitSlugs: [
      "apple",
      "banana",
      "blueberry",
      "mango",
      "orange",
      "peach",
      "strawberry",
      "watermelon",
    ],
  },
  {
    id: "central-asia",
    name: "Central Asia & The Tian Shan Corridor",
    shortLabel: "Central Asia",
    icon: "🏔️",
    description: "Wild mountain apple forests (Malus sieversii) along ancient Silk Road passes in modern Kazakhstan.",
    fruitSlugs: ["apple"],
  },
  {
    id: "east-asia",
    name: "East Asia & The Yangtze River Valley",
    shortLabel: "East Asia",
    icon: "🎋",
    description: "Neolithic Chinese river basins where stone fruits were domesticated over 4,000 years ago.",
    fruitSlugs: ["peach", "orange"],
  },
  {
    id: "south-asia",
    name: "South Asia & The Subtropical Foothills",
    shortLabel: "South Asia",
    icon: "🛕",
    description: "Vedic river floodplains and dense subtropical rainforest canopies of the Indian subcontinent.",
    fruitSlugs: ["mango"],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia & Indo-Malayan Archipelago",
    shortLabel: "Southeast Asia",
    icon: "🌴",
    description: "Equatorial rainforest canopies and volcanic islands, birthplace of wild diploid seeded bananas and ancestral citrus.",
    fruitSlugs: ["banana", "orange"],
  },
  {
    id: "north-america",
    name: "North America & Boreal Acidic Heath",
    shortLabel: "North America",
    icon: "🌲",
    description: "Acidic, glaciated peatlands, pine barrens, and native Algonquian foraging territories.",
    fruitSlugs: ["blueberry", "strawberry"],
  },
  {
    id: "south-america",
    name: "South America & The Pacific Coastal Valleys",
    shortLabel: "South America",
    icon: "🌋",
    description: "Chilean coastal sands and Andean slopes where large-fruited Fragaria chiloensis was cultivated by the Mapuche people.",
    fruitSlugs: ["strawberry"],
  },
  {
    id: "northeast-africa",
    name: "Northeast Africa & The Nile River Basin",
    shortLabel: "Northeast Africa",
    icon: "🏛️",
    description: "The Sudanese Sahel and ancient Egyptian Pharaonic tomb sites where non-bitter Kordofan watermelons were selected.",
    fruitSlugs: ["watermelon"],
  },
];

export const HISTORICAL_DIASPORA_DOSSIERS: Record<
  string,
  {
    ancestralTaxon: string;
    archaeologicalEpoch: string;
    tradeCorridor: string;
    diasporaNarrative: string;
  }
> = {
  apple: {
    ancestralTaxon: "Malus sieversii (Wild Tian Shan Apple)",
    archaeologicalEpoch: "c. 8,000–4,000 BCE",
    tradeCorridor: "The Great Silk Road & Trans-Eurasian Caravan Trails",
    diasporaNarrative:
      "Originating in the wild apple forests flanking Almaty ('Father of Apples') in Kazakhstan, sweet wild apples were dispersed westward by horses and travelers along the Silk Road, cross-hybridizing with European crabapples (Malus sylvestris) to form the modern domestic dessert apple.",
  },
  banana: {
    ancestralTaxon: "Musa acuminata × Musa balbisiana",
    archaeologicalEpoch: "c. 5,000 BCE (Kuk Swamp, New Guinea)",
    tradeCorridor: "Austronesian Sea Voyaging & Trans-Indian Ocean Trade",
    diasporaNarrative:
      "Austronesian maritime voyagers transported seedless parthenocarpic banana suckers across the Indian Ocean to Madagascar and East Africa around 500 BCE. Islamic agricultural expansion later introduced bananas to the Mediterranean basin, followed by Portuguese transport to the Canary Islands and the Caribbean.",
  },
  blueberry: {
    ancestralTaxon: "Vaccinium corymbosum (Highbush Blueberry)",
    archaeologicalEpoch: "Pre-Columbian Indigenous Foraging; 1916 CE Modern Domestication",
    tradeCorridor: "Algonquian Indigenous Preserves & Modern Agronomic Breeding",
    diasporaNarrative:
      "Gathered for millennia by indigenous North American peoples who dried berries with deer meat into nutrient-dense pemmican. Blueberries resisted European commercial farming until 1916, when Elizabeth White and USDA botanist Frederick Coville unraveled their obligatory symbiotic association with mycorrhizal soil fungi in the New Jersey pine barrens.",
  },
  mango: {
    ancestralTaxon: "Mangifera indica",
    archaeologicalEpoch: "c. 2,000 BCE (Vedic Period)",
    tradeCorridor: "Buddhist Monastic Pilgrimages & Portuguese Maritime Navigation",
    diasporaNarrative:
      "Revered in ancient Sanskrit hymns and associated with Gautama Buddha, who meditated in tranquil mango groves. Buddhist monks distributed seedlings throughout East Asia by the 4th century BCE. In the 16th century, Portuguese traders introduced Indian grafted cultivars to Brazil and Mozambique.",
  },
  orange: {
    ancestralTaxon: "Citrus reticulata × Citrus maxima (Mandarin × Pummelo)",
    archaeologicalEpoch: "c. 2,500 BCE (South China & Assam)",
    tradeCorridor: "Moorish Andalusian Agronomy & Maritime Silk Routes",
    diasporaNarrative:
      "Originating in the subtropical river valleys of southern China and Northeast India, sweet oranges were systematically cultivated in Imperial Chinese orchards. Arab traders carried the fruit to Moorish Spain and Sicily in the 10th century, where sophisticated gravity-fed acequia irrigation networks established the Mediterranean citrus belt.",
  },
  peach: {
    ancestralTaxon: "Prunus persica",
    archaeologicalEpoch: "c. 6,000–4,000 BCE (Zhejiang & Yangtze Valley)",
    tradeCorridor: "Ancient Silk Road & Persian Imperial Orchards",
    diasporaNarrative:
      "Domesticated from wild stone fruit progenitors in China's lower Yangtze River basin, where peach stones have been recovered from Neolithic archaeological digs. The fruit traveled through the Silk Road to the Persian Empire, where Alexander the Great encountered it and introduced it to Greece as the 'Persian Apple' (persikon).",
  },
  strawberry: {
    ancestralTaxon: "Fragaria virginiana × Fragaria chiloensis",
    archaeologicalEpoch: "1750s CE (Botanical Garden of Versailles / Brittany)",
    tradeCorridor: "Trans-Atlantic French Agronomic Hybridization",
    diasporaNarrative:
      "Modern garden strawberries did not exist in antiquity. In 1714, French spy and military engineer Amédée-François Frézier smuggled live specimens of the giant Chilean beach strawberry (Fragaria chiloensis) to France. Accidentally planted adjacent to North American scarlet meadow strawberries (Fragaria virginiana) in Brittany, they serendipitously cross-pollinated to spawn the modern octoploid hybrid.",
  },
  watermelon: {
    ancestralTaxon: "Citrullus lanatus (Kordofan Egusi Subspecies)",
    archaeologicalEpoch: "c. 2,300 BCE (Old Kingdom Saqqara, Egypt)",
    tradeCorridor: "Nile Basin Caravans & Trans-Saharan Oasis Networks",
    diasporaNarrative:
      "Depicted in ancient Egyptian tomb frescoes as large oblong fruit served at royal funerary feasts, watermelons served as living natural canteens for trans-Saharan desert caravans. Genetic sequencing has confirmed modern watermelons descend from non-bitter white-fleshed wild melons in Kordofan, Sudan, which were traded into the Roman and Byzantine empires.",
  },
};

export const WorldAtlasExplorer: React.FC<WorldAtlasExplorerProps> = ({
  allFruits,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>("blueberry");
  const [selectedBiomeId, setSelectedBiomeId] = useState<string>("all");

  const activeBiome = useMemo(
    () =>
      CONTINENTAL_BIOMES.find((b) => b.id === selectedBiomeId) ||
      CONTINENTAL_BIOMES[0],
    [selectedBiomeId]
  );

  // Filter fruits based on active continental biome
  const selectableFruits = useMemo(() => {
    if (selectedBiomeId === "all") return allFruits;
    return allFruits.filter((f) => activeBiome.fruitSlugs.includes(f.slug));
  }, [allFruits, selectedBiomeId, activeBiome]);

  // Current active fruit (fall back if filtered out)
  const currentFruit = useMemo(() => {
    const found = allFruits.find((f) => f.slug === selectedSlug);
    if (found && selectableFruits.some((f) => f.slug === selectedSlug)) {
      return found;
    }
    return selectableFruits[0] || allFruits[0];
  }, [allFruits, selectedSlug, selectableFruits]);

  const diasporaDossier =
    HISTORICAL_DIASPORA_DOSSIERS[currentFruit.slug] || {
      ancestralTaxon: `${currentFruit.taxonomy.genus ?? ""} ${currentFruit.taxonomy.species ?? ""}`,
      archaeologicalEpoch: "Ancient Holocene",
      tradeCorridor: "Global Historical Trade Networks",
      diasporaNarrative: currentFruit.origin.description,
    };

  return (
    <div className="space-y-16">
      {/* ─── SECTION 1: INTERACTIVE CONTINENTAL FILTER & FRUIT SELECTOR ─── */}
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Cartographic Exploration
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Geographic Provenance & Diaspora
            </h2>
            <p className="font-editorial text-zinc-400 text-sm mt-1 max-w-2xl">
              Trace the evolutionary cradle, ancestral species, and ancient trade routes that dispersed wild fruits across the globe.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-right">
              <span className="block font-display text-lg font-bold text-white leading-none">
                {selectableFruits.length}{" "}
                <span className="text-zinc-500 font-ui text-xs font-normal">
                  / {allFruits.length}
                </span>
              </span>
              <span className="font-ui text-[11px] text-zinc-400">
                Mapped Provenances
              </span>
            </div>
          </div>
        </div>

        {/* Continental Biome Tabs */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Select Evolutionary Biome / Continent:
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-ui text-xs">
            {CONTINENTAL_BIOMES.map((biome) => {
              const isSelected = biome.id === selectedBiomeId;
              return (
                <button
                  key={biome.id}
                  type="button"
                  onClick={() => {
                    setSelectedBiomeId(biome.id);
                    // If current fruit not in this biome, select first fruit of biome
                    if (
                      biome.id !== "all" &&
                      !biome.fruitSlugs.includes(currentFruit.slug)
                    ) {
                      const firstSlug = biome.fruitSlugs[0];
                      if (firstSlug) setSelectedSlug(firstSlug);
                    }
                  }}
                  className={`shrink-0 px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-500"
                      : "bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <span>{biome.icon}</span>
                  <span>{biome.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Biome Description Callout */}
        <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/40 text-xs font-ui text-zinc-400">
          <strong className="text-zinc-200">{activeBiome.name}:</strong>{" "}
          {activeBiome.description}
        </div>

        {/* Fruit Selector Chips */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Select Fruit Monograph:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {selectableFruits.map((fruit) => {
              const isSelected = fruit.slug === currentFruit.slug;
              return (
                <button
                  key={fruit.id}
                  type="button"
                  onClick={() => setSelectedSlug(fruit.slug)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center gap-2 ${
                    isSelected
                      ? "bg-zinc-900 border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg"
                      : "bg-zinc-950/70 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                    <img
                      src={fruit.images.hero.src}
                      alt={fruit.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "72% center" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`block font-display text-xs font-bold truncate ${
                        isSelected ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {fruit.name}
                    </span>
                    <span className="block font-editorial italic text-[10px] text-zinc-500 truncate">
                      {fruit.origin.region.split("(")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: INTERACTIVE GEOGRAPHIC ORIGIN MAP ─── */}
      <section aria-labelledby="map-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Cartographic Projection
            </span>
            <h3
              id="map-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
            >
              {currentFruit.name}: Native Provenance & Modern Centers
            </h3>
          </div>
          <div className="flex items-center gap-2 font-ui text-xs text-zinc-400">
            <span>Coordinates:</span>
            <span className="font-mono text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              {currentFruit.origin.coordinates[0]}° N,{" "}
              {currentFruit.origin.coordinates[1]}° E
            </span>
          </div>
        </div>

        {/* Dynamic Interactive OriginMap Component */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl">
          <OriginMap
            originCoordinates={currentFruit.origin.coordinates}
            originRegion={currentFruit.origin.region}
            grownRegions={currentFruit.origin.grownTodayRegions}
            themeColor={currentFruit.theme.primary}
          />
        </div>
      </section>

      {/* ─── SECTION 3: DIASPORA & EVOLUTIONARY DOSSIER ─── */}
      <section
        aria-labelledby="dossier-heading"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left 8 Cols: Detailed Narrative */}
        <div className="lg:col-span-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentFruit.theme.primary }}
            />
            <h4
              id="dossier-heading"
              className="font-ui text-xs font-bold uppercase tracking-wider text-zinc-300"
            >
              Botanical Diaspora & Historical Migration Corridor
            </h4>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              The Journey of {currentFruit.name}
            </h3>
            <p className="font-editorial text-zinc-300 text-lg leading-relaxed">
              {diasporaDossier.diasporaNarrative}
            </p>
          </div>

          {/* Structured Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80 font-ui text-xs">
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Ancestral Wild Progenitor
              </span>
              <p className="font-editorial italic text-sm text-zinc-200">
                {diasporaDossier.ancestralTaxon}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Archaeological Epoch
              </span>
              <p className="font-medium text-sm text-zinc-200">
                {diasporaDossier.archaeologicalEpoch}
              </p>
            </div>

            <div className="sm:col-span-2 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Primary Trade Route & Dispersal Vector
              </span>
              <p className="font-medium text-sm text-indigo-300">
                {diasporaDossier.tradeCorridor}
              </p>
            </div>
          </div>

          {/* Monograph Action */}
          <div className="pt-2">
            <a
              href={`/fruit/${currentFruit.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore Complete {currentFruit.name} Monograph</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right 4 Cols: Modern Agricultural Cultivation Centers */}
        <div className="lg:col-span-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="space-y-1">
            <span className="font-ui text-xs uppercase font-semibold tracking-wider text-amber-400">
              Modern Agronomy
            </span>
            <h4 className="font-display text-xl font-bold text-white">
              Leading Commercial Producers
            </h4>
            <p className="font-editorial text-xs text-zinc-400">
              Countries cultivating {currentFruit.name} at commercial export scale today.
            </p>
          </div>

          {/* Production Countries Tag Cloud */}
          <div className="flex flex-wrap gap-2">
            {currentFruit.origin.grownTodayRegions?.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-ui text-zinc-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{country}</span>
              </span>
            ))}
          </div>

          {/* Botanical Provenance Disclaimer */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/60 text-[11px] font-ui text-zinc-500 space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <span>🌱</span>
              <span>Ecological Niche</span>
            </div>
            <p className="leading-relaxed">
              Native botanical ranges represent regions of speciation where genetic diversity is highest. Modern cultivation reflects agro-climatic transferability.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CROSS-CATALOG PROVENANCE MATRIX ─── */}
      <section aria-labelledby="all-provenance-heading" className="space-y-6">
        <div>
          <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
            Catalog Provenance Matrix
          </span>
          <h3
            id="all-provenance-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
          >
            Evolutionary Birthplaces Across All Monographs
          </h3>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80 font-ui text-[11px] uppercase tracking-wider text-zinc-400">
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Fruit
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Native Provenance
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Coordinates
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Key Cultivation Hubs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs font-ui">
                {allFruits.map((fruit) => {
                  const isSelected = fruit.slug === currentFruit.slug;
                  return (
                    <tr
                      key={fruit.id}
                      onClick={() => setSelectedSlug(fruit.slug)}
                      className={`hover:bg-zinc-900/60 transition-colors cursor-pointer ${
                        isSelected ? "bg-indigo-950/30" : ""
                      }`}
                    >
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                            <img
                              src={fruit.images.hero.src}
                              alt={fruit.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "72% center" }}
                            />
                          </div>
                          <div>
                            <span className="font-display font-bold text-white block">
                              {fruit.name}
                            </span>
                            <span className="font-editorial italic text-zinc-500 text-[11px] block">
                              {fruit.taxonomy.species}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-zinc-300">
                        {fruit.origin.region}
                      </td>
                      <td className="py-3 px-6 font-mono text-[11px] text-zinc-400">
                        {fruit.origin.coordinates[0]}° N,{" "}
                        {fruit.origin.coordinates[1]}° E
                      </td>
                      <td className="py-3 px-6 text-zinc-400">
                        {fruit.origin.grownTodayRegions?.slice(0, 3).join(", ")}
                        {(fruit.origin.grownTodayRegions?.length ?? 0) > 3 &&
                          "..."}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldAtlasExplorer;
