import { supabase } from '../lib/supabaseClient'

export async function saveQuizResultToDB(result: {
    user_id: string
    mode: string
    difficulty: string
    score: number
    totalQuestions: number
    correctAnswers: number
}) {
    const { error } = await supabase.from('quiz_results').insert([result])

    if (error) {
        console.error('Erreur insertion quiz_results:', error.message)
        throw error
    }
}
