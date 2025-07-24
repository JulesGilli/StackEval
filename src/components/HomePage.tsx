import React, { useState } from 'react';
interface HomePageProps {
  onStartQuiz: (difficulty: string, mode: string) => void;
}
const HomePage: React.FC<HomePageProps> = ({
  onStartQuiz
}) => {
  const [difficulty, setDifficulty] = useState('');
  const [mode, setMode] = useState('');
  const [error, setError] = useState('');
  const difficulties = [{
    id: 'beginner',
    label: 'Débutant'
  }, {
    id: 'easy',
    label: 'Facile'
  }, {
    id: 'medium',
    label: 'Moyen'
  }, {
    id: 'hard',
    label: 'Difficile'
  }, {
    id: 'expert',
    label: 'Expert'
  }];
  const modes = [{
    id: 'unity',
    label: 'Unity'
  }, {
    id: 'csharp',
    label: 'C#'
  }, {
    id: 'mixed',
    label: 'Mixte'
  }];
  const handleStartQuiz = () => {
    if (!difficulty) {
      setError('Veuillez sélectionner un niveau de difficulté');
      return;
    }
    if (!mode) {
      setError('Veuillez sélectionner un mode de test');
      return;
    }
    onStartQuiz(difficulty, mode);
  };
  return <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Quiz Interactif
          </h1>
          <p className="text-gray-600 text-center">
            Sélectionnez la difficulté et le mode pour commencer
          </p>
        </header>
        <section className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Niveau de difficulté
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {difficulties.map(item => <button key={item.id} className={`py-2 px-3 rounded-md border transition-colors ${difficulty === item.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`} onClick={() => setDifficulty(item.id)}>
                  {item.label}
                </button>)}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Mode de test
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modes.map(item => <button key={item.id} className={`py-3 px-4 rounded-md border transition-colors ${mode === item.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`} onClick={() => setMode(item.id)}>
                  {item.label}
                </button>)}
            </div>
          </div>
        </section>
        {error && <div className="mt-6 p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm text-center">
            {error}
          </div>}
        <div className="mt-10 text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors w-full sm:w-auto" onClick={handleStartQuiz}>
            Commencer le quiz
          </button>
        </div>
      </div>
    </div>;
};
export default HomePage;