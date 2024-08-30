import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Icon } from '@iconify/react/dist/iconify.js';

interface DarkModeSwitcherProps {
  className?: string;
}

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = ({ className = '' }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-[#F9F7EE] dark:bg-black transition-colors duration-150 ${className}`}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Icon icon="ph:sun" width="24" height="24" className='text-light' />
      ) : (
        <Icon icon="ph:moon" width="24" height="24" className='text-dark' />
      )}
    </button>
  );
};

export default DarkModeSwitcher;