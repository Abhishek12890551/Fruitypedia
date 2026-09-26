/**
 * Custard Apple (Sitaphal) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171714 ("Custard-apple, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const custardApple: Fruit = {
  id: "custard-apple",
  slug: "custard-apple",
  name: "Custard Apple",

  editorial: {
    nickname: "Sitaphal · Sharifa",
    tagline: "The sugar apple. Silky confectionery of the autumn hills.",
    heroDescription:
      "Cherished across the dry Deccan plateau of India as 'Sitaphal' and worldwide as the sugar apple, this member of the Annonaceae family is nature's finest living confectionery. Wrapped in a knobby, jade-green mosaic rind of interlocking segments, it pulls apart with gentle pressure to reveal luscious, snow-white carpels of velvety cream reminiscent of vanilla custard, pear, and sweet condensed milk.",
    pullQuotes: [
      {
        quote: "A jade armor yielding to pure velvety decadence, each snow-white segment tasting of cold vanilla cream and spun sugar.",
        attribution: "Editorial",
      },
      {
        quote: "Associated with devotion and autumn royalty, Sitaphal is India's most indulgent seasonal dessert fruit.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A rich, creamy autumn delicacy delivering 4.4g of dietary fiber and 36.3mg of Vitamin C per 100g alongside magnesium and potassium.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Annonaceae",
    genus: "Annona",
    species: "squamosa",
    botanicalNotes: [
      "Belongs to the ancient custard apple family (Annonaceae), closely related to cherimoya, soursop, and pawpaw.",
      "Botanically classified as a syncarp: a compound aggregate fruit formed by the fusion of numerous loosely adhering carpels around a central receptacle.",
    ],
  },

  theme: {
    primary: "#84CC16",
    secondary: "#ECFCCB",
    glow: "#84CC1640",
    gradient: ["#65A30D", "#4D7C0F"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/custard-apple/hero.png",
      alt: "Ripe green knobby custard apple pulled open displaying velvety white segments and dark seeds on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/custard-apple/card.png",
      alt: "Custard Apple - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/custard-apple/macro-break.png",
      alt: "Extreme macro photograph of velvety white custard apple pulp texture and glossy dark seed",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Syncarp Carpels · The Vanilla Matrix",
      captionText:
        "Each glistening white segment is an individual carpel containing high concentrations of sucrose, glucose, and fragrant vanillic notes embedded with fine dietary fiber sclereids.",
    },
  },

  origin: {
    region: "Tropical Americas & Caribbean",
    coordinates: [14.63, -90.51],
    description:
      "Indigenous to the lowland tropics of Central America and the West Indies. Introduced to India by Portuguese voyagers in the early 16th century, the tree found an ideal home in the arid, stony soils of Maharashtra, Andhra Pradesh, and Gujarat. In India it earned the venerated name 'Sitaphal' (named after Sita from the ancient Ramayana epic).",
    grownTodayRegions: [
      "India (Maharashtra, Andhra Pradesh, Gujarat, Telangana)",
      "Brazil",
      "Taiwan",
      "Thailand",
      "Mexico",
      "Egypt",
      "Philippines",
      "Australia (Queensland)",
    ],
    sourceIds: ["usda-fdc-custard-apple"],
  },

  season: [
    {
      regionId: "india-deccan",
      hemisphere: "north",
      months: [8, 9, 10, 11],
      peakMonths: [9, 10],
      label: "Autumn Harvest (September – November)",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      regionId: "southern-subtropical",
      hemisphere: "south",
      months: [2, 3, 4, 5],
      peakMonths: [3, 4],
      label: "Southern Autumn Harvest",
      sourceIds: ["usda-fdc-custard-apple"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 94,
      unit: "kcal",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    nutrients: {
      protein: {
        amount: 2.06,
        unit: "g",
        sourceIds: ["usda-fdc-custard-apple"],
      },
      totalFat: {
        amount: 0.29,
        unit: "g",
        sourceIds: ["usda-fdc-custard-apple"],
      },
      carbohydrates: {
        amount: 23.64,
        unit: "g",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      fiber: {
        amount: 4.4,
        unit: "g",
        dailyValuePercent: 16,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      totalSugars: {
        amount: 19.24,
        unit: "g",
        sourceIds: ["usda-fdc-custard-apple"],
      },
      vitaminC: {
        amount: 36.3,
        unit: "mg",
        dailyValuePercent: 40,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      potassium: {
        amount: 247,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      magnesium: {
        amount: 21,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      calcium: {
        amount: 24,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      iron: {
        amount: 0.6,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-custard-apple"],
      },
      phosphorus: {
        amount: 32,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-custard-apple"],
      },
    },
    waterContentPercent: 73.23,
    micronutrientSignatures: [
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 36.3,
        unit: "mg",
        dailyValuePercent: 40,
        description: "Abundant antioxidant protecting against oxidative free-radical damage",
      },
      {
        name: "Dietary Soluble Fiber",
        amount: 4.4,
        unit: "g",
        dailyValuePercent: 16,
        description: "Dense fiber network supporting gradual carbohydrate assimilation and colonic wellbeing",
      },
      {
        name: "Magnesium & Potassium Duo",
        amount: 268,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Synergistic minerals assisting cardiac rhythm regularity and muscular ease",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
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
    lead: "Vanilla cream.",
    accent: "Melting sugar custard.",
    descriptors: [
      "Custard",
      "Vanilla",
      "Granular",
      "Melting",
      "Honeyed",
      "Sweet"
    ],
    notes:
      "Best consumed when the segments easily spread apart upon touch; the creamy pulp is traditionally churned into iconic Indian Sitaphal ice creams and basundi.",
  },

  benefitTags: [
    {
      label: "Dietary Digestive Fiber",
      phenomenon: "prebiotic bulk and intestinal motility",
      description:
        "Providing 4.4g fiber per 100g, supporting digestive regularity and nourishing beneficial gut microbiota.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-custard-apple"],
      icon: "activity",
      metric: "4.4 g fiber",
    },
    {
      label: "Immunological Vitamin C Support",
      phenomenon: "collagen and leukocyte defense",
      description:
        "Delivers 40% Daily Value of Vitamin C to bolster immune response during seasonal autumn shifts.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-custard-apple"],
      icon: "shield",
      metric: "36.3 mg / 100g",
    },
    {
      label: "Cellular Energy & Neuromuscular Ease",
      phenomenon: "magnesium and potassium synergy",
      description:
        "Assists muscular relaxation and normal nerve impulse transmission with natural magnesium and potassium.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-custard-apple"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Fiber",
      value: 4.4,
      unit: "g",
      referenceContext: "16% Daily Value",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 36.3,
      unit: "mg",
      referenceContext: "40% Daily Value",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 94,
      unit: "kcal",
      referenceContext: "velvety natural energy",
      sourceIds: ["usda-fdc-custard-apple"],
    },
  ],

  varieties: [
    {
      name: "Balanagar",
      description: "The most popular commercial variety of Andhra Pradesh and Telangana: large fruit with prominent green carpels, high pulp recovery, and intensely sweet vanilla flavor.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      name: "Mammoth",
      description: "Heirloom cultivar known for extra-large fruit size, thick rinds, fewer seeds per segment, and exceptionally rich creamy texture.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      name: "Red Sitaphal",
      description: "Distinctive ornamental cultivar featuring purplish-pink rinds with pink-tinged ivory pulp and rich dessert sweetness.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
  ],

  funFacts: [
    {
      text: "Custard apple pulp is so naturally rich and thick that in Indian dessert craft, it is used directly as a cream substitute to make world-famous Sitaphal ice cream without added binders.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      text: "Custard apple seeds contain natural acetogenins and have traditionally been powdered to protect granaries and crops from insect pests.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
    {
      text: "The fruit must be handled with utmost care once ripe; within 24 hours of opening, the sweet floral fragrance reaches its peak before natural fermentation begins.",
      sourceIds: ["usda-fdc-custard-apple"],
    },
  ],

  similarFruitIds: ["banana", "papaya", "mango"],
  sourceIds: ["usda-fdc-custard-apple", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
