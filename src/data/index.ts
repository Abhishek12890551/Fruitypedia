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
import { pomegranate } from "./fruits/pomegranate";
import { avocado } from "./fruits/avocado";
import { fig } from "./fruits/fig";
import { kiwi } from "./fruits/kiwi";
import { dragonfruit } from "./fruits/dragonfruit";
import { guava } from "./fruits/guava";
import { papaya } from "./fruits/papaya";
import { lychee } from "./fruits/lychee";
import { jackfruit } from "./fruits/jackfruit";
import { jamun } from "./fruits/jamun";
import { custardApple } from "./fruits/custard-apple";
import { amla } from "./fruits/amla";
import { pineapple } from "./fruits/pineapple";
import { grape } from "./fruits/grape";
import { lemon } from "./fruits/lemon";
import { cherry } from "./fruits/cherry";
import { coconut } from "./fruits/coconut";
import { plum } from "./fruits/plum";
import { apricot } from "./fruits/apricot";
import { passionfruit } from "./fruits/passionfruit";
import { date } from "./fruits/date";
import { blackberry } from "./fruits/blackberry";
import { raspberry } from "./fruits/raspberry";
import { sapodilla } from "./fruits/sapodilla";
import { bael } from "./fruits/bael";
import { ber } from "./fruits/ber";
import { durian } from "./fruits/durian";
import { mangosteen } from "./fruits/mangosteen";
import { starfruit } from "./fruits/starfruit";
import { pear } from "./fruits/pear";
import { lime } from "./fruits/lime";
import { grapefruit } from "./fruits/grapefruit";
import { mandarin } from "./fruits/mandarin";
import { pomelo } from "./fruits/pomelo";
import { cantaloupe } from "./fruits/cantaloupe";
import { honeydew } from "./fruits/honeydew";
import { galia } from "./fruits/galia";
import { winterMelon } from "./fruits/winter-melon";
import { quince } from "./fruits/quince";
import { asianPear } from "./fruits/asian-pear";
import { loquat } from "./fruits/loquat";
import { nectarine } from "./fruits/nectarine";
import { categories } from "./categories";
import { sources, getSourceById, getSourcesByIds, validateSourceIds } from "./sources";
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
  pomegranate,
  avocado,
  fig,
  kiwi,
  dragonfruit,
  guava,
  papaya,
  lychee,
  jackfruit,
  jamun,
  custardApple,
  amla,
  pineapple,
  grape,
  lemon,
  cherry,
  coconut,
  plum,
  apricot,
  passionfruit,
  date,
  blackberry,
  raspberry,
  sapodilla,
  bael,
  ber,
  durian,
  mangosteen,
  starfruit,
  pear,
  lime,
  grapefruit,
  mandarin,
  pomelo,
  cantaloupe,
  honeydew,
  galia,
  winterMelon,
  quince,
  asianPear,
  loquat,
  nectarine,
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

export { categories, sources, getSourceById, getSourcesByIds, validateSourceIds };
export type { Fruit, Category, Source };
