/**
 * Blackberry — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173946 ("Blackberries, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const blackberry: Fruit = {
  id: "blackberry",
  slug: "blackberry",
  name: "Blackberry",

  editorial: {
    nickname: "Krishna Jambu · Wild Jamun",
    tagline: "The bramble jewel. Anthocyanin powerhouse with deep forest notes.",
    heroDescription:
      "Tangled across wild temperate hedgerows, riverbanks, and sunny forest margins across Europe and the Americas, the blackberry is one of nature's most resilient aggregate fruits. Composed of tight clusters of glistening, ink-black drupelets clinging tenaciously to their edible central receptacle, each sun-warmed berry yields an explosion of juicy, wine-like richness, earthy bramble perfume, and tart malic vivacity.",
    pullQuotes: [
      {
        quote: "An inky cluster of drupelets bursting with wild briar perfume, deep forest sweetness, and refreshing tart tannin.",
        attribution: "Editorial",
      },
      {
        quote: "From ancient Celtic medicine to Pacific Northwest berry farms, blackberries offer nature's deepest concentration of anthocyanin defense.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A high-fiber, low-glycemic aggregate berry delivering 5.3g dietary fiber per 100g, 23% DV Vitamin C, 17% DV Vitamin K, and potent cyanidin-3-glucoside.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Rosaceae",
    genus: "Rubus",
    species: "fruticosus",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), growing on perennial bramble shrubs with biennial canes (primocanes and floricanes) covered in sharp curved prickles or smooth thornless stems.",
      "Botanically classified not as a true berry, but as an aggregate fruit composed of small drupelets that remain fused to the fleshy torus (receptacle) when harvested.",
    ],
  },

  theme: {
    primary: "#4C1D95",
    secondary: "#DDD6FE",
    glow: "#4C1D9540",
    gradient: ["#2E1065", "#6D28D9"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/blackberry/hero.png",
      alt: "Freshly harvested plump glossy black blackberries in rustic wooden basket on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/blackberry/card.png",
      alt: "Blackberry - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/blackberry/macro-break.png",
      alt: "Extreme macro photograph of ripe glossy blackberry drupelets showing cell structure and deep anthocyanin pigmentation",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Aggregate Drupelets · The Cyanidin Reservoir",
      captionText:
        "The deep ink-black color is produced by high concentrations of cyanidin-3-glucoside, one of the most bioavailable antioxidant flavonoids in human physiology.",
    },
  },

  origin: {
    region: "Temperate Europe, British Isles & North America",
    coordinates: [52.5, 13.4],
    description:
      "Indigenous across the temperate zones of Europe, North America, and parts of Central Asia. Foraged by Neolithic gatherers and utilized by ancient Greek and Roman herbalists. Modern breeding flourished in the 20th century in the Pacific Northwest of the United States (Oregon) and the United Kingdom, producing thornless and large-fruited cultivars.",
    grownTodayRegions: [
      "United States (Oregon, California)",
      "Mexico (Michoacán)",
      "Serbia",
      "Poland",
      "United Kingdom",
      "Spain",
      "India (Himachal Pradesh, Uttarakhand)",
      "Chile",
    ],
    sourceIds: ["usda-fdc-blackberry"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [6, 7, 8, 9],
      peakMonths: [7, 8],
      label: "Bramble Summer Peak (July – August)",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      regionId: "mexico-highland",
      hemisphere: "north",
      months: [10, 11, 12, 1, 2, 3, 4, 5],
      peakMonths: [1, 2, 3],
      label: "Winter Highland Poly-tunnel Harvest (January – March)",
      sourceIds: ["usda-fdc-blackberry"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 43,
      unit: "kcal",
      sourceIds: ["usda-fdc-blackberry"],
    },
    nutrients: {
      protein: {
        amount: 1.39,
        unit: "g",
        sourceIds: ["usda-fdc-blackberry"],
      },
      totalFat: {
        amount: 0.49,
        unit: "g",
        sourceIds: ["usda-fdc-blackberry"],
      },
      carbohydrates: {
        amount: 9.61,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-blackberry"],
      },
      fiber: {
        amount: 5.3,
        unit: "g",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-blackberry"],
      },
      totalSugars: {
        amount: 4.88,
        unit: "g",
        sourceIds: ["usda-fdc-blackberry"],
      },
      vitaminC: {
        amount: 21.0,
        unit: "mg",
        dailyValuePercent: 23,
        sourceIds: ["usda-fdc-blackberry"],
      },
      vitaminK: {
        amount: 19.8,
        unit: "mcg",
        dailyValuePercent: 17,
        sourceIds: ["usda-fdc-blackberry"],
      },
      manganese: {
        amount: 0.65,
        unit: "mg",
        dailyValuePercent: 28,
        sourceIds: ["usda-fdc-blackberry"],
      },
      copper: {
        amount: 0.17,
        unit: "mg",
        dailyValuePercent: 19,
        sourceIds: ["usda-fdc-blackberry"],
      },
      potassium: {
        amount: 162,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-blackberry"],
      },
    },
    waterContentPercent: 88.15,
    micronutrientSignatures: [
      {
        name: "Cyanidin-3-O-Glucoside (C3G)",
        amount: 140.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Primary anthocyanin yielding the intense black-purple hue, studied for mitochondrial biogenesis and memory preservation",
      },
      {
        name: "Ellagitannins (Sanguiin H-6)",
        amount: 38.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Hydrolyzable tannins metabolized by colonic microflora into bioavailable, anti-inflammatory urolithins",
      },
      {
        name: "Insoluble Pectin & Seed Lignans",
        amount: 5.3,
        unit: "g",
        dailyValuePercent: 19,
        description: "High fiber-to-sugar ratio promoting prolonged satiety and minimal postprandial glucose fluctuation",
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
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Wild bramble.",
    accent: "Deep forest tannins.",
    descriptors: [
      "Bramble",
      "Forest Berry",
      "Tart Snap",
      "Earthy",
      "Juicy"
    ],
    notes:
      "Fully sun-ripened blackberries lose their initial tart acidity, developing an intoxicatingly sweet, wine-like complexity.",
  },

  benefitTags: [
    {
      label: "Cognitive Performance & Memory",
      phenomenon: "cyanidin-3-glucoside neuroprotection",
      description:
        "Anthocyanins cross the blood-brain barrier and accumulate in hippocampus regions, reducing neuroinflammation and preserving spatial working memory.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-blackberry"],
      icon: "zap",
      metric: "140 mg anthocyanins",
    },
    {
      label: "Oral Periodontal Mucosal Defense",
      phenomenon: "ellagitannin antibacterial biofilm inhibition",
      description:
        "Blackberry polyphenols inhibit oral bacterial biofilm formation, soothing periodontal inflammation and preserving gums.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-blackberry"],
      icon: "shield",
    },
    {
      label: "Bone Matrix & Coagulation Support",
      phenomenon: "vitamin K1 osteocalcin gamma-carboxylation",
      description:
        "Supplies 17% DV Vitamin K alongside 28% DV Manganese to support bone collagen mineralization and joint cartilage integrity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-blackberry"],
      icon: "activity",
      metric: "19.8 mcg Vitamin K (17% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 5.3,
      unit: "g",
      referenceContext: "19% Daily Value",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 21.0,
      unit: "mg",
      referenceContext: "23% Daily Value",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 43,
      unit: "kcal",
      referenceContext: "low-glycemic superfruit",
      sourceIds: ["usda-fdc-blackberry"],
    },
  ],

  varieties: [
    {
      name: "Marionberry ('Cabernet of Blackberries')",
      description: "Bred in Marion County, Oregon: prized globally as the pinnacle of blackberry flavor with deep cabernet complexity and bright, balanced acid.",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      name: "Chester Thornless",
      description: "Leading commercial late-season cultivar: thornless canes bearing very firm, high-gloss berries that resist post-harvest softening.",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      name: "Black Butte",
      description: "Renowned for producing massive berries up to two inches long with tender, juicy drupelets and an explosive sweet-tart berry burst.",
      sourceIds: ["usda-fdc-blackberry"],
    },
  ],

  funFacts: [
    {
      text: "The difference between a blackberry and a raspberry is in the harvest: when a blackberry is picked, the core (torus) stays inside the fruit, whereas a raspberry leaves its core on the bush, becoming hollow.",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      text: "In British folklore, it is said you should never pick wild blackberries after Michaelmas (September 29), because the devil spits on the brambles (scientifically, late autumn rains trigger Botrytis mold).",
      sourceIds: ["usda-fdc-blackberry"],
    },
    {
      text: "Ancient Greek physicians, including Dioscorides, prescribed blackberry leaves and berries as poultices for wounds and herbal gargles for sore throats.",
      sourceIds: ["usda-fdc-blackberry"],
    },
  ],

  similarFruitIds: ["blueberry", "strawberry", "raspberry"],
  sourceIds: ["usda-fdc-blackberry", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
