import { useState, useEffect } from "react";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState({
    primary: "violet",
    secondary: "fuchsia",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }

    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
    document.documentElement.style.setProperty(
      "--color-primary",
      `var(--${newTheme.primary}-500)`
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      `var(--${newTheme.secondary}-500)`
    );
  };

  return { darkMode, theme, toggleDarkMode, applyTheme };
};

export default useTheme;
