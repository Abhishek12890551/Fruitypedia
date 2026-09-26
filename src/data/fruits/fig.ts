/**
 * Fig — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173024 ("Figs, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 6
 */

import type { Fruit } from "@/types";

export const fig: Fruit = {
  id: "fig",
  slug: "fig",
  name: "Fig",

  editorial: {
    nickname: "Anjeer · Udumbara",
    tagline: "Inverted flower syconium. Ancient pillar of the Fertile Crescent.",
    heroDescription:
      "Arguably humanity's oldest cultivated fruit with subfossil evidence predating cereal agriculture by a millennium, the common fig is a botanical wonder of the Moraceae mulberry family. Botanically not a simple fruit, but a syconium—an inverted fleshy floral vessel enclosing hundreds of microscopic internal flowers that ripen into sweet, jammy ruby pulp with a delicate seeded crunch.",
    pullQuotes: [
      {
        quote: "A living amphora enclosing its own secret garden: the fig turns its flowers inward, brewing concentrated honey and jam beneath a dusty violet mantle.",
        attribution: "Editorial",
      },
      {
        quote: "Before wheat was sown or barley gathered, Neolithic hands in the Jordan Valley plucked dried wild figs from limestone terraces.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Supplies 79% structured water, exceptional plant calcium (35mg per 100g), and soluble pectin fiber supporting sustained digestive vitality.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Moraceae",
    genus: "Ficus",
    species: "carica",
    botanicalNotes: [
      "Belongs to the genus Ficus in the mulberry family (Moraceae), comprising over 800 tropical and subtropical woody species.",
      "Botanically classified as a syconium: an enlarged, fleshy, hollow receptacle bearing numerous unisexual flowers along its interior wall, each maturing into a minute drupelet.",
    ],
  },

  theme: {
    primary: "#8B5CF6",
    secondary: "#C4B5FD",
    glow: "#8B5CF640",
    gradient: ["#8B5CF6", "#4C1D95"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/fig/hero.png",
      alt: "Ripe fresh figs split open showing jammy ruby floral interior on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/fig/card.png",
      alt: "Fig - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/fig/macro-break.png",
      alt: "Extreme macro photograph of sliced fresh fig interior showing hundreds of glistening seed drupelets",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Inverted Syconium · The Micro-Drupelets",
      captionText:
        "The interior cavern of each fig contains hundreds of individual pollinated female florets, each transformed into a microscopic seed-bearing drupelet suspended in pectin-rich syrup.",
    },
  },

  origin: {
    region: "Fertile Crescent & Mediterranean Basin (Levant)",
    coordinates: [31.95, 35.93],
    description:
      "Native to the arid slopes and limestone oases of Western Asia and the Eastern Mediterranean. Subfossil fig remains excavated at the early Neolithic site of Gilgal I in the Jordan Valley date to approximately 9400 BCE, indicating that parthenocarpic figs were selected and propagated even before wheat and barley domestication.",
    grownTodayRegions: [
      "Turkey (Aegean & Izmir Province)",
      "Egypt",
      "Morocco",
      "Algeria",
      "Iran",
      "Spain",
      "Syria",
      "United States (California Central Valley)",
      "Italy",
      "Greece",
    ],
    sourceIds: ["usda-fdc-fig"],
  },

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    waterContentPercent: 79.11,
    calories: {
      amount: 74,
      unit: "kcal",
      sourceIds: ["usda-fdc-fig"],
      sourceReferenceIds: ["208"],
    },

    nutrients: {
      calories: {
        amount: 74,
        unit: "kcal",
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["208"],
      },
      carbohydrates: {
        amount: 19.18,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.9,
        unit: "g",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 16.26,
        unit: "g",
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["269"],
      },
      protein: {
        amount: 0.75,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.3,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["204"],
      },
      saturatedFat: {
        amount: 0.06,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["606"],
      },
      potassium: {
        amount: 232,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["306"],
      },
      calcium: {
        amount: 35,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["301"],
      },
      magnesium: {
        amount: 17,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 14,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["305"],
      },
      iron: {
        amount: 0.37,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["303"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["307"],
      },
      zinc: {
        amount: 0.15,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.07,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.128,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 2.0,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["401"],
      },
      vitaminK: {
        amount: 4.7,
        unit: "µg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["430"],
      },
      folate: {
        amount: 6,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["435"],
      },
      vitaminB6: {
        amount: 0.11,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["415"],
      },
      niacin: {
        amount: 0.4,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["406"],
      },
      thiamin: {
        amount: 0.06,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.05,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-fig"],
        sourceReferenceIds: ["405"],
      },
    },
    micronutrientSignatures: [
      {
        name: "Bioavailable Calcium",
        amount: 35,
        unit: "mg",
        dailyValuePercent: 3,
        description: "Among the highest calcium concentrations of any common fresh temperate fruit.",
      },
      {
        name: "Dietary Pectin Fiber",
        amount: 2.9,
        unit: "g",
        dailyValuePercent: 10,
        description: "Mucilaginous soluble fiber promoting digestive comfort and prebiotic motility.",
      },
      {
        name: "Potassium",
        amount: 232,
        unit: "mg",
        dailyValuePercent: 5,
        description: "Primary intracellular electrolyte supporting fluid and cellular osmotic balance.",
      },
      {
        name: "Copper",
        amount: 0.07,
        unit: "mg",
        dailyValuePercent: 8,
        description: "Trace cofactor supporting iron metabolism and antioxidant enzyme complexes.",
      },
    ],
  },

  tasteProfile: {
    sweetness: { value: 9, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    acidity: { value: 2, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    juiciness: { value: 7, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    aromatic: { value: 8, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    lead: "Honeyed floral nectar.",
    accent: "Jammy with seed crunch.",
    descriptors: ["Honeyed", "Jammy", "Floral", "Mellow", "Nutty"],
    notes:
      "Deep, rich molasses sweetness without citric sharpness. The velvety skin gives way to a luxurious, jammy crimson interior punctuated by the pleasant tactile crunch of hundreds of microscopic internal seeds.",
  },

  benefitTags: [
    {
      label: "Digestive Transit & Fiber",
      phenomenon: "soluble and insoluble fiber synergy",
      description:
        "Contains 2.9g of dietary fiber per 100g including natural pectin and mucilage, which gently promote healthy intestinal motility and digestion.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-fig"],
      icon: "shield",
    },
    {
      label: "Plant-Based Calcium",
      phenomenon: "calcium mineral density",
      description:
        "Provides 35mg of bioavailable calcium per 100g, contributing to daily mineral requirements for bone maintenance in plant-forward diets.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-fig"],
      icon: "zap",
    },
    {
      label: "Natural Carbohydrate Energy",
      phenomenon: "balanced glycemic fruit sugars",
      description:
        "Supplies easily digestible fructose and glucose bound in a fibrous matrix, delivering sustained energy without refined sugar spikes.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-fig"],
      icon: "sparkles",
    },
  ],

  heroStats: [
    {
      nutrientId: "calcium",
      label: "Plant Calcium",
      value: 35,
      unit: "mg",
      referenceContext: "rare fruit density",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.9,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 232,
      unit: "mg",
      referenceContext: "cellular balance",
      sourceIds: ["usda-fdc-fig"],
    },
  ],

  varieties: [
    {
      name: "Black Mission",
      description: "Iconic cultivar introduced to California by Franciscan missionaries in 1768; features purple-black skin and strawberry-jam pulp.",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      name: "Brown Turkey",
      description: "Hardy, versatile cultivar with bronze-purple skin, amber-pink flesh, and a rich, mild honeyed sweetness.",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      name: "Calimyrna (Sari Lop)",
      description: "The premier Smyrna-type green fig of Izmir; golden skin, amber-rose pulp, and an intense, nutty butterscotch finish.",
      sourceIds: ["usda-fdc-fig"],
    },
  ],


  funFacts: [
    {
      text: "Figs are not true botanical fruits, but inverted flowers called syconia that blossom entirely inside the hollow pod.",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      text: "Fossilized figs excavated in the Jordan Valley date back over 11,400 years, predating domesticated wheat.",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      text: "The white latex sap of fig trees contains the proteolytic enzyme ficin, historically used as a natural cheesemaking rennet.",
      sourceIds: ["usda-fdc-fig"],
    },
  ],

  season: [
    {
      regionId: "mediterranean-basin",
      hemisphere: "north",
      months: [6, 7, 8, 9, 10],
      peakMonths: [7, 8, 9],
      label: "Northern Summer & Autumn Harvest",
      sourceIds: ["usda-fdc-fig"],
    },
    {
      regionId: "southern-temperate",
      hemisphere: "south",
      months: [12, 1, 2, 3, 4],
      peakMonths: [1, 2, 3],
      label: "Southern Summer Harvest",
      sourceIds: ["usda-fdc-fig"],
    },
  ],

  similarFruitIds: ["peach", "apple", "blueberry"],
  sourceIds: ["usda-fdc-fig", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-21",
    reviewerId: "abhi",
  },
};

export default fig;
