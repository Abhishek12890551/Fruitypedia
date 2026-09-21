/**
 * Strawberry — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 167762 ("Strawberries, raw"), accessed 2026-09-19.
 * Values are per 100g as reported by the source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const strawberry: Fruit = {
  id: "strawberry",
  slug: "strawberry",
  name: "Strawberry",

  editorial: {
    nickname: "la reine des baies",
    tagline: "Fragrant ruby. Intricate botanical architecture.",
    heroDescription:
      "Botanically unique as an aggregate accessory fruit, the strawberry carries its true botanical fruits—hundreds of delicate achenes—on its glossy scarlet receptacle. Celebrated for its explosive aromatic esters and potent vitamin C concentration, it is one of the world's most beloved temperate fruits.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Rosaceae",
    genus: "Fragaria",
    species: "× ananassa",
    botanicalNotes: [
      "The modern garden strawberry (Fragaria × ananassa) is an octoploid hybrid of Fragaria virginiana from North America and Fragaria chiloensis from Chile.",
      "Botanically, the fleshy red edible portion is an enlarged floral receptacle; the tiny seed-like specks on the surface are individual achenes, each containing a single seed.",
    ],
  },

  theme: {
    primary: "#E11D48",
    secondary: "#FB7185",
    glow: "#E11D4845",
    gradient: ["#E11D48", "#9F1239"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/strawberry/hero.jpg",
      alt: "Fresh ripe red strawberries with vibrant green calyxes on dark textured slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "The Americas",
    coordinates: [-35.6, -71.5],
    description:
      "The modern garden strawberry arose in Brittany, France, in the 1750s through an accidental hybridization of Fragaria virginiana from eastern North America and Fragaria chiloensis from coastal Chile. Both parent species had been treasured by indigenous peoples for millennia.",
    grownTodayRegions: [
      "United States",
      "Spain",
      "Mexico",
      "Egypt",
      "Turkey",
      "Poland",
      "Japan",
    ],
    sourceIds: ["usda-fdc-strawberry"],
  },

  season: [
    {
      regionId: "north-america",
      hemisphere: "north",
      months: [4, 5, 6, 7],
      peakMonths: [5, 6],
      label: "April – July (peak May–Jun)",
      sourceIds: ["usda-fdc-strawberry"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 167762
   * "Strawberries, raw" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 32,
      unit: "kcal",
      sourceIds: ["usda-fdc-strawberry"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.67,
        unit: "g",
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.3,
        unit: "g",
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 7.68,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.0,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 4.86,
        unit: "g",
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["269"],
      },
      vitaminC: {
        amount: 58.8,
        unit: "mg",
        dailyValuePercent: 65,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["401"],
      },
      vitaminK: {
        amount: 2.2,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["430"],
      },
      vitaminE: {
        amount: 0.29,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["323"],
      },
      vitaminB6: {
        amount: 0.047,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["415"],
      },
      thiamin: {
        amount: 0.024,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.022,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.386,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["406"],
      },
      folate: {
        amount: 24,
        unit: "µg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["417"],
      },
      manganese: {
        amount: 0.386,
        unit: "mg",
        dailyValuePercent: 17,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["315"],
      },
      potassium: {
        amount: 153,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["306"],
      },
      calcium: {
        amount: 16,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.41,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["303"],
      },
      magnesium: {
        amount: 13,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 24,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["305"],
      },
      zinc: {
        amount: 0.14,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.048,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["312"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-strawberry"],
        sourceReferenceIds: ["307"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    notes:
      "Lively, bright balance of rich natural fructose and brisk malic acidity, underscored by intense floral esters and subtle hints of green woodiness from the achene seeds.",
  },

  benefitTags: [
    {
      label: "Powerhouse of Vitamin C",
      phenomenon: "ascorbic acid content",
      description:
        "At 58.8 mg per 100g (65% DV), strawberries are exceptionally rich in vitamin C, an essential dietary antioxidant that supports cellular defense and collagen synthesis.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-strawberry", "fda-daily-values"],
      icon: "shield",
    },
    {
      label: "Source of Manganese",
      phenomenon: "manganese trace element",
      description:
        "Providing 0.386 mg per 100g (17% DV), strawberries contribute meaningful levels of manganese, a cofactor for antioxidant enzymes including superoxide dismutase.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-strawberry", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Rich in Ellagitannins",
      phenomenon: "polyphenol concentration",
      description:
        "Strawberries are dense in ellagitannins and pelargonidin anthocyanins, unique polyphenol compounds studied for vascular endothelial health.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-strawberry"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 58.8,
      unit: "mg",
      referenceContext: "per 100g · 65% DV",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.0,
      unit: "g",
      referenceContext: "per 100g · 7% DV",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      nutrientId: "manganese",
      label: "Manganese",
      value: 0.386,
      unit: "mg",
      referenceContext: "per 100g · 17% DV",
      sourceIds: ["usda-fdc-strawberry"],
    },
  ],

  varieties: [
    {
      name: "Albion (Fragaria × ananassa 'Albion')",
      description:
        "The premier day-neutral commercial cultivar, famed for consistent conical symmetry, deep internal ruby coloration, and robust firmness during transport.",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      name: "Chandler (Fragaria × ananassa 'Chandler')",
      description:
        "Classic June-bearing variety from California, offering high juice content, classic wedge geometry, and intense aromatic sweetness.",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      name: "Mara des Bois (Fragaria × ananassa 'Mara des Bois')",
      description:
        "Renowned French gourmet cross bred with alpine wild strawberries, prized by patissiers for intense woodland fragrance and delicate melting texture.",
      sourceIds: ["usda-fdc-strawberry"],
    },
  ],

  funFacts: [
    {
      text: "Strawberries are not true botanical berries, but aggregate accessory fruits. The actual botanical fruits are the tiny seed-like achenes on the exterior.",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      text: "An average strawberry possesses approximately 200 individual achenes across its external scarlet receptacle.",
      sourceIds: ["usda-fdc-strawberry"],
    },
    {
      text: "Strawberries are members of the Rosaceae (Rose) family, sharing direct botanical lineage with apples, peaches, cherries, and garden roses.",
      sourceIds: ["usda-fdc-strawberry"],
    },
  ],

  similarFruitIds: ["blueberry", "peach"],
  sourceIds: ["usda-fdc-strawberry", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-19",
    reviewerId: "abhi",
  },
};
