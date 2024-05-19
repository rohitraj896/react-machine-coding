import ThemeProvider from "./ThemeProvider";
import ThemeToggler from "./ThemeToggler";

const DarkModeCAPI = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default DarkModeCAPI;
