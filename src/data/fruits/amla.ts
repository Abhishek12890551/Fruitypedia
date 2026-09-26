/**
 * Amla (Indian Gooseberry) — Production fruit monograph.
 *
 * Nutritional values derived from ICMR-NIN Indian Food Composition Tables
 * and USDA FoodData Central. Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const amla: Fruit = {
  id: "amla",
  slug: "amla",
  name: "Amla",

  editorial: {
    nickname: "Amritavriksha · Dhatri",
    tagline: "The immortal berry. Revered fountainhead of Ayurvedic vitality.",
    heroDescription:
      "Venerated in Sanskrit scriptures as 'Dhatri' (the divine nurse) and hailed as a cornerstone of Ayurvedic rejuvenation (Rasayana), amla is an extraordinary deciduous wonder of the Phyllanthaceae family. The translucent, pale-green ribbed orb offers an unforgettable sensory paradox: a fiercely sour and puckering astringency that miraculously transforms on the tongue into clean, crystalline honeyed sweetness, backed by one of the plant kingdom's highest recorded concentrations of heat-stable Vitamin C.",
    pullQuotes: [
      {
        quote: "A jade orb that shocks the palate with piercing sour astringency before dissolving into a miracle of lingering, pure mountain sweetness.",
        attribution: "Editorial",
      },
      {
        quote: "The sacred foundation of Chyawanprash and ancient rasayana elixir, amla is nature's indestructible shield of cellular vitality.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "An unmatched botanical titan packing 478mg of Vitamin C per 100g (over 530% DV), complexed with emblicanin tannins that prevent thermal oxidation.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Phyllanthaceae",
    genus: "Phyllanthus",
    species: "emblica",
    botanicalNotes: [
      "Belongs to the leafflower family (Phyllanthaceae), historically classified under Euphorbiaceae.",
      "Botanically classified as a fleshy, globose capsule (often called a baccate drupe) with six obscure vertical ridges, encasing a stony endocarp containing six small seeds.",
    ],
  },

  theme: {
    primary: "#65A30D",
    secondary: "#D9F99D",
    glow: "#65A30D40",
    gradient: ["#4D7C0F", "#A3E635"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/amla/hero.png",
      alt: "Cluster of translucent pale green ribbed amla berries with delicate feathery leaves on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/amla/card.png",
      alt: "Amla - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/amla/macro-break.png",
      alt: "Extreme macro photograph of sliced amla berry showing jade translucent segments and ascorbic tannin vesicles",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Striated Pericarp · The Emblicanin Vault",
      captionText:
        "The translucent green parenchymal tissue holds vast quantities of emblicanin A and B, low-molecular-weight gallotannins that stabilize and recycle ascorbic acid even under extreme temperatures.",
    },
  },

  origin: {
    region: "Tropical Indian Subcontinent",
    coordinates: [25.31, 82.97],
    description:
      "Native across the tropical and subtropical forests of India, Sri Lanka, and Myanmar. Recorded in the Charaka Samhita and Sushruta Samhita (dating back to 1000 BCE) as the foremost rejuvenating fruit in Indian medicine. Sacred to both Hindu and Buddhist traditions, Indian gooseberry trees are traditionally worshipped during the Kartik autumn festival for health and longevity.",
    grownTodayRegions: [
      "India (Uttar Pradesh, Gujarat, Rajasthan, Tamil Nadu, Madhya Pradesh)",
      "Sri Lanka",
      "Bangladesh",
      "Nepal",
      "Thailand",
      "Indonesia",
      "Malaysia",
    ],
    sourceIds: ["usda-fdc-amla"],
  },

  season: [
    {
      regionId: "india-winter",
      hemisphere: "north",
      months: [10, 11, 12, 1, 2],
      peakMonths: [11, 12, 1],
      label: "Winter Season Harvest (November – January)",
      sourceIds: ["usda-fdc-amla"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 44,
      unit: "kcal",
      sourceIds: ["usda-fdc-amla"],
    },
    nutrients: {
      protein: {
        amount: 0.88,
        unit: "g",
        sourceIds: ["usda-fdc-amla"],
      },
      totalFat: {
        amount: 0.58,
        unit: "g",
        sourceIds: ["usda-fdc-amla"],
      },
      carbohydrates: {
        amount: 10.18,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-amla"],
      },
      fiber: {
        amount: 4.3,
        unit: "g",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-amla"],
      },
      totalSugars: {
        amount: 4.5,
        unit: "g",
        sourceIds: ["usda-fdc-amla"],
      },
      vitaminC: {
        amount: 478.0,
        unit: "mg",
        dailyValuePercent: 531,
        sourceIds: ["usda-fdc-amla"],
      },
      calcium: {
        amount: 25,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-amla"],
      },
      iron: {
        amount: 1.2,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-amla"],
      },
      phosphorus: {
        amount: 27,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-amla"],
      },
      potassium: {
        amount: 198,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-amla"],
      },
    },
    waterContentPercent: 86.8,
    micronutrientSignatures: [
      {
        name: "Ascorbic Acid (Vitamin C)",
        amount: 478.0,
        unit: "mg",
        dailyValuePercent: 531,
        description: "Astronomical concentration exceeding orange juice by more than twenty-fold per 100g",
      },
      {
        name: "Emblicanin A & B Tannins",
        amount: 210,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Proprietary gallotannins that chemically bind and protect ascorbic acid against heat destruction",
      },
      {
        name: "Bioactive Bioflavonoids",
        amount: 85,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Quercetin and gallic acid network promoting hepatic cellular resilience and lipid homeostasis",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Piercing sour.",
    accent: "Miraculous sweet finish.",
    descriptors: [
      "Piercing Sour",
      "Astringent",
      "Tannic",
      "Crisp",
      "Sweet Aftertaste"
    ],
    notes:
      "A revered phenomenon in India: drinking a sip of room-temperature water immediately after chewing a fresh amla berry produces a burst of intense, pure natural sweetness on the tastebuds.",
  },

  benefitTags: [
    {
      label: "Supreme Cellular Antioxidant",
      phenomenon: "emblicanin and ascorbic synergy",
      description:
        "Delivering over 530% DV Vitamin C, providing extraordinary radical scavenging and shielding cellular DNA from oxidative harm.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-amla"],
      icon: "shield",
      metric: "478 mg / 100g",
    },
    {
      label: "Hepatic & Lipid Metabolic Balance",
      phenomenon: "tannin and gallic acid mediation",
      description:
        "Clinically studied for assisting healthy hepatic enzyme profiles and supporting balanced serum lipid parameters.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-amla"],
      icon: "activity",
    },
    {
      label: "Collagen & Dermal Vitality",
      phenomenon: "proline and lysine hydroxylation",
      description:
        "High ascorbic density drives essential collagen synthesis, nourishing skin barrier integrity, hair roots, and capillary strength.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-amla"],
      icon: "sun",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 478.0,
      unit: "mg",
      referenceContext: "531% Daily Value",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      nutrientId: "fiber",
      label: "Fiber",
      value: 4.3,
      unit: "g",
      referenceContext: "15% Daily Value",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 44,
      unit: "kcal",
      referenceContext: "pure metabolic tonic",
      sourceIds: ["usda-fdc-amla"],
    },
  ],

  varieties: [
    {
      name: "Chakaiya",
      description: "Premier commercial Indian cultivar from Uttar Pradesh: medium-sized, flattened berries with high juiciness, heavy bearing, and long post-harvest shelf life.",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      name: "Banarasi",
      description: "Historic heirloom selection from Varanasi: large, translucent yellowish-green fruit with low fiber content, prized for Murabba and herbal preserves.",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      name: "NA-7 (Neelam)",
      description: "Prolific clonal selection developed at Narendra Deva University (Faizabad): uniform fruit, high ascorbic acid retention, and early winter maturation.",
      sourceIds: ["usda-fdc-amla"],
    },
  ],

  funFacts: [
    {
      text: "A single amla berry contains roughly twenty times the Vitamin C of a fresh orange, packing an entire week's ascorbic acid requirement into two small fruits.",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      text: "Unlike most fruits whose Vitamin C is destroyed by cooking or drying, amla's ascorbic acid is bound to protective emblicanin tannins that survive boiling and sun-drying.",
      sourceIds: ["usda-fdc-amla"],
    },
    {
      text: "Amla is the primary active ingredient (over 60% by volume) in Chyawanprash, the 3,000-year-old Ayurvedic herbal jam formulation recorded in the Charaka Samhita.",
      sourceIds: ["usda-fdc-amla"],
    },
  ],

  similarFruitIds: ["kiwi", "pomegranate", "orange"],
  sourceIds: ["usda-fdc-amla", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
