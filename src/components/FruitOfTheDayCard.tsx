import React, { useState, useEffect } from "react";
import type { Fruit } from "../types/fruit";
import { getFruitOfTheDay } from "../utils/fruitOfTheDay";

interface FruitOfTheDayCardProps {
  fruits: Fruit[];
}

export const FruitOfTheDayCard: React.FC<FruitOfTheDayCardProps> = ({ fruits }) => {
  const [todayFruit, setTodayFruit] = useState<Fruit | undefined>(() => getFruitOfTheDay(fruits));
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setTodayFruit(getFruitOfTheDay(fruits));
    const now = new Date();
    setFormattedDate(
      now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      })
    );
  }, [fruits]);

  if (!todayFruit) return null;

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-950 shadow-2xl backdrop-blur-md"
      style={{
        boxShadow: `0 20px 50px -15px ${todayFruit.theme.primary}22`,
      }}
    >
      <div
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ backgroundColor: todayFruit.theme.primary }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[440px]">
        <div className="p-6 sm:p-10 md:p-12 md:col-span-7 lg:col-span-7 flex flex-col justify-between space-y-5 z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-ui uppercase tracking-widest bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: todayFruit.theme.primary }} />
                Fruit of the Day
              </span>
              {formattedDate && (
                <span className="text-xs text-zinc-500 font-ui">
                  {formattedDate} (UTC)
                </span>
              )}
            </div>

            <div>
              {todayFruit.editorial.nickname && (
                <p className="font-script text-xl text-zinc-300 mb-1" style={{ color: todayFruit.theme.secondary }}>
                  {todayFruit.editorial.nickname}
                </p>
              )}
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {todayFruit.name}
              </h3>
              <p className="font-editorial italic text-zinc-400 text-base mt-1">
                {todayFruit.taxonomy.genus} {todayFruit.taxonomy.species} · {todayFruit.taxonomy.family}
              </p>
            </div>

            <p className="font-editorial text-zinc-300 text-base leading-relaxed">
              {todayFruit.editorial.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 font-ui text-xs text-zinc-400">
              <div>
                <span className="text-white font-display text-xl font-bold block">
                  {todayFruit.nutrition.calories.amount}
                </span>
                <span>kcal / 100g</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <span className="text-emerald-400 font-display text-xl font-bold block">
                  {todayFruit.nutrition.nutrients.vitaminC?.amount || 0} mg
                </span>
                <span>Vitamin C</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <span className="text-amber-300 font-display text-xl font-bold block">
                  {todayFruit.tasteProfile.sweetness.value}/10
                </span>
                <span>Sweetness</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`/fruit/${todayFruit.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-ui text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Read Full Monograph</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {todayFruit.images?.hero && (
          <div className="relative md:col-span-5 lg:col-span-5 min-h-[300px] md:min-h-full overflow-hidden">
            <img
              src={todayFruit.images.hero.src}
              alt={todayFruit.images.hero.alt}
              className="w-full h-full object-cover object-right"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
};
