/**
 * Mango — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 169910 ("Mangos, raw"), accessed 2026-09-19.
 * Values are per 100g as reported by the source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const mango: Fruit = {
  id: "mango",
  slug: "mango",
  name: "Mango",

  editorial: {
    nickname: "le roi des fruits",
    tagline: "Golden drupe. Ancient tropical majesty.",
    heroDescription:
      "Venerated for over four millennia across South Asia as the sacred sovereign of fruits, the mango is a magnificent botanical drupe. Beneath its smooth, sun-blushed exocarp lies a succulent, saffron-gold mesocarp dripping with aromatic nectar, delivering extraordinary beta-carotene provitamin A and vibrant ascorbic acid.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Anacardiaceae",
    genus: "Mangifera",
    species: "indica",
    botanicalNotes: [
      "The domestic mango (Mangifera indica) belongs to the cashew family (Anacardiaceae), sharing direct botanical kinship with pistachios, cashews, and poison ivy.",
      "Botanically classified as a fleshy drupe consisting of a smooth protective exocarp (peel), a succulent fibrous edible mesocarp (pulp), and a woody, fibrous endocarp enclosing a single large recalcitrant seed.",
    ],
  },

  theme: {
    primary: "#F59E0B",
    secondary: "#FCD34D",
    glow: "#F59E0B33",
    gradient: ["#F59E0B", "#B45309"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/mango/hero.jpg",
      alt: "Ripe golden Alphonso mangoes with succulent diced hedgehog cut on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "South Asia",
    coordinates: [20.59, 78.96], // Ancestral Indo-Burmese corridor
    description:
      "Native to the tropical monsoon forests of India and Myanmar, the mango has been cultivated in the Indian subcontinent for more than 4,000 years. Associated with fertility, love, and sacred hospitality in ancient Vedic literature, Buddhist monks and trade caravans carried seeds eastward into Southeast Asia and across the globe.",
    grownTodayRegions: [
      "India",
      "China",
      "Indonesia",
      "Pakistan",
      "Mexico",
      "Brazil",
      "Nigeria",
      "Philippines",
      "Egypt",
    ],
    sourceIds: ["usda-fdc-mango"],
  },

  season: [
    {
      regionId: "tropical-monsoon",
      hemisphere: "north",
      months: [3, 4, 5, 6, 7, 8],
      peakMonths: [4, 5, 6],
      label: "March – August (peak Apr–Jun)",
      sourceIds: ["usda-fdc-mango"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 169910
   * "Mangos, raw" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 60,
      unit: "kcal",
      sourceIds: ["usda-fdc-mango"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.82,
        unit: "g",
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.38,
        unit: "g",
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 14.98,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 1.6,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 13.66,
        unit: "g",
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["269"],
      },
      vitaminC: {
        amount: 36.4,
        unit: "mg",
        dailyValuePercent: 40,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["401"],
      },
      vitaminA: {
        amount: 54,
        unit: "µg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["320"],
      },
      folate: {
        amount: 43,
        unit: "µg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["417"],
      },
      vitaminB6: {
        amount: 0.119,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["415"],
      },
      vitaminE: {
        amount: 0.9,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["323"],
      },
      vitaminK: {
        amount: 4.2,
        unit: "µg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["430"],
      },
      potassium: {
        amount: 168,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["306"],
      },
      copper: {
        amount: 0.111,
        unit: "mg",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-mango"],
        sourceReferenceIds: ["312"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    notes:
      "Sumptuous tropical luxury. Intensely sweet, floral, and honeyed profile accented by gentle resinous pine nuances, ripe peach undertones, and velvety rich mouthfeel.",
  },

  benefitTags: [
    {
      label: "Rich in Beta-Carotene",
      phenomenon: "carotenoid provitamin A",
      description:
        "Dense in beta-carotene and lutein, fat-soluble carotenoids that provide its rich golden pigmentation and support ocular photoreceptor health.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mango", "fda-daily-values"],
      icon: "shield",
    },
    {
      label: "High Ascorbic Acid Content",
      phenomenon: "vitamin C density",
      description:
        "Providing 36.4 mg per 100g (40% DV), mango supplies concentrated antioxidant protection against reactive oxygen species while assisting non-heme iron absorption.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mango", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Folate & Bioactive Mangiferin",
      phenomenon: "xanthinoid antioxidant polyphenol",
      description:
        "Contains 43 µg of dietary folate (11% DV) alongside mangiferin, a unique bio-chelated xanthinoid studied extensively for cellular and cardioprotective integrity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mango"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 36.4,
      unit: "mg",
      referenceContext: "per 100g · 40% DV",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      nutrientId: "folate",
      label: "Folate (B9)",
      value: 43,
      unit: "µg",
      referenceContext: "per 100g · 11% DV",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      nutrientId: "copper",
      label: "Copper",
      value: 0.111,
      unit: "mg",
      referenceContext: "per 100g · 12% DV",
      sourceIds: ["usda-fdc-mango"],
    },
  ],

  varieties: [
    {
      name: "Alphonso (Mangifera indica 'Alphonso')",
      description:
        "Revered internationally as the 'King of Mangoes' from the Konkan coast of Maharashtra. Famed for its unctuous, fiberless saffron flesh and intoxicating aroma.",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      name: "Ataulfo (Mangifera indica 'Ataulfo')",
      description:
        "The celebrated golden Mexican honey mango. Oblong, flattened silhouette with paper-thin skin, silky smooth buttery texture, and minimal stringy fiber.",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      name: "Kesar (Mangifera indica 'Kesar')",
      description:
        "Hailed as the 'Queen of Mangoes' from the Girnar foothills of Gujarat. Famous for its radiant saffron pulp, intense sweetness, and intoxicating floral bouquet.",
      sourceIds: ["usda-fdc-mango"],
    },
  ],

  funFacts: [
    {
      text: "Mango trees are exceptionally long-lived; some specimens planted across India during the Mughal Empire over 300 years ago still produce viable fruit.",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      text: "Botanically, mango belongs to the Anacardiaceae family, making it a close relative of pistachios, cashews, and poison ivy.",
      sourceIds: ["usda-fdc-mango"],
    },
    {
      text: "Over 500 distinct mango cultivars are grown worldwide, with India alone producing over 40% of the entire global annual harvest.",
      sourceIds: ["usda-fdc-mango"],
    },
  ],

  similarFruitIds: ["orange", "strawberry"],
  sourceIds: ["usda-fdc-mango", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-19",
    reviewerId: "abhi",
  },
};
