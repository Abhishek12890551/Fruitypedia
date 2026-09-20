import { describe, it, expect } from "vitest";
import { allFruits } from "../data";
import {
  MONTHS,
  CATEGORIES,
  getFruitSeasonStatus,
} from "../components/SeasonsCalendar";

describe("Phase 4D — Interactive Harvest Seasons & Phenology Calendar", () => {
  it("verifies all 8 production fruits contain structured season records with 1-12 month integers", () => {
    expect(allFruits.length).toBe(8);

    for (const fruit of allFruits) {
      expect(fruit.season).toBeDefined();
      expect(fruit.season.length).toBeGreaterThan(0);

      for (const season of fruit.season) {
        expect(season.months.length).toBeGreaterThan(0);
        for (const m of season.months) {
          expect(m).toBeGreaterThanOrEqual(1);
          expect(m).toBeLessThanOrEqual(12);
        }

        if (season.peakMonths) {
          expect(season.peakMonths.length).toBeGreaterThan(0);
          for (const pm of season.peakMonths) {
            expect(pm).toBeGreaterThanOrEqual(1);
            expect(pm).toBeLessThanOrEqual(12);
            expect(season.months).toContain(pm);
          }
        }
      }
    }
  });

  it("verifies MONTHS and CATEGORIES definition registries", () => {
    expect(MONTHS.length).toBe(12);
    expect(MONTHS[0].short).toBe("Jan");
    expect(MONTHS[11].short).toBe("Dec");
    for (let i = 0; i < 12; i++) {
      expect(MONTHS[i].num).toBe(i + 1);
    }

    expect(CATEGORIES.length).toBe(7);
    const catIds = CATEGORIES.map((c) => c.id);
    expect(catIds).toContain("all");
    expect(catIds).toContain("berry");
    expect(catIds).toContain("citrus");
    expect(catIds).toContain("tropical");
  });

  it("evaluates Northern Hemisphere summer harvest for Watermelon", () => {
    const watermelon = allFruits.find((f) => f.slug === "watermelon");
    expect(watermelon).toBeDefined();
    if (!watermelon) return;

    // Northern Summer: July (7) and August (8) should be peak
    const julStatus = getFruitSeasonStatus(watermelon, 7, "north");
    expect(julStatus.isSeason).toBe(true);
    expect(julStatus.isPeak).toBe(true);
    expect(julStatus.statusText).toBe("Peak");

    const augStatus = getFruitSeasonStatus(watermelon, 8, "north");
    expect(augStatus.isSeason).toBe(true);
    expect(augStatus.isPeak).toBe(true);

    // June should be active harvest
    const junStatus = getFruitSeasonStatus(watermelon, 6, "north");
    expect(junStatus.isSeason).toBe(true);
    expect(junStatus.isPeak).toBe(false);
    expect(junStatus.statusText).toBe("Harvest");

    // January should be dormant/off-season
    const janStatus = getFruitSeasonStatus(watermelon, 1, "north");
    expect(janStatus.isSeason).toBe(false);
    expect(janStatus.isPeak).toBe(false);
    expect(janStatus.statusText).toBe("Off-Season");
  });

  it("evaluates Northern Hemisphere winter harvest for Orange", () => {
    const orange = allFruits.find((f) => f.slug === "orange");
    expect(orange).toBeDefined();
    if (!orange) return;

    // Northern Winter: December (12), January (1), February (2) should be peak
    const decStatus = getFruitSeasonStatus(orange, 12, "north");
    expect(decStatus.isSeason).toBe(true);
    expect(decStatus.isPeak).toBe(true);

    const janStatus = getFruitSeasonStatus(orange, 1, "north");
    expect(janStatus.isSeason).toBe(true);
    expect(janStatus.isPeak).toBe(true);

    // July should be off-season in northern hemisphere
    const julStatus = getFruitSeasonStatus(orange, 7, "north");
    expect(julStatus.isSeason).toBe(false);
    expect(julStatus.statusText).toBe("Off-Season");
  });

  it("evaluates continuous equatorial harvest for Banana across all 12 months", () => {
    const banana = allFruits.find((f) => f.slug === "banana");
    expect(banana).toBeDefined();
    if (!banana) return;

    for (let m = 1; m <= 12; m++) {
      const northStatus = getFruitSeasonStatus(banana, m, "north");
      expect(northStatus.isSeason).toBe(true);
      expect(northStatus.isPeak).toBe(true);

      const southStatus = getFruitSeasonStatus(banana, m, "south");
      expect(southStatus.isSeason).toBe(true);
      expect(southStatus.isPeak).toBe(true);
    }
  });

  it("verifies Southern Hemisphere +6 month inversion for temperate crops", () => {
    const watermelon = allFruits.find((f) => f.slug === "watermelon");
    expect(watermelon).toBeDefined();
    if (!watermelon) return;

    // In Southern Hemisphere, Watermelon summer peak is January (1) & February (2)
    const janSouth = getFruitSeasonStatus(watermelon, 1, "south");
    expect(janSouth.isSeason).toBe(true);
    expect(janSouth.isPeak).toBe(true);

    // July should be winter dormancy in Southern Hemisphere
    const julSouth = getFruitSeasonStatus(watermelon, 7, "south");
    expect(julSouth.isSeason).toBe(false);
    expect(julSouth.statusText).toBe("Off-Season");
  });
});
