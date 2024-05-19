import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, [theme]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={toggleTheme} style={{ border: "1px solid black" }}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
};

export default ThemeToggler;
