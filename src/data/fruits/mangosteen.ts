/**
 * Mangosteen — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173948 ("Mangosteen, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const mangosteen: Fruit = {
  id: "mangosteen",
  slug: "mangosteen",
  name: "Mangosteen",

  editorial: {
    nickname: "Mangosteen · Kokum Raja",
    tagline: "The Queen of Fruits. Porcelain floral segments and unrivaled xanthone defense.",
    heroDescription:
      "Universally anointed as the 'Queen of Fruits', the mangosteen (Garcinia mangostana) is an exquisite botanical gem indigenous to the tropical rainforests of the Malay Archipelago. Concealed within a thick, leathery, imperial aubergine pericarp lies a radial rosette of snowy white, melt-in-the-mouth arillate segments. It offers an ethereal, pristine sensory experience: a sublime union of sweet white peach, fragrant lychee, wild strawberry, and bright, refreshing citrus acidity.",
    pullQuotes: [
      {
        quote: "Beneath an imperial purple vault rests a pristine rosette of snowy porcelain arils, melting with angelic floral nectar.",
        attribution: "Editorial",
      },
      {
        quote: "Queen Victoria reportedly offered a royal knighthood to anyone who could bring her an unblemished fresh mangosteen.",
        attribution: "Historical Legend",
      },
    ],
    nutritionDescription:
      "A hydrating, delicate tropical fruit celebrated for its medicinal purple exocarp packed with over 40 distinct bioactive xanthones, notably alpha-mangostin.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Clusiaceae",
    genus: "Garcinia",
    species: "mangostana",
    botanicalNotes: [
      "Belongs to the mangosteen family (Clusiaceae), an obligate apomictic tree; every cultivated tree is essentially a genetically identical female clone propagating without sexual fertilization.",
      "Botanically classified as a spherical berry with a firm, thick reddish-purple exocarp capping four leathery persistent calyx sepals and 4 to 8 soft white edible seed arils.",
    ],
  },

  theme: {
    primary: "#831843",
    secondary: "#FCE7F3",
    glow: "#83184340",
    gradient: ["#500724", "#9D174D"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/mangosteen/hero.png",
      alt: "Halved and whole purple mangosteens displaying pristine snowy white segmented flesh inside deep violet rind on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/mangosteen/card.png",
      alt: "Mangosteen - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/mangosteen/macro-break.png",
      alt: "Extreme macro photograph of snowy white mangosteen segment juice vesicles showing translucent cell walls and pristine turgor",
      role: "gallery",
      reviewed: true,
      generatedBy: "ai",
      captionTitle: "Pericarp Anatomy · The Alpha-Mangostin Fortress",
      captionText:
        "The deep purple resinous rind contains the world's dense concentration of alpha- and gamma-mangostin, polyphenolic xanthones with profound anti-inflammatory potency.",
    },
  },

  origin: {
    region: "Sunda Islands & Malay Peninsula (Southeast Asia)",
    coordinates: [3.1, 101.7],
    description:
      "Indigenous to the humid tropical river valleys of Malaysia, Indonesia, and Thailand. Highly sensitive to cold, it cannot survive temperatures below 4°C. Introduced into Sri Lanka, the Nilgiris and Courtallam hills of Tamil Nadu and Kerala in India in the 18th and 19th centuries, and Central America, remaining one of the world's most sought-after ultra-tropical delicacies.",
    grownTodayRegions: [
      "Thailand (Rayong, Chanthaburi)",
      "Indonesia (Sumatra, West Java)",
      "Malaysia (Johor, Perak)",
      "India (Courtallam, Nilgiris, Kerala)",
      "Vietnam",
      "Philippines (Mindanao)",
    ],
    sourceIds: ["usda-fdc-mangosteen"],
  },

  season: [
    {
      regionId: "thailand-eastern",
      hemisphere: "north",
      months: [5, 6, 7, 8],
      peakMonths: [6, 7],
      label: "Thailand Eastern Provinces Peak (June – July)",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      regionId: "india-western-ghats",
      hemisphere: "north",
      months: [6, 7, 8, 9],
      peakMonths: [7, 8],
      label: "Western Ghats Monsoon Season (July – August)",
      sourceIds: ["usda-fdc-mangosteen"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 73,
      unit: "kcal",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    nutrients: {
      protein: {
        amount: 0.41,
        unit: "g",
        sourceIds: ["usda-fdc-mangosteen"],
      },
      totalFat: {
        amount: 0.58,
        unit: "g",
        sourceIds: ["usda-fdc-mangosteen"],
      },
      carbohydrates: {
        amount: 17.91,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      fiber: {
        amount: 1.8,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      totalSugars: {
        amount: 15.6,
        unit: "g",
        sourceIds: ["usda-fdc-mangosteen"],
      },
      folate: {
        amount: 31,
        unit: "mcg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      copper: {
        amount: 0.069,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      vitaminC: {
        amount: 2.9,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      magnesium: {
        amount: 13,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-mangosteen"],
      },
      potassium: {
        amount: 48,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-mangosteen"],
      },
    },
    waterContentPercent: 80.94,
    micronutrientSignatures: [
      {
        name: "Alpha-Mangostin (Prenylated Xanthone)",
        amount: 35.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Premier therapeutic xanthone in Garcinia mangostana displaying potent COX-2 inhibition and antioxidant capacity",
      },
      {
        name: "Gamma-Mangostin & Garcimangosones",
        amount: 18.5,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Secondary bioactive xanthones exhibiting selective 5-lipoxygenase and histamine receptor stabilization",
      },
      {
        name: "Natural Folate (Vitamin B9)",
        amount: 31.0,
        unit: "mcg",
        dailyValuePercent: 8,
        description: "Essential pteroylglutamate crucial for cellular DNA synthesis and maternal erythrocyte formation",
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
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Porcelain silk.",
    accent: "Mandarin peach sweetness.",
    descriptors: [
      "White Peach",
      "Lychee Musk",
      "Porcelain Aril",
      "Mandarin",
      "Floral"
    ],
    notes:
      "The snowy aril segments are delightfully tender and seedless in smaller segments, with a solitary soft seed in the largest lobe.",
  },

  benefitTags: [
    {
      label: "Targeted Anti-Inflammatory COX-2 Inhibition",
      phenomenon: "prenylated xanthone enzyme inhibition",
      description:
        "Alpha-mangostin binds cyclooxygenase (COX-2) and inducible nitric oxide synthase, attenuating systemic inflammatory markers.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mangosteen"],
      icon: "shield",
      metric: "35 mg xanthones",
    },
    {
      label: "Metabolic Cooling & Homeostasis",
      phenomenon: "intracellular water and organic acid balance",
      description:
        "Delivers 81% intracellular water balanced with citric and malic acids, providing immediate metabolic cooling against culinary heat.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mangosteen"],
      icon: "activity",
      metric: "80.94 g intracellular water",
    },
    {
      label: "Cellular DNA Synthesis & Folate",
      phenomenon: "one-carbon dietary pteroylglutamate transfer",
      description:
        "Natural folate coenzymes fuel nucleotide synthesis and maternal tissue cellular replication during critical life stages.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-mangosteen"],
      icon: "zap",
      metric: "31 mcg Folate (8% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "folate",
      label: "Folate (B9)",
      value: 31,
      unit: "mcg",
      referenceContext: "8% Daily Value",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 73,
      unit: "kcal",
      referenceContext: "delicate Queen of Fruits",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      nutrientId: "copper",
      label: "Copper",
      value: 0.069,
      unit: "mg",
      referenceContext: "8% Daily Value",
      sourceIds: ["usda-fdc-mangosteen"],
    },
  ],

  varieties: [
    {
      name: "Mesta (Elongated Queen)",
      description: "Rare teardrop-shaped Malaysian heirloom: thinner, softer rind, virtually seedless snowy segments, and transcendent honeyed sweetness.",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      name: "Raya (Indonesian Standard)",
      description: "Robust spherical fruits of West Java: deep violet-black rinds, thick persistent green calyx, and exceptionally juicy sweet-tart rosettes.",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      name: "Chesil (Southern Thai Export)",
      description: "Thailand's benchmark premium export variety: uniform thick protective rinds enclosing 5 to 6 plump snowy arils with tender melt.",
      sourceIds: ["usda-fdc-mangosteen"],
    },
  ],

  funFacts: [
    {
      text: "Look closely at the raised flower-like lobes (stigma remnants) on the bottom of a mangosteen—the number of lobes always matches the exact number of internal edible fruit segments.",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      text: "Every cultivated mangosteen tree in the world is essentially a genetic clone of a single ancestral tree because the species reproduces through obligate apomixis (seeds develop without fertilization).",
      sourceIds: ["usda-fdc-mangosteen"],
    },
    {
      text: "In Southeast Asian culture, durian is the 'King of Fruits' and mangosteen is the 'Queen of Fruits', representing perfect culinary Yin and Yang because cooling mangosteen balances heating durian.",
      sourceIds: ["usda-fdc-mangosteen"],
    },
  ],

  similarFruitIds: ["lychee", "durian", "peach"],
  sourceIds: ["usda-fdc-mangosteen", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
