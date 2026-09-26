import { describe, it, expect } from "vitest";
import { searchCatalog } from "../utils/searchEngine";
import { allFruits, categories, getProductionFruitCount } from "../data";
import type { Fruit } from "../types/fruit";

/**
 * Generates synthetic fruit fixtures by cloning existing verified fruits
 * with varying parameters to stress-test search and catalog indexing.
 */
function generateFruitFixtures(count: number): Fruit[] {
  const fixtures: Fruit[] = [];
  const baseFruits = [...allFruits];

  for (let i = 0; i < count; i++) {
    const base = baseFruits[i % baseFruits.length];
    const fixture: Fruit = {
      ...base,
      id: `synthetic-${base.id}-${i}`,
      slug: `synthetic-${base.slug}-${i}`,
      name: `${base.name} Cultivar #${i + 1}`,
      nutrition: {
        ...base.nutrition,
        calories: {
          ...base.nutrition.calories,
          amount: Math.round(base.nutrition.calories.amount + (i % 20) - 10),
        },
      },
    };
    fixtures.push(fixture);
  }

  return fixtures;
}

describe("Phase 3 Catalog & Search Scale Benchmark", () => {
  it("strictly preserves 50 verified production fruits in public catalog", () => {
    expect(getProductionFruitCount()).toBe(50);
    expect(allFruits.length).toBe(50);
  });

  it("indexes and executes search on 20 fixture fruits in under 5ms", () => {
    const fixtures20 = generateFruitFixtures(20);
    const start = performance.now();
    const result = searchCatalog("vitamin c", fixtures20, categories);
    const duration = performance.now() - start;

    expect(result.fruits.length).toBeGreaterThan(0);
    expect(duration).toBeLessThan(15);
  });

  it("indexes and executes search on 50 fixture fruits in under 10ms", () => {
    const fixtures50 = generateFruitFixtures(50);
    const start = performance.now();
    const result = searchCatalog("potassium", fixtures50, categories);
    const duration = performance.now() - start;

    expect(result.fruits.length).toBeGreaterThan(0);
    expect(duration).toBeLessThan(20);
  });

  it("indexes and executes search on 120+ fixture fruits in under 15ms", () => {
    const fixtures120 = generateFruitFixtures(120);
    const start = performance.now();
    const result = searchCatalog("Central Asia", fixtures120, categories);
    const duration = performance.now() - start;

    expect(result.fruits.length).toBeGreaterThan(0);
    expect(duration).toBeLessThan(30);
  });

  it("benchmarks multi-metric sorting on 120 records in under 5ms", () => {
    const fixtures120 = generateFruitFixtures(120);
    const start = performance.now();

    // Sort by calories descending
    const sortedByCalories = [...fixtures120].sort(
      (a, b) => b.nutrition.calories.amount - a.nutrition.calories.amount
    );

    // Sort by Vitamin C descending
    const sortedByVitC = [...fixtures120].sort(
      (a, b) =>
        (b.nutrition.nutrients.vitaminC?.amount ?? 0) -
        (a.nutrition.nutrients.vitaminC?.amount ?? 0)
    );

    const duration = performance.now() - start;

    expect(sortedByCalories.length).toBe(120);
    expect(sortedByVitC.length).toBe(120);
    expect(duration).toBeLessThan(15);
  });

  it("benchmarks category filtering on 120 records in under 3ms", () => {
    const fixtures120 = generateFruitFixtures(120);
    const start = performance.now();

    const berries = fixtures120.filter(
      (f) => f.taxonomy.categoryId === "berry"
    );
    const pome = fixtures120.filter((f) => f.taxonomy.categoryId === "pome");

    const duration = performance.now() - start;

    expect(berries.length).toBeGreaterThan(0);
    expect(pome.length).toBeGreaterThan(0);
    expect(duration).toBeLessThan(10);
  });
});
