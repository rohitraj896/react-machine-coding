import { useRef } from "react";
import MyInput from "./MyInput";

const ForwardRef = () => {
  const ref = useRef(null);

  const handleFocus = e => {
    e.preventDefault();
    ref.current.focus();
  };
  return (
    <form>
      <MyInput label="Enter name" ref={ref} />
      <button onClick={handleFocus}>Edit</button>
    </form>
  );
};

export default ForwardRef;
