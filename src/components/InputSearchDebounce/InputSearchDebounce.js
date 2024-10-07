import { useState } from "react";

const InputSearchDebounce = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const debounce = (func, delay) => {
    let timeout;

    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedFunction = debounce(value => {
    setDisplayValue(value);
  }, 2000);

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFunction(value);
  };
  return (
    <div>
      <input autoFocus type="text" value={inputValue} onChange={handleChange} />
      <p>Display Value: {displayValue}</p>
    </div>
  );
};

export default InputSearchDebounce;
