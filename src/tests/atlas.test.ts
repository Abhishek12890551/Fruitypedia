import { describe, it, expect } from "vitest";
import { allFruits } from "../data";
import {
  CONTINENTAL_BIOMES,
  HISTORICAL_DIASPORA_DOSSIERS,
} from "../components/WorldAtlasExplorer";

describe("Phase 4E — Botanical World Atlas & Geographic Diaspora Analytics", () => {
  it("verifies all 50 production fruits have valid cartographic coordinates and origin metadata", () => {
    expect(allFruits.length).toBe(50);

    for (const fruit of allFruits) {
      expect(fruit.origin).toBeDefined();
      expect(fruit.origin.region.trim().length).toBeGreaterThan(0);
      expect(fruit.origin.sourceIds.length).toBeGreaterThan(0);

      const [lat, lng] = fruit.origin.coordinates;
      expect(typeof lat).toBe("number");
      expect(typeof lng).toBe("number");
      expect(isNaN(lat)).toBe(false);
      expect(isNaN(lng)).toBe(false);

      // Standard WGS84 coordinate boundary constraints
      expect(lat).toBeGreaterThanOrEqual(-90);
      expect(lat).toBeLessThanOrEqual(90);
      expect(lng).toBeGreaterThanOrEqual(-180);
      expect(lng).toBeLessThanOrEqual(180);

      // Commercial cultivation hubs
      expect(fruit.origin.grownTodayRegions).toBeDefined();
      expect(fruit.origin.grownTodayRegions?.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("verifies continental biome registry accurately groups evolutionary birthplaces", () => {
    expect(CONTINENTAL_BIOMES.length).toBe(8);
    const allBiome = CONTINENTAL_BIOMES.find((b) => b.id === "all");
    expect(allBiome).toBeDefined();
    expect(allBiome?.fruitSlugs.length).toBe(50);

    // Central Asia -> Apple (Tian Shan)
    const centralAsia = CONTINENTAL_BIOMES.find((b) => b.id === "central-asia");
    expect(centralAsia?.fruitSlugs).toContain("apple");

    // Northeast Africa -> Watermelon (Sudan/Sahel)
    const neAfrica = CONTINENTAL_BIOMES.find((b) => b.id === "northeast-africa");
    expect(neAfrica?.fruitSlugs).toContain("watermelon");

    // South Asia -> Mango (Indian subcontinent)
    const southAsia = CONTINENTAL_BIOMES.find((b) => b.id === "south-asia");
    expect(southAsia?.fruitSlugs).toContain("mango");

    // Southeast Asia -> Banana & Orange
    const seAsia = CONTINENTAL_BIOMES.find((b) => b.id === "southeast-asia");
    expect(seAsia?.fruitSlugs).toContain("banana");
    expect(seAsia?.fruitSlugs).toContain("orange");

    // North America -> Blueberry & Strawberry
    const northAmerica = CONTINENTAL_BIOMES.find((b) => b.id === "north-america");
    expect(northAmerica?.fruitSlugs).toContain("blueberry");
    expect(northAmerica?.fruitSlugs).toContain("strawberry");
  });

  it("provides exhaustive historical diaspora dossiers for all 50 catalog fruits", () => {
    const slugs = allFruits.map((f) => f.slug);

    for (const slug of slugs) {
      const dossier = HISTORICAL_DIASPORA_DOSSIERS[slug];
      expect(dossier).toBeDefined();
      expect(dossier.ancestralTaxon.trim().length).toBeGreaterThan(0);
      expect(dossier.archaeologicalEpoch.trim().length).toBeGreaterThan(0);
      expect(dossier.tradeCorridor.trim().length).toBeGreaterThan(0);
      expect(dossier.diasporaNarrative.trim().length).toBeGreaterThan(50);
    }
  });
});
