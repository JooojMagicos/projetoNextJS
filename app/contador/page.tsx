"use client";

import Contador from "@/components/contador/Contador"

export default function ContadorPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          Contador
        </h1>

        <Contador />
      </div>
    </div>
  );
}
