/**
 * Peach — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 169928 ("Peaches, yellow, raw"), accessed 2026-09-20.
 * Values are per 100g as reported by the analytical source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const peach: Fruit = {
  id: "peach",
  slug: "peach",
  name: "Peach",

  editorial: {
    nickname: "la reine des vergers",
    tagline: "Velvet drupe. Ancient symbol of vitality and longevity.",
    heroDescription:
      "Celebrated across East Asian philosophy and global horticulture for over four millennia as an emblem of vitality, the peach is a quintessential botanical drupe. Beneath its velvety, sun-blushed pubescent exocarp lies a succulent, nectar-dense mesocarp wrapped around a deeply corrugated woody stone, delivering delicate carotenoids, natural polyphenols, and balanced organic acids.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rosaceae",
    genus: "Prunus",
    species: "persica",
    botanicalNotes: [
      "Belongs to the genus Prunus in the rose family (Rosaceae), classified under the subgenus Amygdalus alongside its close botanical sibling, the almond (Prunus dulcis).",
      "Botanically a true fleshy drupe consisting of a velvety pubescent exocarp (skin), a succulent fibrous mesocarp (flesh), and a deeply pitted, lignified endocarp (stone or pit) encasing a solitary almond-scented seed.",
    ],
  },

  theme: {
    primary: "#F97316",
    secondary: "#FDBA74",
    glow: "#F9731645",
    gradient: ["#FB923C", "#C2410C"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/peach/hero.jpg",
      alt: "Ripe velvety peaches with radiant rose-red blush over golden skin with an angled cross-section showing juicy amber flesh and corrugated pit on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "East Asia (Yangtze River Basin, China)",
    coordinates: [31.23, 121.47], // Ancestral Lower Yangtze corridor
    description:
      "Native to the ancient river valleys of China between the Tarim Basin and the northern slopes of the Kunlun Mountains, peaches were cultivated as early as 6000 BCE in Zhejiang province. Revered in Taoist tradition as the sacred fruit of immortality, trade caravans carried graftwood westward along the Silk Road through Persia (inspiring its botanical name persica) to Greece and Rome by the 1st century CE.",
    grownTodayRegions: [
      "China",
      "Spain",
      "Italy",
      "United States",
      "Turkey",
      "Greece",
      "Iran",
      "Egypt",
      "Chile",
      "Argentina",
    ],
    sourceIds: ["usda-fdc-peach"],
  },

  season: [
    {
      regionId: "temperate-summer",
      hemisphere: "north",
      months: [5, 6, 7, 8, 9],
      peakMonths: [6, 7, 8],
      label: "May – September (peak June–August)",
      sourceIds: ["usda-fdc-peach"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 169928
   * "Peaches, yellow, raw" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 39,
      unit: "kcal",
      sourceIds: ["usda-fdc-peach"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.91,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.25,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 9.54,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 1.5,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 8.39,
        unit: "g",
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["269"],
      },
      potassium: {
        amount: 190,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["306"],
      },
      vitaminC: {
        amount: 6.6,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["401"],
      },
      vitaminE: {
        amount: 0.73,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["323"],
      },
      vitaminA: {
        amount: 16,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["320"],
      },
      vitaminK: {
        amount: 2.6,
        unit: "µg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["430"],
      },
      niacin: {
        amount: 0.806,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["406"],
      },
      pantothenicAcid: {
        amount: 0.153,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["410"],
      },
      manganese: {
        amount: 0.061,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["315"],
      },
      copper: {
        amount: 0.068,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["312"],
      },
      magnesium: {
        amount: 9,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 20,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["305"],
      },
      calcium: {
        amount: 6,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.25,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["303"],
      },
      zinc: {
        amount: 0.17,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["309"],
      },
      folate: {
        amount: 4,
        unit: "µg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["417"],
      },
      thiamin: {
        amount: 0.024,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.031,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["405"],
      },
      vitaminB6: {
        amount: 0.025,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["415"],
      },
      sodium: {
        amount: 0,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-peach"],
        sourceReferenceIds: ["307"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    notes:
      "Sumptuous, dripping summer nectar. Velvety honeyed sweetness balanced by gentle malic acidity, delicate floral rose-blossom aromatics, and rich warm lactonic peach notes (gamma-decalactone).",
  },

  benefitTags: [
    {
      label: "Polyphenolic Antioxidants",
      phenomenon: "chlorogenic acid and flavan-3-ols",
      description:
        "Contains dense concentrations of chlorogenic acid, catechin, and epicatechin within the peel and outer flesh, offering free-radical neutralization and cellular protection.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-peach", "fda-daily-values"],
      icon: "shield",
    },
    {
      label: "Carotenoid Provitamin A",
      phenomenon: "beta-carotene and lutein density",
      description:
        "Golden-yellow flesh supplies bioavailable beta-carotene and cryptoxanthin, supporting retinal rod function and epithelial tissue integrity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-peach", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Hydration & Dietary Pectin",
      phenomenon: "structured cellular water matrix",
      description:
        "Featuring nearly 89% structured cell water alongside soluble pectin, assisting digestive motility and healthy mucosal hydration.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-peach", "fda-daily-values"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 190,
      unit: "mg",
      referenceContext: "per 100g · 4% DV",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 6.6,
      unit: "mg",
      referenceContext: "per 100g · 7% DV",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      nutrientId: "vitaminE",
      label: "Vitamin E",
      value: 0.73,
      unit: "mg",
      referenceContext: "per 100g · 5% DV",
      sourceIds: ["usda-fdc-peach"],
    },
  ],

  varieties: [
    {
      name: "Elberta (Prunus persica 'Elberta')",
      description:
        "The historic benchmark American freestone peach, bred in Georgia in 1870. Famous for its generous size, rich yellow flesh with red pit staining, and classic aromatic richness.",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      name: "White Lady (Prunus persica 'White Lady')",
      description:
        "A celebrated low-acid white-fleshed freestone variety. Exquisitely sweet, floral, and aromatic with delicate cream-and-pink skin and melting, velvety flesh.",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      name: "Redhaven (Prunus persica 'Redhaven')",
      description:
        "The world's most widely planted commercial yellow freestone cultivar. Famed for its brilliant crimson blush, fine-grained firm flesh, and resilient shipping quality.",
      sourceIds: ["usda-fdc-peach"],
    },
  ],

  funFacts: [
    {
      text: "Nectarines and peaches are genetically identical species; the presence or absence of skin fuzz (trichomes) is governed by a single recessive genetic allele (MYB25).",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      text: "In ancient Taoist mythology, the Peaches of Immortality blossomed only once every 3,000 years in the celestial orchard of Xi Wangmu, the Queen Mother of the West.",
      sourceIds: ["usda-fdc-peach"],
    },
    {
      text: "The lignified peach pit contains natural amygdalin, which breaks down into benzaldehyde—the signature aromatic compound providing the almond-like essence in Italian amaretto.",
      sourceIds: ["usda-fdc-peach"],
    },
  ],

  similarFruitIds: ["mango", "strawberry"],
  sourceIds: ["usda-fdc-peach", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-20",
    reviewerId: "abhi",
  },
};
