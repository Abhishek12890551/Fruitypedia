import React, { useState, useMemo } from "react";
import type { Fruit } from "@/types";

export interface QuizQuestion {
  id: string;
  category: "Botanical Morphology" | "Nutritional Biochemistry" | "Geographic Diaspora" | "Taxonomy & Genetics";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceCitation: string;
  relatedFruitSlug?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1_strawberry_morphology",
    category: "Botanical Morphology",
    question: "Botanically speaking, what are the tiny specks situated on the exterior skin of a strawberry?",
    options: [
      "Seeds produced directly by naked ovules",
      "Achenes — individual dry fruits enclosing a seed",
      "Pollen glands adapted for wind dispersal",
      "Modified trichomes for cellular moisture retention"
    ],
    correctIndex: 1,
    explanation: "Strawberries are aggregate accessory fruits. The red sweet flesh is the swollen receptacle tissue, while each speck on the outside is technically an achene — a separate botanical fruit containing its own seed.",
    sourceCitation: "Royal Botanic Gardens, Kew & Radford et al., Fundamentals of Plant Systematics",
    relatedFruitSlug: "strawberry"
  },
  {
    id: "q2_banana_botany",
    category: "Botanical Morphology",
    question: "Under strict botanical classification, which of the following is technically categorized as a true berry?",
    options: [
      "Strawberry (Fragaria × ananassa)",
      "Raspberry (Rubus idaeus)",
      "Banana (Musa acuminata)",
      "Blackberry (Rubus fruticosus)"
    ],
    correctIndex: 2,
    explanation: "A botanical berry is a fleshy fruit without a stony layer, arising from a single flower with a multi-seeded ovary. Bananas, watermelons, and tomatoes are true berries, while strawberries and raspberries are aggregate fruits.",
    sourceCitation: "USDA National Agricultural Library & Kew Plant Glossary",
    relatedFruitSlug: "banana"
  },
  {
    id: "q3_apple_hypanthium",
    category: "Botanical Morphology",
    question: "When you consume the crisp flesh of an apple (Malus domestica), which floral organ are you primarily eating?",
    options: [
      "The swollen ovary wall (pericarp)",
      "The enlarged floral tube and receptacle (hypanthium)",
      "The fertilized cotyledon leaves",
      "The outer calyx sepals"
    ],
    correctIndex: 1,
    explanation: "Apples are pome fruits. The edible flesh is formed by the fusion and expansion of the floral hypanthium surrounding the ovary, whereas the true core is the actual ovary containing the seeds.",
    sourceCitation: "Simpson, M. G., Plant Systematics (Academic Press)",
    relatedFruitSlug: "apple"
  },
  {
    id: "q4_orange_hesperidium",
    category: "Botanical Morphology",
    question: "What is the specialized botanical term for the citrus fruit type exemplified by the orange (Citrus × sinensis)?",
    options: [
      "Drupe",
      "Pepo",
      "Hesperidium",
      "Silique"
    ],
    correctIndex: 2,
    explanation: "A hesperidium is a modified berry with a leathery glandular exocarp (flavedo), a spongy mesocarp (albedo), and internal locules filled with juice vesicles derived from specialized endocarp hairs.",
    sourceCitation: "Spiegel-Roy & Goldschmidt, Biology of Citrus (Cambridge University Press)",
    relatedFruitSlug: "orange"
  },
  {
    id: "q5_peach_drupe",
    category: "Botanical Morphology",
    question: "Both the Peach (Prunus persica) and Mango (Mangifera indica) share which botanical classification characterized by a hard, lignified stone enclosing the seed?",
    options: [
      "Drupe (Stone Fruit)",
      "Follicle",
      "Capsule",
      "Samara"
    ],
    correctIndex: 0,
    explanation: "Drupes consist of a thin exocarp (skin), fleshy mesocarp, and a heavily lignified endocarp (pit or stone) protecting the single seed inside.",
    sourceCitation: "Harris & Harris, Plant Identification Terminology",
    relatedFruitSlug: "peach"
  },
  {
    id: "q6_vitc_comparison",
    category: "Nutritional Biochemistry",
    question: "According to USDA FoodData Central, approximately how much more Vitamin C per 100g does a raw Orange provide compared to a raw Apple?",
    options: [
      "Orange has slightly less Vitamin C than an apple",
      "Approximately 2 times more",
      "Approximately 5 times more",
      "Approximately 11.5 times more (53.2 mg vs. 4.6 mg)"
    ],
    correctIndex: 3,
    explanation: "Standard raw oranges contain 53.2 mg of ascorbic acid (Vitamin C) per 100g, whereas raw apples with skin provide approximately 4.6 mg per 100g — an eleven-fold nutritional disparity.",
    sourceCitation: "USDA FoodData Central (FDC ID 746771 & 171688)",
    relatedFruitSlug: "orange"
  },
  {
    id: "q7_blueberry_pigment",
    category: "Nutritional Biochemistry",
    question: "Which water-soluble flavonoid pigment complex gives Highbush Blueberries (Vaccinium corymbosum) their intense deep indigo hue and primary antioxidant activity?",
    options: [
      "Anthocyanins",
      "Beta-carotene",
      "Chlorophyll b",
      "Betalains"
    ],
    correctIndex: 0,
    explanation: "Blueberries are rich in anthocyanins (malvidin, delphinidin, petunidin, and cyanidin glycosides), which yield both their striking violet-blue coloration and potent radical-scavenging bioactivity.",
    sourceCitation: "Journal of Agricultural and Food Chemistry & USDA ARS",
    relatedFruitSlug: "blueberry"
  },
  {
    id: "q8_watermelon_water_content",
    category: "Nutritional Biochemistry",
    question: "Laboratory nutrient quantification reveals that raw Watermelon (Citrullus lanatus) is composed of what percentage of water by weight?",
    options: [
      "78.5%",
      "84.2%",
      "91.4%",
      "98.9%"
    ],
    correctIndex: 2,
    explanation: "Watermelon is 91.45% water by weight, making it one of the most hydrating fruits in cultivation, alongside rich concentrations of the non-protein amino acid L-citrulline and lycopene.",
    sourceCitation: "USDA FoodData Central Foundation Foods (FDC ID 167765)",
    relatedFruitSlug: "watermelon"
  },
  {
    id: "q9_mango_botanical_family",
    category: "Taxonomy & Genetics",
    question: "The Mango (Mangifera indica) belongs to the family Anacardiaceae, which intriguingly makes it a close phylogenetic relative of which non-edible plant?",
    options: [
      "Poison Ivy (Toxicodendron radicans)",
      "Hemlock (Conium maculatum)",
      "Foxglove (Digitalis purpurea)",
      "Deadly Nightshade (Atropa belladonna)"
    ],
    correctIndex: 0,
    explanation: "Anacardiaceae is the cashew and sumac family. Mangoes share this family with poison ivy and poison oak; mango skin contains trace amounts of urushiol, which can trigger contact dermatitis in hypersensitive individuals.",
    sourceCitation: "Stevens, P. F., Angiosperm Phylogeny Website & Contact Dermatitis Journal",
    relatedFruitSlug: "mango"
  },
  {
    id: "q10_cavendish_genetics",
    category: "Taxonomy & Genetics",
    question: "Why are modern commercial dessert bananas (Cavendish subgroup) completely seedless and incapable of sexual reproduction?",
    options: [
      "They are treated with gamma irradiation in packaging facilities",
      "They are triploid (3n) with 33 chromosomes, disrupting meiosis",
      "They have been genetically modified using CRISPR excision",
      "Their flowers lack functional pistils entirely"
    ],
    correctIndex: 1,
    explanation: "Commercial Cavendish bananas are sterile triploids resulting from interspecific hybridization of wild Musa species. Because chromosome sets cannot pair evenly during meiosis, no viable seeds develop, requiring vegetative propagation by suckers.",
    sourceCitation: "Heslop-Harrison & Schwarzacher, Annals of Botany (Banana Genomics)",
    relatedFruitSlug: "banana"
  },
  {
    id: "q11_apple_kazakhstan_origin",
    category: "Geographic Diaspora",
    question: "Phylogenetic DNA sequencing has pinpointed the primary wild ancestor of all domesticated apples (Malus domestica) to which geographic region?",
    options: [
      "Tian Shan mountain range of modern Kazakhstan (Malus sieversii)",
      "Nile River delta in Ancient Egypt",
      "Andean cloud forests of Peru",
      "Mesoamerican highlands of southern Mexico"
    ],
    correctIndex: 0,
    explanation: "Genetic mapping by Cornell and Kew researchers demonstrated that the wild apple Malus sieversii, native to the Tian Shan forests near Almaty, Kazakhstan, is the predominant genetic progenitor of our cultivated apples.",
    sourceCitation: "Duan et al., Nature Genetics (Genome re-sequencing reveals history of apple and pear)",
    relatedFruitSlug: "apple"
  },
  {
    id: "q12_rosaceae_family",
    category: "Taxonomy & Genetics",
    question: "Which ubiquitous botanical family unites apples, peaches, strawberries, plums, cherries, and almonds?",
    options: [
      "Solanaceae",
      "Rosaceae",
      "Rutaceae",
      "Ericaceae"
    ],
    correctIndex: 1,
    explanation: "Rosaceae (the Rose family) is among the economically most significant angiosperm families, comprising diverse fruit morphologies including pomes (apples, pears), drupes (peaches, cherries, almonds), and aggregate fruits (strawberries).",
    sourceCitation: "Heywood et al., Flowering Plant Families of the World (Firefly Books)",
    relatedFruitSlug: "peach"
  }
];

export function calculateRank(score: number, total: number): {
  title: string;
  badge: string;
  color: string;
  description: string;
} {
  const ratio = total > 0 ? score / total : 0;
  if (ratio >= 0.9) {
    return {
      title: "Grand Botanical Scholar",
      badge: "🌿👑",
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/30",
      description: "Exceptional mastery of taxonomic morphology, biochemical nutrition, and botanical history. You possess the erudition of a Kew Herbarium curator."
    };
  }
  if (ratio >= 0.75) {
    return {
      title: "Senior Pomologist",
      badge: "🔬🍎",
      color: "text-indigo-400 border-indigo-500/40 bg-indigo-950/30",
      description: "Superior grasp of fruit anatomy, phylogenetic taxonomy, and laboratory nutrient metrics."
    };
  }
  if (ratio >= 0.55) {
    return {
      title: "Journeyman Naturalist",
      badge: "🧭🌱",
      color: "text-amber-400 border-amber-500/40 bg-amber-950/30",
      description: "Sound botanical foundations. You recognize key fruit structures and distinguish true berries from popular culinary pseudonyms."
    };
  }
  if (ratio >= 0.35) {
    return {
      title: "Field Forager",
      badge: "🍃",
      color: "text-teal-400 border-teal-500/40 bg-teal-950/30",
      description: "A budding interest in the plant kingdom. Continued exploration of the monographs will elevate your taxonomic fluency."
    };
  }
  return {
    title: "Novice Sprout",
    badge: "🌱",
    color: "text-zinc-400 border-zinc-700 bg-zinc-900/60",
    description: "Every great botanist begins with wonder. Revisit the Fruitypedia monographs and challenge the quiz again!"
  };
}

interface FruitQuizProps {
  allFruits?: Fruit[];
}

export const FruitQuiz: React.FC<FruitQuizProps> = ({ allFruits = [] }) => {
  // Shuffle or select 10 questions for the session
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>(() => {
    return [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Array<{ questionId: string; selectedIndex: number; isCorrect: boolean }>>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const currentQuestion = sessionQuestions[currentIndex];
  const isAnswered = selectedOption !== null;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);

    const isCorrect = index === currentQuestion.correctIndex;
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedIndex: index,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setSessionQuestions([...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10));
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setQuizCompleted(false);
    setCopiedNotification(false);
  };

  const score = useMemo(() => {
    return answers.filter((a) => a.isCorrect).length;
  }, [answers]);

  const totalQuestions = sessionQuestions.length;
  const rank = useMemo(() => calculateRank(score, totalQuestions), [score, totalQuestions]);

  const handleShareScore = () => {
    const text = `🌿 Fruitypedia Botanical Quiz: ${score}/${totalQuestions} correct!\nRank: ${rank.badge} ${rank.title}\nTest your fruit IQ at: ${window.location.origin}/trivia`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!quizCompleted ? (
        /* Active Question Card */
        <div className="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all">
          {/* Header & Progress */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-ui font-semibold uppercase tracking-wider bg-indigo-950/60 border border-indigo-800/50 text-indigo-300">
                {currentQuestion.category}
              </span>
              {currentQuestion.relatedFruitSlug && (
                <span className="text-xs font-ui text-zinc-400 capitalize hidden sm:inline">
                  • Monograph Focus: {currentQuestion.relatedFruitSlug}
                </span>
              )}
            </div>

            <div className="text-xs font-ui font-medium text-zinc-400">
              Question <span className="text-white font-bold">{currentIndex + 1}</span> of {totalQuestions}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden my-5">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h2 className="font-editorial text-xl sm:text-2xl text-zinc-100 leading-snug mt-2 mb-6">
            {currentQuestion.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-3" role="radiogroup" aria-label="Trivia answer options">
            {currentQuestion.options.map((option, idx) => {
              let btnStyle = "border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white";
              let markerStyle = "border-zinc-700 text-zinc-400 bg-zinc-800/60";

              if (isAnswered) {
                if (idx === currentQuestion.correctIndex) {
                  btnStyle = "border-emerald-500/70 bg-emerald-950/40 text-emerald-200 font-medium";
                  markerStyle = "border-emerald-400 bg-emerald-500 text-black font-bold";
                } else if (idx === selectedOption) {
                  btnStyle = "border-rose-500/70 bg-rose-950/40 text-rose-200";
                  markerStyle = "border-rose-400 bg-rose-500 text-white font-bold";
                } else {
                  btnStyle = "border-zinc-850 bg-zinc-950/40 text-zinc-600 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <span
                    className={`w-6 h-6 shrink-0 rounded-full border flex items-center justify-center text-xs font-mono transition-colors ${markerStyle}`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-ui text-sm sm:text-base leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Evidence Explanation Drawer (Appears after answer) */}
          {isAnswered && (
            <div className="mt-6 pt-5 border-t border-zinc-800/80 animate-fadeIn">
              <div
                className={`p-4 rounded-xl border ${
                  selectedOption === currentQuestion.correctIndex
                    ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                    : "bg-amber-950/30 border-amber-800/60 text-amber-200"
                }`}
              >
                <div className="flex items-center gap-2 font-ui font-semibold text-xs tracking-wider uppercase mb-1.5">
                  <span>
                    {selectedOption === currentQuestion.correctIndex ? "✓ Correct Botanical Insight" : "✗ Taxonomic Clarification"}
                  </span>
                </div>
                <p className="font-editorial text-sm sm:text-base text-zinc-200 leading-relaxed mb-3">
                  {currentQuestion.explanation}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-ui text-zinc-400 pt-2 border-t border-white/10">
                  <span className="italic">Source: {currentQuestion.sourceCitation}</span>
                  {currentQuestion.relatedFruitSlug && (
                    <a
                      href={`/fruit/${currentQuestion.relatedFruitSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 underline font-medium"
                    >
                      Inspect Monograph →
                    </a>
                  )}
                </div>
              </div>

              {/* Action: Next Question */}
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-ui font-semibold text-sm transition-all shadow-lg hover:shadow-indigo-500/20 cursor-pointer flex items-center gap-2"
                >
                  <span>{currentIndex + 1 < totalQuestions ? "Next Question" : "View Final Scorecard"}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Final Scorecard & Rank Display */
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl text-center animate-fadeIn">
          {/* Rank Badge */}
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-zinc-950 border border-zinc-800 text-4xl mb-4 shadow-inner">
            {rank.badge}
          </div>

          <p className="text-xs font-ui uppercase tracking-[0.2em] font-semibold text-zinc-400">
            Botanical Erudition Rank
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
            {rank.title}
          </h2>

          <div className="inline-block px-4 py-1.5 rounded-full border text-xs font-ui font-semibold my-2 mb-4 max-w-lg leading-relaxed ${rank.color}">
            {rank.description}
          </div>

          {/* Numerical Score */}
          <div className="my-6 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 max-w-sm mx-auto">
            <div className="text-5xl font-display font-extrabold text-white tracking-tight">
              {score} <span className="text-2xl text-zinc-500 font-normal">/ {totalQuestions}</span>
            </div>
            <div className="text-xs font-ui text-zinc-400 mt-2">
              Accuracy: <span className="text-emerald-400 font-semibold">{Math.round((score / totalQuestions) * 100)}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-ui font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Retake Quiz (New Set)</span>
            </button>

            <button
              type="button"
              onClick={handleShareScore}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-ui font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>{copiedNotification ? "Scorecard Copied!" : "Share Scorecard"}</span>
            </button>

            <a
              href="/directory"
              className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:text-white font-ui text-xs sm:text-sm transition-all"
            >
              Study All Monographs →
            </a>
          </div>

          {/* Recommended Monographs for Further Study */}
          {allFruits && allFruits.length > 0 && (
            <div className="mt-8 pt-6 border-t border-zinc-800 text-left">
              <h4 className="text-xs font-ui font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Recommended Monographs for Further Botanical Study
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {allFruits.slice(0, 4).map((f) => (
                  <a
                    key={f.slug}
                    href={`/fruit/${f.slug}`}
                    className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: f.theme.primary }} />
                    <span className="font-ui text-xs text-zinc-300 group-hover:text-white truncate">{f.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Question Review Section */}
          <div className="mt-10 pt-8 border-t border-zinc-800 text-left">
            <h3 className="text-sm font-ui font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Session Breakdown ({totalQuestions} Questions)
            </h3>
            <div className="space-y-3">
              {sessionQuestions.map((q, idx) => {
                const answer = answers.find((a) => a.questionId === q.id);
                const isCorrect = answer?.isCorrect ?? false;
                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3 text-xs"
                  >
                    <span
                      className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        isCorrect ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      }`}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </span>
                    <div className="flex-1">
                      <p className="text-zinc-200 font-medium mb-1">
                        {idx + 1}. {q.question}
                      </p>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Correct: <span className="text-emerald-300 font-medium">{q.options[q.correctIndex]}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
