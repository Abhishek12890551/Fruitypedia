import { describe, it, expect } from "vitest";
import { allFruits } from "../data";
import {
  SYSTEMIC_COHORTS,
  getPrimaryBiomarker,
} from "../components/BenefitsExplorer";

describe("Phase 4C — Health Benefits & Functional Profile Analytics", () => {
  it("verifies all 8 production fruits have structured, non-empty benefitTags", () => {
    expect(allFruits.length).toBe(8);
    let totalTags = 0;

    for (const fruit of allFruits) {
      expect(fruit.benefitTags).toBeDefined();
      expect(fruit.benefitTags.length).toBeGreaterThanOrEqual(3);
      totalTags += fruit.benefitTags.length;

      for (const tag of fruit.benefitTags) {
        expect(tag.label.trim().length).toBeGreaterThan(0);
        expect(tag.phenomenon.trim().length).toBeGreaterThan(0);
        expect(tag.description.trim().length).toBeGreaterThan(0);
        expect(["established", "emerging", "limited"]).toContain(tag.evidenceLevel);
        expect(tag.sourceIds.length).toBeGreaterThan(0);
        expect(tag.icon.trim().length).toBeGreaterThan(0);
      }
    }

    // 8 fruits * 3 tags each = 24 total tags
    expect(totalTags).toBe(24);
  });

  it("enforces strict anti-hype compliance with zero unverified medical claims", () => {
    const prohibitedKeywords = [
      "cure",
      "miracle",
      "detox",
      "superfood",
      "panacea",
      "anti-aging secret",
    ];

    for (const fruit of allFruits) {
      for (const tag of fruit.benefitTags) {
        const fullContent = `${tag.label} ${tag.phenomenon} ${tag.description}`.toLowerCase();
        for (const keyword of prohibitedKeywords) {
          expect(fullContent).not.toContain(keyword);
        }
      }
    }
  });

  it("defines all 7 biological systemic cohorts", () => {
    expect(SYSTEMIC_COHORTS.length).toBe(7);
    const cohortIds = SYSTEMIC_COHORTS.map((c) => c.id);
    expect(cohortIds).toContain("all");
    expect(cohortIds).toContain("cardiovascular");
    expect(cohortIds).toContain("immunity");
    expect(cohortIds).toContain("digestive");
    expect(cohortIds).toContain("metabolic");
    expect(cohortIds).toContain("hydration");
    expect(cohortIds).toContain("bone-tissue");
  });

  it("matches biological cohorts accurately across fruit records", () => {
    const allCohort = SYSTEMIC_COHORTS.find((c) => c.id === "all");
    const cardioCohort = SYSTEMIC_COHORTS.find((c) => c.id === "cardiovascular");
    const immuneCohort = SYSTEMIC_COHORTS.find((c) => c.id === "immunity");
    const digestiveCohort = SYSTEMIC_COHORTS.find((c) => c.id === "digestive");
    const hydrationCohort = SYSTEMIC_COHORTS.find((c) => c.id === "hydration");

    expect(allCohort).toBeDefined();
    expect(cardioCohort).toBeDefined();
    expect(immuneCohort).toBeDefined();
    expect(digestiveCohort).toBeDefined();
    expect(hydrationCohort).toBeDefined();

    if (!cardioCohort || !immuneCohort || !digestiveCohort || !hydrationCohort) return;

    // Test Watermelon L-Citrulline -> Cardiovascular & Hydration
    const watermelon = allFruits.find((f) => f.slug === "watermelon");
    expect(watermelon).toBeDefined();
    if (watermelon) {
      const citrullineTag = watermelon.benefitTags.find((t) =>
        t.label.includes("Citrulline")
      );
      expect(citrullineTag).toBeDefined();
      if (citrullineTag) {
        expect(cardioCohort.match(citrullineTag, watermelon)).toBe(true);
      }

      const hydrationTag = watermelon.benefitTags.find((t) =>
        t.label.includes("Hydration")
      );
      expect(hydrationTag).toBeDefined();
      if (hydrationTag) {
        expect(hydrationCohort.match(hydrationTag, watermelon)).toBe(true);
      }
    }

    // Test Strawberry Vitamin C -> Immune & Cellular Defense
    const strawberry = allFruits.find((f) => f.slug === "strawberry");
    expect(strawberry).toBeDefined();
    if (strawberry) {
      const vitCTag = strawberry.benefitTags.find((t) =>
        t.label.includes("Vitamin C")
      );
      expect(vitCTag).toBeDefined();
      if (vitCTag) {
        expect(immuneCohort.match(vitCTag, strawberry)).toBe(true);
      }
    }

    // Test Apple Soluble Pectin Fiber -> Digestive Health
    const apple = allFruits.find((f) => f.slug === "apple");
    expect(apple).toBeDefined();
    if (apple) {
      const pectinTag = apple.benefitTags.find((t) =>
        t.label.includes("Pectin")
      );
      expect(pectinTag).toBeDefined();
      if (pectinTag) {
        expect(digestiveCohort.match(pectinTag, apple)).toBe(true);
      }
    }
  });

  it("provides primary biomarker strings for every fruit index", () => {
    for (const fruit of allFruits) {
      for (let i = 0; i < fruit.benefitTags.length; i++) {
        const marker = getPrimaryBiomarker(fruit.id, i);
        expect(marker).toBeTruthy();
        expect(marker.length).toBeGreaterThan(5);
      }
    }
  });
});
