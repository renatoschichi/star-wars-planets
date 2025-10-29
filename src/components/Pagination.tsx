type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ current, totalPages, onChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-40"
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded font-medium transition-colors ${
            p === current
              ? 'bg-green-500 text-gray-900 dark:bg-green-400 dark:text-gray-900 font-bold shadow-md shadow-green-500/30'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-40"
      >
        ›
      </button>
    </nav>
  )
}