type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search planet by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:w-96 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  )
}