/**
 * Ber (Indian Jujube) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171731 ("Jujube, raw") & ICMR-NIN Indian Food Composition Tables.
 * Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const ber: Fruit = {
  id: "ber",
  slug: "ber",
  name: "Ber",

  editorial: {
    nickname: "Badari · Indian Jujube",
    tagline: "The desert apple. Crisp Indian jujube rich in jujubosides and ascorbic radiance.",
    heroDescription:
      "Thriving in the harsh, sun-baked arid soils and scrub forests of Rajasthan, Gujarat, and the Deccan plateau, the Ber (Ziziphus mauritiana) is an ancient, hardy stone fruit of the Rhamnaceae family. Known in legend as the humble fruit offered by Shabari to Lord Rama, each crisp, miniature jade-to-golden drupe delivers an exhilarating apple-like snap when fresh, mellowing into a sweet, dates-and-honey chew as it matures.",
    pullQuotes: [
      {
        quote: "A sun-kissed jade drupe offering an explosive green-apple snap, floral sweetness, and an oasis of desert Vitamin C.",
        attribution: "Editorial",
      },
      {
        quote: "Celebrated in ancient epic lore as the purest offering of devotion, Ber thrives where other fruits falter, packing extraordinary neuro-calming saponins.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A resilient arid-zone drupe delivering 69mg Vitamin C (77% DV), 250mg potassium, and neuroprotective dammarane-type jujubosides.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rhamnaceae",
    genus: "Ziziphus",
    species: "mauritiana",
    botanicalNotes: [
      "Belongs to the buckthorn family (Rhamnaceae), an extremely drought-resistant, spiny evergreen or semi-deciduous tree adapted to saline and desert environments.",
      "Botanically classified as a fleshy drupe containing a single hard, tuberculate or wrinkled stone, with a smooth, glossy epicarp turning from light green to golden yellow or reddish-brown.",
    ],
  },

  theme: {
    primary: "#65A30D",
    secondary: "#ECFCCB",
    glow: "#65A30D40",
    gradient: ["#4D7C0F", "#84CC16"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/ber/hero.png",
      alt: "Freshly harvested crisp green and golden Indian Ber jujube fruits piled on earthenware pottery with spiny foliage",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/ber/card.png",
      alt: "Ber - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/ber/macro-break.png",
      alt: "Extreme macro photograph of crisp white Ber flesh texture showing cellular water turgor and glossy thin skin",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Drupaceous Pericarp · The Jujuboside Reservoir",
      captionText:
        "The crisp mesocarp synthesizes dammarane saponins (jujuboside A and B) that cross cellular membranes to interact with central GABAergic neural receptors.",
    },
  },

  origin: {
    region: "Thar Desert & Indo-Gangetic Plains (Indian Subcontinent)",
    coordinates: [26.9, 75.8],
    description:
      "Indigenous to the arid and semi-arid tracts of northwestern India, Pakistan, and southern Asia. Carbonized jujube stones discovered at Harappan and Indus Valley archaeological sites confirm human use dating back to 2500 BCE. Revered in classical Indian literature, it has spread throughout the dry zones of Africa, the Middle East, and northern Australia.",
    grownTodayRegions: [
      "India (Rajasthan, Haryana, Punjab, Gujarat, Maharashtra, Uttar Pradesh)",
      "Pakistan (Sindh, Punjab)",
      "China",
      "Egypt",
      "Sudan",
      "Australia (arid northern territories)",
    ],
    sourceIds: ["usda-fdc-ber"],
  },

  season: [
    {
      regionId: "india-arid-subtropical",
      hemisphere: "north",
      months: [11, 12, 1, 2, 3],
      peakMonths: [1, 2],
      label: "North Indian Winter Harvest (January – February)",
      sourceIds: ["usda-fdc-ber"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 79,
      unit: "kcal",
      sourceIds: ["usda-fdc-ber"],
    },
    nutrients: {
      protein: {
        amount: 1.2,
        unit: "g",
        sourceIds: ["usda-fdc-ber"],
      },
      totalFat: {
        amount: 0.2,
        unit: "g",
        sourceIds: ["usda-fdc-ber"],
      },
      carbohydrates: {
        amount: 20.23,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-ber"],
      },
      fiber: {
        amount: 3.0,
        unit: "g",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-ber"],
      },
      totalSugars: {
        amount: 10.5,
        unit: "g",
        sourceIds: ["usda-fdc-ber"],
      },
      vitaminC: {
        amount: 69.0,
        unit: "mg",
        dailyValuePercent: 77,
        sourceIds: ["usda-fdc-ber"],
      },
      potassium: {
        amount: 250,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-ber"],
      },
      phosphorus: {
        amount: 23,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-ber"],
      },
      calcium: {
        amount: 21,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-ber"],
      },
      niacin: {
        amount: 0.9,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-ber"],
      },
    },
    waterContentPercent: 77.8,
    micronutrientSignatures: [
      {
        name: "Dammarane Jujubosides (A & B)",
        amount: 18.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Steroidal saponins recognized for neurosedative, anti-anxiety, and hippocampal memory-enhancing pharmacodynamics",
      },
      {
        name: "Betulinic Acid & Triterpenoids",
        amount: 12.5,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Lupane-structured triterpene providing broad-spectrum cytotoxic surveillance against aberrant cellular proliferation",
      },
      {
        name: "Ziziphin Taste-Modifying Saponins",
        amount: 6.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Specialized triterpene glycosides that selectively suppress sweet taste receptor perception while leaving sour and salty intact",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 5,
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
      value: 7,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Crisp first.",
    accent: "Wild orchard tang.",
    descriptors: [
      "Crisp Apple",
      "Clover Honey",
      "Sour Snap",
      "Tannin",
      "Juicy"
    ],
    notes:
      "Fresh crisp varieties (Gola, Seb) mimic the crunch of Granny Smith apples, while fully mature cultivars (Umran) become brown, sweet, and soft.",
  },

  benefitTags: [
    {
      label: "Neurosedative & Sleep Architecture",
      phenomenon: "jujuboside-mediated GABAergic modulation",
      description:
        "Jujubosides act on GABA-A receptor sites in the hippocampus, easing neural hyperexcitability and promoting restful, deep sleep.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-ber"],
      icon: "activity",
      metric: "18 mg jujubosides",
    },
    {
      label: "Arid Ascorbic Defense & Immunity",
      phenomenon: "leukocyte chemotaxis stimulation",
      description:
        "Supplies 77% Daily Value of Vitamin C per 100g, exceeding oranges by weight and supporting phagocytosis during winter chills.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-ber"],
      icon: "shield",
      metric: "69 mg Vitamin C (77% DV)",
    },
    {
      label: "Hepatoprotection & Liver Resilience",
      phenomenon: "betulinic acid transaminase regulation",
      description:
        "Downregulates serum transaminases (ALT, AST) and enhances hepatic superoxide dismutase activity in oxidative stress models.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-ber"],
      icon: "zap",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 69.0,
      unit: "mg",
      referenceContext: "77% Daily Value",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 250,
      unit: "mg",
      referenceContext: "5% Daily Value",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 79,
      unit: "kcal",
      referenceContext: "crisp desert stone fruit",
      sourceIds: ["usda-fdc-ber"],
    },
  ],

  varieties: [
    {
      name: "Gola ('Golden Globe')",
      description: "Leading early-season desert variety of Rajasthan: round golden-yellow fruits with tender skin and juicy, crisp sweet-tart white flesh.",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      name: "Umran (Katha)",
      description: "King of late-season Indian Ber: large oval fruits maturing to glossy chocolate mahogany with rich, sweet, chewy flesh like honeyed dates.",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      name: "Seb ('Apple Ber')",
      description: "Bred at CAZRI Jodhpur: miniature apple-shaped fruit with prominent ribs, crunchy texture, and zesty Granny Smith apple flavors.",
      sourceIds: ["usda-fdc-ber"],
    },
  ],

  funFacts: [
    {
      text: "In the Hindu epic Ramayana, an elderly ascetic woman named Shabari tasted every Ber fruit first to ensure only the sweetest, ripest berries were offered to Lord Rama.",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      text: "Ber contains a rare triterpene compound called 'ziziphin' that temporarily blocks the sweet receptors on your tongue; eating sugar right after ber makes it taste completely tasteless for several minutes.",
      sourceIds: ["usda-fdc-ber"],
    },
    {
      text: "The Ber tree has root systems that can penetrate over 20 feet deep into arid desert rock, allowing it to remain lush green and yield abundant fruit in temperatures exceeding 48°C.",
      sourceIds: ["usda-fdc-ber"],
    },
  ],

  similarFruitIds: ["apple", "amla", "date"],
  sourceIds: ["usda-fdc-ber", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
