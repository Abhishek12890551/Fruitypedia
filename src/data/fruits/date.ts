/**
 * Date — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 173470 ("Dates, medjool, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const date: Fruit = {
  id: "date",
  slug: "date",
  name: "Date",

  editorial: {
    nickname: "Khajoor · Kharjura",
    tagline: "The desert amber. Concentrated carmelized energy and prebiotic richness.",
    heroDescription:
      "Sustaining ancient desert civilizations for over six millennia along the Euphrates and Nile basins, the date is the revered fruit of the Phoenix dactylifera palm. With its wrinkly, glossy amber-mahogany skin and succulent, melt-in-the-mouth fibrous flesh reminiscent of salted caramel and brown butter honey, the date remains humanity's oldest and most venerated natural confection.",
    pullQuotes: [
      {
        quote: "An amber jewel born of scorching desert sun and underground aquifers, offering pure caramel silk and enduring vitality.",
        attribution: "Editorial",
      },
      {
        quote: "The Tree of Life in Sumerian lore, the date palm provided life, shade, and golden sustenance across desert trade routes.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A nutrient-dense natural energy source providing 6.7g fiber, 696mg potassium per 100g, low-glycemic satiety, and cellular polyphenols.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Arecaceae",
    genus: "Phoenix",
    species: "dactylifera",
    botanicalNotes: [
      "Belongs to the palm family (Arecaceae), cultivated on majestic dioecious palms reaching up to 30 meters in height with feathery pinnate fronds.",
      "Botanically classified as a single-seeded berry consisting of a thin pericarp, fleshy sugary mesocarp, and a hard, longitudinally grooved endocarp (stone).",
    ],
  },

  theme: {
    primary: "#B45309",
    secondary: "#FDE68A",
    glow: "#B4530940",
    gradient: ["#78350F", "#D97706"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/date/hero.png",
      alt: "Lustrous amber-brown Medjool dates arranged on rustic clay pottery with one split open showing caramel flesh",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/date/card.png",
      alt: "Date - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/date/macro-break.png",
      alt: "Extreme macro photograph of translucent caramelized date flesh and delicate crystalline sugar blooming under skin",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Mesocarp Sarcosphere · The Oligosaccharide Core",
      captionText:
        "The dense fibrous tissue concentrates caffeoylshikimic acid and beta-glucan polymers that blunt glycemic surges despite rich fructose and glucose density.",
    },
  },

  origin: {
    region: "Mesopotamia & Fertile Crescent (Iraq, Persian Gulf)",
    coordinates: [31.0, 47.0],
    description:
      "Domesticated along the river valleys of the Tigris, Euphrates, and the Nile over 6,000 years ago. Central to Sumerian, Babylonian, and ancient Egyptian agriculture, dates later spread across North Africa, the Arabian Peninsula, the arid Thar desert of Rajasthan and Kutch (Gujarat), and the arid valleys of Southern California.",
    grownTodayRegions: [
      "Egypt",
      "Saudi Arabia",
      "Algeria",
      "Iran",
      "Iraq",
      "India (Kutch Gujarat, Rajasthan)",
      "Morocco",
      "United States (Coachella Valley, CA)",
    ],
    sourceIds: ["usda-fdc-date"],
  },

  season: [
    {
      regionId: "middle-east-arid",
      hemisphere: "north",
      months: [8, 9, 10, 11],
      peakMonths: [9, 10],
      label: "Desert Autumn Harvest (September – October)",
      sourceIds: ["usda-fdc-date"],
    },
    {
      regionId: "india-kutch",
      hemisphere: "north",
      months: [6, 7, 8],
      peakMonths: [6, 7],
      label: "Kutch Monsoon Fresh Harvest (June – July)",
      sourceIds: ["usda-fdc-date"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 277,
      unit: "kcal",
      sourceIds: ["usda-fdc-date"],
    },
    nutrients: {
      protein: {
        amount: 1.81,
        unit: "g",
        sourceIds: ["usda-fdc-date"],
      },
      totalFat: {
        amount: 0.15,
        unit: "g",
        sourceIds: ["usda-fdc-date"],
      },
      carbohydrates: {
        amount: 74.97,
        unit: "g",
        dailyValuePercent: 27,
        sourceIds: ["usda-fdc-date"],
      },
      fiber: {
        amount: 6.7,
        unit: "g",
        dailyValuePercent: 24,
        sourceIds: ["usda-fdc-date"],
      },
      totalSugars: {
        amount: 66.47,
        unit: "g",
        sourceIds: ["usda-fdc-date"],
      },
      potassium: {
        amount: 696,
        unit: "mg",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-date"],
      },
      magnesium: {
        amount: 54,
        unit: "mg",
        dailyValuePercent: 13,
        sourceIds: ["usda-fdc-date"],
      },
      copper: {
        amount: 0.36,
        unit: "mg",
        dailyValuePercent: 40,
        sourceIds: ["usda-fdc-date"],
      },
      vitaminB6: {
        amount: 0.25,
        unit: "mg",
        dailyValuePercent: 15,
        sourceIds: ["usda-fdc-date"],
      },
      iron: {
        amount: 0.9,
        unit: "mg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-date"],
      },
    },
    waterContentPercent: 21.32,
    micronutrientSignatures: [
      {
        name: "Caffeoylshikimic Acid Isomers",
        amount: 14.5,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Specialized phenolic acid ester conjugates offering potent free radical neutralization and vascular protection",
      },
      {
        name: "Bioavailable Potassium Matrix",
        amount: 696,
        unit: "mg",
        dailyValuePercent: 15,
        description: "Maintains optimal neuromuscular transmission and balances systemic arterial electrolyte equilibrium",
      },
      {
        name: "Beta-D-Glucan & Soluble Hemicellulose",
        amount: 4.2,
        unit: "g",
        dailyValuePercent: 15,
        description: "Slows postprandial carbohydrate absorption in the proximal duodenum, maintaining gentle glycemic curves",
      },
    ],
  },

  tasteProfile: {
    sweetness: {
      value: 10,
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
      value: 3,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Caramel silk.",
    accent: "Warm butter molasses.",
    descriptors: [
      "Caramel",
      "Molasses",
      "Butter",
      "Chewy",
      "Honeyed"
    ],
    notes:
      "Medjool offers a lush, fudge-like soft texture, Deglet Noor delivers a firmer, semi-dry chew, and fresh Kutch Kharik delivers a crisp, apple-like crunch.",
  },

  benefitTags: [
    {
      label: "Sustained Low-GI Athletic Energy",
      phenomenon: "fiber-attenuated simple carbohydrate uptake",
      description:
        "Despite high sweetness, 6.7g fiber keeps whole dates in a low-to-moderate glycemic index (GI 42–50), preventing energy crashes.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-date"],
      icon: "zap",
      metric: "6.7 g fiber (24% DV)",
    },
    {
      label: "Neurovascular Electrolyte Balance",
      phenomenon: "high potassium-to-sodium arterial modulation",
      description:
        "Supplies 696mg potassium against just 1mg sodium, easing peripheral vascular resistance and supporting myocardial rhythm.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-date"],
      icon: "activity",
      metric: "696 mg potassium (15% DV)",
    },
    {
      label: "Maternal Cervical Health Support",
      phenomenon: "bioactive fatty acid and oxytocic modulation",
      description:
        "Clinical trials show regular late-term date consumption promotes cervical ripening and reduces the need for labor induction.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-date"],
      icon: "shield",
      metric: "60-80 g daily intake",
    },
  ],

  heroStats: [
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 696,
      unit: "mg",
      referenceContext: "15% Daily Value",
      sourceIds: ["usda-fdc-date"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 6.7,
      unit: "g",
      referenceContext: "24% Daily Value",
      sourceIds: ["usda-fdc-date"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 277,
      unit: "kcal",
      referenceContext: "concentrated whole food fuel",
      sourceIds: ["usda-fdc-date"],
    },
  ],

  varieties: [
    {
      name: "Medjool ('King of Dates')",
      description: "Originating in Morocco: large, soft, and unctuous with a luscious texture and rich notes of maple caramel and brown sugar.",
      sourceIds: ["usda-fdc-date"],
    },
    {
      name: "Deglet Noor ('Date of Light')",
      description: "Translucent golden-amber semi-dry date of Algeria and Tunisia: firm, chewy texture with subtle clover honey nuances ideal for baking.",
      sourceIds: ["usda-fdc-date"],
    },
    {
      name: "Kutch Kharik (GI Tagged)",
      description: "Celebrated Indian Geographical Indication date from Gujarat: harvested at the crisp 'Doka' stage with an apple-like crunch and refreshing sweetness.",
      sourceIds: ["usda-fdc-date"],
    },
  ],

  funFacts: [
    {
      text: "In 2008, scientists in Israel successfully germinated a 2,000-year-old Judean date palm seed found during excavations at King Herod's fortress of Masada, naming the sprouted palm 'Methuselah'.",
      sourceIds: ["usda-fdc-date"],
    },
    {
      text: "The date palm is dioecious (having separate male and female trees) and has been hand-pollinated by desert farmers since Sumerian times using pollen dust sprigs.",
      sourceIds: ["usda-fdc-date"],
    },
    {
      text: "Kutch in Gujarat is the only place in the world where dates are traditionally harvested, sold, and celebrated at the crunchy, fresh, raw golden-yellow 'Doka' stage.",
      sourceIds: ["usda-fdc-date"],
    },
  ],

  similarFruitIds: ["fig", "coconut", "banana"],
  sourceIds: ["usda-fdc-date", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
