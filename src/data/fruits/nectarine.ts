/**
 * Nectarine — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-nectarine), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const nectarine: Fruit = {
  id: "nectarine",
  slug: "nectarine",
  name: "Nectarine",

  editorial: {
    nickname: "Shahi Aadoo · Nectarine",
    tagline: "The smooth velvet-free stone fruit. Concentrated sugar, acid, and wine aromatics.",
    heroDescription:
      "Possessing an ultra-smooth, mirror-like skin free of the downy peach fuzz, the nectarine (Prunus persica var. nucipersica) is nature's most dazzling stone fruit marvel. Resulting from a single natural recessive gene mutation, this glossy jewel concentrates sugars, malic acidity, and volatile aroma esters far more intensely than its fuzzy sibling, producing a crisp, wine-sweet explosion that defines high summer.",
    pullQuotes: [
      {
            "quote": "A peach stripped of its winter coat: sleek, vivid, and naked to the sun, bursting with an electric voltage of wine-rich sweetness.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies 87.59% structured water, 201mg Potassium, 5.4mg Vitamin C, and rich chlorogenic acid polyphenols.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/nectarine/hero.png",
      alt: "nectarine botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/nectarine/card.png",
      alt: "Nectarine - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/nectarine/macro-break.png",
      alt: "Macro photograph of nectarine",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Trichome-Free Cuticle · Concentrated Summer Wine",
      captionText: "Glossy crimson-blushed skin protecting dense, high-sugar freestone flesh with lactone perfume.",
    },
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rosaceae",
    genus: "Prunus",
    species: "persica var. nucipersica",
    botanicalNotes: [
      "Genetically identical to the peach except for a single recessive gene (myb25) that eliminates the formation of epidermal trichomes (fuzz).",
      "Because nectarine skin is hairless, the skin feels crisper to the bite and carries a significantly higher concentration of aromatic esters and carotenoids."
],
  },

  origin: {
    region: "Ancient China & Central Asian Silk Road",
    description:
      "Originating alongside the wild peach in ancient China over two thousand years ago, recorded during the Han Dynasty as 'the smooth peach' before traversing the Silk Road to Persia, Greece, and Rome.",
    coordinates: [34.3416, 108.9398],
    grownTodayRegions: [
      "China",
      "Spain",
      "Italy",
      "United States",
      "Chile",
      "Greece"
],
  sourceIds: ["usda-fdc-nectarine"],
  },

  season: [
    {
        "regionId": "temperate-mediterranean",
        "hemisphere": "north",
        "months": [
            5,
            6,
            7,
            8,
            9
        ],
        "peakMonths": [
            6,
            7,
            8
        ],
        "label": "May – September (peak summer season)",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 44,
      unit: "kcal",
      sourceIds: ["usda-fdc-nectarine"],
    },
    waterContentPercent: 87.59,
    nutrients: {
      protein: {
        amount: 1.06,
        unit: "g",
        sourceIds: ["usda-fdc-nectarine"],
      },
      totalFat: {
        amount: 0.32,
        unit: "g",
        sourceIds: ["usda-fdc-nectarine"],
      },
      carbohydrates: {
        amount: 10.55,
        unit: "g",
        sourceIds: ["usda-fdc-nectarine"],
      },
      dietaryFiber: {
        amount: 1.7,
        unit: "g",
        sourceIds: ["usda-fdc-nectarine"],
      },
      sugars: {
        amount: 7.89,
        unit: "g",
        sourceIds: ["usda-fdc-nectarine"],
      },
      vitaminC: {
        amount: 5.4,
        unit: "mg",
        sourceIds: ["usda-fdc-nectarine"],
      },
      potassium: {
        amount: 201,
        unit: "mg",
        sourceIds: ["usda-fdc-nectarine"],
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
      value: 6,
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
    lead: "Wine-sweet first.",
    accent: "Crisp nectarine floral snap.",
    descriptors: [
      "Wine-Sweet",
      "Fuzz-Free Skin",
      "Crisp Snap",
      "Lactonic Nectar",
      "Vibrant Acid",
      "Juicy"
],
    notes:
      "Intense, vivid, and deeply satisfying. Taut glossy skin snaps crisply, releasing a rushing torrent of concentrated peach-apricot nectar, sparkling malic acid, and sweet summer lactone perfume.",
  },

  benefitTags: [
    {
        "label": "Chlorogenic Acid Antioxidant Power",
        "phenomenon": "polyphenolic radical quenching",
        "description": "Packed with chlorogenic and neochlorogenic acids in its vibrant skin, shielding cellular DNA from reactive oxygen damage.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-nectarine"
        ],
        "icon": "sparkle",
        "metric": "Potent Phenolic Antioxidants"
    },
    {
        "label": "Potassium Cardiovascular Tone",
        "phenomenon": "endothelial sodium counter-regulation",
        "description": "Delivers 201mg potassium per 100g, supporting smooth muscle vasodilation and balanced resting blood pressure.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-nectarine"
        ],
        "icon": "heart",
        "metric": "201 mg Potassium"
    },
    {
        "label": "Soluble Pectin Digestive Flow",
        "phenomenon": "short-chain fatty acid gut fermentation",
        "description": "Supplies smooth soluble pectin that softens stool transit and feeds beneficial colonic microflora.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-nectarine"
        ],
        "icon": "shield",
        "metric": "1.7g Dietary Fiber"
    }
],

  funFacts: [
    {
        "text": "Peach trees can occasionally sprout nectarines via natural bud mutation ('sporting'), and nectarine stones can grow back into fuzzy peach trees!",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    },
    {
        "text": "Nectarines typically test 1 to 2 degrees Brix higher in natural sugar concentration than fuzzy peaches grown on the same orchard soil.",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    },
    {
        "text": "A single recessive gene mutation stops the development of epidermal hairs, producing the mirror-smooth skin and higher brix.",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    }
],

  varieties: [
    {
        "name": "Fantasia (Freestone Standard)",
        "description": "The classic commercial standard with bright yellow flesh, vibrant red blush, and rich sweet-tart balance.",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    },
    {
        "name": "Arctic Star (White Flesh Benchmark)",
        "description": "Superlative white-fleshed nectarine boasting ultra-high sweetness, low acidity, and floral peach-candy notes.",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    },
    {
        "name": "Zee Glo (Late Harvest Gold)",
        "description": "Deeply pigmented late-season fruit with crisp snapping flesh and intense wine-like complexity.",
        "sourceIds": [
            "usda-fdc-nectarine"
        ]
    }
],

  theme: {
    primary: "#E11D48",
    secondary: "#FB7185",
    glow: "#E11D4833",
    textOnPrimary: "#000000",
    gradient: ["#E11D48", "#FB7185"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 44,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-nectarine"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Potassium",
      value: 201,
      unit: "mg",
      referenceContext: "4% Daily Value",
      sourceIds: ["usda-fdc-nectarine"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Vitamin C",
      value: 5.4,
      unit: "mg",
      referenceContext: "6% Daily Value",
      sourceIds: ["usda-fdc-nectarine"],
    },
  ],

  similarFruitIds: ["peach","plum","apricot"],
  sourceIds: ["usda-fdc-nectarine","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
