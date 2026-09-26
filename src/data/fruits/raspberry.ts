/**
 * Raspberry — Production fruit monograph.
 *
 * Nutritional values derived from USDA FoodData Central SR Legacy
 * FDC ID 167755 ("Raspberries, raw"). Values are per 100g.
 *
 * @see Fruitypedia_Project_Plan §20, §19.1
 */

import type { Fruit } from "@/types";

export const raspberry: Fruit = {
  id: "raspberry",
  slug: "raspberry",
  name: "Raspberry",

  editorial: {
    nickname: "Rasbhari · Gauriphal",
    tagline: "The hollow thimble. Exquisite floral musk, ellagitannins, and velvety acidity.",
    heroDescription:
      "Cherished since the ancient Greeks foraged wild brambles across Mount Ida, the raspberry is the delicate royalty of the Rosaceae family. When picked, its hollow thimble of velvety drupelets slips effortlessly from its central core, releasing an intoxicating perfume characterized by raspberry ketone and beta-ionone. Its succulent crimson pulp balances piercing citric tartness with an ethereal, musky floral sweetness.",
    pullQuotes: [
      {
        quote: "An ethereal scarlet thimble releasing delicate floral musk and an exhilarating wave of bright, ruby acidity.",
        attribution: "Editorial",
      },
      {
        quote: "Celebrated since classical antiquity, the raspberry unites pure fragrance with unmatched ellagic acid density.",
        attribution: "Editorial",
      },
    ],
    nutritionDescription:
      "A premier low-sugar, high-fiber berry providing 6.5g fiber per 100g, 29% DV Vitamin C, 29% DV Manganese, and cancer-preventive ellagitannins.",
  },

  taxonomy: {
    categoryId: "berry",
    family: "Rosaceae",
    genus: "Rubus",
    species: "idaeus",
    botanicalNotes: [
      "Belongs to the rose family (Rosaceae), growing on erect, prickly biennial canes with compound trifoliate leaves.",
      "Botanically classified as an aggregate fruit composed of numerous individual drupelets. Unlike blackberries, the receptacle remains attached to the plant, leaving a hollow hemispherical core.",
    ],
  },

  theme: {
    primary: "#BE123C",
    secondary: "#FECDD3",
    glow: "#BE123C40",
    gradient: ["#881337", "#E11D48"],
    textOnPrimary: "#FFFFFF",
  },

  images: {
    hero: {
      src: "/images/fruits/raspberry/hero.png",
      alt: "Freshly picked velvety ruby-red raspberries piled in a white ceramic dish against dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    card: {
      src: "/images/fruits/raspberry/card.png",
      alt: "Raspberry - editorial card image",
      role: "card",
      generatedBy: "ai",
      provider: "imagen-4",
      reviewed: true,
    },
    gallery: [],
    macroBreak: {
      src: "/images/fruits/raspberry/macro-break.png",
      alt: "Extreme macro photograph of individual raspberry drupelets showing fine micro-hairs and glistening scarlet juice spheres",
      role: "gallery",
      generatedBy: "ai",
      reviewed: true,
      captionTitle: "Velvety Drupelet Thimble · The Ketone Matrix",
      captionText:
        "The distinctive aroma is powered by raspberry ketone and beta-damascenone, while the cell walls concentrate polymerized ellagitannins and anthocyanins.",
    },
  },

  origin: {
    region: "Mount Ida & Temperate Eurasia (Greece, Central Europe)",
    coordinates: [39.5, 22.0],
    description:
      "Indigenous to the mountainous temperate woodlands of Europe and northern Asia, taking its botanical name 'idaeus' from Mount Ida in Crete where Greek legends recorded its foraging. Cultivated across medieval monastery gardens in France and England, and later hybridized with native North American wild red raspberries (Rubus strigosus).",
    grownTodayRegions: [
      "Russia",
      "Mexico (Jalisco)",
      "Serbia",
      "Poland",
      "United States (Washington, California, Oregon)",
      "Spain (Huelva)",
      "India (Himachal Pradesh, Kashmir)",
      "Chile",
    ],
    sourceIds: ["usda-fdc-raspberry"],
  },

  season: [
    {
      regionId: "northern-temperate",
      hemisphere: "north",
      months: [6, 7, 8, 9, 10],
      peakMonths: [7, 8, 9],
      label: "Summer & Autumn Primocane Harvest (July – September)",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      regionId: "mexico-subtropical",
      hemisphere: "north",
      months: [11, 12, 1, 2, 3, 4, 5],
      peakMonths: [1, 2, 3],
      label: "Winter Protected Cultivation (January – March)",
      sourceIds: ["usda-fdc-raspberry"],
    },
  ],

  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 52,
      unit: "kcal",
      sourceIds: ["usda-fdc-raspberry"],
    },
    nutrients: {
      protein: {
        amount: 1.2,
        unit: "g",
        sourceIds: ["usda-fdc-raspberry"],
      },
      totalFat: {
        amount: 0.65,
        unit: "g",
        sourceIds: ["usda-fdc-raspberry"],
      },
      carbohydrates: {
        amount: 11.94,
        unit: "g",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-raspberry"],
      },
      fiber: {
        amount: 6.5,
        unit: "g",
        dailyValuePercent: 23,
        sourceIds: ["usda-fdc-raspberry"],
      },
      totalSugars: {
        amount: 4.42,
        unit: "g",
        sourceIds: ["usda-fdc-raspberry"],
      },
      vitaminC: {
        amount: 26.2,
        unit: "mg",
        dailyValuePercent: 29,
        sourceIds: ["usda-fdc-raspberry"],
      },
      manganese: {
        amount: 0.67,
        unit: "mg",
        dailyValuePercent: 29,
        sourceIds: ["usda-fdc-raspberry"],
      },
      vitaminK: {
        amount: 7.8,
        unit: "mcg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-raspberry"],
      },
      potassium: {
        amount: 151,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-raspberry"],
      },
    },
    waterContentPercent: 85.75,
    micronutrientSignatures: [
      {
        name: "Ellagitannins (Sanguiin H-6 & Lambertianin C)",
        amount: 47.0,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Complex polyphenol tannins metabolized in the colon into longevity-associated urolithin A",
      },
      {
        name: "Raspberry Ketone (4-(4-Hydroxyphenyl)butan-2-one)",
        amount: 4.1,
        unit: "mg",
        dailyValuePercent: 0,
        description: "Signature aromatic ketone imparting the sweet floral musk and modulating adipocyte lipid metabolism",
      },
      {
        name: "Soluble & Insoluble Seed Pectin",
        amount: 6.5,
        unit: "g",
        dailyValuePercent: 23,
        description: "Dense prebiotic dietary fiber fraction yielding a remarkably low glycemic load of 1",
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
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 1,
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
    lead: "Perfumed rose.",
    accent: "Scarlet citric snap.",
    descriptors: [
      "Perfumed Rose",
      "Scarlet Tart",
      "Ketone",
      "Velvet",
      "Juicy"
    ],
    notes:
      "Freshly picked raspberries are exceptionally tender; their signature fragrance is composed of over 200 volatile aroma compounds led by raspberry ketone and alpha-ionone.",
  },

  benefitTags: [
    {
      label: "Glycemic Modulation & Satiety",
      phenomenon: "alpha-glucosidase inhibition by ellagitannins",
      description:
        "Delivers 6.5g fiber against only 4.4g sugar, blunting postprandial glucose absorption in insulin-resistant profiles.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-raspberry"],
      icon: "activity",
      metric: "6.5 g fiber (23% DV)",
    },
    {
      label: "Cellular Renewal via Urolithin A",
      phenomenon: "microbiome-mediated mitophagy activation",
      description:
        "Ellagitannins are transformed by gut flora into urolithin A, stimulating mitochondrial quality control in skeletal muscle.",
      evidenceLevel: "emerging",
      sourceIds: ["usda-fdc-raspberry"],
      icon: "zap",
      metric: "47 mg ellagitannins",
    },
    {
      label: "Cutaneous Collagen Defense",
      phenomenon: "vitamin C driven MMP-1 down-regulation",
      description:
        "Cyanidin glycosides and 29% DV Vitamin C protect the dermal extracellular matrix against UV-induced collagen breakdown.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-raspberry"],
      icon: "shield",
      metric: "26.2 mg Vitamin C (29% DV)",
    },
  ],

  heroStats: [
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 6.5,
      unit: "g",
      referenceContext: "23% Daily Value",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      nutrientId: "vitaminC",
      label: "Vitamin C",
      value: 26.2,
      unit: "mg",
      referenceContext: "29% Daily Value",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      nutrientId: "manganese",
      label: "Manganese",
      value: 0.67,
      unit: "mg",
      referenceContext: "29% Daily Value",
      sourceIds: ["usda-fdc-raspberry"],
    },
  ],

  varieties: [
    {
      name: "Tulameen ('Flavor King')",
      description: "Bred in British Columbia: universally acclaimed as the worldwide benchmark for fresh raspberry flavor with large glossy cones and exquisite perfume.",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      name: "Heritage (Primocane Standard)",
      description: "Historic Geneva NY selection: firm, dark red berries with concentrated sweet-tart punch that fruits continuously until the first autumn frost.",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      name: "Autumn Bliss",
      description: "Renowned British cultivar bred at East Malling: early-ripening, highly productive, with large rounded berries that possess very mild seediness.",
      sourceIds: ["usda-fdc-raspberry"],
    },
  ],

  funFacts: [
    {
      text: "According to Greek mythology, raspberries were originally pure white until the nymph Ida pricked her finger on a briar while picking berries for infant Zeus, staining them ruby red forever.",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      text: "Pure raspberry ketone is so rare and expensive in nature (requiring thousands of kilograms of berries for a single gram) that it is one of the most expensive natural flavor compounds in the perfume industry.",
      sourceIds: ["usda-fdc-raspberry"],
    },
    {
      text: "Raspberries have one of the highest fiber-to-carbohydrate ratios in the entire fruit kingdom, with fiber accounting for over 54% of their total carbohydrate content.",
      sourceIds: ["usda-fdc-raspberry"],
    },
  ],

  similarFruitIds: ["blackberry", "strawberry", "blueberry"],
  sourceIds: ["usda-fdc-raspberry", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-22",
    reviewerId: "abhi",
  },
};
