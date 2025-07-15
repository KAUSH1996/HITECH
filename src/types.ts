export type FocusWindow = 'morning' | 'night' | 'shift' | 'office';
export type Hijack = 'notifications' | 'chatter' | 'drowsy' | 'sideQuest';
export type EveningCrash = 'plenty' | 'some' | 'none';
export type SleepQuality = 'great' | 'ok' | 'poor';

export interface QuizAnswers {
  focusWindow: FocusWindow | null;
  noise: number;
  coffeeCups: number;
  hijack: Hijack | null;
  adhd: boolean | null;
  eveningCrash: EveningCrash | null;
  sleepQuality: SleepQuality | null;
}

export interface QuizResult {
  staticScore: number;
  avatar: Avatar;
}

export interface Avatar {
  id: string;
  name: string;
  description: string;
  doseRecommendation: string[];
}

export type Screen = 'start' | 'quiz' | 'result';

export interface QuizState {
  currentScreen: Screen;
  currentQuestion: number;
  answers: QuizAnswers;
  result: QuizResult | null;
  setScreen: (screen: Screen) => void;
  setCurrentQuestion: (question: number) => void;
  setAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
  setResult: (result: QuizResult) => void;
  reset: () => void;
}