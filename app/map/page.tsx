// app/map/page.tsx
"use client";

import dynamic from "next/dynamic";

const ViolationMap = dynamic(() => import("@/components/ViolationMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
      Газрын зураг ачааллаж байна...
    </div>
  ),
});

export default function MapPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold mb-1">Замын Хяналт</h1>
        <p className="text-sm text-gray-500 mb-4">
          Замын зөрчлийг мэдээлж, Улаанбаатарыг аюулгүй болгоход хамтдаа
          оролцоцгооё.
        </p>
        <div style={{ height: "80vh" }}>
          <ViolationMap />
        </div>
      </div>
    </main>
  );
}
