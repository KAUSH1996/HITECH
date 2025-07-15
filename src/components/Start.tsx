import React from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store';

const Start: React.FC = () => {
  const { setScreen, setCurrentQuestion } = useQuizStore();

  const handleStart = () => {
    setCurrentQuestion(0);
    setScreen('quiz');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-sand flex flex-col items-center justify-center px-6 py-12"
    >
      <div className="max-w-md w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-display font-bold text-deep mb-6 leading-tight"
        >
          How loud is your brain right now?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl font-body text-deep/80 mb-12"
        >
          Measure the static in 45 seconds.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={handleStart}
          className="bg-deep text-sand font-body font-semibold px-8 py-4 rounded-lg text-lg hover:ring-2 hover:ring-rust transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand"
          aria-label="Start the Brain-Static Index quiz"
        >
          Start Quiz
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-sm font-body text-deep/60"
        >
          7 quick questions • No email required
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Start;