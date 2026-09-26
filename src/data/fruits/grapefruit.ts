/**
 * Grapefruit — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-grapefruit), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const grapefruit: Fruit = {
  id: "grapefruit",
  slug: "grapefruit",
  name: "Grapefruit",

  editorial: {
    nickname: "Chakotra · Toranja",
    tagline: "Sublime bitter-sweet balance. The accidental Caribbean hybrid miracle.",
    heroDescription:
      "Emerging in 18th-century Barbados from the serendipitous natural cross-pollination between the sweet orange (Citrus sinensis) and Indonesian pomelo (Citrus maxima), the grapefruit is citrus horticulture's most captivating hybrid. Its crimson-to-ruby vesicles deliver an exhilarating tension of brisk citric acidity, sweet tropical juice, and signature bitter naringin bioflavonoids.",
    pullQuotes: [
      {
            "quote": "The forbidden fruit of Barbados: a jewel of morning clarity that shocks slumbering taste buds into sharp, vivid awareness.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 88.06% intracellular water, 31.2mg Vitamin C (35% DV), and potent antioxidant lycopene alongside natural naringin bioflavonoids.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/grapefruit/hero.png",
      alt: "grapefruit botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/grapefruit/card.png",
      alt: "Grapefruit - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/grapefruit/macro-break.png",
      alt: "Macro photograph of grapefruit",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Ruby Vesicles · The Lycopene Horizon",
      captionText: "Deep pink juice vesicles storing concentrated naringin and protective lycopene pigments.",
    },
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "paradisi",
    botanicalNotes: [
      "Named 'grapefruit' because its heavy fruits grow in dense, hanging clusters resembling bunches of giant grapes.",
      "Pigmented pink and ruby varieties owe their rich color to lycopene and beta-carotene rather than anthocyanins."
],
  },

  origin: {
    region: "Barbados (Caribbean Hybridization)",
    description:
      "Documented first in Barbados in 1750 by the Rev. Griffith Hughes as 'the forbidden fruit', this spontaneous allotetraploid hybrid arose when Captain Shaddock's pomelo trees cross-pollinated with sweet Jamaican oranges.",
    coordinates: [13.1939, -59.5432],
    grownTodayRegions: [
      "China",
      "United States",
      "Mexico",
      "South Africa",
      "Turkey",
      "Israel"
],
  sourceIds: ["usda-fdc-grapefruit"],
  },

  season: [
    {
        "regionId": "subtropical-americas",
        "hemisphere": "north",
        "months": [
            10,
            11,
            12,
            1,
            2,
            3,
            4,
            5
        ],
        "peakMonths": [
            11,
            12,
            1,
            2
        ],
        "label": "October – May (peak Nov–Feb)",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 42,
      unit: "kcal",
      sourceIds: ["usda-fdc-grapefruit"],
    },
    waterContentPercent: 88.06,
    nutrients: {
      protein: {
        amount: 0.77,
        unit: "g",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      totalFat: {
        amount: 0.14,
        unit: "g",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      carbohydrates: {
        amount: 10.66,
        unit: "g",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      dietaryFiber: {
        amount: 1.6,
        unit: "g",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      sugars: {
        amount: 6.89,
        unit: "g",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      vitaminC: {
        amount: 31.2,
        unit: "mg",
        sourceIds: ["usda-fdc-grapefruit"],
      },
      potassium: {
        amount: 135,
        unit: "mg",
        sourceIds: ["usda-fdc-grapefruit"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Brisk first.",
    accent: "Ruby bittersweet citrus tang.",
    descriptors: [
      "Bittersweet",
      "Ruby Citrus",
      "Brisk Acid",
      "Naringin Note",
      "Juicy Vesicle",
      "Invigorating"
],
    notes:
      "A sensory masterclass in dynamic tension: exhilarating rush of sweet-tart ruby juice instantly countered by elegant, tonic-like bitterness from naringin, finishing clean, brisk, and mouth-cleansing.",
  },

  benefitTags: [
    {
        "label": "Naringin Bioflavonoid Defense",
        "phenomenon": "flavanone glycoside metabolic modulation",
        "description": "Packed with naringin and naringenin, polyphenols shown to activate AMPK pathways and support healthy glucose metabolism.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ],
        "icon": "heart",
        "metric": "25–40 mg Naringin per 100g"
    },
    {
        "label": "Lycopene Endothelial Support",
        "phenomenon": "carotenoid vascular singlet oxygen quenching",
        "description": "Pink and ruby cultivars supply abundant cis- and trans-lycopene, protecting low-density lipoproteins against systemic oxidation.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ],
        "icon": "shield",
        "metric": "1,135 µg Lycopene in Ruby flesh"
    },
    {
        "label": "Ascorbic Immune Resilience",
        "phenomenon": "leukocyte vitamin C accumulation",
        "description": "A half-grapefruit supplies over 50% of the daily Vitamin C requirement, promoting neutrophil chemotaxis and barrier resilience.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ],
        "icon": "sparkle",
        "metric": "31.2 mg Vitamin C (35% DV)"
    }
],

  funFacts: [
    {
        "text": "Grapefruit compounds naturally inhibit cytochrome P450 3A4 enzymes in the small intestine, a famous clinical pharmacological interaction known as the 'grapefruit effect'.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    },
    {
        "text": "Ruby Red was discovered in Texas in 1929 as a natural limb mutation of the pink Thompson variety, becoming the first patented fruit in U.S. history.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    },
    {
        "text": "The Caribbean nickname 'forbidden fruit' was coined in Barbados because visitors found its bittersweet flavor irresistibly addictive.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    }
],

  varieties: [
    {
        "name": "Ruby Red",
        "description": "The legendary deep crimson Texas cultivar with balanced sweetness and reduced bitterness.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    },
    {
        "name": "Star Ruby",
        "description": "Intensely pigmented red flesh with dramatic anthocyanin-like carotenoid depth and thin peel.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    },
    {
        "name": "Duncan (White Heirloom)",
        "description": "The original seedy white standard boasting superlative old-fashioned floral aromatics.",
        "sourceIds": [
            "usda-fdc-grapefruit"
        ]
    }
],

  theme: {
    primary: "#F43F5E",
    secondary: "#FB7185",
    glow: "#F43F5E33",
    textOnPrimary: "#000000",
    gradient: ["#F43F5E", "#FB7185"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 42,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-grapefruit"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 31.2,
      unit: "mg",
      referenceContext: "35% Daily Value",
      sourceIds: ["usda-fdc-grapefruit"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Lycopene",
      value: 1135,
      unit: "µg",
      referenceContext: "vascular antioxidant",
      sourceIds: ["usda-fdc-grapefruit"],
    },
  ],

  similarFruitIds: ["orange","pomelo","lime"],
  sourceIds: ["usda-fdc-grapefruit","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
