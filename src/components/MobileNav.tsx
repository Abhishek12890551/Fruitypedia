import React, { useState, useEffect } from "react";

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
  { href: "/about", label: "About & Methodology" },
];

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const triggerSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("open-search"));
  };

  return (
    <div className="mobile-nav-root md:hidden">
      {/* Menu Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-xs font-ui text-zinc-300 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
      >
        {isOpen ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
        <span>Menu</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg flex flex-col justify-between p-6 pt-20 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          {/* Top: Search button & Links */}
          <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={triggerSearch}
              className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700/80 rounded-xl text-left text-sm text-zinc-300 font-ui"
            >
              <span className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search encyclopedia...
              </span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold">⌘K</span>
            </button>

            <nav className="flex flex-col space-y-3 font-ui" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-zinc-200 hover:text-white py-2 border-b border-zinc-800/60"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 uppercase tracking-widest font-semibold">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Brand Statement */}
          <div className="pt-6 border-t border-zinc-800/80 text-center font-ui text-xs text-zinc-500">
            <span className="font-display font-semibold text-zinc-300 text-sm block mb-1">
              Fruitypedia
            </span>
            The Visual Fruit Encyclopedia
          </div>
        </div>
      )}
    </div>
  );
};
