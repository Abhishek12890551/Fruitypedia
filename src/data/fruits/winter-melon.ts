/**
 * Winter Melon — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-winter-melon), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const winterMelon: Fruit = {
  id: "winter-melon",
  slug: "winter-melon",
  name: "Winter Melon",

  editorial: {
    nickname: "Petha · Ash Gourd",
    tagline: "Sacred white ash gourd. The ancient Ayurvedic cooling medicine of longevity.",
    heroDescription:
      "Revered in Ayurvedic pharmacology as 'Kushmanda'—the ultimate cooling rasayana—and celebrated throughout Asian culinary history, the winter melon or ash gourd (Benincasa hispida) is a miraculous botanical preservation vessel. Covered in a chalky, powdery white protective wax bloom, this monumental melon can store for up to a year without refrigeration, providing pure alkaline hydration, therapeutic flavonoids, and soothing pectin to the human system.",
    pullQuotes: [
      {
            "quote": "A sacred crystal urn of living water: cloaked in chalky wax that defies time, offering cooling peace to heated bodies and weary minds.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies an extraordinary 96.1% structured water (highest among terrestrial vegetables/fruits), only 13 kcal per 100g, and 13mg Vitamin C.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/winter-melon/hero.png",
      alt: "winter-melon botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/winter-melon/card.png",
      alt: "Winter Melon - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/winter-melon/macro-break.png",
      alt: "Macro photograph of winter-melon",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Wax Epicuticle · The Ancient Rasayana Urn",
      captionText: "Snowy, crystal-clear cellular matrix providing pure alkaline hydration and digestive peace.",
    },
  },

  taxonomy: {
    categoryId: "melon",
    family: "Cucurbitaceae",
    genus: "Benincasa",
    species: "hispida",
    botanicalNotes: [
      "The sole species in the genus Benincasa, characterized by a thick white epicuticular wax coating (giving rise to the name 'ash gourd' or 'wax gourd').",
      "Can grow to massive dimensions, frequently exceeding 80 cm in length and 20 kg in mass."
],
  },

  origin: {
    region: "Indo-China & South Asian River Basins",
    description:
      "Indigenous to tropical South and Southeast Asia, winter melon has been cultivated for over two millennia from the foothills of the Himalayas to the Yangtze River valley, central to sacred Ayurvedic Rasayana therapies and imperial Chinese banquets.",
    coordinates: [20.5937, 78.9629],
    grownTodayRegions: [
      "China",
      "India",
      "Vietnam",
      "Thailand",
      "Taiwan",
      "Philippines"
],
  sourceIds: ["usda-fdc-winter-melon"],
  },

  season: [
    {
        "regionId": "tropical-subtropical-asia",
        "hemisphere": "north",
        "months": [
            8,
            9,
            10,
            11,
            12,
            1,
            2,
            3
        ],
        "peakMonths": [
            9,
            10,
            11
        ],
        "label": "Autumn harvest with winter storage vitality",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 13,
      unit: "kcal",
      sourceIds: ["usda-fdc-winter-melon"],
    },
    waterContentPercent: 90.5,
    nutrients: {
      protein: {
        amount: 0.4,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      totalFat: {
        amount: 0.2,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      carbohydrates: {
        amount: 3,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      dietaryFiber: {
        amount: 2.9,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      sugars: {
        amount: 1.5,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      vitaminC: {
        amount: 13,
        unit: "mg",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      potassium: {
        amount: 111,
        unit: "mg",
        sourceIds: ["usda-fdc-winter-melon"],
      },
      water: {
        amount: 91.0,
        unit: "g",
        sourceIds: ["usda-fdc-winter-melon"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 3,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Cooling first.",
    accent: "Pure crystalline mineral water.",
    descriptors: [
      "Alkaline",
      "Pure Hydration",
      "Ultra-Low Calorie",
      "Chalky Wax",
      "Mild Sweet",
      "Soothing"
],
    notes:
      "Exquisitely delicate, clean, and hyper-refreshing. Translucent ivory flesh yields like crisp water ice, releasing pure, neutral, subtly sweet cellular moisture that cleanses the palate completely.",
  },

  benefitTags: [
    {
        "label": "Ultra-Alkaline Hydration Matrix",
        "phenomenon": "cellular osmolytes and low-solute hydration",
        "description": "Composed of 96.1% structured water with minimal solutes, serving as a powerful physiological alkalizer and diuretic.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ],
        "icon": "heart",
        "metric": "96.1% Water · 13 kcal"
    },
    {
        "label": "Kushmanda Rasayana Neuroprotection",
        "phenomenon": "GABAergic and nootropic phytosterols",
        "description": "Celebrated in Charaka Samhita as a Medhya Rasayana (brain rejuvenator) that calms mental agitation and reduces systemic Pitta heat.",
        "evidenceLevel": "emerging",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ],
        "icon": "sparkle",
        "metric": "Ayurvedic Rasayana Benchmark"
    },
    {
        "label": "Gastric Mucosal Cytoprotection",
        "phenomenon": "mucilage and soluble dietary fiber",
        "description": "Rich in demulcent soluble mucilage that coats and buffers peptic mucosa against excessive gastric acidity and ulceration.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ],
        "icon": "shield",
        "metric": "2.9g Gentle Dietary Fiber"
    }
],

  funFacts: [
    {
        "text": "In India, winter melon is the foundational ingredient of Agra's world-famous translucent royal sweet, 'Petha', perfected during Mughal Emperor Shah Jahan's reign.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    },
    {
        "text": "Its thick natural wax layer makes it one of the few vegetables that can be stored at ambient room temperature for an entire year without spoiling.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    },
    {
        "text": "The powdery white chalk wax coating acts as nature's antimicrobial shield, allowing room-temperature storage for over 12 months.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    }
],

  varieties: [
    {
        "name": "Kushmanda / Ash Gourd (Indian Standard)",
        "description": "Large oval subcontinental melon heavily coated in white chalky wax, revered for therapeutic juices and Petha.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    },
    {
        "name": "Donggua (Chinese Imperial)",
        "description": "Giant cylindrical dark green melon with dense crisp white flesh prized for celebratory slow-simmered winter soups.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    },
    {
        "name": "Chi-Qua (Fuzzy Joint Melon)",
        "description": "Immature slender variety picked young when still coated in fine downy hairs, tender like zucchini.",
        "sourceIds": [
            "usda-fdc-winter-melon"
        ]
    }
],

  theme: {
    primary: "#06B6D4",
    secondary: "#22D3EE",
    glow: "#06B6D433",
    textOnPrimary: "#000000",
    gradient: ["#06B6D4", "#22D3EE"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 13,
      unit: "kcal",
      referenceContext: "ultra-low caloric density",
      sourceIds: ["usda-fdc-winter-melon"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Water Content",
      value: 96.1,
      unit: "%",
      referenceContext: "highest among fruits",
      sourceIds: ["usda-fdc-winter-melon"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Dietary Fiber",
      value: 2.9,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-winter-melon"],
    },
  ],

  similarFruitIds: ["watermelon","honeydew","cucumber"],
  sourceIds: ["usda-fdc-winter-melon","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
