import React, { useState, useEffect } from "react";
import type { Fruit } from "@/types";

interface FavoritesDrawerProps {
  allFruits: Fruit[];
}

const STORAGE_KEY = "fruitypedia_favorites";

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ allFruits }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoriteSlugs(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Sync to localStorage and broadcast change whenever favoriteSlugs updates
  const updateFavorites = (newSlugs: string[]) => {
    setFavoriteSlugs(newSlugs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSlugs));
    } catch {
      // Ignore write errors
    }
    window.dispatchEvent(
      new CustomEvent("favorites-updated", {
        detail: { favorites: newSlugs }
      })
    );
  };

  const removeFavorite = (slug: string) => {
    const updated = favoriteSlugs.filter((s) => s !== slug);
    updateFavorites(updated);
  };

  const clearAllFavorites = () => {
    updateFavorites([]);
  };

  // Event listeners for window-level triggers
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ slug: string }>;
      const targetSlug = customEvent.detail?.slug;
      if (!targetSlug) return;

      setFavoriteSlugs((current) => {
        let next: string[];
        if (current.includes(targetSlug)) {
          next = current.filter((s) => s !== targetSlug);
        } else {
          next = [...current, targetSlug];
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // Ignore
        }
        window.dispatchEvent(
          new CustomEvent("favorites-updated", {
            detail: { favorites: next }
          })
        );
        return next;
      });
    };

    window.addEventListener("open-favorites", handleOpen);
    window.addEventListener("toggle-favorite", handleToggle);

    return () => {
      window.removeEventListener("open-favorites", handleOpen);
      window.removeEventListener("toggle-favorite", handleToggle);
    };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Match favorite fruits data
  const favoriteFruits = favoriteSlugs
    .map((slug) => allFruits.find((f) => f.slug === slug))
    .filter((f): f is Fruit => Boolean(f));

  return (
    <>
      {/* Slide-over Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Favorites drawer">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-zinc-950 border-l border-zinc-800 h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
            {/* Drawer Header */}
            <div className="p-5 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                <h3 className="font-display font-bold text-white text-base tracking-tight">
                  Saved Monographs
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 font-mono text-[11px] text-zinc-300">
                  {favoriteFruits.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                aria-label="Close favorites drawer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Body: Fruit List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5 divide-y divide-zinc-900">
              {favoriteFruits.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400/60 text-xl">
                    ♥
                  </div>
                  <h4 className="font-display font-medium text-white text-sm">No Saved Fruits Yet</h4>
                  <p className="font-ui text-xs text-zinc-400 mt-2 max-w-xs mx-auto leading-relaxed">
                    Bookmark your favorite fruits while browsing monographs or the directory to curate your personal botanical archive.
                  </p>
                  <a
                    href="/directory"
                    onClick={() => setIsOpen(false)}
                    className="inline-block mt-5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-ui font-medium text-zinc-200 hover:text-white transition-all"
                  >
                    Explore Directory →
                  </a>
                </div>
              ) : (
                favoriteFruits.map((fruit) => (
                  <div
                    key={fruit.slug}
                    className="pt-3.5 first:pt-0 flex items-center justify-between gap-3 group"
                  >
                    <a
                      href={`/fruit/${fruit.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <img
                        src={fruit.images.hero.src}
                        alt={fruit.name}
                        className="w-12 h-12 rounded-xl object-cover border border-zinc-800 bg-zinc-900 shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-semibold text-sm text-zinc-100 group-hover:text-indigo-300 transition-colors truncate">
                          {fruit.name}
                        </div>
                        <div className="font-editorial italic text-xs text-zinc-500 truncate">
                          {[fruit.taxonomy.genus, fruit.taxonomy.species].filter(Boolean).join(" ") || fruit.taxonomy.family}
                        </div>
                        <div className="flex items-center gap-2 mt-1 font-mono text-[10px] text-zinc-400">
                          <span>{fruit.nutrition.calories.amount} kcal</span>
                          {fruit.nutrition.nutrients.vitaminC && (
                            <>
                              <span>•</span>
                              <span>{fruit.nutrition.nutrients.vitaminC.amount}mg Vit C</span>
                            </>
                          )}
                        </div>
                      </div>
                    </a>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`/compare?a=${fruit.slug}`}
                        onClick={() => setIsOpen(false)}
                        title="Compare this fruit"
                        className="p-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white transition-all text-xs"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </a>

                      <button
                        type="button"
                        onClick={() => removeFavorite(fruit.slug)}
                        title="Remove from favorites"
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-900 transition-all cursor-pointer"
                        aria-label={`Remove ${fruit.name} from favorites`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {favoriteFruits.length > 0 && (
              <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between gap-3">
                {favoriteFruits.length >= 2 ? (
                  <a
                    href={`/compare?a=${favoriteFruits[0].slug}&b=${favoriteFruits[1].slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2 px-3 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-ui font-semibold text-xs transition-all shadow-sm"
                  >
                    Compare Top 2 ({favoriteFruits[0].name} & {favoriteFruits[1].name})
                  </a>
                ) : (
                  <a
                    href={`/compare?a=${favoriteFruits[0].slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2 px-3 text-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-ui font-semibold text-xs transition-all"
                  >
                    Compare in Lab
                  </a>
                )}

                <button
                  type="button"
                  onClick={clearAllFavorites}
                  className="px-3 py-2 rounded-xl text-xs font-ui text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Navbar icon button showing live badge count of saved favorites.
 */
export const FavoritesNavButton: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setCount(parsed.length);
            return;
          }
        }
      } catch {
        // Ignore
      }
      setCount(0);
    };

    updateCount();

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ favorites: string[] }>;
      if (customEvent.detail?.favorites) {
        setCount(customEvent.detail.favorites.length);
      } else {
        updateCount();
      }
    };

    window.addEventListener("favorites-updated", handleUpdate);
    return () => window.removeEventListener("favorites-updated", handleUpdate);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("open-favorites"))}
      aria-label={`Open favorites drawer (${count} saved)`}
      title="Saved Fruits"
      className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-rose-400 hover:border-zinc-700 transition-all cursor-pointer"
    >
      <svg className="w-4 h-4" fill={count > 0 ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-mono font-bold text-white flex items-center justify-center shadow-[0_0_6px_rgba(244,63,94,0.8)]">
          {count}
        </span>
      )}
    </button>
  );
};
