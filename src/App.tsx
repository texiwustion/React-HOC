// src/App.tsx
import React from 'react';
import 'App.css'
import CounterDisplay from './components/CounterDisplay';
import withCounter from './hocs/withCounter';

const EnhancedCounterDisplay = withCounter(CounterDisplay);

const App: React.FC = () => {
  return (
    <div>
      <h1>Counter with HOC</h1>
      <EnhancedCounterDisplay />
    </div>
  );
};

export default App;