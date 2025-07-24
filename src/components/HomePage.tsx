import React, { useState } from 'react';

interface HomePageProps {
  onStartQuiz: (category: string, level: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [error, setError] = useState('');

  // Labels certif Unity
  const levels = [
    { id: 'user', label: 'Certified User' },          // débutant
    { id: 'pro', label: 'Certified Associate' },  // intermédiaire
    { id: 'expert', label: 'Certified Professional' },      // expert/senior
  ];

  // Active qu’une seule catégorie, mais déjà prêt pour la suite
  const categories = [
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'mixed', label: 'Mixte' },
    { id: 'UI', label: 'UI' },
    { id: 'XR', label: 'XR / AR / VR' },
    { id: 'Scripting', label: 'Scripting / C#' },
    { id: 'Physique', label: 'Physique' },
    { id: 'Asset Management', label: 'Asset Management' },
    { id: 'Lighting/Rendering', label: 'Éclairage' },
    { id: 'Profiling/Debugging', label: 'Profiling / Optimisation' },
    { id: 'Version Control', label: 'Version Control' },
    { id: 'Testing/QA', label: 'Testing/QA' },
    { id: 'Build', label: 'Build / Déploiement' },
    { id: 'Animation', label: 'Animation' },
    { id: 'Shaders', label: 'Shaders / Matériaux' },
    { id: 'Audio', label: 'Audio' },
    /*{ id: 'Input', label: 'Input / Contrôles' },
    { id: 'AI', label: 'Navigation / IA' },
    { id: 'Scene', label: 'Scene Management' },
    { id: 'Editor', label: 'Editor Scripting' },
    { id: '2D3D', label: '2D vs 3D' },
    { id: 'Misc', label: 'Divers' },*/
  ];

  const handleStartQuiz = () => {
    if (!level) {
      setError('Veuillez sélectionner un niveau');
      return;
    }
    if (!category) {
      setError('Veuillez sélectionner une catégorie');
      return;
    }
    setError('');
    onStartQuiz(category, level);
  };

  return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
              Quiz Interactif Unity
            </h1>
            <p className="text-gray-600 text-center">
              Sélectionnez la catégorie et le niveau de certification pour commencer
            </p>
          </header>
          <section className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Niveau de certification
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {levels.map(item => (
                    <button
                        key={item.id}
                        className={`py-2 px-3 rounded-md border transition-colors font-semibold ${level === item.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`}
                        onClick={() => setLevel(item.id)}
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Catégorie
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {categories.map(item => (
                    <button
                        key={item.id}
                        className={`py-3 px-4 rounded-md border transition-colors font-semibold text-sm ${category === item.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`}
                        onClick={() => setCategory(item.id)}
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>
          </section>
          {error && (
              <div className="mt-6 p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm text-center">
                {error}
              </div>
          )}
          <div className="mt-10 text-center">
            <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors w-full sm:w-auto"
                onClick={handleStartQuiz}
            >
              Commencer le quiz
            </button>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
