/**
 * Multi-dimensional search engine for Fruitypedia.
 * Indexes fruits across taxonomy, nutrients, biogeographic origin, cultivars, sensory notes, and harvest periods.
 *
 * @see Fruitypedia_Project_Plan §10, §11, §36 (Phase 3)
 */
import type { Fruit, Category } from "../types/fruit";
import { nutrientKeyToLabel } from "./helpers";

export interface FruitSearchResult {
  fruit: Fruit;
  score: number;
  matchType:
    | "name"
    | "taxonomy"
    | "nickname"
    | "nutrient"
    | "origin"
    | "cultivar"
    | "taste"
    | "season"
    | "general";
  matchReason?: string;
  badgeText?: string;
  badgeColor?: string;
}

export interface CategorySearchResult {
  category: Category;
  score: number;
  matchReason?: string;
}

export interface SearchResults {
  fruits: FruitSearchResult[];
  categories: CategorySearchResult[];
  totalMatches: number;
}

/**
 * Searches the catalog of fruits and categories given a user query.
 */
export function searchCatalog(
  query: string,
  fruits: Fruit[],
  categories: Category[]
): SearchResults {
  const clean = query.toLowerCase().trim();

  if (!clean) {
    return {
      fruits: fruits.map((fruit) => ({
        fruit,
        score: 0,
        matchType: "general",
      })),
      categories: categories.map((category) => ({
        category,
        score: 0,
      })),
      totalMatches: fruits.length + categories.length,
    };
  }

  const fruitResults: FruitSearchResult[] = [];

  for (const f of fruits) {
    const nameLower = f.name.toLowerCase();
    const speciesLower = f.taxonomy.species?.toLowerCase() || "";
    const genusLower = f.taxonomy.genus?.toLowerCase() || "";
    const familyLower = f.taxonomy.family?.toLowerCase() || "";
    const nicknameLower = f.editorial.nickname?.toLowerCase() || "";
    const taglineLower = f.editorial.tagline?.toLowerCase() || "";

    let bestScore = 0;
    let matchType: FruitSearchResult["matchType"] = "general";
    let matchReason = "";
    let badgeText = "";
    const badgeColor = f.theme.primary;

    // 1. Exact or prefix name match
    if (nameLower === clean) {
      bestScore = 100;
      matchType = "name";
      badgeText = "Exact Match";
    } else if (nameLower.startsWith(clean)) {
      bestScore = 85;
      matchType = "name";
      badgeText = "Name";
    } else if (nameLower.includes(clean)) {
      bestScore = 75;
      matchType = "name";
      badgeText = "Name";
    }

    // 2. Taxonomy matches
    if (bestScore < 70) {
      if (speciesLower.includes(clean) || genusLower.includes(clean)) {
        bestScore = 70;
        matchType = "taxonomy";
        matchReason = `${f.taxonomy.genus} ${f.taxonomy.species}`;
        badgeText = "Species";
      } else if (familyLower.includes(clean)) {
        bestScore = 65;
        matchType = "taxonomy";
        matchReason = `Family: ${f.taxonomy.family}`;
        badgeText = "Family";
      }
    }

    // 3. Poetic epithet / Indian heritage nickname
    if (bestScore < 68 && nicknameLower.includes(clean)) {
      bestScore = 68;
      matchType = "nickname";
      matchReason = f.editorial.nickname ?? "";
      badgeText = "Epithet";
    }

    // 4. Cultivars / Varieties
    if (bestScore < 64 && f.varieties && f.varieties.length > 0) {
      for (const v of f.varieties) {
        if (v.name.toLowerCase().includes(clean)) {
          bestScore = 64;
          matchType = "cultivar";
          matchReason = `Cultivar: ${v.name}`;
          badgeText = "Cultivar";
          break;
        }
      }
    }

    // 5. Nutrient inquiries
    if (bestScore < 62) {
      const isVitCQuery =
        clean.includes("vitamin c") ||
        clean === "vit c" ||
        clean === "vit-c" ||
        clean === "ascorbic" ||
        clean === "c";
      if (isVitCQuery && f.nutrition.nutrients.vitaminC) {
        const vitC = f.nutrition.nutrients.vitaminC;
        bestScore = 62 + (vitC.amount > 30 ? 5 : 0);
        matchType = "nutrient";
        matchReason = `Vitamin C: ${vitC.amount} mg (${vitC.dailyValuePercent || Math.round((vitC.amount / 90) * 100)}% DV)`;
        badgeText = "Vitamin C";
      } else if (
        (clean.includes("potassium") || clean === "k") &&
        f.nutrition.nutrients.potassium
      ) {
        const pot = f.nutrition.nutrients.potassium;
        bestScore = 61;
        matchType = "nutrient";
        matchReason = `Potassium: ${pot.amount} mg (${pot.dailyValuePercent || Math.round((pot.amount / 4700) * 100)}% DV)`;
        badgeText = "Potassium";
      } else if (clean.includes("fiber") || clean.includes("fibre")) {
        const fiber = f.nutrition.nutrients.fiber;
        if (fiber) {
          bestScore = 61;
          matchType = "nutrient";
          matchReason = `Dietary Fiber: ${fiber.amount} g / 100g`;
          badgeText = "Fiber";
        }
      } else if (
        clean.includes("water") ||
        clean.includes("hydration") ||
        clean.includes("hydrate")
      ) {
        const water = f.nutrition.nutrients.water;
        if (water) {
          bestScore = 61;
          matchType = "nutrient";
          matchReason = `Hydration: ${water.amount}% water`;
          badgeText = "Hydration";
        }
      } else if (
        clean.includes("sugar") ||
        clean.includes("fructose") ||
        clean.includes("glucose")
      ) {
        const sugars = f.nutrition.nutrients.totalSugars || f.nutrition.nutrients.sugars;
        if (sugars) {
          bestScore = 60;
          matchType = "nutrient";
          matchReason = `Natural Sugars: ${sugars.amount} g / 100g`;
          badgeText = "Sugars";
        }
      } else if (
        clean.includes("calor") ||
        clean.includes("energy") ||
        clean.includes("kcal")
      ) {
        bestScore = 58;
        matchType = "nutrient";
        matchReason = `Caloric Density: ${f.nutrition.calories.amount} kcal / 100g`;
        badgeText = "Energy";
      } else {
        // Check other micronutrients (calcium, magnesium, iron, folate, etc.)
        for (const [key, nut] of Object.entries(f.nutrition.nutrients)) {
          const label = nutrientKeyToLabel(key).toLowerCase();
          if (key.toLowerCase().includes(clean) || label.includes(clean)) {
            bestScore = 58;
            matchType = "nutrient";
            matchReason = `${nutrientKeyToLabel(key)}: ${nut.amount} ${nut.unit}`;
            badgeText = nutrientKeyToLabel(key);
            break;
          }
        }
      }
    }

    // 6. Biogeographic origin
    if (bestScore < 56) {
      const originRegionLower = (f.origin.region || "").toLowerCase();
      const originDescLower = (f.origin.description || "").toLowerCase();
      const grownToday = (f.origin.grownTodayRegions || []).map((r: string) => r.toLowerCase());

      if (originRegionLower.includes(clean)) {
        bestScore = 56;
        matchType = "origin";
        matchReason = `Origin: ${f.origin.region}`;
        badgeText = "Origin";
      } else if (originDescLower.includes(clean)) {
        bestScore = 55;
        matchType = "origin";
        matchReason = `Origin: ${f.origin.region}`;
        badgeText = "Origin";
      } else if (grownToday.length > 0 && grownToday.some((c: string) => c.includes(clean))) {
        const matched = f.origin.grownTodayRegions?.find((c: string) =>
          c.toLowerCase().includes(clean)
        );
        if (matched) {
          bestScore = 54;
          matchType = "origin";
          matchReason = `Cultivated In: ${matched}`;
          badgeText = "Cultivation";
        }
      }
    }

    // 7. Sensory & Flavor Profile
    if (bestScore < 52) {
      const notesLower = (f.tasteProfile.notes || "").toLowerCase();
      if (notesLower.includes(clean)) {
        bestScore = 52;
        matchType = "taste";
        matchReason = f.tasteProfile.notes.length > 80
          ? `${f.tasteProfile.notes.slice(0, 80)}...`
          : f.tasteProfile.notes;
        badgeText = "Sensory";
      }
    }

    // 8. General Tagline or Hero Description
    if (bestScore < 45) {
      if (taglineLower.includes(clean)) {
        bestScore = 45;
        matchType = "general";
        matchReason = f.editorial.tagline ?? "";
        badgeText = "Monograph";
      } else if (f.editorial.heroDescription.toLowerCase().includes(clean)) {
        bestScore = 40;
        matchType = "general";
        matchReason = f.editorial.heroDescription.slice(0, 80) + "...";
        badgeText = "Monograph";
      }
    }

    if (bestScore > 0) {
      fruitResults.push({
        fruit: f,
        score: bestScore,
        matchType,
        matchReason,
        badgeText,
        badgeColor,
      });
    }
  }

  // Sort fruits by descending score
  fruitResults.sort((a, b) => b.score - a.score);

  // Search Categories
  const categoryResults: CategorySearchResult[] = [];
  for (const c of categories) {
    const cId = c.id.toLowerCase();
    const cName = c.name.toLowerCase();
    const cDesc = c.description.toLowerCase();
    let cScore = 0;
    let matchReason = "";

    if (cId === clean || cName === clean) {
      cScore = 90;
      matchReason = "Exact Category Match";
    } else if (cId.includes(clean) || clean.includes(cId) || cName.includes(clean)) {
      cScore = 75;
      matchReason = c.name;
    } else if (cDesc.includes(clean)) {
      cScore = 50;
      matchReason = c.description;
    }

    if (cScore > 0) {
      categoryResults.push({
        category: c,
        score: cScore,
        matchReason,
      });
    }
  }

  categoryResults.sort((a, b) => b.score - a.score);

  return {
    fruits: fruitResults,
    categories: categoryResults,
    totalMatches: fruitResults.length + categoryResults.length,
  };
}
