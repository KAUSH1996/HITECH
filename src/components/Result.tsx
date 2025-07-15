import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store';

const Result: React.FC = () => {
  const { result, reset } = useQuizStore();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!result) return null;

  const { staticScore, avatar } = result;
  const scorePercentage = (staticScore / 15) * 100;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted for 4-Day Quiet-Flow Challenge:', email);
      setIsSubmitted(true);
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-sand px-6 py-12"
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-deep mb-2">
            Your Brain-Static Index
          </h1>
          <div className="text-5xl font-display font-bold text-rust mb-4">
            {staticScore} / 15
          </div>
        </motion.div>

        {/* Score Dial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-32 h-32">
            <div 
              className="w-32 h-32 rounded-full border-8 border-rust/20"
              style={{
                background: `conic-gradient(from 0deg, #AA4E2C 0%, #AA4E2C ${scorePercentage}%, #E8DFCF ${scorePercentage}%, #E8DFCF 100%)`
              }}
            />
            <div className="absolute inset-4 bg-sand rounded-full flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-deep">
                {staticScore}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Avatar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-8 border border-deep/10"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl font-display font-bold text-deep mb-1">
              {avatar.name}
            </h2>
            <p className="text-deep/70 font-body italic">
              {avatar.description}
            </p>
          </div>
        </motion.div>

        {/* Dose Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-deep/5 rounded-lg p-6 mb-8"
        >
          <h3 className="text-lg font-display font-bold text-deep mb-4">
            Your Dose & Ritual
          </h3>
          <ul className="space-y-2 mb-6">
            {avatar.doseRecommendation.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2 text-deep/80 font-body">
                <span className="text-rust mt-1">•</span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>

          {/* Ritual Icons */}
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-rust/20 rounded-full flex items-center justify-center">
                <span className="text-rust text-xl">🥄</span>
              </div>
              <span className="text-xs font-body text-deep/60">Scoop</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-rust/20 rounded-full flex items-center justify-center">
                <span className="text-rust text-xl">💧</span>
              </div>
              <span className="text-xs font-body text-deep/60">Sip</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-rust/20 rounded-full flex items-center justify-center">
                <span className="text-rust text-xl">🎯</span>
              </div>
              <span className="text-xs font-body text-deep/60">Flow</span>
            </div>
          </div>
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <h3 className="text-lg font-display font-bold text-deep text-center">
                Email me the 4-Day Quiet-Flow Challenge
              </h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-deep/20 bg-white/80 text-deep font-body focus:outline-none focus:ring-2 focus:ring-rust focus:border-transparent"
                  required
                  aria-label="Email address for 4-Day Quiet-Flow Challenge"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-rust text-sand font-body font-semibold rounded-lg hover:bg-rust/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand"
                  aria-label="Subscribe to challenge"
                >
                  Send
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-body">
                ✅ Challenge sent! Check your email.
              </p>
            </div>
          )}
        </motion.div>

        {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <button
            onClick={reset}
            className="px-6 py-3 bg-deep/10 text-deep font-body font-semibold rounded-lg hover:bg-deep/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-sand"
            aria-label="Restart the quiz"
          >
            Restart Quiz
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Result;