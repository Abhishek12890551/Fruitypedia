/**
 * Pineapple — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 169124 ("Pineapple, raw, all varieties"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const pineapple: Fruit = {
  id: "pineapple",
  slug: "pineapple",
  name: "Pineapple",

  editorial: {
    nickname: "Ananas · Bahunetra",
    tagline: "Crowned sovereign of the tropics. Golden reservoir of bromelain vitality.",
    heroDescription:
      "Crowned with an iconic spiky tuft of stiff leaves and cloaked in a diamond-patterned hexagonal armor, the pineapple is the undisputed sovereign of the Bromeliaceae family. Originating in the Parana-Paraguay river basin of South America, this remarkable multiple fruit delivers an exhilarating burst of sweet-tart golden juice, driven by bright citric and malic acids, rich dietary manganese, and the unique proteolytic enzyme complex bromelain.",
    pullQuotes: [
      {
        quote: "A crowned golden fortress of fused floral berries, exploding with the vibrant sweet-acid vitality of tropical sunshine.",
        attribution: "Editorial",
      },
      {
        quote: "Historically celebrated across European courts as the supreme emblem of hospitality, the pineapple remains nature's grandest edible architectural marvel.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A hydrating tropical wonder containing 86% structured water, delivering 40% Daily Value of manganese and 47.8mg of Vitamin C per 100g alongside bromelain enzymes.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Bromeliaceae",
    genus: "Ananas",
    species: "comosus",
    botanicalNotes: [
      "Belongs to the bromeliad family (Bromeliaceae), the only widely cultivated agricultural fruit in this largely epiphytic family.",
      "Botanically classified as a sorosis: a multiple fruit formed by the coalescence of dozens of individual spirally arranged flowers around a central fibrous core.",
    ],
  },

  theme: {
    primary: "#EAB308",
    secondary: "#FEF08A",
    glow: "#EAB30840",
    gradient: ["#CA8A04", "#FACC15"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/pineapple/hero.png",
      alt: "Fresh golden pineapple with green leafy crown sliced open showing juicy yellow interior on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/pineapple/card.png",
      alt: "Pineapple - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/pineapple/macro-break.png",
      alt: "Extreme macro photograph of golden pineapple juicy fruit eyes showing crystalline juice vesicles and fiber",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Fused Berrylets · The Bromelain Axis",
      captionText:
        "Each hexagonal 'eye' represents an individual flower whose sepal and bract fused during development, storing sweet fructose fluid and pressurized proteolytic bromelain enzymes.",
    },
  },

  origin: {
    region: "Parana-Paraguay River Basin, South America",
    coordinates: [-25.26, -57.57],
    description:
      "Native to the tropical basin between southern Brazil and Paraguay. Domesticated and dispersed across South and Central America and the Caribbean by Indigenous Tupi-Guarani voyagers, who called it 'nanas' (excellent fruit). Encountered by Columbus in Guadeloupe in 1493, Spanish and Portuguese navigators quickly carried pineapples to India, the Philippines, and Hawaii.",
    grownTodayRegions: [
      "Costa Rica",
      "Philippines",
      "Brazil",
      "Indonesia",
      "India (Assam, West Bengal, Kerala)",
      "China",
      "Thailand",
      "Mexico",
    ],
    sourceIds: ["usda-fdc-pineapple"],
  },

  season: [
    {
      regionId: "tropical-equatorial",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [3, 4, 5, 6, 7],
      label: "Spring & Summer Peak (Year-Round Tropical Supply)",
      sourceIds: ["usda-fdc-pineapple"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 50,
      unit: "kcal",
      sourceIds: ["usda-fdc-pineapple"],
    },
    nutrients: {
      protein: {
        amount: 0.54,
        unit: "g",
        sourceIds: ["usda-fdc-pineapple"],
      },
      totalFat: {
        amount: 0.12,
        unit: "g",
        sourceIds: ["usda-fdc-pineapple"],
      },
      carbohydrates: {
        amount: 13.12,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pineapple"],
      },
      fiber: {
        amount: 1.4,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pineapple"],
      },
      totalSugars: {
        amount: 9.85,
        unit: "g",
        sourceIds: ["usda-fdc-pineapple"],
      },
      vitaminC: {
        amount: 47.8,
        unit: "mg",
        dailyValuePercent: 53,
        sourceIds: ["usda-fdc-pineapple"],
      },
      manganese: {
        amount: 0.927,
        unit: "mg",
        dailyValuePercent: 40,
        sourceIds: ["usda-fdc-pineapple"],
      },
      copper: {
        amount: 0.11,
        unit: "mg",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-pineapple"],
      },
      thiamin: {
        amount: 0.079,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-pineapple"],
      },
      vitaminB6: {
        amount: 0.112,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-pineapple"],
      },
      potassium: {
        amount: 109,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-pineapple"],
      },
    },
    waterContentPercent: 86.0,
    micronutrientSignatures: [
      {
        name: "Proteolytic Bromelain Complex",
        amount: 120,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Enzyme matrix breaking protein peptide bonds, widely studied for supporting joint comfort and post-exercise recovery",
      },
      {
        name: "Trace Mineral Manganese",
        amount: 0.927,
        unit: "mg",
        dailyValuePercent: 40,
        description: "Essential cofactor for mitochondrial superoxide dismutase and bone collagen matrix synthesis",
      },
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 47.8,
        unit: "mg",
        dailyValuePercent: 53,
        description: "Generous antioxidant concentration protecting vascular walls and facilitating non-heme iron absorption",
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
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Electric gold.",
    accent: "Succulent tropical fizz.",
    descriptors: [
      "Citric",
      "Honeyed",
      "Fizzy",
      "Succulent",
      "Bromelain",
      "Tangy"
    ],
    notes:
      "The bottom third of a pineapple is naturally sweeter and denser in sugars than the top, as gravitational starch-to-sugar conversion accumulates near the base.",
  },

  benefitTags: [
    {
      label: "Enzymatic Comfort & Recovery",
      phenomenon: "bromelain proteolytic activity",
      description:
        "Contains natural bromelain endopeptidases that support healthy post-exertion recovery and comfortable protein digestion.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pineapple"],
      icon: "zap",
    },
    {
      label: "Antioxidant Manganese Density",
      phenomenon: "manganese superoxide dismutase activation",
      description:
        "Delivering 40% DV manganese per 100g, fueling key enzymatic antioxidant complexes inside cellular mitochondria.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pineapple"],
      icon: "shield",
      metric: "0.927 mg / 100g",
    },
    {
      label: "Immunological Vitamin C",
      phenomenon: "leukocyte and collagen synthesis",
      description:
        "Supplying 53% DV of Vitamin C per 100g, supporting mucosal defense and structural cellular resilience.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pineapple"],
      icon: "sun",
    },
  ],

  heroStats: [
    {
      nutrientId: "manganese",
      label: "Manganese",
      value: 0.927,
      unit: "mg",
      referenceContext: "40% Daily Value",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 47.8,
      unit: "mg",
      referenceContext: "53% Daily Value",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 50,
      unit: "kcal",
      referenceContext: "hydrating tropical vibrancy",
      sourceIds: ["usda-fdc-pineapple"],
    },
  ],

  varieties: [
    {
      name: "Smooth Cayenne",
      description: "Historic commercial benchmark: large cylindrical fruit with spineless leaves, pale yellow juicy flesh, and high acid-sugar ratio.",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      name: "MD-2 (Golden Ripe)",
      description: "The premier global export cultivar: extra-sweet bright golden flesh, lower acidity, and quadruple the Vitamin C of older cultivars.",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      name: "Queen (Victoria)",
      description: "Petite, highly fragrant heirloom variety celebrated in India and South Africa: rich golden-yellow crunchy flesh with exceptional aroma.",
      sourceIds: ["usda-fdc-pineapple"],
    },
  ],

  funFacts: [
    {
      text: "The prickling or tingling sensation felt on the tongue when eating fresh pineapple is caused by bromelain actively breaking down surface proteins on the palate.",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      text: "It takes almost three years for a single pineapple plant to grow, blossom, and yield a solitary ripe fruit from a planted crown.",
      sourceIds: ["usda-fdc-pineapple"],
    },
    {
      text: "In 18th-century Europe, pineapples were so rare and astronomically expensive that aristocrats rented them for the evening purely to carry as symbols of lavish wealth at parties.",
      sourceIds: ["usda-fdc-pineapple"],
    },
  ],

  similarFruitIds: ["mango", "orange", "kiwi"],
  sourceIds: ["usda-fdc-pineapple", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
