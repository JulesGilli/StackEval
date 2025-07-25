import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import ProfilePage from './components/ProfilePage';
import Header from './components/Header';
import { questionsData, Question } from './data/Questions';
import { saveQuizResult } from './utils/supabaseHelpers';

import { QuizResult } from './types/user';

function shuffle<T>(arr: T[]): T[] {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomQuestions<T>(questions: T[], count: number): T[] {
  return shuffle(questions).slice(0, count);
}

function pickQuestions(
    allQuestions: Question[],
    category: string,
    level: string,
    count: number
): Question[] {
  if (category === 'mixed') {
    const filtered = allQuestions.filter(q => q.level === level);
    return getRandomQuestions(filtered, count);
  }
  const filtered = allQuestions.filter(
      q => q.category === category && q.level === level
  );
  return getRandomQuestions(filtered, count);
}

export function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'auth' | 'home' | 'quiz' | 'results' | 'profile'>('auth');

  const [quizSettings, setQuizSettings] = useState({
    difficulty: '',
    mode: ''
  });

  const [userAnswers, setUserAnswers] = useState<Array<number | null>>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const handleLogin = (id: string) => {
    setUserId(id);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setUserId(null);
    setCurrentScreen('auth');
    setUserAnswers([]);
    setSelectedQuestions([]);
  };

  const startQuiz = (category: string, level: string) => {
    setQuizSettings({ difficulty: level, mode: category });
    const questions = pickQuestions(questionsData, category, level, 10);
    setSelectedQuestions(questions);
    setUserAnswers(Array(10).fill(null));
    setCurrentScreen('quiz');
  };

  const submitAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const finishQuiz = async () => {
    const correct = selectedQuestions.filter(
        (q, i) => userAnswers[i] === q.correctAnswer
    ).length;

    const newResult: QuizResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      mode: quizSettings.mode,
      difficulty: quizSettings.difficulty,
      score: (correct / selectedQuestions.length) * 100,
      totalQuestions: selectedQuestions.length,
      correctAnswers: correct,
    };

    if (userId) {
      try {
        await saveQuizResult(userId, newResult);
      } catch (err) {
        console.error('Erreur en sauvegardant les résultats du quiz :', err);
      }
    }

    setCurrentScreen('results');
  };

  const restartQuiz = () => {
    setCurrentScreen('home');
  };

  return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {userId && (
            <Header
                isAuthenticated={true}
                username={''} // à améliorer si tu veux afficher le nom
                onLogout={handleLogout}
                onProfile={() => setCurrentScreen('profile')}
            />
        )}

        {currentScreen === 'auth' && (
            <AuthPage onLogin={handleLogin} />
        )}

        {currentScreen === 'home' && userId && (
            <HomePage onStartQuiz={startQuiz} />
        )}

        {currentScreen === 'quiz' && userId && (
            <QuizPage
                questions={selectedQuestions}
                userAnswers={userAnswers}
                onSubmitAnswer={submitAnswer}
                onFinishQuiz={finishQuiz}
                quizSettings={quizSettings}
                userId={userId}
            />
        )}

        {currentScreen === 'results' && userId && (
            <ResultsPage
                questions={selectedQuestions}
                userAnswers={userAnswers}
                onRestartQuiz={restartQuiz}
                quizSettings={quizSettings}
            />
        )}

        {currentScreen === 'profile' && userId && (
            <ProfilePage
                userId={userId}
                onLogout={handleLogout}
                onStartNewQuiz={() => setCurrentScreen('home')}
            />
        )}
      </div>
  );
}