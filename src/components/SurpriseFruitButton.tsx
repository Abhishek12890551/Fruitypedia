import React, { useState } from "react";
import type { Fruit } from "@/types";

interface SurpriseFruitButtonProps {
  fruits: Fruit[];
  className?: string;
  variant?: "icon" | "button";
}

export const SurpriseFruitButton: React.FC<SurpriseFruitButtonProps> = ({
  fruits,
  className = "",
  variant = "icon",
}) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSurprise = () => {
    if (!fruits || fruits.length === 0) return;

    setIsSpinning(true);

    // Filter out current fruit if currently on a monograph page
    const currentPath = window.location.pathname;
    const currentSlug = currentPath.startsWith("/fruit/") ? currentPath.replace("/fruit/", "").replace("/", "") : "";
    const candidates = fruits.filter((f) => f.slug !== currentSlug);
    const pool = candidates.length > 0 ? candidates : fruits;

    const randomFruit = pool[Math.floor(Math.random() * pool.length)];

    setTimeout(() => {
      window.location.href = `/fruit/${randomFruit.slug}`;
    }, 250);
  };

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleSurprise}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-indigo-500/40 bg-indigo-950/40 hover:bg-indigo-900/60 text-xs font-ui font-semibold text-indigo-300 hover:text-white transition-all shadow-sm cursor-pointer ${className}`}
        title="Discover a random botanical monograph"
      >
        <span className={`transition-transform duration-500 ${isSpinning ? "rotate-180 scale-110" : ""}`}>
          ✨
        </span>
        <span>Surprise Me</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSurprise}
      aria-label="Discover a random fruit monograph"
      title="Surprise Me (Random Monograph)"
      className={`flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-amber-300 hover:border-amber-500/40 transition-all cursor-pointer ${className}`}
    >
      <svg
        className={`w-4 h-4 transition-transform duration-500 ${isSpinning ? "rotate-180 scale-125 text-amber-300" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    </button>
  );
};
