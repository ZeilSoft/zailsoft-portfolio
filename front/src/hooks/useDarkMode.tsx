import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'system'
  );

  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const updateTheme = () => {
    const root = window.document.documentElement;
    if (theme === 'dark' || (theme === 'system' && colorScheme.matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    updateTheme();
  }, [theme]);

  useEffect(() => {
    colorScheme.addEventListener('change', updateTheme);
    return () => colorScheme.removeEventListener('change', updateTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return [theme, toggleTheme] as const;
};

export default useDarkMode;