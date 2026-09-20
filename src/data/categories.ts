/**
 * Fruitypedia category definitions with editorial themes.
 * These are editorial/culinary discovery categories, NOT strict botanical classifications.
 *
 * @see Fruitypedia_Project_Plan §11, §21
 */

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "berry",
    name: "Berries",
    description:
      "Small, pulpy fruits typically rich in color and packed with antioxidants. From blueberries to strawberries, these fruits are among the most nutrient-dense in nature.",
    theme: {
      primary: "#4A3AFF",
      secondary: "#7B6FFF",
      glow: "#4A3AFF33",
    },
  },
  {
    id: "citrus",
    name: "Citrus",
    description:
      "Bright, acidic fruits known for their high vitamin C content and distinctive segmented interiors. Citrus fruits originate from Southeast Asia and are now grown worldwide.",
    theme: {
      primary: "#F5A623",
      secondary: "#FFD166",
      glow: "#F5A62333",
    },
  },
  {
    id: "tropical",
    name: "Tropical",
    description:
      "Exotic fruits from equatorial regions, typically characterized by intense sweetness, bold flavors, and vibrant colors. Many tropical fruits are among the most widely consumed globally.",
    theme: {
      primary: "#2ECC71",
      secondary: "#A8E6CF",
      glow: "#2ECC7133",
    },
  },
  {
    id: "stone-fruit",
    name: "Stone Fruits",
    description:
      "Fruits with a fleshy exterior surrounding a single hard seed or pit. Also known as drupes, they include peaches, cherries, and plums.",
    theme: {
      primary: "#E67E22",
      secondary: "#F0B27A",
      glow: "#E67E2233",
    },
  },
  {
    id: "melon",
    name: "Melons",
    description:
      "Large, refreshing fruits with high water content, belonging to the Cucurbitaceae family. Perfect for hydration and summer enjoyment.",
    theme: {
      primary: "#6BBF8A",
      secondary: "#A8E6CF",
      glow: "#6BBF8A33",
    },
  },
  {
    id: "pome",
    name: "Pome Fruits",
    description:
      "Fruits with a fleshy outer layer surrounding a central core of seeds, such as apples and pears. Among the most widely cultivated fruits in temperate regions.",
    theme: {
      primary: "#8B1A2B",
      secondary: "#C0526F",
      glow: "#8B1A2B33",
    },
  },
];

/** Look up a category by its ID. */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
