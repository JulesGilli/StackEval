import React from 'react'
interface HeaderProps {
    isAuthenticated: boolean
    username?: string
    onLogout: () => void
    onProfile: () => void
}
const Header: React.FC<HeaderProps> = ({
                                           isAuthenticated,
                                           username,
                                           onLogout,
                                           onProfile,
                                       }) => {
    return (
        <header className="bg-white border-b border-gray-200 py-4">
            <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center">
                <h1 className="text-xl font-medium text-gray-900">Quiz Interactif</h1>
                {isAuthenticated && (
                    <div className="flex items-center space-x-4">
                        <button
                            className="text-gray-700 hover:text-gray-900"
                            onClick={onProfile}
                        >
                            {username || 'Profil'}
                        </button>
                        <button
                            className="text-sm text-gray-600 hover:text-gray-900"
                            onClick={onLogout}
                        >
                            Déconnexion
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header
