/**
 * Banana — Production fruit monograph.
 *
 * All nutrition values are derived from USDA FoodData Central SR Legacy
 * FDC ID 173944 ("Bananas, raw"), accessed 2026-09-19.
 * Values are per 100g as reported by the analytical source.
 *
 * Daily Value percentages use FDA reference standards:
 * https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
 *
 * @see Fruitypedia_Project_Plan §20, §19.1, Phase 2.5
 */

import type { Fruit } from "@/types";

export const banana: Fruit = {
  id: "banana",
  slug: "banana",
  name: "Banana",

  editorial: {
    nickname: "l'or des tropiques",
    tagline: "Parthenocarpic berry. High-potassium tropical staple.",
    heroDescription:
      "Venerated across tropical civilizations for over seven millennia, the banana is botanically an elongated, seedless berry born from the world's largest flowering perennial herb. Encased within an easily peeled golden exocarp lies a dense, creamy mesocarp exceptionally rich in bioavailable potassium, vitamin B6, and prebiotic pectin.",
  },

  taxonomy: {
    categoryId: "tropical",
    family: "Musaceae",
    genus: "Musa",
    species: "acuminata",
    botanicalNotes: [
      "The cultivated banana plant is not a true arboreal tree, but rather the world's largest flowering perennial herb; its towering trunk is an aerial pseudostem formed of tightly compressed overlapping leaf sheaths.",
      "Modern dessert bananas are seedless triploid hybrids (AAA genome) that reproduce exclusively through vegetative cloning, developing edible berries through vegetative parthenocarpy without pollination.",
    ],
  },

  theme: {
    primary: "#EAB308",
    secondary: "#FEF08A",
    glow: "#EAB30833",
    gradient: ["#EAB308", "#A16207"],
    textOnPrimary: "#000000",
  },

  images: {
    hero: {
      src: "/images/fruits/banana/hero.jpg",
      alt: "A hand of vibrant golden ripe bananas with delicate sugar freckles alongside a sliced cross-section revealing its creamy ivory core on dark slate",
      role: "hero",
      generatedBy: "ai",
      provider: "imagen-3",
      reviewed: true,
    },
    gallery: [],
  },

  origin: {
    region: "Maritime Southeast Asia",
    coordinates: [-2.5, 118.0], // Indo-Malesia / Papua New Guinea corridor
    description:
      "Indigenous to the humid tropical rainforests of Indo-Malesia and New Guinea, wild seeded bananas were domesticated as early as 8000–5000 BCE in the Kuk Swamp highlands. Austronesian maritime voyagers carried sterile vegetative suckers westward across the Indian Ocean to Madagascar and East Africa by the first millennium CE, from where Islamic agricultural trade and Portuguese explorers later dispersed them across the Atlantic tropics.",
    grownTodayRegions: [
      "India",
      "China",
      "Indonesia",
      "Brazil",
      "Ecuador",
      "Philippines",
      "Guatemala",
      "Colombia",
      "Angola",
    ],
    sourceIds: ["usda-fdc-banana"],
  },

  season: [
    {
      regionId: "equatorial-tropical",
      hemisphere: "equatorial",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: "Year-round equatorial harvest (continuous 9–12 month cycle)",
      sourceIds: ["usda-fdc-banana"],
    },
  ],

  /**
   * USDA FoodData Central SR Legacy — FDC ID 173944
   * "Bananas, raw" — values per 100g
   */
  nutrition: {
    referenceBasis: "per100g",
    servingSize: "100g",
    calories: {
      amount: 89,
      unit: "kcal",
      sourceIds: ["usda-fdc-banana"],
      sourceReferenceIds: ["208"],
    },
    nutrients: {
      protein: {
        amount: 1.09,
        unit: "g",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["203"],
      },
      totalFat: {
        amount: 0.33,
        unit: "g",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["204"],
      },
      carbohydrates: {
        amount: 22.84,
        unit: "g",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["205"],
      },
      fiber: {
        amount: 2.6,
        unit: "g",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["291"],
      },
      totalSugars: {
        amount: 12.23,
        unit: "g",
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["269"],
      },
      potassium: {
        amount: 358,
        unit: "mg",
        dailyValuePercent: 8,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["306"],
      },
      vitaminB6: {
        amount: 0.367,
        unit: "mg",
        dailyValuePercent: 22,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["415"],
      },
      vitaminC: {
        amount: 8.7,
        unit: "mg",
        dailyValuePercent: 10,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["401"],
      },
      manganese: {
        amount: 0.27,
        unit: "mg",
        dailyValuePercent: 12,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["315"],
      },
      magnesium: {
        amount: 27,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["304"],
      },
      copper: {
        amount: 0.078,
        unit: "mg",
        dailyValuePercent: 9,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["312"],
      },
      folate: {
        amount: 20,
        unit: "µg",
        dailyValuePercent: 5,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["417"],
      },
      pantothenicAcid: {
        amount: 0.334,
        unit: "mg",
        dailyValuePercent: 7,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["410"],
      },
      riboflavin: {
        amount: 0.073,
        unit: "mg",
        dailyValuePercent: 6,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["405"],
      },
      niacin: {
        amount: 0.665,
        unit: "mg",
        dailyValuePercent: 4,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["406"],
      },
      thiamin: {
        amount: 0.031,
        unit: "mg",
        dailyValuePercent: 3,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["404"],
      },
      phosphorus: {
        amount: 22,
        unit: "mg",
        dailyValuePercent: 2,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["305"],
      },
      iron: {
        amount: 0.26,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["303"],
      },
      calcium: {
        amount: 5,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["301"],
      },
      zinc: {
        amount: 0.15,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["309"],
      },
      sodium: {
        amount: 1,
        unit: "mg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["307"],
      },
      vitaminA: {
        amount: 3,
        unit: "µg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["320"],
      },
      vitaminE: {
        amount: 0.1,
        unit: "mg",
        dailyValuePercent: 1,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["323"],
      },
      vitaminK: {
        amount: 0.5,
        unit: "µg",
        dailyValuePercent: 0,
        sourceIds: ["usda-fdc-banana"],
        sourceReferenceIds: ["430"],
      },
    },
  },

  tasteProfile: {
    sweetness: {
      value: 8,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    acidity: {
      value: 2,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    bitterness: {
      value: 0,
      basis: "editorial-sensory",
      methodologyId: "editorial-sensory-methodology",
    },
    notes:
      "Creamy, dense, and comforting sensory architecture. Dominated by ripe isoamyl acetate esters delivering warm tropical floral aromatics, custardy vanilla undertones, and velvety smooth mouthfeel with virtually imperceptible acidity.",
  },

  benefitTags: [
    {
      label: "High in Vitamin B6",
      phenomenon: "pyridoxal 5'-phosphate cofactor density",
      description:
        "Providing 0.367 mg per 100g (22% DV), bananas exceed the FDA 'high' threshold, supplying essential coenzymes for amino acid metabolism and neurotransmitter synthesis.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-banana", "fda-daily-values"],
      icon: "shield",
    },
    {
      label: "Bioavailable Potassium",
      phenomenon: "intracellular osmotic electrolyte",
      description:
        "Supplying 358 mg of potassium per 100g (8% DV), assisting in cellular osmotic equilibrium, normal blood pressure maintenance, and neuro-muscular transmission.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-banana", "fda-daily-values"],
      icon: "leaf",
    },
    {
      label: "Prebiotic Fiber & Pectin",
      phenomenon: "soluble polysaccharide fermentation",
      description:
        "Delivering 2.6g of dietary fiber per 100g (9% DV) alongside soluble pectin and resistant starch, nourishing symbiotic gut microbiota and promoting digestive regularity.",
      evidenceLevel: "established",
      sourceIds: ["usda-fdc-banana", "fda-daily-values"],
      icon: "grain",
    },
  ],

  heroStats: [
    {
      nutrientId: "vitaminB6",
      label: "Vitamin B6",
      value: 0.367,
      unit: "mg",
      referenceContext: "per 100g · 22% DV (High)",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      nutrientId: "potassium",
      label: "Potassium",
      value: 358,
      unit: "mg",
      referenceContext: "per 100g · 8% DV",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      nutrientId: "fiber",
      label: "Dietary Fiber",
      value: 2.6,
      unit: "g",
      referenceContext: "per 100g · 9% DV",
      sourceIds: ["usda-fdc-banana"],
    },
  ],

  varieties: [
    {
      name: "Cavendish (Musa acuminata 'Cavendish')",
      description:
        "The dominant global commercial dessert cultivar. Characterized by its curved crescent shape, durable peel during long-distance maritime transport, and dependable creamy sweetness.",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      name: "Red Dacca (Musa acuminata 'Red Dacca')",
      description:
        "A striking heirloom cultivar with thick, brick-red to deep maroon skin and ivory-pink pulp. Delivers a sweeter, richer flavor with delicate raspberry and mango nuances.",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      name: "Lady Finger (Musa acuminata 'Lady Finger')",
      description:
        "Petite, thin-skinned sugar bananas treasured across Southeast Asia and Australia. Dense, honey-sweet pulp with a tender texture and subtle citrus blossom scent.",
      sourceIds: ["usda-fdc-banana"],
    },
  ],

  funFacts: [
    {
      text: "Botanically, the banana is classified as an epigynous berry with a fleshy pericarp, while the towering plant is technically a giant perennial herb rather than a wooden tree.",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      text: "Because commercial Cavendish bananas are sterile triploids without viable seeds, every single Cavendish plant grown across the globe is an exact genetic clone.",
      sourceIds: ["usda-fdc-banana"],
    },
    {
      text: "Bananas are naturally, harmlessly radioactive due to their concentrated potassium content, which includes a natural trace fraction of the primordial isotope potassium-40 (^40K).",
      sourceIds: ["usda-fdc-banana"],
    },
  ],

  similarFruitIds: ["mango", "orange"],
  sourceIds: ["usda-fdc-banana", "usda-fdc", "fda-daily-values"],

  review: {
    status: "fact-checked",
    reviewedAt: "2026-09-20",
    reviewerId: "abhi",
  },
};
