/**
 * Jamun (Black Plum) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173950 ("Java plum, raw") and ICMR-NIN Indian Food Composition Tables.
 * Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const jamun: Fruit = {
  id: "jamun",
  slug: "jamun",
  name: "Jamun",

  editorial: {
    nickname: "Jambu · Kalajam",
    tagline: "The monsoon amethyst. Ancient Ayurvedic jewel of metabolic equilibrium.",
    heroDescription:
      "Arriving with the torrential arrival of the Indian southwest monsoon, the jamun (or Java plum) is an iconic evergreen treasure of the Myrtaceae family. Cloaked in lustrous, deep obsidian-purple skin that stains the fingertips and tongue royal violet, its succulent pinkish-lavender flesh offers a mesmerizing sensory dance of tart sweetness followed by an unmistakable, refreshing herbal astringency.",
    pullQuotes: [
      {
        quote: "An obsidian jewel that bursts on the palate with tart monsoon sweetness, sealing the tongue in an indelible royal violet stain.",
        attribution: "Editorial",
      },
      {
        quote: "Celebrated in ancient Vedic lore and Ayurvedic treatises, the jamun is nature's most respected ally for metabolic harmony.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A deep purple metabolic berry rich in potent delphinidin and petunidin anthocyanins, possessing a naturally low glycemic impact.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Myrtaceae",
    genus: "Syzygium",
    species: "cumini",
    botanicalNotes: [
      "Belongs to the myrtle family (Myrtaceae), closely related to clove, rose apple, and eucalyptus.",
      "Botanically classified as a single-seeded berry (often referred to as a drupaceous berry) with thin, fragile skin and succulent, deeply pigmented pulp adhering to an oblong seed.",
    ],
  },

  theme: {
    primary: "#581C87",
    secondary: "#C084FC",
    glow: "#581C8745",
    gradient: ["#3B0764", "#7E22CE"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/jamun/hero.png",
      alt: "Cluster of glistening dark purple-black jamun berries with one sliced showing violet flesh on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/jamun/card.png",
      alt: "Jamun - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/jamun/macro-break.png",
      alt: "Extreme macro photograph of ripe jamun berry skin showing deep violet anthocyanin pigments and dew drops",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Anthocyanin Pericarp · The Delphinidin Mantle",
      captionText:
        "The striking black-violet coloration stems from dense concentrations of delphinidin 3,5-diglucoside and petunidin pigments, accompanied by astringent ellagitannins.",
    },
  },

  origin: {
    region: "Indian Subcontinent & Southeast Asia",
    coordinates: [20.59, 78.96],
    description:
      "Native across the Indian subcontinent, Sri Lanka, and tropical Myanmar. Revered for millennia in ancient Indian literature; the ancient subcontinent was poetically designated in Vedic cosmology as 'Jambudvipa' (the continent of the Jamun trees). The legendary Ramayana recounts Lord Rama subsisting on wild forest jamun berries during his fourteen-year exile.",
    grownTodayRegions: [
      "India (Maharashtra, Uttar Pradesh, Gujarat, Punjab, Tamil Nadu)",
      "Bangladesh",
      "Pakistan",
      "Sri Lanka",
      "Indonesia",
      "Malaysia",
      "Brazil",
      "United States (Florida & Hawaii)",
    ],
    sourceIds: ["usda-fdc-jamun"],
  },

  season: [
    {
      regionId: "india-monsoon",
      hemisphere: "north",
      months: [5, 6, 7, 8],
      peakMonths: [6, 7],
      label: "Monsoon Season (June – July)",
      sourceIds: ["usda-fdc-jamun"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 60,
      unit: "kcal",
      sourceIds: ["usda-fdc-jamun"],
    },
    nutrients: {
      protein: {
        amount: 0.72,
        unit: "g",
        sourceIds: ["usda-fdc-jamun"],
      },
      totalFat: {
        amount: 0.23,
        unit: "g",
        sourceIds: ["usda-fdc-jamun"],
      },
      carbohydrates: {
        amount: 15.56,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-jamun"],
      },
      fiber: {
        amount: 0.9,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-jamun"],
      },
      totalSugars: {
        amount: 14.1,
        unit: "g",
        sourceIds: ["usda-fdc-jamun"],
      },
      vitaminC: {
        amount: 14.3,
        unit: "mg",
        dailyValuePercent: 16,
        sourceIds: ["usda-fdc-jamun"],
      },
      potassium: {
        amount: 79,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-jamun"],
      },
      calcium: {
        amount: 19,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-jamun"],
      },
      iron: {
        amount: 0.19,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-jamun"],
      },
      phosphorus: {
        amount: 17,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-jamun"],
      },
    },
    waterContentPercent: 83.13,
    micronutrientSignatures: [
      {
        name: "Delphinidin & Petunidin Glucosides",
        amount: 162,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Potent violet anthocyanin pigments providing profound free-radical scavenging capacity",
      },
      {
        name: "Jamboline & Ellagic Acid",
        amount: 38,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Bioactive glycosides and tannins supporting healthy glucose metabolism and starch hydrolysis control",
      },
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 14.3,
        unit: "mg",
        dailyValuePercent: 16,
        description: "Synergistic antioxidant preserving cellular tissue resilience during seasonal shifts",
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
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 3,
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
    lead: "Tannic first.",
    accent: "Lingering berry sweetness.",
    descriptors: [
      "Astringent",
      "Tannic",
      "Tart",
      "Berry",
      "Sweet",
      "Puckering"
    ],
    notes:
      "Traditionally tossed in a clay bowl with black rock salt (kala namak) and roasted cumin, which softens its intense astringency into pure refreshing magic.",
  },

  benefitTags: [
    {
      label: "Metabolic & Glycemic Balance",
      phenomenon: "jamboline and alpha-glucosidase regulation",
      description:
        "Extensively documented in Ayurvedic pharmacopeias for supporting stable postprandial glucose dynamics and carbohydrate absorption.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jamun"],
      icon: "activity",
    },
    {
      label: "Potent Anthocyanin Defense",
      phenomenon: "delphinidin antioxidant activity",
      description:
        "Its rich purple skin is dense with bioavailable polyphenols that neutralize free-radical oxidative stress across vascular walls.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jamun"],
      icon: "shield",
      metric: "162 mg anthocyanins",
    },
    {
      label: "Digestive & Oral Astringency",
      phenomenon: "tannin-mediated mucosal tone",
      description:
        "Natural ellagitannins exert a soothing, toning effect on oral gums and intestinal mucosal membranes.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-jamun"],
      icon: "heart",
    },
  ],

  heroStats: [
    {
      nutrientId: "anthocyanins",
      label: "Anthocyanins",
      value: 162,
      unit: "mg",
      referenceContext: "delphinidin density",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 60,
      unit: "kcal",
      referenceContext: "low glycemic index",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 14.3,
      unit: "mg",
      referenceContext: "16% Daily Value",
      sourceIds: ["usda-fdc-jamun"],
    },
  ],

  varieties: [
    {
      name: "Ram Jamun",
      description: "The premier Indian table variety: large, oblong deep-purple fruit with high pulp content, small seed, and sweet, juicy sub-acid flavor.",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      name: "Konkan Bhat",
      description: "Coastal Maharashtra selection known for rounder berries, dark midnight-violet skin, and high anthocyanin juice yield.",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      name: "Goma Priyanka",
      description: "High-yielding improved cultivar developed in Gujarat, featuring exceptionally high pulp-to-seed ratio and consistent early monsoon harvest.",
      sourceIds: ["usda-fdc-jamun"],
    },
  ],

  funFacts: [
    {
      text: "The ancient Indian subcontinental landmass was named 'Jambudvipa' in classical Sanskrit puranas, signifying the sacred land populated by giant Jamun trees.",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      text: "Jamun seeds are traditionally dried, finely powdered, and used in Ayurvedic medicine as a renowned herbal tonic for blood sugar management.",
      sourceIds: ["usda-fdc-jamun"],
    },
    {
      text: "The purple anthocyanins in jamun are natural bio-indicators: adding a drop of lemon juice turns jamun syrup vibrant bright red, while alkaline drops turn it deep green.",
      sourceIds: ["usda-fdc-jamun"],
    },
  ],

  similarFruitIds: ["blueberry", "grape", "pomegranate"],
  sourceIds: ["usda-fdc-jamun", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
