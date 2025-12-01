// components/GiantAQI.tsx

import { getHealthMessage } from "@/lib/constants";

interface GiantAQIProps {
  aqi: number;
  city: string;
  updatedTime: string;
}

export default function GiantAQI({ aqi, city, updatedTime }: GiantAQIProps) {
  const health = getHealthMessage(aqi);

  // Format the time nicely
  const timeAgo = getTimeAgo(updatedTime);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* City name */}
      <p className="font-mongolian text-2xl md:text-3xl text-gray-600 mb-4">
        {city}
      </p>

      {/* Giant AQI number with pulsing animation */}
      <div
        className={`${health.color} rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shadow-2xl animate-pulse`}
      >
        <div className="text-center">
          <p className="text-white text-8xl md:text-9xl font-bold leading-none">
            {aqi}
          </p>
          <p className="text-white text-2xl md:text-3xl font-semibold mt-2">
            AQI
          </p>
        </div>
      </div>

      {/* Health status */}
      <div className="mt-8 text-center">
        <p className="font-mongolian text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {health.text}
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          {health.advice}
        </p>
      </div>

      {/* Last updated */}
      <p className="mt-6 text-gray-500 text-sm">{timeAgo} шинэчлэгдсэн</p>
    </div>
  );
}

// Helper function to calculate time ago
function getTimeAgo(timeString: string): string {
  try {
    const updateTime = new Date(timeString);
    const now = new Date();
    const diffMs = now.getTime() - updateTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return "Дөнгөж сая";
    if (diffMins < 60) return `${diffMins} мин өмнө`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} цаг өмнө`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} өдөр өмнө`;
  } catch {
    return "";
  }
}
