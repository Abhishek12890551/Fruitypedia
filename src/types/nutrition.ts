/**
 * Nutrition data model.
 * All nutritional values carry explicit reference basis and source provenance.
 *
 * @see Fruitypedia_Project_Plan §19.3
 */

export interface NutrientValue {
  /** Numeric amount of the nutrient. */
  amount: number;
  /** Unit of measurement (e.g., "mg", "g", "µg", "IU", "kcal"). */
  unit: string;
  /** Percentage of Daily Value, if applicable. Uses FDA reference. */
  dailyValuePercent?: number;
  /** Source IDs that back this nutrient value. */
  sourceIds: string[];
  /** Provider-specific reference IDs (e.g., USDA nutrient number). */
  sourceReferenceIds?: string[];
}

export interface MicronutrientSignature {
  name: string;
  amount: number;
  unit: string;
  dailyValuePercent: number;
  description: string;
}

export type ReferenceBasis = "per100g" | "perServing" | "other";

export interface Nutrition {
  /** Whether values are per 100g, per serving, or other basis. */
  referenceBasis: ReferenceBasis;
  /** Human-readable serving size description (e.g., "1 cup (148g)"). */
  servingSize: string;
  /** Caloric energy value. */
  calories: NutrientValue;
  /** All other nutrients keyed by a normalized nutrient ID. */
  nutrients: Record<string, NutrientValue>;
  /** Water content as a percentage (e.g., 84.2). */
  waterContentPercent?: number;
  /** Key micronutrient signatures for editorial display. */
  micronutrientSignatures?: MicronutrientSignature[];
}
