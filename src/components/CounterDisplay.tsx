// src/components/CounterDisplay.tsx
import React from 'react';
import { CounterProps } from 'hocs/withCounter';

const CounterDisplay: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterDisplay;