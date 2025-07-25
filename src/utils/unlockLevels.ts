import { supabase } from '../lib/supabaseClient';

export const unlockNextLevelIfNeeded = async (
    userId: string,
    currentLevel: string,
    category: string,
    score: number
) => {
    if (score < 80) return;

    const levelOrder = ['beginner', 'easy', 'medium', 'hard', 'expert'];
    const currentIndex = levelOrder.indexOf(currentLevel);
    if (currentIndex === -1 || currentIndex >= levelOrder.length - 1) return;

    const nextLevel = levelOrder[currentIndex + 1];
    const levelId = `${category}:${nextLevel}`; // ex: 'unity:easy'

    // Récupère les niveaux débloqués actuels
    const { data: profile, error } = await supabase
        .from('profile')
        .select('unlockedLevels')
        .eq('id', userId)
        .single();

    if (error || !profile) return;

    const alreadyUnlocked: string[] = profile.unlockedLevels || [];
    if (alreadyUnlocked.includes(levelId)) return;

    const updatedLevels = [...alreadyUnlocked, levelId];

    const { error: updateError } = await supabase
        .from('profile')
        .update({ unlockedLevels: updatedLevels })
        .eq('id', userId);

    if (updateError) {
        console.error('Erreur lors du déblocage de niveau :', updateError.message);
    } else {
        console.log(`✅ Niveau débloqué : ${levelId}`);
    }
};
