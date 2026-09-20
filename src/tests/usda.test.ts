import { describe, it, expect } from "vitest";
import path from "node:path";
import { runUsdaPipeline } from "../../scripts/usdaPipeline";
import { NutritionSchema } from "../schemas";

describe("USDA Pipeline Test", () => {
  it("processes raw Blueberry USDA data into valid Nutrition model", () => {
    const rawPath = path.resolve(__dirname, "../data/raw/usda-blueberry-171711.json");
    const nutrition = runUsdaPipeline(rawPath, "usda-fdc-blueberry");

    expect(nutrition).toBeDefined();
    expect(nutrition.referenceBasis).toBe("per100g");
    expect(nutrition.servingSize).toBe("100g");

    // Validate calories
    expect(nutrition.calories.amount).toBe(57);
    expect(nutrition.calories.unit).toBe("kcal");

    // Validate key nutrients and FDA DV%
    expect(nutrition.nutrients.vitaminC.amount).toBe(9.7);
    expect(nutrition.nutrients.vitaminC.unit).toBe("mg");
    expect(nutrition.nutrients.vitaminC.dailyValuePercent).toBe(11); // 9.7 / 90 * 100 = 11%

    expect(nutrition.nutrients.vitaminK.amount).toBe(19.3);
    expect(nutrition.nutrients.vitaminK.unit).toBe("µg");
    expect(nutrition.nutrients.vitaminK.dailyValuePercent).toBe(16); // 19.3 / 120 * 100 = 16%

    expect(nutrition.nutrients.fiber.amount).toBe(2.4);
    expect(nutrition.nutrients.fiber.dailyValuePercent).toBe(9); // 2.4 / 28 * 100 = 9%

    // Validate schema compliance
    const result = NutritionSchema.safeParse(nutrition);
    expect(result.success).toBe(true);
  });
});
