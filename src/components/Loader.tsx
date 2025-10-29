export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-500">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
      <span className="text-sm font-medium">Loading...</span>
    </div>
  )
}