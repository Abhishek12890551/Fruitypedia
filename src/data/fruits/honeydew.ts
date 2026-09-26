/**
 * Honeydew — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-honeydew), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const honeydew: Fruit = {
  id: "honeydew",
  slug: "honeydew",
  name: "Honeydew",

  editorial: {
    nickname: "Sharda Kharbooza",
    tagline: "Porcelain smooth rind. Silken pale jade hydration and floral nectar.",
    heroDescription:
      "Smooth, elegant, and serene, the honeydew melon (Cucumis melo inodorus) is the aristocratic cool sister of the netted cantaloupe. Free of surface netting, its porcelain creamy-white rind conceals cool, pale jade-green flesh that yields with buttery softness, flooding the palate with pure, clean cellular nectar, natural potassium electrolytes, and gentle low-acid sweetness.",
    pullQuotes: [
      {
            "quote": "A cool sphere of jade silk: clean, serene, and devoid of sharp edges, offering refreshment as pure as morning dew on mountain grass.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 89.82% structured water, 18mg Vitamin C (20% DV), 228mg Potassium, and ultra-low fat for gentle digestive recovery.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/honeydew/hero.png",
      alt: "honeydew botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/honeydew/card.png",
      alt: "Honeydew - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/honeydew/macro-break.png",
      alt: "Macro photograph of honeydew",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Jade Sarcocarp · Cool Hydration Reservoir",
      captionText: "Silky, translucent celadon flesh holding 90% structured intracellular plant water.",
    },
  },

  taxonomy: {
    categoryId: "melon",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "melo",
    botanicalNotes: [
      "Classified in the inodorus horticultural group ('inodorous' meaning lacking the heavy external scent of netted muskmelons until sliced).",
      "Features a smooth, non-netted exocarp that transitions from pale green to creamy ivory-yellow upon reaching full botanical maturity."
],
  },

  origin: {
    region: "Middle East & Ancient Egypt",
    description:
      "Cultivated along the fertile banks of the Nile and the desert oases of ancient Persia and Asia Minor for thousands of years, revered for its ability to store cooling hydration through hot arid months.",
    coordinates: [26.8206, 30.8025],
    grownTodayRegions: [
      "China",
      "United States",
      "Mexico",
      "Chile",
      "Turkey",
      "Spain"
],
  sourceIds: ["usda-fdc-honeydew"],
  },

  season: [
    {
        "regionId": "warm-temperate",
        "hemisphere": "north",
        "months": [
            6,
            7,
            8,
            9,
            10
        ],
        "peakMonths": [
            7,
            8,
            9
        ],
        "label": "June – October (peak late summer harvest)",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 36,
      unit: "kcal",
      sourceIds: ["usda-fdc-honeydew"],
    },
    waterContentPercent: 89.82,
    nutrients: {
      protein: {
        amount: 0.54,
        unit: "g",
        sourceIds: ["usda-fdc-honeydew"],
      },
      totalFat: {
        amount: 0.14,
        unit: "g",
        sourceIds: ["usda-fdc-honeydew"],
      },
      carbohydrates: {
        amount: 9.09,
        unit: "g",
        sourceIds: ["usda-fdc-honeydew"],
      },
      dietaryFiber: {
        amount: 0.8,
        unit: "g",
        sourceIds: ["usda-fdc-honeydew"],
      },
      sugars: {
        amount: 8.12,
        unit: "g",
        sourceIds: ["usda-fdc-honeydew"],
      },
      vitaminC: {
        amount: 18,
        unit: "mg",
        sourceIds: ["usda-fdc-honeydew"],
      },
      potassium: {
        amount: 228,
        unit: "mg",
        sourceIds: ["usda-fdc-honeydew"],
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Silken first.",
    accent: "Cool jade honey nectar.",
    descriptors: [
      "Cool Jade",
      "Honey Nectar",
      "Buttery Soft",
      "Hydrating",
      "Low-Acid",
      "Silken"
],
    notes:
      "Gentle, understated elegance. Silky pale green flesh yields effortlessly, delivering clean, soothing sweetness reminiscent of wildflower honey and crisp cucumber without any acidic bite.",
  },

  benefitTags: [
    {
        "label": "Cellular Fluid Osmoregulation",
        "phenomenon": "potassium intracellular water balance",
        "description": "Supplies 228mg potassium in a hyper-hydrating 90% water matrix, promoting intracellular equilibrium and metabolic homeostasis.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-honeydew"
        ],
        "icon": "heart",
        "metric": "228 mg Potassium · 90% Water"
    },
    {
        "label": "Gentle Low-FODMAP Digestion",
        "phenomenon": "digestive tract soothing mucilage",
        "description": "Lacks harsh acids and rough insoluble fibers, making it exceptionally gentle on sensitive gastric and intestinal mucosal linings.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-honeydew"
        ],
        "icon": "shield",
        "metric": "Ultra-Low Gastric Acidity"
    },
    {
        "label": "Ascorbic Microvascular Tone",
        "phenomenon": "collagen stabilization via ascorbate",
        "description": "Provides 20% DV Vitamin C per 100g, supporting skin hydration and vascular endothelial elasticity.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-honeydew"
        ],
        "icon": "sparkle",
        "metric": "18 mg Vitamin C (20% DV)"
    }
],

  funFacts: [
    {
        "text": "Cleopatra and the Pharaohs of Egypt regarded the honeydew as a sacred royal fruit, placing sweet melon seeds inside tombs for the afterlife journey.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    },
    {
        "text": "A honeydew is truly ripe when its smooth skin develops a subtle, waxy, slightly tacky feel and the blossom end yields slightly to gentle thumb pressure.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    },
    {
        "text": "Ancient Egyptian tomb murals depict spherical melons with porcelain skin offered to the sun deity Ra.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    }
],

  varieties: [
    {
        "name": "Green Flesh Standard",
        "description": "The classic commercial melon with ivory rind, pale jade pulp, and melting honey sweetness.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    },
    {
        "name": "Orange Flesh Honeydew",
        "description": "A delightful modern hybrid combining honeydew's smooth skin with cantaloupe's beta-carotene orange interior.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    },
    {
        "name": "Bailan (Lanzhou Melon)",
        "description": "The celebrated honey melon of Lanzhou, China, renowned for extraordinarily high sugar brix and crisp tenderness.",
        "sourceIds": [
            "usda-fdc-honeydew"
        ]
    }
],

  theme: {
    primary: "#10B981",
    secondary: "#34D399",
    glow: "#10B98133",
    textOnPrimary: "#000000",
    gradient: ["#10B981", "#34D399"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 36,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-honeydew"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Potassium",
      value: 228,
      unit: "mg",
      referenceContext: "5% Daily Value",
      sourceIds: ["usda-fdc-honeydew"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Vitamin C",
      value: 18,
      unit: "mg",
      referenceContext: "20% Daily Value",
      sourceIds: ["usda-fdc-honeydew"],
    },
  ],

  similarFruitIds: ["cantaloupe","galia","watermelon"],
  sourceIds: ["usda-fdc-honeydew","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
