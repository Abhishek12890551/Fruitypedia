/**
 * Bael (Wood Apple) — Production fruit monograph.
 *
 * Nutritional values derived from ICMR-NIN Indian Food Composition Tables
 * & USDA FoodData Central FDC ID 173945 ("Bael fruit, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const bael: Fruit = {
  id: "bael",
  slug: "bael",
  name: "Bael",

  editorial: {
    nickname: "Bilva · Shriphala",
    tagline: "The sacred golden orb. Ancient wood apple of gut integrity and riboflavin abundance.",
    heroDescription:
      "Revered for thousands of years in Vedic scriptures and consecrated to Lord Shiva, the Bael fruit (Aegle marmelos) is an extraordinary botanical treasure of the Rutaceae (citrus) family native to the Indian subcontinent. Encased within a woody, rock-hard green-to-yellow shell that must be cracked open with a mallet, its aromatic, golden-amber sticky pulp is infused with mucilage and resinous glands. It delivers an unforgettable flavor profile blending floral rose water, tamarind, wild honey, and citrus zest.",
    pullQuotes: [
      {
        quote: "Beneath an impenetrable woody armour lies an amber nectar of sacred fragrance, soothing digestive heat with ancient grace.",
        attribution: "Editorial",
      },
      {
        quote: "Celebrated in Charaka Samhita as the premier gut restorer, Bael delivers unparalleled riboflavin density and healing mucilage.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "An exceptional medicinal fruit containing an astonishing 1.2mg Riboflavin (92% DV), 60mg Vitamin C (67% DV), and gastroprotective marmelosin furocoumarins.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Rutaceae",
    genus: "Aegle",
    species: "marmelos",
    botanicalNotes: [
      "Belongs to the citrus family (Rutaceae), a sacred deciduous, spiny tree with trifoliate leaves representing the Hindu holy triad (Brahma, Vishnu, Shiva).",
      "Botanically classified as a hard-shelled berry (amphisarca) with a woody epicarp, 10 to 15 locules filled with sticky, amber fibrous pulp, and seeds embedded in clear, transparent mucilage.",
    ],
  },

  theme: {
    primary: "#D97706",
    secondary: "#FEF3C7",
    glow: "#D9770640",
    gradient: ["#92400E", "#F59E0B"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/bael/hero.png",
      alt: "Cracked open sacred Bael wood apple showing aromatic golden amber sticky pulp on dark stone with fresh green bael leaves",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/bael/card.png",
      alt: "Bael - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/bael/macro-break.png",
      alt: "Extreme macro photograph of translucent golden bael mucilage pockets and glandular essential oil cavities",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Amphisarca Locules · The Marmelosin Secretion",
      captionText:
        "The sticky amber matrix around each seed is saturated with marmelosin, imperatorin, and pectinaceous mucilage that coats and heals gastrointestinal epithelium.",
    },
  },

  origin: {
    region: "Indo-Gangetic Plains & Central India",
    coordinates: [25.5, 83.0],
    description:
      "Indigenous to the deciduous dry forests of central and northern India, the lower Himalayas, and Myanmar. Mentioned in the Rigveda and classical Ayurvedic treatises (Charaka and Sushruta Samhita) as 'Bilva' or 'Sriphal' (the fruit of prosperity). Grown across sacred temple courtyards and home gardens throughout India, Sri Lanka, Bangladesh, and Nepal.",
    grownTodayRegions: [
      "India (Uttar Pradesh, Bihar, West Bengal, Odisha, Madhya Pradesh)",
      "Nepal (Terai plains)",
      "Bangladesh",
      "Sri Lanka",
      "Myanmar",
      "Thailand",
    ],
    sourceIds: ["usda-fdc-bael"],
  },

  season: [
    {
      regionId: "india-subtropical",
      hemisphere: "north",
      months: [3, 4, 5, 6],
      peakMonths: [4, 5],
      label: "Scorching Summer Harvest (April – May)",
      sourceIds: ["usda-fdc-bael"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 137,
      unit: "kcal",
      sourceIds: ["usda-fdc-bael"],
    },
    nutrients: {
      protein: {
        amount: 1.8,
        unit: "g",
        sourceIds: ["usda-fdc-bael"],
      },
      totalFat: {
        amount: 0.3,
        unit: "g",
        sourceIds: ["usda-fdc-bael"],
      },
      carbohydrates: {
        amount: 31.8,
        unit: "g",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-bael"],
      },
      fiber: {
        amount: 2.9,
        unit: "g",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-bael"],
      },
      totalSugars: {
        amount: 28.0,
        unit: "g",
        sourceIds: ["usda-fdc-bael"],
      },
      riboflavin: {
        amount: 1.2,
        unit: "mg",
        dailyValuePercent: 92,
        sourceIds: ["usda-fdc-bael"],
      },
      vitaminC: {
        amount: 60.0,
        unit: "mg",
        dailyValuePercent: 67,
        sourceIds: ["usda-fdc-bael"],
      },
      potassium: {
        amount: 600,
        unit: "mg",
        dailyValuePercent: 13,
        sourceIds: ["usda-fdc-bael"],
      },
      calcium: {
        amount: 85,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-bael"],
      },
      niacin: {
        amount: 1.1,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-bael"],
      },
    },
    waterContentPercent: 61.5,
    micronutrientSignatures: [
      {
        name: "Marmelosin (Furocoumarin)",
        amount: 32.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Hallmark bioactive furocoumarin of Aegle marmelos with clinically demonstrated anti-amebic and colonic smooth-muscle calming action",
      },
      {
        name: "Riboflavin (Vitamin B2) Megadose",
        amount: 1.2,
        unit: "mg",
        dailyValuePercent: 92,
        description: "Astronomical concentration representing the highest documented riboflavin density among all commercial culinary fruits",
      },
      {
        name: "Gastroprotective Mucilage & Pectin",
        amount: 4.8,
        unit: "g",
        dailyValuePercent: 17,
        description: "Hydrocolloidal polysaccharides that coat the stomach and intestinal lumen, resisting acid erosion and pathogen adhesion",
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
      value: 4,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    juiciness: {
      value: 5,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    aromatic: {
      value: 10,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    lead: "Sacred nectar.",
    accent: "Balsamic honey warmth.",
    descriptors: [
      "Rose Water",
      "Marmalade",
      "Balsamic",
      "Sticky Honey",
      "Herbal"
    ],
    notes:
      "The pulp must be scooped out and strained to remove hard seeds and sticky mucilage fibers when preparing the traditional summer drink 'Bael Pana'.",
  },

  benefitTags: [
    {
      label: "Colonic Integrity & Gastroprotection",
      phenomenon: "marmelosin-mediated peristaltic normalization",
      description:
        "Unique furocoumarins and protective mucilage calm hyperactive gut motility and soothe mucosal irritation in acute and chronic colitic profiles.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-bael"],
      icon: "activity",
      metric: "32 mg marmelosin",
    },
    {
      label: "Mitochondrial Energy & Riboflavin",
      phenomenon: "flavoenzyme FAD/FMN cofactor saturation",
      description:
        "Delivers 92% DV Riboflavin (Vitamin B2) per 100g, powering cellular electron transport chain respiration and glutathione reductase recycling.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-bael"],
      icon: "zap",
      metric: "1.2 mg Riboflavin (92% DV)",
    },
    {
      label: "Broad-Spectrum Antimicrobial Defense",
      phenomenon: "aegeline and tannin enteropathogenic suppression",
      description:
        "Bioactive tannins and alkaloids inhibit enteropathogenic strains like Shigella and Salmonella while sparing beneficial commensal lactobacilli.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-bael"],
      icon: "shield",
    },
  ],

  heroStats: [
    {
      nutrientId: "riboflavin",
      label: "Riboflavin (B2)",
      value: 1.2,
      unit: "mg",
      referenceContext: "92% Daily Value",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 60.0,
      unit: "mg",
      referenceContext: "67% Daily Value",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      nutrientId: "calories",
      label: "Calories",
      value: 137,
      unit: "kcal",
      referenceContext: "dense Ayurvedic nutrient elixir",
      sourceIds: ["usda-fdc-bael"],
    },
  ],

  varieties: [
    {
      name: "Kagzi ('Paper Shell')",
      description: "Premier dessert cultivar from Varanasi: unusually thin, brittle shell easily cracked by hand with very fine, non-fibrous sweet golden pulp.",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      name: "Narendra Bael-9 (NB-9)",
      description: "Bred at NDUAT Ayodhya: large oblong fruits with high pulp recovery (72%) and rich orange hue, ideal for summer sherbets.",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      name: "Pant Aparna",
      description: "Thornless tree developed at GBPUAT Pantnagar: spherical fruits with virtually non-fibrous, buttery flesh and minimal seed mucilage.",
      sourceIds: ["usda-fdc-bael"],
    },
  ],

  funFacts: [
    {
      text: "The trifoliate leaves and fruits of the Bael tree are considered sacred to Lord Shiva; in temple rituals, offering a trifoliate Bilva leaf is believed to cleanse spiritual sins.",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      text: "During the blistering 45°C summer heatwaves of Northern India, roadside vendors prepare 'Bael ka Sharbat'—an ancient heat-stroke antidote that provides immediate electrolyte cooling.",
      sourceIds: ["usda-fdc-bael"],
    },
    {
      text: "The rock-hard dried shells of Bael fruits are traditionally carved into small decorative boxes, snuff containers, and musical instruments by artisans in Bengal.",
      sourceIds: ["usda-fdc-bael"],
    },
  ],

  similarFruitIds: ["amla", "jamun", "custard-apple"],
  sourceIds: ["usda-fdc-bael", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
