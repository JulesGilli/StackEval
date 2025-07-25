export interface QuizResult {
    id: string;
    date: string;
    mode: string;
    difficulty: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
}

export interface UserProfile {
    id: string;
    username: string;
    email: string;
    unlockedLevels: string[];
}
