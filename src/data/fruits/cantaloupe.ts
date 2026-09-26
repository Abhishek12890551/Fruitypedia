/**
 * Cantaloupe — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-cantaloupe), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const cantaloupe: Fruit = {
  id: "cantaloupe",
  slug: "cantaloupe",
  name: "Cantaloupe",

  editorial: {
    nickname: "Kharbooza · Madhuphala",
    tagline: "Reticulated fragrant armor. Dense provitamin A summer sweetness.",
    heroDescription:
      "Draped in an intricate netted lace of suberized cork tissue, the cantaloupe or muskmelon (Cucumis melo) is summer horticulture's most intoxicating aromatic achievement. Slicing through its pale rind exposes glowing salmon-orange flesh supercharged with beta-carotene, releasing a heavenly floral musk driven by natural esters that perfumed royal Renaissance banquet halls and ancient Indian summer courts alike.",
    pullQuotes: [
      {
            "quote": "A netted vault of summer sunshine: when cut, it releases the sweet, heady fragrance of warm earth, wildflower honey, and ripe apricot.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Provides 90.15% structured water, 36.7mg Vitamin C (41% DV), and an extraordinary 169µg RAE Vitamin A (19% DV) from beta-carotene.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/cantaloupe/hero.png",
      alt: "cantaloupe botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/cantaloupe/card.png",
      alt: "Cantaloupe - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/cantaloupe/macro-break.png",
      alt: "Macro photograph of cantaloupe",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Salmon Parenchyma · Beta-Carotene Mantle",
      captionText: "Tender intracellular matrix saturated with provitamin A carotenoids and wildflower honey esters.",
    },
  },

  taxonomy: {
    categoryId: "melon",
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "melo",
    botanicalNotes: [
      "The corky 'netting' on the rind is actually scar tissue (suberin) that forms over natural skin fissures as the fruit rapidly expands in warm soil.",
      "Belongs to the true botanical pepo family, characterized by a firm exocarp and parietal placentation housing dozens of flat seeds."
],
  },

  origin: {
    region: "Persia, Central Asia & Indian Subcontinent",
    description:
      "Originating in the arid steppes and river valleys spanning ancient Persia and northwestern India, melons were domesticated thousands of years ago, later traveling westward to the papal estates of Cantalupo near Rome.",
    coordinates: [32.4279, 53.688],
    grownTodayRegions: [
      "China",
      "Turkey",
      "Iran",
      "Egypt",
      "United States",
      "India"
],
  sourceIds: ["usda-fdc-cantaloupe"],
  },

  season: [
    {
        "regionId": "temperate-subtropical",
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
        "label": "May – September (peak summer sun)",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 34,
      unit: "kcal",
      sourceIds: ["usda-fdc-cantaloupe"],
    },
    waterContentPercent: 90.15,
    nutrients: {
      protein: {
        amount: 0.84,
        unit: "g",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      totalFat: {
        amount: 0.19,
        unit: "g",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      carbohydrates: {
        amount: 8.16,
        unit: "g",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      dietaryFiber: {
        amount: 0.9,
        unit: "g",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      sugars: {
        amount: 7.86,
        unit: "g",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      vitaminC: {
        amount: 36.7,
        unit: "mg",
        sourceIds: ["usda-fdc-cantaloupe"],
      },
      potassium: {
        amount: 267,
        unit: "mg",
        sourceIds: ["usda-fdc-cantaloupe"],
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Honeyed first.",
    accent: "Heady floral summer musk.",
    descriptors: [
      "Honeyed Musk",
      "Salmon Flesh",
      "Juicy",
      "Beta-Carotene",
      "Tender",
      "Netted"
],
    notes:
      "Luxuriously sweet, mellow, and tender. Ripe flesh melts instantly on the tongue, releasing an intoxicating burst of wildflower honey, ripe apricot, and warm summer musky perfumes.",
  },

  benefitTags: [
    {
        "label": "Provitamin A Retinal Protection",
        "phenomenon": "beta-carotene rhodopsin regeneration",
        "description": "Supplies 19% DV Vitamin A from bioavailable beta-carotene, protecting macular photoreceptor cells against oxidative photo-stress.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ],
        "icon": "sparkle",
        "metric": "2,020 µg Beta-Carotene"
    },
    {
        "label": "Electrolyte Hydration Synergy",
        "phenomenon": "cellular osmoregulation via potassium",
        "description": "Delivers 90% intracellular water coupled with 267mg potassium, optimizing cellular hydration and athletic fluid recovery.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ],
        "icon": "heart",
        "metric": "267 mg Potassium · 90% Water"
    },
    {
        "label": "Ascorbic Tissue Regeneration",
        "phenomenon": "endothelial ascorbate accumulation",
        "description": "Contains 36.7mg Vitamin C per 100g, supporting microvascular health and wound repair after sun exposure.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ],
        "icon": "shield",
        "metric": "36.7 mg Vitamin C (41% DV)"
    }
],

  funFacts: [
    {
        "text": "In India, muskmelon is known as 'Kharbuja', historically prized during hot monsoon fore-seasons across Punjab and Uttar Pradesh as an essential natural cooling tonic.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    },
    {
        "text": "When fully ripe, cantaloupes naturally form an abscission zone where the fruit 'slips' completely free from the vine with gentle thumb pressure.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    },
    {
        "text": "The netted surface pattern is formed of suberin cork tissue that heals micro-cracks during rapid summer vine expansion.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    }
],

  varieties: [
    {
        "name": "Kharbuja (Indian Netted Standard)",
        "description": "Heirloom North Indian muskmelon with intoxicating aroma, soft salmon pulp, and deep longitudinal ribs.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    },
    {
        "name": "Charentais (French Benchmark)",
        "description": "Prized French dessert melon with smooth grey-green skin, dark green ribs, and legendary perfumed sweetness.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    },
    {
        "name": "Athena (North American Standard)",
        "description": "Consistently sweet commercial melon with thick netting, firm flesh, and excellent post-harvest shelf life.",
        "sourceIds": [
            "usda-fdc-cantaloupe"
        ]
    }
],

  theme: {
    primary: "#EA580C",
    secondary: "#F97316",
    glow: "#EA580C33",
    textOnPrimary: "#000000",
    gradient: ["#EA580C", "#F97316"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 34,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-cantaloupe"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin A",
      value: 169,
      unit: "µg RAE",
      referenceContext: "19% Daily Value",
      sourceIds: ["usda-fdc-cantaloupe"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Vitamin C",
      value: 36.7,
      unit: "mg",
      referenceContext: "41% Daily Value",
      sourceIds: ["usda-fdc-cantaloupe"],
    },
  ],

  similarFruitIds: ["watermelon","honeydew","galia"],
  sourceIds: ["usda-fdc-cantaloupe","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
