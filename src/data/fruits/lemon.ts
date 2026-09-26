/**
 * Lemon — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 167746 ("Lemons, raw, without peel"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const lemon: Fruit = {
  id: "lemon",
  slug: "lemon",
  name: "Lemon",

  editorial: {
    nickname: "Nimbu · Nimbuka",
    tagline: "The golden acid spark. Universal catalyst of culinary brilliance.",
    heroDescription:
      "Arising from ancient natural hybridization in northeastern India and northern Burma, the lemon is the undisputed luminary of the Rutaceae family. Encased in an aromatic, oil-dimpled zest glowing with luminous sunshine yellow, its segmented interior holds glistening pulp vesicles saturated with five to six percent pure citric acid, delivering a sharp, electrifying brightness that awakens every flavor it touches.",
    pullQuotes: [
      {
        quote: "A burst of pure solar electricity trapped in fragrant yellow zest, delivering the quintessential acid benchmark of global gastronomy.",
        attribution: "Editorial",
      },
      {
        quote: "From the cliffside terraces of Amalfi to the lemon groves of Assam, this radiant citrus has driven maritime exploration and culinary clarity for millennia.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A luminous citrus powerhouse delivering 53mg of Vitamin C per 100g (59% DV) along with 5–6% organic citric acid and bioactive hesperidin flavonoids.",
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "limon",
    botanicalNotes: [
      "Belongs to the rue family (Rutaceae), derived from ancient hybridization between the bitter orange (Citrus × aurantium) and the citron (Citrus medica).",
      "Botanically classified as a hesperidium: a modified berry with a tough, gland-dotted leathery rind (flavedo and albedo) encasing radial juice-filled multicellular pulp vesicles.",
    ],
  },

  theme: {
    primary: "#FACC15",
    secondary: "#FEF08A",
    glow: "#FACC1540",
    gradient: ["#EAB308", "#FDE047"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/lemon/hero.png",
      alt: "Vibrant yellow lemon sliced in half displaying crystalline segmented juice vesicles on dark textured slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/lemon/card.png",
      alt: "Lemon - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/lemon/macro-break.png",
      alt: "Extreme macro photograph of sliced lemon pulp vesicles glowing with citrus juice droplets and oil glands",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Hesperidium Vesicles · The Citric Matrix",
      captionText:
        "The interior pulp consists of pressurized multicellular juice sacs (vesicles) storing concentrated citric and malic acids, buffered by the flavedo's D-limonene volatile oil glands.",
    },
  },

  origin: {
    region: "Northeastern India, Northern Burma & Southern China",
    coordinates: [26.20, 92.93],
    description:
      "Botanical and genetic tracing indicates the lemon originated in Assam (northeastern India), northern Myanmar, and Yunnan. Recorded in ancient Greco-Roman trade mosaics following Persian introduction. Arab agricultural expansion introduced the lemon across the Mediterranean basin by 1000 CE, famously transforming the cliffside coastal culture of southern Italy and Spain.",
    grownTodayRegions: [
      "India (Andhra Pradesh, Gujarat, Maharashtra)",
      "Mexico",
      "China",
      "Argentina",
      "Brazil",
      "Spain",
      "Turkey",
      "United States (California & Arizona)",
    ],
    sourceIds: ["usda-fdc-lemon"],
  },

  season: [
    {
      regionId: "subtropical-mediterranean",
      hemisphere: "north",
      months: [11, 12, 1, 2, 3, 4, 5],
      peakMonths: [12, 1, 2, 3],
      label: "Winter & Spring Peak Harvest",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      regionId: "southern-citrus",
      hemisphere: "south",
      months: [5, 6, 7, 8, 9, 10],
      peakMonths: [6, 7, 8],
      label: "Southern Winter Harvest (Argentina & Chile)",
      sourceIds: ["usda-fdc-lemon"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 29,
      unit: "kcal",
      sourceIds: ["usda-fdc-lemon"],
    },
    nutrients: {
      protein: {
        amount: 1.1,
        unit: "g",
        sourceIds: ["usda-fdc-lemon"],
      },
      totalFat: {
        amount: 0.3,
        unit: "g",
        sourceIds: ["usda-fdc-lemon"],
      },
      carbohydrates: {
        amount: 9.32,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-lemon"],
      },
      fiber: {
        amount: 2.8,
        unit: "g",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-lemon"],
      },
      totalSugars: {
        amount: 2.5,
        unit: "g",
        sourceIds: ["usda-fdc-lemon"],
      },
      vitaminC: {
        amount: 53.0,
        unit: "mg",
        dailyValuePercent: 59,
        sourceIds: ["usda-fdc-lemon"],
      },
      potassium: {
        amount: 138,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-lemon"],
      },
      calcium: {
        amount: 26,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-lemon"],
      },
      vitaminB6: {
        amount: 0.08,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-lemon"],
      },
      iron: {
        amount: 0.6,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-lemon"],
      },
    },
    waterContentPercent: 88.98,
    micronutrientSignatures: [
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 53.0,
        unit: "mg",
        dailyValuePercent: 59,
        description: "Potent water-soluble antioxidant defending mucosal barriers and activating iron assimilation",
      },
      {
        name: "Bioactive Citric Acid",
        amount: 5500,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Dense organic acid concentration (5.5%) that inhibits urinary calcium crystallization",
      },
      {
        name: "Hesperidin & Eriocitrin Bioflavonoids",
        amount: 42,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Unique citrus flavanone glucosides that support microvascular capillary integrity and blood flow",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 3,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Electric first.",
    accent: "Bracing citric zest.",
    descriptors: [
      "Electric",
      "Citric",
      "Sharp",
      "Limonene",
      "Zesty",
      "Bracing"
    ],
    notes:
      "The peel's yellow flavedo contains thousands of oil glands rich in limonene; rubbing the zest releases an instant aerosol of revitalizing citrus perfume.",
  },

  benefitTags: [
    {
      label: "Urinary & Renal Citrate Support",
      phenomenon: "citrate chelation and urinary pH balance",
      description:
        "High dietary citric acid elevates urinary citrate concentrations, helping to deter the formation of calcium oxalate crystals.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-lemon"],
      icon: "activity",
      metric: "5.5% citric acid",
    },
    {
      label: "Immunological Ascorbic Defense",
      phenomenon: "leukocyte activation and free-radical quenching",
      description:
        "Delivering 59% DV Vitamin C per 100g, defending respiratory mucosal barriers and supporting immune cellular mobility.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-lemon"],
      icon: "shield",
      metric: "53.0 mg / 100g",
    },
    {
      label: "Dietary Iron Absorption Catalyst",
      phenomenon: "non-heme ferric iron reduction",
      description:
        "Lemon's citric and ascorbic acids convert insoluble ferric iron into highly absorbable ferrous iron in plant foods.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-lemon"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 53.0,
      unit: "mg",
      referenceContext: "59% Daily Value",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      nutrientId: "fiber",
      label: "Fiber",
      value: 2.8,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 29,
      unit: "kcal",
      referenceContext: "bracing low energy spark",
      sourceIds: ["usda-fdc-lemon"],
    },
  ],

  varieties: [
    {
      name: "Eureka",
      description: "The global commercial table standard: smooth yellow skin, few seeds, year-round bearing, and classic bracing citric acidity.",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      name: "Lisbon",
      description: "Vigorous, cold-tolerant Mediterranean standard: pronounced nipple, dense juice vesicles, and high essential oil content in the zest.",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      name: "Meyer",
      description: "Celebrated gourmet cross between a lemon and a mandarin: thin smooth golden-orange skin, lower acidity, and fragrant herbal-floral sweetness.",
      sourceIds: ["usda-fdc-lemon"],
    },
  ],

  funFacts: [
    {
      text: "During the 18th-century Age of Sail, the British Admiralty mandated daily lemon juice rations for sailors, eliminating scurvy and earning Royal Navy sailors the nickname 'Limeys'.",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      text: "India is the world's largest producer of lemons and limes, harvesting over 3.7 million metric tons annually across Andhra Pradesh, Gujarat, and Maharashtra.",
      sourceIds: ["usda-fdc-lemon"],
    },
    {
      text: "A single drop of fresh lemon juice contains billions of citric acid molecules, creating a pH around 2.2—almost as acidic as stomach acid.",
      sourceIds: ["usda-fdc-lemon"],
    },
  ],

  similarFruitIds: ["orange", "kiwi", "pomegranate"],
  sourceIds: ["usda-fdc-lemon", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
