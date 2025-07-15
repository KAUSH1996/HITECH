# Brain-Static Index Quiz

A mobile-first web application that measures mental "static" through a 7-question quiz and provides personalized focus recommendations based on user responses.

## 🎯 Features

- **7-Question Flow**: Progressive quiz with different input types (radio, slider, buttons, boolean)
- **Score Engine**: Calculates a "Static Score" (0-15) based on noise levels, flags, and multipliers
- **Avatar Segmentation**: Maps users to one of four personas (Builder, Creator, Guardian, Analyst)
- **Personalized Results**: Custom dose recommendations and ritual guidance
- **Email Capture**: Lead generation for "4-Day Quiet-Flow Challenge"
- **Smooth Animations**: Framer Motion transitions and progress tracking
- **Mobile-First**: Responsive design optimized for mobile devices

## 🎨 Design System

### Brand Colors
- **Sand**: `#E8DFCF` (background)
- **Deep**: `#13251E` (text & primary)
- **Rust**: `#AA4E2C` (accent)

### Typography
- **Display**: Satoshi (fallback: Inter)
- **Body**: Inter

## 🏗️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Testing**: Vitest

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Start.tsx          # Landing screen
│   ├── QuestionCard.tsx   # Individual question component
│   ├── ProgressBar.tsx    # Quiz progress indicator
│   └── Result.tsx         # Results and recommendations
├── data/
│   └── questions.ts       # Quiz questions configuration
├── utils/
│   ├── score.ts          # Scoring and avatar logic
│   └── score.test.ts     # Unit tests
├── types.ts              # TypeScript definitions
├── store.ts              # Zustand state management
└── App.tsx               # Main application component
```

## 🧮 Scoring Algorithm

The Brain-Static Index is calculated using:

1. **Base Score**: `noise_level * 1.5`
2. **Jitter Flag**: +1 if coffee consumption ≥ 4 cups
3. **Crash Flag**: +1 if evening energy = "none"
4. **Cortisol Flag**: +1 if sleep quality = "poor"

**Total Score**: Base + Flags (capped at 15)

## 👥 Avatar Segmentation

| Avatar | Trigger Conditions |
|--------|-------------------|
| **Side-Hustle Builder** | Night focus window OR crash flag |
| **Creative Catalyst** | ADHD true OR hijack = "sideQuest" |
| **Steady Guardian** | Morning focus + great sleep |
| **Detail Analyst** | Default (office workers, detail-oriented) |

## 🧪 Testing

Run the test suite to verify scoring logic:

```bash
npm run test
```

Tests cover:
- Base score calculation
- Flag logic (jitter, crash, cortisol)
- Avatar assignment rules
- Score capping at 15

## 🎭 Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Color contrast AA compliance
- Screen reader friendly
- Focus management

## 📱 UX Features

- **Progress Tracking**: Visual progress bar with percentage
- **Smooth Transitions**: Framer Motion page transitions
- **Form Validation**: Required fields and email validation
- **Body Scroll Lock**: Prevents background scrolling during quiz
- **Responsive Design**: Mobile-first with desktop optimization

## 🔧 Customization

### Adding New Questions

1. Update `src/data/questions.ts`
2. Add corresponding field to `QuizAnswers` type
3. Update scoring logic in `src/utils/score.ts`

### Modifying Avatars

Edit the `avatars` array in `src/utils/score.ts` to customize:
- Avatar names and descriptions
- Dose recommendations
- Assignment logic

### Styling Changes

Update `tailwind.config.js` for:
- Brand colors
- Font families
- Custom utilities

## 📄 License

This project is proprietary and confidential.

---

**Built for ST8 by Cursor AI** • Measuring brain static in 45 seconds ⚡