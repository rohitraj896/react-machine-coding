import { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const handleStartStop = () => {
    setRunning(!running);
  };

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [running]);
  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };
  const formatTime = time => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="App">
      <h1>Stop watch</h1>
      <h2>Time {formatTime(time)}</h2>
      <button onClick={handleStartStop}>
        {running ? "Stop" : "Start"}
      </button>{" "}
      &nbsp;
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
