import React, {useState} from 'react';

interface HomePageProps {
    onStartQuiz: (category: string, level: string) => void;
    unlockedLevels: string[];
}

const HomePage: React.FC<HomePageProps> = ({onStartQuiz, unlockedLevels}) => {
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');
    const [error, setError] = useState('');

    const levels = [
        {id: 'user', label: 'Certified User'},
        {id: 'associate', label: 'Certified Associate'},
        {id: 'pro', label: 'Certified Professional'},
    ];

    const categories = [
        {id: 'fundamentals', label: 'Fondamentaux'},
        {id: 'scripting', label: 'Scripting & C#'},
        /*{ id: 'ui', label: 'Interface Utilisateur' },
        { id: 'animation', label: 'Animation' },
        { id: 'gameplay', label: 'Gameplay & Physique' },
        { id: 'graphics', label: 'Graphismes & Rendu' },
        { id: 'performance', label: 'Optimisation & Performances' },
        { id: 'build', label: 'Build & Publication' },*/
        {id: 'mixed', label: 'Mixte'},
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
                        StackEval
                    </h1>
                    <p className="text-gray-600 text-center">
                        Êtes-vous prêt pour la certif ? Faites le test.
                    </p>
                </header>
                <section className="space-y-8">
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Niveau de certification</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {levels.map(item => {
                                const isUnlocked = unlockedLevels.includes(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        disabled={!isUnlocked}
                                        className={`py-2 px-3 rounded-md border transition-colors font-semibold ${
                                            level === item.id
                                                ? 'bg-gray-900 text-white border-gray-900'
                                                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                        } ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={() => isUnlocked && setLevel(item.id)}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Catégorie</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {categories.map(item => (
                                <button
                                    key={item.id}
                                    className={`py-3 px-4 rounded-md border transition-colors font-semibold text-sm ${
                                        category === item.id
                                            ? 'bg-gray-900 text-white border-gray-900'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                    }`}
                                    onClick={() => setCategory(item.id)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                {error && (
                    <div
                        className="mt-6 p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm text-center">
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
