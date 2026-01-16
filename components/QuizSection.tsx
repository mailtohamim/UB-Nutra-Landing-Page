"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizCategories, QuizCategory, QuizQuestion } from "@/lib/quiz-data";
import { ArrowRight, RefreshCcw, CheckCircle2 } from "lucide-react";

export default function QuizSection() {
    const [category, setCategory] = useState<QuizCategory | null>(null);
    const [step, setStep] = useState<"start" | "quiz" | "result">("start");
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [randomQuestions, setRandomQuestions] = useState<QuizQuestion[]>([]);

    // Initialize random category on mount
    useEffect(() => {
        const randomCat = quizCategories[Math.floor(Math.random() * quizCategories.length)];
        setCategory(randomCat);
        // Select 5 random questions from this category for the session
        const shuffled = [...randomCat.questions].sort(() => 0.5 - Math.random());
        setRandomQuestions(shuffled.slice(0, 5));
    }, []);

    const handleStart = () => {
        setStep("quiz");
    };

    const handleAnswer = (answer: string) => {
        setAnswers((prev) => ({ ...prev, [currentQIndex]: answer }));
        if (currentQIndex < randomQuestions.length - 1) {
            setTimeout(() => setCurrentQIndex((prev) => prev + 1), 250); // Slight delay for UX
        } else {
            setTimeout(() => setStep("result"), 250);
        }
    };

    const handleReset = () => {
        // Pick a new random category
        const randomCat = quizCategories[Math.floor(Math.random() * quizCategories.length)];
        setCategory(randomCat);
        const shuffled = [...randomCat.questions].sort(() => 0.5 - Math.random());
        setRandomQuestions(shuffled.slice(0, 5));

        setStep("start");
        setCurrentQIndex(0);
        setAnswers({});
    };

    if (!category) return null;

    return (
        <section className={`py-20 ${category.color} transition-colors duration-700 ease-in-out`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-12 relative">

                    <AnimatePresence mode="wait">
                        {step === "start" && (
                            <motion.div
                                key="start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center max-w-2xl"
                            >
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 bg-gray-100 text-gray-800`}>
                                    Wellness Quiz
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-swisse-charcoal uppercase mb-6 leading-tight">
                                    {category.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-500 font-medium mb-10 max-w-lg">
                                    {category.subtitle}
                                </p>
                                <button
                                    onClick={handleStart}
                                    className={`${category.buttonColor} text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3`}
                                >
                                    Let's Start <ArrowRight size={20} />
                                </button>
                            </motion.div>
                        )}

                        {step === "quiz" && (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="flex flex-col items-center w-full max-w-xl"
                            >
                                <div className="w-full flex justify-between items-center mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <span>Question {currentQIndex + 1} / {randomQuestions.length}</span>
                                    <span>{Math.round(((currentQIndex) / randomQuestions.length) * 100)}% Complete</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mb-12 overflow-hidden">
                                    <motion.div
                                        className={`h-full ${category.buttonColor}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQIndex) / randomQuestions.length) * 100}%` }}
                                    />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-swisse-charcoal mb-10 leading-snug">
                                    {randomQuestions[currentQIndex].question}
                                </h3>

                                <div className="grid grid-cols-1 gap-4 w-full">
                                    {randomQuestions[currentQIndex].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(option)}
                                            className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all font-semibold text-gray-700 active:scale-[0.98]"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === "result" && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center max-w-2xl"
                            >
                                <div className="mb-6 bg-green-100 p-4 rounded-full text-green-600">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-swisse-charcoal uppercase mb-6">
                                    You're All Set!
                                </h2>
                                <p className="text-lg text-gray-500 font-medium mb-10">
                                    Based on your answers, we've curated a selection of products just for you. Take the next step in your wellness journey daily.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/shop" className={`${category.buttonColor} text-white px-8 py-3 rounded-full text-base font-bold uppercase tracking-wide hover:opacity-90 transition-all shadow-lg`}>
                                        View Recommendations
                                    </a>
                                    <button
                                        onClick={handleReset}
                                        className="bg-white border-2 border-gray-200 text-gray-600 px-8 py-3 rounded-full text-base font-bold uppercase tracking-wide hover:bg-gray-50 transition-all flex items-center gap-2 justify-center"
                                    >
                                        <RefreshCcw size={18} /> Restart Quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Footnote inside the colored section */}
                <p className={`mt-8 text-center text-xs font-bold uppercase tracking-widest opacity-60 ${category.textColor}`}>
                    *Results are based on general wellness guidelines. Consult a professional for specific advice.
                </p>
            </div>
        </section>
    );
}
