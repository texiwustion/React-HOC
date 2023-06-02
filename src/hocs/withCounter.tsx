// src/hocs/withCounter.tsx
import React, { useState } from 'react';

export interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function withCounter<P extends CounterProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof CounterProps>> {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
      <WrappedComponent
        {...(props as P)}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
}

export default withCounter;