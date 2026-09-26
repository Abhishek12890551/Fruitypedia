/**
 * Sapodilla (Chikoo) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171738 ("Sapodilla, raw") & ICMR-NIN Indian Food Composition Tables.
 * Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const sapodilla: Fruit = {
  id: "sapodilla",
  slug: "sapodilla",
  name: "Sapodilla",

  editorial: {
    nickname: "Chikoo · Sapota",
    tagline: "The malted brown sugar pear. Chikoo's velvety caramel sweetness and digestive comfort.",
    heroDescription:
      "Native to the tropical rainforests of the Yucatan Peninsula and southern Mexico, and cultivated with unmatched devotion across India's western coastal plains, the sapodilla (affectionately known as Chikoo) is an unheralded masterpiece of the Sapotaceae family. Beneath its unassuming, sand-dusted brown scurfy skin lies an unctuous, granular amber-brown pulp that tastes astonishingly like brown sugar dissolved in sweet condensed milk, malty toffee, and ripe pear.",
    pullQuotes: [
      {
        quote: "Beneath rustic sandy skin lies pure liquefied brown sugar, malted caramel, and delicate granular pear silk.",
        attribution: "Editorial",
      },
      {
        quote: "From Mayan chicle sap to Maharashtra's GI-tagged coastal orchards, sapodilla is nature's most soothing caramel confection.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A soothing, carbohydrate-rich energy fruit providing 5.3g dietary fiber, gentle natural tannins, 14.7mg Vitamin C, and sustained post-exercise replenishment.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Sapotaceae",
    genus: "Manilkara",
    species: "zapota",
    botanicalNotes: [
      "Belongs to the sapote family (Sapotaceae), an attractive, slow-growing evergreen tree with glossy leathery leaves that secretes milky chicle latex used as the original natural chewing gum.",
      "Botanically classified as a large globose or ellipsoid berry with a brown scaly exocarp, sweet granular mesocarp, and 2 to 10 shiny black, flattened hard seeds with a distinctive hooked apex.",
    ],
  },

  theme: {
    primary: "#92400E",
    secondary: "#FDE68A",
    glow: "#92400E40",
    gradient: ["#78350F", "#B45309"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/sapodilla/hero.png",
      alt: "Whole and halved ripe Chikoo sapodilla fruits showing granular caramel flesh and glossy black seeds on rustic wood",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/sapodilla/card.png",
      alt: "Sapodilla - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/sapodilla/macro-break.png",
      alt: "Extreme macro photograph of granular amber-brown sapodilla pulp showing delicate fructose crystals and smooth stone cell texture",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Granular Sarcocarp · Sclereid & Polyphenol Transformation",
      captionText:
        "As the fruit ripens, astringent latex tannins polymerize into non-bitter complexes while starch converts into rich glucose, sucrose, and stone cell sclereids.",
    },
  },

  origin: {
    region: "Yucatan Peninsula & Southern Mexico (Mesoamerica)",
    coordinates: [19.5, -90.5],
    description:
      "Native to the tropical rainforests of southern Mexico, Belize, and northern Guatemala. Prized by the ancient Maya, who tapped its trunk for chicle resin and revered its sweet fruit. Spanish galleons introduced sapodilla to the Philippines, from where it spread across Southeast Asia. In 1898, Sir Dinshaw Petit introduced it to Gholvad in Maharashtra, transforming western India into the world's epicentre of Chikoo cultivation.",
    grownTodayRegions: [
      "India (Maharashtra - Gholvad GI, Gujarat, Karnataka, Tamil Nadu)",
      "Mexico",
      "Thailand",
      "Malaysia",
      "Philippines",
      "Indonesia",
      "Vietnam",
      "Guatemala",
    ],
    sourceIds: ["usda-fdc-sapodilla"],
  },

  season: [
    {
      regionId: "india-western-coastal",
      hemisphere: "north",
      months: [1, 2, 3, 4, 5, 10, 11, 12],
      peakMonths: [1, 2, 3],
      label: "Western India Coastal Harvest (January – March Peak)",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      regionId: "southeast-asia-tropical",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [5, 6, 7],
      label: "Equatorial Harvest (May – July Peak)",
      sourceIds: ["usda-fdc-sapodilla"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 83,
      unit: "kcal",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    nutrients: {
      protein: {
        amount: 0.44,
        unit: "g",
        sourceIds: ["usda-fdc-sapodilla"],
      },
      totalFat: {
        amount: 1.1,
        unit: "g",
        sourceIds: ["usda-fdc-sapodilla"],
      },
      carbohydrates: {
        amount: 19.96,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-sapodilla"],
      },
      fiber: {
        amount: 5.3,
        unit: "g",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-sapodilla"],
      },
      totalSugars: {
        amount: 14.5,
        unit: "g",
        sourceIds: ["usda-fdc-sapodilla"],
      },
      vitaminC: {
        amount: 14.7,
        unit: "mg",
        dailyValuePercent: 16,
        sourceIds: ["usda-fdc-sapodilla"],
      },
      potassium: {
        amount: 193,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-sapodilla"],
      },
      iron: {
        amount: 0.8,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-sapodilla"],
      },
      calcium: {
        amount: 21,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-sapodilla"],
      },
    },
    waterContentPercent: 78.0,
    micronutrientSignatures: [
      {
        name: "Polymeric Proanthocyanidins",
        amount: 62.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Condensed tannins that soften upon full ripening into soothing gastroprotective and antiviral bioflavonoids",
      },
      {
        name: "Soluble Dietary Pectin",
        amount: 5.3,
        unit: "g",
        dailyValuePercent: 19,
        description: "Gentle mucilaginous fiber forming a protective hydrogel across the stomach and colonic mucosa",
      },
      {
        name: "Chicle Latex Triterpenes (Lupeol acetate)",
        amount: 8.5,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Natural botanical triterpenes known for soothing internal mucosal inflammation and balancing acidity",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Malted sugar.",
    accent: "Caramel silk beneath.",
    descriptors: [
      "Malted Sugar",
      "Caramel",
      "Pear Grain",
      "Dulce de Leche",
      "Honeyed"
    ],
    notes:
      "When fully ripe, the flesh is buttery and soft with a delightful granular sugar-crystal mouthfeel from stone cells.",
  },

  benefitTags: [
    {
      label: "Gastrointestinal Demulcent & Soothing Mucosa",
      phenomenon: "pectin and tannin hydrogel mucosal lining",
      description:
        "Supplies 5.3g of gentle, non-irritating soluble fiber and tannins that buffer gastric hyperacidity and soothe stomach inflammation.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-sapodilla"],
      icon: "activity",
      metric: "5.3 g fiber (19% DV)",
    },
    {
      label: "Rapid Glycogen Recovery",
      phenomenon: "bioavailable simple sugar replenishment",
      description:
        "Easily digestible glucose and sucrose rapidly replenish hepatic and muscle glycogen stores after physical exertion without cramping.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-sapodilla"],
      icon: "zap",
      metric: "83 kcal energy yield",
    },
    {
      label: "Collagen & Non-Heme Iron Absorption",
      phenomenon: "ascorbate-mediated ferric iron reduction",
      description:
        "Ascorbic acid facilitates intestinal reduction of dietary non-heme iron to the absorbable ferrous state.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-sapodilla"],
      icon: "shield",
      metric: "14.7 mg Vitamin C (16% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 5.3,
      unit: "g",
      referenceContext: "19% Daily Value",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 83,
      unit: "kcal",
      referenceContext: "soothing caramel energy",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 14.7,
      unit: "mg",
      referenceContext: "16% Daily Value",
      sourceIds: ["usda-fdc-sapodilla"],
    },
  ],

  varieties: [
    {
      name: "Kalipatti (Gholvad GI)",
      description: "India's celebrated Geographical Indication Chikoo from Maharashtra: oval fruit with paper-thin skin, minimal latex, and an extraordinarily smooth caramel pulp.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      name: "Cricket Ball (Calcutta Round)",
      description: "Large, spherical variety common in Karnataka and Tamil Nadu: crunchy granular sugar texture with rich honeyed flavor.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      name: "DHS-1 Hybrid",
      description: "High-yielding selection from UAS Dharwad: combines the silky smooth texture of Kalipatti with the vigor and large fruit size of Cricket Ball.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
  ],

  funFacts: [
    {
      text: "The milky white sap extracted by slashing the bark of the sapodilla tree is called 'chicle'—the original, natural base used by Thomas Adams in the late 19th century to invent commercial chewing gum.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      text: "Gholvad village in the Palghar district of Maharashtra, India, is known as the 'Chikoo Bowl of India' and has its unique soil and microclimate protected under a Geographical Indication (GI) tag.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
    {
      text: "Unripe sapodilla contains high amounts of saponins and astringent latex; eating it underripe will coat the mouth in sticky latex and cause a temporary dry numbness.",
      sourceIds: ["usda-fdc-sapodilla"],
    },
  ],

  similarFruitIds: ["custard-apple", "banana", "fig"],
  sourceIds: ["usda-fdc-sapodilla", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
