import { describe, it, expect } from "vitest";
import { QUIZ_QUESTIONS, calculateRank } from "../components/FruitQuiz";
import { allFruits } from "../data";

describe("Botanical Trivia & Knowledge Quiz Engine", () => {
  it("verifies all quiz questions have valid structure and verifiable sources", () => {
    expect(QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(10);

    for (const q of QUIZ_QUESTIONS) {
      expect(q.id).toBeTruthy();
      expect(q.question.length).toBeGreaterThan(15);
      expect(q.options.length).toBe(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.sourceCitation.length).toBeGreaterThan(5);

      // Verify no duplicate options within the same question
      const uniqueOptions = new Set(q.options);
      expect(uniqueOptions.size).toBe(4);

      // Verify related fruit slug exists if specified
      if (q.relatedFruitSlug) {
        const found = allFruits.some((f) => f.slug === q.relatedFruitSlug);
        expect(found).toBe(true);
      }
    }
  });

  it("covers all primary pomological and biochemical categories", () => {
    const categories = new Set(QUIZ_QUESTIONS.map((q) => q.category));
    expect(categories.has("Botanical Morphology")).toBe(true);
    expect(categories.has("Nutritional Biochemistry")).toBe(true);
    expect(categories.has("Taxonomy & Genetics")).toBe(true);
    expect(categories.has("Geographic Diaspora")).toBe(true);
  });

  it("calculates botanical erudition ranks accurately across score ratios", () => {
    // 100% and 90%
    const scholar10 = calculateRank(10, 10);
    expect(scholar10.title).toBe("Grand Botanical Scholar");
    expect(scholar10.badge).toBe("🌿👑");

    const scholar9 = calculateRank(9, 10);
    expect(scholar9.title).toBe("Grand Botanical Scholar");

    // 80% and 75%
    const pomologist8 = calculateRank(8, 10);
    expect(pomologist8.title).toBe("Senior Pomologist");
    expect(pomologist8.badge).toBe("🔬🍎");

    // 60%
    const naturalist6 = calculateRank(6, 10);
    expect(naturalist6.title).toBe("Journeyman Naturalist");
    expect(naturalist6.badge).toBe("🧭🌱");

    // 40%
    const forager4 = calculateRank(4, 10);
    expect(forager4.title).toBe("Field Forager");
    expect(forager4.badge).toBe("🍃");

    // 20%
    const sprout2 = calculateRank(2, 10);
    expect(sprout2.title).toBe("Novice Sprout");
    expect(sprout2.badge).toBe("🌱");

    // Boundary 0
    const zeroScore = calculateRank(0, 10);
    expect(zeroScore.title).toBe("Novice Sprout");
  });

  it("validates factual scientific answers for key morphology questions", () => {
    // Banana question
    const bananaQ = QUIZ_QUESTIONS.find((q) => q.id === "q2_banana_botany");
    expect(bananaQ).toBeDefined();
    if (bananaQ) {
      expect(bananaQ.options[bananaQ.correctIndex]).toContain("Banana");
    }

    // Strawberry achenes question
    const strawberryQ = QUIZ_QUESTIONS.find((q) => q.id === "q1_strawberry_morphology");
    expect(strawberryQ).toBeDefined();
    if (strawberryQ) {
      expect(strawberryQ.options[strawberryQ.correctIndex]).toContain("Achenes");
    }

    // Apple hypanthium question
    const appleQ = QUIZ_QUESTIONS.find((q) => q.id === "q3_apple_hypanthium");
    expect(appleQ).toBeDefined();
    if (appleQ) {
      expect(appleQ.options[appleQ.correctIndex]).toContain("hypanthium");
    }
  });
});
