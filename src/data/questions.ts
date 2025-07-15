export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: 'radio' | 'slider' | 'buttons' | 'boolean';
  key: string;
  options?: Array<{ value: string | number | boolean; label: string }>;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    title: "When do you need your brain sharpest?",
    subtitle: "Your main focus window",
    type: "radio",
    key: "focusWindow",
    options: [
      { value: "morning", label: "Morning (6-10 AM)" },
      { value: "office", label: "Office hours (9-5 PM)" },
      { value: "night", label: "Evening (7-11 PM)" },
      { value: "shift", label: "Shift work/Variable" },
    ],
  },
  {
    id: 2,
    title: "Rate your current mental noise",
    subtitle: "How scattered does your thinking feel right now?",
    type: "slider",
    key: "noise",
    min: 1,
    max: 5,
    step: 1,
    unit: "noise level",
  },
  {
    id: 3,
    title: "How many cups of coffee today?",
    subtitle: "Including espresso shots, energy drinks",
    type: "buttons",
    key: "coffeeCups",
    options: [
      { value: 0, label: "0" },
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4+" },
    ],
  },
  {
    id: 4,
    title: "What hijacks your focus most?",
    type: "radio",
    key: "hijack",
    options: [
      { value: "notifications", label: "Phone/email pings" },
      { value: "chatter", label: "Background chatter" },
      { value: "drowsy", label: "Afternoon drowsiness" },
      { value: "sideQuest", label: "Random thoughts/side-quests" },
    ],
  },
  {
    id: 5,
    title: "Do you have ADHD or suspect you might?",
    type: "boolean",
    key: "adhd",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  {
    id: 6,
    title: "How's your evening energy?",
    subtitle: "After 6 PM",
    type: "radio",
    key: "eveningCrash",
    options: [
      { value: "plenty", label: "Plenty of steam left" },
      { value: "some", label: "Some energy, bit tired" },
      { value: "none", label: "Dead tired, brain fog" },
    ],
  },
  {
    id: 7,
    title: "How was last night's sleep?",
    type: "radio",
    key: "sleepQuality",
    options: [
      { value: "great", label: "Great (7-8+ hours, deep)" },
      { value: "ok", label: "OK (6-7 hours, some tossing)" },
      { value: "poor", label: "Poor (<6 hours or restless)" },
    ],
  },
];