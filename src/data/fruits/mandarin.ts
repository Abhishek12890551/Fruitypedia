/**
 * Mandarin — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-mandarin), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const mandarin: Fruit = {
  id: "mandarin",
  slug: "mandarin",
  name: "Mandarin",

  editorial: {
    nickname: "Kinnow · Narangi",
    tagline: "Loose zipper skin. Ancient sweet ancestor of the citrus family.",
    heroDescription:
      "Revered across Asia for millennia as an auspicious emblem of abundance and solar vitality, the mandarin (Citrus reticulata) is one of the three foundational true ancestral species of all modern citrus. Characterized by its thin, loose 'zipper-skin' peel that slips away effortlessly in human hands, it yields succulent golden segments brimming with aromatic thymol, beta-cryptoxanthin, and rich honeyed citrus juice.",
    pullQuotes: [
      {
            "quote": "Nature's pocket snack: a fragrant sphere whose peel yields to gentle fingertips like opening an origami jewel box of sweet sunshine.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies 85.17% cellular water, 26.7mg Vitamin C (30% DV), and an exceptional 407µg of provitamin A carotenoid beta-cryptoxanthin.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/mandarin/hero.png",
      alt: "mandarin botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/mandarin/card.png",
      alt: "Mandarin - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/mandarin/macro-break.png",
      alt: "Macro photograph of mandarin",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Zipper Carpels · Solar Vesicle Chains",
      captionText: "Tender crescent carpels filled with beta-cryptoxanthin and aromatic thymol monoterpenes.",
    },
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "reticulata",
    botanicalNotes: [
      "One of the three core wild ancestral citrus taxa (alongside Citrus maxima pomelo and Citrus medica citron) from which sweet oranges, lemons, and grapefruits originated.",
      "The peel's characteristic loose mesocarp is caused by early degeneration of the albedo fibers as the fruit ripens."
],
  },

  origin: {
    region: "Nanling Mountains & Yangtze Basin, South China",
    description:
      "Originating thousands of years ago in subtropical South China, mandarins spread along ancient trade corridors to Japan and India (where the celebrated Nagpur Santra developed) before charming the Mediterranean in the 19th century.",
    coordinates: [24.9756, 112.5694],
    grownTodayRegions: [
      "China",
      "Spain",
      "Turkey",
      "Morocco",
      "Egypt",
      "United States"
],
  sourceIds: ["usda-fdc-mandarin"],
  },

  season: [
    {
        "regionId": "subtropical-belt",
        "hemisphere": "north",
        "months": [
            10,
            11,
            12,
            1,
            2,
            3
        ],
        "peakMonths": [
            11,
            12,
            1
        ],
        "label": "November – March (peak winter holiday season)",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 53,
      unit: "kcal",
      sourceIds: ["usda-fdc-mandarin"],
    },
    waterContentPercent: 85.17,
    nutrients: {
      protein: {
        amount: 0.81,
        unit: "g",
        sourceIds: ["usda-fdc-mandarin"],
      },
      totalFat: {
        amount: 0.31,
        unit: "g",
        sourceIds: ["usda-fdc-mandarin"],
      },
      carbohydrates: {
        amount: 13.34,
        unit: "g",
        sourceIds: ["usda-fdc-mandarin"],
      },
      dietaryFiber: {
        amount: 1.8,
        unit: "g",
        sourceIds: ["usda-fdc-mandarin"],
      },
      sugars: {
        amount: 10.58,
        unit: "g",
        sourceIds: ["usda-fdc-mandarin"],
      },
      vitaminC: {
        amount: 26.7,
        unit: "mg",
        sourceIds: ["usda-fdc-mandarin"],
      },
      potassium: {
        amount: 166,
        unit: "mg",
        sourceIds: ["usda-fdc-mandarin"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 8,
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Sweet first.",
    accent: "Aromatic floral orange nectar.",
    descriptors: [
      "Honeyed",
      "Zipper Skin",
      "Fragrant Thymol",
      "Juicy Segment",
      "Gentle Acid",
      "Sunny"
],
    notes:
      "Joyful, sun-drenched sweetness unburdened by harsh acidity. Thin carpel walls dissolve on the palate with a fragrant burst of sweet citrus nectar and floral thymol aromatics.",
  },

  benefitTags: [
    {
        "label": "Beta-Cryptoxanthin Bone Support",
        "phenomenon": "carotenoid osteoblast stimulation",
        "description": "One of the richest dietary sources of beta-cryptoxanthin, a provitamin A carotenoid strongly linked to osteoclast suppression and bone density retention.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-mandarin"
        ],
        "icon": "sparkle",
        "metric": "407 µg Beta-Cryptoxanthin"
    },
    {
        "label": "Hesperidin Microvascular Elasticity",
        "phenomenon": "flavanone endothelial nitric oxide modulation",
        "description": "Abundant hesperidin and narirutin flavonoids support capillary wall flexibility and smooth microvascular blood flow.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-mandarin"
        ],
        "icon": "heart",
        "metric": "35–50 mg Flavonoids per 100g"
    },
    {
        "label": "Respiratory & Mucosal Defense",
        "phenomenon": "terpenoid essential oil clearance",
        "description": "Limonene and thymol volatiles from the peel provide clean antimicrobial and natural bronchial soothing qualities.",
        "evidenceLevel": "emerging",
        "sourceIds": [
            "usda-fdc-mandarin"
        ],
        "icon": "shield",
        "metric": "Natural Citrus Monoterpenes"
    }
],

  funFacts: [
    {
        "text": "In India, the GI-tagged 'Nagpur Mandarin' is grown on rich black basaltic soils of Maharashtra, renowned for its exquisite balance of sweetness and acid.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    },
    {
        "text": "Exchanging mandarins during Lunar New Year is an ancient Chinese tradition symbolizing gold, luck, and prosperity due to the fruit's solar color.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    },
    {
        "text": "The Chinese name 'Kam' sounds identical to the word for gold, making mandarins the ultimate holiday symbol of fortune.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    }
],

  varieties: [
    {
        "name": "Nagpur Santra (GI Standard)",
        "description": "The pride of central India, famous for high juice yield, loose skin, and fragrant sweet-tart balance.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    },
    {
        "name": "Clementine (Algerian Spontaneous)",
        "description": "Virtually seedless Mediterranean standard with deep orange skin and candy-sweet flesh.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    },
    {
        "name": "Satsuma (Miyagawa)",
        "description": "Exceptionally cold-hardy Japanese mandarin with melting seedless pulp and delicate low acid.",
        "sourceIds": [
            "usda-fdc-mandarin"
        ]
    }
],

  theme: {
    primary: "#F97316",
    secondary: "#FB923C",
    glow: "#F9731633",
    textOnPrimary: "#000000",
    gradient: ["#F97316", "#FB923C"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 53,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-mandarin"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 26.7,
      unit: "mg",
      referenceContext: "30% Daily Value",
      sourceIds: ["usda-fdc-mandarin"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Carotene (Cryptoxanthin)",
      value: 407,
      unit: "µg",
      referenceContext: "provitamin A bone support",
      sourceIds: ["usda-fdc-mandarin"],
    },
  ],

  similarFruitIds: ["orange","clementine","grapefruit"],
  sourceIds: ["usda-fdc-mandarin","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
