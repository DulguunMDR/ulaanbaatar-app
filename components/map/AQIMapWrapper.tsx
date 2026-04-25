// components/map/AQIMapWrapper.tsx

"use client";

import dynamic from "next/dynamic";
import { StationData } from "@/types";

const AQIMap = dynamic(() => import("./AQIMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full border-t border-gray-100 flex items-center justify-center"
      style={{ height: "500px" }}
    >
      <p
        className="text-gray-300 uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "9px",
          letterSpacing: "0.14em",
        }}
      >
        Газрын зураг ачааллаж байна
      </p>
    </div>
  ),
});

interface AQIMapWrapperProps {
  stations: StationData[];
}

export default function AQIMapWrapper({ stations }: AQIMapWrapperProps) {
  return <AQIMap stations={stations} />;
}
