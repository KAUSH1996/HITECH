import { create } from 'zustand';
import { QuizState, QuizAnswers } from './types';

const initialAnswers: QuizAnswers = {
  focusWindow: null,
  noise: 3,
  coffeeCups: 2,
  hijack: null,
  adhd: null,
  eveningCrash: null,
  sleepQuality: null,
};

export const useQuizStore = create<QuizState>((set) => ({
  currentScreen: 'start',
  currentQuestion: 0,
  answers: initialAnswers,
  result: null,
  
  setScreen: (screen) => set({ currentScreen: screen }),
  
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  
  setAnswer: (key, value) => set((state) => ({
    answers: { ...state.answers, [key]: value }
  })),
  
  setResult: (result) => set({ result }),
  
  reset: () => set({
    currentScreen: 'start',
    currentQuestion: 0,
    answers: initialAnswers,
    result: null,
  }),
}));