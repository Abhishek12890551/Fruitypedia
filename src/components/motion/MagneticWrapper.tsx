import React, { useRef, useEffect } from "react";
import { prefersReducedMotion } from "@/utils/motionTokens";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number; // 0.1 to 0.5 (multiplier for pointer pull)
  radius?: number; // proximity radius in px
  className?: string;
  as?: React.ElementType;
}

/**
 * MagneticWrapper — Tactile physical attraction component.
 *
 * Pulls interactive elements subtly toward the pointer when hovered,
 * snapping back with physical elastic damping upon exit.
 * Automatically disabled when `prefers-reduced-motion: reduce` is active.
 */
export default function MagneticWrapper({
  children,
  strength = 0.28,
  radius = 50,
  className = "",
  as: Component = "div",
}: MagneticWrapperProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    let xTo: ((val: number) => void) | null = null;
    let yTo: ((val: number) => void) | null = null;

    // Dynamically import GSAP on client
    let cleanup: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      if (!el) return;

      xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

      const handlePointerMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < radius + rect.width / 2) {
          xTo?.(deltaX * strength);
          yTo?.(deltaY * strength);
        } else {
          xTo?.(0);
          yTo?.(0);
        }
      };

      const handlePointerLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.45)",
          overwrite: "auto",
        });
      };

      el.addEventListener("pointermove", handlePointerMove);
      el.addEventListener("pointerleave", handlePointerLeave);

      cleanup = () => {
        el.removeEventListener("pointermove", handlePointerMove);
        el.removeEventListener("pointerleave", handlePointerLeave);
      };
    });

    return () => {
      cleanup?.();
    };
  }, [strength, radius]);

  const Tag = Component as any;

  return (
    <Tag
      ref={containerRef}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
}
