/**
 * Fruit of the Day — deterministic client-side resolution.
 *
 * Computes from the current UTC calendar date and the ordered
 * production fruit list, so it never goes stale between deployments.
 *
 * @see Fruitypedia_Project_Plan §24
 */

import type { Fruit } from "@/types";

/**
 * Get the fruit of the day based on the current UTC date.
 * Uses a simple day-of-year modulus over the fruit list length.
 */
export function getFruitOfTheDay(fruits: Fruit[]): Fruit | undefined {
  if (fruits.length === 0) return undefined;

  const now = new Date();
  const start = new Date(now.getUTCFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return fruits[dayOfYear % fruits.length];
}
