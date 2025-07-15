import { QuizAnswers, QuizResult, Avatar } from '../types';

const avatars: Avatar[] = [
  {
    id: 'builder',
    name: 'Side-Hustle Builder',
    description: 'fighting evening fog',
    doseRecommendation: [
      'Half scoop 15 min before 7-9 PM work block',
      'Pair with max 1 coffee',
      'Hydrate 500 ml'
    ]
  },
  {
    id: 'creator',
    name: 'Creative Catalyst',
    description: 'battling afternoon static',
    doseRecommendation: [
      'Full scoop 30 min before creative sessions',
      'Skip coffee after 2 PM',
      'Deep breathing for 2 min'
    ]
  },
  {
    id: 'guardian',
    name: 'Steady Guardian',
    description: 'maintaining consistent focus',
    doseRecommendation: [
      'Quarter scoop with morning routine',
      'Max 2 coffees before noon',
      'Protein snack mid-morning'
    ]
  },
  {
    id: 'analyst',
    name: 'Detail Analyst',
    description: 'cutting through mental clutter',
    doseRecommendation: [
      'Three-quarter scoop 20 min before deep work',
      'Limit coffee to 1 cup',
      'Phone in another room'
    ]
  }
];

export function calculateScore(answers: QuizAnswers): QuizResult {
  let staticScore = 0;
  let jitterFlag = 0;
  let crashFlag = 0;
  let cortisolFlag = 0;

  // Base noise score with multiplier
  staticScore += answers.noise * 1.5;

  // Coffee jitter flag
  if (answers.coffeeCups >= 4) {
    jitterFlag = 1;
  }

  // Evening crash flag
  if (answers.eveningCrash === 'none') {
    crashFlag = 1;
  }

  // Sleep quality cortisol flag
  if (answers.sleepQuality === 'poor') {
    cortisolFlag = 1;
  }

  // Add flags to total score
  staticScore += jitterFlag + crashFlag + cortisolFlag;

  // Cap score at 15
  staticScore = Math.min(Math.round(staticScore), 15);

  // Determine avatar based on focus window and flags
  const avatar = determineAvatar(answers, { jitterFlag, crashFlag, cortisolFlag });

  return {
    staticScore,
    avatar
  };
}

function determineAvatar(
  answers: QuizAnswers, 
  flags: { jitterFlag: number; crashFlag: number; cortisolFlag: number }
): Avatar {
  const { focusWindow, hijack, adhd } = answers;
  const { crashFlag } = flags;

  // Primary branching based on focus window
  if (focusWindow === 'night' || crashFlag === 1) {
    return avatars[0]; // Side-Hustle Builder
  }

  if (hijack === 'sideQuest' || adhd === true) {
    return avatars[1]; // Creative Catalyst  
  }

  if (focusWindow === 'morning' && answers.sleepQuality === 'great') {
    return avatars[2]; // Steady Guardian
  }

  // Default to Analyst for office workers and detail-oriented folks
  return avatars[3]; // Detail Analyst
}

export function getDoseRecommendation(avatar: Avatar): string[] {
  return avatar.doseRecommendation;
}