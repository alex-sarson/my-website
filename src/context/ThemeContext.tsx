import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext<{
  darkMode: boolean;
  toggleMode: () => void;
}>({
  darkMode: false,
  toggleMode: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setDarkMode(savedTheme === 'dark');
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      setDarkMode(prefersDark);
    }
  }, [darkMode]);

  const toggleMode = () => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };