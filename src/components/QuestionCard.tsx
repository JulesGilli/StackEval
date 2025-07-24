import React from 'react';
interface QuestionCardProps {
  question: {
    id: number;
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
  const getOptionClassName = (index: number) => {
    const baseClasses = 'border rounded-md p-4 transition-colors cursor-pointer flex items-start';
    if (!showCorrectAnswer) {
      return selectedAnswer === index ? 'bg-gray-100 border-gray-300 ' + baseClasses : 'hover:bg-gray-50 border-gray-200 ' + baseClasses;
    }
    // Results view (showing correct/incorrect)
    if (index === question.correctAnswer) {
      return 'bg-green-50 border-green-200 ' + baseClasses;
    } else if (selectedAnswer === index) {
      return 'bg-red-50 border-red-200 ' + baseClasses;
    } else {
      return 'border-gray-200 ' + baseClasses;
    }
  };
  return <div>
      <h3 className="text-xl font-medium text-gray-900 mb-6">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option, index) => <div key={index} className={getOptionClassName(index)} onClick={() => onSelectAnswer && onSelectAnswer(index)}>
            <div className="mr-3 mt-0.5 flex-shrink-0">
              <div className={`w-5 h-5 rounded-full border ${selectedAnswer === index ? 'bg-gray-900 border-gray-900' : 'border-gray-400'} flex items-center justify-center`}>
                {selectedAnswer === index && <div className="w-2 h-2 rounded-full bg-white"></div>}
              </div>
            </div>
            <div className="text-gray-700">{option}</div>
          </div>)}
      </div>
      {showCorrectAnswer && <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="font-medium text-gray-900 mb-2">Explication :</p>
          <p className="text-gray-700">{question.explanation}</p>
        </div>}
    </div>;
};
export default QuestionCard;