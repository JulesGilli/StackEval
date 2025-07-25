import {supabase} from "../lib/supabaseClient.ts";
import {QuizResult} from "../components/AuthPage.tsx";

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

export const saveQuizResult = async (userId: string, result: QuizResult): Promise<void> => {
    const { error } = await supabase.from('quiz_results').insert({
        user_id: userId,
        date: result.date,
        mode: result.mode,
        difficulty: result.difficulty,
        score: result.score,
        totalQuestions: result.totalQuestions,
        correctAnswers: result.correctAnswers,
    });

    if (error) throw new Error(error.message);
};
