import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      // Force dark theme as default
      if (typeof window !== 'undefined') {
        // Clear any existing theme preference to force dark theme
        localStorage.removeItem('theme');
        return true; // Force dark theme
      }
      return true; // Default to dark theme for SSR
    } catch (error) {
      console.error('Error initializing theme:', error);
      return true; // Fallback to dark theme on error
    }
  });

  // Apply theme class on mount and when isDarkMode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      
      // Remove any existing theme classes first
      root.classList.remove('light-theme', 'dark-theme');
      
      // Add the current theme class
      const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
      root.classList.add(themeClass);
      
      // Save the theme preference
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      // For debugging
      console.log('Theme set to:', themeClass);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggling theme. Current mode:', isDarkMode ? 'dark' : 'light');
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      console.log('New theme mode:', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
