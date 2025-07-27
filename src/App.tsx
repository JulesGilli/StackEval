import React, {useEffect, useState} from 'react';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import ProfilePage from './components/ProfilePage';
import Header from './components/Header';
import {questionsData, Question} from './data/Questions';
import {saveQuizResult, tryUnlockNextLevel} from './utils/supabaseHelpers';
import {QuizResult} from './types/user';
import {supabase} from './lib/supabaseClient';
import {createProfileIfMissing} from './lib/createProfileIfMissing';

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

async function fetchUnlocked(userId: string | null): Promise<string[]> {
    if (!userId) return [];
    const {data, error} = await supabase
        .from('profiles')
        .select('unlockedLevels')
        .eq('id', userId)
        .maybeSingle();

    if (error || !data?.unlockedLevels) return [];
    return data.unlockedLevels;
}

function pickQuestions(allQuestions: Question[], category: string, level: string, count: number): Question[] {
    if (category === 'evaluation') {
        const filtered = allQuestions.filter(q => q.level === level);
        return getRandomQuestions(filtered, count);
    }
    const filtered = allQuestions.filter(q => q.category === category && q.level === level);
    return getRandomQuestions(filtered, count);
}

export function App() {
    const [userId, setUserId] = useState<string | null>(null);
    const [currentScreen, setCurrentScreen] = useState<'auth' | 'home' | 'quiz' | 'results' | 'profile'>('auth');
    const [quizSettings, setQuizSettings] = useState({difficulty: '', mode: ''});
    const [userAnswers, setUserAnswers] = useState<Array<number | null>>([]);
    const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
    const [unlockedLevels, setUnlockedLevels] = useState<string[]>([]);
    const [isSessionLoading, setIsSessionLoading] = useState(true);

    useEffect(() => {
        supabase.auth.signOut()
            .then(() => {
                console.log('[🔧 Reset] Déconnexion forcée');
                localStorage.clear();
                indexedDB.deleteDatabase('localforage');
            });
    }, []);

    // -------- Session init --------
    useEffect(() => {
        (async () => {
            setIsSessionLoading(true);
            console.log('[🔎 Auth Init] Vérification de la session Supabase...');

            const {data, error} = await supabase.auth.getSession();

            if (error) {
                console.error('[❌ Supabase] Erreur lors de getSession:', error.message);
            }

            const session = data?.session;

            if (!session) {
                console.log('[ℹ️] Aucune session trouvée. Redirection vers login.');
                await supabase.auth.signOut();
                setUserId(null);
                setCurrentScreen('auth');
                setIsSessionLoading(false);
                return;
            }

            const user = session.user;
            console.log('[✅ Session trouvée]', user);

            if (user?.email_confirmed_at) {
                console.log('[✅ Email confirmé] => Passage à Home');
                setUserId(user.id);

                const metadataUsername = user.user_metadata?.username || 'User_' + user.id.slice(0, 5);
                console.log('[👤 Session] Appel à createProfileIfMissing avec metadata:', metadataUsername);
                await createProfileIfMissing(user.id, metadataUsername);

                const levels = await fetchUnlocked(user.id);
                console.log('[📦 Levels déverrouillés]:', levels);
                setUnlockedLevels(levels);
                setCurrentScreen('home');
            } else {
                console.warn('[⚠️ Email non confirmé ou invalide] => Déconnexion forcée');
                await supabase.auth.signOut();
                setUserId(null);
                setCurrentScreen('auth');
            }

            setIsSessionLoading(false);
        })();
    }, []);
    // ------------------------------

    // -------- Guard: rediriger vers login si pas loggué --------
    useEffect(() => {
        if (!isSessionLoading && !userId && currentScreen !== 'auth') {
            setCurrentScreen('auth');
        }
    }, [isSessionLoading, userId, currentScreen]);
    // -----------------------------------------------------------

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUserId(null);
        setCurrentScreen('auth');
        setUserAnswers([]);
        setSelectedQuestions([]);
        setUnlockedLevels([]);
    };

    const handleLogin = async (id: string) => {
        const { data } = await supabase.auth.getUser();
        const user = data?.user;

        if (!user || user.id !== id || !user.email_confirmed_at) {
            await supabase.auth.signOut();
            setUserId(null);
            setCurrentScreen('auth');
            return;
        }

        setUserId(user.id);
        console.log('[✅ handleLogin] Utilisateur authentifié:', user.id);

        const metadataUsername = user.user_metadata?.username || 'User_' + user.id.slice(0, 5);
        console.log('[👤] createProfileIfMissing avec metadata:', metadataUsername);

        try {
            await createProfileIfMissing(user.id, metadataUsername);
        } catch (e) {
            console.error("❌ Erreur createProfileIfMissing:", e);
        }

        const levels = await fetchUnlocked(user.id);
        console.log('[📦 handleLogin] Levels déverrouillés:', levels);
        setUnlockedLevels(levels);
        setCurrentScreen('home');
    };


    const startQuiz = (category: string, level: string) => {
        if (!unlockedLevels.includes(level)) {
            alert("Ce niveau n'est pas encore débloqué.");
            return;
        }

        setQuizSettings({difficulty: level, mode: category});
        const questionCount = category === 'evaluation' ? 20 : 10;
        const questions = pickQuestions(questionsData, category, level, questionCount);
        setSelectedQuestions(questions);
        setUserAnswers(Array(questionCount).fill(null));
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
                await tryUnlockNextLevel(userId, newResult.mode, newResult.difficulty, newResult.score);

                if (newResult.mode === 'evaluation' && newResult.score >= 80) {
                    const updated = await fetchUnlocked(userId);
                    setUnlockedLevels(updated);
                }
            } catch (err) {
                console.error('Erreur en sauvegardant les résultats du quiz :', err);
            }
        }

        setCurrentScreen('results');
    };

    const restartQuiz = () => {
        setCurrentScreen('home');
    };

    if (isSessionLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Chargement...
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased">
            {userId && (
                <Header
                    isAuthenticated={true}
                    username={''}
                    onLogout={handleLogout}
                    onProfile={() => setCurrentScreen('profile')}
                />
            )}

            <main className="flex-1 flex flex-col">
                {currentScreen === 'auth' && <AuthPage onLogin={handleLogin}/>}

                {currentScreen === 'home' && userId && (
                    <HomePage
                        onStartQuiz={startQuiz}
                        unlockedLevels={unlockedLevels}
                    />
                )}

                {currentScreen === 'quiz' && userId && (
                    <QuizPage
                        questions={selectedQuestions}
                        userAnswers={userAnswers}
                        onSubmitAnswer={submitAnswer}
                        onFinishQuiz={finishQuiz}
                        quizSettings={quizSettings}
                        userId={userId}
                        setUnlockedLevels={setUnlockedLevels}
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

                {userId && currentScreen === 'profile' && (
                    <ProfilePage
                        userId={userId}
                        onLogout={handleLogout}
                        onStartNewQuiz={() => setCurrentScreen('home')}
                    />
                )}
            </main>
        </div>
    );
}
