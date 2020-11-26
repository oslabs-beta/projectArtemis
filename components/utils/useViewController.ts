import { useState } from 'https://esm.sh/react';

const increment = (count: number, setCount: (Number: number) => void) => {
  if (count >= 3) {
    setCount(0);
  } else {
    setCount(count + 1);
  }
};

const decrement = (count: number, setCount: (Number: number) => void) => {
  if (count <= 0) {
    setCount(3);
  } else {
    setCount(count - 1);
  }
};

const useViewController = () => {
  const [count, setCount] = useState(0);

  const countLogic = (action: string | number) => {
    if (action === 'increment') increment(count, setCount);
    else if (action === 'decrement') decrement(count, setCount);
  };

  return [count, countLogic] as const;
};

export default useViewController;
