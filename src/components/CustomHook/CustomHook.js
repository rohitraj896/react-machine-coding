import React from "react";
import useToggle from "./useToggle";

const CustomHook = () => {
  const [toggleState, toggleFunc] = useToggle(false);

  return (
    <div>
      <button onClick={toggleFunc}>Switch {toggleState ? "ON" : "OFF"}</button>
    </div>
  );
};

export default CustomHook;
