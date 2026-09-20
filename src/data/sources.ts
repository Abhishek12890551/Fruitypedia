/**
 * Source registry for Fruitypedia.
 * All factual claims trace back to sources defined here.
 *
 * @see Fruitypedia_Project_Plan §19.4
 */

import type { Source } from "@/types";

export const sources: Source[] = [
  {
    id: "usda-fdc-watermelon",
    title: "Watermelon, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/167765/nutrients",
    accessedAt: "2026-09-20",
    referenceId: "167765",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-apple",
    title: "Apples, raw, with skin — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/171688/nutrients",
    accessedAt: "2026-09-20",
    referenceId: "171688",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-peach",
    title: "Peaches, yellow, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/169928/nutrients",
    accessedAt: "2026-09-20",
    referenceId: "169928",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-banana",
    title: "Bananas, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/173944/nutrients",
    accessedAt: "2026-09-19",
    referenceId: "173944",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-mango",
    title: "Mangos, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/169910/nutrients",
    accessedAt: "2026-09-19",
    referenceId: "169910",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-orange",
    title: "Oranges, raw, all commercial varieties — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/169097/nutrients",
    accessedAt: "2026-09-19",
    referenceId: "169097",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-strawberry",
    title: "Strawberries, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/167762/nutrients",
    accessedAt: "2026-09-19",
    referenceId: "167762",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc-blueberry",
    title: "Blueberries, raw — FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/food-details/171711/nutrients",
    accessedAt: "2026-09-18",
    referenceId: "171711",
    edition: "SR Legacy",
  },
  {
    id: "usda-fdc",
    title: "FoodData Central",
    publisher: "U.S. Department of Agriculture",
    url: "https://fdc.nal.usda.gov/",
    accessedAt: "2026-09-18",
    edition: "Foundation Foods / SR Legacy",
  },
  {
    id: "fda-daily-values",
    title: "Daily Value on the Nutrition and Supplement Facts Labels",
    publisher: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
    accessedAt: "2026-09-18",
  },
  {
    id: "editorial-sensory-methodology",
    title: "Fruitypedia Taste Scoring Methodology",
    publisher: "Fruitypedia Editorial",
    url: "/about#methodology",
    accessedAt: "2026-09-18",
  },
];

/** Look up a source by its ID. */
export function getSourceById(id: string): Source | undefined {
  return sources.find((s) => s.id === id);
}

/** Validate that all referenced source IDs exist in the registry. */
export function validateSourceIds(ids: string[]): { valid: boolean; missing: string[] } {
  const known = new Set(sources.map((s) => s.id));
  const missing = ids.filter((id) => !known.has(id));
  return { valid: missing.length === 0, missing };
}
