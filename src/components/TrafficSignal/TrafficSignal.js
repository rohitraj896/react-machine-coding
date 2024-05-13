import { useEffect, useState } from "react";
import "./TrafficSignal.css";
const TrafficSignal = () => {
  const [signal, setSignal] = useState("red");

  useEffect(() => {
    const timer = setInterval(() => {
      switch (signal) {
        case "red":
          setSignal("yellow");
          break;

        case "yellow":
          setSignal("green");
          break;

        case "green":
          setSignal("red");
          break;

        default:
          break;
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [signal]);

  return (
    <div className="signal">
      <div className={`circle ${signal === "red" ? "red" : ""}`}></div>
      <div className={`circle ${signal === "yellow" ? "yellow" : ""}`}></div>
      <div className={`circle ${signal === "green" ? "green" : ""}`}></div>
    </div>
  );
};

export default TrafficSignal;
