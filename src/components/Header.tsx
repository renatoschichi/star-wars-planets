import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 p-4 sm:flex-row">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide transition-colors hover:text-yellow-500 dark:hover:text-yellow-400"
        >
          Star Wars Planets
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}