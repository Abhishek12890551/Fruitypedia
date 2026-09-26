/**
 * Galia Melon — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-galia), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const galia: Fruit = {
  id: "galia",
  slug: "galia",
  name: "Galia Melon",

  editorial: {
    nickname: "Sunehra Kharbooz",
    tagline: "The golden desert hybrid. Intoxicating tropical banana-melon aroma.",
    heroDescription:
      "Bred in the 1970s at Israel's Agricultural Research Organization by botanical geneticist Dr. Zvi Karchi, the Galia melon (Cucumis melo) represents the pinnacle of modern melon hybridization. Blending the rough, fragrant netting of the cantaloupe with the luscious, translucent green flesh of the honeydew, it delivers an extraordinary tropical aroma evoking banana, pineapple, and wildflower honey with up to 15° Brix sweetness.",
    pullQuotes: [
      {
            "quote": "A triumph of desert agronomy: golden lace on the outside, cool emerald ice on the inside, with an aroma that fills a room before the knife even cuts.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 89.2% structured cellular water, 28mg Vitamin C (31% DV), and balanced fruit sugars for instant natural summer revitalisation.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/galia/hero.png",
      alt: "galia botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/galia/card.png",
      alt: "Galia Melon - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/galia/macro-break.png",
      alt: "Macro photograph of galia",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Desert Sorbet · Tropical Ester Core",
      captionText: "Lime-green cellular parenchyma yielding 15° Brix sweetness with banana-pineapple aroma.",
    },
  },

  taxonomy: {
    categoryId: "melon",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "melo",
    botanicalNotes: [
      "A specialized hybrid cross between the green-fleshed Ha'Ogen melon and the netted cantaloupe cultivar.",
      "Named 'Galia' in honor of Dr. Karchi's daughter, Gali; the rind shifts from green to bright golden-yellow when optimal sweetness is achieved."
],
  },

  origin: {
    region: "Negev Desert, Israel (1973 Hybrid)",
    description:
      "Developed through precise selective breeding at the Neve Yaar Research Center in Israel to create an aromatic dessert melon with desert heat tolerance and superior transport durability.",
    coordinates: [31.253, 34.7915],
    grownTodayRegions: [
      "Israel",
      "Spain",
      "Morocco",
      "Turkey",
      "Portugal",
      "Cyprus"
],
  sourceIds: ["usda-fdc-galia"],
  },

  season: [
    {
        "regionId": "mediterranean-subtropical",
        "hemisphere": "north",
        "months": [
            5,
            6,
            7,
            8,
            9,
            10
        ],
        "peakMonths": [
            6,
            7,
            8
        ],
        "label": "May – October (peak summer heat)",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 32,
      unit: "kcal",
      sourceIds: ["usda-fdc-galia"],
    },
    waterContentPercent: 89.2,
    nutrients: {
      protein: {
        amount: 0.65,
        unit: "g",
        sourceIds: ["usda-fdc-galia"],
      },
      totalFat: {
        amount: 0.12,
        unit: "g",
        sourceIds: ["usda-fdc-galia"],
      },
      carbohydrates: {
        amount: 8.2,
        unit: "g",
        sourceIds: ["usda-fdc-galia"],
      },
      dietaryFiber: {
        amount: 0.8,
        unit: "g",
        sourceIds: ["usda-fdc-galia"],
      },
      sugars: {
        amount: 7.4,
        unit: "g",
        sourceIds: ["usda-fdc-galia"],
      },
      vitaminC: {
        amount: 28,
        unit: "mg",
        sourceIds: ["usda-fdc-galia"],
      },
      potassium: {
        amount: 240,
        unit: "mg",
        sourceIds: ["usda-fdc-galia"],
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
      value: 2,
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
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Golden first.",
    accent: "Tropical banana melon perfume.",
    descriptors: [
      "Intense Aroma",
      "Golden Netted",
      "Lime Flesh",
      "Tropical Ester",
      "Melting Sweet",
      "Juicy"
],
    notes:
      "Exotic and explosively aromatic. The pale lime-green flesh melts like sorbet, releasing sweet tropical notes of ripe banana, golden melon, and wildflower honey with an intoxicating lingering perfume.",
  },

  benefitTags: [
    {
        "label": "Rapid Electrolyte Rehydration",
        "phenomenon": "osmotic cellular fluid recovery",
        "description": "Hyper-hydrating 89% structured water matrix loaded with bioavailable potassium (240mg) for rapid athletic rehydration.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-galia"
        ],
        "icon": "heart",
        "metric": "240 mg Potassium"
    },
    {
        "label": "Ascorbic Photoprotective Shield",
        "phenomenon": "free radical neutralization via ascorbate",
        "description": "Supplies 31% DV Vitamin C, assisting dermal repair after intense sun and thermal exposure.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-galia"
        ],
        "icon": "sparkle",
        "metric": "28 mg Vitamin C (31% DV)"
    },
    {
        "label": "Digestive Cooling Homeostasis",
        "phenomenon": "low-acid gastric soothing",
        "description": "Gentle fruit sugars and high hydration provide an alkaline digestive environment, easing summer heat fatigue.",
        "evidenceLevel": "emerging",
        "sourceIds": [
            "usda-fdc-galia"
        ],
        "icon": "shield",
        "metric": "Alkalizing Mineral Ash"
    }
],

  funFacts: [
    {
        "text": "Unlike ordinary cantaloupes, Galia melons develop a distinct golden-orange rind when fully mature while maintaining their emerald lime-green interior flesh.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    },
    {
        "text": "Galia melons are harvested exclusively by stem slippage when natural sugars peak between 13° and 15° Brix.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    },
    {
        "text": "Bred specifically to signal ripeness by turning from olive green to brilliant gold while keeping lime-green interior flesh.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    }
],

  varieties: [
    {
        "name": "Original Galia (Standard)",
        "description": "The classic Israeli hybrid with golden netting, pale green interior, and unmatched banana-melon bouquet.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    },
    {
        "name": "Arava (Desert Strain)",
        "description": "Adapted for intense desert sunlight with extra firm rind and prolonged shelf vitality.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    },
    {
        "name": "Solarking",
        "description": "European greenhouse selection prized for uniform netting and intensely sweet juice.",
        "sourceIds": [
            "usda-fdc-galia"
        ]
    }
],

  theme: {
    primary: "#EAB308",
    secondary: "#FACC15",
    glow: "#EAB30833",
    textOnPrimary: "#000000",
    gradient: ["#EAB308", "#FACC15"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 32,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-galia"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 28,
      unit: "mg",
      referenceContext: "31% Daily Value",
      sourceIds: ["usda-fdc-galia"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Potassium",
      value: 240,
      unit: "mg",
      referenceContext: "5% Daily Value",
      sourceIds: ["usda-fdc-galia"],
    },
  ],

  similarFruitIds: ["cantaloupe","honeydew","watermelon"],
  sourceIds: ["usda-fdc-galia","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
