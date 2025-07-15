import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm font-body text-deep/60 mb-2">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-rust/20 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-rust to-deep h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;