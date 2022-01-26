import useLocalStorage from 'use-local-storage';

interface UseThemeInterface {
  theme: string;
  switchTheme: () => void;
}

const useTheme = (): UseThemeInterface => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return { theme, switchTheme };
};

export default useTheme;
