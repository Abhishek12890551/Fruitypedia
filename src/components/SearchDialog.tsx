import React, { useState, useEffect, useRef, useMemo } from "react";
import type { Fruit, Category } from "../types/fruit";
import { searchCatalog } from "../utils/searchEngine";

interface SearchDialogProps {
  fruits: Fruit[];
  categories: Category[];
}

const QUICK_FILTERS = [
  { label: "Vitamin C", query: "vitamin c" },
  { label: "Potassium", query: "potassium" },
  { label: "Hydration", query: "hydration" },
  { label: "Low Calorie", query: "calor" },
  { label: "Antioxidants", query: "antioxidant" },
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

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ query?: string }>;
      if (customEvent.detail?.query) {
        setQuery(customEvent.detail.query);
      }
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
      setTimeout(() => inputRef.current?.focus(), 40);
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
    if (!query) return [];
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
  }, [query, matchingFruits, matchingCategories]);

  // Highlight default featured fruits when query is empty
  const defaultHighlights = useMemo(() => {
    return fruits.slice(0, 4);
  }, [fruits]);

  // Keyboard navigation within results list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const count = query ? allItems.length : defaultHighlights.length;
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, count));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const count = query ? allItems.length : defaultHighlights.length;
      setSelectedIndex((prev) => (prev - 1 + count) % Math.max(1, count));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (query && allItems[selectedIndex]) {
        window.location.href = allItems[selectedIndex].url;
      } else if (!query && defaultHighlights[selectedIndex]) {
        window.location.href = `/fruit/${defaultHighlights[selectedIndex].slug}`;
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/75 backdrop-blur-xl transition-all"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Search encyclopedia"
    >
      <div
        className="w-full max-w-xl bg-zinc-950/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col animate-dialog-in"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleListKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800/80 gap-3">
          <svg
            className="w-5 h-5 text-zinc-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
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
            placeholder="Search fruits, nutrients, regions, taxonomy..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base outline-none font-ui"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="text-xs font-ui text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Search Content Body */}
        <div className="max-h-[26rem] overflow-y-auto p-3 space-y-4 font-ui scrollbar-thin">
          {!query ? (
            /* Clean Empty State: Quick Suggestions & Featured Specimens */
            <div className="space-y-4 py-1">
              {/* Quick Filter Tags */}
              <div className="px-2">
                <p className="text-[10px] font-ui font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Quick Inquiries
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_FILTERS.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => {
                        setQuery(s.query);
                        setSelectedIndex(0);
                      }}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 hover:text-white text-xs transition-colors cursor-pointer"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Monographs List */}
              <div className="px-2 pt-1 border-t border-zinc-900/80">
                <p className="text-[10px] font-ui font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Curated Monographs
                </p>
                <div className="space-y-1">
                  {defaultHighlights.map((fruit, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <a
                        key={fruit.id}
                        href={`/fruit/${fruit.slug}`}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                          isSelected
                            ? "bg-zinc-800/90 text-white shadow-sm"
                            : "hover:bg-zinc-900/80 text-zinc-300 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {fruit.images?.hero ? (
                            <img
                              src={fruit.images.hero.src}
                              alt={fruit.name}
                              className="w-8 h-8 rounded-lg object-cover shrink-0 border border-zinc-800 bg-zinc-900"
                              loading="lazy"
                            />
                          ) : (
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: fruit.theme.primary }}
                            />
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-medium text-sm text-white">
                                {fruit.name}
                              </span>
                              <span className="font-editorial italic text-xs text-zinc-400 truncate">
                                {fruit.taxonomy.genus} {fruit.taxonomy.species}
                              </span>
                              {fruit.editorial?.nickname && (
                                <span className="hidden sm:inline-block text-[11px] font-editorial text-amber-300/80 truncate">
                                  · {fruit.editorial.nickname}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-zinc-400 font-mono shrink-0">
                          {fruit.nutrition.calories.amount} kcal
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Active Query Results */
            <>
              {/* Fruits Results */}
              {matchingFruits.length > 0 && (
                <div>
                  <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Monographs ({matchingFruits.length})
                  </div>
                  <div className="space-y-1 mt-1">
                    {matchingFruits.map((item, idx) => {
                      const fruit = item.fruit;
                      const isSelected = selectedIndex === idx;
                      return (
                        <a
                          key={fruit.id}
                          href={`/fruit/${fruit.slug}`}
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                            isSelected
                              ? "bg-zinc-800/90 text-white shadow-sm"
                              : "hover:bg-zinc-900/80 text-zinc-300 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {fruit.images?.hero ? (
                              <img
                                src={fruit.images.hero.src}
                                alt={fruit.name}
                                className="w-8 h-8 rounded-lg object-cover shrink-0 border border-zinc-800 bg-zinc-900"
                                loading="lazy"
                              />
                            ) : (
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: fruit.theme.primary }}
                              />
                            )}
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-display font-medium text-sm text-white">
                                  {fruit.name}
                                </span>
                                <span className="font-editorial italic text-xs text-zinc-400 truncate">
                                  {fruit.taxonomy.genus} {fruit.taxonomy.species}
                                </span>
                                {fruit.editorial?.nickname && (
                                  <span className="hidden sm:inline-block text-[11px] font-editorial text-amber-300/80 truncate">
                                    · {fruit.editorial.nickname}
                                  </span>
                                )}
                              </div>
                              {item.matchReason && item.matchType !== "name" && (
                                <p className="text-[11px] text-indigo-300 font-ui truncate mt-0.5">
                                  {item.matchReason}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0 pl-2">
                            {item.badgeText && (
                              <span className="text-[10px] font-ui px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                                {item.badgeText}
                              </span>
                            )}
                            <span className="text-zinc-500 text-sm">→</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Categories Results */}
              {matchingCategories.length > 0 && (
                <div className="pt-2 border-t border-zinc-900/80">
                  <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Botanical Families ({matchingCategories.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1">
                    {matchingCategories.map((cResult, catIdx) => {
                      const cat = cResult.category;
                      const itemIndex = matchingFruits.length + catIdx;
                      const isSelected = selectedIndex === itemIndex;
                      return (
                        <a
                          key={cat.id}
                          href={`/directory?category=${cat.id}`}
                          className={`p-2.5 rounded-xl border border-zinc-800/80 transition-all ${
                            isSelected
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "hover:bg-zinc-900/80 text-zinc-300 hover:text-white"
                          }`}
                        >
                          <div className="font-display font-medium text-sm text-white">{cat.name}</div>
                          <div className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">{cat.description}</div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Empty Search State */}
              {allItems.length === 0 && (
                <div className="py-10 text-center space-y-2">
                  <p className="text-sm text-zinc-300 font-medium">
                    No matching monograph found for "{query}".
                  </p>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    Try searching common names (e.g. "Apple"), botanical binomials, or nutrients ("Vitamin C", "Potassium").
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-ui text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Clear search
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts & Status */}
        <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-ui">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 mr-1 font-mono">↑↓</kbd>
              navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 mr-1 font-mono">↵</kbd>
              open
            </span>
            <span>
              <kbd className="px-1 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 mr-1 font-mono">esc</kbd>
              close
            </span>
          </div>
          <span>
            {query ? `${totalMatches} match${totalMatches === 1 ? "" : "es"}` : "Fruitypedia Command"}
          </span>
        </div>
      </div>
    </div>
  );
};
