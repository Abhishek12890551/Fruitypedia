import { describe, it, expect } from "vitest";
import { searchCatalog } from "../utils/searchEngine";
import { allFruits, categories } from "../data";

describe("Fruitypedia Search Engine", () => {
  it("returns all fruits and categories on empty query", () => {
    const results = searchCatalog("", allFruits, categories);
    expect(results.fruits.length).toBe(allFruits.length);
    expect(results.categories.length).toBe(categories.length);
    expect(results.totalMatches).toBe(allFruits.length + categories.length);
  });

  it("finds fruits by common name with top priority", () => {
    const results = searchCatalog("Apple", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    expect(results.fruits[0].fruit.id).toBe("apple");
    expect(results.fruits[0].score).toBe(100);
    expect(results.fruits[0].matchType).toBe("name");
  });

  it("finds fruits by botanical binomial (species/genus)", () => {
    const results = searchCatalog("Citrullus", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    expect(results.fruits[0].fruit.id).toBe("watermelon");
    expect(results.fruits[0].matchType).toBe("taxonomy");
    expect(results.fruits[0].matchReason).toContain("Citrullus lanatus");
  });

  it("finds fruits by family (e.g. Rosaceae)", () => {
    const results = searchCatalog("Rosaceae", allFruits, categories);
    const fruitIds = results.fruits.map((r) => r.fruit.id);
    // Apple, Strawberry, Peach belong to Rosaceae
    expect(fruitIds).toContain("apple");
    expect(fruitIds).toContain("strawberry");
    expect(fruitIds).toContain("peach");
  });

  it("finds fruits by nutrient inquiries (Vitamin C)", () => {
    const results = searchCatalog("Vitamin C", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    const topMatch = results.fruits[0];
    expect(topMatch.matchType).toBe("nutrient");
    expect(topMatch.badgeText).toBe("Vitamin C");
    expect(topMatch.matchReason).toContain("Vitamin C:");
  });

  it("finds fruits by potassium inquiry", () => {
    const results = searchCatalog("potassium", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    const bananaMatch = results.fruits.find((r) => r.fruit.id === "banana");
    expect(bananaMatch).toBeDefined();
    expect(bananaMatch?.matchReason).toContain("Potassium");
  });

  it("finds fruits by hydration inquiry", () => {
    const results = searchCatalog("hydration", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    const watermelonMatch = results.fruits.find((r) => r.fruit.id === "watermelon");
    expect(watermelonMatch).toBeDefined();
    expect(watermelonMatch?.matchReason).toContain("Hydration: 91.45% water");
  });

  it("finds fruits by biogeographic origin (Kazakhstan / Central Asia)", () => {
    const results = searchCatalog("Kazakhstan", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    const appleMatch = results.fruits.find((r) => r.fruit.id === "apple");
    expect(appleMatch).toBeDefined();
    expect(appleMatch?.badgeText).toBe("Origin");
  });

  it("finds fruits by cultivar (e.g. Honeycrisp)", () => {
    const results = searchCatalog("Honeycrisp", allFruits, categories);
    expect(results.fruits.length).toBeGreaterThan(0);
    expect(results.fruits[0].fruit.id).toBe("apple");
    expect(results.fruits[0].matchType).toBe("cultivar");
    expect(results.fruits[0].matchReason).toContain("Honeycrisp");
  });

  it("finds categories by category name", () => {
    const results = searchCatalog("Berry", allFruits, categories);
    expect(results.categories.length).toBeGreaterThan(0);
    expect(results.categories[0].category.id).toBe("berry");
  });
});
