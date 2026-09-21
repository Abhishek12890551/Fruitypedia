/**
 * Watermelon — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 167765 ("Watermelon, raw"), accessed 2026-09-20.
 * Values are per 100g as reported by the analytical source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const watermelon: Fruit = {
  id: "watermelon",
  slug: "watermelon",
  name: "Watermelon",

  editorial: {
    nickname: "le rubis d'eau douce",
    tagline: "Crystalline hydration. Ancient African pepo of desert survival.",
    heroDescription:
      "Cultivated across North and Northeast Africa for over four thousand years as nature's ultimate living reservoir, the watermelon is a botanical marvel of the gourd family. Enclosed within a durable emerald-striped rind, its crisp, sugar-dusted crimson pulp contains over ninety-one percent structured water, abundant antioxidant lycopene, and the unique cardiovascular amino acid L-citrulline.",
  },

  taxonomy: {
    categoryId: "melon",
    family: "Cucurbitaceae",
    genus: "Citrullus",
    species: "lanatus",
    botanicalNotes: [
      "Belongs to the Cucurbitaceae family (gourd and squash family) in the genus Citrullus.",
      "Botanically classified as a pepo — a specialized many-seeded berry with a thick, hard exocarp (rind) and fleshy, succulent mesocarp and endocarp.",
    ],
  },

  theme: {
    primary: "#10B981",
    secondary: "#F43F5E",
    glow: "#10B98145",
    gradient: ["#10B981", "#059669"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/watermelon/hero.jpg",
      alt: "A generous curved slice of ripe watermelon with glistening crimson pulp, dark seeds, and green striped rind on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "Northeast Africa (Sudano-Sahelian / Nile Basin)",
    coordinates: [15.5, 32.5],
    description:
      "Indigenous wild ancestral forms (such as the Kordofan melon) grew across northeast Africa, where nomadic pastoralists prized them for their life-preserving water content. Domesticated in ancient Egypt by 2000 BCE, seeds have been discovered in the tomb of Tutankhamun and depicted in pharaonic murals, before Mediterranean trade spread them to southern Europe and Asia.",
    grownTodayRegions: [
      "China",
      "Turkey",
      "Iran",
      "India",
      "Algeria",
      "Brazil",
      "United States",
      "Egypt",
      "Mexico",
      "Spain",
    ],
    sourceIds: ["usda-fdc-watermelon"],
  },

  season: [
    {
      regionId: "temperate-summer",
      hemisphere: "north",
      months: [6, 7, 8, 9],
      peakMonths: [7, 8],
      label: "June – September (peak July–August)",
      sourceIds: ["usda-fdc-watermelon"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 167765
   * "Watermelon, raw" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 30,
      unit: "kcal",
      sourceIds: ["usda-fdc-watermelon"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 0.61,
        unit: "g",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.15,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 7.55,
        unit: "g",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 0.4,
        unit: "g",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 6.2,
        unit: "g",
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["269"],
      },
      water: {
        amount: 91.45,
        unit: "g",
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["255"],
      },
      calcium: {
        amount: 7,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.24,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["303"],
      },
      magnesium: {
        amount: 10,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["304"],
      },
      phosphorus: {
        amount: 11,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["305"],
      },
      potassium: {
        amount: 112,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["306"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["307"],
      },
      zinc: {
        amount: 0.1,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["309"],
      },
      copper: {
        amount: 0.042,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["312"],
      },
      manganese: {
        amount: 0.038,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["315"],
      },
      vitaminC: {
        amount: 8.1,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["401"],
      },
      thiamin: {
        amount: 0.033,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["404"],
      },
      riboflavin: {
        amount: 0.021,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.178,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["406"],
      },
      pantothenicAcid: {
        amount: 0.221,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["410"],
      },
      vitaminB6: {
        amount: 0.045,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["415"],
      },
      folate: {
        amount: 3,
        unit: "µg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["417"],
      },
      vitaminA: {
        amount: 28,
        unit: "µg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["320"],
      },
      vitaminE: {
        amount: 0.05,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["323"],
      },
      vitaminK: {
        amount: 0.1,
        unit: "µg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-watermelon"],
        sourceReferenceIds: ["430"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 7,
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
    notes:
      "Crisp, effervescently refreshing, and hyper-hydrating sensory experience. Initial burst of light natural floral sweetness (predominantly clean fructose) followed by subtle grassy-cucumber undertones from the rind border, completely devoid of astringency or sharp acidity.",
  },

  benefitTags: [
    {
      label: "Cellular Hydration",
      phenomenon: "structured water and electrolyte equilibrium",
      description:
        "Composed of 91.4% water combined with bioavailable potassium and magnesium electrolytes, providing exceptionally bioavailable biological hydration.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-watermelon", "fda-daily-values"],
      icon: "droplet",
    },
    {
      label: "Lycopene Density",
      phenomenon: "carotenoid antioxidant protection",
      description:
        "Contains 4,532 µg of lycopene per 100g — up to 40% higher than raw tomatoes — delivering potent fat-soluble carotenoids that protect cellular lipids from oxidative stress.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-watermelon"],
      icon: "shield",
    },
    {
      label: "L-Citrulline Bioavailability",
      phenomenon: "nitric oxide synthesis precursor",
      description:
        "Naturally enriched in the non-essential amino acid L-citrulline, which the vascular endothelial system converts to L-arginine to stimulate nitric oxide production and vasodilation.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-watermelon"],
      icon: "heart",
    },
  ],

  heroStats: [
    {
      nutrientId: "water",
      label: "Water Content",
      value: 91.45,
      unit: "g",
      referenceContext: "per 100g · 91.4% Hydration",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 8.1,
      unit: "mg",
      referenceContext: "per 100g · 9% DV",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 112,
      unit: "mg",
      referenceContext: "per 100g · 2% DV",
      sourceIds: ["usda-fdc-watermelon"],
    },
  ],

  varieties: [
    {
      name: "Crimson Sweet",
      description:
        "The benchmark modern heirloom cultivar developed in 1963. Famous for its light green rind with dark stripes, crisp deep crimson flesh, and high brix sugar levels.",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      name: "Sugar Baby",
      description:
        "A compact 'icebox' melon bred in 1956 with a dark, almost solid blackish-green rind and tender, intensely sweet dark red pulp.",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      name: "Moon and Stars",
      description:
        "A historic 1920s American heirloom featuring foliage and deep green rinds splashed with radiant golden-yellow spots reminiscent of a nocturnal celestial map.",
      sourceIds: ["usda-fdc-watermelon"],
    },
  ],

  funFacts: [
    {
      text: "Watermelon is both a fruit and a vegetable: botanically a pepo berry, it is cultivated as a gourd crop in the Cucurbitaceae family alongside cucumbers, pumpkins, and squash.",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      text: "Every part of the watermelon is edible, including the crisp nutrient-rich rind (which holds high concentrations of citrulline) and the seeds, which are roasted across West Africa and Asia.",
      sourceIds: ["usda-fdc-watermelon"],
    },
    {
      text: "Archaeologists discovered 4,000-year-old watermelon seeds in the tomb of Pharaoh Tutankhamun, placed in burial chambers as sustenance for the royal journey into the afterlife.",
      sourceIds: ["usda-fdc-watermelon"],
    },
  ],

  similarFruitIds: ["strawberry", "peach"],
  sourceIds: ["usda-fdc-watermelon", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-20",
    reviewerId: "abhi",
  },
};
