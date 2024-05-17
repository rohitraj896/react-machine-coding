import { useEffect, useState } from "react";

const SessionTimeout = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setRedirect(true);
      }, 3000);
    };

    resetTimer();

    const handleActivity = () => resetTimer();

    window.addEventListener("click", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);
  return <div>{redirect ? "Session Timeout" : "Session will finish soon"}</div>;
};

export default SessionTimeout;
