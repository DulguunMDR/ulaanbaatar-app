// app/loading.tsx

export default function Loading() {
  return (
    <div className="pt-14 md:pt-16 min-h-screen bg-white flex items-center justify-center">
      <div className="grid" style={{ gridTemplateColumns: "32px 1fr" }}>
        {/* Spine placeholder */}
        <div className="border-r border-gray-100" />

        {/* Content */}
        <div className="px-8 md:px-14 py-20">
          <p
            className="text-gray-300 uppercase mb-8"
            style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          >
            Ачаалж байна · Loading
          </p>

          {/* Animated bars */}
          <div className="flex items-end gap-1 h-12 mb-8">
            {[0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gray-200 rounded-full animate-pulse"
                style={{
                  height: `${h * 100}%`,
                  animationDelay: `${i * 80}ms`,
                }}
              />
            ))}
          </div>

          <p
            className="font-normal text-gray-300"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "18px",
            }}
          >
            Улаанбаатар...
          </p>
        </div>
      </div>
    </div>
  );
}
