import { describe, it, expect } from "vitest";
import { allFruits } from "../data";

describe("Fruit Comparison Analytical Logic", () => {
  const strawberry = allFruits.find((f) => f.slug === "strawberry");
  const blueberry = allFruits.find((f) => f.slug === "blueberry");
  const watermelon = allFruits.find((f) => f.slug === "watermelon");
  const orange = allFruits.find((f) => f.slug === "orange");

  it("ensures all 50 production fruits have valid comparison data", () => {
    expect(allFruits.length).toBe(50);
    for (const fruit of allFruits) {
      expect(fruit.nutrition.calories.amount).toBeGreaterThan(0);
      expect(fruit.tasteProfile.sweetness.value).toBeGreaterThanOrEqual(0);
      expect(fruit.tasteProfile.sweetness.value).toBeLessThanOrEqual(10);
      expect(fruit.tasteProfile.acidity.value).toBeGreaterThanOrEqual(0);
      expect(fruit.tasteProfile.acidity.value).toBeLessThanOrEqual(10);
      expect(fruit.taxonomy.family).toBeTruthy();
      expect(fruit.season.length).toBeGreaterThan(0);
    }
  });

  it("calculates accurate caloric differential between strawberry and blueberry", () => {
    expect(strawberry).toBeDefined();
    expect(blueberry).toBeDefined();
    if (!strawberry || !blueberry) return;

    const calA = strawberry.nutrition.calories.amount; // 32
    const calB = blueberry.nutrition.calories.amount; // 57
    expect(calA).toBe(32);
    expect(calB).toBe(57);

    const diff = Math.abs(calA - calB);
    const pctDiff = Math.round((diff / Math.max(calA, calB)) * 100);
    expect(pctDiff).toBe(44); // 44% fewer calories
  });

  it("verifies vitamin C density dominance for strawberry vs blueberry", () => {
    if (!strawberry || !blueberry) return;
    const vitA = strawberry.nutrition.nutrients.vitaminC?.amount ?? 0;
    const vitB = blueberry.nutrition.nutrients.vitaminC?.amount ?? 0;

    expect(vitA).toBe(58.8);
    expect(vitB).toBe(9.7);
    expect(vitA).toBeGreaterThan(vitB);

    const ratio = (vitA / vitB).toFixed(1);
    expect(parseFloat(ratio)).toBeGreaterThan(5); // over 5x more Vitamin C
  });

  it("verifies sensory taste profiles are comparable on 10-point scale", () => {
    if (!orange || !watermelon) return;
    expect(orange.tasteProfile.sweetness.value).toBeDefined();
    expect(orange.tasteProfile.acidity.value).toBeDefined();
    expect(watermelon.tasteProfile.sweetness.value).toBeDefined();
    expect(watermelon.tasteProfile.acidity.value).toBeDefined();
  });

  it("verifies harvest month timelines overlap check", () => {
    if (!strawberry || !blueberry) return;
    const monthsA = strawberry.season[0]?.months || [];
    const monthsB = blueberry.season[0]?.months || [];
    const overlap = monthsA.filter((m) => monthsB.includes(m));

    expect(overlap.length).toBeGreaterThan(0);
    // Summer months should overlap
    expect(overlap).toContain(6); // June
    expect(overlap).toContain(7); // July
  });
});
