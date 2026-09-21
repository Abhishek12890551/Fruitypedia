/**
 * Motion Orchestrator Utility
 *
 * Provides safe registration, reduced-motion checking, and lifecycle management
 * for GSAP and ScrollTrigger instances across Astro and React components.
 *
 * @see Fruitypedia_Project_Plan §Phase 5.5
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionTokens, prefersReducedMotion } from "@/utils/motionTokens";

// Ensure ScrollTrigger is registered once in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealOptions {
  trigger?: HTMLElement | string;
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  onComplete?: () => void;
}

/**
 * Initializes a standard single-play viewport reveal for an element or collection.
 * Respects `prefers-reduced-motion: reduce`.
 */
export function initScrollReveal(
  target: HTMLElement | HTMLElement[] | string,
  options: RevealOptions = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  // In reduced-motion mode, immediately reveal without translation
  if (prefersReducedMotion()) {
    gsap.set(target, { opacity: 1, y: 0, clearProps: "transform" });
    options.onComplete?.();
    return null;
  }

  const isMobile = window.innerWidth < 768;
  const distance = options.distance ?? (isMobile ? motionTokens.distance.editorialMobile : motionTokens.distance.editorial);
  const duration = options.duration ?? motionTokens.duration.editorial;
  const delay = options.delay ?? 0;

  // Initial state: hidden and slightly translated downwards
  gsap.set(target, { opacity: 0, y: distance });

  const triggerElement = options.trigger || (typeof target === "string" ? target : Array.isArray(target) ? target[0] : target);

  const st = ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 88%",
    once: true,
    onEnter: () => {
      gsap.to(target, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: motionTokens.ease.editorial,
        stagger: options.stagger ?? 0,
        clearProps: "transform",
        onComplete: options.onComplete,
      });
    },
  });

  return st;
}

/**
 * Orchestrates a staggered group reveal (e.g. stats, tags, cards).
 */
export function initStaggerReveal(
  container: HTMLElement | string,
  itemSelector: string,
  options: { stagger?: number; delay?: number; duration?: number } = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  const containerEl = typeof container === "string" ? document.querySelector<HTMLElement>(container) : container;
  if (!containerEl) return null;

  const items = Array.from(containerEl.querySelectorAll<HTMLElement>(itemSelector));
  if (items.length === 0) return null;

  if (prefersReducedMotion()) {
    gsap.set(items, { opacity: 1, y: 0, clearProps: "transform" });
    return null;
  }

  const isMobile = window.innerWidth < 768;
  const distance = isMobile ? motionTokens.distance.small : motionTokens.distance.editorial;

  gsap.set(items, { opacity: 0, y: distance });

  return ScrollTrigger.create({
    trigger: containerEl,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: options.duration ?? motionTokens.duration.editorial,
        delay: options.delay ?? 0,
        ease: motionTokens.ease.editorial,
        stagger: options.stagger ?? (isMobile ? motionTokens.stagger.short : motionTokens.stagger.medium),
        clearProps: "transform",
      });
    },
  });
}

/**
 * Initializes image reveal with restrained scale recovery (1.04 -> 1).
 */
export function initImageReveal(
  imageEl: HTMLElement | string,
  options: { scale?: number; duration?: number; delay?: number } = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  const target = typeof imageEl === "string" ? document.querySelector<HTMLElement>(imageEl) : imageEl;
  if (!target) return null;

  if (prefersReducedMotion()) {
    gsap.set(target, { opacity: 1, scale: 1, clearProps: "all" });
    return null;
  }

  const startScale = options.scale ?? 1.04;

  gsap.set(target, { opacity: 0, scale: startScale });

  return ScrollTrigger.create({
    trigger: target,
    start: "top 90%",
    once: true,
    onEnter: () => {
      gsap.to(target, {
        opacity: 1,
        scale: 1,
        duration: options.duration ?? motionTokens.duration.editorial,
        delay: options.delay ?? 0,
        ease: motionTokens.ease.editorial,
        clearProps: "transform",
      });
    },
  });
}
