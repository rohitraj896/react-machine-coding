import { useState } from "react";

const useCounter = initialValue => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increment, decrement, reset };
};

export default useCounter;
