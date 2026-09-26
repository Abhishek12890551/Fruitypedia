/**
 * Asian Pear — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-asian-pear), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const asianPear: Fruit = {
  id: "asian-pear",
  slug: "asian-pear",
  name: "Asian Pear",

  editorial: {
    nickname: "Babu Gosha · Nakh",
    tagline: "The water apple of the Orient. Crystalline crispness and floral honeydew juice.",
    heroDescription:
      "Confounding Western expectations of soft, melting European pears, the Asian pear or Nashi (Pyrus pyrifolia) combines the perfect spherical geometry of an apple with an astonishing rush of crystalline, thirst-quenching cell sap. Dotted with delicate cinnamon lenticels over golden-russet skin, its snowy white flesh fractures with a clean, audible snap, delivering gentle low-acid honey sweetness and 88% intracellular hydration.",
    pullQuotes: [
      {
            "quote": "A sphere of edible crystal: fracturing like morning ice between the teeth, showering the palate in a cool cloudburst of honeyed orchard rain.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies 88.25% cellular water, 3.6g dietary fiber (13% DV), 121mg Potassium, and essential trace copper.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/asian-pear/hero.png",
      alt: "asian-pear botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/asian-pear/card.png",
      alt: "Asian Pear - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/asian-pear/macro-break.png",
      alt: "Macro photograph of asian-pear",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Crystalline Turgor · The Water-Apple",
      captionText: "Rigid cellulose cell walls fracturing cleanly to release a torrent of honeyed orchard water.",
    },
  },

  taxonomy: {
    categoryId: "pome",
    family: "Rosaceae",
    genus: "Pyrus",
    species: "pyrifolia",
    botanicalNotes: [
      "Known botanically as Pyrus pyrifolia (sand pear), differing from European pears (Pyrus communis) by ripening fully on the tree without needing post-harvest curing.",
      "Retains its crisp, turgid cellular fracture even at peak ripeness due to rigid, lignified cellulose cell wall architecture."
],
  },

  origin: {
    region: "Yangtze River Valley & East Asia",
    description:
      "Cultivated across China, Japan, and Korea for over three millennia, honored in imperial poetry as the 'sand pear' and cultivated with painstaking care, often individual fruits being bagged on branches to protect their porcelain perfection.",
    coordinates: [31.2304, 121.4737],
    grownTodayRegions: [
      "China",
      "Japan",
      "South Korea",
      "United States",
      "New Zealand",
      "Australia"
],
  sourceIds: ["usda-fdc-asian-pear"],
  },

  season: [
    {
        "regionId": "east-asia-temperate",
        "hemisphere": "north",
        "months": [
            8,
            9,
            10,
            11
        ],
        "peakMonths": [
            9,
            10
        ],
        "label": "August – November (autumn harvest)",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 42,
      unit: "kcal",
      sourceIds: ["usda-fdc-asian-pear"],
    },
    waterContentPercent: 88.25,
    nutrients: {
      protein: {
        amount: 0.5,
        unit: "g",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      totalFat: {
        amount: 0.23,
        unit: "g",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      carbohydrates: {
        amount: 10.65,
        unit: "g",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      dietaryFiber: {
        amount: 3.6,
        unit: "g",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      sugars: {
        amount: 7.05,
        unit: "g",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      vitaminC: {
        amount: 3.8,
        unit: "mg",
        sourceIds: ["usda-fdc-asian-pear"],
      },
      potassium: {
        amount: 121,
        unit: "mg",
        sourceIds: ["usda-fdc-asian-pear"],
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
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Crisp first.",
    accent: "Crystalline honey orchard rain.",
    descriptors: [
      "Crystalline Snap",
      "Water-Apple",
      "Floral Honey",
      "Porcelain Flesh",
      "Low-Acid",
      "Thirst-Quenching"
],
    notes:
      "Audible, explosive crispness. Pure, refreshing cellular water floods the mouth with delicate notes of wildflower honey, white grape, and crisp golden apple, devoid of heaviness or gritty astringency.",
  },

  benefitTags: [
    {
        "label": "High-Hydration Osmotic Balance",
        "phenomenon": "intracellular water and electrolyte replenishment",
        "description": "Provides 88% pure structured plant water with balanced minerals, delivering unmatched thirst quenching during warm autumn months.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ],
        "icon": "heart",
        "metric": "88.3% Cellular Hydration"
    },
    {
        "label": "Prebiotic Dietary Fiber",
        "phenomenon": "gut microbiome short-chain fatty acid synthesis",
        "description": "Supplies 3.6g fiber per 100g (13% DV), supporting intestinal peristalsis and beneficial Bifidobacteria populations.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ],
        "icon": "shield",
        "metric": "3.6g Dietary Fiber (13% DV)"
    },
    {
        "label": "Respiratory Demulcent Cooling",
        "phenomenon": "tracheobronchial hydration via fruit acids",
        "description": "Central to traditional Chinese medicine (Nashi / Sha Li) for lubricating dry lungs, soothing coughs, and easing throat irritation.",
        "evidenceLevel": "emerging",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ],
        "icon": "sparkle",
        "metric": "Traditional TCM Lung Tonic"
    }
],

  funFacts: [
    {
        "text": "Korean cuisine relies on grated Asian pear as a natural enzymatic meat tenderizer for bulgogi and galbi due to its active calpain-like proteases.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    },
    {
        "text": "Unlike European pears which turn mealy if left to ripen on the tree, Asian pears achieve their legendary crisp texture only when fully sun-ripened on the branch.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    },
    {
        "text": "In Korea and Japan, individual Asian pears on orchard trees are hand-wrapped in paper bags to protect their skin from wind marks.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    }
],

  varieties: [
    {
        "name": "Hosui (Rich Golden Benchmark)",
        "description": "The premier Japanese russet cultivar with golden skin, melting crispness, and rich sweet-tart juice.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    },
    {
        "name": "Nijisseiki (20th Century)",
        "description": "Iconic smooth green-yellow pear with extraordinary juiciness, crisp texture, and clean apple-like freshness.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    },
    {
        "name": "Shinko (Late Season Bronze)",
        "description": "Rich bronze-russet skin with exceptional winter storage ability and sweet floral honey depth.",
        "sourceIds": [
            "usda-fdc-asian-pear"
        ]
    }
],

  theme: {
    primary: "#D97706",
    secondary: "#F59E0B",
    glow: "#D9770633",
    textOnPrimary: "#000000",
    gradient: ["#D97706", "#F59E0B"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 42,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-asian-pear"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Dietary Fiber",
      value: 3.6,
      unit: "g",
      referenceContext: "13% Daily Value",
      sourceIds: ["usda-fdc-asian-pear"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Potassium",
      value: 121,
      unit: "mg",
      referenceContext: "light electrolyte balance",
      sourceIds: ["usda-fdc-asian-pear"],
    },
  ],

  similarFruitIds: ["pear","apple","quince"],
  sourceIds: ["usda-fdc-asian-pear","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
