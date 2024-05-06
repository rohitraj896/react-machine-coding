import { useState } from "react";

const TypeChecking = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);

    if (isNaN(value)) {
      setInputType("string");
    } else {
      setInputType("number");
    }
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Type: {inputType}</p>
    </div>
  );
};

export default TypeChecking;
