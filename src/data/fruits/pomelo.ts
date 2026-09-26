/**
 * Pomelo — Production fruit monograph.
 *
 * All nutrition values derived from USDA FoodData Central SR Legacy
 * (usda-fdc-pomelo), accessed 2026-09-22.
 * Values are per 100g as reported by analytical sources.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const pomelo: Fruit = {
  id: "pomelo",
  slug: "pomelo",
  name: "Pomelo",

  editorial: {
    nickname: "Chakotra · Mahanimbuka",
    tagline: "The monumental citrus patriarch. Giant floral non-bitter vesicles.",
    heroDescription:
      "Reigning as the undisputed giant of the Citrus genus with fruits often reaching bowling-ball dimensions and 2 kilograms in weight, the pomelo (Citrus maxima) is an ancient wild patriarch. Protected within a thick, velvety white albedo jacket, its colossal, firm, glistening juice vesicles separate cleanly without dripping, delivering a sophisticated, non-acidic floral honey sweetness without the harshness of smaller citrus.",
    pullQuotes: [
      {
            "quote": "The venerable grandfather of the orange and grapefruit: colossal in stature, noble in restraint, shedding its thick winter coat to reveal crystalline teardrops of sweet sunshine.",
            "attribution": "Editorial"
      }
],
    nutritionDescription:
      "Supplies 89.1g intracellular water, 61mg Vitamin C (**68% DV**), 216mg Potassium, and zero cholesterol or saturated fats.",
  },

  
  images: {
    hero: {
      src: "/images/fruits/pomelo/hero.png",
      alt: "pomelo botanical still life on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/pomelo/card.png",
      alt: "Pomelo - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/pomelo/macro-break.png",
      alt: "Macro photograph of pomelo",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Colossal Sacs · The Ancient Patriarch",
      captionText: "Oversized, non-dripping crystalline vesicles brimming with gentle floral honey sweetness.",
    },
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "maxima",
    botanicalNotes: [
      "The largest of all citrus fruits, measuring up to 30 cm in diameter and weighing up to 2–3 kg.",
      "One of the foundational wild true citrus species; cross-bred with the mandarin, it gave rise to the sweet orange."
],
  },

  origin: {
    region: "Southeast Asia & Indo-China Archipelago",
    description:
      "Native to the floodplains and coastal valleys of Southeast Asia, Malaysia, and Southern China, where wild trees still thrive in tropical estuaries, celebrated in regional ceremonies and Mid-Autumn festivals for millennia.",
    coordinates: [11.5564, 104.9282],
    grownTodayRegions: [
      "China",
      "Malaysia",
      "Thailand",
      "India",
      "Vietnam",
      "United States"
],
  sourceIds: ["usda-fdc-pomelo"],
  },

  season: [
    {
        "regionId": "tropical-subtropical-asia",
        "hemisphere": "north",
        "months": [
            9,
            10,
            11,
            12,
            1,
            2
        ],
        "peakMonths": [
            10,
            11,
            12
        ],
        "label": "September – February (peak autumn/winter harvest)",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    }
],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 38,
      unit: "kcal",
      sourceIds: ["usda-fdc-pomelo"],
    },
    waterContentPercent: 89.1,
    nutrients: {
      protein: {
        amount: 0.76,
        unit: "g",
        sourceIds: ["usda-fdc-pomelo"],
      },
      totalFat: {
        amount: 0.04,
        unit: "g",
        sourceIds: ["usda-fdc-pomelo"],
      },
      carbohydrates: {
        amount: 9.62,
        unit: "g",
        sourceIds: ["usda-fdc-pomelo"],
      },
      dietaryFiber: {
        amount: 1,
        unit: "g",
        sourceIds: ["usda-fdc-pomelo"],
      },
      sugars: {
        amount: 6.9,
        unit: "g",
        sourceIds: ["usda-fdc-pomelo"],
      },
      vitaminC: {
        amount: 61,
        unit: "mg",
        sourceIds: ["usda-fdc-pomelo"],
      },
      potassium: {
        amount: 216,
        unit: "mg",
        sourceIds: ["usda-fdc-pomelo"],
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
      value: 3,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Floral first.",
    accent: "Gentle sweet melon citrus.",
    descriptors: [
      "Colossal Vesicle",
      "Floral Honey",
      "Mild Low-Acid",
      "Thick Albedo",
      "Clean Snap",
      "Noble"
],
    notes:
      "Unlike lemons or grapefruits, pomelo offers a mild, gentle sweetness with virtually zero biting acid. Giant, crunchy vesicles burst cleanly between teeth with subtle floral notes of sweet table grape, lime blossom, and honeycomb.",
  },

  benefitTags: [
    {
        "label": "High-Density Ascorbic Shield",
        "phenomenon": "leukocyte antioxidant protection",
        "description": "Supplies 68% DV Vitamin C per 100g, scavenging reactive oxygen species and reinforcing epithelial barriers.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-pomelo"
        ],
        "icon": "sparkle",
        "metric": "61 mg Vitamin C (68% DV)"
    },
    {
        "label": "Potassium Neurovascular Balance",
        "phenomenon": "membrane potential myocardial regulation",
        "description": "Rich in bioavailable potassium (216mg/100g) with near-zero sodium, promoting healthy vascular tone and balanced arterial pressure.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-pomelo"
        ],
        "icon": "heart",
        "metric": "216 mg Potassium"
    },
    {
        "label": "Albedo Pectin Hydrocolloid",
        "phenomenon": "soluble fiber cholesterol binding",
        "description": "The monumental white albedo is one of nature's richest sources of high-methoxyl pectin, binding digestive bile acids.",
        "evidenceLevel": "established",
        "sourceIds": [
            "usda-fdc-pomelo"
        ],
        "icon": "shield",
        "metric": "High-Methoxyl Soluble Pectin"
    }
],

  funFacts: [
    {
        "text": "In China and Vietnam, pomelos are carved or sculpted into ornamental decorative displays for Lunar New Year and the Mid-Autumn Moon Festival.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    },
    {
        "text": "In India, the fruit is affectionately known as 'Chakotra' or 'Batabi Lebu' in Bengal, where the crunchy vesicles are tossed with mustard oil, green chillies, and rock salt.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    },
    {
        "text": "Captain Shaddock brought pomelo seeds from Polynesia to the Caribbean in the 17th century, where it was called the 'Shaddock'.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    }
],

  varieties: [
    {
        "name": "Nam Roi (Mekong Delta Benchmark)",
        "description": "World-famous seedless Vietnamese cultivar with sweet-tart yellow-green flesh and pleasant floral aroma.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    },
    {
        "name": "Khao Namphueng (Honey Pomelo)",
        "description": "Prized Thai cultivar featuring sweet, golden-amber honeyed vesicles with zero bitterness.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    },
    {
        "name": "Deppang / Chakotra (Indian Heirloom)",
        "description": "Substantial pink-fleshed subcontinental heirloom known for crisp crunchy vesicles.",
        "sourceIds": [
            "usda-fdc-pomelo"
        ]
    }
],

  theme: {
    primary: "#EAB308",
    secondary: "#FDE047",
    glow: "#EAB30833",
    textOnPrimary: "#000000",
    gradient: ["#EAB308", "#FDE047"],
  },

  
  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 38,
      unit: "kcal",
      referenceContext: "per 100g serving",
      sourceIds: ["usda-fdc-pomelo"],
    },
    {
      nutrientId: "primaryMicro",
      label: "Vitamin C",
      value: 61,
      unit: "mg",
      referenceContext: "68% Daily Value",
      sourceIds: ["usda-fdc-pomelo"],
    },
    {
      nutrientId: "secondaryMicro",
      label: "Potassium",
      value: 216,
      unit: "mg",
      referenceContext: "electrolyte balance",
      sourceIds: ["usda-fdc-pomelo"],
    },
  ],

  similarFruitIds: ["grapefruit","orange","mandarin"],
  sourceIds: ["usda-fdc-pomelo","usda-fdc","fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },

};
