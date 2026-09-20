/**
 * Shared utility functions for Fruitypedia.
 */

/**
 * Format a nutrient amount for display with appropriate precision.
 * Amounts >= 1 display with 1 decimal, amounts < 1 display with 3 decimals.
 */
export function formatNutrient(amount: number): string {
  if (amount >= 100) return Math.round(amount).toString();
  if (amount >= 1) return amount.toFixed(1);
  if (amount >= 0.01) return amount.toFixed(2);
  return amount.toFixed(3);
}

/**
 * Get a human-readable label from a camelCase nutrient key.
 * e.g., "vitaminC" → "Vitamin C", "totalFat" → "Total Fat"
 */
export function nutrientKeyToLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/**
 * Clamp a value between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
