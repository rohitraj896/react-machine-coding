import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
