import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
};

export const ThemeProvider = ({ children }) => {
  // Determine initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html> element, save to localStorage
  useEffect(() => {
    // const root = document.documentElement;
    // root.classList.remove("light", "dark");
    // root.classList.add(theme);
    // localStorage.setItem("theme", theme);

    document
      .getElementsByTagName('body')[0]
      .setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );

};

// export const useTheme = () => useContext(ThemeContext);