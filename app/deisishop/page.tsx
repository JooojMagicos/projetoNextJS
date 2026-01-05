"use client";

import useSWR from "swr";
import Link from "next/link";
import ProductCard from "@/components/deisishop/productCard";
import Cart from "@/components/cart/Cart";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProdutosPage() {
  const { data } = useSWR<Product[]>(
    "https://deisishop.pythonanywhere.com/products/",
    fetcher
  );

  const { addToCart } = useCart();

  return (
    <div className="p-6">
      {/* Header da página */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">DEISI Shop – Produtos</h1>

        <Link
          href="/categorias"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg
                     hover:bg-gray-700 transition"
        >
          Categorias
        </Link>
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            inCart={false}
          />
        ))}
      </div>

      {/* Carrinho */}
      <Cart />
    </div>
  );
}
