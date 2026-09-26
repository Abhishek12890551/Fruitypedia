/**
 * Lime — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-lime), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const lime: Fruit = {
  id: "lime",
  slug: "lime",
  name: "Lime",

  editorial: {
    nickname: "Kagzi Nimbu · Jambira",
    tagline: "Piercing citric vibrancy. Essential aromatic acid of the tropical belt.",
    heroDescription:
      "Originating in the tropical river valleys of Southeast Asia, the lime (Citrus aurantiifolia) is the ultimate botanical catalyst of global culinary culture. Cloaked in an oil-dense emerald flavedo packed with sharp limonene and pinene monoterpenes, its translucent green vesicles store intense citric acid and bioavailable Vitamin C that elevates dishes, preserves foods, and revives the human palate.",
    pullQuotes: [
      {
            "quote": "A small sphere of concentrated equatorial electricity that cuts through fat, sparks salivary glands, and transforms humble broths into feasts.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 88% pure structured water, 29.1mg Vitamin C (32% DV), and concentrated citric acid supporting renal health and non-heme iron absorption.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/lime/hero.png",
      alt: "lime botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/lime/card.png",
      alt: "Lime - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/lime/macro-break.png",
      alt: "Macro photograph of lime",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Hesperidium Vesicles · The Citric Reservoir",
      captionText: "Translucent emerald vesicles packed with bioavailable citric acid and aromatic pinene oils.",
    },
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "aurantiifolia",
    botanicalNotes: [
      "Botanically a specialized modified berry (hesperidium) with aromatic oil glands embedded in the green flavedo.",
      "The true lime (Key/Mexican or Kagzi) is smaller, more acidic, and more intensely fragrant than the triploid Persian lime (Citrus latifolia)."
],
  },

  origin: {
    region: "Southeast Asia & Indo-Malayan Archipelago",
    description:
      "Native to the tropical rainforest fringes of Southeast Asia, limes traveled early along Arab trade corridors to Persia, North Africa, and the Mediterranean before reaching the Caribbean and the Americas via Spanish explorers.",
    coordinates: [13.7563, 100.5018],
    grownTodayRegions: [
      "Mexico",
      "India",
      "China",
      "Brazil",
      "Colombia",
      "Argentina"
],
  sourceIds: ["usda-fdc-lime"],
  },

  season: [
    {
        "regionId": "global-tropics",
        "hemisphere": "north",
        "months": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "peakMonths": [
            5,
            6,
            7,
            8,
            9
        ],
        "label": "Year-round in tropical belts (peak May–Sep)",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 30,
      unit: "kcal",
      sourceIds: ["usda-fdc-lime"],
    },
    waterContentPercent: 88.26,
    nutrients: {
      protein: {
        amount: 0.7,
        unit: "g",
        sourceIds: ["usda-fdc-lime"],
      },
      totalFat: {
        amount: 0.2,
        unit: "g",
        sourceIds: ["usda-fdc-lime"],
      },
      carbohydrates: {
        amount: 10.54,
        unit: "g",
        sourceIds: ["usda-fdc-lime"],
      },
      dietaryFiber: {
        amount: 2.8,
        unit: "g",
        sourceIds: ["usda-fdc-lime"],
      },
      sugars: {
        amount: 1.69,
        unit: "g",
        sourceIds: ["usda-fdc-lime"],
      },
      vitaminC: {
        amount: 29.1,
        unit: "mg",
        sourceIds: ["usda-fdc-lime"],
      },
      potassium: {
        amount: 102,
        unit: "mg",
        sourceIds: ["usda-fdc-lime"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 3,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Piercing first.",
    accent: "Electric emerald citric snap.",
    descriptors: [
      "Piercing Citric",
      "Zesty Emerald",
      "Sharp",
      "Mouthwatering",
      "Aromatic Limonene",
      "Clean"
],
    notes:
      "Intense, bracing initial wave of pure citric acid accompanied by aromatic floral-pine terpenes from peel oils. Utterly free of cloying sweetness, delivering an unmatched clean, crisp, electrifying finish.",
  },

  benefitTags: [
    {
        "label": "Ascorbic Dermal Synthesis",
        "phenomenon": "ascorbic acid collagen synthesis",
        "description": "Delivers 32% DV Vitamin C per 100g, an essential cofactor in prolyl and lysyl hydroxylase enzymes for structural collagen integrity.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-lime"
        ],
        "icon": "shield",
        "metric": "29.1 mg Vitamin C (32% DV)"
    },
    {
        "label": "Urinary Citrate Alkalization",
        "phenomenon": "citric acid nephrolithiasis defense",
        "description": "Natural dietary citric acid increases urinary volume and pH, binding free ionic calcium to inhibit calcium oxalate crystallization.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-lime"
        ],
        "icon": "heart",
        "metric": "5.5–6.5% Natural Citric Acid"
    },
    {
        "label": "Non-Heme Iron Bioavailability",
        "phenomenon": "organic acid iron chelation",
        "description": "Citric and ascorbic acids reduce ferric iron to the more absorbable ferrous state, significantly enhancing dietary non-heme iron uptake.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-lime"
        ],
        "icon": "sparkle",
        "metric": "Synergistic Citric/Ascorbic Matrix"
    }
],

  funFacts: [
    {
        "text": "British Royal Navy sailors were famously nicknamed 'Limeys' after the Admiralty mandated daily lime juice rations to prevent scurvy in 1795.",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    },
    {
        "text": "In India, the Kagzi Nimbu is an auspicious cultural staple, hung with green chillies on doorways and vehicles as an ancient ritual of protective vitality.",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    },
    {
        "text": "A fresh true lime sinks in water due to its high cellular density, whereas a common lemon floats!",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    }
],

  varieties: [
    {
        "name": "Kagzi Nimbu (Indian Standard)",
        "description": "The definitive thin-skinned, intensely perfumed acid lime of the Indian subcontinent.",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    },
    {
        "name": "Key Lime (West Indian)",
        "description": "Small, spherical, yellow-green fruit prized worldwide for its floral tartness and iconic Key lime pies.",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    },
    {
        "name": "Persian Lime (Tahiti)",
        "description": "Larger, seedless commercial hybrid with a smooth dark emerald rind and milder acidity.",
        "sourceIds": [
            "usda-fdc-lime"
        ]
    }
],

  theme: {
    primary: "#84CC16",
    secondary: "#A3E635",
    glow: "#84CC1633",
    textOnPrimary: "#000000",
    gradient: ["#84CC16", "#A3E635"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 30,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-lime"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 29.1,
      unit: "mg",
      referenceContext: "32% Daily Value",
      sourceIds: ["usda-fdc-lime"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Dietary Fiber",
      value: 2.8,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-lime"],
    },
  ],

  similarFruitIds: ["lemon","orange","grapefruit"],
  sourceIds: ["usda-fdc-lime","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
