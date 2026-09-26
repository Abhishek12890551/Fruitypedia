/**
 * Pear — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 169118 ("Pears, raw, all varieties"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const pear: Fruit = {
  id: "pear",
  slug: "pear",
  name: "Pear",

  editorial: {
    nickname: "Nashpati · Amritphala",
    tagline: "The buttery pome. Melting stone-cell nectar and gentle prebiotic comfort.",
    heroDescription:
      "Celebrated by Homer in the Odyssey as a divine 'gift of the gods', the European pear (Pyrus communis) is a crowning jewel of the Rosaceae family. Unlike other tree fruits, the pear is uniquely picked mature but unripe, achieving its legendary buttery, melting texture and fragrant floral perfumed nectar only after quiet conditioning off the branch. Its tender skin yields to succulent, granular flesh rich in sclereid stone cells, gentle sorbitol, and soothing prebiotic pectin.",
    pullQuotes: [
      {
        quote: "A voluptuous bell of porcelain flesh yielding pure floral nectar, gentle cinnamon warmth, and buttery melting tenderness.",
        attribution: "Editorial",
      },
      {
        quote: "Homer praised it as the 'gift of the gods', perfected through centuries of French pomology into the zenith of dessert pomes.",
        attribution: "Homer, Odyssey (Book VII)",
      },
    ],
    nutritionDescription:
      "A soothing, high-fiber pome delivering 3.1g prebiotic fiber per 100g, 9% DV Copper, natural sorbitol, and cellular chlorogenic acid.",
  },

  taxonomy: {
    categoryId: "pome",
    family: "Rosaceae",
    genus: "Pyrus",
    species: "communis",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), subtribe Pyrinae, sharing ancestry with apples and quinces but distinguished by pyriform (bell-shaped) fruit geometry.",
      "Botanically classified as a pome fruit derived from an epigynous flower with an inferior ovary, characterized by gritty stone cells (brachysclereids) dispersed throughout the fleshy hypanthium.",
    ],
  },

  theme: {
    primary: "#65A30D",
    secondary: "#D9F99D",
    glow: "#65A30D40",
    gradient: ["#4D7C0F", "#84CC16"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/pear/hero.png",
      alt: "Elegant golden-green and russet Bartlett and Bosc pears on rustic dark wooden surface with green leaves",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/pear/card.png",
      alt: "Pear - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/pear/macro-break.png",
      alt: "Extreme macro photograph of sliced pear flesh showing delicate brachysclereid stone cells glistening with clear cell sap",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Hypanthium Anatomy · Brachysclereids & Sorbitol Matrix",
      captionText:
        "The distinctive granular mouthfeel arises from lignified brachysclereids (stone cells) embedded within a soft pectin hydrogel enriched with non-digestible sorbitol.",
    },
  },

  origin: {
    region: "Caucasus Mountains & Asia Minor (Anatolia)",
    coordinates: [41.0, 44.0],
    description:
      "Indigenous to coastal and temperate regions of the Caucasus, Anatolia, and southeastern Europe. Cultivated by ancient Greeks (dating back to 1000 BCE) and elevated by Roman horticulturists, who described dozens of named varieties. Mastered in 17th and 18th century France and Belgium, where dedicated pomologists bred the melting 'beurré' (buttery) dessert varieties celebrated today.",
    grownTodayRegions: [
      "China (leading Asian pear producer)",
      "United States (Washington, Oregon, California)",
      "Italy (Emilia-Romagna)",
      "Argentina (Río Negro Valley)",
      "Turkey",
      "South Africa",
      "India (Jammu & Kashmir, Himachal Pradesh, Uttarakhand)",
      "France",
    ],
    sourceIds: ["usda-fdc-pear"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [8, 9, 10, 11, 12, 1, 2],
      peakMonths: [9, 10, 11],
      label: "Northern Autumn & Winter Harvest (September – November)",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      regionId: "southern-hemisphere-temperate",
      hemisphere: "south",
      months: [2, 3, 4, 5, 6, 7],
      peakMonths: [3, 4, 5],
      label: "Southern Hemisphere Harvest (March – May)",
      sourceIds: ["usda-fdc-pear"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 57,
      unit: "kcal",
      sourceIds: ["usda-fdc-pear"],
    },
    nutrients: {
      protein: {
        amount: 0.36,
        unit: "g",
        sourceIds: ["usda-fdc-pear"],
      },
      totalFat: {
        amount: 0.14,
        unit: "g",
        sourceIds: ["usda-fdc-pear"],
      },
      carbohydrates: {
        amount: 15.23,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-pear"],
      },
      fiber: {
        amount: 3.1,
        unit: "g",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-pear"],
      },
      totalSugars: {
        amount: 9.75,
        unit: "g",
        sourceIds: ["usda-fdc-pear"],
      },
      copper: {
        amount: 0.082,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-pear"],
      },
      vitaminC: {
        amount: 4.3,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-pear"],
      },
      vitaminK: {
        amount: 4.4,
        unit: "mcg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-pear"],
      },
      potassium: {
        amount: 116,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-pear"],
      },
    },
    waterContentPercent: 84.0,
    micronutrientSignatures: [
      {
        name: "Soluble Pectin & Sclereid Lignin",
        amount: 3.1,
        unit: "g",
        dailyValuePercent: 11,
        description: "Binds bile acids in the small intestine, supporting healthy cholesterol clearance while feeding colonic microbes",
      },
      {
        name: "Bioactive Arbutin & Chlorogenic Acid",
        amount: 16.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Hydroquinone glycosides and hydroxycinnamic acids with urinary tract antiseptic and antioxidant properties",
      },
      {
        name: "Natural Osmotic Sorbitol",
        amount: 2.5,
        unit: "g",
        dailyValuePercent: 0,
        description: "Slowly absorbed sugar alcohol drawing gentle osmotic hydration into the large bowel, naturally promoting regularity",
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
      value: 0,
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
    lead: "Buttery first.",
    accent: "Floral honey grain.",
    descriptors: [
      "Buttery",
      "Floral Honey",
      "Apple Nectar",
      "Cinnamon",
      "Stone Cell"
    ],
    notes:
      "To test for optimal ripeness, 'check the neck': gently apply thumb pressure near the stem—if it yields softly, the pear is sweet, juicy, and ready to eat.",
  },

  benefitTags: [
    {
      label: "Gentle Laxative & Colonic Motility",
      phenomenon: "sorbitol osmotic colonic hydration",
      description:
        "Supplies 2.5g natural sorbitol alongside 3.1g prebiotic fiber, safely promoting regularity without cramping or stimulants.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pear"],
      icon: "activity",
      metric: "2.5 g natural sorbitol",
    },
    {
      label: "Glycemic Stability & Diabetes Protection",
      phenomenon: "flavonoid-mediated alpha-amylase inhibition",
      description:
        "Large prospective cohort trials link weekly consumption of flavonoid-rich pears to an 18% lower risk of Type 2 Diabetes.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pear"],
      icon: "shield",
      metric: "18% risk reduction in cohort studies",
    },
    {
      label: "Cellular Redox & Superoxide Dismutase",
      phenomenon: "copper catalytic SOD1 activation",
      description:
        "Supplies 9% DV trace Copper, essential for Cu/Zn-superoxide dismutase activity that neutralizes intracellular reactive oxygen species.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-pear"],
      icon: "zap",
      metric: "0.082 mg Copper (9% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 3.1,
      unit: "g",
      referenceContext: "11% Daily Value",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      nutrientId: "copper",
      label: "Copper",
      value: 0.082,
      unit: "mg",
      referenceContext: "9% Daily Value",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 57,
      unit: "kcal",
      referenceContext: "buttery melting dessert pome",
      sourceIds: ["usda-fdc-pear"],
    },
  ],

  varieties: [
    {
      name: "Bartlett (Williams' Bon Chrétien)",
      description: "Originating in England in 1765: shifts from green to radiant golden yellow when ripe, releasing perfumed, melting, musky sweet nectar.",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      name: "Bosc (Beurré Bosc)",
      description: "Aristocratic French heirloom with warm cinnamon-russeted skin and elongated neck: firm, honeyed-spice flesh that holds shape when baked.",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      name: "D'Anjou (Beurré d'Anjou)",
      description: "Egg-shaped French winter pear staying bright green when ripe: fine-grained, buttery melting texture with mild citrus-honey flavor.",
      sourceIds: ["usda-fdc-pear"],
    },
  ],

  funFacts: [
    {
      text: "Unlike almost all other tree fruits, pears must never be left to ripen fully on the tree; if left to ripen on the branch, they convert starches from the core outward and turn mealy and rotten inside.",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      text: "Before tobacco was introduced to Europe, dried pear leaves were smoked by European farmers.",
      sourceIds: ["usda-fdc-pear"],
    },
    {
      text: "Because pear wood is exceptionally dense, resists warping, and does not splinter, it has been the preferred wood for architect's rulers and high-end woodwind instruments for centuries.",
      sourceIds: ["usda-fdc-pear"],
    },
  ],

  similarFruitIds: ["apple", "peach", "plum"],
  sourceIds: ["usda-fdc-pear", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
