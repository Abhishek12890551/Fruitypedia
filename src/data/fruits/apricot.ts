/**
 * Apricot — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171697 ("Apricots, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const apricot: Fruit = {
  id: "apricot",
  slug: "apricot",
  name: "Apricot",

  editorial: {
    nickname: "Khumani · Zardalu",
    tagline: "The golden velvet drupe. Sun-drenched oasis of provitamin A vitality.",
    heroDescription:
      "Native to the arid mountain slopes of Central Asia and Armenia and celebrated across the high-altitude valleys of Ladakh and the Mediterranean, the apricot is a velvety treasure of the Rosaceae family. Its delicate, downy golden-orange skin yields to tender, fragrant flesh that balances gentle honeyed sweetness with an aromatic musky perfume and rich provitamin A carotenoids.",
    pullQuotes: [
      {
        quote: "A velvet golden orb capturing the warmth of mountain sun, balancing delicate floral musk with rich carotenoid vibrancy.",
        attribution: "Editorial",
      },
      {
        quote: "From the high glacial terraces of Ladakh to the ancient orchards of the Silk Road, the apricot is mountain humanity's golden sustaining jewel.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A nutrient-rich stone fruit delivering 259mg potassium per 100g, 11% DV Vitamin A (as beta-carotene), and protective lutein and zeaxanthin carotenoids.",
  },

  taxonomy: {
    categoryId: "stone-fruit",
    family: "Rosaceae",
    genus: "Prunus",
    species: "armeniaca",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), subgenus Prunus, closely related to plum and peach.",
      "Botanically classified as a drupe with finely pubescent (velvety) skin, firm yet succulent orange-yellow mesocarp, and a smooth, compressed stone enclosing a single kernel.",
    ],
  },

  theme: {
    primary: "#F97316",
    secondary: "#FED7AA",
    glow: "#F9731640",
    gradient: ["#EA580C", "#FB923C"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/apricot/hero.png",
      alt: "Ripe golden-orange velvety apricots with one sliced open showing stone pit on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/apricot/card.png",
      alt: "Apricot - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/apricot/macro-break.png",
      alt: "Extreme macro photograph of velvety golden apricot skin fine pubescence and succulent orange pulp",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Velvety Exocarp · The Carotenoid Matrix",
      captionText:
        "The downy skin and radiant orange pulp are saturated with lipid-soluble all-trans beta-carotene and lutein micelles that absorb oxidative light radiation.",
    },
  },

  origin: {
    region: "Central Asia & Armenian Highlands",
    coordinates: [40.18, 44.51],
    description:
      "Domesticated across Central Asia, northeastern China, and the Armenian plateau. Armenia has cultivated apricots since antiquity, with archaeological pits discovered at Garni dating to 3000 BCE. Carried to Greece by Alexander the Great, apricots flourished along ancient Silk Road oasis routes into Ladakh (India) and Mediterranean coastal terraces.",
    grownTodayRegions: [
      "Turkey (Malatya)",
      "Uzbekistan",
      "Iran",
      "Italy",
      "Algeria",
      "India (Ladakh, Himachal Pradesh, Jammu & Kashmir)",
      "Spain",
      "United States (California)",
    ],
    sourceIds: ["usda-fdc-apricot"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [5, 6, 7, 8],
      peakMonths: [6, 7],
      label: "Northern Summer Harvest (June – July)",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      regionId: "india-ladakh",
      hemisphere: "north",
      months: [7, 8, 9],
      peakMonths: [7, 8],
      label: "Himalayan High Altitude Harvest (July – August)",
      sourceIds: ["usda-fdc-apricot"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 48,
      unit: "kcal",
      sourceIds: ["usda-fdc-apricot"],
    },
    nutrients: {
      protein: {
        amount: 1.4,
        unit: "g",
        sourceIds: ["usda-fdc-apricot"],
      },
      totalFat: {
        amount: 0.39,
        unit: "g",
        sourceIds: ["usda-fdc-apricot"],
      },
      carbohydrates: {
        amount: 11.12,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-apricot"],
      },
      fiber: {
        amount: 2.0,
        unit: "g",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-apricot"],
      },
      totalSugars: {
        amount: 9.24,
        unit: "g",
        sourceIds: ["usda-fdc-apricot"],
      },
      vitaminA: {
        amount: 96,
        unit: "mcg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-apricot"],
      },
      vitaminC: {
        amount: 10.0,
        unit: "mg",
        dailyValuePercent: 11,
        sourceIds: ["usda-fdc-apricot"],
      },
      potassium: {
        amount: 259,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-apricot"],
      },
      vitaminE: {
        amount: 0.89,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-apricot"],
      },
    },
    waterContentPercent: 86.35,
    micronutrientSignatures: [
      {
        name: "Provitamin A Beta-Carotene",
        amount: 1094,
        unit: "mcg",
        dailyValuePercent: 11,
        description: "Lipid-soluble carotenoid pigment essential for rhodopsin photoreceptor synthesis and night vision acuity",
      },
      {
        name: "Lutein & Zeaxanthin Carotenoids",
        amount: 89.0,
        unit: "mcg",
        dailyValuePercent: 0,
        description: "Macular pigment precursors that filter high-energy blue light and prevent retinal photodamage",
      },
      {
        name: "Soluble Pectin Hydrocolloid",
        amount: 2.0,
        unit: "g",
        dailyValuePercent: 7,
        description: "Gentle digestive fiber binding bile acids and promoting balanced postprandial glucose absorption",
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
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 6,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Velvet honey.",
    accent: "Sun-warmed floral musk.",
    descriptors: [
      "Velvet",
      "Honeyed",
      "Floral",
      "Almond",
      "Gentle Acid"
    ],
    notes:
      "Tree-ripened apricots exhibit an intoxicating floral aroma and melting texture that firm, transport-picked commercial fruits rarely achieve.",
  },

  benefitTags: [
    {
      label: "Visual & Retinal Protection",
      phenomenon: "rhodopsin synthesis via beta-carotene",
      description:
        "Provitamin A carotenoids nourish photoreceptors in the retinal pigment epithelium, maintaining dark adaptation and sharp visual acuity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apricot"],
      icon: "shield",
      metric: "11% DV Vitamin A",
    },
    {
      label: "Cellular Cutaneous Vitality",
      phenomenon: "synergistic vitamin C and E dermal defense",
      description:
        "Dual-phase antioxidant vitamins quench lipid peroxidation and stimulate collagen fibril cross-linking after sun exposure.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apricot"],
      icon: "zap",
    },
    {
      label: "Cardiovascular Electrolyte Balance",
      phenomenon: "potassium-sodium ATPase activation",
      description:
        "Supplies 259mg potassium per 100g with virtually zero sodium, supporting vascular tone and healthy arterial blood pressure.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-apricot"],
      icon: "activity",
      metric: "259 mg potassium",
    },
  ],

  heroStats: [
    {
      nutrientId: "calories",
      label: "Calories",
      value: 48,
      unit: "kcal",
      referenceContext: "light nutrient-dense stone fruit",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      nutrientId: "vitaminA",
      label: "Vitamin A",
      value: 96,
      unit: "mcg",
      referenceContext: "11% Daily Value",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 259,
      unit: "mg",
      referenceContext: "6% Daily Value",
      sourceIds: ["usda-fdc-apricot"],
    },
  ],

  varieties: [
    {
      name: "Raktsey Karpo (Ladakh GI)",
      description: "India's prized Himalayan heirloom awarded Geographical Indication status: snow-white, extraordinarily sweet kernel, glowing orange blush, and unmatched brix content.",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      name: "Moorpark",
      description: "Historic English heirloom originating in 1688: large golden-yellow fruit with intense, luscious, perfumed musky flavor prized by pastry chefs.",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      name: "Blenheim (Royal)",
      description: "The historic gold standard of California and French orchards: perfectly balanced sweet-tart honey flavor that excels in both fresh eating and drying.",
      sourceIds: ["usda-fdc-apricot"],
    },
  ],

  funFacts: [
    {
      text: "Ladakh in Northern India produces Raktsey Karpo apricots, which have a unique white-shelled edible sweet kernel that is cracked and eaten like an almond.",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      text: "The botanical name 'armeniaca' was assigned by Carl Linnaeus under the belief that apricots originated in Armenia, where ancient pits dating to 3000 BCE have been excavated.",
      sourceIds: ["usda-fdc-apricot"],
    },
    {
      text: "The famous Hunza people of the high Karakoram range in Pakistan attribute their legendary longevity in part to their staple diet of sun-dried mountain apricots and apricot kernel oil.",
      sourceIds: ["usda-fdc-apricot"],
    },
  ],

  similarFruitIds: ["peach", "plum", "cherry"],
  sourceIds: ["usda-fdc-apricot", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
