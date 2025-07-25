import React, { useState, useEffect } from 'react';

interface QuestionCardProps {
    question: {
        id: string;
        question: string;
        options: string[];
        correctAnswer: number;
        explanation: string;
    };
    selectedAnswer: number | null;
    onSelectAnswer?: (index: number) => void;
    showCorrectAnswer: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       selectedAnswer,
                                                       onSelectAnswer,
                                                       showCorrectAnswer
                                                   }) => {
    // Shuffle options with original index tracking
    const [shuffledOptions, setShuffledOptions] = useState<{ option: string; originalIndex: number }[]>([]);

    useEffect(() => {
        const optionsWithIndex = question.options.map((opt, i) => ({ option: opt, originalIndex: i }));
        for (let i = optionsWithIndex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
        }
        setShuffledOptions(optionsWithIndex);
    }, [question]);

    const getOptionClassName = (index: number) => {
        const baseClasses = 'border rounded-md p-4 transition-colors cursor-pointer flex items-start';

        if (!showCorrectAnswer) {
            return selectedAnswer === shuffledOptions[index].originalIndex
                ? 'bg-gray-100 border-gray-300 ' + baseClasses
                : 'hover:bg-gray-50 border-gray-200 ' + baseClasses;
        }

        if (index === shuffledOptions.findIndex(opt => opt.originalIndex === question.correctAnswer)) {
            return 'bg-green-50 border-green-200 ' + baseClasses;
        } else if (selectedAnswer === shuffledOptions[index].originalIndex) {
            
            return 'bg-red-50 border-red-200 ' + baseClasses;
        } else {
            return 'border-gray-200 ' + baseClasses;
        }
    };

    const handleClick = (index: number) => {
        if (!onSelectAnswer) return;
        // Pass original index to parent
        onSelectAnswer(shuffledOptions[index].originalIndex);
    };

    return (
        <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">{question.question}</h3>
            <div className="space-y-3">
                {shuffledOptions.map((opt, index) => (
                    <div
                        key={index}
                        className={getOptionClassName(index)}
                        onClick={() => handleClick(index)}
                    >
                        <div className="mr-3 mt-0.5 flex-shrink-0">
                            <div
                                className={`w-5 h-5 rounded-full border ${
                                    selectedAnswer === shuffledOptions[index].originalIndex
                                        ? 'bg-gray-900 border-gray-900'
                                        : 'border-gray-400'
                                } flex items-center justify-center`}
                            >
                                {selectedAnswer === shuffledOptions[index].originalIndex && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                            </div>
                        </div>
                        <div className="text-gray-700">{opt.option}</div>
                    </div>
                ))}
            </div>
            {showCorrectAnswer && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                    <p className="font-medium text-gray-900 mb-2">Explication :</p>
                    <p className="text-gray-700">{question.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
