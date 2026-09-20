/**
 * Fruitypedia data layer barrel export.
 * All fruit data, categories, and sources are accessed through this module.
 */

import { blueberry } from "./fruits/blueberry";
import { strawberry } from "./fruits/strawberry";
import { orange } from "./fruits/orange";
import { mango } from "./fruits/mango";
import { banana } from "./fruits/banana";
import { peach } from "./fruits/peach";
import { watermelon } from "./fruits/watermelon";
import { apple } from "./fruits/apple";
import { categories } from "./categories";
import { sources, getSourceById, validateSourceIds } from "./sources";
import type { Fruit, Category, Source } from "@/types";

/** All production fruits in the catalog. */
export const allFruits: Fruit[] = [
  blueberry,
  strawberry,
  orange,
  mango,
  banana,
  peach,
  watermelon,
  apple,
];

/** Get a fruit by its slug. */
export function getFruitBySlug(slug: string): Fruit | undefined {
  return allFruits.find((f) => f.slug === slug);
}

/** Get all fruit slugs (for getStaticPaths). */
export function getAllFruitSlugs(): string[] {
  return allFruits.map((f) => f.slug);
}

/** Get fruits by category. */
export function getFruitsByCategory(categoryId: string): Fruit[] {
  return allFruits.filter((f) => f.taxonomy.categoryId === categoryId);
}

/** Get the production fruit count (always truthful). */
export function getProductionFruitCount(): number {
  return allFruits.filter((f) => f.review.status !== "draft").length;
}

export { categories, sources, getSourceById, validateSourceIds };
export type { Fruit, Category, Source };
