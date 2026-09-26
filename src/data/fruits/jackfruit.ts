/**
 * Jackfruit — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 174665 ("Jackfruit, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const jackfruit: Fruit = {
  id: "jackfruit",
  slug: "jackfruit",
  name: "Jackfruit",

  editorial: {
    nickname: "Kathal · Panasa",
    tagline: "Colossus of the Western Ghats. Nature's largest botanical aggregate.",
    heroDescription:
      "Native to the ancient rainforests of the Western Ghats of Southwestern India, the jackfruit is the largest tree-borne fruit on the planet, with individual specimens reaching upwards of 40 kilograms. Encased in a formidable, tuberculated green rind, its interior holds hundreds of golden-yellow, waxy bulbs exuding an intoxicating, heady perfume of banana, pineapple, and honeyed mango.",
    pullQuotes: [
      {
        quote: "An ancient forest colossus anchored directly to the tree trunk, unlocking hundreds of golden honeyed bulbs of prehistoric majesty.",
        attribution: "Editorial",
      },
      {
        quote: "From savory tender green curry to melting ripe honeyed bulbs, the jackfruit is India's most versatile botanical miracle.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A nutrient-dense tropical staple delivering 448mg of potassium, sustaining complex energy, and 19% DV of Vitamin B6 per 100g.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Moraceae",
    genus: "Artocarpus",
    species: "heterophyllus",
    botanicalNotes: [
      "Belongs to the mulberry and fig family (Moraceae), closely related to breadfruit and cempedak.",
      "Botanically classified as a multiple aggregate fruit (syncarp) formed by the fusion of hundreds of individual female flowers along a central fleshy rachis.",
    ],
  },

  theme: {
    primary: "#EAB308",
    secondary: "#FEF08A",
    glow: "#EAB30840",
    gradient: ["#CA8A04", "#854D0E"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/jackfruit/hero.png",
      alt: "Large ripe jackfruit cut open showing golden yellow bulbs surrounding central core on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/jackfruit/card.png",
      alt: "Jackfruit - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/jackfruit/macro-break.png",
      alt: "Extreme macro photograph of golden jackfruit bulb fibrous texture and glistening sweet pulp",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Perianth Bulbs · The Cauliflorous Vault",
      captionText:
        "Each golden bulb is an enlarged, fleshy floral perianth enclosing an edible starch-rich seed, saturated with isopentyl isovalerate esters that produce its rich tropical aroma.",
    },
  },

  origin: {
    region: "Western Ghats, Southwestern India",
    coordinates: [10.85, 76.27],
    description:
      "Indigenous to the humid rainforests of the Western Ghats of Kerala, Karnataka, and Maharashtra. Cultivated in South Asia for at least 3,000 to 6,000 years, documented in ancient Sanskrit and Tamil Sangam literature as 'Panasa' and 'Pala'. Revered in Kerala as the official state fruit, it traveled along Indian Ocean maritime spice routes to Southeast Asia and East Africa.",
    grownTodayRegions: [
      "India (Kerala, Tamil Nadu, Karnataka, Assam, West Bengal)",
      "Bangladesh",
      "Thailand",
      "Indonesia",
      "Vietnam",
      "Sri Lanka",
      "Brazil",
      "Malaysia",
    ],
    sourceIds: ["usda-fdc-jackfruit"],
  },

  season: [
    {
      regionId: "south-asia-tropical",
      hemisphere: "north",
      months: [3, 4, 5, 6, 7],
      peakMonths: [4, 5, 6],
      label: "Spring & Summer Monsoon Harvest",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      regionId: "southeast-asia-equatorial",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [6, 7, 8],
      label: "Year-Round Lowland Production",
      sourceIds: ["usda-fdc-jackfruit"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 95,
      unit: "kcal",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    nutrients: {
      protein: {
        amount: 1.72,
        unit: "g",
        sourceIds: ["usda-fdc-jackfruit"],
      },
      totalFat: {
        amount: 0.64,
        unit: "g",
        sourceIds: ["usda-fdc-jackfruit"],
      },
      carbohydrates: {
        amount: 23.25,
        unit: "g",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      fiber: {
        amount: 1.5,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      totalSugars: {
        amount: 19.08,
        unit: "g",
        sourceIds: ["usda-fdc-jackfruit"],
      },
      vitaminC: {
        amount: 13.7,
        unit: "mg",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      vitaminB6: {
        amount: 0.329,
        unit: "mg",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      potassium: {
        amount: 448,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      magnesium: {
        amount: 29,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      calcium: {
        amount: 24,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-jackfruit"],
      },
      phosphorus: {
        amount: 21,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-jackfruit"],
      },
    },
    waterContentPercent: 73.46,
    micronutrientSignatures: [
      {
        name: "Elemental Potassium",
        amount: 448,
        unit: "mg",
        dailyValuePercent: 10,
        description: "High potassium content supporting natural fluid equilibrium and arterial tone",
      },
      {
        name: "Pyridoxine (Vitamin B6)",
        amount: 0.329,
        unit: "mg",
        dailyValuePercent: 19,
        description: "Coenzyme crucial for amino acid transamination and neurotransmitter synthesis",
      },
      {
        name: "Magnesium Reserve",
        amount: 29,
        unit: "mg",
        dailyValuePercent: 7,
        description: "Essential mineral supporting neuromuscular impulse transmission and enzymatic ATP stability",
      },
    ],
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
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Sun-drenched honey.",
    accent: "Pineapple ester warmth.",
    descriptors: [
      "Honeyed",
      "Crisp",
      "Pineapple",
      "Banana",
      "Musky",
      "Rich"
    ],
    notes:
      "When fully ripe, its voluptuous fragrance fills the air; in the firm 'Varikka' type, each bulb is delightfully crisp and non-slimy.",
  },

  benefitTags: [
    {
      label: "Sustained Energy & Stamina",
      phenomenon: "complex carbohydrates and B6",
      description:
        "Delivers easily digestible sugars balanced by fiber and Vitamin B6 to support efficient cellular energy metabolism.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jackfruit"],
      icon: "zap",
    },
    {
      label: "Cardiovascular Potassium Density",
      phenomenon: "vascular electrolyte balance",
      description:
        "Supplying 448mg of potassium per 100g, supporting normal blood pressure dynamics and muscular contraction.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jackfruit"],
      icon: "heart",
      metric: "448 mg / 100g",
    },
    {
      label: "Immunological Micronutrients",
      phenomenon: "vitamin C and bioflavonoids",
      description:
        "Contains natural carotenoids, Vitamin C, and prenylflavonoids that defend tissue against environmental oxidative stress.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jackfruit"],
      icon: "shield",
    },
  ],

  heroStats: [
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 448,
      unit: "mg",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      nutrientId: "vitaminB6",
      label: "Vitamin B6",
      value: 0.329,
      unit: "mg",
      referenceContext: "19% Daily Value",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 95,
      unit: "kcal",
      referenceContext: "dense tropical vitality",
      sourceIds: ["usda-fdc-jackfruit"],
    },
  ],

  varieties: [
    {
      name: "Varikka (Hard Flesh)",
      description: "The premier South Indian heirloom standard: firm, crunchy golden bulbs that remain delightfully crisp and non-slimy when fully ripe.",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      name: "Koozha (Soft Pulp)",
      description: "Traditional moist variety featuring exceptionally sweet, melting, custard-like pulp ideal for traditional desserts and fruit jams.",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      name: "Dang Rasimi",
      description: "Popular Southeast Asian commercial cultivar noted for compact trees, early heavy yields, and bright yellow crunchy sweet bulbs.",
      sourceIds: ["usda-fdc-jackfruit"],
    },
  ],

  funFacts: [
    {
      text: "The jackfruit tree produces fruit directly from its main trunk and primary branches—a rare botanical adaptation called cauliflory.",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      text: "In South India, the trio of mango, banana, and jackfruit is formally known as 'Mukkani' (the three royal fruits of Tamil tradition).",
      sourceIds: ["usda-fdc-jackfruit"],
    },
    {
      text: "Young, unripened green jackfruit has a neutral, meaty texture that shreds identically to pulled pork, making it a celebrated global plant-based culinary staple.",
      sourceIds: ["usda-fdc-jackfruit"],
    },
  ],

  similarFruitIds: ["banana", "mango", "papaya"],
  sourceIds: ["usda-fdc-jackfruit", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
