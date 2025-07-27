import {supabase} from "../lib/supabaseClient.ts";
import { QuizResult } from '../types/user';

export const fetchUserQuizHistory = async (userId: string): Promise<QuizResult[]> => {
    const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false });

    if (error) {
        console.error("Erreur chargement quiz_results :", error.message);
        return [];
    }

    return data as QuizResult[];
};

export const unlockNextLevel = async (userId: string, newLevel: string): Promise<void> => {
    const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('unlockedLevels')
        .eq('id', userId)
        .single();

    if (fetchError) throw new Error(fetchError.message);

    const current: string[] = data?.unlockedLevels ?? [];
    if (current.includes(newLevel)) return;

    const updated = [...current, newLevel];
    const { error: updateError } = await supabase
        .from('profiles')
        .update({ unlockedLevels: updated })
        .eq('id', userId);

    if (updateError) throw new Error(updateError.message);
};

export const saveQuizResult = async (userId: string, result: QuizResult) => {
    console.log('➡️ Saving quiz result:', { userId, result });

    const { error } = await supabase.from('quiz_results').insert({
        user_id: userId,
        date: result.date,
        mode: result.mode,
        difficulty: result.difficulty,
        score: result.score,
        totalQuestions: result.totalQuestions,
        correctAnswers: result.correctAnswers
    });

    if (error) {
        console.error('❌ Supabase insert error:', error);
        throw error;
    }
};

const LEVEL_ORDER = ['user', 'associate', 'pro'];

export async function tryUnlockNextLevel(userId: string, mode: string, difficulty: string, score: number) {
    if (mode !== 'evaluation') return;

    const currentLevelIndex = LEVEL_ORDER.indexOf(difficulty);
    if (currentLevelIndex === -1 || currentLevelIndex >= LEVEL_ORDER.length - 1) return;

    if (score < 80) return;

    const nextLevel = LEVEL_ORDER[currentLevelIndex + 1];

    // Récupère le profil
    const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('unlockedLevels')
        .eq('id', userId)
        .maybeSingle();

    if (fetchError) {
        console.error('❌ Erreur chargement profil pour déblocage :', fetchError.message);
        return;
    }

    if (!profile) {
        console.warn('⚠️ Aucun profil trouvé pour déblocage.');
        return;
    }

    const alreadyUnlocked = profile.unlockedLevels || [];
    if (alreadyUnlocked.includes(nextLevel)) {
        console.log(`✅ Niveau '${nextLevel}' déjà débloqué`);
        return;
    }

    // Mise à jour
    const updatedLevels = [...alreadyUnlocked, nextLevel];
    const { error: updateError } = await supabase
        .from('profiles')
        .update({ unlockedLevels: updatedLevels })
        .eq('id', userId);

    if (updateError) {
        console.error('❌ Erreur mise à jour des niveaux débloqués :', updateError.message);
    } else {
        console.log(`✅ Niveau '${nextLevel}' débloqué pour l'utilisateur ${userId}`);
    }
}

export async function fetchUnlockedLevels(userId: string): Promise<string[]> {
    const { data, error } = await supabase
        .from('profiles')
        .select('unlockedLevels')
        .eq('id', userId)
        .maybeSingle();

    if (!error && data?.unlockedLevels) return data.unlockedLevels;
    return [];
}


