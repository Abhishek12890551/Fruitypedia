import React, { useState, useEffect, useRef, useMemo } from "react";
import type { Fruit, Category } from "../types/fruit";
import { searchCatalog } from "../utils/searchEngine";

interface SearchDialogProps {
  fruits: Fruit[];
  categories: Category[];
}

const SUGGESTED_QUERIES = [
  { label: "Vitamin C", query: "vitamin c" },
  { label: "Potassium", query: "potassium" },
  { label: "Hydration", query: "hydration" },
  { label: "Central Asia", query: "central asia" },
  { label: "Crisp", query: "crisp" },
  { label: "Honeycrisp", query: "honeycrisp" },
  { label: "Low Calorie", query: "calor" },
];

export const SearchDialog: React.FC<SearchDialogProps> = ({ fruits, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global shortcut listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K, Ctrl+K or / (when not already typing in an input)
      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "/" &&
          document.activeElement?.tagName !== "INPUT" &&
          document.activeElement?.tagName !== "TEXTAREA")
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleCustomOpen);
    };
  }, []);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Execute multi-dimensional search
  const { fruits: matchingFruits, categories: matchingCategories, totalMatches } = useMemo(() => {
    return searchCatalog(query, fruits, categories);
  }, [query, fruits, categories]);

  const allItems = useMemo(() => {
    return [
      ...matchingFruits.map((f) => ({
        type: "fruit" as const,
        item: f.fruit,
        result: f,
        url: `/fruit/${f.fruit.slug}`,
      })),
      ...matchingCategories.map((c) => ({
        type: "category" as const,
        item: c.category,
        result: c,
        url: `/directory?category=${c.category.id}`,
      })),
    ];
  }, [matchingFruits, matchingCategories]);

  // Keyboard navigation within results list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, allItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allItems.length) % Math.max(1, allItems.length));
    } else if (e.key === "Enter" && allItems[selectedIndex]) {
      e.preventDefault();
      window.location.href = allItems[selectedIndex].url;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Search encyclopedia"
    >
      <div
        className="w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleListKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
          <svg
            className="w-5 h-5 text-zinc-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search fruits, nutrients (Vitamin C, potassium), origin, cultivar..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base outline-none font-ui"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="text-xs font-ui text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800 transition-colors"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-ui tracking-wider text-zinc-400 bg-zinc-800 border border-zinc-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Discovery Suggestion Chips (Shown when query is empty) */}
        {!query && (
          <div className="px-4 py-2.5 bg-zinc-950/40 border-b border-zinc-800/80 flex items-center gap-2 overflow-x-auto text-xs font-ui">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider flex-shrink-0 font-medium">
              Explore:
            </span>
            <div className="flex items-center gap-1.5 flex-nowrap">
              {SUGGESTED_QUERIES.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => {
                    setQuery(s.query);
                    setSelectedIndex(0);
                  }}
                  className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors whitespace-nowrap text-xs"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Container */}
        <div className="max-h-[28rem] overflow-y-auto p-3 space-y-4 font-ui scrollbar-thin">
          {/* Fruits Results */}
          {matchingFruits.length > 0 && (
            <div>
              <div className="flex items-center justify-between px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                <span>Fruits</span>
                <span>{matchingFruits.length}</span>
              </div>
              <div className="space-y-1.5 mt-1">
                {matchingFruits.map((item, idx) => {
                  const fruit = item.fruit;
                  const isSelected = selectedIndex === idx;
                  return (
                    <a
                      key={fruit.id}
                      href={`/fruit/${fruit.slug}`}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isSelected
                          ? "bg-zinc-800 text-white shadow-inner"
                          : "hover:bg-zinc-800/60 text-zinc-300 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {fruit.images?.hero ? (
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-800 bg-zinc-950">
                            <img
                              src={fruit.images.hero.src}
                              alt={fruit.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "72% center" }}
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <span
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: fruit.theme.primary }}
                          />
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-display font-semibold text-sm sm:text-base text-white">
                              {fruit.name}
                            </span>
                            {fruit.editorial.nickname && (
                              <span className="font-script text-xs opacity-75 text-zinc-300">
                                {fruit.editorial.nickname}
                              </span>
                            )}
                            {item.badgeText && (
                              <span
                                className="text-[10px] font-ui font-medium px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: `${fruit.theme.primary}22`,
                                  color: fruit.theme.primary,
                                  border: `1px solid ${fruit.theme.primary}44`,
                                }}
                              >
                                {item.badgeText}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-zinc-400 font-editorial italic truncate">
                            <span>
                              {fruit.taxonomy.genus} {fruit.taxonomy.species}
                            </span>
                            {fruit.taxonomy.family && (
                              <span className="text-zinc-500">· {fruit.taxonomy.family}</span>
                            )}
                          </div>
                          {item.matchReason && item.matchType !== "name" && (
                            <div className="text-[11px] text-indigo-300 font-ui font-medium mt-0.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-indigo-400" />
                              <span>{item.matchReason}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-3 flex-shrink-0">
                        <span className="text-xs text-zinc-500 font-ui">
                          {fruit.nutrition.calories.amount} kcal
                        </span>
                        <span className="text-zinc-500 group-hover:text-zinc-300 text-sm">→</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Categories Results */}
          {matchingCategories.length > 0 && (
            <div>
              <div className="flex items-center justify-between px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                <span>Categories</span>
                <span>{matchingCategories.length}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                {matchingCategories.map((cResult, catIdx) => {
                  const cat = cResult.category;
                  const itemIndex = matchingFruits.length + catIdx;
                  const isSelected = selectedIndex === itemIndex;
                  return (
                    <a
                      key={cat.id}
                      href={`/directory?category=${cat.id}`}
                      className={`p-3 rounded-xl border border-zinc-800/80 transition-all ${
                        isSelected
                          ? "bg-zinc-800 border-zinc-600 text-white"
                          : "hover:bg-zinc-800/50 text-zinc-300 hover:text-white"
                      }`}
                      style={{ borderLeftColor: cat.theme.primary, borderLeftWidth: "3px" }}
                    >
                      <div className="font-display font-semibold text-sm text-white">{cat.name}</div>
                      <div className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{cat.description}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty State */}
          {allItems.length === 0 && (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm text-zinc-300 font-medium">
                No matching monograph found for "{query}".
              </p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Search by common name, botanical binomial (e.g. <em>Malus domestica</em>), nutrients (e.g. "Vitamin C", "Potassium"), or origin region (e.g. "Central Asia").
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-800 text-xs font-ui text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  Reset search
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts & Status */}
        <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-ui">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 mr-1">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 mr-1">↓</kbd>
              to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 mr-1">↵</kbd>
              to select
            </span>
          </div>
          <span>
            {query ? `${totalMatches} match${totalMatches === 1 ? "" : "es"}` : "Fruitypedia Command Palette"}
          </span>
        </div>
      </div>
    </div>
  );
};
