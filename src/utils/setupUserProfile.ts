import { supabase } from '../lib/supabaseClient';
import { UserData } from '../types/user';

/**
 * Récupère ou crée un profil utilisateur dans Supabase.
 */
export async function setupUserProfileIfNeeded(userId: string, email: string): Promise<UserData | null> {
    // 1. Vérifie si un profil existe déjà
    const { data: profile, error } = await supabase
        .from('profile')
        .select('username, unlockedLevels')
        .eq('id', userId)
        .single();

    if (!error && profile) {
        return {
            id: userId,
            username: profile.username || '',
            email,
            quizHistory: [], // à charger ailleurs si besoin
            unlockedLevels: profile.unlockedLevels || [],
        };
    }

    // 2. Si pas trouvé, le créer
    const { error: insertError } = await supabase
        .from('profile')
        .insert({
            id: userId,
            username: '',
            unlockedLevels: [],
        });

    if (insertError) {
        console.error('[Supabase] Erreur création profil :', insertError.message);
        return null;
    }

    return {
        id: userId,
        username: '',
        email,
        quizHistory: [],
        unlockedLevels: [],
    };
}
