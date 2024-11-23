export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-50/80 dark:bg-black/80 backdrop-blur-sm z-50">
      {/* Main spinner container */}
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-green-200 dark:border-green-900 rounded-full"></div>
          <div className="absolute w-full h-full border-4 border-green-500 rounded-full animate-spin border-t-transparent"></div>
        </div>

        {/* Loading text */}
        <div className="text-green-800 dark:text-green-200 text-sm font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
}
