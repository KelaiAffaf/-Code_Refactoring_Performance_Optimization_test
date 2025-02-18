export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4" role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
