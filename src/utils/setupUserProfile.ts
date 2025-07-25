// utils/setupUserProfile.ts
import { supabase } from '../lib/supabaseClient'
import { UserData } from '../components/AuthPage'

export async function setupUserProfileIfNeeded(user: {
    id: string;
    email: string | null;
}): Promise<UserData | null> {
    // 1. Vérifie si un profil existe déjà
    const { data: profile, error } = await supabase
        .from('profile')
        .select('username, unlockedLevels')
        .eq('id', user.id)
        .single()

    if (!error && profile) {
        return {
            id: user.id,
            username: profile.username || '',
            email: user.email || '',
            password: '',
            quizHistory: [],
            unlockedLevels: profile.unlockedLevels || []
        }
    }

    // 2. Sinon on le crée (username vide si inconnu)
    const insertRes = await supabase.from('profile').insert({
        id: user.id,
        username: '',
        unlockedLevels: []
    })

    if (insertRes.error) {
        console.error("Erreur création profil :", insertRes.error.message)
        return null
    }

    return {
        id: user.id,
        username: '',
        email: user.email || '',
        password: '',
        quizHistory: [],
        unlockedLevels: []
    }
}
