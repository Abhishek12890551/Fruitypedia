/**
 * Apple — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 171688 ("Apples, raw, with skin"), accessed 2026-09-20.
 * Values are per 100g as reported by the analytical source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const apple: Fruit = {
  id: "apple",
  slug: "apple",
  name: "Apple",

  editorial: {
    nickname: "la pomme d'or antique",
    tagline: "Crisp pome architecture. Ancient wild fruit of the Tian Shan.",
    heroDescription:
      "Descending from ancestral wild fruit forests flanking the Tian Shan mountains of Central Asia, the apple is humanity's most storied temperate fruit. Beneath its anthocyanin-blushed skin lies crisp, cellular-dense ivory flesh formed from a specialized botanical floral tube (hypanthium), delivering slow-release dietary pectin fiber, antioxidant quercetin polyphenols, and balanced malic acid sweetness.",
  },

  taxonomy: {
    categoryId: "pome",
    family: "Rosaceae",
    genus: "Malus",
    species: "domestica",
    botanicalNotes: [
      "Belongs to the tribe Maleae in the rose family (Rosaceae), derived predominantly from the wild Central Asian ancestor Malus sieversii with introgressions from European crabapples (Malus sylvestris).",
      "Botanically an accessory fruit known as a pome: the edible flesh is derived not from the ovary wall, but from the swollen floral tube (hypanthium), surrounding a central core of five fused carpels containing the seeds.",
    ],
  },

  theme: {
    primary: "#DC2626",
    secondary: "#F87171",
    glow: "#DC262645",
    gradient: ["#DC2626", "#991B1B"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/apple/hero.jpg",
      alt: "Crisp heirloom red apples on dark charcoal slate with one sliced cleanly in half displaying starry seed cavity and ivory flesh",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "Central Asia (Tian Shan Mountains, Kazakhstan)",
    coordinates: [43.25, 76.95],
    description:
      "The ancestral home of the domesticated apple lies in the primordial wild fruit forests of the Tian Shan mountains, near modern-day Almaty (literally 'Father of Apples') in southeastern Kazakhstan. Carried westward along the Silk Road by nomadic travelers, merchants, and migrating bears, wild Malus sieversii hybridized with European crabapples to create the thousands of modern cultivars grown today.",
    grownTodayRegions: [
      "China",
      "United States",
      "Turkey",
      "Poland",
      "India",
      "Iran",
      "Italy",
      "Chile",
      "France",
      "South Africa",
    ],
    sourceIds: ["usda-fdc-apple"],
  },

  season: [
    {
      regionId: "temperate-autumn",
      hemisphere: "north",
      months: [8, 9, 10, 11],
      peakMonths: [9, 10],
      label: "August – November (peak September–October)",
      sourceIds: ["usda-fdc-apple"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 171688
   * "Apples, raw, with skin" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 52,
      unit: "kcal",
      sourceIds: ["usda-fdc-apple"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.26,
        unit: "g",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.17,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 13.81,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.4,
        unit: "g",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 10.39,
        unit: "g",
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["269"],
      },
      water: {
        amount: 85.56,
        unit: "g",
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["255"],
      },
      calcium: {
        amount: 6,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.12,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["303"],
      },
      magnesium: {
        amount: 5,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 11,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["305"],
      },
      potassium: {
        amount: 107,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["306"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["307"],
      },
      zinc: {
        amount: 0.04,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.027,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.035,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 4.6,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["401"],
      },
      thiamin: {
        amount: 0.017,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.026,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.091,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["406"],
      },
      pantothenicAcid: {
        amount: 0.061,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["410"],
      },
      vitaminB6: {
        amount: 0.041,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["415"],
      },
      folate: {
        amount: 3,
        unit: "µg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["417"],
      },
      vitaminA: {
        amount: 3,
        unit: "µg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["320"],
      },
      vitaminE: {
        amount: 0.18,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["323"],
      },
      vitaminK: {
        amount: 2.2,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-apple"],
        sourceReferenceIds: ["430"],
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
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    notes:
      "Crisp, snappy fracture and balanced sweet-tart complexity. Pronounced natural malic acid backbone harmonized with clean honeyed sucrose and floral-ester aromatics, terminating in a clean, lightly tannic skin finish.",
  },

  benefitTags: [
    {
      label: "Soluble Pectin Fiber",
      phenomenon: "gel-forming digestive polysaccharide",
      description:
        "Provides 2.4g of total fiber per 100g, concentrated in soluble apple pectin that forms a gentle viscous gel in the digestive tract, supporting healthy metabolic clearance and gut flora.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apple", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Quercetin & Polyphenols",
      phenomenon: "flavonoid cellular defense",
      description:
        "Enriched with plant flavonols — notably quercetin concentrated in the peel — which act as free-radical scavengers and support endothelial vascular health.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apple"],
      icon: "shield",
    },
    {
      label: "Low Glycemic Carbohydrates",
      phenomenon: "fructose-pectin sustained release",
      description:
        "With carbohydrates balanced across fructose, complex pectin, and dietary fiber, whole apples promote steady, sustained postprandial glucose absorption.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apple"],
      icon: "chart",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.4,
      unit: "g",
      referenceContext: "per 100g · 9% DV",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 4.6,
      unit: "mg",
      referenceContext: "per 100g · 5% DV",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 107,
      unit: "mg",
      referenceContext: "per 100g · 2% DV",
      sourceIds: ["usda-fdc-apple"],
    },
  ],

  varieties: [
    {
      name: "Honeycrisp",
      description:
        "Bred at the University of Minnesota in 1974. Celebrated for its unique cellular structure: cells rupture cleanly rather than crushing, creating an unmatched explosively crisp, juicy crunch.",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      name: "Cox's Orange Pippin",
      description:
        "A legendary English heirloom dating back to 1825. Prized by pomologists for its deeply complex, aromatic flavor with notes of honey, orange blossom, and mild pear.",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      name: "Black Diamond (Hua Niu)",
      description:
        "A rare, dramatic heirloom cultivar grown in high-altitude Tibetan orchards, where intense ultraviolet radiation causes the skin to develop a striking dark violet-black hue.",
      sourceIds: ["usda-fdc-apple"],
    },
  ],

  funFacts: [
    {
      text: "Because apples are extreme heterozygotes, planting a seed from an apple will never produce the same variety; every named apple variety in history is preserved exclusively through grafting.",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      text: "Apples float in water because approximately twenty-five percent of their total volume consists of microscopic air pockets trapped between intercellular walls.",
      sourceIds: ["usda-fdc-apple"],
    },
    {
      text: "The ancient city of Almaty in Kazakhstan, nestled beneath the Tian Shan range, takes its name from the Kazakh word for 'apple' ('alma'), commemorating its role as the cradle of all domesticated apples.",
      sourceIds: ["usda-fdc-apple"],
    },
  ],

  similarFruitIds: ["peach", "blueberry"],
  sourceIds: ["usda-fdc-apple", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-20",
    reviewerId: "abhi",
  },
};
