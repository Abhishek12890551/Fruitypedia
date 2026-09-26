/**
 * Kiwi — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171687 ("Kiwifruit, green, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 6
 */

import type { Fruit } from "@/types";

export const kiwi: Fruit = {
  id: "kiwi",
  slug: "kiwi",
  name: "Kiwi",

  editorial: {
    nickname: "Kiwi Phal · Him-Amrit",
    tagline: "Botanical berry. Concentrated vitamin C and proteolytic actinidain.",
    heroDescription:
      "Originating in the forested valleys along China's Yangtze River where it was celebrated as mǐhóutáo for over a millennium before captivating 20th-century New Zealand growers, the green kiwifruit is a botanical berry of extraordinary biochemical power. Beneath its fuzzy, russet-brown exocarp lies an electric emerald-green parenchyma packed with more Vitamin C than oranges, radiating black seeds, and the unique digestive enzyme actinidain.",
    pullQuotes: [
      {
        quote: "Beneath a russet coat of down lies an electric emerald solar system—hundreds of jet-black seeds orbiting a creamy, sunlit core.",
        attribution: "Editorial",
      },
      {
        quote: "A single fuzzy berry packs more bioavailable ascorbic acid than an entire Seville orange, delivering brilliant citric vitality in every translucent slice.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Contains 83% structured water, an astonishing 92.7mg of Vitamin C per 100g (over 100% Daily Value), and 40.3µg of Vitamin K.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Actinidiaceae",
    genus: "Actinidia",
    species: "deliciosa",
    botanicalNotes: [
      "Belongs to the genus Actinidia in the family Actinidiaceae, comprising roughly 40-60 vigorous, deciduous woody climbing vines.",
      "Botanically classified as a true multi-seeded berry with a hairy chartaceous exocarp, vivid green fleshy mesocarp, and radiating rows of small black seeds surrounding a pale central placenta.",
    ],
  },

  theme: {
    primary: "#84CC16",
    secondary: "#BEF264",
    glow: "#84CC1640",
    gradient: ["#84CC16", "#3F6212"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/kiwi/hero.jpg",
      alt: "Cross-section of ripe kiwi showing vibrant green flesh and radial black seeds on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/kiwi/card.png",
      alt: "Kiwi - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/kiwi/macro-break.png",
      alt: "Extreme macro photograph of sliced green kiwi showing emerald cells, black seeds, and white core",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Radial Parenchyma · The Actinidain Core",
      captionText:
        "The translucent emerald flesh owes its vivid hue to persistent chlorophyll, with radiating radial rays of mucilaginous cells containing the potent proteolytic cysteine protease actinidain.",
    },
  },

  origin: {
    region: "Chang Jiang (Yangtze) River Valley, China",
    coordinates: [30.59, 114.30],
    description:
      "Native to the mist-shrouded hillside forests of central and eastern China (particularly Hubei and Sichuan provinces). Recorded in Song Dynasty pharmacopeias as early as the 12th century. Introduced to New Zealand in 1904 by Mary Isabel Fraser, where commercial nurserymen bred the iconic large-fruited 'Hayward' cultivar.",
    grownTodayRegions: [
      "China (Shaanxi & Sichuan)",
      "New Zealand (Bay of Plenty)",
      "Italy (Latina & Piedmont)",
      "Chile",
      "Greece",
      "France",
      "United States (California)",
      "Turkey",
      "Iran",
      "Portugal",
    ],
    sourceIds: ["usda-fdc-kiwi"],
  },

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    waterContentPercent: 83.07,
    calories: {
      amount: 61,
      unit: "kcal",
      sourceIds: ["usda-fdc-kiwi"],
      sourceReferenceIds: ["208"],
    },

    nutrients: {
      calories: {
        amount: 61,
        unit: "kcal",
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["208"],
      },
      carbohydrates: {
        amount: 14.66,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 3.0,
        unit: "g",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 8.99,
        unit: "g",
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["269"],
      },
      protein: {
        amount: 1.14,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.52,
        unit: "g",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["204"],
      },
      saturatedFat: {
        amount: 0.03,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["606"],
      },
      potassium: {
        amount: 312,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["306"],
      },
      calcium: {
        amount: 34,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["301"],
      },
      magnesium: {
        amount: 17,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 34,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["305"],
      },
      sodium: {
        amount: 3,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["307"],
      },
      iron: {
        amount: 0.31,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["303"],
      },
      zinc: {
        amount: 0.14,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.13,
        unit: "mg",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.098,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 92.7,
        unit: "mg",
        dailyValuePercent: 103,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["401"],
      },
      vitaminK: {
        amount: 40.3,
        unit: "µg",
        dailyValuePercent: 34,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["430"],
      },
      vitaminE: {
        amount: 1.46,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["323"],
      },
      folate: {
        amount: 25,
        unit: "µg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["435"],
      },
      vitaminB6: {
        amount: 0.06,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["415"],
      },
      niacin: {
        amount: 0.34,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["406"],
      },
      riboflavin: {
        amount: 0.025,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["405"],
      },
      thiamin: {
        amount: 0.027,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-kiwi"],
        sourceReferenceIds: ["404"],
      },
    },
    micronutrientSignatures: [
      {
        name: "Vitamin C (Ascorbic Acid)",
        amount: 92.7,
        unit: "mg",
        dailyValuePercent: 103,
        description: "Exceptional concentration exceeding both oranges and strawberries per 100g.",
      },
      {
        name: "Vitamin K (Phylloquinone)",
        amount: 40.3,
        unit: "µg",
        dailyValuePercent: 34,
        description: "Vital micronutrient coordinating normal prothrombin synthesis and skeletal health.",
      },
      {
        name: "Proteolytic Actinidain",
        amount: 120,
        unit: "mg",
        dailyValuePercent: 25,
        description: "Unique cysteine protease enzyme that aids in gastric protein breakdown.",
      },
      {
        name: "Dietary Fiber",
        amount: 3.0,
        unit: "g",
        dailyValuePercent: 11,
        description: "High water-binding capacity mucilage supporting healthy intestinal transit.",
      },
    ],
  },

  tasteProfile: {
    sweetness: { value: 7, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    acidity: { value: 8, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    juiciness: { value: 8, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    aromatic: { value: 7, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    lead: "Electric citric brightness.",
    accent: "Zesty acidity with tropical melon sweetness.",
    descriptors: ["Tangy", "Electric", "Zesty", "Tropical", "Crisp"],
    notes:
      "A thrilling rush of sharp, citric acidity that immediately awakens the palate, smoothly dissolving into lush tropical melon and gooseberry sweetness. Tiny black seeds offer an ultra-fine, poppy texture with zero bitterness.",
  },

  benefitTags: [
    {
      label: "Concentrated Vitamin C",
      phenomenon: "ascorbic acid immune support",
      description:
        "Supplies 92.7mg of Vitamin C per 100g (over 100% of the Daily Value), supporting healthy immune defense, collagen synthesis, and non-heme iron uptake.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-kiwi"],
      icon: "shield",
    },
    {
      label: "Proteolytic Digestive Enzymes",
      phenomenon: "actinidain cysteine protease activity",
      description:
        "Naturally contains actinidain, an enzyme that assists in hydrolyzing dietary proteins in the stomach, promoting smoother digestive comfort.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-kiwi"],
      icon: "zap",
    },
    {
      label: "Natural Hydration & Potassium",
      phenomenon: "fluid balance and cellular electrolyte ratio",
      description:
        "Over 83% water combined with 312mg potassium per 100g, promoting healthy cellular fluid balance and cardiovascular function.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-kiwi"],
      icon: "droplet",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitamin-c",
      label: "Vitamin C",
      value: 92.7,
      unit: "mg",
      referenceContext: "103% Daily Value",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      nutrientId: "vitamin-k",
      label: "Vitamin K",
      value: 40.3,
      unit: "µg",
      referenceContext: "34% Daily Value",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 312,
      unit: "mg",
      referenceContext: "cellular balance",
      sourceIds: ["usda-fdc-kiwi"],
    },
  ],

  varieties: [
    {
      name: "Hayward",
      description: "The global green standard: large barrel-shaped fruit with fuzzy brown skin, vivid emerald flesh, and classic sweet-tart punch.",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      name: "Zespri SunGold",
      description: "Smooth-skinned golden flesh cultivar with rounded beak, lower acidity, and tropical mango-citrus sweetness.",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      name: "Bruno",
      description: "Long, cylindrical heritage cultivar with darker brown fuzz, high Vitamin C content, and intensely aromatic juice.",
      sourceIds: ["usda-fdc-kiwi"],
    },
  ],


  funFacts: [
    {
      text: "With 92.7mg Vitamin C per 100g, kiwifruit delivers nearly double the Vitamin C concentration of standard navel oranges.",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      text: "The fruit was renamed 'Kiwifruit' in 1959 by New Zealand exporters for its visual resemblance to the native kiwi bird.",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      text: "Kiwi contains the proteolytic enzyme actinidain, making it an extraordinary natural culinary meat tenderizer.",
      sourceIds: ["usda-fdc-kiwi"],
    },
  ],

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [10, 11, 12, 1, 2, 3, 4, 5],
      peakMonths: [11, 12, 1, 2],
      label: "Northern Autumn & Winter Harvest",
      sourceIds: ["usda-fdc-kiwi"],
    },
    {
      regionId: "southern-temperate",
      hemisphere: "south",
      months: [5, 6, 7, 8, 9, 10, 11],
      peakMonths: [5, 6, 7, 8],
      label: "Southern Autumn & Winter Harvest (New Zealand)",
      sourceIds: ["usda-fdc-kiwi"],
    },
  ],

  similarFruitIds: ["strawberry", "orange", "blueberry"],
  sourceIds: ["usda-fdc-kiwi", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-21",
    reviewerId: "abhi",
  },
};

export default kiwi;
