import { describe, it, expect } from "vitest";
import { allFruits } from "../data";
import {
  NUTRIENT_DEFINITIONS,
  GOAL_PRESETS,
  getFdaDvClassification,
} from "../components/NutritionExplorer";

describe("Phase 4B — Nutrition Explorer Analytics & Daily Values", () => {
  it("defines 12 comprehensive macro and micronutrients", () => {
    expect(NUTRIENT_DEFINITIONS.length).toBe(12);
    const ids = NUTRIENT_DEFINITIONS.map((d) => d.id);
    expect(ids).toContain("vitaminC");
    expect(ids).toContain("fiber");
    expect(ids).toContain("calories");
    expect(ids).toContain("sugars");
    expect(ids).toContain("potassium");
    expect(ids).toContain("water");
    expect(ids).toContain("magnesium");
    expect(ids).toContain("protein");
    expect(ids).toContain("carbs");
    expect(ids).toContain("calcium");
    expect(ids).toContain("iron");
    expect(ids).toContain("vitaminK");
  });

  it("calculates nutrient values safely for all 8 catalog fruits without NaN or exceptions", () => {
    expect(allFruits.length).toBe(8);
    for (const fruit of allFruits) {
      for (const nutrient of NUTRIENT_DEFINITIONS) {
        const val = nutrient.getValue(fruit);
        expect(typeof val).toBe("number");
        expect(isNaN(val)).toBe(false);
        expect(val).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it("correctly ranks Vitamin C champions (Strawberry & Orange)", () => {
    const vitCDef = NUTRIENT_DEFINITIONS.find((d) => d.id === "vitaminC");
    expect(vitCDef).toBeDefined();
    if (!vitCDef) return;

    const ranked = [...allFruits]
      .map((f) => ({ slug: f.slug, val: vitCDef.getValue(f) }))
      .sort((a, b) => b.val - a.val);

    // Strawberry has 58.8mg and Orange has 53.2mg
    expect(ranked[0].slug).toBe("strawberry");
    expect(ranked[0].val).toBe(58.8);
    expect(ranked[1].slug).toBe("orange");
    expect(ranked[1].val).toBe(53.2);
  });

  it("correctly ranks Hydration percentage (Watermelon highest)", () => {
    const waterDef = NUTRIENT_DEFINITIONS.find((d) => d.id === "water");
    expect(waterDef).toBeDefined();
    if (!waterDef) return;

    const ranked = [...allFruits]
      .map((f) => ({ slug: f.slug, val: waterDef.getValue(f) }))
      .sort((a, b) => b.val - a.val);

    expect(ranked[0].slug).toBe("watermelon");
    expect(ranked[0].val).toBeGreaterThanOrEqual(91.0);
  });

  it("enforces FDA 21 CFR 101.54 Daily Value classification thresholds", () => {
    // ≥ 20% DV = High / Excellent Source
    const highTier = getFdaDvClassification(20);
    expect(highTier).not.toBeNull();
    expect(highTier?.tier).toBe("high");
    expect(highTier?.label).toBe("High Source");

    const highTier50 = getFdaDvClassification(65);
    expect(highTier50?.tier).toBe("high");

    // 10 - 19% DV = Good Source
    const goodTier10 = getFdaDvClassification(10);
    expect(goodTier10?.tier).toBe("good");
    expect(goodTier10?.label).toBe("Good Source");

    const goodTier15 = getFdaDvClassification(15);
    expect(goodTier15?.tier).toBe("good");

    // ≤ 5% DV = Low
    const lowTier = getFdaDvClassification(5);
    expect(lowTier?.tier).toBe("low");
    expect(lowTier?.label).toBe("Low");

    const lowTier2 = getFdaDvClassification(2);
    expect(lowTier2?.tier).toBe("low");

    // 6% to 9% is moderate, not qualifying as "good" or "low"
    const modTier = getFdaDvClassification(8);
    expect(modTier).toBeNull();

    // Undefined returns null
    expect(getFdaDvClassification(undefined)).toBeNull();
  });

  it("evaluates dietary goal presets accurately against the catalog", () => {
    expect(GOAL_PRESETS.length).toBeGreaterThanOrEqual(5);

    const vitCGoal = GOAL_PRESETS.find((g) => g.id === "vitamin-c-power");
    expect(vitCGoal).toBeDefined();
    if (vitCGoal) {
      const matched = allFruits.filter(vitCGoal.match);
      const matchedSlugs = matched.map((f) => f.slug);
      expect(matchedSlugs).toContain("strawberry");
      expect(matchedSlugs).toContain("orange");
    }

    const lowCalGoal = GOAL_PRESETS.find((g) => g.id === "low-calorie");
    expect(lowCalGoal).toBeDefined();
    if (lowCalGoal) {
      const matched = allFruits.filter(lowCalGoal.match);
      const matchedSlugs = matched.map((f) => f.slug);
      expect(matchedSlugs).toContain("watermelon");
      expect(matchedSlugs).toContain("strawberry");
      // Banana has 89 kcal, should NOT match
      expect(matchedSlugs).not.toContain("banana");
    }

    const maxHydration = GOAL_PRESETS.find((g) => g.id === "maximum-hydration");
    expect(maxHydration).toBeDefined();
    if (maxHydration) {
      const matched = allFruits.filter(maxHydration.match);
      const matchedSlugs = matched.map((f) => f.slug);
      expect(matchedSlugs).toContain("watermelon");
      // Banana is around 74% water, should NOT match ≥86%
      expect(matchedSlugs).not.toContain("banana");
    }
  });
});
