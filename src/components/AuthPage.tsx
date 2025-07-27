import React, {useState} from 'react';
import {supabase} from '../lib/supabaseClient';

const AuthPage: React.FC<{ onLogin: (id: string) => void }> = ({onLogin}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || (!isLogin && !username)) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        setError('');
        setMessage('');

        if (isLogin) {
            const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

            if (authError || !authData.user?.id) {
                setError(authError?.message || "Erreur d'authentification");
                return;
            }

            if (!authData.user.email_confirmed_at) {
                setMessage("Veuillez confirmer votre email avant de vous connecter.");
                await supabase.auth.signOut();
                return;
            }

            console.log('[✅ AuthPage] Connexion réussie avec ID:', authData.user.id);
            onLogin(authData.user.id);
        } else {
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { username } // injecte dans metadata
                }
            });

            if (signUpError) {
                setError(signUpError.message || "Erreur lors de l'inscription.");
                return;
            }

            if (!signUpData.user || signUpData.user?.identities?.length === 0) {
                setError("Cette adresse email est déjà utilisée. Essayez de vous connecter.");
                return;
            }

            console.log('[✅ AuthPage] Inscription réussie, username:', username);
            setMessage("Un email de confirmation vous a été envoyé. Veuillez vérifier votre boîte mail.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        {isLogin ? 'Connexion' : 'Inscription'}
                    </h1>
                    <p className="text-gray-600 text-center text-sm">
                        {isLogin
                            ? 'Connectez-vous pour accéder à votre compte'
                            : 'Créez un compte pour suivre vos performances'}
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Nom d'utilisateur
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                                placeholder="Votre nom d'utilisateur"
                            />
                        </div>
                    )}
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
                    {message && (
                        <div className="p-3 bg-green-50 border border-green-100 rounded-md text-green-700 text-sm">
                            {message}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                        {isLogin ? 'Se connecter' : "S'inscrire"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin
                            ? "Pas encore de compte ? S'inscrire"
                            : 'Déjà un compte ? Se connecter'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
