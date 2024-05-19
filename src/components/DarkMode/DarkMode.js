import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    if (isDarkMode) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme} className="mode-button">
        {" "}
        Switch to {isDarkMode ? "Light" : "Dark"} mode{" "}
      </button>
      <p>This is dark light mode</p>
    </div>
  );
};

export default DarkMode;
