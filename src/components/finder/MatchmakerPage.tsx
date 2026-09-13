import { Search, TreePine, Utensils, Waves, ArrowRight, User, Star, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  X,
  ChevronRight,
  Check,
  Sparkles,
  MapPin,
  Plus,
  Share2,
  Info,
  Calendar,
  Layers,
  HelpCircle,
  ShieldAlert,
  ArrowLeft
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useExploreStore } from "../../state/exploreStore";
import { usePlanStore } from "../../state/planStore";
import { useParameterStore } from "../../state/parameterStore";
import { SEO } from "../ui/SEO";
import {
  getCategories,
  getSubcategories,
  resolveSubcategory,
  getQuiz,
  scoreQuiz,
  getDestinationDetails
} from "../../engine/matchmaker.engine";
import { useState, useMemo, useEffect } from "react";
import { cn } from "../../utils/cn";

// New background and card images
import quizHeroBg from '../../assets/images/quizzes/shared/quiz_hero_bg_1786203201810.jpg';
import quizCultureImg from '../../assets/images/quizzes/shared/quiz_culture_1786203267544.jpg';
import quizAdventureImg from '../../assets/images/quizzes/shared/quiz_adventure_1786203282645.jpg';
import quizRelaxImg from '../../assets/images/quizzes/shared/quiz_relaxed_1786203315431.jpg';
import quizMixImg from '../../assets/images/quizzes/shared/quiz_foodie_1786203300781.jpg';

const OPTION_IMAGES: Record<string, string> = {
  'relax': quizRelaxImg,
  'adventure': quizAdventureImg,
  'culture': quizCultureImg,
  'mix': quizMixImg
};

/**
 * HUB: Matchmaker
 * Job: Diagnostic flow to pair users with cities and regional experiences.
 * Follows strict website planner integration rules:
 * - Cities supported on our website -> Connected to Planner & City Pages
 * - Unplanned/Overview-only destinations -> Suggested with rich info, but NOT connected to Planner
 */
export default function MatchmakerPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    matchmakerTree,
    setMatchmakerTree,
    quizAnswers,
    setQuizAnswer,
  } = useExploreStore();

  const { addCity, setJourneyMode, setActiveCity, setMatchmakerContext } = usePlanStore();
  const { setCity: setGlobalCity } = useParameterStore();

  const [step, setStep] = useState<"landing" | "mode_select" | "tree" | "quiz" | "results">("landing");
  const [quizStep, setQuizStep] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);
  const [showAllMatches, setShowAllMatches] = useState(false);
  const [selectedOverviewDest, setSelectedOverviewDest] = useState<any | null>(null);

  const categories = getCategories();
  const quizQuestions = getQuiz();

  // URL State Synchronizer helper
  const syncUrlParams = (
    targetStep: "landing" | "mode_select" | "tree" | "quiz" | "results",
    treeState = matchmakerTree,
    answersState = quizAnswers
  ) => {
    const params: Record<string, string> = {};
    if (targetStep === "landing") {
      params.mode = "landing";
    } else if (targetStep === "mode_select") {
      params.mode = "mode_select";
    } else if (targetStep === "tree") {
      params.mode = "tree";
      if (treeState.activeCategoryId) params.cat = treeState.activeCategoryId;
      if (treeState.activeSubcategoryId) params.sub = treeState.activeSubcategoryId;
      if (treeState.refineIndex !== null && treeState.refineIndex !== undefined) {
        params.refine = String(treeState.refineIndex);
      }
    } else if (targetStep === "quiz") {
      params.mode = "quiz";
      if (answersState.goal) params.goal = String(answersState.goal);
      if (answersState.company) params.company = String(answersState.company);
      if (answersState.pace) params.pace = String(answersState.pace);
      if (answersState.budget) params.budget = String(answersState.budget);
      if (answersState.month) params.month = String(answersState.month);
      if (answersState.duration) params.duration = String(answersState.duration);
    } else if (targetStep === "results") {
      if (treeState.activeSubcategoryId) {
        params.mode = "tree";
        params.cat = treeState.activeCategoryId!;
        params.sub = treeState.activeSubcategoryId;
        if (treeState.refineIndex !== null && treeState.refineIndex !== undefined) {
          params.refine = String(treeState.refineIndex);
        }
      } else {
        params.mode = "quiz";
        if (answersState.goal) params.goal = String(answersState.goal);
        if (answersState.company) params.company = String(answersState.company);
        if (answersState.pace) params.pace = String(answersState.pace);
        if (answersState.budget) params.budget = String(answersState.budget);
        if (answersState.month) params.month = String(answersState.month);
        if (answersState.duration) params.duration = String(answersState.duration);
      }
    }
    setSearchParams(params, { replace: true });
  };

  // Hydrate quiz/tree states from URL search params on mount
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "tree") {
      const cat = searchParams.get("cat");
      const sub = searchParams.get("sub");
      const refine = searchParams.get("refine");

      if (cat) {
        const loadedTree = {
          activeCategoryId: cat,
          activeSubcategoryId: sub || null,
          refineIndex: refine !== null ? parseInt(refine, 10) : null,
        };
        setMatchmakerTree(loadedTree);
        if (sub) {
          const res = resolveSubcategory(cat, sub);
          if (res.status === "needs_refine" && refine === null) {
            setStep("tree");
          } else {
            setStep("results");
          }
        } else {
          setStep("tree");
        }
      } else {
        setStep("tree");
      }
    } else if (mode === "quiz") {
      const goal = searchParams.get("goal");
      const company = searchParams.get("company");
      const pace = searchParams.get("pace");
      const budget = searchParams.get("budget");
      const month = searchParams.get("month");
      const duration = searchParams.get("duration");

      const initialAnswers: Record<string, string> = {};
      let count = 0;
      if (goal) { initialAnswers.goal = goal; count++; }
      if (company) { initialAnswers.company = company; count++; }
      if (pace) { initialAnswers.pace = pace; count++; }
      if (budget) { initialAnswers.budget = budget; count++; }
      if (month) { initialAnswers.month = month; count++; }
      if (duration) { initialAnswers.duration = duration; count++; }

      if (count > 0) {
        Object.entries(initialAnswers).forEach(([qId, val]) => {
          setQuizAnswer(qId, val);
        });

        if (count === 6) {
          setStep("results");
        } else {
          setStep("quiz");
          setQuizStep(count);
        }
      } else {
        setStep("quiz");
        setQuizStep(0);
      }
    } else if (mode === "landing") {
      setStep("landing");
    } else if (mode === "mode_select") {
      setStep("mode_select");
    }
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleStart = () => {
    setStep("mode_select");
    syncUrlParams("mode_select");
  };

  const handleModeSelect = (mode: "tree" | "quiz") => {
    if (mode === "tree") {
      setStep("tree");
      const emptyTree = {
        activeCategoryId: null,
        activeSubcategoryId: null,
        refineIndex: null,
      };
      setMatchmakerTree(emptyTree);
      syncUrlParams("tree", emptyTree);
    } else {
      setStep("quiz");
      setQuizStep(0);
      syncUrlParams("quiz", matchmakerTree, {});
    }
  };

  const handleCategorySelect = (catId: string) => {
    if (catId === "fallback_quiz") {
      handleModeSelect("quiz");
      return;
    }
    const newTree = {
      activeCategoryId: catId,
      activeSubcategoryId: null,
      refineIndex: null,
    };
    setMatchmakerTree(newTree);
    syncUrlParams("tree", newTree);
  };

  const handleSubcategorySelect = (subId: string) => {
    const res = resolveSubcategory(matchmakerTree.activeCategoryId!, subId);
    const newTree = {
      ...matchmakerTree,
      activeSubcategoryId: subId,
      refineIndex: null,
    };
    setMatchmakerTree(newTree);
    if (res.status === "resolved") {
      setStep("results");
      syncUrlParams("results", newTree);
    } else if (res.status === "needs_refine") {
      syncUrlParams("tree", newTree);
    }
  };

  const handleRefineSelect = (index: number) => {
    const newTree = { ...matchmakerTree, refineIndex: index };
    setMatchmakerTree(newTree);
    setStep("results");
    syncUrlParams("results", newTree);
  };

  const handleQuizAnswer = (questionId: string, answerId: string) => {
    setQuizAnswer(questionId, answerId);
    const updatedAnswers = { ...quizAnswers, [questionId]: answerId };
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
      syncUrlParams("quiz", matchmakerTree, updatedAnswers);
    } else {
      setStep("results");
      syncUrlParams("results", matchmakerTree, updatedAnswers);
    }
  };

  const handleClose = () => {
    navigate("/finder");
  };

  const currentResult: any = useMemo(() => {
    if (step !== "results") return null;
    if (matchmakerTree.activeSubcategoryId) {
      return resolveSubcategory(
        matchmakerTree.activeCategoryId!,
        matchmakerTree.activeSubcategoryId,
        matchmakerTree.refineIndex
      );
    }
    return scoreQuiz(quizAnswers);
  }, [step, matchmakerTree, quizAnswers]);

  const handleExplore = (dest: any) => {
    if (dest.hasPlanner && dest.cityId) {
      setGlobalCity(dest.cityId);
      navigate(`/city/${dest.cityId}?from=matchmaker`);
    } else {
      // Destination is overview only
      setSelectedOverviewDest(getDestinationDetails(dest.key || dest.cityId));
    }
  };

  const handleAddToPlan = (dest: any) => {
    if (!dest.hasPlanner) {
      setNotification(`${dest.name} is an overview-only destination and not directly in the step-by-step Planner.`);
      return;
    }

    const targetCityId = dest.cityId || dest.key;
    addCity(targetCityId);
    setActiveCity(targetCityId);
    setJourneyMode("first");

    setMatchmakerContext({
      quizAnswers: quizAnswers as Record<string, any>,
      treePath: matchmakerTree,
    });

    setNotification(`${dest.name} added to your plan! ✨`);
  };

  const handleShareMatches = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "My Morocco Destination Matches",
        text: "Check out my personalized Morocco destination recommendations!",
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setNotification("Share link copied to clipboard! 🔗");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans relative overflow-hidden flex flex-col">
      <SEO
        title="Morocco Destination Finder — Matchmaker Engine"
        description="Find your ideal Morocco destination based on real traveler profiles, regional travel goals, and curated interest trees."
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Morocco Destination Matchmaker",
          "operatingSystem": "All",
          "applicationCategory": "TravelApplication",
          "description": "Find your perfect Morocco destination in under 60 seconds with our deterministic travel scoring engine.",
          "browserRequirements": "Requires JavaScript"
        })}
      </script>

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />

      {/* Header */}
      <header className="px-6 md:px-12 py-4 bg-white/40 backdrop-blur-md flex items-center justify-between relative z-20 border-b border-stone-100">
        <button
          onClick={() => {
            if (step === "landing") handleClose();
            else if (step === "mode_select") {
              setStep("landing");
              syncUrlParams("landing");
            } else if (step === "tree") {
              if (matchmakerTree.refineIndex !== null) {
                const newTree = { ...matchmakerTree, refineIndex: null };
                setMatchmakerTree(newTree);
                syncUrlParams("tree", newTree);
              } else if (matchmakerTree.activeSubcategoryId) {
                const newTree = { ...matchmakerTree, activeSubcategoryId: null };
                setMatchmakerTree(newTree);
                syncUrlParams("tree", newTree);
              } else if (matchmakerTree.activeCategoryId) {
                const newTree = { ...matchmakerTree, activeCategoryId: null };
                setMatchmakerTree(newTree);
                syncUrlParams("tree", newTree);
              } else {
                setStep("mode_select");
                syncUrlParams("mode_select");
              }
            } else if (step === "quiz") {
              if (quizStep > 0) {
                setQuizStep(quizStep - 1);
              } else {
                setStep("landing");
                syncUrlParams("landing");
              }
            } else if (step === "results") {
              setStep("mode_select");
              syncUrlParams("mode_select");
            }
          }}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> 
          <span className="hidden sm:inline">Back to Finder</span>
          <span className="sm:hidden">Back</span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white text-lg shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-lg text-stone-900 tracking-tight">
              Matchmaker
            </h2>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">
              Smart Destination Engine
            </p>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-10 h-10 bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 rounded-xl transition-all flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 flex flex-col relative z-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 relative overflow-hidden"
            >
              {/* Background Image for Landing */}
              <div 
                className="absolute inset-0 bg-cover bg-center -z-10 opacity-20"
                style={{ backgroundImage: `url(${quizHeroBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent -z-10" />

              <div className="w-24 h-24 bg-white rounded-[40px] shadow-2xl shadow-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] relative">
                <Sparkles className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 bg-stone-900 text-[#C9A84C] text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                  Smart Match
                </div>
              </div>
              <div className="space-y-4 max-w-lg">
                <h1 className="font-display text-4xl md:text-5xl text-stone-900 leading-tight">
                  Let's find places <span className="text-[#C9A84C]">you'll love</span>
                </h1>
                <p className="text-stone-500 text-lg italic">
                  "Answer a few quick questions to discover where you belong in Morocco."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                      setStep("quiz");
                      setQuizStep(0);
                      syncUrlParams("quiz", matchmakerTree, {});
                  }}
                  className="px-10 py-5 bg-[#C9A84C] text-white rounded-[24px] font-bold text-lg hover:bg-[#b8973b] transition-all shadow-xl shadow-[#C9A84C]/20 group flex items-center gap-3 cursor-pointer"
                >
                  Start Quiz{" "}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleModeSelect("tree")}
                  className="px-10 py-5 bg-white text-stone-900 border border-stone-200 rounded-[24px] font-bold text-lg hover:bg-stone-50 hover:border-[#C9A84C] transition-all shadow-sm group flex items-center gap-3 cursor-pointer"
                >
                  Browse Manually
                </button>
              </div>

              <div className="flex items-center gap-8 text-sm font-bold text-stone-500 mt-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C9A84C]" />
                    Takes 2 min
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9A84C]" />
                    100% Personalized
                  </div>
              </div>
            </motion.div>
          )}

          {step === "mode_select" && (
            <motion.div
              key="mode_select"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center p-8 gap-8"
            >
              <div className="text-center space-y-2 max-w-md">
                <h2 className="font-display text-3xl text-stone-900">
                  How would you like to choose?
                </h2>
                <p className="text-stone-500 text-sm">
                  Select a mode to match your travel planning style.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <button
                  onClick={() => handleModeSelect("tree")}
                  className="p-8 bg-white border border-stone-100 rounded-[32px] text-left space-y-4 hover:border-[#C9A84C] hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:text-[#C9A84C] transition-colors">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-amber-50 text-[#C9A84C] text-[9px] font-black uppercase tracking-widest rounded-full">
                      Curated Tree
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stone-900">
                      Browse by Interest
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">
                      Choose specific experiences (e.g., Surf, Medinas, Sahara, Skiing) and narrow down your choice.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleModeSelect("quiz")}
                  className="p-8 bg-white border border-stone-100 rounded-[32px] text-left space-y-4 hover:border-[#C9A84C] hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:text-[#C9A84C] transition-colors">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-[9px] font-black uppercase tracking-widest rounded-full">
                      Scoring Engine
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stone-900">
                      Help me decide
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">
                      Answer 6 travel questions to score every destination by season, budget, pace, and company.
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {step === "tree" && (
            <motion.div
              key="tree"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 p-8 md:p-12 space-y-12"
            >
              {!matchmakerTree.activeCategoryId ? (
                <div className="space-y-8">
                  <h2 className="text-center font-display text-3xl text-stone-900">
                    What's your primary focus?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {categories.map((cat: any) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className="aspect-square bg-white border border-stone-100 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-[#C9A84C] hover:shadow-lg transition-all group cursor-pointer p-4 text-center"
                      >
                        <span className="text-4xl group-hover:scale-110 transition-transform">
                          {cat.emoji}
                        </span>
                        <span className="font-bold text-[10px] uppercase tracking-widest text-stone-700 leading-snug">
                          {cat.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : !matchmakerTree.activeSubcategoryId ? (
                <div className="space-y-8">
                  <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl text-stone-900">
                      Narrowing down{" "}
                      <span className="text-[#C9A84C]">
                        {categories.find((c: any) => c.id === matchmakerTree.activeCategoryId)?.label}
                      </span>
                    </h2>
                    <button
                      onClick={() => setMatchmakerTree({ ...matchmakerTree, activeCategoryId: null })}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> All Focuses
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {getSubcategories(matchmakerTree.activeCategoryId).map((sub: any) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubcategorySelect(sub.id)}
                        className="p-6 bg-white border border-stone-100 rounded-2xl text-left flex items-center justify-between group hover:border-[#C9A84C] transition-all cursor-pointer"
                      >
                        <div>
                          <div className="font-bold text-stone-900">
                            {sub.label}
                          </div>
                          {sub.note && (
                            <div className="text-xs text-stone-400 mt-1">
                              {sub.note}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="max-w-xl mx-auto p-8 bg-white border border-stone-100 rounded-[40px] shadow-sm text-center space-y-8 relative">
                    <button
                      onClick={() => setMatchmakerTree({ ...matchmakerTree, activeSubcategoryId: null, refineIndex: null })}
                      className="absolute top-6 left-6 text-xs text-stone-400 hover:text-stone-900 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      ← Change Subcategory
                    </button>

                    <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-[#C9A84C] mx-auto pt-2">
                      <Compass className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display text-stone-800">
                      {(resolveSubcategory(
                        matchmakerTree.activeCategoryId!,
                        matchmakerTree.activeSubcategoryId!
                      ) as any).question}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {(resolveSubcategory(
                        matchmakerTree.activeCategoryId!,
                        matchmakerTree.activeSubcategoryId!
                      ) as any).options?.map((opt: any) => (
                        <button
                          key={opt.index}
                          onClick={() => handleRefineSelect(opt.index)}
                          className="p-5 border border-stone-100 rounded-2xl font-bold text-stone-600 hover:border-[#C9A84C] hover:text-stone-900 hover:bg-stone-50 transition-all cursor-pointer text-left flex items-center justify-between"
                        >
                          <span>{opt.label}</span>
                          <ChevronRight className="w-4 h-4 text-stone-300" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {step === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 flex flex-col relative overflow-y-auto bg-[#FAF7F2] w-full"
            >
              <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-6 py-2 space-y-3 pb-8">
                {/* Combined Header & Progress Bar Container */}
                <div className="bg-white rounded-[24px] p-3 shadow-sm border border-stone-100 flex flex-col gap-2 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setStep('landing')}
                        className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 bg-stone-100/50 hover:bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200 transition-all cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Finder
                      </button>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-black uppercase tracking-widest rounded-lg">
                        <Search className="w-3 h-3" /> QUIZ
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="shrink-0 min-w-[160px]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                        STEP {quizStep + 1} OF {quizQuestions.length}
                      </div>
                      <div className="font-bold text-stone-900 text-sm">
                        {quizStep === 0 ? "Your Preferences" : 
                         quizStep === 1 ? "Travel Group" : 
                         quizStep === 2 ? "Preferred Pace" : 
                         quizStep === 3 ? "Travel Budget" : 
                         quizStep === 4 ? "Season & Timing" : 
                         "Trip Duration"}
                      </div>
                    </div>
                    
                    <div className="flex-1 flex gap-2 w-full">
                      {quizQuestions.map((_: any, i: number) => (
                        <div
                          key={i}
                          className={cn(
                            "h-2 rounded-full transition-all duration-500 flex-1",
                            i === quizStep
                              ? "bg-[#D87D56]"
                              : i < quizStep
                              ? "bg-[#D87D56]/30"
                              : "bg-stone-100"
                          )}
                        />
                      ))}
                    </div>

                    <div className="shrink-0 text-xs font-bold text-[#D87D56]">
                      {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}% Complete
                    </div>
                  </div>
                </div>

                {/* Quiz Content Container */}
                <div className="bg-[#FAF7F2] max-w-5xl mx-auto w-full relative z-10 pt-1">
                  <div className="text-center space-y-1 mb-2">
                    <h2 className="font-display text-2xl md:text-3xl text-stone-900 leading-tight">
                      {quizQuestions[quizStep].question}
                    </h2>
                    <p className="text-stone-500 text-xs">Choose the option that fits you best</p>
                  </div>

                  {quizStep === 0 ? (
                    /* Visual Grid for Step 1 */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {quizQuestions[quizStep].options.map((opt: any) => {
                        const image = OPTION_IMAGES[opt.id];
                        const labelText = opt.label.replace(/^[\u{1F300}-\u{1F9FF}\s]+/u, '').trim();
                        const currentAnswer = quizAnswers[quizQuestions[quizStep].id];
                        const isSelected = currentAnswer === opt.id;
                        
                        const getSubtitle = (id: string) => {
                          if (id === 'first-time') return 'I love history, local culture and authentic experiences.';
                          if (id === 'adventure') return 'I seek adventure, nature and thrilling activities.';
                          if (id === 'foodie') return 'I travel for food and love trying local flavors.';
                          if (id === 'relaxed' || id === 'relax') return 'I want to relax, unwind and take things slow.';
                          return 'I am open to discover new things and unique places.';
                        };

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleQuizAnswer(quizQuestions[quizStep].id, opt.id)}
                            className={cn(
                              "group relative flex flex-col bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border text-center cursor-pointer p-1.5",
                              isSelected 
                                ? "border-2 border-[#D87D56] bg-[#D87D56]/5 shadow-sm -translate-y-0.5" 
                                : "border-stone-200/80 hover:border-[#D87D56]"
                            )}
                          >
                            <div className="relative h-[120px] sm:h-[135px] w-full rounded-[16px] overflow-hidden bg-stone-100 shrink-0">
                              {image && (
                                <img 
                                  src={image} 
                                  alt={labelText}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                              )}
                              
                              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-stone-100 shadow-sm group-hover:border-[#D87D56] transition-colors z-10">
                                 {opt.id === 'adventure' ? <TreePine className="w-4 h-4 text-[#4A6741]" /> :
                                  opt.id === 'foodie' ? <Utensils className="w-4 h-4 text-[#C9A84C]" /> :
                                  opt.id === 'relaxed' || opt.id === 'relax' ? <Waves className="w-4 h-4 text-[#5B85AA]" /> :
                                  <Compass className="w-4 h-4 text-[#D87D56]" />}
                              </div>

                              {isSelected && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-[#D87D56] text-white rounded-full flex items-center justify-center shadow-md z-10">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            
                            <div className="pt-6 pb-2 px-2 flex-1 flex flex-col items-center justify-start bg-white rounded-b-[16px]">
                              <h3 className={cn(
                                "text-sm font-display font-semibold text-stone-900 transition-colors mb-0.5",
                                isSelected && "text-[#D87D56]"
                              )}>
                                {labelText}
                              </h3>
                              <p className="text-stone-500 text-[11px] leading-tight line-clamp-2">
                                {getSubtitle(opt.id)}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    /* Standard Grid for other steps with clear selection state */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                      {quizQuestions[quizStep].options.map((opt: any) => {
                        const currentAnswer = quizAnswers[quizQuestions[quizStep].id];
                        const isSelected = currentAnswer === opt.id;

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleQuizAnswer(quizQuestions[quizStep].id, opt.id)}
                            className={cn(
                              "p-3 bg-white border rounded-[16px] text-left font-bold text-sm transition-all flex items-center justify-between group cursor-pointer shadow-2xs",
                              isSelected 
                                ? "border-2 border-[#D87D56] bg-[#D87D56]/5 text-stone-900 shadow-sm" 
                                : "border-stone-200/80 text-stone-700 hover:border-[#D87D56] hover:shadow-xs"
                            )}
                          >
                            <span className={cn(isSelected && "text-[#D87D56]")}>{opt.label}</span>
                            <div className={cn(
                              "w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center shrink-0 ml-2",
                              isSelected 
                                ? "border-[#D87D56] bg-[#D87D56] text-white" 
                                : "border-stone-200 group-hover:border-[#D87D56]"
                            )}>
                              {isSelected ? (
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-[#D87D56] opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  
                  {/* Alternative Action */}
                  <div className="pt-5 max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-px flex-1 bg-stone-200" />
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">OR</span>
                      <div className="h-px flex-1 bg-stone-200" />
                    </div>
                    
                    <div className="bg-white rounded-[20px] p-3 border border-stone-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0">
                          <Compass className="w-5 h-5 text-[#D87D56]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">Not sure yet?</h4>
                          <p className="text-stone-500 text-[11px]">Let our quiz guide you.</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const randomAnswers: Record<string, string> = {};
                          quizQuestions.forEach((q: any) => {
                            const randomOpt = q.options[Math.floor(Math.random() * q.options.length)];
                            randomAnswers[q.id] = randomOpt.id;
                          });
                          Object.entries(randomAnswers).forEach(([qId, val]) => {
                            setQuizAnswer(qId, val);
                          });
                          setStep("results");
                          syncUrlParams("results", matchmakerTree, randomAnswers);
                        }}
                        className="w-full sm:w-auto px-4 py-2 bg-[#FAF7F2] text-[#D87D56] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#D87D56]/10 transition-colors whitespace-nowrap text-xs cursor-pointer"
                      >
                        Surprise Me <Sparkles className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="max-w-5xl mx-auto flex items-center justify-between mt-4 pt-3 border-t border-stone-200">
                    <button
                      onClick={() => setQuizStep(Math.max(0, quizStep - 1))}
                      className="px-4 py-2 bg-white border border-stone-200 text-stone-600 font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    
                    <button
                      disabled={!quizAnswers[quizQuestions[quizStep].id]}
                      onClick={() => {
                        if (quizStep < quizQuestions.length - 1) {
                          setQuizStep(quizStep + 1);
                        } else {
                          setStep("results");
                          syncUrlParams("results", matchmakerTree, quizAnswers);
                        }
                      }}
                      className={cn(
                        "px-5 py-2 font-bold text-xs rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm",
                        quizAnswers[quizQuestions[quizStep].id]
                          ? "bg-[#D87D56] text-white hover:bg-[#c26d47] shadow-[#D87D56]/20"
                          : "bg-stone-200 text-stone-400 cursor-not-allowed shadow-none"
                      )}
                    >
                      {quizStep < quizQuestions.length - 1 ? (
                        <>Next Question <ArrowRight className="w-4 h-4" /></>
                      ) : (
                        <>See Matches <Sparkles className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>

                  {/* Trust Strip Footer */}
                  <div className="max-w-5xl mx-auto w-full mt-5 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                           <Calendar className="w-3.5 h-3.5 text-[#D87D56]" />
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">Takes 2 min</div>
                          <div className="text-stone-500 text-[10px]">Quick & easy</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                           <User className="w-3.5 h-3.5 text-[#D87D56]" />
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">Personalized</div>
                          <div className="text-stone-500 text-[10px]">Just for you</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                           <Star className="w-3.5 h-3.5 text-[#D87D56]" />
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">Best matches</div>
                          <div className="text-stone-500 text-[10px]">You'll love</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                           <Lock className="w-3.5 h-3.5 text-[#D87D56]" />
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">Private</div>
                          <div className="text-stone-500 text-[10px]">Data is safe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "results" && currentResult && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 p-6 md:p-12 space-y-8 max-w-7xl mx-auto w-full"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-200 pb-6">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-stone-900">
                    Your Morocco Matches
                  </h2>
                  <p className="text-stone-500 italic text-sm mt-1">
                    "Scored according to your travel preferences and season alignment."
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleShareMatches}
                    className="px-4 py-2.5 bg-white border border-stone-200 text-stone-700 hover:border-stone-900 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Share2 className="w-4 h-4 text-[#C9A84C]" /> Share Matches
                  </button>
                  <button
                    onClick={() => {
                      setStep("mode_select");
                      syncUrlParams("mode_select");
                    }}
                    className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-[#C9A84C] transition-all cursor-pointer"
                  >
                    Start Over
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tree mode result */}
                {currentResult.primary ? (
                  <>
                    <ResultCard
                      dest={currentResult.primary}
                      isPrimary={true}
                      matchScore={currentResult.primary.matchScore || 96}
                      onExplore={handleExplore}
                      onAdd={handleAddToPlan}
                    />
                    {currentResult.alternatives?.map((dest: any) => (
                      <ResultCard
                        key={dest.key}
                        dest={dest}
                        matchScore={dest.matchScore || 88}
                        onExplore={handleExplore}
                        onAdd={handleAddToPlan}
                      />
                    ))}
                  </>
                ) : (
                  /* Quiz mode results */
                  currentResult.top?.map((dest: any, idx: number) => (
                    <ResultCard
                      key={dest.key}
                      dest={dest}
                      isPrimary={idx === 0}
                      matchScore={dest.matchScore}
                      reasons={dest.reasons}
                      onExplore={handleExplore}
                      onAdd={handleAddToPlan}
                    />
                  ))
                )}
              </div>

              {/* Runners-up / Show All Matches in Quiz Mode */}
              {currentResult.runnersUp && currentResult.runnersUp.length > 0 && (
                <div className="pt-8 border-t border-stone-200/80 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-stone-900">
                        Other Great Candidates
                      </h3>
                      <p className="text-xs text-stone-500">
                        Runner-up destinations that also match several of your filters.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAllMatches(!showAllMatches)}
                      className="px-4 py-2 text-xs font-bold text-[#C9A84C] bg-amber-50 hover:bg-amber-100 rounded-xl transition-all cursor-pointer"
                    >
                      {showAllMatches ? "Hide Runner-ups" : `View ${currentResult.runnersUp.length} More Matches`}
                    </button>
                  </div>

                  {showAllMatches && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {currentResult.runnersUp.map((dest: any) => (
                        <ResultCard
                          key={dest.key}
                          dest={dest}
                          isPrimary={false}
                          matchScore={dest.matchScore}
                          reasons={dest.reasons}
                          onExplore={handleExplore}
                          onAdd={handleAddToPlan}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Destination Overview Modal (For non-planner destinations or exploring) */}
      <AnimatePresence>
        {selectedOverviewDest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[32px] p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setSelectedOverviewDest(null)}
                className="absolute top-6 right-6 w-9 h-9 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-[#C9A84C] text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {selectedOverviewDest.region}
                  </span>
                  {!selectedOverviewDest.hasPlanner && (
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                      <Info className="w-3 h-3 text-stone-400" /> Regional Destination Overview
                    </span>
                  )}
                </div>
                <h2 className="font-display text-3xl text-stone-900">
                  {selectedOverviewDest.name}
                </h2>
                <p className="text-stone-600 italic">
                  {selectedOverviewDest.summary}
                </p>
              </div>

              {/* Highlights */}
              {selectedOverviewDest.highlights && selectedOverviewDest.highlights.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-stone-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#C9A84C]" /> Key Highlights & Attractions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedOverviewDest.highlights.map((item: string, idx: number) => (
                      <div key={idx} className="p-3 bg-stone-50 rounded-xl text-xs font-semibold text-stone-800 flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Gateway Airport
                  </div>
                  <div className="font-bold text-stone-900">{selectedOverviewDest.airport}</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Recommended Duration
                  </div>
                  <div className="font-bold text-stone-900">{selectedOverviewDest.minDays}+ Days</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl space-y-1 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Planner Support
                  </div>
                  <div className="font-bold text-stone-900">
                    {selectedOverviewDest.hasPlanner ? "Interactive Step-by-Step" : "Overview & Regional Guide"}
                  </div>
                </div>
              </div>

              {!selectedOverviewDest.hasPlanner && (
                <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-2xl text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#C9A84C]" /> Planner Integration Notice
                  </div>
                  <p className="text-amber-800 leading-relaxed">
                    This destination is featured as a regional recommendation. Because it is an off-the-beaten-path locale, detailed step-by-step route planning is provided as regional guidance rather than a direct city hub in the Planner.
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedOverviewDest(null)}
                  className="px-6 py-3 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-[#C9A84C] transition-all cursor-pointer"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pl-6 pr-4 py-3 bg-stone-900 text-white rounded-[24px] shadow-2xl flex items-center gap-6 border border-white/10 min-w-[320px] justify-between max-w-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xs tracking-wide leading-snug">
                {notification}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setNotification(null)}
                className="px-3 py-2 text-[9px] font-black uppercase tracking-widest text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                Dismiss
              </button>
              <button
                onClick={() => navigate("/planner")}
                className="px-4 py-2 bg-[#C9A84C] text-stone-900 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all cursor-pointer"
              >
                View Plan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({
  dest,
  isPrimary = false,
  matchScore,
  reasons,
  onExplore,
  onAdd,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-[40px] flex flex-col justify-between space-y-6 relative transition-all overflow-hidden border",
        isPrimary
          ? "bg-stone-900 text-white border-stone-800 shadow-2xl shadow-stone-900/20"
          : "bg-white border-stone-100 text-stone-900 shadow-sm hover:shadow-md"
      )}
    >
      {isPrimary && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/20 blur-3xl -mr-16 -mt-16" />
      )}

      <div className="space-y-4 relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest",
                isPrimary ? "bg-[#C9A84C] text-stone-900" : "bg-stone-100 text-stone-600"
              )}
            >
              {dest.region}
            </div>
            {!dest.hasPlanner && (
              <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500/10 text-amber-600 border border-amber-500/20">
                Overview Only
              </span>
            )}
          </div>

          {matchScore && (
            <div className="flex items-center gap-1 text-[#C9A84C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-black">{matchScore}%</span>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display text-3xl leading-none">{dest.name}</h3>
          <p
            className={cn(
              "text-xs mt-2 italic line-clamp-2",
              isPrimary ? "text-stone-300" : "text-stone-500"
            )}
          >
            {dest.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {dest.tags?.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider",
                isPrimary ? "bg-white/10 text-stone-300" : "bg-stone-100 text-stone-600"
              )}
            >
              #{tag}
            </span>
          ))}
        </div>

        {reasons && reasons.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-stone-100/10">
            {reasons.slice(0, 2).map((reason: string, i: number) => (
              <div
                key={i}
                className="flex items-start gap-1.5 text-[10px] font-medium leading-snug"
              >
                <span className="text-[#C9A84C] shrink-0">✨</span>
                <span className={isPrimary ? "text-stone-300" : "text-stone-600"}>
                  {reason}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-stone-100/10 space-y-3 relative z-10">
        <div className="flex items-center gap-3 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {dest.airport}
          </div>
          <div className="w-1 h-1 bg-stone-400 rounded-full" />
          <div>{dest.minDays || dest.min_days}+ Days</div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onExplore(dest)}
            className={cn(
              "flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer",
              isPrimary
                ? "bg-white/10 text-white border border-white/10 hover:bg-white hover:text-stone-900"
                : "bg-stone-50 text-stone-600 hover:text-stone-900 border border-stone-200"
            )}
          >
            {dest.hasPlanner ? "Explore" : "Overview"}
          </button>

          {dest.hasPlanner ? (
            <button
              onClick={() => onAdd(dest)}
              className={cn(
                "py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md",
                isPrimary
                  ? "flex-[1.5] bg-[#C9A84C] text-stone-900 hover:bg-white"
                  : "flex-1 bg-stone-900 text-white hover:bg-[#C9A84C]"
              )}
            >
              <Plus className="w-3.5 h-3.5" />
              {isPrimary ? "Start Itinerary" : "Add"}
            </button>
          ) : (
            <button
              disabled
              title="This destination is overview-only and not supported in the step-by-step Planner tool"
              className="flex-1 py-3 rounded-2xl text-[9px] font-bold uppercase tracking-wider bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed text-center"
            >
              Planner Unavailable
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
