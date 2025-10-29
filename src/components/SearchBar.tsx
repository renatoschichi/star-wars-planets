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
        className="w-full sm:w-96 p-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  )
}