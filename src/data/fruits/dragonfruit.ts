/**
 * Dragon Fruit (Pitaya) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central
 * FDC ID 2344732 ("Pitaya / Dragon fruit, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 6
 */

import type { Fruit } from "@/types";

export const dragonfruit: Fruit = {
  id: "dragonfruit",
  slug: "dragonfruit",
  name: "Dragon Fruit",

  editorial: {
    nickname: "Kamalam · Dragon Fruit",
    tagline: "Nocturnal cactus berry. Betalain brilliance and cellular hydration.",
    heroDescription:
      "Born of magnificent nocturnal blossoms that unfurl for only a single night under the tropical moon, the dragon fruit (pitahaya) is an astonishing climbing cactus of the Cactaceae family. Encased within a vivid fuchsia rind with dragon-scale green bracts, its crisp, succulent flesh—speckled with thousands of edible black seeds—offers ultra-pure cellular hydration, gentle natural prebiotic fiber, and protective betalain antioxidants.",
    pullQuotes: [
      {
        quote: "A nocturnal desert secret: pollinated by hawk moths under starlight, its armored neon scales conceal pure, refreshing dew.",
        attribution: "Editorial",
      },
      {
        quote: "With its dazzling dragon-scale bracts and snow-white interior starry with sesame-like seeds, pitaya is nature's most theatrical botanical sculpture.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "Delivers 87% structured cellular water, exceptional magnesium (40mg per 100g), and gentle prebiotic fiber from hundreds of edible seeds.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Cactaceae",
    genus: "Selenicereus",
    species: "undatus",
    botanicalNotes: [
      "Belongs to the climbing cactus genus Selenicereus (formerly classified under Hylocereus) within the family Cactaceae.",
      "Botanically classified as a fleshy cactus berry developing from an epigynous flower, featuring prominent foliaceous scales (bracts) along the external pericarp.",
    ],
  },

  theme: {
    primary: "#EC4899",
    secondary: "#FBCFE8",
    glow: "#EC489945",
    gradient: ["#EC4899", "#831843"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/dragonfruit/hero.png",
      alt: "Vibrant sliced dragon fruit showing bright pink rind and white seeded interior on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/dragonfruit/card.png",
      alt: "Dragonfruit - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/dragonfruit/macro-break.png",
      alt: "Extreme macro photograph of sliced dragon fruit interior showing crisp cellular parenchyma and black seeds",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Nocturnal Cactus Mesocarp · The Prebiotic Seed Matrix",
      captionText:
        "Each glistening seed contains valuable polyunsaturated essential fatty acids (linoleic and oleic acids) suspended in a mucilaginous polysaccharide gel that retains desert moisture.",
    },
  },

  origin: {
    region: "Southern Mexico & Central America",
    coordinates: [17.07, -96.72],
    description:
      "Indigenous to the tropical dry forests and coastal regions of southern Mexico, Guatemala, Costa Rica, and El Salvador. Revered by pre-Columbian Indigenous peoples who prized the fruit as a vital hydrating survival food. French colonists introduced the climbing cactus to Vietnam in the early 19th century, where it became known as 'thanh long' (green dragon).",
    grownTodayRegions: [
      "Vietnam (Mekong Delta)",
      "Mexico",
      "Colombia",
      "Ecuador",
      "Thailand",
      "Indonesia",
      "Taiwan",
      "United States (Florida & California)",
      "Israel",
      "Australia (Queensland)",
    ],
    sourceIds: ["usda-fdc-dragonfruit"],
  },

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    waterContentPercent: 87.0,
    calories: {
      amount: 60,
      unit: "kcal",
      sourceIds: ["usda-fdc-dragonfruit"],
      sourceReferenceIds: ["208"],
    },

    nutrients: {
      calories: {
        amount: 60,
        unit: "kcal",
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["208"],
      },
      carbohydrates: {
        amount: 12.94,
        unit: "g",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.9,
        unit: "g",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 7.65,
        unit: "g",
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["269"],
      },
      protein: {
        amount: 1.18,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.1,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["204"],
      },
      potassium: {
        amount: 190,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["306"],
      },
      magnesium: {
        amount: 40,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["304"],
      },
      calcium: {
        amount: 18,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["301"],
      },
      iron: {
        amount: 0.74,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["303"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["307"],
      },
      vitaminC: {
        amount: 2.5,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-dragonfruit"],
        sourceReferenceIds: ["401"],
      },
    },
    micronutrientSignatures: [
      {
        name: "Magnesium",
        amount: 40,
        unit: "mg",
        dailyValuePercent: 10,
        description: "Essential mineral cofactor for over 300 enzymatic reactions and muscle relaxation.",
      },
      {
        name: "Dietary Prebiotic Fiber",
        amount: 2.9,
        unit: "g",
        dailyValuePercent: 10,
        description: "Soluble oligosaccharides and seed fiber that nourish bifidobacteria in the gut.",
      },
      {
        name: "Cellular Hydration",
        amount: 87.0,
        unit: "%",
        dailyValuePercent: 87,
        description: "High natural water volume stored inside succulent desert parenchymal cells.",
      },
      {
        name: "Iron",
        amount: 0.74,
        unit: "mg",
        dailyValuePercent: 4,
        description: "Rare plant mineral contribution in a fresh tropical fruit.",
      },
    ],
  },

  tasteProfile: {
    sweetness: { value: 5, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    acidity: { value: 2, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    juiciness: { value: 9, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    aromatic: { value: 5, basis: "editorial-sensory", methodologyId: "rubric-v1" },
    lead: "Gentle hydration.",
    accent: "Subtle melon poppy.",
    descriptors: [
      "Subtle",
      "Hydrating",
      "Melon",
      "Crisp Seed",
      "Cooling"
    ],
    notes:
      "Cool, soothing, and subtly sweet reminiscent of crisp pear and watermelon with delicate floral undertones. The thousands of soft, edible black seeds provide a delightfully crisp, poppy texture without bitterness.",
  },

  benefitTags: [
    {
      label: "Cellular Hydration & Magnesium",
      phenomenon: "hydration and cellular relaxation",
      description:
        "Contains 87% water combined with 40mg magnesium per 100g (10% DV), supporting cellular electrolyte balance and muscle function.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-dragonfruit"],
      icon: "droplet",
    },
    {
      label: "Prebiotic Oligosaccharides",
      phenomenon: "gut microbiome nourishment",
      description:
        "Rich in natural prebiotic carbohydrates and soluble seed fiber that support healthy digestion and gut microbiome vitality.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-dragonfruit"],
      icon: "shield",
    },
    {
      label: "Natural Antioxidant Betalains",
      phenomenon: "phytochemical pigment activity",
      description:
        "Contains betalain pigments and phenolic compounds studied for their role in neutralizing cellular free radicals.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-dragonfruit"],
      icon: "sparkles",
    },
  ],

  heroStats: [
    {
      nutrientId: "magnesium",
      label: "Magnesium",
      value: 40,
      unit: "mg",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      nutrientId: "water",
      label: "Water Content",
      value: 87.0,
      unit: "%",
      referenceContext: "pure hydration",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.9,
      unit: "g",
      referenceContext: "10% Daily Value",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
  ],

  varieties: [
    {
      name: "White Pitaya (Selenicereus undatus)",
      description: "The classic variety with neon-magenta skin, green scales, and snow-white flesh studded with black seeds.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      name: "Red Pitaya (Selenicereus costaricensis)",
      description: "Fuchsia rind with deep blood-red or magenta pulp packed with concentrated betacyanin antioxidants.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      name: "Yellow Pitaya (Selenicereus megalanthus)",
      description: "Prickly golden-yellow skin with translucent white pulp; the sweetest variety with honey-floral flavor.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
  ],


  funFacts: [
    {
      text: "Dragon fruit flowers are among the largest blossoms on Earth, opening for a single night and pollinated by nocturnal bats and hawk moths.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      text: "Dragon fruit grows on an epiphytic climbing cactus that can live and produce fruit for more than two decades.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      text: "The tiny seeds contain over 50% essential polyunsaturated fatty acids, notably heart-healthy omega-6 linoleic acid.",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
  ],

  season: [
    {
      regionId: "mesoamerica-southeast-asia",
      hemisphere: "north",
      months: [6, 7, 8, 9, 10, 11],
      peakMonths: [7, 8, 9, 10],
      label: "Northern Summer & Autumn Harvest",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
    {
      regionId: "southern-tropical",
      hemisphere: "south",
      months: [12, 1, 2, 3, 4, 5],
      peakMonths: [1, 2, 3, 4],
      label: "Southern Summer & Autumn Harvest",
      sourceIds: ["usda-fdc-dragonfruit"],
    },
  ],

  similarFruitIds: ["kiwi", "watermelon", "blueberry"],
  sourceIds: ["usda-fdc-dragonfruit", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-21",
    reviewerId: "abhi",
  },
};

export default dragonfruit;
