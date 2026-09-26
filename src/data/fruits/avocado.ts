/**
 * Avocado — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171705 ("Avocados, raw, all commercial varieties"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 6
 */

import type { Fruit } from "@/types";

export const avocado: Fruit = {
  id: "avocado",
  slug: "avocado",
  name: "Avocado",

  editorial: {
    nickname: "Makhan Phal · Butter Fruit",
    tagline: "Single-seeded berry. Sovereign of heart-healthy lipids.",
    heroDescription:
      "Native to the fertile highland valleys of Mesoamerica where it was revered by ancient Maya and Aztec civilizations for over nine thousand years, the avocado is a unique marvel of botanical evolution. Botanically a single-seeded fleshy berry of the Lauraceae family, its decadent, buttery chartreuse pulp is densely loaded with monounsaturated oleic acid, glutathione, potassium, and protective soluble fiber.",
    pullQuotes: [
      {
        quote: "Nature's emerald butter—a sacred single-seeded berry whose silken marrow sustained civilizations long before European contact.",
        attribution: "Editorial",
      },
      {
        quote: "Unlike any other fruit on earth, the avocado hoards golden plant fats instead of simple sugars, turning sunlight directly into rich, silky oleic lipids.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Extraordinarily dense in monounsaturated oleic fatty acids (nearly 10g per 100g) with almost zero sugar, delivering 485mg potassium and 6.7g fiber.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Lauraceae",
    genus: "Persea",
    species: "americana",
    botanicalNotes: [
      "Belongs to the laurel family (Lauraceae), sharing ancient evolutionary lineage with bay laurel, cinnamon, and sassafras.",
      "Botanically classified as a single-seeded berry consisting of a leathery exocarp (skin), an oil-rich fleshy mesocarp, and a central woody endocarp protecting a massive solitary seed.",
    ],
  },

  theme: {
    primary: "#10B981",
    secondary: "#A7F3D0",
    glow: "#10B98140",
    gradient: ["#10B981", "#064E3B"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/avocado/hero.png",
      alt: "A ripe Hass avocado sliced in half with the rich round pit visible in one half on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/avocado/card.png",
      alt: "Avocado - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/avocado/macro-break.png",
      alt: "Extreme macro close up photography of smooth creamy buttery avocado flesh texture",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Lipid Vesicles · The Oleic Mesocarp",
      captionText:
        "Microscopic oil-containing parenchymal cells store seventy-one percent monounsaturated oleic acid droplets interspersed with bioavailable lutein and beta-sitosterol.",
    },
  },

  origin: {
    region: "Mesoamerica (Puebla & Tehuacán Valley, Mexico)",
    coordinates: [18.46, -97.39],
    description:
      "Native to south-central Mexico and Guatemala. The oldest archaeological evidence of avocado consumption dates to roughly 10,000 BCE in the Coxcatlán Cave in Puebla. Domesticated by Indigenous Mesoamericans prior to 5000 BCE, the fruit was called āhuacatl in Classical Nahuatl and prized as an essential dietary energy staple.",
    grownTodayRegions: [
      "Mexico (Michoacán & Jalisco)",
      "Colombia",
      "Peru",
      "Dominican Republic",
      "Indonesia",
      "Kenya",
      "Brazil",
      "United States (California & Florida)",
      "Spain",
      "Israel",
    ],
    sourceIds: ["usda-fdc-avocado"],
  },

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    waterContentPercent: 73.23,
    calories: {
      amount: 160,
      unit: "kcal",
      sourceIds: ["usda-fdc-avocado"],
      sourceReferenceIds: ["208"],
    },

    nutrients: {
      calories: {
        amount: 160,
        unit: "kcal",
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["208"],
      },
      carbohydrates: {
        amount: 8.53,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 6.7,
        unit: "g",
        dailyValuePercent: 24,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 0.66,
        unit: "g",
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["269"],
      },
      protein: {
        amount: 2.0,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 14.66,
        unit: "g",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["204"],
      },
      monounsaturatedFat: {
        amount: 9.8,
        unit: "g",
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["645"],
      },
      polyunsaturatedFat: {
        amount: 1.82,
        unit: "g",
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["646"],
      },
      saturatedFat: {
        amount: 2.13,
        unit: "g",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["606"],
      },
      potassium: {
        amount: 485,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["306"],
      },
      magnesium: {
        amount: 29,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 52,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["305"],
      },
      calcium: {
        amount: 12,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["301"],
      },
      sodium: {
        amount: 7,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["307"],
      },
      iron: {
        amount: 0.55,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["303"],
      },
      zinc: {
        amount: 0.64,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.19,
        unit: "mg",
        dailyValuePercent: 21,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.14,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 10.0,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["401"],
      },
      folate: {
        amount: 81,
        unit: "µg",
        dailyValuePercent: 20,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["435"],
      },
      vitaminK: {
        amount: 21.0,
        unit: "µg",
        dailyValuePercent: 18,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["430"],
      },
      vitaminE: {
        amount: 2.07,
        unit: "mg",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["323"],
      },
      vitaminB6: {
        amount: 0.26,
        unit: "mg",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["415"],
      },
      niacin: {
        amount: 1.74,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["406"],
      },
      riboflavin: {
        amount: 0.13,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["405"],
      },
      thiamin: {
        amount: 0.07,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-avocado"],
        sourceReferenceIds: ["404"],
      },
    },
    micronutrientSignatures: [
      {
        name: "Monounsaturated Oleic Acid",
        amount: 9.8,
        unit: "g",
        dailyValuePercent: 28,
        description: "Predominant heart-healthy fatty acid identical to extra virgin olive oil.",
      },
      {
        name: "Dietary Fiber (Soluble + Insoluble)",
        amount: 6.7,
        unit: "g",
        dailyValuePercent: 24,
        description: "Exceptional prebiotic matrix promoting satiety and gut microbiome diversity.",
      },
      {
        name: "Folate (Vitamin B9)",
        amount: 81,
        unit: "µg",
        dailyValuePercent: 20,
        description: "Crucial nutrient for cellular division, nucleic acid synthesis, and vitality.",
      },
      {
        name: "Potassium",
        amount: 485,
        unit: "mg",
        dailyValuePercent: 10,
        description: "Key electrolyte supporting blood pressure regulation and neuromuscular tone.",
      },
    ],
  },

  tasteProfile: {
    sweetness: { value: 2, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    acidity: { value: 2, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    juiciness: { value: 5, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    aromatic: { value: 6, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    lead: "Buttery first.",
    accent: "Nutty velvet richness.",
    descriptors: [
      "Buttery",
      "Nutty",
      "Silken",
      "Grassy",
      "Savory",
      "Mellow"
    ],
    notes:
      "Smooth, luxurious, and completely devoid of sharp acidity or heavy sweetness. The palate experiences a velvety lipid coat with subtle grassy freshness and roasted hazelnut nuances on the finish.",
  },

  benefitTags: [
    {
      label: "Heart-Healthy Monounsaturated Lipids",
      phenomenon: "oleic acid lipid profile",
      description:
        "High in oleic acid, a monounsaturated fatty acid known to support healthy HDL to LDL cholesterol ratios as part of a heart-conscious dietary pattern.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-avocado"],
      icon: "heart",
    },
    {
      label: "High Prebiotic Fiber",
      phenomenon: "soluble and insoluble fiber content",
      description:
        "Supplies 6.7g of total dietary fiber per 100g, supporting healthy digestive transit and providing prebiotic nourishment for beneficial gut microflora.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-avocado"],
      icon: "shield",
    },
    {
      label: "Potassium Electrolyte Balance",
      phenomenon: "intracellular cation concentration",
      description:
        "Delivers 485mg of potassium per 100g — higher than bananas — helping counterbalance dietary sodium and support healthy vascular muscle tone.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-avocado"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "oleic-fat",
      label: "Oleic Fatty Acids",
      value: 9.8,
      unit: "g",
      referenceContext: "healthy monounsaturates",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 6.7,
      unit: "g",
      referenceContext: "24% Daily Value",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 485,
      unit: "mg",
      referenceContext: "exceeds bananas",
      sourceIds: ["usda-fdc-avocado"],
    },
  ],

  varieties: [
    {
      name: "Hass",
      description: "The global benchmark cultivar, featuring pebbled dark purplish-black skin when ripe, exceptionally high oil content, and creamy pale-green flesh.",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      name: "Fuerte",
      description: "A heritage Mexican-Guatemalan hybrid with smooth, pliable emerald-green skin that stays green when ripe, and a delicate, hazelnut-scented flesh.",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      name: "Bacon",
      description: "Cold-hardy variety with thin, smooth dark-green skin and a lighter, mildly sweet pulp with slightly lower lipid density.",
      sourceIds: ["usda-fdc-avocado"],
    },
  ],


  funFacts: [
    {
      text: "The avocado does not ripen on the tree; it can hang as living storage for months and only softens post-harvest.",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      text: "Botanically, the avocado is a single-seeded berry, not a stone fruit or vegetable.",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      text: "An avocado tree exhibits synchronous dichogamy, opening as female on day one and reopening as male the following afternoon.",
      sourceIds: ["usda-fdc-avocado"],
    },
  ],

  season: [
    {
      regionId: "northern-subtropical",
      hemisphere: "north",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [3, 4, 5, 6, 7],
      label: "Northern Spring & Summer Peak (Hass)",
      sourceIds: ["usda-fdc-avocado"],
    },
    {
      regionId: "southern-subtropical",
      hemisphere: "south",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [9, 10, 11, 12, 1],
      label: "Southern Spring & Summer Peak",
      sourceIds: ["usda-fdc-avocado"],
    },
  ],

  similarFruitIds: ["mango", "banana", "peach"],
  sourceIds: ["usda-fdc-avocado", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-21",
    reviewerId: "abhi",
  },
};

export default avocado;
