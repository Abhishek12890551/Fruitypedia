import React, { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/utils/motionTokens";

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number;
  unit?: string;
  className?: string;
  prefix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  decimals = 0,
  duration = 1.2,
  unit = "",
  className = "",
  prefix = "",
}) => {
  const [displayValue, setDisplayValue] = useState<number>(() => {
    // If SSR or reduced motion, render final value immediately
    if (typeof window === "undefined" || prefersReducedMotion()) {
      return end;
    }
    return 0;
  });

  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion() || animatedRef.current) {
      setDisplayValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const totalDuration = duration * 1000;

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeProgress * end;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplayValue(end);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const formattedNumber = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span
      ref={elementRef}
      className={`inline-block font-mono ${className}`}
      aria-label={`${prefix}${end}${unit}`}
    >
      {prefix}
      {formattedNumber}
      {unit}
    </span>
  );
};
