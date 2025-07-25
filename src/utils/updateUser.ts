import { supabase } from '../lib/supabaseClient'
import { QuizResult } from '../types/user'

export async function updateUserQuizHistory(userId: string, quizHistory: QuizResult[]) {
    const { error } = await supabase
        .from('profile')
        .update({ quizHistory })
        .eq('id', userId)

    if (error) throw new Error(error.message)
}
