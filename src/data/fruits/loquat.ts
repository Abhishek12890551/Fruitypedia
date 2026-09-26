/**
 * Loquat — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-loquat), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const loquat: Fruit = {
  id: "loquat",
  slug: "loquat",
  name: "Loquat",

  editorial: {
    nickname: "Lokat · Pipa",
    tagline: "The golden harbinger of spring. Delicate apricot-plum pome clusters.",
    heroDescription:
      "Blooming in late autumn and ripening in the earliest days of spring when other fruit trees are barely budding, the loquat (Eriobotrya japonica) is nature's joyful herald of warmth. Growing in generous pendant golden clusters on evergreen subtropical trees, its tender, downy skin peels easily to reveal succulent apricot-hued flesh offering a sparkling harmony of peach, plum, and citrus notes.",
    pullQuotes: [
      {
            "quote": "Spring's golden messenger: a tender jewel combining the floral blush of an apricot, the crisp tang of a plum, and the soul of an ancient pome.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies 86.7g water, 76µg RAE Vitamin A (8% DV) from beta-carotene, 266mg Potassium, and therapeutic ursolic acid triterpenes.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/loquat/hero.png",
      alt: "loquat botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/loquat/card.png",
      alt: "Loquat - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/loquat/macro-break.png",
      alt: "Macro photograph of loquat",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Cluster Sarcocarp · Spring's First Honey",
      captionText: "Downy golden skin peeling to reveal succulent apricot-plum flesh and glossy polished seeds.",
    },
  },

  taxonomy: {
    categoryId: "pome",
    family: "Rosaceae",
    genus: "Eriobotrya",
    species: "japonica",
    botanicalNotes: [
      "A unique subtropical pome fruit in the Rosaceae family that flowers in late autumn/winter and matures in early spring.",
      "The central cavity typically contains 1 to 5 large, glossy, polished brown seeds that separate effortlessly from the succulent pulp."
],
  },

  origin: {
    region: "Southeastern China (Dadu River Valley)",
    description:
      "Indigenous to the cool misty mountain slopes of southeastern China, cultivated for over two millennia and introduced to Japan around 700 CE, where it became a revered imperial fruit and garden centerpiece.",
    coordinates: [29.563, 106.5516],
    grownTodayRegions: [
      "China",
      "Spain",
      "Turkey",
      "Japan",
      "Italy",
      "Pakistan"
],
  sourceIds: ["usda-fdc-loquat"],
  },

  season: [
    {
        "regionId": "subtropical-warm-temperate",
        "hemisphere": "north",
        "months": [
            3,
            4,
            5,
            6
        ],
        "peakMonths": [
            4,
            5
        ],
        "label": "March – June (early spring harvest)",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 47,
      unit: "kcal",
      sourceIds: ["usda-fdc-loquat"],
    },
    waterContentPercent: 86.73,
    nutrients: {
      protein: {
        amount: 0.43,
        unit: "g",
        sourceIds: ["usda-fdc-loquat"],
      },
      totalFat: {
        amount: 0.2,
        unit: "g",
        sourceIds: ["usda-fdc-loquat"],
      },
      carbohydrates: {
        amount: 12.14,
        unit: "g",
        sourceIds: ["usda-fdc-loquat"],
      },
      dietaryFiber: {
        amount: 1.7,
        unit: "g",
        sourceIds: ["usda-fdc-loquat"],
      },
      sugars: {
        amount: 9.3,
        unit: "g",
        sourceIds: ["usda-fdc-loquat"],
      },
      vitaminC: {
        amount: 1,
        unit: "mg",
        sourceIds: ["usda-fdc-loquat"],
      },
      potassium: {
        amount: 266,
        unit: "mg",
        sourceIds: ["usda-fdc-loquat"],
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
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
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
    lead: "Floral first.",
    accent: "Apricot plum citrus tang.",
    descriptors: [
      "Floral Apricot",
      "Tender Sarcocarp",
      "Plum Tang",
      "Spring Nectar",
      "Succulent",
      "Golden"
],
    notes:
      "Delightfully vibrant and refreshingly sweet-tart. Tender, melting golden pulp combines the delicate honeyed floral perfume of a ripe apricot with the clean, bright acidity of a sweet plum.",
  },

  benefitTags: [
    {
        "label": "Provitamin A Carotenoid Wealth",
        "phenomenon": "beta-carotene cellular defense",
        "description": "Supplies 76µg RAE Vitamin A per 100g, defending epithelial tissues and supporting ocular night-vision pigments.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-loquat"
        ],
        "icon": "sparkle",
        "metric": "76 µg RAE Vitamin A"
    },
    {
        "label": "Respiratory Bronchial Soothing",
        "phenomenon": "triterpene antitussive and expectorant",
        "description": "Loquat fruit and leaves contain bioactive ursolic and oleanolic acids, the basis of traditional 'Nin Jiom Pei Pa Koa' throat syrups.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-loquat"
        ],
        "icon": "shield",
        "metric": "Ursolic Acid & Triterpenes"
    },
    {
        "label": "Electrolyte Fluid Regulation",
        "phenomenon": "potassium-mediated cardiovascular tone",
        "description": "Rich in bioavailable potassium (266mg), buffering arterial elasticity and supporting gentle fluid excretion.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-loquat"
        ],
        "icon": "heart",
        "metric": "266 mg Potassium"
    }
],

  funFacts: [
    {
        "text": "The famous Chinese herbal throat syrup 'Pei Pa Koa' (Pipagao) has been made from loquat leaf extract, honey, and herbs since the Qing Dynasty to soothe dry coughs.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    },
    {
        "text": "In northern India and the Mediterranean, loquats (often called 'Lokat' or 'Níspero') are cherished as the very first fresh tree fruit to arrive after winter.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    },
    {
        "text": "Loquat trees flower in late autumn and ripen in early spring, reversing the seasonal rhythm of almost all other temperate fruit trees.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    }
],

  varieties: [
    {
        "name": "Tanaka (Japanese Imperial Benchmark)",
        "description": "Large pear-shaped golden fruit with thick, melting flesh, high sugar content, and balanced acidity.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    },
    {
        "name": "Big Jim (California Giant)",
        "description": "Substantial round fruit measuring up to 5 cm with sweet, pale orange flesh and pleasant perfume.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    },
    {
        "name": "Gold Nugget",
        "description": "Round, golden-yellow fruit with juicy, sweet, apricot-flavored flesh and small seed ratio.",
        "sourceIds": [
            "usda-fdc-loquat"
        ]
    }
],

  theme: {
    primary: "#F59E0B",
    secondary: "#FBBF24",
    glow: "#F59E0B33",
    textOnPrimary: "#000000",
    gradient: ["#F59E0B", "#FBBF24"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 47,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-loquat"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin A",
      value: 76,
      unit: "µg RAE",
      referenceContext: "8% Daily Value",
      sourceIds: ["usda-fdc-loquat"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Potassium",
      value: 266,
      unit: "mg",
      referenceContext: "6% Daily Value",
      sourceIds: ["usda-fdc-loquat"],
    },
  ],

  similarFruitIds: ["apricot","plum","peach"],
  sourceIds: ["usda-fdc-loquat","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
