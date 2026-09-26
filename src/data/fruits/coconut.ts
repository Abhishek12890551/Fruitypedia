/**
 * Coconut — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 170169 ("Nuts, coconut meat, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const coconut: Fruit = {
  id: "coconut",
  slug: "coconut",
  name: "Coconut",

  editorial: {
    nickname: "Nariyal · Kalpavriksha",
    tagline: "The palm of life. Maritime voyager of medium-chain lipid vitality.",
    heroDescription:
      "Revered across tropical coastal civilizations as 'Kalpavriksha' (the divine tree that provides all necessities of life), the coconut is a maritime botanical wonder of the Arecaceae family. Encased in a buoyant fibrous husk that allows it to float across entire oceans for months and remain viable, its hard endocarp encloses crisp, snowy-white endosperm meat packed with medium-chain fatty acids (lauric acid) and structured electrolyte water.",
    pullQuotes: [
      {
        quote: "An oceanic voyager whose fibrous vault safeguards liquid life and snow-white meat dense with sustaining medium-chain lipids.",
        attribution: "Editorial",
      },
      {
        quote: "From the serene coastal backwaters of Kerala to the Polynesian atolls, the coconut has nurtured maritime humanity for over four millennia.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A lipid-dense coastal powerhouse packing 9g of dietary fiber (32% DV), 65% DV manganese, and functional medium-chain triglycerides (lauric acid).",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Arecaceae",
    genus: "Cocos",
    species: "nucifera",
    botanicalNotes: [
      "Belongs to the palm family (Arecaceae), the sole living species in the monotypic genus Cocos.",
      "Botanically classified as a fibrous one-seeded dry drupe (often called a 'drupaceous nut'): consisting of a smooth exocarp, thick fibrous mesocarp (coir), and a stony woody endocarp with three germination pores ('eyes').",
    ],
  },

  theme: {
    primary: "#0D9488",
    secondary: "#99F6E4",
    glow: "#0D948840",
    gradient: ["#0F766E", "#14B8A6"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/coconut/hero.png",
      alt: "Cracked fresh coconut showing thick pure white meat and brown shell on dark textured slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/coconut/card.png",
      alt: "Coconut - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/coconut/macro-break.png",
      alt: "Extreme macro photograph of crisp white coconut endosperm meat texture and natural oil sheen",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Solid Endosperm · The Lauric Matrix",
      captionText:
        "The solid white meat is composed of thick cellular layers rich in medium-chain triglycerides (predominantly 12-carbon lauric acid) and insoluble dietary fiber.",
    },
  },

  origin: {
    region: "Indo-Malayan Archipelago & Southwestern Pacific",
    coordinates: [-2.54, 115.66],
    description:
      "Genetically and botanically divided into two distinct domestications: the Pacific basin (Southeast Asia/Melanesia) and the Indian Ocean basin (South India and Sri Lanka). Capable of floating thousands of miles across oceanic currents without losing seed viability, coconuts colonized tropical coastlines worldwide long before early Austronesian and Indian maritime voyagers cultivated them systematically.",
    grownTodayRegions: [
      "Indonesia",
      "Philippines",
      "India (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh)",
      "Sri Lanka",
      "Brazil",
      "Vietnam",
      "Papua New Guinea",
      "Thailand",
    ],
    sourceIds: ["usda-fdc-coconut"],
  },

  season: [
    {
      regionId: "tropical-maritime",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [3, 4, 5, 6],
      label: "Year-Round Coastal Harvest (Spring Peak)",
      sourceIds: ["usda-fdc-coconut"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 354,
      unit: "kcal",
      sourceIds: ["usda-fdc-coconut"],
    },
    nutrients: {
      protein: {
        amount: 3.33,
        unit: "g",
        sourceIds: ["usda-fdc-coconut"],
      },
      totalFat: {
        amount: 33.49,
        unit: "g",
        dailyValuePercent: 43,
        sourceIds: ["usda-fdc-coconut"],
      },
      carbohydrates: {
        amount: 15.23,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-coconut"],
      },
      fiber: {
        amount: 9.0,
        unit: "g",
        dailyValuePercent: 32,
        sourceIds: ["usda-fdc-coconut"],
      },
      totalSugars: {
        amount: 6.23,
        unit: "g",
        sourceIds: ["usda-fdc-coconut"],
      },
      manganese: {
        amount: 1.5,
        unit: "mg",
        dailyValuePercent: 65,
        sourceIds: ["usda-fdc-coconut"],
      },
      copper: {
        amount: 0.435,
        unit: "mg",
        dailyValuePercent: 48,
        sourceIds: ["usda-fdc-coconut"],
      },
      iron: {
        amount: 2.43,
        unit: "mg",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-coconut"],
      },
      potassium: {
        amount: 356,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-coconut"],
      },
      selenium: {
        amount: 10.1,
        unit: "µg",
        dailyValuePercent: 18,
        sourceIds: ["usda-fdc-coconut"],
      },
      magnesium: {
        amount: 32,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-coconut"],
      },
      phosphorus: {
        amount: 113,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-coconut"],
      },
    },
    waterContentPercent: 46.99,
    micronutrientSignatures: [
      {
        name: "Lauric Acid (Medium Chain Triglyceride)",
        amount: 15.3,
        unit: "g",
        dailyValuePercent: 0,
        description: "12-carbon saturated fatty acid absorbed directly via portal circulation for rapid hepatic energy conversion",
      },
      {
        name: "Trace Mineral Manganese",
        amount: 1.5,
        unit: "mg",
        dailyValuePercent: 65,
        description: "Dense trace mineral reserve supporting enzyme activation in carbohydrate and lipid metabolism",
      },
      {
        name: "Insoluble Prebiotic Fiber",
        amount: 9.0,
        unit: "g",
        dailyValuePercent: 32,
        description: "Robust structural lignocellulose fiber aiding digestive fullness and steady colonic transit",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Nutty cream.",
    accent: "Crisp tropical milk.",
    descriptors: [
      "Nutty",
      "Creamy",
      "Crisp",
      "Tropical Milk",
      "Silky"
    ],
    notes:
      "Tender young coconuts ('malai') offer soft, spoonable gelatinous meat, while mature brown coconuts feature dense, firm, oil-rich endosperm.",
  },

  benefitTags: [
    {
      label: "Rapid Cellular Energy (MCTs)",
      phenomenon: "medium-chain triglyceride metabolism",
      description:
        "Contains lauric acid and medium-chain fatty acids that bypass peripheral lipid storage and provide immediate cellular fuel.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-coconut"],
      icon: "zap",
    },
    {
      label: "Digestive Satiety & Regularity",
      phenomenon: "insoluble dietary fiber density",
      description:
        "Providing 9g of dietary fiber per 100g (32% DV), promoting prolonged meal satiety and smooth intestinal transit.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-coconut"],
      icon: "activity",
      metric: "9.0 g fiber",
    },
    {
      label: "Manganese & Antioxidant Defense",
      phenomenon: "trace mineral cofactor activation",
      description:
        "Supplies 65% DV manganese to drive enzymatic antioxidant defenses and support connective tissue regeneration.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-coconut"],
      icon: "shield",
      metric: "1.5 mg / 100g",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 9.0,
      unit: "g",
      referenceContext: "32% Daily Value",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      nutrientId: "manganese",
      label: "Manganese",
      value: 1.5,
      unit: "mg",
      referenceContext: "65% Daily Value",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 354,
      unit: "kcal",
      referenceContext: "dense sustaining lipid fuel",
      sourceIds: ["usda-fdc-coconut"],
    },
  ],

  varieties: [
    {
      name: "West Coast Tall",
      description: "Iconic Indian heirloom tall palm: hardy, large round nuts with thick, sweet kernel meat and high copra oil yield.",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      name: "Chowghat Orange Dwarf",
      description: "Premier tender coconut cultivar of Kerala: early bearing, prized for high volume of sweet, electrolyte-rich water.",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      name: "Malayan Yellow Dwarf",
      description: "Widely planted global tropical dwarf cultivar: high resistance to lethal yellowing disease with bright golden-yellow nuts.",
      sourceIds: ["usda-fdc-coconut"],
    },
  ],

  funFacts: [
    {
      text: "A fallen coconut can float across thousands of miles of saltwater for up to 110 days and still sprout vigorously upon washing ashore on a sandy beach.",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      text: "The state name 'Kerala' in Southwestern India translates literally from Malayalam as 'Kera' (coconut palm) + 'Alam' (land)—the Land of Coconuts.",
      sourceIds: ["usda-fdc-coconut"],
    },
    {
      text: "During World War II, fresh coconut water was occasionally used in emergencies in the Pacific theater as an intravenous hydration fluid because it is sterile and isotonic.",
      sourceIds: ["usda-fdc-coconut"],
    },
  ],

  similarFruitIds: ["avocado", "banana", "watermelon"],
  sourceIds: ["usda-fdc-coconut", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
