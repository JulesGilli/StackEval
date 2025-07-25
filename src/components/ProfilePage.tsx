import React from 'react';
import { UserData } from './AuthPage';

interface ProfilePageProps {
    userData: UserData;
    onLogout: () => void;
    onStartNewQuiz: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData, onStartNewQuiz }) => {
    const { username, email, unlockedLevels, quizHistory } = userData;

    const totalQuizzes = quizHistory.length;
    const averageScore =
        totalQuizzes > 0
            ? quizHistory.reduce((sum, quiz) => sum + quiz.score, 0) / totalQuizzes
            : 0;

    const recentQuizzes = [...quizHistory]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    const getLabel = (type: string, map: Record<string, string>) => map[type] || type;

    const getDifficultyLabel = (difficulty: string) =>
        getLabel(difficulty, {
            beginner: 'Débutant',
            easy: 'Facile',
            medium: 'Moyen',
            hard: 'Difficile',
            expert: 'Expert',
        });

    const getModeLabel = (mode: string) =>
        getLabel(mode, {
            unity: 'Unity',
            csharp: 'C#',
            mixed: 'Mixte',
        });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    const computeStats = (by: 'mode' | 'difficulty') => {
        return quizHistory.reduce((acc, quiz) => {
            const key = by === 'mode' ? quiz.mode : quiz.difficulty;
            if (!acc[key]) acc[key] = { count: 0, totalScore: 0 };
            acc[key].count += 1;
            acc[key].totalScore += quiz.score;
            return acc;
        }, {} as Record<string, { count: number; totalScore: number }>);
    };

    const modeStats = computeStats('mode');
    const difficultyStats = computeStats('difficulty');

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profil de {username}</h1>
                        <p className="text-gray-600">{email}</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Total de quiz</h3>
                            <p className="text-3xl font-bold text-gray-900">{totalQuizzes}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Score moyen</h3>
                            <p className="text-3xl font-bold text-gray-900">{averageScore.toFixed(1)}%</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Niveaux débloqués</h3>
                            <p className="text-sm text-gray-700">{unlockedLevels.join(', ') || '-'}</p>
                        </div>
                    </div>

                    {/* Performance par mode */}
                    {Object.keys(modeStats).length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xl font-medium text-gray-900 mb-4">Performance par mode</h2>
                            <table className="w-full text-sm">
                                <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left py-2 px-4">Mode</th>
                                    <th className="text-center py-2 px-4">Quiz</th>
                                    <th className="text-center py-2 px-4">Moyenne</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(modeStats).map(([mode, stats]) => (
                                    <tr key={mode} className="border-b">
                                        <td className="py-2 px-4">{getModeLabel(mode)}</td>
                                        <td className="py-2 px-4 text-center">{stats.count}</td>
                                        <td className="py-2 px-4 text-center">
                                            {(stats.totalScore / stats.count).toFixed(1)}%
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </section>
                    )}

                    {/* Performance par difficulté */}
                    {Object.keys(difficultyStats).length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xl font-medium text-gray-900 mb-4">Performance par difficulté</h2>
                            <table className="w-full text-sm">
                                <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left py-2 px-4">Difficulté</th>
                                    <th className="text-center py-2 px-4">Quiz</th>
                                    <th className="text-center py-2 px-4">Moyenne</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(difficultyStats).map(([difficulty, stats]) => (
                                    <tr key={difficulty} className="border-b">
                                        <td className="py-2 px-4">{getDifficultyLabel(difficulty)}</td>
                                        <td className="py-2 px-4 text-center">{stats.count}</td>
                                        <td className="py-2 px-4 text-center">
                                            {(stats.totalScore / stats.count).toFixed(1)}%
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </section>
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
                                        <td className="py-2 px-4 text-center font-medium">{quiz.score}%</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </section>
                    )}
                </div>

                <div className="text-center">
                    <button
                        className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
                        onClick={onStartNewQuiz}
                    >
                        Commencer un nouveau quiz
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
