import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { QuizResult } from '../types/user';

interface ProfilePageProps {
    userId: string;
    onLogout: () => void;
    onStartNewQuiz: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userId, onStartNewQuiz }) => {
    const [username, setUsername] = useState('');
    const [email] = useState('');
    const [unlockedLevels, setUnlockedLevels] = useState<string[]>([]);
    const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            console.log('🔎 Tentative de chargement du profil pour userId :', userId);
            setLoading(true);
            try {
                const { data: profile, error: profileError } = await supabase
                    .from('profiles')
                    .select('username,unlockedLevels') // ✅ sans guillemets !
                    .eq('id', userId)
                    .maybeSingle();

                if (profileError) throw profileError;

                if (!profile) {
                    console.warn('⚠️ Aucun profil trouvé pour cet utilisateur dans Supabase.');
                    setUsername('');
                    setUnlockedLevels([]);
                    return;
                }

                setUsername(profile.username ?? '');
                setUnlockedLevels(profile.unlockedLevels ?? []);

                const { data: results, error: resultsError } = await supabase
                    .from('quiz_results')
                    .select('*')
                    .eq('user_id', userId)
                    .order('date', { ascending: false });

                if (resultsError) throw resultsError;

                setQuizHistory(results || []);
            } catch (err: any) {
                console.error('❌ Erreur chargement profil :', err.message || err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    const totalQuizzes = quizHistory.length;
    const averageScore =
        totalQuizzes > 0
            ? quizHistory.reduce((sum, quiz) => sum + quiz.score, 0) / totalQuizzes
            : 0;

    const getDifficultyLabel = (difficulty: string) =>
        ({
            beginner: 'Débutant',
            easy: 'Facile',
            medium: 'Moyen',
            hard: 'Difficile',
            expert: 'Expert',
        }[difficulty] || difficulty);

    const getModeLabel = (mode: string) =>
        ({
            unity: 'Unity',
            csharp: 'C#',
            evaluation: 'Évaluation',
        }[mode] || mode);

    const formatDate = (dateString: string) =>
        new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(dateString));

    const computeStats = (by: 'mode' | 'difficulty') =>
        quizHistory.reduce((acc, quiz) => {
            const key = by === 'mode' ? quiz.mode : quiz.difficulty;
            if (!acc[key]) acc[key] = { count: 0, totalScore: 0 };
            acc[key].count += 1;
            acc[key].totalScore += quiz.score;
            return acc;
        }, {} as Record<string, { count: number; totalScore: number }>);

    const modeStats = computeStats('mode');
    const difficultyStats = computeStats('difficulty');
    const recentQuizzes = quizHistory.slice(0, 5);

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                {loading ? (
                    <div className="text-center py-12 text-gray-500">Chargement du profil…</div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <header className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Profil de {username}</h1>
                            <p className="text-gray-600">{email}</p>
                        </header>

                        {/* Résumé global */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <StatCard title="Total de quiz" value={totalQuizzes} />
                            <StatCard title="Score moyen" value={`${averageScore.toFixed(1)}%`} />
                            <StatCard title="Niveaux débloqués" value={unlockedLevels.join(', ') || '-'} />
                        </div>

                        {/* Stats par mode */}
                        {Object.keys(modeStats).length > 0 && (
                            <StatTable title="Performance par mode" stats={modeStats} getLabel={getModeLabel} />
                        )}

                        {/* Stats par difficulté */}
                        {Object.keys(difficultyStats).length > 0 && (
                            <StatTable title="Performance par difficulté" stats={difficultyStats} getLabel={getDifficultyLabel} />
                        )}

                        {/* Historique */}
                        {recentQuizzes.length > 0 && (
                            <section>
                                <h2 className="text-xl font-medium text-gray-900 mb-4">Historique récent</h2>
                                <table className="w-full text-sm">
                                    <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left py-2 px-4">Date</th>
                                        <th className="text-left py-2 px-4">Mode</th>
                                        <th className="text-left py-2 px-4">Difficulté</th>
                                        <th className="text-center py-2 px-4">Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recentQuizzes.map((quiz) => (
                                        <tr key={quiz.id} className="border-b">
                                            <td className="py-2 px-4">{formatDate(quiz.date)}</td>
                                            <td className="py-2 px-4">{getModeLabel(quiz.mode)}</td>
                                            <td className="py-2 px-4">{getDifficultyLabel(quiz.difficulty)}</td>
                                            <td className="py-2 px-4 text-center">{quiz.score}%</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </section>
                        )}

                        <div className="text-center mt-8">
                            <button
                                onClick={onStartNewQuiz}
                                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md"
                            >
                                Commencer un nouveau quiz
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

// Sous-composant pour résumé
const StatCard = ({ title, value }: { title: string; value: string | number }) => (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
);

// Sous-composant tableau
const StatTable = ({
                       title,
                       stats,
                       getLabel,
                   }: {
    title: string;
    stats: Record<string, { count: number; totalScore: number }>;
    getLabel: (s: string) => string;
}) => (
    <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-4">{title}</h2>
        <table className="w-full text-sm">
            <thead>
            <tr className="bg-gray-50">
                <th className="text-left py-2 px-4">Type</th>
                <th className="text-center py-2 px-4">Quiz</th>
                <th className="text-center py-2 px-4">Moyenne</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(stats).map(([type, data]) => (
                <tr key={type} className="border-b">
                    <td className="py-2 px-4">{getLabel(type)}</td>
                    <td className="py-2 px-4 text-center">{data.count}</td>
                    <td className="py-2 px-4 text-center">{(data.totalScore / data.count).toFixed(1)}%</td>
                </tr>
            ))}
            </tbody>
        </table>
    </section>
);

export default ProfilePage;
