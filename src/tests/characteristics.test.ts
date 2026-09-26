import { describe, it, expect } from "vitest";
import { allFruits } from "../data";
import { getFruitCharacteristics, FRUIT_CHARACTERISTICS } from "../data/characteristics";

describe("Fruit Characteristics & Monograph Nomenclature", () => {
  it("every fruit in allFruits has clean, single-concept display names without parentheses", () => {
    for (const fruit of allFruits) {
      expect(fruit.name).not.toMatch(/\(/);
      expect(fruit.name).not.toMatch(/\)/);
      expect(fruit.name.trim()).toBe(fruit.name);
      expect(fruit.name.length).toBeGreaterThan(0);
    }
  });

  it("every fruit in allFruits receives exactly 6 botanical characteristics", () => {
    expect(allFruits.length).toBe(50);
    for (const fruit of allFruits) {
      const items = getFruitCharacteristics(fruit);
      expect(items).toHaveLength(6);
      for (const item of items) {
        expect(item.code).toMatch(/^0[1-6]$/);
        expect(item.category.length).toBeGreaterThan(0);
        expect(item.title.length).toBeGreaterThan(0);
        expect(item.metric.length).toBeGreaterThan(0);
        expect(item.description.length).toBeGreaterThan(10);
      }
    }
  });

  it("all 38 fruits have dedicated, non-default static characteristic entries", () => {
    for (const fruit of allFruits) {
      expect(FRUIT_CHARACTERISTICS[fruit.id]).toBeDefined();
      expect(FRUIT_CHARACTERISTICS[fruit.id]).toHaveLength(6);
    }
  });

  it("ensures no other fruit shares Blueberry's specific characteristics", () => {
    const blueberryItems = getFruitCharacteristics(allFruits.find(f => f.id === "blueberry")!);
    const blueberryTitles = blueberryItems.map(i => i.title);

    for (const fruit of allFruits) {
      if (fruit.id === "blueberry") continue;
      const fruitItems = getFruitCharacteristics(fruit);
      const fruitTitles = fruitItems.map(i => i.title);
      expect(fruitTitles).not.toEqual(blueberryTitles);
    }
  });

  it("verifies accurate botanical traits for newly added fruits", () => {
    const sapodilla = allFruits.find(f => f.id === "sapodilla")!;
    const sapodillaChars = getFruitCharacteristics(sapodilla);
    expect(sapodilla.name).toBe("Sapodilla");
    expect(sapodillaChars.some(c => c.title.includes("Sandstone") || c.title.includes("Scurfy"))).toBe(true);
    expect(sapodillaChars.some(c => c.description.toLowerCase().includes("chicle"))).toBe(true);

    const durian = allFruits.find(f => f.id === "durian")!;
    const durianChars = getFruitCharacteristics(durian);
    expect(durianChars.some(c => c.title.toLowerCase().includes("spiny") || c.title.toLowerCase().includes("armor"))).toBe(true);
    expect(durianChars.some(c => c.description.toLowerCase().includes("sulfur") || c.description.toLowerCase().includes("custard"))).toBe(true);

    const starfruit = allFruits.find(f => f.id === "starfruit")!;
    const starfruitChars = getFruitCharacteristics(starfruit);
    expect(starfruit.name).toBe("Starfruit");
    expect(starfruitChars.some(c => c.title.toLowerCase().includes("star wings") || c.title.toLowerCase().includes("five"))).toBe(true);

    const bael = allFruits.find(f => f.id === "bael")!;
    const baelChars = getFruitCharacteristics(bael);
    expect(bael.name).toBe("Bael");
    expect(baelChars.some(c => c.description.toLowerCase().includes("marmelosin"))).toBe(true);

    const ber = allFruits.find(f => f.id === "ber")!;
    const berChars = getFruitCharacteristics(ber);
    expect(ber.name).toBe("Ber");
    expect(berChars.some(c => c.description.toLowerCase().includes("apple-like") || c.description.toLowerCase().includes("ziziphus"))).toBe(true);
  });
});
