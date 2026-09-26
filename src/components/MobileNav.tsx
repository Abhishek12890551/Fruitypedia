import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface NavLink {
  href: string;
  label: string;
  badge?: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/explore", label: "World Atlas" },
  { href: "/compare", label: "Compare" },
  { href: "/nutrition", label: "Nutrition Explorer" },
  { href: "/benefits", label: "Health Benefits" },
  { href: "/seasons", label: "Seasons" },
  { href: "/trivia", label: "Botanical Trivia", badge: "Quiz" },
  { href: "/about", label: "About & Sources" },
];

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const triggerSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("open-search"));
  };

  const triggerFavorites = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("open-favorites"));
  };

  return (
    <div className="mobile-nav-root lg:hidden shrink-0">
      {/* High-Visibility Menu Trigger Button */}
      <button
        type="button"
        id="mobile-nav-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-xs font-ui font-semibold text-white hover:bg-zinc-700 transition-all cursor-pointer shadow-sm shrink-0"
      >
        {isOpen ? (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
        <span>Menu</span>
      </button>

      {/* Fullscreen Mobile Drawer Overlay Portal to document.body */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-zinc-950/98 backdrop-blur-2xl flex flex-col justify-between p-5 pt-6 overflow-y-auto animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="space-y-5" onClick={(e) => e.stopPropagation()}>
            {/* Top Drawer Header with Brand & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <a href="/" onClick={() => setIsOpen(false)} className="flex items-baseline gap-0.5 hover:opacity-90 transition-opacity" aria-label="Fruitypedia Home">
                <span className="font-editorial italic text-2xl text-white tracking-normal font-normal lowercase select-none leading-none">fruitypedia</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)] transform translate-y-[-1px]"></span>
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-ui font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                aria-label="Close menu"
              >
                <span>✕ Close</span>
              </button>
            </div>

            {/* Top Actions: Search & Saved Fruits */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={triggerSearch}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 font-ui hover:border-zinc-700 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
                <kbd className="text-[10px] px-1 bg-zinc-800 rounded border border-zinc-700 font-mono text-zinc-400">⌘K</kbd>
              </button>

              <button
                type="button"
                onClick={triggerFavorites}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-rose-300 font-ui hover:border-rose-500/40 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Saved Fruits</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1 font-ui pt-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-zinc-200 hover:text-white py-3 px-2 border-b border-zinc-900 hover:bg-zinc-900/60 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 uppercase tracking-wider font-semibold">
                        {link.badge}
                      </span>
                    )}
                    <span className="text-zinc-600 text-sm">→</span>
                  </div>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Colophon Note */}
          <div className="pt-6 pb-2 border-t border-zinc-900 text-center font-ui text-xs text-zinc-500">
            <span className="font-display font-semibold text-zinc-300 text-sm block mb-1">
              Fruitypedia
            </span>
            The Visual Fruit Encyclopedia · Data: USDA FoodData Central
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
