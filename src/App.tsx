import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { questionsData, Question } from './data/Questions';

// Mélange un tableau (Fisher–Yates)
function shuffle<T>(arr: T[]): T[] {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Sélectionne N questions aléatoires d'une liste
function getRandomQuestions<T>(questions: T[], count: number): T[] {
  return shuffle(questions).slice(0, count);
}

// Sélectionne N questions par filtrage sur catégorie ET niveau
function pickQuestions(
    allQuestions: Question[],
    category: string,
    level: string,
    count: number
): Question[] {
  if (category === "mixed") {
    // On mélange toutes les catégories pour ce niveau
    const filtered = allQuestions.filter(q => q.level === level);
    return getRandomQuestions(filtered, count);
  }
  // Sinon : filtrage normal sur la catégorie choisie
  const filtered = allQuestions.filter(q => q.category === category && q.level === level);
  return getRandomQuestions(filtered, count);
}

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizSettings, setQuizSettings] = useState({
    level: '',     // correspond à "user", "pro", "expert"
    category: ''   // ex: "UI", "Animation", "XR/AR", "mixed"
  });
  const [userAnswers, setUserAnswers] = useState<Array<number | null>>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const startQuiz = (category: string, level: string) => {
    setQuizSettings({ category, level });
    // Sélectionne les questions filtrées et mélangées
    const questions = pickQuestions(questionsData, category, level, 20);
    setSelectedQuestions(questions);
    setUserAnswers(Array(questions.length).fill(null));
    setCurrentScreen('quiz');
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

  return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {currentScreen === 'home' && <HomePage onStartQuiz={startQuiz} />}
        {currentScreen === 'quiz' && (
            <QuizPage
                questions={selectedQuestions}
                userAnswers={userAnswers}
                onSubmitAnswer={submitAnswer}
                onFinishQuiz={finishQuiz}
                quizSettings={quizSettings}
            />
        )}
        {currentScreen === 'results' && (
            <ResultsPage
                questions={selectedQuestions}
                userAnswers={userAnswers}
                onRestartQuiz={restartQuiz}
                quizSettings={quizSettings}
            />
        )}
      </div>
  );
}
