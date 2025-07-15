import { describe, it, expect } from 'vitest';
import { calculateScore } from './score';
import { QuizAnswers } from '../types';

describe('Score Calculation', () => {
  it('should calculate base score from noise level', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 4,
      coffeeCups: 1,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'plenty',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.staticScore).toBe(6); // 4 * 1.5 = 6
  });

  it('should add jitter flag for high coffee consumption', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 2,
      coffeeCups: 4,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'plenty',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.staticScore).toBe(4); // (2 * 1.5) + 1 jitter flag = 4
  });

  it('should add crash flag for no evening energy', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 2,
      coffeeCups: 1,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'none',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.staticScore).toBe(4); // (2 * 1.5) + 1 crash flag = 4
  });

  it('should add cortisol flag for poor sleep', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 2,
      coffeeCups: 1,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'plenty',
      sleepQuality: 'poor'
    };

    const result = calculateScore(answers);
    expect(result.staticScore).toBe(4); // (2 * 1.5) + 1 cortisol flag = 4
  });

  it('should cap score at 15', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 5,
      coffeeCups: 4,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'none',
      sleepQuality: 'poor'
    };

    const result = calculateScore(answers);
    expect(result.staticScore).toBeLessThanOrEqual(15);
  });

  it('should assign Side-Hustle Builder for night focus window', () => {
    const answers: QuizAnswers = {
      focusWindow: 'night',
      noise: 3,
      coffeeCups: 2,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'plenty',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.avatar.id).toBe('builder');
    expect(result.avatar.name).toBe('Side-Hustle Builder');
  });

  it('should assign Creative Catalyst for ADHD users', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 3,
      coffeeCups: 2,
      hijack: 'sideQuest',
      adhd: true,
      eveningCrash: 'plenty',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.avatar.id).toBe('creator');
    expect(result.avatar.name).toBe('Creative Catalyst');
  });

  it('should assign Steady Guardian for morning people with great sleep', () => {
    const answers: QuizAnswers = {
      focusWindow: 'morning',
      noise: 2,
      coffeeCups: 1,
      hijack: 'notifications',
      adhd: false,
      eveningCrash: 'plenty',
      sleepQuality: 'great'
    };

    const result = calculateScore(answers);
    expect(result.avatar.id).toBe('guardian');
    expect(result.avatar.name).toBe('Steady Guardian');
  });

  it('should assign Detail Analyst as default', () => {
    const answers: QuizAnswers = {
      focusWindow: 'office',
      noise: 3,
      coffeeCups: 2,
      hijack: 'chatter',
      adhd: false,
      eveningCrash: 'some',
      sleepQuality: 'ok'
    };

    const result = calculateScore(answers);
    expect(result.avatar.id).toBe('analyst');
    expect(result.avatar.name).toBe('Detail Analyst');
  });
});