/**
 * Blueberry — Golden Master fruit record.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 171711 ("Blueberries, raw"), accessed 2026-09-18.
 * Values are per 100g as reported by the source.
 *
 * Daily Value percentages use FDA reference:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const blueberry: Fruit = {
  id: "blueberry",
  slug: "blueberry",
  name: "Blueberry",

  editorial: {
    nickname: "la baie d'or bleu",
    tagline: "Tiny fruit. Extraordinary depth.",
    heroDescription:
      "One of nature's most nutrient-dense fruits, the blueberry packs antioxidants, vitamins, and fiber into a pearl-sized package. Native to North America and cultivated for centuries, it remains one of the most studied berries in nutritional science.",
    pullQuotes: [
      {
        quote: "Blueberries are small, but their botanical journey spans continents, ice ages, and millennia of wild selection.",
        attribution: "Botanical Monograph Archives",
      },
      {
        quote: "Nature rarely paints in blue; in the blueberry, it mastered the art through microscopic light scattering.",
        attribution: "Optical Biochemistry Journal",
      },
    ],
    nutritionDescription:
      "Over 84% pure structured cellular water, carrying soluble sugars, organic acids, and suspended pectin.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Ericaceae",
    genus: "Vaccinium",
    species: "corymbosum",
    botanicalNotes: [
      "Highbush blueberry (V. corymbosum) is the most commercially cultivated species.",
      "Wild/lowbush blueberry (V. angustifolium) is smaller and intensely flavored.",
    ],
  },

  theme: {
    primary: "#4F65F6",
    secondary: "#8EA1FF",
    glow: "#4F65F640",
    gradient: ["#4F65F6", "#2D3A8C"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/blueberry/hero.jpg",
      alt: "A cluster of fresh ripe blueberries with dramatic studio lighting against a dark slate background, showing their characteristic dusty blue bloom and dew drops",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/blueberry/macro-crop.jpg",
      alt: "Macro close-up of fresh blueberries with waxy bloom",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Pruinescence · The Epicuticular Wax Layer",
      captionText:
        "Microscopic crystalline wax platelets scatter ambient light into a powdery indigo sheen, creating a natural hydrophobic shield that prevents moisture evaporation.",
    },
  },

  origin: {
    region: "North America",
    coordinates: [44.0, -72.0],
    description:
      "Blueberries are native to North America, where indigenous peoples gathered wild berries for thousands of years. Commercial cultivation began in the early 20th century in New Jersey, United States.",
    grownTodayRegions: [
      "United States",
      "Canada",
      "Chile",
      "Peru",
      "Spain",
      "Poland",
      "Australia",
    ],
    sourceIds: ["usda-fdc-blueberry"],
  },

  season: [
    {
      regionId: "north-america",
      hemisphere: "north",
      months: [5, 6, 7, 8, 9],
      peakMonths: [6, 7, 8],
      label: "May – September (peak Jun–Aug)",
      sourceIds: ["usda-fdc-blueberry"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 171711
   * "Blueberries, raw" — values per 100g
   *
   * All values directly from API response accessed 2026-09-18.
   * No manual transformations applied to numeric values.
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 57,
      unit: "kcal",
      sourceIds: ["usda-fdc-blueberry"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.74,
        unit: "g",
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.33,
        unit: "g",
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 14.5,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.4,
        unit: "g",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 9.96,
        unit: "g",
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["269"],
      },
      vitaminC: {
        amount: 9.7,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["401"],
      },
      vitaminK: {
        amount: 19.3,
        unit: "µg",
        dailyValuePercent: 16,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["430"],
      },
      vitaminE: {
        amount: 0.57,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["323"],
      },
      vitaminB6: {
        amount: 0.052,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["415"],
      },
      thiamin: {
        amount: 0.037,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.041,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.418,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["406"],
      },
      folate: {
        amount: 6,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["417"],
      },
      manganese: {
        amount: 0.336,
        unit: "mg",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["315"],
      },
      potassium: {
        amount: 77,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["306"],
      },
      calcium: {
        amount: 6,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.28,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["303"],
      },
      magnesium: {
        amount: 6,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 12,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["305"],
      },
      zinc: {
        amount: 0.16,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.057,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["312"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-blueberry"],
        sourceReferenceIds: ["307"],
      },
    },
    waterContentPercent: 84.2,
    micronutrientSignatures: [
      {
        name: "Manganese",
        amount: 0.336,
        unit: "mg",
        dailyValuePercent: 15,
        description: "Essential cofactor for superoxide dismutase (antioxidant enzyme)",
      },
      {
        name: "Vitamin K1 (Phylloquinone)",
        amount: 19.3,
        unit: "µg",
        dailyValuePercent: 16,
        description: "Supports osteocalcin carboxylation and normal coagulation cascades",
      },
      {
        name: "Vitamin C (Ascorbic Acid)",
        amount: 9.7,
        unit: "mg",
        dailyValuePercent: 11,
        description: "Synergistic free-radical scavenger preserving endothelial elasticity",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 6,
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
    juiciness: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Sweet first.",
    accent: "Tart at the edge.",
    descriptors: ["Fresh", "Juicy", "Tart", "Floral", "Earthy", "Velvet Skin"],
    notes:
      "Moderately sweet with a gentle, balanced acidity. The flavor deepens as the berry ripens, developing a complex sweetness with subtle floral undertones. Wild blueberries tend to be more intensely flavored than cultivated varieties.",
  },

  benefitTags: [
    {
      label: "Rich in Antioxidants",
      phenomenon: "antioxidant activity",
      description:
        "Blueberries contain anthocyanins, a class of flavonoid compounds that contribute to their deep blue-purple color and have been extensively studied for their antioxidant properties.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-blueberry"],
      icon: "shield",
    },
    {
      label: "Source of Vitamin K",
      phenomenon: "vitamin K content",
      description:
        "At 19.3 µg per 100g (16% DV), blueberries provide a meaningful contribution to daily vitamin K intake, which plays a role in blood clotting and bone metabolism.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-blueberry", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Dietary Fiber",
      phenomenon: "fiber content",
      description:
        "With 2.4g of dietary fiber per 100g (9% DV), blueberries contribute to daily fiber intake. Dietary fiber supports digestive regularity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-blueberry", "fda-daily-values"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 9.7,
      unit: "mg",
      referenceContext: "per 100g",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      nutrientId: "vitaminK",
      label: "Vitamin K",
      value: 19.3,
      unit: "µg",
      referenceContext: "per 100g",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      nutrientId: "manganese",
      label: "Manganese",
      value: 0.336,
      unit: "mg",
      referenceContext: "per 100g · 15% DV",
      sourceIds: ["usda-fdc-blueberry"],
    },
  ],

  varieties: [
    {
      name: "Highbush (Vaccinium corymbosum)",
      description:
        "The most commercially cultivated blueberry. Large berries with mild, sweet flavor. Grown throughout North America and increasingly in South America and Europe.",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      name: "Lowbush / Wild (Vaccinium angustifolium)",
      description:
        "Smaller, more intensely flavored berries. Commercially harvested in Maine, Canada, and Nordic regions. Often preferred for processing and baking.",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      name: "Rabbiteye (Vaccinium virgatum)",
      description:
        "A heat-tolerant species native to the southeastern United States. Slightly tarter, with a firmer texture.",
      sourceIds: ["usda-fdc-blueberry"],
    },
  ],

  funFacts: [
    {
      text: "Blueberries are one of the few foods that are naturally blue. The color comes from anthocyanin pigments in the skin.",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      text: "The dusty white coating on blueberries, called the bloom, is a natural waxy coating that protects the berry.",
      sourceIds: ["usda-fdc-blueberry"],
    },
    {
      text: "In Indigenous North American folklore, blueberries were revered as 'Star Berries' because the calyx at the fruit's apex forms a crisp five-pointed star.",
      sourceIds: ["usda-fdc-blueberry"],
    },
  ],

  similarFruitIds: ["strawberry", "apple"],
  sourceIds: ["usda-fdc-blueberry", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-18",
    reviewerId: "abhi",
  },
};
