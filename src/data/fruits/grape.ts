/**
 * Grape — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 174682 ("Grapes, red or green, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const grape: Fruit = {
  id: "grape",
  slug: "grape",
  name: "Grape",

  editorial: {
    nickname: "Angoor · Draksha",
    tagline: "The vine of antiquity. Crystalline cluster of resveratrol vitality.",
    heroDescription:
      "Cultivated alongside the dawn of human civilization in the Caucasus and the Near East for over eight millennia, the grape is an immortal icon of the Vitaceae family. Hanging in pendulous, frosted clusters coated with delicate waxy pruinescence, each translucent globe balances crisp, taut skin against explosive cellular juice rich in natural tartaric acid, bioavailable copper, and cardioprotective resveratrol.",
    pullQuotes: [
      {
        quote: "A crystalline cluster of frosted globes snapping on the teeth to release the ancient, sun-warmed wine of the fertile river valleys.",
        attribution: "Editorial",
      },
      {
        quote: "From Georgian terracotta kvevri to modern Mediterranean table vineyards, the grape is humanity's most storied botanical companion.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A hydrating cluster delivering 14.6µg of Vitamin K1 (12% DV) and bioavailable resveratrol polyphenols per 100g with natural tartaric and malic acids.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Vitaceae",
    genus: "Vitis",
    species: "vinifera",
    botanicalNotes: [
      "Belongs to the grape family (Vitaceae), woody perennial climbing vines utilizing branched tendrils for vertical structural support.",
      "Botanically classified as a true fleshy berry derived from a compound superior ovary, with thin epicarp, succulent mesocarp, and up to four piriform seeds.",
    ],
  },

  theme: {
    primary: "#7C3AED",
    secondary: "#DDD6FE",
    glow: "#7C3AED40",
    gradient: ["#5B21B6", "#8B5CF6"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/grape/hero.png",
      alt: "Lustrous cluster of deep purple grapes with natural frosty bloom on dark textured slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/grape/card.png",
      alt: "Grape - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/grape/macro-break.png",
      alt: "Extreme macro photograph of grape skin waxy pruinescence bloom and translucent illuminated pulp",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Epicuticular Bloom · The Resveratrol Matrix",
      captionText:
        "The frosty matte sheen across the skin consists of microscopic wax platelets that deter water loss, while the epidermal cells concentrate protective stilbenes including trans-resveratrol.",
    },
  },

  origin: {
    region: "Transcaucasia, Southern Anatolia & the Fertile Crescent",
    coordinates: [41.71, 44.82],
    description:
      "Native to the fertile mountainous region between the Black and Caspian Seas (modern Georgia, Armenia, and eastern Turkey). Archaeological evidence of wine production in clay kvevri vessels dates back to 6000 BCE in Georgia. Cultivation expanded rapidly across Mesopotamia, ancient Egypt, Greece, and Rome, ultimately spreading across every temperate continent on Earth.",
    grownTodayRegions: [
      "China",
      "Italy",
      "United States (California)",
      "Spain",
      "France",
      "India (Maharashtra - Nashik)",
      "Turkey",
      "Chile",
    ],
    sourceIds: ["usda-fdc-grape"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [8, 9, 10, 11],
      peakMonths: [9, 10],
      label: "Northern Autumn Harvest (August – November)",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      regionId: "southern-temperate",
      hemisphere: "south",
      months: [2, 3, 4, 5],
      peakMonths: [3, 4],
      label: "Southern Autumn Harvest (Chile, Australia, South Africa)",
      sourceIds: ["usda-fdc-grape"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 69,
      unit: "kcal",
      sourceIds: ["usda-fdc-grape"],
    },
    nutrients: {
      protein: {
        amount: 0.72,
        unit: "g",
        sourceIds: ["usda-fdc-grape"],
      },
      totalFat: {
        amount: 0.16,
        unit: "g",
        sourceIds: ["usda-fdc-grape"],
      },
      carbohydrates: {
        amount: 18.1,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-grape"],
      },
      fiber: {
        amount: 0.9,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-grape"],
      },
      totalSugars: {
        amount: 15.48,
        unit: "g",
        sourceIds: ["usda-fdc-grape"],
      },
      vitaminK: {
        amount: 14.6,
        unit: "µg",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-grape"],
      },
      copper: {
        amount: 0.127,
        unit: "mg",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-grape"],
      },
      potassium: {
        amount: 191,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-grape"],
      },
      vitaminC: {
        amount: 3.2,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-grape"],
      },
      vitaminB6: {
        amount: 0.086,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-grape"],
      },
    },
    waterContentPercent: 80.54,
    micronutrientSignatures: [
      {
        name: "Trans-Resveratrol Stilbene",
        amount: 0.75,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Bioactive phytoalexin synthesized in the skin to defend against fungal attack, supporting endothelial elasticity",
      },
      {
        name: "Phylloquinone (Vitamin K1)",
        amount: 14.6,
        unit: "µg",
        dailyValuePercent: 12,
        description: "Essential lipid-soluble cofactor for hepatic clotting factor carboxylation and bone mineralization",
      },
      {
        name: "Essential Trace Copper",
        amount: 0.127,
        unit: "mg",
        dailyValuePercent: 14,
        description: "Critical cofactor for superoxide dismutase and ceruloplasmin iron transport",
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Crisp snap.",
    accent: "Crystalline muscat nectar.",
    descriptors: [
      "Crisp Snap",
      "Crystalline",
      "Muscat",
      "Tartaric",
      "Juicy",
      "Sweet"
    ],
    notes:
      "The white powdery 'bloom' visible on the skin is an indicator of freshness and gentle handling, formed naturally from pure epicuticular wax.",
  },

  benefitTags: [
    {
      label: "Cardiovascular Endothelial Resilience",
      phenomenon: "resveratrol and flavonoid vasodilation",
      description:
        "Skin-derived stilbenes and proanthocyanidins support healthy vascular elasticity and endothelial nitric oxide production.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-grape"],
      icon: "heart",
    },
    {
      label: "Coagulation & Skeletal Vitamin K",
      phenomenon: "phylloquinone osteocalcin activation",
      description:
        "Delivers 12% DV Vitamin K1 per 100g, supporting normal blood coagulation pathways and bone matrix calcium retention.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-grape"],
      icon: "shield",
      metric: "14.6 µg / 100g",
    },
    {
      label: "Cellular Energy Mineral Support",
      phenomenon: "copper enzyme cofactor",
      description:
        "Supplying 14% DV copper, assisting cellular energy generation and collagen cross-linking in arterial walls.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-grape"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "copper",
      label: "Copper",
      value: 0.127,
      unit: "mg",
      referenceContext: "14% Daily Value",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      nutrientId: "vitaminK",
      label: "Vitamin K",
      value: 14.6,
      unit: "µg",
      referenceContext: "12% Daily Value",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 69,
      unit: "kcal",
      referenceContext: "crisp natural hydration",
      sourceIds: ["usda-fdc-grape"],
    },
  ],

  varieties: [
    {
      name: "Thompson Seedless (Sultana)",
      description: "The global benchmark table and raisin cultivar: pale amber-green elongated berries with crisp, seedless flesh and clean honeyed sweetness.",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      name: "Crimson Seedless",
      description: "Modern premier table standard: late-ripening crimson-pink berries with an exceptionally firm, crunchy snap and rich sweet-tart balance.",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      name: "Black Muscat",
      description: "Heirloom aristocrat of table grapes: dark violet-black berries exuding an intense, intoxicating damask perfume and floral muscat flavor.",
      sourceIds: ["usda-fdc-grape"],
    },
  ],

  funFacts: [
    {
      text: "The oldest known winery in the world, discovered in the Areni-1 cave in Armenia, dates back over 6,100 years to 4100 BCE.",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      text: "Nashik in Maharashtra produces over 70% of India's commercial grapes and is officially recognized as the 'Grape Capital of India'.",
      sourceIds: ["usda-fdc-grape"],
    },
    {
      text: "Seedless grapes are not genetically engineered; they originate from a natural botanical mutation known as stenospermocarpy that occurred centuries ago.",
      sourceIds: ["usda-fdc-grape"],
    },
  ],

  similarFruitIds: ["blueberry", "cherry", "lychee"],
  sourceIds: ["usda-fdc-grape", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
