import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevValue => (prevValue >= 100 ? 100 : prevValue + 10));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex justify-center pt-20 ">
      <progress value={progress} max={100} />
      <span className="ml-2">{progress} %</span>
    </div>
  );
};

export default ProgressBar;
