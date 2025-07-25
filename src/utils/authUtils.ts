import { UserData, QuizResult } from '../components/AuthPage'
// Load user data from localStorage
export const loadUserData = (): UserData | null => {
    const userData = localStorage.getItem('userData')
    return userData ? JSON.parse(userData) : null
}
// Save user data to localStorage
export const saveUserData = (userData: UserData): void => {
    localStorage.setItem('userData', JSON.stringify(userData))
}
// Clear user data from localStorage
export const clearUserData = (): void => {
    localStorage.removeItem('userData')
}
// Add quiz result to user history
export const addQuizResult = (
    userData: UserData,
    quizResult: Omit<QuizResult, 'id' | 'date'>,
): UserData => {
    const updatedUserData = {
        ...userData,
        quizHistory: [
            ...userData.quizHistory,
            {
                ...quizResult,
                id: Date.now().toString(),
                date: new Date().toISOString(),
            },
        ],
    }
    saveUserData(updatedUserData)
    return updatedUserData
}
// Generate mock quiz results for demo purposes
export const generateMockQuizHistory = (count: number): QuizResult[] => {
    const modes = ['unity', 'csharp', 'mixed']
    const difficulties = ['beginner', 'easy', 'medium', 'hard', 'expert']
    return Array(count)
        .fill(null)
        .map((_, index) => {
            const date = new Date()
            date.setDate(date.getDate() - index)
            return {
                id: `mock-${index}`,
                date: date.toISOString(),
                mode: modes[Math.floor(Math.random() * modes.length)],
                difficulty:
                    difficulties[Math.floor(Math.random() * difficulties.length)],
                score: Math.floor(Math.random() * 101),
                totalQuestions: 20,
                correctAnswers: Math.floor(Math.random() * 21),
            }
        })
}
