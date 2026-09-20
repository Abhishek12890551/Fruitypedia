/**
 * Zod validation schemas for all Fruitypedia data types.
 * These mirror the TypeScript interfaces in src/types/ and enable
 * runtime validation of fruit data files, CI schema checks, and
 * detection of missing/invalid fields.
 *
 * @see Fruitypedia_Project_Plan §19–20
 */

import { z } from "zod";

// ─── Source ──────────────────────────────────────────────────────────

export const SourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  publisher: z.string().min(1),
  url: z.string().url().or(z.string().startsWith("/")),
  accessedAt: z.string().datetime({ offset: true }).or(z.string().date()),
  referenceId: z.string().optional(),
  edition: z.string().optional(),
});

// ─── Nutrition ───────────────────────────────────────────────────────

export const NutrientValueSchema = z.object({
  amount: z.number(),
  unit: z.string().min(1),
  dailyValuePercent: z.number().min(0).max(10000).optional(),
  sourceIds: z.array(z.string().min(1)).min(1),
  sourceReferenceIds: z.array(z.string()).optional(),
});

export const ReferenceBasisSchema = z.enum(["per100g", "perServing", "other"]);

export const NutritionSchema = z.object({
  referenceBasis: ReferenceBasisSchema,
  servingSize: z.string().min(1),
  calories: NutrientValueSchema,
  nutrients: z.record(z.string(), NutrientValueSchema),
});

// ─── Theme ───────────────────────────────────────────────────────────

const hexColor = z.string().regex(/^#[0-9a-fA-F]{6,8}$/, "Must be a hex color");

export const FruitThemeSchema = z.object({
  primary: hexColor,
  secondary: hexColor,
  glow: hexColor,
  gradient: z.tuple([hexColor, hexColor]),
  textOnPrimary: hexColor,
});

export const CategoryThemeSchema = z.object({
  primary: hexColor,
  secondary: hexColor,
  glow: hexColor,
});

// ─── Category ────────────────────────────────────────────────────────

export const FruitCategoryIdSchema = z.enum([
  "berry",
  "citrus",
  "tropical",
  "stone-fruit",
  "melon",
  "pome",
]);

export const CategorySchema = z.object({
  id: FruitCategoryIdSchema,
  name: z.string().min(1),
  description: z.string().min(1),
  theme: CategoryThemeSchema,
});

// ─── Origin ──────────────────────────────────────────────────────────

export const OriginDataSchema = z.object({
  region: z.string().min(1),
  coordinates: z.tuple([
    z.number().min(-90).max(90),
    z.number().min(-180).max(180),
  ]),
  description: z.string().min(1),
  grownTodayRegions: z.array(z.string()).optional(),
  sourceIds: z.array(z.string().min(1)).min(1),
});

// ─── Season ──────────────────────────────────────────────────────────

export const SeasonDataSchema = z.object({
  regionId: z.string().min(1),
  hemisphere: z.enum(["north", "south", "equatorial", "mixed"]),
  months: z.array(z.number().int().min(1).max(12)).min(1),
  peakMonths: z.array(z.number().int().min(1).max(12)).optional(),
  label: z.string().optional(),
  sourceIds: z.array(z.string().min(1)).min(1),
});

// ─── Images ──────────────────────────────────────────────────────────

export const ImageRoleSchema = z.enum(["hero", "gallery", "crossSection", "card"]);

export const FruitImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  role: ImageRoleSchema,
  generatedBy: z.enum(["ai", "photography"]),
  provider: z.string().optional(),
  promptId: z.string().optional(),
  reviewed: z.boolean(),
  reviewedAt: z.string().optional(),
  reviewerId: z.string().optional(),
});

export const FruitImagesSchema = z.object({
  hero: FruitImageSchema,
  gallery: z.array(FruitImageSchema),
  crossSection: FruitImageSchema.optional(),
});

// ─── Taste ───────────────────────────────────────────────────────────

export const TasteScoreSchema = z.object({
  value: z.number().min(0).max(10),
  basis: z.literal("editorial-sensory"),
  methodologyId: z.string().min(1),
});

export const TasteProfileSchema = z.object({
  sweetness: TasteScoreSchema,
  acidity: TasteScoreSchema,
  bitterness: TasteScoreSchema.optional(),
  notes: z.string().min(1),
});

// ─── Benefits ────────────────────────────────────────────────────────

export const EvidenceLevelSchema = z.enum(["established", "emerging", "limited"]);

export const BenefitTagSchema = z.object({
  label: z.string().min(1),
  phenomenon: z.string().min(1),
  description: z.string().min(1),
  evidenceLevel: EvidenceLevelSchema,
  sourceIds: z.array(z.string().min(1)).min(1),
  icon: z.string().min(1),
  metric: z.string().optional(),
});

// ─── Hero Stats ──────────────────────────────────────────────────────

export const HeroStatSchema = z.object({
  nutrientId: z.string().min(1),
  label: z.string().min(1),
  value: z.number(),
  unit: z.string().min(1),
  referenceContext: z.string().min(1),
  sourceIds: z.array(z.string().min(1)).min(1),
});

// ─── Facts & Varieties ──────────────────────────────────────────────

export const FactSchema = z.object({
  text: z.string().min(1),
  sourceIds: z.array(z.string().min(1)).min(1),
  reviewedAt: z.string().optional(),
  reviewerId: z.string().optional(),
});

export const VarietySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  sourceIds: z.array(z.string().min(1)).min(1),
});

// ─── Review ──────────────────────────────────────────────────────────

export const ReviewStatusSchema = z.enum([
  "draft",
  "fact-checked",
  "editorially-reviewed",
  "published",
]);

export const ReviewMetaSchema = z.object({
  status: ReviewStatusSchema,
  reviewedAt: z.string().optional(),
  reviewerId: z.string().optional(),
});

// ─── Complete Fruit Record ──────────────────────────────────────────

export const FruitSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, "Slug must be URL-safe lowercase"),
  name: z.string().min(1),

  editorial: z.object({
    nickname: z.string().optional(),
    tagline: z.string().optional(),
    heroDescription: z.string().min(1),
  }),

  taxonomy: z.object({
    categoryId: FruitCategoryIdSchema,
    family: z.string().min(1),
    genus: z.string().optional(),
    species: z.string().optional(),
    botanicalNotes: z.array(z.string()).optional(),
  }),

  theme: FruitThemeSchema,
  images: FruitImagesSchema,
  origin: OriginDataSchema,
  season: z.array(SeasonDataSchema).min(1),
  nutrition: NutritionSchema,
  tasteProfile: TasteProfileSchema,
  benefitTags: z.array(BenefitTagSchema),
  heroStats: z.array(HeroStatSchema).min(1),
  varieties: z.array(VarietySchema),
  funFacts: z.array(FactSchema),
  similarFruitIds: z.array(z.string()),
  sourceIds: z.array(z.string().min(1)).min(1),
  review: ReviewMetaSchema,
});

// ─── Inferred Types ─────────────────────────────────────────────────

export type FruitData = z.infer<typeof FruitSchema>;
export type SourceData = z.infer<typeof SourceSchema>;
export type CategoryData = z.infer<typeof CategorySchema>;
