/**
 * Papaya — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 172670 ("Papayas, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const papaya: Fruit = {
  id: "papaya",
  slug: "papaya",
  name: "Papaya",

  editorial: {
    nickname: "Papita · Erandakarkati",
    tagline: "Carotenoid sunrise. Enzymatic marvel of the tropical canopy.",
    heroDescription:
      "Celebrated by Christopher Columbus as the 'fruit of the angels,' papaya is an extraordinary herbaceous wonder of the Caricaceae family. Slicing open its slender, golden-orange rind reveals vibrant salmon-colored buttery pulp enveloping a central cavity studded with caviar-like peppery black seeds. Packed with the unique proteolytic enzyme papain and rich beta-cryptoxanthin carotenoids, it offers gentle, honeyed tropical sweetness.",
    pullQuotes: [
      {
        quote: "A luminous tropical sunrise sculpted in succulent salmon flesh, carrying the ancient enzymatic power of papain.",
        attribution: "Editorial",
      },
      {
        quote: "With its peppery seeds and buttery sweet pulp, the papaya is nature's most soothing digestive cordial.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A soothing digestive fruit composed of 88% structured cellular hydration, delivering 61mg of Vitamin C per 100g alongside potent proteolytic papain enzymes.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Caricaceae",
    genus: "Carica",
    species: "papaya",
    botanicalNotes: [
      "Belongs to the small tropical family Caricaceae, produced on large, single-stemmed semi-woody herbaceous giant plants rather than true woody trees.",
      "Botanically classified as a large fleshy berry with parietal placentation, containing hundreds of gelatinous sarcotesta-coated seeds.",
    ],
  },

  theme: {
    primary: "#F97316",
    secondary: "#FED7AA",
    glow: "#F9731640",
    gradient: ["#EA580C", "#FBBF24"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/papaya/hero.png",
      alt: "Ripe papaya sliced in half lengthwise displaying vivid orange flesh and black seeds on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/papaya/card.png",
      alt: "Papaya - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/papaya/macro-break.png",
      alt: "Extreme macro photograph of ripe papaya flesh texture and glistening black gelatinous seeds",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Carotenoid Mesocarp · The Papain Wells",
      captionText:
        "The melting salmon-orange pulp is packed with lipid-soluble beta-cryptoxanthin and lycopene micelles, buffered by laticifer vessels rich in the proteolytic enzyme papain.",
    },
  },

  origin: {
    region: "Mesoamerica & Tropical Central America",
    coordinates: [17.98, -92.93],
    description:
      "Native to the tropical lowlands of southern Mexico and Central America. Domesticated thousands of years ago by Indigenous Maya and Olmec peoples. Carried to the Caribbean, the Philippines, and India by 16th-century Spanish and Portuguese maritime trade routes, papaya is now deeply rooted in Indian tropical agriculture, with India leading global production.",
    grownTodayRegions: [
      "India (Andhra Pradesh, Gujarat, Karnataka)",
      "Brazil",
      "Mexico",
      "Indonesia",
      "Nigeria",
      "Dominican Republic",
      "Philippines",
      "United States (Hawaii)",
    ],
    sourceIds: ["usda-fdc-papaya"],
  },

  season: [
    {
      regionId: "india-tropical",
      hemisphere: "north",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [9, 10, 11, 12, 1],
      label: "Year-Round Harvest (Autumn-Winter Peak)",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      regionId: "equatorial-global",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [4, 5, 6],
      label: "Continuous Tropical Canopy Yield",
      sourceIds: ["usda-fdc-papaya"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 43,
      unit: "kcal",
      sourceIds: ["usda-fdc-papaya"],
    },
    nutrients: {
      protein: {
        amount: 0.47,
        unit: "g",
        sourceIds: ["usda-fdc-papaya"],
      },
      totalFat: {
        amount: 0.26,
        unit: "g",
        sourceIds: ["usda-fdc-papaya"],
      },
      carbohydrates: {
        amount: 10.82,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-papaya"],
      },
      fiber: {
        amount: 1.7,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-papaya"],
      },
      totalSugars: {
        amount: 7.82,
        unit: "g",
        sourceIds: ["usda-fdc-papaya"],
      },
      vitaminC: {
        amount: 60.9,
        unit: "mg",
        dailyValuePercent: 68,
        sourceIds: ["usda-fdc-papaya"],
      },
      vitaminA: {
        amount: 47,
        unit: "µg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-papaya"],
      },
      vitaminE: {
        amount: 0.3,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-papaya"],
      },
      folate: {
        amount: 37,
        unit: "µg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-papaya"],
      },
      potassium: {
        amount: 182,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-papaya"],
      },
      magnesium: {
        amount: 21,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-papaya"],
      },
      calcium: {
        amount: 20,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-papaya"],
      },
    },
    waterContentPercent: 88.06,
    micronutrientSignatures: [
      {
        name: "Proteolytic Papain Enzyme",
        amount: 140,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Potent endopeptidase breaking peptide bonds to ease digestive protein hydrolysis",
      },
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 60.9,
        unit: "mg",
        dailyValuePercent: 68,
        description: "Essential antioxidant supporting tissue repair and phagocyte cellular function",
      },
      {
        name: "Beta-Cryptoxanthin",
        amount: 589,
        unit: "µg",
        dailyValuePercent: 0,
        description: "Bioavailable provitamin A carotenoid delivering rich macular and epithelial nourishment",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 6,
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
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Melting first.",
    accent: "Gentle floral honey.",
    descriptors: [
      "Velvety",
      "Melting",
      "Honeyed",
      "Musky",
      "Tropical",
      "Mild"
    ],
    notes:
      "Best enjoyed chilled with a squeeze of fresh lime, which elevates its mellow sugars and activates its aromatic bouquet.",
  },

  benefitTags: [
    {
      label: "Enzymatic Digestive Comfort",
      phenomenon: "papain proteolytic action",
      description:
        "Contains natural papain enzymes that assist protein cleavage in the upper digestive tract, promoting comfortable postprandial digestion.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-papaya"],
      icon: "zap",
    },
    {
      label: "Immunological Vitamin C",
      phenomenon: "ascorbic cellular defense",
      description:
        "Supplying 61mg of Vitamin C per 100g (68% DV), aiding white blood cell integrity and collagen synthesis.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-papaya"],
      icon: "shield",
      metric: "60.9 mg / 100g",
    },
    {
      label: "Skin & Ocular Carotenoids",
      phenomenon: "provitamin A and lycopene",
      description:
        "Loaded with beta-cryptoxanthin and lycopene, promoting epithelial cellular renewal and retinal photo-protection.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-papaya"],
      icon: "sun",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 60.9,
      unit: "mg",
      referenceContext: "68% Daily Value",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 43,
      unit: "kcal",
      referenceContext: "hydrating low energy density",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      nutrientId: "folate",
      label: "Folate (B9)",
      value: 37,
      unit: "µg",
      referenceContext: "9% Daily Value",
      sourceIds: ["usda-fdc-papaya"],
    },
  ],

  varieties: [
    {
      name: "Red Lady",
      description: "Premier high-yielding hybrid cultivar celebrated across India: early-bearing, deep red-orange sweet pulp, and exceptional resistance to papaya ringspot virus.",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      name: "Pusa Delicious",
      description: "Indian gynodioecious selection developed at IARI, noted for rich orange-yellow flesh, deep cavity fragrance, and outstanding brix sweetness.",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      name: "Solo (Hawaiian)",
      description: "Petite, single-serving table standard with golden skin, melting salmon flesh, and delicate floral perfume.",
      sourceIds: ["usda-fdc-papaya"],
    },
  ],

  funFacts: [
    {
      text: "Unripe green papaya produces thick white latex containing up to 100 times more papain than the ripe fruit, utilized worldwide as an organic culinary meat tenderizer.",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      text: "Papaya seeds are completely edible and have a sharp, peppery watercress bite; they can be dried and ground as an artisanal pepper substitute.",
      sourceIds: ["usda-fdc-papaya"],
    },
    {
      text: "India produces over 40% of the world's commercial papayas, harvesting over 5.5 million metric tons annually.",
      sourceIds: ["usda-fdc-papaya"],
    },
  ],

  similarFruitIds: ["mango", "guava", "watermelon"],
  sourceIds: ["usda-fdc-papaya", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
