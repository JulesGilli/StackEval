import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { questionsData } from './data/Questions';

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

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizSettings, setQuizSettings] = useState({
    difficulty: '',
    mode: ''
  });
  const [userAnswers, setUserAnswers] = useState<Array<number | null>>(Array(20).fill(null));
  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);

  const startQuiz = (difficulty: string, mode: string) => {
    setQuizSettings({ difficulty, mode });
    setUserAnswers(Array(20).fill(null));
    setCurrentScreen('quiz');

    let qs: any[] = [];
    if (mode === 'mixed') {
      // Mélange toutes les questions Unity + C# pour ce niveau, en pioche 20
      const all = [
        ...(questionsData[difficulty]?.unity || []),
        ...(questionsData[difficulty]?.csharp || []),
      ];
      qs = getRandomQuestions(all, 20);
    } else {
      // Mélange toutes les questions du mode choisi, en pioche 20
      qs = getRandomQuestions(questionsData[difficulty]?.[mode] || [], 20);
    }
    setSelectedQuestions(qs);
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
