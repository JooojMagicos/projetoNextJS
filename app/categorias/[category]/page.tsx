"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";
import ProductCard from "@/components/deisishop/productCard";
import { Product } from "@/lib/types";
import Cart from "@/components/cart/Cart";
import { useCart } from "@/context/CartContext";
const fetcher = async (url: string): Promise<Product[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar produtos");
  return res.json();
};

export default function CategoriaProdutosPage() {
  const params = useParams();
  const category = decodeURIComponent(params.category as string);

  const { data, error, isLoading } = useSWR<Product[]>(
    "https://deisishop.pythonanywhere.com/products/",
    fetcher
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-300">
        Carregando produtos...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-500">
        Erro ao carregar produtos
      </div>
    );

  // Filtrar produtos da categoria
  const filteredProducts = data?.filter(
    (product) => product.category === category
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        
        <Link
          href="/categorias"
          className="text-gray-400 hover:text-white transition"
        >
          ← Voltar às categorias
        </Link>

        <h1 className="text-4xl font-bold text-white mt-4 capitalize">
          {category}
        </h1>
        
        <p className="text-gray-400 mt-2">
          {filteredProducts?.length || 0} produtos
        </p>
      </div>

      {/* Grid de produtos */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      ) : (
        <div className="text-center text-gray-400 text-xl mt-20">
          Nenhum produto encontrado nesta categoria.
        </div>
      )}
      <Cart />
    </div>
  );
}
