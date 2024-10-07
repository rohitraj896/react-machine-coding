import { useCallback, useState } from "react";

const useToggle = initialValue => {
  const [toggleState, setToggleState] = useState(initialValue);

  const toggleFunc = useCallback(() => {
    setToggleState(prevState => !prevState);
  }, []);

  return [toggleState, toggleFunc];
};

export default useToggle;
