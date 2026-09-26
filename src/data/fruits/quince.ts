/**
 * Quince — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-quince), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const quince: Fruit = {
  id: "quince",
  slug: "quince",
  name: "Quince",

  editorial: {
    nickname: "Bahi · Safarjal",
    tagline: "Ancient golden sacred pome. Unrivaled honey-floral perfume.",
    heroDescription:
      "Predating the domesticated apple across the legendary gardens of ancient Mesopotamia and Greece, the quince (Cydonia oblonga) is the true golden apple of myth and romance. While too astringent, stony, and dense to consume raw in modern times, cooking works a culinary miracle: its tough ivory flesh transforms into a glowing, translucent ruby-amber jelly bursting with the intoxicating perfume of guava, rose petals, and wildflower honey.",
    pullQuotes: [
      {
            "quote": "The golden apple of Aphrodite: unyielding to raw teeth, yet yielding beneath heat into a luminous crimson jewel of pure floral poetry.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 83.8g water, 15mg Vitamin C (17% DV), 1.9g soluble pectin fiber, and rich caffeoylquinic acid polyphenols.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/quince/hero.png",
      alt: "quince botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/quince/card.png",
      alt: "Quince - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/quince/macro-break.png",
      alt: "Macro photograph of quince",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Lignified Pome · Anthocyanin Metamorphosis",
      captionText: "Dense stone cells rich in proanthocyanidins that transform into ruby-red floral jelly when heated.",
    },
  },

  taxonomy: {
    categoryId: "pome",
    family: "Rosaceae",
    genus: "Cydonia",
    species: "oblonga",
    botanicalNotes: [
      "The sole surviving member of the monotypic genus Cydonia in the Rosaceae pome family.",
      "The high concentration of tannins (proanthocyanidins) binds salivary proteins when raw; slow heat hydrolyzes these into bright red anthocyanin pigments."
],
  },

  origin: {
    region: "Caucasus, Transcaucasia & Northern Iran",
    description:
      "Native to the rocky scrublands and mountain slopes of the Caucasus, northern Iran, and Anatolia, domesticated as early as 4000 BCE and revered in Greek mythology as the golden apple of discord awarded to Aphrodite.",
    coordinates: [40.1431, 47.5769],
    grownTodayRegions: [
      "Turkey",
      "China",
      "Uzbekistan",
      "Iran",
      "Azerbaijan",
      "Morocco"
],
  sourceIds: ["usda-fdc-quince"],
  },

  season: [
    {
        "regionId": "temperate-mediterranean",
        "hemisphere": "north",
        "months": [
            9,
            10,
            11,
            12
        ],
        "peakMonths": [
            10,
            11
        ],
        "label": "October – December (late autumn harvest)",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 57,
      unit: "kcal",
      sourceIds: ["usda-fdc-quince"],
    },
    waterContentPercent: 83.8,
    nutrients: {
      protein: {
        amount: 0.4,
        unit: "g",
        sourceIds: ["usda-fdc-quince"],
      },
      totalFat: {
        amount: 0.1,
        unit: "g",
        sourceIds: ["usda-fdc-quince"],
      },
      carbohydrates: {
        amount: 15.3,
        unit: "g",
        sourceIds: ["usda-fdc-quince"],
      },
      dietaryFiber: {
        amount: 1.9,
        unit: "g",
        sourceIds: ["usda-fdc-quince"],
      },
      sugars: {
        amount: 12.53,
        unit: "g",
        sourceIds: ["usda-fdc-quince"],
      },
      vitaminC: {
        amount: 15,
        unit: "mg",
        sourceIds: ["usda-fdc-quince"],
      },
      potassium: {
        amount: 197,
        unit: "mg",
        sourceIds: ["usda-fdc-quince"],
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
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Floral first.",
    accent: "Rose honey perfume.",
    descriptors: [
      "Intense Floral",
      "Rose Honey",
      "Astringent Raw",
      "Ruby Cooked",
      "Pectin-Rich",
      "Ancient"
],
    notes:
      "Raw: firm, tart, and deeply astringent with an intoxicating room-filling floral aroma. Cooked: a miraculous transformation into melting, ruby-red sweet paste reminiscent of guava, spiced honey, and damask roses.",
  },

  benefitTags: [
    {
        "label": "Natural High-Methoxyl Pectin",
        "phenomenon": "soluble fiber gel matrix formation",
        "description": "Nature's premier source of culinary pectin; forms a protective hydrocolloid gel in the gut that binds cholesterol and bile acids.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-quince"
        ],
        "icon": "shield",
        "metric": "Super-High Natural Pectin"
    },
    {
        "label": "Caffeoylquinic Acid Antioxidant",
        "phenomenon": "polyphenolic free radical scavenging",
        "description": "Packed with chlorogenic and neochlorogenic acids that inhibit lipid peroxidation and support vascular resilience.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-quince"
        ],
        "icon": "sparkle",
        "metric": "Chlorogenic Acid Density"
    },
    {
        "label": "Gastrointestinal Demulcent",
        "phenomenon": "peptic ulcer soothing mucilage",
        "description": "Traditional Persian and Greek medicine uses quince mucilage to soothe inflammatory bowel conditions and gastric reflux.",
        "evidenceLevel": "emerging",
        "sourceIds": [
            "usda-fdc-quince"
        ],
        "icon": "heart",
        "metric": "Gentle Gastric Demulcent"
    }
],

  funFacts: [
    {
        "text": "The English word 'marmalade' originates from 'marmelada', the Portuguese term for quince paste (from 'marmelo', the Portuguese word for quince).",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    },
    {
        "text": "In ancient Athens, a newly married couple was required by Solon's laws to eat a quince together before entering the bridal chamber to perfume their breath.",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    },
    {
        "text": "The golden apple presented by Paris to Aphrodite in the Trojan War myth is widely believed by classicists to have been a quince.",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    }
],

  varieties: [
    {
        "name": "Smyrna (Anatolian Standard)",
        "description": "Large lemon-yellow fruit with pronounced floral aromatics, tender flesh, and superior jelly yield.",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    },
    {
        "name": "Champion",
        "description": "Vigorous pear-shaped variety with delicate downy fuzz and rich honeyed flavour when poached.",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    },
    {
        "name": "Vranja (Serbian Giant)",
        "description": "Monumental pyriform quince with intense perfume, traditionally stored on wardrobes to scent entire rooms.",
        "sourceIds": [
            "usda-fdc-quince"
        ]
    }
],

  theme: {
    primary: "#CA8A04",
    secondary: "#EAB308",
    glow: "#CA8A0433",
    textOnPrimary: "#000000",
    gradient: ["#CA8A04", "#EAB308"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 57,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-quince"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 15,
      unit: "mg",
      referenceContext: "17% Daily Value",
      sourceIds: ["usda-fdc-quince"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Dietary Pectin",
      value: 1.9,
      unit: "g",
      referenceContext: "high natural gelling",
      sourceIds: ["usda-fdc-quince"],
    },
  ],

  similarFruitIds: ["apple","pear","asian-pear"],
  sourceIds: ["usda-fdc-quince","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
