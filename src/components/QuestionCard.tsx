import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../data/questions';
import { useQuizStore } from '../store';
import { QuizAnswers } from '../types';

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onNext, 
  onBack, 
  isFirst, 
  isLast 
}) => {
  const { answers, setAnswer } = useQuizStore();
  
  const currentValue = answers[question.key as keyof QuizAnswers];
  const isAnswered = currentValue !== null && currentValue !== undefined;

  const handleAnswerChange = (value: any) => {
    setAnswer(question.key as keyof QuizAnswers, value);
  };

  const renderInput = () => {
    switch (question.type) {
      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option.value.toString()}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={question.key}
                  value={option.value.toString()}
                  checked={currentValue === option.value}
                  onChange={() => handleAnswerChange(option.value)}
                  className="w-4 h-4 text-rust focus:ring-rust focus:ring-2 border-deep/30"
                  aria-label={option.label}
                />
                <span className="font-body text-deep group-hover:text-rust transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-rust">
                {currentValue}
              </span>
              <span className="text-sm font-body text-deep/60 ml-2">
                / {question.max}
              </span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              step={question.step}
              value={currentValue as number}
              onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
              className="w-full h-2 bg-rust/20 rounded-lg appearance-none cursor-pointer slider"
              aria-label={`${question.title} slider, current value ${currentValue}`}
            />
            <div className="flex justify-between text-xs font-body text-deep/50">
              <span>Calm</span>
              <span>Static</span>
            </div>
          </div>
        );

      case 'buttons':
        return (
          <div className="grid grid-cols-3 gap-3">
            {question.options?.map((option) => (
              <button
                key={option.value.toString()}
                onClick={() => handleAnswerChange(option.value)}
                className={`
                  px-4 py-3 rounded-lg font-body font-semibold transition-all duration-200
                  ${currentValue === option.value 
                    ? 'bg-rust text-sand' 
                    : 'bg-deep/10 text-deep hover:bg-deep/20'
                  }
                  focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand
                `}
                aria-label={`Select ${option.label} ${question.unit || ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        );

      case 'boolean':
        return (
          <div className="grid grid-cols-2 gap-4">
            {question.options?.map((option) => (
              <button
                key={option.value.toString()}
                onClick={() => handleAnswerChange(option.value)}
                className={`
                  px-6 py-4 rounded-lg font-body font-semibold transition-all duration-200
                  ${currentValue === option.value 
                    ? 'bg-deep text-sand' 
                    : 'bg-rust/10 text-deep hover:bg-rust/20'
                  }
                  focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand
                `}
                aria-label={option.label}
              >
                {option.label}
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-md w-full mx-auto"
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-deep mb-2">
          {question.title}
        </h2>
        {question.subtitle && (
          <p className="text-deep/70 font-body">
            {question.subtitle}
          </p>
        )}
      </div>

      <div className="mb-12">
        {renderInput()}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={isFirst}
          className={`
            px-6 py-3 rounded-lg font-body font-semibold transition-all duration-200
            ${isFirst 
              ? 'bg-deep/10 text-deep/30 cursor-not-allowed' 
              : 'bg-deep/10 text-deep hover:bg-deep/20'
            }
            focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand
          `}
          aria-label="Go back to previous question"
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isAnswered}
          className={`
            px-6 py-3 rounded-lg font-body font-semibold transition-all duration-200
            ${!isAnswered
              ? 'bg-deep/20 text-deep/40 cursor-not-allowed'
              : 'bg-deep text-sand hover:ring-2 hover:ring-rust'
            }
            focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand
          `}
          aria-label={isLast ? "See your results" : "Go to next question"}
        >
          {isLast ? 'See Results' : 'Next'}
        </button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;