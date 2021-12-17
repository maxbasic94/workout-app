import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContext = { checked: boolean; theme: Theme; toggleTheme: () => void };

function getTestCh(test: string) {
  if (test === 'light') {
    return false;
  } else {
    return true;
  }
}

const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);
const test = localStorage.getItem('theme') as Theme;
const testch = getTestCh(test) as boolean;

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(test);
  const [checked, setChecked] = useState(testch);
  const color = theme === 'light' ? '#212121' : '#c8c7cc';
  const backgroundColor = theme === 'light' ? '#FFF' : '#212121';
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setChecked(checked === false ? true : false);
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  useEffect(() => {
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
  }, [color, backgroundColor]);

  return (
    <ThemeContext.Provider value={{ checked, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
