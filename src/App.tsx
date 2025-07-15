import { useEffect } from 'react';
import { useQuizStore } from './store';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const { currentScreen } = useQuizStore();

  // Lock body scroll while quiz is active
  useEffect(() => {
    if (currentScreen === 'quiz' || currentScreen === 'result') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <Start />;
      case 'quiz':
        return <Quiz />;
      case 'result':
        return <Result />;
      default:
        return <Start />;
    }
  };

  return (
    <div className="font-body">
      {renderScreen()}
    </div>
  );
}

export default App;