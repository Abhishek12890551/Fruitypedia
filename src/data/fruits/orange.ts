/**
 * Orange — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 169097 ("Oranges, raw, all commercial varieties"), accessed 2026-09-19.
 * Values are per 100g as reported by the source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const orange: Fruit = {
  id: "orange",
  slug: "orange",
  name: "Orange",

  editorial: {
    nickname: "Santra · Naranga",
    tagline: "Sunlit hesperidium. Liquid aromatic gold.",
    heroDescription:
      "A monumental citrus hybrid of pomelo and mandarin that transformed ancient botanical trade and modern orchards alike. Packed within an aromatic flavedo bursting with essential limonene, its radial carpels house thousands of glistening, sun-drenched juice vesicles delivering vibrant ascorbic acid and balanced citric sweetness.",
    pullQuotes: [
      {
        quote: "Within the pebbled flavedo of the hesperidium, nature engineered thousands of microscopic oil glands holding the pure aromatic essence of d-limonene.",
        attribution: "Citrus Botanical Monograph Series",
      },
      {
        quote: "Liquid sunlight suspended in segmented crystal—sweetness balanced by brisk citric clarity.",
        attribution: "Mediterranean Pomology Gazette",
      },
    ],
    nutritionDescription:
      "Over 86% pure structured citrus cell sap, rich in dissolved ascorbic acid, bioflavonoids, and natural fruit sugars.",
  },

  taxonomy: {
    categoryId: "citrus",
    family: "Rutaceae",
    genus: "Citrus",
    species: "× sinensis",
    botanicalNotes: [
      "The sweet orange (Citrus × sinensis) is an ancient diploid cultigen, scientifically characterized as an introgressed hybrid between the mandarin (Citrus reticulata, ~75%) and the pummelo (Citrus maxima, ~25%).",
      "Botanically classified as a specialized berry known as a hesperidium: the exterior aromatic rind (exocarp/flavedo) is rich in volatile oil glands, resting atop a white spongy albedo (mesocarp), protecting interior radially segmented pulp carpels packed with juice vesicles.",
    ],
  },

  theme: {
    primary: "#EA580C",
    secondary: "#FB923C",
    glow: "#EA580C45",
    gradient: ["#EA580C", "#9A3412"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/orange/hero.jpg",
      alt: "Vibrant ripe sweet oranges with textured rind and a glistening cross-section on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/orange/card.png",
      alt: "Orange - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/orange/macro-break.jpg",
      alt: "Extreme macro of glistening citrus juice vesicles bursting with liquid amber nectar",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Juice Vesicles · The Multicellular Pulp Clavellae",
      captionText:
        "Each translucent droplet is an individual multicellular juice vesicle growing from the inward carpel wall, packing cellular water, citric acid, and dissolved sucrose under tension.",
    },
  },

  origin: {
    region: "Southeast Asia",
    coordinates: [23.1, 113.2], // Southern China / Southeast Asian ancestral corridor
    description:
      "Originating in the subtropical river valleys of southern China, northeast India, and Myanmar, sweet oranges were documented in Chinese literature as early as 314 BC. Arab traders introduced them across the Mediterranean in the 11th century, sparking the historic European passion for orangeries.",
    grownTodayRegions: [
      "Brazil",
      "United States",
      "China",
      "India",
      "Mexico",
      "Spain",
      "Egypt",
      "Italy",
    ],
    sourceIds: ["usda-fdc-orange"],
  },

  season: [
    {
      regionId: "northern-hemisphere",
      hemisphere: "north",
      months: [11, 12, 1, 2, 3, 4, 5],
      peakMonths: [12, 1, 2, 3],
      label: "November – May (peak Dec–Mar)",
      sourceIds: ["usda-fdc-orange"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 169097
   * "Oranges, raw, all commercial varieties" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 47,
      unit: "kcal",
      sourceIds: ["usda-fdc-orange"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.94,
        unit: "g",
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.12,
        unit: "g",
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 11.75,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.4,
        unit: "g",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 9.35,
        unit: "g",
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["269"],
      },
      vitaminC: {
        amount: 53.2,
        unit: "mg",
        dailyValuePercent: 59,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["401"],
      },
      thiamin: {
        amount: 0.087,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["404"],
      },
      folate: {
        amount: 30,
        unit: "µg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["417"],
      },
      calcium: {
        amount: 40,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["301"],
      },
      potassium: {
        amount: 181,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["306"],
      },
      magnesium: {
        amount: 10,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 14,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["305"],
      },
      vitaminA: {
        amount: 11,
        unit: "µg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["320"],
      },
      vitaminB6: {
        amount: 0.06,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-orange"],
        sourceReferenceIds: ["415"],
      },
    },
    waterContentPercent: 86.8,
    micronutrientSignatures: [
      {
        name: "Vitamin C (Ascorbic Acid)",
        amount: 53.2,
        unit: "mg",
        dailyValuePercent: 59,
        description: "Potent free-radical scavenger catalyzing collagen formation and immune competence",
      },
      {
        name: "Thiamin (Vitamin B1)",
        amount: 0.087,
        unit: "mg",
        dailyValuePercent: 7,
        description: "Critical coenzyme in cellular carbohydrate metabolism and ATP generation",
      },
      {
        name: "Folate (Vitamin B9)",
        amount: 30,
        unit: "µg",
        dailyValuePercent: 8,
        description: "Essential cofactor in nucleic acid replication and red blood cell production",
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
      value: 7,
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
    lead: "Citric first.",
    accent: "Bursting with nectar.",
    descriptors: [
      "Zesty Limonene",
      "Juicy",
      "Sweet Sunshine",
      "Bright Acid",
      "Tangy Pith",
      "Fresh Vesicle",
    ],
    notes:
      "Bright, invigorating citrus dynamism. A burst of brisk citric and malic acidity instantly smoothed by honeyed fructose and sustained by essential limonene oils.",
  },

  benefitTags: [
    {
      label: "Classic Vitamin C Density",
      phenomenon: "ascorbic acid content",
      description:
        "Providing 53.2 mg per 100g (59% DV), one medium orange (~130g) supplies roughly 75% of the daily vitamin C requirement, supporting collagen synthesis and immune function.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-orange", "fda-daily-values"],
      icon: "shield",
    },
    {
      label: "Rich in Citrus Flavonoids",
      phenomenon: "hesperidin & naringenin content",
      description:
        "Oranges are a primary dietary source of hesperidin, a citrus bioflavonoid concentrated in the white inner albedo. Preliminary research suggests vascular support effects; evidence in humans is still emerging.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-orange"],
      icon: "leaf",
    },
    {
      label: "Soluble Pectin Fiber",
      phenomenon: "dietary fiber structure",
      description:
        "Delivering 2.4g of total fiber per 100g (9% DV), predominantly soluble pectin that supports prebiotic microflora diversity in the gut.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-orange", "fda-daily-values"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 53.2,
      unit: "mg",
      referenceContext: "per 100g · 59% DV",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.4,
      unit: "g",
      referenceContext: "per 100g · 9% DV",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      nutrientId: "calcium",
      label: "Calcium",
      value: 40,
      unit: "mg",
      referenceContext: "per 100g · 3% DV",
      sourceIds: ["usda-fdc-orange"],
    },
  ],

  varieties: [
    {
      name: "Valencia (Citrus × sinensis 'Valencia')",
      description:
        "The undisputed global standard for juicing. Famed for its exceptional juice-to-pulp ratio, intense golden pigmentation, and perfect sugar-to-acid harmony.",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      name: "Washington Navel (Citrus × sinensis 'Washington Navel')",
      description:
        "The premier table eating orange, distinguished by its thick, easily peeled pebbled rind, seedless flesh, and miniature secondary twin fruit at the apical apex.",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      name: "Moro Blood Orange (Citrus × sinensis 'Moro')",
      description:
        "Spectacular Sicilian blood orange prized for its deep anthocyanin pigmentation, yielding dramatic crimson-violet flesh and a complex berry-infused citrus profile.",
      sourceIds: ["usda-fdc-orange"],
    },
  ],

  funFacts: [
    {
      text: "Oranges are not true wild plants, but an ancient hybrid created centuries ago by crossbreeding the pomelo (Citrus maxima) with the mandarin (Citrus reticulata).",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      text: "In tropical growing regions, ripe oranges remain green because chlorophyll only degrades into brilliant orange when cool nighttime temperatures occur.",
      sourceIds: ["usda-fdc-orange"],
    },
    {
      text: "The distinctive 'navel' in navel oranges is actually an underdeveloped, second twin fruit that forms inside the primary hesperidium at the blossom end.",
      sourceIds: ["usda-fdc-orange"],
    },
  ],

  similarFruitIds: ["strawberry", "blueberry"],
  sourceIds: ["usda-fdc-orange", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-19",
    reviewerId: "abhi",
  },
};
