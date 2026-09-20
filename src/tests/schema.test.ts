import { describe, it, expect } from "vitest";
import { blueberry } from "../data/fruits/blueberry";
import { banana } from "../data/fruits/banana";
import { peach } from "../data/fruits/peach";
import { watermelon } from "../data/fruits/watermelon";
import { apple } from "../data/fruits/apple";
import { allFruits } from "../data";
import { categories } from "../data/categories";
import { sources } from "../data/sources";
import { FruitSchema, CategorySchema, SourceSchema, NutritionSchema } from "../schemas";

describe("Fruitypedia Schema Validation Suite", () => {
  it("validates Blueberry Golden Master against FruitSchema", () => {
    const parseResult = FruitSchema.safeParse(blueberry);
    expect(parseResult.success).toBe(true);
    if (!parseResult.success) {
      console.error(parseResult.error.format());
    }
  });

  it("validates Banana monograph against FruitSchema", () => {
    const parseResult = FruitSchema.safeParse(banana);
    expect(parseResult.success).toBe(true);
    if (!parseResult.success) {
      console.error(parseResult.error.format());
    }
  });

  it("validates Peach monograph against FruitSchema", () => {
    const parseResult = FruitSchema.safeParse(peach);
    expect(parseResult.success).toBe(true);
    if (!parseResult.success) {
      console.error(parseResult.error.format());
    }
  });

  it("validates Watermelon monograph against FruitSchema", () => {
    const parseResult = FruitSchema.safeParse(watermelon);
    expect(parseResult.success).toBe(true);
    if (!parseResult.success) {
      console.error(parseResult.error.format());
    }
  });

  it("validates Apple monograph against FruitSchema", () => {
    const parseResult = FruitSchema.safeParse(apple);
    expect(parseResult.success).toBe(true);
    if (!parseResult.success) {
      console.error(parseResult.error.format());
    }
  });

  it("validates every production fruit in allFruits against FruitSchema", () => {
    for (const fruit of allFruits) {
      const parseResult = FruitSchema.safeParse(fruit);
      expect(parseResult.success).toBe(true);
      if (!parseResult.success) {
        console.error(`Validation failed for ${fruit.name}:`, parseResult.error.format());
      }
    }
  });

  it("validates all categories against CategorySchema", () => {
    for (const category of categories) {
      const result = CategorySchema.safeParse(category);
      expect(result.success).toBe(true);
    }
  });

  it("validates all sources against SourceSchema", () => {
    for (const source of sources) {
      const result = SourceSchema.safeParse(source);
      expect(result.success).toBe(true);
    }
  });

  it("ensures all production fruits reference valid registered sources", () => {
    const registeredSourceIds = new Set(sources.map((s) => s.id));
    for (const fruit of allFruits) {
      for (const sourceId of fruit.sourceIds) {
        expect(registeredSourceIds.has(sourceId)).toBe(true);
      }
    }
  });

  it("ensures Watermelon nutrition matches analytical USDA values", () => {
    const nutrition = watermelon.nutrition;
    const nutritionResult = NutritionSchema.safeParse(nutrition);
    expect(nutritionResult.success).toBe(true);

    expect(nutrition.calories.amount).toBe(30);
    expect(nutrition.calories.unit).toBe("kcal");
    expect(nutrition.nutrients.carbohydrates.amount).toBe(7.55);
    expect(nutrition.nutrients.fiber.amount).toBe(0.4);
    expect(nutrition.nutrients.vitaminC.amount).toBe(8.1);
    expect(nutrition.nutrients.water?.amount).toBe(91.45);
  });

  it("ensures Apple nutrition matches analytical USDA values", () => {
    const nutrition = apple.nutrition;
    const nutritionResult = NutritionSchema.safeParse(nutrition);
    expect(nutritionResult.success).toBe(true);

    expect(nutrition.calories.amount).toBe(52);
    expect(nutrition.calories.unit).toBe("kcal");
    expect(nutrition.nutrients.carbohydrates.amount).toBe(13.81);
    expect(nutrition.nutrients.fiber.amount).toBe(2.4);
    expect(nutrition.nutrients.potassium.amount).toBe(107);
    expect(nutrition.nutrients.vitaminC.amount).toBe(4.6);
  });

  it("ensures Peach nutrition matches analytical USDA values", () => {
    const nutrition = peach.nutrition;
    const nutritionResult = NutritionSchema.safeParse(nutrition);
    expect(nutritionResult.success).toBe(true);

    expect(nutrition.calories.amount).toBe(39);
    expect(nutrition.calories.unit).toBe("kcal");
    expect(nutrition.nutrients.potassium.amount).toBe(190);
    expect(nutrition.nutrients.vitaminC.amount).toBe(6.6);
    expect(nutrition.nutrients.vitaminE.amount).toBe(0.73);
    expect(nutrition.nutrients.fiber.amount).toBe(1.5);
  });

  it("ensures Banana nutrition matches analytical USDA values", () => {
    const nutrition = banana.nutrition;
    const nutritionResult = NutritionSchema.safeParse(nutrition);
    expect(nutritionResult.success).toBe(true);

    expect(nutrition.calories.amount).toBe(89);
    expect(nutrition.calories.unit).toBe("kcal");
    expect(nutrition.nutrients.vitaminB6.amount).toBe(0.367);
    expect(nutrition.nutrients.vitaminB6.dailyValuePercent).toBe(22);
    expect(nutrition.nutrients.potassium.amount).toBe(358);
    expect(nutrition.nutrients.fiber.amount).toBe(2.6);
  });

  it("ensures Blueberry nutrition has valid calories and essential nutrients", () => {
    const nutrition = blueberry.nutrition;
    const nutritionResult = NutritionSchema.safeParse(nutrition);
    expect(nutritionResult.success).toBe(true);

    expect(nutrition.calories.amount).toBe(57);
    expect(nutrition.calories.unit).toBe("kcal");
    expect(nutrition.nutrients.vitaminC.amount).toBe(9.7);
    expect(nutrition.nutrients.vitaminK.amount).toBe(19.3);
    expect(nutrition.nutrients.fiber.amount).toBe(2.4);
  });
});
