import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import SplashCursor from './components/SplashCursor'; 

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizSettings, setQuizSettings] = useState({
    difficulty: '',
    mode: ''
  });
  const [userAnswers, setUserAnswers] = useState<Array<number | null>>(Array(20).fill(null));
  // Placeholder for quiz questions - to be replaced with real content later
  const placeholderQuestions = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    question: `Question ${index + 1}`,
    options: [`Option A pour question ${index + 1}`, `Option B pour question ${index + 1}`, `Option C pour question ${index + 1}`, `Option D pour question ${index + 1}`],
    correctAnswer: 0,
    explanation: `Explication pour la question ${index + 1}`
  }));
  const startQuiz = (difficulty: string, mode: string) => {
    setQuizSettings({
      difficulty,
      mode
    });
    setCurrentScreen('quiz');
    setUserAnswers(Array(20).fill(null));
  };
  const submitAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };
  const finishQuiz = () => {
    setCurrentScreen('results');
  };
  const restartQuiz = () => {
    setCurrentScreen('home');
  };
  return <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {currentScreen === 'home' && <HomePage onStartQuiz={startQuiz} />}
      {currentScreen === 'quiz' && <QuizPage questions={placeholderQuestions} userAnswers={userAnswers} onSubmitAnswer={submitAnswer} onFinishQuiz={finishQuiz} quizSettings={quizSettings} />}
      {currentScreen === 'results' && <ResultsPage questions={placeholderQuestions} userAnswers={userAnswers} onRestartQuiz={restartQuiz} quizSettings={quizSettings} />}
    </div>;
}