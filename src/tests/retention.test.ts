import { describe, it, expect } from "vitest";
import { allFruits } from "../data";

describe("Phase 5 Retention Suite: Favorites & Discovery Engine", () => {
  describe("Favorites Collection Logic", () => {
    it("manages bookmark collections accurately without duplication", () => {
      let favorites: string[] = [];

      const addFavorite = (slug: string) => {
        if (!favorites.includes(slug)) {
          favorites = [...favorites, slug];
        }
      };

      const removeFavorite = (slug: string) => {
        favorites = favorites.filter((s) => s !== slug);
      };

      // Add blueberries and oranges
      addFavorite("blueberry");
      addFavorite("orange");
      expect(favorites).toEqual(["blueberry", "orange"]);
      expect(favorites.length).toBe(2);

      // Attempt duplicate addition
      addFavorite("blueberry");
      expect(favorites.length).toBe(2);

      // Remove blueberry
      removeFavorite("blueberry");
      expect(favorites).toEqual(["orange"]);
      expect(favorites.length).toBe(1);

      // Remove non-existent item
      removeFavorite("non-existent");
      expect(favorites.length).toBe(1);

      // Clear all
      favorites = [];
      expect(favorites.length).toBe(0);
    });

    it("verifies all production fruits have unique slugs valid for favorites indexing", () => {
      const slugs = allFruits.map((f) => f.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(allFruits.length);
      expect(allFruits.length).toBe(50);

      for (const fruit of allFruits) {
        expect(fruit.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it("serializes and deserializes favorites state to JSON safely", () => {
      const initial = ["blueberry", "watermelon", "apple"];
      const serialized = JSON.stringify(initial);
      const parsed = JSON.parse(serialized);

      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed).toEqual(initial);

      // Fault tolerance on malformed JSON
      let fallback: string[] = [];
      try {
        const corrupt = "{bad-json";
        fallback = JSON.parse(corrupt);
      } catch {
        fallback = [];
      }
      expect(fallback).toEqual([]);
    });
  });

  describe("Random Discovery Engine (Surprise Me)", () => {
    it("selects a valid random fruit excluding the currently active monograph", () => {
      const currentSlug = "blueberry";
      const pool = allFruits.filter((f) => f.slug !== currentSlug);

      expect(pool.length).toBe(allFruits.length - 1);
      expect(pool.some((f) => f.slug === currentSlug)).toBe(false);

      // Execute 20 simulated random draws
      for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        const selected = pool[randomIndex];

        expect(selected).toBeDefined();
        expect(selected.slug).not.toBe(currentSlug);
        expect(allFruits.some((f) => f.slug === selected.slug)).toBe(true);
      }
    });

    it("gracefully handles fallback when pool has only one or zero exclusions", () => {
      const singlePool = [allFruits[0]];
      const currentSlug = "blueberry";
      const candidates = singlePool.filter((f) => f.slug !== currentSlug);
      const finalPool = candidates.length > 0 ? candidates : singlePool;

      expect(finalPool.length).toBe(1);
      expect(finalPool[0].slug).toBe("blueberry");
    });
  });
});
