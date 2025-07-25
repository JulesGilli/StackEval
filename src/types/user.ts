// src/types/user.ts

export interface QuizResult {
    id: string;
    date: string;
    mode: string;
    difficulty: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
}

export interface UserData {
    id: string;
    username: string;
    email: string;
    quizHistory: QuizResult[];
    unlockedLevels: string[];
}
