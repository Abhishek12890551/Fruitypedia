/**
 * Cherry (Sweet Cherry) — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171719 ("Cherries, sweet, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const cherry: Fruit = {
  id: "cherry",
  slug: "cherry",
  name: "Cherry",

  editorial: {
    nickname: "Gilas · Shahdana",
    tagline: "The spring ruby. Celebrated stone jewel of the temperate orchards.",
    heroDescription:
      "Heralding early summer across the temperate valleys of the Northern Hemisphere, the sweet cherry is a breathtaking jewel of the Rosaceae family. Suspended in pairs on slender green pedicels, its glossy, heart-shaped crimson-black skin stretches taut over succulent, wine-dark flesh that bursts on the palate with a crystalline symphony of rich sweetness, tart cherry notes, and soothing plant melatonin.",
    pullQuotes: [
      {
        quote: "A glossy crimson heart that snaps open to release wine-dark nectar, heralding early summer with opulent stone-fruit majesty.",
        attribution: "Editorial",
      },
      {
        quote: "From the ancient orchards of Pontus along the Black Sea to the sun-soaked valleys of Kashmir and the Pacific Northwest, the cherry is nature's royal drupe.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A cardioprotective stone fruit delivering 222mg potassium per 100g, rich cyanidin-3-glucoside anthocyanins, and natural dietary melatonin.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rosaceae",
    genus: "Prunus",
    species: "avium",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), closely related to peach, plum, apricot, and almond.",
      "Botanically classified as a fleshy drupe featuring a smooth, polished epicarp, succulent anthocyanin-rich mesocarp, and a woody endocarp enclosing a solitary seed.",
    ],
  },

  theme: {
    primary: "#BE123C",
    secondary: "#FDA4AF",
    glow: "#BE123C40",
    gradient: ["#9F1239", "#E11D48"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/cherry/hero.png",
      alt: "Pair of glossy deep-red sweet cherries with vibrant green stems against dark textured slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/cherry/card.png",
      alt: "Cherry - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/cherry/macro-break.png",
      alt: "Extreme macro photograph of sliced dark cherry showing glistening wine-red flesh texture and central pit",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Drupe Mesocarp · The Cyanidin Matrix",
      captionText:
        "The deep burgundy-black flesh contains concentrated cyanidin-3-rutinoside and cyanidin-3-glucoside flavonoids, paired with natural phytomelatonin that modulates circadian rhythms.",
    },
  },

  origin: {
    region: "Anatolia, Pontus & Transcaucasia (Black Sea Basin)",
    coordinates: [41.00, 39.72],
    description:
      "Native to the temperate woodlands between the Black and Caspian Seas in modern Turkey and the southern Caucasus. Recorded in classical Greek literature by Theophrastus in 300 BCE. Roman general Lucullus famously brought cultivated cherry varieties from Cerasus (modern Giresun, Turkey) to Rome in 74 BCE, from which the botanical name 'Cerasus' and word 'cherry' descend.",
    grownTodayRegions: [
      "Turkey (Aegean & Central Anatolia)",
      "United States (Washington, California, Oregon)",
      "Chile",
      "China",
      "Uzbekistan",
      "Iran",
      "India (Jammu & Kashmir, Himachal Pradesh)",
      "Italy",
    ],
    sourceIds: ["usda-fdc-cherry"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [5, 6, 7, 8],
      peakMonths: [6, 7],
      label: "Early Summer Harvest (June – July)",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      regionId: "southern-temperate",
      hemisphere: "south",
      months: [11, 12, 1, 2],
      peakMonths: [12, 1],
      label: "Southern Summer Harvest (Chile & Argentina)",
      sourceIds: ["usda-fdc-cherry"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 63,
      unit: "kcal",
      sourceIds: ["usda-fdc-cherry"],
    },
    nutrients: {
      protein: {
        amount: 1.06,
        unit: "g",
        sourceIds: ["usda-fdc-cherry"],
      },
      totalFat: {
        amount: 0.2,
        unit: "g",
        sourceIds: ["usda-fdc-cherry"],
      },
      carbohydrates: {
        amount: 16.01,
        unit: "g",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-cherry"],
      },
      fiber: {
        amount: 2.1,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-cherry"],
      },
      totalSugars: {
        amount: 12.82,
        unit: "g",
        sourceIds: ["usda-fdc-cherry"],
      },
      potassium: {
        amount: 222,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-cherry"],
      },
      vitaminC: {
        amount: 7.0,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-cherry"],
      },
      copper: {
        amount: 0.06,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-cherry"],
      },
      magnesium: {
        amount: 11,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-cherry"],
      },
      calcium: {
        amount: 13,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-cherry"],
      },
    },
    waterContentPercent: 82.25,
    micronutrientSignatures: [
      {
        name: "Cyanidin Anthocyanins",
        amount: 80,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Dense red polyphenol pigments that inhibit cyclooxygenase (COX) inflammatory pathways",
      },
      {
        name: "Natural Phytomelatonin",
        amount: 13.5,
        unit: "ng",
        dailyValuePercent: 0,
        description: "Endogenous indoleamine supporting healthy circadian sleep-wake cycles and nocturnal cellular repair",
      },
      {
        name: "Bioavailable Potassium",
        amount: 222,
        unit: "mg",
        dailyValuePercent: 5,
        description: "Essential intracellular electrolyte promoting vascular elasticity and regular cardiac tone",
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
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Wine-dark snap.",
    accent: "Almond stone sweetness.",
    descriptors: [
      "Wine-Dark",
      "Crisp Snap",
      "Almond",
      "Succulent",
      "Sweet-Tart"
    ],
    notes:
      "A firm, plump cherry with a bright emerald green stem indicates maximum freshness; stems turn brown and dry as the fruit loses moisture post-harvest.",
  },

  benefitTags: [
    {
      label: "Joint Comfort & Uric Balance",
      phenomenon: "cyanidin anthocyanin activity",
      description:
        "Anthocyanins in sweet and tart cherries have been extensively studied for supporting healthy uric acid metabolism and post-exercise joint comfort.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-cherry"],
      icon: "activity",
    },
    {
      label: "Circadian Rhythm Support",
      phenomenon: "phytomelatonin bioavailability",
      description:
        "One of the few natural dietary sources of bioavailable melatonin, assisting normal evening relaxation and restorative sleep cycles.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-cherry"],
      icon: "moon",
    },
    {
      label: "Cardiovascular Vascular Tone",
      phenomenon: "potassium and polyphenol synergy",
      description:
        "Supplying 222mg of potassium per 100g, supporting normal blood pressure parameters and endothelial health.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-cherry"],
      icon: "heart",
      metric: "222 mg / 100g",
    },
  ],

  heroStats: [
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 222,
      unit: "mg",
      referenceContext: "5% Daily Value",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      nutrientId: "fiber",
      label: "Fiber",
      value: 2.1,
      unit: "g",
      referenceContext: "7% Daily Value",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 63,
      unit: "kcal",
      referenceContext: "crystalline stone fruit energy",
      sourceIds: ["usda-fdc-cherry"],
    },
  ],

  varieties: [
    {
      name: "Bing",
      description: "The historic American commercial benchmark: large, dark mahogany-red fruit with very firm, crunchy, intensely sweet purplish flesh.",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      name: "Rainier",
      description: "Premier gourmet bicolor cultivar: golden-yellow skin with a bright red blush, delicate clear flesh, and exceptionally high brix sweetness.",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      name: "Stella",
      description: "Pioneering self-fertile cultivar developed in British Columbia: dark heart-shaped fruit with tender, juicy sweet flesh and reliable cropping.",
      sourceIds: ["usda-fdc-cherry"],
    },
  ],

  funFacts: [
    {
      text: "The town of Giresun on Turkey's Black Sea coast was originally named 'Kerasous' by ancient Greeks, lending its name to the Latin 'Cerasus' and English 'Cherry'.",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      text: "A mature sweet cherry tree can produce over 7,000 cherries during a single summer harvest season.",
      sourceIds: ["usda-fdc-cherry"],
    },
    {
      text: "The delicate faint almond aroma perceived when chewing near a cherry pit comes from benzaldehyde, a natural organic compound shared with sweet almonds.",
      sourceIds: ["usda-fdc-cherry"],
    },
  ],

  similarFruitIds: ["peach", "grape", "plum"],
  sourceIds: ["usda-fdc-cherry", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
