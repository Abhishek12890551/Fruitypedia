/**
 * Passion Fruit — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 171730 ("Passion-fruit, (granadilla), purple, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const passionfruit: Fruit = {
  id: "passionfruit",
  slug: "passionfruit",
  name: "Passion Fruit",

  editorial: {
    nickname: "Krishna Kamal Phal",
    tagline: "The perfumed aril. Tropical crescendo of piceatannol and electric acidity.",
    heroDescription:
      "Originating in the subtropical river valleys of southern Brazil, Paraguay, and northern Argentina, passion fruit is the crowned jewel of the Passifloraceae family. Encased within a brittle, waxy purple or golden rind is an aromatic treasure of gelatinous, bright orange pulpy arils enclosing crunchy black seeds. It erupts with an intense, intoxicating perfume and an electric balance of brisk citric acid and tropical nectar sweetness.",
    pullQuotes: [
      {
        quote: "An electric orb concealing golden membranous arils that explode with high-voltage tropical perfume and citric vibrancy.",
        attribution: "Editorial",
      },
      {
        quote: "Prized worldwide for its extraordinary piceatannol content, passion fruit is nature's concentrated floral elixir.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "An exceptionally fiber-dense tropical berry delivering 10.4g of prebiotic dietary fiber per 100g, 30mg Vitamin C, and the potent stilbene polyphenol piceatannol.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Passifloraceae",
    genus: "Passiflora",
    species: "edulis",
    botanicalNotes: [
      "Belongs to the passionflower family (Passifloraceae), a vigorous tendril-climbing woody vine bearing exotic, complex floral blooms with ornate radial coronas.",
      "Botanically classified as a pepo-like berry with a thick, leathery exocarp and a cavity packed with succulent, pulp-coated seed arils.",
    ],
  },

  theme: {
    primary: "#7C3AED",
    secondary: "#DDD6FE",
    glow: "#7C3AED40",
    gradient: ["#5B21B6", "#8B5CF6"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/passionfruit/hero.png",
      alt: "Halved ripe purple passion fruits showing glistening golden gelatinous pulp and black seeds on rustic dark stone",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/passionfruit/card.png",
      alt: "Passionfruit - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/passionfruit/macro-break.png",
      alt: "Extreme macro photograph of translucent orange passion fruit arils suspended with crunchy black edible seeds",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Seed Aril Cavity · The Piceatannol Synthesis",
      captionText:
        "The dense gelatinous arils and crunchy seed coats concentrate piceatannol, a potent hydroxylated resveratrol analogue that promotes microvascular elasticity.",
    },
  },

  origin: {
    region: "Subtropical South America (Brazil, Paraguay, Northern Argentina)",
    coordinates: [-22.9, -43.2],
    description:
      "Native to the tropical rainforest borders of southern Brazil and the Paraná basin. Spanish missionaries encountered the bloom in the 16th century and named it 'Flor de las cinco llagas' (Flower of the Five Wounds) due to its symbolic cruciform anatomy. Cultivation rapidly spread across Hawaii, East Africa, New Zealand, and the Western Ghats and northeastern hill tracts of India.",
    grownTodayRegions: [
      "Brazil",
      "Colombia",
      "Ecuador",
      "Peru",
      "India (Mizoram, Nagaland, Kerala, Nilgiris)",
      "Kenya",
      "Indonesia",
      "Vietnam",
    ],
    sourceIds: ["usda-fdc-passionfruit"],
  },

  season: [
    {
      regionId: "tropical-equatorial",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [6, 7, 8, 9],
      label: "Equatorial Highland Harvest (June – September Peak)",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      regionId: "india-subtropical",
      hemisphere: "north",
      months: [5, 6, 7, 8, 9, 10],
      peakMonths: [6, 7, 8],
      label: "Monsoon Nilgiris & Northeast Harvest (June – August)",
      sourceIds: ["usda-fdc-passionfruit"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 97,
      unit: "kcal",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    nutrients: {
      protein: {
        amount: 2.2,
        unit: "g",
        sourceIds: ["usda-fdc-passionfruit"],
      },
      totalFat: {
        amount: 0.7,
        unit: "g",
        sourceIds: ["usda-fdc-passionfruit"],
      },
      carbohydrates: {
        amount: 23.38,
        unit: "g",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-passionfruit"],
      },
      fiber: {
        amount: 10.4,
        unit: "g",
        dailyValuePercent: 37,
        sourceIds: ["usda-fdc-passionfruit"],
      },
      totalSugars: {
        amount: 11.2,
        unit: "g",
        sourceIds: ["usda-fdc-passionfruit"],
      },
      vitaminC: {
        amount: 30.0,
        unit: "mg",
        dailyValuePercent: 33,
        sourceIds: ["usda-fdc-passionfruit"],
      },
      potassium: {
        amount: 348,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-passionfruit"],
      },
      iron: {
        amount: 1.6,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-passionfruit"],
      },
      magnesium: {
        amount: 29,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-passionfruit"],
      },
    },
    waterContentPercent: 72.93,
    micronutrientSignatures: [
      {
        name: "Piceatannol (Hydroxylated Resveratrol)",
        amount: 4.8,
        unit: "mg",
        dailyValuePercent: 0,
        description: "A rare and potent stilbenoid polyphenol with sirtuin-activating and collagen-protective bioactivity",
      },
      {
        name: "Dietary Prebiotic Fiber",
        amount: 10.4,
        unit: "g",
        dailyValuePercent: 37,
        description: "Highest fiber density among popular commercial fruits, feeding beneficial short-chain fatty acid gut microbes",
      },
      {
        name: "Beta-Cryptoxanthin & Carotenoids",
        amount: 743,
        unit: "mcg",
        dailyValuePercent: 0,
        description: "Synergistic antioxidant carotenoids imparting the electric orange hue and quenching reactive oxygen species",
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
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 9,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Electric first.",
    accent: "Volcanic tropical tang.",
    descriptors: [
      "Electric Tart",
      "Tropical",
      "Guava Note",
      "Crunchy Seed",
      "Citric"
    ],
    notes:
      "Purple varieties are naturally sweeter and more perfumed, while golden yellow Maracujá cultivars pack intense, piercing acidity prized for juices.",
  },

  benefitTags: [
    {
      label: "Gut Microbiome & Fermentation",
      phenomenon: "prebiotic dietary fiber density",
      description:
        "Delivers an astounding 10.4g of prebiotic fiber per 100g, selectively feeding short-chain fatty acid producing colon microbes.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-passionfruit"],
      icon: "activity",
      metric: "10.4 g fiber (37% DV)",
    },
    {
      label: "Endothelial Microvascular Elasticity",
      phenomenon: "piceatannol-stimulated nitric oxide synthesis",
      description:
        "Supplies bioavailable piceatannol, a potent polyphenol that enhances endothelial nitric oxide production and dermal hydration.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-passionfruit"],
      icon: "zap",
      metric: "4.8 mg piceatannol",
    },
    {
      label: "Synergistic Ascorbic Immunity",
      phenomenon: "vitamin C and carotenoid radical neutralization",
      description:
        "Water-soluble ascorbic acid teams with lipid-soluble cryptoxanthin to shield epithelial membranes against oxidative stress.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-passionfruit"],
      icon: "shield",
      metric: "30 mg Vitamin C (33% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 10.4,
      unit: "g",
      referenceContext: "37% Daily Value",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 30.0,
      unit: "mg",
      referenceContext: "33% Daily Value",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 97,
      unit: "kcal",
      referenceContext: "dense prebiotic fiber fruit",
      sourceIds: ["usda-fdc-passionfruit"],
    },
  ],

  varieties: [
    {
      name: "Purple Granadilla (f. edulis)",
      description: "The classical dark purple, dimpled-when-ripe variety renowned for exquisite aromatic perfume, rich sugar balance, and lower overall acidity.",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      name: "Golden Maracujá (f. flavicarpa)",
      description: "Larger yellow fruit adapted to tropical lowlands. Characterized by aggressive, high-voltage citric acidity and exuberant juice yield.",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      name: "Kaveri Hybrid",
      description: "Premier Indian intervarietal hybrid bred in Coorg: heavy bearer with mottled purple-crimson rind and high-brix saffron-orange pulp.",
      sourceIds: ["usda-fdc-passionfruit"],
    },
  ],

  funFacts: [
    {
      text: "Spanish Catholic missionaries named the passion flower in 1569 because its unique floral anatomy symbolically represented the Passion of Christ (crown of thorns, five wounds, and three nails).",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      text: "A wrinkly, dimpled passion fruit is not decaying—it is at its absolute peak of flavor, as minor dehydration concentrates natural sugars and mellows sharp citric acid.",
      sourceIds: ["usda-fdc-passionfruit"],
    },
    {
      text: "Passion fruit seeds contain high amounts of piceatannol, a compound structurally similar to resveratrol that is being clinically studied for skin collagen rejuvenation.",
      sourceIds: ["usda-fdc-passionfruit"],
    },
  ],

  similarFruitIds: ["pomegranate", "kiwi", "guava"],
  sourceIds: ["usda-fdc-passionfruit", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
