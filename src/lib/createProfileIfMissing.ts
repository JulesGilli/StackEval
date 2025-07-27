import { supabase } from './supabaseClient';

export async function createProfileIfMissing(userId: string, username: string) {
    console.log('[🚩 createProfileIfMissing] called with:', userId, username); // 👈 AJOUTE ÇA
    const { data, error } = await supabase
        .from('profiles')
        .select('id', { head: false })
        .eq('id', userId)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error('[❌ createProfileIfMissing] SELECT failed:', error.message);
        return;
    }

    if (data) {
        console.log('[ℹ️] Profile already exists');
        return;
    }

    const { error: insertError } = await supabase.from('profiles').insert({
        id: userId,
        username,
        unlockedLevels: ['user']
    });

    if (insertError) {
        console.error('[❌ createProfileIfMissing] INSERT failed:', insertError.message);
    } else {
        console.log('[✅] Profile created for', userId, 'with username:', username);
    }
}

