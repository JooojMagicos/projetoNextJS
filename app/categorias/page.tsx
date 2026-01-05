"use client";

import useSWR from "swr";
import Link from "next/link";
import { Product } from "@/lib/types";

const fetcher = async (url: string): Promise<Product[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar produtos");
  return res.json();
};

const IMAGE_BASE_URL = "https://deisishop.pythonanywhere.com";

export default function CategoriasPage() {
  const { data, error, isLoading } = useSWR<Product[]>(
    "https://deisishop.pythonanywhere.com/products/",
    fetcher
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-300">
        Carregando categorias...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-500">
        Erro ao carregar categorias
      </div>
    );

  // Agrupar produtos por categoria
  const categoryMap = data?.reduce<Record<string, Product>>((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = product; // primeiro produto da categoria
    }
    return acc;
  }, {});

  const categories = Object.entries(categoryMap || {});

  return (
    <div className="min-h-100 bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Categorias
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map(([category, product]) => {
          const imageUrl = `${IMAGE_BASE_URL}${product.image}`;

          return (
            <Link
              key={category}
              href={`categorias/${encodeURIComponent(category)}`}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg
                         hover:shadow-2xl transition-all duration-300"
            >
              {/* Imagem */}
              <div className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={imageUrl}
                  alt={category}
                  className="w-full h-full object-contain p-4
                             group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/default.png";
                  }}
                />
              </div>

              {/* Texto */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-white capitalize">
                  {category}
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  Ver produtos
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
