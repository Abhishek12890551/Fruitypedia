/**
 * SmoothScrollProvider — Global Lenis Smooth Scroll Provider
 *
 * A single Lenis instance for the entire site. Mounted once in BaseLayout.
 * Wires Lenis → GSAP ticker → ScrollTrigger for orchestrated editorial motion.
 *
 * Responsibilities:
 * - Detect prefers-reduced-motion and skip initialization if set.
 * - Instantiate Lenis with editorial-appropriate lerp/smoothWheel settings.
 * - Drive the Lenis RAF loop via GSAP's ticker (avoids duplicate rAF calls).
 * - Connect Lenis scroll position to ScrollTrigger via scrollerProxy.
 * - Destroy and clean up fully on unmount.
 *
 * Rules (§4.2, §25):
 * - Never instantiate Lenis inside individual page components — only here.
 * - Lenis must never compensate for poor responsive layout.
 * - Reduced-motion disables inertia smoothing; native scroll is preserved.
 *
 * @see Fruitypedia_Project_Plan §4.2, §25.1, §25.4
 */

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider(): null {
  useEffect(() => {
    // Respect prefers-reduced-motion (§25.4, §4.2)
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // No Lenis. Native scroll is untouched. Content is immediately accessible.
      return;
    }

    // Create the single global Lenis instance.
    const lenis = new Lenis({
      lerp: 0.1,          // Inertia coefficient — higher = snappier, lower = dreamier
      smoothWheel: true,  // Smooth mouse/trackpad wheel events
      syncTouch: false,   // Use native touch scroll on mobile (better UX)
    });

    // Drive Lenis via GSAP's ticker to avoid a separate requestAnimationFrame loop.
    // gsap.ticker fires at ~60fps by default; lagSmoothing(0) prevents catch-up jumps.
    gsap.ticker.lagSmoothing(0);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // Connect Lenis scroll position to ScrollTrigger so scroll-driven animations
    // fire relative to Lenis's smoothed position, not the raw browser scroll.
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      // Full cleanup on unmount (page navigation / hot reload)
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
      lenis.destroy();
    };
  }, []);

  return null;
}
