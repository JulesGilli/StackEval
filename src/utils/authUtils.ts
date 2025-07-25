import { QuizResult } from '../components/AuthPage'
import { supabase } from '../lib/supabaseClient'

/**
 * Insère un résultat de quiz dans Supabase pour l'utilisateur donné
 */
export const addQuizResult = async (
    userId: string,
    quizResult: Omit<QuizResult, 'id' | 'date'>
): Promise<boolean> => {
    const { error } = await supabase.from('quiz_results').insert({
        user_id: userId,
        ...quizResult,
        date: new Date().toISOString(),
    })

    return !error
}
