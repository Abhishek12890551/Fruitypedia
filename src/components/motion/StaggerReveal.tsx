import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/utils/motionTokens";

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerMs?: number;
  itemSelector?: string;
  className?: string;
  as?: React.ElementType;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  staggerMs = 80,
  itemSelector = "> *",
  className = "",
  as: Component = "div",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion()) return;

    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
    if (items.length === 0) return;

    // Set initial hidden state
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          observer.disconnect();

          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * staggerMs);
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [staggerMs, itemSelector]);

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
};
