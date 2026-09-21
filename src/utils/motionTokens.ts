/**
 * Centralized Motion Tokens
 *
 * Locked motion specifications for Fruitypedia Phase 5.5.
 * Enforces restrained, content-first editorial pacing across viewports.
 *
 * @see Fruitypedia_Project_Plan §Phase 5.5
 */

export const motionTokens = {
  duration: {
    micro: 0.2,       // 200ms: hover, focus, icons, micro-interactions
    ui: 0.35,         // 350ms: filters, tabs, search dialog, drawers
    editorial: 0.8,   // 800ms: hero entrances, major headings, section reveals
    slow: 1.2,        // 1200ms: ambient atmosphere, subtle background shifts
  },
  ease: {
    ui: "power2.out",
    editorial: "cubic-bezier(0.16, 1, 0.3, 1)", // smooth editorial deceleration
    emphasis: "back.out(1.2)",                  // restrained overshoot for badges
    linear: "none",
  },
  stagger: {
    short: 0.07,      // 70ms: badges, chips, small metrics
    medium: 0.1,      // 100ms: cards, list items, statistics
  },
  distance: {
    micro: 6,         // 6px: micro hover offsets
    small: 16,        // 16px: standard UI movement
    editorial: 32,    // 32px: desktop section reveal translation
    editorialMobile: 16, // 16px: mobile restrained translation
  },
} as const;

/**
 * Checks if the user prefers reduced motion.
 * Always defaults to true (safe) if window or matchMedia is undefined (SSR).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
