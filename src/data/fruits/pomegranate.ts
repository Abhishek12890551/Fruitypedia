/**
 * Pomegranate — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 169134 ("Pomegranates, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 6
 */

import type { Fruit } from "@/types";

export const pomegranate: Fruit = {
  id: "pomegranate",
  slug: "pomegranate",
  name: "Pomegranate",

  editorial: {
    nickname: "Anar · Dadima",
    tagline: "Crowned jewel. Ancient reservoir of polyphenol vitality.",
    heroDescription:
      "Revered across ancient Mediterranean, Persian, and Asian civilizations for over five millennia, the pomegranate is a botanical masterpiece of the Lythraceae family. Encased in a leathery, burnished crimson rind crowned by a persistent calyx, hundreds of jewel-like ruby arils hold crystalline juice dense with unique punicalagins, ellagitannins, and crisp organic acids.",
    pullQuotes: [
      {
        quote: "A leathery crimson vault sealing hundreds of translucent ruby garnets, each bursting with the astringent, ancient wine of the fertile crescent.",
        attribution: "Editorial",
      },
      {
        quote: "Crowned like a monarch by its persistent floral calyx, the pomegranate is antiquity's living reliquary of cellular protection.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Composed of 78% natural cellular juice, rich in dietary fiber from aril seed coats and packed with bioactive punicalagin polyphenols.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Lythraceae",
    genus: "Punica",
    species: "granatum",
    botanicalNotes: [
      "Belongs to the genus Punica within the loosestrife family (Lythraceae), traditionally placed in its own monogeneric family Punicaceae.",
      "Botanically classified as a balausta: a specialized many-seeded inferior berry with a tough, coriaceous pericarp and internal membranous septa encasing individual fleshy arils.",
    ],
  },

  theme: {
    primary: "#E11D48",
    secondary: "#FDA4AF",
    glow: "#E11D4845",
    gradient: ["#E11D48", "#881337"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/pomegranate/hero.jpg",
      alt: "A ripe, split-open pomegranate showing glistening ruby-red arils spilling out on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/pomegranate/card.png",
      alt: "Pomegranate - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/pomegranate/macro-break.jpg",
      alt: "Extreme macro photography of glistening translucent ruby red pomegranate arils",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Aril Micro-Vesicles · The Sarcotesta",
      captionText:
        "Each glistening ruby gem is a botanical aril developed from the seed coat's sarcotesta, containing pressurized anthocyanin vacuole fluid surrounding a delicate fibrous seed core.",
    },
  },

  origin: {
    region: "Transcaucasia & Iranian Plateau",
    coordinates: [32.42, 53.68],
    description:
      "Native to the historical region spanning modern Iran, the southern Caucasus, and northern India. Cultivated throughout the Fertile Crescent since the Early Bronze Age (3000 BCE), carbonized arils and rinds have been excavated at Jericho and Nimrud. Phoenician maritime traders spread cultivation across the Mediterranean basin to Carthage and Andalusia.",
    grownTodayRegions: [
      "Iran",
      "India",
      "Turkey",
      "Spain",
      "United States (California)",
      "Israel",
      "Egypt",
      "China",
      "Afghanistan",
      "Italy",
    ],
    sourceIds: ["usda-fdc-pomegranate"],
  },

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    waterContentPercent: 77.93,
    calories: {
      amount: 83,
      unit: "kcal",
      sourceIds: ["usda-fdc-pomegranate"],
      sourceReferenceIds: ["208"],
    },

    nutrients: {
      calories: {
        amount: 83,
        unit: "kcal",
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["208"],
      },
      carbohydrates: {
        amount: 18.7,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 4.0,
        unit: "g",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 13.67,
        unit: "g",
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["269"],
      },
      protein: {
        amount: 1.67,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 1.17,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["204"],
      },
      saturatedFat: {
        amount: 0.12,
        unit: "g",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["606"],
      },
      monounsaturatedFat: {
        amount: 0.09,
        unit: "g",
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["645"],
      },
      polyunsaturatedFat: {
        amount: 0.08,
        unit: "g",
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["646"],
      },
      potassium: {
        amount: 236,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["306"],
      },
      phosphorus: {
        amount: 36,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["305"],
      },
      magnesium: {
        amount: 12,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["304"],
      },
      calcium: {
        amount: 10,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["301"],
      },
      sodium: {
        amount: 3,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["307"],
      },
      iron: {
        amount: 0.3,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["303"],
      },
      zinc: {
        amount: 0.35,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.16,
        unit: "mg",
        dailyValuePercent: 18,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.12,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 10.2,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["401"],
      },
      vitaminK: {
        amount: 16.4,
        unit: "µg",
        dailyValuePercent: 14,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["430"],
      },
      folate: {
        amount: 38,
        unit: "µg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["435"],
      },
      vitaminB6: {
        amount: 0.08,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["415"],
      },
      thiamin: {
        amount: 0.07,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.05,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.29,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["406"],
      },
      vitaminE: {
        amount: 0.6,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-pomegranate"],
        sourceReferenceIds: ["323"],
      },
    },
    micronutrientSignatures: [
      {
        name: "Punicalagins & Polyphenols",
        amount: 180,
        unit: "mg",
        dailyValuePercent: 35,
        description: "Potent hydrolyzable tannins unique to pomegranate husk and juice.",
      },
      {
        name: "Vitamin K (Phylloquinone)",
        amount: 16.4,
        unit: "µg",
        dailyValuePercent: 14,
        description: "Essential co-factor in blood coagulation pathways and bone mineralization.",
      },
      {
        name: "Dietary Fiber",
        amount: 4.0,
        unit: "g",
        dailyValuePercent: 14,
        description: "Insoluble structural seed coats supporting healthy digestive motility.",
      },
      {
        name: "Vitamin C",
        amount: 10.2,
        unit: "mg",
        dailyValuePercent: 11,
        description: "Water-soluble antioxidant facilitating non-heme iron absorption.",
      },
    ],
  },

  tasteProfile: {
    sweetness: { value: 7, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    acidity: { value: 6, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    juiciness: { value: 9, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    aromatic: { value: 7, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    lead: "Astringent brilliance.",
    accent: "Deep ruby tannic nectar.",
    descriptors: ["Crisp", "Tart-Sweet", "Astringent", "Tannic", "Vibrant"],
    notes:
      "A burst of bright, tangy sweetness quickly grounded by sophisticated, wine-like tannins from natural ellagitannins. The pleasant crunch of the aril seed gives tactile contrast to the explosive juice release.",
  },

  benefitTags: [
    {
      label: "Punicalagin Polyphenols",
      phenomenon: "antioxidant ellagitannin density",
      description:
        "Contains concentrated punicalagins, large polyphenol molecules unique to pomegranates currently studied for their cellular protective and vascular properties.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-pomegranate"],
      icon: "shield",
    },
    {
      label: "Cardiovascular Support",
      phenomenon: "vascular endothelial function",
      description:
        "Rich in potassium and antioxidant polyphenols that support healthy blood flow and vascular elasticity as part of a balanced botanical diet.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pomegranate"],
      icon: "heart",
    },
    {
      label: "Natural Hydration & Electrolytes",
      phenomenon: "water content and mineral balance",
      description:
        "Nearly 78% structured water coupled with 236mg potassium per 100g, aiding cellular hydration and natural electrolyte equilibrium.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pomegranate"],
      icon: "droplet",
    },
  ],

  heroStats: [
    {
      nutrientId: "punicalagins",
      label: "Polyphenols",
      value: 180,
      unit: "mg",
      referenceContext: "punicalagin density",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 4.0,
      unit: "g",
      referenceContext: "14% Daily Value",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      nutrientId: "vitamin-k",
      label: "Vitamin K",
      value: 16.4,
      unit: "µg",
      referenceContext: "14% Daily Value",
      sourceIds: ["usda-fdc-pomegranate"],
    },
  ],

  varieties: [
    {
      name: "Wonderful",
      description: "The global benchmark cultivar: large crimson fruit with rich, deep-red tart-sweet arils and high juice yield.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      name: "Hicaz",
      description: "Celebrated Turkish cultivar featuring dark wine-red rinds, soft seeds, and an intensely balanced sweet-acid balance.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      name: "Kandhari",
      description: "Heirloom cultivar from the Kandahar river oasis, famed for ruby-black arils with exceptionally sweet floral depth.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
  ],


  funFacts: [
    {
      text: "A single pomegranate contains between 200 and 1,400 individual seed arils, varying by flower pollination efficiency.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      text: "The botanical name Punica granatum translates literally to 'seeded apple of Carthage' from ancient Phoenician trade lore.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      text: "Punicalagins found in pomegranate husk and juice are among the largest known water-soluble antioxidant tannins.",
      sourceIds: ["usda-fdc-pomegranate"],
    },
  ],

  season: [
    {
      regionId: "northern-subtropical",
      hemisphere: "north",
      months: [9, 10, 11, 12, 1],
      peakMonths: [10, 11, 12],
      label: "Northern Autumn & Winter Harvest",
      sourceIds: ["usda-fdc-pomegranate"],
    },
    {
      regionId: "southern-temperate",
      hemisphere: "south",
      months: [3, 4, 5, 6, 7],
      peakMonths: [4, 5, 6],
      label: "Southern Autumn Harvest",
      sourceIds: ["usda-fdc-pomegranate"],
    },
  ],

  similarFruitIds: ["blueberry", "strawberry", "watermelon"],
  sourceIds: ["usda-fdc-pomegranate", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-21",
    reviewerId: "abhi",
  },
};

export default pomegranate;
