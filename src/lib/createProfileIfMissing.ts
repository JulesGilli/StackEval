import { User } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';

export async function createProfileIfMissing(user: User | null) {
    if (!user || !user.id || !user.email_confirmed_at) return;

    const { error: insertError } = await supabase
        .from('profiles')
        .insert({
            id: user.id,
            username: user.user_metadata?.username ?? '',
            unlockedLevels: ['user'],
        });

    if (insertError) {
        if (insertError.code === '23505') {
            console.log('⏩ Profil déjà existant, insertion ignorée.');
        } else {
            console.error('❌ Erreur insertion profil :', insertError.message);
        }
    } else {
        console.log('✅ Profil inséré avec succès.');
    }
}


