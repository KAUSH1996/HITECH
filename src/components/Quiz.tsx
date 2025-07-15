import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../store';
import { questions } from '../data/questions';
import { calculateScore } from '../utils/score';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

const Quiz: React.FC = () => {
  const { 
    currentQuestion, 
    answers, 
    setCurrentQuestion, 
    setScreen, 
    setResult 
  } = useQuizStore();

  const currentQ = questions[currentQuestion];
  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (isLast) {
      // Calculate score and show results
      const result = calculateScore(answers);
      setResult(result);
      setScreen('result');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-sand px-6 py-12">
      <div className="max-w-md mx-auto">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={currentQ}
              onNext={handleNext}
              onBack={handleBack}
              isFirst={isFirst}
              isLast={isLast}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;