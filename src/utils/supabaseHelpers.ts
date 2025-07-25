import {supabase} from "../lib/supabaseClient.ts";
import {QuizResult} from "../components/AuthPage.tsx";

export const updateUserQuizHistory = async (userId: string, quizHistory: QuizResult[]) => {
    const { error } = await supabase
        .from('users') // ou le nom de ta table
        .update({ quizHistory })
        .eq('id', userId);

    if (error) throw new Error(error.message);
};
