import React, { useState } from "react";
import type { Nutrition, NutrientValue } from "../types/nutrition";

interface ServingCalculatorProps {
  nutrition: Nutrition;
  themePrimary?: string;
  defaultServingGrams?: number;
}

export const ServingCalculator: React.FC<ServingCalculatorProps> = ({
  nutrition,
  themePrimary = "#4A5FE0",
  defaultServingGrams = 148, // 1 cup of blueberries
}) => {
  const [activePortion, setActivePortion] = useState<"100g" | "serving" | "custom">("100g");
  const [customGrams, setCustomGrams] = useState<number>(100);

  const currentGrams =
    activePortion === "100g"
      ? 100
      : activePortion === "serving"
      ? defaultServingGrams
      : customGrams;

  const ratio = currentGrams / 100;

  const scaleValue = (val: NutrientValue | undefined): { amount: string; dv?: number } => {
    if (!val) return { amount: "0" };
    const scaledAmount = val.amount * ratio;
    const formatted =
      scaledAmount >= 10
        ? scaledAmount.toFixed(0)
        : scaledAmount >= 1
        ? scaledAmount.toFixed(1)
        : scaledAmount.toFixed(2);
    const scaledDv = val.dailyValuePercent !== undefined ? Math.round(val.dailyValuePercent * ratio) : undefined;
    return { amount: formatted, dv: scaledDv };
  };

  const calories = scaleValue(nutrition.calories);
  const carbs = scaleValue(nutrition.nutrients.carbohydrates);
  const fiber = scaleValue(nutrition.nutrients.fiber);
  const sugars = scaleValue(nutrition.nutrients.sugars);
  const protein = scaleValue(nutrition.nutrients.protein);
  const fat = scaleValue(nutrition.nutrients.totalFat);
  const vitC = scaleValue(nutrition.nutrients.vitaminC);
  const vitK = scaleValue(nutrition.nutrients.vitaminK);
  const manganese = scaleValue(nutrition.nutrients.manganese);
  const potassium = scaleValue(nutrition.nutrients.potassium);

  return (
    <div
      className="serving-calc bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-md"
      style={{ borderColor: `${themePrimary}44` }}
    >
      {/* Header with portion toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-zinc-800/60">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 font-ui">
            Interactive Nutrition Explorer
          </span>
          <h3 className="text-2xl font-display font-bold text-white mt-1">
            Portion & Daily Value Calculator
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-zinc-950/80 border border-zinc-800 rounded-xl self-start sm:self-auto" role="radiogroup" aria-label="Portion size">
          <button
            type="button"
            role="radio"
            aria-checked={activePortion === "100g"}
            onClick={() => {
              setActivePortion("100g");
              setCustomGrams(100);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-ui transition-all ${
              activePortion === "100g"
                ? "bg-white text-zinc-950 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            100 g (Standard)
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={activePortion === "serving"}
            onClick={() => {
              setActivePortion("serving");
              setCustomGrams(defaultServingGrams);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-ui transition-all ${
              activePortion === "serving"
                ? "bg-white text-zinc-950 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            1 Cup ({defaultServingGrams}g)
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={activePortion === "custom"}
            onClick={() => setActivePortion("custom")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-ui transition-all ${
              activePortion === "custom"
                ? "bg-white text-zinc-950 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Custom portion slider */}
      {activePortion === "custom" && (
        <div className="py-4 border-b border-zinc-800/60 animate-fadeIn">
          <div className="flex justify-between items-center text-sm font-ui mb-2">
            <label htmlFor="custom-grams-slider" className="text-zinc-300">Custom Serving Weight:</label>
            <span className="font-semibold text-white bg-zinc-800 px-2.5 py-0.5 rounded-md">
              {customGrams} g
            </span>
          </div>
          <input
            id="custom-grams-slider"
            type="range"
            min={25}
            max={400}
            step={5}
            value={customGrams}
            onChange={(e) => setCustomGrams(Number(e.target.value))}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            aria-label="Custom serving in grams"
          />
          <div className="flex justify-between text-[11px] text-zinc-500 font-ui mt-1">
            <span>25 g (Handful)</span>
            <span>200 g (Large bowl)</span>
            <span>400 g (Full punnet)</span>
          </div>
        </div>
      )}

      {/* Calorie Spotlight & Macros Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-zinc-400 font-ui">Energy</span>
          <div className="my-2">
            <span className="text-3xl font-display font-extrabold text-white">{calories.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">kcal</span>
          </div>
          <span className="text-[11px] text-zinc-500 font-ui">per {currentGrams}g portion</span>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/40 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-ui">Total Carbs</span>
          <div className="my-1.5">
            <span className="text-2xl font-display font-bold text-white">{carbs.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">g</span>
          </div>
          {carbs.dv !== undefined && (
            <span className="text-[11px] text-indigo-400 font-ui font-medium">{carbs.dv}% DV</span>
          )}
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/40 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-ui">Dietary Fiber</span>
          <div className="my-1.5">
            <span className="text-2xl font-display font-bold text-emerald-400">{fiber.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">g</span>
          </div>
          {fiber.dv !== undefined && (
            <span className="text-[11px] text-emerald-400 font-ui font-medium">{fiber.dv}% DV</span>
          )}
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/40 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-ui">Sugars</span>
          <div className="my-1.5">
            <span className="text-2xl font-display font-bold text-amber-300">{sugars.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">g</span>
          </div>
          <span className="text-[11px] text-zinc-500 font-ui">Naturally occurring</span>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/40 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-ui">Protein</span>
          <div className="my-1.5">
            <span className="text-2xl font-display font-bold text-white">{protein.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">g</span>
          </div>
          {protein.dv !== undefined && (
            <span className="text-[11px] text-zinc-500 font-ui">{protein.dv}% DV</span>
          )}
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/40 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-ui">Total Fat</span>
          <div className="my-1.5">
            <span className="text-2xl font-display font-bold text-white">{fat.amount}</span>
            <span className="text-xs text-zinc-400 ml-1 font-ui">g</span>
          </div>
          {fat.dv !== undefined && (
            <span className="text-[11px] text-zinc-500 font-ui">{fat.dv}% DV</span>
          )}
        </div>
      </div>

      {/* Micronutrient Progress Bars */}
      <div className="mt-6 pt-6 border-t border-zinc-800/60">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-ui mb-4">
          Daily Value Micronutrients (% DV for {currentGrams}g)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Vitamin C */}
          <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-white font-ui">Vitamin C</span>
              <div className="text-right">
                <span className="text-xs text-zinc-300 font-ui mr-1.5">{vitC.amount} mg</span>
                <span className="text-xs font-bold text-emerald-400 font-ui">{vitC.dv || 0}% DV</span>
              </div>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, vitC.dv || 0)}%` }}
              />
            </div>
          </div>

          {/* Vitamin K */}
          <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-white font-ui">Vitamin K</span>
              <div className="text-right">
                <span className="text-xs text-zinc-300 font-ui mr-1.5">{vitK.amount} µg</span>
                <span className="text-xs font-bold text-indigo-400 font-ui">{vitK.dv || 0}% DV</span>
              </div>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, vitK.dv || 0)}%` }}
              />
            </div>
          </div>

          {/* Manganese */}
          <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-white font-ui">Manganese</span>
              <div className="text-right">
                <span className="text-xs text-zinc-300 font-ui mr-1.5">{manganese.amount} mg</span>
                <span className="text-xs font-bold text-amber-400 font-ui">{manganese.dv || 0}% DV</span>
              </div>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, manganese.dv || 0)}%` }}
              />
            </div>
          </div>

          {/* Potassium */}
          <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-white font-ui">Potassium</span>
              <div className="text-right">
                <span className="text-xs text-zinc-300 font-ui mr-1.5">{potassium.amount} mg</span>
                <span className="text-xs font-bold text-zinc-400 font-ui">{potassium.dv || 0}% DV</span>
              </div>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-zinc-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, potassium.dv || 0)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scientific Provenance Badge */}
      <div className="mt-5 flex items-center justify-between text-[11px] text-zinc-500 font-ui">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Data normalized from USDA FoodData Central (FDC ID: 171711)
        </span>
        <span>FDA Daily Value Reference Standard</span>
      </div>
    </div>
  );
};
