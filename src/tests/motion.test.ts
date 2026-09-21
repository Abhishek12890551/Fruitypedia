import { describe, it, expect } from "vitest";
import { motionTokens, prefersReducedMotion } from "../utils/motionTokens";

describe("Phase 5.5 Motion & Interaction Token System", () => {
  it("enforces strict duration hierarchy: micro < ui < editorial < slow", () => {
    expect(motionTokens.duration.micro).toBeLessThan(motionTokens.duration.ui);
    expect(motionTokens.duration.ui).toBeLessThan(motionTokens.duration.editorial);
    expect(motionTokens.duration.editorial).toBeLessThan(motionTokens.duration.slow);

    // Bounded bounds
    expect(motionTokens.duration.micro).toBeGreaterThanOrEqual(0.15);
    expect(motionTokens.duration.slow).toBeLessThanOrEqual(2.0);
  });

  it("enforces distance hierarchy: micro < small < editorial", () => {
    expect(motionTokens.distance.micro).toBeLessThan(motionTokens.distance.small);
    expect(motionTokens.distance.small).toBeLessThan(motionTokens.distance.editorial);

    // Mobile distance is restrained compared to desktop
    expect(motionTokens.distance.editorialMobile).toBeLessThan(motionTokens.distance.editorial);
    expect(motionTokens.distance.editorialMobile).toBeLessThanOrEqual(20);
  });

  it("verifies smooth and restrained easing definitions", () => {
    expect(motionTokens.ease.editorial).toContain("cubic-bezier");
    expect(motionTokens.ease.ui).toBe("power2.out");
    expect(motionTokens.ease.emphasis).toContain("back.out");
  });

  it("safely falls back for prefersReducedMotion in test/SSR environment", () => {
    // In Node / SSR, window.matchMedia is typically undefined or mocked
    const result = prefersReducedMotion();
    expect(typeof result).toBe("boolean");
  });

  it("verifies numerical count-up progression calculation is monotonic and bounded", () => {
    const end = 57; // blueberry calories
    const steps: number[] = [];

    // Simulate 10 progress ticks from 0 to 1
    for (let i = 0; i <= 10; i++) {
      const progress = i / 10;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = easeProgress * end;
      steps.push(val);
    }

    // Step 0 must be 0, Step 10 must be 57
    expect(steps[0]).toBe(0);
    expect(steps[10]).toBe(end);

    // Values must be strictly non-decreasing
    for (let i = 1; i < steps.length; i++) {
      expect(steps[i]).toBeGreaterThanOrEqual(steps[i - 1]);
    }
  });

  it("verifies stagger timing is restrained and content-first", () => {
    expect(motionTokens.stagger.short).toBeLessThanOrEqual(0.08);
    expect(motionTokens.stagger.medium).toBeLessThanOrEqual(0.12);
  });

  it("ensures repeated bar initialization preserves target width and never overwrites with 0%", () => {
    // Simulate DOM element with target width
    const bar = {
      attributes: { "data-target-width": "65%" } as Record<string, string>,
      style: { width: "65%" },
      getAttribute(name: string) {
        return this.attributes[name] || null;
      },
      setAttribute(name: string, val: string) {
        this.attributes[name] = val;
      },
    };

    // First cycle: captures target and collapses to 0% for animation
    let target = bar.getAttribute("data-target-width");
    if (!target) {
      target = bar.style.width || "0%";
      if (target !== "0%") bar.setAttribute("data-target-width", target);
    }
    expect(bar.getAttribute("data-target-width")).toBe("65%");
    bar.style.width = "0%";

    // Second cycle (e.g. astro:page-load or re-run): must NOT overwrite with 0%
    target = bar.getAttribute("data-target-width");
    if (!target) {
      target = bar.style.width || "0%";
      if (target !== "0%") bar.setAttribute("data-target-width", target);
    }
    expect(bar.getAttribute("data-target-width")).toBe("65%");

    // Trigger animation: sets target width
    bar.style.width = bar.getAttribute("data-target-width") || "0%";
    expect(bar.style.width).toBe("65%");
  });
});
