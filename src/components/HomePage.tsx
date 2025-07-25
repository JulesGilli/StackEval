import React, { useEffect, useState } from 'react';
import { QuizResult, UserData } from '../types/user';
import { supabase } from '../lib/supabaseClient';

interface ProfilePageProps {
  userData: UserData;
  onLogout: () => void;
  onStartNewQuiz: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData, onStartNewQuiz }) => {
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const { data, error } = await supabase
          .from('quiz_results')
          .select('*')
          .eq('user_id', userData.id)
          .order('date', { ascending: false });

      if (error) {
        console.error('Erreur chargement historique quiz :', error.message);
        return;
      }

      setQuizHistory(data || []);
    };

    loadHistory();
  }, [userData.id]);

  const totalQuizzes = quizHistory.length;
  const averageScore =
      totalQuizzes > 0
          ? quizHistory.reduce((sum, quiz) => sum + quiz.score, 0) / totalQuizzes
          : 0;

  const modeStats = quizHistory.reduce((stats, quiz) => {
    if (!stats[quiz.mode]) stats[quiz.mode] = { count: 0, totalScore: 0 };
    stats[quiz.mode].count++;
    stats[quiz.mode].totalScore += quiz.score;
    return stats;
  }, {} as Record<string, { count: number; totalScore: number }>);

  const difficultyStats = quizHistory.reduce((stats, quiz) => {
    if (!stats[quiz.difficulty]) stats[quiz.difficulty] = { count: 0, totalScore: 0 };
    stats[quiz.difficulty].count++;
    stats[quiz.difficulty].totalScore += quiz.score;
    return stats;
  }, {} as Record<string, { count: number; totalScore: number }>);

  const recentQuizzes = quizHistory.slice(0, 5);

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

  const getModeLabel = (mode: string) => {
    const modeMap: Record<string, string> = {
      unity: 'Unity',
      csharp: 'C#',
      mixed: 'Mixte'
    };
    return modeMap[mode] || mode;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Profil de {userData.username}</h1>
              <p className="text-gray-600">{userData.email}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard title="Total de quiz" value={totalQuizzes.toString()} />
              <StatCard title="Score moyen" value={`${averageScore.toFixed(1)}%`} />
              <StatCard
                  title="Dernier quiz"
                  value={recentQuizzes.length > 0 ? `${recentQuizzes[0].score}%` : '-'}
                  subtitle={
                    recentQuizzes.length > 0
                        ? `${getModeLabel(recentQuizzes[0].mode)} – ${getDifficultyLabel(recentQuizzes[0].difficulty)}`
                        : ''
                  }
              />
            </div>

            {totalQuizzes > 0 ? (
                <>
                  <StatsTable
                      title="Performance par mode"
                      stats={modeStats}
                      labelMap={getModeLabel}
                  />
                  <StatsTable
                      title="Performance par difficulté"
                      stats={difficultyStats}
                      labelMap={getDifficultyLabel}
                  />
                  <RecentQuizzesTable quizzes={recentQuizzes} formatDate={formatDate} getModeLabel={getModeLabel} getDifficultyLabel={getDifficultyLabel} />
                </>
            ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Vous n'avez pas encore complété de quiz.</p>
                </div>
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

// 🔽 Composants réutilisables
const StatCard = ({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) => (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
    </div>
);

const StatsTable = ({
                      title,
                      stats,
                      labelMap
                    }: {
  title: string;
  stats: Record<string, { count: number; totalScore: number }>;
  labelMap: (key: string) => string;
}) => (
    <section className="mb-8">
      <h2 className="text-xl font-medium text-gray-900 mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Catégorie</th>
            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">Quiz terminés</th>
            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">Score moyen</th>
          </tr>
          </thead>
          <tbody>
          {Object.entries(stats).map(([key, val]) => (
              <tr key={key} className="border-b">
                <td className="py-3 px-4">{labelMap(key)}</td>
                <td className="py-3 px-4 text-center">{val.count}</td>
                <td className="py-3 px-4 text-center">{(val.totalScore / val.count).toFixed(1)}%</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
);

const RecentQuizzesTable = ({
                              quizzes,
                              formatDate,
                              getModeLabel,
                              getDifficultyLabel
                            }: {
  quizzes: QuizResult[];
  formatDate: (d: string) => string;
  getModeLabel: (mode: string) => string;
  getDifficultyLabel: (difficulty: string) => string;
}) => (
    <section>
      <h2 className="text-xl font-medium text-gray-900 mb-4">Historique récent</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Date</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Mode</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Difficulté</th>
            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">Score</th>
          </tr>
          </thead>
          <tbody>
          {quizzes.map((quiz) => (
              <tr key={quiz.id} className="border-b">
                <td className="py-3 px-4">{formatDate(quiz.date)}</td>
                <td className="py-3 px-4">{getModeLabel(quiz.mode)}</td>
                <td className="py-3 px-4">{getDifficultyLabel(quiz.difficulty)}</td>
                <td className="py-3 px-4 text-center font-medium">{quiz.score}%</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
);
