import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Determine initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  // State for theme
  const [theme, setTheme] = useState(getInitialTheme);
  // Apply theme to body using data attribute save to localStorage
  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  }

  // const useTheme = () => useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );

};

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

export const useTheme = () => useContext(ThemeContext);