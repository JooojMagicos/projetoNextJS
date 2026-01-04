"use client";

import caracteristicas from "@/app/data/caracteristicas.json";
import Caracteristica from "@/components/caracteristicas/Caracteristicas";

export default function Caracteristicas() {
  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Características do React e Next.js
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caracteristicas.map((item, index) => (
            <Caracteristica
              key={index}
              texto={item.resumo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
