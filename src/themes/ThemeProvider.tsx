import React, { useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContext = { checked: boolean; theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [checked, setChecked] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem('theme', theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
    setChecked(checked === false ? true : false);
  };

  const color = theme === 'light' ? '#212121' : '#c8c7cc';
  const backgroundColor = theme === 'light' ? '#FFF' : '#212121';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ checked, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
