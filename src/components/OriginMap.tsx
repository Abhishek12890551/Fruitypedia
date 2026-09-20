import React, { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Pinned GeoJSON/TopoJSON reference (local static asset in public/maps/)
const GEO_URL = "/maps/countries-110m.json";

interface OriginMapProps {
  originCoordinates?: [number, number]; // [lat, lng]
  originRegion?: string;
  grownRegions?: string[];
  themeColor?: string;
}

// Canonical mapping from regions and aliases to TopoJSON country names
const REGION_COUNTRY_MAP: Record<string, string[]> = {
  "north america": ["United States of America", "Canada"],
  "south america": [
    "Brazil",
    "Argentina",
    "Chile",
    "Peru",
    "Colombia",
    "Ecuador",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "Venezuela",
  ],
  "central america": [
    "Mexico",
    "Guatemala",
    "Belize",
    "El Salvador",
    "Honduras",
    "Nicaragua",
    "Costa Rica",
    "Panama",
  ],
  "americas": [
    "United States of America",
    "Canada",
    "Mexico",
    "Chile",
    "Peru",
    "Brazil",
    "Argentina",
    "Colombia",
  ],
  "the americas": [
    "United States of America",
    "Canada",
    "Mexico",
    "Chile",
    "Peru",
    "Brazil",
    "Argentina",
    "Colombia",
  ],
  "mediterranean": [
    "Spain",
    "Italy",
    "Greece",
    "Turkey",
    "Morocco",
    "Tunisia",
    "Algeria",
    "Egypt",
    "France",
    "Portugal",
  ],
  "east asia": ["China", "Japan", "South Korea", "Taiwan", "Mongolia"],
  "central asia": [
    "Kazakhstan",
    "Kyrgyzstan",
    "Tajikistan",
    "Uzbekistan",
    "Turkmenistan",
  ],
  "tian shan": ["Kazakhstan", "Kyrgyzstan", "Uzbekistan", "China"],
  "northeast africa": [
    "Egypt",
    "Sudan",
    "S. Sudan",
    "Chad",
    "Niger",
    "Libya",
    "Ethiopia",
  ],
  "nile basin": ["Egypt", "Sudan", "S. Sudan", "Ethiopia"],
  "sahel": ["Sudan", "Chad", "Niger", "Mali", "Mauritania", "Senegal"],
  "africa": [
    "Egypt",
    "Sudan",
    "S. Sudan",
    "Algeria",
    "Morocco",
    "South Africa",
    "Nigeria",
    "Kenya",
    "Ethiopia",
  ],
  "southeast asia": [
    "Indonesia",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Myanmar",
    "Cambodia",
    "Laos",
  ],
  "south asia": ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal"],
  "europe": [
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Poland",
    "Ukraine",
    "Romania",
    "Netherlands",
    "Belgium",
    "Sweden",
    "Norway",
    "Finland",
  ],
};

const COUNTRY_ALIASES: Record<string, string> = {
  "united states": "United States of America",
  "usa": "United States of America",
  "us": "United States of America",
  "uk": "United Kingdom",
  "britain": "United Kingdom",
  "south korea": "South Korea",
  "korea": "South Korea",
  "north korea": "North Korea",
  "dr congo": "Dem. Rep. Congo",
  "czech republic": "Czechia",
  "dominican republic": "Dominican Rep.",
  "bosnia": "Bosnia and Herz.",
};

function normalizeCountry(name: string): string {
  const lower = name.trim().toLowerCase();
  return COUNTRY_ALIASES[lower] || name.trim();
}

export const OriginMap: React.FC<OriginMapProps> = ({
  originCoordinates = [44.0, -72.0], // Default North America for Blueberry
  originRegion = "North America",
  grownRegions = [
    "United States",
    "Canada",
    "Chile",
    "Peru",
    "Spain",
    "Poland",
    "Australia",
  ],
  themeColor = "#6366f1",
}) => {
  const [hasError, setHasError] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // [lat, lng] -> [longitude, latitude] for geo projections
  const markerCoords: [number, number] = [
    originCoordinates[1],
    originCoordinates[0],
  ];

  // Resolve native provenance and cultivated country sets
  const { nativeSet, cultivatedSet } = useMemo(() => {
    const native = new Set<string>();
    const cultivated = new Set<string>();

    const lowerRegion = originRegion.toLowerCase().trim();

    // Match region keywords
    for (const [regionKey, countries] of Object.entries(REGION_COUNTRY_MAP)) {
      if (
        lowerRegion.includes(regionKey) ||
        regionKey.includes(lowerRegion)
      ) {
        countries.forEach((c) => native.add(c));
      }
    }

    // Direct country name match
    const directCountry = normalizeCountry(originRegion);
    if (directCountry) native.add(directCountry);

    // Also scan common country tokens mentioned in parentheses e.g. "Kazakhstan", "Egypt", "Sudan"
    const knownCountries = [
      "Kazakhstan",
      "Kyrgyzstan",
      "Uzbekistan",
      "Egypt",
      "Sudan",
      "China",
      "India",
      "Iran",
      "Turkey",
      "United States of America",
      "Spain",
      "Italy",
    ];
    for (const c of knownCountries) {
      if (lowerRegion.includes(c.toLowerCase())) {
        native.add(c);
      }
    }

    // Modern cultivated hubs
    grownRegions.forEach((r) => {
      const norm = normalizeCountry(r);
      if (!native.has(norm)) {
        cultivated.add(norm);
      }
    });

    return { nativeSet: native, cultivatedSet: cultivated };
  }, [originRegion, grownRegions]);

  if (hasError) {
    return (
      <div className="w-full py-16 text-center text-zinc-500 font-ui text-sm">
        <p className="text-zinc-300 font-editorial text-lg mb-2">
          Native Botanical Range: {originRegion}
        </p>
        <p className="text-xs text-zinc-500">
          Global cartographic coordinates: {originCoordinates[0]}° N ·{" "}
          {Math.abs(originCoordinates[1])}° W
        </p>
      </div>
    );
  }

  // Compute CSS color values from themeColor
  const accentColor = themeColor || "#6366f1";

  return (
    <div className="relative w-full overflow-hidden">
      {/* Editorial Map Legend */}
      <div className="absolute top-4 left-4 sm:left-6 z-10 flex flex-wrap items-center gap-2 sm:gap-3 pointer-events-none">
        {/* Native Provenance Badge */}
        <div
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-ui text-zinc-200 shadow-lg"
          style={{ borderColor: `${accentColor}40`, borderWidth: "1px" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 10px ${accentColor}`,
            }}
          />
          <span className="tracking-wide">
            Native Range:{" "}
            <strong className="text-white font-medium">{originRegion}</strong>
          </span>
        </div>

        {/* Commercial Cultivation Hubs Badge */}
        {cultivatedSet.size > 0 && (
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/25 text-xs font-ui text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
            <span className="tracking-wide">Modern Cultivation Hubs</span>
          </div>
        )}

        {/* Dynamic Country Hover Callout */}
        {hoveredCountry && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/20 text-xs font-ui text-white animate-fade-in">
            <span>{hoveredCountry}</span>
            {nativeSet.has(hoveredCountry) && (
              <span className="text-[10px] font-mono" style={{ color: accentColor }}>
                [Native]
              </span>
            )}
            {cultivatedSet.has(hoveredCountry) && (
              <span className="text-[10px] text-amber-400 font-mono">
                [Cultivated]
              </span>
            )}
          </div>
        )}
      </div>

      <div className="w-full h-96 sm:h-[500px] md:h-[580px] lg:h-[680px] relative bg-[#09090c] rounded-2xl border border-zinc-800/60 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 175,
            center: [0, 15],
          }}
          width={960}
          height={540}
          className="w-full h-full"
        >
          <Geographies geography={GEO_URL} onError={() => setHasError(true)}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties?.name || "";
                const isNative = nativeSet.has(countryName);
                const isCultivated = cultivatedSet.has(countryName);

                // Distinct styling for Native, Cultivated, and Neutral countries
                let fill = "#17171d";
                let stroke = "#282832";
                let strokeWidth = 0.5;
                let hoverFill = "#24242d";

                if (isNative) {
                  // Dynamic fruit theme accent for Native Provenance
                  fill = `${accentColor}75`;
                  stroke = accentColor;
                  strokeWidth = 1.6;
                  hoverFill = `${accentColor}aa`;
                } else if (isCultivated) {
                  // Golden Amber Tint for Commercial Cultivation Hubs
                  fill = "rgba(251, 191, 36, 0.35)";
                  stroke = "rgba(251, 191, 36, 0.9)";
                  strokeWidth = 1.1;
                  hoverFill = "rgba(251, 191, 36, 0.6)";
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    onMouseEnter={() => setHoveredCountry(countryName)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={
                      {
                        default: {
                          outline: "none",
                          transition: "all 250ms ease",
                          cursor: isNative || isCultivated ? "pointer" : "default",
                        },
                        hover: {
                          fill: hoverFill,
                          outline: "none",
                          transition: "all 150ms ease",
                        },
                        pressed: { outline: "none" },
                      } as Record<string, React.CSSProperties>
                    }
                  />
                );
              })
            }
          </Geographies>

          {/* Botanical Origin Epicenter Pin with Dynamic Radial Glow */}
          <Marker coordinates={markerCoords}>
            <circle
              r={14}
              fill={`${accentColor}40`}
              className="animate-ping"
            />
            <circle
              r={5.5}
              fill={accentColor}
              stroke="#ffffff"
              strokeWidth={1.5}
              className="shadow-sm"
            />
          </Marker>
        </ComposableMap>
      </div>
    </div>
  );
};
