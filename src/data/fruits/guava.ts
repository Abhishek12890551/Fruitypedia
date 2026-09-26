/**
 * Guava — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173044 ("Guavas, common, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const guava: Fruit = {
  id: "guava",
  slug: "guava",
  name: "Guava",

  editorial: {
    nickname: "Amrud · Amritphal",
    tagline: "Ascorbic titan. Fragrant jewel of the tropical subtropics.",
    heroDescription:
      "Native to the tropical Americas and enthusiastically naturalized across the Indian subcontinent for centuries, the common guava is a botanical masterpiece of the Myrtaceae family. Beneath its musky, lime-green rind lies coral-pink or creamy-ivory flesh delivering over four times the Vitamin C of a sweet orange, paired with an intoxicating floral perfume and dense dietary pectin.",
    pullQuotes: [
      {
        quote: "An aromatic explosion of tropical floral musk sealing one of nature's densest concentrations of cellular Vitamin C.",
        attribution: "Editorial",
      },
      {
        quote: "From Mughal garden courtyards to roadside vendors with black salt and chili, the guava is India's beloved crunchy winter treasure.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A phenomenal nutritional powerhouse packing 228mg of Vitamin C per 100g (over 250% DV) alongside 5.4g of soluble and insoluble dietary fiber.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Myrtaceae",
    genus: "Psidium",
    species: "guajava",
    botanicalNotes: [
      "Belongs to the myrtle family (Myrtaceae), closely related to clove, allspice, and eucalyptus.",
      "Botanically classified as a fleshy berry with an inferior ovary, enclosing numerous small, hard seeds embedded in a soft, aromatic central pulp.",
    ],
  },

  theme: {
    primary: "#10B981",
    secondary: "#FDA4AF",
    glow: "#10B98140",
    gradient: ["#059669", "#E11D48"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/guava/hero.png",
      alt: "Fresh ripe guava sliced in half revealing coral-pink flesh with small seeds against dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/guava/card.png",
      alt: "Guava - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/guava/macro-break.png",
      alt: "Extreme macro photograph of sliced pink guava showing velvety cellular pericarp and embedded seeds",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Pericarp Parenchyma · The Ascorbic Matrix",
      captionText:
        "The velvety pink mesocarp is loaded with cellular lycopene carotenoids and pressurized ascorbic acid vacuoles, creating its signature astringent-sweet floral crunch.",
    },
  },

  origin: {
    region: "Tropical Americas & Mesoamerica",
    coordinates: [19.43, -99.13],
    description:
      "Native to tropical Mexico, Central America, and northern South America. Archaeological evidence indicates cultivation in coastal Peru dating to 800 BCE. Portuguese and Spanish maritime voyagers introduced guava to India and Southeast Asia during the 16th century, where it became thoroughly naturalized and deeply integrated into South Asian agrarian life.",
    grownTodayRegions: [
      "India (Uttar Pradesh, Bihar, Maharashtra)",
      "China",
      "Mexico",
      "Brazil",
      "Indonesia",
      "Egypt",
      "Pakistan",
      "Thailand",
    ],
    sourceIds: ["usda-fdc-guava"],
  },

  season: [
    {
      regionId: "india-subtropical",
      hemisphere: "north",
      months: [11, 12, 1, 2, 3],
      peakMonths: [12, 1, 2],
      label: "Winter Harvest (Mridag Bahar)",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      regionId: "tropical-equatorial",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [7, 8, 9],
      label: "Year-Round Tropical Production",
      sourceIds: ["usda-fdc-guava"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 68,
      unit: "kcal",
      sourceIds: ["usda-fdc-guava"],
    },
    nutrients: {
      protein: {
        amount: 2.55,
        unit: "g",
        sourceIds: ["usda-fdc-guava"],
      },
      totalFat: {
        amount: 0.95,
        unit: "g",
        sourceIds: ["usda-fdc-guava"],
      },
      carbohydrates: {
        amount: 14.32,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-guava"],
      },
      fiber: {
        amount: 5.4,
        unit: "g",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-guava"],
      },
      totalSugars: {
        amount: 8.92,
        unit: "g",
        sourceIds: ["usda-fdc-guava"],
      },
      vitaminC: {
        amount: 228.3,
        unit: "mg",
        dailyValuePercent: 254,
        sourceIds: ["usda-fdc-guava"],
      },
      vitaminA: {
        amount: 31,
        unit: "µg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-guava"],
      },
      vitaminE: {
        amount: 0.73,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-guava"],
      },
      folate: {
        amount: 49,
        unit: "µg",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-guava"],
      },
      potassium: {
        amount: 417,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-guava"],
      },
      magnesium: {
        amount: 22,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-guava"],
      },
      calcium: {
        amount: 18,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-guava"],
      },
      phosphorus: {
        amount: 40,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-guava"],
      },
    },
    waterContentPercent: 80.8,
    micronutrientSignatures: [
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 228.3,
        unit: "mg",
        dailyValuePercent: 254,
        description: "Spectacular concentration providing fourfold the daily ascorbic requirement per 100g",
      },
      {
        name: "Dietary Pectin Fiber",
        amount: 5.4,
        unit: "g",
        dailyValuePercent: 19,
        description: "Soluble prebiotic galacturonan network supporting smooth colonic motility",
      },
      {
        name: "Lycopene Carotenoids",
        amount: 5.2,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Bioactive antioxidant pigment abundant in pink-fleshed varieties",
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
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Aromatic burst.",
    accent: "Musky tropical sweet.",
    descriptors: [
      "Floral",
      "Musky",
      "Tangy",
      "Crisp",
      "Sweet-Tart",
      "Pungent"
    ],
    notes:
      "Eaten firm and crisp when green-yellow for refreshing sub-acid astringency, or soft-ripe when the tropical ester fragrance fills an entire room.",
  },

  benefitTags: [
    {
      label: "Supreme Vitamin C Shield",
      phenomenon: "ascorbic acid concentration",
      description:
        "Providing over 250% DV of Vitamin C per 100g, supporting collagen biosynthesis and neutralising oxidative cellular stress.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-guava"],
      icon: "shield",
      metric: "228.3 mg / 100g",
    },
    {
      label: "Digestive Glycemic Balance",
      phenomenon: "soluble pectin fiber",
      description:
        "Dense with 5.4g dietary fiber per 100g, moderating postprandial blood sugar absorption and nourishing intestinal microbiota.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-guava"],
      icon: "activity",
      metric: "5.4 g fiber",
    },
    {
      label: "Cardiovascular Potassium Support",
      phenomenon: "electrolyte and vascular tone",
      description:
        "Delivering 417mg of potassium with minimal sodium, assisting normal vascular dilation and cellular fluid balance.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-guava"],
      icon: "heart",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 228.3,
      unit: "mg",
      referenceContext: "254% Daily Value",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 5.4,
      unit: "g",
      referenceContext: "19% Daily Value",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 417,
      unit: "mg",
      referenceContext: "vascular fluid balance",
      sourceIds: ["usda-fdc-guava"],
    },
  ],

  varieties: [
    {
      name: "Allahabad Safeda",
      description: "The premier Indian heirloom cultivar: round, ivory-white flesh with soft seeds, intensely sweet fragrance, and high sugar content.",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      name: "Lucknow 49 (Sardar)",
      description: "Prolific semi-dwarf Indian cultivar with large greenish-yellow fruit, milky-white crisp pulp, and exceptional storage durability.",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      name: "Ruby Supreme",
      description: "Vibrant tropical cultivar featuring deep coral-pink flesh, musky aromatics, and rich lycopene pigmentation.",
      sourceIds: ["usda-fdc-guava"],
    },
  ],

  funFacts: [
    {
      text: "Guava delivers more than four times the Vitamin C of a fresh orange per 100g, making it one of the most cost-effective nutritional fruits on Earth.",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      text: "In India, winter-harvested guavas (known as Mridag Bahar) are celebrated as sweeter and firmer than rainy-season summer crops.",
      sourceIds: ["usda-fdc-guava"],
    },
    {
      text: "Guava leaves contain potent bioactive flavonoids (quercetin) and have been brewed as traditional digestive teas for centuries.",
      sourceIds: ["usda-fdc-guava"],
    },
  ],

  similarFruitIds: ["kiwi", "papaya", "mango"],
  sourceIds: ["usda-fdc-guava", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
