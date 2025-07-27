import React, {useState} from 'react';
import QuestionCard from './QuestionCard';
import {fetchUnlockedLevels, tryUnlockNextLevel} from "../utils/supabaseHelpers.ts";


interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string;
    level: string;
}

interface QuizPageProps {
    questions: Question[];
    userAnswers: (number | null)[];
    onSubmitAnswer: (questionIndex: number, answerIndex: number) => void;
    onFinishQuiz: () => void;
    quizSettings: {
        difficulty: string;
        mode: string;
    };
    userId: string;
    setUnlockedLevels: React.Dispatch<React.SetStateAction<string[]>>;
}

const QuizPage: React.FC<QuizPageProps> = ({
                                               questions,
                                               userAnswers,
                                               onSubmitAnswer,
                                               onFinishQuiz,
                                               quizSettings,
                                               userId,
                                               setUnlockedLevels,
                                           }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const TOTAL_QUESTIONS = questions.length;

    const handleNext = () => {
        if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = async () => {
        const unanswered = userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            const confirmMsg = `Vous avez ${unanswered} question${unanswered > 1 ? 's' : ''} sans réponse. Voulez-vous continuer ?`;
            if (!window.confirm(confirmMsg)) return;
        }

        const correctAnswers = questions.reduce((count, q, i) => {
            return userAnswers[i] === q.correctAnswer ? count + 1 : count;
        }, 0);

        const score = Math.round((correctAnswers / TOTAL_QUESTIONS) * 100);

        try {
            try {
                console.log("🔑 Tentative de déblocage du niveau supérieur...");
                await tryUnlockNextLevel(userId, quizSettings.mode, quizSettings.difficulty, score);
                console.log("✅ Déblocage terminé");

                if (quizSettings.mode === 'mixed' && score >= 80) {
                    const updated = await fetchUnlockedLevels(userId);
                    setUnlockedLevels(updated);
                }
            } catch (err) {
                console.error("Erreur déblocage niveau :", err);
            }

        } catch (err) {
            if (err instanceof Error) {
                console.error("Erreur enregistrement résultat :", err.message);
            } else {
                console.error("Erreur inconnue :", err);
            }
        }

        onFinishQuiz();
    };


    const getModeLabel = (mode: string) => {
        const map: Record<string, string> = {
            fundamentals: 'Fondamentaux',
            scripting: 'Scripting & C#',
            mixed: 'Évaluation',
        };
        return map[mode] || mode;
    };

    const getDifficultyLabel = (difficulty: string) => {
        const map: Record<string, string> = {
            user: 'Certified User',
            associate: 'Certified Associate',
            pro: 'Certified Professional'
        };
        return map[difficulty] || difficulty;
    };

    const currentQuestion = questions[currentQuestionIndex];
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const progress = (answeredCount / TOTAL_QUESTIONS) * 100;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-3xl flex justify-between items-center">
                    <h1 className="text-lg font-medium text-gray-900">
                        {getModeLabel(quizSettings.mode)}
                    </h1>
                    <div className="text-sm text-gray-600">
                        Niveau : {getDifficultyLabel(quizSettings.difficulty)}
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-6 max-w-3xl">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-3">
                            <span>{answeredCount}/{TOTAL_QUESTIONS} répondues</span>
                            <span>Question {currentQuestionIndex + 1}/{TOTAL_QUESTIONS}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                                className="bg-gray-900 h-1.5 rounded-full transition-all duration-300"
                                style={{width: `${progress}%`}}
                            />
                        </div>
                    </div>

                    <QuestionCard
                        question={currentQuestion}
                        selectedAnswer={userAnswers[currentQuestionIndex]}
                        onSelectAnswer={answerIndex => onSubmitAnswer(currentQuestionIndex, answerIndex)}
                        showCorrectAnswer={false}
                    />

                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Précédente
                        </button>

                        {currentQuestionIndex < TOTAL_QUESTIONS - 1 ? (
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Suivante
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Terminer
                            </button>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                        onClick={handleSubmit}
                    >
                        Terminer et voir les résultats
                    </button>
                </div>
            </main>
        </div>
    );
};

export default QuizPage;
