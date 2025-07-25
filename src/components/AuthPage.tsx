import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { UserData, QuizResult } from './AuthPage';
import { setupUserProfileIfNeeded } from '../utils/supabaseApi';

interface AuthPageProps {
    onLogin: (userData: UserData) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        try {
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            const user = data.user;
            const profile = await setupUserProfileIfNeeded(user.id, user.email || '');

            onLogin(profile);
        } catch (err: any) {
            setError(err.message || 'Erreur inconnue');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        Connexion
                    </h1>
                    <p className="text-gray-600 text-center text-sm">
                        Connectez-vous pour accéder à votre compte
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                            placeholder="votre@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                        Se connecter
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Pas encore de compte ? Créez-en un via le lien d’inscription.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
