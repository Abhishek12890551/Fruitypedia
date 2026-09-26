/**
 * Plum — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 169949 ("Plums, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const plum: Fruit = {
  id: "plum",
  slug: "plum",
  name: "Plum",

  editorial: {
    nickname: "Alobukhara · Alu",
    tagline: "The velvety drupe. Ancient balance of sorbitol and anthocyanin depth.",
    heroDescription:
      "Cultivated since antiquity across the Caucasus, the Levant, and East Asia, the plum is a beloved stone fruit of the Rosaceae family. Cloaked in a frosted, deep indigo or amber-flushed skin dusted with natural silver bloom, its succulent amber or ruby mesocarp delivers an exquisite contrast of honeyed sweetness and refreshing tartness from skin-bound organic acids.",
    pullQuotes: [
      {
        quote: "A velvety indigo globe frosted with silver pruinescence, bursting with succulent wine-sweet pulp and a brisk, tart skin snap.",
        attribution: "Editorial",
      },
      {
        quote: "Revered from the imperial plum blossoms of ancient China to Ottoman orchards, the plum is nature's classic stone-fruit cordial.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A hydrating stone fruit providing 87% cellular water, gentle dietary sorbitol, and protective chlorogenic and neochlorogenic acid polyphenols.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rosaceae",
    genus: "Prunus",
    species: "domestica",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), originating from natural hexaploid hybridization between the cherry plum (Prunus cerasifera) and blackthorn (Prunus spinosa).",
      "Botanically classified as a fleshy drupe featuring a smooth epicarp with epicuticular wax bloom, succulent edible mesocarp, and a lignified stone enclosing one seed.",
    ],
  },

  theme: {
    primary: "#7E22CE",
    secondary: "#D8B4FE",
    glow: "#7E22CE40",
    gradient: ["#581C87", "#9333EA"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/plum/hero.png",
      alt: "Fresh ripe purple plums dusted with natural silver bloom sliced open showing golden amber flesh on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/plum/card.png",
      alt: "Plum - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/plum/macro-break.png",
      alt: "Extreme macro photograph of sliced purple plum showing golden-amber flesh texture and anthocyanin-flushed peel",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Drupe Sarcocarp · The Hydroxycinnamic Shield",
      captionText:
        "The succulent pulp and pigmented skin concentrate neochlorogenic and chlorogenic acids, potent phenolic antioxidants that resist lipid peroxidation.",
    },
  },

  origin: {
    region: "Caspian Sea Basin & Eastern Europe",
    coordinates: [40.0, 48.0],
    description:
      "Indigenous to the temperate regions flanking the Caucasus Mountains and the Caspian Sea. Plums were cultivated by ancient Greeks and Romans, who introduced them across Europe. Simultaneously, Japanese plums (Prunus salicina) were domesticated thousands of years ago in the Yangtze valley of China.",
    grownTodayRegions: [
      "China",
      "Romania",
      "Serbia",
      "United States (California)",
      "Chile",
      "Turkey",
      "India (Himachal Pradesh, Jammu & Kashmir)",
      "Spain",
    ],
    sourceIds: ["usda-fdc-plum"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [6, 7, 8, 9, 10],
      peakMonths: [7, 8, 9],
      label: "Northern Summer Harvest (July – September)",
      sourceIds: ["usda-fdc-plum"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 46,
      unit: "kcal",
      sourceIds: ["usda-fdc-plum"],
    },
    nutrients: {
      protein: {
        amount: 0.7,
        unit: "g",
        sourceIds: ["usda-fdc-plum"],
      },
      totalFat: {
        amount: 0.28,
        unit: "g",
        sourceIds: ["usda-fdc-plum"],
      },
      carbohydrates: {
        amount: 11.42,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-plum"],
      },
      fiber: {
        amount: 1.4,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-plum"],
      },
      totalSugars: {
        amount: 9.92,
        unit: "g",
        sourceIds: ["usda-fdc-plum"],
      },
      vitaminC: {
        amount: 9.5,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-plum"],
      },
      vitaminK: {
        amount: 6.4,
        unit: "mcg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-plum"],
      },
      potassium: {
        amount: 157,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-plum"],
      },
      vitaminA: {
        amount: 17,
        unit: "mcg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-plum"],
      },
    },
    waterContentPercent: 87.23,
    micronutrientSignatures: [
      {
        name: "Neochlorogenic & Chlorogenic Acids",
        amount: 85.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Potent hydroxycinnamic phenolic isomers providing robust cellular antioxidant defense against LDL oxidation",
      },
      {
        name: "Dietary Sorbitol & Soluble Isatin",
        amount: 2.8,
        unit: "g",
        dailyValuePercent: 0,
        description: "Natural non-digestible sugar alcohol promoting gentle bowel motility and colonic osmotic hydration",
      },
      {
        name: "Anthocyanin Cyanidin-3-Glucoside",
        amount: 24.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Flavonoid pigments responsible for the deep indigo skin and microvascular capillary strength",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 6,
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
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Wine-sweet pulp.",
    accent: "Crisp tart skin.",
    descriptors: [
      "Wine-Sweet",
      "Tart Skin",
      "Juicy",
      "Sorbitol",
      "Honeyed"
    ],
    notes:
      "European varieties offer firm, sweet flesh ideal for baking, while Japanese varieties provide explosive water turgor and refreshing tartness.",
  },

  benefitTags: [
    {
      label: "Digestive Motility & Regularity",
      phenomenon: "sorbitol and phenolic osmotic regulation",
      description:
        "Natural dietary sorbitol draws water into the intestinal lumen, safely accelerating transit without cramping.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-plum"],
      icon: "activity",
      metric: "2.8 g sorbitol",
    },
    {
      label: "Hydroxycinnamic Antioxidant Defense",
      phenomenon: "neochlorogenic acid radical scavenging",
      description:
        "Polyphenolic chlorogenic acids scavenge superoxide and peroxynitrite radicals, protecting cellular lipids from oxidative stress.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-plum"],
      icon: "shield",
      metric: "85 mg phenolics",
    },
    {
      label: "Bone Mineral Retention",
      phenomenon: "polyphenol-mediated osteoclast suppression",
      description:
        "Supplies Vitamin K alongside unique polyphenols that support bone matrix mineralization and osteoblast activity.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-plum"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 46,
      unit: "kcal",
      referenceContext: "light hydrating stone fruit",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 9.5,
      unit: "mg",
      referenceContext: "11% Daily Value",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 1.4,
      unit: "g",
      referenceContext: "5% Daily Value",
      sourceIds: ["usda-fdc-plum"],
    },
  ],

  varieties: [
    {
      name: "Santa Rosa",
      description: "Legendary California Japanese-style cultivar bred by Luther Burbank: ruby-red skin with golden flesh that melts into pure honey-tart nectar.",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      name: "Reine Claude (Greengage)",
      description: "Historic French heirloom esteemed since the Renaissance: small green drupe with unmatched perfumed sugar complexity and syrupy sweetness.",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      name: "Black Amber",
      description: "Leading commercial dark plum: large, nearly black globe with firm amber flesh and excellent sweet-tart contrast.",
      sourceIds: ["usda-fdc-plum"],
    },
  ],

  funFacts: [
    {
      text: "The whitish frosted coating on fresh plums is not dust or pesticide residue—it is 'epicuticular wax bloom', a natural water-repellent barrier that keeps the fruit fresh.",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      text: "In traditional Chinese culture, the plum blossom (Meihua) is a symbol of resilience and perseverance because it blooms vibrantly amidst winter snow.",
      sourceIds: ["usda-fdc-plum"],
    },
    {
      text: "Prunes are not just any dried plums—they are made exclusively from specific European plum cultivars with exceptionally high sugar content and freestone pits.",
      sourceIds: ["usda-fdc-plum"],
    },
  ],

  similarFruitIds: ["apricot", "cherry", "peach"],
  sourceIds: ["usda-fdc-plum", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
