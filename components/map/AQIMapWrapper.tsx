// components/map/AQIMapWrapper.tsx
// Газрын зургийг зөвхөн client-side дээр ачаалах wrapper

"use client";

import dynamic from "next/dynamic";
import { StationData } from "@/types";

// AQIMap компонентыг dynamic import хийх (server-side rendering-ээс зайлсхийх)
const AQIMap = dynamic(() => import("./AQIMap"), {
  ssr: false, // Server-side дээр render хийхгүй
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-golden mx-auto mb-4"></div>
        <p className="text-gray-500">Газрын зураг ачааллаж байна...</p>
      </div>
    </div>
  ),
});

interface AQIMapWrapperProps {
  stations: StationData[];
}

export default function AQIMapWrapper({ stations }: AQIMapWrapperProps) {
  return <AQIMap stations={stations} />;
}
