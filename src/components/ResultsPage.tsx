import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  level: string;
}

interface ResultsPageProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRestartQuiz: () => void;
  quizSettings: {
    difficulty: string;
    mode: string;
  };
}


const ResultsPage: React.FC<ResultsPageProps> = ({
                                                   questions,
                                                   userAnswers,
                                                   onRestartQuiz,
                                                   quizSettings
                                                 }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(
      (q, i) => userAnswers[i] === q.correctAnswer
  ).length;
  const unansweredCount = userAnswers.filter(a => a === null).length;
  const score = (correctAnswers / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-700';
    if (score >= 60) return 'text-blue-700';
    if (score >= 40) return 'text-yellow-700';
    return 'text-red-700';
  };

  const getModeLabel = (mode: string) => {
    const map: Record<string, string> = {
      unity: 'Unity',
      csharp: 'C#',
      evaluation: 'Évaluation'
    };
    return map[mode] || mode;
  };

  const getDifficultyLabel = (difficulty: string) => {
    const map: Record<string, string> = {
      beginner: 'Débutant',
      easy: 'Facile',
      medium: 'Moyen',
      hard: 'Difficile',
      expert: 'Expert'
    };
    return map[difficulty] || difficulty;
  };

  const current = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Résultats du Quiz
              </h1>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-sm text-gray-600">
                  <span>Mode : {getModeLabel(quizSettings.mode)}</span>
                  <span className="mx-3">•</span>
                  <span>Niveau : {getDifficultyLabel(quizSettings.difficulty)}</span>
                </div>
                <div className="text-5xl font-bold mb-3">
                  <span className={getScoreColor()}>{score.toFixed(0)}%</span>
                </div>
                <div className="text-gray-700">
                  {correctAnswers} bonne{correctAnswers !== 1 ? 's' : ''} réponse
                  sur {totalQuestions}
                  {unansweredCount > 0 && (
                      <div className="text-sm text-gray-500 mt-1 text-center">
                        ({unansweredCount} question{unansweredCount > 1 ? 's' : ''} sans réponse)
                      </div>
                  )}
                </div>
              </div>
            </header>

            <section className="border-t border-b border-gray-200 py-6 mb-6">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Révision des questions</h2>
              <div className="mb-6 flex justify-between items-center">
                <div className="text-sm font-medium text-gray-900">
                  Question {currentQuestionIndex + 1}/{totalQuestions}
                </div>
                <div className="text-sm">
                  {currentAnswer === current.correctAnswer ? (
                      <span className="text-green-600">✓ Réponse correcte</span>
                  ) : currentAnswer === null ? (
                      <span className="text-gray-500">⚠ Sans réponse</span>
                  ) : (
                      <span className="text-red-600">✗ Réponse incorrecte</span>
                  )}
                </div>
              </div>
              <QuestionCard
                  question={current}
                  selectedAnswer={currentAnswer}
                  showCorrectAnswer={true}
              />
            </section>

            <div className="flex justify-between">
              <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédente
              </button>
              <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivante
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
                onClick={onRestartQuiz}
            >
              Nouveau Quiz
            </button>
          </div>
        </div>
      </div>
  );
};

export default ResultsPage;
