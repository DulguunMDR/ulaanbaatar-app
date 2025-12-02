// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Loading Spinner (Ачаалалтын дүрс) */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-golden border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text (Ачаалж байна текст) */}
        <p className="font-mongolian text-xl text-gray-600 animate-pulse">
          Ачаалж байна...
        </p>
      </div>
    </div>
  );
}
