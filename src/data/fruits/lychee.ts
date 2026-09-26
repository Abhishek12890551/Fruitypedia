/**
 * Lychee — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173055 ("Litchis, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const lychee: Fruit = {
  id: "lychee",
  slug: "lychee",
  name: "Lychee",

  editorial: {
    nickname: "Litchi · China-Jambu",
    tagline: "Perfumed jewel. Ancient imperial treasure of the subtropical river valleys.",
    heroDescription:
      "Celebrated in ancient Chinese imperial poetry and prized across the sun-drenched alluvial plains of northern India, the lychee is a subtropical marvel of the Sapindaceae family. Beneath its rough, brittle crimson pericarp rests a glistening, translucent ivory aril brimming with delicate floral nectar reminiscent of rosewater and sweet muscat grape, surrounding a glossy dark seed.",
    pullQuotes: [
      {
        quote: "A brittle crimson armor fracturing open to yield a translucent pearl of pure floral nectar and rosewater perfume.",
        attribution: "Editorial",
      },
      {
        quote: "From the imperial couriers of the Tang Dynasty to the orchards of Muzaffarpur, the lychee remains summer's most regal delicacy.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Bursting with 71.5mg of Vitamin C per 100g (nearly 80% DV) along with bioavailable oligonol polyphenols and essential trace copper.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Sapindaceae",
    genus: "Litchi",
    species: "chinensis",
    botanicalNotes: [
      "Belongs to the soapberry family (Sapindaceae), closely related to longan, rambutan, and ackee.",
      "Botanically, the edible portion is not the pericarp, but a specialized fleshy, juicy outgrowth of the seed coat known as an aril.",
    ],
  },

  theme: {
    primary: "#F43F5E",
    secondary: "#FECDD3",
    glow: "#F43F5E40",
    gradient: ["#E11D48", "#FB7185"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/lychee/hero.png",
      alt: "Cluster of ripe crimson lychees with one peeled displaying glistening translucent white aril on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/lychee/card.png",
      alt: "Lychee - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/lychee/macro-break.png",
      alt: "Extreme macro photograph of peeled lychee translucent juicy aril vesicles and pearl-white texture",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Aril Micro-Vesicles · The Floral Nectar",
      captionText:
        "The glistening, translucent pulp is composed of densely packed succulent aril vesicles saturated with floral terpene alcohols (geraniol and linalool) and ascorbic acid fluid.",
    },
  },

  origin: {
    region: "Subtropical Southeastern China & Northern Vietnam",
    coordinates: [23.12, 113.26],
    description:
      "Native to the low-elevation rainforests of Guangdong and Fujian provinces in southeastern China. Cultivated for over two millennia, documented records reach back to the Han Dynasty in 111 BCE. Introduced to northern India (Bengal and Bihar) in the late 18th century, where the fertile alluvial soils of Muzaffarpur created India's legendary 'Shahi' lychee heritage.",
    grownTodayRegions: [
      "China (Guangdong, Guangxi, Fujian)",
      "India (Bihar, West Bengal, Assam, Punjab)",
      "Vietnam",
      "Thailand",
      "Madagascar",
      "South Africa",
      "Australia (Queensland)",
      "United States (Florida & Hawaii)",
    ],
    sourceIds: ["usda-fdc-lychee"],
  },

  season: [
    {
      regionId: "india-subtropical",
      hemisphere: "north",
      months: [5, 6, 7],
      peakMonths: [5, 6],
      label: "Northern Summer Harvest (May – June)",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      regionId: "southern-hemisphere",
      hemisphere: "south",
      months: [11, 12, 1, 2],
      peakMonths: [12, 1],
      label: "Southern Summer Harvest (Madagascar & Australia)",
      sourceIds: ["usda-fdc-lychee"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 66,
      unit: "kcal",
      sourceIds: ["usda-fdc-lychee"],
    },
    nutrients: {
      protein: {
        amount: 0.83,
        unit: "g",
        sourceIds: ["usda-fdc-lychee"],
      },
      totalFat: {
        amount: 0.44,
        unit: "g",
        sourceIds: ["usda-fdc-lychee"],
      },
      carbohydrates: {
        amount: 16.53,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-lychee"],
      },
      fiber: {
        amount: 1.3,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-lychee"],
      },
      totalSugars: {
        amount: 15.23,
        unit: "g",
        sourceIds: ["usda-fdc-lychee"],
      },
      vitaminC: {
        amount: 71.5,
        unit: "mg",
        dailyValuePercent: 79,
        sourceIds: ["usda-fdc-lychee"],
      },
      copper: {
        amount: 0.148,
        unit: "mg",
        dailyValuePercent: 16,
        sourceIds: ["usda-fdc-lychee"],
      },
      potassium: {
        amount: 171,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-lychee"],
      },
      phosphorus: {
        amount: 31,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-lychee"],
      },
      magnesium: {
        amount: 10,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-lychee"],
      },
      folate: {
        amount: 14,
        unit: "µg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-lychee"],
      },
    },
    waterContentPercent: 81.76,
    micronutrientSignatures: [
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 71.5,
        unit: "mg",
        dailyValuePercent: 79,
        description: "Dense reservoir supplying approximately 80% daily value per single cup of arils",
      },
      {
        name: "Bioavailable Trace Copper",
        amount: 0.148,
        unit: "mg",
        dailyValuePercent: 16,
        description: "Essential cofactor for cytochrome c oxidase in cellular energy metabolism",
      },
      {
        name: "Oligonol Flavanols",
        amount: 45,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Low-molecular-weight polyphenol complex promoting microvascular circulation",
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
      value: 3,
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Floral rose.",
    accent: "Glassy sweet nectar.",
    descriptors: [
      "Floral",
      "Rose",
      "Glassy",
      "Honeyed",
      "Juicy",
      "Crisp"
    ],
    notes:
      "A seasonal sensation with an ultra-short harvesting window; arils lose their delicate floral fragrance quickly once separated from the branch.",
  },

  benefitTags: [
    {
      label: "Cellular Ascorbic Protection",
      phenomenon: "antioxidant defense",
      description:
        "Providing 71.5mg of Vitamin C per 100g, defending lipid membranes against free-radical oxidation and enhancing dietary iron uptake.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-lychee"],
      icon: "shield",
      metric: "71.5 mg / 100g",
    },
    {
      label: "Microvascular & Endothelial Vitality",
      phenomenon: "oligonol polyphenol activity",
      description:
        "Supplies oligonol flavanols that support peripheral vascular flow and nitric oxide bioavailability.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-lychee"],
      icon: "heart",
    },
    {
      label: "Metabolic Copper Cofactor",
      phenomenon: "trace mineral assimilation",
      description:
        "Supplies 16% DV copper to assist enzymatic connective tissue synthesis and red blood cell production.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-lychee"],
      icon: "activity",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 71.5,
      unit: "mg",
      referenceContext: "79% Daily Value",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      nutrientId: "copper",
      label: "Copper",
      value: 0.148,
      unit: "mg",
      referenceContext: "16% Daily Value",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 66,
      unit: "kcal",
      referenceContext: "crystalline natural energy",
      sourceIds: ["usda-fdc-lychee"],
    },
  ],

  varieties: [
    {
      name: "Shahi",
      description: "The celebrated royal cultivar of Muzaffarpur (Bihar): prized for oval shape, rose-scented aril, high pulp-to-stone ratio, and exquisite sweetness.",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      name: "Rose Scented",
      description: "Indian commercial favorite featuring deep pinkish-red rough skin, very juicy translucent aril, and a distinct damask rose aroma.",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      name: "Mauritius (Kwai May)",
      description: "Global subtropical export standard: reliable cropping, medium fruit with prominent spikes, and balanced sweet-acid nectar.",
      sourceIds: ["usda-fdc-lychee"],
    },
  ],

  funFacts: [
    {
      text: "During the 8th-century Tang Dynasty, Emperor Xuanzong maintained an express relay of fast horses to deliver fresh lychees over 1,000 miles to his consort Yang Guifei.",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      text: "Muzaffarpur district in Bihar, India, produces over 300,000 metric tons of lychees annually and holds a prestigious Geographical Indication (GI) tag for Shahi Litchi.",
      sourceIds: ["usda-fdc-lychee"],
    },
    {
      text: "Unlike apples or bananas, lychees are non-climacteric and cease ripening the moment they are clipped from the tree.",
      sourceIds: ["usda-fdc-lychee"],
    },
  ],

  similarFruitIds: ["grape", "cherry", "strawberry"],
  sourceIds: ["usda-fdc-lychee", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
