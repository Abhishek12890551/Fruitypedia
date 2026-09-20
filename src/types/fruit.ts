/**
 * Complete Fruit data model.
 * This is the central type that drives every fruit page in Fruitypedia.
 *
 * @see Fruitypedia_Project_Plan §20
 */

import type { Nutrition } from "./nutrition";

// ─── Theme ───────────────────────────────────────────────────────────

export interface FruitTheme {
  /** Primary fruit accent color (hex). */
  primary: string;
  /** Secondary/complementary fruit color (hex). */
  secondary: string;
  /** Atmospheric glow color (hex, typically a muted/transparent variant). */
  glow: string;
  /** Gradient endpoints [start, end] (hex). */
  gradient: [string, string];
  /** Readable text color to use on primary background (hex). */
  textOnPrimary: string;
}

// ─── Category ────────────────────────────────────────────────────────

/**
 * Editorial/culinary discovery categories.
 * These are NOT strict botanical classifications.
 *
 * @see Fruitypedia_Project_Plan §21
 */
export type FruitCategoryId =
  | "berry"
  | "citrus"
  | "tropical"
  | "stone-fruit"
  | "melon"
  | "pome";

export interface CategoryTheme {
  primary: string;
  secondary: string;
  glow: string;
}

export interface Category {
  id: FruitCategoryId;
  name: string;
  description: string;
  theme: CategoryTheme;
}

// ─── Origin ──────────────────────────────────────────────────────────

export interface OriginData {
  /** Geographic region name (e.g., "Southeast Asia"). */
  region: string;
  /** [latitude, longitude] for map placement. */
  coordinates: [number, number];
  /** Brief description of the fruit's origin story. */
  description: string;
  /** Regions where this fruit is commercially grown today. */
  grownTodayRegions?: string[];
  sourceIds: string[];
}

// ─── Season ──────────────────────────────────────────────────────────

/**
 * Seasonality is never universally global.
 * Every record identifies its geographic context.
 *
 * @see Fruitypedia_Project_Plan §17
 */
export interface SeasonData {
  /** Region identifier for this seasonal record. */
  regionId: string;
  hemisphere: "north" | "south" | "equatorial" | "mixed";
  /** Month numbers (1–12) when the fruit is typically available. */
  months: number[];
  /** Month numbers (1–12) for peak availability. */
  peakMonths?: number[];
  /** Human-readable seasonal label. */
  label?: string;
  sourceIds: string[];
}

// ─── Images ──────────────────────────────────────────────────────────

export type ImageRole = "hero" | "gallery" | "crossSection" | "card";

export interface FruitImage {
  /** Path to the image asset. */
  src: string;
  /** Descriptive alt text for accessibility. */
  alt: string;
  /** Role of this image in the fruit page. */
  role: ImageRole;
  /** Whether the image was AI-generated or photographed. */
  generatedBy: "ai" | "photography";
  /** Generation provider/model if AI-generated. */
  provider?: string;
  /** Internal prompt reference for AI-generated images. */
  promptId?: string;
  /** Whether this image has been reviewed for accuracy and quality. */
  reviewed: boolean;
  /** ISO 8601 date of review. */
  reviewedAt?: string;
  /** Reviewer identifier. */
  reviewerId?: string;
}

export interface FruitImages {
  hero: FruitImage;
  gallery: FruitImage[];
  crossSection?: FruitImage;
}

// ─── Taste ───────────────────────────────────────────────────────────

/**
 * Taste scores are editorial sensory summaries, NOT laboratory measurements.
 *
 * Internal rubric:
 *   0–2: very low perception
 *   3–4: low
 *   5–6: moderate
 *   7–8: high
 *   9–10: very high
 *
 * @see Fruitypedia_Project_Plan §19.5
 */
export interface TasteScore {
  /** 0–10 editorial sensory score. */
  value: number;
  /** Always "editorial-sensory" — this is not measured. */
  basis: "editorial-sensory";
  /** References the methodology documentation. */
  methodologyId: string;
}

export interface TasteProfile {
  sweetness: TasteScore;
  acidity: TasteScore;
  bitterness?: TasteScore;
  /** Free-text tasting notes. */
  notes: string;
}

// ─── Benefits ────────────────────────────────────────────────────────

export type EvidenceLevel = "established" | "emerging" | "limited";

export interface BenefitTag {
  /** Short benefit label (e.g., "Rich in Antioxidants"). */
  label: string;
  /** The underlying phenomenon (e.g., "antioxidant activity"). */
  phenomenon: string;
  /** Conservative educational explanation. */
  description: string;
  evidenceLevel: EvidenceLevel;
  sourceIds: string[];
  /** Icon identifier for display. */
  icon: string;
  /** Optional quantitative metric reference. */
  metric?: string;
}

// ─── Hero Stats ──────────────────────────────────────────────────────

export interface HeroStat {
  /** Nutrient ID linking to the nutrition.nutrients record. */
  nutrientId: string;
  /** Display label (e.g., "Vitamin C"). */
  label: string;
  value: number;
  unit: string;
  /** Context explaining the reference (e.g., "per 100g"). */
  referenceContext: string;
  sourceIds: string[];
}

// ─── Facts & Varieties ──────────────────────────────────────────────

export interface Fact {
  text: string;
  sourceIds: string[];
  reviewedAt?: string;
  reviewerId?: string;
}

export interface Variety {
  name: string;
  description?: string;
  sourceIds: string[];
}

// ─── Review ──────────────────────────────────────────────────────────

export type ReviewStatus =
  | "draft"
  | "fact-checked"
  | "editorially-reviewed"
  | "published";

export interface ReviewMeta {
  status: ReviewStatus;
  reviewedAt?: string;
  reviewerId?: string;
}

// ─── Complete Fruit Record ──────────────────────────────────────────

export interface Fruit {
  /** Unique internal identifier. */
  id: string;
  /** URL-safe slug for routing. */
  slug: string;
  /** Display name. */
  name: string;

  editorial: {
    /** Poetic nickname displayed in script typography (e.g., "la baie d'or bleu"). */
    nickname?: string;
    /** Short tagline for cards and previews. */
    tagline?: string;
    /** Primary hero description paragraph. */
    heroDescription: string;
  };

  taxonomy: {
    categoryId: FruitCategoryId;
    /** Botanical family (e.g., "Ericaceae"). */
    family: string;
    /** Botanical genus (e.g., "Vaccinium"). */
    genus?: string;
    /** Species name (e.g., "corymbosum"). */
    species?: string;
    /** Additional botanical notes. */
    botanicalNotes?: string[];
  };

  theme: FruitTheme;
  images: FruitImages;
  origin: OriginData;
  season: SeasonData[];
  nutrition: Nutrition;
  tasteProfile: TasteProfile;
  benefitTags: BenefitTag[];
  heroStats: HeroStat[];
  varieties: Variety[];
  funFacts: Fact[];
  /** IDs of related/similar fruits for the "Similar Fruits" section. */
  similarFruitIds: string[];
  /** Top-level source IDs for the entire fruit record. */
  sourceIds: string[];
  review: ReviewMeta;
}
