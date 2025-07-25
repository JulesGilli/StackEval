import { supabase } from '../lib/supabaseClient'

/**
 * Récupère les niveaux débloqués pour un utilisateur.
 */
export async function fetchUnlockedLevels(userId: string): Promise<string[]> {
    const { data, error } = await supabase
        .from('profile')
        .select('unlockedLevels')
        .eq('id', userId)
        .single()

    if (error) {
        console.error("Erreur récupération niveaux débloqués :", error.message)
        return []
    }

    return data.unlockedLevels ?? []
}

/**
 * Enregistre un résultat de quiz dans la table `quiz_result` et débloque le niveau suivant si score ≥ 80.
 */
export async function saveQuizResultToDB({
                                             user_id,
                                             mode,
                                             difficulty,
                                             score,
                                             totalQuestions,
                                             correctAnswers
                                         }: {
    user_id: string
    mode: string
    difficulty: string
    score: number
    totalQuestions: number
    correctAnswers: number
}) {
    // 1. Insert du résultat
    const { error: insertError } = await supabase.from('quiz_results').insert({
        user_id,
        mode,
        difficulty,
        score,
        totalQuestions,
        correctAnswers,
        date: new Date().toISOString()
    })

    if (insertError) {
        throw new Error(`Erreur lors de l'enregistrement du résultat : ${insertError.message}`)
    }

    // 2. Vérifie si on doit débloquer un niveau
    if (score >= 80) {
        const { data: profileData, error: profileError } = await supabase
            .from('profile')
            .select('unlockedLevels')
            .eq('id', user_id)
            .single()

        if (profileError) {
            console.warn('Impossible de récupérer le profil pour mise à jour des niveaux.')
            return
        }

        const currentLevels: string[] = profileData.unlockedLevels ?? []

        if (!currentLevels.includes(difficulty)) {
            const updatedLevels = [...currentLevels, difficulty]
            const { error: updateError } = await supabase
                .from('profile')
                .update({ unlockedLevels: updatedLevels })
                .eq('id', user_id)

            if (updateError) {
                console.warn('Erreur lors de la mise à jour des niveaux débloqués :', updateError.message)
            }
        }
    }
}
