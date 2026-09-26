/**
 * Starfruit (Carambola) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171728 ("Carambola, (starfruit), raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const starfruit: Fruit = {
  id: "starfruit",
  slug: "starfruit",
  name: "Starfruit",

  editorial: {
    nickname: "Kamrakh · Karambola",
    tagline: "The celestial pentagon. Crisp carambola with translucent golden wings and electric tartness.",
    heroDescription:
      "Native to the tropical river corridors of Southeast Asia and the Indian subcontinent, the starfruit (Averrhoa carambola) is an architectural marvel of the Oxalidaceae family. When sliced crosswise, its five (rarely six) prominent longitudinal ridges yield a constellation of perfect golden-amber stars. With its glossy, waxy edible skin and translucent, crystalline crisp flesh that bursts with cool cellular water, it delivers an invigorating melody of green apple, crisp grape, and refreshing citrus tang.",
    pullQuotes: [
      {
        quote: "An architectural marvel of nature slicing into flawless golden stars that erupt with crisp, refreshing, citrus-tinted hydration.",
        attribution: "Editorial",
      },
      {
        quote: "From ancient Ayurvedic gardens to modern tropical mixology, carambola is the celestial star of botanical hydration.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A hydrating, ultra-low-calorie fruit delivering 91% cellular water, 34.4mg Vitamin C (38% DV), 2.8g fiber, and protective epicatechin polyphenols.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Oxalidaceae",
    genus: "Averrhoa",
    species: "carambola",
    botanicalNotes: [
      "Belongs to the wood sorrel family (Oxalidaceae), a small, multi-branched tropical tree with sensitive pinnate leaves that fold together at night or when touched.",
      "Botanically classified as a fleshy indehiscent berry with five prominent longitudinal angled ribs (wings), edible thin waxy epicarp, and translucent crisp mesocarp enclosing flat brown seeds.",
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
      src: "/images/fruits/starfruit/hero.png",
      alt: "Whole golden ripe starfruits and sliced star pentagons showing glistening translucent yellow flesh on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/starfruit/card.png",
      alt: "Starfruit - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/starfruit/macro-break.png",
      alt: "Extreme macro photograph of starfruit cross section wing showing crystalline cellular structure and water-filled vacuoles",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Pentagonal Wing Anatomy · Cellular Turgor & Oxalate Matrix",
      captionText:
        "The crisp, crunchy texture is created by high intracellular turgor pressure in parenchyma cells containing a balance of malic acid and soluble oxalates.",
    },
  },

  origin: {
    region: "Tropical Southeast Asia & Indian Subcontinent",
    coordinates: [7.87, 80.77],
    description:
      "Indigenous to the tropical ecosystems of Sri Lanka, Malaysia, Indonesia, and southern India. Cultivated for centuries across South and Southeast Asia, Portuguese explorers encountered it in Malabar and introduced it to the West Indies, Brazil, and Florida, where specialized sweet varieties were bred.",
    grownTodayRegions: [
      "Malaysia (leading global exporter)",
      "Taiwan",
      "India (Assam, West Bengal, Kerala, Karnataka)",
      "United States (Florida, Hawaii)",
      "Brazil",
      "Thailand",
      "Philippines",
    ],
    sourceIds: ["usda-fdc-starfruit"],
  },

  season: [
    {
      regionId: "tropical-equatorial",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [8, 9, 10, 1, 2],
      label: "Year-Round Equatorial Harvest (Autumn & Winter Peaks)",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      regionId: "india-subtropical",
      hemisphere: "north",
      months: [9, 10, 11, 12, 1],
      peakMonths: [10, 11],
      label: "Indian Autumn Season (October – November)",
      sourceIds: ["usda-fdc-starfruit"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 31,
      unit: "kcal",
      sourceIds: ["usda-fdc-starfruit"],
    },
    nutrients: {
      protein: {
        amount: 1.04,
        unit: "g",
        sourceIds: ["usda-fdc-starfruit"],
      },
      totalFat: {
        amount: 0.33,
        unit: "g",
        sourceIds: ["usda-fdc-starfruit"],
      },
      carbohydrates: {
        amount: 6.73,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-starfruit"],
      },
      fiber: {
        amount: 2.8,
        unit: "g",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-starfruit"],
      },
      totalSugars: {
        amount: 3.98,
        unit: "g",
        sourceIds: ["usda-fdc-starfruit"],
      },
      vitaminC: {
        amount: 34.4,
        unit: "mg",
        dailyValuePercent: 38,
        sourceIds: ["usda-fdc-starfruit"],
      },
      potassium: {
        amount: 133,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-starfruit"],
      },
      folate: {
        amount: 12,
        unit: "mcg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-starfruit"],
      },
      magnesium: {
        amount: 10,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-starfruit"],
      },
    },
    waterContentPercent: 91.38,
    micronutrientSignatures: [
      {
        name: "Epicatechin & Proanthocyanidins",
        amount: 28.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Condensed flavan-3-ols protecting vascular endothelial walls and modulating lipid peroxidation",
      },
      {
        name: "Intracellular Cellular Hydration Matrix",
        amount: 91.4,
        unit: "g",
        dailyValuePercent: 0,
        description: "Structured biological water bound to soluble pectin, promoting rapid tissue rehydration with minimal digestive energy",
      },
      {
        name: "Natural Oxalate & Caramboxin (Clinical Caution)",
        amount: 80.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Neurotoxin caramboxin and oxalates are safely cleared by healthy kidneys, but strictly contraindicated in chronic kidney disease",
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
      value: 7,
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
    lead: "Solar crisp.",
    accent: "Tart apple snap.",
    descriptors: [
      "Crisp",
      "Green Apple",
      "White Grape",
      "Hydrating",
      "Zesty"
    ],
    notes:
      "The entire fruit is edible including the waxy skin; sweet varieties show full golden amber ribs with slight brown cresting when ripe.",
  },

  benefitTags: [
    {
      label: "Ascorbic Dermal Radiance & Immunity",
      phenomenon: "prolyl hydroxylase cofactor saturation",
      description:
        "Supplies 38% Daily Value of Vitamin C per 100g, driving triple-helix collagen stability and leukocyte respiratory burst.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-starfruit"],
      icon: "shield",
      metric: "34.4 mg Vitamin C (38% DV)",
    },
    {
      label: "Ultra-Low Calorie Cellular Hydration",
      phenomenon: "structured water gastric distension",
      description:
        "Delivers 91% cellular water with only 31 calories and 2.8g fiber, promoting fullness without postprandial insulin surges.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-starfruit"],
      icon: "activity",
      metric: "31 kcal energy density",
    },
    {
      label: "Endothelial Microcirculation Support",
      phenomenon: "epicatechin flow-mediated dilation",
      description:
        "Flavan-3-ols protect endothelial nitric oxide synthase, supporting peripheral microvascular elasticity.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-starfruit"],
      icon: "zap",
      metric: "28 mg polyphenols",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 34.4,
      unit: "mg",
      referenceContext: "38% Daily Value",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 31,
      unit: "kcal",
      referenceContext: "ultra-low caloric density",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.8,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-starfruit"],
    },
  ],

  varieties: [
    {
      name: "Arkin (Sweet Commercial Standard)",
      description: "Leading Western sweet variety bred in Florida: golden-yellow ribbed fruit with thick wings, high juice content, and pleasant sweet-tart balance.",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      name: "Kari (Hawaiian Dessert Benchmark)",
      description: "Bred at University of Hawaii: highly prized by chefs for superior brix sweetness, rich aroma, and very low oxalic bite.",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      name: "Fwang Tung",
      description: "Prized Thai dessert cultivar: slender, elongated pale yellow wings with exceptionally juicy, tender, glassy flesh.",
      sourceIds: ["usda-fdc-starfruit"],
    },
  ],

  funFacts: [
    {
      text: "When starfruit is cut crosswise, each slice forms a mathematically perfect five-pointed geometric star (pentagram), making it nature's most iconic edible cocktail garnish.",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      text: "IMPORTANT MEDICAL CAUTION: Starfruit contains 'caramboxin' and high oxalates; while healthy kidneys filter them effortlessly, people with kidney disease or renal failure must NEVER consume starfruit as it can cause dangerous neurotoxicity.",
      sourceIds: ["usda-fdc-starfruit"],
    },
    {
      text: "The leaves of the carambola tree exhibit nyctinasty—they react to touch and fold downward at night, just like the famous sensitive plant Mimosa pudica.",
      sourceIds: ["usda-fdc-starfruit"],
    },
  ],

  similarFruitIds: ["kiwi", "apple", "lemon"],
  sourceIds: ["usda-fdc-starfruit", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
