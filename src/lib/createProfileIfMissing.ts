import { supabase } from './supabaseClient';
import { User } from '@supabase/supabase-js'; 

export async function createProfileIfMissing(user: User, username: string) {
    if (!user?.id) return;

    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .maybeSingle();

    if (error) throw error;
    if (data) return; // existe déjà

    const { error: insertError } = await supabase
        .from('profiles')
        .insert([{
            id: user.id,
            email: user.email,
            username: username || user.email?.split('@')[0] || 'user',
            unlockedLevels: ['user'],
        }]);

    if (insertError) throw insertError;
}
