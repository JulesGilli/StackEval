import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
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
}
const QuizPage: React.FC<QuizPageProps> = ({
  questions,
  userAnswers,
  onSubmitAnswer,
  onFinishQuiz,
  quizSettings
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSubmit = () => {
    // Check if all questions have been answered
    const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
    if (unansweredQuestions > 0) {
      if (!window.confirm(`Vous avez ${unansweredQuestions} question(s) sans réponse. Voulez-vous vraiment terminer le quiz ?`)) {
        return;
      }
    }
    onFinishQuiz();
  };
  const getModeLabel = (mode: string) => {
    const modeMap: Record<string, string> = {
      unity: 'Unity',
      csharp: 'C#',
      mixed: 'Mixte'
    };
    return modeMap[mode] || mode;
  };
  const getDifficultyLabel = (difficulty: string) => {
    const difficultyMap: Record<string, string> = {
      beginner: 'Débutant',
      easy: 'Facile',
      medium: 'Moyen',
      hard: 'Difficile',
      expert: 'Expert'
    };
    return difficultyMap[difficulty] || difficulty;
  };
  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = userAnswers.filter(answer => answer !== null).length;
  const progressPercentage = answeredCount / questions.length * 100;
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium text-gray-900">
              Quiz: {getModeLabel(quizSettings.mode)}
            </h1>
            <div className="text-sm text-gray-600">
              Niveau: {getDifficultyLabel(quizSettings.difficulty)}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span>
                {answeredCount}/{questions.length} questions répondues
              </span>
              <span>
                Question {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-gray-900 h-1.5 rounded-full transition-all duration-300" style={{
              width: `${progressPercentage}%`
            }}></div>
            </div>
          </div>
          <QuestionCard question={currentQuestion} selectedAnswer={userAnswers[currentQuestionIndex]} onSelectAnswer={answerIndex => onSubmitAnswer(currentQuestionIndex, answerIndex)} showCorrectAnswer={false} />
          <div className="flex justify-between mt-8">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Précédente
            </button>
            {currentQuestionIndex < questions.length - 1 ? <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors" onClick={handleNext}>
                Suivante
              </button> : <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors" onClick={handleSubmit}>
                Terminer
              </button>}
          </div>
        </div>
        <div className="text-center">
          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={handleSubmit}>
            Terminer et voir les résultats
          </button>
        </div>
      </main>
    </div>;
};
export default QuizPage;