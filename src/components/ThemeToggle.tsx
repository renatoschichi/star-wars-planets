import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}